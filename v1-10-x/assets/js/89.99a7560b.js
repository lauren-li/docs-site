(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{355:function(e,t,n){"use strict";n.r(t);var o=n(3),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"troubleshooting-installation-and-startup-of-zowe-z-os-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-installation-and-startup-of-zowe-z-os-components"}},[e._v("#")]),e._v(" Troubleshooting installation and startup of Zowe z/OS components")]),e._v(" "),n("p",[e._v("The following topics contain information that can help you troubleshoot problems when you encounter unexpected behavior installing Zowe z/OS components or starting Zowe's "),n("code",[e._v("ZWESVSTC")]),e._v(" started task.")]),e._v(" "),n("h2",{attrs:{id:"unable-to-create-bpxas-instances"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-create-bpxas-instances"}},[e._v("#")]),e._v(" Unable to create BPXAS instances")]),e._v(" "),n("p",[n("strong",[e._v("Symptom:")])]),e._v(" "),n("p",[e._v("When you start "),n("code",[e._v("ZWESVSTC")]),e._v(" started task, either by running the "),n("code",[e._v("zowe-start.sh")]),e._v(" script or by launching the started task directly, you encounter the following error in the log:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<ROOT_DIR>/bin/internal/run-zowe.sh 1: FSUM7726 cannot fork: reason code  = 094500f7: EDC5112I Resource temporarily unavailable.\n")])])]),n("p",[e._v("You will also encounter the following messages in the SYSLOG:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("0290  S ZWESVSTC                                                               \n0281  $HASP100 ZWESVSTC ON STCINRDR                                            \n0290  IEF695I START ZWESVSTC WITH JOBNAME ZWESVSTC IS ASSIGNED TO USER         \n      ZWESVUSR, GROUP ZWEADMIN                                                 \n0281  $HASP373 ZWESVSTC STARTED                                                \n0090  IEA602I ADDRESS SPACE CREATE FAILED.  MAXUSERS WOULD HAVE BEEN EXCEEDED  \n0290  BPXP005I A FORK OR SPAWN ERROR WAS ENCOUNTERED.  RETURN CODE 00000070    \n      REASON CODE 094500F7                                                     \n0090  IEA602I ADDRESS SPACE CREATE FAILED.  MAXUSERS WOULD HAVE BEEN EXCEEDED  \n0090  IEA602I ADDRESS SPACE CREATE FAILED.  MAXUSERS WOULD HAVE BEEN EXCEEDED  \n0090  IEA602I ADDRESS SPACE CREATE FAILED.  MAXUSERS WOULD HAVE BEEN EXCEEDED  \n")])])]),n("p",[n("strong",[e._v("Solution:")])]),e._v(" "),n("p",[e._v("This problem occurs when the maximum number of "),n("code",[e._v("BPXAS")]),e._v(" instances have been reached.")]),e._v(" "),n("p",[e._v("This may be because when the Zowe instance directory was created, it was generated in the same location as the Zowe root directory.  The Zowe instance directory is created by using the script "),n("code",[e._v("<ROOT_DIR>/bin/zowe-configure-instance.sh -c <PATH_TO_INSTANCE_DIR>")]),e._v(". See "),n("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html#creating-an-instance-directory"}},[e._v("Creating an instance directory")]),e._v(". The Zowe runtime directory is replaced when new PTFs are applied and should be considered as a read-only set of files. Zowe instance directories are designed to live outside the directory structure and are used to start a Zowe runtime.")],1),e._v(" "),n("p",[e._v("This problem will only occur with Zowe drivers prior to v1.10 and has been resolved in v1.10 where the "),n("code",[e._v("zowe-configure-instance.sh")]),e._v(" script will report error if it detects the "),n("code",[e._v("-c")]),e._v(" argument because the installation directory location is an existing Zowe runtime directory.")]),e._v(" "),n("h2",{attrs:{id:"errors-caused-when-running-the-zowe-desktop-with-node-8-16-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#errors-caused-when-running-the-zowe-desktop-with-node-8-16-1"}},[e._v("#")]),e._v(" Errors caused when running the Zowe desktop with node 8.16.1")]),e._v(" "),n("p",[n("strong",[e._v("Symptom:")])]),e._v(" "),n("p",[e._v("When you start the "),n("code",[e._v("ZWESVSTC")]),e._v(" started task, you encounter the following error messages:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/usr/lpp/zowe/components/app-server/share/zlux-app-server/lib/initInstance.js:1\n(function (exports, require, module, __filename, __dirname) {\nSyntaxError: Invalid or unexpected token\n    at createScript (vm.js:80:10)\n    at Object.runInThisContext (vm.js:139:10)\n    at Module._compile (module.js:617:28)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)\n    at Function.Module._load (module.js:498:3)\n    at Function.Module.runMain (module.js:694:10)\n    at startup (bootstrap_node.js:204:16)\n    at bootstrap_node.js:625:3\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/global/zowe/instances/prod/bin/internal/run-zowe.sh 3: FSUM7332 syntax error: got ), expecting Newline\n")])])]),n("p",[n("strong",[e._v("Solution:")])]),e._v(" "),n("p",[e._v("This problem occurs when you use Node.js v8.16.1 which is not supported on Zowe. There is a known issue with node.js v8.16.1 and Zowe desktop encoding. Use a supported version of Node.js instead. For more information, see "),n("router-link",{attrs:{to:"/user-guide/install-nodejs-zos.html#supported-nodejs-versions"}},[e._v("Supported Node.js versions")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"cannot-start-zowe-and-unix-commands-not-found-with-fsum7351"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cannot-start-zowe-and-unix-commands-not-found-with-fsum7351"}},[e._v("#")]),e._v(" Cannot start Zowe and UNIX commands not found with FSUM7351")]),e._v(" "),n("p",[n("strong",[e._v("Symptom:")])]),e._v(" "),n("p",[e._v("When you start the ZWESVSTC started task, you might encounter the following error message:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("dirname: <instance-dir>/bin/internal/run-zowe.sh 2: FSUM7351 not found\npwd: <instance-dir>/bin/internal/run-zowe.sh 2: FSUM7351 not found\n.: <instance-dir>/bin/internal/run-zowe.sh 3: /bin/internal/read-instance.sh: not found\n")])])]),n("p",[n("strong",[e._v("Solution:")])]),e._v(" "),n("p",[e._v("Check that /bin is part on your PATH. Do "),n("code",[e._v("echo $PATH")]),e._v(" to check. If it is missing, make sure that it is appended to PATH in your profile, for example, in "),n("code",[e._v("/etc/profile/")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);