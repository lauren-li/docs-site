(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{293:function(e,t,o){e.exports=o.p+"assets/img/zowe-directories.32ed2434.png"},379:function(e,t,o){"use strict";o.r(t);var s=o(3),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),s("p",[e._v("The installation of Zowe™ consists of two independent processes: installing the Zowe runtime on z/OS and installing Zowe CLI on a desktop computer.")]),e._v(" "),s("p",[e._v("The Zowe z/OS runtime provides a web desktop that runs in a web browser providing a number of applications for z/OS users, together with an API mediation layer that provides capabilities useful for z/OS developers.")]),e._v(" "),s("p",[e._v("Zowe CLI can connect to z/OS servers and allows tasks to be performed through a command line interface.")]),e._v(" "),s("ul",[s("li",[e._v("A desktop computer that accesses the Zowe z/OS runtime through a web browser or REST API client does not need to have Zowe CLI installed.")]),e._v(" "),s("li",[e._v("The z/OS servers that Zowe CLI connects to does not require the Zowe z/OS components to be installed on those servers.")]),e._v(" "),s("li",[e._v("A desktop computer that uses Zowe CLI does not require the Zowe z/OS runtime to be installed on the z/OS server.")])]),e._v(" "),s("p",[e._v("Before you start the installation, review the information on system requirements and other considerations.")]),e._v(" "),s("h2",{attrs:{id:"planning-the-installation-of-zowe-z-os-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#planning-the-installation-of-zowe-z-os-components"}},[e._v("#")]),e._v(" Planning the installation of Zowe z/OS components")]),e._v(" "),s("p",[e._v("The following information is required during the installation process of the Zowe z/OS components.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("The zFS directory where you will install the Zowe runtime files and folders.  For more details of setting up and configuring the UNIX Systems Services (USS) environment, see "),s("router-link",{attrs:{to:"/user-guide/configure-uss.html"}},[e._v("UNIX System Services considerations for Zowe")]),e._v(".")],1)]),e._v(" "),s("li",[s("p",[e._v("A HLQ that the installation can create a load library and samplib containing load modules and JCL samples required to run Zowe.")])]),e._v(" "),s("li",[s("p",[e._v("Multiple instances of Zowe can be started from the same Zowe z/OS runtime.  Each launch of Zowe has its own zFS directory that is known as an instance directory.")])]),e._v(" "),s("li",[s("p",[e._v("Zowe uses a zFS directory to contain its northbound certificate keys as well as a truststore for its southbound keys.  Northbound keys are one presented to clients of the Zowe desktop or Zowe API Gateway, and southbound keys are for servers that the Zowe API gateway connects to.  The certificate directory is not part of the Zowe runtime so that it can be shared between multiple Zowe runtimes and have its permissions secured independently.")])]),e._v(" "),s("li",[s("p",[e._v("Zowe has two started tasks.")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("ZWESVSTC")]),e._v(" brings up the Zowe runtime containing the Zowe desktop, the API mediation layer and a number of Zowe applications.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("ZWESISTC")]),e._v(" is a cross memory server that the Zowe desktop uses to perform APF-authorized code. More details on the cross memory server are described in "),s("router-link",{attrs:{to:"/user-guide/configure-xmem-server.html"}},[e._v("Configuring the Zowe cross memory server")]),e._v(".")],1),e._v(" "),s("p",[e._v("In order for the two started tasks to run correctly, security manager configuration needs to be performed.  This is documented in "),s("router-link",{attrs:{to:"/user-guide/configure-zos-system.html"}},[e._v("Configuring the z/OS system for Zowe")]),e._v(" and a sample JCL member "),s("code",[e._v("ZWESECUR")]),e._v(" is shipped with Zowe that contains commands for RACF, TopSecret, and ACF2 security managers.")],1)])])])]),e._v(" "),s("h2",{attrs:{id:"topology-of-the-zowe-z-os-launch-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#topology-of-the-zowe-z-os-launch-process"}},[e._v("#")]),e._v(" Topology of the Zowe z/OS launch process")]),e._v(" "),s("p",[e._v("The following diagram depicts the high-level structure of a Zowe installation and runtime.")]),e._v(" "),s("img",{attrs:{src:o(293),alt:"Zowe Directories",width:"700px"}}),e._v(" "),s("h3",{attrs:{id:"runtime-dir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runtime-dir"}},[e._v("#")]),e._v(" RUNTIME_DIR")]),e._v(" "),s("p",[e._v("The runtime directory "),s("code",[e._v("<RUNTIME_DIR>")]),e._v(" contains the binaries and executable files. You can create a runtime directory in one of the following ways:")]),e._v(" "),s("ul",[s("li",[e._v("Executing the "),s("code",[e._v("zowe-install.sh")]),e._v(" script contained within the "),s("code",[e._v("install")]),e._v(" directory of a Zowe convenience build.")]),e._v(" "),s("li",[e._v("Installing the Zowe SMP/E FMID AZWE001 using the JCL members in the REL4 member.")]),e._v(" "),s("li",[e._v("Executing the z/OSMF worklow script "),s("code",[e._v("ZWERF01")]),e._v(" contained in the SMP/E FMID AZWE001.")])]),e._v(" "),s("p",[e._v("During execution of Zowe, the runtime directory contents are not modified.  Maintenance or APAR release for Zowe replaces the contents of the runtime directory and are rollup PTFs.")]),e._v(" "),s("h3",{attrs:{id:"instance-dir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-dir"}},[e._v("#")]),e._v(" INSTANCE_DIR")]),e._v(" "),s("p",[e._v("The instance directory "),s("code",[e._v("<INSTANCE_DIR>")]),e._v(" is required to launch Zowe.  It is created with the script "),s("code",[e._v("<RUNTIME_DIR>/bin/zowe-configure-instance.sh")]),e._v(".  More than one instance directory can be created and used to launch multiple instances of Zowe sharing the same runtime directory "),s("code",[e._v("<RUNTIME_DIR>")]),e._v(".")]),e._v(" "),s("p",[e._v("Zowe instances are started by running the script "),s("code",[e._v("<INSTANCE_DIR>/bin/zowe-start.sh")]),e._v(".  This creates a started task with the PROCLIB member "),s("code",[e._v("ZWESVSTC")]),e._v(" that is provided with the samplib "),s("code",[e._v("SZWESAMP")]),e._v(" created during the installation of Zowe.  The JCL member "),s("code",[e._v("ZWESVSTC")]),e._v(" starts a USS shell under which it launches its address spaces.")]),e._v(" "),s("p",[e._v("The instance directory file "),s("code",[e._v("instance.env")]),e._v(" is used to configure a Zowe launchable.  The file is executed during the launch of Zowe and specifies shell variables such as ports and location of dependent directories and services on z/OS.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("instance.env")]),e._v(" file sets the location of the "),s("code",[e._v("<RUNTIME_DIRECTORY>")]),e._v(" as well as the "),s("code",[e._v("<KEYSTORE_DIRECTORY>")])]),e._v(" "),s("h3",{attrs:{id:"keystore-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keystore-directory"}},[e._v("#")]),e._v(" KEYSTORE_DIRECTORY")]),e._v(" "),s("p",[e._v("Zowe uses certificates to encrypt data as well as a truststore.  The keystore directory "),s("code",[e._v("<KEYSTORE_DIRECTORY>")]),e._v(" controls where the certificates are located, either in a JavaKeystore or a z/OS keyring.  A "),s("code",[e._v("<KEYSTORE_DIRECTORY>")]),e._v(" is created by using the script "),s("code",[e._v("<RUNTIME_DIR>/bin/zowe-setup-certificates.sh")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);