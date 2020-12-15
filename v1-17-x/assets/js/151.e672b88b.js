(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{509:function(t,e,a){"use strict";a.r(e);var o=a(3),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"updating-zowe-on-z-os-using-update-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-zowe-on-z-os-using-update-script"}},[t._v("#")]),t._v(" Updating Zowe on z/OS using Update Script")]),t._v(" "),a("p",[t._v("In the past, to update Zowe™ on z/OS, you had to install a new version of Zowe on top of an existing one. With the introduction of the Zowe update script, the update process becomes faster and more seamless. You can update Zowe on z/OS using shell.")]),t._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[t._v("Ensure that you meet the following requirements before you run the update script:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Stop a running instance of Zowe.")])]),t._v(" "),a("li",[a("p",[t._v("Download and unpaсk the "),a("a",{attrs:{href:"https://www.zowe.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("pax file"),a("OutboundLink")],1),t._v(". Use the following command to unpack the file:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" pax -ppx -rf <path/to/pax>\n")])])]),a("p",[t._v("where:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<path/to/pax>")]),t._v(" - a path to a directory with Zowe installation files.")])])])]),t._v(" "),a("h3",{attrs:{id:"update-zowe-using-the-update-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-zowe-using-the-update-script"}},[t._v("#")]),t._v(" Update Zowe using the Update Script")]),t._v(" "),a("p",[t._v("Run the update script to update Zowe.")]),t._v(" "),a("p",[a("strong",[t._v("Follow these steps:")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Run the shell script by issuing the following command:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("update.sh <path/to/zowe/install> <path/to/unpaxed/new-zowe> <LOADLIB.DS.NAME> <path/to/backup>\n")])])]),a("p",[t._v("where:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<path/to/zowe/install>")]),t._v(" - a path to a Zowe install directory")]),t._v(" "),a("li",[a("code",[t._v("<path/to/unpaxed/new-zowe>")]),t._v(" - a path to a directory the with unpaxed new version of Zowe")]),t._v(" "),a("li",[a("code",[t._v("<LOADLIB.DS.NAME>")]),t._v(" - a data set with a load module")]),t._v(" "),a("li",[a("code",[t._v("<path/to/backup>")]),t._v(" - a path to a directory where to back up")])])]),t._v(" "),a("li",[a("p",[t._v("Restart Zowe.")])])]),t._v(" "),a("p",[t._v("You successfully updated Zowe.")]),t._v(" "),a("h3",{attrs:{id:"restore-zowe-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore-zowe-installation"}},[t._v("#")]),t._v(" Restore Zowe Installation")]),t._v(" "),a("p",[t._v("Zowe installation backup is created before the update. Restore a previous Zowe installation.")]),t._v(" "),a("p",[a("strong",[t._v("Follow these steps:")])]),t._v(" "),a("ol",[a("li",[t._v("Remove a directory with the Zowe installation by issuing the following command:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rm -rf <path/to/zowe/install>\n")])])])]),t._v(" "),a("li",[t._v("Copy a Zowe installation backup to the original location by issuing the following commands:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mkdir <path/to/zowe/install>\n\ncd <path/to/zowe/install>\n\npax -ppx -rf <path/to/backup/file>\n")])])])]),t._v(" "),a("li",[t._v("Restore the LOADLIB module by issuing the following command:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cp -r <path/to/backup/>install_log/ZWESIS01 //'<LOADLIB.DS.NAME>(ZWESIS01)'\n")])])])])]),t._v(" "),a("p",[t._v("You successfully restored Zowe.")])])}),[],!1,null,null,null);e.default=s.exports}}]);