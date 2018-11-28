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
	/** Fired when the part stops touching another part */
	TouchEnded: RBXScriptSignal<(otherPart: BasePart) => void>;
	/** Fired when the part starts touching another part */
	Touched: RBXScriptSignal<(otherPart: BasePart) => void>;
}

interface Rbx_BillboardGui extends Rbx_LayerCollector {
	/** The Object the billboard gui uses as its base to render from.  Currently, the only way to set this property is thru a script, and must exist in the workspace.  This will only render if the object assigned derives from BasePart. */
	Adornee: BasePart | Attachment | undefined;
	/** Specifies a Player that the BillboardGui will not render to. */
	PlayerToHideFrom: Player | undefined;
}

interface Rbx_BindableEvent extends Rbx_Instance {
	/** Used to make the custom event fire (see Event for more info). Arguments can be variable length. */
	Fire(...arguments: Array<unknown>): void;
	/** This event fires when the Fire() method is used.  Receives the variable length arguments from Fire(). */
	Event: RBXScriptSignal<(...arguments: Array<unknown>) => void>;
}

interface Rbx_BindableFunction extends Rbx_Instance {
	/** Causes the function assigned to OnInvoke to be called. Arguments passed to this function get passed to OnInvoke function. */
	Invoke(...arguments: Array<unknown>): Array<unknown>;
	/** Should be defined as a function. This function is called when Invoke() is called. Number of arguments is variable. */
	OnInvoke: (...arguments: Array<unknown>) => any;
}

interface Rbx_Camera extends Rbx_Instance {
	/** Where the Camera's focus is.  Any rotation of the camera will be about this subject. */
	CameraSubject: Humanoid | BasePart | undefined;
	GetPartsObscuringTarget(castPoints: Array<Vector3>, ignoreList: Array<Instance>): Array<Instance>;
	/** Takes a 3D position in the world and projects it onto x,y coordinates of screen space. Returns two values, first is a Vector3 that has x,y position and z position which is distance from camera (negative if behind camera, positive if in front). Second return value is a boolean indicating if the first argument is an on-screen coordinate. */
	WorldToScreenPoint(worldPoint: Vector3): [Vector3, boolean];
	/** Same as WorldToScreenPoint, except no GUI offsets are taken into account. */
	WorldToViewportPoint(worldPoint: Vector3): [Vector3, boolean];
}

interface Rbx_Chat extends Rbx_Instance {
	Chat(partOrCharacter: BasePart | Model, message: string, color?: Enum.ChatColor): void;
	FilterStringAsync(stringToFilter: string, playerFrom: Player, playerTo: Player): string;
	FilterStringForBroadcast(stringToFilter: string, playerFrom: Player): string;
	Chatted: RBXScriptSignal<(part: BasePart, message: string, color: Enum.ChatColor) => void>;
}

interface Rbx_ClickDetector extends Rbx_Instance {
	/** Fired when a player clicks on the parent Part of ClickDetector. The argument provided is always of type Player. */
	MouseClick: RBXScriptSignal<(playerWhoClicked: Player) => void>;
	/** Fired when a player's mouse enters on the parent Part of ClickDetector. The argument provided is always of type Player. */
	MouseHoverEnter: RBXScriptSignal<(playerWhoHovered: Player) => void>;
	/** Fired when a player's mouse leaves the parent Part of ClickDetector. The argument provided is always of type Player. */
	MouseHoverLeave: RBXScriptSignal<(playerWhoHovered: Player) => void>;
	RightMouseClick: RBXScriptSignal<(playerWhoClicked: Player) => void>;
}

interface Rbx_CollectionService extends Rbx_Instance {
	/** Returns a signal that fires when the given tag either has a new instance with that tag added to the data model or that tag is assigned to an instance within the data model. */
	GetInstanceAddedSignal(tag: string): RBXScriptSignal<(instance: Instance) => void>;
	/** Returns a signal that fires when the given tag either has an instance with that tag removed from the data model or that tag is removed from an instance within the data model. */
	GetInstanceRemovedSignal(tag: string): RBXScriptSignal<(instance: Instance) => void>;
	/** Returns an array of all of the instances in the data model which have the given tag. */
	GetTagged<T extends Instance = Instance>(tag: string): Array<T>;
	/** Returns a list of all the collections that an instance belongs to. */
	GetTags(instance: Instance): Array<string>;
}

