/// <reference no-default-lib="true"/>
/// <reference path="es.d.ts" />
/// <reference path="lua.d.ts" />
/// <reference path="macro_math.d.ts" />
/// <reference path="generated_enums.d.ts" />
/// <reference path="generated_classes.d.ts" />

// ROBLOX API
type StrictInstances = {
	[Key in keyof Instances]: Instances[Key]["ClassName"] extends Key
		? Instances[Key]
		: Instances[Key] & { ClassName: Key }
};
/** @deprecated Use `StrictInstances` instead */
type StrictInstanceByName<Q extends keyof Instances> = StrictInstances[Q];

type GetProperties<T> = {
	[Key in keyof T]-?: Key extends "GetPropertyChangedSignal"
		? never
		: T[Key] extends RBXScriptSignal
		? never
		: (() => any) extends T[Key]
		? never
		: Key
}[keyof T];

type GetWritableProperties<T> = Extract<
	GetProperties<T>,
	{
		[K in keyof T]: K extends "GetPropertyChangedSignal"
			? never
			: (<F>() => F extends { [Q in K]: T[K] } ? 1 : 2) extends (<F>() => F extends { -readonly [Q in K]: T[K] }
					? 1
					: 2)
			? K
			: never
	}[keyof T]
>;

type FunctionArguments<T> = T extends (...args: infer U) => void ? U : [];
type Callback = (...args: Array<any>) => void;

declare const enum LocationType {
	MobileWebsite = 0,
	MobileInGame = 1,
	Website = 2,
	Studio = 3,
	InGame = 4,
	XBoxApp = 5,
	TeamCreate = 6,
}

/** Similar to Pick, but instead turns excluded values to undefined (so they can still be browsed) */
type PresentFields<T, K extends keyof T> = { [P in keyof T]: P extends K ? T[P] : undefined };

/** When a member (M) of T is a particular Value (E), Pick<K> */
type FieldsPresentWhen<T, M extends keyof T, E extends T[M], K extends keyof T> = {
	[P in keyof T]: P extends M ? E : P extends K ? T[P] : undefined
};

/** @rbxts array */
type ReadVoxelsArray<T> = Array<Array<Array<T>>> & {
	Size: Vector3;
};

type Tweenable = number | boolean | CFrame | Rect | Color3 | UDim | UDim2 | Vector2 | Vector2int16 | Vector3;
type FilterMembers<T, U> = Pick<T, { [K in keyof T]: T[K] extends U ? K : never }[keyof T]>;

type FriendOnlineInfo =
	| FieldsPresentWhen<
			FriendOnlineInfoFields,
			"LocationType",
			LocationType.MobileWebsite | LocationType.Website | LocationType.XBoxApp,
			"VisitorId" | "UserName" | "LastOnline" | "IsOnline" | "LastLocation"
	  >
	| FieldsPresentWhen<
			FriendOnlineInfoFields,
			"LocationType",
			LocationType.MobileInGame | LocationType.InGame | LocationType.TeamCreate,
			"VisitorId" | "UserName" | "LastOnline" | "IsOnline" | "LastLocation" | "PlaceId" | "GameId"
	  >
	| FieldsPresentWhen<
			FriendOnlineInfoFields,
			"LocationType",
			LocationType.Studio,
			"VisitorId" | "UserName" | "LastOnline" | "IsOnline" | "LastLocation" | "PlaceId"
	  >;

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

interface HttpHeaders {
	[index: string]: string;
}

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

interface LocalizationEntry {
	Key: string;
	Source: string;
	Context: string;
	Example: string;
	Values: { [index: string]: string };
}

interface LogInfo {
	message: string;
	messageType: Enum.MessageType;
	timestamp: number;
}

interface ReceiptInfo {
	/** the id of the player making the purchase */
	PlayerId: number;
	/** the specific place where the purchase was made */
	PlaceIdWherePurchased: number;
	/** a unique identifier for the purchase, should be used to prevent granting an item multiple times for one purchase */
	PurchaseId: string;
	/** the id of the purchased product */
	ProductId: number;
	/** the type of currency used (Tix, Robux) */
	CurrencyType: Enum.CurrencyType;
	/** the amount of currency spent on the product for this purchase */
	CurrencySpent: number;
}

interface ProductInfo {
	/** The name shown on the asset's page */
	Name: string;
	/** The description as shown on the asset's page; can be nil if blank. */
	Description: string;
	/** The cost of purchasing the asset using Robux */
	PriceInRobux: number;
	/** Timestamp of when the asset was created, e.g. `2018-08-01T17:55:11.98Z` */
	Created: string;
	/** Timestamp of when the asset was last updated by its creator, e.g. `2018-08-01T17:55:11.98Z` */
	Updated: string;
	/** Indicates whether the item is marked as 13+ in catalog */
	ContentRatingTypeId: number;
	/** The minimum Builder's Club subscription necessary to purchase the item */
	MinimumMembershipLevel: number;
	/** Describes whether the asset can be taken for free */
	IsPublicDomain: boolean;
	/** Describes whether the asset is a User Product, Developer Product, or Game Pass */
	ProductType: "User Product" | "Developer Product" | "Game Pass";
	/** A table of information describing the creator of the asset */
	Creator: {
		/** Either `User` or `Group` */
		CreatorType: "User" | "Group";
		/** The ID of the creator user or group */
		CreatorTargetId: number;
		/** The name/username of the creator */
		Name: string;
	};
	IconImageAssetId: number;
	TargetId: number;
}

interface BadgeInfo {
	/** The name of the badge. */
	Name: string;
	/** The description of the badge. */
	Description: string;
	/** The asset ID of the image for this badge. */
	IconImageId: number;
	/** Indicates whether this badge is available to be awarded. */
	IsEnabled: boolean;
}

interface BundleInfo {
	/** What kind of Bundle this is */
	BundleType: "BodyParts" | "AvatarAnimations";

	/** The Description of the Bundle */
	Description: string;

	/** The Bundle Id */
	Id: number;

	/** An array of all assets contained within this bundle */
	Items: Array<{
		/** The Id of the individual item */
		Id: number;
		/** The name of the individual asset */
		Name: string;
		/** What type the individual asset is */
		Type: "Asset" | "UserOutfit";
	}>;

	/** The name of the Bundle */
	Name: string;
}

type TeleportData = string | number | boolean | Array<any> | Map<any, any>;

