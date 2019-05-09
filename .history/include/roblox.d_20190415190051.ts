/// <reference no-default-lib="true"/>
/// <reference path="es.d.ts" />
/// <reference path="lua.d.ts" />
/// <reference path="macro_math.d.ts" />
/// <reference path="generated_enums.d.ts" />
/// <reference path="generated_classes.d.ts" />

// ROBLOX API

type GetProperties<T> = {
	[Key in keyof T]-?: Key extends "GetPropertyChangedSignal"
		? never
		: T[Key] extends RBXScriptSignal
		? never
		: (() => any) extends T[Key]
		? never
		: Key
}[keyof T];

type FunctionArguments<T> = T extends (...args: infer U) => void ? U : [];

type Callback = (...args: Array<any>) => void;

interface Base<T extends string> {
	readonly ClassName: T;
}
type BaseType<T> = T extends Base<infer U> ? U : never;

declare const enum FriendLocationType {
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
			FriendLocationType.MobileWebsite | FriendLocationType.Website | FriendLocationType.XBoxApp,
			"VisitorId" | "UserName" | "LastOnline" | "IsOnline" | "LastLocation"
	  >
	| FieldsPresentWhen<
			FriendOnlineInfoFields,
			"LocationType",
			FriendLocationType.MobileInGame | FriendLocationType.InGame | FriendLocationType.TeamCreate,
			"VisitorId" | "UserName" | "LastOnline" | "IsOnline" | "LastLocation" | "PlaceId" | "GameId"
	  >
	| FieldsPresentWhen<
			FriendOnlineInfoFields,
			"LocationType",
			FriendLocationType.Studio,
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

interface AssetProductInfo extends ProductInfo {
	/** If InfoType was Asset, this is the ID of the given asset. */
	AssetId: number;
	/** The [type of asset](https://developer.roblox.com/articles/Asset-types) (e.g. place, model, shirt) */
	AssetTypeId: AssetType["id"];
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
	 * In TS, you can check this value against the `FriendLocationType` const enum
	 */
	LocationType: FriendLocationType;
}

/** A dictionary of an id and name containing information about what type an asset is */
type AssetType =
	| { id: 1; name: "Image" }
	| { id: 2; name: "TeeShirt" }
	| { id: 3; name: "Audio" }
	| { id: 4; name: "Mesh" }
	| { id: 5; name: "Lua" }
	| { id: 8; name: "Hat" }
	| { id: 9; name: "Place" }
	| { id: 10; name: "Model" }
	| { id: 11; name: "Shirt" }
	| { id: 12; name: "Pants" }
	| { id: 13; name: "Decal" }
	| { id: 17; name: "Head" }
	| { id: 18; name: "Face" }
	| { id: 19; name: "Gear" }
	| { id: 21; name: "Badge" }
	| { id: 24; name: "Animation" }
	| { id: 27; name: "Torso" }
	| { id: 28; name: "RightArm" }
	| { id: 29; name: "LeftArm" }
	| { id: 30; name: "LeftLeg" }
	| { id: 31; name: "RightLeg" }
	| { id: 32; name: "Package" }
	| { id: 34; name: "GamePass" }
	| { id: 38; name: "Plugin" }
	| { id: 40; name: "MeshPart" }
	| { id: 41; name: "HairAccessory" }
	| { id: 42; name: "FaceAccessory" }
	| { id: 43; name: "NeckAccessory" }
	| { id: 44; name: "ShoulderAccessory" }
	| { id: 45; name: "FrontAccessory" }
	| { id: 46; name: "BackAccessory" }
	| { id: 47; name: "WaistAccessory" }
	| { id: 48; name: "ClimbAnimation" }
	| { id: 49; name: "DeathAnimation" }
	| { id: 50; name: "FallAnimation" }
	| { id: 51; name: "IdleAnimation" }
	| { id: 52; name: "JumpAnimation" }
	| { id: 53; name: "RunAnimation" }
	| { id: 54; name: "SwimAnimation" }
	| { id: 55; name: "WalkAnimation" }
	| { id: 56; name: "PoseAnimation" }
	| { id: 57; name: "EarAccessory" }
	| { id: 58; name: "EyeAccessory" };

/** Information about a player's avatar in dictionary form */
interface CharacterAppearanceInfo {
	/** Describes the BrickColor values for each limb */
	bodyColors: {
		/** The BrickColor value of the leftArm */
		leftArmColorId: RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber]["Number"];
		/** The BrickColor value of the torso */
		torsoColorId: RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber]["Number"];
		/** The BrickColor value of the rightArm */
		rightArmColorId: RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber]["Number"];
		/** The BrickColor value of the head */
		headColorId: RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber]["Number"];
		/** The BrickColor value of the leftLeg */
		leftLegColorId: RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber]["Number"];
		/** The BrickColor value of the rightLeg */
		rightLegColorId: RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber]["Number"];
	};

	/** The assets currently equipped by the Player (hats, body parts, etc, excluding gear) */
	assets: Array<{
		/** The asset ID of the equipped asset */
		id: number;

		/** A table with `name` and `id` fields, each describing the kind of asset equipped ("Hat", "Face", etc.) */
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
	new <T extends keyof CreatableInstances>(className: T, parent?: Instance): CreatableInstances[T];
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

interface PointsService extends RbxInternalInstance {
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

interface RbxInternalMakeBrickColor<
	Number extends number = number,
	Name extends string = string,
	r extends number = number,
	g extends number = number,
	b extends number = number,
> {
	/** The unique number that identifies the BrickColor */
	readonly Number: Number;
	/** The name associated with the BrickColor */
	readonly Name: Name;
	/** The Color3 associated with the BrickColor */
	readonly Color: Color3<r, g, b>;
	/** The red component (between 0 and 1) */
	readonly r: r;
	/** The green component (between 0 and 1) */
	readonly g: g;
	/** The blue component (between 0 and 1) */
	readonly b: b;
}

interface Color3<r extends number = number, g extends number = number, b extends number = number> {
	/** The red component (between 0 and 1) */
	readonly r: r;
	/** The green component (between 0 and 1) */
	readonly g: g;
	/** The blue component (between 0 and 1) */
	readonly b: b;
	Lerp(goal: Color3, alpha: number): Color3;
}

interface RbxInternalBrickColorsByNumber {
	1: RbxInternalMakeBrickColor<1, "White", 0.9490196704864502, 0.9529412388801575, 0.9529412388801575>;
	2: RbxInternalMakeBrickColor<2, "Grey", 0.6313725709915161, 0.6470588445663452, 0.6352941393852234>;
	3: RbxInternalMakeBrickColor<3, "Light yellow", 0.9764706492424011, 0.9137255549430847, 0.6000000238418579>;
	5: RbxInternalMakeBrickColor<5, "Brick yellow", 0.8431373238563538, 0.7725490927696228, 0.6039215922355652>;
	6: RbxInternalMakeBrickColor<6, "Light green (Mint)", 0.760784387588501, 0.8549020290374756, 0.7215686440467834>;
	9: RbxInternalMakeBrickColor<9, "Light reddish violet", 0.9098039865493774, 0.729411780834198, 0.7843137979507446>;
	11: RbxInternalMakeBrickColor<11, "Pastel Blue", 0.501960813999176, 0.7333333492279053, 0.8588235974311829>;
	12: RbxInternalMakeBrickColor<12, "Light orange brown", 0.7960785031318665, 0.5176470875740051, 0.25882354378700256>;
	18: RbxInternalMakeBrickColor<18, "Nougat", 0.8000000715255737, 0.5568627715110779, 0.4117647409439087>;
	21: RbxInternalMakeBrickColor<21, "Bright red", 0.7686275243759155, 0.1568627506494522, 0.1098039299249649>;
	22: RbxInternalMakeBrickColor<22, "Med. reddish violet", 0.7686275243759155, 0.4392157196998596, 0.6274510025978088>;
	23: RbxInternalMakeBrickColor<23, "Bright blue", 0.05098039656877518, 0.4117647409439087, 0.6745098233222961>;
	24: RbxInternalMakeBrickColor<24, "Bright yellow", 0.960784375667572, 0.803921639919281, 0.1882353127002716>;
	25: RbxInternalMakeBrickColor<25, "Earth orange", 0.38431376218795776, 0.27843138575553894, 0.19607844948768616>;
	26: RbxInternalMakeBrickColor<26, "Black", 0.10588236153125763, 0.16470588743686676, 0.20784315466880798>;
	27: RbxInternalMakeBrickColor<27, "Dark grey", 0.4274510145187378, 0.43137258291244507, 0.4235294461250305>;
	28: RbxInternalMakeBrickColor<28, "Dark green", 0.1568627506494522, 0.49803924560546875, 0.27843138575553894>;
	29: RbxInternalMakeBrickColor<29, "Medium green", 0.6313725709915161, 0.7686275243759155, 0.5490196347236633>;
	36: RbxInternalMakeBrickColor<36, "Lig. Yellowich orange", 0.9529412388801575, 0.8117647767066956, 0.6078431606292725>;
	37: RbxInternalMakeBrickColor<37, "Bright green", 0.29411765933036804, 0.5921568870544434, 0.29411765933036804>;
	38: RbxInternalMakeBrickColor<38, "Dark orange", 0.6274510025978088, 0.37254902720451355, 0.20784315466880798>;
	39: RbxInternalMakeBrickColor<39, "Light bluish violet", 0.7568628191947937, 0.7921569347381592, 0.8705883026123047>;
	40: RbxInternalMakeBrickColor<40, "Transparent", 0.9254902601242065, 0.9254902601242065, 0.9254902601242065>;
	41: RbxInternalMakeBrickColor<41, "Tr. Red", 0.803921639919281, 0.3294117748737335, 0.29411765933036804>;
	42: RbxInternalMakeBrickColor<42, "Tr. Lg blue", 0.7568628191947937, 0.874509871006012, 0.9411765336990356>;
	43: RbxInternalMakeBrickColor<43, "Tr. Blue", 0.48235297203063965, 0.7137255072593689, 0.9098039865493774>;
	44: RbxInternalMakeBrickColor<44, "Tr. Yellow", 0.9686275124549866, 0.9450981020927429, 0.5529412031173706>;
	45: RbxInternalMakeBrickColor<45, "Light blue", 0.7058823704719543, 0.8235294818878174, 0.8941177129745483>;
	47: RbxInternalMakeBrickColor<47, "Tr. Flu. Reddish orange", 0.8509804606437683, 0.5215686559677124, 0.4235294461250305>;
	48: RbxInternalMakeBrickColor<48, "Tr. Green", 0.5176470875740051, 0.7137255072593689, 0.5529412031173706>;
	49: RbxInternalMakeBrickColor<49, "Tr. Flu. Green", 0.9725490808486938, 0.9450981020927429, 0.5176470875740051>;
	50: RbxInternalMakeBrickColor<50, "Phosph. White", 0.9254902601242065, 0.9098039865493774, 0.8705883026123047>;
	100: RbxInternalMakeBrickColor<100, "Light red", 0.9333333969116211, 0.7686275243759155, 0.7137255072593689>;
	101: RbxInternalMakeBrickColor<101, "Medium red", 0.8549020290374756, 0.5254902243614197, 0.4784314036369324>;
	102: RbxInternalMakeBrickColor<102, "Medium blue", 0.43137258291244507, 0.6000000238418579, 0.7921569347381592>;
	103: RbxInternalMakeBrickColor<103, "Light grey", 0.7803922295570374, 0.7568628191947937, 0.7176470756530762>;
	104: RbxInternalMakeBrickColor<104, "Bright violet", 0.41960787773132324, 0.19607844948768616, 0.4862745404243469>;
	105: RbxInternalMakeBrickColor<105, "Br. yellowish orange", 0.8862745761871338, 0.6078431606292725, 0.250980406999588>;
	106: RbxInternalMakeBrickColor<106, "Bright orange", 0.8549020290374756, 0.5215686559677124, 0.2549019753932953>;
	107: RbxInternalMakeBrickColor<107, "Bright bluish green", 0, 0.5607843399047852, 0.6117647290229797>;
	108: RbxInternalMakeBrickColor<108, "Earth yellow", 0.4078431725502014, 0.3607843220233917, 0.26274511218070984>;
	110: RbxInternalMakeBrickColor<110, "Bright bluish violet", 0.26274511218070984, 0.3294117748737335, 0.5764706134796143>;
	111: RbxInternalMakeBrickColor<111, "Tr. Brown", 0.7490196228027344, 0.7176470756530762, 0.6941176652908325>;
	112: RbxInternalMakeBrickColor<112, "Medium bluish violet", 0.4078431725502014, 0.4549019932746887, 0.6745098233222961>;
	113: RbxInternalMakeBrickColor<113, "Tr. Medi. reddish violet", 0.8980392813682556, 0.6784313917160034, 0.7843137979507446>;
	115: RbxInternalMakeBrickColor<115, "Med. yellowish green", 0.7803922295570374, 0.8235294818878174, 0.2352941334247589>;
	116: RbxInternalMakeBrickColor<116, "Med. bluish green", 0.3333333432674408, 0.6470588445663452, 0.686274528503418>;
	118: RbxInternalMakeBrickColor<118, "Light bluish green", 0.7176470756530762, 0.8431373238563538, 0.8352941870689392>;
	119: RbxInternalMakeBrickColor<119, "Br. yellowish green", 0.6431372761726379, 0.7411764860153198, 0.27843138575553894>;
	120: RbxInternalMakeBrickColor<120, "Lig. yellowish green", 0.8509804606437683, 0.8941177129745483, 0.6549019813537598>;
	121: RbxInternalMakeBrickColor<121, "Med. yellowish orange", 0.9058824181556702, 0.6745098233222961, 0.3450980484485626>;
	123: RbxInternalMakeBrickColor<123, "Br. reddish orange", 0.8274510502815247, 0.43529415130615234, 0.2980392277240753>;
	124: RbxInternalMakeBrickColor<124, "Bright reddish violet", 0.572549045085907, 0.22352942824363708, 0.4705882668495178>;
	125: RbxInternalMakeBrickColor<125, "Light orange", 0.917647123336792, 0.7215686440467834, 0.572549045085907>;
	126: RbxInternalMakeBrickColor<126, "Tr. Bright bluish violet", 0.6470588445663452, 0.6470588445663452, 0.7960785031318665>;
	127: RbxInternalMakeBrickColor<127, "Gold", 0.8627451658248901, 0.7372549176216125, 0.5058823823928833>;
	128: RbxInternalMakeBrickColor<128, "Dark nougat", 0.6823529601097107, 0.4784314036369324, 0.3490196168422699>;
	131: RbxInternalMakeBrickColor<131, "Silver", 0.6117647290229797, 0.6392157077789307, 0.658823549747467>;
	133: RbxInternalMakeBrickColor<133, "Neon orange", 0.8352941870689392, 0.45098042488098145, 0.2392157018184662>;
	134: RbxInternalMakeBrickColor<134, "Neon green", 0.847058892250061, 0.8666667342185974, 0.33725491166114807>;
	135: RbxInternalMakeBrickColor<135, "Sand blue", 0.4549019932746887, 0.5254902243614197, 0.615686297416687>;
	136: RbxInternalMakeBrickColor<136, "Sand violet", 0.529411792755127, 0.4862745404243469, 0.5647059082984924>;
	137: RbxInternalMakeBrickColor<137, "Medium orange", 0.8784314393997192, 0.5960784554481506, 0.3921568989753723>;
	138: RbxInternalMakeBrickColor<138, "Sand yellow", 0.5843137502670288, 0.5411764979362488, 0.45098042488098145>;
	140: RbxInternalMakeBrickColor<140, "Earth blue", 0.125490203499794, 0.22745099663734436, 0.33725491166114807>;
	141: RbxInternalMakeBrickColor<141, "Earth green", 0.15294118225574493, 0.27450981736183167, 0.1764705926179886>;
	143: RbxInternalMakeBrickColor<143, "Tr. Flu. Blue", 0.8117647767066956, 0.8862745761871338, 0.9686275124549866>;
	145: RbxInternalMakeBrickColor<145, "Sand blue metallic", 0.4745098352432251, 0.5333333611488342, 0.6313725709915161>;
	146: RbxInternalMakeBrickColor<146, "Sand violet metallic", 0.5843137502670288, 0.5568627715110779, 0.6392157077789307>;
	147: RbxInternalMakeBrickColor<147, "Sand yellow metallic", 0.5764706134796143, 0.529411792755127, 0.40392160415649414>;
	148: RbxInternalMakeBrickColor<148, "Dark grey metallic", 0.34117648005485535, 0.3450980484485626, 0.34117648005485535>;
	149: RbxInternalMakeBrickColor<149, "Black metallic", 0.08627451211214066, 0.11372549831867218, 0.19607844948768616>;
	150: RbxInternalMakeBrickColor<150, "Light grey metallic", 0.6705882549285889, 0.6784313917160034, 0.6745098233222961>;
	151: RbxInternalMakeBrickColor<151, "Sand green", 0.4705882668495178, 0.5647059082984924, 0.5098039507865906>;
	153: RbxInternalMakeBrickColor<153, "Sand red", 0.5843137502670288, 0.4745098352432251, 0.46666669845581055>;
	154: RbxInternalMakeBrickColor<154, "Dark red", 0.48235297203063965, 0.18039216101169586, 0.18431372940540314>;
	157: RbxInternalMakeBrickColor<157, "Tr. Flu. Yellow", 1, 0.9647059440612793, 0.48235297203063965>;
	158: RbxInternalMakeBrickColor<158, "Tr. Flu. Red", 0.8823530077934265, 0.6431372761726379, 0.760784387588501>;
	168: RbxInternalMakeBrickColor<168, "Gun metallic", 0.458823561668396, 0.4235294461250305, 0.38431376218795776>;
	176: RbxInternalMakeBrickColor<176, "Red flip/flop", 0.5921568870544434, 0.4117647409439087, 0.35686275362968445>;
	178: RbxInternalMakeBrickColor<178, "Yellow flip/flop", 0.7058823704719543, 0.5176470875740051, 0.3333333432674408>;
	179: RbxInternalMakeBrickColor<179, "Silver flip/flop", 0.5372549295425415, 0.529411792755127, 0.5333333611488342>;
	180: RbxInternalMakeBrickColor<180, "Curry", 0.8431373238563538, 0.6627451181411743, 0.29411765933036804>;
	190: RbxInternalMakeBrickColor<190, "Fire Yellow", 0.9764706492424011, 0.8392157554626465, 0.18039216101169586>;
	191: RbxInternalMakeBrickColor<191, "Flame yellowish orange", 0.9098039865493774, 0.6705882549285889, 0.1764705926179886>;
	192: RbxInternalMakeBrickColor<192, "Reddish brown", 0.4117647409439087, 0.250980406999588, 0.1568627506494522>;
	193: RbxInternalMakeBrickColor<193, "Flame reddish orange", 0.8117647767066956, 0.3764706254005432, 0.1411764770746231>;
	194: RbxInternalMakeBrickColor<194, "Medium stone grey", 0.6392157077789307, 0.6352941393852234, 0.6470588445663452>;
	195: RbxInternalMakeBrickColor<195, "Royal blue", 0.27450981736183167, 0.40392160415649414, 0.6431372761726379>;
	196: RbxInternalMakeBrickColor<196, "Dark Royal blue", 0.13725490868091583, 0.27843138575553894, 0.545098066329956>;
	198: RbxInternalMakeBrickColor<198, "Bright reddish lilac", 0.5568627715110779, 0.25882354378700256, 0.5215686559677124>;
	199: RbxInternalMakeBrickColor<199, "Dark stone grey", 0.38823533058166504, 0.37254902720451355, 0.38431376218795776>;
	200: RbxInternalMakeBrickColor<200, "Lemon metalic", 0.5098039507865906, 0.5411764979362488, 0.364705890417099>;
	208: RbxInternalMakeBrickColor<208, "Light stone grey", 0.8980392813682556, 0.8941177129745483, 0.874509871006012>;
	209: RbxInternalMakeBrickColor<209, "Dark Curry", 0.6901960968971252, 0.5568627715110779, 0.2666666805744171>;
	210: RbxInternalMakeBrickColor<210, "Faded green", 0.4392157196998596, 0.5843137502670288, 0.4705882668495178>;
	211: RbxInternalMakeBrickColor<211, "Turquoise", 0.4745098352432251, 0.7098039388656616, 0.7098039388656616>;
	212: RbxInternalMakeBrickColor<212, "Light Royal blue", 0.6235294342041016, 0.7647059559822083, 0.9137255549430847>;
	213: RbxInternalMakeBrickColor<213, "Medium Royal blue", 0.4235294461250305, 0.5058823823928833, 0.7176470756530762>;
	216: RbxInternalMakeBrickColor<216, "Rust", 0.5647059082984924, 0.2980392277240753, 0.16470588743686676>;
	217: RbxInternalMakeBrickColor<217, "Brown", 0.4862745404243469, 0.3607843220233917, 0.27450981736183167>;
	218: RbxInternalMakeBrickColor<218, "Reddish lilac", 0.5882353186607361, 0.4392157196998596, 0.6235294342041016>;
	219: RbxInternalMakeBrickColor<219, "Lilac", 0.41960787773132324, 0.38431376218795776, 0.6078431606292725>;
	220: RbxInternalMakeBrickColor<220, "Light lilac", 0.6549019813537598, 0.6627451181411743, 0.8078432083129883>;
	221: RbxInternalMakeBrickColor<221, "Bright purple", 0.803921639919281, 0.38431376218795776, 0.5960784554481506>;
	222: RbxInternalMakeBrickColor<222, "Light purple", 0.8941177129745483, 0.6784313917160034, 0.7843137979507446>;
	223: RbxInternalMakeBrickColor<223, "Light pink", 0.8627451658248901, 0.5647059082984924, 0.5843137502670288>;
	224: RbxInternalMakeBrickColor<224, "Light brick yellow", 0.9411765336990356, 0.8352941870689392, 0.6274510025978088>;
	225: RbxInternalMakeBrickColor<225, "Warm yellowish orange", 0.9215686917304993, 0.7215686440467834, 0.49803924560546875>;
	226: RbxInternalMakeBrickColor<226, "Cool yellow", 0.9921569228172302, 0.917647123336792, 0.5529412031173706>;
	232: RbxInternalMakeBrickColor<232, "Dove blue", 0.4901961088180542, 0.7333333492279053, 0.8666667342185974>;
	268: RbxInternalMakeBrickColor<268, "Medium lilac", 0.2039215862751007, 0.16862745583057404, 0.458823561668396>;
	301: RbxInternalMakeBrickColor<301, "Slime green", 0.3137255012989044, 0.4274510145187378, 0.3294117748737335>;
	302: RbxInternalMakeBrickColor<302, "Smoky grey", 0.35686275362968445, 0.364705890417099, 0.4117647409439087>;
	303: RbxInternalMakeBrickColor<303, "Dark blue", 0, 0.062745101749897, 0.6901960968971252>;
	304: RbxInternalMakeBrickColor<304, "Parsley green", 0.1725490242242813, 0.3960784673690796, 0.11372549831867218>;
	305: RbxInternalMakeBrickColor<305, "Steel blue", 0.32156863808631897, 0.4862745404243469, 0.6823529601097107>;
	306: RbxInternalMakeBrickColor<306, "Storm blue", 0.20000001788139343, 0.3450980484485626, 0.5098039507865906>;
	307: RbxInternalMakeBrickColor<307, "Lapis", 0.062745101749897, 0.16470588743686676, 0.8627451658248901>;
	308: RbxInternalMakeBrickColor<308, "Dark indigo", 0.2392157018184662, 0.08235294371843338, 0.5215686559677124>;
	309: RbxInternalMakeBrickColor<309, "Sea green", 0.2039215862751007, 0.5568627715110779, 0.250980406999588>;
	310: RbxInternalMakeBrickColor<310, "Shamrock", 0.35686275362968445, 0.6039215922355652, 0.2980392277240753>;
	311: RbxInternalMakeBrickColor<311, "Fossil", 0.6235294342041016, 0.6313725709915161, 0.6745098233222961>;
	312: RbxInternalMakeBrickColor<312, "Mulberry", 0.3490196168422699, 0.13333334028720856, 0.3490196168422699>;
	313: RbxInternalMakeBrickColor<313, "Forest green", 0.12156863510608673, 0.501960813999176, 0.11372549831867218>;
	314: RbxInternalMakeBrickColor<314, "Cadet blue", 0.6235294342041016, 0.6784313917160034, 0.7529412508010864>;
	315: RbxInternalMakeBrickColor<315, "Electric blue", 0.03529411926865578, 0.5372549295425415, 0.8117647767066956>;
	316: RbxInternalMakeBrickColor<316, "Eggplant", 0.48235297203063965, 0, 0.48235297203063965>;
	317: RbxInternalMakeBrickColor<317, "Moss", 0.4862745404243469, 0.6117647290229797, 0.41960787773132324>;
	318: RbxInternalMakeBrickColor<318, "Artichoke", 0.5411764979362488, 0.6705882549285889, 0.5215686559677124>;
	319: RbxInternalMakeBrickColor<319, "Sage green", 0.7254902124404907, 0.7686275243759155, 0.6941176652908325>;
	320: RbxInternalMakeBrickColor<320, "Ghost grey", 0.7921569347381592, 0.7960785031318665, 0.8196079134941101>;
	321: RbxInternalMakeBrickColor<321, "Lilac", 0.6549019813537598, 0.3686274588108063, 0.6078431606292725>;
	322: RbxInternalMakeBrickColor<322, "Plum", 0.48235297203063965, 0.18431372940540314, 0.48235297203063965>;
	323: RbxInternalMakeBrickColor<323, "Olivine", 0.5803921818733215, 0.7450980544090271, 0.5058823823928833>;
	324: RbxInternalMakeBrickColor<324, "Laurel green", 0.658823549747467, 0.7411764860153198, 0.6000000238418579>;
	325: RbxInternalMakeBrickColor<325, "Quill grey", 0.874509871006012, 0.874509871006012, 0.8705883026123047>;
	327: RbxInternalMakeBrickColor<327, "Crimson", 0.5921568870544434, 0, 0>;
	328: RbxInternalMakeBrickColor<328, "Mint", 0.6941176652908325, 0.8980392813682556, 0.6509804129600525>;
	329: RbxInternalMakeBrickColor<329, "Baby blue", 0.5960784554481506, 0.760784387588501, 0.8588235974311829>;
	330: RbxInternalMakeBrickColor<330, "Carnation pink", 1, 0.5960784554481506, 0.8627451658248901>;
	331: RbxInternalMakeBrickColor<331, "Persimmon", 1, 0.3490196168422699, 0.3490196168422699>;
	332: RbxInternalMakeBrickColor<332, "Maroon", 0.458823561668396, 0, 0>;
	333: RbxInternalMakeBrickColor<333, "Gold", 0.9372549653053284, 0.7215686440467834, 0.2196078598499298>;
	334: RbxInternalMakeBrickColor<334, "Daisy orange", 0.9725490808486938, 0.8509804606437683, 0.4274510145187378>;
	335: RbxInternalMakeBrickColor<335, "Pearl", 0.9058824181556702, 0.9058824181556702, 0.9254902601242065>;
	336: RbxInternalMakeBrickColor<336, "Fog", 0.7803922295570374, 0.8313726186752319, 0.8941177129745483>;
	337: RbxInternalMakeBrickColor<337, "Salmon", 1, 0.5803921818733215, 0.5803921818733215>;
	338: RbxInternalMakeBrickColor<338, "Terra Cotta", 0.7450980544090271, 0.4078431725502014, 0.38431376218795776>;
	339: RbxInternalMakeBrickColor<339, "Cocoa", 0.33725491166114807, 0.1411764770746231, 0.1411764770746231>;
	340: RbxInternalMakeBrickColor<340, "Wheat", 0.9450981020927429, 0.9058824181556702, 0.7803922295570374>;
	341: RbxInternalMakeBrickColor<341, "Buttermilk", 0.9960784912109375, 0.9529412388801575, 0.7333333492279053>;
	342: RbxInternalMakeBrickColor<342, "Mauve", 0.8784314393997192, 0.6980392336845398, 0.8156863451004028>;
	343: RbxInternalMakeBrickColor<343, "Sunrise", 0.8313726186752319, 0.5647059082984924, 0.7411764860153198>;
	344: RbxInternalMakeBrickColor<344, "Tawny", 0.5882353186607361, 0.3333333432674408, 0.3333333432674408>;
	345: RbxInternalMakeBrickColor<345, "Rust", 0.5607843399047852, 0.2980392277240753, 0.16470588743686676>;
	346: RbxInternalMakeBrickColor<346, "Cashmere", 0.8274510502815247, 0.7450980544090271, 0.5882353186607361>;
	347: RbxInternalMakeBrickColor<347, "Khaki", 0.8862745761871338, 0.8627451658248901, 0.7372549176216125>;
	348: RbxInternalMakeBrickColor<348, "Lily white", 0.9294118285179138, 0.917647123336792, 0.917647123336792>;
	349: RbxInternalMakeBrickColor<349, "Seashell", 0.9137255549430847, 0.8549020290374756, 0.8549020290374756>;
	350: RbxInternalMakeBrickColor<350, "Burgundy", 0.5333333611488342, 0.24313727021217346, 0.24313727021217346>;
	351: RbxInternalMakeBrickColor<351, "Cork", 0.7372549176216125, 0.6078431606292725, 0.364705890417099>;
	352: RbxInternalMakeBrickColor<352, "Burlap", 0.7803922295570374, 0.6745098233222961, 0.4705882668495178>;
	353: RbxInternalMakeBrickColor<353, "Beige", 0.7921569347381592, 0.7490196228027344, 0.6392157077789307>;
	354: RbxInternalMakeBrickColor<354, "Oyster", 0.7333333492279053, 0.7019608020782471, 0.6980392336845398>;
	355: RbxInternalMakeBrickColor<355, "Pine Cone", 0.4235294461250305, 0.3450980484485626, 0.29411765933036804>;
	356: RbxInternalMakeBrickColor<356, "Fawn brown", 0.6274510025978088, 0.5176470875740051, 0.30980393290519714>;
	357: RbxInternalMakeBrickColor<357, "Hurricane grey", 0.5843137502670288, 0.5372549295425415, 0.5333333611488342>;
	358: RbxInternalMakeBrickColor<358, "Cloudy grey", 0.6705882549285889, 0.658823549747467, 0.6196078658103943>;
	359: RbxInternalMakeBrickColor<359, "Linen", 0.686274528503418, 0.5803921818733215, 0.5137255191802979>;
	360: RbxInternalMakeBrickColor<360, "Copper", 0.5882353186607361, 0.40392160415649414, 0.40000003576278687>;
	361: RbxInternalMakeBrickColor<361, "Dirt brown", 0.33725491166114807, 0.25882354378700256, 0.21176472306251526>;
	362: RbxInternalMakeBrickColor<362, "Bronze", 0.4941176772117615, 0.4078431725502014, 0.24705883860588074>;
	363: RbxInternalMakeBrickColor<363, "Flint", 0.4117647409439087, 0.40000003576278687, 0.3607843220233917>;
	364: RbxInternalMakeBrickColor<364, "Dark taupe", 0.3529411852359772, 0.2980392277240753, 0.25882354378700256>;
	365: RbxInternalMakeBrickColor<365, "Burnt Sienna", 0.41568630933761597, 0.22352942824363708, 0.03529411926865578>;
	1001: RbxInternalMakeBrickColor<1001, "Institutional white", 0.9725490808486938, 0.9725490808486938, 0.9725490808486938>;
	1002: RbxInternalMakeBrickColor<1002, "Mid gray", 0.803921639919281, 0.803921639919281, 0.803921639919281>;
	1003: RbxInternalMakeBrickColor<1003, "Really black", 0.06666667014360428, 0.06666667014360428, 0.06666667014360428>;
	1004: RbxInternalMakeBrickColor<1004, "Really red", 1, 0, 0>;
	1005: RbxInternalMakeBrickColor<1005, "Deep orange", 1, 0.6901960968971252, 0>;
	1006: RbxInternalMakeBrickColor<1006, "Alder", 0.7058823704719543, 0.501960813999176, 1>;
	1007: RbxInternalMakeBrickColor<1007, "Dusty Rose", 0.6392157077789307, 0.29411765933036804, 0.29411765933036804>;
	1008: RbxInternalMakeBrickColor<1008, "Olive", 0.7568628191947937, 0.7450980544090271, 0.25882354378700256>;
	1009: RbxInternalMakeBrickColor<1009, "New Yeller", 1, 1, 0>;
	1010: RbxInternalMakeBrickColor<1010, "Really blue", 0, 0, 1>;
	1011: RbxInternalMakeBrickColor<1011, "Navy blue", 0, 0.125490203499794, 0.3764706254005432>;
	1012: RbxInternalMakeBrickColor<1012, "Deep blue", 0.12941177189350128, 0.3294117748737335, 0.7254902124404907>;
	1013: RbxInternalMakeBrickColor<1013, "Cyan", 0.01568627543747425, 0.686274528503418, 0.9254902601242065>;
	1014: RbxInternalMakeBrickColor<1014, "CGA brown", 0.6666666865348816, 0.3333333432674408, 0>;
	1015: RbxInternalMakeBrickColor<1015, "Magenta", 0.6666666865348816, 0, 0.6666666865348816>;
	1016: RbxInternalMakeBrickColor<1016, "Pink", 1, 0.40000003576278687, 0.8000000715255737>;
	1017: RbxInternalMakeBrickColor<1017, "Deep orange", 1, 0.686274528503418, 0>;
	1018: RbxInternalMakeBrickColor<1018, "Teal", 0.07058823853731155, 0.9333333969116211, 0.8313726186752319>;
	1019: RbxInternalMakeBrickColor<1019, "Toothpaste", 0, 1, 1>;
	1020: RbxInternalMakeBrickColor<1020, "Lime green", 0, 1, 0>;
	1021: RbxInternalMakeBrickColor<1021, "Camo", 0.22745099663734436, 0.4901961088180542, 0.08235294371843338>;
	1022: RbxInternalMakeBrickColor<1022, "Grime", 0.49803924560546875, 0.5568627715110779, 0.3921568989753723>;
	1023: RbxInternalMakeBrickColor<1023, "Lavender", 0.5490196347236633, 0.35686275362968445, 0.6235294342041016>;
	1024: RbxInternalMakeBrickColor<1024, "Pastel light blue", 0.686274528503418, 0.8666667342185974, 1>;
	1025: RbxInternalMakeBrickColor<1025, "Pastel orange", 1, 0.7882353663444519, 0.7882353663444519>;
	1026: RbxInternalMakeBrickColor<1026, "Pastel violet", 0.6941176652908325, 0.6549019813537598, 1>;
	1027: RbxInternalMakeBrickColor<1027, "Pastel blue-green", 0.6235294342041016, 0.9529412388801575, 0.9137255549430847>;
	1028: RbxInternalMakeBrickColor<1028, "Pastel green", 0.8000000715255737, 1, 0.8000000715255737>;
	1029: RbxInternalMakeBrickColor<1029, "Pastel yellow", 1, 1, 0.8000000715255737>;
	1030: RbxInternalMakeBrickColor<1030, "Pastel brown", 1, 0.8000000715255737, 0.6000000238418579>;
	1031: RbxInternalMakeBrickColor<1031, "Royal purple", 0.38431376218795776, 0.14509804546833038, 0.8196079134941101>;
	1032: RbxInternalMakeBrickColor<1032, "Hot pink", 1, 0, 0.7490196228027344>;
}

interface RbxInternalBrickColorsByPalette {
	[0]: RbxInternalBrickColorsByNumber[141];
	[1]: RbxInternalBrickColorsByNumber[301];
	[2]: RbxInternalBrickColorsByNumber[107];
	[3]: RbxInternalBrickColorsByNumber[26];
	[4]: RbxInternalBrickColorsByNumber[1012];
	[5]: RbxInternalBrickColorsByNumber[303];
	[6]: RbxInternalBrickColorsByNumber[1011];
	[7]: RbxInternalBrickColorsByNumber[304];
	[8]: RbxInternalBrickColorsByNumber[28];
	[9]: RbxInternalBrickColorsByNumber[1018];
	[10]: RbxInternalBrickColorsByNumber[302];
	[11]: RbxInternalBrickColorsByNumber[305];
	[12]: RbxInternalBrickColorsByNumber[306];
	[13]: RbxInternalBrickColorsByNumber[307];
	[14]: RbxInternalBrickColorsByNumber[308];
	[15]: RbxInternalBrickColorsByNumber[1021];
	[16]: RbxInternalBrickColorsByNumber[309];
	[17]: RbxInternalBrickColorsByNumber[310];
	[18]: RbxInternalBrickColorsByNumber[1019];
	[19]: RbxInternalBrickColorsByNumber[135];
	[20]: RbxInternalBrickColorsByNumber[102];
	[21]: RbxInternalBrickColorsByNumber[23];
	[22]: RbxInternalBrickColorsByNumber[1010];
	[23]: RbxInternalBrickColorsByNumber[312];
	[24]: RbxInternalBrickColorsByNumber[313];
	[25]: RbxInternalBrickColorsByNumber[37];
	[26]: RbxInternalBrickColorsByNumber[1022];
	[27]: RbxInternalBrickColorsByNumber[1020];
	[28]: RbxInternalBrickColorsByNumber[1027];
	[29]: RbxInternalBrickColorsByNumber[311];
	[30]: RbxInternalBrickColorsByNumber[315];
	[31]: RbxInternalBrickColorsByNumber[1023];
	[32]: RbxInternalBrickColorsByNumber[1031];
	[33]: RbxInternalBrickColorsByNumber[316];
	[34]: RbxInternalBrickColorsByNumber[151];
	[35]: RbxInternalBrickColorsByNumber[317];
	[36]: RbxInternalBrickColorsByNumber[318];
	[37]: RbxInternalBrickColorsByNumber[319];
	[38]: RbxInternalBrickColorsByNumber[1024];
	[39]: RbxInternalBrickColorsByNumber[314];
	[40]: RbxInternalBrickColorsByNumber[1013];
	[41]: RbxInternalBrickColorsByNumber[1006];
	[42]: RbxInternalBrickColorsByNumber[321];
	[43]: RbxInternalBrickColorsByNumber[322];
	[44]: RbxInternalBrickColorsByNumber[104];
	[45]: RbxInternalBrickColorsByNumber[1008];
	[46]: RbxInternalBrickColorsByNumber[119];
	[47]: RbxInternalBrickColorsByNumber[323];
	[48]: RbxInternalBrickColorsByNumber[324];
	[49]: RbxInternalBrickColorsByNumber[325];
	[50]: RbxInternalBrickColorsByNumber[320];
	[51]: RbxInternalBrickColorsByNumber[11];
	[52]: RbxInternalBrickColorsByNumber[1026];
	[53]: RbxInternalBrickColorsByNumber[1016];
	[54]: RbxInternalBrickColorsByNumber[1032];
	[55]: RbxInternalBrickColorsByNumber[1015];
	[56]: RbxInternalBrickColorsByNumber[327];
	[57]: RbxInternalBrickColorsByNumber[1005];
	[58]: RbxInternalBrickColorsByNumber[1009];
	[59]: RbxInternalBrickColorsByNumber[29];
	[60]: RbxInternalBrickColorsByNumber[328];
	[61]: RbxInternalBrickColorsByNumber[1028];
	[62]: RbxInternalBrickColorsByNumber[208];
	[63]: RbxInternalBrickColorsByNumber[45];
	[64]: RbxInternalBrickColorsByNumber[329];
	[65]: RbxInternalBrickColorsByNumber[330];
	[66]: RbxInternalBrickColorsByNumber[331];
	[67]: RbxInternalBrickColorsByNumber[1004];
	[68]: RbxInternalBrickColorsByNumber[21];
	[69]: RbxInternalBrickColorsByNumber[332];
	[70]: RbxInternalBrickColorsByNumber[333];
	[71]: RbxInternalBrickColorsByNumber[24];
	[72]: RbxInternalBrickColorsByNumber[334];
	[73]: RbxInternalBrickColorsByNumber[226];
	[74]: RbxInternalBrickColorsByNumber[1029];
	[75]: RbxInternalBrickColorsByNumber[335];
	[76]: RbxInternalBrickColorsByNumber[336];
	[77]: RbxInternalBrickColorsByNumber[342];
	[78]: RbxInternalBrickColorsByNumber[343];
	[79]: RbxInternalBrickColorsByNumber[338];
	[80]: RbxInternalBrickColorsByNumber[1007];
	[81]: RbxInternalBrickColorsByNumber[339];
	[82]: RbxInternalBrickColorsByNumber[133];
	[83]: RbxInternalBrickColorsByNumber[106];
	[84]: RbxInternalBrickColorsByNumber[340];
	[85]: RbxInternalBrickColorsByNumber[341];
	[86]: RbxInternalBrickColorsByNumber[1001];
	[87]: RbxInternalBrickColorsByNumber[1];
	[88]: RbxInternalBrickColorsByNumber[9];
	[89]: RbxInternalBrickColorsByNumber[1025];
	[90]: RbxInternalBrickColorsByNumber[337];
	[91]: RbxInternalBrickColorsByNumber[344];
	[92]: RbxInternalBrickColorsByNumber[345];
	[93]: RbxInternalBrickColorsByNumber[1014];
	[94]: RbxInternalBrickColorsByNumber[105];
	[95]: RbxInternalBrickColorsByNumber[346];
	[96]: RbxInternalBrickColorsByNumber[347];
	[97]: RbxInternalBrickColorsByNumber[348];
	[98]: RbxInternalBrickColorsByNumber[349];
	[99]: RbxInternalBrickColorsByNumber[1030];
	[100]: RbxInternalBrickColorsByNumber[125];
	[101]: RbxInternalBrickColorsByNumber[101];
	[102]: RbxInternalBrickColorsByNumber[350];
	[103]: RbxInternalBrickColorsByNumber[192];
	[104]: RbxInternalBrickColorsByNumber[351];
	[105]: RbxInternalBrickColorsByNumber[352];
	[106]: RbxInternalBrickColorsByNumber[353];
	[107]: RbxInternalBrickColorsByNumber[354];
	[108]: RbxInternalBrickColorsByNumber[1002];
	[109]: RbxInternalBrickColorsByNumber[5];
	[110]: RbxInternalBrickColorsByNumber[18];
	[111]: RbxInternalBrickColorsByNumber[217];
	[112]: RbxInternalBrickColorsByNumber[355];
	[113]: RbxInternalBrickColorsByNumber[356];
	[114]: RbxInternalBrickColorsByNumber[153];
	[115]: RbxInternalBrickColorsByNumber[357];
	[116]: RbxInternalBrickColorsByNumber[358];
	[117]: RbxInternalBrickColorsByNumber[359];
	[118]: RbxInternalBrickColorsByNumber[360];
	[119]: RbxInternalBrickColorsByNumber[38];
	[120]: RbxInternalBrickColorsByNumber[361];
	[121]: RbxInternalBrickColorsByNumber[362];
	[122]: RbxInternalBrickColorsByNumber[199];
	[123]: RbxInternalBrickColorsByNumber[194];
	[124]: RbxInternalBrickColorsByNumber[363];
	[125]: RbxInternalBrickColorsByNumber[364];
	[126]: RbxInternalBrickColorsByNumber[365];
	[127]: RbxInternalBrickColorsByNumber[1003];
}

type BrickColor = RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber]

interface BrickColorConstructor {
	/** Returns a random BrickColor. */
	random: () => RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber];

	/** Returns a White BrickColor */
	White: () => RbxInternalBrickColorsByNumber[1];
	/** Returns a Gray BrickColor */
	Gray: () => RbxInternalBrickColorsByNumber[194];
	/** Returns a DarkGray BrickColor */
	DarkGray: () => RbxInternalBrickColorsByNumber[199];
	/** Returns a Black BrickColor */
	Black: () => RbxInternalBrickColorsByNumber[26];
	/** Returns a Red BrickColor */
	Red: () => RbxInternalBrickColorsByNumber[21];
	/** Returns a Yellow BrickColor */
	Yellow: () => RbxInternalBrickColorsByNumber[24];
	/** Returns a Green BrickColor */
	Green: () => RbxInternalBrickColorsByNumber[28];
	/** Returns a Blue BrickColor */
	Blue: () => RbxInternalBrickColorsByNumber[23];

	/** Constructs a BrickColor from its name. */
	new <T extends RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber]["Name"]>(val: T): RbxInternalBrickColorsByNumber[{
		[Q in keyof RbxInternalBrickColorsByNumber]: RbxInternalBrickColorsByNumber[Q]["Name"] extends T ? Q : never
	}[keyof RbxInternalBrickColorsByNumber]];

	/** Constructs a BrickColor from its name. */
	new (val: string): RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber];

	/** Constructs a BrickColor from its numerical index. */
	new <T extends keyof RbxInternalBrickColorsByNumber>(val: T): RbxInternalBrickColorsByNumber[T];

	/** Constructs a BrickColor from its numerical index. */
	new (val: number): RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber];

	/** Constructs the closest BrickColor that can be matched to the specified RGB components. */
	new (r: number, g: number, b: number): RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber];

	/** Constructs the closest BrickColor that can be matched to the specified Color3. */
	new (color: Color3): RbxInternalBrickColorsByNumber[keyof RbxInternalBrickColorsByNumber];

	/** Constructs a BrickColor from its palette index. */
	palette<T extends keyof RbxInternalBrickColorsByPalette>(paletteValue: T): RbxInternalBrickColorsByPalette[T];

	/** Constructs a BrickColor from its palette index. */
	palette(paletteValue: number): RbxInternalBrickColorsByPalette[keyof RbxInternalBrickColorsByPalette];
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
	toHSV: (color: Color3) => [number, number, number];
	/** Creates a Color3 whose values are (0,0,0) [black] */
	new (): Color3<0, 0, 0>;
	/** Returns a Color3 with the given red, green, and blue values. The numbers can range from 0 to 1. */
	new <Red extends number = number, Green extends number = number, Blue extends number = number>(
		red: Red,
		green: Green,
		blue: Blue,
	): Color3<Red, Green, Blue>;
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
	readonly Keypoints: ReadonlyArray<NumberSequenceKeypoint>;
}
interface NumberSequenceConstructor {
	new (val: number): NumberSequence;
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
	new (): NumberSequenceKeypoint;
	new (time: number, value: number, envelope: number): NumberSequenceKeypoint;
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
declare function wait(seconds?: number): [number, number];
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
 * Returns true if `typeof(value) == type` otherwise false.
 * This function allows for type narrowing. i.e.
```
// v is unknown
if (typeIs(v, "Vector3")) {
	print(v.X, v.Y, v.Z);
}
```
 * */
declare function typeIs<T extends keyof CheckableTypes>(value: any, type: T): value is CheckableTypes[T];
declare function typeIs(value: any, type: string): boolean;
