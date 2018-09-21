// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!

/// <reference path="roblox.d.ts" />
/// <reference path="manual.d.ts" />
/// <reference path="generated_enums.d.ts" />

// GENERATED ROBLOX INSTANCE CLASSES

// Instance
interface Rbx_Instance {
	Archivable: boolean;
	readonly ClassName: string;
	Name: string;
	Parent: Instance | undefined;
	ClearAllChildren(): void;
	Destroy(): void;
	FindFirstAncestorOfClass(className: string): Instance | undefined;
	FindFirstAncestorWhichIsA(className: string): Instance | undefined;
	FindFirstChildOfClass(className: string): Instance | undefined;
	FindFirstChildWhichIsA(className: string, recursive?: boolean): Instance | undefined;
	GetChildren(): Array<Instance>;
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
interface Instance extends Rbx_Instance, Base<Rbx_Instance>, AnyIndex {}
declare abstract class Instance {
	constructor(parent?: Instance);
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
interface Accoutrement extends Rbx_Accoutrement, Base<Rbx_Accoutrement>, AnyIndex {}
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
interface Accessory extends Rbx_Accessory, Base<Rbx_Accessory>, AnyIndex {}
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
interface Hat extends Rbx_Hat, Base<Rbx_Hat>, AnyIndex {}
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
type AdService = Rbx_AdService & Base<Rbx_AdService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "AdService"): this is AdService;
	FindFirstAncestorOfClass(className: "AdService"): AdService | undefined;
	FindFirstAncestorWhichIsA(className: "AdService"): AdService | undefined;
	FindFirstChildOfClass(className: "AdService"): AdService | undefined;
	FindFirstAncestorWhichIsA(className: "AdService"): AdService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "AdService"): AdService;
}

// AdvancedDragger
interface Rbx_AdvancedDragger extends Rbx_Instance {
}
interface AdvancedDragger extends Rbx_AdvancedDragger, Base<Rbx_AdvancedDragger>, AnyIndex {}
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
type AnalyticsService = Rbx_AnalyticsService & Base<Rbx_AnalyticsService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "AnalyticsService"): this is AnalyticsService;
	FindFirstAncestorOfClass(className: "AnalyticsService"): AnalyticsService | undefined;
	FindFirstAncestorWhichIsA(className: "AnalyticsService"): AnalyticsService | undefined;
	FindFirstChildOfClass(className: "AnalyticsService"): AnalyticsService | undefined;
	FindFirstAncestorWhichIsA(className: "AnalyticsService"): AnalyticsService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "AnalyticsService"): AnalyticsService;
}

// Animation
interface Rbx_Animation extends Rbx_Instance {
	AnimationId: string;
}
interface Animation extends Rbx_Animation, Base<Rbx_Animation>, AnyIndex {}
declare class Animation {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Animation"): this is Animation;
	FindFirstAncestorOfClass(className: "Animation"): Animation | undefined;
	FindFirstAncestorWhichIsA(className: "Animation"): Animation | undefined;
	FindFirstChildOfClass(className: "Animation"): Animation | undefined;
	FindFirstAncestorWhichIsA(className: "Animation"): Animation | undefined;
}

// AnimationController
interface Rbx_AnimationController extends Rbx_Instance {
	LoadAnimation(animation: Instance): Instance | undefined;
	AnimationPlayed: RBXScriptSignal<(animationTrack: Instance) => void>;
}
interface AnimationController extends Rbx_AnimationController, Base<Rbx_AnimationController>, AnyIndex {}
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
	readonly Animation: Animation;
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
interface AnimationTrack extends Rbx_AnimationTrack, Base<Rbx_AnimationTrack>, AnyIndex {}
declare abstract class AnimationTrack {
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
interface Animator extends Rbx_Animator, Base<Rbx_Animator>, AnyIndex {}
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
	GetGamePlacesAsync(): Instance | undefined;
	SavePlaceAsync(): void;
}
type AssetService = Rbx_AssetService & Base<Rbx_AssetService> & AnyIndex;
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
interface Attachment extends Rbx_Attachment, Base<Rbx_Attachment>, AnyIndex {}
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
	UserHasBadgeAsync(userId: number, badgeId: number): boolean;
}
type BadgeService = Rbx_BadgeService & Base<Rbx_BadgeService> & AnyIndex;
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
interface BasePlayerGui extends Rbx_BasePlayerGui, Base<Rbx_BasePlayerGui>, AnyIndex {}
declare abstract class BasePlayerGui {
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
type CoreGui = Rbx_CoreGui & Base<Rbx_CoreGui> & AnyIndex;
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
	SelectionImageObject: GuiObject;
	GetTopbarTransparency(): number;
	SetTopbarTransparency(transparency: number): void;
	TopbarTransparencyChangedSignal: RBXScriptSignal<(transparency: number) => void>;
}
interface PlayerGui extends Rbx_PlayerGui, Base<Rbx_PlayerGui>, AnyIndex {}
declare abstract class PlayerGui {
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
type StarterGui = Rbx_StarterGui & Base<Rbx_StarterGui> & AnyIndex;
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
	Attachment0: Attachment;
	Attachment1: Attachment;
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
interface Beam extends Rbx_Beam, Base<Rbx_Beam>, AnyIndex {}
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
}
interface BindableEvent extends Rbx_BindableEvent, Base<Rbx_BindableEvent>, AnyIndex {}
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
}
interface BindableFunction extends Rbx_BindableFunction, Base<Rbx_BindableFunction>, AnyIndex {}
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
interface BodyMover extends Rbx_BodyMover, Base<Rbx_BodyMover>, AnyIndex {}
declare abstract class BodyMover {
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
interface BodyAngularVelocity extends Rbx_BodyAngularVelocity, Base<Rbx_BodyAngularVelocity>, AnyIndex {}
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
interface BodyForce extends Rbx_BodyForce, Base<Rbx_BodyForce>, AnyIndex {}
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
interface BodyGyro extends Rbx_BodyGyro, Base<Rbx_BodyGyro>, AnyIndex {}
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
interface BodyPosition extends Rbx_BodyPosition, Base<Rbx_BodyPosition>, AnyIndex {}
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
interface BodyThrust extends Rbx_BodyThrust, Base<Rbx_BodyThrust>, AnyIndex {}
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
interface BodyVelocity extends Rbx_BodyVelocity, Base<Rbx_BodyVelocity>, AnyIndex {}
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
	Target: BasePart;
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
interface RocketPropulsion extends Rbx_RocketPropulsion, Base<Rbx_RocketPropulsion>, AnyIndex {}
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
interface Button extends Rbx_Button, Base<Rbx_Button>, AnyIndex {}
declare abstract class Button {
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
type CacheableContentProvider = Rbx_CacheableContentProvider & Base<Rbx_CacheableContentProvider> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "CacheableContentProvider"): this is CacheableContentProvider;
	FindFirstAncestorOfClass(className: "CacheableContentProvider"): CacheableContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "CacheableContentProvider"): CacheableContentProvider | undefined;
	FindFirstChildOfClass(className: "CacheableContentProvider"): CacheableContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "CacheableContentProvider"): CacheableContentProvider | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "CacheableContentProvider"): CacheableContentProvider;
}

// MeshContentProvider
interface Rbx_MeshContentProvider extends Rbx_CacheableContentProvider {
}
type MeshContentProvider = Rbx_MeshContentProvider & Base<Rbx_MeshContentProvider> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "MeshContentProvider"): this is MeshContentProvider;
	FindFirstAncestorOfClass(className: "MeshContentProvider"): MeshContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "MeshContentProvider"): MeshContentProvider | undefined;
	FindFirstChildOfClass(className: "MeshContentProvider"): MeshContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "MeshContentProvider"): MeshContentProvider | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "MeshContentProvider"): MeshContentProvider;
}

// SolidModelContentProvider
interface Rbx_SolidModelContentProvider extends Rbx_CacheableContentProvider {
}
type SolidModelContentProvider = Rbx_SolidModelContentProvider & Base<Rbx_SolidModelContentProvider> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "SolidModelContentProvider"): this is SolidModelContentProvider;
	FindFirstAncestorOfClass(className: "SolidModelContentProvider"): SolidModelContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "SolidModelContentProvider"): SolidModelContentProvider | undefined;
	FindFirstChildOfClass(className: "SolidModelContentProvider"): SolidModelContentProvider | undefined;
	FindFirstAncestorWhichIsA(className: "SolidModelContentProvider"): SolidModelContentProvider | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "SolidModelContentProvider"): SolidModelContentProvider;
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
	InterpolationFinished: RBXScriptSignal<() => void>;
}
interface Camera extends Rbx_Camera, Base<Rbx_Camera>, AnyIndex {}
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
type ChangeHistoryService = Rbx_ChangeHistoryService & Base<Rbx_ChangeHistoryService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ChangeHistoryService"): this is ChangeHistoryService;
	FindFirstAncestorOfClass(className: "ChangeHistoryService"): ChangeHistoryService | undefined;
	FindFirstAncestorWhichIsA(className: "ChangeHistoryService"): ChangeHistoryService | undefined;
	FindFirstChildOfClass(className: "ChangeHistoryService"): ChangeHistoryService | undefined;
	FindFirstAncestorWhichIsA(className: "ChangeHistoryService"): ChangeHistoryService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "ChangeHistoryService"): ChangeHistoryService;
}

// CharacterAppearance
interface Rbx_CharacterAppearance extends Rbx_Instance {
}
interface CharacterAppearance extends Rbx_CharacterAppearance, Base<Rbx_CharacterAppearance>, AnyIndex {}
declare abstract class CharacterAppearance {
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
interface BodyColors extends Rbx_BodyColors, Base<Rbx_BodyColors>, AnyIndex {}
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
interface CharacterMesh extends Rbx_CharacterMesh, Base<Rbx_CharacterMesh>, AnyIndex {}
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
interface Clothing extends Rbx_Clothing, Base<Rbx_Clothing>, AnyIndex {}
declare abstract class Clothing {
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
interface Pants extends Rbx_Pants, Base<Rbx_Pants>, AnyIndex {}
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
interface Shirt extends Rbx_Shirt, Base<Rbx_Shirt>, AnyIndex {}
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
interface ShirtGraphic extends Rbx_ShirtGraphic, Base<Rbx_ShirtGraphic>, AnyIndex {}
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
interface Skin extends Rbx_Skin, Base<Rbx_Skin>, AnyIndex {}
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
	InvokeChatCallback(callbackType: Enum.ChatCallbackType, callbackArguments: Array<any>): Array<any>;
	RegisterChatCallback(callbackType: Enum.ChatCallbackType, callbackFunction: Function): void;
	CanUserChatAsync(userId: number): boolean;
	CanUsersChatAsync(userIdFrom: number, userIdTo: number): boolean;
	FilterStringAsync(stringToFilter: string, playerFrom: Instance, playerTo: Instance): string;
	FilterStringForBroadcast(stringToFilter: string, playerFrom: Instance): string;
	Chatted: RBXScriptSignal<(part: Instance, message: string, color: Enum.ChatColor) => void>;
}
type Chat = Rbx_Chat & Base<Rbx_Chat> & AnyIndex;
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
interface ClickDetector extends Rbx_ClickDetector, Base<Rbx_ClickDetector>, AnyIndex {}
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
type ClusterPacketCache = Rbx_ClusterPacketCache & Base<Rbx_ClusterPacketCache> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ClusterPacketCache"): this is ClusterPacketCache;
	FindFirstAncestorOfClass(className: "ClusterPacketCache"): ClusterPacketCache | undefined;
	FindFirstAncestorWhichIsA(className: "ClusterPacketCache"): ClusterPacketCache | undefined;
	FindFirstChildOfClass(className: "ClusterPacketCache"): ClusterPacketCache | undefined;
	FindFirstAncestorWhichIsA(className: "ClusterPacketCache"): ClusterPacketCache | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "ClusterPacketCache"): ClusterPacketCache;
}

