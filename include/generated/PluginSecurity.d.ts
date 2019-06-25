// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!

/// <reference no-default-lib="true"/>
/// <reference path="None.d.ts" />

// GENERATED ROBLOX INSTANCE CLASSES

interface Instance {
	/** 
	 * If true, the `Instance` and its descendants cannot be indexed or edited by a `Script` or `LocalScript` and will throw an error if it is attempted.
	 *
	 * This property currently cannot be changed by developers.
	 *
	 * This property is primarily intended to protect objects in the `CoreGui` service from being altered by users in an unauthorized manner. Developers looking to alter the `CoreGui` should use [StarterGui.SetCore](https://developer.roblox.com/api-reference/function/StarterGui/SetCore) and [StarterGui.GetCore](https://developer.roblox.com/api-reference/function/StarterGui/GetCore).
	 */
	RobloxLocked: boolean;
	/** 
	 * Returns a coded string of the `Instance`s DebugId used internally by Roblox.
	 *
	 * ## Notes
	 *
	 *  - This item is protected. Attempting to use it in a `Script` or `LocalScript` will cause an error
	 *
	 *  - A debug ID is an ID used in debugging processes. It allows a debugger to read each instruction before an application processes it. All objects in Roblox act like processes and each run instructions (or 'code') that can be debugged if needed
	 *
	 *  - This can be helpful for plugins which need to distinguish similar objects from one-another (such as objects that share the same name)
	 * @param scopeLength The scope length.
	 * @returns The Debug ID string.
	 */
	GetDebugId(scopeLength?: number): string;
}

interface Animator extends Instance {
	/** 
	 * Increments the [AnimationTrack.TimePosition](https://developer.roblox.com/api-reference/property/AnimationTrack/TimePosition) of all playing `AnimationTrack`s that are loaded onto the `Animator`, applying the offsets to the model associated with the `Animator`. For use in the command bar or by plugins only.
	 *
	 * The deltaTime paramater determines the number of seconds to increment on the animation's progress. Typically this function will be called in a loop to preview the length of an animation (see example).
	 *
	 * Note that once animations have stopped playing, the model's joints will need to be manually reset to their original positions (see example).
	 *
	 * This function is used to simulate playback of `Animation`s when the game isn't running. This allows animations to be previewed without the consequences of running the game, such as scripts executing. If the function is called whilst the game is running, or by `Script`s or `LocalScript`s, it will return an error.
	 *
	 * Developers designing their own custom animation editors are advised to use this function to preview animations, as it is the method the official Roblox Animation Editor plugin uses.
	 * @param deltaTime The amount of time in seconds animation playback is to be incremented by.
	 */
	StepAnimations(deltaTime: number): void;
}

interface StarterGui extends BasePlayerGui {
	ProcessUserInput: boolean;
}

interface ChangeHistoryService extends Instance {
	/** 
	 * Returns whether there are actions that can be redone, and, if there are, returns the last of them.
	 */
	GetCanRedo(): unknown;
	/** 
	 * Returns whether there are actions that can be undone, and, if there are, returns the last of them.
	 */
	GetCanUndo(): unknown;
	/** 
	 * Executes the last action that was undone.
	 */
	Redo(): void;
	/** 
	 * Clears the history, causing all undo/redo waypoints to be removed.
	 */
	ResetWaypoints(): void;
	/** 
	 * Sets whether or not the ChangeHistoryService is enabled. When set to false, the undo/redo list is cleared, and does not repopulate. When set to true again, the original list is not restored, but further operations append to the list once more
	 */
	SetEnabled(state: boolean): void;
	/** 
	 * Sets a new waypoint which can be used as an undo or redo point.
	 */
	SetWaypoint(name: string): void;
	/** 
	 * Undos the last action taken, for which there exists a waypoint.
	 */
	Undo(): void;
	/** 
	 * Fired when the user reverses the undo command. Waypoint describes the type action that has been redone.
	 */
	readonly OnRedo: RBXScriptSignal<(waypoint: string) => void>;
	/** 
	 * Fired when the user undoes an action in studio. Waypoint describes the type action that has been undone.
	 */
	readonly OnUndo: RBXScriptSignal<(waypoint: string) => void>;
}

interface File extends Instance {
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden, ReadOnly, NotReplicated
	 */
	readonly Size: number;
	/** [NO DOCUMENTATION] */
	GetBinaryContents(): string;
	/** [NO DOCUMENTATION] */
	GetTemporaryId(): string;
}

interface PluginGui extends LayerCollector {
	/** [NO DOCUMENTATION] */
	GetRelativeMousePosition(): Vector2;
	/** [NO DOCUMENTATION] */
	readonly PluginDragDropped: RBXScriptSignal<(dragData: object) => void>;
	/** [NO DOCUMENTATION] */
	readonly PluginDragEntered: RBXScriptSignal<(dragData: object) => void>;
	/** [NO DOCUMENTATION] */
	readonly PluginDragLeft: RBXScriptSignal<(dragData: object) => void>;
	/** [NO DOCUMENTATION] */
	readonly PluginDragMoved: RBXScriptSignal<(dragData: object) => void>;
	/** [NO DOCUMENTATION] */
	readonly WindowFocusReleased: RBXScriptSignal<() => void>;
	/** [NO DOCUMENTATION] */
	readonly WindowFocused: RBXScriptSignal<() => void>;
}

interface KeyframeSequence extends Instance {
	AuthoredHipHeight: number;
}

interface Script extends BaseScript {
	/** 
	 * The code to be executed.
	 */
	Source: string;
}

interface ModuleScript extends LuaSourceContainer {
	/** 
	 * The code to be executed.
	 */
	Source: string;
}

