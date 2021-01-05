(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{425:function(e,t,s){"use strict";s.r(t);var a=s(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"biome-text-tokenizer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-tokenizer"}},[e._v("#")]),e._v(" biome.text.tokenizer "),s("Badge",{attrs:{text:"Module"}})],1),e._v(" "),s("div"),e._v(" "),s("div"),e._v(" "),s("pre",{staticClass:"title"},[s("h2",{attrs:{id:"tokenizer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tokenizer"}},[e._v("#")]),e._v(" Tokenizer "),s("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),s("pre",{staticClass:"language-python"},[s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("Tokenizer")]),e._v(" (config: TokenizerConfiguration)"),e._v("\n")]),e._v("\n")]),e._v(" "),s("p",[e._v("Pre-processes and tokenizes the input text")]),e._v(" "),s("p",[e._v("Transforms inputs (e.g., a text, a list of texts, etc.) into structures containing "),s("code",[e._v("allennlp.data.Token")]),e._v(" objects.")]),e._v(" "),s("p",[e._v("Use its arguments to configure the first stage of the pipeline (i.e., pre-processing a given set of text inputs.)")]),e._v(" "),s("p",[e._v("Use methods for tokenization depending on the shape of the inputs\n(e.g., records with multiple fields, sentences lists).")]),e._v(" "),s("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),s("dl",[s("dt",[s("strong",[s("code",[e._v("config")])])]),e._v(" "),s("dd",[e._v("A "),s("code",[e._v("TokenizerConfiguration")]),e._v(" object")])]),e._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"subclasses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subclasses"}},[e._v("#")]),e._v(" Subclasses")]),e._v("\n")]),e._v(" "),s("ul",{staticClass:"hlist"},[s("li",[s("a",{attrs:{title:"biome.text.tokenizer.TransformersTokenizer",href:"#biome.text.tokenizer.TransformersTokenizer"}},[e._v("TransformersTokenizer")])])]),e._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"instance-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-variables"}},[e._v("#")]),e._v(" Instance variables")]),e._v("\n")]),e._v(" "),s("dl",[s("dt",{attrs:{id:"biome.text.tokenizer.Tokenizer.config"}},[s("code",{staticClass:"name"},[e._v("var "),s("span",{staticClass:"ident"},[e._v("config")]),e._v(" : 'TokenizerConfiguration'")])]),e._v(" "),s("dd"),e._v(" "),s("dt",{attrs:{id:"biome.text.tokenizer.Tokenizer.nlp"}},[s("code",{staticClass:"name"},[e._v("var "),s("span",{staticClass:"ident"},[e._v("nlp")]),e._v(" : spacy.language.Language")])]),e._v(" "),s("dd")]),e._v(" "),s("dl",[s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"tokenize-text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tokenize-text"}},[e._v("#")]),e._v(" tokenize_text "),s("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("tokenize_text")]),e._v(" ("),e._v("\n  self,\n  text: str,\n)  -> List[List[allennlp.data.tokenizers.token_class.Token]]\n")]),e._v("\n")])])]),e._v(" "),s("dd",[s("p",[e._v("Tokenizes a text string applying sentence segmentation, if enabled")]),e._v(" "),s("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),s("dl",[s("dt",[s("strong",[s("code",[e._v("text")])]),e._v(" : "),s("code",[e._v("str")])]),e._v(" "),s("dd",[e._v("The input text")])]),e._v(" "),s("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),s("p",[e._v("A list of list of "),s("code",[e._v("Token")]),e._v(".")]),e._v(" "),s("dl",[s("dt",[s("code",[e._v("If no sentence segmentation is enabled,")]),e._v(" or "),s("code",[e._v("just one sentence is found in text")])]),e._v(" "),s("dd",[e._v(" ")])]),e._v(" "),s("p",[e._v("the first level list will contain just one element: the tokenized text.")])]),e._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"tokenize-document"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tokenize-document"}},[e._v("#")]),e._v(" tokenize_document "),s("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("tokenize_document")]),e._v(" ("),e._v("\n  self,\n  document: List[str],\n)  -> List[List[allennlp.data.tokenizers.token_class.Token]]\n")]),e._v("\n")])])]),e._v(" "),s("dd",[s("p",[e._v("Tokenizes a document-like structure containing lists of text inputs")]),e._v(" "),s("p",[e._v("Use this to account for hierarchical text structures (e.g., a paragraph)")]),e._v(" "),s("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),s("dl",[s("dt",[s("strong",[s("code",[e._v("document")])]),e._v(" : "),s("code",[e._v("List[str]")])]),e._v(" "),s("dd",[e._v("A "),s("code",[e._v("List")]),e._v(" with text inputs, e.g., paragraphs")])]),e._v(" "),s("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),s("dl",[s("dt",[s("strong",[s("code",[e._v("tokens")])]),e._v(" : "),s("code",[e._v("List[List[Token]]")])]),e._v(" "),s("dd",[e._v(" ")])])]),e._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"tokenize-record"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tokenize-record"}},[e._v("#")]),e._v(" tokenize_record "),s("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("tokenize_record")]),e._v(" ("),e._v("\n  self,\n  record: Dict[str, Any],\n  exclude_record_keys: bool,\n)  -> List[List[allennlp.data.tokenizers.token_class.Token]]\n")]),e._v("\n")])])]),e._v(" "),s("dd",[s("p",[e._v("Tokenizes a record-like structure containing text inputs")]),e._v(" "),s("p",[e._v("Use this to keep information about the record-like data structure as input features to the model.")]),e._v(" "),s("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),s("dl",[s("dt",[s("strong",[s("code",[e._v("record")])]),e._v(" : "),s("code",[e._v("Dict[str, Any]")])]),e._v(" "),s("dd",[e._v("A "),s("code",[e._v("Dict")]),e._v(' with arbitrary "fields" containing text.')]),e._v(" "),s("dt",[s("strong",[s("code",[e._v("exclude_record_keys")])]),e._v(" : "),s("code",[e._v("bool")])]),e._v(" "),s("dd",[e._v("If enabled, exclude tokens related to record key text")])]),e._v(" "),s("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),s("dl",[s("dt",[s("strong",[s("code",[e._v("tokens")])]),e._v(" : "),s("code",[e._v("List[List[Token]]")])]),e._v(" "),s("dd",[e._v("A list of tokenized fields as token list")])])])]),e._v(" "),s("div"),e._v(" "),s("pre",{staticClass:"title"},[s("h2",{attrs:{id:"transformerstokenizer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transformerstokenizer"}},[e._v("#")]),e._v(" TransformersTokenizer "),s("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),s("pre",{staticClass:"language-python"},[s("code",[e._v("\n"),s("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),s("span",{staticClass:"ident"},[e._v("TransformersTokenizer")]),e._v(" (config)"),e._v("\n")]),e._v("\n")]),e._v(" "),s("p",[e._v("This tokenizer uses the pretrained tokenizers from huggingface's transformers library.")]),e._v(" "),s("p",[e._v("This means the output will very likely be word pieces depending on the specified pretrained model.")]),e._v(" "),s("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),s("dl",[s("dt",[s("strong",[s("code",[e._v("config")])])]),e._v(" "),s("dd",[e._v("A "),s("code",[e._v("TokenizerConfiguration")]),e._v(" object")])]),e._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"ancestors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ancestors"}},[e._v("#")]),e._v(" Ancestors")]),e._v("\n")]),e._v(" "),s("ul",{staticClass:"hlist"},[s("li",[s("a",{attrs:{title:"biome.text.tokenizer.Tokenizer",href:"#biome.text.tokenizer.Tokenizer"}},[e._v("Tokenizer")])])]),e._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"instance-variables-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-variables-2"}},[e._v("#")]),e._v(" Instance variables")]),e._v("\n")]),e._v(" "),s("dl",[s("dt",{attrs:{id:"biome.text.tokenizer.TransformersTokenizer.nlp"}},[s("code",{staticClass:"name"},[e._v("var "),s("span",{staticClass:"ident"},[e._v("nlp")]),e._v(" : spacy.language.Language")])]),e._v(" "),s("dd")]),e._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"inherited-members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inherited-members"}},[e._v("#")]),e._v(" Inherited members")]),e._v("\n")]),e._v(" "),s("ul",{staticClass:"hlist"},[s("li",[s("code",[s("b",[s("a",{attrs:{title:"biome.text.tokenizer.Tokenizer",href:"#biome.text.tokenizer.Tokenizer"}},[e._v("Tokenizer")])])]),e._v(":\n"),s("ul",{staticClass:"hlist"},[s("li",[s("code",[s("a",{attrs:{title:"biome.text.tokenizer.Tokenizer.tokenize_document",href:"#biome.text.tokenizer.Tokenizer.tokenize_document"}},[e._v("tokenize_document")])])]),e._v(" "),s("li",[s("code",[s("a",{attrs:{title:"biome.text.tokenizer.Tokenizer.tokenize_record",href:"#biome.text.tokenizer.Tokenizer.tokenize_record"}},[e._v("tokenize_record")])])]),e._v(" "),s("li",[s("code",[s("a",{attrs:{title:"biome.text.tokenizer.Tokenizer.tokenize_text",href:"#biome.text.tokenizer.Tokenizer.tokenize_text"}},[e._v("tokenize_text")])])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);