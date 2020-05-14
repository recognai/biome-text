import os

from biome.text import Pipeline, VocabularyConfiguration, TrainerConfiguration
from biome.text.helpers import yaml_to_dict

if __name__ == "__main__":
    train = "train.data.yml"
    validation = "validation.data.yml"
    training_folder = "experiment"

    pl = Pipeline.from_yaml(
        "text_classifier.yaml", vocab_path=os.path.join(training_folder, "vocabulary")
    )

    print(pl.predict(text="Header main. This is a test body!!!"))

    trainer_configuration = TrainerConfiguration(**yaml_to_dict("trainer.yml"))
    trainer_configuration.data_bucketing = False
    pl.train(
        output=training_folder,
        trainer=trainer_configuration,
        training=train,
        validation=validation,
        extend_vocab=VocabularyConfiguration(sources=[train, validation]),
        verbose=True,
    )

    trained_pl = Pipeline.from_pretrained(os.path.join(training_folder, "model.tar.gz"))
    trained_pl.predict(text="Header main; This is a test body!!!")
    trained_pl.head.extend_labels(["other"])
    trained_pl.explore(
        explore_id="test-trained", ds_path="validation.data.yml", explain=True
    )

    trainer_configuration.batch_size = 8
    trainer_configuration.data_bucketing = True
    trained_pl.train(
        output="experiment.v2",
        trainer=trainer_configuration,
        training=train,
        validation=validation,
    )

    trained_pl = Pipeline.from_pretrained(os.path.join("experiment.v2", "model.tar.gz"))
    trained_pl.predict(text="Header main. This is a test body!!!")

    pl.head.extend_labels(["yes", "no"])
    pl.explore(ds_path="validation.data.yml")