interface PluginMouse extends Mouse {
	/** 
	 * Fired when Instances are being selected while the mouse is dragging.
	 */
	readonly DragEnter: RBXScriptSignal<(instances: Array<Instance>) => void>;
}

interface NetworkPeer extends Instance {
	/** 
	 * Sets the maximum outgoing bandwidth that Roblox can use.
	 */
	SetOutgoingKBPSLimit(limit: number): void;
}

interface NetworkReplicator extends Instance {
	/** 
	 * Returns a string displaying how many bytes are being sent/received by the replicator, and the current packet-loss. The verbosity level determines how much information is returned in the string (0 = Basic, 1 = Detailed, 2 = Full).
	 */
	GetRakStatsString(verbosityLevel?: number): string;
}

interface NetworkSettings extends Instance {
	/** 
	 * ExtraMemoryUsed is an unused debug property intended for streaming.
	 *
	 * It appears to specify how much extra memory is allocated to streaming, in MBs.
	
	 * ExtraMemoryUsed is an unused debug property intended for streaming.
	 *
	 * It appears to specify how much extra memory is allocated to streaming, in MBs.
	 *
	 * Tags: Hidden, NotReplicated
	 */
	ExtraMemoryUsed: number;
	/** 
	 * FreeMemoryMBytes is a read-only property that describes how much free memory is available, in MBs.
	 *
	 * It is stored as a floating point number, so it can be be read down at the level of available bytes by multiplying its value by `1024 * 1024`.
	
	 * FreeMemoryMBytes is a read-only property that describes how much free memory is available, in MBs.
	 *
	 * It is stored as a floating point number, so it can be be read down at the level of available bytes by multiplying its value by `1024 * 1024`.
	 *
	 * Tags: Hidden, ReadOnly, NotReplicated
	 */
	readonly FreeMemoryMBytes: number;
}

interface Workspace extends Model {
	/** 
	 * Positions and zooms the [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera) to show the extent of `BasePart`s currently in the `Workspace`.
	 *
	 * This function was used in the, now removed, 'Zoom To Extents' button in Roblox Studio. It exhibits similar behavior to the 'Zoom To' (F shortcut) feature, however it shows the extents of the `Workspace` rather than the currently selected object.
	 *
	 * This function cannot be used in scripts but will function in the command bar or plugins.
	 */
	ZoomToExtents(): void;
}

interface Player extends Instance {
	/** 
	 * Sets the [AccountAge](https://wiki.roblox.com/index.php?title=AccountAge) of the player.
	 */
	SetAccountAge(accountAge: number): void;
	/** 
	 * Sets whether or not the player sees [filtered chats](https://wiki.roblox.com/index.php?title=FilterStringForPlayerAsync), rather than normal chats.
	 */
	SetSuperSafeChat(value: boolean): void;
}

interface Players extends Instance {
	/** 
	 * This function makes the local player chat the given message. Since this item is protected, attempting to use it in a `Script` or `LocalScript` will cause an error.
	 *
	 * Instead, when creating a custom chat system, or a system that needs access to the chat, you can use the `Chat` service's [Chat.Chat](https://developer.roblox.com/api-reference/function/Chat/Chat) function instead.
	 *
	 * ## See also
	 *
	 *  - [Lua Chat System](https://developer.roblox.com/search#stq=Lua-Chat-System), a tutorial for creating a more advanced chat system
	 * @param message The message chatted.
	 * @returns void
	 */
	Chat(message: string): void;
	/** 
	 * This function sets whether BubbleChat and ClassicChat are being used, and tells TeamChat and Chat what to do using the `ChatStyle` enum. Since this item is protected, attempting to use it in a `Script` or `LocalScript` will cause an error.
	 *
	 * This function is used internally when the chat mode is set by the game.
	 *
	 * If you would like to create a custom chat system where you can define custom functions such as these, take a look at the tutorial [here][1].
	 *
	 * [1]: https://developer.roblox.com/articles/Lua-Chat-System
	 * @param style The specified chat style being set
	 * @returns void
	 */
	SetChatStyle(style?: CastsToEnum<Enum.ChatStyle>): void;
	/** 
	 * This function makes the [Players.LocalPlayer](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) chat the given message, which will only be viewable by users on the same team. Since this item is protected, attempting to use it in a `Script` or `LocalScript` will cause an error.
	 *
	 * This function is used internally when the [Players.LocalPlayer](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) sends a message to their team.
	 *
	 * If you would like to create a custom chat system where you can define custom functions such as these, take a look at the tutorial [here][1].
	 *
	 * [1]: https://developer.roblox.com/articles/Lua-Chat-System
	 * @param message The message being chatted.
	 * @returns void
	 */
	TeamChat(message: string): void;
}