interface Rbx_ContentProvider extends Rbx_Instance {
	PreloadAsync(contentIdList: Array<string>): void;
}

interface Rbx_ContextActionService extends Rbx_Instance {
	/** Binds 'functionToBind' to fire when any 'inputTypes' happen. InputTypes can be variable in number and type. Types can be Enum.KeyCode, single character strings corresponding to keys, or Enum.UserInputType. 'actionName' is a key used by many other ContextActionService functions to query state. 'createTouchButton' if true will create a button on screen on touch devices.  This button will fire 'functionToBind' with three arguments: first argument is the actionName, second argument is the UserInputState of the input, and the third is the InputObject that fired this function. If 'functionToBind' yields or returns nil or Enum.ContextActionResult.Sink, the input will be sunk. If it returns Enum.ContextActionResult.Pass, the next bound action in the stack will be invoked. */
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
	/** If 'actionName' key contains a bound action, then this will return the touch button (if was created). Returns nil if a touch button was not created. No guarantees are made whether button will be retrievable when button is manipulated. */
	GetButton(actionName: string): ImageButton | undefined;
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
	/** Returns a data store with the given name and scope */
	GetDataStore(name: string, scope?: string): GlobalDataStore;
	/** Returns the default data store */
	GetGlobalDataStore(): GlobalDataStore;
	/** Returns an ordered data store with the given name and scope */
	GetOrderedDataStore(name: string, scope?: string): OrderedDataStore;
}

interface Rbx_Dialog extends Rbx_Instance {
	/** Returns an array of the players currently conversing with this dialog. */
	GetCurrentPlayers(): Array<Player>;
	DialogChoiceSelected: RBXScriptSignal<(player: Player, dialogChoice: Dialog) => void>;
}

interface Rbx_FlagStand extends Rbx_Part {
	FlagCaptured: RBXScriptSignal<(player: Player) => void>;
}

interface Rbx_FriendPages
	extends Rbx_Pages<{
			Id: number;
			Username: string;
			IsOnline: boolean;
		}> {}
interface FriendPages extends Rbx_FriendPages, Base<Rbx_FriendPages>, AnyIndex {}

interface Rbx_GamePassService extends Rbx_Instance {
	PlayerHasPass(player: Player, gamePassId: number): boolean;
}

interface Rbx_GlobalDataStore extends Rbx_Instance {
	/** Retrieves the value of the key from the website, and updates it with a new value. The callback until the value fetched matches the value on the web. Returning nil means it will not save.  */
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
	/** Fired when a user begins interacting via a Human-Computer Interface device (Mouse button down, touch begin, keyboard button down, etc.). 'inputObject' is an InputObject, which contains useful data for querying user input.  This event only fires locally. */
	InputBegan: RBXScriptSignal<(input: InputObject) => void>;
	/** Fired when a user changes interacting via a Human-Computer Interface device (Mouse move, touch move, mouse wheel, etc.). 'inputObject' is an InputObject, which contains useful data for querying user input.  This event only fires locally. */
	InputChanged: RBXScriptSignal<(input: InputObject) => void>;
	/** Fired when a user stops interacting via a Human-Computer Interface device (Mouse button up, touch end, keyboard button up, etc.). 'inputObject' is an InputObject, which contains useful data for querying user input.  This event only fires locally. */
	InputEnded: RBXScriptSignal<(input: InputObject) => void>;
	/** Fired when a user holds at least one finger for a short amount of time on the same screen position on a TouchEnabled device. 'touchPositions' is a Lua array of Vector2, each indicating the position of all the fingers involved in the gesture. 'state' indicates the Enum.UserInputState of the gesture.  This event only fires locally. */
	TouchLongPress: RBXScriptSignal<(touchPositions: Array<Vector2>, state: Enum.UserInputState) => void>;
	/** Fired when a user drags at least one finger on a TouchEnabled device. 'touchPositions' is a Lua array of Vector2, each indicating the position of all the fingers involved in the gesture. 'totalTranslation' is a Vector2, indicating how far the pan gesture has gone from its starting point. 'velocity' is a Vector2 that indicates how quickly the gesture is being performed in each dimension. 'state' indicates the Enum.UserInputState of the gesture. */
	TouchPan: RBXScriptSignal<
		(
			touchPositions: Array<Vector2>,
			totalTranslation: Vector2,
			velocity: Vector2,
			state: Enum.UserInputState
		) => void
	>;
	/** Fired when a user pinches their fingers on a TouchEnabled device. 'touchPositions' is a Lua array of Vector2, each indicating the position of all the fingers involved in the pinch gesture. 'scale' is a float that indicates the difference from the beginning of the pinch gesture. 'velocity' is a float indicating how quickly the pinch gesture is happening. 'state' indicates the Enum.UserInputState of the gesture.  This event only fires locally. */
	TouchPinch: RBXScriptSignal<
		(touchPositions: Array<Vector2>, scale: number, velocity: number, state: Enum.UserInputState) => void
	>;
	/** Fired when a user rotates two fingers on a TouchEnabled device. 'touchPositions' is a Lua array of Vector2, each indicating the position of all the fingers involved in the gesture. 'rotation' is a float indicating how much the rotation has gone from the start of the gesture. 'velocity' is a float that indicates how quickly the gesture is being performed. 'state' indicates the Enum.UserInputState of the gesture.  This event only fires locally. */
	TouchRotate: RBXScriptSignal<
		(touchPositions: Array<Vector2>, rotation: number, velocity: number, state: Enum.UserInputState) => void
	>;
	/** Fired when a user taps their finger on a TouchEnabled device. 'touchPositions' is a Lua array of Vector2, each indicating the position of all the fingers involved in the tap gesture. This event only fires locally.  This event will always fire regardless of game state. */
	TouchTap: RBXScriptSignal<(touchPositions: Array<Vector2>) => void>;
}

