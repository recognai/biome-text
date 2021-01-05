(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{404:function(e,t,a){"use strict";a.r(t);var s=a(26),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"biome-text-loggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-loggers"}},[e._v("#")]),e._v(" biome.text.loggers "),a("Badge",{attrs:{text:"Module"}})],1),e._v(" "),a("div"),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"is-wandb-installed-and-logged-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-wandb-installed-and-logged-in"}},[e._v("#")]),e._v(" is_wandb_installed_and_logged_in "),a("Badge",{attrs:{text:"Function"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("is_wandb_installed_and_logged_in")]),e._v("("),a("span",[e._v(") -> bool")]),e._v("\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Checks if wandb is installed and if a login is detected.")]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("dl",[a("dt",[a("code",[e._v("bool")])]),e._v(" "),a("dd",[e._v("Is true, if wandb is installed and a login is detected, otherwise false.")])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"add-default-wandb-logger-if-needed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-default-wandb-logger-if-needed"}},[e._v("#")]),e._v(" add_default_wandb_logger_if_needed "),a("Badge",{attrs:{text:"Function"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("add_default_wandb_logger_if_needed")]),e._v("("),a("span",[e._v("loggers: List["),a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger",href:"#biome.text.loggers.BaseTrainLogger"}},[e._v("BaseTrainLogger")]),e._v("]) -> List["),a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger",href:"#biome.text.loggers.BaseTrainLogger"}},[e._v("BaseTrainLogger")]),e._v("]")]),e._v("\n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Adds the default WandBLogger if a WandB login is detected and no WandBLogger is found in "),a("code",[e._v("loggers")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("loggers")])])]),e._v(" "),a("dd",[e._v("List of loggers used in the training")])]),e._v(" "),a("h2",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("dl",[a("dt",[a("code",[e._v("loggers")])]),e._v(" "),a("dd",[e._v("List of loggers with a default WandBLogger at position 0 if needed")])])]),e._v(" "),a("div"),e._v(" "),a("pre",{staticClass:"title"},[a("h2",{attrs:{id:"basetrainlogger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basetrainlogger"}},[e._v("#")]),e._v(" BaseTrainLogger "),a("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("BaseTrainLogger")]),e._v(" ()"),e._v("\n")]),e._v("\n")]),e._v(" "),a("p",[e._v("Base train logger for pipeline training")]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"ancestors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ancestors"}},[e._v("#")]),e._v(" Ancestors")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[e._v("allennlp.training.trainer.EpochCallback")]),e._v(" "),a("li",[e._v("allennlp.common.registrable.Registrable")]),e._v(" "),a("li",[e._v("allennlp.common.from_params.FromParams")])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"subclasses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subclasses"}},[e._v("#")]),e._v(" Subclasses")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("a",{attrs:{title:"biome.text.hpo.TuneMetricsLogger",href:"hpo.html#biome.text.hpo.TuneMetricsLogger"}},[e._v("TuneMetricsLogger")])]),e._v(" "),a("li",[a("a",{attrs:{title:"biome.text.loggers.MlflowLogger",href:"#biome.text.loggers.MlflowLogger"}},[e._v("MlflowLogger")])]),e._v(" "),a("li",[a("a",{attrs:{title:"biome.text.loggers.WandBLogger",href:"#biome.text.loggers.WandBLogger"}},[e._v("WandBLogger")])])]),e._v(" "),a("dl",[a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"init-train"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-train"}},[e._v("#")]),e._v(" init_train "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("init_train")]),e._v(" ("),e._v("\n  self,\n  pipeline: Pipeline,\n  trainer_configuration: TrainerConfiguration,\n  training: Union[allennlp.data.dataset_readers.dataset_reader.AllennlpDataset, allennlp.data.dataset_readers.dataset_reader.AllennlpLazyDataset],\n  validation: Union[allennlp.data.dataset_readers.dataset_reader.AllennlpDataset, allennlp.data.dataset_readers.dataset_reader.AllennlpLazyDataset, NoneType] = None,\n  test: Union[allennlp.data.dataset_readers.dataset_reader.AllennlpDataset, allennlp.data.dataset_readers.dataset_reader.AllennlpLazyDataset, NoneType] = None,\n) \n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Init train logging")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("pipeline")])])]),e._v(" "),a("dd",[e._v("The training pipeline")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("trainer_configuration")])])]),e._v(" "),a("dd",[e._v("The trainer configuration")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("training")])])]),e._v(" "),a("dd",[e._v("Training dataset")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("validation")])])]),e._v(" "),a("dd",[e._v("Validation dataset")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("test")])])]),e._v(" "),a("dd",[e._v("Test dataset")])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"end-train"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end-train"}},[e._v("#")]),e._v(" end_train "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("end_train")]),e._v(" ("),e._v("\n  self,\n  results: "),a("a",{attrs:{title:"biome.text.training_results.TrainingResults",href:"training_results.html#biome.text.training_results.TrainingResults"}},[e._v("TrainingResults")]),e._v(",\n) \n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("End train logging")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("results")])])]),e._v(" "),a("dd",[e._v("The training result set")])])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"log-epoch-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-epoch-metrics"}},[e._v("#")]),e._v(" log_epoch_metrics "),a("Badge",{attrs:{text:"Method"}})],1),e._v("\n")]),e._v(" "),a("dt",[a("div",{staticClass:"language-python extra-class"},[a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("def")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("log_epoch_metrics")]),e._v(" ("),e._v("\n  self,\n  epoch: int,\n  metrics: Dict[str, Any],\n) \n")]),e._v("\n")])])]),e._v(" "),a("dd",[a("p",[e._v("Log epoch metrics")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("epoch")])])]),e._v(" "),a("dd",[e._v("The current epoch")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("metrics")])])]),e._v(" "),a("dd",[e._v("The metrics related to current epoch")])])])]),e._v(" "),a("div"),e._v(" "),a("pre",{staticClass:"title"},[a("h2",{attrs:{id:"mlflowlogger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mlflowlogger"}},[e._v("#")]),e._v(" MlflowLogger "),a("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("MlflowLogger")]),e._v(" ("),e._v("\n    "),a("span",[e._v("experiment_name: str = None")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("artifact_location: str = None")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("run_name: str = None")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("**tags")]),a("span",[e._v(",")]),e._v("\n"),a("span",[e._v(")")]),e._v("\n")]),e._v("\n")]),e._v(" "),a("p",[e._v("A common mlflow logger for pipeline training")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("experiment_name")])])]),e._v(" "),a("dd",[e._v("The experiment name")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("artifact_location")])])]),e._v(" "),a("dd",[e._v("The artifact location used for this experiment")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("run_name")])])]),e._v(" "),a("dd",[e._v("If specified, set a name to created run")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("tags")])])]),e._v(" "),a("dd",[e._v("Extra arguments used as tags to created experiment run")])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"ancestors-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ancestors-2"}},[e._v("#")]),e._v(" Ancestors")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger",href:"#biome.text.loggers.BaseTrainLogger"}},[e._v("BaseTrainLogger")])]),e._v(" "),a("li",[e._v("allennlp.training.trainer.EpochCallback")]),e._v(" "),a("li",[e._v("allennlp.common.registrable.Registrable")]),e._v(" "),a("li",[e._v("allennlp.common.from_params.FromParams")])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"inherited-members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-members"}},[e._v("#")]),e._v(" Inherited members")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("code",[a("b",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger",href:"#biome.text.loggers.BaseTrainLogger"}},[e._v("BaseTrainLogger")])])]),e._v(":\n"),a("ul",{staticClass:"hlist"},[a("li",[a("code",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger.end_train",href:"#biome.text.loggers.BaseTrainLogger.end_train"}},[e._v("end_train")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger.init_train",href:"#biome.text.loggers.BaseTrainLogger.init_train"}},[e._v("init_train")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger.log_epoch_metrics",href:"#biome.text.loggers.BaseTrainLogger.log_epoch_metrics"}},[e._v("log_epoch_metrics")])])])])])]),e._v(" "),a("div"),e._v(" "),a("pre",{staticClass:"title"},[a("h2",{attrs:{id:"wandblogger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wandblogger"}},[e._v("#")]),e._v(" WandBLogger "),a("Badge",{attrs:{text:"Class"}})],1),e._v("\n")]),e._v(" "),a("pre",{staticClass:"language-python"},[a("code",[e._v("\n"),a("span",{staticClass:"token keyword"},[e._v("class")]),e._v(" "),a("span",{staticClass:"ident"},[e._v("WandBLogger")]),e._v(" ("),e._v("\n    "),a("span",[e._v("project_name: str = 'biome'")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("run_name: str = None")]),a("span",[e._v(",")]),e._v("\n    "),a("span",[e._v("tags: List[str] = None")]),a("span",[e._v(",")]),e._v("\n"),a("span",[e._v(")")]),e._v("\n")]),e._v("\n")]),e._v(" "),a("p",[e._v("Logger for WandB")]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[e._v("Parameters")]),e._v(" "),a("dl",[a("dt",[a("strong",[a("code",[e._v("project_name")])])]),e._v(" "),a("dd",[e._v("Name of your WandB project")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("run_name")])])]),e._v(" "),a("dd",[e._v("Name of your run")]),e._v(" "),a("dt",[a("strong",[a("code",[e._v("tags")])])]),e._v(" "),a("dd",[e._v("Extra arguments used as tags to created experiment run")])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"ancestors-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ancestors-3"}},[e._v("#")]),e._v(" Ancestors")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger",href:"#biome.text.loggers.BaseTrainLogger"}},[e._v("BaseTrainLogger")])]),e._v(" "),a("li",[e._v("allennlp.training.trainer.EpochCallback")]),e._v(" "),a("li",[e._v("allennlp.common.registrable.Registrable")]),e._v(" "),a("li",[e._v("allennlp.common.from_params.FromParams")])]),e._v(" "),a("pre",{staticClass:"title"},[a("h3",{attrs:{id:"inherited-members-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-members-2"}},[e._v("#")]),e._v(" Inherited members")]),e._v("\n")]),e._v(" "),a("ul",{staticClass:"hlist"},[a("li",[a("code",[a("b",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger",href:"#biome.text.loggers.BaseTrainLogger"}},[e._v("BaseTrainLogger")])])]),e._v(":\n"),a("ul",{staticClass:"hlist"},[a("li",[a("code",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger.end_train",href:"#biome.text.loggers.BaseTrainLogger.end_train"}},[e._v("end_train")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger.init_train",href:"#biome.text.loggers.BaseTrainLogger.init_train"}},[e._v("init_train")])])]),e._v(" "),a("li",[a("code",[a("a",{attrs:{title:"biome.text.loggers.BaseTrainLogger.log_epoch_metrics",href:"#biome.text.loggers.BaseTrainLogger.log_epoch_metrics"}},[e._v("log_epoch_metrics")])])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);