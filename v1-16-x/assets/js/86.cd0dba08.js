(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{436:function(t,e,s){"use strict";s.r(e);var a=s(3),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"add-a-react-app-to-zowe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-react-app-to-zowe"}},[t._v("#")]),t._v(" Add a React app to Zowe")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Github Sample Repo:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/zowe/webui-scenarios/tree/master/basic-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("basic-react"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("For this section we have provided a react sample (through an Iframe), which connects to the API defined in the API extension sample.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Make sure that you first expose an API to connect to before following the steps below. To use the sample provided, first complete the steps listed in "),s("router-link",{attrs:{to:"/extend/extend-api/liberty-api-sample.html"}},[t._v("API extension sample")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"to-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-install"}},[t._v("#")]),t._v(" To Install")]),t._v(" "),s("ol",[s("li",[t._v("Point your project to the server that is hosting your API.\n"),s("ul",[s("li",[t._v("In the sample this can be defined in the "),s("code",[t._v("Constants.js")]),t._v(" file.")]),t._v(" "),s("li",[t._v("The default is: "),s("code",[t._v("localhost:7443")]),t._v(", but otherwise point to your hardware address.")])])]),t._v(" "),s("li",[t._v("Create a minified version of your project.\n"),s("ul",[s("li",[t._v("Generate minified version using "),s("code",[t._v("npm run build")])])])]),t._v(" "),s("li",[t._v("Create a folder for the project and create a new "),s("code",[t._v("web")]),t._v(" folder inside it.\n"),s("ul",[s("li",[t._v("EX: "),s("code",[t._v("/Desktop/<Your_Project_Name>")]),t._v(" and "),s("code",[t._v("Desktop/<Your_Project_Name>/web")])])])]),t._v(" "),s("li",[t._v("Copy the built project into "),s("code",[t._v("Desktop/<Your_Project_Name>/web")]),t._v(" "),s("ul",[s("li",[t._v("If you are using the sample, copy "),s("code",[t._v("app.min.js")]),t._v(" , "),s("code",[t._v("index.html")]),t._v(" , "),s("code",[t._v("icon.png")]),t._v(" and "),s("code",[t._v("css")]),t._v(" into to "),s("code",[t._v("/Desktop/<Your_Project_Name>/web/")])])])]),t._v(" "),s("li",[t._v("Create a "),s("code",[t._v("pluginDefinition.json")]),t._v(" "),s("router-link",{attrs:{to:"/extend/extend-api/ReactJSUI.html#configuring-your-app-for-zowe"}},[t._v("following the guide")]),t._v(" and copy it to "),s("code",[t._v("Desktop/<Your_Project_Name>/")]),t._v(" "),s("ul",[s("li",[t._v("If you are using the sample, this is included within the project. Copy to "),s("code",[t._v("Desktop/<Your_Project_Name>/")])])])],1),t._v(" "),s("li",[t._v("Copy the project from "),s("code",[t._v("/Desktop")]),t._v(" to "),s("code",[t._v("<zowe_base>/")]),t._v(" "),s("ul",[s("li",[t._v("Use "),s("code",[t._v("scp <userID>@<server> /Users/path/to/files <zowe_base>/")])])])]),t._v(" "),s("li",[t._v("Create a new file within the plugins folder ("),s("code",[t._v("<zowe_base>/zlux-app-server-plugins")]),t._v(") called "),s("code",[t._v("com.<Your_Project_Name>.json")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("touch com.<Your_Project_Name>.json")])])])]),t._v(" "),s("li",[t._v("Edit this folder (using vi) to read:")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"identifier"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.<Your_Project_Name>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pluginLocation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../<Your_Project_Name>"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"9"}},[s("li",[t._v("Run "),s("code",[t._v("./deploy.sh")]),t._v(" found in "),s("code",[t._v("<zowe_base>/zlux-build")])]),t._v(" "),s("li",[t._v("Run "),s("code",[t._v("./zowe-stop.sh")]),t._v(" found in "),s("code",[t._v("<zowe_base>/scripts")])]),t._v(" "),s("li",[t._v("Run "),s("code",[t._v("./zowe-start.sh")]),t._v(" found in "),s("code",[t._v("<zowe_base>/scripts")])])]),t._v(" "),s("h2",{attrs:{id:"verify-the-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verify-the-install"}},[t._v("#")]),t._v(" Verify the Install")]),t._v(" "),s("p",[t._v("Upon restarting the server, navigate to the Zowe™ Application Server.")]),t._v(" "),s("ul",[s("li",[t._v("This can be found at: "),s("code",[t._v("https://<base>:<port>/ZLUX/plugins/org.zowe.zlux.bootstrap/web/")])])]),t._v(" "),s("p",[t._v("Make sure that your new plug-in was added and that it can interact with the server.")]),t._v(" "),s("p",[t._v("If it is not able to interact with the server and you are getting CORS errors, you might need to update the server to accept all connections.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Note: This is for development purposes only.")])]),t._v(" "),s("p",[t._v("To update the server:")]),t._v(" "),s("ul",[s("li",[t._v("Navigate to "),s("code",[t._v("<zowe-base>/explorer-server/wlp/usr/servers/Atlas/server.xml")])]),t._v(" "),s("li",[t._v("Open to the file with vi and paste in the following code.")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FOR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TESTING")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ONLY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("cors allowCredentials"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" allowedMethods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET, DELETE, POST, PUT, OPTIONS"')]),t._v(" allowedOrigins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v(" allowedHeaders"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v(" domain"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FOR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TESTING")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ONLY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);