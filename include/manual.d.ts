/// <reference no-default-lib="true"/>
/// <reference path="roblox.d.ts" />
/// <reference path="generated_enums.d.ts" />
/// <reference path="generated_classes.d.ts" />

// GENERATED API OVERRIDES

interface Rbx_AnimationController extends Rbx_Instance {
	GetPlayingAnimationTracks(): Array<AnimationTrack>;
	LoadAnimation(animation: Animation): AnimationTrack;
	AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
}

interface Rbx_Animator extends Rbx_Instance {
	LoadAnimation(animation: Animation): AnimationTrack;
}

interface Rbx_AssetService extends Rbx_Instance {
	CreatePlaceInPlayerInventoryAsync(
		player: Player,
		placeName: string,
		templatePlaceID: number,
		description?: string
	): number;
	GetGamePlacesAsync(): StandardPages;
	GetAssetIdsForPackage(packageAssetId: number): Array<number>;
}

interface Rbx_BasePart extends Rbx_Instance {
	CanCollideWith(part: BasePart): boolean;
	CanSetNetworkOwnership(): [true] | [false, string];
	GetConnectedParts(recursive?: boolean): Array<BasePart>;
	GetNetworkOwner(): Player | undefined;
	GetRootPart(): BasePart;
	GetJoints(): Array<Constraint | JointInstance>;
	GetTouchingParts(): Array<BasePart>;
	SetNetworkOwner(playerInstance?: Player): void;
	SubtractAsync(parts: Array<BasePart>, collisionfidelity?: Enum.CollisionFidelity): UnionOperation;
	UnionAsync(parts: Array<BasePart>, collisionfidelity?: Enum.CollisionFidelity): UnionOperation;
	TouchEnded: RBXScriptSignal<(otherPart: BasePart) => void>;
	Touched: RBXScriptSignal<(otherPart: BasePart) => void>;
}

interface Rbx_BillboardGui extends Rbx_LayerCollector {
	Adornee: BasePart | Attachment | undefined;
	PlayerToHideFrom: Player | undefined;
}

interface Rbx_BindableEvent extends Rbx_Instance {
	Fire(...arguments: Array<unknown>): void;
	Event: RBXScriptSignal<(...arguments: Array<unknown>) => void>;
}

interface Rbx_BindableFunction extends Rbx_Instance {
	Invoke(...arguments: Array<unknown>): Array<unknown>;
	OnInvoke: (...arguments: Array<unknown>) => any;
}

interface Rbx_Camera extends Rbx_Instance {
	CameraSubject: Humanoid | BasePart | undefined;
	GetPartsObscuringTarget(castPoints: Array<Vector3>, ignoreList: Array<Instance>): Array<Instance>;
	WorldToScreenPoint(worldPoint: Vector3): [Vector3, boolean];
	WorldToViewportPoint(worldPoint: Vector3): [Vector3, boolean];
}

interface Rbx_Chat extends Rbx_Instance {
	Chat(partOrCharacter: BasePart | Model, message: string, color?: Enum.ChatColor): void;
	FilterStringAsync(stringToFilter: string, playerFrom: Player, playerTo: Player): string;
	FilterStringForBroadcast(stringToFilter: string, playerFrom: Player): string;
	Chatted: RBXScriptSignal<(part: BasePart, message: string, color: Enum.ChatColor) => void>;
}

interface Rbx_ClickDetector extends Rbx_Instance {
	MouseClick: RBXScriptSignal<(playerWhoClicked: Player) => void>;
	MouseHoverEnter: RBXScriptSignal<(playerWhoHovered: Player) => void>;
	MouseHoverLeave: RBXScriptSignal<(playerWhoHovered: Player) => void>;
	RightMouseClick: RBXScriptSignal<(playerWhoClicked: Player) => void>;
}