interface Plugin extends Instance {
	/** 
	 * Sets the state of the calling plugin to activated. Allows mouse control through the [Plugin.GetMouse](https://developer.roblox.com/api-reference/function/Plugin/GetMouse) method.
	 */
	Activate(exclusiveMouse: boolean): void;
	/** 
	 * This function creates a `PluginAction` which is an object that represents a generic performable action in Roblox Studio, with no directly associated `Toolbar` or `Button`. In Roblox Studio, they can be assigned a keyboard shortcut under `File → Advanced → Customize Shortcuts…`, and they can also be added to the Quick Access Toolbar.
	 *
	 * When an action is triggered, the [PluginAction.Triggered](https://developer.roblox.com/api-reference/event/PluginAction/Triggered) event is signaled.
	 *
	 * In order for PluginActions work as expected, they must be created using this function.
	 *
	 * ## See also
	 *
	 *   - [articles.Intro to Plugins](https://developer.roblox.com/search#stq=Intro%20to%20Plugins), an introductory article to plugin use and development
	 *
	 *   - `PluginMenu`, a context menu that can be shown in Studio which displays a list of PluginActions and supports submenus
	 *
	 *   - [Plugin.CreatePluginMenu](https://developer.roblox.com/api-reference/function/Plugin/CreatePluginMenu), creates a PluginMenu
	 * @param actionId Must be a unique string that identifies this PluginAction from others
	 * @param text The displayed name of the action
	 * @param statusTip The displayed description of the action
	 * @param iconName The name of the icon used to display the plugin
	 * @param allowBinding Whether the `PluginAction` will be hidden from Studio's shortcuts view. Useful for contextual actions. Defaults to true
	 * @returns The newly created PluginAction object
	 */
	CreatePluginAction(
		actionId: string,
		text: string,
		statusTip: string,
		iconName?: string,
		allowBinding?: boolean,
	): PluginAction;
	/** 
	 * This function creates a new `PluginMenu`, which is a context menu that can be shown in Studio that displays a list of [PluginActions](https://developer.roblox.com/api-reference/class/PluginAction) and supports submenus.
	 *
	 * In order for PluginMenus to work as expected, they must be created using this function.
	 *
	 * ## See also
	 *
	 *   - [articles.Intro to Plugins](https://developer.roblox.com/search#stq=Intro%20to%20Plugins), an introductory article to plugin use and development
	 *
	 *   - `PluginAction`, an object that represents a generic performable action in Roblox Studio, with no directly associated `Toolbar` or `Button`.
	 *
	 *   - [Plugin.CreatePluginAction](https://developer.roblox.com/api-reference/function/Plugin/CreatePluginAction), creates a PluginAction
	 *
	 *   - [PluginMenu.Title](https://developer.roblox.com/api-reference/property/PluginMenu/Title), the text to be displayed when used as a sub menu
	 *
	 *   - [PluginMenu.Icon](https://developer.roblox.com/api-reference/property/PluginMenu/Icon), the icon to be displayed when used as a sub menu
	 *
	 *   - [PluginMenu.AddAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddAction), adds the given action to the menu
	 *
	 *   - [PluginMenu.AddNewAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddNewAction), creates a temporary action that is hidden from Studio's customize shortcuts window
	 *
	 *   - [PluginMenu.AddMenu](https://developer.roblox.com/api-reference/function/PluginMenu/AddMenu), adds the given menu as a separator
	 *
	 *   - [PluginMenu.AddSeparator](https://developer.roblox.com/api-reference/function/PluginMenu/AddSeparator), adds a separator between items in the menu
	 *
	 *   - [PluginMenu.Clear](https://developer.roblox.com/api-reference/function/PluginMenu/Clear), clears the menu
	 *
	 *   - [PluginMenu.ShowAsync](https://developer.roblox.com/api-reference/function/PluginMenu/ShowAsync), shows the menu at the mouse cursor. Yields until either an item is selected or the menu is closed. The selected action fires its Triggered event
	 * @param id Unique ID for the menu
	 * @param title The text to be displayed when used as a sub menu
	 * @param icon The icon to be displayed when used as a sub menu
	 * @returns The created `PluginMenu` instance
	 */
	CreatePluginMenu(id: string, title?: string, icon?: string): PluginMenu;
	/** 
	 * Gets or creates a new `Toolbar` with the specified name, which is then used to create a plugin button.
	 */
	CreateToolbar(name: string): PluginToolbar;
	/** 
	 * Deactivates this plugin. This will disengage the associated `PluginMouse` if it has been activated.
	 */
	Deactivate(): void;
	/** 
	 * Returns the [Enum.JointCreationMode](https://developer.roblox.com/search#stq=JointCreationMode) the user has set in studio under the Model tab.
	 */
	GetJoinMode(): Enum.JointCreationMode;
	/** 
	 * Returns a mouse that can be used with the plugin.
	 */
	GetMouse(): PluginMouse;
	/** 
	 * GetSelectedRibbonTool return the currently selected [Enum.RibbonTool](https://developer.roblox.com/search#stq=RibbonTool). It returns an Enum that corresponds to a particular tool. This will return whether the tool is selected manually or programmatically via [Plugin.SelectRibbonTool](https://developer.roblox.com/api-reference/function/Plugin/SelectRibbonTool).
	 */
	GetSelectedRibbonTool(): Enum.RibbonTool;
	/** 
	 * Retrieves a previously stored value with the given key, or nil if the given key doesn't exist.
	 */
	GetSetting(key: string): unknown;
	/** 
	 * Returns the studio user’s userId if they're logged in, otherwise returns 0.
	 */
	GetStudioUserId(): number;
	/** 
	 * Returns true if this plugin is currently active, after having been activated via the [Plugin.Activate](https://developer.roblox.com/api-reference/function/Plugin/Activate) function.
	 */
	IsActivated(): boolean;
	/** 
	 * Returns true if this plugin is currently active with an exclusive mouse, after having been activated via the [Plugin.Activate](https://developer.roblox.com/api-reference/function/Plugin/Activate) function.If this returns true, a `PluginMouse` can be retrieved via [Plugin.GetMouse](https://developer.roblox.com/api-reference/function/Plugin/GetMouse).
	 */
	IsActivatedWithExclusiveMouse(): boolean;
	/** 
	 * Negates the given parts and returns the resulting NegateOperations.
	 */
	Negate(objects: Array<Instance>): Array<Instance>;
	/** 
	 * Used to open the given script instance in an editor window, in Roblox studio, at the given line. If no line is given as an argument it will default to 0.
	 */
	OpenScript(script: Instance, lineNumber?: number): void;
	/** 
	 * Opens the context help window to the wiki page that `url` links to.
	 */
	OpenWikiPage(url: string): void;
	/** 
	 * Opens an upload window for the user's current selection.
	 */
	SaveSelectedToRoblox(): void;
	/** 
	 * Activates the specified Roblox Studio tool.
	 *
	 * If the tool opens a window, the position parameter specifies where it should be shown on the screen.
	 *
	 * ## Notes
	 *
	 * * An object must be selected in order for this to work correctly.
	 *
	 * * Altering the scale fields of the _position_ property will not affect the dialog popups.
	 */
	SelectRibbonTool(tool: CastsToEnum<Enum.RibbonTool>, position: UDim2): void;
	/** 
	 * Separates the given UnionOperations and returns the resulting parts.
	 */
	Separate(objects: Array<Instance>): Array<Instance>;
	/** 
	 * Stores a given value for later use under the given key. The value will persist even after studio is closed.
	 */
	SetSetting(key: string, value?: any): void;
	StartDrag(dragData: object): void;
	/** 
	 * Unions the given parts and returns the resulting UnionOperation.
	 */
	Union(objects: Array<BasePart>): UnionOperation;
	/** 
	 * This function creates a `DockWidgetPluginGui` using the provided [DataType.DockWidgetPluginGuiInfo](https://developer.roblox.com/search#stq=DockWidgetPluginGuiInfo).
	 *
	 * See the [Building Studio Widgets](https://developer.roblox.com/search#stq=building%20studio%20widgets) tutorial for details on working with custom Studio widgets.
	 * @param pluginGuiId Consistent identifier used for storing/preserving the widget dock state and other internal details.
	 * @param dockWidgetPluginGuiInfo Datatype describing details for the new `DockWidgetPluginGui`.
	 */
	CreateDockWidgetPluginGui(
		pluginGuiId: string,
		dockWidgetPluginGuiInfo: DockWidgetPluginGuiInfo,
	): DockWidgetPluginGui;
	/** 
	 * This function prompts the user to open a .fbx animation file that can be loaded onto the _rigModel_, then proceeds to insert the animation as a `KeyframeSequence` in the `Workspace`.
	 */
	ImportFbxAnimation(rigModel: Instance, isR15?: boolean): Instance | undefined;
	/** 
	 * Prompts the user to open a .fbx file, uploads the individual components of the model as meshes, and generates a character rig for use in animation, which is loaded into the `Workspace`.
	 */
	ImportFbxRig(isR15?: boolean): Model;
	/** 
	 * Opens a window in Roblox Studio, which prompts the user to select an asset based on the _assetType_ specified. Returns what assetId was selected, or -1 if the window was closed.
	 */
	PromptForExistingAssetId(assetType: string): number;
	/** 
	 * Prompts the user to save their current selection with the specified file name. Returns true if the user did save the file.
	 */
	PromptSaveSelection(suggestedFileName?: string): boolean;
	/** 
	 * Fired when the plugin is deactivated. This occurs when either the plugin code calls [Plugin.Deactivate](https://developer.roblox.com/api-reference/function/Plugin/Deactivate), or because some other plugin called [Plugin.Activate](https://developer.roblox.com/api-reference/function/Plugin/Activate), which forces all other plugins to lose their active state.
	 */
	readonly Deactivation: RBXScriptSignal<() => void>;
	readonly Unloading: RBXScriptSignal<() => void>;
}

