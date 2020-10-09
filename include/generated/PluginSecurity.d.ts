// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!

/// <reference no-default-lib="true"/>
/// <reference path="None.d.ts" />

interface Services {
	ABTestService: ABTestService;
	ChangeHistoryService: ChangeHistoryService;
	CoreGui: CoreGui;
	KeyframeSequenceProvider: KeyframeSequenceProvider;
	NetworkClient: NetworkClient;
	NetworkServer: NetworkServer;
	NetworkSettings: NetworkSettings;
	PackageService: PackageService;
	PluginDebugService: PluginDebugService;
	PluginGuiService: PluginGuiService;
	RenderSettings: RenderSettings;
	RobloxPluginGuiService: RobloxPluginGuiService;
	ScriptContext: ScriptContext;
	Selection: Selection;
	Studio: Studio;
	StudioData: StudioData;
	StudioService: StudioService;
	TaskScheduler: TaskScheduler;
	TestService: TestService;
	VersionControlService: VersionControlService;
}

interface CreatableInstances {
	PluginAction: PluginAction;
	RenderingTest: RenderingTest;
}

interface AbstractInstances {
	NetworkPeer: NetworkPeer;
	NetworkReplicator: NetworkReplicator;
	PluginGui: PluginGui;
	StatsItem: StatsItem;
}

interface Instances extends Services, CreatableInstances, AbstractInstances {
	ClientReplicator: ClientReplicator;
	DataModelSession: DataModelSession;
	DebuggerBreakpoint: DebuggerBreakpoint;
	DebuggerManager: DebuggerManager;
	DebuggerWatch: DebuggerWatch;
	DebugSettings: DebugSettings;
	DockWidgetPluginGui: DockWidgetPluginGui;
	File: File;
	GameSettings: GameSettings;
	GlobalSettings: GlobalSettings;
	LuaSettings: LuaSettings;
	MemStorageConnection: MemStorageConnection;
	MultipleDocumentInterfaceInstance: MultipleDocumentInterfaceInstance;
	PhysicsSettings: PhysicsSettings;
	Plugin: Plugin;
	PluginDragEvent: PluginDragEvent;
	PluginMenu: PluginMenu;
	PluginMouse: PluginMouse;
	PluginToolbar: PluginToolbar;
	PluginToolbarButton: PluginToolbarButton;
	QWidgetPluginGui: QWidgetPluginGui;
	RunningAverageItemDouble: RunningAverageItemDouble;
	RunningAverageItemInt: RunningAverageItemInt;
	RunningAverageTimeIntervalItem: RunningAverageTimeIntervalItem;
	ScriptDebugger: ScriptDebugger;
	ServerReplicator: ServerReplicator;
	StudioTheme: StudioTheme;
	TotalCountTimeIntervalItem: TotalCountTimeIntervalItem;
}

// GENERATED ROBLOX INSTANCE CLASSES

interface Instance {
	RobloxLocked: boolean;
	/** This function is for internal testing. Don't use in production code */
	GetDebugId(this: Instance, scopeLength?: number): string;
}

interface ABTestService extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "ABTestService";
	/** [NO DOCUMENTATION] */
	ClearUserVariations(this: ABTestService): void;
	/** [NO DOCUMENTATION] */
	GetBrowserTrackerABTestLoadingStatus(this: ABTestService): Enum.ABTestLoadingStatus;
	/** [NO DOCUMENTATION] */
	GetPendingOrInitializedUserId(this: ABTestService): number;
	/** [NO DOCUMENTATION] */
	GetUserABTestLoadingStatus(this: ABTestService): Enum.ABTestLoadingStatus;
	/** [NO DOCUMENTATION] */
	GetVariant(this: ABTestService, name: string): string;
	/** [NO DOCUMENTATION] */
	InitializeForUserId(this: ABTestService, userId: number): void;
	/** [NO DOCUMENTATION] *
	 * Tags: Yields
	 */
	WaitUntilBrowserTrackerABTestsInitialized(this: ABTestService): void;
	/** [NO DOCUMENTATION] *
	 * Tags: Yields
	 */
	WaitUntilUserABTestsInitialized(this: ABTestService): void;
	/** [NO DOCUMENTATION] */
	readonly OnBrowserTrackerABTestLoadingStatusChanged: RBXScriptSignal<(status: Enum.ABTestLoadingStatus) => void>;
	/** [NO DOCUMENTATION] */
	readonly OnUserABTestLoadingStatusChanged: RBXScriptSignal<(status: Enum.ABTestLoadingStatus, userId: number) => void>;
}

interface Animator extends Instance {
	StepAnimations(this: Animator, deltaTime: number): void;
}

interface CoreGui extends BasePlayerGui {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "CoreGui";
	/** [NO DOCUMENTATION] */
	readonly SelectionImageObject: GuiObject | undefined;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly Version: number;
	/** [NO DOCUMENTATION] */
	SetUserGuiRendering(this: CoreGui, enabled: boolean, guiAdornee: Instance, faceId: CastsToEnum<Enum.NormalId>): void;
	/** [NO DOCUMENTATION] */
	TakeScreenshot(this: CoreGui): void;
	/** [NO DOCUMENTATION] */
	ToggleRecording(this: CoreGui): void;
}

interface StarterGui extends BasePlayerGui {
	ProcessUserInput: boolean;
	ShowDevelopmentGui: boolean;
}

