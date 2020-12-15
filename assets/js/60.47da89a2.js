(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{444:function(e,t,a){"use strict";a.r(t);var s=a(26),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"contributing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),a("p",[e._v("We are open and very happy to receive contributions to make "),a("em",[e._v("biome.text")]),e._v(" more useful for you and others.")]),e._v(" "),a("p",[e._v("If you want to start contributing to "),a("em",[e._v("biome.text")]),e._v(" there are three things you need to do.")]),e._v(" "),a("ol",[a("li",[e._v("Create an issue describing the feature you want to work on")]),e._v(" "),a("li",[e._v("Setup for development and do the code changes")]),e._v(" "),a("li",[e._v("Create a pull request describing your changes")])]),e._v(" "),a("h2",{attrs:{id:"creating-an-issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-issue"}},[e._v("#")]),e._v(" Creating an issue")]),e._v(" "),a("p",[e._v("You can create a feature request or describe a bug on "),a("a",{attrs:{href:"https://github.com/recognai/biome-text/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"setting-up-for-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-for-development"}},[e._v("#")]),e._v(" Setting up for development")]),e._v(" "),a("p",[e._v("To set up your system for "),a("em",[e._v("biome.text")]),e._v(" development, you first of all have to "),a("a",{attrs:{href:"https://guides.github.com/activities/forking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("fork"),a("OutboundLink")],1),e._v("\nour repository and clone your fork to your computer:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("your-github-username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("/biome-text.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" biome-text\n")])])]),a("p",[e._v("To keep your fork's master branch up to date with our repo you should add it as an "),a("a",{attrs:{href:"https://dev.to/louhayes3/git-add-an-upstream-to-a-forked-repo-1mik",target:"_blank",rel:"noopener noreferrer"}},[e._v("upstream remote branch"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" upstream https://github.com/recognai/biome-text.git\n")])])]),a("p",[e._v("Now go ahead and create a new conda environment in which the development will take place and activate it:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("conda "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("env")]),e._v(" create -f environment_dev.yml\nconda activate biome\n")])])]),a("p",[e._v("Once you activated the conda environment, it is time to install "),a("em",[e._v("biome.text")]),e._v(" in editable mode with all its development dependencies.\nThe best way to do this is to take advantage of the make directive:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" dev\n")])])]),a("p",[e._v("After installing "),a("em",[e._v("biome.text")]),e._v(", the best way to test your installation is by running the "),a("em",[e._v("biome.text")]),e._v(" cli command:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("biome --help\n")])])]),a("h3",{attrs:{id:"building-the-ui-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-the-ui-components"}},[e._v("#")]),e._v(" Building the UI components")]),e._v(" "),a("p",[e._v("For the UI to work you need to build the static web resources:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" build_ui\n")])])]),a("p",[e._v("If you are working on the UI and want to quickly check out the results you can serve it with:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" ui\n")])])]),a("p",[e._v("Keep in mind that for the UI component to work you need a running "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch"),a("OutboundLink")],1),e._v(" instance.\nWe recommend running "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.7/docker.html#docker-cli-run-dev-mode",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch via docker"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("docker run -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("9200")]),e._v(":9200 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("9300")]),e._v(":9300 -e "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"discovery.type=single-node"')]),e._v(" docker.elastic.co/elasticsearch/elasticsearch:7.3.2\n")])])]),a("h3",{attrs:{id:"running-tests-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-tests-locally"}},[e._v("#")]),e._v(" Running tests locally")]),e._v(" "),a("p",[a("em",[e._v("Biome.text")]),e._v(" uses "),a("a",{attrs:{href:"https://docs.pytest.org/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pytest"),a("OutboundLink")],1),e._v(" for its unit and integration tests.\nIf you are working on the code base we advise you to run our tests locally before submitting a Pull Request (see below) to make sure your changes did not break and existing functionality.\nTo achieve this you can simply run:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),a("p",[e._v("If you open a Pull Request, the test suite will be run automatically via a GitHub Action.")]),e._v(" "),a("h3",{attrs:{id:"serving-docs-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serving-docs-locally"}},[e._v("#")]),e._v(" Serving docs locally")]),e._v(" "),a("p",[e._v("If you are working on the documentation and want to check out the results locally on your machine, you can simply run:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" docs\n")])])]),a("p",[e._v("The docs will be built and deployed automatically via a GitHub Action when our master branch is updated.\nIf for some reason you want to build them locally, you can do so with:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" build_docs\n")])])]),a("h2",{attrs:{id:"submitting-a-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submitting-a-pull-request"}},[e._v("#")]),e._v(" Submitting a Pull Request")]),e._v(" "),a("p",[e._v("For example, a new issue, #13, describing an error found in documentation, and labelled as documentation, you will created an new related branch called documentation/#13")]),e._v(" "),a("p",[e._v("Work on this branch make necessary changes, testing them and then push the new branch and create an new PR.")]),e._v(" "),a("p",[e._v('This new PR will include the text "Closes #13" at the end of the description')])])}),[],!1,null,null,null);t.default=n.exports}}]);