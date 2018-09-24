/// <reference path="roblox.d.ts" />
/// <reference path="generated_enums.d.ts" />
/// <reference path="generated_classes.d.ts" />

// GENERATED API OVERRIDES

interface Rbx_Instance {
	Clone(): Instance;
	GetDescendants(): Array<Instance>;
	FindFirstAncestor<T = Instance>(name: string): T | undefined;
	FindFirstChild<T = Instance>(name: string, recursive?: boolean): T | undefined;
	WaitForChild<T = Instance>(childName: string, timeOut?: number): T | undefined;
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

interface Rbx_Players extends Rbx_Instance {
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

interface Rbx_Player extends Rbx_Instance {
	Character: Model | undefined;
	CharacterAdded: RBXScriptSignal<(character: Model) => void>;
	CharacterAppearanceLoaded: RBXScriptSignal<(character: Model) => void>;
	CharacterRemoving: RBXScriptSignal<(character: Model) => void>;
}

interface Rbx_Terrain extends Rbx_BasePart {
	ReadVoxels(region: Region3, resolution: number): [Enum.Material[][][], number[][][]];
	WriteVoxels(region: Region3, resolution: number, materials: Enum.Material[][][], occupancy: number[][][]): void;
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

interface Rbx_Player extends Rbx_Instance {
	GetMouse(): PlayerMouse;
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

interface Rbx_AnimationController extends Rbx_Instance {
	GetPlayingAnimationTracks(): Array<AnimationTrack>;
}

interface Rbx_AssetService extends Rbx_Instance {
	GetAssetIdsForPackage(packageAssetId: number): Array<number>;
}

interface Rbx_BindableEvent extends Rbx_Instance {
	Fire(...arguments: Array<unknown>): void;
	Event: RBXScriptSignal<(...arguments: Array<unknown>) => void>;
}

interface Rbx_BindableFunction extends Rbx_Instance {
	Invoke(...arguments: Array<unknown>): Array<unknown>;
	OnInvoke: (...arguments: Array<unknown>) => void;
}

interface Rbx_Camera extends Rbx_Instance {
	GetPartsObscuringTarget(castPoints: Array<Vector3>, ignoreList: Array<Instance>): Array<Instance>;
	WorldToScreenPoint(worldPoint: Vector3): [Vector3, boolean];
	WorldToViewportPoint(worldPoint: Vector3): [Vector3, boolean];
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
}

interface GetGroupInfoAsyncResult {
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
	GetGroupInfoAsync(groupId: number): GetGroupInfoAsyncResult;
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

type Tweenable = number | boolean | CFrame | Rect | Color3 | UDim | UDim2 | Vector2 | Vector2int16 | Vector3;
type FilterMembers<T, U> = Pick<T, { [K in keyof T]: T[K] extends U ? K : never }[keyof T]>;

interface Rbx_TweenService {
	Create<T>(instance: T, tweenInfo: TweenInfo, propertyTable: Partial<FilterMembers<BaseType<T>, Tweenable>>): Tween;
}