interface ChangeHistoryService extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "ChangeHistoryService";
	/** [NO DOCUMENTATION] */
	GetCanRedo(this: ChangeHistoryService): unknown;
	/** [NO DOCUMENTATION] */
	GetCanUndo(this: ChangeHistoryService): unknown;
	/** [NO DOCUMENTATION] */
	Redo(this: ChangeHistoryService): void;
	/** [NO DOCUMENTATION] */
	ResetWaypoints(this: ChangeHistoryService): void;
	/** [NO DOCUMENTATION] */
	SetEnabled(this: ChangeHistoryService, state: boolean): void;
	/** [NO DOCUMENTATION] */
	SetWaypoint(this: ChangeHistoryService, name: string): void;
	/** [NO DOCUMENTATION] */
	Undo(this: ChangeHistoryService): void;
	/** [NO DOCUMENTATION] */
	readonly OnRedo: RBXScriptSignal<(waypoint: string) => void>;
	/** [NO DOCUMENTATION] */
	readonly OnUndo: RBXScriptSignal<(waypoint: string) => void>;
}

interface DataModelSession extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "DataModelSession";
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly CurrentDataModelType: Enum.StudioDataModelType;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly SessionId: string;
	/** [NO DOCUMENTATION] */
	readonly CurrentDataModelTypeAboutToChange: RBXScriptSignal<(dataModelType: Enum.StudioDataModelType) => void>;
	/** [NO DOCUMENTATION] */
	readonly CurrentDataModelTypeChanged: RBXScriptSignal<() => void>;
	/** [NO DOCUMENTATION] */
	readonly DataModelCreated: RBXScriptSignal<(gameStateType: Enum.StudioDataModelType) => void>;
	/** [NO DOCUMENTATION] */
	readonly DataModelWillBeDestroyed: RBXScriptSignal<(gameStateType: Enum.StudioDataModelType) => void>;
}

interface DebugSettings extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "DebugSettings";
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly DataModel: number;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly InstanceCount: number;
	/** [NO DOCUMENTATION] */
	IsScriptStackTracingEnabled: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly JobCount: number;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly PlayerCount: number;
	/** [NO DOCUMENTATION] */
	ReportSoundWarnings: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly RobloxVersion: string;
	/** [NO DOCUMENTATION] */
	TickCountPreciseOverride: Enum.TickCountSampleMethod;
}

interface DebuggerBreakpoint extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "DebuggerBreakpoint";
	/** [NO DOCUMENTATION] */
	Condition: string;
	/** [NO DOCUMENTATION] */
	IsEnabled: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly Line: number;
	/** [NO DOCUMENTATION] */
	isContextDependentBreakpoint: boolean;
}

interface DebuggerManager extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "DebuggerManager";
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly DebuggingEnabled: boolean;
	/** [NO DOCUMENTATION] */
	AddDebugger(this: DebuggerManager, script: LuaSourceContainer): Instance | undefined;
	/** [NO DOCUMENTATION] */
	EnableDebugging(this: DebuggerManager): void;
	/** [NO DOCUMENTATION] */
	GetDebuggers(this: DebuggerManager): Array<Instance>;
	/** [NO DOCUMENTATION] */
	Resume(this: DebuggerManager): void;
	/** [NO DOCUMENTATION] */
	StepIn(this: DebuggerManager): void;
	/** [NO DOCUMENTATION] */
	StepOut(this: DebuggerManager): void;
	/** [NO DOCUMENTATION] */
	StepOver(this: DebuggerManager): void;
	/** [NO DOCUMENTATION] */
	readonly DebuggerAdded: RBXScriptSignal<(debug: Instance) => void>;
	/** [NO DOCUMENTATION] */
	readonly DebuggerRemoved: RBXScriptSignal<(debug: Instance) => void>;
}

interface DebuggerWatch extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "DebuggerWatch";
	/** [NO DOCUMENTATION] */
	Expression: string;
}

interface File extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "File";
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden, ReadOnly, NotReplicated
	 */
	readonly Size: number;
	/** [NO DOCUMENTATION] */
	GetBinaryContents(this: File): string;
	/** [NO DOCUMENTATION] */
	GetTemporaryId(this: File): string;
}

interface GameSettings extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "GameSettings";
	/** [NO DOCUMENTATION] */
	readonly AdditionalCoreIncludeDirs: string;
	/** [NO DOCUMENTATION] */
	readonly OverrideStarterScript: string;
	/** [NO DOCUMENTATION] */
	VideoCaptureEnabled: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	readonly VideoRecording: boolean;
	/** [NO DOCUMENTATION] */
	readonly VideoRecordingChangeRequest: RBXScriptSignal<(recording: boolean) => void>;
}

interface PluginGui extends LayerCollector {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "DockWidgetPluginGui" | "QWidgetPluginGui";
	/** [NO DOCUMENTATION] */
	Title: string;
	/** [NO DOCUMENTATION] */
	BindToClose(this: PluginGui, callback?: Function): void;
	/** [NO DOCUMENTATION] */
	GetRelativeMousePosition(this: PluginGui): Vector2;
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

interface DockWidgetPluginGui extends PluginGui {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "DockWidgetPluginGui";
}

interface QWidgetPluginGui extends PluginGui {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "QWidgetPluginGui";
}

interface KeyframeSequence extends Instance {
	AuthoredHipHeight: number;
}

interface KeyframeSequenceProvider extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "KeyframeSequenceProvider";
	GetMemStats(this: KeyframeSequenceProvider): object;
	RegisterActiveKeyframeSequence(this: KeyframeSequenceProvider, keyframeSequence: KeyframeSequence): string;
	RegisterKeyframeSequence(this: KeyframeSequenceProvider, keyframeSequence: KeyframeSequence): string;
	GetAnimations(this: KeyframeSequenceProvider, userId: number): InventoryPages;
	GetKeyframeSequenceAsync(this: KeyframeSequenceProvider, assetId: string): KeyframeSequence;
}

interface LuaSettings extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "LuaSettings";
}