// CollectionService
interface Rbx_CollectionService extends Rbx_Instance {
	AddTag(instance: Instance, tag: string): void;
	GetInstanceAddedSignal(tag: string): RBXScriptSignal;
	GetInstanceRemovedSignal(tag: string): RBXScriptSignal;
	HasTag(instance: Instance, tag: string): boolean;
	RemoveTag(instance: Instance, tag: string): void;
}
type CollectionService = Rbx_CollectionService & Base<Rbx_CollectionService> & AnyIndex;
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
interface Configuration extends Rbx_Configuration, Base<Rbx_Configuration>, AnyIndex {}
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
	Attachment0: Attachment;
	Attachment1: Attachment;
	Color: BrickColor;
	Enabled: boolean;
	Visible: boolean;
}
interface Constraint extends Rbx_Constraint, Base<Rbx_Constraint>, AnyIndex {}
declare abstract class Constraint {
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
interface AlignOrientation extends Rbx_AlignOrientation, Base<Rbx_AlignOrientation>, AnyIndex {}
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
interface AlignPosition extends Rbx_AlignPosition, Base<Rbx_AlignPosition>, AnyIndex {}
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
interface BallSocketConstraint extends Rbx_BallSocketConstraint, Base<Rbx_BallSocketConstraint>, AnyIndex {}
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
interface HingeConstraint extends Rbx_HingeConstraint, Base<Rbx_HingeConstraint>, AnyIndex {}
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
interface LineForce extends Rbx_LineForce, Base<Rbx_LineForce>, AnyIndex {}
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
interface RodConstraint extends Rbx_RodConstraint, Base<Rbx_RodConstraint>, AnyIndex {}
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
interface RopeConstraint extends Rbx_RopeConstraint, Base<Rbx_RopeConstraint>, AnyIndex {}
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
interface SlidingBallConstraint extends Rbx_SlidingBallConstraint, Base<Rbx_SlidingBallConstraint>, AnyIndex {}
declare abstract class SlidingBallConstraint {
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
interface CylindricalConstraint extends Rbx_CylindricalConstraint, Base<Rbx_CylindricalConstraint>, AnyIndex {}
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
interface PrismaticConstraint extends Rbx_PrismaticConstraint, Base<Rbx_PrismaticConstraint>, AnyIndex {}
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
interface SpringConstraint extends Rbx_SpringConstraint, Base<Rbx_SpringConstraint>, AnyIndex {}
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
interface Torque extends Rbx_Torque, Base<Rbx_Torque>, AnyIndex {}
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
interface VectorForce extends Rbx_VectorForce, Base<Rbx_VectorForce>, AnyIndex {}
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
}
type ContentProvider = Rbx_ContentProvider & Base<Rbx_ContentProvider> & AnyIndex;
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
type ContextActionService = Rbx_ContextActionService & Base<Rbx_ContextActionService> & AnyIndex;
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
interface Controller extends Rbx_Controller, Base<Rbx_Controller>, AnyIndex {}
declare abstract class Controller {
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
interface HumanoidController extends Rbx_HumanoidController, Base<Rbx_HumanoidController>, AnyIndex {}
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
interface SkateboardController extends Rbx_SkateboardController, Base<Rbx_SkateboardController>, AnyIndex {}
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
interface VehicleController extends Rbx_VehicleController, Base<Rbx_VehicleController>, AnyIndex {}
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
type ControllerService = Rbx_ControllerService & Base<Rbx_ControllerService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ControllerService"): this is ControllerService;
	FindFirstAncestorOfClass(className: "ControllerService"): ControllerService | undefined;
	FindFirstAncestorWhichIsA(className: "ControllerService"): ControllerService | undefined;
	FindFirstChildOfClass(className: "ControllerService"): ControllerService | undefined;
	FindFirstAncestorWhichIsA(className: "ControllerService"): ControllerService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "ControllerService"): ControllerService;
}

// CookiesService
interface Rbx_CookiesService extends Rbx_Instance {
}
type CookiesService = Rbx_CookiesService & Base<Rbx_CookiesService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "CookiesService"): this is CookiesService;
	FindFirstAncestorOfClass(className: "CookiesService"): CookiesService | undefined;
	FindFirstAncestorWhichIsA(className: "CookiesService"): CookiesService | undefined;
	FindFirstChildOfClass(className: "CookiesService"): CookiesService | undefined;
	FindFirstAncestorWhichIsA(className: "CookiesService"): CookiesService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "CookiesService"): CookiesService;
}

// CorePackages
interface Rbx_CorePackages extends Rbx_Instance {
}
type CorePackages = Rbx_CorePackages & Base<Rbx_CorePackages> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "CorePackages"): this is CorePackages;
	FindFirstAncestorOfClass(className: "CorePackages"): CorePackages | undefined;
	FindFirstAncestorWhichIsA(className: "CorePackages"): CorePackages | undefined;
	FindFirstChildOfClass(className: "CorePackages"): CorePackages | undefined;
	FindFirstAncestorWhichIsA(className: "CorePackages"): CorePackages | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "CorePackages"): CorePackages;
}

// CustomEvent
interface Rbx_CustomEvent extends Rbx_Instance {
	GetAttachedReceivers(): Array<Instance>;
	SetValue(newValue: number): void;
	ReceiverConnected: RBXScriptSignal<(receiver: Instance) => void>;
	ReceiverDisconnected: RBXScriptSignal<(receiver: Instance) => void>;
}
interface CustomEvent extends Rbx_CustomEvent, Base<Rbx_CustomEvent>, AnyIndex {}
declare class CustomEvent {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "CustomEvent"): this is CustomEvent;
	FindFirstAncestorOfClass(className: "CustomEvent"): CustomEvent | undefined;
	FindFirstAncestorWhichIsA(className: "CustomEvent"): CustomEvent | undefined;
	FindFirstChildOfClass(className: "CustomEvent"): CustomEvent | undefined;
	FindFirstAncestorWhichIsA(className: "CustomEvent"): CustomEvent | undefined;
}

// CustomEventReceiver
interface Rbx_CustomEventReceiver extends Rbx_Instance {
	Source: Instance | undefined;
	GetCurrentValue(): number;
	EventConnected: RBXScriptSignal<(event: Instance) => void>;
	EventDisconnected: RBXScriptSignal<(event: Instance) => void>;
	SourceValueChanged: RBXScriptSignal<(newValue: number) => void>;
}
interface CustomEventReceiver extends Rbx_CustomEventReceiver, Base<Rbx_CustomEventReceiver>, AnyIndex {}
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
interface DataModelMesh extends Rbx_DataModelMesh, Base<Rbx_DataModelMesh>, AnyIndex {}
declare abstract class DataModelMesh {
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
interface BevelMesh extends Rbx_BevelMesh, Base<Rbx_BevelMesh>, AnyIndex {}
declare abstract class BevelMesh {
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
interface BlockMesh extends Rbx_BlockMesh, Base<Rbx_BlockMesh>, AnyIndex {}
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
interface CylinderMesh extends Rbx_CylinderMesh, Base<Rbx_CylinderMesh>, AnyIndex {}
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
interface FileMesh extends Rbx_FileMesh, Base<Rbx_FileMesh>, AnyIndex {}
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
interface SpecialMesh extends Rbx_SpecialMesh, Base<Rbx_SpecialMesh>, AnyIndex {}
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
type DataStoreService = Rbx_DataStoreService & Base<Rbx_DataStoreService> & AnyIndex;
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
type Debris = Rbx_Debris & Base<Rbx_Debris> & AnyIndex;
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
type DebugSettings = Rbx_DebugSettings & Base<Rbx_DebugSettings> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "DebugSettings"): this is DebugSettings;
	FindFirstAncestorOfClass(className: "DebugSettings"): DebugSettings | undefined;
	FindFirstAncestorWhichIsA(className: "DebugSettings"): DebugSettings | undefined;
	FindFirstChildOfClass(className: "DebugSettings"): DebugSettings | undefined;
	FindFirstAncestorWhichIsA(className: "DebugSettings"): DebugSettings | undefined;
}

// DebuggerBreakpoint
interface Rbx_DebuggerBreakpoint extends Rbx_Instance {
	Condition: string;
	IsEnabled: boolean;
	readonly Line: number;
}
interface DebuggerBreakpoint extends Rbx_DebuggerBreakpoint, Base<Rbx_DebuggerBreakpoint>, AnyIndex {}
declare abstract class DebuggerBreakpoint {
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
interface DebuggerManager extends Rbx_DebuggerManager, Base<Rbx_DebuggerManager>, AnyIndex {}
declare abstract class DebuggerManager {
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
interface DebuggerWatch extends Rbx_DebuggerWatch, Base<Rbx_DebuggerWatch>, AnyIndex {}
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
interface Dialog extends Rbx_Dialog, Base<Rbx_Dialog>, AnyIndex {}
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
interface DialogChoice extends Rbx_DialogChoice, Base<Rbx_DialogChoice>, AnyIndex {}
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
interface Dragger extends Rbx_Dragger, Base<Rbx_Dragger>, AnyIndex {}
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
interface Explosion extends Rbx_Explosion, Base<Rbx_Explosion>, AnyIndex {}
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
interface FaceInstance extends Rbx_FaceInstance, Base<Rbx_FaceInstance>, AnyIndex {}
declare abstract class FaceInstance {
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
interface Decal extends Rbx_Decal, Base<Rbx_Decal>, AnyIndex {}
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
interface Texture extends Rbx_Texture, Base<Rbx_Texture>, AnyIndex {}
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
interface Feature extends Rbx_Feature, Base<Rbx_Feature>, AnyIndex {}
declare abstract class Feature {
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
interface Hole extends Rbx_Hole, Base<Rbx_Hole>, AnyIndex {}
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
interface MotorFeature extends Rbx_MotorFeature, Base<Rbx_MotorFeature>, AnyIndex {}
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
interface Fire extends Rbx_Fire, Base<Rbx_Fire>, AnyIndex {}
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
type FlagStandService = Rbx_FlagStandService & Base<Rbx_FlagStandService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "FlagStandService"): this is FlagStandService;
	FindFirstAncestorOfClass(className: "FlagStandService"): FlagStandService | undefined;
	FindFirstAncestorWhichIsA(className: "FlagStandService"): FlagStandService | undefined;
	FindFirstChildOfClass(className: "FlagStandService"): FlagStandService | undefined;
	FindFirstAncestorWhichIsA(className: "FlagStandService"): FlagStandService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "FlagStandService"): FlagStandService;
}

// FlyweightService
interface Rbx_FlyweightService extends Rbx_Instance {
}
type FlyweightService = Rbx_FlyweightService & Base<Rbx_FlyweightService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "FlyweightService"): this is FlyweightService;
	FindFirstAncestorOfClass(className: "FlyweightService"): FlyweightService | undefined;
	FindFirstAncestorWhichIsA(className: "FlyweightService"): FlyweightService | undefined;
	FindFirstChildOfClass(className: "FlyweightService"): FlyweightService | undefined;
	FindFirstAncestorWhichIsA(className: "FlyweightService"): FlyweightService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "FlyweightService"): FlyweightService;
}

// CSGDictionaryService
interface Rbx_CSGDictionaryService extends Rbx_FlyweightService {
}
type CSGDictionaryService = Rbx_CSGDictionaryService & Base<Rbx_CSGDictionaryService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "CSGDictionaryService"): this is CSGDictionaryService;
	FindFirstAncestorOfClass(className: "CSGDictionaryService"): CSGDictionaryService | undefined;
	FindFirstAncestorWhichIsA(className: "CSGDictionaryService"): CSGDictionaryService | undefined;
	FindFirstChildOfClass(className: "CSGDictionaryService"): CSGDictionaryService | undefined;
	FindFirstAncestorWhichIsA(className: "CSGDictionaryService"): CSGDictionaryService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "CSGDictionaryService"): CSGDictionaryService;
}

// NonReplicatedCSGDictionaryService
interface Rbx_NonReplicatedCSGDictionaryService extends Rbx_FlyweightService {
}
type NonReplicatedCSGDictionaryService = Rbx_NonReplicatedCSGDictionaryService & Base<Rbx_NonReplicatedCSGDictionaryService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "NonReplicatedCSGDictionaryService"): this is NonReplicatedCSGDictionaryService;
	FindFirstAncestorOfClass(className: "NonReplicatedCSGDictionaryService"): NonReplicatedCSGDictionaryService | undefined;
	FindFirstAncestorWhichIsA(className: "NonReplicatedCSGDictionaryService"): NonReplicatedCSGDictionaryService | undefined;
	FindFirstChildOfClass(className: "NonReplicatedCSGDictionaryService"): NonReplicatedCSGDictionaryService | undefined;
	FindFirstAncestorWhichIsA(className: "NonReplicatedCSGDictionaryService"): NonReplicatedCSGDictionaryService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "NonReplicatedCSGDictionaryService"): NonReplicatedCSGDictionaryService;
}

