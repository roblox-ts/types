// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!

/// <reference no-default-lib="true"/>
/// <reference path="None.d.ts" />

// GENERATED ROBLOX INSTANCE CLASSES

interface Instance {
	RobloxLocked: boolean;
	/** This function is for internal testing. Don't use in production code */
	GetDebugId(scopeLength?: number): string;
}

interface Animator extends Instance {
	StepAnimations(deltaTime: number): void;
}

interface StarterGui extends BasePlayerGui {
	ProcessUserInput: boolean;
}

interface ChangeHistoryService extends Instance {
	/** [NO DOCUMENTATION] */
	GetCanRedo(): unknown;
	/** [NO DOCUMENTATION] */
	GetCanUndo(): unknown;
	/** [NO DOCUMENTATION] */
	Redo(): void;
	/** [NO DOCUMENTATION] */
	ResetWaypoints(): void;
	/** [NO DOCUMENTATION] */
	SetEnabled(state: boolean): void;
	/** [NO DOCUMENTATION] */
	SetWaypoint(name: string): void;
	/** [NO DOCUMENTATION] */
	Undo(): void;
	/** [NO DOCUMENTATION] */
	readonly OnRedo: RBXScriptSignal<(waypoint: string) => void>;
	/** [NO DOCUMENTATION] */
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
	/** [NO DOCUMENTATION] */
	Source: string;
}

interface ModuleScript extends LuaSourceContainer {
	/** [NO DOCUMENTATION] */
	Source: string;
}

interface PluginMouse extends Mouse {
	/** [NO DOCUMENTATION] */
	readonly DragEnter: RBXScriptSignal<(instances: Array<Instance>) => void>;
}

interface NetworkPeer extends Instance {
	/** [NO DOCUMENTATION] */
	SetOutgoingKBPSLimit(limit: number): void;
}

interface NetworkReplicator extends Instance {
	GetRakStatsString(verbosityLevel?: number): string;
}

interface NetworkSettings extends Instance {
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden, NotReplicated
	 */
	ExtraMemoryUsed: number;
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden, ReadOnly, NotReplicated
	 */
	readonly FreeMemoryMBytes: number;
}

interface Workspace extends Model {
	BreakJoints(objects: Array<Instance>): void;
	MakeJoints(objects: Array<Instance>): void;
	ZoomToExtents(): void;
}

interface Player extends Instance {
	SetAccountAge(accountAge: number): void;
	SetSuperSafeChat(value: boolean): void;
}

interface Players extends Instance {
	Chat(message: string): void;
	SetChatStyle(style?: CastsToEnum<Enum.ChatStyle>): void;
	TeamChat(message: string): void;
}

interface Plugin extends Instance {
	Activate(exclusiveMouse: boolean): void;

	CreatePluginAction(
		actionId: string,
		text: string,
		statusTip: string,
		iconName?: string,
		allowBinding?: boolean,
	): PluginAction;

	CreatePluginMenu(id: string, title?: string, icon?: string): PluginMenu;

	CreateToolbar(name: string): PluginToolbar;
	Deactivate(): void;
	GetJoinMode(): Enum.JointCreationMode;

	GetMouse(): PluginMouse;
	GetSelectedRibbonTool(): Enum.RibbonTool;
	GetSetting(key: string): unknown;
	GetStudioUserId(): number;
	IsActivated(): boolean;
	IsActivatedWithExclusiveMouse(): boolean;
	Negate(objects: Array<Instance>): Array<Instance>;
	OpenScript(script: Instance, lineNumber?: number): void;
	OpenWikiPage(url: string): void;
	SaveSelectedToRoblox(): void;
	SelectRibbonTool(tool: CastsToEnum<Enum.RibbonTool>, position: UDim2): void;
	Separate(objects: Array<Instance>): Array<Instance>;
	SetSetting(key: string, value?: any): void;
	StartDrag(dragData: object): void;

	Union(objects: Array<BasePart>): UnionOperation;

	CreateDockWidgetPluginGui(
		pluginGuiId: string,
		dockWidgetPluginGuiInfo: DockWidgetPluginGuiInfo,
	): DockWidgetPluginGui;
	ImportFbxAnimation(rigModel: Instance, isR15?: boolean): Instance | undefined;

	ImportFbxRig(isR15?: boolean): Model;
	PromptForExistingAssetId(assetType: string): number;
	PromptSaveSelection(suggestedFileName?: string): boolean;
	readonly Deactivation: RBXScriptSignal<() => void>;
	readonly Unloading: RBXScriptSignal<() => void>;
}

interface PluginAction extends Instance {
	/** [NO DOCUMENTATION] */
	readonly Triggered: RBXScriptSignal<() => void>;
}

interface PluginManager extends Instance {

	CreatePlugin(): Plugin;
	ExportPlace(filePath?: string): void;
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
	/** [NO DOCUMENTATION] */
	Pause(): void;
	/** [NO DOCUMENTATION] */
	Run(): void;
	/** [NO DOCUMENTATION] */
	Stop(): void;
}

interface ScriptContext extends Instance {
	/** [NO DOCUMENTATION] */
	SetTimeout(seconds: number): void;
}

interface Selection extends Instance {
	/** [NO DOCUMENTATION] */
	Get(): Array<Instance>;
	/** [NO DOCUMENTATION] */
	Set(selection: Array<Instance>): void;
}

interface DataModel extends ServiceProvider {
	GetJobIntervalPeakFraction(jobname: string, greaterThan: number): number;
	GetJobTimePeakFraction(jobname: string, greaterThan: number): number;
	GetJobsExtendedStats(): unknown;
	GetJobsInfo(): unknown;
	GetObjects(url: string): Array<Instance>;
	SetPlaceId(placeId: number): void;
	SetUniverseId(universeId: number): void;
}

interface StatsItem extends Instance {
	/** [NO DOCUMENTATION] */
	GetValue(): number;
	/** [NO DOCUMENTATION] */
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
	/** [NO DOCUMENTATION] *
	 * Tags: Yields
	 */
	Run(): void;
}