interface Rbx_GuiService extends Rbx_Instance {
	AddSelectionParent(selectionName: string, selectionParent: GuiObject): void;
	AddSelectionTuple(selectionName: string, selections: GuiObject): void;
	/** Returns a Tuple containing two Vector2 values representing the offset of user GUIs in pixels from the top right corner of the screen and the bottom right corner of the screen respectively. */
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
	/** Takes a specified tool and equips it to the Humanoid's Character.  Tool argument should be of type 'Tool'. */
	EquipTool(tool: BasePart): void;
	GetAccessories(): Array<Accessory>;
	GetLimb(part: BasePart): Enum.Limb;
	/** Returns a Enum.BodyPartR15 given a body part in the Humanoid's Character. */
	GetBodyPartR15(part: BasePart): Enum.BodyPartR15;
	/** Attempts to move the Humanoid and it's associated character to 'part'. 'location' is used as an offset from part's origin. */
	MoveTo(location: Vector3, part?: BasePart): void;
	/** Replaces the desired bodypart on the Humanoid's Character using a specified Enum.BodyPartR15 and BasePart. Returns a success boolean. */
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
	/** Returns a Model containing the Instance that resides at AssetId on the web. This call will also yield the script until the model is returned. Script execution can still continue, however, if you use a [coroutine](http://wiki.roblox.com/index.php?title=Coroutine). */
	LoadAsset(assetId: number): Model;
	/** Similar to LoadAsset, but instead an AssetVersionId is passed in, which refers to a particular version of the asset which is not neccessarily the latest version. */
	LoadAssetVersion(assetVersionId: number): Model;
	/** Returns a table containing a list of the various setIds that are ROBLOX approved. [More info on sets](http://wiki.roblox.com/index.php/Sets) */
	GetBaseSets(): Array<SetInfo>;
	/** Returns a table for the assets stored in the category.  A category is an setId from www.roblox.com that links to a set.  [More info on table format](http://wiki.roblox.com/index.php?title=API:Class/InsertService/GetCollection). [More info on sets](http://wiki.roblox.com/index.php/Sets) */
	GetCollection(categoryId: number): Array<CollectionInfo>;
	GetFreeDecals(searchText: string, pageNum: number): Array<FreeSearchResult>;
	GetFreeModels(searchText: string, pageNum: number): Array<FreeSearchResult>;
	/** Returns a table containing a list of the various setIds that correspond to argument 'userId'. [More info on sets](http://wiki.roblox.com/index.php/Sets) */
	GetUserSets(userId: number): Array<SetInfo>;
}

