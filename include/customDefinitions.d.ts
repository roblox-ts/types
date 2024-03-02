interface Actor extends Model {
	SendMessage(this: Actor, topic: string, ...message: Array<unknown>): void;
}

interface AnalyticsService extends Instance {
	FireCustomEvent(
		this: AnalyticsService,
		player: Player | undefined,
		eventCategory: string,
		customData?: unknown,
	): void;
	FireInGameEconomyEvent(
		this: AnalyticsService,
		player: Player | undefined,
		itemName: string,
		economyAction: CastsToEnum<Enum.AnalyticsEconomyAction>,
		itemCategory: string,
		amount: number,
		currency: string,
		location?: { [index: string]: string },
		customData?: unknown,
	): void;
	FireLogEvent(
		this: AnalyticsService,
		player: Player | undefined,
		logLevel: CastsToEnum<Enum.AnalyticsLogLevel>,
		message: string,
		debugInfo?: {
			errorCode?: string;
			stackTrace?: string;
		},
		customData?: unknown,
	): void;
	FirePlayerProgressionEvent(
		this: AnalyticsService,
		player: Player | undefined,
		category: string,
		progressionStatus: CastsToEnum<Enum.AnalyticsProgressionStatus>,
		location?: { [index: string]: string },
		statistics?: { [index: string]: number },
		customData?: unknown,
	): void;
}

interface AnimationController extends Instance {
	GetPlayingAnimationTracks(this: AnimationController): Array<AnimationTrack>;
}

interface AnimationTrack extends Instance {
	GetMarkerReachedSignal(this: AnimationTrack, name: string): RBXScriptSignal<(param?: string) => void>;
}

interface Animator extends Instance {
	ApplyJointVelocities(this: Animator, motors: Array<Motor6D>): void;
	GetPlayingAnimationTracks(this: Animator): Array<AnimationTrack>;
}

/** @server */
interface AssetService extends Instance {
	GetGamePlacesAsync(this: AssetService): StandardPages<{ Name: string; PlaceId: number }>;
	GetAssetIdsForPackage(this: AssetService, packageAssetId: number): Array<number>;
	GetBundleDetailsAsync(this: AssetService, bundleId: number): BundleInfo;
}

interface Attachment extends Instance {
	WorldCFrame: CFrame;
}

interface AudioAnalyzer extends Instance {
	/**
	 * Returns the frequency spectrum of the last audio buffer, as an array of numbers. The elements of the array are root-mean-square volume levels, evenly spaced from 0 hertz to 24,000 hertz.
	 * @returns number[512]
	 */
	GetSpectrum(this: AudioAnalyzer): Array<number>;
}

interface AvatarEditorService extends Instance {
	GetAvatarRules(this: AvatarEditorService): AvatarRules;
	GetBatchItemDetails(
		this: AvatarEditorService,
		itemIds: ReadonlyArray<number>,
		itemType: CastsToEnum<Enum.AvatarItemType.Asset>,
	): ReadonlyArray<AssetItemDetails>;
	GetBatchItemDetails(
		this: AvatarEditorService,
		itemIds: ReadonlyArray<number>,
		itemType: CastsToEnum<Enum.AvatarItemType.Bundle>,
	): ReadonlyArray<BundleItemDetails>;
	GetBatchItemDetails(
		this: AvatarEditorService,
		itemIds: ReadonlyArray<number>,
		itemType: CastsToEnum<Enum.AvatarItemType>,
	): ReadonlyArray<ItemDetails>;
	GetInventory(
		this: AvatarEditorService,
		assetTypes: ReadonlyArray<Enum.AvatarAssetType>,
	): InventoryPages<{
		AssetId: number;
		AssetType: string;
		Created: string;
		Name: string;
	}>;
	GetItemDetails(
		this: AvatarEditorService,
		itemId: number,
		itemType: CastsToEnum<Enum.AvatarItemType.Asset>,
	): AssetItemDetails;
	GetItemDetails(
		this: AvatarEditorService,
		itemId: number,
		itemType: CastsToEnum<Enum.AvatarItemType.Bundle>,
	): BundleItemDetails;
	GetItemDetails(this: AvatarEditorService, itemId: number, itemType: CastsToEnum<Enum.AvatarItemType>): ItemDetails;
	GetRecommendedAssets(
		this: AvatarEditorService,
		assetType: CastsToEnum<Enum.AvatarAssetType>,
		contextAssetId?: number,
	): ReadonlyArray<RecommendedAsset>;
	GetRecommendedBundles(this: AvatarEditorService, bundleId: number): ReadonlyArray<RecommendedBundle>;
	SearchCatalog(this: AvatarEditorService, searchParameters: CatalogSearchParams): CatalogPages;
}

/** @client */
interface CaptureService extends Instance {
	readonly CaptureSaved: RBXScriptSignal<(captureInfo: Record<string, unknown>) => void>;
	readonly UserCaptureSaved: RBXScriptSignal<(contentId: string) => void>;
	CaptureScreenshot(this: CaptureService, onCaptureReady: (captureContentId: string) => void): void;
	PromptSaveCapturesToGallery<T extends string>(
		this: CaptureService,
		contentIds: Array<T>,
		resultCallback: (results: Record<T, boolean>) => void,
	): void;
	PromptShareCapture(
		this: CaptureService,
		contentId: string,
		launchData: string,
		onAcceptedCallback: () => void,
		onDeniedCallback: () => void,
	): void;
}

interface CatalogPages extends Pages<SearchCatalogResult> {}

interface OutfitPages
	extends Pages<
		ReadonlyArray<{
			Id: number;
			Name: string;
			IsEditable: boolean;
		}>
	> {}

