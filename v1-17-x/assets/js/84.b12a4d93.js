(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{453:function(e,t,s){"use strict";s.r(t);var i=s(3),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"uri-broker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uri-broker"}},[e._v("#")]),e._v(" URI Broker")]),e._v(" "),s("p",[e._v("The URI Broker is an object in the application plug-in web framework, which facilitates calls to the Zowe™ Application Server by constructing URIs that use the context from the calling application plug-in.")]),e._v(" "),s("h2",{attrs:{id:"accessing-the-uri-broker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-uri-broker"}},[e._v("#")]),e._v(" Accessing the URI Broker")]),e._v(" "),s("p",[e._v("The URI Broker is accessible independent of other frameworks involved such as Angular, and is also accessible through iframe. This is because it is attached to a global when within the Zowe Desktop. For more information, see "),s("router-link",{attrs:{to:"/extend/extend-desktop/mvd-desktopandwindowmgt.html"}},[e._v("Zowe Desktop and window management")]),e._v(".\nAccess the URI Broker through one of two locations:")],1),e._v(" "),s("p",[e._v("Natively:")]),e._v(" "),s("p",[s("code",[e._v("window.ZoweZLUX.uriBroker")])]),e._v(" "),s("p",[e._v("In an iframe:")]),e._v(" "),s("p",[s("code",[e._v("window.parent.ZoweZLUX.uriBroker")])]),e._v(" "),s("h2",{attrs:{id:"functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[e._v("#")]),e._v(" Functions")]),e._v(" "),s("p",[e._v("The URI Broker builds the following categories of URIs depending upon what the application plug-in is designed to call.")]),e._v(" "),s("h3",{attrs:{id:"accessing-an-application-plug-in-s-dataservices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-an-application-plug-in-s-dataservices"}},[e._v("#")]),e._v(" Accessing an application plug-in's dataservices")]),e._v(" "),s("p",[e._v("Dataservices can be based on HTTP (REST) or Websocket. For more information, see "),s("router-link",{attrs:{to:"/extend/extend-desktop/mvd-dataservices.html"}},[e._v("Dataservices")]),e._v(".")],1),e._v(" "),s("h4",{attrs:{id:"http-dataservice-uri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-dataservice-uri"}},[e._v("#")]),e._v(" HTTP Dataservice URI")]),e._v(" "),s("p",[s("code",[e._v("pluginRESTUri(plugin:ZLUX.Plugin, serviceName: string, relativePath:string): string")])]),e._v(" "),s("p",[e._v("Returns: A URI for making an HTTP service request.")]),e._v(" "),s("h4",{attrs:{id:"websocket-dataservice-uri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket-dataservice-uri"}},[e._v("#")]),e._v(" Websocket Dataservice URI")]),e._v(" "),s("p",[s("code",[e._v("pluginWSUri(plugin: ZLUX.Plugin, serviceName:string, relativePath:string): string")])]),e._v(" "),s("p",[e._v("Returns: A URI for making a Websocket connection to the service.")]),e._v(" "),s("h3",{attrs:{id:"accessing-application-plug-in-s-configuration-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-application-plug-in-s-configuration-resources"}},[e._v("#")]),e._v(" Accessing application plug-in's configuration resources")]),e._v(" "),s("p",[e._v("Defaults and user storage might exist for an application plug-in such that they can be retrieved through the Configuration Dataservice.")]),e._v(" "),s("p",[e._v("There are different scopes and actions to take with this service, and therefore there are a few URIs that can be built:")]),e._v(" "),s("h4",{attrs:{id:"standard-configuration-access"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#standard-configuration-access"}},[e._v("#")]),e._v(" Standard configuration access")]),e._v(" "),s("p",[s("code",[e._v("pluginConfigUri(pluginDefinition: ZLUX.Plugin, resourcePath:string, resourceName?:string): string")])]),e._v(" "),s("p",[e._v("Returns: A URI for accessing the requested resource under the user's storage.")]),e._v(" "),s("h4",{attrs:{id:"scoped-configuration-access"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scoped-configuration-access"}},[e._v("#")]),e._v(" Scoped configuration access")]),e._v(" "),s("p",[s("code",[e._v("pluginConfigForScopeUri(pluginDefinition: ZLUX.Plugin, scope: string, resourcePath:string, resourceName?:string): string")])]),e._v(" "),s("p",[e._v("Returns: A URI for accessing a specific scope for a given resource.")]),e._v(" "),s("h3",{attrs:{id:"accessing-static-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-static-content"}},[e._v("#")]),e._v(" Accessing static content")]),e._v(" "),s("p",[e._v("Content under an application plug-in's "),s("code",[e._v("web")]),e._v(" directory is static content accessible by a browser.\nThis can be accessed through:")]),e._v(" "),s("p",[s("code",[e._v("pluginResourceUri(pluginDefinition: ZLUX.Plugin, relativePath: string): string")])]),e._v(" "),s("p",[e._v("Returns: A URI for getting static content.")]),e._v(" "),s("p",[e._v("For more information about the "),s("code",[e._v("web")]),e._v(" directory, see "),s("router-link",{attrs:{to:"/extend/extend-desktop/mvd-plugindefandstruct.html#application-plug-in-filesystem-structure"}},[e._v("Application plug-in filesystem structure")]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"accessing-the-application-plug-in-s-root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-application-plug-in-s-root"}},[e._v("#")]),e._v(" Accessing the application plug-in's root")]),e._v(" "),s("p",[e._v("Static content and services are accessed off of the root URI of an application plug-in. If there are other points that you must access on that application plug-in, you can get the root:")]),e._v(" "),s("p",[s("code",[e._v("pluginRootUri(pluginDefinition: ZLUX.Plugin): string")])]),e._v(" "),s("p",[e._v("Returns: A URI to the root of the application plug-in.")]),e._v(" "),s("h3",{attrs:{id:"server-queries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-queries"}},[e._v("#")]),e._v(" Server queries")]),e._v(" "),s("p",[e._v("A client can find different information about a server's configuration or the configuration as seen by the current user by accessing specific APIs.")]),e._v(" "),s("h4",{attrs:{id:"accessing-a-list-of-plug-ins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-a-list-of-plug-ins"}},[e._v("#")]),e._v(" Accessing a list of plug-ins")]),e._v(" "),s("p",[s("code",[e._v("pluginListUri(pluginType: ZLUX.PluginType): string")])]),e._v(" "),s("p",[e._v('Returns: A URI, which when accessed returns the list of existing plug-ins on the server by  type, such as "Application" or "all".')])])}),[],!1,null,null,null);t.default=a.exports}}]);