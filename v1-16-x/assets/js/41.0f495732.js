(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{300:function(e,t,o){e.exports=o.p+"assets/img/ZE-Configuration.79ced477.gif"},374:function(e,t,o){"use strict";o.r(t);var r=o(3),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"installing-zowe-explorer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-explorer"}},[e._v("#")]),e._v(" Installing Zowe Explorer")]),e._v(" "),r("img",{attrs:{src:"https://codecov.io/gh/zowe/vscode-extension-for-zowe/branch/master/graph/badge.svg",alt:"codecov",scope:"external"}}),e._v(" "),r("img",{attrs:{src:"https://img.shields.io/badge/chat-on%20Slack-blue",alt:"slack",scope:"external"}}),e._v(" "),r("p",[e._v("The Zowe Explorer extension for Visual Studio Code (VSCode) modernizes the way developers and system administrators interact with z/OS mainframes, and lets you interact with data sets, USS files and jobs. Install the extension directly to "),r("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode"),r("OutboundLink")],1),e._v(" to enable the extension within the GUI. Working with data sets and USS files from VSCode can be more convenient than using 3270 emulators, and complements your Zowe CLI experience. The extension provides the following benefits:")]),e._v(" "),r("ul",[r("li",[e._v("Enables you to create, modify, rename, copy, and upload data sets directly to a z/OS mainframe.")]),e._v(" "),r("li",[e._v("Enables you to create, modify, rename, and upload USS files directly to a z/OS mainframe.")]),e._v(" "),r("li",[e._v("Provides a more streamlined way to access data sets, USS files and jobs.")]),e._v(" "),r("li",[e._v("Lets you create, edit, and delete Zowe CLI "),r("code",[e._v("zosmf")]),e._v(" compatible profiles.")]),e._v(" "),r("li",[e._v("Lets you use the Secure Credential Store plug-in to store your credentials securely in the settings.")])]),e._v(" "),r("p",[r("strong",[e._v("Note:")]),e._v(" Zowe Explorer is a subcomponent of "),r("a",{attrs:{href:"https://zowe.org/home/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe"),r("OutboundLink")],1),e._v(". The extension demonstrates the potential for plug-ins powered by Zowe.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#software-requirements"}},[e._v("Software Requirements")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#installing"}},[e._v("Installing")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#configuration"}},[e._v("Configuration")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#relevant-information"}},[e._v("Relevant Information")])])]),e._v(" "),r("h2",{attrs:{id:"software-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#software-requirements"}},[e._v("#")]),e._v(" Software Requirements")]),e._v(" "),r("p",[e._v("Ensure that you meet the following prerequisites before you use the extension:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Get access to z/OSMF.")])]),e._v(" "),r("li",[r("p",[e._v("Install "),r("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),r("OutboundLink")],1),e._v(" v8.0 or later.")])]),e._v(" "),r("li",[r("p",[e._v("Install "),r("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Configure TSO/E address space services, z/OS data set, file REST interface, and z/OS jobs REST interface. For more information, see "),r("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/systemrequirements-zosmf.html#z-os-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS Requirements"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Create one Zowe CLI "),r("code",[e._v("zosmf")]),e._v(" profile so that the extension can communicate with the mainframe.")]),e._v(" "),r("p",[r("strong",[e._v("Notes:")])]),e._v(" "),r("p",[e._v("i. You can use your existing Zowe CLI "),r("code",[e._v("zosmf")]),e._v(" profiles that are created with the Zowe CLI v.2.0.0 or later.")]),e._v(" "),r("p",[e._v("ii. Zowe CLI "),r("code",[e._v("zosmf")]),e._v(" profiles that are created in Zowe Explorer can be interchangeably used in the Zowe CLI.")])])]),e._v(" "),r("h2",{attrs:{id:"installing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[e._v("#")]),e._v(" Installing")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Address "),r("a",{attrs:{href:"#software-requirements"}},[e._v("the software requirements")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Open VSCode, and navigate to the "),r("strong",[e._v("Extensions")]),e._v(" tab on the left-hand side of the UI.")])]),e._v(" "),r("li",[r("p",[e._v("Type "),r("strong",[e._v("Zowe Explorer")]),e._v(" in the search field.")]),e._v(" "),r("p",[e._v("Zowe Explorer appears in the list of extensions in the left-hand panel.")])]),e._v(" "),r("li",[r("p",[e._v("Click the green "),r("strong",[e._v("Install")]),e._v(" button to install the extension.")])]),e._v(" "),r("li",[r("p",[e._v("Restart VSCode.")])])]),e._v(" "),r("p",[e._v("The extension is now installed and available for use.")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Note:")]),e._v(" For information about how to install the extension from a "),r("code",[e._v("VSIX")]),e._v(" file and run system tests on the extension, see the "),r("a",{attrs:{href:"https://github.com/zowe/vscode-extension-for-zowe/blob/master/docs/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Developer README"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("You can also watch the following videos to learn how to get started with Zowe Explorer, and work with data sets.")]),e._v(" "),r("iframe",{staticClass:"embed-responsive-item",attrs:{id:"youtubeplayer",title:"Getting Started with Zowe",type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/G_WCsFZIWt4",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}}),e._v(" "),r("iframe",{staticClass:"embed-responsive-item",attrs:{id:"youtubeplayer2",title:"How to Work with Data Sets",type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/X4oSHrI4oN4",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}}),e._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("p",[e._v("Configure Zowe Explorer in the settings file of the extension. To access the extension settings, navigate to "),r("strong",[e._v("Manage (the gear icon)")]),e._v("  > "),r("strong",[e._v("Settings")]),e._v(", then select "),r("strong",[e._v("Extensions")]),e._v(" > "),r("strong",[e._v("Zowe Explorer Settings")]),e._v(". For example, you can modify the following settings:")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Data set creation settings:")]),e._v(" You can change the default creation settings for various data set types.")]),e._v(" "),r("p",[r("strong",[e._v("Follow these steps:")])])])]),e._v(" "),r("ol",[r("li",[e._v("Click the "),r("strong",[e._v("Edit in settings.json")]),e._v(" button under the Data Set, USS or JOBS settings that you want to edit.")]),e._v(" "),r("li",[e._v("Edit the settings as needed.")]),e._v(" "),r("li",[e._v("Save the settings.")])]),e._v(" "),r("img",{attrs:{src:o(300),alt:"Configure Zowe settings"}}),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Set the Temporary Folder Location:")]),e._v(" You can change the default folder location where temporary files are stored.")]),e._v(" "),r("p",[r("strong",[e._v("Follow these steps:")])]),e._v(" "),r("ol",[r("li",[e._v("Click the "),r("strong",[e._v("Edit in settings.json")]),e._v(" button under the Data Set, USS or JOBS settings that you want to edit.")]),e._v(" "),r("li",[e._v("Modify the following definition:")])]),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Zowe-Temp-Folder-Location"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"folderPath"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/path/to/directory"')]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("where "),r("strong",[e._v("/path/to/directory")]),e._v(" is the folder location that you specify.")]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Save the settings.")])])])]),e._v(" "),r("h2",{attrs:{id:"relevant-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#relevant-information"}},[e._v("#")]),e._v(" Relevant Information")]),e._v(" "),r("p",[e._v("In this section you can find useful links and other relevant to Zowe Explorer information that can improve your experience with the extension. Check the following links:")]),e._v(" "),r("ul",[r("li",[e._v("For information about how to develop for Eclipse Theia, see "),r("a",{attrs:{href:"https://github.com/zowe/vscode-extension-for-zowe/blob/master/docs/README-Theia.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Theia README"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("For information about how to create a VSCode extension for Zowe Explorer, see "),r("a",{attrs:{href:"https://github.com/zowe/vscode-extension-for-zowe/blob/master/docs/README-Extending.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("VSCode extensions for Zowe Explorer"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Visit the "),r("strong",[e._v("#zowe-explorer")]),e._v(" channel on "),r("a",{attrs:{href:"https://openmainframeproject.slack.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack"),r("OutboundLink")],1),e._v(" for questions and general guidance.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);