// Folder
interface Rbx_Folder extends Rbx_Instance {
}
interface Folder extends Rbx_Folder, Base<Rbx_Folder>, AnyIndex {}
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
interface ForceField extends Rbx_ForceField, Base<Rbx_ForceField>, AnyIndex {}
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
type FriendService = Rbx_FriendService & Base<Rbx_FriendService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "FriendService"): this is FriendService;
	FindFirstAncestorOfClass(className: "FriendService"): FriendService | undefined;
	FindFirstAncestorWhichIsA(className: "FriendService"): FriendService | undefined;
	FindFirstChildOfClass(className: "FriendService"): FriendService | undefined;
	FindFirstAncestorWhichIsA(className: "FriendService"): FriendService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "FriendService"): FriendService;
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
interface FunctionalTest extends Rbx_FunctionalTest, Base<Rbx_FunctionalTest>, AnyIndex {}
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
type GamePassService = Rbx_GamePassService & Base<Rbx_GamePassService> & AnyIndex;
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
interface GameSettings extends Rbx_GameSettings, Base<Rbx_GameSettings>, AnyIndex {}
declare class GameSettings {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "GameSettings"): this is GameSettings;
	FindFirstAncestorOfClass(className: "GameSettings"): GameSettings | undefined;
	FindFirstAncestorWhichIsA(className: "GameSettings"): GameSettings | undefined;
	FindFirstChildOfClass(className: "GameSettings"): GameSettings | undefined;
	FindFirstAncestorWhichIsA(className: "GameSettings"): GameSettings | undefined;
}

// GamepadService
interface Rbx_GamepadService extends Rbx_Instance {
}
type GamepadService = Rbx_GamepadService & Base<Rbx_GamepadService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "GamepadService"): this is GamepadService;
	FindFirstAncestorOfClass(className: "GamepadService"): GamepadService | undefined;
	FindFirstAncestorWhichIsA(className: "GamepadService"): GamepadService | undefined;
	FindFirstChildOfClass(className: "GamepadService"): GamepadService | undefined;
	FindFirstAncestorWhichIsA(className: "GamepadService"): GamepadService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "GamepadService"): GamepadService;
}

// Geometry
interface Rbx_Geometry extends Rbx_Instance {
}
type Geometry = Rbx_Geometry & Base<Rbx_Geometry> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Geometry"): this is Geometry;
	FindFirstAncestorOfClass(className: "Geometry"): Geometry | undefined;
	FindFirstAncestorWhichIsA(className: "Geometry"): Geometry | undefined;
	FindFirstChildOfClass(className: "Geometry"): Geometry | undefined;
	FindFirstAncestorWhichIsA(className: "Geometry"): Geometry | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "Geometry"): Geometry;
}

// GlobalDataStore
interface Rbx_GlobalDataStore extends Rbx_Instance {
	OnUpdate(key: string, callback: Function): RBXScriptConnection;
	GetAsync(key: string): any;
	IncrementAsync(key: string, delta?: number): any;
	RemoveAsync(key: string): any;
	SetAsync(key: string, value?: any): void;
	UpdateAsync(key: string, transformFunction: Function): Array<any>;
}
interface GlobalDataStore extends Rbx_GlobalDataStore, Base<Rbx_GlobalDataStore>, AnyIndex {}
declare abstract class GlobalDataStore {
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
interface OrderedDataStore extends Rbx_OrderedDataStore, Base<Rbx_OrderedDataStore>, AnyIndex {}
declare abstract class OrderedDataStore {
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
type GoogleAnalyticsConfiguration = Rbx_GoogleAnalyticsConfiguration & Base<Rbx_GoogleAnalyticsConfiguration> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "GoogleAnalyticsConfiguration"): this is GoogleAnalyticsConfiguration;
	FindFirstAncestorOfClass(className: "GoogleAnalyticsConfiguration"): GoogleAnalyticsConfiguration | undefined;
	FindFirstAncestorWhichIsA(className: "GoogleAnalyticsConfiguration"): GoogleAnalyticsConfiguration | undefined;
	FindFirstChildOfClass(className: "GoogleAnalyticsConfiguration"): GoogleAnalyticsConfiguration | undefined;
	FindFirstAncestorWhichIsA(className: "GoogleAnalyticsConfiguration"): GoogleAnalyticsConfiguration | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "GoogleAnalyticsConfiguration"): GoogleAnalyticsConfiguration;
}

// GroupService
interface Rbx_GroupService extends Rbx_Instance {
}
type GroupService = Rbx_GroupService & Base<Rbx_GroupService> & AnyIndex;
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
interface GuiBase extends Rbx_GuiBase, Base<Rbx_GuiBase>, AnyIndex {}
declare abstract class GuiBase {
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
	RootLocalizationTable: LocalizationTable;
}
interface GuiBase2d extends Rbx_GuiBase2d, Base<Rbx_GuiBase2d>, AnyIndex {}
declare abstract class GuiBase2d {
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
	NextSelectionDown: GuiObject;
	NextSelectionLeft: GuiObject;
	NextSelectionRight: GuiObject;
	NextSelectionUp: GuiObject;
	Position: UDim2;
	Rotation: number;
	Selectable: boolean;
	SelectionImageObject: GuiObject;
	Size: UDim2;
	SizeConstraint: Enum.SizeConstraint;
	Transparency: number;
	Visible: boolean;
	ZIndex: number;
	TweenPosition(endPosition: UDim2, easingDirection?: Enum.EasingDirection, easingStyle?: Enum.EasingStyle, time?: number, override?: boolean, callback?: Function): boolean;
	TweenSize(endSize: UDim2, easingDirection?: Enum.EasingDirection, easingStyle?: Enum.EasingStyle, time?: number, override?: boolean, callback?: Function): boolean;
	TweenSizeAndPosition(endSize: UDim2, endPosition: UDim2, easingDirection?: Enum.EasingDirection, easingStyle?: Enum.EasingStyle, time?: number, override?: boolean, callback?: Function): boolean;
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
	TouchSwipe: RBXScriptSignal<(swipeDirection: Enum.SwipeDirection, numberOfTouches: number) => void>;
}
interface GuiObject extends Rbx_GuiObject, Base<Rbx_GuiObject>, AnyIndex {}
declare abstract class GuiObject {
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
interface Frame extends Rbx_Frame, Base<Rbx_Frame>, AnyIndex {}
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
interface GuiButton extends Rbx_GuiButton, Base<Rbx_GuiButton>, AnyIndex {}
declare abstract class GuiButton {
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
	HoverImage: string;
	Image: string;
	ImageColor3: Color3;
	ImageRectOffset: Vector2;
	ImageRectSize: Vector2;
	ImageTransparency: number;
	readonly IsLoaded: boolean;
	PressedImage: string;
	ScaleType: Enum.ScaleType;
	SliceCenter: Rect;
	TileSize: UDim2;
}
interface ImageButton extends Rbx_ImageButton, Base<Rbx_ImageButton>, AnyIndex {}
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
interface TextButton extends Rbx_TextButton, Base<Rbx_TextButton>, AnyIndex {}
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
interface GuiLabel extends Rbx_GuiLabel, Base<Rbx_GuiLabel>, AnyIndex {}
declare abstract class GuiLabel {
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
interface ImageLabel extends Rbx_ImageLabel, Base<Rbx_ImageLabel>, AnyIndex {}
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
interface TextLabel extends Rbx_TextLabel, Base<Rbx_TextLabel>, AnyIndex {}
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

// ScrollingFrame
interface Rbx_ScrollingFrame extends Rbx_GuiObject {
	readonly AbsoluteWindowSize: Vector2;
	BottomImage: string;
	CanvasPosition: Vector2;
	CanvasSize: UDim2;
	ElasticBehavior: Enum.ElasticBehavior;
	HorizontalScrollBarInset: Enum.ScrollBarInset;
	MidImage: string;
	ScrollBarImageColor3: Color3;
	ScrollBarImageTransparency: number;
	ScrollBarThickness: number;
	ScrollingDirection: Enum.ScrollingDirection;
	ScrollingEnabled: boolean;
	TopImage: string;
	VerticalScrollBarInset: Enum.ScrollBarInset;
	VerticalScrollBarPosition: Enum.VerticalScrollBarPosition;
}
interface ScrollingFrame extends Rbx_ScrollingFrame, Base<Rbx_ScrollingFrame>, AnyIndex {}
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
interface TextBox extends Rbx_TextBox, Base<Rbx_TextBox>, AnyIndex {}
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
interface LayerCollector extends Rbx_LayerCollector, Base<Rbx_LayerCollector>, AnyIndex {}
declare abstract class LayerCollector {
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
interface BillboardGui extends Rbx_BillboardGui, Base<Rbx_BillboardGui>, AnyIndex {}
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
	Title: string;
	BindToClose(callback?: Function): void;
}
interface PluginGui extends Rbx_PluginGui, Base<Rbx_PluginGui>, AnyIndex {}
declare abstract class PluginGui {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PluginGui"): this is PluginGui;
	FindFirstAncestorOfClass(className: "PluginGui"): PluginGui | undefined;
	FindFirstAncestorWhichIsA(className: "PluginGui"): PluginGui | undefined;
	FindFirstChildOfClass(className: "PluginGui"): PluginGui | undefined;
	FindFirstAncestorWhichIsA(className: "PluginGui"): PluginGui | undefined;
}

// DockWidgetPluginGui
interface Rbx_DockWidgetPluginGui extends Rbx_PluginGui {
	readonly HostWidgetWasRestored: boolean;
}
interface DockWidgetPluginGui extends Rbx_DockWidgetPluginGui, Base<Rbx_DockWidgetPluginGui>, AnyIndex {}
declare abstract class DockWidgetPluginGui {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "DockWidgetPluginGui"): this is DockWidgetPluginGui;
	FindFirstAncestorOfClass(className: "DockWidgetPluginGui"): DockWidgetPluginGui | undefined;
	FindFirstAncestorWhichIsA(className: "DockWidgetPluginGui"): DockWidgetPluginGui | undefined;
	FindFirstChildOfClass(className: "DockWidgetPluginGui"): DockWidgetPluginGui | undefined;
	FindFirstAncestorWhichIsA(className: "DockWidgetPluginGui"): DockWidgetPluginGui | undefined;
}

// QWidgetPluginGui
interface Rbx_QWidgetPluginGui extends Rbx_PluginGui {
}
interface QWidgetPluginGui extends Rbx_QWidgetPluginGui, Base<Rbx_QWidgetPluginGui>, AnyIndex {}
declare abstract class QWidgetPluginGui {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "QWidgetPluginGui"): this is QWidgetPluginGui;
	FindFirstAncestorOfClass(className: "QWidgetPluginGui"): QWidgetPluginGui | undefined;
	FindFirstAncestorWhichIsA(className: "QWidgetPluginGui"): QWidgetPluginGui | undefined;
	FindFirstChildOfClass(className: "QWidgetPluginGui"): QWidgetPluginGui | undefined;
	FindFirstAncestorWhichIsA(className: "QWidgetPluginGui"): QWidgetPluginGui | undefined;
}