type PlayerJoinInfo =
	| {
			/** The DataModel.PlaceId of the place the Player was teleported from. Only present if the player was teleported to the current place. */
			SourcePlaceId: undefined;
			/** An array containing the UserIds teleported alongside the Player. Only present if the player was teleported in using TeleportService:TeleportPartyAsync. */
			Members: undefined;
			/** Data passed along with the players. As this is transmitted by the client it is not secure. For this reason it should only be used for local settings and not sensitive items (such as the users’ score or in-game currency). */
			teleportData?: TeleportData;
	  }
	| {
			/** The DataModel.PlaceId of the place the Player was teleported from. Only present if the player was teleported to the current place. */
			SourcePlaceId: number;
			/** An array containing the UserIds teleported alongside the Player. Only present if the player was teleported in using TeleportService:TeleportPartyAsync. */
			Members: Array<number>;
			/** Data passed along with the players. As this is transmitted by the client it is not secure. For this reason it should only be used for local settings and not sensitive items (such as the users’ score or in-game currency). */
			teleportData?: TeleportData;
	  };

interface BoundActionInfo {
	inputTypes: Array<Enum.KeyCode | Enum.PlayerActions | Enum.UserInputType | string>;
	priorityLevel: number;
	stackOrder: number;
}

declare const enum AssetTypeId {
	Image = 1,
	TeeShirt = 2,
	Audio = 3,
	Mesh = 4,
	Lua = 5,
	Hat = 8,
	Place = 9,
	Model = 10,
	Shirt = 11,
	Pants = 12,
	Decal = 13,
	Head = 17,
	Face = 18,
	Gear = 19,
	Badge = 21,
	Animation = 24,
	Torso = 27,
	RightArm = 28,
	LeftArm = 29,
	LeftLeg = 30,
	RightLeg = 31,
	Package = 32,
	GamePass = 34,
	Plugin = 38,
	MeshPart = 40,
	HairAccessory = 41,
	FaceAccessory = 42,
	NeckAccessory = 43,
	ShoulderAccessory = 44,
	FrontAccessory = 45,
	BackAccessory = 46,
	WaistAccessory = 47,
	ClimbAnimation = 48,
	DeathAnimation = 49,
	FallAnimation = 50,
	IdleAnimation = 51,
	JumpAnimation = 52,
	RunAnimation = 53,
	SwimAnimation = 54,
	WalkAnimation = 55,
	PoseAnimation = 56,
	EarAccessory = 57,
	EyeAccessory = 58,
}

interface AssetProductInfo extends ProductInfo {
	/** If InfoType was Asset, this is the ID of the given asset. */
	AssetId: number;
	/** The [type of asset](https://developer.roblox.com/articles/Asset-types) (e.g. place, model, shirt). In TypeScript, you should compare this value to a member of the `AssetTypeId` const enum. */
	AssetTypeId: AssetTypeId;
	/** Describes whether the asset is purchasable */
	IsForSale: boolean;
	/** Describes whether the asset is a "limited item" that is no longer (if ever) sold */
	IsLimited: boolean;
	/** Describes whether the asset is a "limited unique" ("Limited U") item that only has a fixed number sold */
	IsLimitedUnique: boolean;
	/** Describes whether the asset is marked as "new" in the catalog */
	IsNew: boolean;
	/** The remaining number of items a limited unique item may be sold */
	Remaining: number;
	/** The number of items the asset has been sold */
	Sales: number;
}

interface DeveloperProductInfo extends ProductInfo {
	/** If the InfoType was Product, this is the product's ID */
	ProductId: number;
}

interface AgentParameters {
	/** Humanoid radius. Used to determine the minimum separation from obstacles. */
	AgentRadius?: number;
	/** Humanoid height.
	 * Empty space smaller than this value, like the space under stairs, will be marked as non-traversable.
	 */
	AgentHeight?: number;
}

interface CollisionGroupInfo {
	id: number;
	mask: number;
	name: string;
}

interface FriendOnlineInfoFields {
	/** The UserId of the friend. */
	VisitorId: number;
	/** The user name of the friend. */
	UserName: string;
	/** When the user was last online. */
	LastOnline: string;
	/** If the friend is currently online. */
	IsOnline: boolean;
	/** The name of the friends current location. */
	LastLocation: string;
	/** The placeId of the friends last location. Check the `LocationType` to determine whether this property exists. */
	PlaceId: number;
	/** The DataModel / JobId of the friends last location.
	 * Check the `LocationType` to determine whether this property exists.
	 */
	GameId: string;
	/** A numeric enum of the friends last location.
	 * In TS, you can check this value against the `LocationType` const enum
	 */
	LocationType: LocationType;
}

/** A dictionary of an id and name containing information about what type an asset is */
type AssetType =
	| { id: AssetTypeId.Image; name: "Image" }
	| { id: AssetTypeId.TeeShirt; name: "TeeShirt" }
	| { id: AssetTypeId.Audio; name: "Audio" }
	| { id: AssetTypeId.Mesh; name: "Mesh" }
	| { id: AssetTypeId.Lua; name: "Lua" }
	| { id: AssetTypeId.Hat; name: "Hat" }
	| { id: AssetTypeId.Place; name: "Place" }
	| { id: AssetTypeId.Model; name: "Model" }
	| { id: AssetTypeId.Shirt; name: "Shirt" }
	| { id: AssetTypeId.Pants; name: "Pants" }
	| { id: AssetTypeId.Decal; name: "Decal" }
	| { id: AssetTypeId.Head; name: "Head" }
	| { id: AssetTypeId.Face; name: "Face" }
	| { id: AssetTypeId.Gear; name: "Gear" }
	| { id: AssetTypeId.Badge; name: "Badge" }
	| { id: AssetTypeId.Animation; name: "Animation" }
	| { id: AssetTypeId.Torso; name: "Torso" }
	| { id: AssetTypeId.RightArm; name: "RightArm" }
	| { id: AssetTypeId.LeftArm; name: "LeftArm" }
	| { id: AssetTypeId.LeftLeg; name: "LeftLeg" }
	| { id: AssetTypeId.RightLeg; name: "RightLeg" }
	| { id: AssetTypeId.Package; name: "Package" }
	| { id: AssetTypeId.GamePass; name: "GamePass" }
	| { id: AssetTypeId.Plugin; name: "Plugin" }
	| { id: AssetTypeId.MeshPart; name: "MeshPart" }
	| { id: AssetTypeId.HairAccessory; name: "HairAccessory" }
	| { id: AssetTypeId.FaceAccessory; name: "FaceAccessory" }
	| { id: AssetTypeId.NeckAccessory; name: "NeckAccessory" }
	| { id: AssetTypeId.ShoulderAccessory; name: "ShoulderAccessory" }
	| { id: AssetTypeId.FrontAccessory; name: "FrontAccessory" }
	| { id: AssetTypeId.BackAccessory; name: "BackAccessory" }
	| { id: AssetTypeId.WaistAccessory; name: "WaistAccessory" }
	| { id: AssetTypeId.ClimbAnimation; name: "ClimbAnimation" }
	| { id: AssetTypeId.DeathAnimation; name: "DeathAnimation" }
	| { id: AssetTypeId.FallAnimation; name: "FallAnimation" }
	| { id: AssetTypeId.IdleAnimation; name: "IdleAnimation" }
	| { id: AssetTypeId.JumpAnimation; name: "JumpAnimation" }
	| { id: AssetTypeId.RunAnimation; name: "RunAnimation" }
	| { id: AssetTypeId.SwimAnimation; name: "SwimAnimation" }
	| { id: AssetTypeId.WalkAnimation; name: "WalkAnimation" }
	| { id: AssetTypeId.PoseAnimation; name: "PoseAnimation" }
	| { id: AssetTypeId.EarAccessory; name: "EarAccessory" }
	| { id: AssetTypeId.EyeAccessory; name: "EyeAccessory" };

