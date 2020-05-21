(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{416:function(e,t,a){"use strict";a.r(t);var n=a(26),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"biome-text-backbone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-backbone"}},[e._v("#")]),e._v(" biome.text.backbone "),a("Badge",{attrs:{text:"Module"}})],1),e._v(" "),a("div"),e._v(" "),a("div"),e._v(" "),a("pre",{staticClass:"title"},[a("h2",{attrs:{id:"modelbackbone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modelbackbone"}},[e._v("#")]),e._v(" ModelBackbone "),a("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("ModelBackbone")]),e._v(" ("),e._v("\n    "),a("span",[e._v("vocab: allennlp.data.vocabulary.Vocabulary")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("tokenizer: "),a("a",{attrs:{title:"biome.text.tokenizer.Tokenizer",href:"tokenizer.html#biome.text.tokenizer.Tokenizer"}},[e._v("Tokenizer")])]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("featurizer: "),a("a",{attrs:{title:"biome.text.featurizer.InputFeaturizer",href:"featurizer.html#biome.text.featurizer.InputFeaturizer"}},[e._v("InputFeaturizer")])]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("encoder: Union[biome.text.modules.specs.allennlp_specs.Seq2SeqEncoderSpec, NoneType] = None")]),a("span",[e._v(",")]),e._v("\n"),a("span",[e._v(")")]),e._v("\n")]),e._v("\n")]),e._v(" "),a("p",[e._v("The backbone of the model.")]),e._v(" "),a("p",[e._v("It is composed of a tokenizer, featurizer and an encoder.\nThis component of the model can be pretrained and used with different task heads.")]),e._v(" "),a("p",[e._v("Parameters")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("vocab : "),a("code",[e._v("Vocabulary")]),e._v("\nThe vocabulary of the pipeline\ntokenizer : "),a("code",[e._v("Tokenizer")]),e._v("\nTokenizes the input depending on its type (str, List[str], Dict[str, Any])\nfeaturizer : "),a("code",[e._v("InputFeaturizer")]),e._v("\nDefines the input features of the tokens, indexes and embeds them.\nencoder : Encoder\nOutputs an encoded sequence of the tokens")]),e._v(" "),a("p",[e._v("Initializes internal Module state, shared by both nn.Module and ScriptModule.")]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"ancestors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ancestors"}},[e._v("#")]),e._v(" Ancestors")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[e._v("torch.nn.modules.module.Module")])]),e._v(" "),a("dl",[a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"forward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forward"}},[e._v("#")]),e._v(" forward "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("forward")]),e._v(" ("),e._v("\n  self,\n  text: Dict[str, torch.Tensor],\n  mask: torch.Tensor,\n  num_wrapping_dims: int = 0,\n)  -> torch.Tensor\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Applies embedding + encoder layers")])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"featurize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#featurize"}},[e._v("#")]),e._v(" featurize "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("featurize")]),e._v(" ("),e._v("\n  self,\n  record: Union[str, List[str], Dict[str, Any]],\n  to_field: str = 'record',\n  aggregate: bool = False,\n  tokenize: bool = True,\n)  -> allennlp.data.instance.Instance\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Generate a allennlp Instance from a record input.")]),e._v(" "),a("p",[e._v("If aggregate flag is enabled, the resultant instance will contains a single TextField's\nwith all record fields; otherwhise, a ListField of TextFields.")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("record")])]),e._v(" : "),a("code",[e._v("Union[str, List[str], Dict[str, Any]]")])]),e._v(" "),a("dd",[e._v("input data")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("to_field")])]),e._v(" : "),a("code",[e._v("str")])]),e._v(" "),a("dd",[e._v("field name in returned instance")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("aggregate")])]),e._v(" : "),a("code",[e._v("bool")])]),e._v(" "),a("dd",[e._v("set data aggregation flag")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("tokenize")])]),e._v(" : "),a("code",[e._v("bool")])]),e._v(" "),a("dd",[e._v("If disabled, skip tokenization phase, and pass record data as tokenized token list.")])]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("instance")])]),e._v(" : "),a("code",[e._v("Instance")])]),e._v(" "),a("dd",[e._v(" ")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);