// ScreenGui
interface Rbx_ScreenGui extends Rbx_LayerCollector {
	DisplayOrder: number;
	IgnoreGuiInset: boolean;
}
interface ScreenGui extends Rbx_ScreenGui, Base<Rbx_ScreenGui>, AnyIndex {}
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
interface GuiMain extends Rbx_GuiMain, Base<Rbx_GuiMain>, AnyIndex {}
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
interface SurfaceGui extends Rbx_SurfaceGui, Base<Rbx_SurfaceGui>, AnyIndex {}
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
interface GuiBase3d extends Rbx_GuiBase3d, Base<Rbx_GuiBase3d>, AnyIndex {}
declare abstract class GuiBase3d {
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
	From: BasePart;
	StudsBetweenTextures: number;
	Texture: string;
	TextureSize: Vector2;
	To: BasePart;
	Velocity: number;
	WireRadius: number;
}
interface FloorWire extends Rbx_FloorWire, Base<Rbx_FloorWire>, AnyIndex {}
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
	Adornee: PVInstance;
}
interface PVAdornment extends Rbx_PVAdornment, Base<Rbx_PVAdornment>, AnyIndex {}
declare abstract class PVAdornment {
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
interface HandleAdornment extends Rbx_HandleAdornment, Base<Rbx_HandleAdornment>, AnyIndex {}
declare abstract class HandleAdornment {
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
interface BoxHandleAdornment extends Rbx_BoxHandleAdornment, Base<Rbx_BoxHandleAdornment>, AnyIndex {}
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
interface ConeHandleAdornment extends Rbx_ConeHandleAdornment, Base<Rbx_ConeHandleAdornment>, AnyIndex {}
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
interface CylinderHandleAdornment extends Rbx_CylinderHandleAdornment, Base<Rbx_CylinderHandleAdornment>, AnyIndex {}
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
interface ImageHandleAdornment extends Rbx_ImageHandleAdornment, Base<Rbx_ImageHandleAdornment>, AnyIndex {}
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
interface LineHandleAdornment extends Rbx_LineHandleAdornment, Base<Rbx_LineHandleAdornment>, AnyIndex {}
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
interface SphereHandleAdornment extends Rbx_SphereHandleAdornment, Base<Rbx_SphereHandleAdornment>, AnyIndex {}
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
interface ParabolaAdornment extends Rbx_ParabolaAdornment, Base<Rbx_ParabolaAdornment>, AnyIndex {}
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
interface SelectionBox extends Rbx_SelectionBox, Base<Rbx_SelectionBox>, AnyIndex {}
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
interface SelectionSphere extends Rbx_SelectionSphere, Base<Rbx_SelectionSphere>, AnyIndex {}
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
	Adornee: BasePart;
}
interface PartAdornment extends Rbx_PartAdornment, Base<Rbx_PartAdornment>, AnyIndex {}
declare abstract class PartAdornment {
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
interface HandlesBase extends Rbx_HandlesBase, Base<Rbx_HandlesBase>, AnyIndex {}
declare abstract class HandlesBase {
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
interface ArcHandles extends Rbx_ArcHandles, Base<Rbx_ArcHandles>, AnyIndex {}
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
interface Handles extends Rbx_Handles, Base<Rbx_Handles>, AnyIndex {}
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
interface SurfaceSelection extends Rbx_SurfaceSelection, Base<Rbx_SurfaceSelection>, AnyIndex {}
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
	Humanoid: Humanoid;
}
interface SelectionLasso extends Rbx_SelectionLasso, Base<Rbx_SelectionLasso>, AnyIndex {}
declare abstract class SelectionLasso {
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
	Part: BasePart;
}
interface SelectionPartLasso extends Rbx_SelectionPartLasso, Base<Rbx_SelectionPartLasso>, AnyIndex {}
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
interface SelectionPointLasso extends Rbx_SelectionPointLasso, Base<Rbx_SelectionPointLasso>, AnyIndex {}
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
interface GuiItem extends Rbx_GuiItem, Base<Rbx_GuiItem>, AnyIndex {}
declare abstract class GuiItem {
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
interface Backpack extends Rbx_Backpack, Base<Rbx_Backpack>, AnyIndex {}
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
interface BackpackItem extends Rbx_BackpackItem, Base<Rbx_BackpackItem>, AnyIndex {}
declare abstract class BackpackItem {
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
interface HopperBin extends Rbx_HopperBin, Base<Rbx_HopperBin>, AnyIndex {}
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
interface Tool extends Rbx_Tool, Base<Rbx_Tool>, AnyIndex {}
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
interface Flag extends Rbx_Flag, Base<Rbx_Flag>, AnyIndex {}
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
interface ButtonBindingWidget extends Rbx_ButtonBindingWidget, Base<Rbx_ButtonBindingWidget>, AnyIndex {}
declare abstract class ButtonBindingWidget {
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
interface GuiRoot extends Rbx_GuiRoot, Base<Rbx_GuiRoot>, AnyIndex {}
declare abstract class GuiRoot {
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
type Hopper = Rbx_Hopper & Base<Rbx_Hopper> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Hopper"): this is Hopper;
	FindFirstAncestorOfClass(className: "Hopper"): Hopper | undefined;
	FindFirstAncestorWhichIsA(className: "Hopper"): Hopper | undefined;
	FindFirstChildOfClass(className: "Hopper"): Hopper | undefined;
	FindFirstAncestorWhichIsA(className: "Hopper"): Hopper | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "Hopper"): Hopper;
}

// StarterPack
interface Rbx_StarterPack extends Rbx_GuiItem {
}
type StarterPack = Rbx_StarterPack & Base<Rbx_StarterPack> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "StarterPack"): this is StarterPack;
	FindFirstAncestorOfClass(className: "StarterPack"): StarterPack | undefined;
	FindFirstAncestorWhichIsA(className: "StarterPack"): StarterPack | undefined;
	FindFirstChildOfClass(className: "StarterPack"): StarterPack | undefined;
	FindFirstAncestorWhichIsA(className: "StarterPack"): StarterPack | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "StarterPack"): StarterPack;
}

// GuiService
interface Rbx_GuiService extends Rbx_Instance {
	AutoSelectGuiEnabled: boolean;
	CoreGuiNavigationEnabled: boolean;
	GuiNavigationEnabled: boolean;
	readonly MenuIsOpen: boolean;
	SelectedObject: GuiObject;
	IsTenFootInterface(): boolean;
	RemoveSelectionGroup(selectionName: string): void;
	MenuClosed: RBXScriptSignal<() => void>;
	MenuOpened: RBXScriptSignal<() => void>;
}
type GuiService = Rbx_GuiService & Base<Rbx_GuiService> & AnyIndex;
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
type GuidRegistryService = Rbx_GuidRegistryService & Base<Rbx_GuidRegistryService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "GuidRegistryService"): this is GuidRegistryService;
	FindFirstAncestorOfClass(className: "GuidRegistryService"): GuidRegistryService | undefined;
	FindFirstAncestorWhichIsA(className: "GuidRegistryService"): GuidRegistryService | undefined;
	FindFirstChildOfClass(className: "GuidRegistryService"): GuidRegistryService | undefined;
	FindFirstAncestorWhichIsA(className: "GuidRegistryService"): GuidRegistryService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "GuidRegistryService"): GuidRegistryService;
}

// HapticService
interface Rbx_HapticService extends Rbx_Instance {
	IsMotorSupported(inputType: Enum.UserInputType, vibrationMotor: Enum.VibrationMotor): boolean;
	IsVibrationSupported(inputType: Enum.UserInputType): boolean;
}
type HapticService = Rbx_HapticService & Base<Rbx_HapticService> & AnyIndex;
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
type HttpRbxApiService = Rbx_HttpRbxApiService & Base<Rbx_HttpRbxApiService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "HttpRbxApiService"): this is HttpRbxApiService;
	FindFirstAncestorOfClass(className: "HttpRbxApiService"): HttpRbxApiService | undefined;
	FindFirstAncestorWhichIsA(className: "HttpRbxApiService"): HttpRbxApiService | undefined;
	FindFirstChildOfClass(className: "HttpRbxApiService"): HttpRbxApiService | undefined;
	FindFirstAncestorWhichIsA(className: "HttpRbxApiService"): HttpRbxApiService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "HttpRbxApiService"): HttpRbxApiService;
}

// HttpRequest
interface Rbx_HttpRequest extends Rbx_Instance {
}
interface HttpRequest extends Rbx_HttpRequest, Base<Rbx_HttpRequest>, AnyIndex {}
declare abstract class HttpRequest {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "HttpRequest"): this is HttpRequest;
	FindFirstAncestorOfClass(className: "HttpRequest"): HttpRequest | undefined;
	FindFirstAncestorWhichIsA(className: "HttpRequest"): HttpRequest | undefined;
	FindFirstChildOfClass(className: "HttpRequest"): HttpRequest | undefined;
	FindFirstAncestorWhichIsA(className: "HttpRequest"): HttpRequest | undefined;
}

// HttpService
interface Rbx_HttpService extends Rbx_Instance {
	GenerateGUID(wrapInCurlyBraces?: boolean): string;
	JSONDecode(input: string): any;
	JSONEncode(input?: any): string;
	UrlEncode(input: string): string;
}
type HttpService = Rbx_HttpService & Base<Rbx_HttpService> & AnyIndex;
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
	AutomaticScalingEnabled: boolean;
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
	readonly RootPart: BasePart;
	readonly SeatPart: BasePart;
	Sit: boolean;
	TargetPoint: Vector3;
	WalkSpeed: number;
	WalkToPart: BasePart;
	WalkToPoint: Vector3;
	BuildRigFromAttachments(): void;
	ChangeState(state?: Enum.HumanoidStateType): void;
	GetState(): Enum.HumanoidStateType;
	GetStateEnabled(state: Enum.HumanoidStateType): boolean;
	Move(moveDirection: Vector3, relativeToCamera?: boolean): void;
	RemoveAccessories(): void;
	SetStateEnabled(state: Enum.HumanoidStateType, enabled: boolean): void;
	TakeDamage(amount: number): void;
	UnequipTools(): void;
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
	StateChanged: RBXScriptSignal<(oldValue: Enum.HumanoidStateType, newValue: Enum.HumanoidStateType) => void>;
	StateEnabledChanged: RBXScriptSignal<(state: Enum.HumanoidStateType, isEnabled: boolean) => void>;
	Strafing: RBXScriptSignal<(active: boolean) => void>;
	Swimming: RBXScriptSignal<(speed: number) => void>;
}
interface Humanoid extends Rbx_Humanoid, Base<Rbx_Humanoid>, AnyIndex {}
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
interface InputObject extends Rbx_InputObject, Base<Rbx_InputObject>, AnyIndex {}
declare abstract class InputObject {
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
	GetBaseSets(): Array<any>;
	GetCollection(categoryId: number): Array<any>;
	GetFreeDecals(searchText: string, pageNum: number): Array<any>;
	GetFreeModels(searchText: string, pageNum: number): Array<any>;
	GetLatestAssetVersionAsync(assetId: number): number;
	GetUserSets(userId: number): Array<any>;
	LoadAsset(assetId: number): Instance | undefined;
	LoadAssetVersion(assetVersionId: number): Instance | undefined;
}
type InsertService = Rbx_InsertService & Base<Rbx_InsertService> & AnyIndex;
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
type InstancePacketCache = Rbx_InstancePacketCache & Base<Rbx_InstancePacketCache> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "InstancePacketCache"): this is InstancePacketCache;
	FindFirstAncestorOfClass(className: "InstancePacketCache"): InstancePacketCache | undefined;
	FindFirstAncestorWhichIsA(className: "InstancePacketCache"): InstancePacketCache | undefined;
	FindFirstChildOfClass(className: "InstancePacketCache"): InstancePacketCache | undefined;
	FindFirstAncestorWhichIsA(className: "InstancePacketCache"): InstancePacketCache | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "InstancePacketCache"): InstancePacketCache;
}

