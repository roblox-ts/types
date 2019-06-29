interface AnimationController extends Instance {
	readonly AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	GetPlayingAnimationTracks(): Array<AnimationTrack>;
	LoadAnimation(animation: Animation): AnimationTrack;
}

interface Animator extends Instance {
	LoadAnimation(animation: Animation): AnimationTrack;
}

/** @rbxts server */
interface AssetService extends Instance {
	CreatePlaceInPlayerInventoryAsync(
		player: Player,
		placeName: string,
		templatePlaceID: number,
		description?: string,
	): number;
	GetGamePlacesAsync(): StandardPages;
	GetAssetIdsForPackage(packageAssetId: number): Array<number>;
	GetBundleDetailsAsync(bundleId: number): BundleInfo;
}

interface BasePart extends PVInstance {
	readonly TouchEnded: RBXScriptSignal<(otherPart: BasePart) => void>;
	readonly Touched: RBXScriptSignal<(otherPart: BasePart) => void>;
	CanCollideWith(part: BasePart): boolean;
	GetConnectedParts(recursive?: boolean): Array<BasePart>;
	GetRootPart(): BasePart;
	GetJoints(): Array<Constraint | JointInstance>;
	GetTouchingParts(): Array<BasePart>;
	/** @rbxts server */
	SubtractAsync(parts: Array<BasePart>, collisionfidelity?: CastsToEnum<Enum.CollisionFidelity>): UnionOperation;
	/** @rbxts server */
	UnionAsync(parts: Array<BasePart>, collisionfidelity?: CastsToEnum<Enum.CollisionFidelity>): UnionOperation;

	/** @rbxts server */
	CanSetNetworkOwnership(): LuaTuple<[boolean, string | undefined]>;
	/** @rbxts server */
	GetNetworkOwner(): Player | undefined;
	/** @rbxts server */
	SetNetworkOwner(playerInstance?: Player): void;
	/** @rbxts server */
	GetNetworkOwnershipAuto(): boolean;
	/** @rbxts server */
	SetNetworkOwnershipAuto(): void;
}

interface Attachment extends Instance {
	WorldCFrame: CFrame;
}

interface BadgeService extends Instance {
	/** @rbxts server */
	AwardBadge(userId: number, badgeId: number): boolean;
	/** @rbxts server */
	GetBadgeInfoAsync(badgeId: number): BadgeInfo;
	/** @rbxts server */
	UserHasBadgeAsync(userId: number, badgeId: number): boolean;
}

interface TextService extends Instance {
	/** @rbxts server */
	FilterStringAsync(
		stringToFilter: string,
		fromUserId: number,
		textContext?: CastsToEnum<Enum.TextFilterContext>,
	): TextFilterResult | undefined;
}

interface BillboardGui extends LayerCollector {
	Adornee: PVInstance | Attachment | undefined;
	PlayerToHideFrom: Player | undefined;
}

interface BindableEvent extends Instance {
	readonly Event: RBXScriptSignal<(...arguments: Array<unknown>) => void, true>;
	Fire(...arguments: Array<unknown>): void;
}

interface BindableFunction extends Instance {
	OnInvoke: (...arguments: Array<unknown>) => any;
	Invoke(...arguments: Array<unknown>): Array<unknown>;
}