interface BadgeService extends Instance {
	/** @server */
	AwardBadge(this: BadgeService, userId: number, badgeId: number): boolean;
	/** @server */
	GetBadgeInfoAsync(this: BadgeService, badgeId: number): BadgeInfo;
	/** @server */
	UserHasBadgeAsync(this: BadgeService, userId: number, badgeId: number): boolean;
}

interface BasePart extends PVInstance {
	CustomPhysicalProperties: PhysicalProperties | undefined;
	readonly TouchEnded: RBXScriptSignal<(otherPart: BasePart) => void>;
	readonly Touched: RBXScriptSignal<(otherPart: BasePart) => void>;
	GetConnectedParts(this: BasePart, recursive?: boolean): Array<BasePart>;
	GetRootPart(this: BasePart): BasePart;
	GetJoints(this: BasePart): Array<Constraint | JointInstance>;
	GetTouchingParts(this: BasePart): Array<BasePart>;
	/** @server */
	SubtractAsync(
		this: BasePart,
		parts: Array<BasePart>,
		collisionfidelity?: CastsToEnum<Enum.CollisionFidelity>,
	): UnionOperation | undefined;
	/** @server */
	UnionAsync(
		this: BasePart,
		parts: Array<BasePart>,
		collisionfidelity?: CastsToEnum<Enum.CollisionFidelity>,
	): UnionOperation;
	/** @server */
	CanSetNetworkOwnership(this: BasePart): LuaTuple<[boolean, string | undefined]>;
	/** @server */
	GetNetworkOwner(this: BasePart): Player | undefined;
	/** @server */
	SetNetworkOwner(this: BasePart, playerInstance?: Player): void;
	/** @server */
	GetNetworkOwnershipAuto(this: BasePart): boolean;
	/** @server */
	SetNetworkOwnershipAuto(this: BasePart): void;
}

interface BasePlayerGui extends Instance {
	GetGuiObjectsAtPosition(this: BasePlayerGui, x: number, y: number): Array<GuiObject>;
}

interface BillboardGui extends LayerCollector {
	Adornee: PVInstance | Attachment | undefined;
	PlayerToHideFrom: Player | undefined;
}

interface BindableEvent<T extends Callback = Callback> extends Instance {
	readonly Event: RBXScriptSignal<T>;
	Fire(this: BindableEvent, ...args: Parameters<T>): void;
}

interface BindableFunction<T extends Callback = Callback> extends Instance {
	OnInvoke: T | undefined;
	Invoke(this: BindableFunction, ...args: Parameters<T>): ReturnType<T>;
}

