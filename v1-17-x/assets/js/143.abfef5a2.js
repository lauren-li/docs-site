(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{377:function(e,t,o){"use strict";o.r(t);var r=o(3),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"installing-zowe-runtime-from-a-convenience-build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-runtime-from-a-convenience-build"}},[e._v("#")]),e._v(" Installing Zowe runtime from a convenience build")]),e._v(" "),o("p",[e._v("You install the Zowe™ convenience build by obtaining a PAX file for a build and using this to create the Zowe runtime environment.")]),e._v(" "),o("p",[e._v("After you "),o("a",{attrs:{href:"#obtaining-and-preparing-the-convenience-build"}},[e._v("obtain the PAX file")]),e._v(", you can take the following steps to complete the installation.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#step-1-locate-the-install-directory"}},[e._v("Step 1: Locate the install directory")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#step-2-choose-a-runtime-uss-folder"}},[e._v("Step 2: Choose a runtime USS folder")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#step-3-choose-a-dataset-hlq-for-the-samplib-and-loadlib"}},[e._v("Step 3: Choose a dataset HLQ for the SAMPLIB and LOADLIB")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#step-4-method-1-install-the-zowe-runtime-using-shell-script"}},[e._v("Step 4 (Method 1): Install the Zowe runtime using shell script")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#step-4-method-2-install-the-zowe-runtime-using-zosmf-workflow"}},[e._v("Step 4 (Method 2): Install the Zowe runtime using z/OSMF Workflow")])])]),e._v(" "),o("h2",{attrs:{id:"obtaining-and-preparing-the-convenience-build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-and-preparing-the-convenience-build"}},[e._v("#")]),e._v(" Obtaining and preparing the convenience build")]),e._v(" "),o("p",[e._v("The Zowe installation file for Zowe z/OS components is distributed as a PAX file that contains the runtimes and the scripts to install and launch the z/OS runtime.")]),e._v(" "),o("p",[e._v("For each release, there is a PAX file that is named "),o("code",[e._v("zowe-V.v.p.pax")]),e._v(", where")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("V")]),e._v(" indicates the Major Version")]),e._v(" "),o("li",[o("code",[e._v("v")]),e._v(" indicates the Minor Version")]),e._v(" "),o("li",[o("code",[e._v("p")]),e._v(" indicates the Patch Version")])]),e._v(" "),o("p",[e._v("The numbers are incremented each time a release is created, so the higher the numbers, the later the release.  For more information about the Zowe release number, see "),o("router-link",{attrs:{to:"/troubleshoot/troubleshoot-zowe-release.html"}},[e._v("Understanding the Zowe release")]),e._v(".")],1),e._v(" "),o("p",[e._v("To download the PAX file, open your web browser and click the "),o("strong",[e._v("Zowe z/OS Convenience build")]),e._v(" button on the "),o("a",{attrs:{href:"https://www.zowe.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe Download"),o("OutboundLink")],1),e._v(" website to save it to a folder on your desktop.")]),e._v(" "),o("p",[e._v("After you have the "),o("code",[e._v("zowe-V.v.p.PAX")]),e._v(" file, follow these steps.")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("(Optional)")]),e._v(" Verify the integrity of the PAX file to ensure that the file you download is officially distributed by the Zowe project.  This step is only needed if you are unsure of the provenance of the PAX file and want to ensure that it is an original Zowe release driver.")]),e._v(" "),o("p",[e._v("Follow the instructions in the "),o("strong",[e._v("Verify Hash and Signature of Zowe Binary")]),e._v(" section on the post-download page "),o("code",[e._v("https://d1xozlojgf8voe.cloudfront.net/post_download.html?version=V.v.p")]),e._v(" after you download the official build. For example, the post-download page for Version 1.4.0 is "),o("a",{attrs:{href:"https://d1xozlojgf8voe.cloudfront.net/post_download.html?version=1.4.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://d1xozlojgf8voe.cloudfront.net/post_download.html?version=1.4.0"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Transfer the PAX file to z/OS.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("p",[e._v("a. Open a terminal in Mac OS/Linux, or command prompt in Windows OS, and navigate to the directory where you downloaded the Zowe PAX file.")]),e._v(" "),o("p",[e._v("b. Connect to z/OS using SFTP. Issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("sftp <userID@ip.of.zos.box>\n")])])]),o("p",[e._v("If SFTP is not available or if you prefer to use FTP, you can issue the following command instead:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ftp <userID@ip.of.zos.box>\n")])])]),o("p",[o("strong",[e._v("Note:")]),e._v(" When you use FTP, switch to binary file transfer mode by issuing the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("bin\n")])])]),o("p",[e._v("c. Navigate to the target directory that you want to transfer the Zowe PAX file into on z/OS.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" After you connect to z/OS and enter your password, you enter the UNIX file system. The following commands are useful:")]),e._v(" "),o("ul",[o("li",[e._v("To see what directory you are in, type "),o("code",[e._v("pwd")]),e._v(".")]),e._v(" "),o("li",[e._v("To switch directory, type "),o("code",[e._v("cd")]),e._v(".")]),e._v(" "),o("li",[e._v("To list the contents of a directory, type "),o("code",[e._v("ls")]),e._v(".")]),e._v(" "),o("li",[e._v("To create a directory, type "),o("code",[e._v("mkdir")]),e._v(".")])]),e._v(" "),o("p",[e._v("d. When you are in the directory you want to transfer the Zowe PAX file into, issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("put <zowe-V.v.p>.pax\n")])])]),o("p",[e._v("Where "),o("em",[e._v("zowe-V.v.p")]),e._v(" is a variable that indicates the name of the PAX file you downloaded.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" When your terminal is connected to z/OS through FTP or SFTP, you can prepend commands with "),o("code",[e._v("l")]),e._v(" to have them issued against your desktop.  To list the contents of a directory on your desktop, type "),o("code",[e._v("lls")]),e._v(" where "),o("code",[e._v("ls")]),e._v(" lists contents of a directory on z/OS.")])]),e._v(" "),o("li",[o("p",[e._v("When the PAX file is transferred, expand the PAX file by issuing the following command in an SSH session:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("pax -ppx -rf <zowe-V.v.p>.pax\n")])])]),o("p",[e._v("Where "),o("em",[e._v("zowe-V.v.p")]),e._v(" is a variable that indicates the name of the PAX file you downloaded.")]),e._v(" "),o("p",[e._v("This will expand to a file structure.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("   /bin\n   /files\n   /install\n   /scripts\n   ...\n")])])]),o("p",[o("strong",[e._v("Note")]),e._v(": The PAX file will expand into the current directory. A good practice is to keep the installation directory apart from the directory that contains the PAX file.  To do this, you can create a directory such as "),o("code",[e._v("/zowe/paxes")]),e._v(" that contains the PAX files, and another such as "),o("code",[e._v("/zowe/builds")]),e._v(".  Use SFTP to transfer the Zowe PAX file into the "),o("code",[e._v("/zowe/paxes")]),e._v(" directory, use the "),o("code",[e._v("cd")]),e._v(" command to switch into "),o("code",[e._v("/zowe/builds")]),e._v(" and issue the command "),o("code",[e._v("pax -ppx -rf ../paxes/<zowe-V.v.p>.pax")]),e._v(".  The "),o("code",[e._v("/install")]),e._v(" folder will be created inside the "),o("code",[e._v("zowe/builds")]),e._v(" directory from where the installation can be launched.")])])]),e._v(" "),o("h2",{attrs:{id:"installing-the-zowe-runtime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-zowe-runtime"}},[e._v("#")]),e._v(" Installing the Zowe runtime")]),e._v(" "),o("p",[e._v("The first installation step is to create a USS folder that contains the Zowe runtime artifacts.  This is known as the "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"step-1-locate-the-install-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-1-locate-the-install-directory"}},[e._v("#")]),e._v(" Step 1: Locate the install directory")]),e._v(" "),o("p",[e._v("Navigate to the directory where the installation archive is extracted. Locate the "),o("code",[e._v("/install")]),e._v(" directory.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("  /install\n    /zowe-install.sh\n")])])]),o("h3",{attrs:{id:"step-2-choose-a-runtime-uss-folder"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-2-choose-a-runtime-uss-folder"}},[e._v("#")]),e._v(" Step 2: Choose a runtime USS folder")]),e._v(" "),o("p",[e._v("For Zowe to execute, it must be installed into a runtime directory or "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(".  This directory will be created during the installation process and the user who performs the installation must have write permission for the installation to succeed.")]),e._v(" "),o("p",[e._v("If you are installing an upgrade of Zowe, the runtime directory used should be the existing "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(" of where the previous Zowe was installed.  Upgrading Zowe is only supported for Version 1.8 or later.")]),e._v(" "),o("p",[e._v("For an enterprise installation of Zowe, a "),o("code",[e._v("<RUNTIME_DIR>")]),e._v(" could be "),o("code",[e._v("/usr/lpp/zowe/v1")]),e._v(".  For users who test Zowe for themselves, it could be "),o("code",[e._v("~/zowe/v1")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"step-3-choose-a-dataset-hlq-for-the-samplib-and-loadlib"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-3-choose-a-dataset-hlq-for-the-samplib-and-loadlib"}},[e._v("#")]),e._v(" Step 3: Choose a dataset HLQ for the SAMPLIB and LOADLIB")]),e._v(" "),o("p",[e._v("During installation, two PDS data sets are created: the "),o("code",[e._v("SZWESAMP")]),e._v(" data set and the "),o("code",[e._v("SZWEAUTH")]),e._v(" data set.  These are not used at runtime and there is a further step needed to promote these to the z/OS execution environment but they contain required JCL and load modules.")]),e._v(" "),o("p",[e._v("You must know the "),o("code",[e._v("<DATA_SET_PREFIX>")]),e._v(" into which to create the "),o("code",[e._v("SZWESAMP")]),e._v(" and the "),o("code",[e._v("SZWEAUTH")]),e._v(" PDS data sets.  If a "),o("code",[e._v("<DATA_SET_PREFIX>")]),e._v(" of "),o("code",[e._v("OPENSRC.ZWE")]),e._v(" is specified, the PDS data sets "),o("code",[e._v("OPENSRC.ZWE.SZWESAMP")]),e._v(" and "),o("code",[e._v("OPENSRC.ZWE.SZWEAUTH")]),e._v(" will be created during installation.  The storage requirements are included here.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Library DDNAME")]),e._v(" "),o("th",[e._v("Member Type")]),e._v(" "),o("th",[e._v("Target Volume")]),e._v(" "),o("th",[e._v("Type")]),e._v(" "),o("th",[e._v("Org")]),e._v(" "),o("th",[e._v("RECFM")]),e._v(" "),o("th",[e._v("LRECL")]),e._v(" "),o("th",[e._v("No. of 3390 Trks")]),e._v(" "),o("th",[e._v("No. of DIR Blks")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("SZWEAUTH")]),e._v(" "),o("td",[e._v("APF Load Modules")]),e._v(" "),o("td",[e._v("ANY")]),e._v(" "),o("td",[e._v("U")]),e._v(" "),o("td",[e._v("PDSE")]),e._v(" "),o("td",[e._v("U")]),e._v(" "),o("td",[e._v("0")]),e._v(" "),o("td",[e._v("15")]),e._v(" "),o("td",[e._v("N/A")])]),e._v(" "),o("tr",[o("td",[e._v("SZWESAMP")]),e._v(" "),o("td",[e._v("Samples")]),e._v(" "),o("td",[e._v("ANY")]),e._v(" "),o("td",[e._v("U")]),e._v(" "),o("td",[e._v("PDSE")]),e._v(" "),o("td",[e._v("FB")]),e._v(" "),o("td",[e._v("80")]),e._v(" "),o("td",[e._v("15")]),e._v(" "),o("td",[e._v("5")])])])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("SZWESAMP")]),e._v(" data set contains the following members.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Member name")]),e._v(" "),o("th",[e._v("Purpose")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("ZWESECUR")]),e._v(" "),o("td",[e._v("JCL member to configure z/OS user IDs and permissions required to run Zowe")])]),e._v(" "),o("tr",[o("td",[e._v("ZWENOSEC")]),e._v(" "),o("td",[e._v("JCL member to undo the configuration steps performed in ZWESECUR and revert z/OS environment changes.")])]),e._v(" "),o("tr",[o("td",[e._v("ZWEKRING")]),e._v(" "),o("td",[e._v("JCL member to configure a z/OS keyring containing the Zowe certificate")])]),e._v(" "),o("tr",[o("td",[e._v("ZWENOKYR")]),e._v(" "),o("td",[e._v("JCL member to undo the configuration steps performed in ZWEKRING")])]),e._v(" "),o("tr",[o("td",[e._v("ZWESVSTC")]),e._v(" "),o("td",[e._v("JCL to start Zowe")])]),e._v(" "),o("tr",[o("td",[e._v("ZWEXMSTC")]),e._v(" "),o("td",[e._v("JCL to start the Zowe cross memory server")])]),e._v(" "),o("tr",[o("td",[e._v("ZWESIP00")]),e._v(" "),o("td",[e._v("Parmlib member for the cross memory server")])]),e._v(" "),o("tr",[o("td",[e._v("ZWESASTC")]),e._v(" "),o("td",[e._v("Started task JCL for the cross memory Auxiliary server")])]),e._v(" "),o("tr",[o("td",[e._v("ZWESIPRG")]),e._v(" "),o("td",[e._v("Console commands to APF authorize the cross memory server load library")])]),e._v(" "),o("tr",[o("td",[e._v("ZWESISCH")]),e._v(" "),o("td",[e._v("PPT entries required by Cross memory server and its Auxiliary address spaces to run in Key(4)")])])])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("SZWEAUTH")]),e._v(" data set is a load library containing the following members.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Member name")]),e._v(" "),o("th",[e._v("Purpose")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("ZWESIS01")]),e._v(" "),o("td",[e._v("Load module for the cross memory server")])]),e._v(" "),o("tr",[o("td",[e._v("ZWESAUX")]),e._v(" "),o("td",[e._v("Load module for the cross memory server's auxiliary address space")])])])]),e._v(" "),o("h4",{attrs:{id:"step-3a-choose-a-log-directory-optional"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-3a-choose-a-log-directory-optional"}},[e._v("#")]),e._v(" Step 3a: Choose a log directory (optional)")]),e._v(" "),o("p",[e._v("By default, during installation and configuration, various logs will be created in "),o("code",[e._v("/global/zowe/logs")]),e._v(" if it is writable, or "),o("code",[e._v("~/zowe/logs")]),e._v(". If neither of these directories exists, or is writable by the user who installs Zowe, or you want to override and provide your own directory that contains logs, you can specify this with the "),o("code",[e._v("-l")]),e._v(" parameter.")]),e._v(" "),o("p",[e._v("Next, you can install the Zowe runtime via different methods.")]),e._v(" "),o("h3",{attrs:{id:"step-4-method-1-install-the-zowe-runtime-using-shell-script"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-4-method-1-install-the-zowe-runtime-using-shell-script"}},[e._v("#")]),e._v(" Step 4 (Method 1): Install the Zowe runtime using shell script")]),e._v(" "),o("p",[e._v("You install the Zowe runtime by executing the "),o("code",[e._v("zowe-install.sh")]),e._v(" script passing in the arguments for the USS runtime directory and the prefix for the SAMPLIB and loadlib PDS members.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("   zowe-install.sh -i <RUNTIME_DIR> -h <DATASET_PREFIX> [-l <LOG_DIR>]\n")])])]),o("p",[e._v("In this documentation, the steps of creating the runtime directory and configuring the runtime directory are described separately. The configuration step is the same for a Zowe runtime whether it is installed from a convenience build or from an SMP/E distribution.")]),e._v(" "),o("h3",{attrs:{id:"step-4-method-2-install-the-zowe-runtime-using-z-osmf-workflow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-4-method-2-install-the-zowe-runtime-using-z-osmf-workflow"}},[e._v("#")]),e._v(" Step 4 (Method 2): Install the Zowe runtime using z/OSMF Workflow")]),e._v(" "),o("p",[e._v("A z/OSMF workflow provides the ability to encapsulate a task as a set of dependent steps. These can be divided across different areas of an organization and can form the basis for the automated auditable processes.")]),e._v(" "),o("p",[e._v("z/OSMF workflows consist of a workflow definition that users then operate and manage as workflow tasks. z/OSMF Workflow tasks can help to guide the activities of system programmers, security administrators, and others who are responsible for managing the configuration of the system.  For more information on z/OSMF workflows, see "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.2.0/com.ibm.zosmfworkflows.help.doc/izuWFhpAboutWorkflows.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS 2.2 workflows"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zosmfworkflows.help.doc/izuWFhpAboutWorkflows.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS 2.3 workflows"),o("OutboundLink")],1),e._v(", and "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.4.0/com.ibm.zosmfworkflows.help.doc/izuWFhpAboutWorkflows.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS 2.4 workflows"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Zowe provides a z/OSMF workflow definition that can be used to create a runtime environment from the Zowe convenience build. Register and execute the z/OSMF workflow to create a runtime environment with the z/OSMF web interface.")]),e._v(" "),o("p",[e._v("Perform the following steps to register and execute the Zowe runtime installation workflow in the z/OSMF web interface:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Log in to the z/OSMF web interface.")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("Workflows")]),e._v(" from the navigation tree.")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("Create Workflow")]),e._v(" from the "),o("strong",[e._v("Actions")]),e._v(" menu.")])]),e._v(" "),o("li",[o("p",[e._v("Enter the complete path to the workflow definition file in the "),o("strong",[e._v("Workflow Definition field")]),e._v(".")]),e._v(" "),o("ul",[o("li",[e._v("The path to the workflow definition file is "),o("code",[e._v("<extracted_pax_folder>/files/workflows/ZWEWRF04.xml file.")])])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Optional)")]),e._v(" Enter the path to the customized variable input file that you prepared in advance.")]),e._v(" "),o("ul",[o("li",[e._v("The path to the variable input file is located is "),o("code",[e._v("<extracted_pax_folder>/files/workflows/ZWEWRF04.xml file.")])]),e._v(" "),o("li",[e._v("Create a copy of the variable input file. Modify the file as necessary according to the built-in comments. Set the field to the path where the new file is located. When you execute the workflow, the values from the variable input file override the workflow variables default values.")])])]),e._v(" "),o("li",[o("p",[e._v("Select the system where you want to execute the workflow.")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Specify the unique workflow name.\n10.Select or enter an Owner Use ID and select "),o("strong",[e._v("Assign all steps to owner user ID")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("Finish")]),e._v(".")]),e._v(" "),o("p",[e._v("The workflow is registered in z/OSMF and ready to execute.")])]),e._v(" "),o("li",[o("p",[e._v("Select the workflow that you registered from the workflow list.")])]),e._v(" "),o("li",[o("p",[e._v("Execute the steps in order. The following steps are displayed that are ready to execute manually:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Define Variables")]),e._v(" "),o("ul",[o("li",[e._v("Define the values for variables for the convenience build runtime installation.")])])]),e._v(" "),o("li",[o("strong",[e._v("Allocate ZFS data set")]),e._v(" "),o("ul",[o("li",[e._v("Execute the step to allocate the zFS data set for the Zowe USS.")])])]),e._v(" "),o("li",[o("strong",[e._v("Zowe make dir")]),e._v(" "),o("ul",[o("li",[e._v("Execute the step create a directory for the Zowe USS file system.")])])]),e._v(" "),o("li",[o("strong",[e._v("Mount ZFS")]),e._v(" "),o("ul",[o("li",[e._v("Execute the step to mount the zFS data set to the created directory")])])]),e._v(" "),o("li",[o("strong",[e._v("Set Mountpoint Owner")]),e._v(" "),o("ul",[o("li",[e._v("Execute the step to sets the user who executes the step as the owner of the mountpoint.")]),e._v(" "),o("li",[o("strong",[e._v("Run install script")]),e._v("\nExecute the step executes the Zowe convenience build install script.")])])])])]),e._v(" "),o("li",[o("p",[e._v("Perform the following steps to execute each step individually:")]),e._v(" "),o("ol",[o("li",[e._v("Double-click the title of the step.")]),e._v(" "),o("li",[e._v("Select the "),o("strong",[e._v("Perform")]),e._v(" tab.")]),e._v(" "),o("li",[e._v("Review the step contents and update the input values as required.")]),e._v(" "),o("li",[e._v("Select "),o("strong",[e._v("Next")]),e._v(".")]),e._v(" "),o("li",[e._v("Repeat the previous two steps to complete all items until the option Finish is available.")]),e._v(" "),o("li",[e._v("Select "),o("strong",[e._v("Finish")]),e._v(".")])])])]),e._v(" "),o("p",[e._v("For general information about how to execute z/OSMF workflow steps, watch the "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=KLKi7bhKBlE&feature=youtu.be",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OSMF Workflows Tutorial"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("After you execute each step, the step is marked as Complete. The workflow is executed.")]),e._v(" "),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next steps")]),e._v(" "),o("p",[e._v("For a z/OS system where you install Zowe 1.8 or later for the first time, follow the instructions in "),o("router-link",{attrs:{to:"/user-guide/install-zos.html#stage-3-configure-the-zowe-runtime"}},[e._v("Stage 3: Configure the Zowe runtime")]),e._v(" that describes how to "),o("router-link",{attrs:{to:"/user-guide/configure-zos-system.html"}},[e._v("configure the z/OS environment")]),e._v(" and "),o("router-link",{attrs:{to:"/user-guide/configure-certificates.html"}},[e._v("create a keystore directory")]),e._v(".")],1),e._v(" "),o("p",[e._v("If you have previously installed Zowe 1.8 or later, then you already have an instance directory that needs to be updated. If you have not installed Zowe 1.8 or later before, you will need to create an instance directory to be able to launch Zowe. For instructions, see "),o("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(".")],1),e._v(" "),o("p",[e._v("Zowe has two started tasks that need to be installed and configured ready to be started.  These are the Zowe server, see "),o("router-link",{attrs:{to:"/user-guide/configure-zowe-server.html"}},[e._v("Installing the Zowe started task (ZWESVSTC)")]),e._v(" and the Zowe cross memory server, see "),o("router-link",{attrs:{to:"/user-guide/configure-xmem-server.html"}},[e._v("Installing and configuring the Zowe cross memory server (ZWESISTC)")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);