interface Script extends BaseScript {
	/** [NO DOCUMENTATION] */
	Source: string;
}

interface ModuleScript extends LuaSourceContainer {
	/** [NO DOCUMENTATION] */
	Source: string;
}

interface MemStorageConnection extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "MemStorageConnection";
	/** [NO DOCUMENTATION] */
	Disconnect(this: MemStorageConnection): void;
}

interface PluginMouse extends Mouse {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "PluginMouse";
	/** [NO DOCUMENTATION] */
	readonly DragEnter: RBXScriptSignal<(instances: Array<Instance>) => void>;
}

interface MultipleDocumentInterfaceInstance extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "MultipleDocumentInterfaceInstance";
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly FocusedDataModelSession: Instance | undefined;
	/** [NO DOCUMENTATION] */
	readonly DataModelSessionEnded: RBXScriptSignal<(dataModelSession: DataModelSession) => void>;
	/** [NO DOCUMENTATION] */
	readonly DataModelSessionStarted: RBXScriptSignal<(dataModelSession: DataModelSession) => void>;
}

interface NetworkPeer extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "NetworkClient" | "NetworkServer";
	/** [NO DOCUMENTATION] */
	SetOutgoingKBPSLimit(this: NetworkPeer, limit: number): void;
}

interface NetworkClient extends NetworkPeer {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "NetworkClient";
	readonly ConnectionAccepted: RBXScriptSignal<(peer: string, replicator: ClientReplicator) => void>;
}

interface NetworkServer extends NetworkPeer {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "NetworkServer";
}

interface NetworkReplicator extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "ClientReplicator" | "ServerReplicator";
	GetPlayer(this: NetworkReplicator): Player;
}

interface ClientReplicator extends NetworkReplicator {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "ClientReplicator";
}

interface ServerReplicator extends NetworkReplicator {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "ServerReplicator";
}

interface NetworkSettings extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "NetworkSettings";
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden, NotReplicated
	 */
	ExtraMemoryUsed: number;
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden, ReadOnly, NotReplicated
	 */
	readonly FreeMemoryMBytes: number;
	/** [NO DOCUMENTATION] */
	readonly HttpProxyEnabled: boolean;
	/** [NO DOCUMENTATION] */
	readonly HttpProxyURL: string;
	/** [NO DOCUMENTATION] */
	IncomingReplicationLag: number;
	/** [NO DOCUMENTATION] */
	PrintJoinSizeBreakdown: boolean;
	/** [NO DOCUMENTATION] */
	PrintPhysicsErrors: boolean;
	/** [NO DOCUMENTATION] */
	PrintStreamInstanceQuota: boolean;
	/** [NO DOCUMENTATION] */
	RenderStreamedRegions: boolean;
	/** [NO DOCUMENTATION] */
	ShowActiveAnimationAsset: boolean;
	/** [NO DOCUMENTATION] */
	TrackDataTypes: boolean;
	/** [NO DOCUMENTATION] */
	TrackPhysicsDetails: boolean;
}

interface Model extends PVInstance {
	/** Automatically generate impostor meshes to be rendered outside of streaming radius. */
	LevelOfDetail: Enum.ModelLevelOfDetail;
}

interface WorldRoot extends Model {
	IKMoveTo(this: WorldRoot, part: BasePart, target: CFrame, translateStiffness?: number, rotateStiffness?: number, collisionsMode?: CastsToEnum<Enum.IKCollisionsMode>): void;
}

interface Workspace extends WorldRoot {
	readonly BreakJoints: any;
	readonly MakeJoints: any;
	ZoomToExtents(this: Workspace): void;
}

interface PackageService extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "PackageService";
}

interface PhysicsSettings extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "PhysicsSettings";
	/** [NO DOCUMENTATION] */
	AllowSleep: boolean;
	/** [NO DOCUMENTATION] */
	AreAnchorsShown: boolean;
	/** [NO DOCUMENTATION] */
	AreAssembliesShown: boolean;
	/** [NO DOCUMENTATION] */
	AreAwakePartsHighlighted: boolean;
	/** [NO DOCUMENTATION] */
	AreBodyTypesShown: boolean;
	/** [NO DOCUMENTATION] */
	AreContactIslandsShown: boolean;
	/** [NO DOCUMENTATION] */
	AreContactPointsShown: boolean;
	/** [NO DOCUMENTATION] */
	AreJointCoordinatesShown: boolean;
	/** [NO DOCUMENTATION] */
	AreMechanismsShown: boolean;
	/** [NO DOCUMENTATION] */
	AreModelCoordsShown: boolean;
	/** [NO DOCUMENTATION] */
	AreOwnersShown: boolean;
	/** [NO DOCUMENTATION] */
	ArePartCoordsShown: boolean;
	/** [NO DOCUMENTATION] */
	AreRegionsShown: boolean;
	/** [NO DOCUMENTATION] */
	AreTerrainReplicationRegionsShown: boolean;
	/** [NO DOCUMENTATION] */
	AreUnalignedPartsShown: boolean;
	/** [NO DOCUMENTATION] */
	AreWorldCoordsShown: boolean;
	/** [NO DOCUMENTATION] */
	DisableCSGv2: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden, NotReplicated
	 */
	ForceCSGv2: boolean;
	/** [NO DOCUMENTATION] */
	IsReceiveAgeShown: boolean;
	/** [NO DOCUMENTATION] */
	IsTreeShown: boolean;
	/** [NO DOCUMENTATION] */
	PhysicsEnvironmentalThrottle: Enum.EnviromentalPhysicsThrottle;
	/** [NO DOCUMENTATION] */
	ShowDecompositionGeometry: boolean;
	/** [NO DOCUMENTATION] */
	ThrottleAdjustTime: number;
	/** [NO DOCUMENTATION] */
	UseCSGv2: boolean;
}

