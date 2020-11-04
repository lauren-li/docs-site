(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{499:function(e,t,a){"use strict";a.r(t);var s=a(3),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"authentication-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication-api"}},[e._v("#")]),e._v(" Authentication API")]),e._v(" "),a("p",[e._v("This topic describes the web service API for user authentication.")]),e._v(" "),a("p",[e._v("The authentication mechanism of the ZLUX server allows for an administrator to gate access to services by a given auth handler, while on the user side the authentication structure allows for a user to login to one or more endpoints at once provided they share the same credentials given.")]),e._v(" "),a("h2",{attrs:{id:"check-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-status"}},[e._v("#")]),e._v(" Check status")]),e._v(" "),a("p",[e._v("Returns the current authentication status of the user to the caller.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("GET /auth\n")])])]),a("p",[e._v("Response example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "categories": {\n    "zss": { \n      "authenticated": true,\n      "plugins": {\n        "org.zowe.zlux.auth.zss": {\n          "authenticated": true,\n          "username":"foo"\n        }\n      }\n    },\n    "zosmf": {\n      "authenticated": false,\n      "plugins": {\n        "org.zowe.zlux.auth.zosmf": {\n          "authenticated": false\n        }\n      }\n    }\n  }\n}\n')])])]),a("p",[e._v('Every key in the response object is a registered auth type. The value object is guaranteed to have a Boolean field named "authenticated" which indicates that at least one plugin in the category was able to authenticate the user.')]),e._v(" "),a("p",[e._v('Each item also has a field called "plugins", where every property value is a plugin-specific object.')]),e._v(" "),a("h2",{attrs:{id:"authenticate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authenticate"}},[e._v("#")]),e._v(" Authenticate")]),e._v(" "),a("p",[e._v("Authenticates the user against authentication back-ends.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("POST /auth\n")])])]),a("p",[e._v("Request body example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "categories": ["zosmf"],\n  "username": "foo",\n  "password": "1970-01-01"\n}\n')])])]),a("p",[e._v("The categories parameter is optional. If omitted, all auth plugins are invoked with the username and password Response example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "success": true,\n  "categories": {\n    "zss": {\n      "success": true,\n      "plugins": {\n        "org.zowe.zlux.auth.zss": {\n          "success": true\n        }\n      }\n    },\n    "zosmf": {\n      "success": true,\n      "plugins": {\n        "org.zowe.zlux.auth.zosmf": {\n          "success": true\n        }\n      }\n    }\n  }\n}\n')])])]),a("p",[e._v('First-level keys are authentication categories or types. "success" means that all of the types requested have been successful. For example typeA successful AND typeB succesful AND ...')]),e._v(" "),a("p",[e._v('Second-level keys are auth plugin IDs. "success" on this level means that there\'s at least one successful result in that auth type. For example, pluginA successful OR pluginB successful OR ...')]),e._v(" "),a("h2",{attrs:{id:"user-not-authenticated-or-not-authorized"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-not-authenticated-or-not-authorized"}},[e._v("#")]),e._v(" User not authenticated or not authorized")]),e._v(" "),a("p",[e._v("The response received by the browser when calling any service, when the user is either not authenticated or not allowed to access the service.")]),e._v(" "),a("h3",{attrs:{id:"not-authenticated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#not-authenticated"}},[e._v("#")]),e._v(" Not authenticated")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('HTTP 401\n\n{\n  "category": "zss",\n  "pluginID": "org.zowe.zlux.auth.zss",\n  "result": {\n    "authenticated": false,\n    "authorized": false\n  }\n}\n')])])]),a("p",[e._v("The client is supposed to address this by showing the user a login form which will later invoke the login service for the plugin mentioned and repeat the request.")]),e._v(" "),a("h3",{attrs:{id:"not-authorized"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#not-authorized"}},[e._v("#")]),e._v(" Not authorized")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('HTTP 403\n\n{\n  "category": "zss",\n  "pluginID": "org.zowe.zlux.auth.zss",\n  "result": {\n    "authenticated": true,\n    "authorized": false\n  }\n}\n')])])]),a("p",[e._v("There's no general way for the client to address this, except than show the user an error message.")])])}),[],!1,null,null,null);t.default=n.exports}}]);