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
	 * Increments the [Animation.TimePosition](https://developer.roblox.com/search#stq=TimePosition) of all playing `AnimationTrack`s that are loaded onto the `Animator`, applying the offsets to the model associated with the `Animator`. For use in the command bar or by plugins only.
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
	 * Makes the local player chat the given message.
	 */
	Chat(message: string): void;
	/** 
	 * Sets whether BubbleChat and ClassicChat are being used, and tells TeamChat and Chat what to do.
	 */
	SetChatStyle(style?: CastsToEnum<Enum.ChatStyle>): void;
	/** 
	 * Makes the LocalPlayer chat the given message, which will only be viewable by users on the same team.
	 */
	TeamChat(message: string): void;
}

interface Plugin extends Instance {
	/** 
	 * This function sets the state of the calling plugin to activated. Activating the plugin allows mouse control through the [Plugin.GetMouse](https://developer.roblox.com/api-reference/function/Plugin/GetMouse) method.
	 *
	 * At any given time there are either 0 or 1 Activated Plugins. Activating a plugin will deactivate all other plugins (they will receive a [Plugin.Deactivation](https://developer.roblox.com/api-reference/event/Plugin/Deactivation) event).
	 *
	 * ## See also
	 *
	 *   - [Plugin.IsActivatedWithExclusiveMouse](https://developer.roblox.com/api-reference/function/Plugin/IsActivatedWithExclusiveMouse), returns true if this plugin is currently active with an exclusive mouse, after having been activated via this function
	 *
	 *  - [Plugin.Unloading](https://developer.roblox.com/api-reference/event/Plugin/Unloading), fires immediately before the plugin is unloaded or reloaded via uninstallation, deactivation, or updating
	 * @param exclusiveMouse A boolean specifying whether to activate the plugin with exclusive mouse. If true, a `PluginMouse` can be retrieved via `Plugin/GetMouse`
	 * @returns void
	 */
	Activate(exclusiveMouse: boolean): void;
	/** 
	 * Creates a PluginAction. See the `PluginAction` class page for more information on how PluginActions work.
	 * @param actionId Must be a unique string that identifies this PluginAction from others. 
	 * @param text The displayed name of the action.
	 * @param statusTip The displayed description of the action.
	 * @returns The newly created PluginAction object.
	 */
	CreatePluginAction(
		actionId: string,
		text: string,
		statusTip: string,
		iconName?: string,
		allowBinding?: boolean,
	): PluginAction;