// JointInstance
interface Rbx_JointInstance extends Rbx_Instance {
	C0: CFrame;
	C1: CFrame;
	Part0: BasePart;
	Part1: BasePart;
}
interface JointInstance extends Rbx_JointInstance, Base<Rbx_JointInstance>, AnyIndex {}
declare abstract class JointInstance {
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
interface DynamicRotate extends Rbx_DynamicRotate, Base<Rbx_DynamicRotate>, AnyIndex {}
declare abstract class DynamicRotate {
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
interface RotateP extends Rbx_RotateP, Base<Rbx_RotateP>, AnyIndex {}
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
interface RotateV extends Rbx_RotateV, Base<Rbx_RotateV>, AnyIndex {}
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
interface Glue extends Rbx_Glue, Base<Rbx_Glue>, AnyIndex {}
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
interface ManualSurfaceJointInstance extends Rbx_ManualSurfaceJointInstance, Base<Rbx_ManualSurfaceJointInstance>, AnyIndex {}
declare abstract class ManualSurfaceJointInstance {
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
interface ManualGlue extends Rbx_ManualGlue, Base<Rbx_ManualGlue>, AnyIndex {}
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
interface ManualWeld extends Rbx_ManualWeld, Base<Rbx_ManualWeld>, AnyIndex {}
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
interface Motor extends Rbx_Motor, Base<Rbx_Motor>, AnyIndex {}
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
interface Motor6D extends Rbx_Motor6D, Base<Rbx_Motor6D>, AnyIndex {}
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
interface Rotate extends Rbx_Rotate, Base<Rbx_Rotate>, AnyIndex {}
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
interface Snap extends Rbx_Snap, Base<Rbx_Snap>, AnyIndex {}
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
	Hole: Hole;
	MaxVelocity: number;
}
interface VelocityMotor extends Rbx_VelocityMotor, Base<Rbx_VelocityMotor>, AnyIndex {}
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
interface Weld extends Rbx_Weld, Base<Rbx_Weld>, AnyIndex {}
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
type JointsService = Rbx_JointsService & Base<Rbx_JointsService> & AnyIndex;
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
type KeyboardService = Rbx_KeyboardService & Base<Rbx_KeyboardService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "KeyboardService"): this is KeyboardService;
	FindFirstAncestorOfClass(className: "KeyboardService"): KeyboardService | undefined;
	FindFirstAncestorWhichIsA(className: "KeyboardService"): KeyboardService | undefined;
	FindFirstChildOfClass(className: "KeyboardService"): KeyboardService | undefined;
	FindFirstAncestorWhichIsA(className: "KeyboardService"): KeyboardService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "KeyboardService"): KeyboardService;
}

// Keyframe
interface Rbx_Keyframe extends Rbx_Instance {
	Time: number;
	AddPose(pose: Instance): void;
	GetPoses(): Array<Instance>;
	RemovePose(pose: Instance): void;
}
interface Keyframe extends Rbx_Keyframe, Base<Rbx_Keyframe>, AnyIndex {}
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
interface KeyframeSequence extends Rbx_KeyframeSequence, Base<Rbx_KeyframeSequence>, AnyIndex {}
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
type KeyframeSequenceProvider = Rbx_KeyframeSequenceProvider & Base<Rbx_KeyframeSequenceProvider> & AnyIndex;
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
interface Light extends Rbx_Light, Base<Rbx_Light>, AnyIndex {}
declare abstract class Light {
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
interface PointLight extends Rbx_PointLight, Base<Rbx_PointLight>, AnyIndex {}
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
interface SpotLight extends Rbx_SpotLight, Base<Rbx_SpotLight>, AnyIndex {}
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
interface SurfaceLight extends Rbx_SurfaceLight, Base<Rbx_SurfaceLight>, AnyIndex {}
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
	ExposureCompensation: number;
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
type Lighting = Rbx_Lighting & Base<Rbx_Lighting> & AnyIndex;
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
type LocalizationService = Rbx_LocalizationService & Base<Rbx_LocalizationService> & AnyIndex;
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
interface LocalizationTable extends Rbx_LocalizationTable, Base<Rbx_LocalizationTable>, AnyIndex {}
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
type LogService = Rbx_LogService & Base<Rbx_LogService> & AnyIndex;
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
type LoginService = Rbx_LoginService & Base<Rbx_LoginService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "LoginService"): this is LoginService;
	FindFirstAncestorOfClass(className: "LoginService"): LoginService | undefined;
	FindFirstAncestorWhichIsA(className: "LoginService"): LoginService | undefined;
	FindFirstChildOfClass(className: "LoginService"): LoginService | undefined;
	FindFirstAncestorWhichIsA(className: "LoginService"): LoginService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "LoginService"): LoginService;
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
interface LuaSettings extends Rbx_LuaSettings, Base<Rbx_LuaSettings>, AnyIndex {}
declare class LuaSettings {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "LuaSettings"): this is LuaSettings;
	FindFirstAncestorOfClass(className: "LuaSettings"): LuaSettings | undefined;
	FindFirstAncestorWhichIsA(className: "LuaSettings"): LuaSettings | undefined;
	FindFirstChildOfClass(className: "LuaSettings"): LuaSettings | undefined;
	FindFirstAncestorWhichIsA(className: "LuaSettings"): LuaSettings | undefined;
}