/** Information about a player's avatar in dictionary form */
interface CharacterAppearanceInfo {
	/** Describes the BrickColor values for each limb */
	bodyColors: {
		/** The BrickColor value of the leftArm */
		leftArmColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the torso */
		torsoColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the rightArm */
		rightArmColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the head */
		headColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the leftLeg */
		leftLegColorId: keyof BrickColorsByNumber;
		/** The BrickColor value of the rightLeg */
		rightLegColorId: keyof BrickColorsByNumber;
	};

	/** The assets currently equipped by the Player (hats, body parts, etc, excluding gear) */
	assets: Array<{
		/** The asset ID of the equipped asset */
		id: number;

		/** A table with `name` and `id` fields, each describing the kind of asset equipped ("Hat", "Face", etc.). In TypeScript, the `id` can be compared to a member of the `AssetTypeId` const enum. */
		assetType: AssetType;

		/** The name of the equipped asset */
		name: string;
	}>;

	/** Describes whether default pants are applied */
	defaultPantsApplied: boolean;

	/** Describes whether default shirt are applied */
	defaultShirtApplied: boolean;

	/** What kind of avatar it is */
	playerAvatarType: "R6" | "R15";

	/** A dictionary of scaling properties */
	scales: {
		bodyType: number;
		head: number;
		height: number;
		proportion: number;
		depth: number;
		width: number;
	};
}

interface MakeSystemMessageConfig {
	Text: string;
	Color?: Color3;
	Font?: Enum.Font;
	TextSize?: number;
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

/**
 * RBXScriptConnection, also known as a Connection,
 * is a special object returned by the Connect method of an Event (RBXScriptSignal).
 * This is used primarily to disconnect a listener from an Event.
 */
interface RBXScriptConnection {
	/**
	 * Describes whether or not the connection is still alive.
	 * This will become false if connection:Disconnect() is called.
	 */
	Connected: boolean;
	/** Disconnects the connection from the event. */
	Disconnect(): void;
}

/**
 * RBXScriptSignal, more commonly known as an Event, is a special kind of Roblox object.
 * It provides a way for user-defined functions, called listeners, to be called when something happens in the game.
 * When a certain event happens, the Event is fired, calling any listeners that are connected to the Event.
 * An Event may also pass arguments to each listener, to provide extra information about the event that occurred.
 */
interface RBXScriptSignal<T = Function, P = false> {
	/**
	 * Establishes a function to be called whenever the event is raised.
	 * Returns a RBXScriptConnection object associated with the connection.
	 * @param callback The function to be called whenever the event is fired.
	 */
	Connect<O extends Array<unknown> = FunctionArguments<T>>(
		callback: P extends true ? (FunctionArguments<T> extends Array<unknown> ? (...args: O) => void : T) : T,
	): RBXScriptConnection;