interface PluginAction extends Instance {
	/** 
	 * Fires when the action is triggered. This can be done by either activating the action from the Quick Access Toolbar, or by using the keyboard shortcut that was bound to it.
	 */
	readonly Triggered: RBXScriptSignal<() => void>;
}

interface PluginManager extends Instance {
	/** 
	 * Returns a `Plugin`
	 */
	CreatePlugin(): Plugin;
	/** 
	 * If the FilePath argument is provided, the place is saved in the given location, otherwise it opens the "Export Place" window. (*.OBJ)
	 */
	ExportPlace(filePath?: string): void;
	/** 
	 * If the FilePath argument is provided, the selected instance is exported as an OBJ in the given location, otherwise it opens the "Export Place" window.
	 */
	ExportSelection(filePath?: string): void;
}

interface PluginMenu extends Instance {
	/** 
	 * This function adds the given action to the menu.
	 *
	 * ## See also
	 *
	 *   - [articles.Intro to Plugins](https://developer.roblox.com/search#stq=Intro%20to%20Plugins), an introductory article to plugin use and development
	 *
	 *   - `PluginAction`, an object that represents a generic performable action in Roblox Studio, with no directly associated `Toolbar` or `Button`.
	 *
	 *   - [Plugin.CreatePluginAction](https://developer.roblox.com/api-reference/function/Plugin/CreatePluginAction), creates a PluginAction
	 *
	 *   - [PluginMenu.Title](https://developer.roblox.com/api-reference/property/PluginMenu/Title), the text to be displayed when used as a sub menu
	 *
	 *   - [PluginMenu.Icon](https://developer.roblox.com/api-reference/property/PluginMenu/Icon), the icon to be displayed when used as a sub menu
	 *
	 *   - [PluginMenu.AddNewAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddNewAction), creates a temporary action that is hidden from Studio's customize shortcuts window
	 *
	 *   - [PluginMenu.AddMenu](https://developer.roblox.com/api-reference/function/PluginMenu/AddMenu), adds the given menu as a separator
	 *
	 *   - [PluginMenu.AddSeparator](https://developer.roblox.com/api-reference/function/PluginMenu/AddSeparator), adds a separator between items in the menu
	 *
	 *   - [PluginMenu.Clear](https://developer.roblox.com/api-reference/function/PluginMenu/Clear), clears the menu
	 *
	 *   - [PluginMenu.ShowAsync](https://developer.roblox.com/api-reference/function/PluginMenu/ShowAsync), shows the menu at the mouse cursor. Yields until either an item is selected or the menu is closed. The selected action fires its Triggered event
	 * @param action The action to add
	 * @returns void
	 */
	AddAction(action: PluginAction): void;
	/** 
	 * This function adds the given menu as a separator.
	 *
	 * ## See also
	 *
	 *   - [articles.Intro to Plugins](https://developer.roblox.com/search#stq=Intro%20to%20Plugins), an introductory article to plugin use and development
	 *
	 *   - `PluginAction`, an object that represents a generic performable action in Roblox Studio, with no directly associated `Toolbar` or `Button`.
	 *
	 *   - [Plugin.CreatePluginAction](https://developer.roblox.com/api-reference/function/Plugin/CreatePluginAction), creates a PluginAction
	 *
	 *   - [PluginMenu.Title](https://developer.roblox.com/api-reference/property/PluginMenu/Title), the text to be displayed when used as a sub menu
	 *
	 *   - [PluginMenu.Icon](https://developer.roblox.com/api-reference/property/PluginMenu/Icon), the icon to be displayed when used as a sub menu
	 *
	 *   - [PluginMenu.AddAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddAction), adds the given action to the menu
	 *
	 *   - [PluginMenu.AddNewAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddNewAction), creates a temporary action that is hidden from Studio's customize shortcuts window
	 *
	 *   - [PluginMenu.AddSeparator](https://developer.roblox.com/api-reference/function/PluginMenu/AddSeparator), adds a separator between items in the menu
	 *
	 *   - [PluginMenu.Clear](https://developer.roblox.com/api-reference/function/PluginMenu/Clear), clears the menu
	 *
	 *   - [PluginMenu.ShowAsync](https://developer.roblox.com/api-reference/function/PluginMenu/ShowAsync), shows the menu at the mouse cursor. Yields until either an item is selected or the menu is closed. The selected action fires its Triggered event
	 * @param menu The menu to add as a sub menu. Uses its `PluginMenu/Title` and `PluginMenu/Icon` to display
	 * @returns void
	 */
	AddMenu(menu: PluginMenu): void;
	/** 
	 
	 * @param actionId Must be a unique string that identifies this PluginAction from others
	 * @param text The text to be displayed
	 * @param icon The icon to be displayed
	 * @returns The created `PluginAction`
	 */
	AddNewAction(actionId: string, text: string, icon?: string): PluginAction;
	/** 
	 * This function adds a separator between items in the menu.
	 *
	 * ## See also
	 *
	 *   - [articles.Intro to Plugins](https://developer.roblox.com/search#stq=Intro%20to%20Plugins), an introductory article to plugin use and development
	 *
	 *   - `PluginAction`, an object that represents a generic performable action in Roblox Studio, with no directly associated `Toolbar` or `Button`.
	 *
	 *   - [Plugin.CreatePluginAction](https://developer.roblox.com/api-reference/function/Plugin/CreatePluginAction), creates a PluginAction
	 *
	 *   - [PluginMenu.Title](https://developer.roblox.com/api-reference/property/PluginMenu/Title), the text to be displayed when used as a sub menu
	 *
	 *   - [PluginMenu.Icon](https://developer.roblox.com/api-reference/property/PluginMenu/Icon), the icon to be displayed when used as a sub menu
	 *
	 *   - [PluginMenu.AddAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddAction), adds the given action to the menu
	 *
	 *   - [PluginMenu.AddNewAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddNewAction), creates a temporary action that is hidden from Studio's customize shortcuts window
	 *
	 *   - [PluginMenu.AddMenu](https://developer.roblox.com/api-reference/function/PluginMenu/AddMenu), adds the given menu as a separator
	 *
	 *   - [PluginMenu.Clear](https://developer.roblox.com/api-reference/function/PluginMenu/Clear), clears the menu
	 *
	 *   - [PluginMenu.ShowAsync](https://developer.roblox.com/api-reference/function/PluginMenu/ShowAsync), shows the menu at the mouse cursor. Yields until either an item is selected or the menu is closed. The selected action fires its Triggered event
	 * @returns void
	 */
	AddSeparator(): void;
	/** 
	 * This function clears the menu
	 *
	 * ## See also
	 *
	 *   - [articles.Intro to Plugins](https://developer.roblox.com/search#stq=Intro%20to%20Plugins), an introductory article to plugin use and development
	 *
	 *   - `PluginAction`, an object that represents a generic performable action in Roblox Studio, with no directly associated `Toolbar` or `Button`.
	 *
	 *   - [Plugin.CreatePluginAction](https://developer.roblox.com/api-reference/function/Plugin/CreatePluginAction), creates a PluginAction
	 *
	 *   - [PluginMenu.Title](https://developer.roblox.com/api-reference/property/PluginMenu/Title), the text to be displayed when used as a sub menu
	 *
	 *   - [PluginMenu.Icon](https://developer.roblox.com/api-reference/property/PluginMenu/Icon), the icon to be displayed when used as a sub menu
	 *
	 *   - [PluginMenu.AddAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddAction), adds the given action to the menu
	 *
	 *   - [PluginMenu.AddNewAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddNewAction), creates a temporary action that is hidden from Studio's customize shortcuts window
	 *
	 *   - [PluginMenu.AddMenu](https://developer.roblox.com/api-reference/function/PluginMenu/AddMenu), adds the given menu as a separator
	 *
	 *   - [PluginMenu.AddSeparator](https://developer.roblox.com/api-reference/function/PluginMenu/AddSeparator), adds a separator between items in the menu
	 *
	 *   - [PluginMenu.ShowAsync](https://developer.roblox.com/api-reference/function/PluginMenu/ShowAsync), shows the menu at the mouse cursor. Yields until either an item is selected or the menu is closed. The selected action fires its Triggered event
	 */
	Clear(): void;
	/** 
	 * This function shows the menu at the mouse cursor. It yields until either an item is selected or the menu is closed. The selected action fires its [PluginAction.Triggered](https://developer.roblox.com/api-reference/event/PluginAction/Triggered) event
	 *
	 * ## See also
	 *
	 *   - [articles.Intro to Plugins](https://developer.roblox.com/search#stq=Intro%20to%20Plugins), an introductory article to plugin use and development
	 *
	 *   - `PluginAction`, an object that represents a generic performable action in Roblox Studio, with no directly associated `Toolbar` or `Button`.
	 *
	 *   - [Plugin.CreatePluginAction](https://developer.roblox.com/api-reference/function/Plugin/CreatePluginAction), creates a PluginAction
	 *
	 *   - [PluginMenu.Title](https://developer.roblox.com/api-reference/property/PluginMenu/Title), the text to be displayed when used as a sub menu
	 *
	 *   - [PluginMenu.Icon](https://developer.roblox.com/api-reference/property/PluginMenu/Icon), the icon to be displayed when used as a sub menu
	 *
	 *   - [PluginMenu.AddAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddAction), adds the given action to the menu
	 *
	 *   - [PluginMenu.AddNewAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddNewAction), creates a temporary action that is hidden from Studio's customize shortcuts window
	 *
	 *   - [PluginMenu.AddMenu](https://developer.roblox.com/api-reference/function/PluginMenu/AddMenu), adds the given menu as a separator
	 *
	 *   - [PluginMenu.AddSeparator](https://developer.roblox.com/api-reference/function/PluginMenu/AddSeparator), adds a separator between items in the menu
	 *
	 *   - [PluginMenu.Clear](https://developer.roblox.com/api-reference/function/PluginMenu/Clear), clears the menu
	 * @returns The `PluginAction` item that was selected or nil
	 */
	ShowAsync(): Instance | undefined;
}

