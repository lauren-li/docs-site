(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{479:function(e,i,t){"use strict";t.r(i);var a=t(3),n=Object(a.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"api-mediation-layer-onboarding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-mediation-layer-onboarding-configuration"}},[e._v("#")]),e._v(" API Mediation Layer onboarding configuration")]),e._v(" "),t("p",[e._v("This article describes the process of configuring a REST service to onboard with the Zowe API Mediation Layer using the API ML Plain Java Enabler. As a service developer, you can provide basic configuration of a service to onboard to the API ML. You can also externalize configuration parameters for subsequent customization by a systems administrator.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#configuring-a-rest-service-for-api-ml-onboarding"}},[e._v("Configuring a REST service for API ML onboarding")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#plain-java-enabler-service-onboarding-api"}},[e._v("Plain Java Enabler service onboarding")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#automatic-initialization-of-the-onboarding-configuration-by-a-single-method-call"}},[e._v("Automatic initialization of the onboarding configuration by a single method call")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#Validating-successful-onboarding-with-the-API-Mediation-Layer"}},[e._v("Validating successful onboarding with the API Mediation Layer")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#loading-yaml-configuration-files"}},[e._v("Loading YAML configuration files")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#loading-a-single-yaml-configuration-file"}},[e._v("Loading a single YAML configuration file")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#loading-and-merging-two-yaml-configuration-files"}},[e._v("Loading and merging two YAML configuration files")])])])])]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("The API ML Plain Java Enabler (PJE) is a library which helps to simplify the process of onboarding a REST service with the API ML.\nThis article describes how to provide and externalize the Zowe API ML onboarding configuration of your REST service using the PJE.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" For more information about specific configuration parameters and their possible values, and the service registration process, see the specific documentation of the onboarding approach you are using for your project:")]),e._v(" "),t("ul",[t("li",[t("router-link",{attrs:{to:"/extend/extend-apiml/onboard-direct-eureka-call.html"}},[e._v("Direct REST call registration (No enabler)")])],1),e._v(" "),t("li",[t("router-link",{attrs:{to:"/extend/extend-apiml/onboard-plain-java-enabler.html"}},[e._v("Plain Java Enabler")])],1)]),e._v(" "),t("p",[e._v("The PJE is the most universal Zowe API ML enabler. This enabler uses only Java, and does not use advanced Inversion of Control ("),t("em",[e._v("IoC")]),e._v(") or Dependency Injection ("),t("em",[e._v("DI")]),e._v(") technologies.\nThe PJE enables you to onboard any REST service implemented in Java, avoiding dependencies, versions collisions, unexpected application behavior, and unnecessarily large service executables.")]),e._v(" "),t("p",[e._v("Service developers provide onboarding configuration as part of the service source code. While this configuration is valid for the development system environment, it is likely to be different for an automated integration environment. Typically, system administrators need to deploy a service on multiple sites that have different system environments and requirements such as security.")]),e._v(" "),t("p",[e._v("The PJE supports both the service developer and the system administrator with the functionality of externalizing the service onboarding configuration.")]),e._v(" "),t("p",[e._v("The PJE provides a mechanism to load API ML onboarding service configuration from one or two "),t("em",[e._v("YAML")]),e._v(" files.")]),e._v(" "),t("h2",{attrs:{id:"configuring-a-rest-service-for-api-ml-onboarding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-a-rest-service-for-api-ml-onboarding"}},[e._v("#")]),e._v(" Configuring a REST service for API ML onboarding")]),e._v(" "),t("p",[e._v("In most cases, the API ML Discovery Service, Gateway, and service endpoint addresses are not known at the time of building the service executables.\nSimilarly, security material such as certificates, private/public keys, and their corresponding passwords depend on the specific deployment environment, and are not intended to be publicly accessible.\nTherefore, to provide a higher level of flexibility, the PJE implements routines to build service onboarding configuration by locating and loading one or two "),t("em",[e._v("YAML")]),e._v(" file sources:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("internal "),t("em",[e._v("service-configuration.yml")])])]),e._v(" "),t("p",[e._v("The first configuration file is typically internal to the service deployment artifact. This file must be accessible on the service "),t("code",[e._v("classpath")]),e._v(". This file contains basic API ML configuration based on values known at development time. Usually, this basic API ML configuration is provided by the service developer and is located in the "),t("code",[e._v("/resources")]),e._v(" folder of the Java project source tree. This file is usually found in the deployment artifacts under "),t("code",[e._v("/WEB-INF/classes")]),e._v(". The configuration contained in this file is provided by the service developer or builder. As such, it will not match every possible production environment and its corresponding requirements.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("external or additional "),t("em",[e._v("service-configuration.yml")])])]),e._v(" "),t("p",[e._v("The second configuration file is used to externalize the configuration. This file can be stored anywhere on the local file system, as long as that the service has access to that location.\nThis file is provided by the service deployer/system administrator and contains the correct parameter values for the specific production environment.")])])]),e._v(" "),t("p",[e._v("At service start-up time, both "),t("em",[e._v("YAML")]),e._v(" configuration files are merged, where the externalized configuration (if provided) has higher priority.")]),e._v(" "),t("p",[e._v("The values of parameters in both files can be rewritten by Java system properties or servlet context parameters that were defined during service installation/configuration, or at start-up time.")]),e._v(" "),t("p",[e._v("In the "),t("em",[e._v("YAML")]),e._v(" file, standard rewriting placeholders for parameter values use the following format:")]),e._v(" "),t("p",[t("code",[e._v("${apiml.parameter.key}")])]),e._v(" "),t("p",[e._v("The actual values are taken from [key, value] pairs defined as Java system properties or servlet context parameters. The system properties can be provided directly on a command line. The servlet context parameters can be provided in the service "),t("code",[e._v("web.xml")]),e._v(" or in an external file.")]),e._v(" "),t("p",[e._v("The specific approach of how to provide the servlet context to the user service application depends on the application loading mechanism and the specific Java servlet container environment.")]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("p",[e._v("If the service is deployed in a Tomcat servlet container, you can configure the context by placing an "),t("em",[e._v("XML")]),e._v(" file with the same name\nas the application deployment unit into "),t("code",[e._v("_$CATALINA_BASE/conf/[enginename]/[hostname]/_")]),e._v(".")]),e._v(" "),t("p",[e._v("Other containers provide different mechanisms for the same purpose.")]),e._v(" "),t("h2",{attrs:{id:"plain-java-enabler-service-onboarding-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plain-java-enabler-service-onboarding-api"}},[e._v("#")]),e._v(" Plain Java Enabler service onboarding API")]),e._v(" "),t("p",[e._v("You can initialize your service onboarding configuration using different methods of the Plain Java Enabler class "),t("code",[e._v("ApiMediationServiceConfigReader")]),e._v(":")]),e._v(" "),t("h3",{attrs:{id:"automatic-initialization-of-the-onboarding-configuration-by-a-single-method-call"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automatic-initialization-of-the-onboarding-configuration-by-a-single-method-call"}},[e._v("#")]),e._v(" Automatic initialization of the onboarding configuration by a single method call")]),e._v(" "),t("p",[e._v("The following code block shows automatic initialization of the onboarding configuration by a single method call:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public ApiMediationServiceConfig initializeAPIMLConfiguration(ServletContext context); \n")])])]),t("p",[e._v("This method receives the "),t("code",[e._v("ServletContext")]),e._v(" parameter, which holds a map of parameters that provide all necessary information for building the onboarding configuration.\nThe following code block is an example of Java Servlet context configuration.")]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("pre",[t("code",[e._v('  <Context>\n     \n     <Parameter name="apiml.config.location" value="/service-config.yml"/>\n     \x3c!-- Relative path to configuration file:    \n     <Parameter name="apiml.config.additional-location" value="../conf/Catalina/localhost/apiml-plugin-poc_plain-java-enabler.yml" /> \n   --\x3e\n     <Parameter name="apiml.config.additional-location" value="/home/pin/bin/apache-tomcat-9.0.14/conf/Catalina/localhost/apiml-plugin-poc_plain-java-enabler.yml" />\n      \n     <Parameter name="apiml.serviceId" value="discopin" />\n     <Parameter name="apiml.serviceIpAddress" value="127.0.0.2" />\n     <Parameter name="apiml.discoveryService.hostname" value="localhost" />\n     <Parameter name="apiml.discoveryService.port" value="10011" />\n      \n     <Parameter name="apiml.ssl.enabled" value="true" />\n     <Parameter name="apiml.ssl.verifySslCertificatesOfServices" value="true" />\n     <Parameter name="apiml.ssl.keyPassword" value="password" />\n     <Parameter name="apiml.ssl.keystore.password" value="password" />\n     <Parameter name="apiml.ssl.truststore.password" value="password" />\n     <Parameter name="apiml.ssl.keystore" value="../keystore/localhost/localhost.truststore.p12" />\n     <Parameter name="apiml.ssl.truststore" value="../keystore/localhost/localhost.truststore.p12" />\n      \n  </Context>\n')])]),e._v(" "),t("p",[e._v("Where the two parameters corresponding to the location of the configuration files are:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("apiml.config.location")])]),e._v(" "),t("p",[e._v("This parameter describes the location of the basic configuration file.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("apiml.config.additional-location")])]),e._v(" "),t("p",[e._v("This parameter describes the location of the external configuration file.")])])]),e._v(" "),t("p",[e._v("The method in this example uses the provided configuration file names in order to load them as "),t("em",[e._v("YAML")]),e._v(" files into the internal Java configuration object of type "),t("em",[e._v("ApiMediationServiceConfig")]),e._v(".")]),e._v(" "),t("p",[e._v("The other context parameters with the "),t("em",[e._v("apiml")]),e._v(" prefix are used to rewrite values of properties in the configuration files.")]),e._v(" "),t("h2",{attrs:{id:"validating-successful-onboarding-with-the-api-mediation-layer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validating-successful-onboarding-with-the-api-mediation-layer"}},[e._v("#")]),e._v(" Validating successful onboarding with the API Mediation Layer")]),e._v(" "),t("p",[e._v("Ensure that you successfully onboarded a service with the API Mediation Layer.")]),e._v(" "),t("p",[t("strong",[e._v("Follow these steps:")])]),e._v(" "),t("ol",[t("li",[t("p",[t("router-link",{attrs:{to:"/extend/extend-apiml/onboard-overview.html#validating-successful-onboarding"}},[e._v("Validate successful onboarding")])],1)]),e._v(" "),t("li",[t("p",[e._v("Check that you can access your API service endpoints through the Gateway.")])]),e._v(" "),t("li",[t("p",[e._v("(Optional) Check that you can access your API service endpoints directly outside of the Gateway.")])])]),e._v(" "),t("h2",{attrs:{id:"loading-yaml-configuration-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loading-yaml-configuration-files"}},[e._v("#")]),e._v(" Loading YAML configuration files")]),e._v(" "),t("p",[t("em",[e._v("YAML")]),e._v(" configuration files can be loaded either as a single "),t("em",[e._v("YAML")]),e._v(" file, or by merging two "),t("em",[e._v("YAML")]),e._v(" files. Use the "),t("code",[e._v("loadConfiguration")]),e._v(" method described later in this article that corresponds to your service requirements.")]),e._v(" "),t("p",[e._v("After successfully loading a configuration file, the loading method "),t("code",[e._v("loadConfiguration")]),e._v(" uses Java system properties to substitute corresponding configuration properties.")]),e._v(" "),t("h3",{attrs:{id:"loading-a-single-yaml-configuration-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loading-a-single-yaml-configuration-file"}},[e._v("#")]),e._v(" Loading a single YAML configuration file")]),e._v(" "),t("p",[e._v("To build your configuration from multiple sources, load a single configuration file, and then\nrewrite parameters as needed using values from another configuration source. See: "),t("a",{attrs:{href:"#Loading-and-merging-two-YAML-configuration-files"}},[e._v("Loading and merging two YAML configuration files")]),e._v(" described later in this article.")]),e._v(" "),t("p",[e._v("Use the following method to load a single "),t("em",[e._v("YAML")]),e._v(" configuration file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public ApiMediationServiceConfig loadConfiguration(String configurationFileName);  \n")])])]),t("p",[e._v("This method receives a single "),t("em",[e._v("String")]),e._v(" parameter and can be used to load an internal or an external configuration file.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" This method first attempts to load the configuration as a Java resource. If the file is not found, the method attempts to resolve the file name as an absolute. If the file name still cannot be found, this method attempts to resolve the file as a relative path. When the file is found, the method loads the contents of the file and maps them to internal data classes. After loading the configuration file, the method attempts to substitute/rewrite configuration property values with corresponding Java System properties.")]),e._v(" "),t("h3",{attrs:{id:"loading-and-merging-two-yaml-configuration-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loading-and-merging-two-yaml-configuration-files"}},[e._v("#")]),e._v(" Loading and merging two YAML configuration files")]),e._v(" "),t("p",[e._v("To load and merge two configuration files, use the following method:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public ApiMediationServiceConfig loadConfiguration(String internalConfigurationFileName, String externalizedConfigurationFileName)\n")])])]),t("p",[e._v("where:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("String internalConfigurationFileName")])]),e._v(" "),t("p",[e._v("references the basic configuration file name.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("String externalizedConfigurationFileName")])]),e._v(" "),t("p",[e._v("references the external configuration file name.")])])]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v("  The external configuration file takes precedence over the basic configuration file in order to match the target deployment environment.\nAfter loading and before merging, each configuration will be separately patched using Java System properties.")]),e._v(" "),t("p",[e._v("The following code block presents an example of how to load and merge onboarding configuration from "),t("em",[e._v("YAML")]),e._v(" files.")]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("pre",[t("code",[e._v(' @Slf4j\n public class ApiDiscoveryListener implements ServletContextListener {\n \n     /**\n      * @{link ApiMediationClient} instance used to register and unregister the service with API ML Discovery service.\n      */\n     private ApiMediationClient apiMediationClient;\n \n     /**\n      *  Creates {@link ApiMediationServiceConfig}\n      *  Creates and initializes {@link ApiMediationClient} instance, which is then used to register this service\n      *  with API ML discovery service. The registration method of ApiMediationClientImpl catches all RuntimeExceptions\n      *  and only can throw {@link ServiceDefinitionException} checked exception.\n      *\n      * @param sce\n      */\n     @Override\n     public void contextInitialized(ServletContextEvent sce) {\n \n         ServletContext context = sce.getServletContext();\n \n         /*\n          * Call loadConfiguration method with both config file names initialized above.\n          */\n         ApiMediationServiceConfig defaultConfig = new ApiMediationServiceConfigReader().initializeAPIMLConfiguration(context);\n \n         /*\n          * Instantiate {@link ApiMediationClientImpl} which is used to un/register the service with API ML Discovery service.\n          */\n         apiMediationClient = new ApiMediationClientImpl();\n \n         /*\n          * Call the {@link ApiMediationClient} instance to register your REST service with API ML Discovery service.\n          */\n         try {\n             apiMediationClient.register(defaultConfig);\n         } catch (ServiceDefinitionException sde) {\n             log.error("Service configuration failed. Check log for previous errors: ", sde);\n         }\n     }\n \n     /**\n      * If apiMediationClient is not null, attmpts to unregister this service from API ML registry.\n      */\n     @Override\n     public void contextDestroyed(ServletContextEvent sce) {\n         if (apiMediationClient != null) {\n             apiMediationClient.unregister();\n         }\n     }\n }\n')])])])}),[],!1,null,null,null);i.default=n.exports}}]);