	/**
	 * Yields the current thread until this signal is fired. Returns what was fired to the signal.
	 */
	Wait(): LuaTuple<FunctionArguments<T>>;
}

// generated in generated_classes.d.ts
interface Instances {}
interface CreatableInstances {}

// InstanceConstructor
interface InstanceConstructor {
	/**
	 * Creates an new object of type val. The parent argument is optional;
	 * If it is supplied, the object will be parented to that object.
	 * Performance note: When the Parent of an object is set,
	 * Roblox begins listening to a variety of different property changes for replication,
	 * rendering and physics.
	 * Therefore, it is recommended to set the Parent property last when creating new objects.
	 * As such, you should avoid using the second argument (parent) of this function.
	 * You can read [this thread on the developer forum](https://devforum.roblox.com/t/psa-dont-use-instance-new-with-parent-argument/30296) for more information.
	 */
	new <T extends keyof CreatableInstances>(className: T, parent?: Instance): StrictInstances[T];
	/**
	 * Creates an new object of type val. The parent argument is optional;
	 * If it is supplied, the object will be parented to that object.
	 * Performance note: When the Parent of an object is set,
	 * Roblox begins listening to a variety of different property changes for replication,
	 * rendering and physics.
	 * Therefore, it is recommended to set the Parent property last when creating new objects.
	 * As such, you should avoid using the second argument (parent) of this function.
	 * You can read [this thread on the developer forum](https://devforum.roblox.com/t/psa-dont-use-instance-new-with-parent-argument/30296) for more information.
	 */
	new (className: string, parent?: Instance): Instance;
}

declare const Instance: InstanceConstructor;

interface PointsService extends Instance {
	/** This function was once part of the PointService class used to control an ancient achievement system since removed and deprecated. It should not be used in new work. */
	AwardPoints(userId: number, amount: number): LuaTuple<[number, number, number, 0]>;
}

/**
 * Axes is a datatype used for the ArcHandles class to control what rotation axes are currently enabled.
 */
interface Axes {
	/** Whether the X axis is enabled */
	readonly X: boolean;
	/** Whether the Y axis is enabled */
	readonly Y: boolean;
	/** Whether the Z axis is enabled */
	readonly Z: boolean;
	/** Whether the top face is included */
	readonly Top: boolean;
	/** Whether the bottom face is included */
	readonly Bottom: boolean;
	/** Whether the left face is included */
	readonly Left: boolean;
	/** Whether the right face is included */
	readonly Right: boolean;
	/** Whether the back face is included */
	readonly Back: boolean;
	/** Whether the front face is included */
	readonly Front: boolean;
}

type AxesConstructor = new (...axes: Array<Enum.Axis | Enum.NormalId>) => Axes;
declare const Axes: AxesConstructor;

interface BrickColor<Number extends number = number, Name extends string = string> {
	/** The unique number that identifies the BrickColor */
	readonly Number: number extends Number ? keyof BrickColorsByNumber : Number;
	/** The name associated with the BrickColor */
	readonly Name: string extends Name ? BrickColorsByNumber[keyof BrickColorsByNumber] : Name;
	/** The Color3 associated with the BrickColor */
	readonly Color: Color3;
	/** The red component (between 0 and 1) */
	readonly r: number;
	/** The green component (between 0 and 1) */
	readonly g: number;
	/** The blue component (between 0 and 1) */
	readonly b: number;
}

interface Color3 {
	/** The red component (between 0 and 1) */
	readonly r: number;
	/** The green component (between 0 and 1) */
	readonly g: number;
	/** The blue component (between 0 and 1) */
	readonly b: number;
	Lerp(goal: Color3, alpha: number): Color3;
}

interface BrickColorsByNumber {
	1: "White";
	2: "Grey";
	3: "Light yellow";
	5: "Brick yellow";
	6: "Light green (Mint)";
	9: "Light reddish violet";
	11: "Pastel Blue";
	12: "Light orange brown";
	18: "Nougat";
	21: "Bright red";
	22: "Med. reddish violet";
	23: "Bright blue";
	24: "Bright yellow";
	25: "Earth orange";
	26: "Black";
	27: "Dark grey";
	28: "Dark green";
	29: "Medium green";
	36: "Lig. Yellowich orange";
	37: "Bright green";
	38: "Dark orange";
	39: "Light bluish violet";
	40: "Transparent";
	41: "Tr. Red";
	42: "Tr. Lg blue";
	43: "Tr. Blue";
	44: "Tr. Yellow";
	45: "Light blue";
	47: "Tr. Flu. Reddish orange";
	48: "Tr. Green";
	49: "Tr. Flu. Green";
	50: "Phosph. White";
	100: "Light red";
	101: "Medium red";
	102: "Medium blue";
	103: "Light grey";
	104: "Bright violet";
	105: "Br. yellowish orange";
	106: "Bright orange";
	107: "Bright bluish green";
	108: "Earth yellow";
	110: "Bright bluish violet";
	111: "Tr. Brown";
	112: "Medium bluish violet";
	113: "Tr. Medi. reddish violet";
	115: "Med. yellowish green";
	116: "Med. bluish green";
	118: "Light bluish green";
	119: "Br. yellowish green";
	120: "Lig. yellowish green";
	121: "Med. yellowish orange";
	123: "Br. reddish orange";
	124: "Bright reddish violet";
	125: "Light orange";
	126: "Tr. Bright bluish violet";
	127: "Gold";
	128: "Dark nougat";
	131: "Silver";
	133: "Neon orange";
	134: "Neon green";
	135: "Sand blue";
	136: "Sand violet";
	137: "Medium orange";
	138: "Sand yellow";
	140: "Earth blue";
	141: "Earth green";
	143: "Tr. Flu. Blue";
	145: "Sand blue metallic";
	146: "Sand violet metallic";
	147: "Sand yellow metallic";
	148: "Dark grey metallic";
	149: "Black metallic";
	150: "Light grey metallic";
	151: "Sand green";
	153: "Sand red";
	154: "Dark red";
	157: "Tr. Flu. Yellow";
	158: "Tr. Flu. Red";
	168: "Gun metallic";
	176: "Red flip/flop";
	178: "Yellow flip/flop";
	179: "Silver flip/flop";
	180: "Curry";
	190: "Fire Yellow";
	191: "Flame yellowish orange";
	192: "Reddish brown";
	193: "Flame reddish orange";
	194: "Medium stone grey";
	195: "Royal blue";
	196: "Dark Royal blue";
	198: "Bright reddish lilac";
	199: "Dark stone grey";
	200: "Lemon metalic";
	208: "Light stone grey";
	209: "Dark Curry";
	210: "Faded green";
	211: "Turquoise";
	212: "Light Royal blue";
	213: "Medium Royal blue";
	216: "Rust";
	217: "Brown";
	218: "Reddish lilac";
	219: "Lilac";
	220: "Light lilac";
	221: "Bright purple";
	222: "Light purple";
	223: "Light pink";
	224: "Light brick yellow";
	225: "Warm yellowish orange";
	226: "Cool yellow";
	232: "Dove blue";
	268: "Medium lilac";
	301: "Slime green";
	302: "Smoky grey";
	303: "Dark blue";
	304: "Parsley green";
	305: "Steel blue";
	306: "Storm blue";
	307: "Lapis";
	308: "Dark indigo";
	309: "Sea green";
	310: "Shamrock";
	311: "Fossil";
	312: "Mulberry";
	313: "Forest green";
	314: "Cadet blue";
	315: "Electric blue";
	316: "Eggplant";
	317: "Moss";
	318: "Artichoke";
	319: "Sage green";
	320: "Ghost grey";
	321: "Lilac";
	322: "Plum";
	323: "Olivine";
	324: "Laurel green";
	325: "Quill grey";
	327: "Crimson";
	328: "Mint";
	329: "Baby blue";
	330: "Carnation pink";
	331: "Persimmon";
	332: "Maroon";
	333: "Gold";
	334: "Daisy orange";
	335: "Pearl";
	336: "Fog";
	337: "Salmon";
	338: "Terra Cotta";
	339: "Cocoa";
	340: "Wheat";
	341: "Buttermilk";
	342: "Mauve";
	343: "Sunrise";
	344: "Tawny";
	345: "Rust";
	346: "Cashmere";
	347: "Khaki";
	348: "Lily white";
	349: "Seashell";
	350: "Burgundy";
	351: "Cork";
	352: "Burlap";
	353: "Beige";
	354: "Oyster";
	355: "Pine Cone";
	356: "Fawn brown";
	357: "Hurricane grey";
	358: "Cloudy grey";
	359: "Linen";
	360: "Copper";
	361: "Dirt brown";
	362: "Bronze";
	363: "Flint";
	364: "Dark taupe";
	365: "Burnt Sienna";
	1001: "Institutional white";
	1002: "Mid gray";
	1003: "Really black";
	1004: "Really red";
	1005: "Deep orange";
	1006: "Alder";
	1007: "Dusty Rose";
	1008: "Olive";
	1009: "New Yeller";
	1010: "Really blue";
	1011: "Navy blue";
	1012: "Deep blue";
	1013: "Cyan";
	1014: "CGA brown";
	1015: "Magenta";
	1016: "Pink";
	1017: "Deep orange";
	1018: "Teal";
	1019: "Toothpaste";
	1020: "Lime green";
	1021: "Camo";
	1022: "Grime";
	1023: "Lavender";
	1024: "Pastel light blue";
	1025: "Pastel orange";
	1026: "Pastel violet";
	1027: "Pastel blue-green";
	1028: "Pastel green";
	1029: "Pastel yellow";
	1030: "Pastel brown";
	1031: "Royal purple";
	1032: "Hot pink";
}

interface BrickColorsByPalette {
	[0]: 141;
	[1]: 301;
	[2]: 107;
	[3]: 26;
	[4]: 1012;
	[5]: 303;
	[6]: 1011;
	[7]: 304;
	[8]: 28;
	[9]: 1018;
	[10]: 302;
	[11]: 305;
	[12]: 306;
	[13]: 307;
	[14]: 308;
	[15]: 1021;
	[16]: 309;
	[17]: 310;
	[18]: 1019;
	[19]: 135;
	[20]: 102;
	[21]: 23;
	[22]: 1010;
	[23]: 312;
	[24]: 313;
	[25]: 37;
	[26]: 1022;
	[27]: 1020;
	[28]: 1027;
	[29]: 311;
	[30]: 315;
	[31]: 1023;
	[32]: 1031;
	[33]: 316;
	[34]: 151;
	[35]: 317;
	[36]: 318;
	[37]: 319;
	[38]: 1024;
	[39]: 314;
	[40]: 1013;
	[41]: 1006;
	[42]: 321;
	[43]: 322;
	[44]: 104;
	[45]: 1008;
	[46]: 119;
	[47]: 323;
	[48]: 324;
	[49]: 325;
	[50]: 320;
	[51]: 11;
	[52]: 1026;
	[53]: 1016;
	[54]: 1032;
	[55]: 1015;
	[56]: 327;
	[57]: 1005;
	[58]: 1009;
	[59]: 29;
	[60]: 328;
	[61]: 1028;
	[62]: 208;
	[63]: 45;
	[64]: 329;
	[65]: 330;
	[66]: 331;
	[67]: 1004;
	[68]: 21;
	[69]: 332;
	[70]: 333;
	[71]: 24;
	[72]: 334;
	[73]: 226;
	[74]: 1029;
	[75]: 335;
	[76]: 336;
	[77]: 342;
	[78]: 343;
	[79]: 338;
	[80]: 1007;
	[81]: 339;
	[82]: 133;
	[83]: 106;
	[84]: 340;
	[85]: 341;
	[86]: 1001;
	[87]: 1;
	[88]: 9;
	[89]: 1025;
	[90]: 337;
	[91]: 344;
	[92]: 345;
	[93]: 1014;
	[94]: 105;
	[95]: 346;
	[96]: 347;
	[97]: 348;
	[98]: 349;
	[99]: 1030;
	[100]: 125;
	[101]: 101;
	[102]: 350;
	[103]: 192;
	[104]: 351;
	[105]: 352;
	[106]: 353;
	[107]: 354;
	[108]: 1002;
	[109]: 5;
	[110]: 18;
	[111]: 217;
	[112]: 355;
	[113]: 356;
	[114]: 153;
	[115]: 357;
	[116]: 358;
	[117]: 359;
	[118]: 360;
	[119]: 38;
	[120]: 361;
	[121]: 362;
	[122]: 199;
	[123]: 194;
	[124]: 363;
	[125]: 364;
	[126]: 365;
	[127]: 1003;
}

type GetByName<T extends BrickColorsByNumber[keyof BrickColorsByNumber]> = {
	[K in keyof BrickColorsByNumber]: T extends BrickColorsByNumber[K] ? K : never
}[keyof BrickColorsByNumber];

type Zl = GetByName<"Turquoise">;

interface BrickColorConstructor {
	/** Returns a random BrickColor. */
	random: () => BrickColor;