// LuaSourceContainer
interface Rbx_LuaSourceContainer extends Rbx_Instance {
}
interface LuaSourceContainer extends Rbx_LuaSourceContainer, Base<Rbx_LuaSourceContainer>, AnyIndex {}
declare abstract class LuaSourceContainer {
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
interface BaseScript extends Rbx_BaseScript, Base<Rbx_BaseScript>, AnyIndex {}
declare abstract class BaseScript {
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
interface CoreScript extends Rbx_CoreScript, Base<Rbx_CoreScript>, AnyIndex {}
declare abstract class CoreScript {
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
interface Script extends Rbx_Script, Base<Rbx_Script>, AnyIndex {}
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
interface LocalScript extends Rbx_LocalScript, Base<Rbx_LocalScript>, AnyIndex {}
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
interface ModuleScript extends Rbx_ModuleScript, Base<Rbx_ModuleScript>, AnyIndex {}
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
type LuaWebService = Rbx_LuaWebService & Base<Rbx_LuaWebService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "LuaWebService"): this is LuaWebService;
	FindFirstAncestorOfClass(className: "LuaWebService"): LuaWebService | undefined;
	FindFirstAncestorWhichIsA(className: "LuaWebService"): LuaWebService | undefined;
	FindFirstChildOfClass(className: "LuaWebService"): LuaWebService | undefined;
	FindFirstAncestorWhichIsA(className: "LuaWebService"): LuaWebService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "LuaWebService"): LuaWebService;
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
type MarketplaceService = Rbx_MarketplaceService & Base<Rbx_MarketplaceService> & AnyIndex;
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
interface Message extends Rbx_Message, Base<Rbx_Message>, AnyIndex {}
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
interface Hint extends Rbx_Hint, Base<Rbx_Hint>, AnyIndex {}
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
	readonly Target: BasePart;
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
interface Mouse extends Rbx_Mouse, Base<Rbx_Mouse>, AnyIndex {}
declare abstract class Mouse {
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
interface PlayerMouse extends Rbx_PlayerMouse, Base<Rbx_PlayerMouse>, AnyIndex {}
declare abstract class PlayerMouse {
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
interface PluginMouse extends Rbx_PluginMouse, Base<Rbx_PluginMouse>, AnyIndex {}
declare abstract class PluginMouse {
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
type MouseService = Rbx_MouseService & Base<Rbx_MouseService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "MouseService"): this is MouseService;
	FindFirstAncestorOfClass(className: "MouseService"): MouseService | undefined;
	FindFirstAncestorWhichIsA(className: "MouseService"): MouseService | undefined;
	FindFirstChildOfClass(className: "MouseService"): MouseService | undefined;
	FindFirstAncestorWhichIsA(className: "MouseService"): MouseService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "MouseService"): MouseService;
}

// NetworkMarker
interface Rbx_NetworkMarker extends Rbx_Instance {
	Received: RBXScriptSignal<() => void>;
}
interface NetworkMarker extends Rbx_NetworkMarker, Base<Rbx_NetworkMarker>, AnyIndex {}
declare abstract class NetworkMarker {
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
interface NetworkPeer extends Rbx_NetworkPeer, Base<Rbx_NetworkPeer>, AnyIndex {}
declare abstract class NetworkPeer {
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
type NetworkClient = Rbx_NetworkClient & Base<Rbx_NetworkClient> & AnyIndex;
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
type NetworkServer = Rbx_NetworkServer & Base<Rbx_NetworkServer> & AnyIndex;
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
interface NetworkReplicator extends Rbx_NetworkReplicator, Base<Rbx_NetworkReplicator>, AnyIndex {}
declare abstract class NetworkReplicator {
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
interface ClientReplicator extends Rbx_ClientReplicator, Base<Rbx_ClientReplicator>, AnyIndex {}
declare abstract class ClientReplicator {
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
interface ServerReplicator extends Rbx_ServerReplicator, Base<Rbx_ServerReplicator>, AnyIndex {}
declare abstract class ServerReplicator {
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
type NetworkSettings = Rbx_NetworkSettings & Base<Rbx_NetworkSettings> & AnyIndex;
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
type NotificationService = Rbx_NotificationService & Base<Rbx_NotificationService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "NotificationService"): this is NotificationService;
	FindFirstAncestorOfClass(className: "NotificationService"): NotificationService | undefined;
	FindFirstAncestorWhichIsA(className: "NotificationService"): NotificationService | undefined;
	FindFirstChildOfClass(className: "NotificationService"): NotificationService | undefined;
	FindFirstAncestorWhichIsA(className: "NotificationService"): NotificationService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "NotificationService"): NotificationService;
}

// PVInstance
interface Rbx_PVInstance extends Rbx_Instance {
}
interface PVInstance extends Rbx_PVInstance, Base<Rbx_PVInstance>, AnyIndex {}
declare abstract class PVInstance {
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
	// custom lua state
	GetMass(): number;
	GetNetworkOwnershipAuto(): boolean;
	IsGrounded(): boolean;
	MakeJoints(): void;
	Resize(normalId: Enum.NormalId, deltaAmount: number): boolean;
	SetNetworkOwnershipAuto(): void;
}
interface BasePart extends Rbx_BasePart, Base<Rbx_BasePart>, AnyIndex {}
declare abstract class BasePart {
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
interface CornerWedgePart extends Rbx_CornerWedgePart, Base<Rbx_CornerWedgePart>, AnyIndex {}
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
interface FormFactorPart extends Rbx_FormFactorPart, Base<Rbx_FormFactorPart>, AnyIndex {}
declare abstract class FormFactorPart {
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
interface Part extends Rbx_Part, Base<Rbx_Part>, AnyIndex {}
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
interface FlagStand extends Rbx_FlagStand, Base<Rbx_FlagStand>, AnyIndex {}
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
interface Platform extends Rbx_Platform, Base<Rbx_Platform>, AnyIndex {}
declare abstract class Platform {
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
	readonly Occupant: Humanoid;
	Sit(humanoid: Instance): void;
}
interface Seat extends Rbx_Seat, Base<Rbx_Seat>, AnyIndex {}
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
	readonly Controller: SkateboardController;
	readonly ControllingHumanoid: Humanoid;
	Steer: number;
	StickyWheels: boolean;
	Throttle: number;
	ApplySpecificImpulse(impulseWorld: Vector3): void;
	Equipped: RBXScriptSignal<(humanoid: Instance, skateboardController: Instance) => void>;
	MoveStateChanged: RBXScriptSignal<(newState: Enum.MoveState, oldState: Enum.MoveState) => void>;
	Unequipped: RBXScriptSignal<(humanoid: Instance) => void>;
}
interface SkateboardPlatform extends Rbx_SkateboardPlatform, Base<Rbx_SkateboardPlatform>, AnyIndex {}
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
interface SpawnLocation extends Rbx_SpawnLocation, Base<Rbx_SpawnLocation>, AnyIndex {}
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
interface WedgePart extends Rbx_WedgePart, Base<Rbx_WedgePart>, AnyIndex {}
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
	readonly MeshId: string;
	TextureID: string;
}
interface MeshPart extends Rbx_MeshPart, Base<Rbx_MeshPart>, AnyIndex {}
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
	readonly TriangleCount: number;
	UsePartColor: boolean;
}
interface PartOperation extends Rbx_PartOperation, Base<Rbx_PartOperation>, AnyIndex {}
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
interface NegateOperation extends Rbx_NegateOperation, Base<Rbx_NegateOperation>, AnyIndex {}
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
interface UnionOperation extends Rbx_UnionOperation, Base<Rbx_UnionOperation>, AnyIndex {}
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
interface Terrain extends Rbx_Terrain, Base<Rbx_Terrain>, AnyIndex {}
declare abstract class Terrain {
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
interface TrussPart extends Rbx_TrussPart, Base<Rbx_TrussPart>, AnyIndex {}
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
	readonly Occupant: Humanoid;
	Steer: number;
	SteerFloat: number;
	Throttle: number;
	ThrottleFloat: number;
	Torque: number;
	TurnSpeed: number;
	Sit(humanoid: Instance): void;
}
interface VehicleSeat extends Rbx_VehicleSeat, Base<Rbx_VehicleSeat>, AnyIndex {}
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
	PrimaryPart: BasePart;
	BreakJoints(): void;
	GetExtentsSize(): Vector3;
	GetPrimaryPartCFrame(): CFrame;
	MakeJoints(): void;
	MoveTo(position: Vector3): void;
	SetPrimaryPartCFrame(cframe: CFrame): void;
	TranslateBy(delta: Vector3): void;
}
interface Model extends Rbx_Model, Base<Rbx_Model>, AnyIndex {}
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

// Status
interface Rbx_Status extends Rbx_Model {
}
interface Status extends Rbx_Status, Base<Rbx_Status>, AnyIndex {}
declare abstract class Status {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Status"): this is Status;
	FindFirstAncestorOfClass(className: "Status"): Status | undefined;
	FindFirstAncestorWhichIsA(className: "Status"): Status | undefined;
	FindFirstChildOfClass(className: "Status"): Status | undefined;
	FindFirstAncestorWhichIsA(className: "Status"): Status | undefined;
}

// Workspace
interface Rbx_Workspace extends Rbx_Model {
	AllowThirdPartySales: boolean;
	CurrentCamera: Camera;
	DistributedGameTime: number;
	readonly FallenPartsDestroyHeight: number;
	readonly FilteringEnabled: boolean;
	Gravity: number;
	StreamingEnabled: boolean;
	TemporaryLegacyPhysicsSolverOverride: boolean;
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
type Workspace = Rbx_Workspace & Base<Rbx_Workspace> & AnyIndex;
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

// PackageLink
interface Rbx_PackageLink extends Rbx_Instance {
	readonly PackageId: string;
	readonly VersionNumber: number;
}
interface PackageLink extends Rbx_PackageLink, Base<Rbx_PackageLink>, AnyIndex {}
declare abstract class PackageLink {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PackageLink"): this is PackageLink;
	FindFirstAncestorOfClass(className: "PackageLink"): PackageLink | undefined;
	FindFirstAncestorWhichIsA(className: "PackageLink"): PackageLink | undefined;
	FindFirstChildOfClass(className: "PackageLink"): PackageLink | undefined;
	FindFirstAncestorWhichIsA(className: "PackageLink"): PackageLink | undefined;
}

// Pages
interface Rbx_Pages extends Rbx_Instance {
	readonly IsFinished: boolean;
	GetCurrentPage(): Array<any>;
	AdvanceToNextPageAsync(): void;
}
interface Pages extends Rbx_Pages, Base<Rbx_Pages>, AnyIndex {}
declare abstract class Pages {
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
interface DataStorePages extends Rbx_DataStorePages, Base<Rbx_DataStorePages>, AnyIndex {}
declare abstract class DataStorePages {
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
interface FriendPages extends Rbx_FriendPages, Base<Rbx_FriendPages>, AnyIndex {}
declare abstract class FriendPages {
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
interface InventoryPages extends Rbx_InventoryPages, Base<Rbx_InventoryPages>, AnyIndex {}
declare abstract class InventoryPages {
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
interface StandardPages extends Rbx_StandardPages, Base<Rbx_StandardPages>, AnyIndex {}
declare abstract class StandardPages {
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
interface PartOperationAsset extends Rbx_PartOperationAsset, Base<Rbx_PartOperationAsset>, AnyIndex {}
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
interface ParticleEmitter extends Rbx_ParticleEmitter, Base<Rbx_ParticleEmitter>, AnyIndex {}
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
interface Path extends Rbx_Path, Base<Rbx_Path>, AnyIndex {}
declare abstract class Path {
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
type PathfindingService = Rbx_PathfindingService & Base<Rbx_PathfindingService> & AnyIndex;
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
type PhysicsPacketCache = Rbx_PhysicsPacketCache & Base<Rbx_PhysicsPacketCache> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "PhysicsPacketCache"): this is PhysicsPacketCache;
	FindFirstAncestorOfClass(className: "PhysicsPacketCache"): PhysicsPacketCache | undefined;
	FindFirstAncestorWhichIsA(className: "PhysicsPacketCache"): PhysicsPacketCache | undefined;
	FindFirstChildOfClass(className: "PhysicsPacketCache"): PhysicsPacketCache | undefined;
	FindFirstAncestorWhichIsA(className: "PhysicsPacketCache"): PhysicsPacketCache | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "PhysicsPacketCache"): PhysicsPacketCache;
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
type PhysicsService = Rbx_PhysicsService & Base<Rbx_PhysicsService> & AnyIndex;
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
interface PhysicsSettings extends Rbx_PhysicsSettings, Base<Rbx_PhysicsSettings>, AnyIndex {}
declare class PhysicsSettings {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PhysicsSettings"): this is PhysicsSettings;
	FindFirstAncestorOfClass(className: "PhysicsSettings"): PhysicsSettings | undefined;
	FindFirstAncestorWhichIsA(className: "PhysicsSettings"): PhysicsSettings | undefined;
	FindFirstChildOfClass(className: "PhysicsSettings"): PhysicsSettings | undefined;
	FindFirstAncestorWhichIsA(className: "PhysicsSettings"): PhysicsSettings | undefined;
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
	RespawnLocation: SpawnLocation;
	Team: Team;
	TeamColor: BrickColor;
	UserId: number;
	ClearCharacterAppearance(): void;
	DistanceFromCharacter(point: Vector3): number;
	GetJoinData(): object;
	GetMouse(): Instance | undefined;
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
interface Player extends Rbx_Player, Base<Rbx_Player>, AnyIndex {}
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
interface PlayerScripts extends Rbx_PlayerScripts, Base<Rbx_PlayerScripts>, AnyIndex {}
declare abstract class PlayerScripts {
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
	GetNameFromUserIdAsync(userId: number): string;
	GetUserIdFromNameAsync(userName: string): number;
}
type Players = Rbx_Players & Base<Rbx_Players> & AnyIndex;
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

// Plugin
interface Rbx_Plugin extends Rbx_Instance {
	readonly CollisionEnabled: boolean;
	readonly GridSize: number;
}
interface Plugin extends Rbx_Plugin, Base<Rbx_Plugin>, AnyIndex {}
declare abstract class Plugin {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "Plugin"): this is Plugin;
	FindFirstAncestorOfClass(className: "Plugin"): Plugin | undefined;
	FindFirstAncestorWhichIsA(className: "Plugin"): Plugin | undefined;
	FindFirstChildOfClass(className: "Plugin"): Plugin | undefined;
	FindFirstAncestorWhichIsA(className: "Plugin"): Plugin | undefined;
}

// PluginAction
interface Rbx_PluginAction extends Rbx_Instance {
	readonly ActionId: string;
	readonly StatusTip: string;
	readonly Text: string;
}
interface PluginAction extends Rbx_PluginAction, Base<Rbx_PluginAction>, AnyIndex {}
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

// PluginDragEvent
interface Rbx_PluginDragEvent extends Rbx_Instance {
	readonly Data: string;
	readonly MimeType: string;
	readonly Position: Vector2;
	readonly Sender: string;
}
interface PluginDragEvent extends Rbx_PluginDragEvent, Base<Rbx_PluginDragEvent>, AnyIndex {}
declare abstract class PluginDragEvent {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "PluginDragEvent"): this is PluginDragEvent;
	FindFirstAncestorOfClass(className: "PluginDragEvent"): PluginDragEvent | undefined;
	FindFirstAncestorWhichIsA(className: "PluginDragEvent"): PluginDragEvent | undefined;
	FindFirstChildOfClass(className: "PluginDragEvent"): PluginDragEvent | undefined;
	FindFirstAncestorWhichIsA(className: "PluginDragEvent"): PluginDragEvent | undefined;
}

// PluginGuiService
interface Rbx_PluginGuiService extends Rbx_Instance {
}
type PluginGuiService = Rbx_PluginGuiService & Base<Rbx_PluginGuiService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "PluginGuiService"): this is PluginGuiService;
	FindFirstAncestorOfClass(className: "PluginGuiService"): PluginGuiService | undefined;
	FindFirstAncestorWhichIsA(className: "PluginGuiService"): PluginGuiService | undefined;
	FindFirstChildOfClass(className: "PluginGuiService"): PluginGuiService | undefined;
	FindFirstAncestorWhichIsA(className: "PluginGuiService"): PluginGuiService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "PluginGuiService"): PluginGuiService;
}

// PluginManager
interface Rbx_PluginManager extends Rbx_Instance {
}
interface PluginManager extends Rbx_PluginManager, Base<Rbx_PluginManager>, AnyIndex {}
declare abstract class PluginManager {
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
	AwardPoints(userId: number, amount: number): Array<any>;
	GetGamePointBalance(userId: number): number;
	PointsAwarded: RBXScriptSignal<(userId: number, pointsAwarded: number, userBalanceInGame: number, userTotalBalance: number) => void>;
}
type PointsService = Rbx_PointsService & Base<Rbx_PointsService> & AnyIndex;
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
interface Pose extends Rbx_Pose, Base<Rbx_Pose>, AnyIndex {}
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
interface PostEffect extends Rbx_PostEffect, Base<Rbx_PostEffect>, AnyIndex {}
declare abstract class PostEffect {
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
interface BloomEffect extends Rbx_BloomEffect, Base<Rbx_BloomEffect>, AnyIndex {}
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
interface BlurEffect extends Rbx_BlurEffect, Base<Rbx_BlurEffect>, AnyIndex {}
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
interface ColorCorrectionEffect extends Rbx_ColorCorrectionEffect, Base<Rbx_ColorCorrectionEffect>, AnyIndex {}
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
interface SunRaysEffect extends Rbx_SunRaysEffect, Base<Rbx_SunRaysEffect>, AnyIndex {}
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

// ReflectionMetadata
interface Rbx_ReflectionMetadata extends Rbx_Instance {
}
interface ReflectionMetadata extends Rbx_ReflectionMetadata, Base<Rbx_ReflectionMetadata>, AnyIndex {}
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
interface ReflectionMetadataCallbacks extends Rbx_ReflectionMetadataCallbacks, Base<Rbx_ReflectionMetadataCallbacks>, AnyIndex {}
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
interface ReflectionMetadataClasses extends Rbx_ReflectionMetadataClasses, Base<Rbx_ReflectionMetadataClasses>, AnyIndex {}
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
interface ReflectionMetadataEnums extends Rbx_ReflectionMetadataEnums, Base<Rbx_ReflectionMetadataEnums>, AnyIndex {}
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
interface ReflectionMetadataEvents extends Rbx_ReflectionMetadataEvents, Base<Rbx_ReflectionMetadataEvents>, AnyIndex {}
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
interface ReflectionMetadataFunctions extends Rbx_ReflectionMetadataFunctions, Base<Rbx_ReflectionMetadataFunctions>, AnyIndex {}
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
interface ReflectionMetadataItem extends Rbx_ReflectionMetadataItem, Base<Rbx_ReflectionMetadataItem>, AnyIndex {}
declare abstract class ReflectionMetadataItem {
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
interface ReflectionMetadataClass extends Rbx_ReflectionMetadataClass, Base<Rbx_ReflectionMetadataClass>, AnyIndex {}
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
interface ReflectionMetadataEnum extends Rbx_ReflectionMetadataEnum, Base<Rbx_ReflectionMetadataEnum>, AnyIndex {}
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
interface ReflectionMetadataEnumItem extends Rbx_ReflectionMetadataEnumItem, Base<Rbx_ReflectionMetadataEnumItem>, AnyIndex {}
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
interface ReflectionMetadataMember extends Rbx_ReflectionMetadataMember, Base<Rbx_ReflectionMetadataMember>, AnyIndex {}
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
interface ReflectionMetadataProperties extends Rbx_ReflectionMetadataProperties, Base<Rbx_ReflectionMetadataProperties>, AnyIndex {}
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
interface ReflectionMetadataYieldFunctions extends Rbx_ReflectionMetadataYieldFunctions, Base<Rbx_ReflectionMetadataYieldFunctions>, AnyIndex {}
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
interface RemoteEvent extends Rbx_RemoteEvent, Base<Rbx_RemoteEvent>, AnyIndex {}
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
interface RemoteFunction extends Rbx_RemoteFunction, Base<Rbx_RemoteFunction>, AnyIndex {}
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
type RenderSettings = Rbx_RenderSettings & Base<Rbx_RenderSettings> & AnyIndex;
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

// RenderingTest
interface Rbx_RenderingTest extends Rbx_Instance {
	CFrame: CFrame;
	ComparisonDiffThreshold: number;
	ComparisonMethod: Enum.RenderingTestComparisonMethod;
	ComparisonPsnrThreshold: number;
	Description: string;
	FieldOfView: number;
	Orientation: Vector3;
	Position: Vector3;
	QualityLevel: number;
	ShouldSkip: boolean;
	Ticket: string;
}
interface RenderingTest extends Rbx_RenderingTest, Base<Rbx_RenderingTest>, AnyIndex {}
declare class RenderingTest {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "RenderingTest"): this is RenderingTest;
	FindFirstAncestorOfClass(className: "RenderingTest"): RenderingTest | undefined;
	FindFirstAncestorWhichIsA(className: "RenderingTest"): RenderingTest | undefined;
	FindFirstChildOfClass(className: "RenderingTest"): RenderingTest | undefined;
	FindFirstAncestorWhichIsA(className: "RenderingTest"): RenderingTest | undefined;
}

// ReplicatedFirst
interface Rbx_ReplicatedFirst extends Rbx_Instance {
	RemoveDefaultLoadingScreen(): void;
}
type ReplicatedFirst = Rbx_ReplicatedFirst & Base<Rbx_ReplicatedFirst> & AnyIndex;
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
type ReplicatedStorage = Rbx_ReplicatedStorage & Base<Rbx_ReplicatedStorage> & AnyIndex;
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
type RobloxReplicatedStorage = Rbx_RobloxReplicatedStorage & Base<Rbx_RobloxReplicatedStorage> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "RobloxReplicatedStorage"): this is RobloxReplicatedStorage;
	FindFirstAncestorOfClass(className: "RobloxReplicatedStorage"): RobloxReplicatedStorage | undefined;
	FindFirstAncestorWhichIsA(className: "RobloxReplicatedStorage"): RobloxReplicatedStorage | undefined;
	FindFirstChildOfClass(className: "RobloxReplicatedStorage"): RobloxReplicatedStorage | undefined;
	FindFirstAncestorWhichIsA(className: "RobloxReplicatedStorage"): RobloxReplicatedStorage | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "RobloxReplicatedStorage"): RobloxReplicatedStorage;
}

