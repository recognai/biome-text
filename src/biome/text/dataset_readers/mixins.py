import logging
from typing import Optional, Union, Any, Dict

from allennlp.data import Tokenizer, TokenIndexer
from allennlp.data.fields import ListField, TextField
from allennlp.data.tokenizers import WordTokenizer


class CacheableMixin(object):
    """
        This ``CacheableMixin`` allow in memory cache mechanism
    """

    _cache = dict()

    @staticmethod
    def get(key) -> Optional[Any]:
        """ Get a value from cache by key """
        return CacheableMixin._cache.get(key, None)

    @staticmethod
    def set(key, data):
        """ Set an cache entry """
        CacheableMixin._cache[key] = data


class TextFieldBuilderMixin(object):
    """
        This ``TextFieldBuilderMixin`` build ``Fields`` for inputs in classification problems

        Parameters
        ----------

        tokenizer
            The allennlp ``Tokenizer`` for text tokenization in ``TextField``

        token_indexers
            The allennlp ``TokenIndexer`` dictionary for ``TextField`` configuration

        as_text_field
            Flag indicating how to generate the ``Field``. If enabled, the output Field
            will a ``TextField`` with text concatenation, else the result field will be
            a ``ListField`` of ``TextField``, one per input data value
    """

    def __init__(
        self,
        tokenizer: Tokenizer = None,
        token_indexers: Dict[str, TokenIndexer] = None,
        as_text_field: bool = False,
    ):
        self._tokenizer = tokenizer or WordTokenizer()
        self._token_indexers = token_indexers
        self._as_text_field = as_text_field
        self._logger = logging.getLogger(self.__class__.__name__)

    @staticmethod
    def _value_as_string(value):
        # TODO evaluate field value type for stringfy properly
        return str(value)

    def build_textfield(
        self, data: Union[str, list, dict]
    ) -> Optional[Union[ListField, TextField]]:
        """Embeds the record in a TextField or ListField depending on the _as_text_field parameter.

        Parameters
        ----------
        data
            Record to be embedded.

        Returns
        -------
        field
            Either a TextField or a ListField containing the record.
            Returns None if `data` is not a str or a dict.
        """
        if not isinstance(data, (str, list, dict)):
            self._logger.warning(
                f"Cannot process data example {data} of type {type(data)}"
            )
            return None

        if isinstance(data, str):
            data = [data]

        if isinstance(data, dict):
            data = data.values()

        if self._as_text_field:
            text = " ".join(map(str, data))
            return TextField(
                self._tokenizer.tokenize(self._value_as_string(text)),
                self._token_indexers,
            )

        # text_fields of different lengths are allowed, they will be sorted by the trainer and padded adequately
        text_fields = [
            TextField(
                self._tokenizer.tokenize(self._value_as_string(value)),
                self._token_indexers,
            )
            for value in data
            if value
        ]

        return ListField(text_fields)