	/** Returns a White BrickColor */
	White: () => BrickColor<1, "White">;
	/** Returns a Gray BrickColor */
	Gray: () => BrickColor<194, "Medium stone grey">;
	/** Returns a DarkGray BrickColor */
	DarkGray: () => BrickColor<199, "Dark stone grey">;
	/** Returns a Black BrickColor */
	Black: () => BrickColor<26, "Black">;
	/** Returns a Red BrickColor */
	Red: () => BrickColor<21, "Bright red">;
	/** Returns a Yellow BrickColor */
	Yellow: () => BrickColor<24, "Bright yellow">;
	/** Returns a Green BrickColor */
	Green: () => BrickColor<28, "Dark green">;
	/** Returns a Blue BrickColor */
	Blue: () => BrickColor<23, "Bright blue">;

	/** Constructs a BrickColor from its name. */
	new <T extends BrickColorsByNumber[keyof BrickColorsByNumber]>(val: T): BrickColor<
		{ [K in keyof BrickColorsByNumber]: T extends BrickColorsByNumber[K] ? K : never }[keyof BrickColorsByNumber],
		T
	>;

	/** Constructs a BrickColor from its name. */
	new (val: string): BrickColor;

	/** Constructs a BrickColor from its numerical index. */
	new <T extends keyof BrickColorsByNumber>(val: T): BrickColor<T, BrickColorsByNumber[T]>;

	/** Constructs a BrickColor from its numerical index. */
	new (val: number): BrickColor;

	/** Constructs the closest BrickColor that can be matched to the specified RGB components. */
	new (r: number, g: number, b: number): BrickColor;

	/** Constructs the closest BrickColor that can be matched to the specified Color3. */
	new (color: Color3): BrickColor;

	/** Constructs a BrickColor from its palette index. */
	palette<T extends keyof BrickColorsByPalette>(
		paletteValue: T,
	): BrickColor<BrickColorsByPalette[T], BrickColorsByNumber[BrickColorsByPalette[T]]>;