interface Player extends Instance {
	SetAccountAge(this: Player, accountAge: number): void;
	SetSuperSafeChat(this: Player, value: boolean): void;
}

interface Players extends Instance {
	Chat(this: Players, message: string): void;
	SetChatStyle(this: Players, style?: CastsToEnum<Enum.ChatStyle>): void;
	TeamChat(this: Players, message: string): void;
}

interface Plugin extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "Plugin";
	readonly CollisionEnabled: boolean;
	readonly GridSize: number;
	readonly HostDataModelType: Enum.StudioDataModelType;
	readonly HostDataModelTypeIsCurrent: boolean;
	readonly MultipleDocumentInterfaceInstance: MultipleDocumentInterfaceInstance | undefined;
	readonly UsesAssetInsertionDrag: boolean;
	Activate(this: Plugin, exclusiveMouse: boolean): void;
	CreatePluginAction(
		this: Plugin,
		actionId: string,
		text: string,
		statusTip: string,
		iconName?: string,
		allowBinding?: boolean,
	): PluginAction;
	CreatePluginMenu(this: Plugin, id: string, title?: string, icon?: string): PluginMenu;
	CreateToolbar(this: Plugin, name: string): PluginToolbar;
	Deactivate(this: Plugin): void;
	GetItem(this: Plugin, key: string, defaultValue?: any): unknown;
	GetJoinMode(this: Plugin): Enum.JointCreationMode;
	GetMouse(this: Plugin): PluginMouse;
	GetSelectedRibbonTool(this: Plugin): Enum.RibbonTool;
	GetSetting(this: Plugin, key: string): unknown;
	Invoke(this: Plugin, key: string, arguments: Array<any>): void;
	IsActivated(this: Plugin): boolean;
	IsActivatedWithExclusiveMouse(this: Plugin): boolean;
	Negate(this: Plugin, objects: Array<Instance>): Array<Instance>;
	OnInvoke(this: Plugin, key: string, callback: Function): Instance | undefined;
	OnSetItem(this: Plugin, key: string, callback: Function): Instance | undefined;
	OpenScript(this: Plugin, script: LuaSourceContainer, lineNumber?: number): void;
	OpenWikiPage(this: Plugin, url: string): void;
	PauseSound(this: Plugin, soundChannel: Sound): void;
	PlaySound(this: Plugin, soundChannel: Sound, normalizedTimePosition?: number): void;
	ResumeSound(this: Plugin, soundChannel: Sound): void;
	SaveSelectedToRoblox(this: Plugin): void;
	SelectRibbonTool(this: Plugin, tool: CastsToEnum<Enum.RibbonTool>, position: UDim2): void;
	Separate(this: Plugin, objects: Array<Instance>): Array<Instance>;
	SetItem(this: Plugin, key: string, value?: any): void;
	SetSetting(this: Plugin, key: string, value?: any): void;
	StartDecalDrag(this: Plugin, decal: Decal): void;
	StartDrag(this: Plugin, dragData: object): void;
	StopAllSounds(this: Plugin): void;
	Union(this: Plugin, objects: Array<BasePart>): UnionOperation;
	CreateDockWidgetPluginGui(
		this: Plugin,
		pluginGuiId: string,
		dockWidgetPluginGuiInfo: DockWidgetPluginGuiInfo,
	): DockWidgetPluginGui;
	CreateQWidgetPluginGui(this: Plugin, pluginGuiId: string, pluginGuiOptions: object): Instance | undefined;
	ImportFbxAnimation(this: Plugin, rigModel: Model, isR15?: boolean): Instance | undefined;
	ImportFbxRig(this: Plugin, isR15?: boolean): Model;
	PromptForExistingAssetId(this: Plugin, assetType: string): number;
	PromptSaveSelection(this: Plugin, suggestedFileName?: string): boolean;
	readonly Deactivation: RBXScriptSignal<() => void>;
	readonly Unloading: RBXScriptSignal<() => void>;
}

interface PluginAction extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "PluginAction";
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly ActionId: string;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly AllowBinding: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	readonly Checked: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	readonly DefaultShortcut: string;
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	readonly Enabled: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly StatusTip: string;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly Text: string;
	/** [NO DOCUMENTATION] */
	readonly Triggered: RBXScriptSignal<() => void>;
}

interface PluginDebugService extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "PluginDebugService";
}

interface PluginDragEvent extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "PluginDragEvent";
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly Data: string;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly MimeType: string;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly Position: Vector2;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly Sender: string;
}

interface PluginGuiService extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "PluginGuiService";
}

interface PluginManagerInterface extends Instance {
	/** [NO DOCUMENTATION] */
	ExportPlace(this: PluginManagerInterface, filePath?: string): void;
	/** [NO DOCUMENTATION] */
	ExportSelection(this: PluginManagerInterface, filePath?: string): void;
}

interface PluginMenu extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "PluginMenu";
	Icon: string;
	Title: string;
	AddAction(this: PluginMenu, action: PluginAction): void;
	AddMenu(this: PluginMenu, menu: PluginMenu): void;
	AddNewAction(this: PluginMenu, actionId: string, text: string, icon?: string): PluginAction;
	AddSeparator(this: PluginMenu): void;
	Clear(this: PluginMenu): void;
	ShowAsync(this: PluginMenu): Instance | undefined;
}

interface PluginToolbar extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "PluginToolbar";
	CreateButton(
		this: PluginToolbar,
		buttonId: string,
		tooltip: string,
		iconname: string,
		text?: string,
	): PluginToolbarButton;
}