interface PluginToolbar extends Instance {

	CreateButton(buttonId: string, tooltip: string, iconname: string, text?: string): PluginToolbarButton;
}

interface PluginToolbarButton extends Instance {
	/** [NO DOCUMENTATION] */
	SetActive(active: boolean): void;
	/** [NO DOCUMENTATION] */
	readonly Click: RBXScriptSignal<() => void>;
}

interface RunService extends Instance {
	/** [NO DOCUMENTATION] */
	IsEdit(): boolean;
	/** 
	 * Pauses the physics and scripts in a place.
	 */
	Pause(): void;
	/** 
	 * Creates a waypoint and then runs the game just like the Play button does in studio.
	 */
	Run(): void;
	/** 
	 * Stops the running simulation.
	 */
	Stop(): void;
}

interface ScriptContext extends Instance {
	/** 
	 * Limits how long a script is allowed to run without yielding.
	 */
	SetTimeout(seconds: number): void;
}

interface Selection extends Instance {
	/** 
	 * Returns an array of currently selected `Instance`s in Roblox Studio.
	 *
	 * If no `Instance`s are selected, the array returned be empty. This function can be used in conjunction with the [Selection.SelectionChanged](https://developer.roblox.com/api-reference/event/Selection/SelectionChanged) event to get the selection whenever it changes.
	 *
	 * Note, this function can only be used in `Plugin`s or the command line.
	 *
	 * For changing the current selection, please see [Selection.Set](https://developer.roblox.com/api-reference/function/Selection/Set).
	 * @returns An array of currently selected `Instance`s.
	 */
	Get(): Array<Instance>;
	/** 
	 * Sets the currently selected objects in Roblox Studio to `Instance`s in the given array.
	 *
	 * Calling this function will cause the [Selection.SelectionChanged](https://developer.roblox.com/api-reference/event/Selection/SelectionChanged) event to fire, unless the new selection set is identical to the previous selection.
	 *
	 * Note this function overwrites the existing selection. However, using [Selection.Get](https://developer.roblox.com/api-reference/function/Selection/Get) an `Instance` can be added to the existing selection like so:
	 *
	 * ```lua
local selected = Selection:Get()
table.insert(selected, object)
Selection:Set(selected)
```
	 *
	 * @param selection An array of `Instance`s to set the current selection to.
	 */
	Set(selection: Array<Instance>): void;
}

