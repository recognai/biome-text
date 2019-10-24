import logging
import os
import re
from tempfile import mktemp
from typing import cast, Type, Optional

import allennlp
import yaml
from allennlp.common import JsonDict, Params
from allennlp.common.checks import ConfigurationError
from allennlp.data import DatasetReader, Instance
from allennlp.models import Archive, Model
from allennlp.predictors import Predictor
from overrides import overrides

from biome.text.dataset_readers.datasource_reader import DataSourceReader
from biome.text.models import load_archive
from biome.text.predictors import get_predictor_from_archive


class Pipeline(Predictor):
    """
    This class combine the different allennlp components that make possible a ``Pipeline`,
    understanding as a model, not only the definition of the neural network architecture,
    but also the transformation of the input data to Instances and the evaluation of
    predictions on new data

    The base idea is that this class contains the model and the dataset reader (as a predictor does),
    and allow operations of learning, predict and save

    Parameters
    ----------
    model`
        The class:~allennlp.models.Model architecture

    reader
        The class:allennlp.data.DatasetReader
    """

    _logger = logging.getLogger(__name__)

    # Disable allennlp logging
    logging.getLogger("elasticsearch").setLevel(logging.WARNING)

    def __init__(self, model: allennlp.models.model.Model, reader: DataSourceReader):
        super(Pipeline, self).__init__(model, reader)
        self.__config = {}

    @classmethod
    def reader_class(cls) -> Type[DataSourceReader]:
        """
        Must be implemented by subclasses

        Returns
        -------
            The class of ``DataSourceReader`` used in the model instance
        """
        raise NotImplementedError

    @classmethod
    def model_class(cls) -> Type[allennlp.models.Model]:
        """
        Must be implemented by subclasses

        Returns
        -------
            The class of ``allennlp.models.Model`` used in the model instance
        """
        raise NotImplementedError

    @property
    def reader(self) -> DataSourceReader:
        """
        The data reader (AKA ``DatasetReader``)

        Returns
        -------
            The configured ``DatasetReader``

        """
        return self._dataset_reader

    @property
    def model(self) -> allennlp.models.Model:
        """
        The model (AKA ``allennlp.models.Model``)

        Returns
        -------
            The configured ``allennlp.models.Model``
        """
        return self._model

    @property
    def name(self) -> str:
        """
        Get the pipeline name

        Returns
        -------
            The fully qualified pipeline class name
        """
        return f"{self.__module__}.{self.__class__.__name__}"

    @property
    def allennlp_config(self) -> dict:
        """
        A representation of reader and model in a properties defined way
        as allennlp does

        Returns
        -------
            The configuration dictionary
        """
        return self.__config.copy()

    def predict(self, **inputs) -> dict:
        return self.predict_json(inputs)

    @classmethod
    def load(cls, path: str, **kwargs) -> "Pipeline":
        name = None
        # TODO resolve load from Pipeline.class. By now, you must decorate your own
        #  pipeline classes as an :class:~`allennlp.predictors.Predictor`
        if cls != Pipeline:
            name = cls.__registrable_name(cls)
            # TODO From now, we cannot pass the fully qualified class name as type parameter. We have an open
            #  PR for that. See (https://github.com/allenai/allennlp/pull/3344)
            #  So, we register the required components by allennlp before load them
            Predictor.register(name, exist_ok=True)(cls)
            Model.register(name, exist_ok=True)(cls.model_class())
            DatasetReader.register(name, exist_ok=True)(cls.reader_class())

        archive = load_archive(path, **kwargs)
        predictor = get_predictor_from_archive(archive, predictor_name=name)

        return cast(Pipeline, predictor)

    @classmethod
    def __registrable_name(cls, _class: Type["Pipeline"]) -> str:
        return cls.__to_snake_case(_class.__name__)

    @overrides
    def _json_to_instance(self, json_dict: JsonDict) -> Instance:
        return self.reader.text_to_instance_with_data_filter(json_dict)

    @overrides
    def predict_json(self, inputs: JsonDict) -> JsonDict:
        from allennlp.common.util import sanitize

        instance = self._json_to_instance(inputs)
        output = self.model.forward_on_instance(instance)
        return sanitize(output)

    @staticmethod
    def __to_snake_case(name):
        """
        A helper method for convert a CamelCase name into a snake_case name

        Parameters
        ----------
        name
            The original name

        Returns
        -------
            The corresponding snake_case name

        """
        s1 = re.sub(r"(.)([A-Z][a-z]+)", r"\1_\2", name)
        return re.sub(r"([a-z0-9])([A-Z])", r"\1_\2", s1).lower()

    @staticmethod
    def yaml_to_dict(filepath: str):
        with open(filepath) as yaml_content:
            config = yaml.safe_load(yaml_content)
        return config

    @classmethod
    def from_config(cls, path: str) -> "Pipeline":
        """
        Read a ``Pipeline`` subclass instance by reading a configuration file

        Parameters
        ----------
        path
            The configuration file path

        Returns
        -------
            An instance of ``Pipeline`` with no architecture, since the internal
            ``allennlp.models.Model`` needs a Vocabulary for the initialization

        """
        data = cls.yaml_to_dict(path)
        # backward compatibility
        if data.get("topology"):
            data = data["topology"]

        pipeline_class = cls.__get_pipeline_class(data)
        name = cls.__registrable_name(pipeline_class)

        # Creating an empty pipeline
        model = pipeline_class(
            model=None,
            reader=cast(
                DataSourceReader,
                DatasetReader.from_params(Pipeline.__get_reader_params(data, name)),
            ),
        )
        # Include pipeline configuration
        # TODO This configuration will fail if the reader and model are registered with other names than the calculated
        #  registrable_name
        model.__config = {
            "dataset_reader": Pipeline.__get_reader_params(data, name).as_dict(),
            "model": Pipeline.__get_model_params(data, name).as_dict(),
        }

        return model

    @classmethod
    def __get_reader_params(cls, data: dict, name: Optional[str] = None) -> Params:
        config = data["pipeline"].copy()
        if name:
            config["type"] = name

        return Params(config)

    @classmethod
    def __get_model_params(cls, data: dict, name: Optional[str] = None) -> Params:
        config = data["architecture"].copy()
        if name:
            config["type"] = name

        return Params(config)

    @classmethod
    def __get_pipeline_class(cls, config: dict) -> Type["Pipeline"]:
        """
        If we don't known the target class to load, we need keep class info in data configuration.

        Parameters
        ----------
        config

        Returns
        -------
            The real ``Pipeline`` subclass to be instantiated
        """
        if cls != Pipeline:
            return cls

        class_name = config.get("class", cls.__get_model_params(config).get("type"))
        if not class_name:
            raise ConfigurationError(
                "Cannot load the pipeline: No pipeline class found in file."
                "\nPlease, include the class property in your file or try to load configuration "
                "with your class directly: MyPipeline.from_config(config_file)"
            )

        the_class = Predictor.by_name(class_name)
        return cast(Type[Pipeline], the_class)

    def learn(self, trainer: str, train: str, validation: str, output: str):
        """
        Launch a learning process for loaded model configuration.

        Once the learn process finish, the model is ready for make predictions

        Parameters
        ----------

        trainer
            The trainer file path
        train
            The train datasource file path

        validation
            The validation datasource file path

        output
            The learn output path

        """
        from biome.text.commands.learn import learn

        spec = mktemp()
        with open(spec, "wt") as file:
            yaml.safe_dump(self.allennlp_config, file)

        _ = learn.learn(
            output=output,
            model_spec=spec,
            trainer_path=trainer,
            train_cfg=train,
            validation_cfg=validation,
        )

        model = self.load(os.path.join(output, "model.tar.gz"))

        self._model = model.model
        self._dataset_reader = model.reader

    @classmethod
    def _load_callback(cls, archive: Archive, reader: DatasetReader):

        """
        This method allow manage custom loads when the general way doesn't work

        Parameters
        ----------
        archive
            The loaded archive
        reader
            The corresponding DatasetReader

        Returns
        -------

        """
        raise ConfigurationError(
            "Cannot load sequence classifier without pipeline configuration"
        )