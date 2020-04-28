(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{380:function(e,t,n){"use strict";n.r(t);var i=n(3),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"zowe-desktop-and-window-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zowe-desktop-and-window-management"}},[e._v("#")]),e._v(" Zowe Desktop and Window management")]),e._v(" "),n("p",[e._v("The Zowe™ Desktop (MVD) is a web component of Zowe, which is an implementation of "),n("strong",[e._v("MVDWindowManagement")]),e._v(", the interface that is used to create a window manager.")]),e._v(" "),n("p",[e._v("The code for this software is in the "),n("code",[e._v("lux-app-manager")]),e._v(" repository.")]),e._v(" "),n("p",[e._v("The interface for building an alternative window manager is in the "),n("code",[e._v("zlux-platform")]),e._v(" repository.")]),e._v(" "),n("p",[e._v('Window Management acts upon Windows, which are visualizations of an instance of an application. Applications are plug-ins of type "application", and therefore the Zowe Desktop operates around a collection of plug-ins.')]),e._v(" "),n("p",[n("strong",[e._v("Note:")]),e._v(" Other objects and frameworks that can be utilized by applications, but not related to Window Management, such as application-to-application communication, Logging, URI lookup, and Auth are not described here.")]),e._v(" "),n("h1",{attrs:{id:"loading-and-presenting-applications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#loading-and-presenting-applications"}},[e._v("#")]),e._v(" Loading and presenting applications")]),e._v(" "),n("p",[e._v("Upon loading the Zowe Desktop, a GET call is made to "),n("code",[e._v("/plugins?type=application")]),e._v(".\nThe GET call returns a JSON list of all of the applications that are present on the server, which can be accessed by the user. Applications can be composed of dataservices, web content, or both. Applications that have web content are presented in the Zowe Desktop UI.")]),e._v(" "),n("p",[e._v("The Zowe Desktop presents a taskbar at the bottom of the page, where it displays each application as an icon with a description. The icon that is used, and description that are presented are based on the applications's PluginDefinition's "),n("strong",[e._v("webContent")]),e._v(" attributes.")]),e._v(" "),n("h1",{attrs:{id:"plug-in-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-management"}},[e._v("#")]),e._v(" Plug-in management")]),e._v(" "),n("p",[e._v("Applications can gain insight into the environment in which they have been spawned through the Plug-in Manager. Use the Plug-in Manager to determine whether a plug-in is present before acting upon the existence of the plug-in. When the Zowe Desktop is running, you can access the Plug-in Manager through "),n("code",[e._v("ZoweZLUX.PluginManager")])]),e._v(" "),n("p",[e._v("The following are functions you can use on the Plug-in Manager:")]),e._v(" "),n("ul",[n("li",[e._v("getPlugin(pluginID: string)\n"),n("ul",[n("li",[e._v("Accepts a string of a unique plugin ID, and returns the Plug-in Definition Object (DesktopPluginDefinition) associated with it, if found.")])])])]),e._v(" "),n("h1",{attrs:{id:"application-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-management"}},[e._v("#")]),e._v(" Application management")]),e._v(" "),n("p",[e._v("Applications within a Window Manager are created and acted upon in part by an Application Manager. The Application Manager can facilitate communication between applications, but formal application-to-application communication should be performed by calls to the Dispatcher. The Application Manager is not normally accessible directly by applications, instead used by the Window Manager.")]),e._v(" "),n("p",[e._v("The following are functions of an Application Manager:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("spawnApplication(plugin: DesktopPluginDefinition, launchMetadata: any): Promise<MVDHosting.InstanceId>;")]),e._v(" "),n("ul",[n("li",[e._v("Opens an application instance into the Window Manager, with or without context on what actions it should perform after creation.")])])]),e._v(" "),n("li",[n("p",[e._v("killApplication(plugin:ZLUX.Plugin, appId:MVDHosting.InstanceId): void;")]),e._v(" "),n("ul",[n("li",[e._v("Removes an application instance from the Window Manager.")])])]),e._v(" "),n("li",[n("p",[e._v("showApplicationWindow(plugin: DesktopPluginDefinitionImpl): void;")]),e._v(" "),n("ul",[n("li",[e._v("Makes an open application instance visible within the Window Manager.")])])]),e._v(" "),n("li",[n("p",[e._v("isApplicationRunning(plugin: DesktopPluginDefinitionImpl): boolean;")]),e._v(" "),n("ul",[n("li",[e._v("Determines if instances of the application are open in the Window Manager.")])])])]),e._v(" "),n("h1",{attrs:{id:"windows-and-viewports"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-and-viewports"}},[e._v("#")]),e._v(" Windows and Viewports")]),e._v(" "),n("p",[e._v("When a user clicks on an application's icon on the taskbar, an instance of the application is started and presented within a Viewport, which is encapsulated in a Window within the Zowe Desktop.")]),e._v(" "),n("p",[e._v("Every instance of an application's web content within Zowe is given context and can listen on events about the Viewport and Window it exists within, regardless of whether the Window Manager implementation uses these constructs visually. It is possible to create a Window Manager that only displays one application at a time, or to have a drawer-and-panel UI rather than a true windowed UI.")]),e._v(" "),n("p",[e._v("When the Window is created, the application's web content is encapsulated dependent upon its framework type. The following are valid framework types:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v('"angular2": The web content is written in Angular, and packaged with Webpack. Application framework objects are given through @injectables and imports.')])]),e._v(" "),n("li",[n("p",[e._v('"iframe": The web content can be written using any framework, but is included through an iframe tag. Applications within an iframe can access framework objects through '),n("code",[e._v("parent.ZoweZLUX")]),e._v(" and callbacks.")])])]),e._v(" "),n("p",[e._v("In the case of the Zowe Desktop, this framework-specific wrapping is handled by the Plug-in Manager.")]),e._v(" "),n("h1",{attrs:{id:"viewport-manager"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#viewport-manager"}},[e._v("#")]),e._v(" Viewport Manager")]),e._v(" "),n("p",[e._v("Viewports encapsulate an instance of an application's web content, but otherwise do not add to the UI (they do not present Chrome as a Window does).\nEach instance of an application is associated with a viewport, and operations to act upon a particular application instance should be done by specifying a viewport for an application, to differentiate which instance is the target of an action. Actions performed against viewports should be performed through the Viewport Manager.")]),e._v(" "),n("p",[e._v("The following are functions of the Viewport Manager:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("createViewport(providers: ResolvedReflectiveProvider[]): MVDHosting.ViewportId;")]),e._v(" "),n("ul",[n("li",[e._v("Creates a viewport into which you can embed an application's webcontent.")])])]),e._v(" "),n("li",[n("p",[e._v("registerViewport(viewportId: MVDHosting.ViewportId, instanceId: MVDHosting.InstanceId): void;")]),e._v(" "),n("ul",[n("li",[e._v("Registers a previously created viewport to an application instance.")])])]),e._v(" "),n("li",[n("p",[e._v("destroyViewport(viewportId: MVDHosting.ViewportId): void;")]),e._v(" "),n("ul",[n("li",[e._v("Removes a viewport from the Window Manager.")])])]),e._v(" "),n("li",[n("p",[e._v("getApplicationInstanceId(viewportId: MVDHosting.ViewportId): MVDHosting.InstanceId | null;")]),e._v(" "),n("ul",[n("li",[e._v("Returns the ID of an application's instance from within a viewport in the Window Manager.")])])])]),e._v(" "),n("h1",{attrs:{id:"injection-manager"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#injection-manager"}},[e._v("#")]),e._v(" Injection Manager")]),e._v(" "),n("p",[e._v("When Angular applications are created, they can utilize injectables to be informed of when an action happens. iframe applications indirectly benefit from some of these hooks due to the wrapper acting upon them, but Angular applications have direct access.")]),e._v(" "),n("p",[e._v("An application can utilize the following injectables:")]),e._v(" "),n("h2",{attrs:{id:"plugin-definition"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugin-definition"}},[e._v("#")]),e._v(" Plugin Definition")]),e._v(" "),n("p",[n("code",[e._v("@Inject(Angular2InjectionTokens.PLUGIN_DEFINITION) private pluginDefinition: ZLUX.ContainerPluginDefinition")])]),e._v(" "),n("p",[e._v("Provides the Plug-in Definition associated with this application. It can be used to gain some context about the application and can also be used by the application with other application framework objects to perform a contextual action.")]),e._v(" "),n("h2",{attrs:{id:"logger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#logger"}},[e._v("#")]),e._v(" Logger")]),e._v(" "),n("p",[n("code",[e._v("@Inject(Angular2InjectionTokens.LOGGER) private logger: ZLUX.ComponentLogger")])]),e._v(" "),n("p",[e._v("Provides a logger that is named after the application's Plug-in Definition ID.")]),e._v(" "),n("h2",{attrs:{id:"launch-metadata"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#launch-metadata"}},[e._v("#")]),e._v(" Launch Metadata")]),e._v(" "),n("p",[n("code",[e._v("@Inject(Angular2InjectionTokens.LAUNCH_METADATA) private launchMetadata: any")])]),e._v(" "),n("p",[e._v("If present, this variable requests the application instance to initialize with some context, rather than the default view.")]),e._v(" "),n("h2",{attrs:{id:"viewport-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#viewport-events"}},[e._v("#")]),e._v(" Viewport Events")]),e._v(" "),n("p",[n("code",[e._v("@Inject(Angular2InjectionTokens.VIEWPORT_EVENTS) private viewportEvents: Angular2PluginViewportEvents")])]),e._v(" "),n("p",[e._v("Presents hooks that can be subscribed to for event listening. Events include:")]),e._v(" "),n("ul",[n("li",[e._v("resized: Subject<{width: number, height: number}>\n"),n("ul",[n("li",[e._v("Starts when the viewport's size has changed.")])])])]),e._v(" "),n("h2",{attrs:{id:"window-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#window-events"}},[e._v("#")]),e._v(" Window Events")]),e._v(" "),n("p",[n("code",[e._v("@Inject(Angular2InjectionTokens.WINDOW_ACTIONS) private windowActions: Angular2PluginWindowActions")])]),e._v(" "),n("p",[e._v("Presents hooks that can be subscribed to for event listening. Events include the following:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("maximized: Subject"),n("code",[e._v("<void>")])]),e._v(" "),n("ul",[n("li",[e._v("Starts when the Window has been maximized.")])])]),e._v(" "),n("li",[n("p",[e._v("minimized: Subject"),n("code",[e._v("<void>")])]),e._v(" "),n("ul",[n("li",[e._v("Starts when the Window has been minimized.")])])]),e._v(" "),n("li",[n("p",[e._v("restored: Subject"),n("code",[e._v("<void>")])]),e._v(" "),n("ul",[n("li",[e._v("Starts when the Window has been restored from a minimized state.")])])]),e._v(" "),n("li",[n("p",[e._v("moved: Subject<{top: number, left: number}>")]),e._v(" "),n("ul",[n("li",[e._v("Starts when the Window has been been moved.")])])]),e._v(" "),n("li",[n("p",[e._v("resized: Subject<{width: number, height: number}>")]),e._v(" "),n("ul",[n("li",[e._v("Starts when the Window has been resized.")])])]),e._v(" "),n("li",[n("p",[e._v("titleChanged: Subject"),n("code",[e._v("<string>")])]),e._v(" "),n("ul",[n("li",[e._v("Starts when the Window's title has changed.")])])])]),e._v(" "),n("h2",{attrs:{id:"window-actions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#window-actions"}},[e._v("#")]),e._v(" Window Actions")]),e._v(" "),n("p",[n("code",[e._v("@Inject(Angular2InjectionTokens.WINDOW_ACTIONS) private windowActions: Angular2PluginWindowActions")])]),e._v(" "),n("p",[e._v("An application can request actions to be performed on the Window through the following:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("close(): void")]),e._v(" "),n("ul",[n("li",[e._v("Closes the Window of the application instance.")])])]),e._v(" "),n("li",[n("p",[e._v("maximize(): void")]),e._v(" "),n("ul",[n("li",[e._v("Maximizes the Window of the application instance.")])])]),e._v(" "),n("li",[n("p",[e._v("minimize(): void")]),e._v(" "),n("ul",[n("li",[e._v("Minimizes the Window of the application instance.")])])]),e._v(" "),n("li",[n("p",[e._v("restore(): void")]),e._v(" "),n("ul",[n("li",[e._v("Restores the Window of the application instance from a minimized state.")])])]),e._v(" "),n("li",[n("p",[e._v("setTitle(title: string):void")]),e._v(" "),n("ul",[n("li",[e._v("Sets the title of the Window.")])])]),e._v(" "),n("li",[n("p",[e._v("setPosition(pos: {top: number, left: number, width: number, height: number}): void")]),e._v(" "),n("ul",[n("li",[e._v("Sets the position of the Window on the page and the size of the window.")])])]),e._v(" "),n("li",[n("p",[e._v("spawnContextMenu(xPos: number, yPos: number, items: ContextMenuItem[]): void")]),e._v(" "),n("ul",[n("li",[e._v("Opens a context menu on the application instance.")])])]),e._v(" "),n("li",[n("p",[e._v("registerCloseHandler"),n("code",[e._v("(handler: () => Promise<void>)")]),e._v(": void")]),e._v(" "),n("ul",[n("li",[e._v("Registers a handler, which is called when the Window and application instance are closed.")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);