interface AnimationController extends Instance {
	GetPlayingAnimationTracks(this: this): Array<AnimationTrack>;
	LoadAnimation(this: this, animation: Animation): AnimationTrack;
}

interface AnimationTrack extends Instance {
	GetMarkerReachedSignal(this: this, name: string): RBXScriptSignal<(param?: string) => void>;
}

interface Animator extends Instance {
	ApplyJointVelocities(this: this, motors: Array<Motor6D>): void;
	LoadAnimation(this: this, animation: Animation): AnimationTrack;
	GetPlayingAnimationTracks(this: this): Array<AnimationTrack>;
}

/** @rbxts server */
interface AssetService extends Instance {
	CreatePlaceInPlayerInventoryAsync(
		this: this,
		player: Player,
		placeName: string,
		templatePlaceID: number,
		description?: string,
	): number;
	GetGamePlacesAsync(this: this): StandardPages<{ Name: string; PlaceId: number }>;
	GetAssetIdsForPackage(this: this, packageAssetId: number): Array<number>;
	GetBundleDetailsAsync(this: this, bundleId: number): BundleInfo;
}

interface Attachment extends Instance {
	WorldCFrame: CFrame;
}

interface BadgeService extends Instance {
	/** @rbxts server */
	AwardBadge(this: this, userId: number, badgeId: number): boolean;
	/** @rbxts server */
	GetBadgeInfoAsync(this: this, badgeId: number): BadgeInfo;
	/** @rbxts server */
	UserHasBadgeAsync(this: this, userId: number, badgeId: number): boolean;
}

interface BasePart extends PVInstance {
	readonly TouchEnded: RBXScriptSignal<(otherPart: BasePart) => void>;
	readonly Touched: RBXScriptSignal<(otherPart: BasePart) => void>;
	CanCollideWith(this: this, part: BasePart): boolean;
	GetConnectedParts(this: this, recursive?: boolean): Array<BasePart>;
	GetRootPart(this: this): BasePart;
	GetJoints(this: this): Array<Constraint | JointInstance>;
	GetTouchingParts(this: this): Array<BasePart>;
	/** @rbxts server */
	SubtractAsync(
		this: this,
		parts: Array<BasePart>,
		collisionfidelity?: CastsToEnum<Enum.CollisionFidelity>,
	): UnionOperation;
	/** @rbxts server */
	UnionAsync(
		this: this,
		parts: Array<BasePart>,
		collisionfidelity?: CastsToEnum<Enum.CollisionFidelity>,
	): UnionOperation;

	/** @rbxts server */
	CanSetNetworkOwnership(this: this): LuaTuple<[boolean, string | undefined]>;
	/** @rbxts server */
	GetNetworkOwner(this: this): Player | undefined;
	/** @rbxts server */
	SetNetworkOwner(this: this, playerInstance?: Player): void;
	/** @rbxts server */
	GetNetworkOwnershipAuto(this: this): boolean;
	/** @rbxts server */
	SetNetworkOwnershipAuto(this: this): void;
}

interface BasePlayerGui extends Instance {
	GetGuiObjectsAtPosition(this: this, x: number, y: number): Array<GuiObject>;
}

interface BillboardGui extends LayerCollector {
	Adornee: PVInstance | Attachment | undefined;
	PlayerToHideFrom: Player | undefined;
}

interface BindableEvent<T extends Callback = Callback> extends Instance {
	readonly Event: RBXScriptSignal<T>;
	Fire(this: this, ...args: Parameters<T>): void;
}

interface BindableFunction<T extends Callback = Callback> extends Instance {
	OnInvoke: T | undefined;
	Invoke(this: this, ...args: Parameters<T>): ReturnType<T>;
}