interface DataModel extends ServiceProvider {
	/** 
	 * Returns the job interval peak fraction of the specified task scheduler job.
	 */
	GetJobIntervalPeakFraction(jobname: string, greaterThan: number): number;
	/** 
	 * Returns the job time peak fraction of the specified task scheduler job.
	 */
	GetJobTimePeakFraction(jobname: string, greaterThan: number): number;
	/** 
	 * This function is currently broken
	 *
	 * This function returns a table containing extended statistics on the jobs performed by the task scheduler.
	 *
	 * In computing, a task scheduler is a system responsible for executing key tasks at the appropriate intervals.
	 *
	 * This function is currently broken and does not return the correct values. You can find live task scheduler statistics in the Task Scheduler window in Roblox Studio.
	 *
	 * The first entry in the table returned is a reference dictionary containing the statistics (or headings) available. It is in the following format:
	 *
	 * ```lua
{
```
	 * 

	 * lua
	 *
	 * ["name"] = "name",
	 *
	 * ["time.average"] = "time.average",
	 *
	 * ["time.variance"] = "time.variance",
	 *
	 * ["time.samples"] = "time.samples",
	 *
	 * ["interval.average"] = "interval.average",
	 *
	 * ["interval.variance"] = "interval.variance",
	 *
	 * ["interval.samples"] = "interval.samples",
	 *
	 * ["dutyfraction"] = "dutyfraction"
	 *
	 * ```lua
}
```
	 * 

	 * The subsequent entries in the table returned are dictionaries containing the above statistics for jobs performed by the task scheduler. For example:
	 *
	 * ```lua
{
```
	 * 

	 * lua
	 *
	 * ["name"] = "Heartbeat",
	 *
	 * ["time.average"] = 0,
	 *
	 * ["time.variance"] = 0,
	 *
	 * ["time.samples"] = 0,
	 *
	 * ["interval.average"] = 0,
	 *
	 * ["interval.variance"] = 0,
	 *
	 * ["interval.samples"] = 0,
	 *
	 * ["dutyfraction"] = 0
	 *
	 * ```lua
}
```
	 * 

	 * ## See also
	 *
	 *  - `TaskScheduler`
	 *
	 *  - [DataModel.GetJobsInfo](https://developer.roblox.com/api-reference/function/DataModel/GetJobsInfo)
	 *
	 *  - [DataModel.GetJobIntervalPeakFraction](https://developer.roblox.com/api-reference/function/DataModel/GetJobIntervalPeakFraction)
	 *
	 *  - [DataModel.GetJobTimePeakFraction](https://developer.roblox.com/api-reference/function/DataModel/GetJobTimePeakFraction)
	 * @returns A table containing statistics on the jobs performed by the task scheduler, see above for the format
	 */
	GetJobsExtendedStats(): unknown;
	/** 
	 * Returns a table containing basic information about the jobs performed by the task scheduler
	 *
	 * In computing, a task scheduler is a system responsible for executing key tasks at the appropriate intervals.
	 *
	 * You can also find live task scheduler statistics in the Task Scheduler window in Roblox Studio.
	 *
	 * The first entry in the table returned is a reference dictionary containing the statistics (or headings) available. It is in the following format:
	 *
	 * ```lua
{
```
	 * 

	 * lua
	 *
	 * ["name"] = "name",
	 *
	 * ["averageDutyCycle"] = "averageDutyCycle",
	 *
	 * ["averageStepsPerSecond"] = "averageStepsPerSecond",
	 *
	 * ["averageStepTime"] = "averageStepTime",
	 *
	 * ["averageError"] = "averageError",
	 *
	 * ["isRunning"] = "isRunning",
	 *
	 * ```lua
}
```
	 * 

	 * The subsequent entries in the table returned are dictionaries containing the above statistics for jobs performed by the task scheduler. For example:
	 *
	 * ```lua
{
```
	 * 

	 * lua
	 *
	 * ["name"] = "Heartbeat",
	 *
	 * ["averageDutyCycle"] = 0,
	 *
	 * ["averageStepsPerSecond"] = 0,
	 *
	 * ["averageStepTime"] = 0,
	 *
	 * ["averageError"] = 0,
	 *
	 * ["isRunning"] = false,
	 *
	 * ```lua
}
```
	 * 

	 * ## See also
	 *
	 *  - `TaskScheduler`
	 *
	 *  - [DataModel.GetJobsExtendedStats](https://developer.roblox.com/api-reference/function/DataModel/GetJobsExtendedStats)
	 *
	 *  - [DataModel.GetJobIntervalPeakFraction](https://developer.roblox.com/api-reference/function/DataModel/GetJobIntervalPeakFraction)
	 *
	 *  - [DataModel.GetJobTimePeakFraction](https://developer.roblox.com/api-reference/function/DataModel/GetJobTimePeakFraction)
	 * @returns A table containing information about the jobs performed by the task scheduler, see above for the format
	 */
	GetJobsInfo(): unknown;
	/** 
	 * This function returns an array of [Instances](https://developer.roblox.com/api-reference/class/Instance) associated with the given [content](https://developer.roblox.com/search#stq=Content) URL.
	 *
	 * This function can be used to insert content from the Roblox [library][1], such as:
	 *
	 *  - Models
	 *
	 *  - Decals
	 *
	 *  - Meshes
	 *
	 *  - Plugins
	 *
	 *  - Animations
	 *
	 * It is not possible to insert [Sounds](https://developer.roblox.com/api-reference/class/Sound) using this method as they do not have an `Instance` associated with them (rather just a [content](https://developer.roblox.com/search#stq=Content) URL).
	 *
	 * Unlike [InsertService.LoadAsset](https://developer.roblox.com/api-reference/function/InsertService/LoadAsset), GetObjects does not require an asset to be ‘trusted’. This means that an asset does not need to be owned by the logged in user, or created by Roblox, to be inserted. However, if the asset is not owned by the logged in user it must be freely available.
	 *
	 * Due to this function’s security context it can only be used by plugins or the command bar. For an alternative that can be used in [Scripts](https://developer.roblox.com/api-reference/class/Script) and [LocalScripts](https://developer.roblox.com/api-reference/class/LocalScript), see [InsertService.LoadAsset](https://developer.roblox.com/api-reference/function/InsertService/LoadAsset).
	 *
	 * [1]: https://www.roblox.com/develop/library
	 * @param url The given `Articles/Content|content` URL
	 * @returns An array of `Instance|Instances` associated with the `Articles/Content|content` URL
	 */
	GetObjects(url: string): Array<Instance>;
	/** 
	 * This function sets the [DataModel.PlaceId](https://developer.roblox.com/api-reference/property/DataModel/PlaceId) of the game instance to the given *placeId*.
	 *
	 * Setting the [DataModel.PlaceId](https://developer.roblox.com/api-reference/property/DataModel/PlaceId) is required to access the `DataStoreService` when the place is unpublished (for example a local .rbxl file). See below for an example. Note this will only work when the *‘Enable Studio Access to API Services`* option is enabled under game settings.
	 *
	 * ```lua
local DataStoreService = game:GetService("DataStoreService")

-- access DataStore 'Data' as place placeId
game:SetPlaceId(placeId)
local dataStore = DataStoreService:GetDataStore("Data")
```
	 * 

	 * You can use [DataModel.SetUniverseId](https://developer.roblox.com/api-reference/function/DataModel/SetUniverseId) to set the [DataModel.GameId](https://developer.roblox.com/api-reference/property/DataModel/GameId) of the game instance. However, it is the [DataModel.PlaceId](https://developer.roblox.com/api-reference/property/DataModel/PlaceId) that must be set to access the `DataStoreService`.
	 * @param placeId The ID to set the `DataModel/PlaceId` to
	 */
	SetPlaceId(placeId: number): void;
	/** 
	 * This function sets the [DataModel.GameId](https://developer.roblox.com/api-reference/property/DataModel/GameId) of the current game instance to the given *universeId*. This is useful when testing local .rbxl files that have not been published to Roblox.
	 *
	 * If you want to access the `DataStoreService` in an unpublished place, you should use [DataModel.SetPlaceId](https://developer.roblox.com/api-reference/function/DataModel/SetPlaceId) instead.
	 * @param universeId The ID to set the `DataModel/GameId` to
	 */
	SetUniverseId(universeId: number): void;
}