interface PluginToolbarButton extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "PluginToolbarButton";
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	ClickableWhenViewportHidden: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	Enabled: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	Icon: string;
	/** [NO DOCUMENTATION] */
	SetActive(this: PluginToolbarButton, active: boolean): void;
	/** [NO DOCUMENTATION] */
	readonly Click: RBXScriptSignal<() => void>;
}

interface RenderSettings extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "RenderSettings";
	/** [NO DOCUMENTATION] */
	AutoFRMLevel: number;
	/** [NO DOCUMENTATION] */
	EagerBulkExecution: boolean;
	/** [NO DOCUMENTATION] */
	EditQualityLevel: Enum.QualityLevel;
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden, NotReplicated
	 */
	EnableFRM: boolean;
	/** [NO DOCUMENTATION] */
	ExportMergeByMaterial: boolean;
	/** [NO DOCUMENTATION] */
	FrameRateManager: Enum.FramerateManagerMode;
	/** [NO DOCUMENTATION] */
	GraphicsMode: Enum.GraphicsMode;
	/** [NO DOCUMENTATION] */
	MeshCacheSize: number;
	/** [NO DOCUMENTATION] */
	MeshPartDetailLevel: Enum.MeshPartDetailLevel;
	/** [NO DOCUMENTATION] */
	QualityLevel: Enum.QualityLevel;
	/** [NO DOCUMENTATION] */
	ReloadAssets: boolean;
	/** [NO DOCUMENTATION] */
	RenderCSGTrianglesDebug: boolean;
	/** [NO DOCUMENTATION] */
	ShowBoundingBoxes: boolean;
	/** [NO DOCUMENTATION] */
	GetMaxQualityLevel(this: RenderSettings): number;
}

interface RenderingTest extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "RenderingTest";
	/** [NO DOCUMENTATION] */
	CFrame: CFrame;
	/** [NO DOCUMENTATION] */
	ComparisonDiffThreshold: number;
	/** [NO DOCUMENTATION] */
	ComparisonMethod: Enum.RenderingTestComparisonMethod;
	/** [NO DOCUMENTATION] */
	ComparisonPsnrThreshold: number;
	/** [NO DOCUMENTATION] */
	Description: string;
	/** [NO DOCUMENTATION] */
	FieldOfView: number;
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	Orientation: Vector3;
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	Position: Vector3;
	/** [NO DOCUMENTATION] */
	QualityLevel: number;
	/** [NO DOCUMENTATION] */
	ShouldSkip: boolean;
	/** [NO DOCUMENTATION] */
	Ticket: string;
	/** [NO DOCUMENTATION] */
	RenderdocTriggerCapture(this: RenderingTest): void;
}

interface RobloxPluginGuiService extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "RobloxPluginGuiService";
}

interface RunService extends Instance {
	IsEdit(this: RunService): boolean;
	Pause(this: RunService): void;
	Run(this: RunService): void;
	Stop(this: RunService): void;
}

interface ScriptContext extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "ScriptContext";
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	readonly ScriptsDisabled: boolean;
	/** [NO DOCUMENTATION] */
	AddCoreScriptLocal(this: ScriptContext, name: string, parent: Instance): void;
	/** [NO DOCUMENTATION] */
	GetCoverageStats(this: ScriptContext): unknown;
	/** [NO DOCUMENTATION] */
	SetTimeout(this: ScriptContext, seconds: number): void;
	/** [NO DOCUMENTATION] */
	readonly Error: RBXScriptSignal<(message: string, stackTrace: string, script: LuaSourceContainer) => void>;
	/** [NO DOCUMENTATION] */
	readonly ErrorDetailed: RBXScriptSignal<(message: string, stackTrace: string, script: LuaSourceContainer, details: string, securityLevel: number) => void>;
}

interface ScriptDebugger extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "ScriptDebugger";
	readonly CurrentLine: number;
	readonly IsDebugging: boolean;
	readonly IsPaused: boolean;
	readonly Script: Instance | undefined;
	AddWatch(this: ScriptDebugger, expression: string): Instance | undefined;
	GetBreakpoints(this: ScriptDebugger): Array<Instance>;
	GetGlobals(this: ScriptDebugger): Map<string, any>;
	GetLocals(this: ScriptDebugger, stackFrame?: number): Map<string, any>;
	GetStack(this: ScriptDebugger): unknown;
	GetUpvalues(this: ScriptDebugger, stackFrame?: number): Map<string, any>;
	GetWatchValue(this: ScriptDebugger, watch: Instance): unknown;
	GetWatches(this: ScriptDebugger): Array<Instance>;
	SetBreakpoint(this: ScriptDebugger, line: number, isContextDependentBreakpoint: boolean): Instance | undefined;
	SetGlobal(this: ScriptDebugger, name: string, value?: any, stackFrame?: number): void;
	SetLocal(this: ScriptDebugger, name: string, value?: any, stackFrame?: number): void;
	SetUpvalue(this: ScriptDebugger, name: string, value?: any, stackFrame?: number): void;
	readonly BreakpointAdded: RBXScriptSignal<(breakpoint: Instance) => void>;
	readonly BreakpointRemoved: RBXScriptSignal<(breakpoint: Instance) => void>;
	readonly EncounteredBreak: RBXScriptSignal<(line: number, breakReason: Enum.BreakReason) => void>;
	readonly Resuming: RBXScriptSignal<() => void>;
	readonly WatchAdded: RBXScriptSignal<(watch: Instance) => void>;
	readonly WatchRemoved: RBXScriptSignal<(watch: Instance) => void>;
}