interface Camera extends Instance {
	CameraSubject: Humanoid | BasePart | undefined;
	GetPartsObscuringTarget(castPoints: Array<Vector3>, ignoreList: Array<Instance>): Array<Instance>;
	WorldToScreenPoint(worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
	WorldToViewportPoint(worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
}

interface Chat extends Instance {
	readonly Chatted: RBXScriptSignal<(part: BasePart, message: string, color: Enum.ChatColor) => void>;
	Chat(partOrCharacter: BasePart | Model, message: string, color?: CastsToEnum<Enum.ChatColor>): void;
	FilterStringAsync(stringToFilter: string, playerFrom: Player, playerTo: Player): string;
	FilterStringForBroadcast(stringToFilter: string, playerFrom: Player): string;
}

interface ClickDetector extends Instance {
	readonly MouseClick: RBXScriptSignal<(playerWhoClicked: Player) => void>;
	readonly MouseHoverEnter: RBXScriptSignal<(playerWhoHovered: Player) => void>;
	readonly MouseHoverLeave: RBXScriptSignal<(playerWhoHovered: Player) => void>;
	readonly RightMouseClick: RBXScriptSignal<(playerWhoClicked: Player) => void>;
}

interface CollectionService extends Instance {
	GetInstanceAddedSignal(tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetInstanceRemovedSignal(tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetTagged<T extends Instance = Instance>(tag: string): Array<T>;
	GetTags(instance: Instance): Array<string>;
}

interface ContentProvider extends Instance {
	PreloadAsync(contentIdList: Array<Instance>): void;
}

/** @rbxts client */
interface ContextActionService extends Instance {
	readonly LocalToolEquipped: RBXScriptSignal<(toolEquipped: Tool | Flag) => void>;
	readonly LocalToolUnequipped: RBXScriptSignal<(toolUnequipped: Tool | Flag) => void>;
	BindAction(
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;

	BindActionAtPriority(
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		priorityLevel: number,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;
	GetButton(actionName: string): ImageButton | undefined;
	GetAllBoundActionInfo(): Map<string, BoundActionInfo>;
	GetBoundActionInfo(actionName: string): BoundActionInfo;
}

/** @rbxts server */
interface DataStoreService extends Instance {
	GetDataStore(name: string, scope?: string): GlobalDataStore;
	GetGlobalDataStore(): GlobalDataStore;
	GetOrderedDataStore(name: string, scope?: string): OrderedDataStore;
}

interface Dialog extends Instance {
	readonly DialogChoiceSelected: RBXScriptSignal<(player: Player, dialogChoice: Dialog) => void>;
	GetCurrentPlayers(): Array<Player>;
}

interface FlagStand extends Part {
	readonly FlagCaptured: RBXScriptSignal<(player: Player) => void>;
}

interface GamePassService extends Instance {
	/** This item is deprecated. Do not use it for new work. */
	PlayerHasPass(player: Player, gamePassId: number): boolean;
}

interface PlayerGui extends BasePlayerGui {}

/** @rbxts server */
interface GlobalDataStore extends Instance {
	GetAsync<T = unknown>(key: string): T | undefined;
	IncrementAsync(key: string, delta?: number): number;
	RemoveAsync<T = unknown>(key: string): T | undefined;
	SetAsync(key: string, value?: any): void;
	UpdateAsync<O = unknown, R = unknown>(
		key: string,
		transformFunction: (oldValue: O | undefined) => R,
	): R extends undefined ? O | undefined : R;
	OnUpdate<T = unknown>(key: string, callback: (value: T) => void): RBXScriptConnection;
}

interface GroupService extends Instance {
	GetAlliesAsync(groupId: number): StandardPages;
	GetEnemiesAsync(groupId: number): StandardPages;
	GetGroupInfoAsync(groupId: number): GroupInfo;
	GetGroupsAsync(userId: number): Array<GetGroupsAsyncResult>;
}

/** @rbxts server */
interface MessagingService extends Instance {
	SubscribeAsync(topic: string, callback: (Data: any, Sent: number) => void): RBXScriptConnection;
}

interface GuiObject extends GuiBase2d {
	readonly InputBegan: RBXScriptSignal<(input: InputObject) => void>;
	readonly InputChanged: RBXScriptSignal<(input: InputObject) => void>;
	readonly InputEnded: RBXScriptSignal<(input: InputObject) => void>;
	readonly TouchLongPress: RBXScriptSignal<(touchPositions: Array<Vector2>, state: Enum.UserInputState) => void>;
	readonly TouchPan: RBXScriptSignal<
		(
			touchPositions: Array<Vector2>,
			totalTranslation: Vector2,
			velocity: Vector2,
			state: Enum.UserInputState,
		) => void
	>;
	readonly TouchPinch: RBXScriptSignal<
		(touchPositions: Array<Vector2>, scale: number, velocity: number, state: Enum.UserInputState) => void
	>;
	readonly TouchRotate: RBXScriptSignal<
		(touchPositions: Array<Vector2>, rotation: number, velocity: number, state: Enum.UserInputState) => void
	>;
	readonly TouchTap: RBXScriptSignal<(touchPositions: Array<Vector2>) => void>;

	TweenPosition(
		endPosition: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;

	TweenSize(
		endSize: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;

	TweenSizeAndPosition(
		endSize: UDim2,
		endPosition: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;
}

/** @rbxts client */
interface GuiService extends Instance {
	AddSelectionParent(selectionName: string, selectionParent: Instance): void;
	AddSelectionTuple(selectionName: string, selections: Array<any>): void;
	GetGuiInset(): LuaTuple<[Vector2, Vector2]>;
}

interface _HapticService extends Instance {
	GetMotor(
		inputType: CastsToEnum<Enum.UserInputType>,
		vibrationMotor: CastsToEnum<Enum.VibrationMotor>,
	): LuaTuple<[number]>;
	SetMotor(
		inputType: CastsToEnum<Enum.UserInputType>,
		vibrationMotor: CastsToEnum<Enum.VibrationMotor>,
		...vibrationValues: Array<number>
	): void;
}

interface HttpService extends Instance {
	/** @rbxts server */
	GetAsync(url: string, nocache?: boolean, headers?: HttpHeaders): string;

	/** @rbxts server */
	PostAsync(
		url: string,
		data: string,
		content_type?: CastsToEnum<Enum.HttpContentType>,
		compress?: boolean,
		headers?: HttpHeaders,
	): string;

	/** @rbxts server */
	RequestAsync(requestOptions: RequestAsyncRequest): RequestAsyncResponse;
}

interface Humanoid extends Instance {
	readonly AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	readonly Seated: RBXScriptSignal<(active: boolean, currentSeatPart: Seat | VehicleSeat) => void>;
	readonly Touched: RBXScriptSignal<(touchingPart: BasePart, humanoidPart: BasePart) => void>;
	ApplyDescription(humanoidDescription: HumanoidDescription): void;
	GetAppliedDescription(): HumanoidDescription;
	GetPlayingAnimationTracks(): Array<AnimationTrack>;
	LoadAnimation(animation: Animation): AnimationTrack;
	AddAccessory(accessory: Accessory): void;
	EquipTool(tool: Tool | Flag): void;
	GetAccessories(): Array<Accessory>;
	GetLimb(part: BasePart): Enum.Limb;
	GetBodyPartR15(part: BasePart): Enum.BodyPartR15;
	MoveTo(location: Vector3, part?: BasePart): void;
	ReplaceBodyPartR15(bodyPart: Enum.BodyPartR15, part: BasePart): boolean;
}

interface InsertService extends Instance {
	LoadAsset(assetId: number): Model;
	LoadAssetVersion(assetVersionId: number): Model;
	GetBaseSets(): Array<SetInfo>;
	GetCollection(categoryId: number): Array<CollectionInfo>;
	GetFreeDecals(searchText: string, pageNum: number): [Array<FreeSearchResult>];
	GetFreeModels(searchText: string, pageNum: number): [Array<FreeSearchResult>];
	GetUserSets(userId: number): Array<SetInfo>;
}

interface Instance {
	Clone(): this;
	GetChildren<T extends Instance = Instance>(): Array<T>;
	GetDescendants(): Array<Instance>;

	FindFirstAncestor<T extends Instance = Instance>(name: string): T | undefined;
	FindFirstChild<T extends Instance = Instance>(name: string, recursive?: boolean): T | undefined;
	WaitForChild<T extends Instance = Instance>(childName: string): T;
	WaitForChild<T extends Instance = Instance>(childName: string, timeOut: number): T | undefined;

	IsA<
		T extends {
			[K in keyof Instances]: Instances[K]["ClassName"] extends this["ClassName"]
				? this extends Instances[K]
					? never
					: K
				: never
		}[keyof Instances]
	>(
		className: T,
	): this is Instances[T];
	IsA(className: string): boolean;

	FindFirstAncestorWhichIsA<T extends keyof Instances>(className: T): Instances[T] | undefined;
	FindFirstAncestorWhichIsA(className: string): Instance | undefined;

	FindFirstChildWhichIsA<T extends keyof Instances>(className: T, recursive?: boolean): Instances[T] | undefined;
	FindFirstChildWhichIsA(className: string, recursive?: boolean): Instance | undefined;

	FindFirstAncestorOfClass<T extends Instance["ClassName"]>(className: T): StrictInstances[T] | undefined;
	FindFirstAncestorOfClass(className: string): Instance | undefined;

	FindFirstChildOfClass<T extends Instance["ClassName"]>(className: T): StrictInstances[T] | undefined;
	FindFirstChildOfClass(className: string): Instance | undefined;

	GetPropertyChangedSignal<T extends GetProperties<this>>(propertyName: T): RBXScriptSignal;
	GetPropertyChangedSignal(propertyName: string): RBXScriptSignal;
}

interface JointInstance extends Instance {
	Part0: BasePart | undefined;
	Part1: BasePart | undefined;
}

interface Keyframe extends Instance {
	AddPose(pose: Pose): void;
	RemovePose(pose: Pose): void;
	GetPoses(): Array<Pose>;
	AddMarker(marker: KeyframeMarker): void;
	RemoveMarker(marker: KeyframeMarker): void;
}

interface KeyframeSequence extends Instance {
	AddKeyframe(keyframe: Keyframe): void;
	GetKeyframes(): Array<Keyframe>;
	RemoveKeyframe(keyframe: Keyframe): void;
}

interface KeyframeSequenceProvider extends Instance {
	RegisterActiveKeyframeSequence(keyframeSequence: KeyframeSequence): string;
	RegisterKeyframeSequence(keyframeSequence: KeyframeSequence): string;
	GetAnimations(userId: number): InventoryPages;
	GetKeyframeSequenceAsync(assetId: string): KeyframeSequence;
}

interface LocalizationService extends Instance {
	GetTranslatorForPlayer(player: Player): Translator;
	GetTranslatorForLocaleAsync(locale: string): Translator;
	GetTranslatorForPlayerAsync(player: Player): Translator;
}

interface LocalizationTable extends Instance {
	GetEntries(): Array<LocalizationEntry>;
	GetTranslator(localeId: string): Translator;
}

interface LogService extends Instance {
	GetLogHistory(): Array<LogInfo>;
}

interface ServiceProvider extends Instance {
	readonly ServiceAdded: RBXScriptSignal<(service: Services[keyof Services]) => void>;
	readonly ServiceRemoving: RBXScriptSignal<(service: Services[keyof Services]) => void>;
	FindService(className: string): Instance | undefined;
	GetService<T extends keyof Services>(className: T): Services[T];
	GetService(className: string): Services[keyof Services] | undefined;
	FindService(className: string): Services[keyof Services] | undefined;
}

interface CompressorSoundEffect extends SoundEffect {
	SideChain?: Sound | SoundGroup;
}

interface DataModel extends ServiceProvider {
	readonly Workspace: Workspace;
}

interface MarketplaceService extends Instance {
	ProcessReceipt: (receiptInfo: ReceiptInfo) => Enum.ProductPurchaseDecision;
	readonly PromptGamePassPurchaseFinished: RBXScriptSignal<
		(player: Player, gamePassId: number, wasPurchased: boolean) => void
	>;
	readonly PromptPurchaseFinished: RBXScriptSignal<(player: Player, assetId: number, isPurchased: boolean) => void>;
	GetProductInfo(assetId: number, infoType: CastsToEnum<Enum.InfoType.Asset>): AssetProductInfo;
	GetProductInfo(assetId: number, infoType: CastsToEnum<Enum.InfoType.Product>): DeveloperProductInfo;
	GetProductInfo(assetId: number, infoType: CastsToEnum<Enum.InfoType.GamePass>): AssetProductInfo;
	PromptGamePassPurchase(player: Player, gamePassId: number): void;
	PromptProductPurchase(
		player: Player,
		productId: number,
		equipIfPurchased?: boolean,
		currencyType?: CastsToEnum<Enum.CurrencyType>,
	): void;
	PromptPurchase(
		player: Player,
		assetId: number,
		equipIfPurchased?: boolean,
		currencyType?: CastsToEnum<Enum.CurrencyType>,
	): void;
	PlayerOwnsAsset(player: Player, assetId: number): boolean;
	GetDeveloperProductsAsync(): Pages;
}

interface Model extends PVInstance {
	PrimaryPart?: BasePart;
	GetBoundingBox(): LuaTuple<[CFrame, Vector3]>;
}

/** @rbxts server */
interface OrderedDataStore extends GlobalDataStore {
	GetSortedAsync(ascending: boolean, pagesize: number, minValue?: number, maxValue?: number): DataStorePages;
}

interface Path extends Instance {
	GetWaypoints(): Array<PathWaypoint>;
}

interface PathfindingService extends Instance {
	CreatePath(agentParameters?: AgentParameters): Path;
	FindPathAsync(start: Vector3, finish: Vector3): Path;
}

interface PhysicsService extends Instance {
	CollisionGroupContainsPart(name: string, part: BasePart): boolean;
	GetCollisionGroups(): Array<CollisionGroupInfo>;
	CollisionGroupContainsPart(name: string, part: BasePart): boolean;
	SetPartCollisionGroup(part: BasePart, name: string): void;
}

interface Plugin extends Instance {
	GetMouse(): PluginMouse;
	CreateDockWidgetPluginGui(
		pluginGuiId: string,
		dockWidgetPluginGuiInfo: DockWidgetPluginGuiInfo,
	): DockWidgetPluginGui;
	CreatePluginAction(
		actionId: string,
		text: string,
		statusTip: string,
		iconName?: string,
		allowBinding?: boolean,
	): PluginAction;
	CreatePluginMenu(id: string, title?: string, icon?: string): PluginMenu;
	CreateToolbar(name: string): PluginToolbar;
	ImportFbxRig(isR15?: boolean): Model;
	Union(objects: Array<BasePart>): UnionOperation;
}

interface PluginManager extends Instance {
	CreatePlugin(): Plugin;
}

interface PluginMenu extends Instance {
	AddAction(action: PluginAction): void;
	AddMenu(menu: PluginMenu): void;
	AddNewAction(actionId: string, text: string, icon?: string): PluginAction;
}

interface PluginToolbar extends Instance {
	CreateButton(buttonId: string, tooltip: string, iconname: string, text?: string): PluginToolbarButton;
}

interface VehicleSeat extends BasePart {
	Sit(humanoid: Humanoid): void;
}

interface NetworkClient extends NetworkPeer {
	readonly ConnectionAccepted: RBXScriptSignal<(peer: string, replicator: ClientReplicator) => void>;
}

interface NetworkReplicator extends Instance {
	GetPlayer(): Player;
}

interface Seat extends Part {
	Sit(humanoid: Humanoid): void;
}

interface SkateboardPlatform extends Part {
	readonly Equipped: RBXScriptSignal<(humanoid: Humanoid, skateboardController: SkateboardController) => void>;
	readonly Unequipped: RBXScriptSignal<(humanoid: Humanoid) => void>;
}

interface Player extends Instance {
	readonly Name: string;
	readonly UserId: number;
	ReplicationFocus: BasePart | undefined;
	readonly CharacterAdded: RBXScriptSignal<(character: Model) => void>;
	readonly CharacterAppearanceLoaded: RBXScriptSignal<(character: Model) => void>;
	readonly CharacterRemoving: RBXScriptSignal<(character: Model) => void>;

	readonly Chatted: RBXScriptSignal<(message: string, recipient: Instance) => void>;
	/** ### TS Usage
	 * One should check the LocationType of each member of this array in order to verify which members are present. Should be compared to the LocationType const enum.
	 */
	GetFriendsOnline(maxFriends?: number): Array<FriendOnlineInfo>;
	/** @rbxts server */
	LoadCharacter(): void;
	/** @rbxts server */
	LoadCharacterWithHumanoidDescription(humanoidDescription: HumanoidDescription): void;
	GetMouse(): PlayerMouse;
	GetJoinData(): PlayerJoinInfo;
}

/** #### Related methods:
 * - Humanoid.ApplyDescription()
 * - Humanoid.GetAppliedDescription()
 * - Player.LoadCharacterWithHumanoidDescription()
 * - Players.GetHumanoidDescriptionFromOutfitId()
 * - Players.GetHumanoidDescriptionFromUserId()
 */
interface HumanoidDescription extends Instance {}

interface Players extends Instance {
	/** @rbxts client */
	readonly LocalPlayer: Player;
	readonly PlayerAdded: RBXScriptSignal<(player: Player) => void>;
	readonly PlayerRemoving: RBXScriptSignal<(player: Player) => void>;

	GetPlayerByUserId(userId: number): Player | undefined;

	GetPlayerFromCharacter(character: Model): Player | undefined;
	GetPlayers(): Array<Player>;

	GetCharacterAppearanceAsync(userId: number): Model | undefined;
	GetCharacterAppearanceInfoAsync(userId: number): CharacterAppearanceInfo;
	GetFriendsAsync(userId: number): FriendPages;

	GetHumanoidDescriptionFromOutfitId(outfitId: number): HumanoidDescription;
	GetHumanoidDescriptionFromUserId(userId: number): HumanoidDescription;

	GetUserThumbnailAsync(
		userId: number,
		thumbnailType: CastsToEnum<Enum.ThumbnailType>,
		thumbnailSize: CastsToEnum<Enum.ThumbnailSize>,
	): LuaTuple<[string, boolean]>;

	GetJoinData(): PlayerJoinInfo;
}

interface ScriptDebugger extends Instance {
	GetGlobals(): Map<string, any>;
	GetLocals(stackFrame?: number): Map<string, any>;
	GetUpvalues(stackFrame?: number): Map<string, any>;
}

interface PointsService extends Instance {
	AwardPoints(userId: number, amount: number): LuaTuple<[number, number, number, 0]>;
}

interface RemoteEvent extends Instance {
	readonly OnClientEvent: RBXScriptSignal<(...arguments: Array<unknown>) => void, true>;
	readonly OnServerEvent: RBXScriptSignal<(player: Player, ...arguments: Array<unknown>) => void>;
	FireAllClients(...arguments: Array<unknown>): void;
	FireClient(player: Player, ...arguments: Array<unknown>): void;
	FireServer(...arguments: Array<unknown>): void;
}

interface RemoteFunction extends Instance {
	OnClientInvoke: (...arguments: Array<any>) => void;
	OnServerInvoke: (player: Player, ...arguments: Array<any>) => void;
	InvokeClient(player: Player, ...arguments: Array<any>): unknown;
	InvokeServer<R = unknown>(...arguments: Array<any>): R;
}

interface Pose extends Instance {
	AddSubPose(pose: Pose): void;
	RemoveSubPose(pose: Pose): void;
}

interface SocialService extends Instance {
	readonly GameInvitePromptClosed: RBXScriptSignal<(senderPlayer: Player, recipientIds: Array<number>) => void>;
	CanSendGameInviteAsync(targetPlayer: Player): boolean;
	PromptGameInvite(targetPlayer: Player): void;
}

interface SoundService extends Instance {
	GetListener():
		| [Enum.ListenerType.Camera, undefined]
		| [Enum.ListenerType.CFrame, CFrame]
		| [Enum.ListenerType.ObjectCFrame, BasePart]
		| [Enum.ListenerType.ObjectPosition, BasePart];
	SetListener(listenerType: CastsToEnum<Enum.ListenerType.Camera>): void;
	SetListener(listenerType: CastsToEnum<Enum.ListenerType.CFrame>, cframe: CFrame): void;
	SetListener(listenerType: CastsToEnum<Enum.ListenerType.ObjectCFrame>, basePart: BasePart): void;
	SetListener(listenerType: CastsToEnum<Enum.ListenerType.ObjectPosition>, basePart: BasePart): void;
	PlayLocalSound(sound: Sound): void;
}

interface Studio extends Instance {
	Theme: StudioTheme;
}

/** @rbxts server */
interface ServerScriptService {}

/** @rbxts server */
interface ServerStorage {}

interface StarterGui extends BasePlayerGui {
	GetCore<T extends keyof GettableCores>(parameter: T, option: GettableCores[T]): void;
	SetCore<T extends keyof SettableCores>(parameter: T, option: SettableCores[T]): void;
}

interface SurfaceGui extends LayerCollector {
	Adornee: BasePart | undefined;
}

interface Team extends Instance {
	readonly PlayerAdded: RBXScriptSignal<(player: Player) => void>;
	readonly PlayerRemoved: RBXScriptSignal<(player: Player) => void>;
	GetPlayers(): Array<Player>;
}

interface Teams extends Instance {
	GetTeams(): Array<Team>;
}

interface TeleportService {
	readonly LocalPlayerArrivedFromTeleport: RBXScriptSignal<
		(loadingGui: ScreenGui | GuiMain, dataTable?: unknown) => void
	>;

	readonly TeleportInitFailed: RBXScriptSignal<
		(player: Player, teleportResult: Enum.TeleportResult, errorMessage: string) => void
	>;
	/** @rbxts server */
	GetPlayerPlaceInstanceAsync(userId: number): LuaTuple<[boolean, string, number, string]>;
	/** @rbxts server */
	ReserveServer(placeId: number): LuaTuple<[string, string]>;
	/** @rbxts client */
	GetArrivingTeleportGui(): ScreenGui | GuiMain | undefined;
	/** @rbxts client */
	GetLocalPlayerTeleportData(): unknown;
	/** @rbxts client */
	GetTeleportSetting(setting: string): unknown;
	/** @rbxts client */
	SetTeleportGui(gui: ScreenGui): void;
	/** @rbxts client */
	SetTeleportSetting(setting: string, value: TeleportData): void;
	Teleport(
		placeId: number,
		player?: Player,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui | GuiMain,
	): void;

	TeleportToPrivateServer(
		placeId: number,
		reservedServerAccessCode: string,
		players: Array<Player>,
		spawnName?: string,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui | GuiMain,
	): void;

	TeleportPartyAsync(
		placeId: number,
		players: Array<Player>,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui | GuiMain,
	): string;

	TeleportToPlaceInstance(
		placeId: number,
		instanceId: string,
		player?: Player,
		spawnName?: string,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui | GuiMain,
	): void;

	TeleportToSpawnByName(
		placeId: number,
		spawnName: string,
		player?: Player,
		teleportData?: any,
		customLoadingScreen?: ScreenGui | GuiMain,
	): void;
}

interface Terrain extends BasePart {
	CopyRegion(region: Region3int16): TerrainRegion;
	PasteRegion(region: TerrainRegion, corner: Vector3int16, pasteEmptyCells: boolean): void;
	ReadVoxels(
		region: Region3,
		resolution: number,
	): LuaTuple<[ReadVoxelsArray<Enum.Material>, ReadVoxelsArray<number>]>;
	WriteVoxels(
		region: Region3,
		resolution: number,
		materials: Array<Array<Array<CastsToEnum<Enum.Material>>>>,
		occupancy: Array<Array<Array<number>>>,
	): void;
}

interface Tool extends BackpackItem {
	readonly Equipped: RBXScriptSignal<(mouse: Mouse) => void>;
}

interface UIPageLayout extends UIGridStyleLayout {
	readonly PageEnter: RBXScriptSignal<(page: GuiObject) => void>;
	readonly PageLeave: RBXScriptSignal<(page: GuiObject) => void>;
	readonly Stopped: RBXScriptSignal<(currentPage: GuiObject) => void>;
	JumpTo(page: GuiObject): void;
}

interface Explosion extends Instance {
	readonly Hit: RBXScriptSignal<(part: BasePart, distance: number) => void>;
}

interface Dragger extends Instance {
	MouseDown(mousePart: BasePart, pointOnMousePart: Vector3, parts: Array<BasePart>): void;
}
interface JointsService extends Instance {
	SetJoinAfterMoveInstance(joinInstance: PVInstance): void;
	SetJoinAfterMoveTarget(joinTarget: PVInstance): void;
}

interface GuiButton extends GuiObject {
	readonly Activated: RBXScriptSignal<(inputObject: InputObject) => void>;
}

interface TextBox extends GuiObject {
	readonly FocusLost: RBXScriptSignal<(enterPressed: boolean, inputThatCausedFocusLoss: InputObject) => void>;
}

interface TweenService {
	Create<T extends Instances[keyof Instances]>(
		instance: T,
		tweenInfo: TweenInfo,
		propertyTable: Partial<FilterMembers<T, Tweenable>>,
	): Tween;
}

/** @rbxts client */
interface UserInputService {
	readonly InputBegan: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	readonly InputChanged: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	readonly InputEnded: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TextBoxFocusReleased: RBXScriptSignal<(textboxReleased: TextBox) => void>;
	readonly TextBoxFocused: RBXScriptSignal<(textboxFocused: TextBox) => void>;
	readonly TouchEnded: RBXScriptSignal<(touch: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TouchMoved: RBXScriptSignal<(touch: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TouchPan: RBXScriptSignal<
		(
			touchPositions: Array<InputObject>,
			totalTranslation: Vector2,
			velocity: Vector2,
			state: Enum.UserInputState,
			gameProcessedEvent: boolean,
		) => void
	>;
	readonly TouchRotate: RBXScriptSignal<
		(
			touchPositions: Array<InputObject>,
			rotation: number,
			velocity: number,
			state: Enum.UserInputState,
			gameProcessedEvent: boolean,
		) => void
	>;
	readonly TouchPinch: RBXScriptSignal<
		(
			touchPositions: Array<InputObject>,
			scale: number,
			velocity: number,
			state: Enum.UserInputState,
			gameProcessedEvent: boolean,
		) => void
	>;
	readonly TouchLongPress: RBXScriptSignal<
		(touchPositions: Array<InputObject>, state: Enum.UserInputState, gameProcessedEvent: boolean) => void
	>;
	readonly TouchStarted: RBXScriptSignal<(touch: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TouchTap: RBXScriptSignal<(touchPositions: Array<InputObject>, gameProcessedEvent: boolean) => void>;
	readonly DeviceAccelerationChanged: RBXScriptSignal<(acceleration: InputObject) => void>;
	readonly DeviceGravityChanged: RBXScriptSignal<(gravity: InputObject) => void>;
	readonly DeviceRotationChanged: RBXScriptSignal<(rotation: InputObject, cframe: CFrame) => void>;
	GetConnectedGamepads(): Array<Enum.UserInputType>;
	GetDeviceRotation(): LuaTuple<[InputObject, CFrame]>;
	GetGamepadState(gamepadNum: CastsToEnum<Enum.UserInputType>): Array<InputObject>;
	GetKeysPressed(): Array<InputObject>;
	GetMouseButtonsPressed(): Array<InputObject>;
	GetNavigationGamepads(): Array<Enum.UserInputType>;
	GetSupportedGamepadKeyCodes(gamepadNum: CastsToEnum<Enum.UserInputType>): Array<Enum.KeyCode>;
	GetDeviceAcceleration(): InputObject;
	GetDeviceGravity(): InputObject;
	GetFocusedTextBox(): TextBox | undefined;
}

interface Workspace extends Model {
	Terrain: Terrain;
	FindPartOnRay(
		ray: Ray,
		ignoreDescendantsInstance?: Instance,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	FindPartOnRayWithIgnoreList(
		ray: Ray,
		ignoreDescendantsTable: Array<Instance>,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	FindPartOnRayWithWhitelist(
		ray: Ray,
		whitelistDescendantsTable: Array<Instance>,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;
}

/**
 * Used to hold a value.
 */
interface ValueBase extends Instance {
	/** The value this object holds. */
	Value?: unknown;
	/**
	 * This event fires whenever the `Value` property is changed.
	 *
	 * This event can be used to track when a ValueBase `Value` changes and to track the different values that it may change to.
	 */
	readonly Changed: RBXScriptSignal<(value?: unknown) => void>;
}

interface ObjectValue extends ValueBase {
	readonly Changed: RBXScriptSignal<(value?: Instance) => void>;
}