	/** Constructs a BrickColor from its palette index. */
	palette(paletteValue: number): BrickColor;
}

declare const BrickColor: BrickColorConstructor;

// CFrame
interface CFrame {
	/** The 3D position of the CFrame */
	readonly Position: Vector3;
	/** The 3D position of the CFrame */
	readonly p: Vector3;
	/** The x-coordinate of the position */
	readonly X: number;
	/** The y-coordinate of the position */
	readonly Y: number;
	/** The z-coordinate of the position */
	readonly Z: number;
	/** The forward-direction component of the CFrame’s orientation. */
	readonly LookVector: Vector3;
	/** The right-direction component of the CFrame’s orientation. */
	readonly RightVector: Vector3;
	/** The up-direction component of the CFrame’s orientation. */
	readonly UpVector: Vector3;
	/** Returns the inverse of this CFrame */
	Inverse(): CFrame;
	/** Returns a CFrame interpolated between this CFrame and the goal by the fraction alpha */
	Lerp(goal: CFrame, alpha: number): CFrame;
	/** Returns a CFrame transformed from Object to World space. Equivalent to `[CFrame * cf]` */
	toWorldSpace(cf: CFrame): CFrame;
	/** Returns a CFrame transformed from World to Object space. Equivalent to `[CFrame:inverse() * cf]` */
	toObjectSpace(cf: CFrame): CFrame;
	/** Returns a Vector3 transformed from Object to World space. Equivalent to `[CFrame * v3]` */
	pointToWorldSpace(v3: Vector3): Vector3;
	/** Returns a Vector3 transformed from World to Object space. Equivalent to `[CFrame:inverse() * v3]` */
	pointToObjectSpace(v3: Vector3): Vector3;
	/** Returns a Vector3 rotated from Object to World space. Equivalent to `[(CFrame - CFrame.p) *v3]` */
	vectorToWorldSpace(v3: Vector3): Vector3;
	/** Returns a Vector3 rotated from World to Object space. Equivalent to `[(CFrame:inverse() - CFrame:inverse().p) * v3]` */
	vectorToObjectSpace(v3: Vector3): Vector3;
	/** Returns the values: x, y, z, R00, R01, R02, R10, R11, R12, R20, R21, R22, where R00-R22 represent the 3x3 rotation matrix of the CFrame, and xyz represent the position of the CFrame. */
	components(): LuaTuple<
		[number, number, number, number, number, number, number, number, number, number, number, number]
	>;
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, Y, X order */
	toEulerAnglesXYZ(): LuaTuple<[number, number, number]>;
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, X, Y order */
	toEulerAnglesYXZ(): LuaTuple<[number, number, number]>;
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, X, Y order (Equivalent to toEulerAnglesYXZ) */
	toOrientation(): LuaTuple<[number, number, number]>;
	/** Returns a tuple of a Vector3 and a number which represent the rotation of the CFrame in the axis-angle representation */
	toAxisAngle(): LuaTuple<[Vector3, number]>;
}
interface CFrameConstructor {
	/** Equivalent to fromEulerAnglesXYZ */
	Angles: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a rotated CFrame from a Unit Vector3 and a rotation in radians */
	fromAxisAngle: (unit: Vector3, rotation: number) => CFrame;
	/** Creates a rotated CFrame using angles (rx, ry, rz) in radians. Rotations are applied in Z, Y, X order. */
	fromEulerAnglesXYZ: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a rotated CFrame using angles (rx, ry, rz) in radians. Rotations are applied in Z, X, Y order. */
	fromEulerAnglesYXZ: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a CFrame from a translation and the columns of a rotation matrix. If vz is excluded,
	 * the third column is calculated as `[vx:Cross(vy).Unit]`.
	 */
	fromMatrix: (pos: Vector3, vX: Vector3, vY: Vector3, vZ?: Vector3) => CFrame;
	/** Equivalent to fromEulerAnglesYXZ */
	fromOrientation: (rX: number, rY: number, rZ: number) => CFrame;
	/** Creates a blank identity CFrame. */
	new (): CFrame;
	/** Creates a CFrame from a Vector3 */
	new (pos: Vector3): CFrame;
	/** Creates a CFrame located at pos with it’s lookVector pointing towards the lookAt position. */
	new (pos: Vector3, lookAt: Vector3): CFrame;
	/** Creates a CFrame from position (x, y, z). */
	new (x: number, y: number, z: number): CFrame;
	/** Creates a CFrame from position (x, y, z) and quaternion (qX, qY, qZ, qW) */
	new (x: number, y: number, z: number, qX: number, qY: number, qZ: number, qW: number): CFrame;
	/** Creates a CFrame from position (x, y, z) with an orientation specified by the rotation matrix `[[R00 R01 R02] [R10 R11 R12] [R20 R21 R22]]` */
	new (
		x: number,
		y: number,
		z: number,
		R00: number,
		R01: number,
		R02: number,
		R10: number,
		R11: number,
		R12: number,
		R20: number,
		R21: number,
		R22: number,
	): CFrame;
}
declare const CFrame: CFrameConstructor;

interface Color3Constructor {
	/** Creates a Color3 with the given red, green, and blue. The numbers can range from 0 to 255. */
	fromRGB: (r: number, g: number, b: number) => Color3;
	/** Creates a Color3 with the given hue, saturation, and value. The numbers can range from 0 to 1. */
	fromHSV: (hue: number, sat: number, val: number) => Color3;
	/** Returns the hue, saturation, and value of a Color3. */
	toHSV: (color: Color3) => LuaTuple<[number, number, number]>;
	/** Returns a Color3 with the given red, green, and blue values. The numbers can range from 0 to 1, defaulting to 0 */
	new (red?: number, green?: number, blue?: number): Color3;
}

declare const Color3: Color3Constructor;

// ColorSequence
interface ColorSequence {
	readonly Keypoints: ReadonlyArray<ColorSequenceKeypoint>;
}
interface ColorSequenceConstructor {
	new (color: Color3): ColorSequence;
	new (c0: Color3, c1: Color3): ColorSequence;
	new (colors: ReadonlyArray<ColorSequenceKeypoint>): ColorSequence;
}
declare const ColorSequence: ColorSequenceConstructor;

// ColorSequenceKeypoint
interface ColorSequenceKeypoint {
	readonly Time: number;
	readonly Value: Color3;
}
type ColorSequenceKeypointConstructor = new (time: number, color: Color3) => ColorSequenceKeypoint;
declare const ColorSequenceKeypoint: ColorSequenceKeypointConstructor;

// DockWidgetPluginGuiInfo
interface DockWidgetPluginGuiInfo {
	readonly InitialDockState: Enum.InitialDockState;
	readonly InitialEnabled: boolean;
	readonly InitialEnabledShouldOverrideRestore: boolean;
	readonly FloatingXSize: number;
	readonly FloatingYSize: number;
	readonly MinWidth: number;
	readonly MinHeight: number;
}
type DockWidgetPluginGuiInfoConstructor = new (
	initDockState?: Enum.InitialDockState,
	initEnabled?: boolean,
	overrideEnabledRestore?: boolean,
	floatXSize?: number,
	floatYSize?: number,
	minWidth?: number,
	minHeight?: number,
) => DockWidgetPluginGuiInfo;
declare const DockWidgetPluginGuiInfo: DockWidgetPluginGuiInfoConstructor;

// Faces
interface Faces {
	readonly Top: boolean;
	readonly Bottom: boolean;
	readonly Back: boolean;
	readonly Front: boolean;
	readonly Right: boolean;
	readonly Left: boolean;
}
type FacesConstructor = new (...ids: Array<Enum.NormalId>) => Faces;
declare const Faces: FacesConstructor;

// NumberRange
interface NumberRange {
	readonly Min: number;
	readonly Max: number;
}
interface NumberRangeConstructor {
	new (value: number): NumberRange;
	new (minimum: number, maximum: number): NumberRange;
}
declare const NumberRange: NumberRangeConstructor;

// NumberSequence
interface NumberSequence {
	/** An array containing keypoint values for the NumberSequence. */
	readonly Keypoints: ReadonlyArray<NumberSequenceKeypoint>;
}
interface NumberSequenceConstructor {
	/** Creates a sequence of two keypoints with n for each value */
	new (n: number): NumberSequence;
	/** Creates a sequence of two keypoints with n0 and n1 as the value */
	new (n0: number, n1: number): NumberSequence;
	/** Creates a sequence with a given array containing keypoint values for the NumberSequence. */
	new (keypoints: ReadonlyArray<NumberSequenceKeypoint>): NumberSequence;
}
declare const NumberSequence: NumberSequenceConstructor;

// NumberSequenceKeypoint
interface NumberSequenceKeypoint {
	readonly Envelope: number;
	readonly Time: number;
	readonly Value: number;
}
interface NumberSequenceKeypointConstructor {
	/** Creates a keypoint with a specified time, value, and envelope if specified. */
	new (time: number, value: number, envelope?: number): NumberSequenceKeypoint;
}
declare const NumberSequenceKeypoint: NumberSequenceKeypointConstructor;

// PathWaypoint
interface PathWaypoint {
	readonly Action: Enum.PathWaypointAction;
	readonly Position: Vector3;
}
type PathWaypointConstructor = new (position: Vector3, action: Enum.PathWaypointAction) => PathWaypoint;
declare const PathWaypoint: PathWaypointConstructor;

// PhysicalProperties
interface PhysicalProperties {
	readonly Density: number;
	readonly Friction: number;
	readonly Elasticity: number;
	readonly FrictionWeight: number;
	readonly ElasticityWeight: number;
}
interface PhysicalPropertiesConstructor {
	new (material: Enum.Material): PhysicalProperties;
	new (density: number, friction: number, elasticity: number): PhysicalProperties;
	new (
		density: number,
		friction: number,
		elasticity: number,
		frictionWeight: number,
		elasticityWeight: number,
	): PhysicalProperties;
}
declare const PhysicalProperties: PhysicalPropertiesConstructor;

// Random
interface Random {
	NextInteger(min: number, max: number): number;
	NextNumber(): number;
	NextNumber(min: number, max: number): number;
	Clone(): Random;
}
interface RandomConstructor {
	new (seed: number): Random;
	new (): Random;
}
declare const Random: RandomConstructor;

// Ray
interface Ray {
	readonly Origin: Vector3;
	readonly Direction: Vector3;
	readonly Unit: Ray;
	ClosestPoint(point: Vector3): Vector3;
	Distance(point: Vector3): number;
}
type RayConstructor = new (origin: Vector3, direction: Vector3) => Ray;
declare const Ray: RayConstructor;

// Rect
interface Rect {
	readonly Min: Vector2;
	readonly Max: Vector2;
	readonly Width: number;
	readonly Height: number;
}
interface RectConstructor {
	new (min: Vector2, max: Vector2): Rect;
	new (minX: number, minY: number, maxX: number, maxY: number): Rect;
}
declare const Rect: RectConstructor;

// Region3
interface Region3 {
	readonly CFrame: CFrame;
	readonly Size: Vector3;
	ExpandToGrid(resolution: number): Region3;
}
type Region3Constructor = new (min: Vector3, max: Vector3) => Region3;
declare const Region3: Region3Constructor;

// Region3int16
interface Region3int16 {
	readonly Min: Vector3int16;
	readonly Max: Vector3int16;
}
type Region3int16Constructor = new (min: Vector3int16, max: Vector3int16) => Region3int16;
declare const Region3int16: Region3int16Constructor;

// TweenInfo
interface TweenInfo {
	readonly Time: number;
	readonly EasingStyle: Enum.EasingStyle;
	readonly EasingDirection: Enum.EasingDirection;
	readonly RepeatCount: number;
	readonly Reverses: boolean;
	readonly DelayTime: number;
}
type TweenInfoConstructor = new (
	time?: number,
	easingStyle?: Enum.EasingStyle,
	easingDirection?: Enum.EasingDirection,
	repeatCount?: number,
	reverses?: boolean,
	delayTime?: number,
) => TweenInfo;
declare const TweenInfo: TweenInfoConstructor;

// UDim
interface UDim {
	readonly Scale: number;
	readonly Offset: number;
}
type UDimConstructor = new (scale: number, offset: number) => UDim;
declare const UDim: UDimConstructor;

// UDim2
interface UDim2 {
	readonly X: UDim;
	readonly Y: UDim;
	readonly Width: UDim;
	readonly Height: UDim;
	Lerp(goal: UDim2, alpha: number): UDim2;
}
interface UDim2Constructor {
	new (): UDim2;
	new (xScale: number, xOffset: number, yScale: number, yOffset: number): UDim2;
	new (xDim: UDim, yDim: UDim): UDim2;
}
declare const UDim2: UDim2Constructor;

// Vector2
interface Vector2 {
	readonly X: number;
	readonly Y: number;
	readonly Unit: Vector2;
	readonly Magnitude: number;
	Dot(other: Vector2): number;
	Lerp(goal: Vector2, alpha: number): Vector2;
	Cross(other: Vector2): Vector2;
}
type Vector2Constructor = new (x?: number, y?: number) => Vector2;
declare const Vector2: Vector2Constructor;

// Vector2int16
interface Vector2int16 {
	readonly X: number;
	readonly Y: number;
}
type Vector2int16Constructor = new (x?: number, y?: number) => Vector2int16;
declare const Vector2int16: Vector2int16Constructor;

// Vector3
interface Vector3 {
	readonly X: number;
	readonly Y: number;
	readonly Z: number;
	readonly Unit: Vector3;
	readonly Magnitude: number;
	Lerp(goal: Vector3, alpha: number): Vector3;
	Dot(other: Vector3): number;
	Cross(other: Vector3): Vector3;
	isClose(other: Vector3, epsilon: number): boolean;
}
interface Vector3Constructor {
	FromNormalId: (norm: Enum.NormalId) => Vector3;
	FromAxis: (axis: Enum.Axis) => Vector3;
	new (x?: number, y?: number, z?: number): Vector3;
}
declare const Vector3: Vector3Constructor;

// Vector3int16
interface Vector3int16 {
	readonly X: number;
	readonly Y: number;
	readonly Z: number;
}
type Vector3int16Constructor = new (x?: number, y?: number, z?: number) => Vector3;
declare const Vector3int16: Vector3int16Constructor;

// unusable internal studio classes
interface QFont {}
interface QDir {}

// built-in globals
declare const game: DataModel;
declare const script: LuaSourceContainer;
declare const shared: object;

// built-in functions
declare function delay(delayTime: number, callback: Callback): void;
declare function elapsedTime(): number;
declare function require(moduleScript: ModuleScript | number): unknown;
declare function settings(): GlobalSettings;
declare function spawn(callback: Callback): void;
declare function tick(): number;
declare function time(): number;
declare function UserSettings(): UserSettings;
declare function version(): string;
declare function wait(seconds?: number): LuaTuple<[number, number]>;
declare function warn(...params: Array<any>): void;

// math functions
declare namespace math {
	/** Returns a perlin noise value between -0.5 and 0.5. If you leave arguments out, they will be interpreted as zero, so math.noise(1.158) is equivalent to math.noise(1.158, 0, 0) and math.noise(1.158, 5.723) is equivalent to math.noise(1.158, 5.723, 0).
	 * The function uses a perlin noise algorithm to assign fixed values to coordinates. For example, math.noise(1.158, 5.723) will always return 0.48397532105446 and math.noise(1.158, 6) will always return 0.15315161645412.
	 * If x, y and z are all integers, the return value will be 0. For fractional values of x, y and z, the return value will gradually fluctuate between -0.5 and 0.5. For coordinates that are close to each other, the return values will also be close to each other. */
	function noise(x?: number, y?: number, z?: number): number;