interface Selection extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "Selection";
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly ActiveInstance: Instance | undefined;
	/** [NO DOCUMENTATION] */
	Add(this: Selection, instancesToAdd: Array<Instance>): void;
	/** [NO DOCUMENTATION] */
	Get(this: Selection): Array<Instance>;
	/** [NO DOCUMENTATION] */
	Remove(this: Selection, instancesToRemove: Array<Instance>): void;
	/** [NO DOCUMENTATION] */
	Set(this: Selection, selection: Array<Instance>): void;
	/** [NO DOCUMENTATION] */
	readonly SelectionChanged: RBXScriptSignal<() => void>;
}

interface DataModel extends ServiceProvider<Services> {
	GetJobIntervalPeakFraction(this: DataModel, jobname: string, greaterThan: number): number;
	GetJobTimePeakFraction(this: DataModel, jobname: string, greaterThan: number): number;
	GetJobsExtendedStats(this: DataModel): unknown;
	GetJobsInfo(this: DataModel): unknown;
	GetObjects(this: DataModel, url: string): Array<Instance>;
	SetPlaceId(this: DataModel, placeId: number): void;
	SetUniverseId(this: DataModel, universeId: number): void;
}

interface GlobalSettings extends GenericSettings {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "GlobalSettings";
	/** [NO DOCUMENTATION] */
	GetFFlag(this: GlobalSettings, name: string): boolean;
	/** [NO DOCUMENTATION] */
	GetFVariable(this: GlobalSettings, name: string): string;
}

interface StatsItem extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "RunningAverageItemDouble" | "RunningAverageItemInt" | "RunningAverageTimeIntervalItem" | "TotalCountTimeIntervalItem";
	/** [NO DOCUMENTATION] */
	GetValue(this: StatsItem): number;
	/** [NO DOCUMENTATION] */
	GetValueString(this: StatsItem): string;
}

interface RunningAverageItemDouble extends StatsItem {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "RunningAverageItemDouble";
}

interface RunningAverageItemInt extends StatsItem {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "RunningAverageItemInt";
}

interface RunningAverageTimeIntervalItem extends StatsItem {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "RunningAverageTimeIntervalItem";
}

interface TotalCountTimeIntervalItem extends StatsItem {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "TotalCountTimeIntervalItem";
}

interface Studio extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "Studio";
	["Active Color"]: Color3;
	["Active Hover Over Color"]: Color3;
	["Always Save Script Changes"]: boolean;
	["Animate Hover Over"]: boolean;
	["Auto Clean Empty Line"]: boolean;
	["Auto Closing Brackets"]: boolean;
	["Auto Closing Quotes"]: boolean;
	["Auto Indent Rule"]: Enum.AutoIndentRule;
	["Auto-Recovery Enabled"]: boolean;
	["Auto-Recovery Interval (Minutes)"]: number;
	["Auto-Recovery Path"]: QDir;
	["Background Color"]: Color3;
	["Basic Objects Display Mode"]: Enum.ListDisplayMode;
	["Built-in Function Color"]: Color3;
	["Camera Mouse Wheel Speed"]: number;
	["Camera Shift Speed"]: number;
	["Camera Speed"]: number;
	["Camera Zoom to Mouse Position"]: boolean;
	["Clear Output On Start"]: boolean;
	CommandBarLocalState: boolean;
	["Comment Color"]: Color3;
	["Current Line Highlight Color"]: Color3;
	["Debugger Current Line Color"]: Color3;
	["Debugger Error Line Color"]: Color3;
	DefaultScriptFileDir: QDir;
	DeprecatedObjectsShown: boolean;
	["Disable Accurate Play Solo"]: boolean;
	["Drag Multiple Parts As Single Part"]: boolean;
	["Enable Autocomplete"]: boolean;
	["Enable CoreScript Debugger"]: boolean;
	["Enable Http Sandboxing"]: boolean;
	["Enable Internal Beta Features"]: boolean;
	["Enable Internal Features"]: boolean;
	["Error Color"]: Color3;
	["Find Selection Background Color"]: Color3;
	Font: QFont;
	["Format On Paste"]: boolean;
	["Format On Type"]: boolean;
	["Highlight Current Line"]: boolean;
	["Highlight Occurances"]: boolean;
	["Hover Animate Speed"]: Enum.HoverAnimateSpeed;
	["Hover Over Color"]: Color3;
	["Indent Using Spaces"]: boolean;
	["Keyword Color"]: Color3;
	Language: Enum.LanguagePreference;
	["Line Thickness"]: number;
	readonly LocalAssetsFolder: QDir;
	LuaDebuggerEnabled: boolean;
	readonly LuaDebuggerEnabledAtStartup: boolean;
	["Matching Word Background Color"]: Color3;
	["Maximum Output Lines"]: number;
	["Maximum Table Depth"]: number;
	["Number Color"]: Color3;
	["Only Play Audio from Window in Focus"]: boolean;
	["Operator Color"]: Color3;
	["Output Font"]: QFont;
	["Output Layout Mode"]: Enum.OutputLayoutMode;
	readonly OverrideCoreScripts: boolean;
	readonly OverrideCoreScriptsDir: QDir;
	PermissionLevelShown: Enum.PermissionLevelShown;
	PluginDebuggingEnabled: boolean;
	PluginsDir: QDir;
	["Preprocessor Color"]: Color3;
	["Render Throttle Percentage"]: number;
	["Respect Studio shortcuts when game has focus"]: boolean;
	Rulers: string;
	RuntimeUndoBehavior: Enum.RuntimeUndoBehavior;
	["Script Editor Color Preset"]: Enum.StudioScriptEditorColorPresets;
	ScriptTimeoutLength: number;
	["Search Content For Core Scripts"]: boolean;
	["Select Color"]: Color3;
	["Select/Hover Color"]: Color3;
	["Selection Background Color"]: Color3;
	["Selection Color"]: Color3;
	["Server Audio Behavior"]: Enum.ServerAudioBehavior;
	["Show Core GUI in Explorer while Playing"]: boolean;
	["Show CorePackages"]: boolean;
	["Show Diagnostics Bar"]: boolean;
	["Show FileSyncService"]: boolean;
	["Show Hidden Objects in Explorer"]: boolean;
	["Show Hover Over"]: boolean;
	["Show Navigation Mesh"]: boolean;
	["Show Plugin GUI Service in Explorer"]: boolean;
	["Show QT warnings in output"]: boolean;
	["Show Whitespace"]: boolean;
	["Show plus button on hover in Explorer"]: boolean;
	["Skip Closing Brackets and Quotes"]: boolean;
	["String Color"]: Color3;
	["Tab Width"]: number;
	["Text Color"]: Color3;
	["Text Wrapping"]: boolean;
	Theme: StudioTheme;
	["Warning Color"]: Color3;
	["Whitespace Color"]: Color3;
	GetAvailableThemes(this: Studio): unknown;
	readonly ThemeChanged: RBXScriptSignal<() => void>;
}

