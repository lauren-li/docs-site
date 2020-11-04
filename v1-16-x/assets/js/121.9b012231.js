(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{369:function(e,t,o){"use strict";o.r(t);var n=o(3),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"installing-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli"}},[e._v("#")]),e._v(" Installing Zowe CLI")]),e._v(" "),o("p",[e._v("Install Zowe™ CLI on your computer.")]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" If you are familiar with command-line tools and want to get started using Zowe CLI quickly, see "),o("router-link",{attrs:{to:"/getting-started/cli-getting-started.html"}},[e._v("Zowe CLI quick start")]),e._v(". You can learn about new CLI features in the "),o("router-link",{attrs:{to:"/getting-started/summaryofchanges.html"}},[e._v("Release notes")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"methods-to-install-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#methods-to-install-zowe-cli"}},[e._v("#")]),e._v(" Methods to install Zowe CLI")]),e._v(" "),o("p",[e._v("Use one of the following methods to install Zowe CLI.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#installing-zowe-cli-from-a-local-package"}},[e._v("Installing Zowe CLI from a local package")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#installing-zowe-cli-from-an-online-registry"}},[e._v("Installing Zowe CLI from an online registry")])])]),e._v(" "),o("p",[e._v("If you encounter problems when you attempt to install Zowe CLI, see "),o("router-link",{attrs:{to:"/troubleshoot/cli/troubleshoot-cli.html"}},[e._v("Troubleshooting Zowe CLI")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"installing-zowe-cli-from-a-local-package"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli-from-a-local-package"}},[e._v("#")]),e._v(" Installing Zowe CLI from a local package")]),e._v(" "),o("p",[e._v("If you do not have internet access at your site, use the following method to install Zowe CLI from a local package.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Address the following software requirements for the core CLI:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Install "),o("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js V8.0 or higher LTS versions"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" You might need to restart the command prompt after installing Node.js. Issue the command "),o("code",[e._v("node --version")]),e._v(" to verify that Node.js is installed.")])]),e._v(" "),o("li",[o("p",[e._v("Verify that you have "),o("strong",[e._v("Node Package Manager (npm)")]),e._v(" that is compatible with your version of Node.js. For a list of compatible versions, see "),o("a",{attrs:{href:"https://nodejs.org/en/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js Previous Releases"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" npm is included with the Node.js installation. Issue the command "),o("code",[e._v("npm --version")]),e._v(" to verify the version of npm that is installed.")])])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Linux only)")]),e._v(" Address the following software requirements for Secure Credential Storage:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("(Graphical Linux)")]),e._v(" Install "),o("code",[e._v("gnome-keyring")]),e._v(" and "),o("code",[e._v("libsecret")]),e._v(" on your computer.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Headless Linux)")]),e._v(" Follow the procedure documented in the "),o("a",{attrs:{href:"https://github.com/zowe/zowe-cli-scs-plugin/blob/master/README.md#software-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("SCS plug-in Readme"),o("OutboundLink")],1),e._v(".")])])])]),e._v(" "),o("li",[o("p",[e._v("Navigate to "),o("a",{attrs:{href:"https://www.zowe.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe.org Downloads"),o("OutboundLink")],1),e._v(" and click the "),o("strong",[e._v("CLI Core")]),e._v(' button to download the core package. The "core" includes Zowe CLI and Secure Credential Store, which enhances security by encrypting your username and password.')]),e._v(" "),o("p",[e._v("A file named "),o("code",[e._v("zowe-cli-package-v.r.m.zip")]),e._v(" is downloaded to your computer")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Optional)")]),e._v(" Click the "),o("strong",[e._v("CLI Plugins")]),e._v(" button to download the optional plugins.")]),e._v(" "),o("p",[e._v("A file named "),o("code",[e._v("zowe-cli-plugins-v.r.m.zip")]),e._v(" is downloaded to your computer.")])]),e._v(" "),o("li",[o("p",[e._v("Unzip the contents of "),o("code",[e._v("zowe-cli-package-v.r.m.zip")]),e._v(" (and optionally "),o("code",[e._v("zowe-cli-plugins-v.r.m.zip")]),e._v(") to a preferred location on your computer.")])]),e._v(" "),o("li",[o("p",[e._v("Open a command-line window. Issue the following commands in sequence against the extracted directory to install core Zowe CLI on your computer:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("npm install -g zowe-cli.tgz\n")])])]),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe plugins install secure-credential-store-for-zowe-cli.tgz\n")])])]),o("p",[o("strong",[e._v("Notes:")])]),e._v(" "),o("ul",[o("li",[e._v("If the command returns an "),o("code",[e._v("EACCESS")]),e._v(" error, refer to "),o("a",{attrs:{href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally",target:"_blank",rel:"noopener noreferrer"}},[e._v("Resolving EACCESS permissions errors when installing packages globally"),o("OutboundLink")],1),e._v(" in the npm documentation.")]),e._v(" "),o("li",[e._v("On Linux, you might need to prepend "),o("code",[e._v("sudo")]),e._v(" to your "),o("code",[e._v("npm")]),e._v(" commands. For more information, see "),o("router-link",{attrs:{to:"/troubleshoot/cli/troubleshoot-cli.html"}},[e._v("Troubleshooting Zowe CLI")]),e._v(".")],1)])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Optional)")]),e._v(" Address the "),o("router-link",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[e._v("Software requirements for CLI plug-ins")]),e._v(". You can install most plug-ins without meeting the requirements, but they will not function until you configure the back-end APIs. The IBM Db2 plug-in requires "),o("router-link",{attrs:{to:"/user-guide/cli-db2plugin.html#installing"}},[e._v("additional configuration to install")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Optional)")]),e._v(" Issue the following command to install each available plug-in:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe plugins install cics-for-zowe-cli.tgz db2-for-zowe-cli.tgz zos-ftp-for-zowe-cli.tgz  ims-for-zowe-cli.tgz mq-for-zowe-cli.tgz\n")])])]),o("p",[o("strong",[e._v("Important:")]),e._v(" Ensure that you meet the "),o("router-link",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[e._v("Software requirements for CLI plug-ins")]),e._v(". You can install most plug-ins without meeting the requirements, but they will not function until you configure the back-end APIs. The IBM Db2 plug-in requires "),o("router-link",{attrs:{to:"/user-guide/cli-db2plugin.html#installing"}},[e._v("additional configuration to install")]),e._v(".")],1)])]),e._v(" "),o("p",[e._v("Zowe CLI is installed on your computer. Issue the "),o("code",[e._v("zowe --help")]),e._v(" command to view a list of available commands. For information about how to connect the CLI to the mainframe, create profiles, integrate with API ML, and more, see "),o("router-link",{attrs:{to:"/user-guide/cli-usingcli.html"}},[e._v("Using CLI")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"installing-zowe-cli-from-an-online-registry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli-from-an-online-registry"}},[e._v("#")]),e._v(" Installing Zowe CLI from an online registry")]),e._v(" "),o("p",[e._v("If your computer is connected to the Internet, you can use the following method to install Zowe CLI from an npm registry.")]),e._v(" "),o("p",[o("strong",[e._v("Follow these steps:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Address the following software requirements for the core CLI:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Install "),o("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js V8.0 or higher LTS versions"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" You might need to restart the command prompt after installing Node.js. Issue the command "),o("code",[e._v("node --version")]),e._v(" to verify that Node.js is installed.")])]),e._v(" "),o("li",[o("p",[e._v("Verify that you have "),o("strong",[e._v("Node Package Manager (npm)")]),e._v(" that is compatible with your version of Node.js. For a list of compatible versions, see "),o("a",{attrs:{href:"https://nodejs.org/en/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js Previous Releases"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Tip:")]),e._v(" npm is included with the Node.js installation. Issue the command "),o("code",[e._v("npm --version")]),e._v(" to verify the version of npm that is installed.")])])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Linux only)")]),e._v(" Address the following software requirements for Secure Credential Storage:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("(Graphical Linux)")]),e._v(" Install "),o("code",[e._v("gnome-keyring")]),e._v(" and "),o("code",[e._v("libsecret")]),e._v(" on your computer.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Headless Linux)")]),e._v(" Follow the procedure documented in the "),o("a",{attrs:{href:"https://github.com/zowe/zowe-cli-scs-plugin/blob/master/README.md#software-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("SCS plug-in Readme"),o("OutboundLink")],1),e._v(".")])])])]),e._v(" "),o("li",[o("p",[e._v('Issue the following commands in sequence to install the core from the public npm registry. The "core" includes Zowe CLI and Secure Credential Store, which enhances security by encrypting your username and password.')]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("npm install -g @zowe/cli@zowe-v1-lts\n")])])]),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe plugins install @zowe/secure-credential-store-for-zowe-cli@zowe-v1-lts\n")])])]),o("p",[o("strong",[e._v("Notes:")])]),e._v(" "),o("ul",[o("li",[e._v("If the command returns an "),o("code",[e._v("EACCESS")]),e._v(" error, refer to "),o("a",{attrs:{href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally",target:"_blank",rel:"noopener noreferrer"}},[e._v("Resolving EACCESS permissions errors when installing packages globally"),o("OutboundLink")],1),e._v(" in the npm documentation.")]),e._v(" "),o("li",[e._v("On Linux, you might need to prepend "),o("code",[e._v("sudo")]),e._v(" to your "),o("code",[e._v("npm")]),e._v(" commands. For more information, see "),o("router-link",{attrs:{to:"/troubleshoot/cli/troubleshoot-cli.html"}},[e._v("Troubleshooting Zowe CLI")]),e._v(".")],1)])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Optional)")]),e._v(" Address the "),o("router-link",{attrs:{to:"/user-guide/cli-swreqplugins.html"}},[e._v("Software requirements for CLI plug-ins")]),e._v(". You can install most plug-ins without meeting the requirements, but they will not function until you configure the back-end APIs. The IBM Db2 plug-in requires "),o("router-link",{attrs:{to:"/user-guide/cli-db2plugin.html#installing"}},[e._v("additional configuration to install")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("(Optional)")]),e._v(" To install all available plug-ins to Zowe CLI, issue the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("zowe plugins install @zowe/cics-for-zowe-cli@zowe-v1-lts @zowe/db2-for-zowe-cli@zowe-v1-lts @zowe/ims-for-zowe-cli@zowe-v1-lts @zowe/mq-for-zowe-cli@zowe-v1-lts @zowe/zos-ftp-for-zowe-cli@zowe-v1-lts\n")])])])])]),e._v(" "),o("p",[e._v("Zowe CLI is installed on your computer. Issue the "),o("code",[e._v("zowe --help")]),e._v(" command to view a list of available commands. For information about how to connect the CLI to the mainframe, create profiles, integrate with API ML, and more, see "),o("router-link",{attrs:{to:"/user-guide/cli-usingcli.html"}},[e._v("Using CLI")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);