interface StatsItem extends Instance {
	/** 
	 * Returns the StatsItem's value.
	 */
	GetValue(): number;
	/** 
	 * Returns the StatsItem's value as a formatted string.
	 */
	GetValueString(): string;
}

interface Studio extends Instance {
	/** 
	 * The **GetAvailableThemes()** function returns a list of [StudioThemes](https://developer.roblox.com/api-reference/class/StudioTheme) available in `Studio`. You can access the function via:
	 *
	 * ```lua
settings().Studio:GetAvailableThemes()
```
	 *
	 * @returns A list of themes available in Studio
	 */
	GetAvailableThemes(): unknown;
	/** 
	 * The **ThemeChanged** event fires when Studio's [Theme](https://developer.roblox.com/api-reference/property/Studio/Theme) changes. The best use of this event is to get the colors from the theme that changed and update your plugin’s UI accordingly.
	 *
	 * See the [Building Studio Widgets](https://developer.roblox.com/search#stq=building%20studio%20widgets) tutorial for details on working with custom Studio widgets.
	 */
	readonly ThemeChanged: RBXScriptSignal<() => void>;
}

interface StudioService extends Instance {
	/** [NO DOCUMENTATION] */
	GetClassIcon(className: string): object;
	/** [NO DOCUMENTATION] *
	 * Tags: Yields
	 */
	PromptImportFile(fileTypeFilter?: Array<any>): Instance | undefined;
	/** [NO DOCUMENTATION] *
	 * Tags: Yields
	 */
	PromptImportFiles(fileTypeFilter?: Array<any>): Array<Instance>;
}