interface Rbx_Instance {
	/** Returns a copy of this Object and all its children. The copy's Parent is nil */
	Clone(): Instance;
	/** Returns an array containing all of the descendants of the instance. Returns in preorder traversal, or in other words, where the parents come before their children, depth first. */
	GetDescendants(): Array<Instance>;
	/** Returns the first ancestor of this Instance that matches the first argument 'name'.  The function will return nil if no Instance is found. */
	FindFirstAncestor<T extends Instance = Instance>(name: string): T | undefined;
	/** Returns the first child of this Instance that matches the first argument 'name'.  The second argument 'recursive' is an optional boolean (defaults to false) that will force the call to traverse down thru all of this Instance's descendants until it finds an object with a name that matches the 'name' argument.  The function will return nil if no Instance is found. */
	FindFirstChild<T extends Instance = Instance>(name: string, recursive?: boolean): T | undefined;
	WaitForChild<T extends Instance = Instance>(childName: string): T;
	WaitForChild<T extends Instance = Instance>(childName: string, timeOut: number): T | undefined;
}

interface Rbx_KeyframeSequenceProvider extends Rbx_Instance {
	RegisterActiveKeyframeSequence(keyframeSequence: KeyframeSequence): string;
	RegisterKeyframeSequence(keyframeSequence: KeyframeSequence): string;
	GetAnimations(userId: number): InventoryPages;
	GetKeyframeSequenceAsync(assetId: string): KeyframeSequence;
}

