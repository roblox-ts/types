// LUA API

declare function assert<T>(condition: T, message?: string): T;
declare function collectgarbage(option: "count"): number;
declare function error(message?: string, level?: number): void;
declare function getmetatable(object: any): any;
declare function newproxy(): any;
/** !TupleReturn */
declare function next(t: any): [any, any];
/** !TupleReturn */
declare function pcall(func: Callback, ...args: Array<any>): Array<any>;
declare function print(...params: Array<any>): void;
declare function rawequal(v1: any, v2: any): boolean;
declare function rawget(t: any, index: any): any;
declare function rawset(t: any, index: any, value: any): void;
/** !TupleReturn */
declare function select(index: number, ...args: Array<any>): Array<any>;
declare function select(cmd: "#", ...args: Array<any>): number;

interface DateTable {
	year: number;
	month: number;
	day: number;
	hour?: number;
	min?: number;
	sec?: number;
	isdst?: boolean;
}

declare namespace os {
	function time(): number;
	function time(dateTable: DateTable): number;
	function date(formatString: string, time: number): DateTable;
	function difftime(t2: number, t1: number): number;
}

declare namespace debug {
	function traceback(): string;
	function profilebegin(profileName: string): void;
	function profileend(): void;
}

declare namespace string {
	/** !TupleReturn */
	function byte(s: string, i?: number, j?: number): Array<number>;
	function char(...args: Array<number>): string;
	/** !TupleReturn */
	function find(s: string, pattern: string, init?: number, plain?: boolean): number;
	function find(s: string, pattern: string, init?: number, plain?: boolean): Array<number | string>;
	function format(pattern: string, ...args: Array<number | string>): string;
	function len(s: string): number;
	function lower(s: string): string;
	function match(s: string, pattern: string, init?: number): string | null;
	function rep(s: string, n: number): string;
	function reverse(s: string): string;
	function sub(s: string, i: number, j?: number): string;
	function upper(s: string): string;
	function gsub(s: string, pattern: string, repl: any, n?: number): string;
}

declare namespace math {
	function abs(n: number): number;
	function acos(n: number): number;
	function asin(n: number): number;
	function atan(n: number): number;
	function atan2(y: number, x: number): number;
	function ceil(n: number): number;
	function cos(n: number): number;
	function cosh(n: number): number;
	function deg(n: number): number;
	function floor(n: number): number;
	function fmod(x: number, y: number): number;
	function frexp(n: number): number;
	function ldexp(m: number, e: number): number;
	function log(n: number): number;
	function log10(n: number): number;
	function max(...n: Array<number>): number;
	function min(...n: Array<number>): number;
	/** !TupleReturn */
	function modf(n: number): [number, number];
	function pow(x: number, y: number): number;
	function rad(n: number): number;
	function random(): number;
	function random(max: number): number;
	function random(min: number, max: number): number;
	function randomseed(seed: number): number;
	function sin(n: number): number;
	function sinh(n: number): number;
	function sqrt(n: number): number;
	function tan(n: number): number;
	function tanh(n: number): number;
}

// representation of coroutine
declare interface thread { }

declare namespace coroutine {
	function create(f: Callback): thread;
	/** !TupleReturn */
	function resume(co: thread, ...params: Array<any>): Array<any>;
	function running(): thread | null;
	function status(co: thread): string;
	function wrap<T>(f: T): T;
	/** !TupleReturn */
	function yield(...params: Array<any>): Array<any>;
}

declare function delay(delayTime: number, callback: Callback): void;
declare function elapsedTime(): number;
// @ts-ignore
declare function require(moduleScript: ModuleScript): any;
declare function settings(): GlobalSettings;
declare function spawn(callback: Callback): void;
declare function tick(): number;
declare function time(): number;
declare function UserSettings(): UserSettings;
declare function version(): string;
/** !TupleReturn */
declare function wait(seconds?: number): [number, number];
declare function warn(...params: Array<any>): void;

declare namespace math {
	function noise(x?: number, y?: number, z?: number): number;
	function clamp(x: number, min: number, max: number): number;
}

// GENERATED API OVERRIDES

interface Rbx_Instance {
	Clone(): Instance;
	WaitForChild(childName: string, timeOut?: number): Instance | undefined;
}

interface Rbx_Players extends Rbx_Instance {
	PlayerAdded: RBXScriptSignal<(player: Player) => void>;
	PlayerRemoving: RBXScriptSignal<(player: Player) => void>;
}

interface Rbx_Terrain extends Rbx_BasePart {
	/** !TupleReturn */
	ReadVoxels(region: Region3, resolution: number): [Enum.Material[][][], number[][][]];
	/** !TupleReturn */
	WriteVoxels(region: Region3, resolution: number, materials: Enum.Material[][][], occupancy: number[][][]): void;
}

interface Rbx_RemoteEvent extends Rbx_Instance {
	FireAllClients(...arguments: Array<any>): void;
	FireClient(player: Instance, ...arguments: Array<any>): void;
	FireServer(...arguments: Array<any>): void;
	OnClientEvent: RBXScriptSignal<Callback>;
	OnServerEvent: RBXScriptSignal<Callback>;
}

interface Rbx_RemoteFunction extends Rbx_Instance {
	/** !TupleReturn */
	InvokeClient(player: Instance, ...arguments: Array<any>): Array<any>;
	/** !TupleReturn */
	InvokeServer(...arguments: Array<any>): Array<any>;
	OnClientInvoke: Callback;
	OnServerInvoke: Callback;
}

interface Rbx_Player extends Rbx_Instance {
	GetMouse(): PlayerMouse;
}

interface Rbx_Workspace extends Rbx_RootInstance {
	Terrain: Terrain;
}

interface Rbx_Humanoid extends Rbx_Instance {
	LoadAnimation(animation: Instance): AnimationTrack;
}

// type Tweenable = number | boolean | CFrame | Rect | Color3 | UDim | UDim2 | Vector2 | Vector2int16 | Vector3;
// type FilterMembers<T, U> = Pick<T, { [K in keyof T]: T[K] extends U ? K : never }[keyof T]>;

// interface Rbx_TweenService {
// Create<T>(instance: T, tweenInfo: TweenInfo, propertyTable: Partial<FilterMembers<BaseType<T>, Tweenable>>): Tween;
// }

// MACRO MATH API

declare interface CFrame {
	mul(cf: CFrame): CFrame;
	mul(v3: Vector3): Vector3;
	add(v3: Vector3): CFrame;
	sub(v3: Vector3): CFrame;
}

declare interface UDim {
	add(udim: UDim): UDim;
}

declare interface UDim2 {
	add(udim2: UDim2): UDim2;
}

declare interface Vector2 {
	add(v2: Vector2): Vector2;
	sub(v2: Vector2): Vector2;
	mul(v2: Vector2): Vector2;
	div(v2: Vector2): Vector2;
	mul(n: number): Vector2;
	div(n: number): Vector2;
}

declare interface Vector2int16 {
	add(v2: Vector2int16): Vector2int16;
	sub(v2: Vector2int16): Vector2int16;
	mul(v2: Vector2int16): Vector2int16;
	div(v2: Vector2int16): Vector2int16;
}

declare interface Vector3 {
	add(v3: Vector3): Vector3;
	sub(v3: Vector3): Vector3;
	mul(v3: Vector3): Vector3;
	div(v3: Vector3): Vector3;
	mul(n: number): Vector3;
	div(n: number): Vector3;
}

declare interface Vector3int16 {
	add(v3: Vector3int16): Vector3int16;
	sub(v3: Vector3int16): Vector3int16;
	mul(v3: Vector3int16): Vector3int16;
	div(v3: Vector3int16): Vector3int16;
}

// GENERATED ROBLOX ENUMS

declare namespace Enum {
	enum ActionType {
		Nothing = 0,
		Pause = 1,
		Lose = 2,
		Draw = 3,
		Win = 4
	}
	enum ActuatorRelativeTo {
		Attachment0 = 0,
		Attachment1 = 1,
		World = 2
	}
	enum ActuatorType {
		None = 0,
		Motor = 1,
		Servo = 2
	}
	enum AnimationPriority {
		Idle = 0,
		Movement = 1,
		Action = 2,
		Core = 1000
	}
	enum AppShellActionType {
		None = 0,
		OpenApp = 1,
		TapChatTab = 2,
		TapConversationEntry = 3,
		TapAvatarTab = 4,
		ReadConversation = 5,
		TapGamePageTab = 6,
		TapHomePageTab = 7,
		GamePageLoaded = 8,
		HomePageLoaded = 9,
		AvatarEditorPageLoaded = 10
	}
	enum AspectType {
		FitWithinMaxSize = 0,
		ScaleWithParentSize = 1
	}
	enum AssetType {
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
		EyeAccessory = 58
	}
	enum AvatarContextMenuOption {
		Friend = 0,
		Chat = 1,
		Emote = 2
	}
	enum AvatarJointPositionType {
		Fixed = 0,
		ArtistIntent = 1
	}
	enum Axis {
		X = 0,
		Y = 1,
		Z = 2
	}
	enum BinType {
		Script = 0,
		GameTool = 1,
		Grab = 2,
		Clone = 3,
		Hammer = 4
	}
	enum BodyPart {
		Head = 0,
		Torso = 1,
		LeftArm = 2,
		RightArm = 3,
		LeftLeg = 4,
		RightLeg = 5
	}
	enum Button {
		Jump = 32,
		Dismount = 8
	}
	enum ButtonStyle {
		Custom = 0,
		RobloxButtonDefault = 1,
		RobloxButton = 2,
		RobloxRoundButton = 3,
		RobloxRoundDefaultButton = 4,
		RobloxRoundDropdownButton = 5
	}
	enum CameraMode {
		Classic = 0,
		LockFirstPerson = 1
	}
	enum CameraPanMode {
		Classic = 0,
		EdgeBump = 1
	}
	enum CameraType {
		Fixed = 0,
		Watch = 2,
		Attach = 1,
		Track = 3,
		Follow = 4,
		Custom = 5,
		Scriptable = 6,
		Orbital = 7
	}
	enum CellBlock {
		Solid = 0,
		VerticalWedge = 1,
		CornerWedge = 2,
		InverseCornerWedge = 3,
		HorizontalWedge = 4
	}
	enum CellMaterial {
		Empty = 0,
		Grass = 1,
		Sand = 2,
		Brick = 3,
		Granite = 4,
		Asphalt = 5,
		Iron = 6,
		Aluminum = 7,
		Gold = 8,
		WoodPlank = 9,
		WoodLog = 10,
		Gravel = 11,
		CinderBlock = 12,
		MossyStone = 13,
		Cement = 14,
		RedPlastic = 15,
		BluePlastic = 16,
		Water = 17
	}
	enum CellOrientation {
		NegZ = 0,
		X = 1,
		Z = 2,
		NegX = 3
	}
	enum CenterDialogType {
		UnsolicitedDialog = 1,
		PlayerInitiatedDialog = 2,
		ModalDialog = 3,
		QuitDialog = 4
	}
	enum ChatColor {
		Blue = 0,
		Green = 1,
		Red = 2,
		White = 3
	}
	enum ChatMode {
		Menu = 0,
		TextAndMenu = 1
	}
	enum ChatPrivacyMode {
		AllUsers = 0,
		NoOne = 1,
		Friends = 2
	}
	enum ChatStyle {
		Classic = 0,
		Bubble = 1,
		ClassicAndBubble = 2
	}
	enum CollisionFidelity {
		Default = 0,
		Hull = 1,
		Box = 2
	}
	enum ComputerCameraMovementMode {
		Default = 0,
		Follow = 2,
		Classic = 1,
		Orbital = 3
	}
	enum ComputerMovementMode {
		Default = 0,
		KeyboardMouse = 1,
		ClickToMove = 2
	}
	enum ConnectionState {
		Connected = 0,
		Disconnected = 1
	}
	enum ContextActionPriority {
		Low = 1000,
		Medium = 2000,
		Default = 2000,
		High = 3000
	}
	enum ContextActionResult {
		Pass = 1,
		Sink = 0
	}
	enum ControlMode {
		MouseLockSwitch = 1,
		Classic = 0
	}
	enum CoreGuiType {
		PlayerList = 0,
		Health = 1,
		Backpack = 2,
		Chat = 3,
		All = 4
	}
	enum CreatorType {
		User = 0,
		Group = 1
	}
	enum CurrencyType {
		Default = 0,
		Robux = 1,
		Tix = 2
	}
	enum CustomCameraMode {
		Default = 0,
		Follow = 2,
		Classic = 1
	}
	enum DataStoreRequestType {
		GetAsync = 0,
		SetIncrementAsync = 1,
		UpdateAsync = 2,
		GetSortedAsync = 3,
		SetIncrementSortedAsync = 4,
		OnUpdate = 5
	}
	enum DevCameraOcclusionMode {
		Zoom = 0,
		Invisicam = 1
	}
	enum DevComputerCameraMovementMode {
		UserChoice = 0,
		Classic = 1,
		Follow = 2,
		Orbital = 3
	}
	enum DevComputerMovementMode {
		UserChoice = 0,
		KeyboardMouse = 1,
		ClickToMove = 2,
		Scriptable = 3
	}
	enum DevTouchCameraMovementMode {
		UserChoice = 0,
		Classic = 1,
		Follow = 2,
		Orbital = 3
	}
	enum DevTouchMovementMode {
		UserChoice = 0,
		Thumbstick = 1,
		DPad = 2,
		Thumbpad = 3,
		ClickToMove = 4,
		Scriptable = 5,
		DynamicThumbstick = 6
	}
	enum DeveloperMemoryTag {
		Internal = 0,
		HttpCache = 1,
		Instances = 2,
		Signals = 3,
		LuaHeap = 4,
		Script = 5,
		PhysicsCollision = 6,
		PhysicsParts = 7,
		GraphicsSolidModels = 8,
		GraphicsMeshParts = 9,
		GraphicsParticles = 10,
		GraphicsParts = 11,
		GraphicsSpatialHash = 12,
		GraphicsTerrain = 13,
		GraphicsTexture = 14,
		GraphicsTextureCharacter = 15,
		Sounds = 16,
		StreamingSounds = 17,
		TerrainVoxels = 18,
		Gui = 20,
		Animation = 21,
		Navigation = 22
	}
	enum DialogBehaviorType {
		SinglePlayer = 0,
		MultiplePlayers = 1
	}
	enum DialogPurpose {
		Quest = 0,
		Help = 1,
		Shop = 2
	}
	enum DialogTone {
		Neutral = 0,
		Friendly = 1,
		Enemy = 2
	}
	enum DominantAxis {
		Width = 0,
		Height = 1
	}
	enum EasingDirection {
		In = 0,
		Out = 1,
		InOut = 2
	}
	enum EasingStyle {
		Linear = 0,
		Sine = 1,
		Back = 2,
		Quad = 3,
		Quart = 4,
		Quint = 5,
		Bounce = 6,
		Elastic = 7
	}
	enum ElasticBehavior {
		WhenScrollable = 0,
		Always = 1,
		Never = 2
	}
	enum EnviromentalPhysicsThrottle {
		DefaultAuto = 0,
		Disabled = 1,
		Always = 2,
		Skip2 = 3,
		Skip4 = 4,
		Skip8 = 5,
		Skip16 = 6
	}
	enum ErrorReporting {
		DontReport = 0,
		Prompt = 1,
		Report = 2
	}
	enum ExplosionType {
		NoCraters = 0,
		Craters = 1,
		CratersAndDebris = 2
	}
	enum FillDirection {
		Horizontal = 0,
		Vertical = 1
	}
	enum FilterResult {
		Rejected = 1,
		Accepted = 0
	}
	enum Font {
		Legacy = 0,
		Arial = 1,
		ArialBold = 2,
		SourceSans = 3,
		SourceSansBold = 4,
		SourceSansSemibold = 16,
		SourceSansLight = 5,
		SourceSansItalic = 6,
		Bodoni = 7,
		Garamond = 8,
		Cartoon = 9,
		Code = 10,
		Highway = 11,
		SciFi = 12,
		Arcade = 13,
		Fantasy = 14,
		Antique = 15
	}
	enum FontSize {
		Size8 = 0,
		Size9 = 1,
		Size10 = 2,
		Size11 = 3,
		Size12 = 4,
		Size14 = 5,
		Size18 = 6,
		Size24 = 7,
		Size36 = 8,
		Size48 = 9,
		Size28 = 10,
		Size32 = 11,
		Size42 = 12,
		Size60 = 13,
		Size96 = 14
	}
	enum FormFactor {
		Symmetric = 0,
		Brick = 1,
		Plate = 2,
		Custom = 3
	}
	enum FrameStyle {
		Custom = 0,
		ChatBlue = 1,
		RobloxSquare = 2,
		RobloxRound = 3,
		ChatGreen = 4,
		ChatRed = 5,
		DropShadow = 6
	}
	enum FramerateManagerMode {
		Automatic = 0,
		On = 1,
		Off = 2
	}
	enum FriendRequestEvent {
		Issue = 0,
		Revoke = 1,
		Accept = 2,
		Deny = 3
	}
	enum FriendStatus {
		Unknown = 0,
		NotFriend = 1,
		Friend = 2,
		FriendRequestSent = 3,
		FriendRequestReceived = 4
	}
	enum FunctionalTestResult {
		Passed = 0,
		Warning = 1,
		Error = 2
	}
	enum GameAvatarType {
		R6 = 0,
		R15 = 1,
		PlayerChoice = 2
	}
	enum GearGenreSetting {
		AllGenres = 0,
		MatchingGenreOnly = 1
	}
	enum GearType {
		MeleeWeapons = 0,
		RangedWeapons = 1,
		Explosives = 2,
		PowerUps = 3,
		NavigationEnhancers = 4,
		MusicalInstruments = 5,
		SocialItems = 6,
		BuildingTools = 7,
		Transport = 8
	}
	enum Genre {
		All = 0,
		TownAndCity = 1,
		Fantasy = 2,
		SciFi = 3,
		Ninja = 4,
		Scary = 5,
		Pirate = 6,
		Adventure = 7,
		Sports = 8,
		Funny = 9,
		WildWest = 10,
		War = 11,
		SkatePark = 12,
		Tutorial = 13
	}
	enum GraphicsMode {
		Automatic = 1,
		Direct3D9 = 3,
		Direct3D11 = 2,
		OpenGL = 4,
		Metal = 5,
		Vulkan = 6,
		NoGraphics = 7
	}
	enum HandlesStyle {
		Resize = 0,
		Movement = 1
	}
	enum HorizontalAlignment {
		Center = 0,
		Left = 1,
		Right = 2
	}
	enum HoverAnimateSpeed {
		VerySlow = 0,
		Slow = 1,
		Medium = 2,
		Fast = 3,
		VeryFast = 4
	}
	enum HttpContentType {
		ApplicationJson = 0,
		ApplicationXml = 1,
		ApplicationUrlEncoded = 2,
		TextPlain = 3,
		TextXml = 4
	}
	enum HttpRequestType {
		Default = 0,
		MarketplaceService = 2,
		Players = 7,
		Chat = 15,
		Avatar = 16
	}
	enum HumanoidDisplayDistanceType {
		Viewer = 0,
		Subject = 1,
		None = 2
	}
	enum HumanoidHealthDisplayType {
		DisplayWhenDamaged = 0,
		AlwaysOn = 1,
		AlwaysOff = 2
	}
	enum HumanoidRigType {
		R6 = 0,
		R15 = 1
	}
	enum HumanoidStateType {
		FallingDown = 0,
		Running = 8,
		RunningNoPhysics = 10,
		Climbing = 12,
		StrafingNoPhysics = 11,
		Ragdoll = 1,
		GettingUp = 2,
		Jumping = 3,
		Landed = 7,
		Flying = 6,
		Freefall = 5,
		Seated = 13,
		PlatformStanding = 14,
		Dead = 15,
		Swimming = 4,
		Physics = 16,
		None = 18
	}
	enum InOut {
		Edge = 0,
		Inset = 1,
		Center = 2
	}
	enum InfoType {
		Asset = 0,
		Product = 1,
		GamePass = 2
	}
	enum InitialDockState {
		Top = 0,
		Bottom = 1,
		Left = 2,
		Right = 3,
		Float = 4
	}
	enum InputType {
		NoInput = 0,
		LeftTread = 1,
		RightTread = 2,
		Steer = 3,
		Throttle = 4,
		UpDown = 6,
		Action1 = 7,
		Action2 = 8,
		Action3 = 9,
		Action4 = 10,
		Action5 = 11,
		Constant = 12,
		Sin = 13
	}
	enum JointCreationMode {
		All = 0,
		Surface = 1,
		None = 2
	}
	enum JointType {
		None = 28,
		Rotate = 7,
		RotateP = 8,
		RotateV = 9,
		Glue = 10,
		Weld = 1,
		Snap = 3
	}
	enum KeyCode {
		Unknown = 0,
		Backspace = 8,
		Tab = 9,
		Clear = 12,
		Return = 13,
		Pause = 19,
		Escape = 27,
		Space = 32,
		QuotedDouble = 34,
		Hash = 35,
		Dollar = 36,
		Percent = 37,
		Ampersand = 38,
		Quote = 39,
		LeftParenthesis = 40,
		RightParenthesis = 41,
		Asterisk = 42,
		Plus = 43,
		Comma = 44,
		Minus = 45,
		Period = 46,
		Slash = 47,
		Zero = 48,
		One = 49,
		Two = 50,
		Three = 51,
		Four = 52,
		Five = 53,
		Six = 54,
		Seven = 55,
		Eight = 56,
		Nine = 57,
		Colon = 58,
		Semicolon = 59,
		LessThan = 60,
		Equals = 61,
		GreaterThan = 62,
		Question = 63,
		At = 64,
		LeftBracket = 91,
		BackSlash = 92,
		RightBracket = 93,
		Caret = 94,
		Underscore = 95,
		Backquote = 96,
		A = 97,
		B = 98,
		C = 99,
		D = 100,
		E = 101,
		F = 102,
		G = 103,
		H = 104,
		I = 105,
		J = 106,
		K = 107,
		L = 108,
		M = 109,
		N = 110,
		O = 111,
		P = 112,
		Q = 113,
		R = 114,
		S = 115,
		T = 116,
		U = 117,
		V = 118,
		W = 119,
		X = 120,
		Y = 121,
		Z = 122,
		LeftCurly = 123,
		Pipe = 124,
		RightCurly = 125,
		Tilde = 126,
		Delete = 127,
		KeypadZero = 256,
		KeypadOne = 257,
		KeypadTwo = 258,
		KeypadThree = 259,
		KeypadFour = 260,
		KeypadFive = 261,
		KeypadSix = 262,
		KeypadSeven = 263,
		KeypadEight = 264,
		KeypadNine = 265,
		KeypadPeriod = 266,
		KeypadDivide = 267,
		KeypadMultiply = 268,
		KeypadMinus = 269,
		KeypadPlus = 270,
		KeypadEnter = 271,
		KeypadEquals = 272,
		Up = 273,
		Down = 274,
		Right = 275,
		Left = 276,
		Insert = 277,
		Home = 278,
		End = 279,
		PageUp = 280,
		PageDown = 281,
		LeftShift = 304,
		RightShift = 303,
		LeftMeta = 310,
		RightMeta = 309,
		LeftAlt = 308,
		RightAlt = 307,
		LeftControl = 306,
		RightControl = 305,
		CapsLock = 301,
		NumLock = 300,
		ScrollLock = 302,
		LeftSuper = 311,
		RightSuper = 312,
		Mode = 313,
		Compose = 314,
		Help = 315,
		Print = 316,
		SysReq = 317,
		Break = 318,
		Menu = 319,
		Power = 320,
		Euro = 321,
		Undo = 322,
		F1 = 282,
		F2 = 283,
		F3 = 284,
		F4 = 285,
		F5 = 286,
		F6 = 287,
		F7 = 288,
		F8 = 289,
		F9 = 290,
		F10 = 291,
		F11 = 292,
		F12 = 293,
		F13 = 294,
		F14 = 295,
		F15 = 296,
		World0 = 160,
		World1 = 161,
		World2 = 162,
		World3 = 163,
		World4 = 164,
		World5 = 165,
		World6 = 166,
		World7 = 167,
		World8 = 168,
		World9 = 169,
		World10 = 170,
		World11 = 171,
		World12 = 172,
		World13 = 173,
		World14 = 174,
		World15 = 175,
		World16 = 176,
		World17 = 177,
		World18 = 178,
		World19 = 179,
		World20 = 180,
		World21 = 181,
		World22 = 182,
		World23 = 183,
		World24 = 184,
		World25 = 185,
		World26 = 186,
		World27 = 187,
		World28 = 188,
		World29 = 189,
		World30 = 190,
		World31 = 191,
		World32 = 192,
		World33 = 193,
		World34 = 194,
		World35 = 195,
		World36 = 196,
		World37 = 197,
		World38 = 198,
		World39 = 199,
		World40 = 200,
		World41 = 201,
		World42 = 202,
		World43 = 203,
		World44 = 204,
		World45 = 205,
		World46 = 206,
		World47 = 207,
		World48 = 208,
		World49 = 209,
		World50 = 210,
		World51 = 211,
		World52 = 212,
		World53 = 213,
		World54 = 214,
		World55 = 215,
		World56 = 216,
		World57 = 217,
		World58 = 218,
		World59 = 219,
		World60 = 220,
		World61 = 221,
		World62 = 222,
		World63 = 223,
		World64 = 224,
		World65 = 225,
		World66 = 226,
		World67 = 227,
		World68 = 228,
		World69 = 229,
		World70 = 230,
		World71 = 231,
		World72 = 232,
		World73 = 233,
		World74 = 234,
		World75 = 235,
		World76 = 236,
		World77 = 237,
		World78 = 238,
		World79 = 239,
		World80 = 240,
		World81 = 241,
		World82 = 242,
		World83 = 243,
		World84 = 244,
		World85 = 245,
		World86 = 246,
		World87 = 247,
		World88 = 248,
		World89 = 249,
		World90 = 250,
		World91 = 251,
		World92 = 252,
		World93 = 253,
		World94 = 254,
		World95 = 255,
		ButtonX = 1000,
		ButtonY = 1001,
		ButtonA = 1002,
		ButtonB = 1003,
		ButtonR1 = 1004,
		ButtonL1 = 1005,
		ButtonR2 = 1006,
		ButtonL2 = 1007,
		ButtonR3 = 1008,
		ButtonL3 = 1009,
		ButtonStart = 1010,
		ButtonSelect = 1011,
		DPadLeft = 1012,
		DPadRight = 1013,
		DPadUp = 1014,
		DPadDown = 1015,
		Thumbstick1 = 1016,
		Thumbstick2 = 1017
	}
	enum KeywordFilterType {
		Include = 0,
		Exclude = 1
	}
	enum Language {
		Default = 0
	}
	enum LeftRight {
		Left = 0,
		Center = 1,
		Right = 2
	}
	enum LevelOfDetailSetting {
		High = 2,
		Medium = 1,
		Low = 0
	}
	enum Limb {
		Head = 0,
		Torso = 1,
		LeftArm = 2,
		RightArm = 3,
		LeftLeg = 4,
		RightLeg = 5,
		Unknown = 6
	}
	enum ListDisplayMode {
		Horizontal = 0,
		Vertical = 1
	}
	enum ListenerType {
		Camera = 0,
		CFrame = 1,
		ObjectPosition = 2,
		ObjectCFrame = 3
	}
	enum Material {
		Plastic = 256,
		Wood = 512,
		Slate = 800,
		Concrete = 816,
		CorrodedMetal = 1040,
		DiamondPlate = 1056,
		Foil = 1072,
		Grass = 1280,
		Ice = 1536,
		Marble = 784,
		Granite = 832,
		Brick = 848,
		Pebble = 864,
		Sand = 1296,
		Fabric = 1312,
		SmoothPlastic = 272,
		Metal = 1088,
		WoodPlanks = 528,
		Cobblestone = 880,
		Air = 1792,
		Water = 2048,
		Rock = 896,
		Glacier = 1552,
		Snow = 1328,
		Sandstone = 912,
		Mud = 1344,
		Basalt = 788,
		Ground = 1360,
		CrackedLava = 804,
		Neon = 288,
		Glass = 1568,
		Asphalt = 1376,
		LeafyGrass = 1284,
		Salt = 1392,
		Limestone = 820,
		Pavement = 836
	}
	enum MembershipType {
		None = 0,
		BuildersClub = 1,
		TurboBuildersClub = 2,
		OutrageousBuildersClub = 3
	}
	enum MeshType {
		Head = 0,
		Torso = 1,
		Wedge = 2,
		Prism = 7,
		Pyramid = 8,
		ParallelRamp = 9,
		RightAngleRamp = 10,
		CornerWedge = 11,
		Brick = 6,
		Sphere = 3,
		Cylinder = 4,
		FileMesh = 5
	}
	enum MessageType {
		MessageOutput = 0,
		MessageInfo = 1,
		MessageWarning = 2,
		MessageError = 3
	}
	enum MouseBehavior {
		Default = 0,
		LockCenter = 1,
		LockCurrentPosition = 2
	}
	enum MoveState {
		Stopped = 0,
		Coasting = 1,
		Pushing = 2,
		Stopping = 3,
		AirFree = 4
	}
	enum NameOcclusion {
		OccludeAll = 2,
		EnemyOcclusion = 1,
		NoOcclusion = 0
	}
	enum NetworkOwnership {
		Automatic = 0,
		Manual = 1,
		OnContact = 2
	}
	enum NormalId {
		Top = 1,
		Bottom = 4,
		Back = 2,
		Front = 5,
		Right = 0,
		Left = 3
	}
	enum OutputLayoutMode {
		Horizontal = 0,
		Vertical = 1
	}
	enum OverrideMouseIconBehavior {
		None = 0,
		ForceShow = 1,
		ForceHide = 2
	}
	enum PacketPriority {
		IMMEDIATE_PRIORITY = 0,
		HIGH_PRIORITY = 1,
		MEDIUM_PRIORITY = 2,
		LOW_PRIORITY = 3
	}
	enum PartType {
		Ball = 0,
		Block = 1,
		Cylinder = 2
	}
	enum PathStatus {
		Success = 0,
		ClosestNoPath = 1,
		ClosestOutOfRange = 2,
		FailStartNotEmpty = 3,
		FailFinishNotEmpty = 4,
		NoPath = 5
	}
	enum PathWaypointAction {
		Walk = 0,
		Jump = 1
	}
	enum PermissionLevelShown {
		Game = 0,
		RobloxGame = 1,
		RobloxScript = 2,
		Studio = 3,
		Roblox = 4
	}
	enum Platform {
		Windows = 0,
		OSX = 1,
		IOS = 2,
		Android = 3,
		XBoxOne = 4,
		PS4 = 5,
		PS3 = 6,
		XBox360 = 7,
		WiiU = 8,
		NX = 9,
		Ouya = 10,
		AndroidTV = 11,
		Chromecast = 12,
		Linux = 13,
		SteamOS = 14,
		WebOS = 15,
		DOS = 16,
		BeOS = 17,
		UWP = 18,
		None = 19
	}
	enum PlaybackState {
		Begin = 0,
		Delayed = 1,
		Playing = 2,
		Paused = 3,
		Completed = 4,
		Cancelled = 5
	}
	enum PlayerActions {
		CharacterForward = 0,
		CharacterBackward = 1,
		CharacterLeft = 2,
		CharacterRight = 3,
		CharacterJump = 4
	}
	enum PlayerChatType {
		All = 0,
		Team = 1,
		Whisper = 2
	}
	enum PoseEasingDirection {
		Out = 1,
		InOut = 2,
		In = 0
	}
	enum PoseEasingStyle {
		Linear = 0,
		Constant = 1,
		Elastic = 2,
		Cubic = 3,
		Bounce = 4
	}
	enum PrivilegeType {
		Owner = 255,
		Admin = 240,
		Member = 128,
		Visitor = 10,
		Banned = 0
	}
	enum ProductPurchaseDecision {
		NotProcessedYet = 0,
		PurchaseGranted = 1
	}
	enum QualityLevel {
		Automatic = 0,
		Level01 = 1,
		Level02 = 2,
		Level03 = 3,
		Level04 = 4,
		Level05 = 5,
		Level06 = 6,
		Level07 = 7,
		Level08 = 8,
		Level09 = 9,
		Level10 = 10,
		Level11 = 11,
		Level12 = 12,
		Level13 = 13,
		Level14 = 14,
		Level15 = 15,
		Level16 = 16,
		Level17 = 17,
		Level18 = 18,
		Level19 = 19,
		Level20 = 20,
		Level21 = 21
	}
	enum R15CollisionType {
		OuterBox = 0,
		InnerBox = 1
	}
	enum RenderPriority {
		First = 0,
		Input = 100,
		Camera = 200,
		Character = 300,
		Last = 2000
	}
	enum ReverbType {
		NoReverb = 0,
		GenericReverb = 1,
		PaddedCell = 2,
		Room = 3,
		Bathroom = 4,
		LivingRoom = 5,
		StoneRoom = 6,
		Auditorium = 7,
		ConcertHall = 8,
		Cave = 9,
		Arena = 10,
		Hangar = 11,
		CarpettedHallway = 12,
		Hallway = 13,
		StoneCorridor = 14,
		Alley = 15,
		Forest = 16,
		City = 17,
		Mountains = 18,
		Quarry = 19,
		Plain = 20,
		ParkingLot = 21,
		SewerPipe = 22,
		UnderWater = 23
	}
	enum RibbonTool {
		Select = 0,
		Scale = 1,
		Rotate = 2,
		Move = 3,
		Transform = 4,
		ColorPicker = 5,
		MaterialPicker = 6,
		Group = 7,
		Ungroup = 8,
		None = 9
	}
	enum RollOffMode {
		Inverse = 0,
		Linear = 1,
		InverseTapered = 3,
		LinearSquare = 2
	}
	enum RotationType {
		MovementRelative = 0,
		CameraRelative = 1
	}
	enum RuntimeUndoBehavior {
		Aggregate = 0,
		Snapshot = 1,
		Hybrid = 2
	}
	enum SaveFilter {
		SaveAll = 2,
		SaveWorld = 0,
		SaveGame = 1
	}
	enum SavedQualitySetting {
		Automatic = 0,
		QualityLevel1 = 1,
		QualityLevel2 = 2,
		QualityLevel3 = 3,
		QualityLevel4 = 4,
		QualityLevel5 = 5,
		QualityLevel6 = 6,
		QualityLevel7 = 7,
		QualityLevel8 = 8,
		QualityLevel9 = 9,
		QualityLevel10 = 10
	}
	enum ScaleType {
		Stretch = 0,
		Slice = 1,
		Tile = 2,
		Fit = 3,
		Crop = 4
	}
	enum ScreenOrientation {
		LandscapeLeft = 0,
		LandscapeRight = 1,
		LandscapeSensor = 2,
		Portrait = 3,
		Sensor = 4
	}
	enum ScrollBarInset {
		None = 0,
		ScrollBar = 1,
		Always = 2
	}
	enum ScrollingDirection {
		X = 1,
		Y = 2,
		XY = 4
	}
	enum ServerAudioBehavior {
		Enabled = 0,
		Muted = 1,
		OnlineGame = 2
	}
	enum SizeConstraint {
		RelativeXY = 0,
		RelativeXX = 1,
		RelativeYY = 2
	}
	enum SortOrder {
		LayoutOrder = 2,
		Name = 0,
		Custom = 1
	}
	enum SoundType {
		NoSound = 0,
		Boing = 1,
		Bomb = 2,
		Break = 3,
		Click = 4,
		Clock = 5,
		Slingshot = 6,
		Page = 7,
		Ping = 8,
		Snap = 9,
		Splat = 10,
		Step = 11,
		StepOn = 12,
		Swoosh = 13,
		Victory = 14
	}
	enum SpecialKey {
		Insert = 0,
		Home = 1,
		End = 2,
		PageUp = 3,
		PageDown = 4,
		ChatHotkey = 5
	}
	enum StartCorner {
		TopLeft = 0,
		TopRight = 1,
		BottomLeft = 2,
		BottomRight = 3
	}
	enum Status {
		Poison = 0,
		Confusion = 1
	}
	enum Style {
		AlternatingSupports = 0,
		BridgeStyleSupports = 1,
		NoSupports = 2
	}
	enum SurfaceConstraint {
		None = 0,
		Hinge = 1,
		SteppingMotor = 2,
		Motor = 3
	}
	enum SurfaceType {
		Smooth = 0,
		Glue = 1,
		Weld = 2,
		Studs = 3,
		Inlet = 4,
		Universal = 5,
		Hinge = 6,
		Motor = 7,
		SteppingMotor = 8,
		Unjoinable = 9,
		SmoothNoOutlines = 10
	}
	enum SwipeDirection {
		Right = 0,
		Left = 1,
		Up = 2,
		Down = 3,
		None = 4
	}
	enum TableMajorAxis {
		RowMajor = 0,
		ColumnMajor = 1
	}
	enum TeleportResult {
		Success = 0,
		Failure = 1,
		GameNotFound = 2,
		GameEnded = 3,
		GameFull = 4,
		Unauthorized = 5,
		Flooded = 6,
		IsTeleporting = 7
	}
	enum TeleportState {
		RequestedFromServer = 0,
		Started = 1,
		WaitingForServer = 2,
		Failed = 3,
		InProgress = 4
	}
	enum TeleportType {
		ToPlace = 0,
		ToInstance = 1,
		ToReservedServer = 2
	}
	enum TextFilterContext {
		PublicChat = 1,
		PrivateChat = 2
	}
	enum TextTruncate {
		None = 0,
		AtEnd = 1
	}
	enum TextXAlignment {
		Left = 0,
		Center = 2,
		Right = 1
	}
	enum TextYAlignment {
		Top = 0,
		Center = 1,
		Bottom = 2
	}
	enum TextureMode {
		Stretch = 0,
		Wrap = 1,
		Static = 2
	}
	enum TextureQueryType {
		NonHumanoid = 0,
		NonHumanoidOrphaned = 1,
		Humanoid = 2,
		HumanoidOrphaned = 3
	}
	enum ThreadPoolConfig {
		Auto = 0,
		PerCore1 = 101,
		PerCore2 = 102,
		PerCore3 = 103,
		PerCore4 = 104,
		Threads1 = 1,
		Threads2 = 2,
		Threads3 = 3,
		Threads4 = 4,
		Threads8 = 8,
		Threads16 = 16
	}
	enum ThrottlingPriority {
		Extreme = 2,
		ElevatedOnServer = 1,
		Default = 0
	}
	enum ThumbnailSize {
		Size48x48 = 0,
		Size180x180 = 1,
		Size420x420 = 2,
		Size60x60 = 3,
		Size100x100 = 4,
		Size150x150 = 5,
		Size352x352 = 6
	}
	enum ThumbnailType {
		HeadShot = 0,
		AvatarBust = 1,
		AvatarThumbnail = 2
	}
	enum TickCountSampleMethod {
		Fast = 0,
		Benchmark = 1,
		Precise = 2
	}
	enum TopBottom {
		Top = 0,
		Center = 1,
		Bottom = 2
	}
	enum TouchCameraMovementMode {
		Default = 0,
		Follow = 2,
		Classic = 1,
		Orbital = 3
	}
	enum TouchMovementMode {
		Default = 0,
		Thumbstick = 1,
		DPad = 2,
		Thumbpad = 3,
		ClickToMove = 4,
		DynamicThumbstick = 5
	}
	enum TweenStatus {
		Canceled = 0,
		Completed = 1
	}
	enum UITheme {
		Light = 0,
		Dark = 1
	}
	enum UiMessageType {
		UiMessageError = 0,
		UiMessageInfo = 1
	}
	enum UploadSetting {
		Never = 0,
		Ask = 1,
		Always = 2
	}
	enum UserCFrame {
		Head = 0,
		LeftHand = 1,
		RightHand = 2
	}
	enum UserInputState {
		Begin = 0,
		Change = 1,
		End = 2,
		Cancel = 3,
		None = 4
	}
	enum UserInputType {
		MouseButton1 = 0,
		MouseButton2 = 1,
		MouseButton3 = 2,
		MouseWheel = 3,
		MouseMovement = 4,
		Touch = 7,
		Keyboard = 8,
		Focus = 9,
		Accelerometer = 10,
		Gyro = 11,
		Gamepad1 = 12,
		Gamepad2 = 13,
		Gamepad3 = 14,
		Gamepad4 = 15,
		Gamepad5 = 16,
		Gamepad6 = 17,
		Gamepad7 = 18,
		Gamepad8 = 19,
		TextInput = 20,
		None = 21
	}
	enum VRTouchpad {
		Left = 0,
		Right = 1
	}
	enum VRTouchpadMode {
		Touch = 0,
		VirtualThumbstick = 1,
		ABXY = 2
	}
	enum VerticalAlignment {
		Center = 0,
		Top = 1,
		Bottom = 2
	}
	enum VerticalScrollBarPosition {
		Left = 1,
		Right = 0
	}
	enum VibrationMotor {
		Large = 0,
		Small = 1,
		LeftTrigger = 2,
		RightTrigger = 3,
		LeftHand = 4,
		RightHand = 5
	}
	enum VideoQualitySettings {
		LowResolution = 0,
		MediumResolution = 1,
		HighResolution = 2
	}
	enum VirtualInputMode {
		Recording = 1,
		Playing = 2,
		None = 0
	}
	enum WaterDirection {
		NegX = 0,
		X = 1,
		NegY = 2,
		Y = 3,
		NegZ = 4,
		Z = 5
	}
	enum WaterForce {
		None = 0,
		Small = 1,
		Medium = 2,
		Strong = 3,
		Max = 4
	}
	enum ZIndexBehavior {
		Global = 0,
		Sibling = 1
	}
}

// GENERATED ROBLOX INSTANCE CLASSES

// Instance
interface Rbx_Instance {
	Archivable: boolean;
	readonly ClassName: string;
	Name: string;
	Parent: Instance | undefined;
	ClearAllChildren(): void;
	Destroy(): void;
	FindFirstAncestor(name: string): Instance | undefined;
	FindFirstAncestorOfClass(className: string): Instance | undefined;
	FindFirstAncestorWhichIsA(className: string): Instance | undefined;
	FindFirstChild(name: string, recursive?: boolean): Instance | undefined;
	FindFirstChildOfClass(className: string): Instance | undefined;
	FindFirstChildWhichIsA(className: string, recursive?: boolean): Instance | undefined;
	GetChildren(): Array<Instance>;
	GetDescendants(): Array<any>;
	GetFullName(): string;
	GetPropertyChangedSignal(property: string): RBXScriptSignal;
	IsA(className: string): boolean;
	IsAncestorOf(descendant: Instance): boolean;
	IsDescendantOf(ancestor: Instance): boolean;
	AncestryChanged: RBXScriptSignal<(child: Instance, parent: Instance) => void>;
	Changed: RBXScriptSignal<(property: string) => void>;
	ChildAdded: RBXScriptSignal<(child: Instance) => void>;
	ChildRemoved: RBXScriptSignal<(child: Instance) => void>;
	DescendantAdded: RBXScriptSignal<(descendant: Instance) => void>;
	DescendantRemoving: RBXScriptSignal<(descendant: Instance) => void>;
}
interface Rbx_Instance {
	IsA(className: "Instance"): this is Instance;
	FindFirstAncestorOfClass(className: "Instance"): Instance | undefined;
	FindFirstAncestorWhichIsA(className: "Instance"): Instance | undefined;
	FindFirstChildOfClass(className: "Instance"): Instance | undefined;
	FindFirstAncestorWhichIsA(className: "Instance"): Instance | undefined;
}

// Accoutrement
interface Rbx_Accoutrement extends Rbx_Instance {
	AttachmentForward: Vector3;
	AttachmentPoint: CFrame;
	AttachmentPos: Vector3;
	AttachmentRight: Vector3;
	AttachmentUp: Vector3;
}
interface Accoutrement extends Rbx_Accoutrement, AnyIndex { }
declare class Accoutrement {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Accoutrement"): this is Accoutrement;
	FindFirstAncestorOfClass(className: "Accoutrement"): Accoutrement | undefined;
	FindFirstAncestorWhichIsA(className: "Accoutrement"): Accoutrement | undefined;
	FindFirstChildOfClass(className: "Accoutrement"): Accoutrement | undefined;
	FindFirstAncestorWhichIsA(className: "Accoutrement"): Accoutrement | undefined;
}

// Accessory
interface Rbx_Accessory extends Rbx_Accoutrement {
}
interface Accessory extends Rbx_Accessory, AnyIndex { }
declare class Accessory {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Accessory"): this is Accessory;
	FindFirstAncestorOfClass(className: "Accessory"): Accessory | undefined;
	FindFirstAncestorWhichIsA(className: "Accessory"): Accessory | undefined;
	FindFirstChildOfClass(className: "Accessory"): Accessory | undefined;
	FindFirstAncestorWhichIsA(className: "Accessory"): Accessory | undefined;
}

// Hat
interface Rbx_Hat extends Rbx_Accoutrement {
}
interface Hat extends Rbx_Hat, AnyIndex { }
declare class Hat {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Hat"): this is Hat;
	FindFirstAncestorOfClass(className: "Hat"): Hat | undefined;
	FindFirstAncestorWhichIsA(className: "Hat"): Hat | undefined;
	FindFirstChildOfClass(className: "Hat"): Hat | undefined;
	FindFirstAncestorWhichIsA(className: "Hat"): Hat | undefined;
}

// AdService
interface Rbx_AdService extends Rbx_Instance {
}
type AdService = Rbx_AdService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "AdService"): this is AdService;
	FindFirstAncestorOfClass(className: "AdService"): AdService | undefined;
	FindFirstAncestorWhichIsA(className: "AdService"): AdService | undefined;
	FindFirstChildOfClass(className: "AdService"): AdService | undefined;
	FindFirstAncestorWhichIsA(className: "AdService"): AdService | undefined;
}

// AdvancedDragger
interface Rbx_AdvancedDragger extends Rbx_Instance {
}
interface AdvancedDragger extends Rbx_AdvancedDragger, AnyIndex { }
declare class AdvancedDragger {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "AdvancedDragger"): this is AdvancedDragger;
	FindFirstAncestorOfClass(className: "AdvancedDragger"): AdvancedDragger | undefined;
	FindFirstAncestorWhichIsA(className: "AdvancedDragger"): AdvancedDragger | undefined;
	FindFirstChildOfClass(className: "AdvancedDragger"): AdvancedDragger | undefined;
	FindFirstAncestorWhichIsA(className: "AdvancedDragger"): AdvancedDragger | undefined;
}

// AnalyticsService
interface Rbx_AnalyticsService extends Rbx_Instance {
}
type AnalyticsService = Rbx_AnalyticsService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "AnalyticsService"): this is AnalyticsService;
	FindFirstAncestorOfClass(className: "AnalyticsService"): AnalyticsService | undefined;
	FindFirstAncestorWhichIsA(className: "AnalyticsService"): AnalyticsService | undefined;
	FindFirstChildOfClass(className: "AnalyticsService"): AnalyticsService | undefined;
	FindFirstAncestorWhichIsA(className: "AnalyticsService"): AnalyticsService | undefined;
}

// AnimationController
interface Rbx_AnimationController extends Rbx_Instance {
	GetPlayingAnimationTracks(): Array<any>;
	LoadAnimation(animation: Instance): Instance | undefined;
	AnimationPlayed: RBXScriptSignal<(animationTrack: Instance) => void>;
}
interface AnimationController extends Rbx_AnimationController, AnyIndex { }
declare class AnimationController {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "AnimationController"): this is AnimationController;
	FindFirstAncestorOfClass(className: "AnimationController"): AnimationController | undefined;
	FindFirstAncestorWhichIsA(className: "AnimationController"): AnimationController | undefined;
	FindFirstChildOfClass(className: "AnimationController"): AnimationController | undefined;
	FindFirstAncestorWhichIsA(className: "AnimationController"): AnimationController | undefined;
}

// AnimationTrack
interface Rbx_AnimationTrack extends Rbx_Instance {
	readonly Animation: Instance | undefined;
	readonly IsPlaying: boolean;
	readonly Length: number;
	Looped: boolean;
	Priority: Enum.AnimationPriority;
	readonly Speed: number;
	TimePosition: number;
	readonly WeightCurrent: number;
	readonly WeightTarget: number;
	AdjustSpeed(speed?: number): void;
	AdjustWeight(weight?: number, fadeTime?: number): void;
	GetTimeOfKeyframe(keyframeName: string): number;
	Play(fadeTime?: number, weight?: number, speed?: number): void;
	Stop(fadeTime?: number): void;
	DidLoop: RBXScriptSignal<() => void>;
	KeyframeReached: RBXScriptSignal<(keyframeName: string) => void>;
	Stopped: RBXScriptSignal<() => void>;
}
interface AnimationTrack extends Rbx_AnimationTrack, AnyIndex { }
declare class AnimationTrack {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "AnimationTrack"): this is AnimationTrack;
	FindFirstAncestorOfClass(className: "AnimationTrack"): AnimationTrack | undefined;
	FindFirstAncestorWhichIsA(className: "AnimationTrack"): AnimationTrack | undefined;
	FindFirstChildOfClass(className: "AnimationTrack"): AnimationTrack | undefined;
	FindFirstAncestorWhichIsA(className: "AnimationTrack"): AnimationTrack | undefined;
}

// Animator
interface Rbx_Animator extends Rbx_Instance {
	LoadAnimation(animation: Instance): Instance | undefined;
}
interface Animator extends Rbx_Animator, AnyIndex { }
declare class Animator {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Animator"): this is Animator;
	FindFirstAncestorOfClass(className: "Animator"): Animator | undefined;
	FindFirstAncestorWhichIsA(className: "Animator"): Animator | undefined;
	FindFirstChildOfClass(className: "Animator"): Animator | undefined;
	FindFirstAncestorWhichIsA(className: "Animator"): Animator | undefined;
}

// AssetService
interface Rbx_AssetService extends Rbx_Instance {
	CreatePlaceAsync(placeName: string, templatePlaceID: number, description?: string): number;
	CreatePlaceInPlayerInventoryAsync(player: Instance, placeName: string, templatePlaceID: number, description?: string): number;
	GetAssetIdsForPackage(packageAssetId: number): Array<any>;
	GetGamePlacesAsync(): Instance | undefined;
	SavePlaceAsync(): void;
}
type AssetService = Rbx_AssetService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "AssetService"): this is AssetService;
	FindFirstAncestorOfClass(className: "AssetService"): AssetService | undefined;
	FindFirstAncestorWhichIsA(className: "AssetService"): AssetService | undefined;
	FindFirstChildOfClass(className: "AssetService"): AssetService | undefined;
	FindFirstAncestorWhichIsA(className: "AssetService"): AssetService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "AssetService"): AssetService;
}

// Attachment
interface Rbx_Attachment extends Rbx_Instance {
	Axis: Vector3;
	CFrame: CFrame;
	Orientation: Vector3;
	Position: Vector3;
	Rotation: Vector3;
	SecondaryAxis: Vector3;
	Visible: boolean;
	readonly WorldAxis: Vector3;
	readonly WorldCFrame: CFrame;
	readonly WorldOrientation: Vector3;
	readonly WorldPosition: Vector3;
	readonly WorldSecondaryAxis: Vector3;
	GetAxis(): Vector3;
	GetSecondaryAxis(): Vector3;
	SetAxis(axis: Vector3): void;
	SetSecondaryAxis(axis: Vector3): void;
}
interface Attachment extends Rbx_Attachment, AnyIndex { }
declare class Attachment {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Attachment"): this is Attachment;
	FindFirstAncestorOfClass(className: "Attachment"): Attachment | undefined;
	FindFirstAncestorWhichIsA(className: "Attachment"): Attachment | undefined;
	FindFirstChildOfClass(className: "Attachment"): Attachment | undefined;
	FindFirstAncestorWhichIsA(className: "Attachment"): Attachment | undefined;
}

// BadgeService
interface Rbx_BadgeService extends Rbx_Instance {
	AwardBadge(userId: number, badgeId: number): boolean;
	GetBadgeInfoAsync(badgeId: number): object;
	IsDisabled(badgeId: number): boolean;
	IsLegal(badgeId: number): boolean;
	UserHasBadge(userId: number, badgeId: number): boolean;
	UserHasBadgeAsync(userId: number, badgeId: number): boolean;
}
type BadgeService = Rbx_BadgeService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "BadgeService"): this is BadgeService;
	FindFirstAncestorOfClass(className: "BadgeService"): BadgeService | undefined;
	FindFirstAncestorWhichIsA(className: "BadgeService"): BadgeService | undefined;
	FindFirstChildOfClass(className: "BadgeService"): BadgeService | undefined;
	FindFirstAncestorWhichIsA(className: "BadgeService"): BadgeService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "BadgeService"): BadgeService;
}

// BasePlayerGui
interface Rbx_BasePlayerGui extends Rbx_Instance {
}
interface BasePlayerGui extends Rbx_BasePlayerGui, AnyIndex { }
declare class BasePlayerGui {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BasePlayerGui"): this is BasePlayerGui;
	FindFirstAncestorOfClass(className: "BasePlayerGui"): BasePlayerGui | undefined;
	FindFirstAncestorWhichIsA(className: "BasePlayerGui"): BasePlayerGui | undefined;
	FindFirstChildOfClass(className: "BasePlayerGui"): BasePlayerGui | undefined;
	FindFirstAncestorWhichIsA(className: "BasePlayerGui"): BasePlayerGui | undefined;
}

// CoreGui
interface Rbx_CoreGui extends Rbx_BasePlayerGui {
	readonly Version: number;
}
type CoreGui = Rbx_CoreGui & AnyIndex;
interface Rbx_Instance {
	IsA(className: "CoreGui"): this is CoreGui;
	FindFirstAncestorOfClass(className: "CoreGui"): CoreGui | undefined;
	FindFirstAncestorWhichIsA(className: "CoreGui"): CoreGui | undefined;
	FindFirstChildOfClass(className: "CoreGui"): CoreGui | undefined;
	FindFirstAncestorWhichIsA(className: "CoreGui"): CoreGui | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "CoreGui"): CoreGui;
}

// PlayerGui
interface Rbx_PlayerGui extends Rbx_BasePlayerGui {
	readonly CurrentScreenOrientation: Enum.ScreenOrientation;
	ScreenOrientation: Enum.ScreenOrientation;
	SelectionImageObject: Instance | undefined;
	GetTopbarTransparency(): number;
	SetTopbarTransparency(transparency: number): void;
	TopbarTransparencyChangedSignal: RBXScriptSignal<(transparency: number) => void>;
}
interface PlayerGui extends Rbx_PlayerGui, AnyIndex { }
declare class PlayerGui {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PlayerGui"): this is PlayerGui;
	FindFirstAncestorOfClass(className: "PlayerGui"): PlayerGui | undefined;
	FindFirstAncestorWhichIsA(className: "PlayerGui"): PlayerGui | undefined;
	FindFirstChildOfClass(className: "PlayerGui"): PlayerGui | undefined;
	FindFirstAncestorWhichIsA(className: "PlayerGui"): PlayerGui | undefined;
}

// StarterGui
interface Rbx_StarterGui extends Rbx_BasePlayerGui {
	ScreenOrientation: Enum.ScreenOrientation;
	ShowDevelopmentGui: boolean;
	GetCoreGuiEnabled(coreGuiType: Enum.CoreGuiType): boolean;
	SetCore(parameterName: string, value?: any): void;
	SetCoreGuiEnabled(coreGuiType: Enum.CoreGuiType, enabled: boolean): void;
	GetCore(parameterName: string): any;
}
type StarterGui = Rbx_StarterGui & AnyIndex;
interface Rbx_Instance {
	IsA(className: "StarterGui"): this is StarterGui;
	FindFirstAncestorOfClass(className: "StarterGui"): StarterGui | undefined;
	FindFirstAncestorWhichIsA(className: "StarterGui"): StarterGui | undefined;
	FindFirstChildOfClass(className: "StarterGui"): StarterGui | undefined;
	FindFirstAncestorWhichIsA(className: "StarterGui"): StarterGui | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "StarterGui"): StarterGui;
}

// Beam
interface Rbx_Beam extends Rbx_Instance {
	Attachment0: Instance | undefined;
	Attachment1: Instance | undefined;
	Color: ColorSequence;
	CurveSize0: number;
	CurveSize1: number;
	Enabled: boolean;
	FaceCamera: boolean;
	LightEmission: number;
	LightInfluence: number;
	Segments: number;
	Texture: string;
	TextureLength: number;
	TextureMode: Enum.TextureMode;
	TextureSpeed: number;
	Transparency: NumberSequence;
	Width0: number;
	Width1: number;
	ZOffset: number;
	SetTextureOffset(offset?: number): void;
}
interface Beam extends Rbx_Beam, AnyIndex { }
declare class Beam {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Beam"): this is Beam;
	FindFirstAncestorOfClass(className: "Beam"): Beam | undefined;
	FindFirstAncestorWhichIsA(className: "Beam"): Beam | undefined;
	FindFirstChildOfClass(className: "Beam"): Beam | undefined;
	FindFirstAncestorWhichIsA(className: "Beam"): Beam | undefined;
}

// BindableEvent
interface Rbx_BindableEvent extends Rbx_Instance {
	Fire(arguments: Array<any>): void;
	Event: RBXScriptSignal<(arguments: Array<any>) => void>;
}
interface BindableEvent extends Rbx_BindableEvent, AnyIndex { }
declare class BindableEvent {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BindableEvent"): this is BindableEvent;
	FindFirstAncestorOfClass(className: "BindableEvent"): BindableEvent | undefined;
	FindFirstAncestorWhichIsA(className: "BindableEvent"): BindableEvent | undefined;
	FindFirstChildOfClass(className: "BindableEvent"): BindableEvent | undefined;
	FindFirstAncestorWhichIsA(className: "BindableEvent"): BindableEvent | undefined;
}

// BindableFunction
interface Rbx_BindableFunction extends Rbx_Instance {
	/** !TupleReturn */
	Invoke(arguments: Array<any>): Array<any>;
	OnInvoke: (arguments: Array<any>) => void;
}
interface BindableFunction extends Rbx_BindableFunction, AnyIndex { }
declare class BindableFunction {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BindableFunction"): this is BindableFunction;
	FindFirstAncestorOfClass(className: "BindableFunction"): BindableFunction | undefined;
	FindFirstAncestorWhichIsA(className: "BindableFunction"): BindableFunction | undefined;
	FindFirstChildOfClass(className: "BindableFunction"): BindableFunction | undefined;
	FindFirstAncestorWhichIsA(className: "BindableFunction"): BindableFunction | undefined;
}

// BodyMover
interface Rbx_BodyMover extends Rbx_Instance {
}
interface BodyMover extends Rbx_BodyMover, AnyIndex { }
declare class BodyMover {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BodyMover"): this is BodyMover;
	FindFirstAncestorOfClass(className: "BodyMover"): BodyMover | undefined;
	FindFirstAncestorWhichIsA(className: "BodyMover"): BodyMover | undefined;
	FindFirstChildOfClass(className: "BodyMover"): BodyMover | undefined;
	FindFirstAncestorWhichIsA(className: "BodyMover"): BodyMover | undefined;
}

// BodyAngularVelocity
interface Rbx_BodyAngularVelocity extends Rbx_BodyMover {
	AngularVelocity: Vector3;
	MaxTorque: Vector3;
	P: number;
}
interface BodyAngularVelocity extends Rbx_BodyAngularVelocity, AnyIndex { }
declare class BodyAngularVelocity {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BodyAngularVelocity"): this is BodyAngularVelocity;
	FindFirstAncestorOfClass(className: "BodyAngularVelocity"): BodyAngularVelocity | undefined;
	FindFirstAncestorWhichIsA(className: "BodyAngularVelocity"): BodyAngularVelocity | undefined;
	FindFirstChildOfClass(className: "BodyAngularVelocity"): BodyAngularVelocity | undefined;
	FindFirstAncestorWhichIsA(className: "BodyAngularVelocity"): BodyAngularVelocity | undefined;
}

// BodyForce
interface Rbx_BodyForce extends Rbx_BodyMover {
	Force: Vector3;
}
interface BodyForce extends Rbx_BodyForce, AnyIndex { }
declare class BodyForce {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BodyForce"): this is BodyForce;
	FindFirstAncestorOfClass(className: "BodyForce"): BodyForce | undefined;
	FindFirstAncestorWhichIsA(className: "BodyForce"): BodyForce | undefined;
	FindFirstChildOfClass(className: "BodyForce"): BodyForce | undefined;
	FindFirstAncestorWhichIsA(className: "BodyForce"): BodyForce | undefined;
}

// BodyGyro
interface Rbx_BodyGyro extends Rbx_BodyMover {
	CFrame: CFrame;
	D: number;
	MaxTorque: Vector3;
	P: number;
}
interface BodyGyro extends Rbx_BodyGyro, AnyIndex { }
declare class BodyGyro {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BodyGyro"): this is BodyGyro;
	FindFirstAncestorOfClass(className: "BodyGyro"): BodyGyro | undefined;
	FindFirstAncestorWhichIsA(className: "BodyGyro"): BodyGyro | undefined;
	FindFirstChildOfClass(className: "BodyGyro"): BodyGyro | undefined;
	FindFirstAncestorWhichIsA(className: "BodyGyro"): BodyGyro | undefined;
}

// BodyPosition
interface Rbx_BodyPosition extends Rbx_BodyMover {
	D: number;
	MaxForce: Vector3;
	P: number;
	Position: Vector3;
	GetLastForce(): Vector3;
	ReachedTarget: RBXScriptSignal<() => void>;
}
interface BodyPosition extends Rbx_BodyPosition, AnyIndex { }
declare class BodyPosition {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BodyPosition"): this is BodyPosition;
	FindFirstAncestorOfClass(className: "BodyPosition"): BodyPosition | undefined;
	FindFirstAncestorWhichIsA(className: "BodyPosition"): BodyPosition | undefined;
	FindFirstChildOfClass(className: "BodyPosition"): BodyPosition | undefined;
	FindFirstAncestorWhichIsA(className: "BodyPosition"): BodyPosition | undefined;
}

// BodyThrust
interface Rbx_BodyThrust extends Rbx_BodyMover {
	Force: Vector3;
	Location: Vector3;
}
interface BodyThrust extends Rbx_BodyThrust, AnyIndex { }
declare class BodyThrust {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BodyThrust"): this is BodyThrust;
	FindFirstAncestorOfClass(className: "BodyThrust"): BodyThrust | undefined;
	FindFirstAncestorWhichIsA(className: "BodyThrust"): BodyThrust | undefined;
	FindFirstChildOfClass(className: "BodyThrust"): BodyThrust | undefined;
	FindFirstAncestorWhichIsA(className: "BodyThrust"): BodyThrust | undefined;
}

// BodyVelocity
interface Rbx_BodyVelocity extends Rbx_BodyMover {
	MaxForce: Vector3;
	P: number;
	Velocity: Vector3;
	GetLastForce(): Vector3;
	lastForce(): Vector3;
}
interface BodyVelocity extends Rbx_BodyVelocity, AnyIndex { }
declare class BodyVelocity {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BodyVelocity"): this is BodyVelocity;
	FindFirstAncestorOfClass(className: "BodyVelocity"): BodyVelocity | undefined;
	FindFirstAncestorWhichIsA(className: "BodyVelocity"): BodyVelocity | undefined;
	FindFirstChildOfClass(className: "BodyVelocity"): BodyVelocity | undefined;
	FindFirstAncestorWhichIsA(className: "BodyVelocity"): BodyVelocity | undefined;
}

// RocketPropulsion
interface Rbx_RocketPropulsion extends Rbx_BodyMover {
	CartoonFactor: number;
	MaxSpeed: number;
	MaxThrust: number;
	MaxTorque: Vector3;
	Target: Instance | undefined;
	TargetOffset: Vector3;
	TargetRadius: number;
	ThrustD: number;
	ThrustP: number;
	TurnD: number;
	TurnP: number;
	Abort(): void;
	Fire(): void;
	ReachedTarget: RBXScriptSignal<() => void>;
}
interface RocketPropulsion extends Rbx_RocketPropulsion, AnyIndex { }
declare class RocketPropulsion {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RocketPropulsion"): this is RocketPropulsion;
	FindFirstAncestorOfClass(className: "RocketPropulsion"): RocketPropulsion | undefined;
	FindFirstAncestorWhichIsA(className: "RocketPropulsion"): RocketPropulsion | undefined;
	FindFirstChildOfClass(className: "RocketPropulsion"): RocketPropulsion | undefined;
	FindFirstAncestorWhichIsA(className: "RocketPropulsion"): RocketPropulsion | undefined;
}

// Button
interface Rbx_Button extends Rbx_Instance {
	ClickableWhenViewportHidden: boolean;
	Enabled: boolean;
	Icon: string;
}
interface Button extends Rbx_Button, AnyIndex { }
declare class Button {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Button"): this is Button;
	FindFirstAncestorOfClass(className: "Button"): Button | undefined;
	FindFirstAncestorWhichIsA(className: "Button"): Button | undefined;
	FindFirstChildOfClass(className: "Button"): Button | undefined;
	FindFirstAncestorWhichIsA(className: "Button"): Button | undefined;
}

// CacheableContentProvider
interface Rbx_CacheableContentProvider extends Rbx_Instance {
}
type CacheableContentProvider = Rbx_CacheableContentProvider & AnyIndex;
interface Rbx_Instance {
	IsA(className: "CacheableContentProvider"): this is CacheableContentProvider;
	FindFirstAncestorOfClass(className: "CacheableContentProvider"): CacheableContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "CacheableContentProvider"): CacheableContentProvider | undefined;
	FindFirstChildOfClass(className: "CacheableContentProvider"): CacheableContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "CacheableContentProvider"): CacheableContentProvider | undefined;
}

// MeshContentProvider
interface Rbx_MeshContentProvider extends Rbx_CacheableContentProvider {
}
type MeshContentProvider = Rbx_MeshContentProvider & AnyIndex;
interface Rbx_Instance {
	IsA(className: "MeshContentProvider"): this is MeshContentProvider;
	FindFirstAncestorOfClass(className: "MeshContentProvider"): MeshContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "MeshContentProvider"): MeshContentProvider | undefined;
	FindFirstChildOfClass(className: "MeshContentProvider"): MeshContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "MeshContentProvider"): MeshContentProvider | undefined;
}

// SolidModelContentProvider
interface Rbx_SolidModelContentProvider extends Rbx_CacheableContentProvider {
}
type SolidModelContentProvider = Rbx_SolidModelContentProvider & AnyIndex;
interface Rbx_Instance {
	IsA(className: "SolidModelContentProvider"): this is SolidModelContentProvider;
	FindFirstAncestorOfClass(className: "SolidModelContentProvider"): SolidModelContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "SolidModelContentProvider"): SolidModelContentProvider | undefined;
	FindFirstChildOfClass(className: "SolidModelContentProvider"): SolidModelContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "SolidModelContentProvider"): SolidModelContentProvider | undefined;
}

// Camera
interface Rbx_Camera extends Rbx_Instance {
	CFrame: CFrame;
	CameraSubject: Instance | undefined;
	CameraType: Enum.CameraType;
	FieldOfView: number;
	Focus: CFrame;
	HeadLocked: boolean;
	HeadScale: number;
	readonly NearPlaneZ: number;
	readonly ViewportSize: Vector2;
	GetLargestCutoffDistance(ignoreList: Array<Instance>): number;
	GetPanSpeed(): number;
	GetPartsObscuringTarget(castPoints: Array<any>, ignoreList: Array<Instance>): Array<Instance>;
	GetRenderCFrame(): CFrame;
	GetRoll(): number;
	GetTiltSpeed(): number;
	Interpolate(endPos: CFrame, endFocus: CFrame, duration: number): void;
	PanUnits(units: number): void;
	ScreenPointToRay(x: number, y: number, depth?: number): Ray;
	SetCameraPanMode(mode?: Enum.CameraPanMode): void;
	SetRoll(rollAngle: number): void;
	TiltUnits(units: number): boolean;
	ViewportPointToRay(x: number, y: number, depth?: number): Ray;
	/** !TupleReturn */
	WorldToScreenPoint(worldPoint: Vector3): Array<any>;
	/** !TupleReturn */
	WorldToViewportPoint(worldPoint: Vector3): Array<any>;
	InterpolationFinished: RBXScriptSignal<() => void>;
}
interface Camera extends Rbx_Camera, AnyIndex { }
declare class Camera {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Camera"): this is Camera;
	FindFirstAncestorOfClass(className: "Camera"): Camera | undefined;
	FindFirstAncestorWhichIsA(className: "Camera"): Camera | undefined;
	FindFirstChildOfClass(className: "Camera"): Camera | undefined;
	FindFirstAncestorWhichIsA(className: "Camera"): Camera | undefined;
}

// ChangeHistoryService
interface Rbx_ChangeHistoryService extends Rbx_Instance {
}
type ChangeHistoryService = Rbx_ChangeHistoryService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ChangeHistoryService"): this is ChangeHistoryService;
	FindFirstAncestorOfClass(className: "ChangeHistoryService"): ChangeHistoryService | undefined;
	FindFirstAncestorWhichIsA(className: "ChangeHistoryService"): ChangeHistoryService | undefined;
	FindFirstChildOfClass(className: "ChangeHistoryService"): ChangeHistoryService | undefined;
	FindFirstAncestorWhichIsA(className: "ChangeHistoryService"): ChangeHistoryService | undefined;
}

// CharacterAppearance
interface Rbx_CharacterAppearance extends Rbx_Instance {
}
interface CharacterAppearance extends Rbx_CharacterAppearance, AnyIndex { }
declare class CharacterAppearance {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "CharacterAppearance"): this is CharacterAppearance;
	FindFirstAncestorOfClass(className: "CharacterAppearance"): CharacterAppearance | undefined;
	FindFirstAncestorWhichIsA(className: "CharacterAppearance"): CharacterAppearance | undefined;
	FindFirstChildOfClass(className: "CharacterAppearance"): CharacterAppearance | undefined;
	FindFirstAncestorWhichIsA(className: "CharacterAppearance"): CharacterAppearance | undefined;
}

// BodyColors
interface Rbx_BodyColors extends Rbx_CharacterAppearance {
	HeadColor: BrickColor;
	HeadColor3: Color3;
	LeftArmColor: BrickColor;
	LeftArmColor3: Color3;
	LeftLegColor: BrickColor;
	LeftLegColor3: Color3;
	RightArmColor: BrickColor;
	RightArmColor3: Color3;
	RightLegColor: BrickColor;
	RightLegColor3: Color3;
	TorsoColor: BrickColor;
	TorsoColor3: Color3;
}
interface BodyColors extends Rbx_BodyColors, AnyIndex { }
declare class BodyColors {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BodyColors"): this is BodyColors;
	FindFirstAncestorOfClass(className: "BodyColors"): BodyColors | undefined;
	FindFirstAncestorWhichIsA(className: "BodyColors"): BodyColors | undefined;
	FindFirstChildOfClass(className: "BodyColors"): BodyColors | undefined;
	FindFirstAncestorWhichIsA(className: "BodyColors"): BodyColors | undefined;
}

// CharacterMesh
interface Rbx_CharacterMesh extends Rbx_CharacterAppearance {
	BaseTextureId: number;
	BodyPart: Enum.BodyPart;
	MeshId: number;
	OverlayTextureId: number;
}
interface CharacterMesh extends Rbx_CharacterMesh, AnyIndex { }
declare class CharacterMesh {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "CharacterMesh"): this is CharacterMesh;
	FindFirstAncestorOfClass(className: "CharacterMesh"): CharacterMesh | undefined;
	FindFirstAncestorWhichIsA(className: "CharacterMesh"): CharacterMesh | undefined;
	FindFirstChildOfClass(className: "CharacterMesh"): CharacterMesh | undefined;
	FindFirstAncestorWhichIsA(className: "CharacterMesh"): CharacterMesh | undefined;
}

// Clothing
interface Rbx_Clothing extends Rbx_CharacterAppearance {
}
interface Clothing extends Rbx_Clothing, AnyIndex { }
declare class Clothing {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Clothing"): this is Clothing;
	FindFirstAncestorOfClass(className: "Clothing"): Clothing | undefined;
	FindFirstAncestorWhichIsA(className: "Clothing"): Clothing | undefined;
	FindFirstChildOfClass(className: "Clothing"): Clothing | undefined;
	FindFirstAncestorWhichIsA(className: "Clothing"): Clothing | undefined;
}

// Pants
interface Rbx_Pants extends Rbx_Clothing {
	PantsTemplate: string;
}
interface Pants extends Rbx_Pants, AnyIndex { }
declare class Pants {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Pants"): this is Pants;
	FindFirstAncestorOfClass(className: "Pants"): Pants | undefined;
	FindFirstAncestorWhichIsA(className: "Pants"): Pants | undefined;
	FindFirstChildOfClass(className: "Pants"): Pants | undefined;
	FindFirstAncestorWhichIsA(className: "Pants"): Pants | undefined;
}

// Shirt
interface Rbx_Shirt extends Rbx_Clothing {
	ShirtTemplate: string;
}
interface Shirt extends Rbx_Shirt, AnyIndex { }
declare class Shirt {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Shirt"): this is Shirt;
	FindFirstAncestorOfClass(className: "Shirt"): Shirt | undefined;
	FindFirstAncestorWhichIsA(className: "Shirt"): Shirt | undefined;
	FindFirstChildOfClass(className: "Shirt"): Shirt | undefined;
	FindFirstAncestorWhichIsA(className: "Shirt"): Shirt | undefined;
}

// ShirtGraphic
interface Rbx_ShirtGraphic extends Rbx_CharacterAppearance {
	Graphic: string;
}
interface ShirtGraphic extends Rbx_ShirtGraphic, AnyIndex { }
declare class ShirtGraphic {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ShirtGraphic"): this is ShirtGraphic;
	FindFirstAncestorOfClass(className: "ShirtGraphic"): ShirtGraphic | undefined;
	FindFirstAncestorWhichIsA(className: "ShirtGraphic"): ShirtGraphic | undefined;
	FindFirstChildOfClass(className: "ShirtGraphic"): ShirtGraphic | undefined;
	FindFirstAncestorWhichIsA(className: "ShirtGraphic"): ShirtGraphic | undefined;
}

// Skin
interface Rbx_Skin extends Rbx_CharacterAppearance {
	SkinColor: BrickColor;
}
interface Skin extends Rbx_Skin, AnyIndex { }
declare class Skin {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Skin"): this is Skin;
	FindFirstAncestorOfClass(className: "Skin"): Skin | undefined;
	FindFirstAncestorWhichIsA(className: "Skin"): Skin | undefined;
	FindFirstChildOfClass(className: "Skin"): Skin | undefined;
	FindFirstAncestorWhichIsA(className: "Skin"): Skin | undefined;
}

// Chat
interface Rbx_Chat extends Rbx_Instance {
	readonly LoadDefaultChat: boolean;
	Chat(partOrCharacter: Instance, message: string, color?: Enum.ChatColor): void;
	CanUserChatAsync(userId: number): boolean;
	CanUsersChatAsync(userIdFrom: number, userIdTo: number): boolean;
	FilterStringAsync(stringToFilter: string, playerFrom: Instance, playerTo: Instance): string;
	FilterStringForBroadcast(stringToFilter: string, playerFrom: Instance): string;
	Chatted: RBXScriptSignal<(part: Instance, message: string, color: Enum.ChatColor) => void>;
}
type Chat = Rbx_Chat & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Chat"): this is Chat;
	FindFirstAncestorOfClass(className: "Chat"): Chat | undefined;
	FindFirstAncestorWhichIsA(className: "Chat"): Chat | undefined;
	FindFirstChildOfClass(className: "Chat"): Chat | undefined;
	FindFirstAncestorWhichIsA(className: "Chat"): Chat | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "Chat"): Chat;
}

// ClickDetector
interface Rbx_ClickDetector extends Rbx_Instance {
	CursorIcon: string;
	MaxActivationDistance: number;
	MouseClick: RBXScriptSignal<(playerWhoClicked: Instance) => void>;
	MouseHoverEnter: RBXScriptSignal<(playerWhoHovered: Instance) => void>;
	MouseHoverLeave: RBXScriptSignal<(playerWhoHovered: Instance) => void>;
	RightMouseClick: RBXScriptSignal<(playerWhoClicked: Instance) => void>;
}
interface ClickDetector extends Rbx_ClickDetector, AnyIndex { }
declare class ClickDetector {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ClickDetector"): this is ClickDetector;
	FindFirstAncestorOfClass(className: "ClickDetector"): ClickDetector | undefined;
	FindFirstAncestorWhichIsA(className: "ClickDetector"): ClickDetector | undefined;
	FindFirstChildOfClass(className: "ClickDetector"): ClickDetector | undefined;
	FindFirstAncestorWhichIsA(className: "ClickDetector"): ClickDetector | undefined;
}

// ClusterPacketCache
interface Rbx_ClusterPacketCache extends Rbx_Instance {
}
type ClusterPacketCache = Rbx_ClusterPacketCache & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ClusterPacketCache"): this is ClusterPacketCache;
	FindFirstAncestorOfClass(className: "ClusterPacketCache"): ClusterPacketCache | undefined;
	FindFirstAncestorWhichIsA(className: "ClusterPacketCache"): ClusterPacketCache | undefined;
	FindFirstChildOfClass(className: "ClusterPacketCache"): ClusterPacketCache | undefined;
	FindFirstAncestorWhichIsA(className: "ClusterPacketCache"): ClusterPacketCache | undefined;
}

// CollectionService
interface Rbx_CollectionService extends Rbx_Instance {
	AddTag(instance: Instance, tag: string): void;
	GetInstanceAddedSignal(tag: string): RBXScriptSignal;
	GetInstanceRemovedSignal(tag: string): RBXScriptSignal;
	GetTagged(tag: string): Array<Instance>;
	GetTags(instance: Instance): Array<any>;
	HasTag(instance: Instance, tag: string): boolean;
	RemoveTag(instance: Instance, tag: string): void;
}
type CollectionService = Rbx_CollectionService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "CollectionService"): this is CollectionService;
	FindFirstAncestorOfClass(className: "CollectionService"): CollectionService | undefined;
	FindFirstAncestorWhichIsA(className: "CollectionService"): CollectionService | undefined;
	FindFirstChildOfClass(className: "CollectionService"): CollectionService | undefined;
	FindFirstAncestorWhichIsA(className: "CollectionService"): CollectionService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "CollectionService"): CollectionService;
}

// Configuration
interface Rbx_Configuration extends Rbx_Instance {
}
interface Configuration extends Rbx_Configuration, AnyIndex { }
declare class Configuration {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Configuration"): this is Configuration;
	FindFirstAncestorOfClass(className: "Configuration"): Configuration | undefined;
	FindFirstAncestorWhichIsA(className: "Configuration"): Configuration | undefined;
	FindFirstChildOfClass(className: "Configuration"): Configuration | undefined;
	FindFirstAncestorWhichIsA(className: "Configuration"): Configuration | undefined;
}

// Constraint
interface Rbx_Constraint extends Rbx_Instance {
	Attachment0: Instance | undefined;
	Attachment1: Instance | undefined;
	Color: BrickColor;
	Enabled: boolean;
	Visible: boolean;
}
interface Constraint extends Rbx_Constraint, AnyIndex { }
declare class Constraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Constraint"): this is Constraint;
	FindFirstAncestorOfClass(className: "Constraint"): Constraint | undefined;
	FindFirstAncestorWhichIsA(className: "Constraint"): Constraint | undefined;
	FindFirstChildOfClass(className: "Constraint"): Constraint | undefined;
	FindFirstAncestorWhichIsA(className: "Constraint"): Constraint | undefined;
}

// AlignOrientation
interface Rbx_AlignOrientation extends Rbx_Constraint {
	MaxAngularVelocity: number;
	MaxTorque: number;
	PrimaryAxisOnly: boolean;
	ReactionTorqueEnabled: boolean;
	Responsiveness: number;
	RigidityEnabled: boolean;
}
interface AlignOrientation extends Rbx_AlignOrientation, AnyIndex { }
declare class AlignOrientation {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "AlignOrientation"): this is AlignOrientation;
	FindFirstAncestorOfClass(className: "AlignOrientation"): AlignOrientation | undefined;
	FindFirstAncestorWhichIsA(className: "AlignOrientation"): AlignOrientation | undefined;
	FindFirstChildOfClass(className: "AlignOrientation"): AlignOrientation | undefined;
	FindFirstAncestorWhichIsA(className: "AlignOrientation"): AlignOrientation | undefined;
}

// AlignPosition
interface Rbx_AlignPosition extends Rbx_Constraint {
	ApplyAtCenterOfMass: boolean;
	MaxForce: number;
	MaxVelocity: number;
	ReactionForceEnabled: boolean;
	Responsiveness: number;
	RigidityEnabled: boolean;
}
interface AlignPosition extends Rbx_AlignPosition, AnyIndex { }
declare class AlignPosition {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "AlignPosition"): this is AlignPosition;
	FindFirstAncestorOfClass(className: "AlignPosition"): AlignPosition | undefined;
	FindFirstAncestorWhichIsA(className: "AlignPosition"): AlignPosition | undefined;
	FindFirstChildOfClass(className: "AlignPosition"): AlignPosition | undefined;
	FindFirstAncestorWhichIsA(className: "AlignPosition"): AlignPosition | undefined;
}

// BallSocketConstraint
interface Rbx_BallSocketConstraint extends Rbx_Constraint {
	LimitsEnabled: boolean;
	Radius: number;
	Restitution: number;
	TwistLimitsEnabled: boolean;
	TwistLowerAngle: number;
	TwistUpperAngle: number;
	UpperAngle: number;
}
interface BallSocketConstraint extends Rbx_BallSocketConstraint, AnyIndex { }
declare class BallSocketConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BallSocketConstraint"): this is BallSocketConstraint;
	FindFirstAncestorOfClass(className: "BallSocketConstraint"): BallSocketConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "BallSocketConstraint"): BallSocketConstraint | undefined;
	FindFirstChildOfClass(className: "BallSocketConstraint"): BallSocketConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "BallSocketConstraint"): BallSocketConstraint | undefined;
}

// HingeConstraint
interface Rbx_HingeConstraint extends Rbx_Constraint {
	ActuatorType: Enum.ActuatorType;
	AngularSpeed: number;
	AngularVelocity: number;
	readonly CurrentAngle: number;
	LimitsEnabled: boolean;
	LowerAngle: number;
	MotorMaxAcceleration: number;
	MotorMaxTorque: number;
	Radius: number;
	Restitution: number;
	ServoMaxTorque: number;
	TargetAngle: number;
	UpperAngle: number;
}
interface HingeConstraint extends Rbx_HingeConstraint, AnyIndex { }
declare class HingeConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "HingeConstraint"): this is HingeConstraint;
	FindFirstAncestorOfClass(className: "HingeConstraint"): HingeConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "HingeConstraint"): HingeConstraint | undefined;
	FindFirstChildOfClass(className: "HingeConstraint"): HingeConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "HingeConstraint"): HingeConstraint | undefined;
}

// LineForce
interface Rbx_LineForce extends Rbx_Constraint {
	ApplyAtCenterOfMass: boolean;
	InverseSquareLaw: boolean;
	Magnitude: number;
	MaxForce: number;
	ReactionForceEnabled: boolean;
}
interface LineForce extends Rbx_LineForce, AnyIndex { }
declare class LineForce {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "LineForce"): this is LineForce;
	FindFirstAncestorOfClass(className: "LineForce"): LineForce | undefined;
	FindFirstAncestorWhichIsA(className: "LineForce"): LineForce | undefined;
	FindFirstChildOfClass(className: "LineForce"): LineForce | undefined;
	FindFirstAncestorWhichIsA(className: "LineForce"): LineForce | undefined;
}

// RodConstraint
interface Rbx_RodConstraint extends Rbx_Constraint {
	readonly CurrentDistance: number;
	Length: number;
	Thickness: number;
}
interface RodConstraint extends Rbx_RodConstraint, AnyIndex { }
declare class RodConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RodConstraint"): this is RodConstraint;
	FindFirstAncestorOfClass(className: "RodConstraint"): RodConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "RodConstraint"): RodConstraint | undefined;
	FindFirstChildOfClass(className: "RodConstraint"): RodConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "RodConstraint"): RodConstraint | undefined;
}

// RopeConstraint
interface Rbx_RopeConstraint extends Rbx_Constraint {
	readonly CurrentDistance: number;
	Length: number;
	Restitution: number;
	Thickness: number;
}
interface RopeConstraint extends Rbx_RopeConstraint, AnyIndex { }
declare class RopeConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RopeConstraint"): this is RopeConstraint;
	FindFirstAncestorOfClass(className: "RopeConstraint"): RopeConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "RopeConstraint"): RopeConstraint | undefined;
	FindFirstChildOfClass(className: "RopeConstraint"): RopeConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "RopeConstraint"): RopeConstraint | undefined;
}

// SlidingBallConstraint
interface Rbx_SlidingBallConstraint extends Rbx_Constraint {
	ActuatorType: Enum.ActuatorType;
	readonly CurrentPosition: number;
	LimitsEnabled: boolean;
	LowerLimit: number;
	MotorMaxAcceleration: number;
	MotorMaxForce: number;
	Restitution: number;
	ServoMaxForce: number;
	Size: number;
	Speed: number;
	TargetPosition: number;
	UpperLimit: number;
	Velocity: number;
}
interface SlidingBallConstraint extends Rbx_SlidingBallConstraint, AnyIndex { }
declare class SlidingBallConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SlidingBallConstraint"): this is SlidingBallConstraint;
	FindFirstAncestorOfClass(className: "SlidingBallConstraint"): SlidingBallConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "SlidingBallConstraint"): SlidingBallConstraint | undefined;
	FindFirstChildOfClass(className: "SlidingBallConstraint"): SlidingBallConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "SlidingBallConstraint"): SlidingBallConstraint | undefined;
}

// CylindricalConstraint
interface Rbx_CylindricalConstraint extends Rbx_SlidingBallConstraint {
	AngularActuatorType: Enum.ActuatorType;
	AngularLimitsEnabled: boolean;
	AngularRestitution: number;
	AngularSpeed: number;
	AngularVelocity: number;
	readonly CurrentAngle: number;
	InclinationAngle: number;
	LowerAngle: number;
	MotorMaxAngularAcceleration: number;
	MotorMaxTorque: number;
	RotationAxisVisible: boolean;
	ServoMaxTorque: number;
	TargetAngle: number;
	UpperAngle: number;
	readonly WorldRotationAxis: Vector3;
}
interface CylindricalConstraint extends Rbx_CylindricalConstraint, AnyIndex { }
declare class CylindricalConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "CylindricalConstraint"): this is CylindricalConstraint;
	FindFirstAncestorOfClass(className: "CylindricalConstraint"): CylindricalConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "CylindricalConstraint"): CylindricalConstraint | undefined;
	FindFirstChildOfClass(className: "CylindricalConstraint"): CylindricalConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "CylindricalConstraint"): CylindricalConstraint | undefined;
}

// PrismaticConstraint
interface Rbx_PrismaticConstraint extends Rbx_SlidingBallConstraint {
}
interface PrismaticConstraint extends Rbx_PrismaticConstraint, AnyIndex { }
declare class PrismaticConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PrismaticConstraint"): this is PrismaticConstraint;
	FindFirstAncestorOfClass(className: "PrismaticConstraint"): PrismaticConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "PrismaticConstraint"): PrismaticConstraint | undefined;
	FindFirstChildOfClass(className: "PrismaticConstraint"): PrismaticConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "PrismaticConstraint"): PrismaticConstraint | undefined;
}

// SpringConstraint
interface Rbx_SpringConstraint extends Rbx_Constraint {
	Coils: number;
	readonly CurrentLength: number;
	Damping: number;
	FreeLength: number;
	LimitsEnabled: boolean;
	MaxForce: number;
	MaxLength: number;
	MinLength: number;
	Radius: number;
	Stiffness: number;
	Thickness: number;
}
interface SpringConstraint extends Rbx_SpringConstraint, AnyIndex { }
declare class SpringConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SpringConstraint"): this is SpringConstraint;
	FindFirstAncestorOfClass(className: "SpringConstraint"): SpringConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "SpringConstraint"): SpringConstraint | undefined;
	FindFirstChildOfClass(className: "SpringConstraint"): SpringConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "SpringConstraint"): SpringConstraint | undefined;
}

// Torque
interface Rbx_Torque extends Rbx_Constraint {
	RelativeTo: Enum.ActuatorRelativeTo;
	Torque: Vector3;
}
interface Torque extends Rbx_Torque, AnyIndex { }
declare class Torque {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Torque"): this is Torque;
	FindFirstAncestorOfClass(className: "Torque"): Torque | undefined;
	FindFirstAncestorWhichIsA(className: "Torque"): Torque | undefined;
	FindFirstChildOfClass(className: "Torque"): Torque | undefined;
	FindFirstAncestorWhichIsA(className: "Torque"): Torque | undefined;
}

// VectorForce
interface Rbx_VectorForce extends Rbx_Constraint {
	ApplyAtCenterOfMass: boolean;
	Force: Vector3;
	RelativeTo: Enum.ActuatorRelativeTo;
}
interface VectorForce extends Rbx_VectorForce, AnyIndex { }
declare class VectorForce {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "VectorForce"): this is VectorForce;
	FindFirstAncestorOfClass(className: "VectorForce"): VectorForce | undefined;
	FindFirstAncestorWhichIsA(className: "VectorForce"): VectorForce | undefined;
	FindFirstChildOfClass(className: "VectorForce"): VectorForce | undefined;
	FindFirstAncestorWhichIsA(className: "VectorForce"): VectorForce | undefined;
}

// ContentProvider
interface Rbx_ContentProvider extends Rbx_Instance {
	readonly BaseUrl: string;
	readonly RequestQueueSize: number;
	PreloadAsync(contentIdList: Array<any>): void;
}
type ContentProvider = Rbx_ContentProvider & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ContentProvider"): this is ContentProvider;
	FindFirstAncestorOfClass(className: "ContentProvider"): ContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "ContentProvider"): ContentProvider | undefined;
	FindFirstChildOfClass(className: "ContentProvider"): ContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "ContentProvider"): ContentProvider | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "ContentProvider"): ContentProvider;
}

// ContextActionService
interface Rbx_ContextActionService extends Rbx_Instance {
	BindAction(actionName: string, functionToBind: Callback, createTouchButton: boolean, inputTypes: Array<any>): void;
	BindActionAtPriority(actionName: string, functionToBind: Callback, createTouchButton: boolean, priorityLevel: number, inputTypes: Array<any>): void;
	BindActivate(userInputTypeForActivation: Enum.UserInputType, keyCodeForActivation?: Enum.KeyCode): void;
	GetAllBoundActionInfo(): object;
	GetBoundActionInfo(actionName: string): object;
	GetCurrentLocalToolIcon(): string;
	SetDescription(actionName: string, description: string): void;
	SetImage(actionName: string, image: string): void;
	SetPosition(actionName: string, position: UDim2): void;
	SetTitle(actionName: string, title: string): void;
	UnbindAction(actionName: string): void;
	UnbindActivate(userInputTypeForActivation: Enum.UserInputType, keyCodeForActivation?: Enum.KeyCode): void;
	UnbindAllActions(): void;
	GetButton(actionName: string): Instance | undefined;
	LocalToolEquipped: RBXScriptSignal<(toolEquipped: Instance) => void>;
	LocalToolUnequipped: RBXScriptSignal<(toolUnequipped: Instance) => void>;
}
type ContextActionService = Rbx_ContextActionService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ContextActionService"): this is ContextActionService;
	FindFirstAncestorOfClass(className: "ContextActionService"): ContextActionService | undefined;
	FindFirstAncestorWhichIsA(className: "ContextActionService"): ContextActionService | undefined;
	FindFirstChildOfClass(className: "ContextActionService"): ContextActionService | undefined;
	FindFirstAncestorWhichIsA(className: "ContextActionService"): ContextActionService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "ContextActionService"): ContextActionService;
}

// Controller
interface Rbx_Controller extends Rbx_Instance {
	BindButton(button: Enum.Button, caption: string): void;
	GetButton(button: Enum.Button): boolean;
	UnbindButton(button: Enum.Button): void;
	ButtonChanged: RBXScriptSignal<(button: Enum.Button) => void>;
}
interface Controller extends Rbx_Controller, AnyIndex { }
declare class Controller {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Controller"): this is Controller;
	FindFirstAncestorOfClass(className: "Controller"): Controller | undefined;
	FindFirstAncestorWhichIsA(className: "Controller"): Controller | undefined;
	FindFirstChildOfClass(className: "Controller"): Controller | undefined;
	FindFirstAncestorWhichIsA(className: "Controller"): Controller | undefined;
}

// HumanoidController
interface Rbx_HumanoidController extends Rbx_Controller {
}
interface HumanoidController extends Rbx_HumanoidController, AnyIndex { }
declare class HumanoidController {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "HumanoidController"): this is HumanoidController;
	FindFirstAncestorOfClass(className: "HumanoidController"): HumanoidController | undefined;
	FindFirstAncestorWhichIsA(className: "HumanoidController"): HumanoidController | undefined;
	FindFirstChildOfClass(className: "HumanoidController"): HumanoidController | undefined;
	FindFirstAncestorWhichIsA(className: "HumanoidController"): HumanoidController | undefined;
}

// SkateboardController
interface Rbx_SkateboardController extends Rbx_Controller {
	readonly Steer: number;
	readonly Throttle: number;
	AxisChanged: RBXScriptSignal<(axis: string) => void>;
}
interface SkateboardController extends Rbx_SkateboardController, AnyIndex { }
declare class SkateboardController {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SkateboardController"): this is SkateboardController;
	FindFirstAncestorOfClass(className: "SkateboardController"): SkateboardController | undefined;
	FindFirstAncestorWhichIsA(className: "SkateboardController"): SkateboardController | undefined;
	FindFirstChildOfClass(className: "SkateboardController"): SkateboardController | undefined;
	FindFirstAncestorWhichIsA(className: "SkateboardController"): SkateboardController | undefined;
}

// VehicleController
interface Rbx_VehicleController extends Rbx_Controller {
}
interface VehicleController extends Rbx_VehicleController, AnyIndex { }
declare class VehicleController {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "VehicleController"): this is VehicleController;
	FindFirstAncestorOfClass(className: "VehicleController"): VehicleController | undefined;
	FindFirstAncestorWhichIsA(className: "VehicleController"): VehicleController | undefined;
	FindFirstChildOfClass(className: "VehicleController"): VehicleController | undefined;
	FindFirstAncestorWhichIsA(className: "VehicleController"): VehicleController | undefined;
}

// ControllerService
interface Rbx_ControllerService extends Rbx_Instance {
}
type ControllerService = Rbx_ControllerService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ControllerService"): this is ControllerService;
	FindFirstAncestorOfClass(className: "ControllerService"): ControllerService | undefined;
	FindFirstAncestorWhichIsA(className: "ControllerService"): ControllerService | undefined;
	FindFirstChildOfClass(className: "ControllerService"): ControllerService | undefined;
	FindFirstAncestorWhichIsA(className: "ControllerService"): ControllerService | undefined;
}

// CookiesService
interface Rbx_CookiesService extends Rbx_Instance {
}
type CookiesService = Rbx_CookiesService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "CookiesService"): this is CookiesService;
	FindFirstAncestorOfClass(className: "CookiesService"): CookiesService | undefined;
	FindFirstAncestorWhichIsA(className: "CookiesService"): CookiesService | undefined;
	FindFirstChildOfClass(className: "CookiesService"): CookiesService | undefined;
	FindFirstAncestorWhichIsA(className: "CookiesService"): CookiesService | undefined;
}

// CorePackages
interface Rbx_CorePackages extends Rbx_Instance {
}
type CorePackages = Rbx_CorePackages & AnyIndex;
interface Rbx_Instance {
	IsA(className: "CorePackages"): this is CorePackages;
	FindFirstAncestorOfClass(className: "CorePackages"): CorePackages | undefined;
	FindFirstAncestorWhichIsA(className: "CorePackages"): CorePackages | undefined;
	FindFirstChildOfClass(className: "CorePackages"): CorePackages | undefined;
	FindFirstAncestorWhichIsA(className: "CorePackages"): CorePackages | undefined;
}

// CustomEventReceiver
interface Rbx_CustomEventReceiver extends Rbx_Instance {
	Source: Instance | undefined;
	GetCurrentValue(): number;
	EventConnected: RBXScriptSignal<(event: Instance) => void>;
	EventDisconnected: RBXScriptSignal<(event: Instance) => void>;
	SourceValueChanged: RBXScriptSignal<(newValue: number) => void>;
}
interface CustomEventReceiver extends Rbx_CustomEventReceiver, AnyIndex { }
declare class CustomEventReceiver {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "CustomEventReceiver"): this is CustomEventReceiver;
	FindFirstAncestorOfClass(className: "CustomEventReceiver"): CustomEventReceiver | undefined;
	FindFirstAncestorWhichIsA(className: "CustomEventReceiver"): CustomEventReceiver | undefined;
	FindFirstChildOfClass(className: "CustomEventReceiver"): CustomEventReceiver | undefined;
	FindFirstAncestorWhichIsA(className: "CustomEventReceiver"): CustomEventReceiver | undefined;
}

// DataModelMesh
interface Rbx_DataModelMesh extends Rbx_Instance {
	Offset: Vector3;
	Scale: Vector3;
	VertexColor: Vector3;
}
interface DataModelMesh extends Rbx_DataModelMesh, AnyIndex { }
declare class DataModelMesh {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "DataModelMesh"): this is DataModelMesh;
	FindFirstAncestorOfClass(className: "DataModelMesh"): DataModelMesh | undefined;
	FindFirstAncestorWhichIsA(className: "DataModelMesh"): DataModelMesh | undefined;
	FindFirstChildOfClass(className: "DataModelMesh"): DataModelMesh | undefined;
	FindFirstAncestorWhichIsA(className: "DataModelMesh"): DataModelMesh | undefined;
}

// BevelMesh
interface Rbx_BevelMesh extends Rbx_DataModelMesh {
}
interface BevelMesh extends Rbx_BevelMesh, AnyIndex { }
declare class BevelMesh {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BevelMesh"): this is BevelMesh;
	FindFirstAncestorOfClass(className: "BevelMesh"): BevelMesh | undefined;
	FindFirstAncestorWhichIsA(className: "BevelMesh"): BevelMesh | undefined;
	FindFirstChildOfClass(className: "BevelMesh"): BevelMesh | undefined;
	FindFirstAncestorWhichIsA(className: "BevelMesh"): BevelMesh | undefined;
}

// BlockMesh
interface Rbx_BlockMesh extends Rbx_BevelMesh {
}
interface BlockMesh extends Rbx_BlockMesh, AnyIndex { }
declare class BlockMesh {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BlockMesh"): this is BlockMesh;
	FindFirstAncestorOfClass(className: "BlockMesh"): BlockMesh | undefined;
	FindFirstAncestorWhichIsA(className: "BlockMesh"): BlockMesh | undefined;
	FindFirstChildOfClass(className: "BlockMesh"): BlockMesh | undefined;
	FindFirstAncestorWhichIsA(className: "BlockMesh"): BlockMesh | undefined;
}

// CylinderMesh
interface Rbx_CylinderMesh extends Rbx_BevelMesh {
}
interface CylinderMesh extends Rbx_CylinderMesh, AnyIndex { }
declare class CylinderMesh {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "CylinderMesh"): this is CylinderMesh;
	FindFirstAncestorOfClass(className: "CylinderMesh"): CylinderMesh | undefined;
	FindFirstAncestorWhichIsA(className: "CylinderMesh"): CylinderMesh | undefined;
	FindFirstChildOfClass(className: "CylinderMesh"): CylinderMesh | undefined;
	FindFirstAncestorWhichIsA(className: "CylinderMesh"): CylinderMesh | undefined;
}

// FileMesh
interface Rbx_FileMesh extends Rbx_DataModelMesh {
	MeshId: string;
	TextureId: string;
}
interface FileMesh extends Rbx_FileMesh, AnyIndex { }
declare class FileMesh {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "FileMesh"): this is FileMesh;
	FindFirstAncestorOfClass(className: "FileMesh"): FileMesh | undefined;
	FindFirstAncestorWhichIsA(className: "FileMesh"): FileMesh | undefined;
	FindFirstChildOfClass(className: "FileMesh"): FileMesh | undefined;
	FindFirstAncestorWhichIsA(className: "FileMesh"): FileMesh | undefined;
}

// SpecialMesh
interface Rbx_SpecialMesh extends Rbx_FileMesh {
	MeshType: Enum.MeshType;
}
interface SpecialMesh extends Rbx_SpecialMesh, AnyIndex { }
declare class SpecialMesh {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SpecialMesh"): this is SpecialMesh;
	FindFirstAncestorOfClass(className: "SpecialMesh"): SpecialMesh | undefined;
	FindFirstAncestorWhichIsA(className: "SpecialMesh"): SpecialMesh | undefined;
	FindFirstChildOfClass(className: "SpecialMesh"): SpecialMesh | undefined;
	FindFirstAncestorWhichIsA(className: "SpecialMesh"): SpecialMesh | undefined;
}

// DataStoreService
interface Rbx_DataStoreService extends Rbx_Instance {
	GetDataStore(name: string, scope?: string): Instance | undefined;
	GetGlobalDataStore(): Instance | undefined;
	GetOrderedDataStore(name: string, scope?: string): Instance | undefined;
	GetRequestBudgetForRequestType(requestType: Enum.DataStoreRequestType): number;
}
type DataStoreService = Rbx_DataStoreService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "DataStoreService"): this is DataStoreService;
	FindFirstAncestorOfClass(className: "DataStoreService"): DataStoreService | undefined;
	FindFirstAncestorWhichIsA(className: "DataStoreService"): DataStoreService | undefined;
	FindFirstChildOfClass(className: "DataStoreService"): DataStoreService | undefined;
	FindFirstAncestorWhichIsA(className: "DataStoreService"): DataStoreService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "DataStoreService"): DataStoreService;
}

// Debris
interface Rbx_Debris extends Rbx_Instance {
	AddItem(item: Instance, lifetime?: number): void;
}
type Debris = Rbx_Debris & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Debris"): this is Debris;
	FindFirstAncestorOfClass(className: "Debris"): Debris | undefined;
	FindFirstAncestorWhichIsA(className: "Debris"): Debris | undefined;
	FindFirstChildOfClass(className: "Debris"): Debris | undefined;
	FindFirstAncestorWhichIsA(className: "Debris"): Debris | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "Debris"): Debris;
}

// DebugSettings
interface Rbx_DebugSettings extends Rbx_Instance {
	readonly DataModel: number;
	ErrorReporting: Enum.ErrorReporting;
	readonly GfxCard: string;
	readonly InstanceCount: number;
	IsFmodProfilingEnabled: boolean;
	IsScriptStackTracingEnabled: boolean;
	readonly JobCount: number;
	LuaRamLimit: number;
	readonly OsIs64Bit: boolean;
	readonly OsPlatform: string;
	readonly OsPlatformId: number;
	readonly OsVer: string;
	readonly PlayerCount: number;
	ReportSoundWarnings: boolean;
	readonly RobloxProductName: string;
	readonly RobloxVersion: string;
	readonly SIMD: string;
	readonly SystemProductName: string;
	TickCountPreciseOverride: Enum.TickCountSampleMethod;
	readonly VideoMemory: number;
}
type DebugSettings = Rbx_DebugSettings & AnyIndex;
interface Rbx_Instance {
	IsA(className: "DebugSettings"): this is DebugSettings;
	FindFirstAncestorOfClass(className: "DebugSettings"): DebugSettings | undefined;
	FindFirstAncestorWhichIsA(className: "DebugSettings"): DebugSettings | undefined;
	FindFirstChildOfClass(className: "DebugSettings"): DebugSettings | undefined;
	FindFirstAncestorWhichIsA(className: "DebugSettings"): DebugSettings | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "DebugSettings"): DebugSettings;
}

// DebuggerBreakpoint
interface Rbx_DebuggerBreakpoint extends Rbx_Instance {
	Condition: string;
	IsEnabled: boolean;
	readonly Line: number;
}
interface DebuggerBreakpoint extends Rbx_DebuggerBreakpoint, AnyIndex { }
declare class DebuggerBreakpoint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "DebuggerBreakpoint"): this is DebuggerBreakpoint;
	FindFirstAncestorOfClass(className: "DebuggerBreakpoint"): DebuggerBreakpoint | undefined;
	FindFirstAncestorWhichIsA(className: "DebuggerBreakpoint"): DebuggerBreakpoint | undefined;
	FindFirstChildOfClass(className: "DebuggerBreakpoint"): DebuggerBreakpoint | undefined;
	FindFirstAncestorWhichIsA(className: "DebuggerBreakpoint"): DebuggerBreakpoint | undefined;
}

// DebuggerManager
interface Rbx_DebuggerManager extends Rbx_Instance {
	readonly DebuggingEnabled: boolean;
	AddDebugger(script: Instance): Instance | undefined;
	GetDebuggers(): Array<Instance>;
	Resume(): void;
	StepIn(): void;
	StepOut(): void;
	StepOver(): void;
	DebuggerAdded: RBXScriptSignal<(debug: Instance) => void>;
	DebuggerRemoved: RBXScriptSignal<(debug: Instance) => void>;
}
interface DebuggerManager extends Rbx_DebuggerManager, AnyIndex { }
declare class DebuggerManager {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "DebuggerManager"): this is DebuggerManager;
	FindFirstAncestorOfClass(className: "DebuggerManager"): DebuggerManager | undefined;
	FindFirstAncestorWhichIsA(className: "DebuggerManager"): DebuggerManager | undefined;
	FindFirstChildOfClass(className: "DebuggerManager"): DebuggerManager | undefined;
	FindFirstAncestorWhichIsA(className: "DebuggerManager"): DebuggerManager | undefined;
}

// DebuggerWatch
interface Rbx_DebuggerWatch extends Rbx_Instance {
	Expression: string;
	CheckSyntax(): void;
}
interface DebuggerWatch extends Rbx_DebuggerWatch, AnyIndex { }
declare class DebuggerWatch {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "DebuggerWatch"): this is DebuggerWatch;
	FindFirstAncestorOfClass(className: "DebuggerWatch"): DebuggerWatch | undefined;
	FindFirstAncestorWhichIsA(className: "DebuggerWatch"): DebuggerWatch | undefined;
	FindFirstChildOfClass(className: "DebuggerWatch"): DebuggerWatch | undefined;
	FindFirstAncestorWhichIsA(className: "DebuggerWatch"): DebuggerWatch | undefined;
}

// Dialog
interface Rbx_Dialog extends Rbx_Instance {
	BehaviorType: Enum.DialogBehaviorType;
	ConversationDistance: number;
	GoodbyeChoiceActive: boolean;
	GoodbyeDialog: string;
	InUse: boolean;
	InitialPrompt: string;
	Purpose: Enum.DialogPurpose;
	Tone: Enum.DialogTone;
	TriggerDistance: number;
	TriggerOffset: Vector3;
	GetCurrentPlayers(): Array<Instance>;
	DialogChoiceSelected: RBXScriptSignal<(player: Instance, dialogChoice: Instance) => void>;
}
interface Dialog extends Rbx_Dialog, AnyIndex { }
declare class Dialog {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Dialog"): this is Dialog;
	FindFirstAncestorOfClass(className: "Dialog"): Dialog | undefined;
	FindFirstAncestorWhichIsA(className: "Dialog"): Dialog | undefined;
	FindFirstChildOfClass(className: "Dialog"): Dialog | undefined;
	FindFirstAncestorWhichIsA(className: "Dialog"): Dialog | undefined;
}

// DialogChoice
interface Rbx_DialogChoice extends Rbx_Instance {
	GoodbyeChoiceActive: boolean;
	GoodbyeDialog: string;
	ResponseDialog: string;
	UserDialog: string;
}
interface DialogChoice extends Rbx_DialogChoice, AnyIndex { }
declare class DialogChoice {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "DialogChoice"): this is DialogChoice;
	FindFirstAncestorOfClass(className: "DialogChoice"): DialogChoice | undefined;
	FindFirstAncestorWhichIsA(className: "DialogChoice"): DialogChoice | undefined;
	FindFirstChildOfClass(className: "DialogChoice"): DialogChoice | undefined;
	FindFirstAncestorWhichIsA(className: "DialogChoice"): DialogChoice | undefined;
}

// Dragger
interface Rbx_Dragger extends Rbx_Instance {
	AxisRotate(axis?: Enum.Axis): void;
	MouseDown(mousePart: Instance, pointOnMousePart: Vector3, parts: Array<Instance>): void;
	MouseMove(mouseRay: Ray): void;
	MouseUp(): void;
}
interface Dragger extends Rbx_Dragger, AnyIndex { }
declare class Dragger {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Dragger"): this is Dragger;
	FindFirstAncestorOfClass(className: "Dragger"): Dragger | undefined;
	FindFirstAncestorWhichIsA(className: "Dragger"): Dragger | undefined;
	FindFirstChildOfClass(className: "Dragger"): Dragger | undefined;
	FindFirstAncestorWhichIsA(className: "Dragger"): Dragger | undefined;
}

// Explosion
interface Rbx_Explosion extends Rbx_Instance {
	BlastPressure: number;
	BlastRadius: number;
	DestroyJointRadiusPercent: number;
	ExplosionType: Enum.ExplosionType;
	Position: Vector3;
	Visible: boolean;
	Hit: RBXScriptSignal<(part: Instance, distance: number) => void>;
}
interface Explosion extends Rbx_Explosion, AnyIndex { }
declare class Explosion {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Explosion"): this is Explosion;
	FindFirstAncestorOfClass(className: "Explosion"): Explosion | undefined;
	FindFirstAncestorWhichIsA(className: "Explosion"): Explosion | undefined;
	FindFirstChildOfClass(className: "Explosion"): Explosion | undefined;
	FindFirstAncestorWhichIsA(className: "Explosion"): Explosion | undefined;
}

// FaceInstance
interface Rbx_FaceInstance extends Rbx_Instance {
	Face: Enum.NormalId;
}
interface FaceInstance extends Rbx_FaceInstance, AnyIndex { }
declare class FaceInstance {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "FaceInstance"): this is FaceInstance;
	FindFirstAncestorOfClass(className: "FaceInstance"): FaceInstance | undefined;
	FindFirstAncestorWhichIsA(className: "FaceInstance"): FaceInstance | undefined;
	FindFirstChildOfClass(className: "FaceInstance"): FaceInstance | undefined;
	FindFirstAncestorWhichIsA(className: "FaceInstance"): FaceInstance | undefined;
}

// Decal
interface Rbx_Decal extends Rbx_FaceInstance {
	Color3: Color3;
	LocalTransparencyModifier: number;
	Texture: string;
	Transparency: number;
}
interface Decal extends Rbx_Decal, AnyIndex { }
declare class Decal {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Decal"): this is Decal;
	FindFirstAncestorOfClass(className: "Decal"): Decal | undefined;
	FindFirstAncestorWhichIsA(className: "Decal"): Decal | undefined;
	FindFirstChildOfClass(className: "Decal"): Decal | undefined;
	FindFirstAncestorWhichIsA(className: "Decal"): Decal | undefined;
}

// Texture
interface Rbx_Texture extends Rbx_Decal {
	StudsPerTileU: number;
	StudsPerTileV: number;
}
interface Texture extends Rbx_Texture, AnyIndex { }
declare class Texture {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Texture"): this is Texture;
	FindFirstAncestorOfClass(className: "Texture"): Texture | undefined;
	FindFirstAncestorWhichIsA(className: "Texture"): Texture | undefined;
	FindFirstChildOfClass(className: "Texture"): Texture | undefined;
	FindFirstAncestorWhichIsA(className: "Texture"): Texture | undefined;
}

// Feature
interface Rbx_Feature extends Rbx_Instance {
	FaceId: Enum.NormalId;
	InOut: Enum.InOut;
	LeftRight: Enum.LeftRight;
	TopBottom: Enum.TopBottom;
}
interface Feature extends Rbx_Feature, AnyIndex { }
declare class Feature {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Feature"): this is Feature;
	FindFirstAncestorOfClass(className: "Feature"): Feature | undefined;
	FindFirstAncestorWhichIsA(className: "Feature"): Feature | undefined;
	FindFirstChildOfClass(className: "Feature"): Feature | undefined;
	FindFirstAncestorWhichIsA(className: "Feature"): Feature | undefined;
}

// Hole
interface Rbx_Hole extends Rbx_Feature {
}
interface Hole extends Rbx_Hole, AnyIndex { }
declare class Hole {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Hole"): this is Hole;
	FindFirstAncestorOfClass(className: "Hole"): Hole | undefined;
	FindFirstAncestorWhichIsA(className: "Hole"): Hole | undefined;
	FindFirstChildOfClass(className: "Hole"): Hole | undefined;
	FindFirstAncestorWhichIsA(className: "Hole"): Hole | undefined;
}

// MotorFeature
interface Rbx_MotorFeature extends Rbx_Feature {
}
interface MotorFeature extends Rbx_MotorFeature, AnyIndex { }
declare class MotorFeature {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "MotorFeature"): this is MotorFeature;
	FindFirstAncestorOfClass(className: "MotorFeature"): MotorFeature | undefined;
	FindFirstAncestorWhichIsA(className: "MotorFeature"): MotorFeature | undefined;
	FindFirstChildOfClass(className: "MotorFeature"): MotorFeature | undefined;
	FindFirstAncestorWhichIsA(className: "MotorFeature"): MotorFeature | undefined;
}

// Fire
interface Rbx_Fire extends Rbx_Instance {
	Color: Color3;
	Enabled: boolean;
	Heat: number;
	SecondaryColor: Color3;
	Size: number;
}
interface Fire extends Rbx_Fire, AnyIndex { }
declare class Fire {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Fire"): this is Fire;
	FindFirstAncestorOfClass(className: "Fire"): Fire | undefined;
	FindFirstAncestorWhichIsA(className: "Fire"): Fire | undefined;
	FindFirstChildOfClass(className: "Fire"): Fire | undefined;
	FindFirstAncestorWhichIsA(className: "Fire"): Fire | undefined;
}

// FlagStandService
interface Rbx_FlagStandService extends Rbx_Instance {
}
type FlagStandService = Rbx_FlagStandService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "FlagStandService"): this is FlagStandService;
	FindFirstAncestorOfClass(className: "FlagStandService"): FlagStandService | undefined;
	FindFirstAncestorWhichIsA(className: "FlagStandService"): FlagStandService | undefined;
	FindFirstChildOfClass(className: "FlagStandService"): FlagStandService | undefined;
	FindFirstAncestorWhichIsA(className: "FlagStandService"): FlagStandService | undefined;
}

// FlyweightService
interface Rbx_FlyweightService extends Rbx_Instance {
}
type FlyweightService = Rbx_FlyweightService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "FlyweightService"): this is FlyweightService;
	FindFirstAncestorOfClass(className: "FlyweightService"): FlyweightService | undefined;
	FindFirstAncestorWhichIsA(className: "FlyweightService"): FlyweightService | undefined;
	FindFirstChildOfClass(className: "FlyweightService"): FlyweightService | undefined;
	FindFirstAncestorWhichIsA(className: "FlyweightService"): FlyweightService | undefined;
}

// CSGDictionaryService
interface Rbx_CSGDictionaryService extends Rbx_FlyweightService {
}
type CSGDictionaryService = Rbx_CSGDictionaryService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "CSGDictionaryService"): this is CSGDictionaryService;
	FindFirstAncestorOfClass(className: "CSGDictionaryService"): CSGDictionaryService | undefined;
	FindFirstAncestorWhichIsA(className: "CSGDictionaryService"): CSGDictionaryService | undefined;
	FindFirstChildOfClass(className: "CSGDictionaryService"): CSGDictionaryService | undefined;
	FindFirstAncestorWhichIsA(className: "CSGDictionaryService"): CSGDictionaryService | undefined;
}

// NonReplicatedCSGDictionaryService
interface Rbx_NonReplicatedCSGDictionaryService extends Rbx_FlyweightService {
}
type NonReplicatedCSGDictionaryService = Rbx_NonReplicatedCSGDictionaryService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "NonReplicatedCSGDictionaryService"): this is NonReplicatedCSGDictionaryService;
	FindFirstAncestorOfClass(className: "NonReplicatedCSGDictionaryService"): NonReplicatedCSGDictionaryService | undefined;
	FindFirstAncestorWhichIsA(className: "NonReplicatedCSGDictionaryService"): NonReplicatedCSGDictionaryService | undefined;
	FindFirstChildOfClass(className: "NonReplicatedCSGDictionaryService"): NonReplicatedCSGDictionaryService | undefined;
	FindFirstAncestorWhichIsA(className: "NonReplicatedCSGDictionaryService"): NonReplicatedCSGDictionaryService | undefined;
}

// Folder
interface Rbx_Folder extends Rbx_Instance {
}
interface Folder extends Rbx_Folder, AnyIndex { }
declare class Folder {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Folder"): this is Folder;
	FindFirstAncestorOfClass(className: "Folder"): Folder | undefined;
	FindFirstAncestorWhichIsA(className: "Folder"): Folder | undefined;
	FindFirstChildOfClass(className: "Folder"): Folder | undefined;
	FindFirstAncestorWhichIsA(className: "Folder"): Folder | undefined;
}

// ForceField
interface Rbx_ForceField extends Rbx_Instance {
	Visible: boolean;
}
interface ForceField extends Rbx_ForceField, AnyIndex { }
declare class ForceField {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ForceField"): this is ForceField;
	FindFirstAncestorOfClass(className: "ForceField"): ForceField | undefined;
	FindFirstAncestorWhichIsA(className: "ForceField"): ForceField | undefined;
	FindFirstChildOfClass(className: "ForceField"): ForceField | undefined;
	FindFirstAncestorWhichIsA(className: "ForceField"): ForceField | undefined;
}

// FriendService
interface Rbx_FriendService extends Rbx_Instance {
}
type FriendService = Rbx_FriendService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "FriendService"): this is FriendService;
	FindFirstAncestorOfClass(className: "FriendService"): FriendService | undefined;
	FindFirstAncestorWhichIsA(className: "FriendService"): FriendService | undefined;
	FindFirstChildOfClass(className: "FriendService"): FriendService | undefined;
	FindFirstAncestorWhichIsA(className: "FriendService"): FriendService | undefined;
}

// FunctionalTest
interface Rbx_FunctionalTest extends Rbx_Instance {
	Description: string;
	Error(message?: string): void;
	Failed(message?: string): void;
	Pass(message?: string): void;
	Passed(message?: string): void;
	Warn(message?: string): void;
}
interface FunctionalTest extends Rbx_FunctionalTest, AnyIndex { }
declare class FunctionalTest {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "FunctionalTest"): this is FunctionalTest;
	FindFirstAncestorOfClass(className: "FunctionalTest"): FunctionalTest | undefined;
	FindFirstAncestorWhichIsA(className: "FunctionalTest"): FunctionalTest | undefined;
	FindFirstChildOfClass(className: "FunctionalTest"): FunctionalTest | undefined;
	FindFirstAncestorWhichIsA(className: "FunctionalTest"): FunctionalTest | undefined;
}

// GamePassService
interface Rbx_GamePassService extends Rbx_Instance {
	PlayerHasPass(player: Instance, gamePassId: number): boolean;
}
type GamePassService = Rbx_GamePassService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "GamePassService"): this is GamePassService;
	FindFirstAncestorOfClass(className: "GamePassService"): GamePassService | undefined;
	FindFirstAncestorWhichIsA(className: "GamePassService"): GamePassService | undefined;
	FindFirstChildOfClass(className: "GamePassService"): GamePassService | undefined;
	FindFirstAncestorWhichIsA(className: "GamePassService"): GamePassService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "GamePassService"): GamePassService;
}

// GameSettings
interface Rbx_GameSettings extends Rbx_Instance {
	AdditionalCoreIncludeDirs: string;
	BubbleChatLifetime: number;
	BubbleChatMaxBubbles: number;
	ChatHistory: number;
	ChatScrollLength: number;
	HardwareMouse: boolean;
	OverrideStarterScript: string;
	ReportAbuseChatHistory: number;
	SoftwareSound: boolean;
	VideoCaptureEnabled: boolean;
	VideoQuality: Enum.VideoQualitySettings;
}
type GameSettings = Rbx_GameSettings & AnyIndex;
interface Rbx_Instance {
	IsA(className: "GameSettings"): this is GameSettings;
	FindFirstAncestorOfClass(className: "GameSettings"): GameSettings | undefined;
	FindFirstAncestorWhichIsA(className: "GameSettings"): GameSettings | undefined;
	FindFirstChildOfClass(className: "GameSettings"): GameSettings | undefined;
	FindFirstAncestorWhichIsA(className: "GameSettings"): GameSettings | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "GameSettings"): GameSettings;
}

// GamepadService
interface Rbx_GamepadService extends Rbx_Instance {
}
type GamepadService = Rbx_GamepadService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "GamepadService"): this is GamepadService;
	FindFirstAncestorOfClass(className: "GamepadService"): GamepadService | undefined;
	FindFirstAncestorWhichIsA(className: "GamepadService"): GamepadService | undefined;
	FindFirstChildOfClass(className: "GamepadService"): GamepadService | undefined;
	FindFirstAncestorWhichIsA(className: "GamepadService"): GamepadService | undefined;
}

// Geometry
interface Rbx_Geometry extends Rbx_Instance {
}
type Geometry = Rbx_Geometry & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Geometry"): this is Geometry;
	FindFirstAncestorOfClass(className: "Geometry"): Geometry | undefined;
	FindFirstAncestorWhichIsA(className: "Geometry"): Geometry | undefined;
	FindFirstChildOfClass(className: "Geometry"): Geometry | undefined;
	FindFirstAncestorWhichIsA(className: "Geometry"): Geometry | undefined;
}

// GlobalDataStore
interface Rbx_GlobalDataStore extends Rbx_Instance {
	OnUpdate(key: string, callback: Callback): RBXScriptConnection;
	GetAsync(key: string): any;
	IncrementAsync(key: string, delta?: number): any;
	RemoveAsync(key: string): any;
	SetAsync(key: string, value?: any): void;
	/** !TupleReturn */
	UpdateAsync(key: string, transformFunction: Callback): Array<any>;
}
interface GlobalDataStore extends Rbx_GlobalDataStore, AnyIndex { }
declare class GlobalDataStore {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GlobalDataStore"): this is GlobalDataStore;
	FindFirstAncestorOfClass(className: "GlobalDataStore"): GlobalDataStore | undefined;
	FindFirstAncestorWhichIsA(className: "GlobalDataStore"): GlobalDataStore | undefined;
	FindFirstChildOfClass(className: "GlobalDataStore"): GlobalDataStore | undefined;
	FindFirstAncestorWhichIsA(className: "GlobalDataStore"): GlobalDataStore | undefined;
}

// OrderedDataStore
interface Rbx_OrderedDataStore extends Rbx_GlobalDataStore {
	GetSortedAsync(ascending: boolean, pagesize: number, minValue?: any, maxValue?: any): Instance | undefined;
}
interface OrderedDataStore extends Rbx_OrderedDataStore, AnyIndex { }
declare class OrderedDataStore {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "OrderedDataStore"): this is OrderedDataStore;
	FindFirstAncestorOfClass(className: "OrderedDataStore"): OrderedDataStore | undefined;
	FindFirstAncestorWhichIsA(className: "OrderedDataStore"): OrderedDataStore | undefined;
	FindFirstChildOfClass(className: "OrderedDataStore"): OrderedDataStore | undefined;
	FindFirstAncestorWhichIsA(className: "OrderedDataStore"): OrderedDataStore | undefined;
}

// GoogleAnalyticsConfiguration
interface Rbx_GoogleAnalyticsConfiguration extends Rbx_Instance {
}
type GoogleAnalyticsConfiguration = Rbx_GoogleAnalyticsConfiguration & AnyIndex;
interface Rbx_Instance {
	IsA(className: "GoogleAnalyticsConfiguration"): this is GoogleAnalyticsConfiguration;
	FindFirstAncestorOfClass(className: "GoogleAnalyticsConfiguration"): GoogleAnalyticsConfiguration | undefined;
	FindFirstAncestorWhichIsA(className: "GoogleAnalyticsConfiguration"): GoogleAnalyticsConfiguration | undefined;
	FindFirstChildOfClass(className: "GoogleAnalyticsConfiguration"): GoogleAnalyticsConfiguration | undefined;
	FindFirstAncestorWhichIsA(className: "GoogleAnalyticsConfiguration"): GoogleAnalyticsConfiguration | undefined;
}

// GroupService
interface Rbx_GroupService extends Rbx_Instance {
	GetAlliesAsync(groupId: number): Instance | undefined;
	GetEnemiesAsync(groupId: number): Instance | undefined;
	GetGroupInfoAsync(groupId: number): any;
	GetGroupsAsync(userId: number): Array<any>;
}
type GroupService = Rbx_GroupService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "GroupService"): this is GroupService;
	FindFirstAncestorOfClass(className: "GroupService"): GroupService | undefined;
	FindFirstAncestorWhichIsA(className: "GroupService"): GroupService | undefined;
	FindFirstChildOfClass(className: "GroupService"): GroupService | undefined;
	FindFirstAncestorWhichIsA(className: "GroupService"): GroupService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "GroupService"): GroupService;
}

// GuiBase
interface Rbx_GuiBase extends Rbx_Instance {
}
interface GuiBase extends Rbx_GuiBase, AnyIndex { }
declare class GuiBase {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GuiBase"): this is GuiBase;
	FindFirstAncestorOfClass(className: "GuiBase"): GuiBase | undefined;
	FindFirstAncestorWhichIsA(className: "GuiBase"): GuiBase | undefined;
	FindFirstChildOfClass(className: "GuiBase"): GuiBase | undefined;
	FindFirstAncestorWhichIsA(className: "GuiBase"): GuiBase | undefined;
}

// GuiBase2d
interface Rbx_GuiBase2d extends Rbx_GuiBase {
	readonly AbsolutePosition: Vector2;
	readonly AbsoluteRotation: number;
	readonly AbsoluteSize: Vector2;
	AutoLocalize: boolean;
	RootLocalizationTable: Instance | undefined;
}
interface GuiBase2d extends Rbx_GuiBase2d, AnyIndex { }
declare class GuiBase2d {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GuiBase2d"): this is GuiBase2d;
	FindFirstAncestorOfClass(className: "GuiBase2d"): GuiBase2d | undefined;
	FindFirstAncestorWhichIsA(className: "GuiBase2d"): GuiBase2d | undefined;
	FindFirstChildOfClass(className: "GuiBase2d"): GuiBase2d | undefined;
	FindFirstAncestorWhichIsA(className: "GuiBase2d"): GuiBase2d | undefined;
}

// GuiObject
interface Rbx_GuiObject extends Rbx_GuiBase2d {
	Active: boolean;
	AnchorPoint: Vector2;
	BackgroundColor3: Color3;
	BackgroundTransparency: number;
	BorderColor3: Color3;
	BorderSizePixel: number;
	ClipsDescendants: boolean;
	LayoutOrder: number;
	NextSelectionDown: Instance | undefined;
	NextSelectionLeft: Instance | undefined;
	NextSelectionRight: Instance | undefined;
	NextSelectionUp: Instance | undefined;
	Position: UDim2;
	Rotation: number;
	Selectable: boolean;
	SelectionImageObject: Instance | undefined;
	Size: UDim2;
	SizeConstraint: Enum.SizeConstraint;
	Transparency: number;
	Visible: boolean;
	ZIndex: number;
	TweenPosition(endPosition: UDim2, easingDirection?: Enum.EasingDirection, easingStyle?: Enum.EasingStyle, time?: number, override?: boolean, callback?: Callback): boolean;
	TweenSize(endSize: UDim2, easingDirection?: Enum.EasingDirection, easingStyle?: Enum.EasingStyle, time?: number, override?: boolean, callback?: Callback): boolean;
	TweenSizeAndPosition(endSize: UDim2, endPosition: UDim2, easingDirection?: Enum.EasingDirection, easingStyle?: Enum.EasingStyle, time?: number, override?: boolean, callback?: Callback): boolean;
	InputBegan: RBXScriptSignal<(input: Instance) => void>;
	InputChanged: RBXScriptSignal<(input: Instance) => void>;
	InputEnded: RBXScriptSignal<(input: Instance) => void>;
	MouseEnter: RBXScriptSignal<(x: number, y: number) => void>;
	MouseLeave: RBXScriptSignal<(x: number, y: number) => void>;
	MouseMoved: RBXScriptSignal<(x: number, y: number) => void>;
	MouseWheelBackward: RBXScriptSignal<(x: number, y: number) => void>;
	MouseWheelForward: RBXScriptSignal<(x: number, y: number) => void>;
	SelectionGained: RBXScriptSignal<() => void>;
	SelectionLost: RBXScriptSignal<() => void>;
	TouchLongPress: RBXScriptSignal<(touchPositions: Array<any>, state: Enum.UserInputState) => void>;
	TouchPan: RBXScriptSignal<(touchPositions: Array<any>, totalTranslation: Vector2, velocity: Vector2, state: Enum.UserInputState) => void>;
	TouchPinch: RBXScriptSignal<(touchPositions: Array<any>, scale: number, velocity: number, state: Enum.UserInputState) => void>;
	TouchRotate: RBXScriptSignal<(touchPositions: Array<any>, rotation: number, velocity: number, state: Enum.UserInputState) => void>;
	TouchSwipe: RBXScriptSignal<(swipeDirection: Enum.SwipeDirection, numberOfTouches: number) => void>;
	TouchTap: RBXScriptSignal<(touchPositions: Array<any>) => void>;
}
interface GuiObject extends Rbx_GuiObject, AnyIndex { }
declare class GuiObject {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GuiObject"): this is GuiObject;
	FindFirstAncestorOfClass(className: "GuiObject"): GuiObject | undefined;
	FindFirstAncestorWhichIsA(className: "GuiObject"): GuiObject | undefined;
	FindFirstChildOfClass(className: "GuiObject"): GuiObject | undefined;
	FindFirstAncestorWhichIsA(className: "GuiObject"): GuiObject | undefined;
}

// Frame
interface Rbx_Frame extends Rbx_GuiObject {
	Style: Enum.FrameStyle;
}
interface Frame extends Rbx_Frame, AnyIndex { }
declare class Frame {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Frame"): this is Frame;
	FindFirstAncestorOfClass(className: "Frame"): Frame | undefined;
	FindFirstAncestorWhichIsA(className: "Frame"): Frame | undefined;
	FindFirstChildOfClass(className: "Frame"): Frame | undefined;
	FindFirstAncestorWhichIsA(className: "Frame"): Frame | undefined;
}

// GuiButton
interface Rbx_GuiButton extends Rbx_GuiObject {
	AutoButtonColor: boolean;
	Modal: boolean;
	Selected: boolean;
	Style: Enum.ButtonStyle;
	Activated: RBXScriptSignal<(inputObject: Instance) => void>;
	MouseButton1Click: RBXScriptSignal<() => void>;
	MouseButton1Down: RBXScriptSignal<(x: number, y: number) => void>;
	MouseButton1Up: RBXScriptSignal<(x: number, y: number) => void>;
	MouseButton2Click: RBXScriptSignal<() => void>;
	MouseButton2Down: RBXScriptSignal<(x: number, y: number) => void>;
	MouseButton2Up: RBXScriptSignal<(x: number, y: number) => void>;
}
interface GuiButton extends Rbx_GuiButton, AnyIndex { }
declare class GuiButton {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GuiButton"): this is GuiButton;
	FindFirstAncestorOfClass(className: "GuiButton"): GuiButton | undefined;
	FindFirstAncestorWhichIsA(className: "GuiButton"): GuiButton | undefined;
	FindFirstChildOfClass(className: "GuiButton"): GuiButton | undefined;
	FindFirstAncestorWhichIsA(className: "GuiButton"): GuiButton | undefined;
}

// ImageButton
interface Rbx_ImageButton extends Rbx_GuiButton {
	Image: string;
	ImageColor3: Color3;
	ImageRectOffset: Vector2;
	ImageRectSize: Vector2;
	ImageTransparency: number;
	readonly IsLoaded: boolean;
	ScaleType: Enum.ScaleType;
	SliceCenter: Rect;
	TileSize: UDim2;
}
interface ImageButton extends Rbx_ImageButton, AnyIndex { }
declare class ImageButton {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ImageButton"): this is ImageButton;
	FindFirstAncestorOfClass(className: "ImageButton"): ImageButton | undefined;
	FindFirstAncestorWhichIsA(className: "ImageButton"): ImageButton | undefined;
	FindFirstChildOfClass(className: "ImageButton"): ImageButton | undefined;
	FindFirstAncestorWhichIsA(className: "ImageButton"): ImageButton | undefined;
}

// TextButton
interface Rbx_TextButton extends Rbx_GuiButton {
	Font: Enum.Font;
	LineHeight: number;
	readonly LocalizedText: string;
	Text: string;
	readonly TextBounds: Vector2;
	TextColor3: Color3;
	readonly TextFits: boolean;
	TextScaled: boolean;
	TextSize: number;
	TextStrokeColor3: Color3;
	TextStrokeTransparency: number;
	TextTransparency: number;
	TextTruncate: Enum.TextTruncate;
	TextWrapped: boolean;
	TextXAlignment: Enum.TextXAlignment;
	TextYAlignment: Enum.TextYAlignment;
}
interface TextButton extends Rbx_TextButton, AnyIndex { }
declare class TextButton {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "TextButton"): this is TextButton;
	FindFirstAncestorOfClass(className: "TextButton"): TextButton | undefined;
	FindFirstAncestorWhichIsA(className: "TextButton"): TextButton | undefined;
	FindFirstChildOfClass(className: "TextButton"): TextButton | undefined;
	FindFirstAncestorWhichIsA(className: "TextButton"): TextButton | undefined;
}

// GuiLabel
interface Rbx_GuiLabel extends Rbx_GuiObject {
}
interface GuiLabel extends Rbx_GuiLabel, AnyIndex { }
declare class GuiLabel {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GuiLabel"): this is GuiLabel;
	FindFirstAncestorOfClass(className: "GuiLabel"): GuiLabel | undefined;
	FindFirstAncestorWhichIsA(className: "GuiLabel"): GuiLabel | undefined;
	FindFirstChildOfClass(className: "GuiLabel"): GuiLabel | undefined;
	FindFirstAncestorWhichIsA(className: "GuiLabel"): GuiLabel | undefined;
}

// ImageLabel
interface Rbx_ImageLabel extends Rbx_GuiLabel {
	Image: string;
	ImageColor3: Color3;
	ImageRectOffset: Vector2;
	ImageRectSize: Vector2;
	ImageTransparency: number;
	readonly IsLoaded: boolean;
	ScaleType: Enum.ScaleType;
	SliceCenter: Rect;
	TileSize: UDim2;
}
interface ImageLabel extends Rbx_ImageLabel, AnyIndex { }
declare class ImageLabel {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ImageLabel"): this is ImageLabel;
	FindFirstAncestorOfClass(className: "ImageLabel"): ImageLabel | undefined;
	FindFirstAncestorWhichIsA(className: "ImageLabel"): ImageLabel | undefined;
	FindFirstChildOfClass(className: "ImageLabel"): ImageLabel | undefined;
	FindFirstAncestorWhichIsA(className: "ImageLabel"): ImageLabel | undefined;
}

// TextLabel
interface Rbx_TextLabel extends Rbx_GuiLabel {
	Font: Enum.Font;
	LineHeight: number;
	readonly LocalizedText: string;
	Text: string;
	readonly TextBounds: Vector2;
	TextColor3: Color3;
	readonly TextFits: boolean;
	TextScaled: boolean;
	TextSize: number;
	TextStrokeColor3: Color3;
	TextStrokeTransparency: number;
	TextTransparency: number;
	TextTruncate: Enum.TextTruncate;
	TextWrapped: boolean;
	TextXAlignment: Enum.TextXAlignment;
	TextYAlignment: Enum.TextYAlignment;
}
interface TextLabel extends Rbx_TextLabel, AnyIndex { }
declare class TextLabel {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "TextLabel"): this is TextLabel;
	FindFirstAncestorOfClass(className: "TextLabel"): TextLabel | undefined;
	FindFirstAncestorWhichIsA(className: "TextLabel"): TextLabel | undefined;
	FindFirstChildOfClass(className: "TextLabel"): TextLabel | undefined;
	FindFirstAncestorWhichIsA(className: "TextLabel"): TextLabel | undefined;
}

// Scale9Frame
interface Rbx_Scale9Frame extends Rbx_GuiObject {
	ScaleEdgeSize: Vector2int16;
	SlicePrefix: string;
}
interface Scale9Frame extends Rbx_Scale9Frame, AnyIndex { }
declare class Scale9Frame {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Scale9Frame"): this is Scale9Frame;
	FindFirstAncestorOfClass(className: "Scale9Frame"): Scale9Frame | undefined;
	FindFirstAncestorWhichIsA(className: "Scale9Frame"): Scale9Frame | undefined;
	FindFirstChildOfClass(className: "Scale9Frame"): Scale9Frame | undefined;
	FindFirstAncestorWhichIsA(className: "Scale9Frame"): Scale9Frame | undefined;
}

// ScrollingFrame
interface Rbx_ScrollingFrame extends Rbx_GuiObject {
	readonly AbsoluteWindowSize: Vector2;
	BottomImage: string;
	CanvasPosition: Vector2;
	CanvasSize: UDim2;
	ElasticBehavior: Enum.ElasticBehavior;
	HorizontalScrollBarInset: Enum.ScrollBarInset;
	MidImage: string;
	ScrollBarThickness: number;
	ScrollingDirection: Enum.ScrollingDirection;
	ScrollingEnabled: boolean;
	TopImage: string;
	VerticalScrollBarInset: Enum.ScrollBarInset;
	VerticalScrollBarPosition: Enum.VerticalScrollBarPosition;
}
interface ScrollingFrame extends Rbx_ScrollingFrame, AnyIndex { }
declare class ScrollingFrame {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ScrollingFrame"): this is ScrollingFrame;
	FindFirstAncestorOfClass(className: "ScrollingFrame"): ScrollingFrame | undefined;
	FindFirstAncestorWhichIsA(className: "ScrollingFrame"): ScrollingFrame | undefined;
	FindFirstChildOfClass(className: "ScrollingFrame"): ScrollingFrame | undefined;
	FindFirstAncestorWhichIsA(className: "ScrollingFrame"): ScrollingFrame | undefined;
}

// TextBox
interface Rbx_TextBox extends Rbx_GuiObject {
	ClearTextOnFocus: boolean;
	Font: Enum.Font;
	LineHeight: number;
	MultiLine: boolean;
	PlaceholderColor3: Color3;
	PlaceholderText: string;
	ShowNativeInput: boolean;
	Text: string;
	readonly TextBounds: Vector2;
	TextColor3: Color3;
	readonly TextFits: boolean;
	TextScaled: boolean;
	TextSize: number;
	TextStrokeColor3: Color3;
	TextStrokeTransparency: number;
	TextTransparency: number;
	TextTruncate: Enum.TextTruncate;
	TextWrapped: boolean;
	TextXAlignment: Enum.TextXAlignment;
	TextYAlignment: Enum.TextYAlignment;
	CaptureFocus(): void;
	IsFocused(): boolean;
	ReleaseFocus(submitted?: boolean): void;
	FocusLost: RBXScriptSignal<(enterPressed: boolean, inputThatCausedFocusLoss: Instance) => void>;
	Focused: RBXScriptSignal<() => void>;
}
interface TextBox extends Rbx_TextBox, AnyIndex { }
declare class TextBox {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "TextBox"): this is TextBox;
	FindFirstAncestorOfClass(className: "TextBox"): TextBox | undefined;
	FindFirstAncestorWhichIsA(className: "TextBox"): TextBox | undefined;
	FindFirstChildOfClass(className: "TextBox"): TextBox | undefined;
	FindFirstAncestorWhichIsA(className: "TextBox"): TextBox | undefined;
}

// LayerCollector
interface Rbx_LayerCollector extends Rbx_GuiBase2d {
	Enabled: boolean;
	ResetOnSpawn: boolean;
	ZIndexBehavior: Enum.ZIndexBehavior;
}
interface LayerCollector extends Rbx_LayerCollector, AnyIndex { }
declare class LayerCollector {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "LayerCollector"): this is LayerCollector;
	FindFirstAncestorOfClass(className: "LayerCollector"): LayerCollector | undefined;
	FindFirstAncestorWhichIsA(className: "LayerCollector"): LayerCollector | undefined;
	FindFirstChildOfClass(className: "LayerCollector"): LayerCollector | undefined;
	FindFirstAncestorWhichIsA(className: "LayerCollector"): LayerCollector | undefined;
}

// BillboardGui
interface Rbx_BillboardGui extends Rbx_LayerCollector {
	Active: boolean;
	Adornee: Instance | undefined;
	AlwaysOnTop: boolean;
	ClipsDescendants: boolean;
	ExtentsOffset: Vector3;
	ExtentsOffsetWorldSpace: Vector3;
	LightInfluence: number;
	MaxDistance: number;
	PlayerToHideFrom: Instance | undefined;
	Size: UDim2;
	SizeOffset: Vector2;
	StudsOffset: Vector3;
	StudsOffsetWorldSpace: Vector3;
}
interface BillboardGui extends Rbx_BillboardGui, AnyIndex { }
declare class BillboardGui {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BillboardGui"): this is BillboardGui;
	FindFirstAncestorOfClass(className: "BillboardGui"): BillboardGui | undefined;
	FindFirstAncestorWhichIsA(className: "BillboardGui"): BillboardGui | undefined;
	FindFirstChildOfClass(className: "BillboardGui"): BillboardGui | undefined;
	FindFirstAncestorWhichIsA(className: "BillboardGui"): BillboardGui | undefined;
}

// PluginGui
interface Rbx_PluginGui extends Rbx_LayerCollector {
	readonly HostWidgetWasRestored: boolean;
	Title: string;
}
interface PluginGui extends Rbx_PluginGui, AnyIndex { }
declare class PluginGui {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PluginGui"): this is PluginGui;
	FindFirstAncestorOfClass(className: "PluginGui"): PluginGui | undefined;
	FindFirstAncestorWhichIsA(className: "PluginGui"): PluginGui | undefined;
	FindFirstChildOfClass(className: "PluginGui"): PluginGui | undefined;
	FindFirstAncestorWhichIsA(className: "PluginGui"): PluginGui | undefined;
}

// ScreenGui
interface Rbx_ScreenGui extends Rbx_LayerCollector {
	DisplayOrder: number;
}
interface ScreenGui extends Rbx_ScreenGui, AnyIndex { }
declare class ScreenGui {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ScreenGui"): this is ScreenGui;
	FindFirstAncestorOfClass(className: "ScreenGui"): ScreenGui | undefined;
	FindFirstAncestorWhichIsA(className: "ScreenGui"): ScreenGui | undefined;
	FindFirstChildOfClass(className: "ScreenGui"): ScreenGui | undefined;
	FindFirstAncestorWhichIsA(className: "ScreenGui"): ScreenGui | undefined;
}

// GuiMain
interface Rbx_GuiMain extends Rbx_ScreenGui {
}
interface GuiMain extends Rbx_GuiMain, AnyIndex { }
declare class GuiMain {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GuiMain"): this is GuiMain;
	FindFirstAncestorOfClass(className: "GuiMain"): GuiMain | undefined;
	FindFirstAncestorWhichIsA(className: "GuiMain"): GuiMain | undefined;
	FindFirstChildOfClass(className: "GuiMain"): GuiMain | undefined;
	FindFirstAncestorWhichIsA(className: "GuiMain"): GuiMain | undefined;
}

// SurfaceGui
interface Rbx_SurfaceGui extends Rbx_LayerCollector {
	Active: boolean;
	Adornee: Instance | undefined;
	AlwaysOnTop: boolean;
	CanvasSize: Vector2;
	ClipsDescendants: boolean;
	Face: Enum.NormalId;
	LightInfluence: number;
	ToolPunchThroughDistance: number;
	ZOffset: number;
}
interface SurfaceGui extends Rbx_SurfaceGui, AnyIndex { }
declare class SurfaceGui {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SurfaceGui"): this is SurfaceGui;
	FindFirstAncestorOfClass(className: "SurfaceGui"): SurfaceGui | undefined;
	FindFirstAncestorWhichIsA(className: "SurfaceGui"): SurfaceGui | undefined;
	FindFirstChildOfClass(className: "SurfaceGui"): SurfaceGui | undefined;
	FindFirstAncestorWhichIsA(className: "SurfaceGui"): SurfaceGui | undefined;
}

// GuiBase3d
interface Rbx_GuiBase3d extends Rbx_GuiBase {
	Color3: Color3;
	Transparency: number;
	Visible: boolean;
}
interface GuiBase3d extends Rbx_GuiBase3d, AnyIndex { }
declare class GuiBase3d {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GuiBase3d"): this is GuiBase3d;
	FindFirstAncestorOfClass(className: "GuiBase3d"): GuiBase3d | undefined;
	FindFirstAncestorWhichIsA(className: "GuiBase3d"): GuiBase3d | undefined;
	FindFirstChildOfClass(className: "GuiBase3d"): GuiBase3d | undefined;
	FindFirstAncestorWhichIsA(className: "GuiBase3d"): GuiBase3d | undefined;
}

// FloorWire
interface Rbx_FloorWire extends Rbx_GuiBase3d {
	CycleOffset: number;
	From: Instance | undefined;
	StudsBetweenTextures: number;
	Texture: string;
	TextureSize: Vector2;
	To: Instance | undefined;
	Velocity: number;
	WireRadius: number;
}
interface FloorWire extends Rbx_FloorWire, AnyIndex { }
declare class FloorWire {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "FloorWire"): this is FloorWire;
	FindFirstAncestorOfClass(className: "FloorWire"): FloorWire | undefined;
	FindFirstAncestorWhichIsA(className: "FloorWire"): FloorWire | undefined;
	FindFirstChildOfClass(className: "FloorWire"): FloorWire | undefined;
	FindFirstAncestorWhichIsA(className: "FloorWire"): FloorWire | undefined;
}

// PVAdornment
interface Rbx_PVAdornment extends Rbx_GuiBase3d {
	Adornee: Instance | undefined;
}
interface PVAdornment extends Rbx_PVAdornment, AnyIndex { }
declare class PVAdornment {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PVAdornment"): this is PVAdornment;
	FindFirstAncestorOfClass(className: "PVAdornment"): PVAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "PVAdornment"): PVAdornment | undefined;
	FindFirstChildOfClass(className: "PVAdornment"): PVAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "PVAdornment"): PVAdornment | undefined;
}

// HandleAdornment
interface Rbx_HandleAdornment extends Rbx_PVAdornment {
	AlwaysOnTop: boolean;
	CFrame: CFrame;
	SizeRelativeOffset: Vector3;
	ZIndex: number;
	MouseButton1Down: RBXScriptSignal<() => void>;
	MouseButton1Up: RBXScriptSignal<() => void>;
	MouseEnter: RBXScriptSignal<() => void>;
	MouseLeave: RBXScriptSignal<() => void>;
}
interface HandleAdornment extends Rbx_HandleAdornment, AnyIndex { }
declare class HandleAdornment {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "HandleAdornment"): this is HandleAdornment;
	FindFirstAncestorOfClass(className: "HandleAdornment"): HandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "HandleAdornment"): HandleAdornment | undefined;
	FindFirstChildOfClass(className: "HandleAdornment"): HandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "HandleAdornment"): HandleAdornment | undefined;
}

// BoxHandleAdornment
interface Rbx_BoxHandleAdornment extends Rbx_HandleAdornment {
	Size: Vector3;
}
interface BoxHandleAdornment extends Rbx_BoxHandleAdornment, AnyIndex { }
declare class BoxHandleAdornment {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BoxHandleAdornment"): this is BoxHandleAdornment;
	FindFirstAncestorOfClass(className: "BoxHandleAdornment"): BoxHandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "BoxHandleAdornment"): BoxHandleAdornment | undefined;
	FindFirstChildOfClass(className: "BoxHandleAdornment"): BoxHandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "BoxHandleAdornment"): BoxHandleAdornment | undefined;
}

// ConeHandleAdornment
interface Rbx_ConeHandleAdornment extends Rbx_HandleAdornment {
	Height: number;
	Radius: number;
}
interface ConeHandleAdornment extends Rbx_ConeHandleAdornment, AnyIndex { }
declare class ConeHandleAdornment {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ConeHandleAdornment"): this is ConeHandleAdornment;
	FindFirstAncestorOfClass(className: "ConeHandleAdornment"): ConeHandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "ConeHandleAdornment"): ConeHandleAdornment | undefined;
	FindFirstChildOfClass(className: "ConeHandleAdornment"): ConeHandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "ConeHandleAdornment"): ConeHandleAdornment | undefined;
}

// CylinderHandleAdornment
interface Rbx_CylinderHandleAdornment extends Rbx_HandleAdornment {
	Height: number;
	Radius: number;
}
interface CylinderHandleAdornment extends Rbx_CylinderHandleAdornment, AnyIndex { }
declare class CylinderHandleAdornment {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "CylinderHandleAdornment"): this is CylinderHandleAdornment;
	FindFirstAncestorOfClass(className: "CylinderHandleAdornment"): CylinderHandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "CylinderHandleAdornment"): CylinderHandleAdornment | undefined;
	FindFirstChildOfClass(className: "CylinderHandleAdornment"): CylinderHandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "CylinderHandleAdornment"): CylinderHandleAdornment | undefined;
}

// ImageHandleAdornment
interface Rbx_ImageHandleAdornment extends Rbx_HandleAdornment {
	Image: string;
	Size: Vector2;
}
interface ImageHandleAdornment extends Rbx_ImageHandleAdornment, AnyIndex { }
declare class ImageHandleAdornment {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ImageHandleAdornment"): this is ImageHandleAdornment;
	FindFirstAncestorOfClass(className: "ImageHandleAdornment"): ImageHandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "ImageHandleAdornment"): ImageHandleAdornment | undefined;
	FindFirstChildOfClass(className: "ImageHandleAdornment"): ImageHandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "ImageHandleAdornment"): ImageHandleAdornment | undefined;
}

// LineHandleAdornment
interface Rbx_LineHandleAdornment extends Rbx_HandleAdornment {
	Length: number;
	Thickness: number;
}
interface LineHandleAdornment extends Rbx_LineHandleAdornment, AnyIndex { }
declare class LineHandleAdornment {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "LineHandleAdornment"): this is LineHandleAdornment;
	FindFirstAncestorOfClass(className: "LineHandleAdornment"): LineHandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "LineHandleAdornment"): LineHandleAdornment | undefined;
	FindFirstChildOfClass(className: "LineHandleAdornment"): LineHandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "LineHandleAdornment"): LineHandleAdornment | undefined;
}

// SphereHandleAdornment
interface Rbx_SphereHandleAdornment extends Rbx_HandleAdornment {
	Radius: number;
}
interface SphereHandleAdornment extends Rbx_SphereHandleAdornment, AnyIndex { }
declare class SphereHandleAdornment {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SphereHandleAdornment"): this is SphereHandleAdornment;
	FindFirstAncestorOfClass(className: "SphereHandleAdornment"): SphereHandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "SphereHandleAdornment"): SphereHandleAdornment | undefined;
	FindFirstChildOfClass(className: "SphereHandleAdornment"): SphereHandleAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "SphereHandleAdornment"): SphereHandleAdornment | undefined;
}

// ParabolaAdornment
interface Rbx_ParabolaAdornment extends Rbx_PVAdornment {
}
interface ParabolaAdornment extends Rbx_ParabolaAdornment, AnyIndex { }
declare class ParabolaAdornment {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ParabolaAdornment"): this is ParabolaAdornment;
	FindFirstAncestorOfClass(className: "ParabolaAdornment"): ParabolaAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "ParabolaAdornment"): ParabolaAdornment | undefined;
	FindFirstChildOfClass(className: "ParabolaAdornment"): ParabolaAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "ParabolaAdornment"): ParabolaAdornment | undefined;
}

// SelectionBox
interface Rbx_SelectionBox extends Rbx_PVAdornment {
	LineThickness: number;
	SurfaceColor3: Color3;
	SurfaceTransparency: number;
}
interface SelectionBox extends Rbx_SelectionBox, AnyIndex { }
declare class SelectionBox {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SelectionBox"): this is SelectionBox;
	FindFirstAncestorOfClass(className: "SelectionBox"): SelectionBox | undefined;
	FindFirstAncestorWhichIsA(className: "SelectionBox"): SelectionBox | undefined;
	FindFirstChildOfClass(className: "SelectionBox"): SelectionBox | undefined;
	FindFirstAncestorWhichIsA(className: "SelectionBox"): SelectionBox | undefined;
}

// SelectionSphere
interface Rbx_SelectionSphere extends Rbx_PVAdornment {
	SurfaceColor3: Color3;
	SurfaceTransparency: number;
}
interface SelectionSphere extends Rbx_SelectionSphere, AnyIndex { }
declare class SelectionSphere {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SelectionSphere"): this is SelectionSphere;
	FindFirstAncestorOfClass(className: "SelectionSphere"): SelectionSphere | undefined;
	FindFirstAncestorWhichIsA(className: "SelectionSphere"): SelectionSphere | undefined;
	FindFirstChildOfClass(className: "SelectionSphere"): SelectionSphere | undefined;
	FindFirstAncestorWhichIsA(className: "SelectionSphere"): SelectionSphere | undefined;
}

// PartAdornment
interface Rbx_PartAdornment extends Rbx_GuiBase3d {
	Adornee: Instance | undefined;
}
interface PartAdornment extends Rbx_PartAdornment, AnyIndex { }
declare class PartAdornment {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PartAdornment"): this is PartAdornment;
	FindFirstAncestorOfClass(className: "PartAdornment"): PartAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "PartAdornment"): PartAdornment | undefined;
	FindFirstChildOfClass(className: "PartAdornment"): PartAdornment | undefined;
	FindFirstAncestorWhichIsA(className: "PartAdornment"): PartAdornment | undefined;
}

// HandlesBase
interface Rbx_HandlesBase extends Rbx_PartAdornment {
}
interface HandlesBase extends Rbx_HandlesBase, AnyIndex { }
declare class HandlesBase {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "HandlesBase"): this is HandlesBase;
	FindFirstAncestorOfClass(className: "HandlesBase"): HandlesBase | undefined;
	FindFirstAncestorWhichIsA(className: "HandlesBase"): HandlesBase | undefined;
	FindFirstChildOfClass(className: "HandlesBase"): HandlesBase | undefined;
	FindFirstAncestorWhichIsA(className: "HandlesBase"): HandlesBase | undefined;
}

// ArcHandles
interface Rbx_ArcHandles extends Rbx_HandlesBase {
	Axes: Axes;
	MouseButton1Down: RBXScriptSignal<(axis: Enum.Axis) => void>;
	MouseButton1Up: RBXScriptSignal<(axis: Enum.Axis) => void>;
	MouseDrag: RBXScriptSignal<(axis: Enum.Axis, relativeAngle: number, deltaRadius: number) => void>;
	MouseEnter: RBXScriptSignal<(axis: Enum.Axis) => void>;
	MouseLeave: RBXScriptSignal<(axis: Enum.Axis) => void>;
}
interface ArcHandles extends Rbx_ArcHandles, AnyIndex { }
declare class ArcHandles {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ArcHandles"): this is ArcHandles;
	FindFirstAncestorOfClass(className: "ArcHandles"): ArcHandles | undefined;
	FindFirstAncestorWhichIsA(className: "ArcHandles"): ArcHandles | undefined;
	FindFirstChildOfClass(className: "ArcHandles"): ArcHandles | undefined;
	FindFirstAncestorWhichIsA(className: "ArcHandles"): ArcHandles | undefined;
}

// Handles
interface Rbx_Handles extends Rbx_HandlesBase {
	Faces: Faces;
	Style: Enum.HandlesStyle;
	MouseButton1Down: RBXScriptSignal<(face: Enum.NormalId) => void>;
	MouseButton1Up: RBXScriptSignal<(face: Enum.NormalId) => void>;
	MouseDrag: RBXScriptSignal<(face: Enum.NormalId, distance: number) => void>;
	MouseEnter: RBXScriptSignal<(face: Enum.NormalId) => void>;
	MouseLeave: RBXScriptSignal<(face: Enum.NormalId) => void>;
}
interface Handles extends Rbx_Handles, AnyIndex { }
declare class Handles {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Handles"): this is Handles;
	FindFirstAncestorOfClass(className: "Handles"): Handles | undefined;
	FindFirstAncestorWhichIsA(className: "Handles"): Handles | undefined;
	FindFirstChildOfClass(className: "Handles"): Handles | undefined;
	FindFirstAncestorWhichIsA(className: "Handles"): Handles | undefined;
}

// SurfaceSelection
interface Rbx_SurfaceSelection extends Rbx_PartAdornment {
	TargetSurface: Enum.NormalId;
}
interface SurfaceSelection extends Rbx_SurfaceSelection, AnyIndex { }
declare class SurfaceSelection {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SurfaceSelection"): this is SurfaceSelection;
	FindFirstAncestorOfClass(className: "SurfaceSelection"): SurfaceSelection | undefined;
	FindFirstAncestorWhichIsA(className: "SurfaceSelection"): SurfaceSelection | undefined;
	FindFirstChildOfClass(className: "SurfaceSelection"): SurfaceSelection | undefined;
	FindFirstAncestorWhichIsA(className: "SurfaceSelection"): SurfaceSelection | undefined;
}

// SelectionLasso
interface Rbx_SelectionLasso extends Rbx_GuiBase3d {
	Humanoid: Instance | undefined;
}
interface SelectionLasso extends Rbx_SelectionLasso, AnyIndex { }
declare class SelectionLasso {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SelectionLasso"): this is SelectionLasso;
	FindFirstAncestorOfClass(className: "SelectionLasso"): SelectionLasso | undefined;
	FindFirstAncestorWhichIsA(className: "SelectionLasso"): SelectionLasso | undefined;
	FindFirstChildOfClass(className: "SelectionLasso"): SelectionLasso | undefined;
	FindFirstAncestorWhichIsA(className: "SelectionLasso"): SelectionLasso | undefined;
}

// SelectionPartLasso
interface Rbx_SelectionPartLasso extends Rbx_SelectionLasso {
	Part: Instance | undefined;
}
interface SelectionPartLasso extends Rbx_SelectionPartLasso, AnyIndex { }
declare class SelectionPartLasso {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SelectionPartLasso"): this is SelectionPartLasso;
	FindFirstAncestorOfClass(className: "SelectionPartLasso"): SelectionPartLasso | undefined;
	FindFirstAncestorWhichIsA(className: "SelectionPartLasso"): SelectionPartLasso | undefined;
	FindFirstChildOfClass(className: "SelectionPartLasso"): SelectionPartLasso | undefined;
	FindFirstAncestorWhichIsA(className: "SelectionPartLasso"): SelectionPartLasso | undefined;
}

// SelectionPointLasso
interface Rbx_SelectionPointLasso extends Rbx_SelectionLasso {
	Point: Vector3;
}
interface SelectionPointLasso extends Rbx_SelectionPointLasso, AnyIndex { }
declare class SelectionPointLasso {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SelectionPointLasso"): this is SelectionPointLasso;
	FindFirstAncestorOfClass(className: "SelectionPointLasso"): SelectionPointLasso | undefined;
	FindFirstAncestorWhichIsA(className: "SelectionPointLasso"): SelectionPointLasso | undefined;
	FindFirstChildOfClass(className: "SelectionPointLasso"): SelectionPointLasso | undefined;
	FindFirstAncestorWhichIsA(className: "SelectionPointLasso"): SelectionPointLasso | undefined;
}

// GuiItem
interface Rbx_GuiItem extends Rbx_Instance {
}
interface GuiItem extends Rbx_GuiItem, AnyIndex { }
declare class GuiItem {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GuiItem"): this is GuiItem;
	FindFirstAncestorOfClass(className: "GuiItem"): GuiItem | undefined;
	FindFirstAncestorWhichIsA(className: "GuiItem"): GuiItem | undefined;
	FindFirstChildOfClass(className: "GuiItem"): GuiItem | undefined;
	FindFirstAncestorWhichIsA(className: "GuiItem"): GuiItem | undefined;
}

// Backpack
interface Rbx_Backpack extends Rbx_GuiItem {
}
interface Backpack extends Rbx_Backpack, AnyIndex { }
declare class Backpack {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Backpack"): this is Backpack;
	FindFirstAncestorOfClass(className: "Backpack"): Backpack | undefined;
	FindFirstAncestorWhichIsA(className: "Backpack"): Backpack | undefined;
	FindFirstChildOfClass(className: "Backpack"): Backpack | undefined;
	FindFirstAncestorWhichIsA(className: "Backpack"): Backpack | undefined;
}

// BackpackItem
interface Rbx_BackpackItem extends Rbx_GuiItem {
	TextureId: string;
}
interface BackpackItem extends Rbx_BackpackItem, AnyIndex { }
declare class BackpackItem {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BackpackItem"): this is BackpackItem;
	FindFirstAncestorOfClass(className: "BackpackItem"): BackpackItem | undefined;
	FindFirstAncestorWhichIsA(className: "BackpackItem"): BackpackItem | undefined;
	FindFirstChildOfClass(className: "BackpackItem"): BackpackItem | undefined;
	FindFirstAncestorWhichIsA(className: "BackpackItem"): BackpackItem | undefined;
}

// HopperBin
interface Rbx_HopperBin extends Rbx_BackpackItem {
	Active: boolean;
	BinType: Enum.BinType;
	Deselected: RBXScriptSignal<() => void>;
	Selected: RBXScriptSignal<(mouse: Instance) => void>;
}
interface HopperBin extends Rbx_HopperBin, AnyIndex { }
declare class HopperBin {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "HopperBin"): this is HopperBin;
	FindFirstAncestorOfClass(className: "HopperBin"): HopperBin | undefined;
	FindFirstAncestorWhichIsA(className: "HopperBin"): HopperBin | undefined;
	FindFirstChildOfClass(className: "HopperBin"): HopperBin | undefined;
	FindFirstAncestorWhichIsA(className: "HopperBin"): HopperBin | undefined;
}

// Tool
interface Rbx_Tool extends Rbx_BackpackItem {
	CanBeDropped: boolean;
	Enabled: boolean;
	Grip: CFrame;
	GripForward: Vector3;
	GripPos: Vector3;
	GripRight: Vector3;
	GripUp: Vector3;
	ManualActivationOnly: boolean;
	RequiresHandle: boolean;
	ToolTip: string;
	Activate(): void;
	Deactivate(): void;
	Activated: RBXScriptSignal<() => void>;
	Deactivated: RBXScriptSignal<() => void>;
	Equipped: RBXScriptSignal<(mouse: Instance) => void>;
	Unequipped: RBXScriptSignal<() => void>;
}
interface Tool extends Rbx_Tool, AnyIndex { }
declare class Tool {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Tool"): this is Tool;
	FindFirstAncestorOfClass(className: "Tool"): Tool | undefined;
	FindFirstAncestorWhichIsA(className: "Tool"): Tool | undefined;
	FindFirstChildOfClass(className: "Tool"): Tool | undefined;
	FindFirstAncestorWhichIsA(className: "Tool"): Tool | undefined;
}

// Flag
interface Rbx_Flag extends Rbx_Tool {
	TeamColor: BrickColor;
}
interface Flag extends Rbx_Flag, AnyIndex { }
declare class Flag {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Flag"): this is Flag;
	FindFirstAncestorOfClass(className: "Flag"): Flag | undefined;
	FindFirstAncestorWhichIsA(className: "Flag"): Flag | undefined;
	FindFirstChildOfClass(className: "Flag"): Flag | undefined;
	FindFirstAncestorWhichIsA(className: "Flag"): Flag | undefined;
}

// ButtonBindingWidget
interface Rbx_ButtonBindingWidget extends Rbx_GuiItem {
}
interface ButtonBindingWidget extends Rbx_ButtonBindingWidget, AnyIndex { }
declare class ButtonBindingWidget {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ButtonBindingWidget"): this is ButtonBindingWidget;
	FindFirstAncestorOfClass(className: "ButtonBindingWidget"): ButtonBindingWidget | undefined;
	FindFirstAncestorWhichIsA(className: "ButtonBindingWidget"): ButtonBindingWidget | undefined;
	FindFirstChildOfClass(className: "ButtonBindingWidget"): ButtonBindingWidget | undefined;
	FindFirstAncestorWhichIsA(className: "ButtonBindingWidget"): ButtonBindingWidget | undefined;
}

// GuiRoot
interface Rbx_GuiRoot extends Rbx_GuiItem {
}
interface GuiRoot extends Rbx_GuiRoot, AnyIndex { }
declare class GuiRoot {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GuiRoot"): this is GuiRoot;
	FindFirstAncestorOfClass(className: "GuiRoot"): GuiRoot | undefined;
	FindFirstAncestorWhichIsA(className: "GuiRoot"): GuiRoot | undefined;
	FindFirstChildOfClass(className: "GuiRoot"): GuiRoot | undefined;
	FindFirstAncestorWhichIsA(className: "GuiRoot"): GuiRoot | undefined;
}

// Hopper
interface Rbx_Hopper extends Rbx_GuiItem {
}
type Hopper = Rbx_Hopper & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Hopper"): this is Hopper;
	FindFirstAncestorOfClass(className: "Hopper"): Hopper | undefined;
	FindFirstAncestorWhichIsA(className: "Hopper"): Hopper | undefined;
	FindFirstChildOfClass(className: "Hopper"): Hopper | undefined;
	FindFirstAncestorWhichIsA(className: "Hopper"): Hopper | undefined;
}

// StarterPack
interface Rbx_StarterPack extends Rbx_GuiItem {
}
type StarterPack = Rbx_StarterPack & AnyIndex;
interface Rbx_Instance {
	IsA(className: "StarterPack"): this is StarterPack;
	FindFirstAncestorOfClass(className: "StarterPack"): StarterPack | undefined;
	FindFirstAncestorWhichIsA(className: "StarterPack"): StarterPack | undefined;
	FindFirstChildOfClass(className: "StarterPack"): StarterPack | undefined;
	FindFirstAncestorWhichIsA(className: "StarterPack"): StarterPack | undefined;
}

// GuiService
interface Rbx_GuiService extends Rbx_Instance {
	AutoSelectGuiEnabled: boolean;
	CoreGuiNavigationEnabled: boolean;
	GuiNavigationEnabled: boolean;
	readonly MenuIsOpen: boolean;
	SelectedObject: Instance | undefined;
	AddSelectionParent(selectionName: string, selectionParent: Instance): void;
	AddSelectionTuple(selectionName: string, selections: Array<any>): void;
	/** !TupleReturn */
	GetGuiInset(): Array<any>;
	IsTenFootInterface(): boolean;
	RemoveSelectionGroup(selectionName: string): void;
	MenuClosed: RBXScriptSignal<() => void>;
	MenuOpened: RBXScriptSignal<() => void>;
}
type GuiService = Rbx_GuiService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "GuiService"): this is GuiService;
	FindFirstAncestorOfClass(className: "GuiService"): GuiService | undefined;
	FindFirstAncestorWhichIsA(className: "GuiService"): GuiService | undefined;
	FindFirstChildOfClass(className: "GuiService"): GuiService | undefined;
	FindFirstAncestorWhichIsA(className: "GuiService"): GuiService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "GuiService"): GuiService;
}

// GuidRegistryService
interface Rbx_GuidRegistryService extends Rbx_Instance {
}
type GuidRegistryService = Rbx_GuidRegistryService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "GuidRegistryService"): this is GuidRegistryService;
	FindFirstAncestorOfClass(className: "GuidRegistryService"): GuidRegistryService | undefined;
	FindFirstAncestorWhichIsA(className: "GuidRegistryService"): GuidRegistryService | undefined;
	FindFirstChildOfClass(className: "GuidRegistryService"): GuidRegistryService | undefined;
	FindFirstAncestorWhichIsA(className: "GuidRegistryService"): GuidRegistryService | undefined;
}

// HapticService
interface Rbx_HapticService extends Rbx_Instance {
	/** !TupleReturn */
	GetMotor(inputType: Enum.UserInputType, vibrationMotor: Enum.VibrationMotor): Array<any>;
	IsMotorSupported(inputType: Enum.UserInputType, vibrationMotor: Enum.VibrationMotor): boolean;
	IsVibrationSupported(inputType: Enum.UserInputType): boolean;
	SetMotor(inputType: Enum.UserInputType, vibrationMotor: Enum.VibrationMotor, vibrationValues: Array<any>): void;
}
type HapticService = Rbx_HapticService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "HapticService"): this is HapticService;
	FindFirstAncestorOfClass(className: "HapticService"): HapticService | undefined;
	FindFirstAncestorWhichIsA(className: "HapticService"): HapticService | undefined;
	FindFirstChildOfClass(className: "HapticService"): HapticService | undefined;
	FindFirstAncestorWhichIsA(className: "HapticService"): HapticService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "HapticService"): HapticService;
}

// HttpRbxApiService
interface Rbx_HttpRbxApiService extends Rbx_Instance {
}
type HttpRbxApiService = Rbx_HttpRbxApiService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "HttpRbxApiService"): this is HttpRbxApiService;
	FindFirstAncestorOfClass(className: "HttpRbxApiService"): HttpRbxApiService | undefined;
	FindFirstAncestorWhichIsA(className: "HttpRbxApiService"): HttpRbxApiService | undefined;
	FindFirstChildOfClass(className: "HttpRbxApiService"): HttpRbxApiService | undefined;
	FindFirstAncestorWhichIsA(className: "HttpRbxApiService"): HttpRbxApiService | undefined;
}

// HttpService
interface Rbx_HttpService extends Rbx_Instance {
	GenerateGUID(wrapInCurlyBraces?: boolean): string;
	JSONDecode(input: string): any;
	JSONEncode(input?: any): string;
	UrlEncode(input: string): string;
	GetAsync(url: string, nocache?: boolean, headers?: any): string;
	PostAsync(url: string, data: string, content_type?: Enum.HttpContentType, compress?: boolean, headers?: any): string;
	RequestAsync(requestOptions: object): object;
}
type HttpService = Rbx_HttpService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "HttpService"): this is HttpService;
	FindFirstAncestorOfClass(className: "HttpService"): HttpService | undefined;
	FindFirstAncestorWhichIsA(className: "HttpService"): HttpService | undefined;
	FindFirstChildOfClass(className: "HttpService"): HttpService | undefined;
	FindFirstAncestorWhichIsA(className: "HttpService"): HttpService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "HttpService"): HttpService;
}

// Humanoid
interface Rbx_Humanoid extends Rbx_Instance {
	AutoJumpEnabled: boolean;
	AutoRotate: boolean;
	CameraOffset: Vector3;
	DisplayDistanceType: Enum.HumanoidDisplayDistanceType;
	readonly FloorMaterial: Enum.Material;
	Health: number;
	HealthDisplayDistance: number;
	HealthDisplayType: Enum.HumanoidHealthDisplayType;
	HipHeight: number;
	Jump: boolean;
	JumpPower: number;
	MaxHealth: number;
	MaxSlopeAngle: number;
	readonly MoveDirection: Vector3;
	NameDisplayDistance: number;
	NameOcclusion: Enum.NameOcclusion;
	PlatformStand: boolean;
	RigType: Enum.HumanoidRigType;
	readonly RootPart: Instance | undefined;
	readonly SeatPart: Instance | undefined;
	Sit: boolean;
	TargetPoint: Vector3;
	WalkSpeed: number;
	WalkToPart: Instance | undefined;
	WalkToPoint: Vector3;
	AddAccessory(accessory: Instance): void;
	BuildRigFromAttachments(): void;
	ChangeState(state?: Enum.HumanoidStateType): void;
	EquipTool(tool: Instance): void;
	GetAccessories(): Array<any>;
	GetLimb(part: Instance): Enum.Limb;
	GetPlayingAnimationTracks(): Array<any>;
	GetState(): Enum.HumanoidStateType;
	GetStateEnabled(state: Enum.HumanoidStateType): boolean;
	Move(moveDirection: Vector3, relativeToCamera?: boolean): void;
	MoveTo(location: Vector3, part?: Instance): void;
	RemoveAccessories(): void;
	SetStateEnabled(state: Enum.HumanoidStateType, enabled: boolean): void;
	TakeDamage(amount: number): void;
	UnequipTools(): void;
	AnimationPlayed: RBXScriptSignal<(animationTrack: Instance) => void>;
	Climbing: RBXScriptSignal<(speed: number) => void>;
	Died: RBXScriptSignal<() => void>;
	FallingDown: RBXScriptSignal<(active: boolean) => void>;
	FreeFalling: RBXScriptSignal<(active: boolean) => void>;
	GettingUp: RBXScriptSignal<(active: boolean) => void>;
	HealthChanged: RBXScriptSignal<(health: number) => void>;
	Jumping: RBXScriptSignal<(active: boolean) => void>;
	MoveToFinished: RBXScriptSignal<(reached: boolean) => void>;
	PlatformStanding: RBXScriptSignal<(active: boolean) => void>;
	Ragdoll: RBXScriptSignal<(active: boolean) => void>;
	Running: RBXScriptSignal<(speed: number) => void>;
	Seated: RBXScriptSignal<(active: boolean, currentSeatPart: Instance) => void>;
	StateChanged: RBXScriptSignal<(oldValue: Enum.HumanoidStateType, newValue: Enum.HumanoidStateType) => void>;
	StateEnabledChanged: RBXScriptSignal<(state: Enum.HumanoidStateType, isEnabled: boolean) => void>;
	Strafing: RBXScriptSignal<(active: boolean) => void>;
	Swimming: RBXScriptSignal<(speed: number) => void>;
	Touched: RBXScriptSignal<(touchingPart: Instance, humanoidPart: Instance) => void>;
}
interface Humanoid extends Rbx_Humanoid, AnyIndex { }
declare class Humanoid {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Humanoid"): this is Humanoid;
	FindFirstAncestorOfClass(className: "Humanoid"): Humanoid | undefined;
	FindFirstAncestorWhichIsA(className: "Humanoid"): Humanoid | undefined;
	FindFirstChildOfClass(className: "Humanoid"): Humanoid | undefined;
	FindFirstAncestorWhichIsA(className: "Humanoid"): Humanoid | undefined;
}

// InputObject
interface Rbx_InputObject extends Rbx_Instance {
	Delta: Vector3;
	KeyCode: Enum.KeyCode;
	Position: Vector3;
	UserInputState: Enum.UserInputState;
	UserInputType: Enum.UserInputType;
}
interface InputObject extends Rbx_InputObject, AnyIndex { }
declare class InputObject {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "InputObject"): this is InputObject;
	FindFirstAncestorOfClass(className: "InputObject"): InputObject | undefined;
	FindFirstAncestorWhichIsA(className: "InputObject"): InputObject | undefined;
	FindFirstChildOfClass(className: "InputObject"): InputObject | undefined;
	FindFirstAncestorWhichIsA(className: "InputObject"): InputObject | undefined;
}

// InsertService
interface Rbx_InsertService extends Rbx_Instance {
	AllowClientInsertModels: boolean;
	GetBaseSets(): Array<any>;
	GetCollection(categoryId: number): Array<any>;
	GetFreeDecals(searchText: string, pageNum: number): Array<any>;
	GetFreeModels(searchText: string, pageNum: number): Array<any>;
	GetLatestAssetVersionAsync(assetId: number): number;
	GetUserSets(userId: number): Array<any>;
	LoadAsset(assetId: number): Instance | undefined;
	LoadAssetVersion(assetVersionId: number): Instance | undefined;
}
type InsertService = Rbx_InsertService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "InsertService"): this is InsertService;
	FindFirstAncestorOfClass(className: "InsertService"): InsertService | undefined;
	FindFirstAncestorWhichIsA(className: "InsertService"): InsertService | undefined;
	FindFirstChildOfClass(className: "InsertService"): InsertService | undefined;
	FindFirstAncestorWhichIsA(className: "InsertService"): InsertService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "InsertService"): InsertService;
}

// InstancePacketCache
interface Rbx_InstancePacketCache extends Rbx_Instance {
}
type InstancePacketCache = Rbx_InstancePacketCache & AnyIndex;
interface Rbx_Instance {
	IsA(className: "InstancePacketCache"): this is InstancePacketCache;
	FindFirstAncestorOfClass(className: "InstancePacketCache"): InstancePacketCache | undefined;
	FindFirstAncestorWhichIsA(className: "InstancePacketCache"): InstancePacketCache | undefined;
	FindFirstChildOfClass(className: "InstancePacketCache"): InstancePacketCache | undefined;
	FindFirstAncestorWhichIsA(className: "InstancePacketCache"): InstancePacketCache | undefined;
}

// JointInstance
interface Rbx_JointInstance extends Rbx_Instance {
	C0: CFrame;
	C1: CFrame;
	Part0: Instance | undefined;
	Part1: Instance | undefined;
}
interface JointInstance extends Rbx_JointInstance, AnyIndex { }
declare class JointInstance {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "JointInstance"): this is JointInstance;
	FindFirstAncestorOfClass(className: "JointInstance"): JointInstance | undefined;
	FindFirstAncestorWhichIsA(className: "JointInstance"): JointInstance | undefined;
	FindFirstChildOfClass(className: "JointInstance"): JointInstance | undefined;
	FindFirstAncestorWhichIsA(className: "JointInstance"): JointInstance | undefined;
}

// DynamicRotate
interface Rbx_DynamicRotate extends Rbx_JointInstance {
	BaseAngle: number;
}
interface DynamicRotate extends Rbx_DynamicRotate, AnyIndex { }
declare class DynamicRotate {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "DynamicRotate"): this is DynamicRotate;
	FindFirstAncestorOfClass(className: "DynamicRotate"): DynamicRotate | undefined;
	FindFirstAncestorWhichIsA(className: "DynamicRotate"): DynamicRotate | undefined;
	FindFirstChildOfClass(className: "DynamicRotate"): DynamicRotate | undefined;
	FindFirstAncestorWhichIsA(className: "DynamicRotate"): DynamicRotate | undefined;
}

// RotateP
interface Rbx_RotateP extends Rbx_DynamicRotate {
}
interface RotateP extends Rbx_RotateP, AnyIndex { }
declare class RotateP {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RotateP"): this is RotateP;
	FindFirstAncestorOfClass(className: "RotateP"): RotateP | undefined;
	FindFirstAncestorWhichIsA(className: "RotateP"): RotateP | undefined;
	FindFirstChildOfClass(className: "RotateP"): RotateP | undefined;
	FindFirstAncestorWhichIsA(className: "RotateP"): RotateP | undefined;
}

// RotateV
interface Rbx_RotateV extends Rbx_DynamicRotate {
}
interface RotateV extends Rbx_RotateV, AnyIndex { }
declare class RotateV {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RotateV"): this is RotateV;
	FindFirstAncestorOfClass(className: "RotateV"): RotateV | undefined;
	FindFirstAncestorWhichIsA(className: "RotateV"): RotateV | undefined;
	FindFirstChildOfClass(className: "RotateV"): RotateV | undefined;
	FindFirstAncestorWhichIsA(className: "RotateV"): RotateV | undefined;
}

// Glue
interface Rbx_Glue extends Rbx_JointInstance {
	F0: Vector3;
	F1: Vector3;
	F2: Vector3;
	F3: Vector3;
}
interface Glue extends Rbx_Glue, AnyIndex { }
declare class Glue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Glue"): this is Glue;
	FindFirstAncestorOfClass(className: "Glue"): Glue | undefined;
	FindFirstAncestorWhichIsA(className: "Glue"): Glue | undefined;
	FindFirstChildOfClass(className: "Glue"): Glue | undefined;
	FindFirstAncestorWhichIsA(className: "Glue"): Glue | undefined;
}

// ManualSurfaceJointInstance
interface Rbx_ManualSurfaceJointInstance extends Rbx_JointInstance {
}
interface ManualSurfaceJointInstance extends Rbx_ManualSurfaceJointInstance, AnyIndex { }
declare class ManualSurfaceJointInstance {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ManualSurfaceJointInstance"): this is ManualSurfaceJointInstance;
	FindFirstAncestorOfClass(className: "ManualSurfaceJointInstance"): ManualSurfaceJointInstance | undefined;
	FindFirstAncestorWhichIsA(className: "ManualSurfaceJointInstance"): ManualSurfaceJointInstance | undefined;
	FindFirstChildOfClass(className: "ManualSurfaceJointInstance"): ManualSurfaceJointInstance | undefined;
	FindFirstAncestorWhichIsA(className: "ManualSurfaceJointInstance"): ManualSurfaceJointInstance | undefined;
}

// ManualGlue
interface Rbx_ManualGlue extends Rbx_ManualSurfaceJointInstance {
}
interface ManualGlue extends Rbx_ManualGlue, AnyIndex { }
declare class ManualGlue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ManualGlue"): this is ManualGlue;
	FindFirstAncestorOfClass(className: "ManualGlue"): ManualGlue | undefined;
	FindFirstAncestorWhichIsA(className: "ManualGlue"): ManualGlue | undefined;
	FindFirstChildOfClass(className: "ManualGlue"): ManualGlue | undefined;
	FindFirstAncestorWhichIsA(className: "ManualGlue"): ManualGlue | undefined;
}

// ManualWeld
interface Rbx_ManualWeld extends Rbx_ManualSurfaceJointInstance {
}
interface ManualWeld extends Rbx_ManualWeld, AnyIndex { }
declare class ManualWeld {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ManualWeld"): this is ManualWeld;
	FindFirstAncestorOfClass(className: "ManualWeld"): ManualWeld | undefined;
	FindFirstAncestorWhichIsA(className: "ManualWeld"): ManualWeld | undefined;
	FindFirstChildOfClass(className: "ManualWeld"): ManualWeld | undefined;
	FindFirstAncestorWhichIsA(className: "ManualWeld"): ManualWeld | undefined;
}

// Motor
interface Rbx_Motor extends Rbx_JointInstance {
	CurrentAngle: number;
	DesiredAngle: number;
	MaxVelocity: number;
	SetDesiredAngle(value: number): void;
}
interface Motor extends Rbx_Motor, AnyIndex { }
declare class Motor {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Motor"): this is Motor;
	FindFirstAncestorOfClass(className: "Motor"): Motor | undefined;
	FindFirstAncestorWhichIsA(className: "Motor"): Motor | undefined;
	FindFirstChildOfClass(className: "Motor"): Motor | undefined;
	FindFirstAncestorWhichIsA(className: "Motor"): Motor | undefined;
}

// Motor6D
interface Rbx_Motor6D extends Rbx_Motor {
	Transform: CFrame;
}
interface Motor6D extends Rbx_Motor6D, AnyIndex { }
declare class Motor6D {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Motor6D"): this is Motor6D;
	FindFirstAncestorOfClass(className: "Motor6D"): Motor6D | undefined;
	FindFirstAncestorWhichIsA(className: "Motor6D"): Motor6D | undefined;
	FindFirstChildOfClass(className: "Motor6D"): Motor6D | undefined;
	FindFirstAncestorWhichIsA(className: "Motor6D"): Motor6D | undefined;
}

// Rotate
interface Rbx_Rotate extends Rbx_JointInstance {
}
interface Rotate extends Rbx_Rotate, AnyIndex { }
declare class Rotate {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Rotate"): this is Rotate;
	FindFirstAncestorOfClass(className: "Rotate"): Rotate | undefined;
	FindFirstAncestorWhichIsA(className: "Rotate"): Rotate | undefined;
	FindFirstChildOfClass(className: "Rotate"): Rotate | undefined;
	FindFirstAncestorWhichIsA(className: "Rotate"): Rotate | undefined;
}

// Snap
interface Rbx_Snap extends Rbx_JointInstance {
}
interface Snap extends Rbx_Snap, AnyIndex { }
declare class Snap {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Snap"): this is Snap;
	FindFirstAncestorOfClass(className: "Snap"): Snap | undefined;
	FindFirstAncestorWhichIsA(className: "Snap"): Snap | undefined;
	FindFirstChildOfClass(className: "Snap"): Snap | undefined;
	FindFirstAncestorWhichIsA(className: "Snap"): Snap | undefined;
}

// VelocityMotor
interface Rbx_VelocityMotor extends Rbx_JointInstance {
	CurrentAngle: number;
	DesiredAngle: number;
	Hole: Instance | undefined;
	MaxVelocity: number;
}
interface VelocityMotor extends Rbx_VelocityMotor, AnyIndex { }
declare class VelocityMotor {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "VelocityMotor"): this is VelocityMotor;
	FindFirstAncestorOfClass(className: "VelocityMotor"): VelocityMotor | undefined;
	FindFirstAncestorWhichIsA(className: "VelocityMotor"): VelocityMotor | undefined;
	FindFirstChildOfClass(className: "VelocityMotor"): VelocityMotor | undefined;
	FindFirstAncestorWhichIsA(className: "VelocityMotor"): VelocityMotor | undefined;
}

// Weld
interface Rbx_Weld extends Rbx_JointInstance {
}
interface Weld extends Rbx_Weld, AnyIndex { }
declare class Weld {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Weld"): this is Weld;
	FindFirstAncestorOfClass(className: "Weld"): Weld | undefined;
	FindFirstAncestorWhichIsA(className: "Weld"): Weld | undefined;
	FindFirstChildOfClass(className: "Weld"): Weld | undefined;
	FindFirstAncestorWhichIsA(className: "Weld"): Weld | undefined;
}

// JointsService
interface Rbx_JointsService extends Rbx_Instance {
	ClearJoinAfterMoveJoints(): void;
	CreateJoinAfterMoveJoints(): void;
	SetJoinAfterMoveInstance(joinInstance: Instance): void;
	SetJoinAfterMoveTarget(joinTarget: Instance): void;
	ShowPermissibleJoints(): void;
}
type JointsService = Rbx_JointsService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "JointsService"): this is JointsService;
	FindFirstAncestorOfClass(className: "JointsService"): JointsService | undefined;
	FindFirstAncestorWhichIsA(className: "JointsService"): JointsService | undefined;
	FindFirstChildOfClass(className: "JointsService"): JointsService | undefined;
	FindFirstAncestorWhichIsA(className: "JointsService"): JointsService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "JointsService"): JointsService;
}

// KeyboardService
interface Rbx_KeyboardService extends Rbx_Instance {
}
type KeyboardService = Rbx_KeyboardService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "KeyboardService"): this is KeyboardService;
	FindFirstAncestorOfClass(className: "KeyboardService"): KeyboardService | undefined;
	FindFirstAncestorWhichIsA(className: "KeyboardService"): KeyboardService | undefined;
	FindFirstChildOfClass(className: "KeyboardService"): KeyboardService | undefined;
	FindFirstAncestorWhichIsA(className: "KeyboardService"): KeyboardService | undefined;
}

// Keyframe
interface Rbx_Keyframe extends Rbx_Instance {
	Time: number;
	AddPose(pose: Instance): void;
	GetPoses(): Array<Instance>;
	RemovePose(pose: Instance): void;
}
interface Keyframe extends Rbx_Keyframe, AnyIndex { }
declare class Keyframe {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Keyframe"): this is Keyframe;
	FindFirstAncestorOfClass(className: "Keyframe"): Keyframe | undefined;
	FindFirstAncestorWhichIsA(className: "Keyframe"): Keyframe | undefined;
	FindFirstChildOfClass(className: "Keyframe"): Keyframe | undefined;
	FindFirstAncestorWhichIsA(className: "Keyframe"): Keyframe | undefined;
}

// KeyframeSequence
interface Rbx_KeyframeSequence extends Rbx_Instance {
	Loop: boolean;
	Priority: Enum.AnimationPriority;
	AddKeyframe(keyframe: Instance): void;
	GetKeyframes(): Array<Instance>;
	RemoveKeyframe(keyframe: Instance): void;
}
interface KeyframeSequence extends Rbx_KeyframeSequence, AnyIndex { }
declare class KeyframeSequence {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "KeyframeSequence"): this is KeyframeSequence;
	FindFirstAncestorOfClass(className: "KeyframeSequence"): KeyframeSequence | undefined;
	FindFirstAncestorWhichIsA(className: "KeyframeSequence"): KeyframeSequence | undefined;
	FindFirstChildOfClass(className: "KeyframeSequence"): KeyframeSequence | undefined;
	FindFirstAncestorWhichIsA(className: "KeyframeSequence"): KeyframeSequence | undefined;
}

// KeyframeSequenceProvider
interface Rbx_KeyframeSequenceProvider extends Rbx_Instance {
	RegisterActiveKeyframeSequence(keyframeSequence: Instance): string;
	RegisterKeyframeSequence(keyframeSequence: Instance): string;
	GetAnimations(userId: number): Instance | undefined;
	GetKeyframeSequenceAsync(assetId: string): Instance | undefined;
}
type KeyframeSequenceProvider = Rbx_KeyframeSequenceProvider & AnyIndex;
interface Rbx_Instance {
	IsA(className: "KeyframeSequenceProvider"): this is KeyframeSequenceProvider;
	FindFirstAncestorOfClass(className: "KeyframeSequenceProvider"): KeyframeSequenceProvider | undefined;
	FindFirstAncestorWhichIsA(className: "KeyframeSequenceProvider"): KeyframeSequenceProvider | undefined;
	FindFirstChildOfClass(className: "KeyframeSequenceProvider"): KeyframeSequenceProvider | undefined;
	FindFirstAncestorWhichIsA(className: "KeyframeSequenceProvider"): KeyframeSequenceProvider | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "KeyframeSequenceProvider"): KeyframeSequenceProvider;
}

// Light
interface Rbx_Light extends Rbx_Instance {
	Brightness: number;
	Color: Color3;
	Enabled: boolean;
	Shadows: boolean;
}
interface Light extends Rbx_Light, AnyIndex { }
declare class Light {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Light"): this is Light;
	FindFirstAncestorOfClass(className: "Light"): Light | undefined;
	FindFirstAncestorWhichIsA(className: "Light"): Light | undefined;
	FindFirstChildOfClass(className: "Light"): Light | undefined;
	FindFirstAncestorWhichIsA(className: "Light"): Light | undefined;
}

// PointLight
interface Rbx_PointLight extends Rbx_Light {
	Range: number;
}
interface PointLight extends Rbx_PointLight, AnyIndex { }
declare class PointLight {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PointLight"): this is PointLight;
	FindFirstAncestorOfClass(className: "PointLight"): PointLight | undefined;
	FindFirstAncestorWhichIsA(className: "PointLight"): PointLight | undefined;
	FindFirstChildOfClass(className: "PointLight"): PointLight | undefined;
	FindFirstAncestorWhichIsA(className: "PointLight"): PointLight | undefined;
}

// SpotLight
interface Rbx_SpotLight extends Rbx_Light {
	Angle: number;
	Face: Enum.NormalId;
	Range: number;
}
interface SpotLight extends Rbx_SpotLight, AnyIndex { }
declare class SpotLight {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SpotLight"): this is SpotLight;
	FindFirstAncestorOfClass(className: "SpotLight"): SpotLight | undefined;
	FindFirstAncestorWhichIsA(className: "SpotLight"): SpotLight | undefined;
	FindFirstChildOfClass(className: "SpotLight"): SpotLight | undefined;
	FindFirstAncestorWhichIsA(className: "SpotLight"): SpotLight | undefined;
}

// SurfaceLight
interface Rbx_SurfaceLight extends Rbx_Light {
	Angle: number;
	Face: Enum.NormalId;
	Range: number;
}
interface SurfaceLight extends Rbx_SurfaceLight, AnyIndex { }
declare class SurfaceLight {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SurfaceLight"): this is SurfaceLight;
	FindFirstAncestorOfClass(className: "SurfaceLight"): SurfaceLight | undefined;
	FindFirstAncestorWhichIsA(className: "SurfaceLight"): SurfaceLight | undefined;
	FindFirstChildOfClass(className: "SurfaceLight"): SurfaceLight | undefined;
	FindFirstAncestorWhichIsA(className: "SurfaceLight"): SurfaceLight | undefined;
}

// Lighting
interface Rbx_Lighting extends Rbx_Instance {
	Ambient: Color3;
	Brightness: number;
	ClockTime: number;
	ColorShift_Bottom: Color3;
	ColorShift_Top: Color3;
	FogColor: Color3;
	FogEnd: number;
	FogStart: number;
	GeographicLatitude: number;
	GlobalShadows: boolean;
	OutdoorAmbient: Color3;
	Outlines: boolean;
	TimeOfDay: string;
	GetMinutesAfterMidnight(): number;
	GetMoonDirection(): Vector3;
	GetMoonPhase(): number;
	GetSunDirection(): Vector3;
	SetMinutesAfterMidnight(minutes: number): void;
	LightingChanged: RBXScriptSignal<(skyboxChanged: boolean) => void>;
}
type Lighting = Rbx_Lighting & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Lighting"): this is Lighting;
	FindFirstAncestorOfClass(className: "Lighting"): Lighting | undefined;
	FindFirstAncestorWhichIsA(className: "Lighting"): Lighting | undefined;
	FindFirstChildOfClass(className: "Lighting"): Lighting | undefined;
	FindFirstAncestorWhichIsA(className: "Lighting"): Lighting | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "Lighting"): Lighting;
}

// LocalizationService
interface Rbx_LocalizationService extends Rbx_Instance {
	readonly RobloxLocaleId: string;
	readonly SystemLocaleId: string;
	GetCorescriptLocalizations(): Array<Instance>;
	GetTranslatorForPlayer(player: Instance): Instance | undefined;
}
type LocalizationService = Rbx_LocalizationService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "LocalizationService"): this is LocalizationService;
	FindFirstAncestorOfClass(className: "LocalizationService"): LocalizationService | undefined;
	FindFirstAncestorWhichIsA(className: "LocalizationService"): LocalizationService | undefined;
	FindFirstChildOfClass(className: "LocalizationService"): LocalizationService | undefined;
	FindFirstAncestorWhichIsA(className: "LocalizationService"): LocalizationService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "LocalizationService"): LocalizationService;
}

// LocalizationTable
interface Rbx_LocalizationTable extends Rbx_Instance {
	SourceLocaleId: string;
	GetEntries(): Array<any>;
	GetTranslator(localeId: string): Instance | undefined;
	RemoveEntry(key: string, source: string, context: string): void;
	RemoveEntryValue(key: string, source: string, context: string, localeId: string): void;
	RemoveTargetLocale(localeId: string): void;
	SetEntries(entries?: any): void;
	SetEntryContext(key: string, source: string, context: string, newContext: string): void;
	SetEntryExample(key: string, source: string, context: string, example: string): void;
	SetEntryKey(key: string, source: string, context: string, newKey: string): void;
	SetEntrySource(key: string, source: string, context: string, newSource: string): void;
	SetEntryValue(key: string, source: string, context: string, localeId: string, text: string): void;
}
interface LocalizationTable extends Rbx_LocalizationTable, AnyIndex { }
declare class LocalizationTable {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "LocalizationTable"): this is LocalizationTable;
	FindFirstAncestorOfClass(className: "LocalizationTable"): LocalizationTable | undefined;
	FindFirstAncestorWhichIsA(className: "LocalizationTable"): LocalizationTable | undefined;
	FindFirstChildOfClass(className: "LocalizationTable"): LocalizationTable | undefined;
	FindFirstAncestorWhichIsA(className: "LocalizationTable"): LocalizationTable | undefined;
}

// LogService
interface Rbx_LogService extends Rbx_Instance {
	GetLogHistory(): Array<any>;
	MessageOut: RBXScriptSignal<(message: string, messageType: Enum.MessageType) => void>;
}
type LogService = Rbx_LogService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "LogService"): this is LogService;
	FindFirstAncestorOfClass(className: "LogService"): LogService | undefined;
	FindFirstAncestorWhichIsA(className: "LogService"): LogService | undefined;
	FindFirstChildOfClass(className: "LogService"): LogService | undefined;
	FindFirstAncestorWhichIsA(className: "LogService"): LogService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "LogService"): LogService;
}

// LoginService
interface Rbx_LoginService extends Rbx_Instance {
}
type LoginService = Rbx_LoginService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "LoginService"): this is LoginService;
	FindFirstAncestorOfClass(className: "LoginService"): LoginService | undefined;
	FindFirstAncestorWhichIsA(className: "LoginService"): LoginService | undefined;
	FindFirstChildOfClass(className: "LoginService"): LoginService | undefined;
	FindFirstAncestorWhichIsA(className: "LoginService"): LoginService | undefined;
}

// LuaSettings
interface Rbx_LuaSettings extends Rbx_Instance {
	AreScriptStartsReported: boolean;
	DefaultWaitTime: number;
	GcFrequency: number;
	GcLimit: number;
	GcPause: number;
	GcStepMul: number;
	WaitingThreadsBudget: number;
}
type LuaSettings = Rbx_LuaSettings & AnyIndex;
interface Rbx_Instance {
	IsA(className: "LuaSettings"): this is LuaSettings;
	FindFirstAncestorOfClass(className: "LuaSettings"): LuaSettings | undefined;
	FindFirstAncestorWhichIsA(className: "LuaSettings"): LuaSettings | undefined;
	FindFirstChildOfClass(className: "LuaSettings"): LuaSettings | undefined;
	FindFirstAncestorWhichIsA(className: "LuaSettings"): LuaSettings | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "LuaSettings"): LuaSettings;
}

// LuaSourceContainer
interface Rbx_LuaSourceContainer extends Rbx_Instance {
	CurrentEditor: Instance | undefined;
}
interface LuaSourceContainer extends Rbx_LuaSourceContainer, AnyIndex { }
declare class LuaSourceContainer {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "LuaSourceContainer"): this is LuaSourceContainer;
	FindFirstAncestorOfClass(className: "LuaSourceContainer"): LuaSourceContainer | undefined;
	FindFirstAncestorWhichIsA(className: "LuaSourceContainer"): LuaSourceContainer | undefined;
	FindFirstChildOfClass(className: "LuaSourceContainer"): LuaSourceContainer | undefined;
	FindFirstAncestorWhichIsA(className: "LuaSourceContainer"): LuaSourceContainer | undefined;
}

// BaseScript
interface Rbx_BaseScript extends Rbx_LuaSourceContainer {
	Disabled: boolean;
	LinkedSource: string;
}
interface BaseScript extends Rbx_BaseScript, AnyIndex { }
declare class BaseScript {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BaseScript"): this is BaseScript;
	FindFirstAncestorOfClass(className: "BaseScript"): BaseScript | undefined;
	FindFirstAncestorWhichIsA(className: "BaseScript"): BaseScript | undefined;
	FindFirstChildOfClass(className: "BaseScript"): BaseScript | undefined;
	FindFirstAncestorWhichIsA(className: "BaseScript"): BaseScript | undefined;
}

// CoreScript
interface Rbx_CoreScript extends Rbx_BaseScript {
}
interface CoreScript extends Rbx_CoreScript, AnyIndex { }
declare class CoreScript {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "CoreScript"): this is CoreScript;
	FindFirstAncestorOfClass(className: "CoreScript"): CoreScript | undefined;
	FindFirstAncestorWhichIsA(className: "CoreScript"): CoreScript | undefined;
	FindFirstChildOfClass(className: "CoreScript"): CoreScript | undefined;
	FindFirstAncestorWhichIsA(className: "CoreScript"): CoreScript | undefined;
}

// Script
interface Rbx_Script extends Rbx_BaseScript {
}
interface Script extends Rbx_Script, AnyIndex { }
declare class Script {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Script"): this is Script;
	FindFirstAncestorOfClass(className: "Script"): Script | undefined;
	FindFirstAncestorWhichIsA(className: "Script"): Script | undefined;
	FindFirstChildOfClass(className: "Script"): Script | undefined;
	FindFirstAncestorWhichIsA(className: "Script"): Script | undefined;
}

// LocalScript
interface Rbx_LocalScript extends Rbx_Script {
}
interface LocalScript extends Rbx_LocalScript, AnyIndex { }
declare class LocalScript {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "LocalScript"): this is LocalScript;
	FindFirstAncestorOfClass(className: "LocalScript"): LocalScript | undefined;
	FindFirstAncestorWhichIsA(className: "LocalScript"): LocalScript | undefined;
	FindFirstChildOfClass(className: "LocalScript"): LocalScript | undefined;
	FindFirstAncestorWhichIsA(className: "LocalScript"): LocalScript | undefined;
}

// ModuleScript
interface Rbx_ModuleScript extends Rbx_LuaSourceContainer {
	LinkedSource: string;
}
interface ModuleScript extends Rbx_ModuleScript, AnyIndex { }
declare class ModuleScript {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ModuleScript"): this is ModuleScript;
	FindFirstAncestorOfClass(className: "ModuleScript"): ModuleScript | undefined;
	FindFirstAncestorWhichIsA(className: "ModuleScript"): ModuleScript | undefined;
	FindFirstChildOfClass(className: "ModuleScript"): ModuleScript | undefined;
	FindFirstAncestorWhichIsA(className: "ModuleScript"): ModuleScript | undefined;
}

// LuaWebService
interface Rbx_LuaWebService extends Rbx_Instance {
}
type LuaWebService = Rbx_LuaWebService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "LuaWebService"): this is LuaWebService;
	FindFirstAncestorOfClass(className: "LuaWebService"): LuaWebService | undefined;
	FindFirstAncestorWhichIsA(className: "LuaWebService"): LuaWebService | undefined;
	FindFirstChildOfClass(className: "LuaWebService"): LuaWebService | undefined;
	FindFirstAncestorWhichIsA(className: "LuaWebService"): LuaWebService | undefined;
}

// MarketplaceService
interface Rbx_MarketplaceService extends Rbx_Instance {
	PromptGamePassPurchase(player: Instance, gamePassId: number): void;
	PromptProductPurchase(player: Instance, productId: number, equipIfPurchased?: boolean, currencyType?: Enum.CurrencyType): void;
	PromptPurchase(player: Instance, assetId: number, equipIfPurchased?: boolean, currencyType?: Enum.CurrencyType): void;
	GetDeveloperProductsAsync(): Instance | undefined;
	GetProductInfo(assetId: number, infoType?: Enum.InfoType): object;
	PlayerOwnsAsset(player: Instance, assetId: number): boolean;
	UserOwnsGamePassAsync(userId: number, gamePassId: number): boolean;
	PromptGamePassPurchaseFinished: RBXScriptSignal<(player: Instance, gamePassId: number, wasPurchased: boolean) => void>;
	PromptPurchaseFinished: RBXScriptSignal<(player: Instance, assetId: number, isPurchased: boolean) => void>;
	ProcessReceipt: (receiptInfo: object) => void;
}
type MarketplaceService = Rbx_MarketplaceService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "MarketplaceService"): this is MarketplaceService;
	FindFirstAncestorOfClass(className: "MarketplaceService"): MarketplaceService | undefined;
	FindFirstAncestorWhichIsA(className: "MarketplaceService"): MarketplaceService | undefined;
	FindFirstChildOfClass(className: "MarketplaceService"): MarketplaceService | undefined;
	FindFirstAncestorWhichIsA(className: "MarketplaceService"): MarketplaceService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "MarketplaceService"): MarketplaceService;
}

// Message
interface Rbx_Message extends Rbx_Instance {
	Text: string;
}
interface Message extends Rbx_Message, AnyIndex { }
declare class Message {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Message"): this is Message;
	FindFirstAncestorOfClass(className: "Message"): Message | undefined;
	FindFirstAncestorWhichIsA(className: "Message"): Message | undefined;
	FindFirstChildOfClass(className: "Message"): Message | undefined;
	FindFirstAncestorWhichIsA(className: "Message"): Message | undefined;
}

// Hint
interface Rbx_Hint extends Rbx_Message {
}
interface Hint extends Rbx_Hint, AnyIndex { }
declare class Hint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Hint"): this is Hint;
	FindFirstAncestorOfClass(className: "Hint"): Hint | undefined;
	FindFirstAncestorWhichIsA(className: "Hint"): Hint | undefined;
	FindFirstChildOfClass(className: "Hint"): Hint | undefined;
	FindFirstAncestorWhichIsA(className: "Hint"): Hint | undefined;
}

// Mouse
interface Rbx_Mouse extends Rbx_Instance {
	readonly Hit: CFrame;
	Icon: string;
	readonly Origin: CFrame;
	readonly Target: Instance | undefined;
	TargetFilter: Instance | undefined;
	readonly TargetSurface: Enum.NormalId;
	readonly UnitRay: Ray;
	readonly ViewSizeX: number;
	readonly ViewSizeY: number;
	readonly X: number;
	readonly Y: number;
	Button1Down: RBXScriptSignal<() => void>;
	Button1Up: RBXScriptSignal<() => void>;
	Button2Down: RBXScriptSignal<() => void>;
	Button2Up: RBXScriptSignal<() => void>;
	Idle: RBXScriptSignal<() => void>;
	Move: RBXScriptSignal<() => void>;
	WheelBackward: RBXScriptSignal<() => void>;
	WheelForward: RBXScriptSignal<() => void>;
}
interface Mouse extends Rbx_Mouse, AnyIndex { }
declare class Mouse {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Mouse"): this is Mouse;
	FindFirstAncestorOfClass(className: "Mouse"): Mouse | undefined;
	FindFirstAncestorWhichIsA(className: "Mouse"): Mouse | undefined;
	FindFirstChildOfClass(className: "Mouse"): Mouse | undefined;
	FindFirstAncestorWhichIsA(className: "Mouse"): Mouse | undefined;
}

// PlayerMouse
interface Rbx_PlayerMouse extends Rbx_Mouse {
}
interface PlayerMouse extends Rbx_PlayerMouse, AnyIndex { }
declare class PlayerMouse {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PlayerMouse"): this is PlayerMouse;
	FindFirstAncestorOfClass(className: "PlayerMouse"): PlayerMouse | undefined;
	FindFirstAncestorWhichIsA(className: "PlayerMouse"): PlayerMouse | undefined;
	FindFirstChildOfClass(className: "PlayerMouse"): PlayerMouse | undefined;
	FindFirstAncestorWhichIsA(className: "PlayerMouse"): PlayerMouse | undefined;
}

// PluginMouse
interface Rbx_PluginMouse extends Rbx_Mouse {
}
interface PluginMouse extends Rbx_PluginMouse, AnyIndex { }
declare class PluginMouse {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PluginMouse"): this is PluginMouse;
	FindFirstAncestorOfClass(className: "PluginMouse"): PluginMouse | undefined;
	FindFirstAncestorWhichIsA(className: "PluginMouse"): PluginMouse | undefined;
	FindFirstChildOfClass(className: "PluginMouse"): PluginMouse | undefined;
	FindFirstAncestorWhichIsA(className: "PluginMouse"): PluginMouse | undefined;
}

// MouseService
interface Rbx_MouseService extends Rbx_Instance {
}
type MouseService = Rbx_MouseService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "MouseService"): this is MouseService;
	FindFirstAncestorOfClass(className: "MouseService"): MouseService | undefined;
	FindFirstAncestorWhichIsA(className: "MouseService"): MouseService | undefined;
	FindFirstChildOfClass(className: "MouseService"): MouseService | undefined;
	FindFirstAncestorWhichIsA(className: "MouseService"): MouseService | undefined;
}

// NetworkMarker
interface Rbx_NetworkMarker extends Rbx_Instance {
	Received: RBXScriptSignal<() => void>;
}
interface NetworkMarker extends Rbx_NetworkMarker, AnyIndex { }
declare class NetworkMarker {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "NetworkMarker"): this is NetworkMarker;
	FindFirstAncestorOfClass(className: "NetworkMarker"): NetworkMarker | undefined;
	FindFirstAncestorWhichIsA(className: "NetworkMarker"): NetworkMarker | undefined;
	FindFirstChildOfClass(className: "NetworkMarker"): NetworkMarker | undefined;
	FindFirstAncestorWhichIsA(className: "NetworkMarker"): NetworkMarker | undefined;
}

// NetworkPeer
interface Rbx_NetworkPeer extends Rbx_Instance {
}
interface NetworkPeer extends Rbx_NetworkPeer, AnyIndex { }
declare class NetworkPeer {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "NetworkPeer"): this is NetworkPeer;
	FindFirstAncestorOfClass(className: "NetworkPeer"): NetworkPeer | undefined;
	FindFirstAncestorWhichIsA(className: "NetworkPeer"): NetworkPeer | undefined;
	FindFirstChildOfClass(className: "NetworkPeer"): NetworkPeer | undefined;
	FindFirstAncestorWhichIsA(className: "NetworkPeer"): NetworkPeer | undefined;
}

// NetworkClient
interface Rbx_NetworkClient extends Rbx_NetworkPeer {
	Ticket: string;
	ConnectionAccepted: RBXScriptSignal<(peer: string, replicator: Instance) => void>;
	ConnectionFailed: RBXScriptSignal<(peer: string, code: number, reason: string) => void>;
	ConnectionRejected: RBXScriptSignal<(peer: string) => void>;
}
type NetworkClient = Rbx_NetworkClient & AnyIndex;
interface Rbx_Instance {
	IsA(className: "NetworkClient"): this is NetworkClient;
	FindFirstAncestorOfClass(className: "NetworkClient"): NetworkClient | undefined;
	FindFirstAncestorWhichIsA(className: "NetworkClient"): NetworkClient | undefined;
	FindFirstChildOfClass(className: "NetworkClient"): NetworkClient | undefined;
	FindFirstAncestorWhichIsA(className: "NetworkClient"): NetworkClient | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "NetworkClient"): NetworkClient;
}

// NetworkServer
interface Rbx_NetworkServer extends Rbx_NetworkPeer {
	readonly Port: number;
}
type NetworkServer = Rbx_NetworkServer & AnyIndex;
interface Rbx_Instance {
	IsA(className: "NetworkServer"): this is NetworkServer;
	FindFirstAncestorOfClass(className: "NetworkServer"): NetworkServer | undefined;
	FindFirstAncestorWhichIsA(className: "NetworkServer"): NetworkServer | undefined;
	FindFirstChildOfClass(className: "NetworkServer"): NetworkServer | undefined;
	FindFirstAncestorWhichIsA(className: "NetworkServer"): NetworkServer | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "NetworkServer"): NetworkServer;
}

// NetworkReplicator
interface Rbx_NetworkReplicator extends Rbx_Instance {
	GetPlayer(): Instance | undefined;
}
interface NetworkReplicator extends Rbx_NetworkReplicator, AnyIndex { }
declare class NetworkReplicator {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "NetworkReplicator"): this is NetworkReplicator;
	FindFirstAncestorOfClass(className: "NetworkReplicator"): NetworkReplicator | undefined;
	FindFirstAncestorWhichIsA(className: "NetworkReplicator"): NetworkReplicator | undefined;
	FindFirstChildOfClass(className: "NetworkReplicator"): NetworkReplicator | undefined;
	FindFirstAncestorWhichIsA(className: "NetworkReplicator"): NetworkReplicator | undefined;
}

// ClientReplicator
interface Rbx_ClientReplicator extends Rbx_NetworkReplicator {
}
interface ClientReplicator extends Rbx_ClientReplicator, AnyIndex { }
declare class ClientReplicator {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ClientReplicator"): this is ClientReplicator;
	FindFirstAncestorOfClass(className: "ClientReplicator"): ClientReplicator | undefined;
	FindFirstAncestorWhichIsA(className: "ClientReplicator"): ClientReplicator | undefined;
	FindFirstChildOfClass(className: "ClientReplicator"): ClientReplicator | undefined;
	FindFirstAncestorWhichIsA(className: "ClientReplicator"): ClientReplicator | undefined;
}

// ServerReplicator
interface Rbx_ServerReplicator extends Rbx_NetworkReplicator {
}
interface ServerReplicator extends Rbx_ServerReplicator, AnyIndex { }
declare class ServerReplicator {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ServerReplicator"): this is ServerReplicator;
	FindFirstAncestorOfClass(className: "ServerReplicator"): ServerReplicator | undefined;
	FindFirstAncestorWhichIsA(className: "ServerReplicator"): ServerReplicator | undefined;
	FindFirstChildOfClass(className: "ServerReplicator"): ServerReplicator | undefined;
	FindFirstAncestorWhichIsA(className: "ServerReplicator"): ServerReplicator | undefined;
}

// NetworkSettings
interface Rbx_NetworkSettings extends Rbx_Instance {
	ArePhysicsRejectionsReported: boolean;
	ClientPhysicsSendRate: number;
	DataGCRate: number;
	DataMtuAdjust: number;
	DataSendPriority: Enum.PacketPriority;
	DataSendRate: number;
	IncommingReplicationLag: number;
	IsQueueErrorComputed: boolean;
	NetworkOwnerRate: number;
	PhysicsMtuAdjust: number;
	PhysicsSendPriority: Enum.PacketPriority;
	PhysicsSendRate: number;
	PreferredClientPort: number;
	PrintBits: boolean;
	PrintEvents: boolean;
	PrintFilters: boolean;
	PrintInstances: boolean;
	PrintPhysicsErrors: boolean;
	PrintProperties: boolean;
	PrintSplitMessage: boolean;
	PrintStreamInstanceQuota: boolean;
	PrintTouches: boolean;
	ReceiveRate: number;
	RenderStreamedRegions: boolean;
	ShowActiveAnimationAsset: boolean;
	TouchSendRate: number;
	TrackDataTypes: boolean;
	TrackPhysicsDetails: boolean;
	UseInstancePacketCache: boolean;
	UsePhysicsPacketCache: boolean;
}
type NetworkSettings = Rbx_NetworkSettings & AnyIndex;
interface Rbx_Instance {
	IsA(className: "NetworkSettings"): this is NetworkSettings;
	FindFirstAncestorOfClass(className: "NetworkSettings"): NetworkSettings | undefined;
	FindFirstAncestorWhichIsA(className: "NetworkSettings"): NetworkSettings | undefined;
	FindFirstChildOfClass(className: "NetworkSettings"): NetworkSettings | undefined;
	FindFirstAncestorWhichIsA(className: "NetworkSettings"): NetworkSettings | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "NetworkSettings"): NetworkSettings;
}

// NotificationService
interface Rbx_NotificationService extends Rbx_Instance {
}
type NotificationService = Rbx_NotificationService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "NotificationService"): this is NotificationService;
	FindFirstAncestorOfClass(className: "NotificationService"): NotificationService | undefined;
	FindFirstAncestorWhichIsA(className: "NotificationService"): NotificationService | undefined;
	FindFirstChildOfClass(className: "NotificationService"): NotificationService | undefined;
	FindFirstAncestorWhichIsA(className: "NotificationService"): NotificationService | undefined;
}

// PVInstance
interface Rbx_PVInstance extends Rbx_Instance {
}
interface PVInstance extends Rbx_PVInstance, AnyIndex { }
declare class PVInstance {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PVInstance"): this is PVInstance;
	FindFirstAncestorOfClass(className: "PVInstance"): PVInstance | undefined;
	FindFirstAncestorWhichIsA(className: "PVInstance"): PVInstance | undefined;
	FindFirstChildOfClass(className: "PVInstance"): PVInstance | undefined;
	FindFirstAncestorWhichIsA(className: "PVInstance"): PVInstance | undefined;
}

// BasePart
interface Rbx_BasePart extends Rbx_PVInstance {
	Anchored: boolean;
	BackParamA: number;
	BackParamB: number;
	BackSurface: Enum.SurfaceType;
	BackSurfaceInput: Enum.InputType;
	BottomParamA: number;
	BottomParamB: number;
	BottomSurface: Enum.SurfaceType;
	BottomSurfaceInput: Enum.InputType;
	BrickColor: BrickColor;
	CFrame: CFrame;
	CanCollide: boolean;
	readonly CenterOfMass: Vector3;
	CollisionGroupId: number;
	Color: Color3;
	CustomPhysicalProperties: PhysicalProperties;
	FrontParamA: number;
	FrontParamB: number;
	FrontSurface: Enum.SurfaceType;
	FrontSurfaceInput: Enum.InputType;
	LeftParamA: number;
	LeftParamB: number;
	LeftSurface: Enum.SurfaceType;
	LeftSurfaceInput: Enum.InputType;
	LocalTransparencyModifier: number;
	Locked: boolean;
	Material: Enum.Material;
	Orientation: Vector3;
	Position: Vector3;
	readonly ReceiveAge: number;
	Reflectance: number;
	readonly ResizeIncrement: number;
	readonly ResizeableFaces: Faces;
	RightParamA: number;
	RightParamB: number;
	RightSurface: Enum.SurfaceType;
	RightSurfaceInput: Enum.InputType;
	RotVelocity: Vector3;
	Rotation: Vector3;
	Size: Vector3;
	TopParamA: number;
	TopParamB: number;
	TopSurface: Enum.SurfaceType;
	TopSurfaceInput: Enum.InputType;
	Transparency: number;
	Velocity: Vector3;
	BreakJoints(): void;
	CanCollideWith(part: Instance): boolean;
	/** !TupleReturn */
	CanSetNetworkOwnership(): Array<any>;
	GetConnectedParts(recursive?: boolean): Array<Instance>;
	GetJoints(): Array<Instance>;
	GetMass(): number;
	GetNetworkOwner(): Instance | undefined;
	GetNetworkOwnershipAuto(): boolean;
	GetRootPart(): Instance | undefined;
	GetTouchingParts(): Array<Instance>;
	IsGrounded(): boolean;
	MakeJoints(): void;
	Resize(normalId: Enum.NormalId, deltaAmount: number): boolean;
	SetNetworkOwner(playerInstance?: Instance): void;
	SetNetworkOwnershipAuto(): void;
	TouchEnded: RBXScriptSignal<(otherPart: Instance) => void>;
	Touched: RBXScriptSignal<(otherPart: Instance) => void>;
}
interface BasePart extends Rbx_BasePart, AnyIndex { }
declare class BasePart {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BasePart"): this is BasePart;
	FindFirstAncestorOfClass(className: "BasePart"): BasePart | undefined;
	FindFirstAncestorWhichIsA(className: "BasePart"): BasePart | undefined;
	FindFirstChildOfClass(className: "BasePart"): BasePart | undefined;
	FindFirstAncestorWhichIsA(className: "BasePart"): BasePart | undefined;
}

// CornerWedgePart
interface Rbx_CornerWedgePart extends Rbx_BasePart {
}
interface CornerWedgePart extends Rbx_CornerWedgePart, AnyIndex { }
declare class CornerWedgePart {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "CornerWedgePart"): this is CornerWedgePart;
	FindFirstAncestorOfClass(className: "CornerWedgePart"): CornerWedgePart | undefined;
	FindFirstAncestorWhichIsA(className: "CornerWedgePart"): CornerWedgePart | undefined;
	FindFirstChildOfClass(className: "CornerWedgePart"): CornerWedgePart | undefined;
	FindFirstAncestorWhichIsA(className: "CornerWedgePart"): CornerWedgePart | undefined;
}

// FormFactorPart
interface Rbx_FormFactorPart extends Rbx_BasePart {
}
interface FormFactorPart extends Rbx_FormFactorPart, AnyIndex { }
declare class FormFactorPart {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "FormFactorPart"): this is FormFactorPart;
	FindFirstAncestorOfClass(className: "FormFactorPart"): FormFactorPart | undefined;
	FindFirstAncestorWhichIsA(className: "FormFactorPart"): FormFactorPart | undefined;
	FindFirstChildOfClass(className: "FormFactorPart"): FormFactorPart | undefined;
	FindFirstAncestorWhichIsA(className: "FormFactorPart"): FormFactorPart | undefined;
}

// Part
interface Rbx_Part extends Rbx_FormFactorPart {
	Shape: Enum.PartType;
}
interface Part extends Rbx_Part, AnyIndex { }
declare class Part {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Part"): this is Part;
	FindFirstAncestorOfClass(className: "Part"): Part | undefined;
	FindFirstAncestorWhichIsA(className: "Part"): Part | undefined;
	FindFirstChildOfClass(className: "Part"): Part | undefined;
	FindFirstAncestorWhichIsA(className: "Part"): Part | undefined;
}

// FlagStand
interface Rbx_FlagStand extends Rbx_Part {
	TeamColor: BrickColor;
	FlagCaptured: RBXScriptSignal<(player: Instance) => void>;
}
interface FlagStand extends Rbx_FlagStand, AnyIndex { }
declare class FlagStand {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "FlagStand"): this is FlagStand;
	FindFirstAncestorOfClass(className: "FlagStand"): FlagStand | undefined;
	FindFirstAncestorWhichIsA(className: "FlagStand"): FlagStand | undefined;
	FindFirstChildOfClass(className: "FlagStand"): FlagStand | undefined;
	FindFirstAncestorWhichIsA(className: "FlagStand"): FlagStand | undefined;
}

// Platform
interface Rbx_Platform extends Rbx_Part {
}
interface Platform extends Rbx_Platform, AnyIndex { }
declare class Platform {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Platform"): this is Platform;
	FindFirstAncestorOfClass(className: "Platform"): Platform | undefined;
	FindFirstAncestorWhichIsA(className: "Platform"): Platform | undefined;
	FindFirstChildOfClass(className: "Platform"): Platform | undefined;
	FindFirstAncestorWhichIsA(className: "Platform"): Platform | undefined;
}

// Seat
interface Rbx_Seat extends Rbx_Part {
	Disabled: boolean;
	readonly Occupant: Instance | undefined;
	Sit(humanoid: Instance): void;
}
interface Seat extends Rbx_Seat, AnyIndex { }
declare class Seat {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Seat"): this is Seat;
	FindFirstAncestorOfClass(className: "Seat"): Seat | undefined;
	FindFirstAncestorWhichIsA(className: "Seat"): Seat | undefined;
	FindFirstChildOfClass(className: "Seat"): Seat | undefined;
	FindFirstAncestorWhichIsA(className: "Seat"): Seat | undefined;
}

// SkateboardPlatform
interface Rbx_SkateboardPlatform extends Rbx_Part {
	readonly Controller: Instance | undefined;
	readonly ControllingHumanoid: Instance | undefined;
	Steer: number;
	StickyWheels: boolean;
	Throttle: number;
	ApplySpecificImpulse(impulseWorld: Vector3): void;
	Equipped: RBXScriptSignal<(humanoid: Instance, skateboardController: Instance) => void>;
	MoveStateChanged: RBXScriptSignal<(newState: Enum.MoveState, oldState: Enum.MoveState) => void>;
	Unequipped: RBXScriptSignal<(humanoid: Instance) => void>;
}
interface SkateboardPlatform extends Rbx_SkateboardPlatform, AnyIndex { }
declare class SkateboardPlatform {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SkateboardPlatform"): this is SkateboardPlatform;
	FindFirstAncestorOfClass(className: "SkateboardPlatform"): SkateboardPlatform | undefined;
	FindFirstAncestorWhichIsA(className: "SkateboardPlatform"): SkateboardPlatform | undefined;
	FindFirstChildOfClass(className: "SkateboardPlatform"): SkateboardPlatform | undefined;
	FindFirstAncestorWhichIsA(className: "SkateboardPlatform"): SkateboardPlatform | undefined;
}

// SpawnLocation
interface Rbx_SpawnLocation extends Rbx_Part {
	AllowTeamChangeOnTouch: boolean;
	Duration: number;
	Enabled: boolean;
	Neutral: boolean;
	TeamColor: BrickColor;
}
interface SpawnLocation extends Rbx_SpawnLocation, AnyIndex { }
declare class SpawnLocation {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SpawnLocation"): this is SpawnLocation;
	FindFirstAncestorOfClass(className: "SpawnLocation"): SpawnLocation | undefined;
	FindFirstAncestorWhichIsA(className: "SpawnLocation"): SpawnLocation | undefined;
	FindFirstChildOfClass(className: "SpawnLocation"): SpawnLocation | undefined;
	FindFirstAncestorWhichIsA(className: "SpawnLocation"): SpawnLocation | undefined;
}

// WedgePart
interface Rbx_WedgePart extends Rbx_FormFactorPart {
}
interface WedgePart extends Rbx_WedgePart, AnyIndex { }
declare class WedgePart {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "WedgePart"): this is WedgePart;
	FindFirstAncestorOfClass(className: "WedgePart"): WedgePart | undefined;
	FindFirstAncestorWhichIsA(className: "WedgePart"): WedgePart | undefined;
	FindFirstChildOfClass(className: "WedgePart"): WedgePart | undefined;
	FindFirstAncestorWhichIsA(className: "WedgePart"): WedgePart | undefined;
}

// MeshPart
interface Rbx_MeshPart extends Rbx_BasePart {
	CollisionFidelity: Enum.CollisionFidelity;
	readonly MeshId: string;
	TextureID: string;
}
interface MeshPart extends Rbx_MeshPart, AnyIndex { }
declare class MeshPart {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "MeshPart"): this is MeshPart;
	FindFirstAncestorOfClass(className: "MeshPart"): MeshPart | undefined;
	FindFirstAncestorWhichIsA(className: "MeshPart"): MeshPart | undefined;
	FindFirstChildOfClass(className: "MeshPart"): MeshPart | undefined;
	FindFirstAncestorWhichIsA(className: "MeshPart"): MeshPart | undefined;
}

// PartOperation
interface Rbx_PartOperation extends Rbx_BasePart {
	CollisionFidelity: Enum.CollisionFidelity;
	readonly TriangleCount: number;
	UsePartColor: boolean;
}
interface PartOperation extends Rbx_PartOperation, AnyIndex { }
declare class PartOperation {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PartOperation"): this is PartOperation;
	FindFirstAncestorOfClass(className: "PartOperation"): PartOperation | undefined;
	FindFirstAncestorWhichIsA(className: "PartOperation"): PartOperation | undefined;
	FindFirstChildOfClass(className: "PartOperation"): PartOperation | undefined;
	FindFirstAncestorWhichIsA(className: "PartOperation"): PartOperation | undefined;
}

// NegateOperation
interface Rbx_NegateOperation extends Rbx_PartOperation {
}
interface NegateOperation extends Rbx_NegateOperation, AnyIndex { }
declare class NegateOperation {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "NegateOperation"): this is NegateOperation;
	FindFirstAncestorOfClass(className: "NegateOperation"): NegateOperation | undefined;
	FindFirstAncestorWhichIsA(className: "NegateOperation"): NegateOperation | undefined;
	FindFirstChildOfClass(className: "NegateOperation"): NegateOperation | undefined;
	FindFirstAncestorWhichIsA(className: "NegateOperation"): NegateOperation | undefined;
}

// UnionOperation
interface Rbx_UnionOperation extends Rbx_PartOperation {
}
interface UnionOperation extends Rbx_UnionOperation, AnyIndex { }
declare class UnionOperation {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UnionOperation"): this is UnionOperation;
	FindFirstAncestorOfClass(className: "UnionOperation"): UnionOperation | undefined;
	FindFirstAncestorWhichIsA(className: "UnionOperation"): UnionOperation | undefined;
	FindFirstChildOfClass(className: "UnionOperation"): UnionOperation | undefined;
	FindFirstAncestorWhichIsA(className: "UnionOperation"): UnionOperation | undefined;
}

// Terrain
interface Rbx_Terrain extends Rbx_BasePart {
	readonly MaxExtents: Region3int16;
	WaterColor: Color3;
	WaterReflectance: number;
	WaterTransparency: number;
	WaterWaveSize: number;
	WaterWaveSpeed: number;
	CellCenterToWorld(x: number, y: number, z: number): Vector3;
	CellCornerToWorld(x: number, y: number, z: number): Vector3;
	Clear(): void;
	CopyRegion(region: Region3int16): Instance | undefined;
	CountCells(): number;
	FillBall(center: Vector3, radius: number, material: Enum.Material): void;
	FillBlock(cframe: CFrame, size: Vector3, material: Enum.Material): void;
	FillRegion(region: Region3, resolution: number, material: Enum.Material): void;
	GetMaterialColor(material: Enum.Material): Color3;
	PasteRegion(region: Instance, corner: Vector3int16, pasteEmptyCells: boolean): void;
	SetMaterialColor(material: Enum.Material, value: Color3): void;
	WorldToCell(position: Vector3): Vector3;
	WorldToCellPreferEmpty(position: Vector3): Vector3;
	WorldToCellPreferSolid(position: Vector3): Vector3;
}
interface Terrain extends Rbx_Terrain, AnyIndex { }
declare class Terrain {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Terrain"): this is Terrain;
	FindFirstAncestorOfClass(className: "Terrain"): Terrain | undefined;
	FindFirstAncestorWhichIsA(className: "Terrain"): Terrain | undefined;
	FindFirstChildOfClass(className: "Terrain"): Terrain | undefined;
	FindFirstAncestorWhichIsA(className: "Terrain"): Terrain | undefined;
}

// TrussPart
interface Rbx_TrussPart extends Rbx_BasePart {
	Style: Enum.Style;
}
interface TrussPart extends Rbx_TrussPart, AnyIndex { }
declare class TrussPart {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "TrussPart"): this is TrussPart;
	FindFirstAncestorOfClass(className: "TrussPart"): TrussPart | undefined;
	FindFirstAncestorWhichIsA(className: "TrussPart"): TrussPart | undefined;
	FindFirstChildOfClass(className: "TrussPart"): TrussPart | undefined;
	FindFirstAncestorWhichIsA(className: "TrussPart"): TrussPart | undefined;
}

// VehicleSeat
interface Rbx_VehicleSeat extends Rbx_BasePart {
	readonly AreHingesDetected: number;
	Disabled: boolean;
	HeadsUpDisplay: boolean;
	MaxSpeed: number;
	readonly Occupant: Instance | undefined;
	Steer: number;
	SteerFloat: number;
	Throttle: number;
	ThrottleFloat: number;
	Torque: number;
	TurnSpeed: number;
	Sit(humanoid: Instance): void;
}
interface VehicleSeat extends Rbx_VehicleSeat, AnyIndex { }
declare class VehicleSeat {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "VehicleSeat"): this is VehicleSeat;
	FindFirstAncestorOfClass(className: "VehicleSeat"): VehicleSeat | undefined;
	FindFirstAncestorWhichIsA(className: "VehicleSeat"): VehicleSeat | undefined;
	FindFirstChildOfClass(className: "VehicleSeat"): VehicleSeat | undefined;
	FindFirstAncestorWhichIsA(className: "VehicleSeat"): VehicleSeat | undefined;
}

// Model
interface Rbx_Model extends Rbx_PVInstance {
	PrimaryPart: Instance | undefined;
	BreakJoints(): void;
	GetExtentsSize(): Vector3;
	GetPrimaryPartCFrame(): CFrame;
	MakeJoints(): void;
	MoveTo(position: Vector3): void;
	SetPrimaryPartCFrame(cframe: CFrame): void;
	TranslateBy(delta: Vector3): void;
}
interface Model extends Rbx_Model, AnyIndex { }
declare class Model {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Model"): this is Model;
	FindFirstAncestorOfClass(className: "Model"): Model | undefined;
	FindFirstAncestorWhichIsA(className: "Model"): Model | undefined;
	FindFirstChildOfClass(className: "Model"): Model | undefined;
	FindFirstAncestorWhichIsA(className: "Model"): Model | undefined;
}

// RootInstance
interface Rbx_RootInstance extends Rbx_Model {
}
interface RootInstance extends Rbx_RootInstance, AnyIndex { }
declare class RootInstance {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RootInstance"): this is RootInstance;
	FindFirstAncestorOfClass(className: "RootInstance"): RootInstance | undefined;
	FindFirstAncestorWhichIsA(className: "RootInstance"): RootInstance | undefined;
	FindFirstChildOfClass(className: "RootInstance"): RootInstance | undefined;
	FindFirstAncestorWhichIsA(className: "RootInstance"): RootInstance | undefined;
}

// Workspace
interface Rbx_Workspace extends Rbx_RootInstance {
	AllowThirdPartySales: boolean;
	CurrentCamera: Instance | undefined;
	DistributedGameTime: number;
	readonly FallenPartsDestroyHeight: number;
	readonly FilteringEnabled: boolean;
	Gravity: number;
	PGSPhysicsSolverEnabled: boolean;
	StreamingEnabled: boolean;
	/** !TupleReturn */
	FindPartOnRay(ray: Ray, ignoreDescendantsInstance?: Instance, terrainCellsAreCubes?: boolean, ignoreWater?: boolean): Array<any>;
	/** !TupleReturn */
	FindPartOnRayWithIgnoreList(ray: Ray, ignoreDescendantsTable: Array<Instance>, terrainCellsAreCubes?: boolean, ignoreWater?: boolean): Array<any>;
	/** !TupleReturn */
	FindPartOnRayWithWhitelist(ray: Ray, whitelistDescendantsTable: Array<Instance>, ignoreWater?: boolean): Array<any>;
	FindPartsInRegion3(region: Region3, ignoreDescendantsInstance?: Instance, maxParts?: number): Array<Instance>;
	FindPartsInRegion3WithIgnoreList(region: Region3, ignoreDescendantsTable: Array<Instance>, maxParts?: number): Array<Instance>;
	FindPartsInRegion3WithWhiteList(region: Region3, whitelistDescendantsTable: Array<Instance>, maxParts?: number): Array<Instance>;
	GetNumAwakeParts(): number;
	GetPhysicsThrottling(): number;
	GetRealPhysicsFPS(): number;
	IsRegion3Empty(region: Region3, ignoreDescendentsInstance?: Instance): boolean;
	IsRegion3EmptyWithIgnoreList(region: Region3, ignoreDescendentsTable: Array<Instance>): boolean;
	JoinToOutsiders(objects: Array<Instance>, jointType: Enum.JointCreationMode): void;
	PGSIsEnabled(): boolean;
	UnjoinFromOutsiders(objects: Array<Instance>): void;
}
type Workspace = Rbx_Workspace & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Workspace"): this is Workspace;
	FindFirstAncestorOfClass(className: "Workspace"): Workspace | undefined;
	FindFirstAncestorWhichIsA(className: "Workspace"): Workspace | undefined;
	FindFirstChildOfClass(className: "Workspace"): Workspace | undefined;
	FindFirstAncestorWhichIsA(className: "Workspace"): Workspace | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "Workspace"): Workspace;
}

// Status
interface Rbx_Status extends Rbx_Model {
}
interface Status extends Rbx_Status, AnyIndex { }
declare class Status {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Status"): this is Status;
	FindFirstAncestorOfClass(className: "Status"): Status | undefined;
	FindFirstAncestorWhichIsA(className: "Status"): Status | undefined;
	FindFirstChildOfClass(className: "Status"): Status | undefined;
	FindFirstAncestorWhichIsA(className: "Status"): Status | undefined;
}

// Pages
interface Rbx_Pages extends Rbx_Instance {
	readonly IsFinished: boolean;
	GetCurrentPage(): Array<any>;
	AdvanceToNextPageAsync(): void;
}
interface Pages extends Rbx_Pages, AnyIndex { }
declare class Pages {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Pages"): this is Pages;
	FindFirstAncestorOfClass(className: "Pages"): Pages | undefined;
	FindFirstAncestorWhichIsA(className: "Pages"): Pages | undefined;
	FindFirstChildOfClass(className: "Pages"): Pages | undefined;
	FindFirstAncestorWhichIsA(className: "Pages"): Pages | undefined;
}

// DataStorePages
interface Rbx_DataStorePages extends Rbx_Pages {
}
interface DataStorePages extends Rbx_DataStorePages, AnyIndex { }
declare class DataStorePages {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "DataStorePages"): this is DataStorePages;
	FindFirstAncestorOfClass(className: "DataStorePages"): DataStorePages | undefined;
	FindFirstAncestorWhichIsA(className: "DataStorePages"): DataStorePages | undefined;
	FindFirstChildOfClass(className: "DataStorePages"): DataStorePages | undefined;
	FindFirstAncestorWhichIsA(className: "DataStorePages"): DataStorePages | undefined;
}

// FriendPages
interface Rbx_FriendPages extends Rbx_Pages {
}
interface FriendPages extends Rbx_FriendPages, AnyIndex { }
declare class FriendPages {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "FriendPages"): this is FriendPages;
	FindFirstAncestorOfClass(className: "FriendPages"): FriendPages | undefined;
	FindFirstAncestorWhichIsA(className: "FriendPages"): FriendPages | undefined;
	FindFirstChildOfClass(className: "FriendPages"): FriendPages | undefined;
	FindFirstAncestorWhichIsA(className: "FriendPages"): FriendPages | undefined;
}

// InventoryPages
interface Rbx_InventoryPages extends Rbx_Pages {
}
interface InventoryPages extends Rbx_InventoryPages, AnyIndex { }
declare class InventoryPages {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "InventoryPages"): this is InventoryPages;
	FindFirstAncestorOfClass(className: "InventoryPages"): InventoryPages | undefined;
	FindFirstAncestorWhichIsA(className: "InventoryPages"): InventoryPages | undefined;
	FindFirstChildOfClass(className: "InventoryPages"): InventoryPages | undefined;
	FindFirstAncestorWhichIsA(className: "InventoryPages"): InventoryPages | undefined;
}

// StandardPages
interface Rbx_StandardPages extends Rbx_Pages {
}
interface StandardPages extends Rbx_StandardPages, AnyIndex { }
declare class StandardPages {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "StandardPages"): this is StandardPages;
	FindFirstAncestorOfClass(className: "StandardPages"): StandardPages | undefined;
	FindFirstAncestorWhichIsA(className: "StandardPages"): StandardPages | undefined;
	FindFirstChildOfClass(className: "StandardPages"): StandardPages | undefined;
	FindFirstAncestorWhichIsA(className: "StandardPages"): StandardPages | undefined;
}

// PartOperationAsset
interface Rbx_PartOperationAsset extends Rbx_Instance {
}
interface PartOperationAsset extends Rbx_PartOperationAsset, AnyIndex { }
declare class PartOperationAsset {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PartOperationAsset"): this is PartOperationAsset;
	FindFirstAncestorOfClass(className: "PartOperationAsset"): PartOperationAsset | undefined;
	FindFirstAncestorWhichIsA(className: "PartOperationAsset"): PartOperationAsset | undefined;
	FindFirstChildOfClass(className: "PartOperationAsset"): PartOperationAsset | undefined;
	FindFirstAncestorWhichIsA(className: "PartOperationAsset"): PartOperationAsset | undefined;
}

// ParticleEmitter
interface Rbx_ParticleEmitter extends Rbx_Instance {
	Acceleration: Vector3;
	Color: ColorSequence;
	Drag: number;
	EmissionDirection: Enum.NormalId;
	Enabled: boolean;
	Lifetime: NumberRange;
	LightEmission: number;
	LightInfluence: number;
	LockedToPart: boolean;
	Rate: number;
	RotSpeed: NumberRange;
	Rotation: NumberRange;
	Size: NumberSequence;
	Speed: NumberRange;
	SpreadAngle: Vector2;
	Texture: string;
	Transparency: NumberSequence;
	VelocityInheritance: number;
	ZOffset: number;
	Clear(): void;
	Emit(particleCount?: number): void;
}
interface ParticleEmitter extends Rbx_ParticleEmitter, AnyIndex { }
declare class ParticleEmitter {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ParticleEmitter"): this is ParticleEmitter;
	FindFirstAncestorOfClass(className: "ParticleEmitter"): ParticleEmitter | undefined;
	FindFirstAncestorWhichIsA(className: "ParticleEmitter"): ParticleEmitter | undefined;
	FindFirstChildOfClass(className: "ParticleEmitter"): ParticleEmitter | undefined;
	FindFirstAncestorWhichIsA(className: "ParticleEmitter"): ParticleEmitter | undefined;
}

// Path
interface Rbx_Path extends Rbx_Instance {
	readonly Status: Enum.PathStatus;
	GetWaypoints(): Array<any>;
	CheckOcclusionAsync(start: number): number;
}
interface Path extends Rbx_Path, AnyIndex { }
declare class Path {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Path"): this is Path;
	FindFirstAncestorOfClass(className: "Path"): Path | undefined;
	FindFirstAncestorWhichIsA(className: "Path"): Path | undefined;
	FindFirstChildOfClass(className: "Path"): Path | undefined;
	FindFirstAncestorWhichIsA(className: "Path"): Path | undefined;
}

// PathfindingService
interface Rbx_PathfindingService extends Rbx_Instance {
	FindPathAsync(start: Vector3, finish: Vector3): Instance | undefined;
}
type PathfindingService = Rbx_PathfindingService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "PathfindingService"): this is PathfindingService;
	FindFirstAncestorOfClass(className: "PathfindingService"): PathfindingService | undefined;
	FindFirstAncestorWhichIsA(className: "PathfindingService"): PathfindingService | undefined;
	FindFirstChildOfClass(className: "PathfindingService"): PathfindingService | undefined;
	FindFirstAncestorWhichIsA(className: "PathfindingService"): PathfindingService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "PathfindingService"): PathfindingService;
}

// PhysicsPacketCache
interface Rbx_PhysicsPacketCache extends Rbx_Instance {
}
type PhysicsPacketCache = Rbx_PhysicsPacketCache & AnyIndex;
interface Rbx_Instance {
	IsA(className: "PhysicsPacketCache"): this is PhysicsPacketCache;
	FindFirstAncestorOfClass(className: "PhysicsPacketCache"): PhysicsPacketCache | undefined;
	FindFirstAncestorWhichIsA(className: "PhysicsPacketCache"): PhysicsPacketCache | undefined;
	FindFirstChildOfClass(className: "PhysicsPacketCache"): PhysicsPacketCache | undefined;
	FindFirstAncestorWhichIsA(className: "PhysicsPacketCache"): PhysicsPacketCache | undefined;
}

// PhysicsService
interface Rbx_PhysicsService extends Rbx_Instance {
	CollisionGroupContainsPart(name: string, part: Instance): boolean;
	CollisionGroupSetCollidable(name1: string, name2: string, collidable: boolean): void;
	CollisionGroupsAreCollidable(name1: string, name2: string): boolean;
	CreateCollisionGroup(name: string): number;
	GetCollisionGroupId(name: string): number;
	GetCollisionGroupName(name: number): string;
	GetCollisionGroups(): Array<any>;
	GetMaxCollisionGroups(): number;
	RemoveCollisionGroup(name: string): void;
	RenameCollisionGroup(from: string, to: string): void;
	SetPartCollisionGroup(part: Instance, name: string): void;
}
type PhysicsService = Rbx_PhysicsService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "PhysicsService"): this is PhysicsService;
	FindFirstAncestorOfClass(className: "PhysicsService"): PhysicsService | undefined;
	FindFirstAncestorWhichIsA(className: "PhysicsService"): PhysicsService | undefined;
	FindFirstChildOfClass(className: "PhysicsService"): PhysicsService | undefined;
	FindFirstAncestorWhichIsA(className: "PhysicsService"): PhysicsService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "PhysicsService"): PhysicsService;
}

// PhysicsSettings
interface Rbx_PhysicsSettings extends Rbx_Instance {
	AllowSleep: boolean;
	AreAnchorsShown: boolean;
	AreAssembliesShown: boolean;
	AreAwakePartsHighlighted: boolean;
	AreBodyTypesShown: boolean;
	AreContactIslandsShown: boolean;
	AreContactPointsShown: boolean;
	AreJointCoordinatesShown: boolean;
	AreMechanismsShown: boolean;
	AreModelCoordsShown: boolean;
	AreOwnersShown: boolean;
	ArePartCoordsShown: boolean;
	AreRegionsShown: boolean;
	AreUnalignedPartsShown: boolean;
	AreWorldCoordsShown: boolean;
	DisableCSGv2: boolean;
	IsReceiveAgeShown: boolean;
	IsTreeShown: boolean;
	PhysicsEnvironmentalThrottle: Enum.EnviromentalPhysicsThrottle;
	ShowDecompositionGeometry: boolean;
	ThrottleAdjustTime: number;
	UseCSGv2: boolean;
}
type PhysicsSettings = Rbx_PhysicsSettings & AnyIndex;
interface Rbx_Instance {
	IsA(className: "PhysicsSettings"): this is PhysicsSettings;
	FindFirstAncestorOfClass(className: "PhysicsSettings"): PhysicsSettings | undefined;
	FindFirstAncestorWhichIsA(className: "PhysicsSettings"): PhysicsSettings | undefined;
	FindFirstChildOfClass(className: "PhysicsSettings"): PhysicsSettings | undefined;
	FindFirstAncestorWhichIsA(className: "PhysicsSettings"): PhysicsSettings | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "PhysicsSettings"): PhysicsSettings;
}

// Player
interface Rbx_Player extends Rbx_Instance {
	readonly AccountAge: number;
	AutoJumpEnabled: boolean;
	CameraMaxZoomDistance: number;
	CameraMinZoomDistance: number;
	CameraMode: Enum.CameraMode;
	CanLoadCharacterAppearance: boolean;
	CharacterAppearanceId: number;
	DevCameraOcclusionMode: Enum.DevCameraOcclusionMode;
	DevComputerCameraMode: Enum.DevComputerCameraMovementMode;
	DevComputerMovementMode: Enum.DevComputerMovementMode;
	DevEnableMouseLock: boolean;
	DevTouchCameraMode: Enum.DevTouchCameraMovementMode;
	DevTouchMovementMode: Enum.DevTouchMovementMode;
	readonly FollowUserId: number;
	HealthDisplayDistance: number;
	readonly LocaleId: string;
	readonly MembershipType: Enum.MembershipType;
	NameDisplayDistance: number;
	Neutral: boolean;
	ReplicationFocus: Instance | undefined;
	RespawnLocation: Instance | undefined;
	Team: Instance | undefined;
	TeamColor: BrickColor;
	UserId: number;
	ClearCharacterAppearance(): void;
	DistanceFromCharacter(point: Vector3): number;
	GetJoinData(): object;
	HasAppearanceLoaded(): boolean;
	Kick(message?: string): void;
	LoadCharacterAppearance(assetInstance: Instance): void;
	Move(walkDirection: Vector3, relativeToCamera?: boolean): void;
	GetFriendsOnline(maxFriends?: number): Array<any>;
	GetRankInGroup(groupId: number): number;
	GetRoleInGroup(groupId: number): string;
	IsFriendsWith(userId: number): boolean;
	IsInGroup(groupId: number): boolean;
	LoadCharacter(): void;
	Chatted: RBXScriptSignal<(message: string, recipient: Instance) => void>;
	Idled: RBXScriptSignal<(time: number) => void>;
	OnTeleport: RBXScriptSignal<(teleportState: Enum.TeleportState, placeId: number, spawnName: string) => void>;
}
interface Player extends Rbx_Player, AnyIndex { }
declare class Player {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Player"): this is Player;
	FindFirstAncestorOfClass(className: "Player"): Player | undefined;
	FindFirstAncestorWhichIsA(className: "Player"): Player | undefined;
	FindFirstChildOfClass(className: "Player"): Player | undefined;
	FindFirstAncestorWhichIsA(className: "Player"): Player | undefined;
}

// PlayerScripts
interface Rbx_PlayerScripts extends Rbx_Instance {
	ClearComputerCameraMovementModes(): void;
	ClearComputerMovementModes(): void;
	ClearTouchCameraMovementModes(): void;
	ClearTouchMovementModes(): void;
	RegisterComputerCameraMovementMode(cameraMovementMode: Enum.ComputerCameraMovementMode): void;
	RegisterComputerMovementMode(movementMode: Enum.ComputerMovementMode): void;
	RegisterTouchCameraMovementMode(cameraMovementMode: Enum.TouchCameraMovementMode): void;
	RegisterTouchMovementMode(movementMode: Enum.TouchMovementMode): void;
}
interface PlayerScripts extends Rbx_PlayerScripts, AnyIndex { }
declare class PlayerScripts {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PlayerScripts"): this is PlayerScripts;
	FindFirstAncestorOfClass(className: "PlayerScripts"): PlayerScripts | undefined;
	FindFirstAncestorWhichIsA(className: "PlayerScripts"): PlayerScripts | undefined;
	FindFirstChildOfClass(className: "PlayerScripts"): PlayerScripts | undefined;
	FindFirstAncestorWhichIsA(className: "PlayerScripts"): PlayerScripts | undefined;
}

// Players
interface Rbx_Players extends Rbx_Instance {
	readonly BubbleChat: boolean;
	CharacterAutoLoads: boolean;
	readonly ClassicChat: boolean;
	readonly LocalPlayer: Instance | undefined;
	readonly MaxPlayers: number;
	readonly PreferredPlayers: number;
	GetPlayerByUserId(userId: number): Instance | undefined;
	GetPlayerFromCharacter(character: Instance): Instance | undefined;
	GetPlayers(): Array<Instance>;
	GetCharacterAppearanceAsync(userId: number): Instance | undefined;
	GetCharacterAppearanceInfoAsync(userId: number): object;
	GetFriendsAsync(userId: number): Instance | undefined;
	GetNameFromUserIdAsync(userId: number): string;
	GetUserIdFromNameAsync(userName: string): number;
	/** !TupleReturn */
	GetUserThumbnailAsync(userId: number, thumbnailType: Enum.ThumbnailType, thumbnailSize: Enum.ThumbnailSize): Array<any>;
}
type Players = Rbx_Players & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Players"): this is Players;
	FindFirstAncestorOfClass(className: "Players"): Players | undefined;
	FindFirstAncestorWhichIsA(className: "Players"): Players | undefined;
	FindFirstChildOfClass(className: "Players"): Players | undefined;
	FindFirstAncestorWhichIsA(className: "Players"): Players | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "Players"): Players;
}

// PluginAction
interface Rbx_PluginAction extends Rbx_Instance {
	readonly ActionId: string;
	readonly StatusTip: string;
	readonly Text: string;
}
interface PluginAction extends Rbx_PluginAction, AnyIndex { }
declare class PluginAction {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PluginAction"): this is PluginAction;
	FindFirstAncestorOfClass(className: "PluginAction"): PluginAction | undefined;
	FindFirstAncestorWhichIsA(className: "PluginAction"): PluginAction | undefined;
	FindFirstChildOfClass(className: "PluginAction"): PluginAction | undefined;
	FindFirstAncestorWhichIsA(className: "PluginAction"): PluginAction | undefined;
}

// PluginGuiService
interface Rbx_PluginGuiService extends Rbx_Instance {
}
type PluginGuiService = Rbx_PluginGuiService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "PluginGuiService"): this is PluginGuiService;
	FindFirstAncestorOfClass(className: "PluginGuiService"): PluginGuiService | undefined;
	FindFirstAncestorWhichIsA(className: "PluginGuiService"): PluginGuiService | undefined;
	FindFirstChildOfClass(className: "PluginGuiService"): PluginGuiService | undefined;
	FindFirstAncestorWhichIsA(className: "PluginGuiService"): PluginGuiService | undefined;
}

// PluginManager
interface Rbx_PluginManager extends Rbx_Instance {
}
interface PluginManager extends Rbx_PluginManager, AnyIndex { }
declare class PluginManager {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PluginManager"): this is PluginManager;
	FindFirstAncestorOfClass(className: "PluginManager"): PluginManager | undefined;
	FindFirstAncestorWhichIsA(className: "PluginManager"): PluginManager | undefined;
	FindFirstChildOfClass(className: "PluginManager"): PluginManager | undefined;
	FindFirstAncestorWhichIsA(className: "PluginManager"): PluginManager | undefined;
}

// PointsService
interface Rbx_PointsService extends Rbx_Instance {
	/** !TupleReturn */
	AwardPoints(userId: number, amount: number): Array<any>;
	GetGamePointBalance(userId: number): number;
	PointsAwarded: RBXScriptSignal<(userId: number, pointsAwarded: number, userBalanceInGame: number, userTotalBalance: number) => void>;
}
type PointsService = Rbx_PointsService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "PointsService"): this is PointsService;
	FindFirstAncestorOfClass(className: "PointsService"): PointsService | undefined;
	FindFirstAncestorWhichIsA(className: "PointsService"): PointsService | undefined;
	FindFirstChildOfClass(className: "PointsService"): PointsService | undefined;
	FindFirstAncestorWhichIsA(className: "PointsService"): PointsService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "PointsService"): PointsService;
}

// Pose
interface Rbx_Pose extends Rbx_Instance {
	CFrame: CFrame;
	EasingDirection: Enum.PoseEasingDirection;
	EasingStyle: Enum.PoseEasingStyle;
	Weight: number;
	AddSubPose(pose: Instance): void;
	GetSubPoses(): Array<Instance>;
	RemoveSubPose(pose: Instance): void;
}
interface Pose extends Rbx_Pose, AnyIndex { }
declare class Pose {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Pose"): this is Pose;
	FindFirstAncestorOfClass(className: "Pose"): Pose | undefined;
	FindFirstAncestorWhichIsA(className: "Pose"): Pose | undefined;
	FindFirstChildOfClass(className: "Pose"): Pose | undefined;
	FindFirstAncestorWhichIsA(className: "Pose"): Pose | undefined;
}

// PostEffect
interface Rbx_PostEffect extends Rbx_Instance {
	Enabled: boolean;
}
interface PostEffect extends Rbx_PostEffect, AnyIndex { }
declare class PostEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PostEffect"): this is PostEffect;
	FindFirstAncestorOfClass(className: "PostEffect"): PostEffect | undefined;
	FindFirstAncestorWhichIsA(className: "PostEffect"): PostEffect | undefined;
	FindFirstChildOfClass(className: "PostEffect"): PostEffect | undefined;
	FindFirstAncestorWhichIsA(className: "PostEffect"): PostEffect | undefined;
}

// BloomEffect
interface Rbx_BloomEffect extends Rbx_PostEffect {
	Intensity: number;
	Size: number;
	Threshold: number;
}
interface BloomEffect extends Rbx_BloomEffect, AnyIndex { }
declare class BloomEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BloomEffect"): this is BloomEffect;
	FindFirstAncestorOfClass(className: "BloomEffect"): BloomEffect | undefined;
	FindFirstAncestorWhichIsA(className: "BloomEffect"): BloomEffect | undefined;
	FindFirstChildOfClass(className: "BloomEffect"): BloomEffect | undefined;
	FindFirstAncestorWhichIsA(className: "BloomEffect"): BloomEffect | undefined;
}

// BlurEffect
interface Rbx_BlurEffect extends Rbx_PostEffect {
	Size: number;
}
interface BlurEffect extends Rbx_BlurEffect, AnyIndex { }
declare class BlurEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BlurEffect"): this is BlurEffect;
	FindFirstAncestorOfClass(className: "BlurEffect"): BlurEffect | undefined;
	FindFirstAncestorWhichIsA(className: "BlurEffect"): BlurEffect | undefined;
	FindFirstChildOfClass(className: "BlurEffect"): BlurEffect | undefined;
	FindFirstAncestorWhichIsA(className: "BlurEffect"): BlurEffect | undefined;
}

// ColorCorrectionEffect
interface Rbx_ColorCorrectionEffect extends Rbx_PostEffect {
	Brightness: number;
	Contrast: number;
	Saturation: number;
	TintColor: Color3;
}
interface ColorCorrectionEffect extends Rbx_ColorCorrectionEffect, AnyIndex { }
declare class ColorCorrectionEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ColorCorrectionEffect"): this is ColorCorrectionEffect;
	FindFirstAncestorOfClass(className: "ColorCorrectionEffect"): ColorCorrectionEffect | undefined;
	FindFirstAncestorWhichIsA(className: "ColorCorrectionEffect"): ColorCorrectionEffect | undefined;
	FindFirstChildOfClass(className: "ColorCorrectionEffect"): ColorCorrectionEffect | undefined;
	FindFirstAncestorWhichIsA(className: "ColorCorrectionEffect"): ColorCorrectionEffect | undefined;
}

// SunRaysEffect
interface Rbx_SunRaysEffect extends Rbx_PostEffect {
	Intensity: number;
	Spread: number;
}
interface SunRaysEffect extends Rbx_SunRaysEffect, AnyIndex { }
declare class SunRaysEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SunRaysEffect"): this is SunRaysEffect;
	FindFirstAncestorOfClass(className: "SunRaysEffect"): SunRaysEffect | undefined;
	FindFirstAncestorWhichIsA(className: "SunRaysEffect"): SunRaysEffect | undefined;
	FindFirstChildOfClass(className: "SunRaysEffect"): SunRaysEffect | undefined;
	FindFirstAncestorWhichIsA(className: "SunRaysEffect"): SunRaysEffect | undefined;
}

// PresenceService
interface Rbx_PresenceService extends Rbx_Instance {
}
type PresenceService = Rbx_PresenceService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "PresenceService"): this is PresenceService;
	FindFirstAncestorOfClass(className: "PresenceService"): PresenceService | undefined;
	FindFirstAncestorWhichIsA(className: "PresenceService"): PresenceService | undefined;
	FindFirstChildOfClass(className: "PresenceService"): PresenceService | undefined;
	FindFirstAncestorWhichIsA(className: "PresenceService"): PresenceService | undefined;
}

// ReflectionMetadata
interface Rbx_ReflectionMetadata extends Rbx_Instance {
}
interface ReflectionMetadata extends Rbx_ReflectionMetadata, AnyIndex { }
declare class ReflectionMetadata {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadata"): this is ReflectionMetadata;
	FindFirstAncestorOfClass(className: "ReflectionMetadata"): ReflectionMetadata | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadata"): ReflectionMetadata | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadata"): ReflectionMetadata | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadata"): ReflectionMetadata | undefined;
}

// ReflectionMetadataCallbacks
interface Rbx_ReflectionMetadataCallbacks extends Rbx_Instance {
}
interface ReflectionMetadataCallbacks extends Rbx_ReflectionMetadataCallbacks, AnyIndex { }
declare class ReflectionMetadataCallbacks {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadataCallbacks"): this is ReflectionMetadataCallbacks;
	FindFirstAncestorOfClass(className: "ReflectionMetadataCallbacks"): ReflectionMetadataCallbacks | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataCallbacks"): ReflectionMetadataCallbacks | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadataCallbacks"): ReflectionMetadataCallbacks | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataCallbacks"): ReflectionMetadataCallbacks | undefined;
}

// ReflectionMetadataClasses
interface Rbx_ReflectionMetadataClasses extends Rbx_Instance {
}
interface ReflectionMetadataClasses extends Rbx_ReflectionMetadataClasses, AnyIndex { }
declare class ReflectionMetadataClasses {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadataClasses"): this is ReflectionMetadataClasses;
	FindFirstAncestorOfClass(className: "ReflectionMetadataClasses"): ReflectionMetadataClasses | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataClasses"): ReflectionMetadataClasses | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadataClasses"): ReflectionMetadataClasses | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataClasses"): ReflectionMetadataClasses | undefined;
}

// ReflectionMetadataEnums
interface Rbx_ReflectionMetadataEnums extends Rbx_Instance {
}
interface ReflectionMetadataEnums extends Rbx_ReflectionMetadataEnums, AnyIndex { }
declare class ReflectionMetadataEnums {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadataEnums"): this is ReflectionMetadataEnums;
	FindFirstAncestorOfClass(className: "ReflectionMetadataEnums"): ReflectionMetadataEnums | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataEnums"): ReflectionMetadataEnums | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadataEnums"): ReflectionMetadataEnums | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataEnums"): ReflectionMetadataEnums | undefined;
}

// ReflectionMetadataEvents
interface Rbx_ReflectionMetadataEvents extends Rbx_Instance {
}
interface ReflectionMetadataEvents extends Rbx_ReflectionMetadataEvents, AnyIndex { }
declare class ReflectionMetadataEvents {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadataEvents"): this is ReflectionMetadataEvents;
	FindFirstAncestorOfClass(className: "ReflectionMetadataEvents"): ReflectionMetadataEvents | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataEvents"): ReflectionMetadataEvents | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadataEvents"): ReflectionMetadataEvents | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataEvents"): ReflectionMetadataEvents | undefined;
}

// ReflectionMetadataFunctions
interface Rbx_ReflectionMetadataFunctions extends Rbx_Instance {
}
interface ReflectionMetadataFunctions extends Rbx_ReflectionMetadataFunctions, AnyIndex { }
declare class ReflectionMetadataFunctions {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadataFunctions"): this is ReflectionMetadataFunctions;
	FindFirstAncestorOfClass(className: "ReflectionMetadataFunctions"): ReflectionMetadataFunctions | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataFunctions"): ReflectionMetadataFunctions | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadataFunctions"): ReflectionMetadataFunctions | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataFunctions"): ReflectionMetadataFunctions | undefined;
}

// ReflectionMetadataItem
interface Rbx_ReflectionMetadataItem extends Rbx_Instance {
	Browsable: boolean;
	ClassCategory: string;
	Constraint: string;
	Deprecated: boolean;
	EditingDisabled: boolean;
	IsBackend: boolean;
	ScriptContext: string;
	UIMaximum: number;
	UIMinimum: number;
	UINumTicks: number;
	summary: string;
}
interface ReflectionMetadataItem extends Rbx_ReflectionMetadataItem, AnyIndex { }
declare class ReflectionMetadataItem {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadataItem"): this is ReflectionMetadataItem;
	FindFirstAncestorOfClass(className: "ReflectionMetadataItem"): ReflectionMetadataItem | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataItem"): ReflectionMetadataItem | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadataItem"): ReflectionMetadataItem | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataItem"): ReflectionMetadataItem | undefined;
}

// ReflectionMetadataClass
interface Rbx_ReflectionMetadataClass extends Rbx_ReflectionMetadataItem {
	ExplorerImageIndex: number;
	ExplorerOrder: number;
	Insertable: boolean;
	PreferredParent: string;
	PreferredParents: string;
}
interface ReflectionMetadataClass extends Rbx_ReflectionMetadataClass, AnyIndex { }
declare class ReflectionMetadataClass {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadataClass"): this is ReflectionMetadataClass;
	FindFirstAncestorOfClass(className: "ReflectionMetadataClass"): ReflectionMetadataClass | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataClass"): ReflectionMetadataClass | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadataClass"): ReflectionMetadataClass | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataClass"): ReflectionMetadataClass | undefined;
}

// ReflectionMetadataEnum
interface Rbx_ReflectionMetadataEnum extends Rbx_ReflectionMetadataItem {
}
interface ReflectionMetadataEnum extends Rbx_ReflectionMetadataEnum, AnyIndex { }
declare class ReflectionMetadataEnum {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadataEnum"): this is ReflectionMetadataEnum;
	FindFirstAncestorOfClass(className: "ReflectionMetadataEnum"): ReflectionMetadataEnum | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataEnum"): ReflectionMetadataEnum | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadataEnum"): ReflectionMetadataEnum | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataEnum"): ReflectionMetadataEnum | undefined;
}

// ReflectionMetadataEnumItem
interface Rbx_ReflectionMetadataEnumItem extends Rbx_ReflectionMetadataItem {
}
interface ReflectionMetadataEnumItem extends Rbx_ReflectionMetadataEnumItem, AnyIndex { }
declare class ReflectionMetadataEnumItem {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadataEnumItem"): this is ReflectionMetadataEnumItem;
	FindFirstAncestorOfClass(className: "ReflectionMetadataEnumItem"): ReflectionMetadataEnumItem | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataEnumItem"): ReflectionMetadataEnumItem | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadataEnumItem"): ReflectionMetadataEnumItem | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataEnumItem"): ReflectionMetadataEnumItem | undefined;
}

// ReflectionMetadataMember
interface Rbx_ReflectionMetadataMember extends Rbx_ReflectionMetadataItem {
}
interface ReflectionMetadataMember extends Rbx_ReflectionMetadataMember, AnyIndex { }
declare class ReflectionMetadataMember {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadataMember"): this is ReflectionMetadataMember;
	FindFirstAncestorOfClass(className: "ReflectionMetadataMember"): ReflectionMetadataMember | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataMember"): ReflectionMetadataMember | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadataMember"): ReflectionMetadataMember | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataMember"): ReflectionMetadataMember | undefined;
}

// ReflectionMetadataProperties
interface Rbx_ReflectionMetadataProperties extends Rbx_Instance {
}
interface ReflectionMetadataProperties extends Rbx_ReflectionMetadataProperties, AnyIndex { }
declare class ReflectionMetadataProperties {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadataProperties"): this is ReflectionMetadataProperties;
	FindFirstAncestorOfClass(className: "ReflectionMetadataProperties"): ReflectionMetadataProperties | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataProperties"): ReflectionMetadataProperties | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadataProperties"): ReflectionMetadataProperties | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataProperties"): ReflectionMetadataProperties | undefined;
}

// ReflectionMetadataYieldFunctions
interface Rbx_ReflectionMetadataYieldFunctions extends Rbx_Instance {
}
interface ReflectionMetadataYieldFunctions extends Rbx_ReflectionMetadataYieldFunctions, AnyIndex { }
declare class ReflectionMetadataYieldFunctions {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReflectionMetadataYieldFunctions"): this is ReflectionMetadataYieldFunctions;
	FindFirstAncestorOfClass(className: "ReflectionMetadataYieldFunctions"): ReflectionMetadataYieldFunctions | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataYieldFunctions"): ReflectionMetadataYieldFunctions | undefined;
	FindFirstChildOfClass(className: "ReflectionMetadataYieldFunctions"): ReflectionMetadataYieldFunctions | undefined;
	FindFirstAncestorWhichIsA(className: "ReflectionMetadataYieldFunctions"): ReflectionMetadataYieldFunctions | undefined;
}

// RemoteEvent
interface Rbx_RemoteEvent extends Rbx_Instance {
}
interface RemoteEvent extends Rbx_RemoteEvent, AnyIndex { }
declare class RemoteEvent {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RemoteEvent"): this is RemoteEvent;
	FindFirstAncestorOfClass(className: "RemoteEvent"): RemoteEvent | undefined;
	FindFirstAncestorWhichIsA(className: "RemoteEvent"): RemoteEvent | undefined;
	FindFirstChildOfClass(className: "RemoteEvent"): RemoteEvent | undefined;
	FindFirstAncestorWhichIsA(className: "RemoteEvent"): RemoteEvent | undefined;
}

// RemoteFunction
interface Rbx_RemoteFunction extends Rbx_Instance {
}
interface RemoteFunction extends Rbx_RemoteFunction, AnyIndex { }
declare class RemoteFunction {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RemoteFunction"): this is RemoteFunction;
	FindFirstAncestorOfClass(className: "RemoteFunction"): RemoteFunction | undefined;
	FindFirstAncestorWhichIsA(className: "RemoteFunction"): RemoteFunction | undefined;
	FindFirstChildOfClass(className: "RemoteFunction"): RemoteFunction | undefined;
	FindFirstAncestorWhichIsA(className: "RemoteFunction"): RemoteFunction | undefined;
}

// RenderSettings
interface Rbx_RenderSettings extends Rbx_Instance {
	AutoFRMLevel: number;
	EagerBulkExecution: boolean;
	EditQualityLevel: Enum.QualityLevel;
	EnableFRM: boolean;
	ExportMergeByMaterial: boolean;
	FrameRateManager: Enum.FramerateManagerMode;
	GraphicsMode: Enum.GraphicsMode;
	MeshCacheSize: number;
	QualityLevel: Enum.QualityLevel;
	ReloadAssets: boolean;
	RenderCSGTrianglesDebug: boolean;
	ShowBoundingBoxes: boolean;
	GetMaxQualityLevel(): number;
}
type RenderSettings = Rbx_RenderSettings & AnyIndex;
interface Rbx_Instance {
	IsA(className: "RenderSettings"): this is RenderSettings;
	FindFirstAncestorOfClass(className: "RenderSettings"): RenderSettings | undefined;
	FindFirstAncestorWhichIsA(className: "RenderSettings"): RenderSettings | undefined;
	FindFirstChildOfClass(className: "RenderSettings"): RenderSettings | undefined;
	FindFirstAncestorWhichIsA(className: "RenderSettings"): RenderSettings | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "RenderSettings"): RenderSettings;
}

// ReplicatedFirst
interface Rbx_ReplicatedFirst extends Rbx_Instance {
	RemoveDefaultLoadingScreen(): void;
}
type ReplicatedFirst = Rbx_ReplicatedFirst & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ReplicatedFirst"): this is ReplicatedFirst;
	FindFirstAncestorOfClass(className: "ReplicatedFirst"): ReplicatedFirst | undefined;
	FindFirstAncestorWhichIsA(className: "ReplicatedFirst"): ReplicatedFirst | undefined;
	FindFirstChildOfClass(className: "ReplicatedFirst"): ReplicatedFirst | undefined;
	FindFirstAncestorWhichIsA(className: "ReplicatedFirst"): ReplicatedFirst | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "ReplicatedFirst"): ReplicatedFirst;
}

// ReplicatedStorage
interface Rbx_ReplicatedStorage extends Rbx_Instance {
}
type ReplicatedStorage = Rbx_ReplicatedStorage & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ReplicatedStorage"): this is ReplicatedStorage;
	FindFirstAncestorOfClass(className: "ReplicatedStorage"): ReplicatedStorage | undefined;
	FindFirstAncestorWhichIsA(className: "ReplicatedStorage"): ReplicatedStorage | undefined;
	FindFirstChildOfClass(className: "ReplicatedStorage"): ReplicatedStorage | undefined;
	FindFirstAncestorWhichIsA(className: "ReplicatedStorage"): ReplicatedStorage | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "ReplicatedStorage"): ReplicatedStorage;
}

// RobloxReplicatedStorage
interface Rbx_RobloxReplicatedStorage extends Rbx_Instance {
}
type RobloxReplicatedStorage = Rbx_RobloxReplicatedStorage & AnyIndex;
interface Rbx_Instance {
	IsA(className: "RobloxReplicatedStorage"): this is RobloxReplicatedStorage;
	FindFirstAncestorOfClass(className: "RobloxReplicatedStorage"): RobloxReplicatedStorage | undefined;
	FindFirstAncestorWhichIsA(className: "RobloxReplicatedStorage"): RobloxReplicatedStorage | undefined;
	FindFirstChildOfClass(className: "RobloxReplicatedStorage"): RobloxReplicatedStorage | undefined;
	FindFirstAncestorWhichIsA(className: "RobloxReplicatedStorage"): RobloxReplicatedStorage | undefined;
}

// RunService
interface Rbx_RunService extends Rbx_Instance {
	BindToRenderStep(name: string, priority: number, callback: Callback): void;
	IsClient(): boolean;
	IsRunMode(): boolean;
	IsRunning(): boolean;
	IsServer(): boolean;
	IsStudio(): boolean;
	UnbindFromRenderStep(name: string): void;
	Heartbeat: RBXScriptSignal<(step: number) => void>;
	RenderStepped: RBXScriptSignal<(step: number) => void>;
	Stepped: RBXScriptSignal<(time: number, step: number) => void>;
}
type RunService = Rbx_RunService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "RunService"): this is RunService;
	FindFirstAncestorOfClass(className: "RunService"): RunService | undefined;
	FindFirstAncestorWhichIsA(className: "RunService"): RunService | undefined;
	FindFirstChildOfClass(className: "RunService"): RunService | undefined;
	FindFirstAncestorWhichIsA(className: "RunService"): RunService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "RunService"): RunService;
}

// RuntimeScriptService
interface Rbx_RuntimeScriptService extends Rbx_Instance {
}
type RuntimeScriptService = Rbx_RuntimeScriptService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "RuntimeScriptService"): this is RuntimeScriptService;
	FindFirstAncestorOfClass(className: "RuntimeScriptService"): RuntimeScriptService | undefined;
	FindFirstAncestorWhichIsA(className: "RuntimeScriptService"): RuntimeScriptService | undefined;
	FindFirstChildOfClass(className: "RuntimeScriptService"): RuntimeScriptService | undefined;
	FindFirstAncestorWhichIsA(className: "RuntimeScriptService"): RuntimeScriptService | undefined;
}

// ScriptContext
interface Rbx_ScriptContext extends Rbx_Instance {
	Error: RBXScriptSignal<(message: string, stackTrace: string, script: Instance) => void>;
}
type ScriptContext = Rbx_ScriptContext & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ScriptContext"): this is ScriptContext;
	FindFirstAncestorOfClass(className: "ScriptContext"): ScriptContext | undefined;
	FindFirstAncestorWhichIsA(className: "ScriptContext"): ScriptContext | undefined;
	FindFirstChildOfClass(className: "ScriptContext"): ScriptContext | undefined;
	FindFirstAncestorWhichIsA(className: "ScriptContext"): ScriptContext | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "ScriptContext"): ScriptContext;
}

// ScriptDebugger
interface Rbx_ScriptDebugger extends Rbx_Instance {
	readonly CurrentLine: number;
	readonly IsDebugging: boolean;
	readonly IsPaused: boolean;
	readonly Script: Instance | undefined;
	AddWatch(expression: string): Instance | undefined;
	GetBreakpoints(): Array<Instance>;
	GetGlobals(): object;
	GetLocals(stackFrame?: number): object;
	GetStack(): Array<any>;
	GetUpvalues(stackFrame?: number): object;
	GetWatchValue(watch: Instance): any;
	GetWatches(): Array<Instance>;
	SetBreakpoint(line: number): Instance | undefined;
	SetGlobal(name: string, value?: any): void;
	SetLocal(name: string, value?: any, stackFrame?: number): void;
	SetUpvalue(name: string, value?: any, stackFrame?: number): void;
	BreakpointAdded: RBXScriptSignal<(breakpoint: Instance) => void>;
	BreakpointRemoved: RBXScriptSignal<(breakpoint: Instance) => void>;
	EncounteredBreak: RBXScriptSignal<(line: number) => void>;
	Resuming: RBXScriptSignal<() => void>;
	WatchAdded: RBXScriptSignal<(watch: Instance) => void>;
	WatchRemoved: RBXScriptSignal<(watch: Instance) => void>;
}
interface ScriptDebugger extends Rbx_ScriptDebugger, AnyIndex { }
declare class ScriptDebugger {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ScriptDebugger"): this is ScriptDebugger;
	FindFirstAncestorOfClass(className: "ScriptDebugger"): ScriptDebugger | undefined;
	FindFirstAncestorWhichIsA(className: "ScriptDebugger"): ScriptDebugger | undefined;
	FindFirstChildOfClass(className: "ScriptDebugger"): ScriptDebugger | undefined;
	FindFirstAncestorWhichIsA(className: "ScriptDebugger"): ScriptDebugger | undefined;
}

// ScriptService
interface Rbx_ScriptService extends Rbx_Instance {
}
type ScriptService = Rbx_ScriptService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ScriptService"): this is ScriptService;
	FindFirstAncestorOfClass(className: "ScriptService"): ScriptService | undefined;
	FindFirstAncestorWhichIsA(className: "ScriptService"): ScriptService | undefined;
	FindFirstChildOfClass(className: "ScriptService"): ScriptService | undefined;
	FindFirstAncestorWhichIsA(className: "ScriptService"): ScriptService | undefined;
}

// ServerScriptService
interface Rbx_ServerScriptService extends Rbx_Instance {
	LoadStringEnabled: boolean;
}
type ServerScriptService = Rbx_ServerScriptService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ServerScriptService"): this is ServerScriptService;
	FindFirstAncestorOfClass(className: "ServerScriptService"): ServerScriptService | undefined;
	FindFirstAncestorWhichIsA(className: "ServerScriptService"): ServerScriptService | undefined;
	FindFirstChildOfClass(className: "ServerScriptService"): ServerScriptService | undefined;
	FindFirstAncestorWhichIsA(className: "ServerScriptService"): ServerScriptService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "ServerScriptService"): ServerScriptService;
}

// ServerStorage
interface Rbx_ServerStorage extends Rbx_Instance {
}
type ServerStorage = Rbx_ServerStorage & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ServerStorage"): this is ServerStorage;
	FindFirstAncestorOfClass(className: "ServerStorage"): ServerStorage | undefined;
	FindFirstAncestorWhichIsA(className: "ServerStorage"): ServerStorage | undefined;
	FindFirstChildOfClass(className: "ServerStorage"): ServerStorage | undefined;
	FindFirstAncestorWhichIsA(className: "ServerStorage"): ServerStorage | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "ServerStorage"): ServerStorage;
}

// ServiceProvider
interface Rbx_ServiceProvider extends Rbx_Instance {
	FindService(className: string): Instance | undefined;
	GetService(className: string): Instance | undefined;
	Close: RBXScriptSignal<() => void>;
	ServiceAdded: RBXScriptSignal<(service: Instance) => void>;
	ServiceRemoving: RBXScriptSignal<(service: Instance) => void>;
}
interface ServiceProvider extends Rbx_ServiceProvider, AnyIndex { }
declare class ServiceProvider {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ServiceProvider"): this is ServiceProvider;
	FindFirstAncestorOfClass(className: "ServiceProvider"): ServiceProvider | undefined;
	FindFirstAncestorWhichIsA(className: "ServiceProvider"): ServiceProvider | undefined;
	FindFirstChildOfClass(className: "ServiceProvider"): ServiceProvider | undefined;
	FindFirstAncestorWhichIsA(className: "ServiceProvider"): ServiceProvider | undefined;
}

// DataModel
interface Rbx_DataModel extends Rbx_ServiceProvider {
	readonly CreatorId: number;
	readonly CreatorType: Enum.CreatorType;
	readonly GameId: number;
	readonly GearGenreSetting: Enum.GearGenreSetting;
	readonly Genre: Enum.Genre;
	readonly JobId: string;
	readonly PlaceId: number;
	readonly PlaceVersion: number;
	readonly VIPServerId: string;
	readonly VIPServerOwnerId: number;
	readonly Workspace: Instance | undefined;
	BindToClose(callback: Callback): void;
	IsGearTypeAllowed(gearType: Enum.GearType): boolean;
	IsLoaded(): boolean;
	GraphicsQualityChangeRequest: RBXScriptSignal<(betterQuality: boolean) => void>;
	Loaded: RBXScriptSignal<() => void>;
}
interface DataModel extends Rbx_DataModel, AnyIndex { }
declare class DataModel {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "DataModel"): this is DataModel;
	FindFirstAncestorOfClass(className: "DataModel"): DataModel | undefined;
	FindFirstAncestorWhichIsA(className: "DataModel"): DataModel | undefined;
	FindFirstChildOfClass(className: "DataModel"): DataModel | undefined;
	FindFirstAncestorWhichIsA(className: "DataModel"): DataModel | undefined;
}

// GenericSettings
interface Rbx_GenericSettings extends Rbx_ServiceProvider {
}
interface GenericSettings extends Rbx_GenericSettings, AnyIndex { }
declare class GenericSettings {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GenericSettings"): this is GenericSettings;
	FindFirstAncestorOfClass(className: "GenericSettings"): GenericSettings | undefined;
	FindFirstAncestorWhichIsA(className: "GenericSettings"): GenericSettings | undefined;
	FindFirstChildOfClass(className: "GenericSettings"): GenericSettings | undefined;
	FindFirstAncestorWhichIsA(className: "GenericSettings"): GenericSettings | undefined;
}

// AnalysticsSettings
interface Rbx_AnalysticsSettings extends Rbx_GenericSettings {
}
interface AnalysticsSettings extends Rbx_AnalysticsSettings, AnyIndex { }
declare class AnalysticsSettings {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "AnalysticsSettings"): this is AnalysticsSettings;
	FindFirstAncestorOfClass(className: "AnalysticsSettings"): AnalysticsSettings | undefined;
	FindFirstAncestorWhichIsA(className: "AnalysticsSettings"): AnalysticsSettings | undefined;
	FindFirstChildOfClass(className: "AnalysticsSettings"): AnalysticsSettings | undefined;
	FindFirstAncestorWhichIsA(className: "AnalysticsSettings"): AnalysticsSettings | undefined;
}

// GlobalSettings
interface Rbx_GlobalSettings extends Rbx_GenericSettings {
	GetFFlag(name: string): boolean;
	GetFVariable(name: string): string;
}
interface GlobalSettings extends Rbx_GlobalSettings, AnyIndex { }
declare class GlobalSettings {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GlobalSettings"): this is GlobalSettings;
	FindFirstAncestorOfClass(className: "GlobalSettings"): GlobalSettings | undefined;
	FindFirstAncestorWhichIsA(className: "GlobalSettings"): GlobalSettings | undefined;
	FindFirstChildOfClass(className: "GlobalSettings"): GlobalSettings | undefined;
	FindFirstAncestorWhichIsA(className: "GlobalSettings"): GlobalSettings | undefined;
}

// UserSettings
interface Rbx_UserSettings extends Rbx_GenericSettings {
	IsUserFeatureEnabled(name: string): boolean;
	Reset(): void;
}
type UserSettings = Rbx_UserSettings & AnyIndex;
interface Rbx_Instance {
	IsA(className: "UserSettings"): this is UserSettings;
	FindFirstAncestorOfClass(className: "UserSettings"): UserSettings | undefined;
	FindFirstAncestorWhichIsA(className: "UserSettings"): UserSettings | undefined;
	FindFirstChildOfClass(className: "UserSettings"): UserSettings | undefined;
	FindFirstAncestorWhichIsA(className: "UserSettings"): UserSettings | undefined;
}

// Sky
interface Rbx_Sky extends Rbx_Instance {
	CelestialBodiesShown: boolean;
	MoonAngularSize: number;
	MoonTextureId: string;
	SkyboxBk: string;
	SkyboxDn: string;
	SkyboxFt: string;
	SkyboxLf: string;
	SkyboxRt: string;
	SkyboxUp: string;
	StarCount: number;
	SunAngularSize: number;
	SunTextureId: string;
}
interface Sky extends Rbx_Sky, AnyIndex { }
declare class Sky {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Sky"): this is Sky;
	FindFirstAncestorOfClass(className: "Sky"): Sky | undefined;
	FindFirstAncestorWhichIsA(className: "Sky"): Sky | undefined;
	FindFirstChildOfClass(className: "Sky"): Sky | undefined;
	FindFirstAncestorWhichIsA(className: "Sky"): Sky | undefined;
}

// Smoke
interface Rbx_Smoke extends Rbx_Instance {
	Color: Color3;
	Enabled: boolean;
	Opacity: number;
	RiseVelocity: number;
	Size: number;
}
interface Smoke extends Rbx_Smoke, AnyIndex { }
declare class Smoke {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Smoke"): this is Smoke;
	FindFirstAncestorOfClass(className: "Smoke"): Smoke | undefined;
	FindFirstAncestorWhichIsA(className: "Smoke"): Smoke | undefined;
	FindFirstChildOfClass(className: "Smoke"): Smoke | undefined;
	FindFirstAncestorWhichIsA(className: "Smoke"): Smoke | undefined;
}

// Sound
interface Rbx_Sound extends Rbx_Instance {
	EmitterSize: number;
	readonly IsLoaded: boolean;
	readonly IsPaused: boolean;
	readonly IsPlaying: boolean;
	Looped: boolean;
	MaxDistance: number;
	PlayOnRemove: boolean;
	readonly PlaybackLoudness: number;
	PlaybackSpeed: number;
	Playing: boolean;
	RollOffMode: Enum.RollOffMode;
	SoundGroup: Instance | undefined;
	SoundId: string;
	readonly TimeLength: number;
	TimePosition: number;
	Volume: number;
	Pause(): void;
	Play(): void;
	Resume(): void;
	Stop(): void;
	DidLoop: RBXScriptSignal<(soundId: string, numOfTimesLooped: number) => void>;
	Ended: RBXScriptSignal<(soundId: string) => void>;
	Loaded: RBXScriptSignal<(soundId: string) => void>;
	Paused: RBXScriptSignal<(soundId: string) => void>;
	Played: RBXScriptSignal<(soundId: string) => void>;
	Resumed: RBXScriptSignal<(soundId: string) => void>;
	Stopped: RBXScriptSignal<(soundId: string) => void>;
}
interface Sound extends Rbx_Sound, AnyIndex { }
declare class Sound {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Sound"): this is Sound;
	FindFirstAncestorOfClass(className: "Sound"): Sound | undefined;
	FindFirstAncestorWhichIsA(className: "Sound"): Sound | undefined;
	FindFirstChildOfClass(className: "Sound"): Sound | undefined;
	FindFirstAncestorWhichIsA(className: "Sound"): Sound | undefined;
}

// SoundEffect
interface Rbx_SoundEffect extends Rbx_Instance {
	Enabled: boolean;
	Priority: number;
}
interface SoundEffect extends Rbx_SoundEffect, AnyIndex { }
declare class SoundEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SoundEffect"): this is SoundEffect;
	FindFirstAncestorOfClass(className: "SoundEffect"): SoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "SoundEffect"): SoundEffect | undefined;
	FindFirstChildOfClass(className: "SoundEffect"): SoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "SoundEffect"): SoundEffect | undefined;
}

// ChorusSoundEffect
interface Rbx_ChorusSoundEffect extends Rbx_SoundEffect {
	Depth: number;
	Mix: number;
	Rate: number;
}
interface ChorusSoundEffect extends Rbx_ChorusSoundEffect, AnyIndex { }
declare class ChorusSoundEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ChorusSoundEffect"): this is ChorusSoundEffect;
	FindFirstAncestorOfClass(className: "ChorusSoundEffect"): ChorusSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "ChorusSoundEffect"): ChorusSoundEffect | undefined;
	FindFirstChildOfClass(className: "ChorusSoundEffect"): ChorusSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "ChorusSoundEffect"): ChorusSoundEffect | undefined;
}

// CompressorSoundEffect
interface Rbx_CompressorSoundEffect extends Rbx_SoundEffect {
	Attack: number;
	GainMakeup: number;
	Ratio: number;
	Release: number;
	SideChain: Instance | undefined;
	Threshold: number;
}
interface CompressorSoundEffect extends Rbx_CompressorSoundEffect, AnyIndex { }
declare class CompressorSoundEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "CompressorSoundEffect"): this is CompressorSoundEffect;
	FindFirstAncestorOfClass(className: "CompressorSoundEffect"): CompressorSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "CompressorSoundEffect"): CompressorSoundEffect | undefined;
	FindFirstChildOfClass(className: "CompressorSoundEffect"): CompressorSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "CompressorSoundEffect"): CompressorSoundEffect | undefined;
}

// DistortionSoundEffect
interface Rbx_DistortionSoundEffect extends Rbx_SoundEffect {
	Level: number;
}
interface DistortionSoundEffect extends Rbx_DistortionSoundEffect, AnyIndex { }
declare class DistortionSoundEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "DistortionSoundEffect"): this is DistortionSoundEffect;
	FindFirstAncestorOfClass(className: "DistortionSoundEffect"): DistortionSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "DistortionSoundEffect"): DistortionSoundEffect | undefined;
	FindFirstChildOfClass(className: "DistortionSoundEffect"): DistortionSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "DistortionSoundEffect"): DistortionSoundEffect | undefined;
}

// EchoSoundEffect
interface Rbx_EchoSoundEffect extends Rbx_SoundEffect {
	Delay: number;
	DryLevel: number;
	Feedback: number;
	WetLevel: number;
}
interface EchoSoundEffect extends Rbx_EchoSoundEffect, AnyIndex { }
declare class EchoSoundEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "EchoSoundEffect"): this is EchoSoundEffect;
	FindFirstAncestorOfClass(className: "EchoSoundEffect"): EchoSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "EchoSoundEffect"): EchoSoundEffect | undefined;
	FindFirstChildOfClass(className: "EchoSoundEffect"): EchoSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "EchoSoundEffect"): EchoSoundEffect | undefined;
}

// EqualizerSoundEffect
interface Rbx_EqualizerSoundEffect extends Rbx_SoundEffect {
	HighGain: number;
	LowGain: number;
	MidGain: number;
}
interface EqualizerSoundEffect extends Rbx_EqualizerSoundEffect, AnyIndex { }
declare class EqualizerSoundEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "EqualizerSoundEffect"): this is EqualizerSoundEffect;
	FindFirstAncestorOfClass(className: "EqualizerSoundEffect"): EqualizerSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "EqualizerSoundEffect"): EqualizerSoundEffect | undefined;
	FindFirstChildOfClass(className: "EqualizerSoundEffect"): EqualizerSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "EqualizerSoundEffect"): EqualizerSoundEffect | undefined;
}

// FlangeSoundEffect
interface Rbx_FlangeSoundEffect extends Rbx_SoundEffect {
	Depth: number;
	Mix: number;
	Rate: number;
}
interface FlangeSoundEffect extends Rbx_FlangeSoundEffect, AnyIndex { }
declare class FlangeSoundEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "FlangeSoundEffect"): this is FlangeSoundEffect;
	FindFirstAncestorOfClass(className: "FlangeSoundEffect"): FlangeSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "FlangeSoundEffect"): FlangeSoundEffect | undefined;
	FindFirstChildOfClass(className: "FlangeSoundEffect"): FlangeSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "FlangeSoundEffect"): FlangeSoundEffect | undefined;
}

// PitchShiftSoundEffect
interface Rbx_PitchShiftSoundEffect extends Rbx_SoundEffect {
	Octave: number;
}
interface PitchShiftSoundEffect extends Rbx_PitchShiftSoundEffect, AnyIndex { }
declare class PitchShiftSoundEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PitchShiftSoundEffect"): this is PitchShiftSoundEffect;
	FindFirstAncestorOfClass(className: "PitchShiftSoundEffect"): PitchShiftSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "PitchShiftSoundEffect"): PitchShiftSoundEffect | undefined;
	FindFirstChildOfClass(className: "PitchShiftSoundEffect"): PitchShiftSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "PitchShiftSoundEffect"): PitchShiftSoundEffect | undefined;
}

// ReverbSoundEffect
interface Rbx_ReverbSoundEffect extends Rbx_SoundEffect {
	DecayTime: number;
	Density: number;
	Diffusion: number;
	DryLevel: number;
	WetLevel: number;
}
interface ReverbSoundEffect extends Rbx_ReverbSoundEffect, AnyIndex { }
declare class ReverbSoundEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ReverbSoundEffect"): this is ReverbSoundEffect;
	FindFirstAncestorOfClass(className: "ReverbSoundEffect"): ReverbSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "ReverbSoundEffect"): ReverbSoundEffect | undefined;
	FindFirstChildOfClass(className: "ReverbSoundEffect"): ReverbSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "ReverbSoundEffect"): ReverbSoundEffect | undefined;
}

// TremoloSoundEffect
interface Rbx_TremoloSoundEffect extends Rbx_SoundEffect {
	Depth: number;
	Duty: number;
	Frequency: number;
}
interface TremoloSoundEffect extends Rbx_TremoloSoundEffect, AnyIndex { }
declare class TremoloSoundEffect {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "TremoloSoundEffect"): this is TremoloSoundEffect;
	FindFirstAncestorOfClass(className: "TremoloSoundEffect"): TremoloSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "TremoloSoundEffect"): TremoloSoundEffect | undefined;
	FindFirstChildOfClass(className: "TremoloSoundEffect"): TremoloSoundEffect | undefined;
	FindFirstAncestorWhichIsA(className: "TremoloSoundEffect"): TremoloSoundEffect | undefined;
}

// SoundGroup
interface Rbx_SoundGroup extends Rbx_Instance {
	Volume: number;
}
interface SoundGroup extends Rbx_SoundGroup, AnyIndex { }
declare class SoundGroup {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "SoundGroup"): this is SoundGroup;
	FindFirstAncestorOfClass(className: "SoundGroup"): SoundGroup | undefined;
	FindFirstAncestorWhichIsA(className: "SoundGroup"): SoundGroup | undefined;
	FindFirstChildOfClass(className: "SoundGroup"): SoundGroup | undefined;
	FindFirstAncestorWhichIsA(className: "SoundGroup"): SoundGroup | undefined;
}

// SoundService
interface Rbx_SoundService extends Rbx_Instance {
	AmbientReverb: Enum.ReverbType;
	DistanceFactor: number;
	DopplerScale: number;
	RespectFilteringEnabled: boolean;
	RolloffScale: number;
	/** !TupleReturn */
	GetListener(): Array<any>;
	PlayLocalSound(sound: Instance): void;
	SetListener(listenerType: Enum.ListenerType, listener: Array<any>): void;
}
type SoundService = Rbx_SoundService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "SoundService"): this is SoundService;
	FindFirstAncestorOfClass(className: "SoundService"): SoundService | undefined;
	FindFirstAncestorWhichIsA(className: "SoundService"): SoundService | undefined;
	FindFirstChildOfClass(className: "SoundService"): SoundService | undefined;
	FindFirstAncestorWhichIsA(className: "SoundService"): SoundService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "SoundService"): SoundService;
}

// Sparkles
interface Rbx_Sparkles extends Rbx_Instance {
	Color: Color3;
	Enabled: boolean;
	SparkleColor: Color3;
}
interface Sparkles extends Rbx_Sparkles, AnyIndex { }
declare class Sparkles {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Sparkles"): this is Sparkles;
	FindFirstAncestorOfClass(className: "Sparkles"): Sparkles | undefined;
	FindFirstAncestorWhichIsA(className: "Sparkles"): Sparkles | undefined;
	FindFirstChildOfClass(className: "Sparkles"): Sparkles | undefined;
	FindFirstAncestorWhichIsA(className: "Sparkles"): Sparkles | undefined;
}

// SpawnerService
interface Rbx_SpawnerService extends Rbx_Instance {
}
type SpawnerService = Rbx_SpawnerService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "SpawnerService"): this is SpawnerService;
	FindFirstAncestorOfClass(className: "SpawnerService"): SpawnerService | undefined;
	FindFirstAncestorWhichIsA(className: "SpawnerService"): SpawnerService | undefined;
	FindFirstChildOfClass(className: "SpawnerService"): SpawnerService | undefined;
	FindFirstAncestorWhichIsA(className: "SpawnerService"): SpawnerService | undefined;
}

// StarterGear
interface Rbx_StarterGear extends Rbx_Instance {
}
interface StarterGear extends Rbx_StarterGear, AnyIndex { }
declare class StarterGear {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "StarterGear"): this is StarterGear;
	FindFirstAncestorOfClass(className: "StarterGear"): StarterGear | undefined;
	FindFirstAncestorWhichIsA(className: "StarterGear"): StarterGear | undefined;
	FindFirstChildOfClass(className: "StarterGear"): StarterGear | undefined;
	FindFirstAncestorWhichIsA(className: "StarterGear"): StarterGear | undefined;
}

// StarterPlayer
interface Rbx_StarterPlayer extends Rbx_Instance {
	readonly AllowCustomAnimations: boolean;
	AutoJumpEnabled: boolean;
	CameraMaxZoomDistance: number;
	CameraMinZoomDistance: number;
	CameraMode: Enum.CameraMode;
	DevCameraOcclusionMode: Enum.DevCameraOcclusionMode;
	DevComputerCameraMovementMode: Enum.DevComputerCameraMovementMode;
	DevComputerMovementMode: Enum.DevComputerMovementMode;
	DevTouchCameraMovementMode: Enum.DevTouchCameraMovementMode;
	DevTouchMovementMode: Enum.DevTouchMovementMode;
	EnableMouseLockOption: boolean;
	HealthDisplayDistance: number;
	LoadCharacterAppearance: boolean;
	NameDisplayDistance: number;
}
type StarterPlayer = Rbx_StarterPlayer & AnyIndex;
interface Rbx_Instance {
	IsA(className: "StarterPlayer"): this is StarterPlayer;
	FindFirstAncestorOfClass(className: "StarterPlayer"): StarterPlayer | undefined;
	FindFirstAncestorWhichIsA(className: "StarterPlayer"): StarterPlayer | undefined;
	FindFirstChildOfClass(className: "StarterPlayer"): StarterPlayer | undefined;
	FindFirstAncestorWhichIsA(className: "StarterPlayer"): StarterPlayer | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "StarterPlayer"): StarterPlayer;
}

// StarterPlayerScripts
interface Rbx_StarterPlayerScripts extends Rbx_Instance {
}
interface StarterPlayerScripts extends Rbx_StarterPlayerScripts, AnyIndex { }
declare class StarterPlayerScripts {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "StarterPlayerScripts"): this is StarterPlayerScripts;
	FindFirstAncestorOfClass(className: "StarterPlayerScripts"): StarterPlayerScripts | undefined;
	FindFirstAncestorWhichIsA(className: "StarterPlayerScripts"): StarterPlayerScripts | undefined;
	FindFirstChildOfClass(className: "StarterPlayerScripts"): StarterPlayerScripts | undefined;
	FindFirstAncestorWhichIsA(className: "StarterPlayerScripts"): StarterPlayerScripts | undefined;
}

// StarterCharacterScripts
interface Rbx_StarterCharacterScripts extends Rbx_StarterPlayerScripts {
}
interface StarterCharacterScripts extends Rbx_StarterCharacterScripts, AnyIndex { }
declare class StarterCharacterScripts {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "StarterCharacterScripts"): this is StarterCharacterScripts;
	FindFirstAncestorOfClass(className: "StarterCharacterScripts"): StarterCharacterScripts | undefined;
	FindFirstAncestorWhichIsA(className: "StarterCharacterScripts"): StarterCharacterScripts | undefined;
	FindFirstChildOfClass(className: "StarterCharacterScripts"): StarterCharacterScripts | undefined;
	FindFirstAncestorWhichIsA(className: "StarterCharacterScripts"): StarterCharacterScripts | undefined;
}

// Stats
interface Rbx_Stats extends Rbx_Instance {
	readonly ContactsCount: number;
	readonly DataReceiveKbps: number;
	readonly DataSendKbps: number;
	readonly HeartbeatTimeMs: number;
	readonly InstanceCount: number;
	readonly MovingPrimitivesCount: number;
	readonly PhysicsReceiveKbps: number;
	readonly PhysicsSendKbps: number;
	readonly PhysicsStepTimeMs: number;
	readonly PrimitivesCount: number;
	GetMemoryUsageMbForTag(tag: Enum.DeveloperMemoryTag): number;
	GetTotalMemoryUsageMb(): number;
}
type Stats = Rbx_Stats & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Stats"): this is Stats;
	FindFirstAncestorOfClass(className: "Stats"): Stats | undefined;
	FindFirstAncestorWhichIsA(className: "Stats"): Stats | undefined;
	FindFirstChildOfClass(className: "Stats"): Stats | undefined;
	FindFirstAncestorWhichIsA(className: "Stats"): Stats | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "Stats"): Stats;
}

// StatsItem
interface Rbx_StatsItem extends Rbx_Instance {
}
interface StatsItem extends Rbx_StatsItem, AnyIndex { }
declare class StatsItem {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "StatsItem"): this is StatsItem;
	FindFirstAncestorOfClass(className: "StatsItem"): StatsItem | undefined;
	FindFirstAncestorWhichIsA(className: "StatsItem"): StatsItem | undefined;
	FindFirstChildOfClass(className: "StatsItem"): StatsItem | undefined;
	FindFirstAncestorWhichIsA(className: "StatsItem"): StatsItem | undefined;
}

// RunningAverageItemDouble
interface Rbx_RunningAverageItemDouble extends Rbx_StatsItem {
}
interface RunningAverageItemDouble extends Rbx_RunningAverageItemDouble, AnyIndex { }
declare class RunningAverageItemDouble {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RunningAverageItemDouble"): this is RunningAverageItemDouble;
	FindFirstAncestorOfClass(className: "RunningAverageItemDouble"): RunningAverageItemDouble | undefined;
	FindFirstAncestorWhichIsA(className: "RunningAverageItemDouble"): RunningAverageItemDouble | undefined;
	FindFirstChildOfClass(className: "RunningAverageItemDouble"): RunningAverageItemDouble | undefined;
	FindFirstAncestorWhichIsA(className: "RunningAverageItemDouble"): RunningAverageItemDouble | undefined;
}

// RunningAverageItemInt
interface Rbx_RunningAverageItemInt extends Rbx_StatsItem {
}
interface RunningAverageItemInt extends Rbx_RunningAverageItemInt, AnyIndex { }
declare class RunningAverageItemInt {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RunningAverageItemInt"): this is RunningAverageItemInt;
	FindFirstAncestorOfClass(className: "RunningAverageItemInt"): RunningAverageItemInt | undefined;
	FindFirstAncestorWhichIsA(className: "RunningAverageItemInt"): RunningAverageItemInt | undefined;
	FindFirstChildOfClass(className: "RunningAverageItemInt"): RunningAverageItemInt | undefined;
	FindFirstAncestorWhichIsA(className: "RunningAverageItemInt"): RunningAverageItemInt | undefined;
}

// RunningAverageTimeIntervalItem
interface Rbx_RunningAverageTimeIntervalItem extends Rbx_StatsItem {
}
interface RunningAverageTimeIntervalItem extends Rbx_RunningAverageTimeIntervalItem, AnyIndex { }
declare class RunningAverageTimeIntervalItem {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RunningAverageTimeIntervalItem"): this is RunningAverageTimeIntervalItem;
	FindFirstAncestorOfClass(className: "RunningAverageTimeIntervalItem"): RunningAverageTimeIntervalItem | undefined;
	FindFirstAncestorWhichIsA(className: "RunningAverageTimeIntervalItem"): RunningAverageTimeIntervalItem | undefined;
	FindFirstChildOfClass(className: "RunningAverageTimeIntervalItem"): RunningAverageTimeIntervalItem | undefined;
	FindFirstAncestorWhichIsA(className: "RunningAverageTimeIntervalItem"): RunningAverageTimeIntervalItem | undefined;
}

// TotalCountTimeIntervalItem
interface Rbx_TotalCountTimeIntervalItem extends Rbx_StatsItem {
}
interface TotalCountTimeIntervalItem extends Rbx_TotalCountTimeIntervalItem, AnyIndex { }
declare class TotalCountTimeIntervalItem {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "TotalCountTimeIntervalItem"): this is TotalCountTimeIntervalItem;
	FindFirstAncestorOfClass(className: "TotalCountTimeIntervalItem"): TotalCountTimeIntervalItem | undefined;
	FindFirstAncestorWhichIsA(className: "TotalCountTimeIntervalItem"): TotalCountTimeIntervalItem | undefined;
	FindFirstChildOfClass(className: "TotalCountTimeIntervalItem"): TotalCountTimeIntervalItem | undefined;
	FindFirstAncestorWhichIsA(className: "TotalCountTimeIntervalItem"): TotalCountTimeIntervalItem | undefined;
}

// Studio
interface Rbx_Studio extends Rbx_Instance {
	["Always Save Script Changes"]: boolean;
	["Animate Hover Over"]: boolean;
	["Auto Indent"]: boolean;
	["Auto-Save Enabled"]: boolean;
	["Auto-Save Interval (Minutes)"]: number;
	["Auto-Save Path"]: QDir;
	["Background Color"]: Color3;
	["Basic Objects Display Mode"]: Enum.ListDisplayMode;
	["Built-in Callback Color"]: Color3;
	["Camera Mouse Wheel Speed"]: number;
	["Camera Shift Speed"]: number;
	["Camera Speed"]: number;
	["Clear Output On Start"]: boolean;
	["Comment Color"]: Color3;
	DefaultScriptFileDir: QDir;
	DeprecatedObjectsShown: boolean;
	["Device Pairing Code"]: number;
	["Drag Multiple Parts As Single Part"]: boolean;
	["Enable Autocomplete"]: boolean;
	["Error Color"]: Color3;
	["Find Selection Background Color"]: Color3;
	Font: QFont;
	["Hover Animate Speed"]: Enum.HoverAnimateSpeed;
	["Hover Over Color"]: Color3;
	["Keyword Color"]: Color3;
	["Line Thickness"]: number;
	LuaDebuggerEnabled: boolean;
	["Matching Word Background Color"]: Color3;
	["Maximum Output Lines"]: number;
	["Number Color"]: Color3;
	["Only Play Audio from Window in Focus"]: boolean;
	["Operator Color"]: Color3;
	["Output Font"]: QFont;
	["Output Layout Mode"]: Enum.OutputLayoutMode;
	OverrideCoreScripts: boolean;
	OverrideCoreScriptsDir: QDir;
	PermissionLevelShown: Enum.PermissionLevelShown;
	PluginsDir: QDir;
	["Preprocessor Color"]: Color3;
	RecentSavesDir: QDir;
	["Render Throttle Percentage"]: number;
	["Respect Studio shortcuts when game has focus"]: boolean;
	RuntimeUndoBehavior: Enum.RuntimeUndoBehavior;
	ScriptTimeoutLength: number;
	["Select Color"]: Color3;
	["Select/Hover Color"]: Color3;
	["Selection Background Color"]: Color3;
	["Selection Color"]: Color3;
	["Server Audio Behavior"]: Enum.ServerAudioBehavior;
	["Show Core GUI in Explorer while Playing"]: boolean;
	["Show Diagnostics Bar"]: boolean;
	["Show Hover Over"]: boolean;
	["Show Navigation Mesh"]: boolean;
	["Show Plugin GUI Service in Explorer"]: boolean;
	["Show QT warnings in output"]: boolean;
	["Show plus button on hover in Explorer"]: boolean;
	["String Color"]: Color3;
	["Tab Width"]: number;
	["Text Color"]: Color3;
	["Text Wrapping"]: boolean;
	["UI Theme"]: Enum.UITheme;
	["Warning Color"]: Color3;
}
type Studio = Rbx_Studio & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Studio"): this is Studio;
	FindFirstAncestorOfClass(className: "Studio"): Studio | undefined;
	FindFirstAncestorWhichIsA(className: "Studio"): Studio | undefined;
	FindFirstChildOfClass(className: "Studio"): Studio | undefined;
	FindFirstAncestorWhichIsA(className: "Studio"): Studio | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "Studio"): Studio;
}

// TaskScheduler
interface Rbx_TaskScheduler extends Rbx_Instance {
	readonly SchedulerDutyCycle: number;
	readonly SchedulerRate: number;
	ThreadPoolConfig: Enum.ThreadPoolConfig;
	readonly ThreadPoolSize: number;
}
type TaskScheduler = Rbx_TaskScheduler & AnyIndex;
interface Rbx_Instance {
	IsA(className: "TaskScheduler"): this is TaskScheduler;
	FindFirstAncestorOfClass(className: "TaskScheduler"): TaskScheduler | undefined;
	FindFirstAncestorWhichIsA(className: "TaskScheduler"): TaskScheduler | undefined;
	FindFirstChildOfClass(className: "TaskScheduler"): TaskScheduler | undefined;
	FindFirstAncestorWhichIsA(className: "TaskScheduler"): TaskScheduler | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "TaskScheduler"): TaskScheduler;
}

// Team
interface Rbx_Team extends Rbx_Instance {
	AutoAssignable: boolean;
	TeamColor: BrickColor;
	GetPlayers(): Array<Instance>;
	PlayerAdded: RBXScriptSignal<(player: Instance) => void>;
	PlayerRemoved: RBXScriptSignal<(player: Instance) => void>;
}
interface Team extends Rbx_Team, AnyIndex { }
declare class Team {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Team"): this is Team;
	FindFirstAncestorOfClass(className: "Team"): Team | undefined;
	FindFirstAncestorWhichIsA(className: "Team"): Team | undefined;
	FindFirstChildOfClass(className: "Team"): Team | undefined;
	FindFirstAncestorWhichIsA(className: "Team"): Team | undefined;
}

// Teams
interface Rbx_Teams extends Rbx_Instance {
	GetTeams(): Array<Instance>;
}
type Teams = Rbx_Teams & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Teams"): this is Teams;
	FindFirstAncestorOfClass(className: "Teams"): Teams | undefined;
	FindFirstAncestorWhichIsA(className: "Teams"): Teams | undefined;
	FindFirstChildOfClass(className: "Teams"): Teams | undefined;
	FindFirstAncestorWhichIsA(className: "Teams"): Teams | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "Teams"): Teams;
}

// TeleportService
interface Rbx_TeleportService extends Rbx_Instance {
	GetLocalPlayerTeleportData(): any;
	GetTeleportSetting(setting: string): any;
	SetTeleportSetting(setting: string, value?: any): void;
	Teleport(placeId: number, player?: Instance, teleportData?: any, customLoadingScreen?: Instance): void;
	TeleportToPlaceInstance(placeId: number, instanceId: string, player?: Instance, spawnName?: string, teleportData?: any, customLoadingScreen?: Instance): void;
	TeleportToPrivateServer(placeId: number, reservedServerAccessCode: string, players: Array<Instance>, spawnName?: string, teleportData?: any, customLoadingScreen?: Instance): void;
	TeleportToSpawnByName(placeId: number, spawnName: string, player?: Instance, teleportData?: any, customLoadingScreen?: Instance): void;
	/** !TupleReturn */
	GetPlayerPlaceInstanceAsync(userId: number): Array<any>;
	ReserveServer(placeId: number): string;
	TeleportPartyAsync(placeId: number, players: Array<Instance>, teleportData?: any, customLoadingScreen?: Instance): string;
	LocalPlayerArrivedFromTeleport: RBXScriptSignal<(loadingGui: Instance, dataTable?: any) => void>;
	TeleportInitFailed: RBXScriptSignal<(player: Instance, teleportResult: Enum.TeleportResult, errorMessage: string) => void>;
}
type TeleportService = Rbx_TeleportService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "TeleportService"): this is TeleportService;
	FindFirstAncestorOfClass(className: "TeleportService"): TeleportService | undefined;
	FindFirstAncestorWhichIsA(className: "TeleportService"): TeleportService | undefined;
	FindFirstChildOfClass(className: "TeleportService"): TeleportService | undefined;
	FindFirstAncestorWhichIsA(className: "TeleportService"): TeleportService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "TeleportService"): TeleportService;
}

// TerrainRegion
interface Rbx_TerrainRegion extends Rbx_Instance {
	readonly SizeInCells: Vector3;
}
interface TerrainRegion extends Rbx_TerrainRegion, AnyIndex { }
declare class TerrainRegion {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "TerrainRegion"): this is TerrainRegion;
	FindFirstAncestorOfClass(className: "TerrainRegion"): TerrainRegion | undefined;
	FindFirstAncestorWhichIsA(className: "TerrainRegion"): TerrainRegion | undefined;
	FindFirstChildOfClass(className: "TerrainRegion"): TerrainRegion | undefined;
	FindFirstAncestorWhichIsA(className: "TerrainRegion"): TerrainRegion | undefined;
}

// TestService
interface Rbx_TestService extends Rbx_Instance {
	AutoRuns: boolean;
	Description: string;
	readonly ErrorCount: number;
	ExecuteWithStudioRun: boolean;
	Is30FpsThrottleEnabled: boolean;
	IsPhysicsEnvironmentalThrottled: boolean;
	IsSleepAllowed: boolean;
	NumberOfPlayers: number;
	SimulateSecondsLag: number;
	readonly TestCount: number;
	Timeout: number;
	readonly WarnCount: number;
	Check(condition: boolean, description: string, source?: Instance, line?: number): void;
	Checkpoint(text: string, source?: Instance, line?: number): void;
	Done(): void;
	Error(description: string, source?: Instance, line?: number): void;
	Fail(description: string, source?: Instance, line?: number): void;
	Message(text: string, source?: Instance, line?: number): void;
	Require(condition: boolean, description: string, source?: Instance, line?: number): void;
	Warn(condition: boolean, description: string, source?: Instance, line?: number): void;
	isFeatureEnabled(name: string): boolean;
	ServerCollectConditionalResult: RBXScriptSignal<(condition: boolean, text: string, script: Instance, line: number) => void>;
	ServerCollectResult: RBXScriptSignal<(text: string, script: Instance, line: number) => void>;
}
type TestService = Rbx_TestService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "TestService"): this is TestService;
	FindFirstAncestorOfClass(className: "TestService"): TestService | undefined;
	FindFirstAncestorWhichIsA(className: "TestService"): TestService | undefined;
	FindFirstChildOfClass(className: "TestService"): TestService | undefined;
	FindFirstAncestorWhichIsA(className: "TestService"): TestService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "TestService"): TestService;
}

// TextFilterResult
interface Rbx_TextFilterResult extends Rbx_Instance {
	GetChatForUserAsync(toUserId: number): string;
	GetNonChatStringForBroadcastAsync(): string;
	GetNonChatStringForUserAsync(toUserId: number): string;
}
interface TextFilterResult extends Rbx_TextFilterResult, AnyIndex { }
declare class TextFilterResult {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "TextFilterResult"): this is TextFilterResult;
	FindFirstAncestorOfClass(className: "TextFilterResult"): TextFilterResult | undefined;
	FindFirstAncestorWhichIsA(className: "TextFilterResult"): TextFilterResult | undefined;
	FindFirstChildOfClass(className: "TextFilterResult"): TextFilterResult | undefined;
	FindFirstAncestorWhichIsA(className: "TextFilterResult"): TextFilterResult | undefined;
}

// TextService
interface Rbx_TextService extends Rbx_Instance {
	GetTextSize(string: string, fontSize: number, font: Enum.Font, frameSize: Vector2): Vector2;
	FilterStringAsync(stringToFilter: string, fromUserId: number, textContext?: Enum.TextFilterContext): Instance | undefined;
}
type TextService = Rbx_TextService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "TextService"): this is TextService;
	FindFirstAncestorOfClass(className: "TextService"): TextService | undefined;
	FindFirstAncestorWhichIsA(className: "TextService"): TextService | undefined;
	FindFirstChildOfClass(className: "TextService"): TextService | undefined;
	FindFirstAncestorWhichIsA(className: "TextService"): TextService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "TextService"): TextService;
}

// ThirdPartyUserService
interface Rbx_ThirdPartyUserService extends Rbx_Instance {
}
type ThirdPartyUserService = Rbx_ThirdPartyUserService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ThirdPartyUserService"): this is ThirdPartyUserService;
	FindFirstAncestorOfClass(className: "ThirdPartyUserService"): ThirdPartyUserService | undefined;
	FindFirstAncestorWhichIsA(className: "ThirdPartyUserService"): ThirdPartyUserService | undefined;
	FindFirstChildOfClass(className: "ThirdPartyUserService"): ThirdPartyUserService | undefined;
	FindFirstAncestorWhichIsA(className: "ThirdPartyUserService"): ThirdPartyUserService | undefined;
}

// TimerService
interface Rbx_TimerService extends Rbx_Instance {
}
type TimerService = Rbx_TimerService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "TimerService"): this is TimerService;
	FindFirstAncestorOfClass(className: "TimerService"): TimerService | undefined;
	FindFirstAncestorWhichIsA(className: "TimerService"): TimerService | undefined;
	FindFirstChildOfClass(className: "TimerService"): TimerService | undefined;
	FindFirstAncestorWhichIsA(className: "TimerService"): TimerService | undefined;
}

// Toolbar
interface Rbx_Toolbar extends Rbx_Instance {
}
interface Toolbar extends Rbx_Toolbar, AnyIndex { }
declare class Toolbar {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Toolbar"): this is Toolbar;
	FindFirstAncestorOfClass(className: "Toolbar"): Toolbar | undefined;
	FindFirstAncestorWhichIsA(className: "Toolbar"): Toolbar | undefined;
	FindFirstChildOfClass(className: "Toolbar"): Toolbar | undefined;
	FindFirstAncestorWhichIsA(className: "Toolbar"): Toolbar | undefined;
}

// TouchInputService
interface Rbx_TouchInputService extends Rbx_Instance {
}
type TouchInputService = Rbx_TouchInputService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "TouchInputService"): this is TouchInputService;
	FindFirstAncestorOfClass(className: "TouchInputService"): TouchInputService | undefined;
	FindFirstAncestorWhichIsA(className: "TouchInputService"): TouchInputService | undefined;
	FindFirstChildOfClass(className: "TouchInputService"): TouchInputService | undefined;
	FindFirstAncestorWhichIsA(className: "TouchInputService"): TouchInputService | undefined;
}

// TouchTransmitter
interface Rbx_TouchTransmitter extends Rbx_Instance {
}
interface TouchTransmitter extends Rbx_TouchTransmitter, AnyIndex { }
declare class TouchTransmitter {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "TouchTransmitter"): this is TouchTransmitter;
	FindFirstAncestorOfClass(className: "TouchTransmitter"): TouchTransmitter | undefined;
	FindFirstAncestorWhichIsA(className: "TouchTransmitter"): TouchTransmitter | undefined;
	FindFirstChildOfClass(className: "TouchTransmitter"): TouchTransmitter | undefined;
	FindFirstAncestorWhichIsA(className: "TouchTransmitter"): TouchTransmitter | undefined;
}

// Trail
interface Rbx_Trail extends Rbx_Instance {
	Attachment0: Instance | undefined;
	Attachment1: Instance | undefined;
	Color: ColorSequence;
	Enabled: boolean;
	FaceCamera: boolean;
	Lifetime: number;
	LightEmission: number;
	LightInfluence: number;
	MaxLength: number;
	MinLength: number;
	Texture: string;
	TextureLength: number;
	TextureMode: Enum.TextureMode;
	Transparency: NumberSequence;
	WidthScale: NumberSequence;
	Clear(): void;
}
interface Trail extends Rbx_Trail, AnyIndex { }
declare class Trail {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Trail"): this is Trail;
	FindFirstAncestorOfClass(className: "Trail"): Trail | undefined;
	FindFirstAncestorWhichIsA(className: "Trail"): Trail | undefined;
	FindFirstChildOfClass(className: "Trail"): Trail | undefined;
	FindFirstAncestorWhichIsA(className: "Trail"): Trail | undefined;
}

// Translator
interface Rbx_Translator extends Rbx_Instance {
	readonly LocaleId: string;
	FormatByKey(key: string, args?: any): string;
	Translate(context: Instance, text: string): string;
}
interface Translator extends Rbx_Translator, AnyIndex { }
declare class Translator {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Translator"): this is Translator;
	FindFirstAncestorOfClass(className: "Translator"): Translator | undefined;
	FindFirstAncestorWhichIsA(className: "Translator"): Translator | undefined;
	FindFirstChildOfClass(className: "Translator"): Translator | undefined;
	FindFirstAncestorWhichIsA(className: "Translator"): Translator | undefined;
}

// TweenBase
interface Rbx_TweenBase extends Rbx_Instance {
	readonly PlaybackState: Enum.PlaybackState;
	Cancel(): void;
	Pause(): void;
	Play(): void;
	Completed: RBXScriptSignal<(playbackState: Enum.PlaybackState) => void>;
}
interface TweenBase extends Rbx_TweenBase, AnyIndex { }
declare class TweenBase {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "TweenBase"): this is TweenBase;
	FindFirstAncestorOfClass(className: "TweenBase"): TweenBase | undefined;
	FindFirstAncestorWhichIsA(className: "TweenBase"): TweenBase | undefined;
	FindFirstChildOfClass(className: "TweenBase"): TweenBase | undefined;
	FindFirstAncestorWhichIsA(className: "TweenBase"): TweenBase | undefined;
}

// Tween
interface Rbx_Tween extends Rbx_TweenBase {
	readonly Instance: Instance | undefined;
	readonly TweenInfo: TweenInfo;
}
interface Tween extends Rbx_Tween, AnyIndex { }
declare class Tween {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Tween"): this is Tween;
	FindFirstAncestorOfClass(className: "Tween"): Tween | undefined;
	FindFirstAncestorWhichIsA(className: "Tween"): Tween | undefined;
	FindFirstChildOfClass(className: "Tween"): Tween | undefined;
	FindFirstAncestorWhichIsA(className: "Tween"): Tween | undefined;
}

// TweenService
interface Rbx_TweenService extends Rbx_Instance {
	Create(instance: Instance, tweenInfo: TweenInfo, propertyTable: object): Instance | undefined;
}
type TweenService = Rbx_TweenService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "TweenService"): this is TweenService;
	FindFirstAncestorOfClass(className: "TweenService"): TweenService | undefined;
	FindFirstAncestorWhichIsA(className: "TweenService"): TweenService | undefined;
	FindFirstChildOfClass(className: "TweenService"): TweenService | undefined;
	FindFirstAncestorWhichIsA(className: "TweenService"): TweenService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "TweenService"): TweenService;
}

// UIBase
interface Rbx_UIBase extends Rbx_Instance {
}
interface UIBase extends Rbx_UIBase, AnyIndex { }
declare class UIBase {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UIBase"): this is UIBase;
	FindFirstAncestorOfClass(className: "UIBase"): UIBase | undefined;
	FindFirstAncestorWhichIsA(className: "UIBase"): UIBase | undefined;
	FindFirstChildOfClass(className: "UIBase"): UIBase | undefined;
	FindFirstAncestorWhichIsA(className: "UIBase"): UIBase | undefined;
}

// UIComponent
interface Rbx_UIComponent extends Rbx_UIBase {
}
interface UIComponent extends Rbx_UIComponent, AnyIndex { }
declare class UIComponent {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UIComponent"): this is UIComponent;
	FindFirstAncestorOfClass(className: "UIComponent"): UIComponent | undefined;
	FindFirstAncestorWhichIsA(className: "UIComponent"): UIComponent | undefined;
	FindFirstChildOfClass(className: "UIComponent"): UIComponent | undefined;
	FindFirstAncestorWhichIsA(className: "UIComponent"): UIComponent | undefined;
}

// UIConstraint
interface Rbx_UIConstraint extends Rbx_UIComponent {
}
interface UIConstraint extends Rbx_UIConstraint, AnyIndex { }
declare class UIConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UIConstraint"): this is UIConstraint;
	FindFirstAncestorOfClass(className: "UIConstraint"): UIConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "UIConstraint"): UIConstraint | undefined;
	FindFirstChildOfClass(className: "UIConstraint"): UIConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "UIConstraint"): UIConstraint | undefined;
}

// UIAspectRatioConstraint
interface Rbx_UIAspectRatioConstraint extends Rbx_UIConstraint {
	AspectRatio: number;
	AspectType: Enum.AspectType;
	DominantAxis: Enum.DominantAxis;
}
interface UIAspectRatioConstraint extends Rbx_UIAspectRatioConstraint, AnyIndex { }
declare class UIAspectRatioConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UIAspectRatioConstraint"): this is UIAspectRatioConstraint;
	FindFirstAncestorOfClass(className: "UIAspectRatioConstraint"): UIAspectRatioConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "UIAspectRatioConstraint"): UIAspectRatioConstraint | undefined;
	FindFirstChildOfClass(className: "UIAspectRatioConstraint"): UIAspectRatioConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "UIAspectRatioConstraint"): UIAspectRatioConstraint | undefined;
}

// UISizeConstraint
interface Rbx_UISizeConstraint extends Rbx_UIConstraint {
	MaxSize: Vector2;
	MinSize: Vector2;
}
interface UISizeConstraint extends Rbx_UISizeConstraint, AnyIndex { }
declare class UISizeConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UISizeConstraint"): this is UISizeConstraint;
	FindFirstAncestorOfClass(className: "UISizeConstraint"): UISizeConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "UISizeConstraint"): UISizeConstraint | undefined;
	FindFirstChildOfClass(className: "UISizeConstraint"): UISizeConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "UISizeConstraint"): UISizeConstraint | undefined;
}

// UITextSizeConstraint
interface Rbx_UITextSizeConstraint extends Rbx_UIConstraint {
	MaxTextSize: number;
	MinTextSize: number;
}
interface UITextSizeConstraint extends Rbx_UITextSizeConstraint, AnyIndex { }
declare class UITextSizeConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UITextSizeConstraint"): this is UITextSizeConstraint;
	FindFirstAncestorOfClass(className: "UITextSizeConstraint"): UITextSizeConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "UITextSizeConstraint"): UITextSizeConstraint | undefined;
	FindFirstChildOfClass(className: "UITextSizeConstraint"): UITextSizeConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "UITextSizeConstraint"): UITextSizeConstraint | undefined;
}

// UILayout
interface Rbx_UILayout extends Rbx_UIComponent {
}
interface UILayout extends Rbx_UILayout, AnyIndex { }
declare class UILayout {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UILayout"): this is UILayout;
	FindFirstAncestorOfClass(className: "UILayout"): UILayout | undefined;
	FindFirstAncestorWhichIsA(className: "UILayout"): UILayout | undefined;
	FindFirstChildOfClass(className: "UILayout"): UILayout | undefined;
	FindFirstAncestorWhichIsA(className: "UILayout"): UILayout | undefined;
}

// UIGridStyleLayout
interface Rbx_UIGridStyleLayout extends Rbx_UILayout {
	readonly AbsoluteContentSize: Vector2;
	FillDirection: Enum.FillDirection;
	HorizontalAlignment: Enum.HorizontalAlignment;
	SortOrder: Enum.SortOrder;
	VerticalAlignment: Enum.VerticalAlignment;
	ApplyLayout(): void;
}
interface UIGridStyleLayout extends Rbx_UIGridStyleLayout, AnyIndex { }
declare class UIGridStyleLayout {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UIGridStyleLayout"): this is UIGridStyleLayout;
	FindFirstAncestorOfClass(className: "UIGridStyleLayout"): UIGridStyleLayout | undefined;
	FindFirstAncestorWhichIsA(className: "UIGridStyleLayout"): UIGridStyleLayout | undefined;
	FindFirstChildOfClass(className: "UIGridStyleLayout"): UIGridStyleLayout | undefined;
	FindFirstAncestorWhichIsA(className: "UIGridStyleLayout"): UIGridStyleLayout | undefined;
}

// UIGridLayout
interface Rbx_UIGridLayout extends Rbx_UIGridStyleLayout {
	CellPadding: UDim2;
	CellSize: UDim2;
	FillDirectionMaxCells: number;
	StartCorner: Enum.StartCorner;
}
interface UIGridLayout extends Rbx_UIGridLayout, AnyIndex { }
declare class UIGridLayout {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UIGridLayout"): this is UIGridLayout;
	FindFirstAncestorOfClass(className: "UIGridLayout"): UIGridLayout | undefined;
	FindFirstAncestorWhichIsA(className: "UIGridLayout"): UIGridLayout | undefined;
	FindFirstChildOfClass(className: "UIGridLayout"): UIGridLayout | undefined;
	FindFirstAncestorWhichIsA(className: "UIGridLayout"): UIGridLayout | undefined;
}

// UIListLayout
interface Rbx_UIListLayout extends Rbx_UIGridStyleLayout {
	Padding: UDim;
}
interface UIListLayout extends Rbx_UIListLayout, AnyIndex { }
declare class UIListLayout {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UIListLayout"): this is UIListLayout;
	FindFirstAncestorOfClass(className: "UIListLayout"): UIListLayout | undefined;
	FindFirstAncestorWhichIsA(className: "UIListLayout"): UIListLayout | undefined;
	FindFirstChildOfClass(className: "UIListLayout"): UIListLayout | undefined;
	FindFirstAncestorWhichIsA(className: "UIListLayout"): UIListLayout | undefined;
}

// UIPageLayout
interface Rbx_UIPageLayout extends Rbx_UIGridStyleLayout {
	Animated: boolean;
	Circular: boolean;
	readonly CurrentPage: Instance | undefined;
	EasingDirection: Enum.EasingDirection;
	EasingStyle: Enum.EasingStyle;
	GamepadInputEnabled: boolean;
	Padding: UDim;
	ScrollWheelInputEnabled: boolean;
	TouchInputEnabled: boolean;
	TweenTime: number;
	JumpTo(page: Instance): void;
	JumpToIndex(index: number): void;
	Next(): void;
	Previous(): void;
	PageEnter: RBXScriptSignal<(page: Instance) => void>;
	PageLeave: RBXScriptSignal<(page: Instance) => void>;
	Stopped: RBXScriptSignal<(currentPage: Instance) => void>;
}
interface UIPageLayout extends Rbx_UIPageLayout, AnyIndex { }
declare class UIPageLayout {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UIPageLayout"): this is UIPageLayout;
	FindFirstAncestorOfClass(className: "UIPageLayout"): UIPageLayout | undefined;
	FindFirstAncestorWhichIsA(className: "UIPageLayout"): UIPageLayout | undefined;
	FindFirstChildOfClass(className: "UIPageLayout"): UIPageLayout | undefined;
	FindFirstAncestorWhichIsA(className: "UIPageLayout"): UIPageLayout | undefined;
}

// UITableLayout
interface Rbx_UITableLayout extends Rbx_UIGridStyleLayout {
	FillEmptySpaceColumns: boolean;
	FillEmptySpaceRows: boolean;
	MajorAxis: Enum.TableMajorAxis;
	Padding: UDim2;
}
interface UITableLayout extends Rbx_UITableLayout, AnyIndex { }
declare class UITableLayout {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UITableLayout"): this is UITableLayout;
	FindFirstAncestorOfClass(className: "UITableLayout"): UITableLayout | undefined;
	FindFirstAncestorWhichIsA(className: "UITableLayout"): UITableLayout | undefined;
	FindFirstChildOfClass(className: "UITableLayout"): UITableLayout | undefined;
	FindFirstAncestorWhichIsA(className: "UITableLayout"): UITableLayout | undefined;
}

// UIPadding
interface Rbx_UIPadding extends Rbx_UIComponent {
	PaddingBottom: UDim;
	PaddingLeft: UDim;
	PaddingRight: UDim;
	PaddingTop: UDim;
}
interface UIPadding extends Rbx_UIPadding, AnyIndex { }
declare class UIPadding {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UIPadding"): this is UIPadding;
	FindFirstAncestorOfClass(className: "UIPadding"): UIPadding | undefined;
	FindFirstAncestorWhichIsA(className: "UIPadding"): UIPadding | undefined;
	FindFirstChildOfClass(className: "UIPadding"): UIPadding | undefined;
	FindFirstAncestorWhichIsA(className: "UIPadding"): UIPadding | undefined;
}

// UIScale
interface Rbx_UIScale extends Rbx_UIComponent {
	Scale: number;
}
interface UIScale extends Rbx_UIScale, AnyIndex { }
declare class UIScale {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "UIScale"): this is UIScale;
	FindFirstAncestorOfClass(className: "UIScale"): UIScale | undefined;
	FindFirstAncestorWhichIsA(className: "UIScale"): UIScale | undefined;
	FindFirstChildOfClass(className: "UIScale"): UIScale | undefined;
	FindFirstAncestorWhichIsA(className: "UIScale"): UIScale | undefined;
}

// UserGameSettings
interface Rbx_UserGameSettings extends Rbx_Instance {
	ComputerCameraMovementMode: Enum.ComputerCameraMovementMode;
	ComputerMovementMode: Enum.ComputerMovementMode;
	ControlMode: Enum.ControlMode;
	GamepadCameraSensitivity: number;
	MasterVolume: number;
	MouseSensitivity: number;
	RotationType: Enum.RotationType;
	SavedQualityLevel: Enum.SavedQualitySetting;
	TouchCameraMovementMode: Enum.TouchCameraMovementMode;
	TouchMovementMode: Enum.TouchMovementMode;
	GetCameraYInvertValue(): number;
	GetOnboardingCompleted(onboardingId: string): boolean;
	InFullScreen(): boolean;
	InStudioMode(): boolean;
	SetCameraYInvertVisible(): void;
	SetGamepadCameraSensitivityVisible(): void;
	SetOnboardingCompleted(onboardingId: string): void;
	FullscreenChanged: RBXScriptSignal<(isFullscreen: boolean) => void>;
	StudioModeChanged: RBXScriptSignal<(isStudioMode: boolean) => void>;
}
type UserGameSettings = Rbx_UserGameSettings & AnyIndex;
interface Rbx_Instance {
	IsA(className: "UserGameSettings"): this is UserGameSettings;
	FindFirstAncestorOfClass(className: "UserGameSettings"): UserGameSettings | undefined;
	FindFirstAncestorWhichIsA(className: "UserGameSettings"): UserGameSettings | undefined;
	FindFirstChildOfClass(className: "UserGameSettings"): UserGameSettings | undefined;
	FindFirstAncestorWhichIsA(className: "UserGameSettings"): UserGameSettings | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "UserGameSettings"): UserGameSettings;
}

// UserInputService
interface Rbx_UserInputService extends Rbx_Instance {
	readonly AccelerometerEnabled: boolean;
	readonly GamepadEnabled: boolean;
	readonly GyroscopeEnabled: boolean;
	readonly KeyboardEnabled: boolean;
	ModalEnabled: boolean;
	MouseBehavior: Enum.MouseBehavior;
	MouseDeltaSensitivity: number;
	readonly MouseEnabled: boolean;
	MouseIconEnabled: boolean;
	readonly OnScreenKeyboardPosition: Vector2;
	readonly OnScreenKeyboardSize: Vector2;
	readonly OnScreenKeyboardVisible: boolean;
	readonly TouchEnabled: boolean;
	readonly VREnabled: boolean;
	GamepadSupports(gamepadNum: Enum.UserInputType, gamepadKeyCode: Enum.KeyCode): boolean;
	GetConnectedGamepads(): Array<any>;
	GetDeviceAcceleration(): Instance | undefined;
	GetDeviceGravity(): Instance | undefined;
	/** !TupleReturn */
	GetDeviceRotation(): Array<any>;
	GetFocusedTextBox(): Instance | undefined;
	GetGamepadConnected(gamepadNum: Enum.UserInputType): boolean;
	GetGamepadState(gamepadNum: Enum.UserInputType): Array<any>;
	GetKeysPressed(): Array<any>;
	GetLastInputType(): Enum.UserInputType;
	GetMouseButtonsPressed(): Array<any>;
	GetMouseDelta(): Vector2;
	GetMouseLocation(): Vector2;
	GetNavigationGamepads(): Array<any>;
	GetSupportedGamepadKeyCodes(gamepadNum: Enum.UserInputType): Array<any>;
	GetUserCFrame(type: Enum.UserCFrame): CFrame;
	IsGamepadButtonDown(gamepadNum: Enum.UserInputType, gamepadKeyCode: Enum.KeyCode): boolean;
	IsKeyDown(keyCode: Enum.KeyCode): boolean;
	IsMouseButtonPressed(mouseButton: Enum.UserInputType): boolean;
	IsNavigationGamepad(gamepadEnum: Enum.UserInputType): boolean;
	RecenterUserHeadCFrame(): void;
	SetNavigationGamepad(gamepadEnum: Enum.UserInputType, enabled: boolean): void;
	DeviceAccelerationChanged: RBXScriptSignal<(acceleration: Instance) => void>;
	DeviceGravityChanged: RBXScriptSignal<(gravity: Instance) => void>;
	DeviceRotationChanged: RBXScriptSignal<(rotation: Instance, cframe: CFrame) => void>;
	GamepadConnected: RBXScriptSignal<(gamepadNum: Enum.UserInputType) => void>;
	GamepadDisconnected: RBXScriptSignal<(gamepadNum: Enum.UserInputType) => void>;
	InputBegan: RBXScriptSignal<(input: Instance, gameProcessedEvent: boolean) => void>;
	InputChanged: RBXScriptSignal<(input: Instance, gameProcessedEvent: boolean) => void>;
	InputEnded: RBXScriptSignal<(input: Instance, gameProcessedEvent: boolean) => void>;
	JumpRequest: RBXScriptSignal<() => void>;
	LastInputTypeChanged: RBXScriptSignal<(lastInputType: Enum.UserInputType) => void>;
	TextBoxFocusReleased: RBXScriptSignal<(textboxReleased: Instance) => void>;
	TextBoxFocused: RBXScriptSignal<(textboxFocused: Instance) => void>;
	TouchEnded: RBXScriptSignal<(touch: Instance, gameProcessedEvent: boolean) => void>;
	TouchLongPress: RBXScriptSignal<(touchPositions: Array<any>, state: Enum.UserInputState, gameProcessedEvent: boolean) => void>;
	TouchMoved: RBXScriptSignal<(touch: Instance, gameProcessedEvent: boolean) => void>;
	TouchPan: RBXScriptSignal<(touchPositions: Array<any>, totalTranslation: Vector2, velocity: Vector2, state: Enum.UserInputState, gameProcessedEvent: boolean) => void>;
	TouchPinch: RBXScriptSignal<(touchPositions: Array<any>, scale: number, velocity: number, state: Enum.UserInputState, gameProcessedEvent: boolean) => void>;
	TouchRotate: RBXScriptSignal<(touchPositions: Array<any>, rotation: number, velocity: number, state: Enum.UserInputState, gameProcessedEvent: boolean) => void>;
	TouchStarted: RBXScriptSignal<(touch: Instance, gameProcessedEvent: boolean) => void>;
	TouchSwipe: RBXScriptSignal<(swipeDirection: Enum.SwipeDirection, numberOfTouches: number, gameProcessedEvent: boolean) => void>;
	TouchTap: RBXScriptSignal<(touchPositions: Array<any>, gameProcessedEvent: boolean) => void>;
	TouchTapInWorld: RBXScriptSignal<(position: Vector2, processedByUI: boolean) => void>;
	UserCFrameChanged: RBXScriptSignal<(type: Enum.UserCFrame, value: CFrame) => void>;
	WindowFocusReleased: RBXScriptSignal<() => void>;
	WindowFocused: RBXScriptSignal<() => void>;
}
type UserInputService = Rbx_UserInputService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "UserInputService"): this is UserInputService;
	FindFirstAncestorOfClass(className: "UserInputService"): UserInputService | undefined;
	FindFirstAncestorWhichIsA(className: "UserInputService"): UserInputService | undefined;
	FindFirstChildOfClass(className: "UserInputService"): UserInputService | undefined;
	FindFirstAncestorWhichIsA(className: "UserInputService"): UserInputService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "UserInputService"): UserInputService;
}

// VRService
interface Rbx_VRService extends Rbx_Instance {
	GuiInputUserCFrame: Enum.UserCFrame;
	readonly VREnabled: boolean;
	GetTouchpadMode(pad: Enum.VRTouchpad): Enum.VRTouchpadMode;
	GetUserCFrame(type: Enum.UserCFrame): CFrame;
	GetUserCFrameEnabled(type: Enum.UserCFrame): boolean;
	RecenterUserHeadCFrame(): void;
	RequestNavigation(cframe: CFrame, inputUserCFrame: Enum.UserCFrame): void;
	SetTouchpadMode(pad: Enum.VRTouchpad, mode: Enum.VRTouchpadMode): void;
	NavigationRequested: RBXScriptSignal<(cframe: CFrame, inputUserCFrame: Enum.UserCFrame) => void>;
	TouchpadModeChanged: RBXScriptSignal<(pad: Enum.VRTouchpad, mode: Enum.VRTouchpadMode) => void>;
	UserCFrameChanged: RBXScriptSignal<(type: Enum.UserCFrame, value: CFrame) => void>;
	UserCFrameEnabled: RBXScriptSignal<(type: Enum.UserCFrame, enabled: boolean) => void>;
}
type VRService = Rbx_VRService & AnyIndex;
interface Rbx_Instance {
	IsA(className: "VRService"): this is VRService;
	FindFirstAncestorOfClass(className: "VRService"): VRService | undefined;
	FindFirstAncestorWhichIsA(className: "VRService"): VRService | undefined;
	FindFirstChildOfClass(className: "VRService"): VRService | undefined;
	FindFirstAncestorWhichIsA(className: "VRService"): VRService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "VRService"): VRService;
}

// ValueBase
interface Rbx_ValueBase extends Rbx_Instance {
}
interface ValueBase extends Rbx_ValueBase, AnyIndex { }
declare class ValueBase {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ValueBase"): this is ValueBase;
	FindFirstAncestorOfClass(className: "ValueBase"): ValueBase | undefined;
	FindFirstAncestorWhichIsA(className: "ValueBase"): ValueBase | undefined;
	FindFirstChildOfClass(className: "ValueBase"): ValueBase | undefined;
	FindFirstAncestorWhichIsA(className: "ValueBase"): ValueBase | undefined;
}

// BinaryStringValue
interface Rbx_BinaryStringValue extends Rbx_ValueBase {
}
interface BinaryStringValue extends Rbx_BinaryStringValue, AnyIndex { }
declare class BinaryStringValue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BinaryStringValue"): this is BinaryStringValue;
	FindFirstAncestorOfClass(className: "BinaryStringValue"): BinaryStringValue | undefined;
	FindFirstAncestorWhichIsA(className: "BinaryStringValue"): BinaryStringValue | undefined;
	FindFirstChildOfClass(className: "BinaryStringValue"): BinaryStringValue | undefined;
	FindFirstAncestorWhichIsA(className: "BinaryStringValue"): BinaryStringValue | undefined;
}

// BoolValue
interface Rbx_BoolValue extends Rbx_ValueBase {
	Value: boolean;
}
interface BoolValue extends Rbx_BoolValue, AnyIndex { }
declare class BoolValue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BoolValue"): this is BoolValue;
	FindFirstAncestorOfClass(className: "BoolValue"): BoolValue | undefined;
	FindFirstAncestorWhichIsA(className: "BoolValue"): BoolValue | undefined;
	FindFirstChildOfClass(className: "BoolValue"): BoolValue | undefined;
	FindFirstAncestorWhichIsA(className: "BoolValue"): BoolValue | undefined;
}

// BrickColorValue
interface Rbx_BrickColorValue extends Rbx_ValueBase {
	Value: BrickColor;
}
interface BrickColorValue extends Rbx_BrickColorValue, AnyIndex { }
declare class BrickColorValue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "BrickColorValue"): this is BrickColorValue;
	FindFirstAncestorOfClass(className: "BrickColorValue"): BrickColorValue | undefined;
	FindFirstAncestorWhichIsA(className: "BrickColorValue"): BrickColorValue | undefined;
	FindFirstChildOfClass(className: "BrickColorValue"): BrickColorValue | undefined;
	FindFirstAncestorWhichIsA(className: "BrickColorValue"): BrickColorValue | undefined;
}

// CFrameValue
interface Rbx_CFrameValue extends Rbx_ValueBase {
	Value: CFrame;
}
interface CFrameValue extends Rbx_CFrameValue, AnyIndex { }
declare class CFrameValue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "CFrameValue"): this is CFrameValue;
	FindFirstAncestorOfClass(className: "CFrameValue"): CFrameValue | undefined;
	FindFirstAncestorWhichIsA(className: "CFrameValue"): CFrameValue | undefined;
	FindFirstChildOfClass(className: "CFrameValue"): CFrameValue | undefined;
	FindFirstAncestorWhichIsA(className: "CFrameValue"): CFrameValue | undefined;
}

// Color3Value
interface Rbx_Color3Value extends Rbx_ValueBase {
	Value: Color3;
}
interface Color3Value extends Rbx_Color3Value, AnyIndex { }
declare class Color3Value {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Color3Value"): this is Color3Value;
	FindFirstAncestorOfClass(className: "Color3Value"): Color3Value | undefined;
	FindFirstAncestorWhichIsA(className: "Color3Value"): Color3Value | undefined;
	FindFirstChildOfClass(className: "Color3Value"): Color3Value | undefined;
	FindFirstAncestorWhichIsA(className: "Color3Value"): Color3Value | undefined;
}

// DoubleConstrainedValue
interface Rbx_DoubleConstrainedValue extends Rbx_ValueBase {
	ConstrainedValue: number;
	MaxValue: number;
	MinValue: number;
	Value: number;
}
interface DoubleConstrainedValue extends Rbx_DoubleConstrainedValue, AnyIndex { }
declare class DoubleConstrainedValue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "DoubleConstrainedValue"): this is DoubleConstrainedValue;
	FindFirstAncestorOfClass(className: "DoubleConstrainedValue"): DoubleConstrainedValue | undefined;
	FindFirstAncestorWhichIsA(className: "DoubleConstrainedValue"): DoubleConstrainedValue | undefined;
	FindFirstChildOfClass(className: "DoubleConstrainedValue"): DoubleConstrainedValue | undefined;
	FindFirstAncestorWhichIsA(className: "DoubleConstrainedValue"): DoubleConstrainedValue | undefined;
}

// IntConstrainedValue
interface Rbx_IntConstrainedValue extends Rbx_ValueBase {
	ConstrainedValue: number;
	MaxValue: number;
	MinValue: number;
	Value: number;
}
interface IntConstrainedValue extends Rbx_IntConstrainedValue, AnyIndex { }
declare class IntConstrainedValue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "IntConstrainedValue"): this is IntConstrainedValue;
	FindFirstAncestorOfClass(className: "IntConstrainedValue"): IntConstrainedValue | undefined;
	FindFirstAncestorWhichIsA(className: "IntConstrainedValue"): IntConstrainedValue | undefined;
	FindFirstChildOfClass(className: "IntConstrainedValue"): IntConstrainedValue | undefined;
	FindFirstAncestorWhichIsA(className: "IntConstrainedValue"): IntConstrainedValue | undefined;
}

// IntValue
interface Rbx_IntValue extends Rbx_ValueBase {
	Value: number;
}
interface IntValue extends Rbx_IntValue, AnyIndex { }
declare class IntValue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "IntValue"): this is IntValue;
	FindFirstAncestorOfClass(className: "IntValue"): IntValue | undefined;
	FindFirstAncestorWhichIsA(className: "IntValue"): IntValue | undefined;
	FindFirstChildOfClass(className: "IntValue"): IntValue | undefined;
	FindFirstAncestorWhichIsA(className: "IntValue"): IntValue | undefined;
}

// NumberValue
interface Rbx_NumberValue extends Rbx_ValueBase {
	Value: number;
}
interface NumberValue extends Rbx_NumberValue, AnyIndex { }
declare class NumberValue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "NumberValue"): this is NumberValue;
	FindFirstAncestorOfClass(className: "NumberValue"): NumberValue | undefined;
	FindFirstAncestorWhichIsA(className: "NumberValue"): NumberValue | undefined;
	FindFirstChildOfClass(className: "NumberValue"): NumberValue | undefined;
	FindFirstAncestorWhichIsA(className: "NumberValue"): NumberValue | undefined;
}

// ObjectValue
interface Rbx_ObjectValue extends Rbx_ValueBase {
	Value: Instance | undefined;
}
interface ObjectValue extends Rbx_ObjectValue, AnyIndex { }
declare class ObjectValue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "ObjectValue"): this is ObjectValue;
	FindFirstAncestorOfClass(className: "ObjectValue"): ObjectValue | undefined;
	FindFirstAncestorWhichIsA(className: "ObjectValue"): ObjectValue | undefined;
	FindFirstChildOfClass(className: "ObjectValue"): ObjectValue | undefined;
	FindFirstAncestorWhichIsA(className: "ObjectValue"): ObjectValue | undefined;
}

// RayValue
interface Rbx_RayValue extends Rbx_ValueBase {
	Value: Ray;
}
interface RayValue extends Rbx_RayValue, AnyIndex { }
declare class RayValue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RayValue"): this is RayValue;
	FindFirstAncestorOfClass(className: "RayValue"): RayValue | undefined;
	FindFirstAncestorWhichIsA(className: "RayValue"): RayValue | undefined;
	FindFirstChildOfClass(className: "RayValue"): RayValue | undefined;
	FindFirstAncestorWhichIsA(className: "RayValue"): RayValue | undefined;
}

// StringValue
interface Rbx_StringValue extends Rbx_ValueBase {
	Value: string;
}
interface StringValue extends Rbx_StringValue, AnyIndex { }
declare class StringValue {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "StringValue"): this is StringValue;
	FindFirstAncestorOfClass(className: "StringValue"): StringValue | undefined;
	FindFirstAncestorWhichIsA(className: "StringValue"): StringValue | undefined;
	FindFirstChildOfClass(className: "StringValue"): StringValue | undefined;
	FindFirstAncestorWhichIsA(className: "StringValue"): StringValue | undefined;
}

// Vector3Value
interface Rbx_Vector3Value extends Rbx_ValueBase {
	Value: Vector3;
}
interface Vector3Value extends Rbx_Vector3Value, AnyIndex { }
declare class Vector3Value {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Vector3Value"): this is Vector3Value;
	FindFirstAncestorOfClass(className: "Vector3Value"): Vector3Value | undefined;
	FindFirstAncestorWhichIsA(className: "Vector3Value"): Vector3Value | undefined;
	FindFirstChildOfClass(className: "Vector3Value"): Vector3Value | undefined;
	FindFirstAncestorWhichIsA(className: "Vector3Value"): Vector3Value | undefined;
}

// VirtualInputManager
interface Rbx_VirtualInputManager extends Rbx_Instance {
}
type VirtualInputManager = Rbx_VirtualInputManager & AnyIndex;
interface Rbx_Instance {
	IsA(className: "VirtualInputManager"): this is VirtualInputManager;
	FindFirstAncestorOfClass(className: "VirtualInputManager"): VirtualInputManager | undefined;
	FindFirstAncestorWhichIsA(className: "VirtualInputManager"): VirtualInputManager | undefined;
	FindFirstChildOfClass(className: "VirtualInputManager"): VirtualInputManager | undefined;
	FindFirstAncestorWhichIsA(className: "VirtualInputManager"): VirtualInputManager | undefined;
}

// VirtualUser
interface Rbx_VirtualUser extends Rbx_Instance {
}
type VirtualUser = Rbx_VirtualUser & AnyIndex;
interface Rbx_Instance {
	IsA(className: "VirtualUser"): this is VirtualUser;
	FindFirstAncestorOfClass(className: "VirtualUser"): VirtualUser | undefined;
	FindFirstAncestorWhichIsA(className: "VirtualUser"): VirtualUser | undefined;
	FindFirstChildOfClass(className: "VirtualUser"): VirtualUser | undefined;
	FindFirstAncestorWhichIsA(className: "VirtualUser"): VirtualUser | undefined;
}

// Visit
interface Rbx_Visit extends Rbx_Instance {
}
type Visit = Rbx_Visit & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Visit"): this is Visit;
	FindFirstAncestorOfClass(className: "Visit"): Visit | undefined;
	FindFirstAncestorWhichIsA(className: "Visit"): Visit | undefined;
	FindFirstChildOfClass(className: "Visit"): Visit | undefined;
	FindFirstAncestorWhichIsA(className: "Visit"): Visit | undefined;
}

// WeldConstraint
interface Rbx_WeldConstraint extends Rbx_Instance {
	Enabled: boolean;
	Part0: Instance | undefined;
	Part1: Instance | undefined;
}
interface WeldConstraint extends Rbx_WeldConstraint, AnyIndex { }
declare class WeldConstraint {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "WeldConstraint"): this is WeldConstraint;
	FindFirstAncestorOfClass(className: "WeldConstraint"): WeldConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "WeldConstraint"): WeldConstraint | undefined;
	FindFirstChildOfClass(className: "WeldConstraint"): WeldConstraint | undefined;
	FindFirstAncestorWhichIsA(className: "WeldConstraint"): WeldConstraint | undefined;
}

