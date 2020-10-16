(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{403:function(t,a,s){"use strict";s.r(a);var e=s(26),d=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"biome-text-dataset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#biome-text-dataset"}},[t._v("#")]),t._v(" biome.text.dataset "),s("Badge",{attrs:{text:"Module"}})],1),t._v(" "),s("div"),t._v(" "),s("div"),t._v(" "),s("pre",{staticClass:"title"},[s("h2",{attrs:{id:"dataset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dataset"}},[t._v("#")]),t._v(" Dataset "),s("Badge",{attrs:{text:"Class"}})],1),t._v("\n")]),t._v(" "),s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("Dataset")]),t._v(" (dataset: datasets.arrow_dataset.Dataset)"),t._v("\n")]),t._v("\n")]),t._v(" "),s("p",[t._v("A dataset to be used with biome.text Pipelines")]),t._v(" "),s("p",[t._v("Basically a light wrapper around HuggingFace's "),s("code",[t._v("datasets.Dataset")])]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("dataset")])])]),t._v(" "),s("dd",[t._v("A HuggingFace "),s("code",[t._v("datasets.Dataset")])])]),t._v(" "),s("dl",[s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"load-dataset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-dataset"}},[t._v("#")]),t._v(" load_dataset "),s("Badge",{attrs:{text:"Static method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("load_dataset")]),t._v(" ("),t._v("\n  *args,\n  split,\n  **kwargs,\n)  -> "),s("a",{attrs:{title:"biome.text.dataset.Dataset",href:"#biome.text.dataset.Dataset"}},[t._v("Dataset")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Load a dataset using Huggingface's "),s("code",[t._v("datasets.load_dataset")]),t._v(" method.")]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"https://huggingface.co/docs/datasets/loading_datasets.html"}},[t._v("https://huggingface.co/docs/datasets/loading_datasets.html")])]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("split")])])]),t._v(" "),s("dd",[t._v("See "),s("a",{attrs:{href:"https://huggingface.co/docs/datasets/splits.html"}},[t._v("https://huggingface.co/docs/datasets/splits.html")])])]),t._v(" "),s("p",[s("em",[t._v("args/")]),t._v("*kwargs\nPassed on to the "),s("code",[t._v("dataset.load_dataset")]),t._v(" method")]),t._v(" "),s("h2",{attrs:{id:"returns"}},[t._v("Returns")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("dataset")])]),t._v(" "),s("dd",[t._v(" ")])])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"from-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-json"}},[t._v("#")]),t._v(" from_json "),s("Badge",{attrs:{text:"Static method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("from_json")]),t._v(" ("),t._v("\n  paths: Union[str, List[str]],\n  **kwargs,\n)  -> "),s("a",{attrs:{title:"biome.text.dataset.Dataset",href:"#biome.text.dataset.Dataset"}},[t._v("Dataset")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Convenient method to create a Dataset from a json file")]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("paths")])])]),t._v(" "),s("dd",[t._v("One or several paths to json files")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("**kwargs")])])]),t._v(" "),s("dd",[t._v("Passed on to the "),s("code",[t._v("datasets.load_dataset")]),t._v(" method")])]),t._v(" "),s("h2",{attrs:{id:"returns"}},[t._v("Returns")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("dataset")])]),t._v(" "),s("dd",[t._v(" ")])])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"from-csv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-csv"}},[t._v("#")]),t._v(" from_csv "),s("Badge",{attrs:{text:"Static method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("from_csv")]),t._v(" ("),t._v("\n  paths: Union[str, List[str]],\n  **kwargs,\n)  -> "),s("a",{attrs:{title:"biome.text.dataset.Dataset",href:"#biome.text.dataset.Dataset"}},[t._v("Dataset")]),t._v("\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Convenient method to create a Dataset from a csv file")]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("paths")])])]),t._v(" "),s("dd",[t._v("One or several paths to csv files")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("**kwargs")])])]),t._v(" "),s("dd",[t._v("Passed on to the "),s("code",[t._v("datasets.load_dataset")]),t._v(" method")])]),t._v(" "),s("h2",{attrs:{id:"returns"}},[t._v("Returns")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("dataset")])]),t._v(" "),s("dd",[t._v(" ")])])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"from-pandas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-pandas"}},[t._v("#")]),t._v(" from_pandas "),s("Badge",{attrs:{text:"Static method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("from_pandas")]),t._v(" ("),t._v("\n  df: pandas.DataFrame,\n  **kwargs,\n) \n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Convenient method to create a Dataset from a "),s("code",[t._v("pandas.DataFrame")])]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("df")])])]),t._v(" "),s("dd",[t._v("The data frame")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("**kwargs")])])]),t._v(" "),s("dd",[t._v("Passed on to "),s("code",[t._v("datasets.Dataset.from_pandas")]),t._v(" method")])]),t._v(" "),s("h2",{attrs:{id:"returns"}},[t._v("Returns")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("dataset")])]),t._v(" "),s("dd",[t._v(" ")])])]),t._v(" "),s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"from-dict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from-dict"}},[t._v("#")]),t._v(" from_dict "),s("Badge",{attrs:{text:"Static method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("from_dict")]),t._v(" ("),t._v("\n  mapping: dict,\n  **kwargs,\n) \n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Convenient method to create a Dataset from a python dictionary")]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("mapping")])])]),t._v(" "),s("dd",[t._v("A mapping of strings to arrays or python lists.")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("**kwargs")])])]),t._v(" "),s("dd",[t._v("Passed on to "),s("code",[t._v("datasets.Dataset.from_dict")]),t._v(" method")])]),t._v(" "),s("h2",{attrs:{id:"returns"}},[t._v("Returns")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("dataset")])]),t._v(" "),s("dd",[t._v(" ")])])])]),t._v(" "),s("dl",[s("pre",{staticClass:"title"},[s("h3",{attrs:{id:"to-instances"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-instances"}},[t._v("#")]),t._v(" to_instances "),s("Badge",{attrs:{text:"Method"}})],1),t._v("\n")]),t._v(" "),s("dt",[s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"language-python"},[s("code",[t._v("\n"),s("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),s("span",{staticClass:"ident"},[t._v("to_instances")]),t._v(" ("),t._v("\n  self,\n  pipeline: biome.text.Pipeline,\n  lazy=True,\n)  -> Union[allennlp.data.dataset_readers.dataset_reader.AllennlpDataset, allennlp.data.dataset_readers.dataset_reader.AllennlpLazyDataset]\n")]),t._v("\n")])])]),t._v(" "),s("dd",[s("p",[t._v("Convert input to instances for the pipeline")]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[t._v("Parameters")]),t._v(" "),s("dl",[s("dt",[s("strong",[s("code",[t._v("pipeline")])])]),t._v(" "),s("dd",[t._v("The pipeline for which to create the instances.")]),t._v(" "),s("dt",[s("strong",[s("code",[t._v("lazy")])])]),t._v(" "),s("dd",[t._v("If true, instanes are lazily read from disk, otherwise they are kept in memory.")])])])])])}),[],!1,null,null,null);a.default=d.exports}}]);