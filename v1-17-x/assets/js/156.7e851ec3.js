(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{514:function(e,t,o){"use strict";o.r(t);var n=o(3),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"uninstalling-zowe-from-z-os"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#uninstalling-zowe-from-z-os"}},[e._v("#")]),e._v(" Uninstalling Zowe from z/OS")]),e._v(" "),o("p",[e._v("You can uninstall Zowe™ from z/OS if you no longer need to use it.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Stop the Zowe started task which stops all of its microservices by using the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("/C ${ZOWE_PREFIX}${ZOWE_INSTANCE}SV\n")])])]),o("p",[e._v("Where ZOWE_PREFIX and ZOWE_INSTANCE are specified in your configuration (and default to ZWE and 1), see "),o("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html#address-space-names"}},[e._v("Zowe instance directory")])],1),e._v(" "),o("p",[e._v("Aftter Zowe has been stopped its subcomponents will end which include the API Mediation Layer and the Zowe desktop.")])]),e._v(" "),o("li",[o("p",[e._v("Delete the "),o("code",[e._v("ZWESVSTC")]),e._v(" member from your system "),o("code",[e._v("PROCLIB")]),e._v(" data set.")]),e._v(" "),o("p",[e._v("To do this, you can issue the following TSO DELETE command from the TSO READY prompt or from ISPF option 6:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("delete 'your.zowe.proclib(zwesvstc)'\n")])])]),o("p",[e._v("Alternatively, you can issue the TSO DELETE command at any ISPF command line by prefixing the command with TSO:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("tso delete 'your.zowe.proclib(zwesvstc)'\n")])])]),o("p",[e._v("To query which PROCLIB data set that ZWESVSTC is put in, you can view the SDSF JOB log of ZWESVSTC and look for the following message:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("IEFC001I PROCEDURE ZWESVSTC WAS EXPANDED USING SYSTEM LIBRARY your.zowe.proclib\n")])])]),o("p",[e._v("If no ZWESVSTC JOB log is available, issue the "),o("code",[e._v("/$D PROCLIB")]),e._v(" command at the SDSF COMMAND INPUT line and BROWSE each of the "),o("code",[e._v("DSNAME=some.jes.proclib")]),e._v(" output lines in turn with ISPF option 1, until you find the first data set that contains member ZWESVSTC. Then, issue the DELETE command as shown above.")]),e._v(" "),o("p",[e._v("After you have removed "),o("code",[e._v("ZWESVSTC")]),e._v(" from the "),o("code",[e._v("PROCLIB")]),e._v(" data set it will no longer be possible to start Zowe instances.")])]),e._v(" "),o("li",[o("p",[e._v("Remove the USS folders containing the Zowe artifacts.")]),e._v(" "),o("p",[e._v("Remove the USS folders containing the Zowe runtime,  the Zowe keystore-directory,  and the Zowe instance directories.")])]),e._v(" "),o("li",[o("p",[e._v("Reverse the z/OS security and environment updates from "),o("code",[e._v("ZWESECUR")]),e._v(" job.")]),e._v(" "),o("p",[e._v("As part of Zowe installation, the z/OS environment is altered to allow Zowe to operate. See "),o("router-link",{attrs:{to:"/user-guide/configure-zos-system.html#configuring-the-z-os-system-for-zowe"}},[e._v("Configuring the z/OS System for Zowe")]),e._v(" for details.  You may leave the environment configured which allows you to install and operate a Zowe instance at a point in the future, or you may undo the configuration steps to your z/OS environment.  Zowe provides a JCL member "),o("code",[e._v("ZWENOSEC")]),e._v(" that contains the commands needed to reset a z/OS environment and undo the steps that were performed in "),o("code",[e._v("ZWESECUR")]),e._v(" when the environment was configured for Zowe operation.")],1)]),e._v(" "),o("li",[o("p",[e._v("Reverse the z/OS key ring updates from "),o("code",[e._v("ZWEKRING")]),e._v(" job.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("ZWEKRING")]),e._v(" JCL member provided in the "),o("code",[e._v("SZWESAMP")]),e._v(" member can be used to create a key ring that contains the Zowe certificate(s) and certificate authority.  If you want to remove the key ring and its certificate(s) and certificate authority, you can use the JCL member "),o("code",[e._v("ZWENOKYR")]),e._v(" that contains the undo steps to reverse the configuration performed in "),o("code",[e._v("ZWEKRING")]),e._v(".")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);