	/** Returns a number between min and max, inclusive. */
	function clamp(n: number, min: number, max: number): number;
}

// type
interface CheckablePrimitives {
	nil: undefined;
	boolean: boolean;
	string: string;
	number: number;
	table: object & Array<unknown>;
	userdata: unknown;
	function: Callback;
}

/**  Returns the type of its only argument, coded as a string. */
declare function type(value: any): keyof CheckablePrimitives;

// typeOf
interface CheckableTypes extends CheckablePrimitives {
	Instance: Instance;
	Axes: Axes;
	BrickColor: BrickColor;
	CFrame: CFrame;
	Color3: Color3;
	ColorSequence: ColorSequence;
	ColorSequenceKeypoint: ColorSequenceKeypoint;
	DockWidgetPluginGuiInfo: DockWidgetPluginGuiInfo;
	Faces: Faces;
	NumberRange: NumberRange;
	NumberSequence: NumberSequence;
	NumberSequenceKeypoint: NumberSequenceKeypoint;
	PathWaypoint: PathWaypoint;
	PhysicalProperties: PhysicalProperties;
	Random: Random;
	Ray: Ray;
	Rect: Rect;
	Region3: Region3;
	Region3int16: Region3int16;
	TweenInfo: TweenInfo;
	UDim: UDim;
	UDim2: UDim2;
	Vector2: Vector2;
	Vector2int16: Vector2int16;
	Vector3: Vector3;
	Vector3int16: Vector3int16;
}

/** Returns the type of the given object as a string. This function works similarly to Lua’s native type function, with the exceptions that Roblox-defined data types like Vector3 and CFrame return their respective data types as strings. */
declare function typeOf(value: any): keyof CheckableTypes;

/**
 * Returns true if `typeof(value) == type`, otherwise false.
 * This function allows for type narrowing. i.e.
```
// v is unknown
if (typeIs(v, "Vector3")) {
	print(v.X, v.Y, v.Z);
}
```
 **/
declare function typeIs<T extends keyof CheckableTypes>(value: any, type: T): value is CheckableTypes[T];
declare function typeIs(value: any, type: string): boolean;

/**
 * Calls the function func with the given arguments in protected mode.
 *
 * opcall is an easier to use version of pcall. It returns a result object instead of multiple returns.
 **/
declare function opcall<T extends Array<any>, U>(
	func: (...args: T) => U,
	...args: T
): { success: true; value: U } | { success: false; error: string };

/**
 * Returns true if `instance.ClassName == Q`, otherwise false.
 * This function allows for ClassName narrowing. i.e.
 * @example
 * if (classIs(o, "LocalScript")) {
 * // o is a LocalScript
 * }
 * if (classIs(o, "Script")) {
 * // o is a Script & { ClassName: "Script" }
 * // Notice how it specifies the ClassName property here.
 * // This is because a `LocalScript` is-a `Script`, but `o` refers to
 * // an instance for which `ClassName` is "Script"
 * }
 * @param instance
 * @param className
 */
declare function classIs<T extends Instance, Q extends T["ClassName"]>(
	instance: T,
	className: Q,
): instance is Instances[Q] extends T
	? (Instances[Q]["ClassName"] extends Q ? Instances[Q] : Instances[Q] & { ClassName: Q })
	: T;

declare function classIs(instance: Instance, type: string): boolean;