// RunService
interface Rbx_RunService extends Rbx_Instance {
	BindToRenderStep(name: string, priority: number, callback: Function): void;
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
type RunService = Rbx_RunService & Base<Rbx_RunService> & AnyIndex;
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
type RuntimeScriptService = Rbx_RuntimeScriptService & Base<Rbx_RuntimeScriptService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "RuntimeScriptService"): this is RuntimeScriptService;
	FindFirstAncestorOfClass(className: "RuntimeScriptService"): RuntimeScriptService | undefined;
	FindFirstAncestorWhichIsA(className: "RuntimeScriptService"): RuntimeScriptService | undefined;
	FindFirstChildOfClass(className: "RuntimeScriptService"): RuntimeScriptService | undefined;
	FindFirstAncestorWhichIsA(className: "RuntimeScriptService"): RuntimeScriptService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "RuntimeScriptService"): RuntimeScriptService;
}

// ScriptContext
interface Rbx_ScriptContext extends Rbx_Instance {
	Error: RBXScriptSignal<(message: string, stackTrace: string, script: Instance) => void>;
}
type ScriptContext = Rbx_ScriptContext & Base<Rbx_ScriptContext> & AnyIndex;
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
interface ScriptDebugger extends Rbx_ScriptDebugger, Base<Rbx_ScriptDebugger>, AnyIndex {}
declare abstract class ScriptDebugger {
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
type ScriptService = Rbx_ScriptService & Base<Rbx_ScriptService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ScriptService"): this is ScriptService;
	FindFirstAncestorOfClass(className: "ScriptService"): ScriptService | undefined;
	FindFirstAncestorWhichIsA(className: "ScriptService"): ScriptService | undefined;
	FindFirstChildOfClass(className: "ScriptService"): ScriptService | undefined;
	FindFirstAncestorWhichIsA(className: "ScriptService"): ScriptService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "ScriptService"): ScriptService;
}

// Selection
interface Rbx_Selection extends Rbx_Instance {
	SelectionChanged: RBXScriptSignal<() => void>;
}
type Selection = Rbx_Selection & Base<Rbx_Selection> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Selection"): this is Selection;
	FindFirstAncestorOfClass(className: "Selection"): Selection | undefined;
	FindFirstAncestorWhichIsA(className: "Selection"): Selection | undefined;
	FindFirstChildOfClass(className: "Selection"): Selection | undefined;
	FindFirstAncestorWhichIsA(className: "Selection"): Selection | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "Selection"): Selection;
}

// ServerScriptService
interface Rbx_ServerScriptService extends Rbx_Instance {
}
type ServerScriptService = Rbx_ServerScriptService & Base<Rbx_ServerScriptService> & AnyIndex;
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
type ServerStorage = Rbx_ServerStorage & Base<Rbx_ServerStorage> & AnyIndex;
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
interface ServiceProvider extends Rbx_ServiceProvider, Base<Rbx_ServiceProvider>, AnyIndex {}
declare abstract class ServiceProvider {
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
	readonly PrivateServerId: string;
	readonly PrivateServerOwnerId: number;
	readonly Workspace: Workspace;
	BindToClose(callback: Function): void;
	IsGearTypeAllowed(gearType: Enum.GearType): boolean;
	IsLoaded(): boolean;
	GraphicsQualityChangeRequest: RBXScriptSignal<(betterQuality: boolean) => void>;
	Loaded: RBXScriptSignal<() => void>;
}
interface DataModel extends Rbx_DataModel, Base<Rbx_DataModel>, AnyIndex {}
declare abstract class DataModel {
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
interface GenericSettings extends Rbx_GenericSettings, Base<Rbx_GenericSettings>, AnyIndex {}
declare abstract class GenericSettings {
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
interface AnalysticsSettings extends Rbx_AnalysticsSettings, Base<Rbx_AnalysticsSettings>, AnyIndex {}
declare abstract class AnalysticsSettings {
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
interface GlobalSettings extends Rbx_GlobalSettings, Base<Rbx_GlobalSettings>, AnyIndex {}
declare abstract class GlobalSettings {
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
type UserSettings = Rbx_UserSettings & Base<Rbx_UserSettings> & AnyIndex;
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
interface Sky extends Rbx_Sky, Base<Rbx_Sky>, AnyIndex {}
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
interface Smoke extends Rbx_Smoke, Base<Rbx_Smoke>, AnyIndex {}
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
	SoundGroup: SoundGroup;
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
interface Sound extends Rbx_Sound, Base<Rbx_Sound>, AnyIndex {}
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
interface SoundEffect extends Rbx_SoundEffect, Base<Rbx_SoundEffect>, AnyIndex {}
declare abstract class SoundEffect {
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
interface ChorusSoundEffect extends Rbx_ChorusSoundEffect, Base<Rbx_ChorusSoundEffect>, AnyIndex {}
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
interface CompressorSoundEffect extends Rbx_CompressorSoundEffect, Base<Rbx_CompressorSoundEffect>, AnyIndex {}
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
interface DistortionSoundEffect extends Rbx_DistortionSoundEffect, Base<Rbx_DistortionSoundEffect>, AnyIndex {}
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
interface EchoSoundEffect extends Rbx_EchoSoundEffect, Base<Rbx_EchoSoundEffect>, AnyIndex {}
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
interface EqualizerSoundEffect extends Rbx_EqualizerSoundEffect, Base<Rbx_EqualizerSoundEffect>, AnyIndex {}
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
interface FlangeSoundEffect extends Rbx_FlangeSoundEffect, Base<Rbx_FlangeSoundEffect>, AnyIndex {}
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
interface PitchShiftSoundEffect extends Rbx_PitchShiftSoundEffect, Base<Rbx_PitchShiftSoundEffect>, AnyIndex {}
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
interface ReverbSoundEffect extends Rbx_ReverbSoundEffect, Base<Rbx_ReverbSoundEffect>, AnyIndex {}
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
interface TremoloSoundEffect extends Rbx_TremoloSoundEffect, Base<Rbx_TremoloSoundEffect>, AnyIndex {}
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
interface SoundGroup extends Rbx_SoundGroup, Base<Rbx_SoundGroup>, AnyIndex {}
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
	GetListener(): Array<any>;
	PlayLocalSound(sound: Instance): void;
	SetListener(listenerType: Enum.ListenerType, listener: Array<any>): void;
}
type SoundService = Rbx_SoundService & Base<Rbx_SoundService> & AnyIndex;
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
interface Sparkles extends Rbx_Sparkles, Base<Rbx_Sparkles>, AnyIndex {}
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
type SpawnerService = Rbx_SpawnerService & Base<Rbx_SpawnerService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "SpawnerService"): this is SpawnerService;
	FindFirstAncestorOfClass(className: "SpawnerService"): SpawnerService | undefined;
	FindFirstAncestorWhichIsA(className: "SpawnerService"): SpawnerService | undefined;
	FindFirstChildOfClass(className: "SpawnerService"): SpawnerService | undefined;
	FindFirstAncestorWhichIsA(className: "SpawnerService"): SpawnerService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "SpawnerService"): SpawnerService;
}

// StarterGear
interface Rbx_StarterGear extends Rbx_Instance {
}
interface StarterGear extends Rbx_StarterGear, Base<Rbx_StarterGear>, AnyIndex {}
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
type StarterPlayer = Rbx_StarterPlayer & Base<Rbx_StarterPlayer> & AnyIndex;
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
interface StarterPlayerScripts extends Rbx_StarterPlayerScripts, Base<Rbx_StarterPlayerScripts>, AnyIndex {}
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
interface StarterCharacterScripts extends Rbx_StarterCharacterScripts, Base<Rbx_StarterCharacterScripts>, AnyIndex {}
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
type Stats = Rbx_Stats & Base<Rbx_Stats> & AnyIndex;
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
interface StatsItem extends Rbx_StatsItem, Base<Rbx_StatsItem>, AnyIndex {}
declare abstract class StatsItem {
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
interface RunningAverageItemDouble extends Rbx_RunningAverageItemDouble, Base<Rbx_RunningAverageItemDouble>, AnyIndex {}
declare abstract class RunningAverageItemDouble {
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
interface RunningAverageItemInt extends Rbx_RunningAverageItemInt, Base<Rbx_RunningAverageItemInt>, AnyIndex {}
declare abstract class RunningAverageItemInt {
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
interface RunningAverageTimeIntervalItem extends Rbx_RunningAverageTimeIntervalItem, Base<Rbx_RunningAverageTimeIntervalItem>, AnyIndex {}
declare abstract class RunningAverageTimeIntervalItem {
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
interface TotalCountTimeIntervalItem extends Rbx_TotalCountTimeIntervalItem, Base<Rbx_TotalCountTimeIntervalItem>, AnyIndex {}
declare abstract class TotalCountTimeIntervalItem {
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
	["Built-in Function Color"]: Color3;
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
	Theme: Instance | undefined;
	["UI Theme"]: Enum.UITheme;
	["Use Accurate Play Solo"]: boolean;
	["Warning Color"]: Color3;
}
type Studio = Rbx_Studio & Base<Rbx_Studio> & AnyIndex;
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

// StudioTheme
interface Rbx_StudioTheme extends Rbx_Instance {
}
interface StudioTheme extends Rbx_StudioTheme, Base<Rbx_StudioTheme>, AnyIndex {}
declare abstract class StudioTheme {
	constructor(parent?: Instance);
}
interface Rbx_Instance {
	IsA(className: "StudioTheme"): this is StudioTheme;
	FindFirstAncestorOfClass(className: "StudioTheme"): StudioTheme | undefined;
	FindFirstAncestorWhichIsA(className: "StudioTheme"): StudioTheme | undefined;
	FindFirstChildOfClass(className: "StudioTheme"): StudioTheme | undefined;
	FindFirstAncestorWhichIsA(className: "StudioTheme"): StudioTheme | undefined;
}

// TaskScheduler
interface Rbx_TaskScheduler extends Rbx_Instance {
	readonly SchedulerDutyCycle: number;
	readonly SchedulerRate: number;
	ThreadPoolConfig: Enum.ThreadPoolConfig;
	readonly ThreadPoolSize: number;
}
type TaskScheduler = Rbx_TaskScheduler & Base<Rbx_TaskScheduler> & AnyIndex;
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
interface Team extends Rbx_Team, Base<Rbx_Team>, AnyIndex {}
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
type Teams = Rbx_Teams & Base<Rbx_Teams> & AnyIndex;
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
	GetArrivingTeleportGui(): Instance | undefined;
	GetLocalPlayerTeleportData(): any;
	GetTeleportSetting(setting: string): any;
	SetTeleportGui(gui: Instance): void;
	SetTeleportSetting(setting: string, value?: any): void;
	Teleport(placeId: number, player?: Instance, teleportData?: any, customLoadingScreen?: Instance): void;
	TeleportToPlaceInstance(placeId: number, instanceId: string, player?: Instance, spawnName?: string, teleportData?: any, customLoadingScreen?: Instance): void;
	TeleportToPrivateServer(placeId: number, reservedServerAccessCode: string, players: Array<Instance>, spawnName?: string, teleportData?: any, customLoadingScreen?: Instance): void;
	TeleportToSpawnByName(placeId: number, spawnName: string, player?: Instance, teleportData?: any, customLoadingScreen?: Instance): void;
	GetPlayerPlaceInstanceAsync(userId: number): Array<any>;
	ReserveServer(placeId: number): Array<any>;
	TeleportPartyAsync(placeId: number, players: Array<Instance>, teleportData?: any, customLoadingScreen?: Instance): string;
	LocalPlayerArrivedFromTeleport: RBXScriptSignal<(loadingGui: Instance, dataTable?: any) => void>;
	TeleportInitFailed: RBXScriptSignal<(player: Instance, teleportResult: Enum.TeleportResult, errorMessage: string) => void>;
}
type TeleportService = Rbx_TeleportService & Base<Rbx_TeleportService> & AnyIndex;
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
interface TerrainRegion extends Rbx_TerrainRegion, Base<Rbx_TerrainRegion>, AnyIndex {}
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
type TestService = Rbx_TestService & Base<Rbx_TestService> & AnyIndex;
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
interface TextFilterResult extends Rbx_TextFilterResult, Base<Rbx_TextFilterResult>, AnyIndex {}
declare abstract class TextFilterResult {
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
type TextService = Rbx_TextService & Base<Rbx_TextService> & AnyIndex;
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
type ThirdPartyUserService = Rbx_ThirdPartyUserService & Base<Rbx_ThirdPartyUserService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "ThirdPartyUserService"): this is ThirdPartyUserService;
	FindFirstAncestorOfClass(className: "ThirdPartyUserService"): ThirdPartyUserService | undefined;
	FindFirstAncestorWhichIsA(className: "ThirdPartyUserService"): ThirdPartyUserService | undefined;
	FindFirstChildOfClass(className: "ThirdPartyUserService"): ThirdPartyUserService | undefined;
	FindFirstAncestorWhichIsA(className: "ThirdPartyUserService"): ThirdPartyUserService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "ThirdPartyUserService"): ThirdPartyUserService;
}

// TimerService
interface Rbx_TimerService extends Rbx_Instance {
}
type TimerService = Rbx_TimerService & Base<Rbx_TimerService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "TimerService"): this is TimerService;
	FindFirstAncestorOfClass(className: "TimerService"): TimerService | undefined;
	FindFirstAncestorWhichIsA(className: "TimerService"): TimerService | undefined;
	FindFirstChildOfClass(className: "TimerService"): TimerService | undefined;
	FindFirstAncestorWhichIsA(className: "TimerService"): TimerService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "TimerService"): TimerService;
}