	CreatePluginMenu(id: string, title?: string, icon?: string): PluginMenu;
	/** 
	 * Gets or creates a new `Toolbar` with the specified name, which is then used to create a plugin button.
	 */
	CreateToolbar(name: string): PluginToolbar;
	/** 
	 * Deactivates the plugin. This will disengage the associated `PluginMouse` if it has been activated
	 *
	 * ## See also
	 *
	 *   - [Plugin.Activate](https://developer.roblox.com/api-reference/function/Plugin/Activate), sets the state of the calling plugin to activated
	 *
	 *   - [Plugin.Deactivation](https://developer.roblox.com/api-reference/event/Plugin/Deactivation), fires when the plugin is deactivated
	 *
	 *   - [Plugin.Unloading](https://developer.roblox.com/api-reference/event/Plugin/Unloading), fires immediately before the plugin is unloaded or reloaded via uninstallation, deactivation, or updating
	 * @returns void
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
	 * This function returns true if this plugin is currently active, after having been activated via the [Plugin.Activate](https://developer.roblox.com/api-reference/function/Plugin/Activate) function.
	 * @returns A boolean indicating whether the plugin is currently active
	 */
	IsActivated(): boolean;
	/** 
	 * This function returns true if this plugin is currently active with an exclusive mouse, after having been activated via the [Plugin.Activate](https://developer.roblox.com/api-reference/function/Plugin/Activate) function. If this returns true, a `PluginMouse` can be retrieved via [Plugin.GetMouse](https://developer.roblox.com/api-reference/function/Plugin/GetMouse).
	 *
	 * ## See also
	 *
	 *   - [Plugin.Deactivation](https://developer.roblox.com/api-reference/event/Plugin/Deactivation), fires when the plugin is deactivated
	 *
	 *  - [Plugin.Unloading](https://developer.roblox.com/api-reference/event/Plugin/Unloading), fires immediately before the plugin is unloaded or reloaded via uninstallation, deactivation, or updating
	 * @returns Whether this plugin is currently active with an exclusive mouse
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
	 * Fired when the `Plugin` is deactivated. This occurs when either the plugin code calls [Plugin.Deactivate](https://developer.roblox.com/api-reference/function/Plugin/Deactivate), or because some other plugin called [Plugin.Activate](https://developer.roblox.com/api-reference/function/Plugin/Activate), which forces all other plugins to lose their active state.
	 *
	 * ## See also
	 *
	 *   - [Plugin.Unloading](https://developer.roblox.com/api-reference/event/Plugin/Unloading), fires immediately before the plugin is unloaded or reloaded via uninstallation, deactivation, or updating
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
	 * ExportPlace will export all geometry in the place to an .OBJ file. The file is saved to the path chosen by the user in a file save dialogue (the `filePath` argument is ignored). This function does the same thing as the **File &gt; Advanced &gt; Export as Obj** menu option.
	 *
	 * ## History
	 *
	 * Previously, this function would save the generated .OBJ file to the given file path, so long as Roblox Studio had write access. This was changed for security reasons on [Release 379](https://developer.roblox.com/resources/release-note/Release-Notes-for-379) in April 2019.
	 */
	ExportPlace(filePath?: string): void;
	/** 
	 * ExportSelection will export all geometry in the current `Selection` to an .OBJ file. The file is saved to the path chosen by the user in a file save dialogue (the `filePath` argument is ignored). This function does the same thing as the **Export Selection...** right-click menu option in the Explorer.
	 *
	 * ## History
	 *
	 * Previously, this function would save the generated .OBJ file to the given file path, so long as Roblox Studio had write access. This was changed for security reasons on [Release 379](https://developer.roblox.com/resources/release-note/Release-Notes-for-379) in April 2019.
	 */
	ExportSelection(filePath?: string): void;
}

interface PluginMenu extends Instance {

	AddAction(action: PluginAction): void;

	AddMenu(menu: PluginMenu): void;

	AddNewAction(actionId: string, text: string, icon?: string): PluginAction;
	AddSeparator(): void;
	Clear(): void;
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
	 * Limits how long a script is allowed to run without yielding. For example:
	 *
	 * ```lua
game:GetService("ScriptContext"):SetTimeout(10)
local s = Instance.new("Script")
s.Source = "while true do end"
s.Parent = workspace
```
	 * 

	 * Running the above code from the [Command Bar](https://wiki.roblox.com/index.php?title=Command_Bar) in a running place will set the timeout to 10 seconds, and then create a script with the source "while true do end" (an infinite loop), and allow it to the run in the workspace. After 10 seconds you will see output similar to the following:
	 *
	 * ```lua
15:43:05.115 - Game script timout
15:43:05.116 - Stack Begin
15:43:05.116 - Script 'Workspace.Script', Line 1
15:43:05.116 - Stack End
```
	 * 

	 * This means the script has timed out and it has been stopped.Limits how long a script is allowed to run without yielding.
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
	 * Returns a table containing the jobs performed by the game, and one reference table.
	 */
	GetJobsExtendedStats(): unknown;
	/** 
	 * Returns a table containing the jobs performed by the game, and one reference table.
	 */
	GetJobsInfo(): unknown;
	/** 
	 * The GetObjects function returns an array of Instances based on the specified content url. The ''url'' should point to a model asset.
	 */
	GetObjects(url: string): Array<Instance>;
	/** 
	 * Sets the [DataModel.PlaceId](https://developer.roblox.com/api-reference/property/DataModel/PlaceId) of the current game to the specified _placeId_.
	 */
	SetPlaceId(placeId: number): void;
	/** 
	 * Sets the [DataModel.GameId](https://developer.roblox.com/api-reference/property/DataModel/GameId) of the current game to the specified _universeId_
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
	GetAvailableThemes(): unknown;
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
	/** [NO DOCUMENTATION] */
	GetColor(styleguideitem: CastsToEnum<Enum.StudioStyleGuideColor>, modifier?: CastsToEnum<Enum.StudioStyleGuideModifier>): Color3;
	/** [NO DOCUMENTATION] */
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