interface StudioData extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "StudioData";
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden
	 */
	readonly EnableScriptCollabByDefaultOnLoad: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden
	 */
	readonly EnableScriptCollabOnLoad: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden
	 */
	readonly EnableScriptCollabVersionHistoryOnLoad: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden, NotReplicated
	 */
	readonly SrcPlaceId: number;
	/** [NO DOCUMENTATION] *
	 * Tags: Hidden, NotReplicated
	 */
	readonly SrcUniverseId: number;
}

interface StudioService extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "StudioService";
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly ActiveScript: Instance | undefined;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly AlignDraggedObjects: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly DraggerSolveConstraints: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly DrawConstraintsOnTop: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly GridSize: number;
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	readonly HoverInstance: Instance | undefined;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly InstalledPluginData: string;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly RotateIncrement: number;
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	readonly ShowActiveInstanceHighlight: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly ShowConstraintDetails: boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly StudioLocaleId: string;
	/** [NO DOCUMENTATION] *
	 * Tags: NotReplicated
	 */
	UseLocalSpace: boolean;
	/** [NO DOCUMENTATION] */
	AnimationIdSelected(this: StudioService, id: number): void;
	/** [NO DOCUMENTATION] */
	BaseURLHasChineseHost(this: StudioService): boolean;
	/** [NO DOCUMENTATION] */
	ConvertToPackageUpload(this: StudioService, uploadUrl: string): void;
	/** [NO DOCUMENTATION] */
	CopyToClipboard(this: StudioService, stringToCopy: string): void;
	/** [NO DOCUMENTATION] */
	DEPRECATED_ShowPlaceVersionHistoryDialog(this: StudioService): void;
	/** [NO DOCUMENTATION] */
	EmitPlacePublishedSignal(this: StudioService): void;
	/** [NO DOCUMENTATION] */
	GetClassIcon(this: StudioService, className: string): object;
	/** [NO DOCUMENTATION] */
	GetResourceByCategory(this: StudioService, category: string): object;
	/** [NO DOCUMENTATION] */
	GetStartupAssetId(this: StudioService): string;
	/** [NO DOCUMENTATION] */
	GetStartupPluginId(this: StudioService): string;
	/** [NO DOCUMENTATION] */
	GetTermsOfUseUrl(this: StudioService): string;
	/** [NO DOCUMENTATION] */
	GetUserId(this: StudioService): number;
	/** [NO DOCUMENTATION] */
	GizmoRaycast(this: StudioService, origin: Vector3, direction: Vector3, raycastParams?: RaycastParams): RaycastResult;
	/** [NO DOCUMENTATION] */
	HasInternalPermission(this: StudioService): boolean;
	/** [NO DOCUMENTATION] */
	IsPluginInstalled(this: StudioService, assetId: number): boolean;
	/** [NO DOCUMENTATION] */
	IsPluginUpToDate(this: StudioService, assetId: number, currentAssetVersion: number): boolean;
	/** [NO DOCUMENTATION] */
	OpenInBrowser_DONOTUSE(this: StudioService, url: string): void;
	/** [NO DOCUMENTATION] */
	OpenPluginInsertPage(this: StudioService, assetId: number): void;
	/** [NO DOCUMENTATION] */
	PublishAs(this: StudioService, universeId: number, placeId: number, groupId: number): void;
	/** [NO DOCUMENTATION] */
	SerializeInstances(this: StudioService, instances: Array<Instance>): string;
	/** [NO DOCUMENTATION] */
	SetDocumentDisplayName(this: StudioService, newName: string): void;
	/** [NO DOCUMENTATION] */
	SetPluginEnabled(this: StudioService, assetId: number, state: boolean): void;
	/** [NO DOCUMENTATION] */
	SetUniverseDisplayName(this: StudioService, newName: string): void;
	/** [NO DOCUMENTATION] */
	ShowPlaceVersionHistoryDialog(this: StudioService, placeId: number): void;
	/** [NO DOCUMENTATION] */
	ShowPublishToRoblox(this: StudioService): void;
	/** [NO DOCUMENTATION] */
	UninstallPlugin(this: StudioService, assetId: number): void;
	/** [NO DOCUMENTATION] */
	UpdatePluginManagement(this: StudioService): void;
	/** [NO DOCUMENTATION] *
	 * Tags: Yields
	 */
	PromptImportFile(this: StudioService, fileTypeFilter?: Array<any>): Instance | undefined;
	/** [NO DOCUMENTATION] *
	 * Tags: Yields
	 */
	PromptImportFiles(this: StudioService, fileTypeFilter?: Array<any>): Array<Instance>;
	/** [NO DOCUMENTATION] *
	 * Tags: Yields
	 */
	TryInstallPlugin(this: StudioService, assetId: number, assetVersionId: number): void;
	/** [NO DOCUMENTATION] */
	readonly DEPRECATED_OnPublishPlaceToRoblox: RBXScriptSignal<() => void>;
	/** [NO DOCUMENTATION] */
	readonly GamePublishFinished: RBXScriptSignal<(success: boolean, gameId: number) => void>;
	/** [NO DOCUMENTATION] */
	readonly OnConvertToPackageResult: RBXScriptSignal<(isSuccessful: boolean, errorMessage: string) => void>;
	/** [NO DOCUMENTATION] */
	readonly OnImportFromRoblox: RBXScriptSignal<() => void>;
	/** [NO DOCUMENTATION] */
	readonly OnOpenConvertToPackagePlugin: RBXScriptSignal<(instances: Array<Instance>, name: string) => void>;
	/** [NO DOCUMENTATION] */
	readonly OnOpenGameSettings: RBXScriptSignal<(pageIdentifier: string) => void>;
	/** [NO DOCUMENTATION] */
	readonly OnOpenManagePackagePlugin: RBXScriptSignal<(userId: number, assetId: number) => void>;
	/** [NO DOCUMENTATION] */
	readonly OnPluginInstalledFromToolbox: RBXScriptSignal<() => void>;
	/** [NO DOCUMENTATION] */
	readonly OnPluginInstalledFromWeb: RBXScriptSignal<(pluginId: string) => void>;
	/** [NO DOCUMENTATION] */
	readonly OnPublishAsPlugin: RBXScriptSignal<(instances: Array<Instance>) => void>;
	/** [NO DOCUMENTATION] */
	readonly OnPublishPlaceToRoblox: RBXScriptSignal<(isOverwritePublish: boolean) => void>;
	/** [NO DOCUMENTATION] */
	readonly OnSaveToRoblox: RBXScriptSignal<(instances: Array<Instance>) => void>;
	/** [NO DOCUMENTATION] */
	readonly PromptTransformPluginCheckEnable: RBXScriptSignal<() => void>;
}