interface Rbx_CollectionService extends Rbx_Instance {
	GetInstanceAddedSignal(tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetInstanceRemovedSignal(tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetTagged<T = Instance>(tag: string): Array<T>;
	GetTags(instance: Instance): Array<string>;
}

interface Rbx_ContentProvider extends Rbx_Instance {
	PreloadAsync(contentIdList: Array<string>): void;
}

interface Rbx_ContextActionService extends Rbx_Instance {
	BindAction(
		actionName: string,
		functionToBind: Function,
		createTouchButton: boolean,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;
	BindActionAtPriority(
		actionName: string,
		functionToBind: Function,
		createTouchButton: boolean,
		priorityLevel: number,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;
	LocalToolEquipped: RBXScriptSignal<(toolEquipped: Tool) => void>;
	LocalToolUnequipped: RBXScriptSignal<(toolUnequipped: Tool) => void>;
}

interface Rbx_DataStorePages
	extends Rbx_Pages<{
			key: string;
			value: any;
		}> {}
interface DataStorePages extends Rbx_DataStorePages, Base<Rbx_DataStorePages>, AnyIndex {}

interface Rbx_DataStoreService extends Rbx_Instance {
	GetDataStore(name: string, scope?: string): GlobalDataStore;
	GetGlobalDataStore(): GlobalDataStore;
	GetOrderedDataStore(name: string, scope?: string): OrderedDataStore;
}

interface Rbx_FriendPages
	extends Rbx_Pages<{
			Id: number;
			Username: string;
			IsOnline: boolean;
		}> {}
interface FriendPages extends Rbx_FriendPages, Base<Rbx_FriendPages>, AnyIndex {}

interface Rbx_GlobalDataStore extends Rbx_Instance {
	UpdateAsync(key: string, transformFunction: Function): unknown;
}

interface GroupInfo {
	Name: string;
	Id: number;
	Owner: {
		Name: string;
		Id: number;
	};
	EmblemUrl: string;
	Description: string;
	Roles: Array<{
		Name: string;
		Rank: number;
	}>;
}

interface GetGroupsAsyncResult {
	Name: string;
	Id: number;
	EmblemUrl: string;
	Description: string;
	Rank: number;
	Role: string;
	IsPrimary: boolean;
	IsInClan: boolean;
}

interface Rbx_GroupService extends Rbx_Instance {
	GetAlliesAsync(groupId: number): StandardPages;
	GetEnemiesAsync(groupId: number): StandardPages;
	GetGroupInfoAsync(groupId: number): GroupInfo;
	GetGroupsAsync(userId: number): Array<GetGroupsAsyncResult>;
}

interface Rbx_GuiObject extends Rbx_GuiBase2d {
	TouchLongPress: RBXScriptSignal<(touchPositions: Array<Vector2>, state: Enum.UserInputState) => void>;
	TouchPan: RBXScriptSignal<
		(
			touchPositions: Array<Vector2>,
			totalTranslation: Vector2,
			velocity: Vector2,
			state: Enum.UserInputState
		) => void
	>;
	TouchPinch: RBXScriptSignal<
		(touchPositions: Array<Vector2>, scale: number, velocity: number, state: Enum.UserInputState) => void
	>;
	TouchRotate: RBXScriptSignal<
		(touchPositions: Array<Vector2>, rotation: number, velocity: number, state: Enum.UserInputState) => void
	>;
	TouchTap: RBXScriptSignal<(touchPositions: Array<Vector2>) => void>;
}

interface Rbx_GuiService extends Rbx_Instance {
	AddSelectionParent(selectionName: string, selectionParent: GuiObject): void;
	AddSelectionTuple(selectionName: string, selections: GuiObject): void;
	GetGuiInset(): [Vector2, Vector2];
}

interface Rbx_HapticService extends Rbx_Instance {
	GetMotor(inputType: Enum.UserInputType, vibrationMotor: Enum.VibrationMotor): [number];
	SetMotor(
		inputType: Enum.UserInputType,
		vibrationMotor: Enum.VibrationMotor,
		...vibrationValues: Array<number>
	): void;
}

type HttpHeaders = { [index: string]: string };

interface RequestAsyncRequest {
	Url: string;
	Method?: "GET" | "HEAD" | "POST" | "PUT" | "DELETE";
	Body?: string;
	Headers?: HttpHeaders;
}

interface RequestAsyncResponse {
	Success: boolean;
	StatusCode: number;
	StatusMessage: string;
	Headers: HttpHeaders;
	Body: string;
}

interface Rbx_HttpService extends Rbx_Instance {
	RequestAsync(requestOptions: RequestAsyncRequest): RequestAsyncResponse;
	GetAsync(url: string, nocache?: boolean, headers?: HttpHeaders): string;
	PostAsync(
		url: string,
		data: string,
		content_type?: Enum.HttpContentType,
		compress?: boolean,
		headers?: HttpHeaders
	): string;
}

interface Rbx_Humanoid extends Rbx_Instance {
	GetPlayingAnimationTracks(): Array<AnimationTrack>;
	LoadAnimation(animation: Instance): AnimationTrack;
	AddAccessory(accessory: Accessory): void;
	EquipTool(tool: BasePart): void;
	GetAccessories(): Array<Accessory>;
	GetLimb(part: BasePart): Enum.Limb;
	GetBodyPartR15(part: BasePart): Enum.BodyPartR15;
	MoveTo(location: Vector3, part?: BasePart): void;
	ReplaceBodyPartR15(bodyPart: Enum.BodyPartR15, part: BasePart): boolean;
	AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	Seated: RBXScriptSignal<(active: boolean, currentSeatPart: Seat | VehicleSeat) => void>;
	Touched: RBXScriptSignal<(touchingPart: BasePart, humanoidPart: BasePart) => void>;
}

interface SetInfo {
	AssetSetId: string;
	CategoryId: string;
	CreatorName: string;
	Description: string;
	ImageAssetId: string;
	Name: string;
	SetType: string;
}

interface CollectionInfo {
	AssetId: string;
	AssetSetId: string;
	AssetVersionId: string;
	IsTrusted: boolean;
	Name: string;
	CreatorName: string;
}

interface FreeSearchResult {
	CurrentStartIndex: string;
	Results: Array<{
		AssetId: string;
		AssetVersionId: string;
		CreatorName: string;
		Name: string;
	}>;
	TotalCount: string;
}

interface Rbx_InsertService extends Rbx_Instance {
	LoadAsset(assetId: number): Model;
	LoadAssetVersion(assetVersionId: number): Model;
	GetBaseSets(): Array<SetInfo>;
	GetCollection(categoryId: number): Array<CollectionInfo>;
	GetFreeDecals(searchText: string, pageNum: number): Array<FreeSearchResult>;
	GetFreeModels(searchText: string, pageNum: number): Array<FreeSearchResult>;
	GetUserSets(userId: number): Array<SetInfo>;
}

interface Rbx_Instance {
	Clone(): Instance;
	GetDescendants(): Array<Instance>;
	FindFirstAncestor<T = Instance>(name: string): T | undefined;
	FindFirstChild<T = Instance>(name: string, recursive?: boolean): T | undefined;
	WaitForChild<T = Instance>(childName: string): T;
	WaitForChild<T = Instance>(childName: string, timeOut: number): T | undefined;
}

interface LocalizationEntry {
	Key: string;
	Source: string;
	Context: string;
	Example: string;
	Values: { [index: string]: string };
}

interface Rbx_LocalizationTable extends Rbx_Instance {
	GetEntries(): Array<LocalizationEntry>;
	GetTranslator(localeId: string): Translator;
}

interface LogInfo {
	message: string;
	messageType: Enum.MessageType;
	timestamp: number;
}

interface Rbx_LogService extends Rbx_Instance {
	GetLogHistory(): Array<LogInfo>;
}

interface Rbx_KeyframeSequenceProvider extends Rbx_Instance {
	RegisterActiveKeyframeSequence(keyframeSequence: KeyframeSequence): string;
	RegisterKeyframeSequence(keyframeSequence: KeyframeSequence): string;
	GetAnimations(userId: number): InventoryPages;
	GetKeyframeSequenceAsync(assetId: string): KeyframeSequence;
}

interface Rbx_Model extends Rbx_PVInstance {
	GetBoundingBox(): [CFrame, Vector3];
}

interface Rbx_OrderedDataStore extends Rbx_GlobalDataStore {
	GetSortedAsync(ascending: boolean, pagesize: number, minValue?: number, maxValue?: number): DataStorePages;
}

interface Rbx_Pages<T = unknown> extends Rbx_Instance {
	readonly IsFinished: boolean;
	GetCurrentPage(): Array<T>;
	AdvanceToNextPageAsync(): void;
}
interface Pages<T = unknown> extends Rbx_Pages<T>, Base<Rbx_Pages>, AnyIndex {}

interface Rbx_PathfindingService extends Rbx_Instance {
	FindPathAsync(start: Vector3, finish: Vector3): Path;
}

interface Rbx_Path extends Rbx_Instance {
	GetWaypoints(): Array<PathWaypoint>;
}

interface CollisionGroupInfo {
	id: number;
	mask: number;
	name: string;
}

interface Rbx_PhysicsService extends Rbx_Instance {
	GetCollisionGroups(): Array<CollisionGroupInfo>;
}

interface FriendOnlineInfo {
	VisitorId: number;
	UserName: string;
	LastOnline: string;
	IsOnline: boolean;
	LastLocation: string;
	PlaceId: number;
	GameId: string;
	LocationType: 0 | 1 | 2 | 3 | 4;
}

interface Rbx_Player extends Rbx_Instance {
	Character: Model | undefined;
	ReplicationFocus: BasePart | undefined;
	GetFriendsOnline(maxFriends?: number): Array<FriendOnlineInfo>;
	GetMouse(): PlayerMouse;
	CharacterAdded: RBXScriptSignal<(character: Model) => void>;
	CharacterAppearanceLoaded: RBXScriptSignal<(character: Model) => void>;
	CharacterRemoving: RBXScriptSignal<(character: Model) => void>;
}

interface CharacterAppearanceInfo {
	bodyColors: {
		leftArmColorId: number;
		torsoColorId: number;
		rightArmColorId: number;
		headColorId: number;
		leftLegColorId: number;
		rightLegColorId: number;
	};
	assets: Array<{
		id: number;
		assetType: {
			name: string;
			id: number;
		};
		name: string;
	}>;
	defaultPantsApplied: boolean;
	defaultShirtApplied: boolean;
	playerAvatarType: string;
	scales: {
		bodyType: number;
		head: number;
		height: number;
		proportion: number;
		depth: number;
		width: number;
	};
}

interface Rbx_Players extends Rbx_Instance {
	LocalPlayer: Player | undefined;
	GetPlayerFromCharacter(character: Model): Player | undefined;
	GetCharacterAppearanceAsync(userId: number): Model | undefined;
	GetCharacterAppearanceInfoAsync(userId: number): CharacterAppearanceInfo;
	GetPlayerByUserId(userId: number): Player | undefined;
	GetPlayers(): Array<Player>;
	GetFriendsAsync(userId: number): FriendPages;
	GetUserThumbnailAsync(
		userId: number,
		thumbnailType: Enum.ThumbnailType,
		thumbnailSize: Enum.ThumbnailSize
	): [string, boolean];
	PlayerAdded: RBXScriptSignal<(player: Player) => void>;
	PlayerRemoving: RBXScriptSignal<(player: Player) => void>;
}

interface Rbx_PointsService extends Rbx_Instance {
	AwardPoints(userId: number, amount: number): [number, number, number, 0];
}

interface Rbx_RemoteEvent extends Rbx_Instance {
	FireAllClients(...arguments: Array<unknown>): void;
	FireClient(player: Player, ...arguments: Array<unknown>): void;
	FireServer(...arguments: Array<unknown>): void;
	OnClientEvent: RBXScriptSignal<(...arguments: Array<unknown>) => void>;
	OnServerEvent: RBXScriptSignal<(player: Player, ...arguments: Array<unknown>) => void>;
}

interface Rbx_RemoteFunction extends Rbx_Instance {
	InvokeClient(player: Instance, ...arguments: Array<any>): Array<any>;
	InvokeServer(...arguments: Array<any>): Array<any>;
	OnClientInvoke: Callback;
	OnServerInvoke: Callback;
}

interface Rbx_SoundService extends Rbx_Instance {
	GetListener():
		| [Enum.ListenerType.Camera, undefined]
		| [Enum.ListenerType.CFrame, CFrame]
		| [Enum.ListenerType.ObjectCFrame, BasePart]
		| [Enum.ListenerType.ObjectPosition, BasePart];
	SetListener(listenerType: Enum.ListenerType.Camera): void;
	SetListener(listenerType: Enum.ListenerType.CFrame, cframe: CFrame): void;
	SetListener(listenerType: Enum.ListenerType.ObjectCFrame, basePart: BasePart): void;
	SetListener(listenerType: Enum.ListenerType.ObjectPosition, basePart: BasePart): void;
}

interface MakeSystemMessageConfig {
	Text: string;
	Color?: Color3;
	Font?: Enum.Font;
	FontSize?: Enum.FontSize;
}

interface SendNotificationConfig {
	Title: string;
	Text: string;
	Icon?: string;
	Duration?: number;
	Callback?: BindableFunction;
	Button1?: string;
	Button2?: string;
}

interface Rbx_StarterGui extends Rbx_BasePlayerGui {
	GetCore(parameterName: "PointsNotificationsActive"): boolean;
	GetCore(parameterName: "BadgesNotificationsActive"): boolean;
	GetCore(parameterName: "ChatActive"): boolean;
	GetCore(parameterName: "ChatWindowSize"): UDim2;
	GetCore(parameterName: "ChatWindowPosition"): UDim2;
	GetCore(parameterName: "ChatBarDisabled"): boolean;
	GetCore(parameterName: "GetBlockedUserIds"): Array<number>;
	GetCore(parameterName: "PlayerBlockedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerUnblockedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerMutedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerUnmutedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerFriendedEvent"): BindableEvent;
	GetCore(parameterName: "PlayerUnfriendedEvent"): BindableEvent;
	GetCore(parameterName: "DeveloperConsoleVisible"): boolean;
	GetCore(parameterName: "VRRotationIntensity"): "Low" | "High" | "Smooth";

	SetCore(parameterName: "ChatActive", active: boolean): void;
	SetCore(parameterName: "PointsNotificationsActive", active: boolean): void;
	SetCore(parameterName: "BadgeNotificationsActive", active: boolean): void;
	SetCore(parameterName: "ResetButtonCallback", enabled: boolean): void;
	SetCore(parameterName: "ResetButtonCallback", callback: BindableEvent): void;
	SetCore(parameterName: "ChatMakeSystemMessage", configTable: MakeSystemMessageConfig): void;
	SetCore(parameterName: "ChatWindowSize", windowSize: UDim2): void;
	SetCore(parameterName: "ChatWindowPosition", windowPosition: UDim2): void;
	SetCore(parameterName: "ChatBarDisabled", disabled: boolean): void;
	SetCore(parameterName: "SendNotification", configTable: boolean): void;
	SetCore(parameterName: "TopbarEnabled", enabled: boolean): void;
	SetCore(parameterName: "DeveloperConsoleVisible", visibility: boolean): void;
	SetCore(parameterName: "PromptSendFriendRequest", player: Player): void;
	SetCore(parameterName: "PromptUnfriend", player: Player): void;
	SetCore(parameterName: "PromptBlockPlayer", player: Player): void;
	SetCore(parameterName: "PromptUnblockPlayer", player: Player): void;
	SetCore(parameterName: "SetAvatarContextMenuEnabled", enabled: boolean): void;
	SetCore(parameterName: "AddAvatarContextMenuOption", option: Enum.AvatarContextMenuOption): void;
	SetCore(parameterName: "AddAvatarContextMenuOption", option: [string, BindableFunction]): void;
	SetCore(parameterName: "RemoveAvatarContextMenuOption", option: Enum.AvatarContextMenuOption): void;
	SetCore(parameterName: "RemoveAvatarContextMenuOption", option: [string, BindableFunction]): void;
	SetCore(
		parameterName: "CoreGuiChatConnections",
		connections: { [name: string]: BindableEvent | BindableFunction }
	): void;
}

interface Rbx_SurfaceGui extends Rbx_LayerCollector {
	Adornee: BasePart | undefined;
}

interface Rbx_TeleportService {
	GetPlayerPlaceInstanceAsync(userId: number): [boolean, string, number, string];
	ReserveServer(placeId: number): [string, string];
}

interface Rbx_Terrain extends Rbx_BasePart {
	ReadVoxels(region: Region3, resolution: number): [Enum.Material[][][], number[][][]];
	WriteVoxels(region: Region3, resolution: number, materials: Enum.Material[][][], occupancy: number[][][]): void;
}

type Tweenable = number | boolean | CFrame | Rect | Color3 | UDim | UDim2 | Vector2 | Vector2int16 | Vector3;
type FilterMembers<T, U> = Pick<T, { [K in keyof T]: T[K] extends U ? K : never }[keyof T]>;

interface Rbx_TweenService {
	Create<T>(instance: T, tweenInfo: TweenInfo, propertyTable: Partial<FilterMembers<BaseType<T>, Tweenable>>): Tween;
}

interface Rbx_UserInputService {
	GetConnectedGamepads(): Array<Enum.UserInputType>;
	GetDeviceRotation(): [InputObject, CFrame];
	GetGamepadState(gamepadNum: Enum.UserInputType): Array<InputObject>;
	GetKeysPressed(): Array<InputObject>;
	GetMouseButtonsPressed(): Array<InputObject>;
	GetNavigationGamepads(): Array<Enum.UserInputType>;
	GetSupportedGamepadKeyCodes(gamepadNum: Enum.UserInputType): Array<Enum.KeyCode>;
}

interface Rbx_Workspace extends Rbx_Model {
	Terrain: Terrain;
	FindPartOnRay(
		ray: Ray,
		ignoreDescendantsInstance?: Instance,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean
	): [BasePart, Vector3, Vector3, Enum.Material];
	FindPartOnRayWithIgnoreList(
		ray: Ray,
		ignoreDescendantsTable: Array<Instance>,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean
	): [BasePart, Vector3, Vector3, Enum.Material];
	FindPartOnRayWithWhitelist(
		ray: Ray,
		whitelistDescendantsTable: Array<Instance>,
		ignoreWater?: boolean
	): [BasePart, Vector3, Vector3, Enum.Material];
}
