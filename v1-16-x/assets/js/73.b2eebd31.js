(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{493:function(e,t,s){"use strict";s.r(t);var r=s(3),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"configuration-dataservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-dataservice"}},[e._v("#")]),e._v(" Configuration Dataservice")]),e._v(" "),s("p",[e._v("The Configuration Dataservice is an essential component of the Zowe™ Application Framework, which acts as a JSON resource storage service, and is accessible externally by REST API and internally to the server by dataservices.")]),e._v(" "),s("p",[e._v("The Configuration Dataservice allows for saving preferences of applications, management of defaults and privileges within a Zowe ecosystem, and bootstrapping configuration of the server's dataservices.")]),e._v(" "),s("p",[e._v("The fundamental element of extensibility of the Zowe Application Framework is a "),s("em",[e._v("plug-in")]),e._v(". The Configuration Dataservice works with data for plug-ins. Every resource that is stored in the Configuration Service is stored for a particular plug-in, and valid resources to be accessed are determined by the definition of each plug-in in how it uses the Configuration Dataservice.")]),e._v(" "),s("p",[e._v("The behavior of the Configuration Dataservice is dependent upon the Resource structure for a plug-in. Each plug-in lists the valid resources, and the administrators can set permissions for the users who can view or modify these resources.")]),e._v(" "),s("h2",{attrs:{id:"resource-scope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resource-scope"}},[e._v("#")]),e._v(" Resource Scope")]),e._v(" "),s("p",[e._v("Data is stored within the Configuration Dataservice according to the selected "),s("em",[e._v("Scope")]),e._v(". The intent of "),s("em",[e._v("Scope")]),e._v(" within the Dataservice is to facilitate company-wide administration and privilege management of Zowe data.")]),e._v(" "),s("p",[e._v("When a user requests a resource, the resource that is retrieved is an override or an aggregation of the broader scopes that encompass the "),s("em",[e._v("Scope")]),e._v(" from which they are viewing the data.")]),e._v(" "),s("p",[e._v("When a user stores a resource, the resource is stored within a "),s("em",[e._v("Scope")]),e._v(" but only if the user has access privilege to update within that "),s("em",[e._v("Scope")]),e._v(".")]),e._v(" "),s("p",[s("em",[e._v("Scope")]),e._v(" is one of the following:")]),e._v(" "),s("p",[s("strong",[e._v("Product")])]),e._v(" "),s("p",[e._v("Configuration defaults that come with the product. Cannot be modified.")]),e._v(" "),s("p",[s("strong",[e._v("Site")])]),e._v(" "),s("p",[e._v("Data that can be used between multiple instances of the Zowe Application Server.")]),e._v(" "),s("p",[s("strong",[e._v("Instance")])]),e._v(" "),s("p",[e._v("Data within an individual Zowe Application Server.")]),e._v(" "),s("p",[s("strong",[e._v("Group")])]),e._v(" "),s("p",[e._v("Data that is shared between multiple users in a group.(Pending)")]),e._v(" "),s("p",[s("strong",[e._v("User")])]),e._v(" "),s("p",[e._v("Data for an individual user.(Pending)")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" While Authorization tuning can allow for settings such as GET from Instance to work without login, "),s("em",[e._v("User")]),e._v(" and "),s("em",[e._v("Group")]),e._v(" scope queries will be rejected if not logged in due to the requirement to pull resources from a specific user. Because of this, "),s("em",[e._v("User")]),e._v(" and "),s("em",[e._v("Group")]),e._v(" scopes will not be functional until the Security Framework is merged into the mainline.")]),e._v(" "),s("p",[e._v("Where "),s("em",[e._v("Product")]),e._v(" is the broadest scope and "),s("em",[e._v("User")]),e._v(" is the narrowest scope.")]),e._v(" "),s("p",[e._v("When you specify "),s("em",[e._v("Scope")]),e._v(" "),s("em",[e._v("User")]),e._v(", the service manages configuration for your particular username, using the authentication of the session. This way, the "),s("em",[e._v("User")]),e._v(" scope is always mapped to your current username.")]),e._v(" "),s("p",[e._v("Consider a case where a user wants to access preferences for their text editor. One way they could do this is to use the REST API to retrieve the settings resource from the "),s("em",[e._v("Instance")]),e._v(" scope.")]),e._v(" "),s("p",[e._v("The "),s("em",[e._v("Instance")]),e._v(" scope might contain editor defaults set by the administrator. But, if there are no defaults in "),s("em",[e._v("Instance")]),e._v(", then the data in "),s("em",[e._v("Group")]),e._v(" and "),s("em",[e._v("User")]),e._v(" would be checked.")]),e._v(" "),s("p",[e._v("Therefore, the data the user receives would be no broader than what is stored in the "),s("em",[e._v("Instance")]),e._v(" scope, but might have only been the settings they saved within their own "),s("em",[e._v("User")]),e._v(" scope (if the broader scopes do not have data for the resource).")]),e._v(" "),s("p",[e._v("Later, the user might want to save changes, and they try to save them in the "),s("em",[e._v("Instance")]),e._v(" scope. Most likely, this action will be rejected because of the preferences set by the administrator to disallow changes to the "),s("em",[e._v("Instance")]),e._v(" scope by ordinary users.")]),e._v(" "),s("h2",{attrs:{id:"rest-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[e._v("#")]),e._v(" REST API")]),e._v(" "),s("p",[e._v("When you reach the Configuration Service through a REST API, HTTP methods are used to perform the desired operation.")]),e._v(" "),s("p",[e._v("The HTTP URL scheme for the configuration dataservice is:")]),e._v(" "),s("p",[s("code",[e._v("<Server>/plugins/com.rs.configjs/services/data/<plugin ID>/<Scope>/<resource>/<optional subresources>?<query>")])]),e._v(" "),s("p",[e._v("Where the resources are one or more levels deep, using as many layers of subresources as needed.")]),e._v(" "),s("p",[e._v('Think of a resource as a collection of elements, or a directory. To access a single element, you must use the query parameter "name="')]),e._v(" "),s("h3",{attrs:{id:"rest-query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-query-parameters"}},[e._v("#")]),e._v(" REST query parameters")]),e._v(" "),s("p",[s("strong",[e._v("Name")]),e._v(" (string)")]),e._v(" "),s("p",[e._v("Get or put a single element rather than a collection.")]),e._v(" "),s("p",[s("strong",[e._v("Recursive")]),e._v(" (boolean)")]),e._v(" "),s("p",[e._v("When performing a DELETE, specifies whether to delete subresources too.")]),e._v(" "),s("p",[s("strong",[e._v("Listing")]),e._v(" (boolean)")]),e._v(" "),s("p",[e._v("When performing a GET against a resource with content subresources, "),s("code",[e._v("listing=true")]),e._v(" will provide the names of the subresources rather than both the names and contents.")]),e._v(" "),s("h3",{attrs:{id:"rest-http-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-http-methods"}},[e._v("#")]),e._v(" REST HTTP methods")]),e._v(" "),s("p",[e._v("Below is an explanation of each type of REST call.")]),e._v(" "),s("p",[e._v('Each API call includes an example request and response against a hypothetical application called the "code editor".')]),e._v(" "),s("h4",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[e._v("#")]),e._v(" GET")]),e._v(" "),s("p",[e._v("GET "),s("code",[e._v("/plugins/com.rs.configjs/services/data/<plugin>/<scope>/<resource>?name=<element>")])]),e._v(" "),s("ul",[s("li",[e._v('This returns JSON with the attribute "content" being a JSON resource that is the entire configuration that was requested. For example:')])]),e._v(" "),s("p",[s("code",[e._v("/plugins/com.rs.configjs/services/data/org.openmainframe.zowe.codeeditor/user/sessions/default?name=tabs")])]),e._v(" "),s("p",[e._v("The parts of the URL are:")]),e._v(" "),s("ul",[s("li",[e._v("Plugin: org.openmainframe.zowe.codeeditor")]),e._v(" "),s("li",[e._v("Scope: user")]),e._v(" "),s("li",[e._v("Resource: sessions")]),e._v(" "),s("li",[e._v("Subresource: default")]),e._v(" "),s("li",[e._v("Element = tabs")])]),e._v(" "),s("p",[e._v("The response body is a JSON config:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n\t"_objectType" : "com.rs.config.resource",\n\t"_metadataVersion" : "1.1",\n\t"resource" : "org.openmainframe.zowe.codeeditor/USER/sessions/default",\n\t"contents" : {\n\t\t"_metadataVersion" : "1.1",\n\t\t"_objectType" : "org.openmainframe.zowe.codeeditor.sessions.tabs",\n\t\t"tabs" : [{\n\t\t\t\t"title" : "TSSPG.REXX.EXEC(ARCTEST2)",\n\t\t\t\t"filePath" : "TSSPG.REXX.EXEC(ARCTEST2)",\n\t\t\t\t"isDataset" : true\n\t\t\t}, {\n\t\t\t\t"title" : ".profile",\n\t\t\t\t"filePath" : "/u/tsspg/.profile"\n\t\t\t}\n\t\t]\n\t}\n}\n')])])]),s("p",[e._v("GET "),s("code",[e._v("/plugins/com.rs.configjs/services/data/<plugin>/<scope>/<resource>")])]),e._v(" "),s("p",[e._v("This returns JSON with the attribute "),s("code",[e._v("content")]),e._v(" being a JSON object that has each attribute being another JSON object, which is a single configuration element.")]),e._v(" "),s("p",[e._v("GET "),s("code",[e._v("/plugins/com.rs.configjs/services/data/<plugin>/<scope>/<resource>")])]),e._v(" "),s("p",[e._v("(When subresources exist.)")]),e._v(" "),s("p",[e._v("This returns a listing of subresources that can, in turn, be queried.")]),e._v(" "),s("h4",{attrs:{id:"put"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[e._v("#")]),e._v(" PUT")]),e._v(" "),s("p",[e._v("PUT "),s("code",[e._v("/plugins/com.rs.configjs/services/data/<plugin>/<scope>/<resource>?name=<element>")])]),e._v(" "),s("p",[e._v("Stores a single element (must be a JSON object {...}) within the requested scope, ignoring aggregation policies, depending on the user privilege. For example:")]),e._v(" "),s("p",[s("code",[e._v("/plugins/com.rs.configjs/services/data/org.openmainframe.zowe.codeeditor/user/sessions/default?name=tabs")])]),e._v(" "),s("p",[e._v("Body:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "_metadataVersion" : "1.1",\n  "_objectType" : "org.openmainframe.zowe.codeeditor.sessions.tabs",\n  "tabs" : [{\n      "title" : ".profile",\n      "filePath" : "/u/tsspg/.profile"\n    }, {\n      "title" : "TSSPG.REXX.EXEC(ARCTEST2)",\n      "filePath" : "TSSPG.REXX.EXEC(ARCTEST2)",\n      "isDataset" : true\n    }, {\n      "title" : ".emacs",\n      "filePath" : "/u/tsspg/.emacs"\n    }\n  ]\n}\n\n')])])]),s("p",[e._v("Response:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "_objectType" : "com.rs.config.resourceUpdate",\n  "_metadataVersion" : "1.1",\n  "resource" : "org.openmainframe.zowe.codeeditor/USER/sessions/default",\n  "result" : "Replaced item."\n}\n')])])]),s("h4",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" DELETE")]),e._v(" "),s("p",[e._v("DELETE "),s("code",[e._v("/plugins/com.rs.configjs/services/data/<plugin>/<scope>/<resource>?recursive=true")])]),e._v(" "),s("p",[e._v("Deletes all files in all leaf resources below the resource specified.")]),e._v(" "),s("p",[e._v("DELETE "),s("code",[e._v("/plugins/com.rs.configjs/services/data/<plugin>/<scope>/<resource>?name=<element>")])]),e._v(" "),s("p",[e._v("Deletes a single file in a leaf resource.")]),e._v(" "),s("p",[e._v("DELETE "),s("code",[e._v("/plugins/com.rs.configjs/services/data/<plugin>/<scope>/<resource>")])]),e._v(" "),s("ul",[s("li",[e._v("Deletes all files in a leaf resource.")]),e._v(" "),s("li",[e._v("Does not delete the directory on disk.")])]),e._v(" "),s("h3",{attrs:{id:"administrative-access-and-group"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#administrative-access-and-group"}},[e._v("#")]),e._v(" Administrative access and group")]),e._v(" "),s("p",[e._v("By means not discussed here, but instead handled by the server's authentication and authorization code, a user might be privileged to access or modify items that they do not own.")]),e._v(" "),s("p",[e._v("In the simplest case, it might mean that the user is able to do a PUT, POST, or DELETE to a level above "),s("em",[e._v("User")]),e._v(", such as "),s("em",[e._v("Instance")]),e._v(".")]),e._v(" "),s("p",[e._v("The more interesting case is in accessing another user's contents. In this case, the shape of the URL is different. Compare the following two commands:")]),e._v(" "),s("p",[e._v("GET "),s("code",[e._v("/plugins/com.rs.configjs/services/data/<plugin>/user/<resource>")])]),e._v(" "),s("p",[e._v("Gets the content for the current user.")]),e._v(" "),s("p",[e._v("GET "),s("code",[e._v("/plugins/com.rs.configjs/services/data/<plugin>/users/<username>/<resource>")])]),e._v(" "),s("p",[e._v("Gets the content for a specific user if authorized.")]),e._v(" "),s("p",[e._v("This is the same structure that is used for the "),s("em",[e._v("Group")]),e._v(" scope. When requesting content from the "),s("em",[e._v("Group")]),e._v(" scope, the user is checked to see if they are authorized to make the request for the specific group. For example:")]),e._v(" "),s("p",[e._v("GET "),s("code",[e._v("/plugins/com.rs.configjs/services/data/<plugin>/group/<groupname>/<resource>")])]),e._v(" "),s("p",[e._v("Gets the content for the given group, if the user is authorized.")]),e._v(" "),s("h2",{attrs:{id:"application-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-api"}},[e._v("#")]),e._v(" Application API")]),e._v(" "),s("p",[e._v("Retrieves and stores configuration information from specific scopes.")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" This API should only be used for configuration administration user interfaces.")]),e._v(" "),s("p",[s("code",[e._v("ZLUX.UriBroker.pluginConfigForScopeUri(pluginDefinition: ZLUX.Plugin, scope: string, resourcePath:string, resourceName:string): string;")])]),e._v(" "),s("p",[e._v('A shortcut for the preceding method, and the preferred method when you are retrieving configuration information, is simply to "consume" it. It "asks" for configurations using the '),s("em",[e._v("User")]),e._v(" scope, and allows the configuration service to decide which configuration information to retrieve and how to aggregate it. (See below on how the configuration service evaluates what to return for this type of request).")]),e._v(" "),s("p",[s("code",[e._v("ZLUX.UriBroker.pluginConfigUri(pluginDefinition: ZLUX.Plugin, resourcePath:string, resourceName:string): string;")])]),e._v(" "),s("h2",{attrs:{id:"internal-and-bootstrapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#internal-and-bootstrapping"}},[e._v("#")]),e._v(" Internal and bootstrapping")]),e._v(" "),s("p",[e._v("Some dataservices within plug-ins can take configuration that affects their behavior. This configuration is stored within the Configuration Dataservice structure, but it is not accessible through the REST API.")]),e._v(" "),s("p",[e._v("Within the instance configuration directory of a zLUX installation, each plugin may optionally have an "),s("code",[e._v("_internal")]),e._v(" directory. An example of such a path would be:")]),e._v(" "),s("p",[s("code",[e._v("~/.zowe/workspace/app-server/ZLUX/pluginStorage/<pluginName>/_internal")])]),e._v(" "),s("p",[e._v("Within each "),s("code",[e._v("_internal")]),e._v(" directory, the following directories might exist:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("services/<servicename>")]),e._v(": Configuration resources for the specific service.")]),e._v(" "),s("li",[s("code",[e._v("plugin")]),e._v(": Configuration resources that are visible to all services in the plug-in.")])]),e._v(" "),s("p",[e._v("The JSON contents within these directories are provided as Objects to dataservices through the dataservice context Object.")]),e._v(" "),s("h2",{attrs:{id:"plug-in-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-definition"}},[e._v("#")]),e._v(" Plug-in definition")]),e._v(" "),s("p",[e._v("Because the Configuration Dataservices stores data on a per-plug-in basis, each plug-in must define their resource structure to make use of the Configuration Dataservice. The resource structure definition is included in the plug-in's "),s("code",[e._v("pluginDefinition.json")]),e._v(" file.")]),e._v(" "),s("p",[e._v("For each resource and subresource, you can define an "),s("code",[e._v("aggregationPolicy")]),e._v(" to control how the data of a broader scope alters the resource data that is returned to a user when requesting a resource from a narrower Scope.")]),e._v(" "),s("p",[e._v("For example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('  "configurationData": { //is a direct attribute of the pluginDefinition JSON\n    "resources": { //always required\n      "preferences": {\n        "locationType": "relative", //this is the only option for now, but later absolute paths may be accepted\n        "aggregationPolicy": "override" //override and none for now, but more in the future\n      },\n      "sessions": { //the name at this level represents the name used within a URL, such as /plugins/com.rs.configjs/services/data/org.openmainframe.zowe.codeeditor/user/sessions\n        "aggregationPolicy": "none",\n        "subResources": {\n          "sessionName": {\n            "variable": true, //if variable=true is present, the resource must be the only one in that group but the name of the resource is substituted for the name given in the REST request, so it represents more than one\n            "aggregationPolicy": "none"\n          }\n        }\n      }\n    }\n  }\n')])])]),s("h2",{attrs:{id:"aggregation-policies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aggregation-policies"}},[e._v("#")]),e._v(" Aggregation policies")]),e._v(" "),s("p",[e._v("Aggregation policies determine how the Configuration Dataservice aggregates JSON objects from different Scopes together when a user requests a resource. If the user requests a resource from the "),s("em",[e._v("User")]),e._v(" scope, the data from the User scope might replace or be merged with the data from a broader scope such as "),s("em",[e._v("Instance")]),e._v(", to make a combined resource object that is returned to the user.")]),e._v(" "),s("p",[e._v("Aggregation policies are defined by a plug-in developer in the plug-in's definition for the Configuration Service, as the attribute "),s("code",[e._v("aggregationPolicy")]),e._v(" within a resource.")]),e._v(" "),s("p",[e._v("The following policies are currently implemented:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("NONE")]),e._v(": If the Configuration Dataservice is called for "),s("em",[e._v("Scope User")]),e._v(", only user-saved settings are sent, unless there are no user-saved settings for the query, in which case the dataservice attempts to send data that is found at a broader scope.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("OVERRIDE")]),e._v(": The Configuration Dataservice obtains data for the resource that is requested at the broadest level found, and joins the resource's properties from narrower scopes, overriding broader attributes with narrower ones, when found.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);