interface Rbx_LocalizationService extends Rbx_Instance {
	GetTranslatorForPlayer(player: Player): Translator;
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

interface ReceiptInfo {
	PurchaseId: string;
	PlayerId: number;
	ProductId: number;
	CurrencySpent: number;
	CurrencyType: Enum.CurrencyType;
	PlaceIdWherePurchased: number;
}

interface Rbx_MarketplaceService extends Rbx_Instance {
	PromptGamePassPurchase(player: Player, gamePassId: number): void;
	PromptProductPurchase(
		player: Player,
		productId: number,
		equipIfPurchased?: boolean,
		currencyType?: Enum.CurrencyType
	): void;
	/** Will prompt 'player' to purchase the item associated with 'assetId'.  'equipIfPurchased' is an optional argument that will give the item to the player immediately if they buy it (only applies to gear).  'currencyType' is also optional and will attempt to prompt the user with a specified currency if the product can be purchased with this currency, otherwise we use the default currency of the product. */
	PromptPurchase(player: Player, assetId: number, equipIfPurchased?: boolean, currencyType?: Enum.CurrencyType): void;
	/** Checks to see if 'Player' owns the product associated with 'assetId'. Returns true if the player owns it, false otherwise. This call will produce a warning if called on a guest player. */
	PlayerOwnsAsset(player: Player, assetId: number): boolean;
	/**
	 * Callback that is executed for pending Developer Product receipts.
	 * If this function does not return Enum.ProductPurchaseDecision.PurchaseGranted, then you will not be granted the money for the purchase!
	 * The callback will be invoked with a table, containing the following informational fields:
	 * - **PlayerId** - the id of the player making the purchase.
	 * - **PlaceIdWherePurchased** - the specific place where the purchase was made.
	 * - **PurchaseId** - a unique identifier for the purchase, should be used to prevent granting an item multiple times for one purchase.
	 * - **ProductId** - the id of the purchased product.
	 * - **CurrencyType** - the type of currency used (Tix, Robux).
	 * - **CurrencySpent** - the amount of currency spent on the product for this purchase.
	 */
	ProcessReceipt: (receiptInfo: ReceiptInfo) => Enum.ProductPurchaseDecision;
	PromptGamePassPurchaseFinished: RBXScriptSignal<
		(player: Player, gamePassId: number, wasPurchased: boolean) => void
	>;
	/** Fired when a 'player' dismisses a purchase dialog for 'assetId'.  If the player purchased the item 'isPurchased' will be true, otherwise it will be false. This call will produce a warning if called on a guest player. */
	PromptPurchaseFinished: RBXScriptSignal<(player: Player, assetId: number, isPurchased: boolean) => void>;
}

interface Rbx_Model extends Rbx_PVInstance {
	GetBoundingBox(): [CFrame, Vector3];
}

interface Rbx_OrderedDataStore extends Rbx_GlobalDataStore {
	/** Returns a DataStorePages object. The length of each page is determined by pageSize, and the order is determined by isAscending. minValue and maxValue are optional parameters which will filter the result.  */
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
	/** @rbx-client */
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
	/** Will attempt to award the 'amount' points to 'userId', returns 'userId' awarded to, the number of points awarded, the new point total the user has in the game, and the total number of points the user now has. Will also fire PointsService.PointsAwarded. Works with server scripts ONLY. */
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
	/** The Object the surface gui uses as its base to render from.  Currently, the only way to set this property is thru a script, and must exist in the workspace.  This will only render if the object assigned derives from BasePart. */
	Adornee: BasePart | undefined;
}

interface Rbx_Team extends Rbx_Instance {
	GetPlayers(): Array<Player>;
	PlayerAdded: RBXScriptSignal<(player: Player) => void>;
	PlayerRemoved: RBXScriptSignal<(player: Player) => void>;
}

interface Rbx_Teams extends Rbx_Instance {
	GetTeams(): Array<Team>;
}

interface Rbx_TeleportService {
	GetPlayerPlaceInstanceAsync(userId: number): [boolean, string, number, string];
	ReserveServer(placeId: number): [string, string];
	Teleport(placeId: number, player?: Player, teleportData?: any, customLoadingScreen?: Instance): void;
	TeleportToPrivateServer(
		placeId: number,
		reservedServerAccessCode: string,
		players: Array<Player>,
		spawnName?: string,
		teleportData?: any,
		customLoadingScreen?: Instance
	): void;
	TeleportPartyAsync(
		placeId: number,
		players: Array<Player>,
		teleportData?: any,
		customLoadingScreen?: Instance
	): string;
	TeleportInitFailed: RBXScriptSignal<
		(player: Player, teleportResult: Enum.TeleportResult, errorMessage: string) => void
	>;
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
	/** Returns an InputObject and a Vector4 that describes the device's current rotation vector. This is fired with an InputObject, which has type Enum.InputType.Gyroscope, and position that shows total rotation in each local device axis. The delta property describes the amount of rotation that last happened. The Vector4 is the device's current quaternion rotation in reference to it's default reference frame. This event only fires locally. */
	GetDeviceRotation(): [InputObject, CFrame];
	GetGamepadState(gamepadNum: Enum.UserInputType): Array<InputObject>;
	GetKeysPressed(): Array<InputObject>;
	GetMouseButtonsPressed(): Array<InputObject>;
	GetNavigationGamepads(): Array<Enum.UserInputType>;
	GetSupportedGamepadKeyCodes(gamepadNum: Enum.UserInputType): Array<Enum.KeyCode>;
	/** Fired when a user begins interacting via a Human-Computer Interface device (Mouse button down, touch begin, keyboard button down, etc.). 'inputObject' is an InputObject, which contains useful data for querying user input.  This event only fires locally.  This event will always fire regardless of game state. */
	InputBegan: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	/** Fired when a user changes interacting via a Human-Computer Interface device (Mouse move, touch move, mouse wheel, etc.). 'inputObject' is an InputObject, which contains useful data for querying user input.  This event only fires locally.  This event will always fire regardless of game state. */
	InputChanged: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
	/** Fired when a user stops interacting via a Human-Computer Interface device (Mouse button up, touch end, keyboard button up, etc.). 'inputObject' is an InputObject, which contains useful data for querying user input.  This event only fires locally.  This event will always fire regardless of game state. */
	InputEnded: RBXScriptSignal<(input: InputObject, gameProcessedEvent: boolean) => void>;
}

interface Rbx_Workspace extends Rbx_Model {
	Terrain: Terrain;
	/** Return type is (BasePart, Vector3) if the ray hits.  If it misses it will return (nil, PointAtEndOfRay) */
	FindPartOnRay(
		ray: Ray,
		ignoreDescendantsInstance?: Instance,
		terrainCellsAreCubes?: boolean,
		ignoreWater?: boolean
	): [BasePart, Vector3, Vector3, Enum.Material];
	/** Return type is (BasePart, Vector3) if the ray hits.  If it misses it will return (nil, PointAtEndOfRay) */
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
