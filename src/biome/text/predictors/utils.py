from typing import Optional

from allennlp.data import DatasetReader
from allennlp.models import Archive
from allennlp.predictors import Predictor
from allennlp.common.checks import ConfigurationError

from biome.text.predictors import DefaultBasePredictor
import logging

_logger = logging.getLogger(__name__)


def get_predictor_from_archive(
    archive: Archive, predictor_name: Optional[str] = None
) -> Predictor:
    # Matching predictor name with model name
    model_config = archive.config.get("model")
    dataset_reader_config = archive.config.get("dataset_reader")
    predictor_name = predictor_name or model_config.get("type")
    try:
        return Predictor.from_archive(archive, predictor_name)
    except ConfigurationError as e:
        # If there is no corresponding predictor to the model, we use the DefaultBasePredictor
        _logger.warning(f"{e}; Using the 'DefaultBasePredictor'!")
        ds_reader = DatasetReader.from_params(dataset_reader_config)
        return DefaultBasePredictor(archive.model, ds_reader)