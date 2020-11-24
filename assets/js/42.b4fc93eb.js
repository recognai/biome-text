(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{407:function(t,a,i){"use strict";i.r(a);var e=i(26),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"biome-text-modules-heads-classification-doc-classification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-modules-heads-classification-doc-classification"}},[t._v("#")]),t._v(" biome.text.modules.heads.classification.doc_classification "),i("Badge",{attrs:{text:"Module"}})],1),t._v(" "),i("div"),t._v(" "),i("div"),t._v(" "),i("pre",{staticClass:"title"},[i("h2",{attrs:{id:"documentclassification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#documentclassification"}},[t._v("#")]),t._v(" DocumentClassification "),i("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),i("pre",{staticClass:"language-python"},[i("code",[t._v("\n"),i("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),i("span",{staticClass:"ident"},[t._v("DocumentClassification")]),t._v(" ("),t._v("\n    "),i("span",[t._v("backbone: "),i("a",{attrs:{title:"biome.text.backbone.ModelBackbone",href:"../../../backbone.html#biome.text.backbone.ModelBackbone"}},[t._v("ModelBackbone")])]),i("span",[t._v(",")]),t._v("\n    "),i("span",[t._v("labels: List[str]")]),i("span",[t._v(",")]),t._v("\n    "),i("span",[t._v("tokens_pooler: Union["),i("a",{attrs:{title:"biome.text.modules.configuration.allennlp_configuration.Seq2VecEncoderConfiguration",href:"../../configuration/allennlp_configuration.html#biome.text.modules.configuration.allennlp_configuration.Seq2VecEncoderConfiguration"}},[t._v("Seq2VecEncoderConfiguration")]),t._v(", NoneType] = None")]),i("span",[t._v(",")]),t._v("\n    "),i("span",[t._v("sentences_encoder: Union["),i("a",{attrs:{title:"biome.text.modules.configuration.allennlp_configuration.Seq2SeqEncoderConfiguration",href:"../../configuration/allennlp_configuration.html#biome.text.modules.configuration.allennlp_configuration.Seq2SeqEncoderConfiguration"}},[t._v("Seq2SeqEncoderConfiguration")]),t._v(", NoneType] = None")]),i("span",[t._v(",")]),t._v("\n    "),i("span",[t._v("sentences_pooler: "),i("a",{attrs:{title:"biome.text.modules.configuration.allennlp_configuration.Seq2VecEncoderConfiguration",href:"../../configuration/allennlp_configuration.html#biome.text.modules.configuration.allennlp_configuration.Seq2VecEncoderConfiguration"}},[t._v("Seq2VecEncoderConfiguration")]),t._v(" = None")]),i("span",[t._v(",")]),t._v("\n    "),i("span",[t._v("feedforward: Union["),i("a",{attrs:{title:"biome.text.modules.configuration.allennlp_configuration.FeedForwardConfiguration",href:"../../configuration/allennlp_configuration.html#biome.text.modules.configuration.allennlp_configuration.FeedForwardConfiguration"}},[t._v("FeedForwardConfiguration")]),t._v(", NoneType] = None")]),i("span",[t._v(",")]),t._v("\n    "),i("span",[t._v("multilabel: bool = False")]),i("span",[t._v(",")]),t._v("\n"),i("span",[t._v(")")]),t._v("\n")]),t._v("\n")]),t._v(" "),i("p",[t._v("Task head for document text classification. It's quite similar to text\nclassification but including the doc2vec transformation layers")]),t._v(" "),i("p",[t._v("Initializes internal Module state, shared by both nn.Module and ScriptModule.")]),t._v(" "),i("pre",{staticClass:"title"},[i("h3",{attrs:{id:"ancestors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ancestors"}},[t._v("#")]),t._v(" Ancestors")]),t._v("\n")]),t._v(" "),i("ul",{staticClass:"hlist"},[i("li",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead",href:"classification.html#biome.text.modules.heads.classification.classification.ClassificationHead"}},[t._v("ClassificationHead")])]),t._v(" "),i("li",[i("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskHead",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead"}},[t._v("TaskHead")])]),t._v(" "),i("li",[t._v("torch.nn.modules.module.Module")]),t._v(" "),i("li",[t._v("allennlp.common.registrable.Registrable")]),t._v(" "),i("li",[t._v("allennlp.common.from_params.FromParams")])]),t._v(" "),i("pre",{staticClass:"title"},[i("h3",{attrs:{id:"subclasses"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#subclasses"}},[t._v("#")]),t._v(" Subclasses")]),t._v("\n")]),t._v(" "),i("ul",{staticClass:"hlist"},[i("li",[i("a",{attrs:{title:"biome.text.modules.heads.classification.record_classification.RecordClassification",href:"record_classification.html#biome.text.modules.heads.classification.record_classification.RecordClassification"}},[t._v("RecordClassification")])])]),t._v(" "),i("dl",[i("pre",{staticClass:"title"},[i("h3",{attrs:{id:"explain-prediction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#explain-prediction"}},[t._v("#")]),t._v(" explain_prediction "),i("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),i("dt",[i("div",{staticClass:"language-python extra-class"},[i("pre",{staticClass:"language-python"},[i("code",[t._v("\n"),i("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),i("span",{staticClass:"ident"},[t._v("explain_prediction")]),t._v(" ("),t._v("\n  self,\n  prediction: Dict[str, "),i("built-in",{attrs:{function:"",array:""}},[t._v("],\n  instance: allennlp.data.instance.Instance,\n  n_steps: int,\n)  -> Dict[str, Any]\n")])],1),t._v("\n")])])]),t._v(" "),i("dd",[i("p",[t._v("Here, we must apply transformations for manage ListFields tensors shapes")])])]),t._v(" "),i("pre",{staticClass:"title"},[i("h3",{attrs:{id:"inherited-members"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#inherited-members"}},[t._v("#")]),t._v(" Inherited members")]),t._v("\n")]),t._v(" "),i("ul",{staticClass:"hlist"},[i("li",[i("code",[i("b",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead",href:"classification.html#biome.text.modules.heads.classification.classification.ClassificationHead"}},[t._v("ClassificationHead")])])]),t._v(":\n"),i("ul",{staticClass:"hlist"},[i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.add_label",href:"classification.html#biome.text.modules.heads.classification.classification.ClassificationHead.add_label"}},[t._v("add_label")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.decode",href:"classification.html#biome.text.modules.heads.classification.classification.ClassificationHead.decode"}},[t._v("decode")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.extend_labels",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.extend_labels"}},[t._v("extend_labels")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.featurize",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.featurize"}},[t._v("featurize")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.forward",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.forward"}},[t._v("forward")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.get_metrics",href:"classification.html#biome.text.modules.heads.classification.classification.ClassificationHead.get_metrics"}},[t._v("get_metrics")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.inputs",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.inputs"}},[t._v("inputs")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.labels",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.labels"}},[t._v("labels")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.num_labels",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.num_labels"}},[t._v("num_labels")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.on_vocab_update",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.on_vocab_update"}},[t._v("on_vocab_update")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead.register",href:"../task_head.html#biome.text.modules.heads.task_head.TaskHead.register"}},[t._v("register")])])])])])]),t._v(" "),i("div"),t._v(" "),i("pre",{staticClass:"title"},[i("h2",{attrs:{id:"documentclassificationconfiguration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#documentclassificationconfiguration"}},[t._v("#")]),t._v(" DocumentClassificationConfiguration "),i("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),i("pre",{staticClass:"language-python"},[i("code",[t._v("\n"),i("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),i("span",{staticClass:"ident"},[t._v("DocumentClassificationConfiguration")]),t._v(" (*args, **kwds)"),t._v("\n")]),t._v("\n")]),t._v(" "),i("p",[t._v("Lazy initialization for document classification head components")]),t._v(" "),i("pre",{staticClass:"title"},[i("h3",{attrs:{id:"ancestors-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ancestors-2"}},[t._v("#")]),t._v(" Ancestors")]),t._v("\n")]),t._v(" "),i("ul",{staticClass:"hlist"},[i("li",[i("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration",href:"../../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration"}},[t._v("ComponentConfiguration")])]),t._v(" "),i("li",[t._v("typing.Generic")]),t._v(" "),i("li",[t._v("allennlp.common.from_params.FromParams")])]),t._v(" "),i("pre",{staticClass:"title"},[i("h3",{attrs:{id:"inherited-members-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#inherited-members-2"}},[t._v("#")]),t._v(" Inherited members")]),t._v("\n")]),t._v(" "),i("ul",{staticClass:"hlist"},[i("li",[i("code",[i("b",[i("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration",href:"../../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration"}},[t._v("ComponentConfiguration")])])]),t._v(":\n"),i("ul",{staticClass:"hlist"},[i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration.compile",href:"../../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration.compile"}},[t._v("compile")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration.config",href:"../../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration.config"}},[t._v("config")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration.from_params",href:"../../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration.from_params"}},[t._v("from_params")])])]),t._v(" "),i("li",[i("code",[i("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration.input_dim",href:"../../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration.input_dim"}},[t._v("input_dim")])])])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);