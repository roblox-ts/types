// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!

/// <reference no-default-lib="true"/>
/// <reference path="roblox.d.ts" />
/// <reference path="manual.d.ts" />
/// <reference path="generated_classes.d.ts" />

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
	enum AutoJointsMode {
		Default = 0,
		Explicit = 1,
		LegacyImplicit = 2
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
	enum BodyPartR15 {
		Head = 0,
		UpperTorso = 1,
		LowerTorso = 2,
		LeftFoot = 3,
		LeftLowerLeg = 4,
		LeftUpperLeg = 5,
		RightFoot = 6,
		RightLowerLeg = 7,
		RightUpperLeg = 8,
		LeftHand = 9,
		LeftLowerArm = 10,
		LeftUpperArm = 11,
		RightHand = 12,
		RightLowerArm = 13,
		RightUpperArm = 14,
		RootPart = 15,
		Unknown = 17
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
	enum ChatCallbackType {
		OnCreatingChatWindow = 1,
		OnClientSendingMessage = 2,
		OnClientFormattingMessage = 3,
		OnServerReceivingMessage = 17
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
	enum ConnectionError {
		OK = 0,
		DisconnectErrors = 256,
		DisconnectBadhash = 257,
		DisconnectSecurityKeyMismatch = 258,
		DisconnectNewSecurityKeyMismatch = 272,
		DisconnectProtocolMismatch = 259,
		DisconnectReceivePacketError = 260,
		DisconnectReceivePacketStreamError = 261,
		DisconnectSendPacketError = 262,
		DisconnectIllegalTeleport = 263,
		DisconnectDuplicatePlayer = 264,
		DisconnectDuplicateTicket = 265,
		DisconnectTimeout = 266,
		DisconnectLuaKick = 267,
		DisconnectOnRemoteSysStats = 268,
		DisconnectHashTimeout = 269,
		DisconnectCloudEditKick = 270,
		DisconnectPlayerless = 271,
		DisconnectEvicted = 273,
		DisconnectDevMaintenance = 274,
		DisconnectRobloxMaintenance = 275,
		DisconnectRejoin = 276,
		DisconnectConnectionLost = 277,
		DisconnectIdle = 278,
		DisconnectRaknetErrors = 279,
		DisconnectWrongVersion = 280,
		PlacelaunchErrors = 512,
		PlacelaunchDisabled = 515,
		PlacelaunchError = 516,
		PlacelaunchGameEnded = 517,
		PlacelaunchGameFull = 518,
		PlacelaunchUserLeft = 522,
		PlacelaunchRestricted = 523,
		PlacelaunchUnauthorized = 524,
		PlacelaunchFlooded = 525,
		PlacelaunchHashExpired = 526,
		PlacelaunchHashException = 527,
		PlacelaunchPartyCannotFit = 528,
		PlacelaunchHttpError = 529,
		PlacelaunchCustomMessage = 610,
		PlacelaunchOtherError = 611,
		TeleportErrors = 768,
		TeleportFailure = 769,
		TeleportGameNotFound = 770,
		TeleportGameEnded = 771,
		TeleportGameFull = 772,
		TeleportUnauthorized = 773,
		TeleportFlooded = 774,
		TeleportIsTeleporting = 775
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
	enum DEPRECATED_DebuggerDataModelPreference {
		Server = 0,
		Client = 1
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
		Antique = 15,
		Gotham = 17,
		GothamSemibold = 18,
		GothamBold = 19,
		GothamBlack = 20
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
	enum HttpCachePolicy {
		None = 0,
		Full = 1,
		DataOnly = 2,
		Default = 3,
		InternalRedirectRefresh = 4
	}
	enum HttpContentType {
		ApplicationJson = 0,
		ApplicationXml = 1,
		ApplicationUrlEncoded = 2,
		TextPlain = 3,
		TextXml = 4
	}
	enum HttpError {
		OK = 0,
		InvalidUrl = 1,
		DnsResolve = 2,
		ConnectFail = 3,
		OutOfMemory = 4,
		TimedOut = 5,
		TooManyRedirects = 6,
		InvalidRedirect = 7,
		NetFail = 8,
		Aborted = 9,
		SslConnectFail = 10,
		Unknown = 11
	}
	enum HttpRequestType {
		Default = 0,
		MarketplaceService = 2,
		Players = 7,
		Chat = 15,
		Avatar = 16,
		Analytics = 22
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
	enum RenderFidelity {
		Automatic = 0,
		Precise = 1
	}
	enum RenderPriority {
		First = 0,
		Input = 100,
		Camera = 200,
		Character = 300,
		Last = 2000
	}
	enum RenderingTestComparisonMethod {
		psnr = 0,
		diff = 1
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
	enum StudioStyleGuideColor {
		MainBackground = 0,
		Titlebar = 1,
		Dropdown = 2,
		Tooltip = 3,
		Notification = 4,
		ScrollBar = 5,
		ScrollBarBackground = 6,
		TabBar = 7,
		Tab = 8,
		RibbonTab = 9,
		RibbonTabTopBar = 10,
		Button = 11,
		MainButton = 12,
		RibbonButton = 13,
		ViewPortBackground = 14,
		InputFieldBackground = 15,
		Item = 16,
		TableItem = 17,
		CategoryItem = 18,
		GameSettingsTableItem = 19,
		GameSettingsTooltip = 20,
		EmulatorBar = 21,
		EmulatorDropDown = 22,
		ColorPickerFrame = 23,
		CurrentMarker = 24,
		Border = 25,
		Shadow = 26,
		Light = 27,
		Dark = 28,
		Mid = 29,
		MainText = 30,
		SubText = 31,
		TitlebarText = 32,
		BrightText = 33,
		DimmedText = 34,
		LinkText = 35,
		WarningText = 36,
		ErrorText = 37,
		InfoText = 38,
		SensitiveText = 39,
		ScriptSideWidget = 40,
		ScriptBackground = 41,
		ScriptText = 42,
		ScriptSelectionText = 43,
		ScriptSelectionBackground = 44,
		ScriptFindSelectionBackground = 45,
		ScriptMatchingWordSelectionBackground = 46,
		ScriptOperator = 47,
		ScriptNumber = 48,
		ScriptString = 49,
		ScriptComment = 50,
		ScriptPreprocessor = 51,
		ScriptKeyword = 52,
		ScriptBuiltInFunction = 53,
		ScriptWarning = 54,
		ScriptError = 55,
		DebuggerCurrentLine = 56,
		DebuggerErrorLine = 57,
		DiffFilePathText = 58,
		DiffTextHunkInfo = 59,
		DiffTextNoChange = 60,
		DiffTextAddition = 61,
		DiffTextDeletion = 62,
		DiffTextSeparatorBackground = 63,
		DiffTextNoChangeBackground = 64,
		DiffTextAdditionBackground = 65,
		DiffTextDeletionBackground = 66,
		DiffLineNum = 67,
		DiffLineNumSeparatorBackground = 68,
		DiffLineNumNoChangeBackground = 69,
		DiffLineNumAdditionBackground = 70,
		DiffLineNumDeletionBackground = 71,
		DiffFilePathBackground = 72,
		DiffFilePathBorder = 73,
		Separator = 74,
		ButtonBorder = 75,
		ButtonText = 76,
		InputFieldBorder = 77,
		CheckedFieldBackground = 78,
		CheckedFieldBorder = 79,
		CheckedFieldIndicator = 80,
		HeaderSection = 81,
		Midlight = 82,
		StatusBar = 83
	}
	enum StudioStyleGuideModifier {
		Default = 0,
		Selected = 1,
		Pressed = 2,
		Disabled = 3,
		Hover = 4
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
	enum Technology {
		Legacy = 0,
		Voxel = 1
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