interface Camera extends Instance {
	CameraSubject: Humanoid | BasePart | undefined;
	GetPartsObscuringTarget(this: Camera, castPoints: Array<Vector3>, ignoreList: Array<Instance>): Array<Instance>;
	WorldToScreenPoint(this: Camera, worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
	WorldToViewportPoint(this: Camera, worldPoint: Vector3): LuaTuple<[Vector3, boolean]>;
}

interface Chat extends Instance {
	readonly Chatted: RBXScriptSignal<(part: BasePart, message: string, color: Enum.ChatColor) => void>;
	FilterStringAsync(this: Chat, stringToFilter: string, playerFrom: Player, playerTo: Player): string;
	FilterStringForBroadcast(this: Chat, stringToFilter: string, playerFrom: Player): string;
}

interface CollectionService extends Instance {
	AddTag(this: CollectionService, instance: Instance, tag: string): void;
	AddTag(this: Instance, tag: string): void;
	GetInstanceAddedSignal(this: CollectionService, tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetInstanceRemovedSignal(this: CollectionService, tag: string): RBXScriptSignal<(instance: Instance) => void>;
	GetTagged(this: CollectionService, tag: string): Array<Instance>;
	GetTags(this: CollectionService, instance: Instance): Array<string>;
	GetTags(this: Instance): Array<string>;
	HasTag(this: CollectionService, instance: Instance, tag: string): boolean;
	HasTag(this: Instance, tag: string): boolean;
	RemoveTag(this: CollectionService, instance: Instance, tag: string): void;
	RemoveTag(this: Instance, tag: string): void;
}

interface CompressorSoundEffect extends SoundEffect {
	SideChain?: Sound | SoundGroup;
}

interface ContentProvider extends Instance {
	PreloadAsync(
		this: ContentProvider,
		contentIdList: Array<Instance | string>,
		callback?: (contentId: string, status: Enum.AssetFetchStatus) => void,
	): void;
}

/** @client */
interface ContextActionService extends Instance {
	BindAction(
		this: ContextActionService,
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;

	BindActionAtPriority(
		this: ContextActionService,
		actionName: string,
		functionToBind: (actionName: string, state: Enum.UserInputState, inputObject: InputObject) => void,
		createTouchButton: boolean,
		priorityLevel: number,
		...inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType>
	): void;
	GetButton(this: ContextActionService, actionName: string): ImageButton | undefined;
	GetAllBoundActionInfo(this: ContextActionService): Map<string, BoundActionInfo>;
	GetBoundActionInfo(this: ContextActionService, actionName: string): BoundActionInfo;
}

interface DataModel extends ServiceProvider<Services> {
	readonly Workspace: Workspace;
	BindToClose(this: DataModel, callback: () => void): void;
}

interface DataStore extends GlobalDataStore {
	GetAsync<T>(
		this: DataStore,
		key: string,
		options?: DataStoreGetOptions,
	): LuaTuple<[T | undefined, DataStoreKeyInfo]>;
	GetVersionAsync(
		this: DataStore,
		key: string,
		version: string,
	): LuaTuple<[value: unknown, keyInfo: DataStoreKeyInfo]>;
	IncrementAsync(
		this: DataStore,
		key: string,
		delta?: number,
		userIds?: Array<number>,
		options?: DataStoreIncrementOptions,
	): LuaTuple<[number, DataStoreKeyInfo]>;
	SetAsync(
		this: DataStore,
		key: string,
		value?: unknown,
		userIds?: Array<number>,
		options?: DataStoreSetOptions,
	): string;
	UpdateAsync<O, R>(
		this: DataStore,
		key: string,
		transformFunction: (
			oldValue: O | undefined,
			keyInfo: DataStoreKeyInfo | undefined,
		) => LuaTuple<[newValue: R | undefined, userIds?: Array<number>, metadata?: object]>,
	): LuaTuple<[newValue: R | undefined, keyInfo: DataStoreKeyInfo]>;
	RemoveAsync<T>(this: DataStore, key: string): LuaTuple<[T | undefined, DataStoreKeyInfo | undefined]>;
}

interface DataStorePages extends Pages<{ key: string; value: unknown }> {}

/** @server */
interface DataStoreService extends Instance {
	GetDataStore(this: DataStoreService, name: string, scope?: string, options?: DataStoreOptions): DataStore;
	GetGlobalDataStore(this: DataStoreService): DataStore;
	GetOrderedDataStore(this: DataStoreService, name: string, scope?: string): OrderedDataStore;
}

interface DataStoreVersionPages extends Pages<DataStoreObjectVersionInfo> {}

interface Dialog extends Instance {
	readonly DialogChoiceSelected: RBXScriptSignal<(player: Player, dialogChoice: Dialog) => void>;
	GetCurrentPlayers(this: Dialog): Array<Player>;
}

interface Dragger extends Instance {
	MouseDown(this: Dragger, mousePart: BasePart, pointOnMousePart: Vector3, parts: Array<BasePart>): void;
}

interface EmotesPages extends InventoryPages {}

interface FriendPages
	extends Pages<{ AvatarFinal: boolean; AvatarUri: string; Id: number; Username: string; IsOnline: boolean }> {}

interface GamepadService extends Instance {
	EnableGamepadCursor(this: GamepadService, guiObject: GuiObject | undefined): void;
}

interface GamePassService extends Instance {
	/** This item is deprecated. Do not use it for new work. */
	PlayerHasPass(this: GamePassService, player: Player, gamePassId: number): boolean;
}

interface GenericSettings<S = unknown> extends ServiceProvider<S> {}

/** @server */
interface GlobalDataStore extends Instance {
	readonly GetAsync: unknown;
	readonly IncrementAsync: unknown;
	readonly RemoveAsync: unknown;
	readonly SetAsync: unknown;
	readonly UpdateAsync: unknown;
}

interface GroupService extends Instance {
	GetAlliesAsync(this: GroupService, groupId: number): StandardPages<GroupInfo>;
	GetEnemiesAsync(this: GroupService, groupId: number): StandardPages<GroupInfo>;
	GetGroupInfoAsync(this: GroupService, groupId: number): GroupInfo;
	GetGroupsAsync(this: GroupService, userId: number): Array<GetGroupsAsyncResult>;
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
		this: GuiObject,
		endPosition: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;
	TweenSize(
		this: GuiObject,
		endSize: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;
	TweenSizeAndPosition(
		this: GuiObject,
		endSize: UDim2,
		endPosition: UDim2,
		easingDirection?: CastsToEnum<Enum.EasingDirection>,
		easingStyle?: CastsToEnum<Enum.EasingStyle>,
		time?: number,
		override?: boolean,
		callback?: (finishedTween: Enum.TweenStatus) => void,
	): boolean;
}

/** @client */
interface GuiService extends Instance {
	AddSelectionParent(this: GuiService, selectionName: string, selectionParent: GuiObject): void;
	AddSelectionTuple(this: GuiService, selectionName: string, selections: Array<GuiObject>): void;
	InspectPlayerFromHumanoidDescription(
		this: GuiService,
		humanoidDescription: HumanoidDescription,
		name: string,
	): void;
	GetGuiInset(this: GuiService): LuaTuple<[Vector2, Vector2]>;
	Select(this: GuiService, selectionParent: Instance): void;
}

interface HapticService extends Instance {
	SetMotor(
		this: HapticService,
		inputType: CastsToEnum<Enum.UserInputType>,
		motor: CastsToEnum<Enum.VibrationMotor>,
		vibration: number,
	): void;
}

interface HttpService extends Instance {
	/** @server */
	GetAsync(this: HttpService, url: string, nocache?: boolean, headers?: HttpHeaders): string;
	/** @server */
	PostAsync(
		this: HttpService,
		url: string,
		data: string,
		content_type?: CastsToEnum<Enum.HttpContentType>,
		compress?: boolean,
		headers?: HttpHeaders,
	): string;
	/** @server */
	RequestAsync(this: HttpService, requestOptions: RequestAsyncRequest): RequestAsyncResponse;
}

interface Humanoid extends Instance {
	readonly AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	readonly Seated: RBXScriptSignal<(active: boolean, currentSeatPart: Seat | VehicleSeat | undefined) => void>;
	readonly Touched: RBXScriptSignal<(touchingPart: BasePart, humanoidPart: BasePart) => void>;
	GetAppliedDescription(this: Humanoid): HumanoidDescription;
	GetPlayingAnimationTracks(this: Humanoid): Array<AnimationTrack>;
	LoadAnimation(this: Humanoid, animation: Animation): AnimationTrack;
	GetAccessories(this: Humanoid): Array<Accessory>;
}

interface HumanoidDescription extends Instance {
	GetAccessories(this: HumanoidDescription, includeRigidAccessories: false): Array<LayeredAccessoryInfo>;
	GetAccessories(this: HumanoidDescription, includeRigidAccessories: boolean): Array<AccessoryInfo>;
	GetEmotes(this: HumanoidDescription): EmoteDictionary;
	GetEquippedEmotes(this: HumanoidDescription): EquippedEmotes;
	SetEmotes(this: HumanoidDescription, emotes: EmoteDictionary): void;
	SetEquippedEmotes(this: HumanoidDescription, equippedEmotes: EquippedEmotes): void;
	readonly EmotesChanged: RBXScriptSignal<(newEmotes: EmoteDictionary) => void>;
	readonly EquippedEmotesChanged: RBXScriptSignal<(newEquippedEmotes: EquippedEmotes) => void>;
}

interface InsertService extends Instance {
	LoadAsset(this: InsertService, assetId: number): Model;
	LoadAssetVersion(this: InsertService, assetVersionId: number): Model;
	GetBaseSets(this: InsertService): Array<SetInfo>;
	GetCollection(this: InsertService, categoryId: number): Array<CollectionInfo>;
	GetFreeDecals(this: InsertService, searchText: string, pageNum: number): [Array<FreeSearchResult>];
	GetFreeModels(this: InsertService, searchText: string, pageNum: number): [Array<FreeSearchResult>];
	GetUserSets(this: InsertService, userId: number): Array<SetInfo>;
}

interface Instance {
	/**
	 * **Clone** creates a copy of an object and all of its descendants, ignoring all objects that are not [Archivable](https://developer.roblox.com/en-us/api-reference/property/Instance/Archivable). The copy of the root object is returned by this function and its [Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) is set to nil.
	 *
	 * If a reference property such as [ObjectValue.Value](https://developer.roblox.com/en-us/api-reference/property/ObjectValue/Value) is set in a cloned object, the value of the copy's property depends on original's value:
	 *
	 * *   If a reference property refers to an object that was **also** cloned, an _internal reference_, the copy will refer to the copy.
	 * *   If a reference property refers to an object that was **not** cloned, an _external reference_, the same value is maintained in the copy.
	 *
	 * This function is typically used to create models that can be regenerated. First, get a reference to the original object. Then, make a copy of the object and insert the copy by setting its [Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) to the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) or one of its descendants. Finally, when it's time to regenerate the model, [Destroy](https://developer.roblox.com/en-us/api-reference/function/Instance/Destroy) the copy and clone a new one from the original like before.
	 *
	 * Clone will return nil if the root object has Archivable set to false.
	 */
	Clone<T extends Instance>(this: T): T;
	/** `Instance.Changed` has been intentionally excluded from the roblox-ts type system to maintain soundness with the ValueBase objects.
	 * Please intersect your type with the `ChangedSignal` global type to unsafely access the `Instance.Changed` event.
	 * @example
	 * function f(p: Part) {
	 * 	(p as Part & ChangedSignal).Changed.Connect(changedPropertyName => {})
	 * }
	 */
	readonly Changed: unknown;
	GetActor(this: Instance): Actor | undefined;
	GetChildren(this: Instance): Array<Instance>;
	GetDescendants(this: Instance): Array<Instance>;
	FindFirstChild(this: Instance, childName: string | number, recursive?: boolean): Instance | undefined;
	WaitForChild(this: Instance, childName: string | number): Instance;
	WaitForChild(this: Instance, childName: string | number, timeOut: number): Instance | undefined;
	IsA<T extends keyof Instances>(this: Instance, className: T): this is Instances[T];
	FindFirstAncestorWhichIsA<T extends keyof Instances>(this: Instance, className: T): Instances[T] | undefined;
	FindFirstChildWhichIsA<T extends keyof Instances>(
		this: Instance,
		className: T,
		recursive?: boolean,
	): Instances[T] | undefined;
	FindFirstAncestorOfClass<T extends keyof Instances>(this: Instance, className: T): Instances[T] | undefined;
	FindFirstChildOfClass<T extends keyof Instances>(this: Instance, className: T): Instances[T] | undefined;
	GetPropertyChangedSignal<T extends Instance>(
		this: T,
		propertyName: InstancePropertyNames<T>,
	): RBXScriptSignal<() => void>;
	GetAttribute(this: Instance, attribute: string): AttributeValue | undefined;
	SetAttribute(this: Instance, attribute: string, value: AttributeValue | undefined): void;
	GetAttributes(this: Instance): Map<string, AttributeValue>;
	readonly AncestryChanged: RBXScriptSignal<(child: Instance, parent: Instance | undefined) => void>;
}

interface InventoryPages<T = unknown> extends Pages<T> {}

interface JointInstance extends Instance {
	Part0?: BasePart;
	Part1?: BasePart;
}

interface JointsService extends Instance {
	SetJoinAfterMoveInstance(this: JointsService, joinInstance: PVInstance): void;
	SetJoinAfterMoveTarget(this: JointsService, joinTarget: PVInstance): void;
}

interface Keyframe extends Instance {
	GetPoses(this: Keyframe): Array<Pose>;
	AddMarker(this: Keyframe, marker: KeyframeMarker): void;
	RemoveMarker(this: Keyframe, marker: KeyframeMarker): void;
	GetMarkers(this: Keyframe): Array<KeyframeMarker>;
}

interface KeyframeSequence extends AnimationClip {
	GetKeyframes(this: KeyframeSequence): Array<Keyframe>;
}

interface KeyframeSequenceProvider extends Instance {
	GetAnimations(this: KeyframeSequenceProvider, userId: number): InventoryPages<number>;
	GetKeyframeSequenceAsync(this: KeyframeSequenceProvider, assetId: string): KeyframeSequence;
}

interface LocalizationService extends Instance {
	GetTranslatorForPlayer(this: LocalizationService, player: Player): Translator;
	GetTranslatorForLocaleAsync(this: LocalizationService, locale: string): Translator;
	GetTranslatorForPlayerAsync(this: LocalizationService, player: Player): Translator;
}

interface LocalizationTable extends Instance {
	GetEntries(this: LocalizationTable): Array<LocalizationEntry>;
	GetTranslator(this: LocalizationTable, localeId: string): Translator;
	SetEntries(this: LocalizationTable, entries: Array<LocalizationEntry>): void;
}

interface LogService extends Instance {
	GetLogHistory(this: LogService): Array<LogInfo>;
}

interface MarketplaceService extends Instance {
	ProcessReceipt: ((receiptInfo: ReceiptInfo) => Enum.ProductPurchaseDecision) | undefined;
	GetProductInfo(this: MarketplaceService, id: number): AssetProductInfo;
	GetProductInfo(this: MarketplaceService, id: number, infoType: CastsToEnum<Enum.InfoType.Asset>): AssetProductInfo;
	GetProductInfo(this: MarketplaceService, id: number, infoType: CastsToEnum<Enum.InfoType.Bundle>): BundleInfo;
	GetProductInfo(
		this: MarketplaceService,
		id: number,
		infoType: CastsToEnum<Enum.InfoType.GamePass>,
	): GamePassProductInfo;
	GetProductInfo(
		this: MarketplaceService,
		id: number,
		infoType: CastsToEnum<Enum.InfoType.Product>,
	): DeveloperProductInfo;
	GetProductInfo(
		this: MarketplaceService,
		id: number,
		infoType: CastsToEnum<Enum.InfoType.Subscription>,
	): SubscriptionProductInfo;
	GetProductInfo(
		this: MarketplaceService,
		id: number,
		infoType?: CastsToEnum<Enum.InfoType>,
	): AssetProductInfo | BundleInfo | GamePassProductInfo | DeveloperProductInfo | SubscriptionProductInfo;
	PromptProductPurchase(
		this: MarketplaceService,
		player: Player,
		productId: number,
		equipIfPurchased?: boolean,
		currencyType?: CastsToEnum<Enum.CurrencyType>,
	): void;
	PromptPurchase(
		this: MarketplaceService,
		player: Player,
		assetId: number,
		equipIfPurchased?: boolean,
		currencyType?: CastsToEnum<Enum.CurrencyType>,
	): void;
	GetDeveloperProductsAsync(this: MarketplaceService): StandardPages<{
		Description: string;
		PriceInRobux: number;
		ProductId: number;
		IconImageAssetId: number;
		Name: string;
	}>;
}

/** @server */
interface MemoryStoreQueue extends Instance {
	ReadAsync(
		this: MemoryStoreQueue,
		count: number,
		allOrNothing?: boolean,
		waitTimeout?: number,
	): LuaTuple<[items: Array<unknown>, id: string]>;
}

/** @server */
interface MemoryStoreSortedMap extends Instance {
	UpdateAsync<T>(
		this: MemoryStoreSortedMap,
		key: string,
		transformFunction: (value: unknown) => T,
		expiration: number,
	): T;
	SetAsync(
		this: MemoryStoreSortedMap,
		key: string,
		value: unknown,
		expiration: number,
		sortKey?: string | number,
	): boolean;
}

/** @server */
interface MessagingService extends Instance {
	SubscribeAsync(
		this: MessagingService,
		topic: string,
		callback: (message: { Data: unknown; Sent: number }) => void,
	): RBXScriptConnection;
}

interface Model extends PVInstance {
	PrimaryPart: BasePart | undefined;
}

interface NetworkClient extends NetworkPeer {
	readonly ConnectionAccepted: RBXScriptSignal<(peer: string, replicator: ClientReplicator) => void>;
}

interface NetworkReplicator extends Instance {
	GetPlayer(this: NetworkReplicator): Player;
}

interface ObjectValue extends ValueBase {
	readonly Changed: RBXScriptSignal<(value?: Instance) => void>;
}

/** @server */
interface OrderedDataStore extends GlobalDataStore {
	GetAsync(this: OrderedDataStore, key: string): number | undefined;
	GetSortedAsync(
		this: OrderedDataStore,
		ascending: boolean,
		pagesize: number,
		minValue?: number,
		maxValue?: number,
	): DataStorePages;
	IncrementAsync(this: OrderedDataStore, key: string, delta?: number): number;
	RemoveAsync(this: OrderedDataStore, key: string): number | undefined;
	SetAsync(this: OrderedDataStore, key: string, value?: unknown): void;
	UpdateAsync(
		this: OrderedDataStore,
		key: string,
		transformFunction: (oldValue: number | undefined) => number | undefined,
	): number | undefined;
}

interface Pages<T = unknown> extends Instance {
	GetCurrentPage(this: Pages): Array<T>;
}

interface Path extends Instance {
	GetWaypoints(this: Path): Array<PathWaypoint>;
}

interface PathfindingService extends Instance {
	CreatePath(this: PathfindingService, agentParameters?: AgentParameters): Path;
	FindPathAsync(this: PathfindingService, start: Vector3, finish: Vector3): Path;
}

interface PhysicsService extends Instance {
	GetCollisionGroups(this: PhysicsService): Array<CollisionGroupInfo & { id: number }>;
	GetRegisteredCollisionGroups(this: PhysicsService): Array<CollisionGroupInfo>;
}

interface Player extends Instance {
	readonly Name: string;
	readonly UserId: number;
	ReplicationFocus: BasePart | undefined;
	readonly Chatted: RBXScriptSignal<(message: string, recipient?: Player) => void>;
	/** ### TS Usage
	 * One should check the LocationType of each member of this array in order to verify which members are present. Should be compared to the LocationType const enum.
	 */
	GetFriendsOnline(this: Player, maxFriends?: number): Array<FriendOnlineInfo>;
	/** @server */
	LoadCharacter(this: Player): void;
	/** @server */
	LoadCharacterWithHumanoidDescription(this: Player, humanoidDescription: HumanoidDescription): void;
	GetMouse(this: Player): PlayerMouse;
	GetJoinData(this: Player): PlayerJoinInfo;
}

interface PlayerGui extends BasePlayerGui {}

interface Players extends Instance {
	/** @client */
	readonly LocalPlayer: Player;
	GetPlayerByUserId(this: Players, userId: number): Player | undefined;
	GetPlayerFromCharacter(this: Players, character: Instance | undefined): Player | undefined;
	GetPlayers(this: Players): Array<Player>;
	GetHumanoidDescriptionFromOutfitId(this: Players, outfitId: number): HumanoidDescription;
	GetHumanoidDescriptionFromUserId(this: Players, userId: number): HumanoidDescription;
	CreateHumanoidModelFromDescription(
		this: Players,
		description: HumanoidDescription,
		rigType: CastsToEnum<Enum.HumanoidRigType>,
		assetTypeVerification?: CastsToEnum<Enum.AssetTypeVerification>,
	): Model;
	CreateHumanoidModelFromUserId(this: Players, userId: number): Model;
	GetCharacterAppearanceAsync(this: Players, userId: number): Model;
	GetCharacterAppearanceInfoAsync(this: Players, userId: number): CharacterAppearanceInfo;
	GetFriendsAsync(this: Players, userId: number): FriendPages;
	GetUserThumbnailAsync(
		this: Players,
		userId: number,
		thumbnailType: CastsToEnum<Enum.ThumbnailType>,
		thumbnailSize: CastsToEnum<Enum.ThumbnailSize>,
	): LuaTuple<[string, boolean]>;
}

interface Plugin extends Instance {
	GetMouse(this: Plugin): PluginMouse;
	CreateDockWidgetPluginGui(
		this: Plugin,
		pluginGuiId: string,
		dockWidgetPluginGuiInfo: DockWidgetPluginGuiInfo,
	): DockWidgetPluginGui;
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
	ImportFbxRig(this: Plugin, isR15?: boolean): Model;
	Union(this: Plugin, objects: Array<BasePart>): UnionOperation;
}

interface PluginManager extends Instance {
	CreatePlugin(this: PluginManager): Plugin;
}

interface PluginMenu extends Instance {
	AddAction(this: PluginMenu, action: PluginAction): void;
	AddMenu(this: PluginMenu, menu: PluginMenu): void;
	AddNewAction(this: PluginMenu, actionId: string, text: string, icon?: string): PluginAction;
}

interface PluginToolbar extends Instance {
	CreateButton(
		this: PluginToolbar,
		buttonId: string,
		tooltip: string,
		iconname: string,
		text?: string,
	): PluginToolbarButton;
}

interface PolicyService extends Instance {
	/** Returns policy information about a player which is based on geolocation, age group, and platform. */
	GetPolicyInfoForPlayerAsync(this: PolicyService, player: Player): PolicyInfo;
}

interface RemoteEvent<T extends Callback = Callback> extends BaseRemoteEvent {
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
	FireAllClients(this: RemoteEvent, ...args: Parameters<T>): void;
	FireClient(this: RemoteEvent, player: Player, ...args: Parameters<T>): void;
	FireServer(this: RemoteEvent, ...args: Parameters<T>): void;
}

interface UnreliableRemoteEvent<T extends Callback = Callback> extends BaseRemoteEvent {
	readonly OnClientEvent: RBXScriptSignal<T>;
	/** The reason we DON'T allow you to use `Parameters<T>` here is because you can't trust data from the client. Please type-check and sanity-check all values received from the client. E.g. if you are expecting a number from the client, you should check whether the received value is indeed a number and you might also want to make sure it isn't a `NaN` value. See example code:
	 * ```ts
	 * (new Instance("UnreliableRemoteEvent") as UnreliableRemoteEvent<(num: number) => void>).OnServerEvent.Connect((plr, num) => {
	 *     if (typeIs(num, "number") && num === num) {
	 *         print(`Yay! Valid number: ${num}`);
	 *     } else {
	 *         print(`Bad argument received from ${plr.Name}! Exploit or bug?`);
	 *     }
	 * });
	 * ```
	 */
	readonly OnServerEvent: RBXScriptSignal<(player: Player, ...args: Array<unknown>) => void>;
	FireAllClients(this: UnreliableRemoteEvent, ...args: Parameters<T>): void;
	FireClient(this: UnreliableRemoteEvent, player: Player, ...args: Parameters<T>): void;
	FireServer(this: UnreliableRemoteEvent, ...args: Parameters<T>): void;
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
	InvokeClient(this: RemoteFunction, player: Player, ...args: Parameters<T>): unknown;
	InvokeServer(this: RemoteFunction, ...args: Parameters<T>): ReturnType<T>;
}

interface RunService extends Instance {
	BindToRenderStep(this: RunService, name: string, priority: number, callback: (deltaTime: number) => void): void;
}

interface ScriptContext extends Instance {
	/**
	 * `script` will be `undefined` if the error originates from either the command bar or the F9 console
	 */
	readonly Error: RBXScriptSignal<(message: string, stackTrace: string, script?: LuaSourceContainer) => void>;
}

interface ScriptDebugger extends Instance {
	GetGlobals(this: ScriptDebugger, stackFrame?: number): Map<string, unknown>;
	GetLocals(this: ScriptDebugger, stackFrame?: number): Map<string, unknown>;
	GetUpvalues(this: ScriptDebugger, stackFrame?: number): Map<string, unknown>;
}

/** @server */
interface ServerScriptService extends Instance {}

/** @server */
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
		this: SoundService,
	): LuaTuple<
		| [Enum.ListenerType.Camera, undefined]
		| [Enum.ListenerType.CFrame, CFrame]
		| [Enum.ListenerType.ObjectCFrame, BasePart]
		| [Enum.ListenerType.ObjectPosition, BasePart]
	>;
	SetListener(this: SoundService, listenerType: CastsToEnum<Enum.ListenerType.Camera>): void;
	SetListener(this: SoundService, listenerType: CastsToEnum<Enum.ListenerType.CFrame>, cframe: CFrame): void;
	SetListener(
		this: SoundService,
		listenerType: CastsToEnum<Enum.ListenerType.ObjectCFrame>,
		basePart: BasePart,
	): void;
	SetListener(
		this: SoundService,
		listenerType: CastsToEnum<Enum.ListenerType.ObjectPosition>,
		basePart: BasePart,
	): void;
	PlayLocalSound(this: SoundService, sound: Sound): void;
}

interface StandardPages<T = unknown> extends Pages<T> {}

interface StarterGui extends BasePlayerGui {
	GetCore<T extends keyof GettableCores>(this: StarterGui, parameter: T): GettableCores[T];
	SetCore<T extends keyof SettableCores>(this: StarterGui, parameter: T, option: SettableCores[T]): void;
}

interface Studio extends Instance {
	Theme: StudioTheme;
}

interface StudioService extends Instance {
	readonly ActiveScript: LuaSourceContainer | undefined;
}

interface SurfaceGuiBase extends LayerCollector {
	Adornee: BasePart | undefined;
}

interface Team extends Instance {
	GetPlayers(this: Team): Array<Player>;
}

interface Teams extends Instance {
	GetTeams(this: Teams): Array<Team>;
}

interface TeleportService extends Instance {
	readonly LocalPlayerArrivedFromTeleport: RBXScriptSignal<(loadingGui: ScreenGui, dataTable?: unknown) => void>;
	readonly TeleportInitFailed: RBXScriptSignal<
		(
			player: Player,
			teleportResult: Enum.TeleportResult,
			errorMessage: string,
			placeId: number,
			teleportOptions: TeleportOptions,
		) => void
	>;
	/** @server */
	GetPlayerPlaceInstanceAsync(this: TeleportService, userId: number): LuaTuple<[boolean, string, number, string]>;
	/** @server */
	ReserveServer(this: TeleportService, placeId: number): LuaTuple<[string, string]>;
	/** @client */
	GetArrivingTeleportGui(this: TeleportService): ScreenGui | undefined;
	/** @client */
	GetLocalPlayerTeleportData(this: TeleportService): unknown;
	/** @client */
	GetTeleportSetting(this: TeleportService, setting: string): unknown;
	/** @client */
	SetTeleportGui(this: TeleportService, gui: ScreenGui): void;
	/** @client */
	SetTeleportSetting(this: TeleportService, setting: string, value: TeleportData): void;
	/** @server */
	TeleportAsync(
		this: TeleportService,
		placeId: number,
		players: ReadonlyArray<Player>,
		options?: TeleportOptions,
	): TeleportAsyncResult;
	Teleport(
		this: TeleportService,
		placeId: number,
		player?: Player,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): void;
	TeleportToPrivateServer(
		this: TeleportService,
		placeId: number,
		reservedServerAccessCode: string,
		players: Array<Player>,
		spawnName?: string,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): void;
	TeleportPartyAsync(
		this: TeleportService,
		placeId: number,
		players: Array<Player>,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): string;
	TeleportToPlaceInstance(
		this: TeleportService,
		placeId: number,
		instanceId: string,
		player?: Player,
		spawnName?: string,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): void;
	TeleportToSpawnByName(
		this: TeleportService,
		placeId: number,
		spawnName: string,
		player?: Player,
		teleportData?: TeleportData,
		customLoadingScreen?: ScreenGui,
	): void;
}

interface Terrain extends BasePart {
	ReadVoxels(
		this: Terrain,
		region: Region3,
		resolution: number,
	): LuaTuple<[ReadVoxelsArray<Enum.Material>, ReadVoxelsArray<number>]>;
	WriteVoxels(
		this: Terrain,
		region: Region3,
		resolution: number,
		materials: Array<Array<Array<CastsToEnum<Enum.Material>>>>,
		occupancy: Array<Array<Array<number>>>,
	): void;
}

interface TextBox extends GuiObject {
	readonly FocusLost: RBXScriptSignal<(enterPressed: boolean, inputThatCausedFocusLoss: InputObject) => void>;
}

interface TextChannel extends Instance {
	/** @client */
	OnIncomingMessage: (message: TextChatMessage) => TextChatMessageProperties | undefined;
	/** @server */
	ShouldDeliverCallback: (message: TextChatMessage, textSource: TextSource) => boolean;
}

interface TextChatService extends Instance {
	/** @client */
	OnBubbleAdded: (message: TextChatMessage, adornee: Instance) => TextChatMessageProperties | undefined;
	/** @client */
	OnIncomingMessage: (message: TextChatMessage) => TextChatMessageProperties | undefined;
}

interface TextService extends Instance {
	/** @server */
	FilterStringAsync(
		this: TextService,
		stringToFilter: string,
		fromUserId: number,
		textContext?: CastsToEnum<Enum.TextFilterContext>,
	): TextFilterResult;
}

interface TweenService extends Instance {
	Create<T extends Instance>(
		this: TweenService,
		instance: T,
		tweenInfo: TweenInfo,
		propertyTable: Partial<ExtractMembers<T, Tweenable>>,
	): Tween;
}

interface UIPageLayout extends UIGridStyleLayout {
	readonly PageEnter: RBXScriptSignal<(page: GuiObject) => void>;
	readonly PageLeave: RBXScriptSignal<(page: GuiObject) => void>;
	readonly Stopped: RBXScriptSignal<(page: GuiObject) => void>;
	JumpTo(this: UIPageLayout, page: GuiObject): void;
}

/** @client */
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
			touchPositions: Array<Vector2>,
			totalTranslation: Vector2,
			velocity: Vector2,
			state: Enum.UserInputState,
			gameProcessedEvent: boolean,
		) => void
	>;
	readonly TouchRotate: RBXScriptSignal<
		(
			touchPositions: Array<Vector2>,
			rotation: number,
			velocity: number,
			state: Enum.UserInputState,
			gameProcessedEvent: boolean,
		) => void
	>;
	readonly TouchPinch: RBXScriptSignal<
		(
			touchPositions: Array<Vector2>,
			scale: number,
			velocity: number,
			state: Enum.UserInputState,
			gameProcessedEvent: boolean,
		) => void
	>;
	readonly TouchLongPress: RBXScriptSignal<
		(touchPositions: Array<Vector2>, state: Enum.UserInputState, gameProcessedEvent: boolean) => void
	>;
	readonly TouchStarted: RBXScriptSignal<(touch: InputObject, gameProcessedEvent: boolean) => void>;
	readonly TouchTap: RBXScriptSignal<(touchPositions: Array<Vector2>, gameProcessedEvent: boolean) => void>;
	readonly DeviceAccelerationChanged: RBXScriptSignal<(acceleration: InputObject) => void>;
	readonly DeviceGravityChanged: RBXScriptSignal<(gravity: InputObject) => void>;
	readonly DeviceRotationChanged: RBXScriptSignal<(rotation: InputObject, cframe: CFrame) => void>;
	GetConnectedGamepads(this: UserInputService): Array<Enum.UserInputType>;
	GetDeviceRotation(this: UserInputService): LuaTuple<[InputObject, CFrame]>;
	GetGamepadState(this: UserInputService, gamepadNum: CastsToEnum<Enum.UserInputType>): Array<InputObject>;
	GetKeysPressed(this: UserInputService): Array<InputObject>;
	GetMouseButtonsPressed(this: UserInputService): Array<InputObject>;
	GetNavigationGamepads(this: UserInputService): Array<Enum.UserInputType>;
	GetSupportedGamepadKeyCodes(
		this: UserInputService,
		gamepadNum: CastsToEnum<Enum.UserInputType>,
	): Array<Enum.KeyCode>;
	GetFocusedTextBox(this: UserInputService): TextBox | undefined;
}

