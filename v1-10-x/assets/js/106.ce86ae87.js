(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{334:function(e,t,a){"use strict";a.r(t);var i=a(3),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuring-zowe-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-zowe-certificates"}},[e._v("#")]),e._v(" Configuring Zowe certificates")]),e._v(" "),a("p",[e._v("A keystore directory is used by Zowe to hold the certificate used for encrypting communication between Zowe clients and the Zowe z/OS servers.  It also holds the truststore used to hold public keys of any servers that Zowe trusts.  When a Zowe is launched the instance directory configuration file "),a("code",[e._v("instance.env")]),e._v(" specifies the location of the keystore directory, see "),a("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html#keystore-directory"}},[e._v("Configure instance directory")])],1),e._v(" "),a("p",[e._v("If you have already created a keystore directory from a previous release of Version 1.8 or later, then you may reuse the existing keystore directory with newer version of Zowe.")]),e._v(" "),a("p",[e._v("You can use the existing certificate signed by an external certificate authority (CA) for HTTPS ports in the API Mediation Layer and the Zowe Application Framework, or else you can let the Zowe configuration script to generate a self-signed certificate by the local API Mediation CA.")]),e._v(" "),a("p",[e._v("If you let the Zowe configuration to generate a self-signed certificate, the certificates should be imported into your browser to avoid untrusted network traffic challenges. See "),a("router-link",{attrs:{to:"/extend/extend-apiml/api-mediation-security.html#import-the-local-ca-certificate-to-your-browser"}},[e._v("Import the local CA certificate to your browser")]),e._v(".  If you do not import the certificates into your browser when you access a Zowe web page, you may be challenged that the web page cannot be trusted and, depending on the browser you are using, have to add an exception to proceed to the web page.  Some browser versions may not accept the Zowe certificate because it is self-signed and the signing authority is not recognized as a trusted source.  Manually importing the certificate into your browser makes it a trusted source and the challenges will no longer occur.")],1),e._v(" "),a("p",[e._v("If you have an existing server certificate that is signed by an external CA, then you use this for the Zowe certificate. This could be a CA managed by the IT department of your company which has already ensured that any certificates signed by that CA are trusted by browsers in your company because they have included their company's CA in their company's browsers' truststore.  This will avoid the need to manually import the local CA into each client machine's browsers.")]),e._v(" "),a("p",[e._v("If you want to avoid the need to have each browser trust the CA that has signed the Zowe certificate, you can use a public certificate authority such as Symantec, Comodo, or GoDaddy to create a certificate. These certificates are trusted by all browsers and most REST API clients. However, this option involves a manual process of requesting a certificate and may incur a cost payable to the publicly trusted CA.")]),e._v(" "),a("p",[e._v("It's recommended that you start with the local API Mediation Layer CA for an initial evaluation.")]),e._v(" "),a("p",[e._v("You can use the "),a("code",[e._v("<ROOT_DIR>/bin/zowe-setup-certificates.sh")]),e._v(" script in the Zowe runtime directory to configure the certificates with the set of defined environment variables. The environment variables act as parameters for the certificate configuration are held in the file "),a("code",[e._v("<ROOT_DIR>/bin/zowe-setup-certificates.env")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"generate-certificate-with-the-default-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-certificate-with-the-default-values"}},[e._v("#")]),e._v(" Generate certificate with the default values")]),e._v(" "),a("p",[e._v("The script reads the default variable values that are provided in the "),a("code",[e._v("<ROOT_DIR>/bin/zowe-setup-certificates.env")]),e._v(" file and generates the certificate signed by the local API Mediation CA and keystores in the "),a("code",[e._v("/global/zowe/keystore")]),e._v(" location.   To set up certificates with the default environment variables, ensure that you run the following script in the Zowe runtime directory:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ROOT_DIR"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/bin/zowe-setup-certificates.sh\n")])])]),a("p",[e._v("generates the keystore in "),a("code",[e._v("u/zowe/mykeystore")]),e._v(".  On many z/OS installations access to this location will be restricted to priveledged users so this step should be done by a system programmer with site knowledge for where the certificate should be stored in a way that the public key can be read but private key access is controlled.")]),e._v(" "),a("h2",{attrs:{id:"generate-certificate-with-the-custom-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-certificate-with-the-custom-values"}},[e._v("#")]),e._v(" Generate certificate with the custom values")]),e._v(" "),a("p",[e._v("We recommend that you review all the parameters in the "),a("code",[e._v("zowe-setup-certificates.env")]),e._v(" file and customize the values for variables to meet your requirements. For example, set your preferred location to generate certificates and keystores.")]),e._v(" "),a("p",[e._v("Follow the procedure to customize the values for variables in the "),a("code",[e._v("zowe-setup-certificates.env")]),e._v(" file:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Copy the "),a("code",[e._v("bin/zowe-setup-certificates.env")]),e._v(" file from the read-only location to a new\n"),a("code",[e._v("<your_directory>/zowe-setup-certificates.env")]),e._v(" location.")])]),e._v(" "),a("li",[a("p",[e._v("Customize the values for the variables based on the descriptions that are provided in the\n"),a("code",[e._v("zowe-setup-certificates.env")]),e._v(" file.")])]),e._v(" "),a("li",[a("p",[e._v("Execute the following command with the customized environment file:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v(" bin/zowe-setup-certificates.sh –p "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/zowe-setup-certificates.env\n")])])]),a("p",[e._v("where "),a("code",[e._v("<your_directory>")]),e._v(" specifies the location of your customized environment file.")])])]),e._v(" "),a("p",[e._v("The keystore and certificates are generated based on the customized values in the\n"),a("code",[e._v("bin/zowe-setup-certificates.env")]),e._v(" file.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("zowe-setup-certificates.sh")]),e._v(" command also generates "),a("code",[e._v("zowe-certificates.env")]),e._v(" file in the\n"),a("code",[e._v("KEYSTORE_DIRECTORY")]),e._v(" directory. This file is used in the Zowe instance configuration step, see "),a("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html#keystore-configuration"}},[e._v("Creating and configururing the Zowe instance directory")]),e._v(".")],1),e._v(" "),a("p",[e._v("The following example shows how you can configure "),a("code",[e._v("zowe-setup-certificates.env")]),e._v(" file to use the existing certificates:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Update the value of "),a("code",[e._v("EXTERNAL_CERTIFICATE")]),e._v(". The value needs to point to a keystore in PKCS12 format that contains the certificate with its private key. The file needs to be transferred as a binary to the z/OS system.")])]),e._v(" "),a("li",[a("p",[e._v("Update the value of "),a("code",[e._v("KEYSTORE_PASSWORD")]),e._v(". The value is a password to the PKCS12 keystore specified in the "),a("code",[e._v("EXTERNAL_CERTIFICATE")]),e._v(" variable.")])]),e._v(" "),a("li",[a("p",[e._v("Update the value of "),a("code",[e._v("EXTERNAL_CERTIFICATE_ALIAS")]),e._v(" to the alias of the server certificate in the keystore.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" If you do not know the certificate alias, run the following command where\n"),a("code",[e._v("externalCertificate.p12")]),e._v(" is a value of  "),a("code",[e._v("EXTERNAL_CERTIFICATE")]),e._v(" in the\n"),a("code",[e._v("zowe-setup-certificates.env")]),e._v(" file.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("keytool -list -keystore externalCertificate.p12 -storepass password -storetype pkcs12 -v\n")])])]),a("p",[e._v("Expected output:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Keystore type: PKCS12\nKeystore provider: SUN\nYour keystore contains 1 entry\nAlias name: apiml\nCreation date: Oct 9, 2019\nEntry type: PrivateKeyEntry\nCertificate chain length: 3\n...\n")])])]),a("p",[e._v("In this case, the alias can be found in "),a("code",[e._v("Alias name: apiml")]),e._v(". Therefore, set "),a("code",[e._v("EXTERNAL_CERTIFICATE_ALIAS=apiml")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Update the value of "),a("code",[e._v("EXTERNAL_CERTIFICATE_AUTHORITIES")]),e._v(" to the path of the public certificate of the certificate authority that has signed the certificate. You can add additional certificate authorities separated by spaces (specify the complete value "),a("strong",[e._v("in quotes")]),e._v("). This can be used for certificate authorities that have signed the certificates of the services that you want to access via the API Mediation Layer.")])]),e._v(" "),a("li",[a("p",[e._v("(Optional) If you have trouble getting the certificates and you want only to evaluate Zowe, you can switch off the certificate validation by setting "),a("code",[e._v("VERIFY_CERTIFICATES=false")]),e._v(". The HTTPS will still be used but the API Mediation Layer will not validate any certificate.")]),e._v(" "),a("p",[a("strong",[e._v("Important!")]),e._v(" Switching off certificate evaluation is a non-secure setup.")])])]),e._v(" "),a("p",[e._v("Following is the part of "),a("code",[e._v("zowe-setup-certificates.env")]),e._v(" file snippet that uses existing certificates:")]),e._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Should APIML verify certificates of services - true/false")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("VERIFY_CERTIFICATES")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# optional - Path to a PKCS12 keystore with a server certificate for APIML")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EXTERNAL_CERTIFICATE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/path/to/keystore.p12\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# optional - Alias of the certificate in the keystore")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EXTERNAL_CERTIFICATE_ALIAS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("servercert\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# optional - Public certificates of trusted CAs")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EXTERNAL_CERTIFICATE_AUTHORITIES")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/path/to/cacert_1.cer /path/to/cacert_2.cer"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Select a password that is used to secure EXTERNAL_CERTIFICATE keystore and ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# that will be also used to secure newly generated keystores for API Mediation")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("KEYSTORE_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mypass\n")])])]),a("p",[e._v("You may encounter the following message:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiml_cm.sh --action trust-zosmf has failed. See $LOG_FILE for more details\nERROR: z/OSMF is not trusted by the API Mediation Layer. Make sure ZOWE_ZOSMF_HOST and ZOWE_ZOSMF_PORT variables define the desired z/OSMF instance.\nZOWE_ZOSMF_HOST=${ZOWE_ZOSMF_HOST}   ZOWE_ZOSMF_PORT=${ZOWE_ZOSMF_PORT}\nYou can also specify z/OSMF certificate explicitly in the ZOSMF_CERTIFICATE environmental variable in the zowe-setup-certificates.env file.\n")])])]),a("p",[e._v("This error has to be resolved before you can proceed with the next installation step.")]),e._v(" "),a("p",[a("strong",[e._v("Notes:")])]),e._v(" "),a("ul",[a("li",[e._v("On many z/OS systems, the certificate for z/OSMF is not signed by a trusted CA and is a self-signed certificate by the z/OS system programmer who configured z/OSMF.  If that is the case, then Zowe itself will not trust the z/OSMF certificate and any function dependent on z/OSMF will not operate correctly.  To ensure that Zowe trusts a z/OSMF self-signed certificate, you must use the value "),a("code",[e._v("VERIFY_CERTIFICATES=false")]),e._v(" in the "),a("code",[e._v("zowe-setup-certificates.env")]),e._v(" file.  This is also required if the certificate is from a recognized CA but for a different host name, which can occur when a trusted certificate is copied from one source and reused within a z/OS installation for different servers other than that it was originally created for.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);