// Toolbar
interface Rbx_Toolbar extends Rbx_Instance {
}
interface Toolbar extends Rbx_Toolbar, Base<Rbx_Toolbar>, AnyIndex {}
declare abstract class Toolbar {
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
type TouchInputService = Rbx_TouchInputService & Base<Rbx_TouchInputService> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "TouchInputService"): this is TouchInputService;
	FindFirstAncestorOfClass(className: "TouchInputService"): TouchInputService | undefined;
	FindFirstAncestorWhichIsA(className: "TouchInputService"): TouchInputService | undefined;
	FindFirstChildOfClass(className: "TouchInputService"): TouchInputService | undefined;
	FindFirstAncestorWhichIsA(className: "TouchInputService"): TouchInputService | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "TouchInputService"): TouchInputService;
}

// TouchTransmitter
interface Rbx_TouchTransmitter extends Rbx_Instance {
}
interface TouchTransmitter extends Rbx_TouchTransmitter, Base<Rbx_TouchTransmitter>, AnyIndex {}
declare abstract class TouchTransmitter {
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
	Attachment0: Attachment;
	Attachment1: Attachment;
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
interface Trail extends Rbx_Trail, Base<Rbx_Trail>, AnyIndex {}
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
interface Translator extends Rbx_Translator, Base<Rbx_Translator>, AnyIndex {}
declare abstract class Translator {
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
interface TweenBase extends Rbx_TweenBase, Base<Rbx_TweenBase>, AnyIndex {}
declare abstract class TweenBase {
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
interface Tween extends Rbx_Tween, Base<Rbx_Tween>, AnyIndex {}
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
}
type TweenService = Rbx_TweenService & Base<Rbx_TweenService> & AnyIndex;
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
interface UIBase extends Rbx_UIBase, Base<Rbx_UIBase>, AnyIndex {}
declare abstract class UIBase {
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
interface UIComponent extends Rbx_UIComponent, Base<Rbx_UIComponent>, AnyIndex {}
declare abstract class UIComponent {
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
interface UIConstraint extends Rbx_UIConstraint, Base<Rbx_UIConstraint>, AnyIndex {}
declare abstract class UIConstraint {
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
interface UIAspectRatioConstraint extends Rbx_UIAspectRatioConstraint, Base<Rbx_UIAspectRatioConstraint>, AnyIndex {}
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
interface UISizeConstraint extends Rbx_UISizeConstraint, Base<Rbx_UISizeConstraint>, AnyIndex {}
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
interface UITextSizeConstraint extends Rbx_UITextSizeConstraint, Base<Rbx_UITextSizeConstraint>, AnyIndex {}
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
interface UILayout extends Rbx_UILayout, Base<Rbx_UILayout>, AnyIndex {}
declare abstract class UILayout {
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
interface UIGridStyleLayout extends Rbx_UIGridStyleLayout, Base<Rbx_UIGridStyleLayout>, AnyIndex {}
declare abstract class UIGridStyleLayout {
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
interface UIGridLayout extends Rbx_UIGridLayout, Base<Rbx_UIGridLayout>, AnyIndex {}
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
interface UIListLayout extends Rbx_UIListLayout, Base<Rbx_UIListLayout>, AnyIndex {}
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
	readonly CurrentPage: GuiObject;
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
interface UIPageLayout extends Rbx_UIPageLayout, Base<Rbx_UIPageLayout>, AnyIndex {}
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
interface UITableLayout extends Rbx_UITableLayout, Base<Rbx_UITableLayout>, AnyIndex {}
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
interface UIPadding extends Rbx_UIPadding, Base<Rbx_UIPadding>, AnyIndex {}
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
interface UIScale extends Rbx_UIScale, Base<Rbx_UIScale>, AnyIndex {}
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
type UserGameSettings = Rbx_UserGameSettings & Base<Rbx_UserGameSettings> & AnyIndex;
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
type UserInputService = Rbx_UserInputService & Base<Rbx_UserInputService> & AnyIndex;
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
type VRService = Rbx_VRService & Base<Rbx_VRService> & AnyIndex;
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
interface ValueBase extends Rbx_ValueBase, Base<Rbx_ValueBase>, AnyIndex {}
declare abstract class ValueBase {
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
interface BinaryStringValue extends Rbx_BinaryStringValue, Base<Rbx_BinaryStringValue>, AnyIndex {}
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
interface BoolValue extends Rbx_BoolValue, Base<Rbx_BoolValue>, AnyIndex {}
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
interface BrickColorValue extends Rbx_BrickColorValue, Base<Rbx_BrickColorValue>, AnyIndex {}
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
interface CFrameValue extends Rbx_CFrameValue, Base<Rbx_CFrameValue>, AnyIndex {}
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
interface Color3Value extends Rbx_Color3Value, Base<Rbx_Color3Value>, AnyIndex {}
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
interface DoubleConstrainedValue extends Rbx_DoubleConstrainedValue, Base<Rbx_DoubleConstrainedValue>, AnyIndex {}
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
interface IntConstrainedValue extends Rbx_IntConstrainedValue, Base<Rbx_IntConstrainedValue>, AnyIndex {}
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
interface IntValue extends Rbx_IntValue, Base<Rbx_IntValue>, AnyIndex {}
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
interface NumberValue extends Rbx_NumberValue, Base<Rbx_NumberValue>, AnyIndex {}
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
interface ObjectValue extends Rbx_ObjectValue, Base<Rbx_ObjectValue>, AnyIndex {}
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
interface RayValue extends Rbx_RayValue, Base<Rbx_RayValue>, AnyIndex {}
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
interface StringValue extends Rbx_StringValue, Base<Rbx_StringValue>, AnyIndex {}
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
interface Vector3Value extends Rbx_Vector3Value, Base<Rbx_Vector3Value>, AnyIndex {}
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
type VirtualInputManager = Rbx_VirtualInputManager & Base<Rbx_VirtualInputManager> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "VirtualInputManager"): this is VirtualInputManager;
	FindFirstAncestorOfClass(className: "VirtualInputManager"): VirtualInputManager | undefined;
	FindFirstAncestorWhichIsA(className: "VirtualInputManager"): VirtualInputManager | undefined;
	FindFirstChildOfClass(className: "VirtualInputManager"): VirtualInputManager | undefined;
	FindFirstAncestorWhichIsA(className: "VirtualInputManager"): VirtualInputManager | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "VirtualInputManager"): VirtualInputManager;
}

// VirtualUser
interface Rbx_VirtualUser extends Rbx_Instance {
}
type VirtualUser = Rbx_VirtualUser & Base<Rbx_VirtualUser> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "VirtualUser"): this is VirtualUser;
	FindFirstAncestorOfClass(className: "VirtualUser"): VirtualUser | undefined;
	FindFirstAncestorWhichIsA(className: "VirtualUser"): VirtualUser | undefined;
	FindFirstChildOfClass(className: "VirtualUser"): VirtualUser | undefined;
	FindFirstAncestorWhichIsA(className: "VirtualUser"): VirtualUser | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "VirtualUser"): VirtualUser;
}

// Visit
interface Rbx_Visit extends Rbx_Instance {
}
type Visit = Rbx_Visit & Base<Rbx_Visit> & AnyIndex;
interface Rbx_Instance {
	IsA(className: "Visit"): this is Visit;
	FindFirstAncestorOfClass(className: "Visit"): Visit | undefined;
	FindFirstAncestorWhichIsA(className: "Visit"): Visit | undefined;
	FindFirstChildOfClass(className: "Visit"): Visit | undefined;
	FindFirstAncestorWhichIsA(className: "Visit"): Visit | undefined;
}
interface Rbx_ServiceProvider extends Rbx_Instance {
	GetService(className: "Visit"): Visit;
}

// WeldConstraint
interface Rbx_WeldConstraint extends Rbx_Instance {
	Enabled: boolean;
	Part0: BasePart;
	Part1: BasePart;
}
interface WeldConstraint extends Rbx_WeldConstraint, Base<Rbx_WeldConstraint>, AnyIndex {}
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