interface UserService extends Instance {
	/** @server */
	GetUserInfosByUserIdsAsync(this: UserService, userIds: Array<number>): Array<UserInfo>;
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

interface Vector3Curve extends Instance {
	GetValueAtTime(
		this: Vector3Curve,
		time: number,
	): LuaTuple<[number | undefined, number | undefined, number | undefined]>;
}

interface Workspace extends WorldRoot {
	/** Do not use `Workspace.BreakJoints`. Use a for-loop instead */
	readonly BreakJoints: never;
	/** Do not use `Workspace.MakeJoints`. Use a for-loop instead */
	readonly MakeJoints: never;
	readonly Terrain: Terrain;
}

interface WorldRoot extends Model {
	Blockcast(
		this: WorldRoot,
		cframe: CFrame,
		size: Vector3,
		direction: Vector3,
		raycastParams?: RaycastParams,
	): RaycastResult | undefined;
	Raycast(
		this: WorldRoot,
		origin: Vector3,
		direction: Vector3,
		raycastParams?: RaycastParams,
	): RaycastResult | undefined;
	Spherecast(
		this: WorldRoot,
		position: Vector3,
		radius: number,
		direction: Vector3,
		raycastParams?: RaycastParams,
	): RaycastResult | undefined;
	/** @deprecated in favor of WorldRoot.Raycast */
	FindPartOnRay(
		this: WorldRoot,
		ray: Ray,
		ignoreDescendantsInstance?: Instance,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;
	/** @deprecated in favor of WorldRoot.Raycast */
	FindPartOnRayWithIgnoreList(
		this: WorldRoot,
		ray: Ray,
		ignoreDescendantsTable: Array<Instance>,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;
	/** @deprecated in favor of WorldRoot.Raycast */
	FindPartOnRayWithWhitelist(
		this: WorldRoot,
		ray: Ray,
		whitelistDescendantsTable: Array<Instance>,
		ignoreWater?: boolean,
	): LuaTuple<[BasePart | undefined, Vector3, Vector3, Enum.Material]>;
	FindPartsInRegion3(
		this: WorldRoot,
		region: Region3,
		ignoreDescendantsInstance?: Instance,
		maxParts?: number,
	): Array<BasePart>;
	FindPartsInRegion3WithIgnoreList(
		this: WorldRoot,
		region: Region3,
		ignoreDescendantsTable: Array<Instance>,
		maxParts?: number,
	): Array<BasePart>;
	FindPartsInRegion3WithWhiteList(
		this: WorldRoot,
		region: Region3,
		whitelistDescendantsTable: Array<Instance>,
		maxParts?: number,
	): Array<BasePart>;
	GetPartBoundsInBox(this: WorldRoot, cframe: CFrame, size: Vector3, overlapParams?: OverlapParams): Array<BasePart>;
	GetPartBoundsInRadius(
		this: WorldRoot,
		position: Vector3,
		radius: number,
		overlapParams?: OverlapParams,
	): Array<BasePart>;
	GetPartsInPart(this: WorldRoot, part: BasePart, overlapParams?: OverlapParams): Array<BasePart>;
}
