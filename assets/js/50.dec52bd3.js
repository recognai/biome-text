(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{397:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"biome-text-modules-heads-task-head"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-modules-heads-task-head"}},[t._v("#")]),t._v(" biome.text.modules.heads.task_head "),s("Badge",{attrs:{text:"Module"}})],1),t._v(" "),s("div"),t._v(" "),s("div"),t._v(" "),s("pre",{staticClass:"title"},[s("h2",{attrs:{id:"taskoutput"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taskoutput"}},[t._v("#")]),t._v(" TaskOutput "),s("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("TaskOutput")]),t._v(" ("),t._v("\n    "),s("span",[t._v("logits: torch.Tensor = None")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("loss: Union[torch.Tensor, NoneType] = None")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("**extra_data")]),s("span",[t._v(",")]),t._v("\n"),s("span",[t._v(")")]),t._v("\n")]),t._v("\n")]),t._v(" "),s("p",[t._v("Task output data class")]),t._v(" "),s("p",[t._v("A task output will contains almost the logits and probs properties")]),t._v(" "),s("dl",[s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"as-dict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#as-dict"}},[t._v("#")]),t._v(" as_dict "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("as_dict")]),t._v("("),s("span",[t._v("self) -> Dict[str, torch.Tensor]")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Dict representation of task output")])])]),t._v(" "),s("div"),t._v(" "),s("pre",{staticClass:"title"},[s("h2",{attrs:{id:"taskname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taskname"}},[t._v("#")]),t._v(" TaskName "),s("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("TaskName")]),t._v(" ("),t._v("\n    "),s("span",[t._v("value")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("names=None")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("*")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("module=None")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("qualname=None")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("type=None")]),s("span",[t._v(",")]),t._v("\n    "),s("span",[t._v("start=1")]),s("span",[t._v(",")]),t._v("\n"),s("span",[t._v(")")]),t._v("\n")]),t._v("\n")]),t._v(" "),s("p",[t._v("The task name enum structure")]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"ancestors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ancestors"}},[t._v("#")]),t._v(" Ancestors")]),t._v("\n")]),t._v(" "),s("ul",{staticClass:"hlist"},[s("li",[t._v("enum.Enum")])]),t._v(" "),s("div"),t._v(" "),s("pre",{staticClass:"title"},[s("h2",{attrs:{id:"taskhead"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taskhead"}},[t._v("#")]),t._v(" TaskHead "),s("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("TaskHead")]),t._v(" (backbone: "),s("a",{attrs:{title:"biome.text.backbone.ModelBackbone",href:"../../backbone.html#biome.text.backbone.ModelBackbone"}},[t._v("ModelBackbone")]),t._v(")"),t._v("\n")]),t._v("\n")]),t._v(" "),s("p",[t._v("Base task head class")]),t._v(" "),s("p",[t._v("Initializes internal Module state, shared by both nn.Module and ScriptModule.")]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"ancestors-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ancestors-2"}},[t._v("#")]),t._v(" Ancestors")]),t._v("\n")]),t._v(" "),s("ul",{staticClass:"hlist"},[s("li",[t._v("torch.nn.modules.module.Module")]),t._v(" "),s("li",[t._v("allennlp.common.registrable.Registrable")]),t._v(" "),s("li",[t._v("allennlp.common.from_params.FromParams")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"subclasses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subclasses"}},[t._v("#")]),t._v(" Subclasses")]),t._v("\n")]),t._v(" "),s("ul",{staticClass:"hlist"},[s("li",[s("a",{attrs:{title:"biome.text.modules.heads.classification.classification.ClassificationHead",href:"classification/classification.html#biome.text.modules.heads.classification.classification.ClassificationHead"}},[t._v("ClassificationHead")])]),t._v(" "),s("li",[s("a",{attrs:{title:"biome.text.modules.heads.language_modelling.LanguageModelling",href:"language_modelling.html#biome.text.modules.heads.language_modelling.LanguageModelling"}},[t._v("LanguageModelling")])]),t._v(" "),s("li",[s("a",{attrs:{title:"biome.text.modules.heads.token_classification.TokenClassification",href:"token_classification.html#biome.text.modules.heads.token_classification.TokenClassification"}},[t._v("TokenClassification")])])]),t._v(" "),s("dl",[s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"register"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register"}},[t._v("#")]),t._v(" register "),s("Badge",{attrs:{text:"Static method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("register")]),t._v(" ("),t._v("\n  overrides: bool = False,\n  **kwargs,\n) \n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Enables the task head component for pipeline loading")])])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"instance-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-variables"}},[t._v("#")]),t._v(" Instance variables")]),t._v("\n")]),t._v(" "),s("dl",[s("dt",{attrs:{id:"biome.text.modules.heads.task_head.TaskHead.labels"}},[s("code",{staticClass:"name"},[t._v("var "),s("span",{staticClass:"ident"},[t._v("labels")]),t._v(" : List[str]")])]),t._v(" "),s("dd",[s("p",[t._v("The configured vocab labels")])]),t._v(" "),s("dt",{attrs:{id:"biome.text.modules.heads.task_head.TaskHead.num_labels"}},[s("code",{staticClass:"name"},[t._v("var "),s("span",{staticClass:"ident"},[t._v("num_labels")])])]),t._v(" "),s("dd",[s("p",[t._v("The number of vocab labels")])])]),t._v(" "),s("dl",[s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"on-vocab-update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-vocab-update"}},[t._v("#")]),t._v(" on_vocab_update "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("on_vocab_update")]),t._v("("),s("span",[t._v("self)")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Actions when vocab is updated. Rebuild here modules that initialization depends on some vocab metric")]),t._v(" "),s("p",[t._v("At this point, the model.vocab is already updated, so it could be used for architecture update")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"extend-labels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extend-labels"}},[t._v("#")]),t._v(" extend_labels "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("extend_labels")]),t._v(" ("),t._v("\n  self,\n  labels: List[str],\n) \n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Extends the number of labels")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"task-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-name"}},[t._v("#")]),t._v(" task_name "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("task_name")]),t._v("("),s("span",[t._v("self) -> "),s("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskName",href:"#biome.text.modules.heads.task_head.TaskName"}},[t._v("TaskName")])]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("The task head name")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" inputs "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("inputs")]),t._v("("),s("span",[t._v("self) -> Union[List[str], NoneType]")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("The expected inputs names for data featuring. If no defined,\nwill be automatically calculated from featurize signature")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"forward"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#forward"}},[t._v("#")]),t._v(" forward "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("forward")]),t._v(" ("),t._v("\n  self,\n  *args: Any,\n  **kwargs: Any,\n)  -> "),s("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskOutput",href:"#biome.text.modules.heads.task_head.TaskOutput"}},[t._v("TaskOutput")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd"),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"get-metrics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-metrics"}},[t._v("#")]),t._v(" get_metrics "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("get_metrics")]),t._v(" ("),t._v("\n  self,\n  reset: bool = False,\n)  -> Dict[str, float]\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Metrics dictionary for training task")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"featurize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#featurize"}},[t._v("#")]),t._v(" featurize "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("featurize")]),t._v(" ("),t._v("\n  self,\n  *args,\n  **kwargs,\n)  -> Union[allennlp.data.instance.Instance, NoneType]\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Converts incoming data into an allennlp "),s("code",[t._v("Instance")]),t._v(", used for pyTorch tensors generation")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"decode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decode"}},[t._v("#")]),t._v(" decode "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("decode")]),t._v(" ("),t._v("\n  self,\n  output: "),s("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskOutput",href:"#biome.text.modules.heads.task_head.TaskOutput"}},[t._v("TaskOutput")]),t._v(",\n)  -> "),s("a",{attrs:{title:"biome.text.modules.heads.task_head.TaskOutput",href:"#biome.text.modules.heads.task_head.TaskOutput"}},[t._v("TaskOutput")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Completes the output for the prediction")]),t._v(" "),s("p",[t._v("The base implementation adds nothing.")]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("output")])])]),t._v(" "),s("dd",[t._v("The output from the head's forward method")])]),t._v(" "),s("h2",{attrs:{id:"returns"}},[t._v("Returns")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("completed_output")])]),t._v(" "),s("dd",[t._v(" ")])])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"explain-prediction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#explain-prediction"}},[t._v("#")]),t._v(" explain_prediction "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("explain_prediction")]),t._v(" ("),t._v("\n  self,\n  prediction: Dict[str, "),s("built-in",{attrs:{function:"",array:""}},[t._v("],\n  instance: allennlp.data.instance.Instance,\n  n_steps: int,\n)  -> Dict[str, Any]\n")])],1),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Adds embedding explanations information to prediction output")]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("prediction")])]),t._v(" : "),s("code",[t._v("Dict[str,, numpy.array]")])]),t._v(" "),s("dd",[t._v("The result input predictions")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("instance")])]),t._v(" : "),s("code",[t._v("Instance")])]),t._v(" "),s("dd",[t._v("The featurized input instance")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("n_steps")])]),t._v(" : "),s("code",[t._v("int")])]),t._v(" "),s("dd",[t._v("The number of steps to find token level attributions")])]),t._v(" "),s("h2",{attrs:{id:"returns"}},[t._v("Returns")]),t._v(" "),s("pre",[s("code",[t._v("Prediction with explanation\n")])])])]),t._v(" "),s("div"),t._v(" "),s("pre",{staticClass:"title"},[s("h2",{attrs:{id:"taskheadconfiguration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taskheadconfiguration"}},[t._v("#")]),t._v(" TaskHeadConfiguration "),s("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("TaskHeadConfiguration")]),t._v(" (*args, **kwds)"),t._v("\n")]),t._v("\n")]),t._v(" "),s("p",[t._v("Layer spec for TaskHead components")]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"ancestors-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ancestors-3"}},[t._v("#")]),t._v(" Ancestors")]),t._v("\n")]),t._v(" "),s("ul",{staticClass:"hlist"},[s("li",[s("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration",href:"../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration"}},[t._v("ComponentConfiguration")])]),t._v(" "),s("li",[t._v("typing.Generic")]),t._v(" "),s("li",[t._v("allennlp.common.from_params.FromParams")])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"inherited-members"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inherited-members"}},[t._v("#")]),t._v(" Inherited members")]),t._v("\n")]),t._v(" "),s("ul",{staticClass:"hlist"},[s("li",[s("code",[s("b",[s("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration",href:"../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration"}},[t._v("ComponentConfiguration")])])]),t._v(":\n"),s("ul",{staticClass:"hlist"},[s("li",[s("code",[s("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration.compile",href:"../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration.compile"}},[t._v("compile")])])]),t._v(" "),s("li",[s("code",[s("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration.config",href:"../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration.config"}},[t._v("config")])])]),t._v(" "),s("li",[s("code",[s("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration.from_params",href:"../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration.from_params"}},[t._v("from_params")])])]),t._v(" "),s("li",[s("code",[s("a",{attrs:{title:"biome.text.modules.configuration.defs.ComponentConfiguration.input_dim",href:"../configuration/defs.html#biome.text.modules.configuration.defs.ComponentConfiguration.input_dim"}},[t._v("input_dim")])])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);