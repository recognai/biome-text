import copy
from typing import Any, Dict, Iterable, List

import spacy
from allennlp.common import Params
from allennlp.common.util import get_spacy_model
from allennlp.data import Token
from spacy.language import Language
from spacy.tokens.doc import Doc

from biome.text.text_cleaning import DefaultTextCleaning, TextCleaning


class Tokenizer:
    """Pre-processes and tokenizes the input text
    
    Transforms inputs (e.g., a text, a list of texts, etc.) into structures containing `allennlp.data.Token` objects.
    
    Use its arguments to configure the first stage of the pipeline (i.e., pre-processing a given set of text inputs.)
    
    Use methods for tokenization depending on the shape of the inputs
    (e.g., records with multiple fields, sentences lists).
    
    Parameters
    ----------
    config
        A `TokenizerConfiguration` object
    """

    __SPACY_SENTENCIZER__ = "sentencizer"

    def __init__(self, config: "biome.text.configuration.TokenizerConfiguration"):
        _fetch_spacy_model(config.lang)
        self.lang = config.lang

        self._keep_spacy_tokens = config.use_spacy_tokens
        self._remove_spaces = config.remove_space_tokens
        self._end_tokens = config.end_tokens or []
        self._start_tokens = config.start_tokens or []
        # We reverse the tokens here because we're going to insert them with `insert(0)` later;
        # this makes sure they show up in the right order.
        self._start_tokens.reverse()
        self.max_nr_of_sentences = config.max_nr_of_sentences
        self.segment_sentences = config.segment_sentences
        self.max_sequence_length = config.max_sequence_length

        self.__nlp__ = get_spacy_model(self.lang, pos_tags=True, ner=False, parse=False)
        if self.segment_sentences and not self.__nlp__.has_pipe(
            self.__SPACY_SENTENCIZER__
        ):
            sentencizer = self.__nlp__.create_pipe(self.__SPACY_SENTENCIZER__)
            self.__nlp__.add_pipe(sentencizer)

        if config.text_cleaning is None:
            self.text_cleaning = DefaultTextCleaning()
        else:
            self.text_cleaning = TextCleaning.from_params(
                Params(copy.deepcopy(config.text_cleaning))
            )

    @property
    def nlp(self) -> Language:
        return self.__nlp__

    def tokenize_text(self, text: str) -> List[List[Token]]:
        """
        Tokenizes a text string applying sentence segmentation, if enabled

        Parameters
        ----------
        text: `str`
            The input text

        Returns
        -------
        A list of list of `Token`.

        If no sentence segmentation is enabled, or just one sentence is found in text
        the first level list will contain just one element: the tokenized text.

        """
        return self.tokenize_document([text])

    def _tokenize(self, text: str) -> List[Token]:
        """Tokenizes an input text string

        The simplest case where your input is just a `str`. For a text tokenization with
        sentence segmentation, see `tokenize_text`


        Parameters
        ----------
        text: `str`
            The input text
        Returns
        -------
        tokens: `List[Token]`

        """
        tokens = self.nlp(text[: self.max_sequence_length])
        return self._sanitize(_remove_spaces(tokens) if self._remove_spaces else tokens)

    def tokenize_document(self, document: List[str]) -> List[List[Token]]:
        """ Tokenizes a document-like structure containing lists of text inputs

        Use this to account for hierarchical text structures (e.g., a paragraph)

        Parameters
        ----------
        document: `List[str]`
            A `List` with text inputs, e.g., paragraphs

        Returns
        -------
        tokens: `List[List[Token]]`
        """
        texts = [self.text_cleaning(text) for text in document]
        if not self.segment_sentences:
            return list(map(self._tokenize, texts[: self.max_nr_of_sentences]))
        sentences = [
            sentence.string.strip()
            for doc in self.__nlp__.pipe(texts)
            for sentence in doc.sents
        ]
        return list(map(self._tokenize, sentences[: self.max_nr_of_sentences]))

    def tokenize_record(
        self, record: Dict[str, Any], exclude_record_keys: bool
    ) -> List[List[Token]]:
        """ Tokenizes a record-like structure containing text inputs

        Use this to keep information about the record-like data structure as input features to the model.

        Parameters
        ----------
        record: `Dict[str, Any]`
            A `Dict` with arbitrary "fields" containing text.
        exclude_record_keys: `bool`
            If enabled, exclude tokens related to record key text

        Returns
        -------
        tokens: `List[List[Token]]`
            A list of tokenized fields as token list
        """
        data = self._sanitize_dict(record)
        if exclude_record_keys:
            return [
                sentence
                for key, value in data.items()
                for sentence in self.tokenize_text(value)
            ]

        return [
            tokenized_key + sentence
            for key, value in data.items()
            for tokenized_key in [self._tokenize(key)]
            for sentence in self.tokenize_text(value)
        ]

    def _value_as_string(self, value: Any) -> str:
        """Converts a value data into its string representation"""
        if isinstance(value, str):
            return value
        if isinstance(value, dict):
            return self._value_as_string(value.values())
        if isinstance(value, Iterable):
            return " ".join(map(self._value_as_string, value))
        return str(value)

    def _sanitize_dict(self, data: Dict[str, Any]) -> Dict[str, str]:
        """Transforms an data dictionary into a dictionary of strings values"""
        return {key: self._value_as_string(value) for key, value in data.items()}

    def _sanitize(self, tokens: List[spacy.tokens.Token]) -> List[Token]:
        """
        Converts spaCy tokens to allennlp tokens. Is a no-op if
        keep_spacy_tokens is True
        """
        if not self._keep_spacy_tokens:
            tokens = [
                Token(
                    token.text,
                    token.idx,
                    token.idx + len(token.text),
                    token.lemma_,
                    token.pos_,
                    token.tag_,
                    token.dep_,
                    token.ent_type_,
                )
                for token in tokens
            ]
        for start_token in self._start_tokens:
            tokens.insert(0, Token(start_token, 0))
        for end_token in self._end_tokens:
            tokens.append(Token(end_token, -1))
        return tokens


def _fetch_spacy_model(lang: str):
    # Allennlp get_spacy_model method works only for fully named models (en_core_web_sm) but no
    # for already linked named (en, es)
    # This is a workaround for mitigate those kind of errors. Just loading one more time, it's ok.
    # See https://github.com/allenai/allennlp/issues/4201
    import spacy

    try:
        spacy.load(lang, disable=["vectors", "textcat", "tagger" "parser" "ner"])
    except OSError:
        spacy.cli.download(lang)


def _remove_spaces(tokens: List[spacy.tokens.Token]) -> List[spacy.tokens.Token]:
    return [token for token in tokens if not token.is_space]
