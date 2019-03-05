import json
import os
import tempfile

from tests import TESTS_BASEPATH
from tests.test_support import DaskSupportTest

FILES_PATH = os.path.join(TESTS_BASEPATH, 'resources/files')

from biome.data.sources.helpers import read_dataset
from biome.data.sinks.helpers import store_dataset


class CsvDatasourceTest(DaskSupportTest):

    def test_read_and_write_csv(self):
        file_path = os.path.join(FILES_PATH, 'dataset_source.csv')

        datasource = read_dataset(
            dict(path=file_path, format='csv')
        )

        tmpfile = tempfile.mkdtemp()
        store_dataset(datasource, dict(path=tmpfile))

        stored_dataset = read_dataset(
            dict(path=os.path.join(tmpfile, '*.part'), format='json')
        )

        stored = stored_dataset.compute()
        read = datasource.compute()

        assert len(stored) == len(read)

        drop_keys = lambda data, keys: {k: v for k, v in data.items() if k not in keys}
        variable_keys = ['resource', 'id']

        for a, b in zip(read, stored):
            assert drop_keys(a, variable_keys) == drop_keys(a, variable_keys)