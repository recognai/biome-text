(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{389:function(e,s,t){"use strict";t.r(s);var a=t(26),i=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"biome-text-modules-heads-record-classification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-modules-heads-record-classification"}},[e._v("#")]),e._v(" biome.text.modules.heads.record_classification "),t("Badge",{attrs:{text:"Module"}})],1),e._v(" "),t("div"),e._v(" "),t("div"),e._v(" "),t("pre",{staticClass:"title"},[t("h2",{attrs:{id:"recordclassification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recordclassification"}},[e._v("#")]),e._v(" RecordClassification "),t("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),t("pre",{staticClass:"language-python"},[t("code",[e._v("\n"),t("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),t("span",{staticClass:"ident"},[e._v("RecordClassification")]),e._v(" ("),e._v("\n    "),t("span",[e._v("backbone: "),t("a",{attrs:{title:"biome.text.backbone.ModelBackbone",href:"../../backbone.html#biome.text.backbone.ModelBackbone"}},[e._v("ModelBackbone")])]),t("span",[e._v(",")]),e._v("\n    "),t("span",[e._v("pooler: "),t("a",{attrs:{title:"biome.text.modules.specs.allennlp_specs.Seq2VecEncoderSpec",href:"../specs/allennlp_specs.html#biome.text.modules.specs.allennlp_specs.Seq2VecEncoderSpec"}},[e._v("Seq2VecEncoderSpec")])]),t("span",[e._v(",")]),e._v("\n    "),t("span",[e._v("labels: List[str]")]),t("span",[e._v(",")]),e._v("\n    "),t("span",[e._v("record_keys: List[str]")]),t("span",[e._v(",")]),e._v("\n    "),t("span",[e._v("tokens_pooler: Union[biome.text.modules.specs.allennlp_specs.Seq2VecEncoderSpec, NoneType] = None")]),t("span",[e._v(",")]),e._v("\n    "),t("span",[e._v("encoder: Union[biome.text.modules.specs.allennlp_specs.Seq2SeqEncoderSpec, NoneType] = None")]),t("span",[e._v(",")]),e._v("\n    "),t("span",[e._v("feedforward: Union[biome.text.modules.specs.allennlp_specs.FeedForwardSpec, NoneType] = None")]),t("span",[e._v(",")]),e._v("\n    "),t("span",[e._v("multilabel: bool = False")]),t("span",[e._v(",")]),e._v("\n"),t("span",[e._v(")")]),e._v("\n")]),e._v("\n")]),e._v(" "),t("p",[e._v("Task head for data record\nclassification.\nAccepts a variable data inputs and apply featuring over defined record keys.")]),e._v(" "),t("p",[e._v("This head applies a doc2vec architecture from a structured record data input")]),e._v(" "),t("p",[e._v("Initializes internal Module state, shared by both nn.Module and ScriptModule.")]),e._v(" "),t("pre",{staticClass:"title"},[t("h3",{attrs:{id:"ancestors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ancestors"}},[e._v("#")]),e._v(" Ancestors")]),e._v("\n")]),e._v(" "),t("ul",{staticClass:"hlist"},[t("li",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification",href:"doc_classification.html#biome.text.modules.heads.doc_classification.DocumentClassification"}},[e._v("DocumentClassification")])]),e._v(" "),t("li",[t("a",{attrs:{title:"biome.text.modules.heads.classification.defs.ClassificationHead",href:"classification/defs.html#biome.text.modules.heads.classification.defs.ClassificationHead"}},[e._v("ClassificationHead")])]),e._v(" "),t("li",[t("a",{attrs:{title:"biome.text.modules.heads.defs.TaskHead",href:"defs.html#biome.text.modules.heads.defs.TaskHead"}},[e._v("TaskHead")])]),e._v(" "),t("li",[e._v("torch.nn.modules.module.Module")]),e._v(" "),t("li",[e._v("allennlp.common.registrable.Registrable")]),e._v(" "),t("li",[e._v("allennlp.common.from_params.FromParams")])]),e._v(" "),t("dl",[t("pre",{staticClass:"title"},[t("h3",{attrs:{id:"inputs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[e._v("#")]),e._v(" inputs "),t("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),t("dt",[t("div",{staticClass:"language-python extra-class"},[t("pre",{staticClass:"language-python"},[t("code",[e._v("\n"),t("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),t("span",{staticClass:"ident"},[e._v("inputs")]),e._v("("),t("span",[e._v("self) -> Union[List[str], NoneType]")]),e._v("\n")]),e._v("\n")])])]),e._v(" "),t("dd",[t("p",[e._v("The inputs names are determined by configured record keys")])])]),e._v(" "),t("pre",{staticClass:"title"},[t("h3",{attrs:{id:"inherited-members"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inherited-members"}},[e._v("#")]),e._v(" Inherited members")]),e._v("\n")]),e._v(" "),t("ul",{staticClass:"hlist"},[t("li",[t("code",[t("b",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification",href:"doc_classification.html#biome.text.modules.heads.doc_classification.DocumentClassification"}},[e._v("DocumentClassification")])])]),e._v(":\n"),t("ul",{staticClass:"hlist"},[t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification.add_label",href:"classification/defs.html#biome.text.modules.heads.classification.defs.ClassificationHead.add_label"}},[e._v("add_label")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification.decode",href:"classification/defs.html#biome.text.modules.heads.classification.defs.ClassificationHead.decode"}},[e._v("decode")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification.explain_prediction",href:"doc_classification.html#biome.text.modules.heads.doc_classification.DocumentClassification.explain_prediction"}},[e._v("explain_prediction")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification.extend_labels",href:"defs.html#biome.text.modules.heads.defs.TaskHead.extend_labels"}},[e._v("extend_labels")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification.featurize",href:"defs.html#biome.text.modules.heads.defs.TaskHead.featurize"}},[e._v("featurize")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification.forward",href:"defs.html#biome.text.modules.heads.defs.TaskHead.forward"}},[e._v("forward")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification.get_metrics",href:"classification/defs.html#biome.text.modules.heads.classification.defs.ClassificationHead.get_metrics"}},[e._v("get_metrics")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification.labels",href:"defs.html#biome.text.modules.heads.defs.TaskHead.labels"}},[e._v("labels")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification.num_labels",href:"defs.html#biome.text.modules.heads.defs.TaskHead.num_labels"}},[e._v("num_labels")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification.on_vocab_update",href:"defs.html#biome.text.modules.heads.defs.TaskHead.on_vocab_update"}},[e._v("on_vocab_update")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification.register",href:"defs.html#biome.text.modules.heads.defs.TaskHead.register"}},[e._v("register")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.heads.doc_classification.DocumentClassification.task_name",href:"defs.html#biome.text.modules.heads.defs.TaskHead.task_name"}},[e._v("task_name")])])])])])]),e._v(" "),t("div"),e._v(" "),t("pre",{staticClass:"title"},[t("h2",{attrs:{id:"recordclassificationspec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recordclassificationspec"}},[e._v("#")]),e._v(" RecordClassificationSpec "),t("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),t("pre",{staticClass:"language-python"},[t("code",[e._v("\n"),t("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),t("span",{staticClass:"ident"},[e._v("RecordClassificationSpec")]),e._v(" (*args, **kwds)"),e._v("\n")]),e._v("\n")]),e._v(" "),t("p",[e._v("Lazy initialization for document classification head components")]),e._v(" "),t("pre",{staticClass:"title"},[t("h3",{attrs:{id:"ancestors-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ancestors-2"}},[e._v("#")]),e._v(" Ancestors")]),e._v("\n")]),e._v(" "),t("ul",{staticClass:"hlist"},[t("li",[t("a",{attrs:{title:"biome.text.modules.specs.defs.ComponentSpec",href:"../specs/defs.html#biome.text.modules.specs.defs.ComponentSpec"}},[e._v("ComponentSpec")])]),e._v(" "),t("li",[e._v("typing.Generic")]),e._v(" "),t("li",[e._v("allennlp.common.from_params.FromParams")])]),e._v(" "),t("pre",{staticClass:"title"},[t("h3",{attrs:{id:"inherited-members-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inherited-members-2"}},[e._v("#")]),e._v(" Inherited members")]),e._v("\n")]),e._v(" "),t("ul",{staticClass:"hlist"},[t("li",[t("code",[t("b",[t("a",{attrs:{title:"biome.text.modules.specs.defs.ComponentSpec",href:"../specs/defs.html#biome.text.modules.specs.defs.ComponentSpec"}},[e._v("ComponentSpec")])])]),e._v(":\n"),t("ul",{staticClass:"hlist"},[t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.specs.defs.ComponentSpec.compile",href:"../specs/defs.html#biome.text.modules.specs.defs.ComponentSpec.compile"}},[e._v("compile")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.specs.defs.ComponentSpec.config",href:"../specs/defs.html#biome.text.modules.specs.defs.ComponentSpec.config"}},[e._v("config")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.specs.defs.ComponentSpec.from_params",href:"../specs/defs.html#biome.text.modules.specs.defs.ComponentSpec.from_params"}},[e._v("from_params")])])]),e._v(" "),t("li",[t("code",[t("a",{attrs:{title:"biome.text.modules.specs.defs.ComponentSpec.input_dim",href:"../specs/defs.html#biome.text.modules.specs.defs.ComponentSpec.input_dim"}},[e._v("input_dim")])])])])])])])}),[],!1,null,null,null);s.default=i.exports}}]);