interface StudioTheme extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "StudioTheme";
	/** [NO DOCUMENTATION] */
	GetColor(this: StudioTheme, styleguideitem: CastsToEnum<Enum.StudioStyleGuideColor>, modifier?: CastsToEnum<Enum.StudioStyleGuideModifier>): Color3;
	/** [NO DOCUMENTATION] */
	GetPath(this: StudioTheme, assetid: string, modifier?: CastsToEnum<Enum.StudioStyleGuideModifier>): string;
}

interface TaskScheduler extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "TaskScheduler";
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly SchedulerDutyCycle: number;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly SchedulerRate: number;
	/** [NO DOCUMENTATION] */
	ThreadPoolConfig: Enum.ThreadPoolConfig;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly ThreadPoolSize: number;
}

interface TestService extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "TestService";
	/** [NO DOCUMENTATION] */
	AutoRuns: boolean;
	/** [NO DOCUMENTATION] */
	Description: string;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly ErrorCount: number;
	/** [NO DOCUMENTATION] */
	ExecuteWithStudioRun: boolean;
	/** [NO DOCUMENTATION] */
	Is30FpsThrottleEnabled: boolean;
	/** [NO DOCUMENTATION] */
	IsPhysicsEnvironmentalThrottled: boolean;
	/** [NO DOCUMENTATION] */
	IsSleepAllowed: boolean;
	/** [NO DOCUMENTATION] */
	NumberOfPlayers: number;
	/** [NO DOCUMENTATION] */
	SimulateSecondsLag: number;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly TestCount: number;
	/** [NO DOCUMENTATION] */
	Timeout: number;
	/** [NO DOCUMENTATION] *
	 * Tags: ReadOnly, NotReplicated
	 */
	readonly WarnCount: number;
	/** [NO DOCUMENTATION] */
	Check(this: TestService, condition: boolean, description: string, source?: Instance, line?: number): void;
	/** [NO DOCUMENTATION] */
	Checkpoint(this: TestService, text: string, source?: Instance, line?: number): void;
	/** [NO DOCUMENTATION] */
	Done(this: TestService): void;
	/** [NO DOCUMENTATION] */
	Error(this: TestService, description: string, source?: Instance, line?: number): void;
	/** [NO DOCUMENTATION] */
	Fail(this: TestService, description: string, source?: Instance, line?: number): void;
	/** [NO DOCUMENTATION] */
	Message(this: TestService, text: string, source?: Instance, line?: number): void;
	/** [NO DOCUMENTATION] */
	Require(this: TestService, condition: boolean, description: string, source?: Instance, line?: number): void;
	/** [NO DOCUMENTATION] */
	Warn(this: TestService, condition: boolean, description: string, source?: Instance, line?: number): void;
	/** [NO DOCUMENTATION] */
	isFeatureEnabled(this: TestService, name: string): boolean;
	/** [NO DOCUMENTATION] *
	 * Tags: Yields
	 */
	Run(this: TestService): void;
	/** [NO DOCUMENTATION] */
	readonly ServerCollectConditionalResult: RBXScriptSignal<(condition: boolean, text: string, script: LuaSourceContainer, line: number) => void>;
	/** [NO DOCUMENTATION] */
	readonly ServerCollectResult: RBXScriptSignal<(text: string, script: LuaSourceContainer, line: number) => void>;
}

interface VersionControlService extends Instance {
	/** The string representing the class this Instance belongs to. `classIs()` can be used to check if this instance belongs to a specific class, ignoring class inheritance. */
	readonly ClassName: "VersionControlService";
}