interface Camera extends Instance {
	CameraSubject: Humanoid | BasePart | undefined;
	GetPartsObscuringTarget(this: this, castPoints: Array<Vector3>, ignoreList: Array<Instance>): Array<Instance>;
	WorldToScreenPoint(this: this, worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
	WorldToViewportPoint(this: this, worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
}

interface Chat extends Instance {
	readonly Chatted: RBXScriptSignal<(part: BasePart, message: string, color: Enum.ChatColor) => void>;
	FilterStringAsync(this: this, stringToFilter: string, playerFrom: Player, playerTo: Player): string;
	FilterStringForBroadcast(this: this, stringToFilter: string, playerFrom: Player): string;
}

interface CollectionService extends Instance {
	GetInstanceAddedSignal(this: this, tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetInstanceRemovedSignal(this: this, tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetTagged<T extends Instance>(this: this, tag: string): Array<Instance>;
	GetTags(this: this, instance: Instance): Array<string>;
}

interface CompressorSoundEffect extends SoundEffect {
	SideChain?: Sound | SoundGroup;
}

interface ContentProvider extends Instance {
	PreloadAsync(
		this: this,
		contentIdList: Array<Instance>,
		callback?: (contentId: string, status: Enum.AssetFetchStatus) => void,
	): void;
}

/** @rbxts client */
interface ContextActionService extends Instance {
	BindAction(
		this: this,
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;

	BindActionAtPriority(
		this: this,
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		priorityLevel: number,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;
	GetButton(this: this, actionName: string): ImageButton | undefined;
	GetAllBoundActionInfo(this: this): Map<string, BoundActionInfo>;
	GetBoundActionInfo(this: this, actionName: string): BoundActionInfo;
}

interface DataModel extends ServiceProvider<Services> {
	readonly Workspace: Workspace;
	BindToClose(this: this, callback: () => void): void;
}

interface DataStorePages extends Pages<{ key: string; value: unknown }> {}

/** @rbxts server */
interface DataStoreService extends Instance {
	GetDataStore(this: this, name: string, scope?: string): GlobalDataStore;
	GetGlobalDataStore(this: this): GlobalDataStore;
	GetOrderedDataStore(this: this, name: string, scope?: string): OrderedDataStore;
}

interface Dialog extends Instance {
	readonly DialogChoiceSelected: RBXScriptSignal<(player: Player, dialogChoice: Dialog) => void>;
	GetCurrentPlayers(this: this): Array<Player>;
}

interface Dragger extends Instance {
	MouseDown(this: this, mousePart: BasePart, pointOnMousePart: Vector3, parts: Array<BasePart>): void;
}

interface FriendPages
	extends Pages<{ AvatarFinal: boolean; AvatarUri: string; Id: number; Username: string; IsOnline: boolean }> {}

interface GamePassService extends Instance {
	/** This item is deprecated. Do not use it for new work. */
	PlayerHasPass(this: this, player: Player, gamePassId: number): boolean;
}

interface GenericSettings<S = unknown> extends ServiceProvider<S> {}

/** @rbxts server */
interface GlobalDataStore extends Instance {
	GetAsync<T>(this: this, key: string): T | undefined;
	IncrementAsync(this: this, key: string, delta?: number): number;
	RemoveAsync<T>(this: this, key: string): T | undefined;
	SetAsync(this: this, key: string, value?: any): void;
	UpdateAsync<O, R>(
		this: this,
		key: string,
		transformFunction: (oldValue: O | undefined) => R,
	): R extends undefined ? O | undefined : R;
}

interface GroupService extends Instance {
	GetAlliesAsync(this: this, groupId: number): StandardPages<GroupInfo>;
	GetEnemiesAsync(this: this, groupId: number): StandardPages<GroupInfo>;
	GetGroupInfoAsync(this: this, groupId: number): GroupInfo;
	GetGroupsAsync(this: this, userId: number): Array<GetGroupsAsyncResult>;
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
		this: this,
		endPosition: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;

	TweenSize(
		this: this,
		endSize: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;

	TweenSizeAndPosition(
		this: this,
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
	AddSelectionParent(this: this, selectionName: string, selectionParent: GuiObject): void;
	AddSelectionTuple(this: this, selectionName: string, selections: Array<GuiObject>): void;
	InspectPlayerFromHumanoidDescription(this: this, humanoidDescription: HumanoidDescription, name: string): void;
	GetGuiInset(this: this): LuaTuple<[Vector2, Vector2]>;
}

interface HttpService extends Instance {
	/** @rbxts server */
	GetAsync(this: this, url: string, nocache?: boolean, headers?: HttpHeaders): string;

	/** @rbxts server */
	PostAsync(
		this: this,
		url: string,
		data: string,
		content_type?: CastsToEnum<Enum.HttpContentType>,
		compress?: boolean,
		headers?: HttpHeaders,
	): string;

	/** @rbxts server */
	RequestAsync(this: this, requestOptions: RequestAsyncRequest): RequestAsyncResponse;

	JSONDecode<T>(this: this, input: string): T;
}

interface Humanoid extends Instance {
	readonly AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	readonly Seated: RBXScriptSignal<(active: boolean, currentSeatPart: Seat | VehicleSeat) => void>;
	readonly Touched: RBXScriptSignal<(touchingPart: BasePart, humanoidPart: BasePart) => void>;
	GetAppliedDescription(this: this): HumanoidDescription;
	GetPlayingAnimationTracks(this: this): Array<AnimationTrack>;
	LoadAnimation(this: this, animation: Animation): AnimationTrack;
	GetAccessories(this: this): Array<Accessory>;
}

interface HumanoidDescription extends Instance {
	GetEmotes(this: this): EmoteDictionary;
	GetEquippedEmotes(this: this): EquippedEmotes;
	SetEmotes(this: this, emotes: EmoteDictionary): void;
	SetEquippedEmotes(this: this, equippedEmotes: EquippedEmotes): void;
	readonly EmotesChanged: RBXScriptSignal<(newEmotes: EmoteDictionary) => void>;
	readonly EquippedEmotesChanged: RBXScriptSignal<(newEquippedEmotes: EquippedEmotes) => void>;
}

interface InsertService extends Instance {
	LoadAsset(this: this, assetId: number): Model;
	LoadAssetVersion(this: this, assetVersionId: number): Model;
	GetBaseSets(this: this): Array<SetInfo>;
	GetCollection(this: this, categoryId: number): Array<CollectionInfo>;
	GetFreeDecals(this: this, searchText: string, pageNum: number): [Array<FreeSearchResult>];
	GetFreeModels(this: this, searchText: string, pageNum: number): [Array<FreeSearchResult>];
	GetUserSets(this: this, userId: number): Array<SetInfo>;
}

interface Instance {
	Clone(this: this): this;
	/** `Instance.Changed` has been intentionally excluded from the roblox-ts type system to maintain soundness with the ValueBase objects.
	 * Please intersect your type with the `ChangedSignal` global type to unsafely access the `Instance.Changed` event.
	 * @example
	 * function f(p: Part) {
	 * 	(p as Part & ChangedSignal).Changed.Connect(changedPropertyName => {})
	 * }
	 */
	readonly Changed: unknown;
	GetChildren(this: this): Array<Instance>;
	GetDescendants(this: this): Array<Instance>;

	FindFirstChild(this: this, childName: string | number, recursive?: boolean): Instance | undefined;

	WaitForChild(this: this, childName: string | number): Instance;
	WaitForChild(this: this, childName: string | number, timeOut: number): Instance | undefined;

	IsA<T extends keyof Instances>(this: this, className: T): this is Instances[T];

	FindFirstAncestorWhichIsA<T extends keyof Instances>(this: this, className: T): Instances[T] | undefined;

	FindFirstChildWhichIsA<T extends keyof Instances>(
		this: this,
		className: T,
		recursive?: boolean,
	): Instances[T] | undefined;

	FindFirstAncestorOfClass<T extends keyof StrictInstances>(this: this, className: T): StrictInstances[T] | undefined;

	FindFirstChildOfClass<T extends keyof StrictInstances>(this: this, className: T): StrictInstances[T] | undefined;

	GetPropertyChangedSignal(this: this, propertyName: InstanceProperties<this>): RBXScriptSignal<() => void>;
}

interface InventoryPages extends Pages<number> {}

interface JointInstance extends Instance {
	Part0?: BasePart;
	Part1?: BasePart;
}

interface JointsService extends Instance {
	SetJoinAfterMoveInstance(this: this, joinInstance: PVInstance): void;
	SetJoinAfterMoveTarget(this: this, joinTarget: PVInstance): void;
}

interface Keyframe extends Instance {
	GetPoses(this: this): Array<Pose>;
	AddMarker(this: this, marker: KeyframeMarker): void;
	RemoveMarker(this: this, marker: KeyframeMarker): void;
	GetMarkers(this: this): Array<KeyframeMarker>;
}

interface KeyframeSequence extends Instance {
	GetKeyframes(this: this): Array<Keyframe>;
}

interface KeyframeSequenceProvider extends Instance {
	GetAnimations(this: this, userId: number): InventoryPages;
	GetKeyframeSequenceAsync(this: this, assetId: string): KeyframeSequence;
}

interface LocalizationService extends Instance {
	GetTranslatorForPlayer(this: this, player: Player): Translator;
	GetTranslatorForLocaleAsync(this: this, locale: string): Translator;
	GetTranslatorForPlayerAsync(this: this, player: Player): Translator;
}

interface LocalizationTable extends Instance {
	GetEntries(this: this): Array<LocalizationEntry>;
	GetTranslator(this: this, localeId: string): Translator;
	SetEntries(this: this, entries: Array<LocalizationEntry>): void;
}

interface LogService extends Instance {
	GetLogHistory(this: this): Array<LogInfo>;
}

interface MarketplaceService extends Instance {
	ProcessReceipt: ((receiptInfo: ReceiptInfo) => Enum.ProductPurchaseDecision) | undefined;
	GetProductInfo(this: this, assetId: number, infoType: CastsToEnum<Enum.InfoType.Asset>): AssetProductInfo;
	GetProductInfo(this: this, assetId: number, infoType: CastsToEnum<Enum.InfoType.Product>): DeveloperProductInfo;
	GetProductInfo(this: this, assetId: number, infoType: CastsToEnum<Enum.InfoType.GamePass>): AssetProductInfo;
	GetProductInfo(
		this: this,
		assetId: number,
		infoType: CastsToEnum<Enum.InfoType>,
	): AssetProductInfo | DeveloperProductInfo;
	PromptProductPurchase(
		this: this,
		player: Player,
		productId: number,
		equipIfPurchased?: boolean,
		currencyType?: CastsToEnum<Enum.CurrencyType>,
	): void;
	PromptPurchase(
		this: this,
		player: Player,
		assetId: number,
		equipIfPurchased?: boolean,
		currencyType?: CastsToEnum<Enum.CurrencyType>,
	): void;
	GetDeveloperProductsAsync(
		this: this,
	): StandardPages<{
		Description: string;
		PriceInRobux: number;
		ProductId: number;
		IconImageAssetId: number;
		Name: string;
	}>;
}

/** @rbxts server */
interface MessagingService extends Instance {
	SubscribeAsync(this: this, topic: string, callback: (Data: any, Sent: number) => void): RBXScriptConnection;
}

interface Model extends PVInstance {
	PrimaryPart: BasePart | undefined;
	GetBoundingBox(this: this): LuaTuple<[CFrame, Vector3]>;
}

interface NetworkClient extends NetworkPeer {
	readonly ConnectionAccepted: RBXScriptSignal<(peer: string, replicator: ClientReplicator) => void>;
}

interface NetworkReplicator extends Instance {
	GetPlayer(this: this): Player;
}

interface ObjectValue extends ValueBase {
	readonly Changed: RBXScriptSignal<(value?: Instance) => void>;
}

/** @rbxts server */
interface OrderedDataStore extends GlobalDataStore {
	GetSortedAsync(
		this: this,
		ascending: boolean,
		pagesize: number,
		minValue?: number,
		maxValue?: number,
	): DataStorePages;
}

interface Pages<T = unknown> extends Instance {
	GetCurrentPage(this: this): Array<T>;
}

interface Path extends Instance {
	GetWaypoints(this: this): Array<PathWaypoint>;
}

interface PathfindingService extends Instance {
	CreatePath(this: this, agentParameters?: AgentParameters): Path;
	FindPathAsync(this: this, start: Vector3, finish: Vector3): Path;
}

interface PhysicsService extends Instance {
	GetCollisionGroups(this: this): Array<CollisionGroupInfo>;
}

interface Player extends Instance {
	readonly Name: string;
	readonly UserId: number;
	ReplicationFocus: BasePart | undefined;
	readonly Chatted: RBXScriptSignal<(message: string, recipient?: Player) => void>;
	/** ### TS Usage
	 * One should check the LocationType of each member of this array in order to verify which members are present. Should be compared to the LocationType const enum.
	 */
	GetFriendsOnline(this: this, maxFriends?: number): Array<FriendOnlineInfo>;
	/** @rbxts server */
	LoadCharacter(this: this): void;
	/** @rbxts server */
	LoadCharacterWithHumanoidDescription(this: this, humanoidDescription: HumanoidDescription): void;
	GetMouse(this: this): PlayerMouse;
	GetJoinData(this: this): PlayerJoinInfo;
}

interface PlayerGui extends BasePlayerGui {}

interface Players extends Instance {
	/** @rbxts client */
	readonly LocalPlayer: Player;
	GetPlayerByUserId(this: this, userId: number): Player | undefined;
	GetPlayerFromCharacter(this: this, character: Instance | undefined): Player | undefined;
	GetPlayers(this: this): Array<Player>;

	GetCharacterAppearanceAsync(this: this, userId: number): Model | undefined;
	GetCharacterAppearanceInfoAsync(this: this, userId: number): CharacterAppearanceInfo;
	GetFriendsAsync(this: this, userId: number): FriendPages;

	GetHumanoidDescriptionFromOutfitId(this: this, outfitId: number): HumanoidDescription;
	GetHumanoidDescriptionFromUserId(this: this, userId: number): HumanoidDescription;

	GetUserThumbnailAsync(
		this: this,
		userId: number,
		thumbnailType: CastsToEnum<Enum.ThumbnailType>,
		thumbnailSize: CastsToEnum<Enum.ThumbnailSize>,
	): LuaTuple<[string, boolean]>;
}

interface Plugin extends Instance {
	GetMouse(this: this): PluginMouse;
	CreateDockWidgetPluginGui(
		this: this,
		pluginGuiId: string,
		dockWidgetPluginGuiInfo: DockWidgetPluginGuiInfo,
	): DockWidgetPluginGui;
	CreatePluginAction(
		this: this,
		actionId: string,
		text: string,
		statusTip: string,
		iconName?: string,
		allowBinding?: boolean,
	): PluginAction;
	CreatePluginMenu(this: this, id: string, title?: string, icon?: string): PluginMenu;
	CreateToolbar(this: this, name: string): PluginToolbar;
	ImportFbxRig(this: this, isR15?: boolean): Model;
	Union(this: this, objects: Array<BasePart>): UnionOperation;
}

interface PluginManager extends Instance {
	CreatePlugin(this: this): Plugin;
}

interface PluginMenu extends Instance {
	AddAction(this: this, action: PluginAction): void;
	AddMenu(this: this, menu: PluginMenu): void;
	AddNewAction(this: this, actionId: string, text: string, icon?: string): PluginAction;
}

interface PluginToolbar extends Instance {
	CreateButton(this: this, buttonId: string, tooltip: string, iconname: string, text?: string): PluginToolbarButton;
}

interface PolicyService extends Instance {
	/** Returns policy information about a player which is based on geolocation, age group, and platform. */
	GetPolicyInfoForPlayerAsync(this: this, player: Player): PolicyInfo;
}

interface RemoteEvent<T extends Callback = Callback> extends Instance {
	readonly OnClientEvent: RBXScriptSignal<T>;
	/** The reason we DON'T allow you to use `Parameters<T>` here is because you can't trust data from the client. Please type-check and sanity-check all values received from the client. E.g. if you are expecting a number from the client, you should check whether the received value is indeed a number and you might also want to make sure it isn't a `NaN` value. See example code:
	 * ```ts
	 * (new Instance("RemoteEvent") as RemoteEvent<(num: number) => void>).OnServerEvent.Connect((plr, num) => {
	 *     if (typeIs(num, "number") && num === num) {
	 *         print(`Yay! Valid number: ${num}`);
	 *     } else {
	 *         print(`Bad argument received from ${plr.Name}! Exploit or bug?`);
	 *     }
	 * });
	 * ```
	 */
	readonly OnServerEvent: RBXScriptSignal<(player: Player, ...args: Array<unknown>) => void>;
	FireAllClients(this: this, ...args: Parameters<T>): void;
	FireClient(this: this, player: Player, ...args: Parameters<T>): void;
	FireServer(this: this, ...args: Parameters<T>): void;
}

interface RemoteFunction<T extends Callback = Callback> extends Instance {
	OnClientInvoke: T | undefined;
	/** The reason we DON'T allow you to use `Parameters<T>` here is because you can't trust data from the client. Please type-check and sanity-check all values received from the client. E.g. if you are expecting a number from the client, you should check whether the received value is indeed a number and you might also want to make sure it isn't a `NaN` value. See example code:
	 * ```ts
	 * (new Instance("RemoteFunction") as RemoteFunction<(num: number) => void>).OnServerInvoke = (plr, num) => {
	 *     if (typeIs(num, "number") && num === num) {
	 *         print(`Yay! Valid number: ${num}`);
	 *     } else {
	 *         print(`Bad argument received from ${plr.Name}! Exploit or bug?`);
	 *     }
	 * };
	 * ```
	 */
	OnServerInvoke: ((player: Player, ...args: Array<unknown>) => void) | undefined;
	InvokeClient(this: this, player: Player, ...args: Parameters<T>): unknown;
	InvokeServer(this: this, ...args: Parameters<T>): ReturnType<T>;
}

interface RunService extends Instance {
	BindToRenderStep(this: this, name: string, priority: number, callback: (deltaTime: number) => void): void;
}

interface ScriptDebugger extends Instance {
	GetGlobals(this: this): Map<string, any>;
	GetLocals(this: this, stackFrame?: number): Map<string, any>;
	GetUpvalues(this: this, stackFrame?: number): Map<string, any>;
}

/** @rbxts server */
interface ServerScriptService extends Instance {}

/** @rbxts server */
interface ServerStorage extends Instance {}

interface ServiceProvider<S = unknown> extends Instance {
	readonly ServiceAdded: RBXScriptSignal<(service: S[keyof S]) => void>;
	readonly ServiceRemoving: RBXScriptSignal<(service: S[keyof S]) => void>;
	FindService(this: ServiceProvider<S>, className: string): S[keyof S] | undefined;
	FindService(this: ServiceProvider<S>, className: string): Instance | undefined;
	GetService<T extends keyof S>(this: ServiceProvider<S>, className: T): S[T];
}

interface SocialService extends Instance {
	readonly GameInvitePromptClosed: RBXScriptSignal<(senderPlayer: Player, recipientIds: Array<number>) => void>;
}

interface SoundService extends Instance {
	GetListener(
		this: this,
	):
		| [Enum.ListenerType.Camera, undefined]
		| [Enum.ListenerType.CFrame, CFrame]
		| [Enum.ListenerType.ObjectCFrame, BasePart]
		| [Enum.ListenerType.ObjectPosition, BasePart];
	SetListener(this: this, listenerType: CastsToEnum<Enum.ListenerType.Camera>): void;
	SetListener(this: this, listenerType: CastsToEnum<Enum.ListenerType.CFrame>, cframe: CFrame): void;
	SetListener(this: this, listenerType: CastsToEnum<Enum.ListenerType.ObjectCFrame>, basePart: BasePart): void;
	SetListener(this: this, listenerType: CastsToEnum<Enum.ListenerType.ObjectPosition>, basePart: BasePart): void;
	PlayLocalSound(this: this, sound: Sound): void;
}

interface StandardPages<T = unknown> extends Pages<T> {}

interface StarterGui extends BasePlayerGui {
	GetCore<T extends keyof GettableCores>(this: this, parameter: T): GettableCores[T];
	SetCore<T extends keyof SettableCores>(this: this, parameter: T, option: SettableCores[T]): void;
}

interface Studio extends Instance {
	Theme: StudioTheme;
}

interface SurfaceGui extends LayerCollector {
	Adornee: BasePart | undefined;
}

interface Team extends Instance {
	GetPlayers(this: this): Array<Player>;
}

interface Teams extends Instance {
	GetTeams(this: this): Array<Team>;
}

interface TeleportService extends Instance {
	readonly LocalPlayerArrivedFromTeleport: RBXScriptSignal<(loadingGui: ScreenGui, dataTable?: unknown) => void>;

	readonly TeleportInitFailed: RBXScriptSignal<
		(player: Player, teleportResult: Enum.TeleportResult, errorMessage: string) => void
	>;
	/** @rbxts server */
	GetPlayerPlaceInstanceAsync(this: this, userId: number): LuaTuple<[boolean, string, number, string]>;
	/** @rbxts server */
	ReserveServer(this: this, placeId: number): LuaTuple<[string, string]>;
	/** @rbxts client */
	GetArrivingTeleportGui(this: this): ScreenGui | undefined;
	/** @rbxts client */
	GetLocalPlayerTeleportData(this: this): unknown;
	/** @rbxts client */
	GetTeleportSetting(this: this, setting: string): unknown;
	/** @rbxts client */
	SetTeleportGui(this: this, gui: ScreenGui): void;
	/** @rbxts client */
	SetTeleportSetting(this: this, setting: string, value: TeleportData): void;
	Teleport(
		this: this,
		placeId: number,
		player?: Player,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): void;

	TeleportToPrivateServer(
		this: this,
		placeId: number,
		reservedServerAccessCode: string,
		players: Array<Player>,
		spawnName?: string,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): void;

	TeleportPartyAsync(
		this: this,
		placeId: number,
		players: Array<Player>,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): string;

	TeleportToPlaceInstance(
		this: this,
		placeId: number,
		instanceId: string,
		player?: Player,
		spawnName?: string,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): void;

	TeleportToSpawnByName(
		this: this,
		placeId: number,
		spawnName: string,
		player?: Player,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): void;
}

interface Terrain extends BasePart {
	CopyRegion(this: this, region: Region3int16): TerrainRegion;
	PasteRegion(this: this, region: TerrainRegion, corner: Vector3int16, pasteEmptyCells: boolean): void;
	ReadVoxels(
		this: this,
		region: Region3,
		resolution: number,
	): LuaTuple<[ReadVoxelsArray<Enum.Material>, ReadVoxelsArray<number>]>;
	WriteVoxels(
		this: this,
		region: Region3,
		resolution: number,
		materials: Array<Array<Array<CastsToEnum<Enum.Material>>>>,
		occupancy: Array<Array<Array<number>>>,
	): void;
}

interface TextBox extends GuiObject {
	readonly FocusLost: RBXScriptSignal<(enterPressed: boolean, inputThatCausedFocusLoss: InputObject) => void>;
}

interface TextService extends Instance {
	/** @rbxts server */
	FilterStringAsync(
		this: this,
		stringToFilter: string,
		fromUserId: number,
		textContext?: CastsToEnum<Enum.TextFilterContext>,
	): TextFilterResult | undefined;
}

interface TweenService extends Instance {
	Create<T extends Instance>(
		this: this,
		instance: T,
		tweenInfo: TweenInfo,
		propertyTable: Partial<FilterMembers<T, Tweenable>>,
	): Tween;
}

interface UIPageLayout extends UIGridStyleLayout {
	readonly PageEnter: RBXScriptSignal<(page: GuiObject) => void>;
	readonly PageLeave: RBXScriptSignal<(page: GuiObject) => void>;
	readonly Stopped: RBXScriptSignal<(page: GuiObject) => void>;
	JumpTo(this: this, page: GuiObject): void;
}

/** @rbxts client */
interface UserInputService extends Instance {
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
	GetConnectedGamepads(this: this): Array<Enum.UserInputType>;
	GetDeviceRotation(this: this): LuaTuple<[InputObject, CFrame]>;
	GetGamepadState(this: this, gamepadNum: CastsToEnum<Enum.UserInputType>): Array<InputObject>;
	GetKeysPressed(this: this): Array<InputObject>;
	GetMouseButtonsPressed(this: this): Array<InputObject>;
	GetNavigationGamepads(this: this): Array<Enum.UserInputType>;
	GetSupportedGamepadKeyCodes(this: this, gamepadNum: CastsToEnum<Enum.UserInputType>): Array<Enum.KeyCode>;
	GetDeviceAcceleration(this: this): InputObject;
	GetDeviceGravity(this: this): InputObject;
	GetFocusedTextBox(this: this): TextBox | undefined;
}

interface UserSettings extends GenericSettings<{ UserGameSettings: UserGameSettings }> {}

/**
 * Used to hold a value.
 */
interface ValueBase extends Instance {
	/** The value this object holds. */
	Value: unknown;
	/**
	 * This event fires whenever the `Value` property is changed.
	 *
	 * This event can be used to track when a ValueBase `Value` changes and to track the different values that it may change to.
	 */
	readonly Changed: RBXScriptSignal<(value?: unknown) => void>;
}

interface Workspace extends WorldRoot {
	/** Do not use `Workspace.BreakJoints`. Use a for-loop instead */
	readonly BreakJoints: any;
	/** Do not use `Workspace.MakeJoints`. Use a for-loop instead */
	readonly MakeJoints: any;
	Terrain: Terrain;
}

interface WorldRoot extends Model {
	/**
	 * Casts a ray using an origin, direction, and optional `RaycastParams`. If it finds an eligible `BasePart` or `Terrain` cell, a `RaycastResult` is returned containing the results of the operation. If no `RaycastParams` object is provided, the defaults are used (all parts are considered and Terrain water is not ignored).
	 *
	 * Note that the length (magnitude) of the directional vector is important, as objects/terrain further away than its length will not be tested. If you’re using a `CFrame` to help create the ray components, consider using `CFrame.LookVector` as the directional vector and multiply it by the desired length as shown in the example below.
	 *
	 * For a demonstration of how raycasting works, see the Intro to Raycasting article.
	 *
	 * This method does NOT use a `Ray` object, but its origin and direction components can be borrowed from `Ray.Origin` and `Ray.Direction`.
	 */
	Raycast(this: this, origin: Vector3, direction: Vector3, raycastParams?: RaycastParams): RaycastResult | undefined;

	/** @deprecated in favor of WorldRoot.Raycast*/
	FindPartOnRay(
		this: this,
		ray: Ray,
		ignoreDescendantsInstance?: Instance,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	/** @deprecated in favor of WorldRoot.Raycast*/
	FindPartOnRayWithIgnoreList(
		this: this,
		ray: Ray,
		ignoreDescendantsTable: Array<Instance>,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	/** @deprecated in favor of WorldRoot.Raycast*/
	FindPartOnRayWithWhitelist(
		this: this,
		ray: Ray,
		whitelistDescendantsTable: Array<Instance>,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;

	FindPartsInRegion3(
		this: this,
		region: Region3,
		ignoreDescendantsInstance?: Instance,
		maxParts?: number,
	): Array<BasePart>;

	FindPartsInRegion3WithIgnoreList(
		this: this,
		region: Region3,
		ignoreDescendantsTable: Array<Instance>,
		maxParts?: number,
	): Array<BasePart>;

	FindPartsInRegion3WithWhiteList(
		this: this,
		region: Region3,
		whitelistDescendantsTable: Array<Instance>,
		maxParts?: number,
	): Array<BasePart>;
}