interface StudioTheme extends Instance {
	/** 
	 * The **GetColor()** function returns the [DataType.Color3](https://developer.roblox.com/search#stq=Color3) corresponding to the arguments provided. For instance, if you would like to get the [DataType.Color3](https://developer.roblox.com/search#stq=Color3) of the Studio "MainButton" when it's **disabled**, you can use the following code:
	 *
	 * ```lua
settings().Studio.Theme:GetColor(Enum.StudioStyleGuideColor.MainButton, Enum.StudioStyleGuideModifier.Disabled)
```
	 * 

	 * See the [StudioStyleGuideColor](https://developer.roblox.com/search#stq=StudioStyleGuideColor) reference for a list of Studio elements and [StudioStyleGuideModifier](https://developer.roblox.com/search#stq=StudioStyleGuideModifier) for a list of modifiers.
	 * @param styleguideitem The element you want to get the theme color for
	 * @param modifier The modifier you want to place on the `StyleGuideColor` element
	 * @returns The corresponding Color3 theme value
	 */
	GetColor(styleguideitem: CastsToEnum<Enum.StudioStyleGuideColor>, modifier?: CastsToEnum<Enum.StudioStyleGuideModifier>): Color3;
	/** 
	 * The GetPath function returns the path of an asset (or image) for the `Id` and `Modifier`. We can have different icons to be loaded depending on the theme.
	 *
	 * The `StyleGuideModifer` argument's default value is `Enum\StyleGuideModifier`, which applies no modifier.
	 *
	 * This is intended for use within [Plugins](https://developer.roblox.com/api-reference/class/Plugin), but will also execute in the Command Line.
	 *
	 * For instance, if you would like to get the path of the "MoreButton" image, you would use the following code:
	 *
	 * ```lua
	 *
	 * settings().Studio.Theme:GetPath("MoreButton")
	 * @param assetid The asset id you want the path for
	 * @param modifier The modifier you want to apply to the specified asset
	 * @returns The path of the id with the modifier
	 */
	GetPath(assetid: string, modifier?: CastsToEnum<Enum.StudioStyleGuideModifier>): string;
}

interface TestService extends Instance {
	/** 
	 * Runs scripts which are parented to TestService.
	
	 * Runs scripts which are parented to TestService.
	 *
	 * Tags: Yields
	 */
	Run(): void;
}

