import os
import tempfile

from biome.data.sinks.helpers import store_dataset
from biome.data.sources import DataSource

from tests import TESTS_BASEPATH
from tests.test_support import DaskSupportTest

FILES_PATH = os.path.join(TESTS_BASEPATH, "resources/files")


class JsonDatasourceTest(DaskSupportTest):
    def test_read_and_write_json(self):
        file_path = os.path.join(FILES_PATH, "dataset_source.jsonl")

        datasource = DataSource(format="json", path=file_path)

        tmpfile = tempfile.mkdtemp()
        store_dataset(datasource.to_bag(), dict(path=tmpfile))

        stored_dataset = DataSource(format="json", path=os.path.join(tmpfile, "*.part"))

        stored = stored_dataset.to_bag().compute()
        read = datasource.to_bag().compute()

        assert len(stored) == len(read)

        drop_keys = lambda data, keys: {k: v for k, v in data.items() if k not in keys}
        variable_keys = ["resource", "id"]

        for a, b in zip(read, stored):
            assert drop_keys(a, variable_keys) == drop_keys(a, variable_keys)