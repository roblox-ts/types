// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!

/// <reference no-default-lib="true"/>
/// <reference path="../roblox.d.ts" />

// GENERATED ROBLOX ENUMS

type Enums = typeof Enum;

interface EnumItem {
	Name: string;
	Value: number;
	EnumType: Enum;
	IsA<T extends keyof typeof Enum>(name: T): this is typeof Enum[T][Exclude<keyof typeof Enum[T], "GetEnumItems">];
}

interface Enum {
	GetEnumItems(this: Enum): Array<EnumItem>;
}

declare namespace Enum {
	export function GetEnums(this: Enums): Array<Enum>;

	export namespace AccessoryType {
		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof AccessoryType;
		}

		export const Unknown: Unknown;

		export interface Hat extends EnumItem {
			Name: "Hat";
			Value: 1;
			EnumType: typeof AccessoryType;
		}

		export const Hat: Hat;

		export interface Hair extends EnumItem {
			Name: "Hair";
			Value: 2;
			EnumType: typeof AccessoryType;
		}

		export const Hair: Hair;

		export interface Face extends EnumItem {
			Name: "Face";
			Value: 3;
			EnumType: typeof AccessoryType;
		}

		export const Face: Face;

		export interface Neck extends EnumItem {
			Name: "Neck";
			Value: 4;
			EnumType: typeof AccessoryType;
		}

		export const Neck: Neck;

		export interface Shoulder extends EnumItem {
			Name: "Shoulder";
			Value: 5;
			EnumType: typeof AccessoryType;
		}

		export const Shoulder: Shoulder;

		export interface Front extends EnumItem {
			Name: "Front";
			Value: 6;
			EnumType: typeof AccessoryType;
		}

		export const Front: Front;

		export interface Back extends EnumItem {
			Name: "Back";
			Value: 7;
			EnumType: typeof AccessoryType;
		}

		export const Back: Back;

		export interface Waist extends EnumItem {
			Name: "Waist";
			Value: 8;
			EnumType: typeof AccessoryType;
		}

		export const Waist: Waist;

		export interface TShirt extends EnumItem {
			Name: "TShirt";
			Value: 9;
			EnumType: typeof AccessoryType;
		}

		export const TShirt: TShirt;
		/** @deprecated renamed to TShirt */
		export const TeeShirt: TShirt;

		export interface Shirt extends EnumItem {
			Name: "Shirt";
			Value: 10;
			EnumType: typeof AccessoryType;
		}

		export const Shirt: Shirt;

		export interface Pants extends EnumItem {
			Name: "Pants";
			Value: 11;
			EnumType: typeof AccessoryType;
		}

		export const Pants: Pants;

		export interface Jacket extends EnumItem {
			Name: "Jacket";
			Value: 12;
			EnumType: typeof AccessoryType;
		}

		export const Jacket: Jacket;

		export interface Sweater extends EnumItem {
			Name: "Sweater";
			Value: 13;
			EnumType: typeof AccessoryType;
		}

		export const Sweater: Sweater;

		export interface Shorts extends EnumItem {
			Name: "Shorts";
			Value: 14;
			EnumType: typeof AccessoryType;
		}

		export const Shorts: Shorts;

		export interface LeftShoe extends EnumItem {
			Name: "LeftShoe";
			Value: 15;
			EnumType: typeof AccessoryType;
		}

		export const LeftShoe: LeftShoe;

		export interface RightShoe extends EnumItem {
			Name: "RightShoe";
			Value: 16;
			EnumType: typeof AccessoryType;
		}

		export const RightShoe: RightShoe;

		export interface DressSkirt extends EnumItem {
			Name: "DressSkirt";
			Value: 17;
			EnumType: typeof AccessoryType;
		}

		export const DressSkirt: DressSkirt;

		export interface Eyebrow extends EnumItem {
			Name: "Eyebrow";
			Value: 18;
			EnumType: typeof AccessoryType;
		}

		export const Eyebrow: Eyebrow;

		export interface Eyelash extends EnumItem {
			Name: "Eyelash";
			Value: 19;
			EnumType: typeof AccessoryType;
		}

		export const Eyelash: Eyelash;

		export function GetEnumItems(this: Enum): Array<AccessoryType>
	}
	export type AccessoryType = AccessoryType.Unknown | AccessoryType.Hat | AccessoryType.Hair | AccessoryType.Face | AccessoryType.Neck | AccessoryType.Shoulder | AccessoryType.Front | AccessoryType.Back | AccessoryType.Waist | AccessoryType.TShirt | AccessoryType.Shirt | AccessoryType.Pants | AccessoryType.Jacket | AccessoryType.Sweater | AccessoryType.Shorts | AccessoryType.LeftShoe | AccessoryType.RightShoe | AccessoryType.DressSkirt | AccessoryType.Eyebrow | AccessoryType.Eyelash;
	export namespace ActionType {
		export interface Nothing extends EnumItem {
			Name: "Nothing";
			Value: 0;
			EnumType: typeof ActionType;
		}

		export const Nothing: Nothing;

		export interface Pause extends EnumItem {
			Name: "Pause";
			Value: 1;
			EnumType: typeof ActionType;
		}

		export const Pause: Pause;

		export interface Lose extends EnumItem {
			Name: "Lose";
			Value: 2;
			EnumType: typeof ActionType;
		}

		export const Lose: Lose;

		export interface Draw extends EnumItem {
			Name: "Draw";
			Value: 3;
			EnumType: typeof ActionType;
		}

		export const Draw: Draw;

		export interface Win extends EnumItem {
			Name: "Win";
			Value: 4;
			EnumType: typeof ActionType;
		}

		export const Win: Win;

		export function GetEnumItems(this: Enum): Array<ActionType>
	}
	export type ActionType = ActionType.Nothing | ActionType.Pause | ActionType.Lose | ActionType.Draw | ActionType.Win;
	export namespace ActuatorRelativeTo {
		export interface Attachment0 extends EnumItem {
			Name: "Attachment0";
			Value: 0;
			EnumType: typeof ActuatorRelativeTo;
		}

		export const Attachment0: Attachment0;

		export interface Attachment1 extends EnumItem {
			Name: "Attachment1";
			Value: 1;
			EnumType: typeof ActuatorRelativeTo;
		}

		export const Attachment1: Attachment1;

		export interface World extends EnumItem {
			Name: "World";
			Value: 2;
			EnumType: typeof ActuatorRelativeTo;
		}

		export const World: World;

		export function GetEnumItems(this: Enum): Array<ActuatorRelativeTo>
	}
	export type ActuatorRelativeTo = ActuatorRelativeTo.Attachment0 | ActuatorRelativeTo.Attachment1 | ActuatorRelativeTo.World;
	export namespace ActuatorType {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof ActuatorType;
		}

		export const None: None;

		export interface Motor extends EnumItem {
			Name: "Motor";
			Value: 1;
			EnumType: typeof ActuatorType;
		}

		export const Motor: Motor;

		export interface Servo extends EnumItem {
			Name: "Servo";
			Value: 2;
			EnumType: typeof ActuatorType;
		}

		export const Servo: Servo;

		export function GetEnumItems(this: Enum): Array<ActuatorType>
	}
	export type ActuatorType = ActuatorType.None | ActuatorType.Motor | ActuatorType.Servo;
	export namespace AdPortalStatus {
		export interface Invalid extends EnumItem {
			Name: "Invalid";
			Value: 0;
			EnumType: typeof AdPortalStatus;
		}

		export const Invalid: Invalid;

		export interface Inactive extends EnumItem {
			Name: "Inactive";
			Value: 1;
			EnumType: typeof AdPortalStatus;
		}

		export const Inactive: Inactive;

		export interface Active extends EnumItem {
			Name: "Active";
			Value: 2;
			EnumType: typeof AdPortalStatus;
		}

		export const Active: Active;

		export function GetEnumItems(this: Enum): Array<AdPortalStatus>
	}
	export type AdPortalStatus = AdPortalStatus.Invalid | AdPortalStatus.Inactive | AdPortalStatus.Active;
	export namespace AdPortalType {
		export interface Forward extends EnumItem {
			Name: "Forward";
			Value: 0;
			EnumType: typeof AdPortalType;
		}

		export const Forward: Forward;

		export interface Return extends EnumItem {
			Name: "Return";
			Value: 1;
			EnumType: typeof AdPortalType;
		}

		export const Return: Return;

		export function GetEnumItems(this: Enum): Array<AdPortalType>
	}
	export type AdPortalType = AdPortalType.Forward | AdPortalType.Return;
	export namespace AdShape {
		export interface HorizontalRectangle extends EnumItem {
			Name: "HorizontalRectangle";
			Value: 1;
			EnumType: typeof AdShape;
		}

		export const HorizontalRectangle: HorizontalRectangle;

		export function GetEnumItems(this: Enum): Array<AdShape>
	}
	export type AdShape = AdShape.HorizontalRectangle;
	export namespace AdornCullingMode {
		export interface Automatic extends EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof AdornCullingMode;
		}

		export const Automatic: Automatic;

		export interface Never extends EnumItem {
			Name: "Never";
			Value: 1;
			EnumType: typeof AdornCullingMode;
		}

		export const Never: Never;

		export function GetEnumItems(this: Enum): Array<AdornCullingMode>
	}
	export type AdornCullingMode = AdornCullingMode.Automatic | AdornCullingMode.Never;
	export namespace AlignType {
		export interface Parallel extends EnumItem {
			Name: "Parallel";
			Value: 0;
			EnumType: typeof AlignType;
		}

		export const Parallel: Parallel;

		export interface Perpendicular extends EnumItem {
			Name: "Perpendicular";
			Value: 1;
			EnumType: typeof AlignType;
		}

		export const Perpendicular: Perpendicular;

		export function GetEnumItems(this: Enum): Array<AlignType>
	}
	export type AlignType = AlignType.Parallel | AlignType.Perpendicular;
	export namespace AlphaMode {
		export interface Overlay extends EnumItem {
			Name: "Overlay";
			Value: 0;
			EnumType: typeof AlphaMode;
		}

		export const Overlay: Overlay;

		export interface Transparency extends EnumItem {
			Name: "Transparency";
			Value: 1;
			EnumType: typeof AlphaMode;
		}

		export const Transparency: Transparency;

		export function GetEnumItems(this: Enum): Array<AlphaMode>
	}
	export type AlphaMode = AlphaMode.Overlay | AlphaMode.Transparency;
	export namespace AnalyticsEconomyAction {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof AnalyticsEconomyAction;
		}

		export const Default: Default;

		export interface Acquire extends EnumItem {
			Name: "Acquire";
			Value: 1;
			EnumType: typeof AnalyticsEconomyAction;
		}

		export const Acquire: Acquire;

		export interface Spend extends EnumItem {
			Name: "Spend";
			Value: 2;
			EnumType: typeof AnalyticsEconomyAction;
		}

		export const Spend: Spend;

		export function GetEnumItems(this: Enum): Array<AnalyticsEconomyAction>
	}
	export type AnalyticsEconomyAction = AnalyticsEconomyAction.Default | AnalyticsEconomyAction.Acquire | AnalyticsEconomyAction.Spend;
	export namespace AnalyticsLogLevel {
		export interface Trace extends EnumItem {
			Name: "Trace";
			Value: 0;
			EnumType: typeof AnalyticsLogLevel;
		}

		export const Trace: Trace;

		export interface Debug extends EnumItem {
			Name: "Debug";
			Value: 1;
			EnumType: typeof AnalyticsLogLevel;
		}

		export const Debug: Debug;

		export interface Information extends EnumItem {
			Name: "Information";
			Value: 2;
			EnumType: typeof AnalyticsLogLevel;
		}

		export const Information: Information;

		export interface Warning extends EnumItem {
			Name: "Warning";
			Value: 3;
			EnumType: typeof AnalyticsLogLevel;
		}

		export const Warning: Warning;

		export interface Error extends EnumItem {
			Name: "Error";
			Value: 4;
			EnumType: typeof AnalyticsLogLevel;
		}

		export const Error: Error;

		export interface Fatal extends EnumItem {
			Name: "Fatal";
			Value: 5;
			EnumType: typeof AnalyticsLogLevel;
		}

		export const Fatal: Fatal;

		export function GetEnumItems(this: Enum): Array<AnalyticsLogLevel>
	}
	export type AnalyticsLogLevel = AnalyticsLogLevel.Trace | AnalyticsLogLevel.Debug | AnalyticsLogLevel.Information | AnalyticsLogLevel.Warning | AnalyticsLogLevel.Error | AnalyticsLogLevel.Fatal;
	export namespace AnalyticsProgressionStatus {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof AnalyticsProgressionStatus;
		}

		export const Default: Default;

		export interface Begin extends EnumItem {
			Name: "Begin";
			Value: 1;
			EnumType: typeof AnalyticsProgressionStatus;
		}

		export const Begin: Begin;

		export interface Complete extends EnumItem {
			Name: "Complete";
			Value: 2;
			EnumType: typeof AnalyticsProgressionStatus;
		}

		export const Complete: Complete;

		export interface Abandon extends EnumItem {
			Name: "Abandon";
			Value: 3;
			EnumType: typeof AnalyticsProgressionStatus;
		}

		export const Abandon: Abandon;

		export interface Fail extends EnumItem {
			Name: "Fail";
			Value: 4;
			EnumType: typeof AnalyticsProgressionStatus;
		}

		export const Fail: Fail;

		export function GetEnumItems(this: Enum): Array<AnalyticsProgressionStatus>
	}
	export type AnalyticsProgressionStatus = AnalyticsProgressionStatus.Default | AnalyticsProgressionStatus.Begin | AnalyticsProgressionStatus.Complete | AnalyticsProgressionStatus.Abandon | AnalyticsProgressionStatus.Fail;
	export namespace AnimationPriority {
		export interface Idle extends EnumItem {
			Name: "Idle";
			Value: 0;
			EnumType: typeof AnimationPriority;
		}

		export const Idle: Idle;

		export interface Movement extends EnumItem {
			Name: "Movement";
			Value: 1;
			EnumType: typeof AnimationPriority;
		}

		export const Movement: Movement;

		export interface Action extends EnumItem {
			Name: "Action";
			Value: 2;
			EnumType: typeof AnimationPriority;
		}

		export const Action: Action;

		export interface Action2 extends EnumItem {
			Name: "Action2";
			Value: 3;
			EnumType: typeof AnimationPriority;
		}

		export const Action2: Action2;

		export interface Action3 extends EnumItem {
			Name: "Action3";
			Value: 4;
			EnumType: typeof AnimationPriority;
		}

		export const Action3: Action3;

		export interface Action4 extends EnumItem {
			Name: "Action4";
			Value: 5;
			EnumType: typeof AnimationPriority;
		}

		export const Action4: Action4;

		export interface Core extends EnumItem {
			Name: "Core";
			Value: 1000;
			EnumType: typeof AnimationPriority;
		}

		export const Core: Core;

		export function GetEnumItems(this: Enum): Array<AnimationPriority>
	}
	export type AnimationPriority = AnimationPriority.Idle | AnimationPriority.Movement | AnimationPriority.Action | AnimationPriority.Action2 | AnimationPriority.Action3 | AnimationPriority.Action4 | AnimationPriority.Core;
	export namespace AnimatorRetargetingMode {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof AnimatorRetargetingMode;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof AnimatorRetargetingMode;
		}

		export const Disabled: Disabled;

		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof AnimatorRetargetingMode;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: Enum): Array<AnimatorRetargetingMode>
	}
	export type AnimatorRetargetingMode = AnimatorRetargetingMode.Default | AnimatorRetargetingMode.Disabled | AnimatorRetargetingMode.Enabled;
	export namespace AppShellActionType {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof AppShellActionType;
		}

		export const None: None;

		export interface OpenApp extends EnumItem {
			Name: "OpenApp";
			Value: 1;
			EnumType: typeof AppShellActionType;
		}

		export const OpenApp: OpenApp;

		export interface TapChatTab extends EnumItem {
			Name: "TapChatTab";
			Value: 2;
			EnumType: typeof AppShellActionType;
		}

		export const TapChatTab: TapChatTab;

		export interface TapConversationEntry extends EnumItem {
			Name: "TapConversationEntry";
			Value: 3;
			EnumType: typeof AppShellActionType;
		}

		export const TapConversationEntry: TapConversationEntry;

		export interface TapAvatarTab extends EnumItem {
			Name: "TapAvatarTab";
			Value: 4;
			EnumType: typeof AppShellActionType;
		}

		export const TapAvatarTab: TapAvatarTab;

		export interface ReadConversation extends EnumItem {
			Name: "ReadConversation";
			Value: 5;
			EnumType: typeof AppShellActionType;
		}

		export const ReadConversation: ReadConversation;

		export interface TapGamePageTab extends EnumItem {
			Name: "TapGamePageTab";
			Value: 6;
			EnumType: typeof AppShellActionType;
		}

		export const TapGamePageTab: TapGamePageTab;

		export interface TapHomePageTab extends EnumItem {
			Name: "TapHomePageTab";
			Value: 7;
			EnumType: typeof AppShellActionType;
		}

		export const TapHomePageTab: TapHomePageTab;

		export interface GamePageLoaded extends EnumItem {
			Name: "GamePageLoaded";
			Value: 8;
			EnumType: typeof AppShellActionType;
		}

		export const GamePageLoaded: GamePageLoaded;

		export interface HomePageLoaded extends EnumItem {
			Name: "HomePageLoaded";
			Value: 9;
			EnumType: typeof AppShellActionType;
		}

		export const HomePageLoaded: HomePageLoaded;

		export interface AvatarEditorPageLoaded extends EnumItem {
			Name: "AvatarEditorPageLoaded";
			Value: 10;
			EnumType: typeof AppShellActionType;
		}

		export const AvatarEditorPageLoaded: AvatarEditorPageLoaded;

		export function GetEnumItems(this: Enum): Array<AppShellActionType>
	}
	export type AppShellActionType = AppShellActionType.None | AppShellActionType.OpenApp | AppShellActionType.TapChatTab | AppShellActionType.TapConversationEntry | AppShellActionType.TapAvatarTab | AppShellActionType.ReadConversation | AppShellActionType.TapGamePageTab | AppShellActionType.TapHomePageTab | AppShellActionType.GamePageLoaded | AppShellActionType.HomePageLoaded | AppShellActionType.AvatarEditorPageLoaded;
	export namespace AppShellFeature {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof AppShellFeature;
		}

		export const None: None;

		export interface Chat extends EnumItem {
			Name: "Chat";
			Value: 1;
			EnumType: typeof AppShellFeature;
		}

		export const Chat: Chat;

		export interface AvatarEditor extends EnumItem {
			Name: "AvatarEditor";
			Value: 2;
			EnumType: typeof AppShellFeature;
		}

		export const AvatarEditor: AvatarEditor;

		export interface GamePage extends EnumItem {
			Name: "GamePage";
			Value: 3;
			EnumType: typeof AppShellFeature;
		}

		export const GamePage: GamePage;

		export interface HomePage extends EnumItem {
			Name: "HomePage";
			Value: 4;
			EnumType: typeof AppShellFeature;
		}

		export const HomePage: HomePage;

		export interface More extends EnumItem {
			Name: "More";
			Value: 5;
			EnumType: typeof AppShellFeature;
		}

		export const More: More;

		export interface Landing extends EnumItem {
			Name: "Landing";
			Value: 6;
			EnumType: typeof AppShellFeature;
		}

		export const Landing: Landing;

		export function GetEnumItems(this: Enum): Array<AppShellFeature>
	}
	export type AppShellFeature = AppShellFeature.None | AppShellFeature.Chat | AppShellFeature.AvatarEditor | AppShellFeature.GamePage | AppShellFeature.HomePage | AppShellFeature.More | AppShellFeature.Landing;
	export namespace AppUpdateStatus {
		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof AppUpdateStatus;
		}

		export const Unknown: Unknown;

		export interface NotSupported extends EnumItem {
			Name: "NotSupported";
			Value: 1;
			EnumType: typeof AppUpdateStatus;
		}

		export const NotSupported: NotSupported;

		export interface Failed extends EnumItem {
			Name: "Failed";
			Value: 2;
			EnumType: typeof AppUpdateStatus;
		}

		export const Failed: Failed;

		export interface NotAvailable extends EnumItem {
			Name: "NotAvailable";
			Value: 3;
			EnumType: typeof AppUpdateStatus;
		}

		export const NotAvailable: NotAvailable;

		export interface Available extends EnumItem {
			Name: "Available";
			Value: 4;
			EnumType: typeof AppUpdateStatus;
		}

		export const Available: Available;

		export function GetEnumItems(this: Enum): Array<AppUpdateStatus>
	}
	export type AppUpdateStatus = AppUpdateStatus.Unknown | AppUpdateStatus.NotSupported | AppUpdateStatus.Failed | AppUpdateStatus.NotAvailable | AppUpdateStatus.Available;
	export namespace ApplyStrokeMode {
		export interface Contextual extends EnumItem {
			Name: "Contextual";
			Value: 0;
			EnumType: typeof ApplyStrokeMode;
		}

		export const Contextual: Contextual;

		export interface Border extends EnumItem {
			Name: "Border";
			Value: 1;
			EnumType: typeof ApplyStrokeMode;
		}

		export const Border: Border;

		export function GetEnumItems(this: Enum): Array<ApplyStrokeMode>
	}
	export type ApplyStrokeMode = ApplyStrokeMode.Contextual | ApplyStrokeMode.Border;
	export namespace AspectType {
		export interface FitWithinMaxSize extends EnumItem {
			Name: "FitWithinMaxSize";
			Value: 0;
			EnumType: typeof AspectType;
		}

		export const FitWithinMaxSize: FitWithinMaxSize;

		export interface ScaleWithParentSize extends EnumItem {
			Name: "ScaleWithParentSize";
			Value: 1;
			EnumType: typeof AspectType;
		}

		export const ScaleWithParentSize: ScaleWithParentSize;

		export function GetEnumItems(this: Enum): Array<AspectType>
	}
	export type AspectType = AspectType.FitWithinMaxSize | AspectType.ScaleWithParentSize;
	export namespace AssetFetchStatus {
		export interface Success extends EnumItem {
			Name: "Success";
			Value: 0;
			EnumType: typeof AssetFetchStatus;
		}

		export const Success: Success;

		export interface Failure extends EnumItem {
			Name: "Failure";
			Value: 1;
			EnumType: typeof AssetFetchStatus;
		}

		export const Failure: Failure;

		export function GetEnumItems(this: Enum): Array<AssetFetchStatus>
	}
	export type AssetFetchStatus = AssetFetchStatus.Success | AssetFetchStatus.Failure;
	export namespace AssetType {
		export interface Image extends EnumItem {
			Name: "Image";
			Value: 1;
			EnumType: typeof AssetType;
		}

		export const Image: Image;

		export interface TShirt extends EnumItem {
			Name: "TShirt";
			Value: 2;
			EnumType: typeof AssetType;
		}

		export const TShirt: TShirt;
		/** @deprecated renamed to TShirt */
		export const TeeShirt: TShirt;

		export interface Audio extends EnumItem {
			Name: "Audio";
			Value: 3;
			EnumType: typeof AssetType;
		}

		export const Audio: Audio;

		export interface Mesh extends EnumItem {
			Name: "Mesh";
			Value: 4;
			EnumType: typeof AssetType;
		}

		export const Mesh: Mesh;

		export interface Lua extends EnumItem {
			Name: "Lua";
			Value: 5;
			EnumType: typeof AssetType;
		}

		export const Lua: Lua;

		export interface Hat extends EnumItem {
			Name: "Hat";
			Value: 8;
			EnumType: typeof AssetType;
		}

		export const Hat: Hat;

		export interface Place extends EnumItem {
			Name: "Place";
			Value: 9;
			EnumType: typeof AssetType;
		}

		export const Place: Place;

		export interface Model extends EnumItem {
			Name: "Model";
			Value: 10;
			EnumType: typeof AssetType;
		}

		export const Model: Model;

		export interface Shirt extends EnumItem {
			Name: "Shirt";
			Value: 11;
			EnumType: typeof AssetType;
		}

		export const Shirt: Shirt;

		export interface Pants extends EnumItem {
			Name: "Pants";
			Value: 12;
			EnumType: typeof AssetType;
		}

		export const Pants: Pants;

		export interface Decal extends EnumItem {
			Name: "Decal";
			Value: 13;
			EnumType: typeof AssetType;
		}

		export const Decal: Decal;

		export interface Head extends EnumItem {
			Name: "Head";
			Value: 17;
			EnumType: typeof AssetType;
		}

		export const Head: Head;

		export interface Face extends EnumItem {
			Name: "Face";
			Value: 18;
			EnumType: typeof AssetType;
		}

		export const Face: Face;

		export interface Gear extends EnumItem {
			Name: "Gear";
			Value: 19;
			EnumType: typeof AssetType;
		}

		export const Gear: Gear;

		export interface Badge extends EnumItem {
			Name: "Badge";
			Value: 21;
			EnumType: typeof AssetType;
		}

		export const Badge: Badge;

		export interface Animation extends EnumItem {
			Name: "Animation";
			Value: 24;
			EnumType: typeof AssetType;
		}

		export const Animation: Animation;

		export interface Torso extends EnumItem {
			Name: "Torso";
			Value: 27;
			EnumType: typeof AssetType;
		}

		export const Torso: Torso;

		export interface RightArm extends EnumItem {
			Name: "RightArm";
			Value: 28;
			EnumType: typeof AssetType;
		}

		export const RightArm: RightArm;

		export interface LeftArm extends EnumItem {
			Name: "LeftArm";
			Value: 29;
			EnumType: typeof AssetType;
		}

		export const LeftArm: LeftArm;

		export interface LeftLeg extends EnumItem {
			Name: "LeftLeg";
			Value: 30;
			EnumType: typeof AssetType;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg extends EnumItem {
			Name: "RightLeg";
			Value: 31;
			EnumType: typeof AssetType;
		}

		export const RightLeg: RightLeg;

		export interface Package extends EnumItem {
			Name: "Package";
			Value: 32;
			EnumType: typeof AssetType;
		}

		export const Package: Package;

		export interface GamePass extends EnumItem {
			Name: "GamePass";
			Value: 34;
			EnumType: typeof AssetType;
		}

		export const GamePass: GamePass;

		export interface Plugin extends EnumItem {
			Name: "Plugin";
			Value: 38;
			EnumType: typeof AssetType;
		}

		export const Plugin: Plugin;

		export interface MeshPart extends EnumItem {
			Name: "MeshPart";
			Value: 40;
			EnumType: typeof AssetType;
		}

		export const MeshPart: MeshPart;

		export interface HairAccessory extends EnumItem {
			Name: "HairAccessory";
			Value: 41;
			EnumType: typeof AssetType;
		}

		export const HairAccessory: HairAccessory;

		export interface FaceAccessory extends EnumItem {
			Name: "FaceAccessory";
			Value: 42;
			EnumType: typeof AssetType;
		}

		export const FaceAccessory: FaceAccessory;

		export interface NeckAccessory extends EnumItem {
			Name: "NeckAccessory";
			Value: 43;
			EnumType: typeof AssetType;
		}

		export const NeckAccessory: NeckAccessory;

		export interface ShoulderAccessory extends EnumItem {
			Name: "ShoulderAccessory";
			Value: 44;
			EnumType: typeof AssetType;
		}

		export const ShoulderAccessory: ShoulderAccessory;

		export interface FrontAccessory extends EnumItem {
			Name: "FrontAccessory";
			Value: 45;
			EnumType: typeof AssetType;
		}

		export const FrontAccessory: FrontAccessory;

		export interface BackAccessory extends EnumItem {
			Name: "BackAccessory";
			Value: 46;
			EnumType: typeof AssetType;
		}

		export const BackAccessory: BackAccessory;

		export interface WaistAccessory extends EnumItem {
			Name: "WaistAccessory";
			Value: 47;
			EnumType: typeof AssetType;
		}

		export const WaistAccessory: WaistAccessory;

		export interface ClimbAnimation extends EnumItem {
			Name: "ClimbAnimation";
			Value: 48;
			EnumType: typeof AssetType;
		}

		export const ClimbAnimation: ClimbAnimation;

		export interface DeathAnimation extends EnumItem {
			Name: "DeathAnimation";
			Value: 49;
			EnumType: typeof AssetType;
		}

		export const DeathAnimation: DeathAnimation;

		export interface FallAnimation extends EnumItem {
			Name: "FallAnimation";
			Value: 50;
			EnumType: typeof AssetType;
		}

		export const FallAnimation: FallAnimation;

		export interface IdleAnimation extends EnumItem {
			Name: "IdleAnimation";
			Value: 51;
			EnumType: typeof AssetType;
		}

		export const IdleAnimation: IdleAnimation;

		export interface JumpAnimation extends EnumItem {
			Name: "JumpAnimation";
			Value: 52;
			EnumType: typeof AssetType;
		}

		export const JumpAnimation: JumpAnimation;

		export interface RunAnimation extends EnumItem {
			Name: "RunAnimation";
			Value: 53;
			EnumType: typeof AssetType;
		}

		export const RunAnimation: RunAnimation;

		export interface SwimAnimation extends EnumItem {
			Name: "SwimAnimation";
			Value: 54;
			EnumType: typeof AssetType;
		}

		export const SwimAnimation: SwimAnimation;

		export interface WalkAnimation extends EnumItem {
			Name: "WalkAnimation";
			Value: 55;
			EnumType: typeof AssetType;
		}

		export const WalkAnimation: WalkAnimation;

		export interface PoseAnimation extends EnumItem {
			Name: "PoseAnimation";
			Value: 56;
			EnumType: typeof AssetType;
		}

		export const PoseAnimation: PoseAnimation;

		export interface MoodAnimation extends EnumItem {
			Name: "MoodAnimation";
			Value: 78;
			EnumType: typeof AssetType;
		}

		export const MoodAnimation: MoodAnimation;

		export interface EarAccessory extends EnumItem {
			Name: "EarAccessory";
			Value: 57;
			EnumType: typeof AssetType;
		}

		export const EarAccessory: EarAccessory;

		export interface EyeAccessory extends EnumItem {
			Name: "EyeAccessory";
			Value: 58;
			EnumType: typeof AssetType;
		}

		export const EyeAccessory: EyeAccessory;

		export interface EmoteAnimation extends EnumItem {
			Name: "EmoteAnimation";
			Value: 61;
			EnumType: typeof AssetType;
		}

		export const EmoteAnimation: EmoteAnimation;

		export interface Video extends EnumItem {
			Name: "Video";
			Value: 62;
			EnumType: typeof AssetType;
		}

		export const Video: Video;

		export interface TShirtAccessory extends EnumItem {
			Name: "TShirtAccessory";
			Value: 64;
			EnumType: typeof AssetType;
		}

		export const TShirtAccessory: TShirtAccessory;
		/** @deprecated renamed to TShirtAccessory */
		export const TeeShirtAccessory: TShirtAccessory;

		export interface ShirtAccessory extends EnumItem {
			Name: "ShirtAccessory";
			Value: 65;
			EnumType: typeof AssetType;
		}

		export const ShirtAccessory: ShirtAccessory;

		export interface PantsAccessory extends EnumItem {
			Name: "PantsAccessory";
			Value: 66;
			EnumType: typeof AssetType;
		}

		export const PantsAccessory: PantsAccessory;

		export interface JacketAccessory extends EnumItem {
			Name: "JacketAccessory";
			Value: 67;
			EnumType: typeof AssetType;
		}

		export const JacketAccessory: JacketAccessory;

		export interface SweaterAccessory extends EnumItem {
			Name: "SweaterAccessory";
			Value: 68;
			EnumType: typeof AssetType;
		}

		export const SweaterAccessory: SweaterAccessory;

		export interface ShortsAccessory extends EnumItem {
			Name: "ShortsAccessory";
			Value: 69;
			EnumType: typeof AssetType;
		}

		export const ShortsAccessory: ShortsAccessory;

		export interface LeftShoeAccessory extends EnumItem {
			Name: "LeftShoeAccessory";
			Value: 70;
			EnumType: typeof AssetType;
		}

		export const LeftShoeAccessory: LeftShoeAccessory;

		export interface RightShoeAccessory extends EnumItem {
			Name: "RightShoeAccessory";
			Value: 71;
			EnumType: typeof AssetType;
		}

		export const RightShoeAccessory: RightShoeAccessory;

		export interface DressSkirtAccessory extends EnumItem {
			Name: "DressSkirtAccessory";
			Value: 72;
			EnumType: typeof AssetType;
		}

		export const DressSkirtAccessory: DressSkirtAccessory;

		export interface EyebrowAccessory extends EnumItem {
			Name: "EyebrowAccessory";
			Value: 76;
			EnumType: typeof AssetType;
		}

		export const EyebrowAccessory: EyebrowAccessory;

		export interface EyelashAccessory extends EnumItem {
			Name: "EyelashAccessory";
			Value: 77;
			EnumType: typeof AssetType;
		}

		export const EyelashAccessory: EyelashAccessory;

		export interface DynamicHead extends EnumItem {
			Name: "DynamicHead";
			Value: 79;
			EnumType: typeof AssetType;
		}

		export const DynamicHead: DynamicHead;

		export function GetEnumItems(this: Enum): Array<AssetType>
	}
	export type AssetType = AssetType.Image | AssetType.TShirt | AssetType.Audio | AssetType.Mesh | AssetType.Lua | AssetType.Hat | AssetType.Place | AssetType.Model | AssetType.Shirt | AssetType.Pants | AssetType.Decal | AssetType.Head | AssetType.Face | AssetType.Gear | AssetType.Badge | AssetType.Animation | AssetType.Torso | AssetType.RightArm | AssetType.LeftArm | AssetType.LeftLeg | AssetType.RightLeg | AssetType.Package | AssetType.GamePass | AssetType.Plugin | AssetType.MeshPart | AssetType.HairAccessory | AssetType.FaceAccessory | AssetType.NeckAccessory | AssetType.ShoulderAccessory | AssetType.FrontAccessory | AssetType.BackAccessory | AssetType.WaistAccessory | AssetType.ClimbAnimation | AssetType.DeathAnimation | AssetType.FallAnimation | AssetType.IdleAnimation | AssetType.JumpAnimation | AssetType.RunAnimation | AssetType.SwimAnimation | AssetType.WalkAnimation | AssetType.PoseAnimation | AssetType.MoodAnimation | AssetType.EarAccessory | AssetType.EyeAccessory | AssetType.EmoteAnimation | AssetType.Video | AssetType.TShirtAccessory | AssetType.ShirtAccessory | AssetType.PantsAccessory | AssetType.JacketAccessory | AssetType.SweaterAccessory | AssetType.ShortsAccessory | AssetType.LeftShoeAccessory | AssetType.RightShoeAccessory | AssetType.DressSkirtAccessory | AssetType.EyebrowAccessory | AssetType.EyelashAccessory | AssetType.DynamicHead;
	export namespace AssetTypeVerification {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 1;
			EnumType: typeof AssetTypeVerification;
		}

		export const Default: Default;

		export interface ClientOnly extends EnumItem {
			Name: "ClientOnly";
			Value: 2;
			EnumType: typeof AssetTypeVerification;
		}

		export const ClientOnly: ClientOnly;

		export interface Always extends EnumItem {
			Name: "Always";
			Value: 3;
			EnumType: typeof AssetTypeVerification;
		}

		export const Always: Always;

		export function GetEnumItems(this: Enum): Array<AssetTypeVerification>
	}
	export type AssetTypeVerification = AssetTypeVerification.Default | AssetTypeVerification.ClientOnly | AssetTypeVerification.Always;
	export namespace AutoIndentRule {
		export interface Off extends EnumItem {
			Name: "Off";
			Value: 0;
			EnumType: typeof AutoIndentRule;
		}

		export const Off: Off;

		export interface Absolute extends EnumItem {
			Name: "Absolute";
			Value: 1;
			EnumType: typeof AutoIndentRule;
		}

		export const Absolute: Absolute;

		export interface Relative extends EnumItem {
			Name: "Relative";
			Value: 2;
			EnumType: typeof AutoIndentRule;
		}

		export const Relative: Relative;

		export function GetEnumItems(this: Enum): Array<AutoIndentRule>
	}
	export type AutoIndentRule = AutoIndentRule.Off | AutoIndentRule.Absolute | AutoIndentRule.Relative;
	export namespace AutomaticSize {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof AutomaticSize;
		}

		export const None: None;

		export interface X extends EnumItem {
			Name: "X";
			Value: 1;
			EnumType: typeof AutomaticSize;
		}

		export const X: X;

		export interface Y extends EnumItem {
			Name: "Y";
			Value: 2;
			EnumType: typeof AutomaticSize;
		}

		export const Y: Y;

		export interface XY extends EnumItem {
			Name: "XY";
			Value: 3;
			EnumType: typeof AutomaticSize;
		}

		export const XY: XY;

		export function GetEnumItems(this: Enum): Array<AutomaticSize>
	}
	export type AutomaticSize = AutomaticSize.None | AutomaticSize.X | AutomaticSize.Y | AutomaticSize.XY;
	export namespace AvatarAssetType {
		export interface TShirt extends EnumItem {
			Name: "TShirt";
			Value: 2;
			EnumType: typeof AvatarAssetType;
		}

		export const TShirt: TShirt;

		export interface Hat extends EnumItem {
			Name: "Hat";
			Value: 8;
			EnumType: typeof AvatarAssetType;
		}

		export const Hat: Hat;

		export interface HairAccessory extends EnumItem {
			Name: "HairAccessory";
			Value: 41;
			EnumType: typeof AvatarAssetType;
		}

		export const HairAccessory: HairAccessory;

		export interface FaceAccessory extends EnumItem {
			Name: "FaceAccessory";
			Value: 42;
			EnumType: typeof AvatarAssetType;
		}

		export const FaceAccessory: FaceAccessory;

		export interface NeckAccessory extends EnumItem {
			Name: "NeckAccessory";
			Value: 43;
			EnumType: typeof AvatarAssetType;
		}

		export const NeckAccessory: NeckAccessory;

		export interface ShoulderAccessory extends EnumItem {
			Name: "ShoulderAccessory";
			Value: 44;
			EnumType: typeof AvatarAssetType;
		}

		export const ShoulderAccessory: ShoulderAccessory;

		export interface FrontAccessory extends EnumItem {
			Name: "FrontAccessory";
			Value: 45;
			EnumType: typeof AvatarAssetType;
		}

		export const FrontAccessory: FrontAccessory;

		export interface BackAccessory extends EnumItem {
			Name: "BackAccessory";
			Value: 46;
			EnumType: typeof AvatarAssetType;
		}

		export const BackAccessory: BackAccessory;

		export interface WaistAccessory extends EnumItem {
			Name: "WaistAccessory";
			Value: 47;
			EnumType: typeof AvatarAssetType;
		}

		export const WaistAccessory: WaistAccessory;

		export interface Shirt extends EnumItem {
			Name: "Shirt";
			Value: 11;
			EnumType: typeof AvatarAssetType;
		}

		export const Shirt: Shirt;

		export interface Pants extends EnumItem {
			Name: "Pants";
			Value: 12;
			EnumType: typeof AvatarAssetType;
		}

		export const Pants: Pants;

		export interface Gear extends EnumItem {
			Name: "Gear";
			Value: 19;
			EnumType: typeof AvatarAssetType;
		}

		export const Gear: Gear;

		export interface Head extends EnumItem {
			Name: "Head";
			Value: 17;
			EnumType: typeof AvatarAssetType;
		}

		export const Head: Head;

		export interface Face extends EnumItem {
			Name: "Face";
			Value: 18;
			EnumType: typeof AvatarAssetType;
		}

		export const Face: Face;

		export interface Torso extends EnumItem {
			Name: "Torso";
			Value: 27;
			EnumType: typeof AvatarAssetType;
		}

		export const Torso: Torso;

		export interface RightArm extends EnumItem {
			Name: "RightArm";
			Value: 28;
			EnumType: typeof AvatarAssetType;
		}

		export const RightArm: RightArm;

		export interface LeftArm extends EnumItem {
			Name: "LeftArm";
			Value: 29;
			EnumType: typeof AvatarAssetType;
		}

		export const LeftArm: LeftArm;

		export interface LeftLeg extends EnumItem {
			Name: "LeftLeg";
			Value: 30;
			EnumType: typeof AvatarAssetType;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg extends EnumItem {
			Name: "RightLeg";
			Value: 31;
			EnumType: typeof AvatarAssetType;
		}

		export const RightLeg: RightLeg;

		export interface ClimbAnimation extends EnumItem {
			Name: "ClimbAnimation";
			Value: 48;
			EnumType: typeof AvatarAssetType;
		}

		export const ClimbAnimation: ClimbAnimation;

		export interface FallAnimation extends EnumItem {
			Name: "FallAnimation";
			Value: 50;
			EnumType: typeof AvatarAssetType;
		}

		export const FallAnimation: FallAnimation;

		export interface IdleAnimation extends EnumItem {
			Name: "IdleAnimation";
			Value: 51;
			EnumType: typeof AvatarAssetType;
		}

		export const IdleAnimation: IdleAnimation;

		export interface JumpAnimation extends EnumItem {
			Name: "JumpAnimation";
			Value: 52;
			EnumType: typeof AvatarAssetType;
		}

		export const JumpAnimation: JumpAnimation;

		export interface RunAnimation extends EnumItem {
			Name: "RunAnimation";
			Value: 53;
			EnumType: typeof AvatarAssetType;
		}

		export const RunAnimation: RunAnimation;

		export interface SwimAnimation extends EnumItem {
			Name: "SwimAnimation";
			Value: 54;
			EnumType: typeof AvatarAssetType;
		}

		export const SwimAnimation: SwimAnimation;

		export interface WalkAnimation extends EnumItem {
			Name: "WalkAnimation";
			Value: 55;
			EnumType: typeof AvatarAssetType;
		}

		export const WalkAnimation: WalkAnimation;

		export interface MoodAnimation extends EnumItem {
			Name: "MoodAnimation";
			Value: 78;
			EnumType: typeof AvatarAssetType;
		}

		export const MoodAnimation: MoodAnimation;

		export interface EmoteAnimation extends EnumItem {
			Name: "EmoteAnimation";
			Value: 61;
			EnumType: typeof AvatarAssetType;
		}

		export const EmoteAnimation: EmoteAnimation;

		export interface TShirtAccessory extends EnumItem {
			Name: "TShirtAccessory";
			Value: 64;
			EnumType: typeof AvatarAssetType;
		}

		export const TShirtAccessory: TShirtAccessory;
		/** @deprecated renamed to TShirtAccessory */
		export const TeeShirtAccessory: TShirtAccessory;

		export interface ShirtAccessory extends EnumItem {
			Name: "ShirtAccessory";
			Value: 65;
			EnumType: typeof AvatarAssetType;
		}

		export const ShirtAccessory: ShirtAccessory;

		export interface PantsAccessory extends EnumItem {
			Name: "PantsAccessory";
			Value: 66;
			EnumType: typeof AvatarAssetType;
		}

		export const PantsAccessory: PantsAccessory;

		export interface JacketAccessory extends EnumItem {
			Name: "JacketAccessory";
			Value: 67;
			EnumType: typeof AvatarAssetType;
		}

		export const JacketAccessory: JacketAccessory;

		export interface SweaterAccessory extends EnumItem {
			Name: "SweaterAccessory";
			Value: 68;
			EnumType: typeof AvatarAssetType;
		}

		export const SweaterAccessory: SweaterAccessory;

		export interface ShortsAccessory extends EnumItem {
			Name: "ShortsAccessory";
			Value: 69;
			EnumType: typeof AvatarAssetType;
		}

		export const ShortsAccessory: ShortsAccessory;

		export interface LeftShoeAccessory extends EnumItem {
			Name: "LeftShoeAccessory";
			Value: 70;
			EnumType: typeof AvatarAssetType;
		}

		export const LeftShoeAccessory: LeftShoeAccessory;

		export interface RightShoeAccessory extends EnumItem {
			Name: "RightShoeAccessory";
			Value: 71;
			EnumType: typeof AvatarAssetType;
		}

		export const RightShoeAccessory: RightShoeAccessory;

		export interface DressSkirtAccessory extends EnumItem {
			Name: "DressSkirtAccessory";
			Value: 72;
			EnumType: typeof AvatarAssetType;
		}

		export const DressSkirtAccessory: DressSkirtAccessory;

		export interface EyebrowAccessory extends EnumItem {
			Name: "EyebrowAccessory";
			Value: 76;
			EnumType: typeof AvatarAssetType;
		}

		export const EyebrowAccessory: EyebrowAccessory;

		export interface EyelashAccessory extends EnumItem {
			Name: "EyelashAccessory";
			Value: 77;
			EnumType: typeof AvatarAssetType;
		}

		export const EyelashAccessory: EyelashAccessory;

		export interface DynamicHead extends EnumItem {
			Name: "DynamicHead";
			Value: 79;
			EnumType: typeof AvatarAssetType;
		}

		export const DynamicHead: DynamicHead;

		export function GetEnumItems(this: Enum): Array<AvatarAssetType>
	}
	export type AvatarAssetType = AvatarAssetType.TShirt | AvatarAssetType.Hat | AvatarAssetType.HairAccessory | AvatarAssetType.FaceAccessory | AvatarAssetType.NeckAccessory | AvatarAssetType.ShoulderAccessory | AvatarAssetType.FrontAccessory | AvatarAssetType.BackAccessory | AvatarAssetType.WaistAccessory | AvatarAssetType.Shirt | AvatarAssetType.Pants | AvatarAssetType.Gear | AvatarAssetType.Head | AvatarAssetType.Face | AvatarAssetType.Torso | AvatarAssetType.RightArm | AvatarAssetType.LeftArm | AvatarAssetType.LeftLeg | AvatarAssetType.RightLeg | AvatarAssetType.ClimbAnimation | AvatarAssetType.FallAnimation | AvatarAssetType.IdleAnimation | AvatarAssetType.JumpAnimation | AvatarAssetType.RunAnimation | AvatarAssetType.SwimAnimation | AvatarAssetType.WalkAnimation | AvatarAssetType.MoodAnimation | AvatarAssetType.EmoteAnimation | AvatarAssetType.TShirtAccessory | AvatarAssetType.ShirtAccessory | AvatarAssetType.PantsAccessory | AvatarAssetType.JacketAccessory | AvatarAssetType.SweaterAccessory | AvatarAssetType.ShortsAccessory | AvatarAssetType.LeftShoeAccessory | AvatarAssetType.RightShoeAccessory | AvatarAssetType.DressSkirtAccessory | AvatarAssetType.EyebrowAccessory | AvatarAssetType.EyelashAccessory | AvatarAssetType.DynamicHead;
	export namespace AvatarContextMenuOption {
		export interface Friend extends EnumItem {
			Name: "Friend";
			Value: 0;
			EnumType: typeof AvatarContextMenuOption;
		}

		export const Friend: Friend;

		export interface Chat extends EnumItem {
			Name: "Chat";
			Value: 1;
			EnumType: typeof AvatarContextMenuOption;
		}

		export const Chat: Chat;

		export interface Emote extends EnumItem {
			Name: "Emote";
			Value: 2;
			EnumType: typeof AvatarContextMenuOption;
		}

		export const Emote: Emote;

		export interface InspectMenu extends EnumItem {
			Name: "InspectMenu";
			Value: 3;
			EnumType: typeof AvatarContextMenuOption;
		}

		export const InspectMenu: InspectMenu;

		export function GetEnumItems(this: Enum): Array<AvatarContextMenuOption>
	}
	export type AvatarContextMenuOption = AvatarContextMenuOption.Friend | AvatarContextMenuOption.Chat | AvatarContextMenuOption.Emote | AvatarContextMenuOption.InspectMenu;
	export namespace AvatarItemType {
		export interface Asset extends EnumItem {
			Name: "Asset";
			Value: 1;
			EnumType: typeof AvatarItemType;
		}

		export const Asset: Asset;

		export interface Bundle extends EnumItem {
			Name: "Bundle";
			Value: 2;
			EnumType: typeof AvatarItemType;
		}

		export const Bundle: Bundle;

		export function GetEnumItems(this: Enum): Array<AvatarItemType>
	}
	export type AvatarItemType = AvatarItemType.Asset | AvatarItemType.Bundle;
	export namespace AvatarPromptResult {
		export interface Success extends EnumItem {
			Name: "Success";
			Value: 1;
			EnumType: typeof AvatarPromptResult;
		}

		export const Success: Success;

		export interface PermissionDenied extends EnumItem {
			Name: "PermissionDenied";
			Value: 2;
			EnumType: typeof AvatarPromptResult;
		}

		export const PermissionDenied: PermissionDenied;

		export interface Failed extends EnumItem {
			Name: "Failed";
			Value: 3;
			EnumType: typeof AvatarPromptResult;
		}

		export const Failed: Failed;

		export function GetEnumItems(this: Enum): Array<AvatarPromptResult>
	}
	export type AvatarPromptResult = AvatarPromptResult.Success | AvatarPromptResult.PermissionDenied | AvatarPromptResult.Failed;
	export namespace Axis {
		export interface X extends EnumItem {
			Name: "X";
			Value: 0;
			EnumType: typeof Axis;
		}

		export const X: X;
		/** @deprecated renamed to X */
		export const Left: X;
		/** @deprecated renamed to X */
		export const Right: X;

		export interface Y extends EnumItem {
			Name: "Y";
			Value: 1;
			EnumType: typeof Axis;
		}

		export const Y: Y;
		/** @deprecated renamed to Y */
		export const Bottom: Y;
		/** @deprecated renamed to Y */
		export const Top: Y;

		export interface Z extends EnumItem {
			Name: "Z";
			Value: 2;
			EnumType: typeof Axis;
		}

		export const Z: Z;
		/** @deprecated renamed to Z */
		export const Back: Z;
		/** @deprecated renamed to Z */
		export const Front: Z;

		export function GetEnumItems(this: Enum): Array<Axis>
	}
	export type Axis = Axis.X | Axis.Y | Axis.Z;
	export namespace BinType {
		export interface Script extends EnumItem {
			Name: "Script";
			Value: 0;
			EnumType: typeof BinType;
		}

		export const Script: Script;
		/** @deprecated renamed to Script */
		export const Laser: Script;
		/** @deprecated renamed to Script */
		export const Rocket: Script;
		/** @deprecated renamed to Script */
		export const Slingshot: Script;

		export interface GameTool extends EnumItem {
			Name: "GameTool";
			Value: 1;
			EnumType: typeof BinType;
		}

		export const GameTool: GameTool;

		export interface Grab extends EnumItem {
			Name: "Grab";
			Value: 2;
			EnumType: typeof BinType;
		}

		export const Grab: Grab;

		export interface Clone extends EnumItem {
			Name: "Clone";
			Value: 3;
			EnumType: typeof BinType;
		}

		export const Clone: Clone;

		export interface Hammer extends EnumItem {
			Name: "Hammer";
			Value: 4;
			EnumType: typeof BinType;
		}

		export const Hammer: Hammer;

		export function GetEnumItems(this: Enum): Array<BinType>
	}
	export type BinType = BinType.Script | BinType.GameTool | BinType.Grab | BinType.Clone | BinType.Hammer;
	export namespace BodyPart {
		export interface Head extends EnumItem {
			Name: "Head";
			Value: 0;
			EnumType: typeof BodyPart;
		}

		export const Head: Head;

		export interface Torso extends EnumItem {
			Name: "Torso";
			Value: 1;
			EnumType: typeof BodyPart;
		}

		export const Torso: Torso;

		export interface LeftArm extends EnumItem {
			Name: "LeftArm";
			Value: 2;
			EnumType: typeof BodyPart;
		}

		export const LeftArm: LeftArm;

		export interface RightArm extends EnumItem {
			Name: "RightArm";
			Value: 3;
			EnumType: typeof BodyPart;
		}

		export const RightArm: RightArm;

		export interface LeftLeg extends EnumItem {
			Name: "LeftLeg";
			Value: 4;
			EnumType: typeof BodyPart;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg extends EnumItem {
			Name: "RightLeg";
			Value: 5;
			EnumType: typeof BodyPart;
		}

		export const RightLeg: RightLeg;

		export function GetEnumItems(this: Enum): Array<BodyPart>
	}
	export type BodyPart = BodyPart.Head | BodyPart.Torso | BodyPart.LeftArm | BodyPart.RightArm | BodyPart.LeftLeg | BodyPart.RightLeg;
	export namespace BodyPartR15 {
		export interface Head extends EnumItem {
			Name: "Head";
			Value: 0;
			EnumType: typeof BodyPartR15;
		}

		export const Head: Head;

		export interface UpperTorso extends EnumItem {
			Name: "UpperTorso";
			Value: 1;
			EnumType: typeof BodyPartR15;
		}

		export const UpperTorso: UpperTorso;

		export interface LowerTorso extends EnumItem {
			Name: "LowerTorso";
			Value: 2;
			EnumType: typeof BodyPartR15;
		}

		export const LowerTorso: LowerTorso;

		export interface LeftFoot extends EnumItem {
			Name: "LeftFoot";
			Value: 3;
			EnumType: typeof BodyPartR15;
		}

		export const LeftFoot: LeftFoot;

		export interface LeftLowerLeg extends EnumItem {
			Name: "LeftLowerLeg";
			Value: 4;
			EnumType: typeof BodyPartR15;
		}

		export const LeftLowerLeg: LeftLowerLeg;

		export interface LeftUpperLeg extends EnumItem {
			Name: "LeftUpperLeg";
			Value: 5;
			EnumType: typeof BodyPartR15;
		}

		export const LeftUpperLeg: LeftUpperLeg;

		export interface RightFoot extends EnumItem {
			Name: "RightFoot";
			Value: 6;
			EnumType: typeof BodyPartR15;
		}

		export const RightFoot: RightFoot;

		export interface RightLowerLeg extends EnumItem {
			Name: "RightLowerLeg";
			Value: 7;
			EnumType: typeof BodyPartR15;
		}

		export const RightLowerLeg: RightLowerLeg;

		export interface RightUpperLeg extends EnumItem {
			Name: "RightUpperLeg";
			Value: 8;
			EnumType: typeof BodyPartR15;
		}

		export const RightUpperLeg: RightUpperLeg;

		export interface LeftHand extends EnumItem {
			Name: "LeftHand";
			Value: 9;
			EnumType: typeof BodyPartR15;
		}

		export const LeftHand: LeftHand;

		export interface LeftLowerArm extends EnumItem {
			Name: "LeftLowerArm";
			Value: 10;
			EnumType: typeof BodyPartR15;
		}

		export const LeftLowerArm: LeftLowerArm;

		export interface LeftUpperArm extends EnumItem {
			Name: "LeftUpperArm";
			Value: 11;
			EnumType: typeof BodyPartR15;
		}

		export const LeftUpperArm: LeftUpperArm;

		export interface RightHand extends EnumItem {
			Name: "RightHand";
			Value: 12;
			EnumType: typeof BodyPartR15;
		}

		export const RightHand: RightHand;

		export interface RightLowerArm extends EnumItem {
			Name: "RightLowerArm";
			Value: 13;
			EnumType: typeof BodyPartR15;
		}

		export const RightLowerArm: RightLowerArm;

		export interface RightUpperArm extends EnumItem {
			Name: "RightUpperArm";
			Value: 14;
			EnumType: typeof BodyPartR15;
		}

		export const RightUpperArm: RightUpperArm;

		export interface RootPart extends EnumItem {
			Name: "RootPart";
			Value: 15;
			EnumType: typeof BodyPartR15;
		}

		export const RootPart: RootPart;

		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 17;
			EnumType: typeof BodyPartR15;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: Enum): Array<BodyPartR15>
	}
	export type BodyPartR15 = BodyPartR15.Head | BodyPartR15.UpperTorso | BodyPartR15.LowerTorso | BodyPartR15.LeftFoot | BodyPartR15.LeftLowerLeg | BodyPartR15.LeftUpperLeg | BodyPartR15.RightFoot | BodyPartR15.RightLowerLeg | BodyPartR15.RightUpperLeg | BodyPartR15.LeftHand | BodyPartR15.LeftLowerArm | BodyPartR15.LeftUpperArm | BodyPartR15.RightHand | BodyPartR15.RightLowerArm | BodyPartR15.RightUpperArm | BodyPartR15.RootPart | BodyPartR15.Unknown;
	export namespace BorderMode {
		export interface Outline extends EnumItem {
			Name: "Outline";
			Value: 0;
			EnumType: typeof BorderMode;
		}

		export const Outline: Outline;

		export interface Middle extends EnumItem {
			Name: "Middle";
			Value: 1;
			EnumType: typeof BorderMode;
		}

		export const Middle: Middle;

		export interface Inset extends EnumItem {
			Name: "Inset";
			Value: 2;
			EnumType: typeof BorderMode;
		}

		export const Inset: Inset;

		export function GetEnumItems(this: Enum): Array<BorderMode>
	}
	export type BorderMode = BorderMode.Outline | BorderMode.Middle | BorderMode.Inset;
	export namespace BreakReason {
		export interface Other extends EnumItem {
			Name: "Other";
			Value: 0;
			EnumType: typeof BreakReason;
		}

		export const Other: Other;

		export interface Error extends EnumItem {
			Name: "Error";
			Value: 1;
			EnumType: typeof BreakReason;
		}

		export const Error: Error;

		export interface UserBreakpoint extends EnumItem {
			Name: "UserBreakpoint";
			Value: 3;
			EnumType: typeof BreakReason;
		}

		export const UserBreakpoint: UserBreakpoint;

		export interface SpecialBreakpoint extends EnumItem {
			Name: "SpecialBreakpoint";
			Value: 2;
			EnumType: typeof BreakReason;
		}

		export const SpecialBreakpoint: SpecialBreakpoint;

		export function GetEnumItems(this: Enum): Array<BreakReason>
	}
	export type BreakReason = BreakReason.Other | BreakReason.Error | BreakReason.UserBreakpoint | BreakReason.SpecialBreakpoint;
	export namespace BreakpointRemoveReason {
		export interface Requested extends EnumItem {
			Name: "Requested";
			Value: 0;
			EnumType: typeof BreakpointRemoveReason;
		}

		export const Requested: Requested;

		export interface ScriptChanged extends EnumItem {
			Name: "ScriptChanged";
			Value: 1;
			EnumType: typeof BreakpointRemoveReason;
		}

		export const ScriptChanged: ScriptChanged;

		export interface ScriptRemoved extends EnumItem {
			Name: "ScriptRemoved";
			Value: 2;
			EnumType: typeof BreakpointRemoveReason;
		}

		export const ScriptRemoved: ScriptRemoved;

		export function GetEnumItems(this: Enum): Array<BreakpointRemoveReason>
	}
	export type BreakpointRemoveReason = BreakpointRemoveReason.Requested | BreakpointRemoveReason.ScriptChanged | BreakpointRemoveReason.ScriptRemoved;
	export namespace BulkMoveMode {
		export interface FireAllEvents extends EnumItem {
			Name: "FireAllEvents";
			Value: 0;
			EnumType: typeof BulkMoveMode;
		}

		export const FireAllEvents: FireAllEvents;

		export interface FireCFrameChanged extends EnumItem {
			Name: "FireCFrameChanged";
			Value: 1;
			EnumType: typeof BulkMoveMode;
		}

		export const FireCFrameChanged: FireCFrameChanged;

		export function GetEnumItems(this: Enum): Array<BulkMoveMode>
	}
	export type BulkMoveMode = BulkMoveMode.FireAllEvents | BulkMoveMode.FireCFrameChanged;
	export namespace BundleType {
		export interface BodyParts extends EnumItem {
			Name: "BodyParts";
			Value: 1;
			EnumType: typeof BundleType;
		}

		export const BodyParts: BodyParts;

		export interface Animations extends EnumItem {
			Name: "Animations";
			Value: 2;
			EnumType: typeof BundleType;
		}

		export const Animations: Animations;

		export interface Shoes extends EnumItem {
			Name: "Shoes";
			Value: 3;
			EnumType: typeof BundleType;
		}

		export const Shoes: Shoes;

		export interface DynamicHead extends EnumItem {
			Name: "DynamicHead";
			Value: 4;
			EnumType: typeof BundleType;
		}

		export const DynamicHead: DynamicHead;

		export interface DynamicHeadAvatar extends EnumItem {
			Name: "DynamicHeadAvatar";
			Value: 5;
			EnumType: typeof BundleType;
		}

		export const DynamicHeadAvatar: DynamicHeadAvatar;

		export function GetEnumItems(this: Enum): Array<BundleType>
	}
	export type BundleType = BundleType.BodyParts | BundleType.Animations | BundleType.Shoes | BundleType.DynamicHead | BundleType.DynamicHeadAvatar;
	export namespace Button {
		export interface Jump extends EnumItem {
			Name: "Jump";
			Value: 32;
			EnumType: typeof Button;
		}

		export const Jump: Jump;

		export interface Dismount extends EnumItem {
			Name: "Dismount";
			Value: 8;
			EnumType: typeof Button;
		}

		export const Dismount: Dismount;

		export function GetEnumItems(this: Enum): Array<Button>
	}
	export type Button = Button.Jump | Button.Dismount;
	export namespace ButtonStyle {
		export interface Custom extends EnumItem {
			Name: "Custom";
			Value: 0;
			EnumType: typeof ButtonStyle;
		}

		export const Custom: Custom;

		export interface RobloxButtonDefault extends EnumItem {
			Name: "RobloxButtonDefault";
			Value: 1;
			EnumType: typeof ButtonStyle;
		}

		export const RobloxButtonDefault: RobloxButtonDefault;

		export interface RobloxButton extends EnumItem {
			Name: "RobloxButton";
			Value: 2;
			EnumType: typeof ButtonStyle;
		}

		export const RobloxButton: RobloxButton;

		export interface RobloxRoundButton extends EnumItem {
			Name: "RobloxRoundButton";
			Value: 3;
			EnumType: typeof ButtonStyle;
		}

		export const RobloxRoundButton: RobloxRoundButton;

		export interface RobloxRoundDefaultButton extends EnumItem {
			Name: "RobloxRoundDefaultButton";
			Value: 4;
			EnumType: typeof ButtonStyle;
		}

		export const RobloxRoundDefaultButton: RobloxRoundDefaultButton;

		export interface RobloxRoundDropdownButton extends EnumItem {
			Name: "RobloxRoundDropdownButton";
			Value: 5;
			EnumType: typeof ButtonStyle;
		}

		export const RobloxRoundDropdownButton: RobloxRoundDropdownButton;

		export function GetEnumItems(this: Enum): Array<ButtonStyle>
	}
	export type ButtonStyle = ButtonStyle.Custom | ButtonStyle.RobloxButtonDefault | ButtonStyle.RobloxButton | ButtonStyle.RobloxRoundButton | ButtonStyle.RobloxRoundDefaultButton | ButtonStyle.RobloxRoundDropdownButton;
	export namespace CageType {
		export interface Inner extends EnumItem {
			Name: "Inner";
			Value: 0;
			EnumType: typeof CageType;
		}

		export const Inner: Inner;

		export interface Outer extends EnumItem {
			Name: "Outer";
			Value: 1;
			EnumType: typeof CageType;
		}

		export const Outer: Outer;

		export function GetEnumItems(this: Enum): Array<CageType>
	}
	export type CageType = CageType.Inner | CageType.Outer;
	export namespace CameraMode {
		export interface Classic extends EnumItem {
			Name: "Classic";
			Value: 0;
			EnumType: typeof CameraMode;
		}

		export const Classic: Classic;

		export interface LockFirstPerson extends EnumItem {
			Name: "LockFirstPerson";
			Value: 1;
			EnumType: typeof CameraMode;
		}

		export const LockFirstPerson: LockFirstPerson;

		export function GetEnumItems(this: Enum): Array<CameraMode>
	}
	export type CameraMode = CameraMode.Classic | CameraMode.LockFirstPerson;
	export namespace CameraPanMode {
		export interface Classic extends EnumItem {
			Name: "Classic";
			Value: 0;
			EnumType: typeof CameraPanMode;
		}

		export const Classic: Classic;

		export interface EdgeBump extends EnumItem {
			Name: "EdgeBump";
			Value: 1;
			EnumType: typeof CameraPanMode;
		}

		export const EdgeBump: EdgeBump;

		export function GetEnumItems(this: Enum): Array<CameraPanMode>
	}
	export type CameraPanMode = CameraPanMode.Classic | CameraPanMode.EdgeBump;
	export namespace CameraType {
		export interface Fixed extends EnumItem {
			Name: "Fixed";
			Value: 0;
			EnumType: typeof CameraType;
		}

		export const Fixed: Fixed;

		export interface Watch extends EnumItem {
			Name: "Watch";
			Value: 2;
			EnumType: typeof CameraType;
		}

		export const Watch: Watch;

		export interface Attach extends EnumItem {
			Name: "Attach";
			Value: 1;
			EnumType: typeof CameraType;
		}

		export const Attach: Attach;

		export interface Track extends EnumItem {
			Name: "Track";
			Value: 3;
			EnumType: typeof CameraType;
		}

		export const Track: Track;

		export interface Follow extends EnumItem {
			Name: "Follow";
			Value: 4;
			EnumType: typeof CameraType;
		}

		export const Follow: Follow;

		export interface Custom extends EnumItem {
			Name: "Custom";
			Value: 5;
			EnumType: typeof CameraType;
		}

		export const Custom: Custom;

		export interface Scriptable extends EnumItem {
			Name: "Scriptable";
			Value: 6;
			EnumType: typeof CameraType;
		}

		export const Scriptable: Scriptable;

		export interface Orbital extends EnumItem {
			Name: "Orbital";
			Value: 7;
			EnumType: typeof CameraType;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: Enum): Array<CameraType>
	}
	export type CameraType = CameraType.Fixed | CameraType.Watch | CameraType.Attach | CameraType.Track | CameraType.Follow | CameraType.Custom | CameraType.Scriptable | CameraType.Orbital;
	export namespace CatalogCategoryFilter {
		export interface None extends EnumItem {
			Name: "None";
			Value: 1;
			EnumType: typeof CatalogCategoryFilter;
		}

		export const None: None;

		export interface Featured extends EnumItem {
			Name: "Featured";
			Value: 2;
			EnumType: typeof CatalogCategoryFilter;
		}

		export const Featured: Featured;

		export interface Collectibles extends EnumItem {
			Name: "Collectibles";
			Value: 3;
			EnumType: typeof CatalogCategoryFilter;
		}

		export const Collectibles: Collectibles;

		export interface CommunityCreations extends EnumItem {
			Name: "CommunityCreations";
			Value: 4;
			EnumType: typeof CatalogCategoryFilter;
		}

		export const CommunityCreations: CommunityCreations;

		export interface Premium extends EnumItem {
			Name: "Premium";
			Value: 5;
			EnumType: typeof CatalogCategoryFilter;
		}

		export const Premium: Premium;

		export interface Recommended extends EnumItem {
			Name: "Recommended";
			Value: 6;
			EnumType: typeof CatalogCategoryFilter;
		}

		export const Recommended: Recommended;

		export function GetEnumItems(this: Enum): Array<CatalogCategoryFilter>
	}
	export type CatalogCategoryFilter = CatalogCategoryFilter.None | CatalogCategoryFilter.Featured | CatalogCategoryFilter.Collectibles | CatalogCategoryFilter.CommunityCreations | CatalogCategoryFilter.Premium | CatalogCategoryFilter.Recommended;
	export namespace CatalogSortType {
		export interface Relevance extends EnumItem {
			Name: "Relevance";
			Value: 1;
			EnumType: typeof CatalogSortType;
		}

		export const Relevance: Relevance;

		export interface PriceHighToLow extends EnumItem {
			Name: "PriceHighToLow";
			Value: 2;
			EnumType: typeof CatalogSortType;
		}

		export const PriceHighToLow: PriceHighToLow;

		export interface PriceLowToHigh extends EnumItem {
			Name: "PriceLowToHigh";
			Value: 3;
			EnumType: typeof CatalogSortType;
		}

		export const PriceLowToHigh: PriceLowToHigh;

		export interface RecentlyUpdated extends EnumItem {
			Name: "RecentlyUpdated";
			Value: 4;
			EnumType: typeof CatalogSortType;
		}

		export const RecentlyUpdated: RecentlyUpdated;

		export interface MostFavorited extends EnumItem {
			Name: "MostFavorited";
			Value: 5;
			EnumType: typeof CatalogSortType;
		}

		export const MostFavorited: MostFavorited;

		export function GetEnumItems(this: Enum): Array<CatalogSortType>
	}
	export type CatalogSortType = CatalogSortType.Relevance | CatalogSortType.PriceHighToLow | CatalogSortType.PriceLowToHigh | CatalogSortType.RecentlyUpdated | CatalogSortType.MostFavorited;
	export namespace CellBlock {
		export interface Solid extends EnumItem {
			Name: "Solid";
			Value: 0;
			EnumType: typeof CellBlock;
		}

		export const Solid: Solid;

		export interface VerticalWedge extends EnumItem {
			Name: "VerticalWedge";
			Value: 1;
			EnumType: typeof CellBlock;
		}

		export const VerticalWedge: VerticalWedge;

		export interface CornerWedge extends EnumItem {
			Name: "CornerWedge";
			Value: 2;
			EnumType: typeof CellBlock;
		}

		export const CornerWedge: CornerWedge;

		export interface InverseCornerWedge extends EnumItem {
			Name: "InverseCornerWedge";
			Value: 3;
			EnumType: typeof CellBlock;
		}

		export const InverseCornerWedge: InverseCornerWedge;

		export interface HorizontalWedge extends EnumItem {
			Name: "HorizontalWedge";
			Value: 4;
			EnumType: typeof CellBlock;
		}

		export const HorizontalWedge: HorizontalWedge;

		export function GetEnumItems(this: Enum): Array<CellBlock>
	}
	export type CellBlock = CellBlock.Solid | CellBlock.VerticalWedge | CellBlock.CornerWedge | CellBlock.InverseCornerWedge | CellBlock.HorizontalWedge;
	export namespace CellMaterial {
		export interface Empty extends EnumItem {
			Name: "Empty";
			Value: 0;
			EnumType: typeof CellMaterial;
		}

		export const Empty: Empty;

		export interface Grass extends EnumItem {
			Name: "Grass";
			Value: 1;
			EnumType: typeof CellMaterial;
		}

		export const Grass: Grass;

		export interface Sand extends EnumItem {
			Name: "Sand";
			Value: 2;
			EnumType: typeof CellMaterial;
		}

		export const Sand: Sand;

		export interface Brick extends EnumItem {
			Name: "Brick";
			Value: 3;
			EnumType: typeof CellMaterial;
		}

		export const Brick: Brick;

		export interface Granite extends EnumItem {
			Name: "Granite";
			Value: 4;
			EnumType: typeof CellMaterial;
		}

		export const Granite: Granite;

		export interface Asphalt extends EnumItem {
			Name: "Asphalt";
			Value: 5;
			EnumType: typeof CellMaterial;
		}

		export const Asphalt: Asphalt;

		export interface Iron extends EnumItem {
			Name: "Iron";
			Value: 6;
			EnumType: typeof CellMaterial;
		}

		export const Iron: Iron;

		export interface Aluminum extends EnumItem {
			Name: "Aluminum";
			Value: 7;
			EnumType: typeof CellMaterial;
		}

		export const Aluminum: Aluminum;

		export interface Gold extends EnumItem {
			Name: "Gold";
			Value: 8;
			EnumType: typeof CellMaterial;
		}

		export const Gold: Gold;

		export interface WoodPlank extends EnumItem {
			Name: "WoodPlank";
			Value: 9;
			EnumType: typeof CellMaterial;
		}

		export const WoodPlank: WoodPlank;

		export interface WoodLog extends EnumItem {
			Name: "WoodLog";
			Value: 10;
			EnumType: typeof CellMaterial;
		}

		export const WoodLog: WoodLog;

		export interface Gravel extends EnumItem {
			Name: "Gravel";
			Value: 11;
			EnumType: typeof CellMaterial;
		}

		export const Gravel: Gravel;

		export interface CinderBlock extends EnumItem {
			Name: "CinderBlock";
			Value: 12;
			EnumType: typeof CellMaterial;
		}

		export const CinderBlock: CinderBlock;

		export interface MossyStone extends EnumItem {
			Name: "MossyStone";
			Value: 13;
			EnumType: typeof CellMaterial;
		}

		export const MossyStone: MossyStone;

		export interface Cement extends EnumItem {
			Name: "Cement";
			Value: 14;
			EnumType: typeof CellMaterial;
		}

		export const Cement: Cement;

		export interface RedPlastic extends EnumItem {
			Name: "RedPlastic";
			Value: 15;
			EnumType: typeof CellMaterial;
		}

		export const RedPlastic: RedPlastic;

		export interface BluePlastic extends EnumItem {
			Name: "BluePlastic";
			Value: 16;
			EnumType: typeof CellMaterial;
		}

		export const BluePlastic: BluePlastic;

		export interface Water extends EnumItem {
			Name: "Water";
			Value: 17;
			EnumType: typeof CellMaterial;
		}

		export const Water: Water;

		export function GetEnumItems(this: Enum): Array<CellMaterial>
	}
	export type CellMaterial = CellMaterial.Empty | CellMaterial.Grass | CellMaterial.Sand | CellMaterial.Brick | CellMaterial.Granite | CellMaterial.Asphalt | CellMaterial.Iron | CellMaterial.Aluminum | CellMaterial.Gold | CellMaterial.WoodPlank | CellMaterial.WoodLog | CellMaterial.Gravel | CellMaterial.CinderBlock | CellMaterial.MossyStone | CellMaterial.Cement | CellMaterial.RedPlastic | CellMaterial.BluePlastic | CellMaterial.Water;
	export namespace CellOrientation {
		export interface NegZ extends EnumItem {
			Name: "NegZ";
			Value: 0;
			EnumType: typeof CellOrientation;
		}

		export const NegZ: NegZ;

		export interface X extends EnumItem {
			Name: "X";
			Value: 1;
			EnumType: typeof CellOrientation;
		}

		export const X: X;

		export interface Z extends EnumItem {
			Name: "Z";
			Value: 2;
			EnumType: typeof CellOrientation;
		}

		export const Z: Z;

		export interface NegX extends EnumItem {
			Name: "NegX";
			Value: 3;
			EnumType: typeof CellOrientation;
		}

		export const NegX: NegX;

		export function GetEnumItems(this: Enum): Array<CellOrientation>
	}
	export type CellOrientation = CellOrientation.NegZ | CellOrientation.X | CellOrientation.Z | CellOrientation.NegX;
	export namespace CenterDialogType {
		export interface UnsolicitedDialog extends EnumItem {
			Name: "UnsolicitedDialog";
			Value: 1;
			EnumType: typeof CenterDialogType;
		}

		export const UnsolicitedDialog: UnsolicitedDialog;

		export interface PlayerInitiatedDialog extends EnumItem {
			Name: "PlayerInitiatedDialog";
			Value: 2;
			EnumType: typeof CenterDialogType;
		}

		export const PlayerInitiatedDialog: PlayerInitiatedDialog;

		export interface ModalDialog extends EnumItem {
			Name: "ModalDialog";
			Value: 3;
			EnumType: typeof CenterDialogType;
		}

		export const ModalDialog: ModalDialog;

		export interface QuitDialog extends EnumItem {
			Name: "QuitDialog";
			Value: 4;
			EnumType: typeof CenterDialogType;
		}

		export const QuitDialog: QuitDialog;

		export function GetEnumItems(this: Enum): Array<CenterDialogType>
	}
	export type CenterDialogType = CenterDialogType.UnsolicitedDialog | CenterDialogType.PlayerInitiatedDialog | CenterDialogType.ModalDialog | CenterDialogType.QuitDialog;
	export namespace ChatCallbackType {
		export interface OnCreatingChatWindow extends EnumItem {
			Name: "OnCreatingChatWindow";
			Value: 1;
			EnumType: typeof ChatCallbackType;
		}

		export const OnCreatingChatWindow: OnCreatingChatWindow;

		export interface OnClientSendingMessage extends EnumItem {
			Name: "OnClientSendingMessage";
			Value: 2;
			EnumType: typeof ChatCallbackType;
		}

		export const OnClientSendingMessage: OnClientSendingMessage;

		export interface OnClientFormattingMessage extends EnumItem {
			Name: "OnClientFormattingMessage";
			Value: 3;
			EnumType: typeof ChatCallbackType;
		}

		export const OnClientFormattingMessage: OnClientFormattingMessage;

		export interface OnServerReceivingMessage extends EnumItem {
			Name: "OnServerReceivingMessage";
			Value: 17;
			EnumType: typeof ChatCallbackType;
		}

		export const OnServerReceivingMessage: OnServerReceivingMessage;

		export function GetEnumItems(this: Enum): Array<ChatCallbackType>
	}
	export type ChatCallbackType = ChatCallbackType.OnCreatingChatWindow | ChatCallbackType.OnClientSendingMessage | ChatCallbackType.OnClientFormattingMessage | ChatCallbackType.OnServerReceivingMessage;
	export namespace ChatColor {
		export interface Blue extends EnumItem {
			Name: "Blue";
			Value: 0;
			EnumType: typeof ChatColor;
		}

		export const Blue: Blue;

		export interface Green extends EnumItem {
			Name: "Green";
			Value: 1;
			EnumType: typeof ChatColor;
		}

		export const Green: Green;

		export interface Red extends EnumItem {
			Name: "Red";
			Value: 2;
			EnumType: typeof ChatColor;
		}

		export const Red: Red;

		export interface White extends EnumItem {
			Name: "White";
			Value: 3;
			EnumType: typeof ChatColor;
		}

		export const White: White;

		export function GetEnumItems(this: Enum): Array<ChatColor>
	}
	export type ChatColor = ChatColor.Blue | ChatColor.Green | ChatColor.Red | ChatColor.White;
	export namespace ChatMode {
		export interface Menu extends EnumItem {
			Name: "Menu";
			Value: 0;
			EnumType: typeof ChatMode;
		}

		export const Menu: Menu;

		export interface TextAndMenu extends EnumItem {
			Name: "TextAndMenu";
			Value: 1;
			EnumType: typeof ChatMode;
		}

		export const TextAndMenu: TextAndMenu;

		export function GetEnumItems(this: Enum): Array<ChatMode>
	}
	export type ChatMode = ChatMode.Menu | ChatMode.TextAndMenu;
	export namespace ChatPrivacyMode {
		export interface AllUsers extends EnumItem {
			Name: "AllUsers";
			Value: 0;
			EnumType: typeof ChatPrivacyMode;
		}

		export const AllUsers: AllUsers;

		export interface NoOne extends EnumItem {
			Name: "NoOne";
			Value: 1;
			EnumType: typeof ChatPrivacyMode;
		}

		export const NoOne: NoOne;

		export interface Friends extends EnumItem {
			Name: "Friends";
			Value: 2;
			EnumType: typeof ChatPrivacyMode;
		}

		export const Friends: Friends;

		export function GetEnumItems(this: Enum): Array<ChatPrivacyMode>
	}
	export type ChatPrivacyMode = ChatPrivacyMode.AllUsers | ChatPrivacyMode.NoOne | ChatPrivacyMode.Friends;
	export namespace ChatStyle {
		export interface Classic extends EnumItem {
			Name: "Classic";
			Value: 0;
			EnumType: typeof ChatStyle;
		}

		export const Classic: Classic;

		export interface Bubble extends EnumItem {
			Name: "Bubble";
			Value: 1;
			EnumType: typeof ChatStyle;
		}

		export const Bubble: Bubble;

		export interface ClassicAndBubble extends EnumItem {
			Name: "ClassicAndBubble";
			Value: 2;
			EnumType: typeof ChatStyle;
		}

		export const ClassicAndBubble: ClassicAndBubble;

		export function GetEnumItems(this: Enum): Array<ChatStyle>
	}
	export type ChatStyle = ChatStyle.Classic | ChatStyle.Bubble | ChatStyle.ClassicAndBubble;
	export namespace ChatVersion {
		export interface LegacyChatService extends EnumItem {
			Name: "LegacyChatService";
			Value: 0;
			EnumType: typeof ChatVersion;
		}

		export const LegacyChatService: LegacyChatService;

		export interface TextChatService extends EnumItem {
			Name: "TextChatService";
			Value: 1;
			EnumType: typeof ChatVersion;
		}

		export const TextChatService: TextChatService;

		export function GetEnumItems(this: Enum): Array<ChatVersion>
	}
	export type ChatVersion = ChatVersion.LegacyChatService | ChatVersion.TextChatService;
	export namespace ClientAnimatorThrottlingMode {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof ClientAnimatorThrottlingMode;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof ClientAnimatorThrottlingMode;
		}

		export const Disabled: Disabled;

		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof ClientAnimatorThrottlingMode;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: Enum): Array<ClientAnimatorThrottlingMode>
	}
	export type ClientAnimatorThrottlingMode = ClientAnimatorThrottlingMode.Default | ClientAnimatorThrottlingMode.Disabled | ClientAnimatorThrottlingMode.Enabled;
	export namespace CollisionFidelity {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof CollisionFidelity;
		}

		export const Default: Default;

		export interface Hull extends EnumItem {
			Name: "Hull";
			Value: 1;
			EnumType: typeof CollisionFidelity;
		}

		export const Hull: Hull;

		export interface Box extends EnumItem {
			Name: "Box";
			Value: 2;
			EnumType: typeof CollisionFidelity;
		}

		export const Box: Box;

		export interface PreciseConvexDecomposition extends EnumItem {
			Name: "PreciseConvexDecomposition";
			Value: 3;
			EnumType: typeof CollisionFidelity;
		}

		export const PreciseConvexDecomposition: PreciseConvexDecomposition;

		export interface DynamicPreciseConvexDecomposition extends EnumItem {
			Name: "DynamicPreciseConvexDecomposition";
			Value: 4;
			EnumType: typeof CollisionFidelity;
		}

		export const DynamicPreciseConvexDecomposition: DynamicPreciseConvexDecomposition;

		export function GetEnumItems(this: Enum): Array<CollisionFidelity>
	}
	export type CollisionFidelity = CollisionFidelity.Default | CollisionFidelity.Hull | CollisionFidelity.Box | CollisionFidelity.PreciseConvexDecomposition | CollisionFidelity.DynamicPreciseConvexDecomposition;
	export namespace CommandPermission {
		export interface Plugin extends EnumItem {
			Name: "Plugin";
			Value: 0;
			EnumType: typeof CommandPermission;
		}

		export const Plugin: Plugin;

		export interface LocalUser extends EnumItem {
			Name: "LocalUser";
			Value: 1;
			EnumType: typeof CommandPermission;
		}

		export const LocalUser: LocalUser;

		export function GetEnumItems(this: Enum): Array<CommandPermission>
	}
	export type CommandPermission = CommandPermission.Plugin | CommandPermission.LocalUser;
	export namespace ComputerCameraMovementMode {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof ComputerCameraMovementMode;
		}

		export const Default: Default;

		export interface Follow extends EnumItem {
			Name: "Follow";
			Value: 2;
			EnumType: typeof ComputerCameraMovementMode;
		}

		export const Follow: Follow;

		export interface Classic extends EnumItem {
			Name: "Classic";
			Value: 1;
			EnumType: typeof ComputerCameraMovementMode;
		}

		export const Classic: Classic;

		export interface Orbital extends EnumItem {
			Name: "Orbital";
			Value: 3;
			EnumType: typeof ComputerCameraMovementMode;
		}

		export const Orbital: Orbital;

		export interface CameraToggle extends EnumItem {
			Name: "CameraToggle";
			Value: 4;
			EnumType: typeof ComputerCameraMovementMode;
		}

		export const CameraToggle: CameraToggle;

		export function GetEnumItems(this: Enum): Array<ComputerCameraMovementMode>
	}
	export type ComputerCameraMovementMode = ComputerCameraMovementMode.Default | ComputerCameraMovementMode.Follow | ComputerCameraMovementMode.Classic | ComputerCameraMovementMode.Orbital | ComputerCameraMovementMode.CameraToggle;
	export namespace ComputerMovementMode {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof ComputerMovementMode;
		}

		export const Default: Default;

		export interface KeyboardMouse extends EnumItem {
			Name: "KeyboardMouse";
			Value: 1;
			EnumType: typeof ComputerMovementMode;
		}

		export const KeyboardMouse: KeyboardMouse;

		export interface ClickToMove extends EnumItem {
			Name: "ClickToMove";
			Value: 2;
			EnumType: typeof ComputerMovementMode;
		}

		export const ClickToMove: ClickToMove;

		export function GetEnumItems(this: Enum): Array<ComputerMovementMode>
	}
	export type ComputerMovementMode = ComputerMovementMode.Default | ComputerMovementMode.KeyboardMouse | ComputerMovementMode.ClickToMove;
	export namespace ConnectionError {
		export interface OK extends EnumItem {
			Name: "OK";
			Value: 0;
			EnumType: typeof ConnectionError;
		}

		export const OK: OK;

		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 1;
			EnumType: typeof ConnectionError;
		}

		export const Unknown: Unknown;

		export interface DisconnectErrors extends EnumItem {
			Name: "DisconnectErrors";
			Value: 256;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectErrors: DisconnectErrors;

		export interface DisconnectBadhash extends EnumItem {
			Name: "DisconnectBadhash";
			Value: 257;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectBadhash: DisconnectBadhash;

		export interface DisconnectSecurityKeyMismatch extends EnumItem {
			Name: "DisconnectSecurityKeyMismatch";
			Value: 258;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectSecurityKeyMismatch: DisconnectSecurityKeyMismatch;

		export interface DisconnectNewSecurityKeyMismatch extends EnumItem {
			Name: "DisconnectNewSecurityKeyMismatch";
			Value: 272;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectNewSecurityKeyMismatch: DisconnectNewSecurityKeyMismatch;

		export interface DisconnectProtocolMismatch extends EnumItem {
			Name: "DisconnectProtocolMismatch";
			Value: 259;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectProtocolMismatch: DisconnectProtocolMismatch;

		export interface DisconnectReceivePacketError extends EnumItem {
			Name: "DisconnectReceivePacketError";
			Value: 260;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectReceivePacketError: DisconnectReceivePacketError;

		export interface DisconnectReceivePacketStreamError extends EnumItem {
			Name: "DisconnectReceivePacketStreamError";
			Value: 261;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectReceivePacketStreamError: DisconnectReceivePacketStreamError;

		export interface DisconnectSendPacketError extends EnumItem {
			Name: "DisconnectSendPacketError";
			Value: 262;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectSendPacketError: DisconnectSendPacketError;

		export interface DisconnectIllegalTeleport extends EnumItem {
			Name: "DisconnectIllegalTeleport";
			Value: 263;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectIllegalTeleport: DisconnectIllegalTeleport;

		export interface DisconnectDuplicatePlayer extends EnumItem {
			Name: "DisconnectDuplicatePlayer";
			Value: 264;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectDuplicatePlayer: DisconnectDuplicatePlayer;

		export interface DisconnectDuplicateTicket extends EnumItem {
			Name: "DisconnectDuplicateTicket";
			Value: 265;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectDuplicateTicket: DisconnectDuplicateTicket;

		export interface DisconnectTimeout extends EnumItem {
			Name: "DisconnectTimeout";
			Value: 266;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectTimeout: DisconnectTimeout;

		export interface DisconnectLuaKick extends EnumItem {
			Name: "DisconnectLuaKick";
			Value: 267;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectLuaKick: DisconnectLuaKick;

		export interface DisconnectOnRemoteSysStats extends EnumItem {
			Name: "DisconnectOnRemoteSysStats";
			Value: 268;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectOnRemoteSysStats: DisconnectOnRemoteSysStats;

		export interface DisconnectHashTimeout extends EnumItem {
			Name: "DisconnectHashTimeout";
			Value: 269;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectHashTimeout: DisconnectHashTimeout;

		export interface DisconnectCloudEditKick extends EnumItem {
			Name: "DisconnectCloudEditKick";
			Value: 270;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectCloudEditKick: DisconnectCloudEditKick;

		export interface DisconnectPlayerless extends EnumItem {
			Name: "DisconnectPlayerless";
			Value: 271;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectPlayerless: DisconnectPlayerless;

		export interface DisconnectEvicted extends EnumItem {
			Name: "DisconnectEvicted";
			Value: 273;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectEvicted: DisconnectEvicted;

		export interface DisconnectDevMaintenance extends EnumItem {
			Name: "DisconnectDevMaintenance";
			Value: 274;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectDevMaintenance: DisconnectDevMaintenance;

		export interface DisconnectRobloxMaintenance extends EnumItem {
			Name: "DisconnectRobloxMaintenance";
			Value: 275;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectRobloxMaintenance: DisconnectRobloxMaintenance;

		export interface DisconnectRejoin extends EnumItem {
			Name: "DisconnectRejoin";
			Value: 276;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectRejoin: DisconnectRejoin;

		export interface DisconnectConnectionLost extends EnumItem {
			Name: "DisconnectConnectionLost";
			Value: 277;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectConnectionLost: DisconnectConnectionLost;

		export interface DisconnectIdle extends EnumItem {
			Name: "DisconnectIdle";
			Value: 278;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectIdle: DisconnectIdle;

		export interface DisconnectRaknetErrors extends EnumItem {
			Name: "DisconnectRaknetErrors";
			Value: 279;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectRaknetErrors: DisconnectRaknetErrors;

		export interface DisconnectWrongVersion extends EnumItem {
			Name: "DisconnectWrongVersion";
			Value: 280;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectWrongVersion: DisconnectWrongVersion;

		export interface DisconnectBySecurityPolicy extends EnumItem {
			Name: "DisconnectBySecurityPolicy";
			Value: 281;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectBySecurityPolicy: DisconnectBySecurityPolicy;

		export interface DisconnectBlockedIP extends EnumItem {
			Name: "DisconnectBlockedIP";
			Value: 282;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectBlockedIP: DisconnectBlockedIP;

		export interface DisconnectClientFailure extends EnumItem {
			Name: "DisconnectClientFailure";
			Value: 284;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectClientFailure: DisconnectClientFailure;

		export interface DisconnectClientRequest extends EnumItem {
			Name: "DisconnectClientRequest";
			Value: 285;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectClientRequest: DisconnectClientRequest;

		export interface DisconnectOutOfMemory extends EnumItem {
			Name: "DisconnectOutOfMemory";
			Value: 286;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectOutOfMemory: DisconnectOutOfMemory;

		export interface DisconnectModeratedGame extends EnumItem {
			Name: "DisconnectModeratedGame";
			Value: 287;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectModeratedGame: DisconnectModeratedGame;

		export interface DisconnectOutOfMemoryExitContinue extends EnumItem {
			Name: "DisconnectOutOfMemoryExitContinue";
			Value: 288;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectOutOfMemoryExitContinue: DisconnectOutOfMemoryExitContinue;

		export interface DisconnectOutOfMemoryKeepPlayingExit extends EnumItem {
			Name: "DisconnectOutOfMemoryKeepPlayingExit";
			Value: 289;
			EnumType: typeof ConnectionError;
		}

		export const DisconnectOutOfMemoryKeepPlayingExit: DisconnectOutOfMemoryKeepPlayingExit;

		export interface PlacelaunchErrors extends EnumItem {
			Name: "PlacelaunchErrors";
			Value: 512;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchErrors: PlacelaunchErrors;

		export interface PlacelaunchDisabled extends EnumItem {
			Name: "PlacelaunchDisabled";
			Value: 515;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchDisabled: PlacelaunchDisabled;

		export interface PlacelaunchError extends EnumItem {
			Name: "PlacelaunchError";
			Value: 516;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchError: PlacelaunchError;

		export interface PlacelaunchGameEnded extends EnumItem {
			Name: "PlacelaunchGameEnded";
			Value: 517;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchGameEnded: PlacelaunchGameEnded;

		export interface PlacelaunchGameFull extends EnumItem {
			Name: "PlacelaunchGameFull";
			Value: 518;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchGameFull: PlacelaunchGameFull;

		export interface PlacelaunchUserLeft extends EnumItem {
			Name: "PlacelaunchUserLeft";
			Value: 522;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchUserLeft: PlacelaunchUserLeft;

		export interface PlacelaunchRestricted extends EnumItem {
			Name: "PlacelaunchRestricted";
			Value: 523;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchRestricted: PlacelaunchRestricted;

		export interface PlacelaunchUnauthorized extends EnumItem {
			Name: "PlacelaunchUnauthorized";
			Value: 524;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchUnauthorized: PlacelaunchUnauthorized;

		export interface PlacelaunchFlooded extends EnumItem {
			Name: "PlacelaunchFlooded";
			Value: 525;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchFlooded: PlacelaunchFlooded;

		export interface PlacelaunchHashExpired extends EnumItem {
			Name: "PlacelaunchHashExpired";
			Value: 526;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchHashExpired: PlacelaunchHashExpired;

		export interface PlacelaunchHashException extends EnumItem {
			Name: "PlacelaunchHashException";
			Value: 527;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchHashException: PlacelaunchHashException;

		export interface PlacelaunchPartyCannotFit extends EnumItem {
			Name: "PlacelaunchPartyCannotFit";
			Value: 528;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchPartyCannotFit: PlacelaunchPartyCannotFit;

		export interface PlacelaunchHttpError extends EnumItem {
			Name: "PlacelaunchHttpError";
			Value: 529;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchHttpError: PlacelaunchHttpError;

		export interface PlacelaunchCustomMessage extends EnumItem {
			Name: "PlacelaunchCustomMessage";
			Value: 610;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchCustomMessage: PlacelaunchCustomMessage;

		export interface PlacelaunchOtherError extends EnumItem {
			Name: "PlacelaunchOtherError";
			Value: 611;
			EnumType: typeof ConnectionError;
		}

		export const PlacelaunchOtherError: PlacelaunchOtherError;

		export interface TeleportErrors extends EnumItem {
			Name: "TeleportErrors";
			Value: 768;
			EnumType: typeof ConnectionError;
		}

		export const TeleportErrors: TeleportErrors;

		export interface TeleportFailure extends EnumItem {
			Name: "TeleportFailure";
			Value: 769;
			EnumType: typeof ConnectionError;
		}

		export const TeleportFailure: TeleportFailure;

		export interface TeleportGameNotFound extends EnumItem {
			Name: "TeleportGameNotFound";
			Value: 770;
			EnumType: typeof ConnectionError;
		}

		export const TeleportGameNotFound: TeleportGameNotFound;

		export interface TeleportGameEnded extends EnumItem {
			Name: "TeleportGameEnded";
			Value: 771;
			EnumType: typeof ConnectionError;
		}

		export const TeleportGameEnded: TeleportGameEnded;

		export interface TeleportGameFull extends EnumItem {
			Name: "TeleportGameFull";
			Value: 772;
			EnumType: typeof ConnectionError;
		}

		export const TeleportGameFull: TeleportGameFull;

		export interface TeleportUnauthorized extends EnumItem {
			Name: "TeleportUnauthorized";
			Value: 773;
			EnumType: typeof ConnectionError;
		}

		export const TeleportUnauthorized: TeleportUnauthorized;

		export interface TeleportFlooded extends EnumItem {
			Name: "TeleportFlooded";
			Value: 774;
			EnumType: typeof ConnectionError;
		}

		export const TeleportFlooded: TeleportFlooded;

		export interface TeleportIsTeleporting extends EnumItem {
			Name: "TeleportIsTeleporting";
			Value: 775;
			EnumType: typeof ConnectionError;
		}

		export const TeleportIsTeleporting: TeleportIsTeleporting;

		export function GetEnumItems(this: Enum): Array<ConnectionError>
	}
	export type ConnectionError = ConnectionError.OK | ConnectionError.Unknown | ConnectionError.DisconnectErrors | ConnectionError.DisconnectBadhash | ConnectionError.DisconnectSecurityKeyMismatch | ConnectionError.DisconnectNewSecurityKeyMismatch | ConnectionError.DisconnectProtocolMismatch | ConnectionError.DisconnectReceivePacketError | ConnectionError.DisconnectReceivePacketStreamError | ConnectionError.DisconnectSendPacketError | ConnectionError.DisconnectIllegalTeleport | ConnectionError.DisconnectDuplicatePlayer | ConnectionError.DisconnectDuplicateTicket | ConnectionError.DisconnectTimeout | ConnectionError.DisconnectLuaKick | ConnectionError.DisconnectOnRemoteSysStats | ConnectionError.DisconnectHashTimeout | ConnectionError.DisconnectCloudEditKick | ConnectionError.DisconnectPlayerless | ConnectionError.DisconnectEvicted | ConnectionError.DisconnectDevMaintenance | ConnectionError.DisconnectRobloxMaintenance | ConnectionError.DisconnectRejoin | ConnectionError.DisconnectConnectionLost | ConnectionError.DisconnectIdle | ConnectionError.DisconnectRaknetErrors | ConnectionError.DisconnectWrongVersion | ConnectionError.DisconnectBySecurityPolicy | ConnectionError.DisconnectBlockedIP | ConnectionError.DisconnectClientFailure | ConnectionError.DisconnectClientRequest | ConnectionError.DisconnectOutOfMemory | ConnectionError.DisconnectModeratedGame | ConnectionError.DisconnectOutOfMemoryExitContinue | ConnectionError.DisconnectOutOfMemoryKeepPlayingExit | ConnectionError.PlacelaunchErrors | ConnectionError.PlacelaunchDisabled | ConnectionError.PlacelaunchError | ConnectionError.PlacelaunchGameEnded | ConnectionError.PlacelaunchGameFull | ConnectionError.PlacelaunchUserLeft | ConnectionError.PlacelaunchRestricted | ConnectionError.PlacelaunchUnauthorized | ConnectionError.PlacelaunchFlooded | ConnectionError.PlacelaunchHashExpired | ConnectionError.PlacelaunchHashException | ConnectionError.PlacelaunchPartyCannotFit | ConnectionError.PlacelaunchHttpError | ConnectionError.PlacelaunchCustomMessage | ConnectionError.PlacelaunchOtherError | ConnectionError.TeleportErrors | ConnectionError.TeleportFailure | ConnectionError.TeleportGameNotFound | ConnectionError.TeleportGameEnded | ConnectionError.TeleportGameFull | ConnectionError.TeleportUnauthorized | ConnectionError.TeleportFlooded | ConnectionError.TeleportIsTeleporting;
	export namespace ConnectionState {
		export interface Connected extends EnumItem {
			Name: "Connected";
			Value: 0;
			EnumType: typeof ConnectionState;
		}

		export const Connected: Connected;

		export interface Disconnected extends EnumItem {
			Name: "Disconnected";
			Value: 1;
			EnumType: typeof ConnectionState;
		}

		export const Disconnected: Disconnected;

		export function GetEnumItems(this: Enum): Array<ConnectionState>
	}
	export type ConnectionState = ConnectionState.Connected | ConnectionState.Disconnected;
	export namespace ContextActionPriority {
		export interface Low extends EnumItem {
			Name: "Low";
			Value: 1000;
			EnumType: typeof ContextActionPriority;
		}

		export const Low: Low;

		export interface Medium extends EnumItem {
			Name: "Medium";
			Value: 2000;
			EnumType: typeof ContextActionPriority;
		}

		export const Medium: Medium;
		/** @deprecated renamed to Medium */
		export const Default: Medium;

		export interface High extends EnumItem {
			Name: "High";
			Value: 3000;
			EnumType: typeof ContextActionPriority;
		}

		export const High: High;

		export function GetEnumItems(this: Enum): Array<ContextActionPriority>
	}
	export type ContextActionPriority = ContextActionPriority.Low | ContextActionPriority.Medium | ContextActionPriority.High;
	export namespace ContextActionResult {
		export interface Pass extends EnumItem {
			Name: "Pass";
			Value: 1;
			EnumType: typeof ContextActionResult;
		}

		export const Pass: Pass;

		export interface Sink extends EnumItem {
			Name: "Sink";
			Value: 0;
			EnumType: typeof ContextActionResult;
		}

		export const Sink: Sink;

		export function GetEnumItems(this: Enum): Array<ContextActionResult>
	}
	export type ContextActionResult = ContextActionResult.Pass | ContextActionResult.Sink;
	export namespace ControlMode {
		export interface MouseLockSwitch extends EnumItem {
			Name: "MouseLockSwitch";
			Value: 1;
			EnumType: typeof ControlMode;
		}

		export const MouseLockSwitch: MouseLockSwitch;

		export interface Classic extends EnumItem {
			Name: "Classic";
			Value: 0;
			EnumType: typeof ControlMode;
		}

		export const Classic: Classic;

		export function GetEnumItems(this: Enum): Array<ControlMode>
	}
	export type ControlMode = ControlMode.MouseLockSwitch | ControlMode.Classic;
	export namespace CoreGuiType {
		export interface PlayerList extends EnumItem {
			Name: "PlayerList";
			Value: 0;
			EnumType: typeof CoreGuiType;
		}

		export const PlayerList: PlayerList;

		export interface Health extends EnumItem {
			Name: "Health";
			Value: 1;
			EnumType: typeof CoreGuiType;
		}

		export const Health: Health;

		export interface Backpack extends EnumItem {
			Name: "Backpack";
			Value: 2;
			EnumType: typeof CoreGuiType;
		}

		export const Backpack: Backpack;

		export interface Chat extends EnumItem {
			Name: "Chat";
			Value: 3;
			EnumType: typeof CoreGuiType;
		}

		export const Chat: Chat;

		export interface All extends EnumItem {
			Name: "All";
			Value: 4;
			EnumType: typeof CoreGuiType;
		}

		export const All: All;

		export interface EmotesMenu extends EnumItem {
			Name: "EmotesMenu";
			Value: 5;
			EnumType: typeof CoreGuiType;
		}

		export const EmotesMenu: EmotesMenu;

		export function GetEnumItems(this: Enum): Array<CoreGuiType>
	}
	export type CoreGuiType = CoreGuiType.PlayerList | CoreGuiType.Health | CoreGuiType.Backpack | CoreGuiType.Chat | CoreGuiType.All | CoreGuiType.EmotesMenu;
	export namespace CreateOutfitFailure {
		export interface InvalidName extends EnumItem {
			Name: "InvalidName";
			Value: 1;
			EnumType: typeof CreateOutfitFailure;
		}

		export const InvalidName: InvalidName;

		export interface OutfitLimitReached extends EnumItem {
			Name: "OutfitLimitReached";
			Value: 2;
			EnumType: typeof CreateOutfitFailure;
		}

		export const OutfitLimitReached: OutfitLimitReached;

		export interface Other extends EnumItem {
			Name: "Other";
			Value: 3;
			EnumType: typeof CreateOutfitFailure;
		}

		export const Other: Other;

		export function GetEnumItems(this: Enum): Array<CreateOutfitFailure>
	}
	export type CreateOutfitFailure = CreateOutfitFailure.InvalidName | CreateOutfitFailure.OutfitLimitReached | CreateOutfitFailure.Other;
	export namespace CreatorType {
		export interface User extends EnumItem {
			Name: "User";
			Value: 0;
			EnumType: typeof CreatorType;
		}

		export const User: User;

		export interface Group extends EnumItem {
			Name: "Group";
			Value: 1;
			EnumType: typeof CreatorType;
		}

		export const Group: Group;

		export function GetEnumItems(this: Enum): Array<CreatorType>
	}
	export type CreatorType = CreatorType.User | CreatorType.Group;
	export namespace CurrencyType {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof CurrencyType;
		}

		export const Default: Default;

		export interface Robux extends EnumItem {
			Name: "Robux";
			Value: 1;
			EnumType: typeof CurrencyType;
		}

		export const Robux: Robux;

		export interface Tix extends EnumItem {
			Name: "Tix";
			Value: 2;
			EnumType: typeof CurrencyType;
		}

		export const Tix: Tix;

		export function GetEnumItems(this: Enum): Array<CurrencyType>
	}
	export type CurrencyType = CurrencyType.Default | CurrencyType.Robux | CurrencyType.Tix;
	export namespace CustomCameraMode {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof CustomCameraMode;
		}

		export const Default: Default;

		export interface Follow extends EnumItem {
			Name: "Follow";
			Value: 2;
			EnumType: typeof CustomCameraMode;
		}

		export const Follow: Follow;

		export interface Classic extends EnumItem {
			Name: "Classic";
			Value: 1;
			EnumType: typeof CustomCameraMode;
		}

		export const Classic: Classic;

		export function GetEnumItems(this: Enum): Array<CustomCameraMode>
	}
	export type CustomCameraMode = CustomCameraMode.Default | CustomCameraMode.Follow | CustomCameraMode.Classic;
	export namespace DataStoreRequestType {
		export interface GetAsync extends EnumItem {
			Name: "GetAsync";
			Value: 0;
			EnumType: typeof DataStoreRequestType;
		}

		export const GetAsync: GetAsync;

		export interface SetIncrementAsync extends EnumItem {
			Name: "SetIncrementAsync";
			Value: 1;
			EnumType: typeof DataStoreRequestType;
		}

		export const SetIncrementAsync: SetIncrementAsync;

		export interface UpdateAsync extends EnumItem {
			Name: "UpdateAsync";
			Value: 2;
			EnumType: typeof DataStoreRequestType;
		}

		export const UpdateAsync: UpdateAsync;

		export interface GetSortedAsync extends EnumItem {
			Name: "GetSortedAsync";
			Value: 3;
			EnumType: typeof DataStoreRequestType;
		}

		export const GetSortedAsync: GetSortedAsync;

		export interface SetIncrementSortedAsync extends EnumItem {
			Name: "SetIncrementSortedAsync";
			Value: 4;
			EnumType: typeof DataStoreRequestType;
		}

		export const SetIncrementSortedAsync: SetIncrementSortedAsync;

		export interface OnUpdate extends EnumItem {
			Name: "OnUpdate";
			Value: 5;
			EnumType: typeof DataStoreRequestType;
		}

		export const OnUpdate: OnUpdate;

		export function GetEnumItems(this: Enum): Array<DataStoreRequestType>
	}
	export type DataStoreRequestType = DataStoreRequestType.GetAsync | DataStoreRequestType.SetIncrementAsync | DataStoreRequestType.UpdateAsync | DataStoreRequestType.GetSortedAsync | DataStoreRequestType.SetIncrementSortedAsync | DataStoreRequestType.OnUpdate;
	export namespace DebuggerEndReason {
		export interface ClientRequest extends EnumItem {
			Name: "ClientRequest";
			Value: 0;
			EnumType: typeof DebuggerEndReason;
		}

		export const ClientRequest: ClientRequest;

		export interface Timeout extends EnumItem {
			Name: "Timeout";
			Value: 1;
			EnumType: typeof DebuggerEndReason;
		}

		export const Timeout: Timeout;

		export interface InvalidHost extends EnumItem {
			Name: "InvalidHost";
			Value: 2;
			EnumType: typeof DebuggerEndReason;
		}

		export const InvalidHost: InvalidHost;

		export interface Disconnected extends EnumItem {
			Name: "Disconnected";
			Value: 3;
			EnumType: typeof DebuggerEndReason;
		}

		export const Disconnected: Disconnected;

		export interface ServerShutdown extends EnumItem {
			Name: "ServerShutdown";
			Value: 4;
			EnumType: typeof DebuggerEndReason;
		}

		export const ServerShutdown: ServerShutdown;

		export interface ServerProtocolMismatch extends EnumItem {
			Name: "ServerProtocolMismatch";
			Value: 5;
			EnumType: typeof DebuggerEndReason;
		}

		export const ServerProtocolMismatch: ServerProtocolMismatch;

		export interface ConfigurationFailed extends EnumItem {
			Name: "ConfigurationFailed";
			Value: 6;
			EnumType: typeof DebuggerEndReason;
		}

		export const ConfigurationFailed: ConfigurationFailed;

		export interface RpcError extends EnumItem {
			Name: "RpcError";
			Value: 7;
			EnumType: typeof DebuggerEndReason;
		}

		export const RpcError: RpcError;

		export function GetEnumItems(this: Enum): Array<DebuggerEndReason>
	}
	export type DebuggerEndReason = DebuggerEndReason.ClientRequest | DebuggerEndReason.Timeout | DebuggerEndReason.InvalidHost | DebuggerEndReason.Disconnected | DebuggerEndReason.ServerShutdown | DebuggerEndReason.ServerProtocolMismatch | DebuggerEndReason.ConfigurationFailed | DebuggerEndReason.RpcError;
	export namespace DebuggerExceptionBreakMode {
		export interface Never extends EnumItem {
			Name: "Never";
			Value: 0;
			EnumType: typeof DebuggerExceptionBreakMode;
		}

		export const Never: Never;

		export interface Unhandled extends EnumItem {
			Name: "Unhandled";
			Value: 1;
			EnumType: typeof DebuggerExceptionBreakMode;
		}

		export const Unhandled: Unhandled;

		export interface Always extends EnumItem {
			Name: "Always";
			Value: 2;
			EnumType: typeof DebuggerExceptionBreakMode;
		}

		export const Always: Always;

		export function GetEnumItems(this: Enum): Array<DebuggerExceptionBreakMode>
	}
	export type DebuggerExceptionBreakMode = DebuggerExceptionBreakMode.Never | DebuggerExceptionBreakMode.Unhandled | DebuggerExceptionBreakMode.Always;
	export namespace DebuggerFrameType {
		export interface C extends EnumItem {
			Name: "C";
			Value: 0;
			EnumType: typeof DebuggerFrameType;
		}

		export const C: C;

		export interface Lua extends EnumItem {
			Name: "Lua";
			Value: 1;
			EnumType: typeof DebuggerFrameType;
		}

		export const Lua: Lua;

		export function GetEnumItems(this: Enum): Array<DebuggerFrameType>
	}
	export type DebuggerFrameType = DebuggerFrameType.C | DebuggerFrameType.Lua;
	export namespace DebuggerPauseReason {
		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof DebuggerPauseReason;
		}

		export const Unknown: Unknown;

		export interface Requested extends EnumItem {
			Name: "Requested";
			Value: 1;
			EnumType: typeof DebuggerPauseReason;
		}

		export const Requested: Requested;

		export interface Breakpoint extends EnumItem {
			Name: "Breakpoint";
			Value: 2;
			EnumType: typeof DebuggerPauseReason;
		}

		export const Breakpoint: Breakpoint;

		export interface Exception extends EnumItem {
			Name: "Exception";
			Value: 3;
			EnumType: typeof DebuggerPauseReason;
		}

		export const Exception: Exception;

		export interface SingleStep extends EnumItem {
			Name: "SingleStep";
			Value: 4;
			EnumType: typeof DebuggerPauseReason;
		}

		export const SingleStep: SingleStep;

		export interface Entrypoint extends EnumItem {
			Name: "Entrypoint";
			Value: 5;
			EnumType: typeof DebuggerPauseReason;
		}

		export const Entrypoint: Entrypoint;

		export function GetEnumItems(this: Enum): Array<DebuggerPauseReason>
	}
	export type DebuggerPauseReason = DebuggerPauseReason.Unknown | DebuggerPauseReason.Requested | DebuggerPauseReason.Breakpoint | DebuggerPauseReason.Exception | DebuggerPauseReason.SingleStep | DebuggerPauseReason.Entrypoint;
	export namespace DebuggerStatus {
		export interface Success extends EnumItem {
			Name: "Success";
			Value: 0;
			EnumType: typeof DebuggerStatus;
		}

		export const Success: Success;

		export interface Timeout extends EnumItem {
			Name: "Timeout";
			Value: 1;
			EnumType: typeof DebuggerStatus;
		}

		export const Timeout: Timeout;

		export interface ConnectionLost extends EnumItem {
			Name: "ConnectionLost";
			Value: 2;
			EnumType: typeof DebuggerStatus;
		}

		export const ConnectionLost: ConnectionLost;

		export interface InvalidResponse extends EnumItem {
			Name: "InvalidResponse";
			Value: 3;
			EnumType: typeof DebuggerStatus;
		}

		export const InvalidResponse: InvalidResponse;

		export interface InternalError extends EnumItem {
			Name: "InternalError";
			Value: 4;
			EnumType: typeof DebuggerStatus;
		}

		export const InternalError: InternalError;

		export interface InvalidState extends EnumItem {
			Name: "InvalidState";
			Value: 5;
			EnumType: typeof DebuggerStatus;
		}

		export const InvalidState: InvalidState;

		export interface RpcError extends EnumItem {
			Name: "RpcError";
			Value: 6;
			EnumType: typeof DebuggerStatus;
		}

		export const RpcError: RpcError;

		export interface InvalidArgument extends EnumItem {
			Name: "InvalidArgument";
			Value: 7;
			EnumType: typeof DebuggerStatus;
		}

		export const InvalidArgument: InvalidArgument;

		export interface ConnectionClosed extends EnumItem {
			Name: "ConnectionClosed";
			Value: 8;
			EnumType: typeof DebuggerStatus;
		}

		export const ConnectionClosed: ConnectionClosed;

		export function GetEnumItems(this: Enum): Array<DebuggerStatus>
	}
	export type DebuggerStatus = DebuggerStatus.Success | DebuggerStatus.Timeout | DebuggerStatus.ConnectionLost | DebuggerStatus.InvalidResponse | DebuggerStatus.InternalError | DebuggerStatus.InvalidState | DebuggerStatus.RpcError | DebuggerStatus.InvalidArgument | DebuggerStatus.ConnectionClosed;
	export namespace DevCameraOcclusionMode {
		export interface Zoom extends EnumItem {
			Name: "Zoom";
			Value: 0;
			EnumType: typeof DevCameraOcclusionMode;
		}

		export const Zoom: Zoom;

		export interface Invisicam extends EnumItem {
			Name: "Invisicam";
			Value: 1;
			EnumType: typeof DevCameraOcclusionMode;
		}

		export const Invisicam: Invisicam;

		export function GetEnumItems(this: Enum): Array<DevCameraOcclusionMode>
	}
	export type DevCameraOcclusionMode = DevCameraOcclusionMode.Zoom | DevCameraOcclusionMode.Invisicam;
	export namespace DevComputerCameraMovementMode {
		export interface UserChoice extends EnumItem {
			Name: "UserChoice";
			Value: 0;
			EnumType: typeof DevComputerCameraMovementMode;
		}

		export const UserChoice: UserChoice;

		export interface Classic extends EnumItem {
			Name: "Classic";
			Value: 1;
			EnumType: typeof DevComputerCameraMovementMode;
		}

		export const Classic: Classic;

		export interface Follow extends EnumItem {
			Name: "Follow";
			Value: 2;
			EnumType: typeof DevComputerCameraMovementMode;
		}

		export const Follow: Follow;

		export interface Orbital extends EnumItem {
			Name: "Orbital";
			Value: 3;
			EnumType: typeof DevComputerCameraMovementMode;
		}

		export const Orbital: Orbital;

		export interface CameraToggle extends EnumItem {
			Name: "CameraToggle";
			Value: 4;
			EnumType: typeof DevComputerCameraMovementMode;
		}

		export const CameraToggle: CameraToggle;

		export function GetEnumItems(this: Enum): Array<DevComputerCameraMovementMode>
	}
	export type DevComputerCameraMovementMode = DevComputerCameraMovementMode.UserChoice | DevComputerCameraMovementMode.Classic | DevComputerCameraMovementMode.Follow | DevComputerCameraMovementMode.Orbital | DevComputerCameraMovementMode.CameraToggle;
	export namespace DevComputerMovementMode {
		export interface UserChoice extends EnumItem {
			Name: "UserChoice";
			Value: 0;
			EnumType: typeof DevComputerMovementMode;
		}

		export const UserChoice: UserChoice;

		export interface KeyboardMouse extends EnumItem {
			Name: "KeyboardMouse";
			Value: 1;
			EnumType: typeof DevComputerMovementMode;
		}

		export const KeyboardMouse: KeyboardMouse;

		export interface ClickToMove extends EnumItem {
			Name: "ClickToMove";
			Value: 2;
			EnumType: typeof DevComputerMovementMode;
		}

		export const ClickToMove: ClickToMove;

		export interface Scriptable extends EnumItem {
			Name: "Scriptable";
			Value: 3;
			EnumType: typeof DevComputerMovementMode;
		}

		export const Scriptable: Scriptable;

		export function GetEnumItems(this: Enum): Array<DevComputerMovementMode>
	}
	export type DevComputerMovementMode = DevComputerMovementMode.UserChoice | DevComputerMovementMode.KeyboardMouse | DevComputerMovementMode.ClickToMove | DevComputerMovementMode.Scriptable;
	export namespace DevTouchCameraMovementMode {
		export interface UserChoice extends EnumItem {
			Name: "UserChoice";
			Value: 0;
			EnumType: typeof DevTouchCameraMovementMode;
		}

		export const UserChoice: UserChoice;

		export interface Classic extends EnumItem {
			Name: "Classic";
			Value: 1;
			EnumType: typeof DevTouchCameraMovementMode;
		}

		export const Classic: Classic;

		export interface Follow extends EnumItem {
			Name: "Follow";
			Value: 2;
			EnumType: typeof DevTouchCameraMovementMode;
		}

		export const Follow: Follow;

		export interface Orbital extends EnumItem {
			Name: "Orbital";
			Value: 3;
			EnumType: typeof DevTouchCameraMovementMode;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: Enum): Array<DevTouchCameraMovementMode>
	}
	export type DevTouchCameraMovementMode = DevTouchCameraMovementMode.UserChoice | DevTouchCameraMovementMode.Classic | DevTouchCameraMovementMode.Follow | DevTouchCameraMovementMode.Orbital;
	export namespace DevTouchMovementMode {
		export interface UserChoice extends EnumItem {
			Name: "UserChoice";
			Value: 0;
			EnumType: typeof DevTouchMovementMode;
		}

		export const UserChoice: UserChoice;

		export interface Thumbstick extends EnumItem {
			Name: "Thumbstick";
			Value: 1;
			EnumType: typeof DevTouchMovementMode;
		}

		export const Thumbstick: Thumbstick;

		export interface DPad extends EnumItem {
			Name: "DPad";
			Value: 2;
			EnumType: typeof DevTouchMovementMode;
		}

		export const DPad: DPad;

		export interface Thumbpad extends EnumItem {
			Name: "Thumbpad";
			Value: 3;
			EnumType: typeof DevTouchMovementMode;
		}

		export const Thumbpad: Thumbpad;

		export interface ClickToMove extends EnumItem {
			Name: "ClickToMove";
			Value: 4;
			EnumType: typeof DevTouchMovementMode;
		}

		export const ClickToMove: ClickToMove;

		export interface Scriptable extends EnumItem {
			Name: "Scriptable";
			Value: 5;
			EnumType: typeof DevTouchMovementMode;
		}

		export const Scriptable: Scriptable;

		export interface DynamicThumbstick extends EnumItem {
			Name: "DynamicThumbstick";
			Value: 6;
			EnumType: typeof DevTouchMovementMode;
		}

		export const DynamicThumbstick: DynamicThumbstick;

		export function GetEnumItems(this: Enum): Array<DevTouchMovementMode>
	}
	export type DevTouchMovementMode = DevTouchMovementMode.UserChoice | DevTouchMovementMode.Thumbstick | DevTouchMovementMode.DPad | DevTouchMovementMode.Thumbpad | DevTouchMovementMode.ClickToMove | DevTouchMovementMode.Scriptable | DevTouchMovementMode.DynamicThumbstick;
	export namespace DeveloperMemoryTag {
		export interface Internal extends EnumItem {
			Name: "Internal";
			Value: 0;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const Internal: Internal;

		export interface HttpCache extends EnumItem {
			Name: "HttpCache";
			Value: 1;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const HttpCache: HttpCache;

		export interface Instances extends EnumItem {
			Name: "Instances";
			Value: 2;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const Instances: Instances;

		export interface Signals extends EnumItem {
			Name: "Signals";
			Value: 3;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const Signals: Signals;

		export interface LuaHeap extends EnumItem {
			Name: "LuaHeap";
			Value: 4;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const LuaHeap: LuaHeap;

		export interface Script extends EnumItem {
			Name: "Script";
			Value: 5;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const Script: Script;

		export interface PhysicsCollision extends EnumItem {
			Name: "PhysicsCollision";
			Value: 6;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const PhysicsCollision: PhysicsCollision;

		export interface PhysicsParts extends EnumItem {
			Name: "PhysicsParts";
			Value: 7;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const PhysicsParts: PhysicsParts;

		export interface GraphicsSolidModels extends EnumItem {
			Name: "GraphicsSolidModels";
			Value: 8;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const GraphicsSolidModels: GraphicsSolidModels;

		export interface GraphicsMeshParts extends EnumItem {
			Name: "GraphicsMeshParts";
			Value: 10;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const GraphicsMeshParts: GraphicsMeshParts;

		export interface GraphicsParticles extends EnumItem {
			Name: "GraphicsParticles";
			Value: 11;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const GraphicsParticles: GraphicsParticles;

		export interface GraphicsParts extends EnumItem {
			Name: "GraphicsParts";
			Value: 12;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const GraphicsParts: GraphicsParts;

		export interface GraphicsSpatialHash extends EnumItem {
			Name: "GraphicsSpatialHash";
			Value: 13;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const GraphicsSpatialHash: GraphicsSpatialHash;

		export interface GraphicsTerrain extends EnumItem {
			Name: "GraphicsTerrain";
			Value: 14;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const GraphicsTerrain: GraphicsTerrain;

		export interface GraphicsTexture extends EnumItem {
			Name: "GraphicsTexture";
			Value: 15;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const GraphicsTexture: GraphicsTexture;

		export interface GraphicsTextureCharacter extends EnumItem {
			Name: "GraphicsTextureCharacter";
			Value: 16;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const GraphicsTextureCharacter: GraphicsTextureCharacter;

		export interface Sounds extends EnumItem {
			Name: "Sounds";
			Value: 17;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const Sounds: Sounds;

		export interface StreamingSounds extends EnumItem {
			Name: "StreamingSounds";
			Value: 18;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const StreamingSounds: StreamingSounds;

		export interface TerrainVoxels extends EnumItem {
			Name: "TerrainVoxels";
			Value: 19;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const TerrainVoxels: TerrainVoxels;

		export interface Gui extends EnumItem {
			Name: "Gui";
			Value: 21;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const Gui: Gui;

		export interface Animation extends EnumItem {
			Name: "Animation";
			Value: 22;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const Animation: Animation;

		export interface Navigation extends EnumItem {
			Name: "Navigation";
			Value: 23;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const Navigation: Navigation;

		export interface GeometryCSG extends EnumItem {
			Name: "GeometryCSG";
			Value: 24;
			EnumType: typeof DeveloperMemoryTag;
		}

		export const GeometryCSG: GeometryCSG;

		export function GetEnumItems(this: Enum): Array<DeveloperMemoryTag>
	}
	export type DeveloperMemoryTag = DeveloperMemoryTag.Internal | DeveloperMemoryTag.HttpCache | DeveloperMemoryTag.Instances | DeveloperMemoryTag.Signals | DeveloperMemoryTag.LuaHeap | DeveloperMemoryTag.Script | DeveloperMemoryTag.PhysicsCollision | DeveloperMemoryTag.PhysicsParts | DeveloperMemoryTag.GraphicsSolidModels | DeveloperMemoryTag.GraphicsMeshParts | DeveloperMemoryTag.GraphicsParticles | DeveloperMemoryTag.GraphicsParts | DeveloperMemoryTag.GraphicsSpatialHash | DeveloperMemoryTag.GraphicsTerrain | DeveloperMemoryTag.GraphicsTexture | DeveloperMemoryTag.GraphicsTextureCharacter | DeveloperMemoryTag.Sounds | DeveloperMemoryTag.StreamingSounds | DeveloperMemoryTag.TerrainVoxels | DeveloperMemoryTag.Gui | DeveloperMemoryTag.Animation | DeveloperMemoryTag.Navigation | DeveloperMemoryTag.GeometryCSG;
	export namespace DeviceType {
		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof DeviceType;
		}

		export const Unknown: Unknown;

		export interface Desktop extends EnumItem {
			Name: "Desktop";
			Value: 1;
			EnumType: typeof DeviceType;
		}

		export const Desktop: Desktop;

		export interface Tablet extends EnumItem {
			Name: "Tablet";
			Value: 2;
			EnumType: typeof DeviceType;
		}

		export const Tablet: Tablet;

		export interface Phone extends EnumItem {
			Name: "Phone";
			Value: 3;
			EnumType: typeof DeviceType;
		}

		export const Phone: Phone;

		export function GetEnumItems(this: Enum): Array<DeviceType>
	}
	export type DeviceType = DeviceType.Unknown | DeviceType.Desktop | DeviceType.Tablet | DeviceType.Phone;
	export namespace DialogBehaviorType {
		export interface SinglePlayer extends EnumItem {
			Name: "SinglePlayer";
			Value: 0;
			EnumType: typeof DialogBehaviorType;
		}

		export const SinglePlayer: SinglePlayer;

		export interface MultiplePlayers extends EnumItem {
			Name: "MultiplePlayers";
			Value: 1;
			EnumType: typeof DialogBehaviorType;
		}

		export const MultiplePlayers: MultiplePlayers;

		export function GetEnumItems(this: Enum): Array<DialogBehaviorType>
	}
	export type DialogBehaviorType = DialogBehaviorType.SinglePlayer | DialogBehaviorType.MultiplePlayers;
	export namespace DialogPurpose {
		export interface Quest extends EnumItem {
			Name: "Quest";
			Value: 0;
			EnumType: typeof DialogPurpose;
		}

		export const Quest: Quest;

		export interface Help extends EnumItem {
			Name: "Help";
			Value: 1;
			EnumType: typeof DialogPurpose;
		}

		export const Help: Help;

		export interface Shop extends EnumItem {
			Name: "Shop";
			Value: 2;
			EnumType: typeof DialogPurpose;
		}

		export const Shop: Shop;

		export function GetEnumItems(this: Enum): Array<DialogPurpose>
	}
	export type DialogPurpose = DialogPurpose.Quest | DialogPurpose.Help | DialogPurpose.Shop;
	export namespace DialogTone {
		export interface Neutral extends EnumItem {
			Name: "Neutral";
			Value: 0;
			EnumType: typeof DialogTone;
		}

		export const Neutral: Neutral;

		export interface Friendly extends EnumItem {
			Name: "Friendly";
			Value: 1;
			EnumType: typeof DialogTone;
		}

		export const Friendly: Friendly;

		export interface Enemy extends EnumItem {
			Name: "Enemy";
			Value: 2;
			EnumType: typeof DialogTone;
		}

		export const Enemy: Enemy;

		export function GetEnumItems(this: Enum): Array<DialogTone>
	}
	export type DialogTone = DialogTone.Neutral | DialogTone.Friendly | DialogTone.Enemy;
	export namespace DominantAxis {
		export interface Width extends EnumItem {
			Name: "Width";
			Value: 0;
			EnumType: typeof DominantAxis;
		}

		export const Width: Width;

		export interface Height extends EnumItem {
			Name: "Height";
			Value: 1;
			EnumType: typeof DominantAxis;
		}

		export const Height: Height;

		export function GetEnumItems(this: Enum): Array<DominantAxis>
	}
	export type DominantAxis = DominantAxis.Width | DominantAxis.Height;
	export namespace DraftStatusCode {
		export interface OK extends EnumItem {
			Name: "OK";
			Value: 0;
			EnumType: typeof DraftStatusCode;
		}

		export const OK: OK;

		export interface DraftOutdated extends EnumItem {
			Name: "DraftOutdated";
			Value: 1;
			EnumType: typeof DraftStatusCode;
		}

		export const DraftOutdated: DraftOutdated;

		export interface ScriptRemoved extends EnumItem {
			Name: "ScriptRemoved";
			Value: 2;
			EnumType: typeof DraftStatusCode;
		}

		export const ScriptRemoved: ScriptRemoved;

		export interface DraftCommitted extends EnumItem {
			Name: "DraftCommitted";
			Value: 3;
			EnumType: typeof DraftStatusCode;
		}

		export const DraftCommitted: DraftCommitted;

		export function GetEnumItems(this: Enum): Array<DraftStatusCode>
	}
	export type DraftStatusCode = DraftStatusCode.OK | DraftStatusCode.DraftOutdated | DraftStatusCode.ScriptRemoved | DraftStatusCode.DraftCommitted;
	export namespace DraggerCoordinateSpace {
		export interface Object extends EnumItem {
			Name: "Object";
			Value: 0;
			EnumType: typeof DraggerCoordinateSpace;
		}

		export const Object: Object;

		export interface World extends EnumItem {
			Name: "World";
			Value: 1;
			EnumType: typeof DraggerCoordinateSpace;
		}

		export const World: World;

		export function GetEnumItems(this: Enum): Array<DraggerCoordinateSpace>
	}
	export type DraggerCoordinateSpace = DraggerCoordinateSpace.Object | DraggerCoordinateSpace.World;
	export namespace DraggerMovementMode {
		export interface Geometric extends EnumItem {
			Name: "Geometric";
			Value: 0;
			EnumType: typeof DraggerMovementMode;
		}

		export const Geometric: Geometric;

		export interface Physical extends EnumItem {
			Name: "Physical";
			Value: 1;
			EnumType: typeof DraggerMovementMode;
		}

		export const Physical: Physical;

		export function GetEnumItems(this: Enum): Array<DraggerMovementMode>
	}
	export type DraggerMovementMode = DraggerMovementMode.Geometric | DraggerMovementMode.Physical;
	export namespace EasingDirection {
		export interface In extends EnumItem {
			Name: "In";
			Value: 0;
			EnumType: typeof EasingDirection;
		}

		export const In: In;

		export interface Out extends EnumItem {
			Name: "Out";
			Value: 1;
			EnumType: typeof EasingDirection;
		}

		export const Out: Out;

		export interface InOut extends EnumItem {
			Name: "InOut";
			Value: 2;
			EnumType: typeof EasingDirection;
		}

		export const InOut: InOut;

		export function GetEnumItems(this: Enum): Array<EasingDirection>
	}
	export type EasingDirection = EasingDirection.In | EasingDirection.Out | EasingDirection.InOut;
	export namespace EasingStyle {
		export interface Linear extends EnumItem {
			Name: "Linear";
			Value: 0;
			EnumType: typeof EasingStyle;
		}

		export const Linear: Linear;

		export interface Sine extends EnumItem {
			Name: "Sine";
			Value: 1;
			EnumType: typeof EasingStyle;
		}

		export const Sine: Sine;

		export interface Back extends EnumItem {
			Name: "Back";
			Value: 2;
			EnumType: typeof EasingStyle;
		}

		export const Back: Back;

		export interface Quad extends EnumItem {
			Name: "Quad";
			Value: 3;
			EnumType: typeof EasingStyle;
		}

		export const Quad: Quad;

		export interface Quart extends EnumItem {
			Name: "Quart";
			Value: 4;
			EnumType: typeof EasingStyle;
		}

		export const Quart: Quart;

		export interface Quint extends EnumItem {
			Name: "Quint";
			Value: 5;
			EnumType: typeof EasingStyle;
		}

		export const Quint: Quint;

		export interface Bounce extends EnumItem {
			Name: "Bounce";
			Value: 6;
			EnumType: typeof EasingStyle;
		}

		export const Bounce: Bounce;

		export interface Elastic extends EnumItem {
			Name: "Elastic";
			Value: 7;
			EnumType: typeof EasingStyle;
		}

		export const Elastic: Elastic;

		export interface Exponential extends EnumItem {
			Name: "Exponential";
			Value: 8;
			EnumType: typeof EasingStyle;
		}

		export const Exponential: Exponential;

		export interface Circular extends EnumItem {
			Name: "Circular";
			Value: 9;
			EnumType: typeof EasingStyle;
		}

		export const Circular: Circular;

		export interface Cubic extends EnumItem {
			Name: "Cubic";
			Value: 10;
			EnumType: typeof EasingStyle;
		}

		export const Cubic: Cubic;

		export function GetEnumItems(this: Enum): Array<EasingStyle>
	}
	export type EasingStyle = EasingStyle.Linear | EasingStyle.Sine | EasingStyle.Back | EasingStyle.Quad | EasingStyle.Quart | EasingStyle.Quint | EasingStyle.Bounce | EasingStyle.Elastic | EasingStyle.Exponential | EasingStyle.Circular | EasingStyle.Cubic;
	export namespace ElasticBehavior {
		export interface WhenScrollable extends EnumItem {
			Name: "WhenScrollable";
			Value: 0;
			EnumType: typeof ElasticBehavior;
		}

		export const WhenScrollable: WhenScrollable;

		export interface Always extends EnumItem {
			Name: "Always";
			Value: 1;
			EnumType: typeof ElasticBehavior;
		}

		export const Always: Always;

		export interface Never extends EnumItem {
			Name: "Never";
			Value: 2;
			EnumType: typeof ElasticBehavior;
		}

		export const Never: Never;

		export function GetEnumItems(this: Enum): Array<ElasticBehavior>
	}
	export type ElasticBehavior = ElasticBehavior.WhenScrollable | ElasticBehavior.Always | ElasticBehavior.Never;
	export namespace EnviromentalPhysicsThrottle {
		export interface DefaultAuto extends EnumItem {
			Name: "DefaultAuto";
			Value: 0;
			EnumType: typeof EnviromentalPhysicsThrottle;
		}

		export const DefaultAuto: DefaultAuto;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof EnviromentalPhysicsThrottle;
		}

		export const Disabled: Disabled;

		export interface Always extends EnumItem {
			Name: "Always";
			Value: 2;
			EnumType: typeof EnviromentalPhysicsThrottle;
		}

		export const Always: Always;

		export interface Skip2 extends EnumItem {
			Name: "Skip2";
			Value: 3;
			EnumType: typeof EnviromentalPhysicsThrottle;
		}

		export const Skip2: Skip2;

		export interface Skip4 extends EnumItem {
			Name: "Skip4";
			Value: 4;
			EnumType: typeof EnviromentalPhysicsThrottle;
		}

		export const Skip4: Skip4;

		export interface Skip8 extends EnumItem {
			Name: "Skip8";
			Value: 5;
			EnumType: typeof EnviromentalPhysicsThrottle;
		}

		export const Skip8: Skip8;

		export interface Skip16 extends EnumItem {
			Name: "Skip16";
			Value: 6;
			EnumType: typeof EnviromentalPhysicsThrottle;
		}

		export const Skip16: Skip16;

		export function GetEnumItems(this: Enum): Array<EnviromentalPhysicsThrottle>
	}
	export type EnviromentalPhysicsThrottle = EnviromentalPhysicsThrottle.DefaultAuto | EnviromentalPhysicsThrottle.Disabled | EnviromentalPhysicsThrottle.Always | EnviromentalPhysicsThrottle.Skip2 | EnviromentalPhysicsThrottle.Skip4 | EnviromentalPhysicsThrottle.Skip8 | EnviromentalPhysicsThrottle.Skip16;
	export namespace ExplosionType {
		export interface NoCraters extends EnumItem {
			Name: "NoCraters";
			Value: 0;
			EnumType: typeof ExplosionType;
		}

		export const NoCraters: NoCraters;

		export interface Craters extends EnumItem {
			Name: "Craters";
			Value: 1;
			EnumType: typeof ExplosionType;
		}

		export const Craters: Craters;
		/** @deprecated renamed to Craters */
		export const CratersAndDebris: Craters;

		export function GetEnumItems(this: Enum): Array<ExplosionType>
	}
	export type ExplosionType = ExplosionType.NoCraters | ExplosionType.Craters;
	export namespace FieldOfViewMode {
		export interface Vertical extends EnumItem {
			Name: "Vertical";
			Value: 0;
			EnumType: typeof FieldOfViewMode;
		}

		export const Vertical: Vertical;

		export interface Diagonal extends EnumItem {
			Name: "Diagonal";
			Value: 1;
			EnumType: typeof FieldOfViewMode;
		}

		export const Diagonal: Diagonal;

		export interface MaxAxis extends EnumItem {
			Name: "MaxAxis";
			Value: 2;
			EnumType: typeof FieldOfViewMode;
		}

		export const MaxAxis: MaxAxis;

		export function GetEnumItems(this: Enum): Array<FieldOfViewMode>
	}
	export type FieldOfViewMode = FieldOfViewMode.Vertical | FieldOfViewMode.Diagonal | FieldOfViewMode.MaxAxis;
	export namespace FillDirection {
		export interface Horizontal extends EnumItem {
			Name: "Horizontal";
			Value: 0;
			EnumType: typeof FillDirection;
		}

		export const Horizontal: Horizontal;

		export interface Vertical extends EnumItem {
			Name: "Vertical";
			Value: 1;
			EnumType: typeof FillDirection;
		}

		export const Vertical: Vertical;

		export function GetEnumItems(this: Enum): Array<FillDirection>
	}
	export type FillDirection = FillDirection.Horizontal | FillDirection.Vertical;
	export namespace FilterResult {
		export interface Rejected extends EnumItem {
			Name: "Rejected";
			Value: 1;
			EnumType: typeof FilterResult;
		}

		export const Rejected: Rejected;

		export interface Accepted extends EnumItem {
			Name: "Accepted";
			Value: 0;
			EnumType: typeof FilterResult;
		}

		export const Accepted: Accepted;

		export function GetEnumItems(this: Enum): Array<FilterResult>
	}
	export type FilterResult = FilterResult.Rejected | FilterResult.Accepted;
	export namespace Font {
		export interface Legacy extends EnumItem {
			Name: "Legacy";
			Value: 0;
			EnumType: typeof Font;
		}

		export const Legacy: Legacy;

		export interface Arial extends EnumItem {
			Name: "Arial";
			Value: 1;
			EnumType: typeof Font;
		}

		export const Arial: Arial;

		export interface ArialBold extends EnumItem {
			Name: "ArialBold";
			Value: 2;
			EnumType: typeof Font;
		}

		export const ArialBold: ArialBold;

		export interface SourceSans extends EnumItem {
			Name: "SourceSans";
			Value: 3;
			EnumType: typeof Font;
		}

		export const SourceSans: SourceSans;

		export interface SourceSansBold extends EnumItem {
			Name: "SourceSansBold";
			Value: 4;
			EnumType: typeof Font;
		}

		export const SourceSansBold: SourceSansBold;

		export interface SourceSansSemibold extends EnumItem {
			Name: "SourceSansSemibold";
			Value: 16;
			EnumType: typeof Font;
		}

		export const SourceSansSemibold: SourceSansSemibold;

		export interface SourceSansLight extends EnumItem {
			Name: "SourceSansLight";
			Value: 5;
			EnumType: typeof Font;
		}

		export const SourceSansLight: SourceSansLight;

		export interface SourceSansItalic extends EnumItem {
			Name: "SourceSansItalic";
			Value: 6;
			EnumType: typeof Font;
		}

		export const SourceSansItalic: SourceSansItalic;

		export interface Bodoni extends EnumItem {
			Name: "Bodoni";
			Value: 7;
			EnumType: typeof Font;
		}

		export const Bodoni: Bodoni;

		export interface Garamond extends EnumItem {
			Name: "Garamond";
			Value: 8;
			EnumType: typeof Font;
		}

		export const Garamond: Garamond;

		export interface Cartoon extends EnumItem {
			Name: "Cartoon";
			Value: 9;
			EnumType: typeof Font;
		}

		export const Cartoon: Cartoon;

		export interface Code extends EnumItem {
			Name: "Code";
			Value: 10;
			EnumType: typeof Font;
		}

		export const Code: Code;

		export interface Highway extends EnumItem {
			Name: "Highway";
			Value: 11;
			EnumType: typeof Font;
		}

		export const Highway: Highway;

		export interface SciFi extends EnumItem {
			Name: "SciFi";
			Value: 12;
			EnumType: typeof Font;
		}

		export const SciFi: SciFi;

		export interface Arcade extends EnumItem {
			Name: "Arcade";
			Value: 13;
			EnumType: typeof Font;
		}

		export const Arcade: Arcade;

		export interface Fantasy extends EnumItem {
			Name: "Fantasy";
			Value: 14;
			EnumType: typeof Font;
		}

		export const Fantasy: Fantasy;

		export interface Antique extends EnumItem {
			Name: "Antique";
			Value: 15;
			EnumType: typeof Font;
		}

		export const Antique: Antique;

		export interface Gotham extends EnumItem {
			Name: "Gotham";
			Value: 17;
			EnumType: typeof Font;
		}

		export const Gotham: Gotham;

		export interface GothamMedium extends EnumItem {
			Name: "GothamMedium";
			Value: 18;
			EnumType: typeof Font;
		}

		export const GothamMedium: GothamMedium;
		/** @deprecated renamed to GothamMedium */
		export const GothamSemibold: GothamMedium;

		export interface GothamBold extends EnumItem {
			Name: "GothamBold";
			Value: 19;
			EnumType: typeof Font;
		}

		export const GothamBold: GothamBold;

		export interface GothamBlack extends EnumItem {
			Name: "GothamBlack";
			Value: 20;
			EnumType: typeof Font;
		}

		export const GothamBlack: GothamBlack;

		export interface AmaticSC extends EnumItem {
			Name: "AmaticSC";
			Value: 21;
			EnumType: typeof Font;
		}

		export const AmaticSC: AmaticSC;

		export interface Bangers extends EnumItem {
			Name: "Bangers";
			Value: 22;
			EnumType: typeof Font;
		}

		export const Bangers: Bangers;

		export interface Creepster extends EnumItem {
			Name: "Creepster";
			Value: 23;
			EnumType: typeof Font;
		}

		export const Creepster: Creepster;

		export interface DenkOne extends EnumItem {
			Name: "DenkOne";
			Value: 24;
			EnumType: typeof Font;
		}

		export const DenkOne: DenkOne;

		export interface Fondamento extends EnumItem {
			Name: "Fondamento";
			Value: 25;
			EnumType: typeof Font;
		}

		export const Fondamento: Fondamento;

		export interface FredokaOne extends EnumItem {
			Name: "FredokaOne";
			Value: 26;
			EnumType: typeof Font;
		}

		export const FredokaOne: FredokaOne;

		export interface GrenzeGotisch extends EnumItem {
			Name: "GrenzeGotisch";
			Value: 27;
			EnumType: typeof Font;
		}

		export const GrenzeGotisch: GrenzeGotisch;

		export interface IndieFlower extends EnumItem {
			Name: "IndieFlower";
			Value: 28;
			EnumType: typeof Font;
		}

		export const IndieFlower: IndieFlower;

		export interface JosefinSans extends EnumItem {
			Name: "JosefinSans";
			Value: 29;
			EnumType: typeof Font;
		}

		export const JosefinSans: JosefinSans;

		export interface Jura extends EnumItem {
			Name: "Jura";
			Value: 30;
			EnumType: typeof Font;
		}

		export const Jura: Jura;

		export interface Kalam extends EnumItem {
			Name: "Kalam";
			Value: 31;
			EnumType: typeof Font;
		}

		export const Kalam: Kalam;

		export interface LuckiestGuy extends EnumItem {
			Name: "LuckiestGuy";
			Value: 32;
			EnumType: typeof Font;
		}

		export const LuckiestGuy: LuckiestGuy;

		export interface Merriweather extends EnumItem {
			Name: "Merriweather";
			Value: 33;
			EnumType: typeof Font;
		}

		export const Merriweather: Merriweather;

		export interface Michroma extends EnumItem {
			Name: "Michroma";
			Value: 34;
			EnumType: typeof Font;
		}

		export const Michroma: Michroma;

		export interface Nunito extends EnumItem {
			Name: "Nunito";
			Value: 35;
			EnumType: typeof Font;
		}

		export const Nunito: Nunito;

		export interface Oswald extends EnumItem {
			Name: "Oswald";
			Value: 36;
			EnumType: typeof Font;
		}

		export const Oswald: Oswald;

		export interface PatrickHand extends EnumItem {
			Name: "PatrickHand";
			Value: 37;
			EnumType: typeof Font;
		}

		export const PatrickHand: PatrickHand;

		export interface PermanentMarker extends EnumItem {
			Name: "PermanentMarker";
			Value: 38;
			EnumType: typeof Font;
		}

		export const PermanentMarker: PermanentMarker;

		export interface Roboto extends EnumItem {
			Name: "Roboto";
			Value: 39;
			EnumType: typeof Font;
		}

		export const Roboto: Roboto;

		export interface RobotoCondensed extends EnumItem {
			Name: "RobotoCondensed";
			Value: 40;
			EnumType: typeof Font;
		}

		export const RobotoCondensed: RobotoCondensed;

		export interface RobotoMono extends EnumItem {
			Name: "RobotoMono";
			Value: 41;
			EnumType: typeof Font;
		}

		export const RobotoMono: RobotoMono;

		export interface Sarpanch extends EnumItem {
			Name: "Sarpanch";
			Value: 42;
			EnumType: typeof Font;
		}

		export const Sarpanch: Sarpanch;

		export interface SpecialElite extends EnumItem {
			Name: "SpecialElite";
			Value: 43;
			EnumType: typeof Font;
		}

		export const SpecialElite: SpecialElite;

		export interface TitilliumWeb extends EnumItem {
			Name: "TitilliumWeb";
			Value: 44;
			EnumType: typeof Font;
		}

		export const TitilliumWeb: TitilliumWeb;

		export interface Ubuntu extends EnumItem {
			Name: "Ubuntu";
			Value: 45;
			EnumType: typeof Font;
		}

		export const Ubuntu: Ubuntu;

		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 100;
			EnumType: typeof Font;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: Enum): Array<Font>
	}
	export type Font = Font.Legacy | Font.Arial | Font.ArialBold | Font.SourceSans | Font.SourceSansBold | Font.SourceSansSemibold | Font.SourceSansLight | Font.SourceSansItalic | Font.Bodoni | Font.Garamond | Font.Cartoon | Font.Code | Font.Highway | Font.SciFi | Font.Arcade | Font.Fantasy | Font.Antique | Font.Gotham | Font.GothamMedium | Font.GothamBold | Font.GothamBlack | Font.AmaticSC | Font.Bangers | Font.Creepster | Font.DenkOne | Font.Fondamento | Font.FredokaOne | Font.GrenzeGotisch | Font.IndieFlower | Font.JosefinSans | Font.Jura | Font.Kalam | Font.LuckiestGuy | Font.Merriweather | Font.Michroma | Font.Nunito | Font.Oswald | Font.PatrickHand | Font.PermanentMarker | Font.Roboto | Font.RobotoCondensed | Font.RobotoMono | Font.Sarpanch | Font.SpecialElite | Font.TitilliumWeb | Font.Ubuntu | Font.Unknown;
	export namespace FontSize {
		export interface Size8 extends EnumItem {
			Name: "Size8";
			Value: 0;
			EnumType: typeof FontSize;
		}

		export const Size8: Size8;

		export interface Size9 extends EnumItem {
			Name: "Size9";
			Value: 1;
			EnumType: typeof FontSize;
		}

		export const Size9: Size9;

		export interface Size10 extends EnumItem {
			Name: "Size10";
			Value: 2;
			EnumType: typeof FontSize;
		}

		export const Size10: Size10;

		export interface Size11 extends EnumItem {
			Name: "Size11";
			Value: 3;
			EnumType: typeof FontSize;
		}

		export const Size11: Size11;

		export interface Size12 extends EnumItem {
			Name: "Size12";
			Value: 4;
			EnumType: typeof FontSize;
		}

		export const Size12: Size12;

		export interface Size14 extends EnumItem {
			Name: "Size14";
			Value: 5;
			EnumType: typeof FontSize;
		}

		export const Size14: Size14;

		export interface Size18 extends EnumItem {
			Name: "Size18";
			Value: 6;
			EnumType: typeof FontSize;
		}

		export const Size18: Size18;

		export interface Size24 extends EnumItem {
			Name: "Size24";
			Value: 7;
			EnumType: typeof FontSize;
		}

		export const Size24: Size24;

		export interface Size36 extends EnumItem {
			Name: "Size36";
			Value: 8;
			EnumType: typeof FontSize;
		}

		export const Size36: Size36;

		export interface Size48 extends EnumItem {
			Name: "Size48";
			Value: 9;
			EnumType: typeof FontSize;
		}

		export const Size48: Size48;

		export interface Size28 extends EnumItem {
			Name: "Size28";
			Value: 10;
			EnumType: typeof FontSize;
		}

		export const Size28: Size28;

		export interface Size32 extends EnumItem {
			Name: "Size32";
			Value: 11;
			EnumType: typeof FontSize;
		}

		export const Size32: Size32;

		export interface Size42 extends EnumItem {
			Name: "Size42";
			Value: 12;
			EnumType: typeof FontSize;
		}

		export const Size42: Size42;

		export interface Size60 extends EnumItem {
			Name: "Size60";
			Value: 13;
			EnumType: typeof FontSize;
		}

		export const Size60: Size60;

		export interface Size96 extends EnumItem {
			Name: "Size96";
			Value: 14;
			EnumType: typeof FontSize;
		}

		export const Size96: Size96;

		export function GetEnumItems(this: Enum): Array<FontSize>
	}
	export type FontSize = FontSize.Size8 | FontSize.Size9 | FontSize.Size10 | FontSize.Size11 | FontSize.Size12 | FontSize.Size14 | FontSize.Size18 | FontSize.Size24 | FontSize.Size36 | FontSize.Size48 | FontSize.Size28 | FontSize.Size32 | FontSize.Size42 | FontSize.Size60 | FontSize.Size96;
	export namespace FontStyle {
		export interface Normal extends EnumItem {
			Name: "Normal";
			Value: 0;
			EnumType: typeof FontStyle;
		}

		export const Normal: Normal;

		export interface Italic extends EnumItem {
			Name: "Italic";
			Value: 1;
			EnumType: typeof FontStyle;
		}

		export const Italic: Italic;

		export function GetEnumItems(this: Enum): Array<FontStyle>
	}
	export type FontStyle = FontStyle.Normal | FontStyle.Italic;
	export namespace FontWeight {
		export interface Thin extends EnumItem {
			Name: "Thin";
			Value: 100;
			EnumType: typeof FontWeight;
		}

		export const Thin: Thin;

		export interface ExtraLight extends EnumItem {
			Name: "ExtraLight";
			Value: 200;
			EnumType: typeof FontWeight;
		}

		export const ExtraLight: ExtraLight;

		export interface Light extends EnumItem {
			Name: "Light";
			Value: 300;
			EnumType: typeof FontWeight;
		}

		export const Light: Light;

		export interface Regular extends EnumItem {
			Name: "Regular";
			Value: 400;
			EnumType: typeof FontWeight;
		}

		export const Regular: Regular;

		export interface Medium extends EnumItem {
			Name: "Medium";
			Value: 500;
			EnumType: typeof FontWeight;
		}

		export const Medium: Medium;

		export interface SemiBold extends EnumItem {
			Name: "SemiBold";
			Value: 600;
			EnumType: typeof FontWeight;
		}

		export const SemiBold: SemiBold;

		export interface Bold extends EnumItem {
			Name: "Bold";
			Value: 700;
			EnumType: typeof FontWeight;
		}

		export const Bold: Bold;

		export interface ExtraBold extends EnumItem {
			Name: "ExtraBold";
			Value: 800;
			EnumType: typeof FontWeight;
		}

		export const ExtraBold: ExtraBold;

		export interface Heavy extends EnumItem {
			Name: "Heavy";
			Value: 900;
			EnumType: typeof FontWeight;
		}

		export const Heavy: Heavy;

		export function GetEnumItems(this: Enum): Array<FontWeight>
	}
	export type FontWeight = FontWeight.Thin | FontWeight.ExtraLight | FontWeight.Light | FontWeight.Regular | FontWeight.Medium | FontWeight.SemiBold | FontWeight.Bold | FontWeight.ExtraBold | FontWeight.Heavy;
	export namespace FormFactor {
		export interface Symmetric extends EnumItem {
			Name: "Symmetric";
			Value: 0;
			EnumType: typeof FormFactor;
		}

		export const Symmetric: Symmetric;

		export interface Brick extends EnumItem {
			Name: "Brick";
			Value: 1;
			EnumType: typeof FormFactor;
		}

		export const Brick: Brick;
		/** @deprecated renamed to Brick */
		export const Block: Brick;

		export interface Plate extends EnumItem {
			Name: "Plate";
			Value: 2;
			EnumType: typeof FormFactor;
		}

		export const Plate: Plate;

		export interface Custom extends EnumItem {
			Name: "Custom";
			Value: 3;
			EnumType: typeof FormFactor;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: Enum): Array<FormFactor>
	}
	export type FormFactor = FormFactor.Symmetric | FormFactor.Brick | FormFactor.Plate | FormFactor.Custom;
	export namespace FrameStyle {
		export interface Custom extends EnumItem {
			Name: "Custom";
			Value: 0;
			EnumType: typeof FrameStyle;
		}

		export const Custom: Custom;

		export interface ChatBlue extends EnumItem {
			Name: "ChatBlue";
			Value: 1;
			EnumType: typeof FrameStyle;
		}

		export const ChatBlue: ChatBlue;

		export interface RobloxSquare extends EnumItem {
			Name: "RobloxSquare";
			Value: 2;
			EnumType: typeof FrameStyle;
		}

		export const RobloxSquare: RobloxSquare;

		export interface RobloxRound extends EnumItem {
			Name: "RobloxRound";
			Value: 3;
			EnumType: typeof FrameStyle;
		}

		export const RobloxRound: RobloxRound;

		export interface ChatGreen extends EnumItem {
			Name: "ChatGreen";
			Value: 4;
			EnumType: typeof FrameStyle;
		}

		export const ChatGreen: ChatGreen;

		export interface ChatRed extends EnumItem {
			Name: "ChatRed";
			Value: 5;
			EnumType: typeof FrameStyle;
		}

		export const ChatRed: ChatRed;

		export interface DropShadow extends EnumItem {
			Name: "DropShadow";
			Value: 6;
			EnumType: typeof FrameStyle;
		}

		export const DropShadow: DropShadow;

		export function GetEnumItems(this: Enum): Array<FrameStyle>
	}
	export type FrameStyle = FrameStyle.Custom | FrameStyle.ChatBlue | FrameStyle.RobloxSquare | FrameStyle.RobloxRound | FrameStyle.ChatGreen | FrameStyle.ChatRed | FrameStyle.DropShadow;
	export namespace FramerateManagerMode {
		export interface Automatic extends EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof FramerateManagerMode;
		}

		export const Automatic: Automatic;

		export interface On extends EnumItem {
			Name: "On";
			Value: 1;
			EnumType: typeof FramerateManagerMode;
		}

		export const On: On;

		export interface Off extends EnumItem {
			Name: "Off";
			Value: 2;
			EnumType: typeof FramerateManagerMode;
		}

		export const Off: Off;

		export function GetEnumItems(this: Enum): Array<FramerateManagerMode>
	}
	export type FramerateManagerMode = FramerateManagerMode.Automatic | FramerateManagerMode.On | FramerateManagerMode.Off;
	export namespace FriendRequestEvent {
		export interface Issue extends EnumItem {
			Name: "Issue";
			Value: 0;
			EnumType: typeof FriendRequestEvent;
		}

		export const Issue: Issue;

		export interface Revoke extends EnumItem {
			Name: "Revoke";
			Value: 1;
			EnumType: typeof FriendRequestEvent;
		}

		export const Revoke: Revoke;

		export interface Accept extends EnumItem {
			Name: "Accept";
			Value: 2;
			EnumType: typeof FriendRequestEvent;
		}

		export const Accept: Accept;

		export interface Deny extends EnumItem {
			Name: "Deny";
			Value: 3;
			EnumType: typeof FriendRequestEvent;
		}

		export const Deny: Deny;

		export function GetEnumItems(this: Enum): Array<FriendRequestEvent>
	}
	export type FriendRequestEvent = FriendRequestEvent.Issue | FriendRequestEvent.Revoke | FriendRequestEvent.Accept | FriendRequestEvent.Deny;
	export namespace FriendStatus {
		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof FriendStatus;
		}

		export const Unknown: Unknown;

		export interface NotFriend extends EnumItem {
			Name: "NotFriend";
			Value: 1;
			EnumType: typeof FriendStatus;
		}

		export const NotFriend: NotFriend;

		export interface Friend extends EnumItem {
			Name: "Friend";
			Value: 2;
			EnumType: typeof FriendStatus;
		}

		export const Friend: Friend;

		export interface FriendRequestSent extends EnumItem {
			Name: "FriendRequestSent";
			Value: 3;
			EnumType: typeof FriendStatus;
		}

		export const FriendRequestSent: FriendRequestSent;

		export interface FriendRequestReceived extends EnumItem {
			Name: "FriendRequestReceived";
			Value: 4;
			EnumType: typeof FriendStatus;
		}

		export const FriendRequestReceived: FriendRequestReceived;

		export function GetEnumItems(this: Enum): Array<FriendStatus>
	}
	export type FriendStatus = FriendStatus.Unknown | FriendStatus.NotFriend | FriendStatus.Friend | FriendStatus.FriendRequestSent | FriendStatus.FriendRequestReceived;
	export namespace FunctionalTestResult {
		export interface Passed extends EnumItem {
			Name: "Passed";
			Value: 0;
			EnumType: typeof FunctionalTestResult;
		}

		export const Passed: Passed;

		export interface Warning extends EnumItem {
			Name: "Warning";
			Value: 1;
			EnumType: typeof FunctionalTestResult;
		}

		export const Warning: Warning;

		export interface Error extends EnumItem {
			Name: "Error";
			Value: 2;
			EnumType: typeof FunctionalTestResult;
		}

		export const Error: Error;

		export function GetEnumItems(this: Enum): Array<FunctionalTestResult>
	}
	export type FunctionalTestResult = FunctionalTestResult.Passed | FunctionalTestResult.Warning | FunctionalTestResult.Error;
	export namespace GameAvatarType {
		export interface R6 extends EnumItem {
			Name: "R6";
			Value: 0;
			EnumType: typeof GameAvatarType;
		}

		export const R6: R6;

		export interface R15 extends EnumItem {
			Name: "R15";
			Value: 1;
			EnumType: typeof GameAvatarType;
		}

		export const R15: R15;

		export interface PlayerChoice extends EnumItem {
			Name: "PlayerChoice";
			Value: 2;
			EnumType: typeof GameAvatarType;
		}

		export const PlayerChoice: PlayerChoice;

		export function GetEnumItems(this: Enum): Array<GameAvatarType>
	}
	export type GameAvatarType = GameAvatarType.R6 | GameAvatarType.R15 | GameAvatarType.PlayerChoice;
	export namespace GearGenreSetting {
		export interface AllGenres extends EnumItem {
			Name: "AllGenres";
			Value: 0;
			EnumType: typeof GearGenreSetting;
		}

		export const AllGenres: AllGenres;

		export interface MatchingGenreOnly extends EnumItem {
			Name: "MatchingGenreOnly";
			Value: 1;
			EnumType: typeof GearGenreSetting;
		}

		export const MatchingGenreOnly: MatchingGenreOnly;

		export function GetEnumItems(this: Enum): Array<GearGenreSetting>
	}
	export type GearGenreSetting = GearGenreSetting.AllGenres | GearGenreSetting.MatchingGenreOnly;
	export namespace GearType {
		export interface MeleeWeapons extends EnumItem {
			Name: "MeleeWeapons";
			Value: 0;
			EnumType: typeof GearType;
		}

		export const MeleeWeapons: MeleeWeapons;

		export interface RangedWeapons extends EnumItem {
			Name: "RangedWeapons";
			Value: 1;
			EnumType: typeof GearType;
		}

		export const RangedWeapons: RangedWeapons;

		export interface Explosives extends EnumItem {
			Name: "Explosives";
			Value: 2;
			EnumType: typeof GearType;
		}

		export const Explosives: Explosives;

		export interface PowerUps extends EnumItem {
			Name: "PowerUps";
			Value: 3;
			EnumType: typeof GearType;
		}

		export const PowerUps: PowerUps;

		export interface NavigationEnhancers extends EnumItem {
			Name: "NavigationEnhancers";
			Value: 4;
			EnumType: typeof GearType;
		}

		export const NavigationEnhancers: NavigationEnhancers;

		export interface MusicalInstruments extends EnumItem {
			Name: "MusicalInstruments";
			Value: 5;
			EnumType: typeof GearType;
		}

		export const MusicalInstruments: MusicalInstruments;

		export interface SocialItems extends EnumItem {
			Name: "SocialItems";
			Value: 6;
			EnumType: typeof GearType;
		}

		export const SocialItems: SocialItems;

		export interface BuildingTools extends EnumItem {
			Name: "BuildingTools";
			Value: 7;
			EnumType: typeof GearType;
		}

		export const BuildingTools: BuildingTools;

		export interface Transport extends EnumItem {
			Name: "Transport";
			Value: 8;
			EnumType: typeof GearType;
		}

		export const Transport: Transport;

		export function GetEnumItems(this: Enum): Array<GearType>
	}
	export type GearType = GearType.MeleeWeapons | GearType.RangedWeapons | GearType.Explosives | GearType.PowerUps | GearType.NavigationEnhancers | GearType.MusicalInstruments | GearType.SocialItems | GearType.BuildingTools | GearType.Transport;
	export namespace Genre {
		export interface All extends EnumItem {
			Name: "All";
			Value: 0;
			EnumType: typeof Genre;
		}

		export const All: All;

		export interface TownAndCity extends EnumItem {
			Name: "TownAndCity";
			Value: 1;
			EnumType: typeof Genre;
		}

		export const TownAndCity: TownAndCity;

		export interface Fantasy extends EnumItem {
			Name: "Fantasy";
			Value: 2;
			EnumType: typeof Genre;
		}

		export const Fantasy: Fantasy;

		export interface SciFi extends EnumItem {
			Name: "SciFi";
			Value: 3;
			EnumType: typeof Genre;
		}

		export const SciFi: SciFi;

		export interface Ninja extends EnumItem {
			Name: "Ninja";
			Value: 4;
			EnumType: typeof Genre;
		}

		export const Ninja: Ninja;

		export interface Scary extends EnumItem {
			Name: "Scary";
			Value: 5;
			EnumType: typeof Genre;
		}

		export const Scary: Scary;

		export interface Pirate extends EnumItem {
			Name: "Pirate";
			Value: 6;
			EnumType: typeof Genre;
		}

		export const Pirate: Pirate;

		export interface Adventure extends EnumItem {
			Name: "Adventure";
			Value: 7;
			EnumType: typeof Genre;
		}

		export const Adventure: Adventure;

		export interface Sports extends EnumItem {
			Name: "Sports";
			Value: 8;
			EnumType: typeof Genre;
		}

		export const Sports: Sports;

		export interface Funny extends EnumItem {
			Name: "Funny";
			Value: 9;
			EnumType: typeof Genre;
		}

		export const Funny: Funny;

		export interface WildWest extends EnumItem {
			Name: "WildWest";
			Value: 10;
			EnumType: typeof Genre;
		}

		export const WildWest: WildWest;

		export interface War extends EnumItem {
			Name: "War";
			Value: 11;
			EnumType: typeof Genre;
		}

		export const War: War;

		export interface SkatePark extends EnumItem {
			Name: "SkatePark";
			Value: 12;
			EnumType: typeof Genre;
		}

		export const SkatePark: SkatePark;

		export interface Tutorial extends EnumItem {
			Name: "Tutorial";
			Value: 13;
			EnumType: typeof Genre;
		}

		export const Tutorial: Tutorial;

		export function GetEnumItems(this: Enum): Array<Genre>
	}
	export type Genre = Genre.All | Genre.TownAndCity | Genre.Fantasy | Genre.SciFi | Genre.Ninja | Genre.Scary | Genre.Pirate | Genre.Adventure | Genre.Sports | Genre.Funny | Genre.WildWest | Genre.War | Genre.SkatePark | Genre.Tutorial;
	export namespace GraphicsMode {
		export interface Automatic extends EnumItem {
			Name: "Automatic";
			Value: 1;
			EnumType: typeof GraphicsMode;
		}

		export const Automatic: Automatic;

		export interface Direct3D11 extends EnumItem {
			Name: "Direct3D11";
			Value: 2;
			EnumType: typeof GraphicsMode;
		}

		export const Direct3D11: Direct3D11;

		export interface OpenGL extends EnumItem {
			Name: "OpenGL";
			Value: 4;
			EnumType: typeof GraphicsMode;
		}

		export const OpenGL: OpenGL;

		export interface Metal extends EnumItem {
			Name: "Metal";
			Value: 5;
			EnumType: typeof GraphicsMode;
		}

		export const Metal: Metal;

		export interface Vulkan extends EnumItem {
			Name: "Vulkan";
			Value: 6;
			EnumType: typeof GraphicsMode;
		}

		export const Vulkan: Vulkan;

		export interface NoGraphics extends EnumItem {
			Name: "NoGraphics";
			Value: 7;
			EnumType: typeof GraphicsMode;
		}

		export const NoGraphics: NoGraphics;

		export function GetEnumItems(this: Enum): Array<GraphicsMode>
	}
	export type GraphicsMode = GraphicsMode.Automatic | GraphicsMode.Direct3D11 | GraphicsMode.OpenGL | GraphicsMode.Metal | GraphicsMode.Vulkan | GraphicsMode.NoGraphics;
	export namespace GuiType {
		export interface Core extends EnumItem {
			Name: "Core";
			Value: 0;
			EnumType: typeof GuiType;
		}

		export const Core: Core;

		export interface Custom extends EnumItem {
			Name: "Custom";
			Value: 1;
			EnumType: typeof GuiType;
		}

		export const Custom: Custom;

		export interface CustomBillboards extends EnumItem {
			Name: "CustomBillboards";
			Value: 3;
			EnumType: typeof GuiType;
		}

		export const CustomBillboards: CustomBillboards;

		export interface PlayerNameplates extends EnumItem {
			Name: "PlayerNameplates";
			Value: 2;
			EnumType: typeof GuiType;
		}

		export const PlayerNameplates: PlayerNameplates;

		export function GetEnumItems(this: Enum): Array<GuiType>
	}
	export type GuiType = GuiType.Core | GuiType.Custom | GuiType.CustomBillboards | GuiType.PlayerNameplates;
	export namespace HandlesStyle {
		export interface Resize extends EnumItem {
			Name: "Resize";
			Value: 0;
			EnumType: typeof HandlesStyle;
		}

		export const Resize: Resize;

		export interface Movement extends EnumItem {
			Name: "Movement";
			Value: 1;
			EnumType: typeof HandlesStyle;
		}

		export const Movement: Movement;

		export function GetEnumItems(this: Enum): Array<HandlesStyle>
	}
	export type HandlesStyle = HandlesStyle.Resize | HandlesStyle.Movement;
	export namespace HighlightDepthMode {
		export interface AlwaysOnTop extends EnumItem {
			Name: "AlwaysOnTop";
			Value: 0;
			EnumType: typeof HighlightDepthMode;
		}

		export const AlwaysOnTop: AlwaysOnTop;

		export interface Occluded extends EnumItem {
			Name: "Occluded";
			Value: 1;
			EnumType: typeof HighlightDepthMode;
		}

		export const Occluded: Occluded;

		export function GetEnumItems(this: Enum): Array<HighlightDepthMode>
	}
	export type HighlightDepthMode = HighlightDepthMode.AlwaysOnTop | HighlightDepthMode.Occluded;
	export namespace HorizontalAlignment {
		export interface Center extends EnumItem {
			Name: "Center";
			Value: 0;
			EnumType: typeof HorizontalAlignment;
		}

		export const Center: Center;

		export interface Left extends EnumItem {
			Name: "Left";
			Value: 1;
			EnumType: typeof HorizontalAlignment;
		}

		export const Left: Left;

		export interface Right extends EnumItem {
			Name: "Right";
			Value: 2;
			EnumType: typeof HorizontalAlignment;
		}

		export const Right: Right;

		export function GetEnumItems(this: Enum): Array<HorizontalAlignment>
	}
	export type HorizontalAlignment = HorizontalAlignment.Center | HorizontalAlignment.Left | HorizontalAlignment.Right;
	export namespace HoverAnimateSpeed {
		export interface VerySlow extends EnumItem {
			Name: "VerySlow";
			Value: 0;
			EnumType: typeof HoverAnimateSpeed;
		}

		export const VerySlow: VerySlow;

		export interface Slow extends EnumItem {
			Name: "Slow";
			Value: 1;
			EnumType: typeof HoverAnimateSpeed;
		}

		export const Slow: Slow;

		export interface Medium extends EnumItem {
			Name: "Medium";
			Value: 2;
			EnumType: typeof HoverAnimateSpeed;
		}

		export const Medium: Medium;

		export interface Fast extends EnumItem {
			Name: "Fast";
			Value: 3;
			EnumType: typeof HoverAnimateSpeed;
		}

		export const Fast: Fast;

		export interface VeryFast extends EnumItem {
			Name: "VeryFast";
			Value: 4;
			EnumType: typeof HoverAnimateSpeed;
		}

		export const VeryFast: VeryFast;

		export function GetEnumItems(this: Enum): Array<HoverAnimateSpeed>
	}
	export type HoverAnimateSpeed = HoverAnimateSpeed.VerySlow | HoverAnimateSpeed.Slow | HoverAnimateSpeed.Medium | HoverAnimateSpeed.Fast | HoverAnimateSpeed.VeryFast;
	export namespace HttpCachePolicy {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof HttpCachePolicy;
		}

		export const None: None;

		export interface Full extends EnumItem {
			Name: "Full";
			Value: 1;
			EnumType: typeof HttpCachePolicy;
		}

		export const Full: Full;

		export interface DataOnly extends EnumItem {
			Name: "DataOnly";
			Value: 2;
			EnumType: typeof HttpCachePolicy;
		}

		export const DataOnly: DataOnly;

		export interface Default extends EnumItem {
			Name: "Default";
			Value: 3;
			EnumType: typeof HttpCachePolicy;
		}

		export const Default: Default;

		export interface InternalRedirectRefresh extends EnumItem {
			Name: "InternalRedirectRefresh";
			Value: 4;
			EnumType: typeof HttpCachePolicy;
		}

		export const InternalRedirectRefresh: InternalRedirectRefresh;

		export function GetEnumItems(this: Enum): Array<HttpCachePolicy>
	}
	export type HttpCachePolicy = HttpCachePolicy.None | HttpCachePolicy.Full | HttpCachePolicy.DataOnly | HttpCachePolicy.Default | HttpCachePolicy.InternalRedirectRefresh;
	export namespace HttpContentType {
		export interface ApplicationJson extends EnumItem {
			Name: "ApplicationJson";
			Value: 0;
			EnumType: typeof HttpContentType;
		}

		export const ApplicationJson: ApplicationJson;

		export interface ApplicationXml extends EnumItem {
			Name: "ApplicationXml";
			Value: 1;
			EnumType: typeof HttpContentType;
		}

		export const ApplicationXml: ApplicationXml;

		export interface ApplicationUrlEncoded extends EnumItem {
			Name: "ApplicationUrlEncoded";
			Value: 2;
			EnumType: typeof HttpContentType;
		}

		export const ApplicationUrlEncoded: ApplicationUrlEncoded;

		export interface TextPlain extends EnumItem {
			Name: "TextPlain";
			Value: 3;
			EnumType: typeof HttpContentType;
		}

		export const TextPlain: TextPlain;

		export interface TextXml extends EnumItem {
			Name: "TextXml";
			Value: 4;
			EnumType: typeof HttpContentType;
		}

		export const TextXml: TextXml;

		export function GetEnumItems(this: Enum): Array<HttpContentType>
	}
	export type HttpContentType = HttpContentType.ApplicationJson | HttpContentType.ApplicationXml | HttpContentType.ApplicationUrlEncoded | HttpContentType.TextPlain | HttpContentType.TextXml;
	export namespace HttpError {
		export interface OK extends EnumItem {
			Name: "OK";
			Value: 0;
			EnumType: typeof HttpError;
		}

		export const OK: OK;

		export interface InvalidUrl extends EnumItem {
			Name: "InvalidUrl";
			Value: 1;
			EnumType: typeof HttpError;
		}

		export const InvalidUrl: InvalidUrl;

		export interface DnsResolve extends EnumItem {
			Name: "DnsResolve";
			Value: 2;
			EnumType: typeof HttpError;
		}

		export const DnsResolve: DnsResolve;

		export interface ConnectFail extends EnumItem {
			Name: "ConnectFail";
			Value: 3;
			EnumType: typeof HttpError;
		}

		export const ConnectFail: ConnectFail;

		export interface OutOfMemory extends EnumItem {
			Name: "OutOfMemory";
			Value: 4;
			EnumType: typeof HttpError;
		}

		export const OutOfMemory: OutOfMemory;

		export interface TimedOut extends EnumItem {
			Name: "TimedOut";
			Value: 5;
			EnumType: typeof HttpError;
		}

		export const TimedOut: TimedOut;

		export interface TooManyRedirects extends EnumItem {
			Name: "TooManyRedirects";
			Value: 6;
			EnumType: typeof HttpError;
		}

		export const TooManyRedirects: TooManyRedirects;

		export interface InvalidRedirect extends EnumItem {
			Name: "InvalidRedirect";
			Value: 7;
			EnumType: typeof HttpError;
		}

		export const InvalidRedirect: InvalidRedirect;

		export interface NetFail extends EnumItem {
			Name: "NetFail";
			Value: 8;
			EnumType: typeof HttpError;
		}

		export const NetFail: NetFail;

		export interface Aborted extends EnumItem {
			Name: "Aborted";
			Value: 9;
			EnumType: typeof HttpError;
		}

		export const Aborted: Aborted;

		export interface SslConnectFail extends EnumItem {
			Name: "SslConnectFail";
			Value: 10;
			EnumType: typeof HttpError;
		}

		export const SslConnectFail: SslConnectFail;

		export interface SslVerificationFail extends EnumItem {
			Name: "SslVerificationFail";
			Value: 11;
			EnumType: typeof HttpError;
		}

		export const SslVerificationFail: SslVerificationFail;

		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 12;
			EnumType: typeof HttpError;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: Enum): Array<HttpError>
	}
	export type HttpError = HttpError.OK | HttpError.InvalidUrl | HttpError.DnsResolve | HttpError.ConnectFail | HttpError.OutOfMemory | HttpError.TimedOut | HttpError.TooManyRedirects | HttpError.InvalidRedirect | HttpError.NetFail | HttpError.Aborted | HttpError.SslConnectFail | HttpError.SslVerificationFail | HttpError.Unknown;
	export namespace HttpRequestType {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof HttpRequestType;
		}

		export const Default: Default;

		export interface MarketplaceService extends EnumItem {
			Name: "MarketplaceService";
			Value: 2;
			EnumType: typeof HttpRequestType;
		}

		export const MarketplaceService: MarketplaceService;

		export interface Players extends EnumItem {
			Name: "Players";
			Value: 7;
			EnumType: typeof HttpRequestType;
		}

		export const Players: Players;

		export interface Chat extends EnumItem {
			Name: "Chat";
			Value: 15;
			EnumType: typeof HttpRequestType;
		}

		export const Chat: Chat;

		export interface Avatar extends EnumItem {
			Name: "Avatar";
			Value: 16;
			EnumType: typeof HttpRequestType;
		}

		export const Avatar: Avatar;

		export interface Analytics extends EnumItem {
			Name: "Analytics";
			Value: 23;
			EnumType: typeof HttpRequestType;
		}

		export const Analytics: Analytics;

		export interface Localization extends EnumItem {
			Name: "Localization";
			Value: 25;
			EnumType: typeof HttpRequestType;
		}

		export const Localization: Localization;

		export function GetEnumItems(this: Enum): Array<HttpRequestType>
	}
	export type HttpRequestType = HttpRequestType.Default | HttpRequestType.MarketplaceService | HttpRequestType.Players | HttpRequestType.Chat | HttpRequestType.Avatar | HttpRequestType.Analytics | HttpRequestType.Localization;
	export namespace HumanoidCollisionType {
		export interface OuterBox extends EnumItem {
			Name: "OuterBox";
			Value: 0;
			EnumType: typeof HumanoidCollisionType;
		}

		export const OuterBox: OuterBox;

		export interface InnerBox extends EnumItem {
			Name: "InnerBox";
			Value: 1;
			EnumType: typeof HumanoidCollisionType;
		}

		export const InnerBox: InnerBox;

		export function GetEnumItems(this: Enum): Array<HumanoidCollisionType>
	}
	export type HumanoidCollisionType = HumanoidCollisionType.OuterBox | HumanoidCollisionType.InnerBox;
	export namespace HumanoidDisplayDistanceType {
		export interface Viewer extends EnumItem {
			Name: "Viewer";
			Value: 0;
			EnumType: typeof HumanoidDisplayDistanceType;
		}

		export const Viewer: Viewer;

		export interface Subject extends EnumItem {
			Name: "Subject";
			Value: 1;
			EnumType: typeof HumanoidDisplayDistanceType;
		}

		export const Subject: Subject;

		export interface None extends EnumItem {
			Name: "None";
			Value: 2;
			EnumType: typeof HumanoidDisplayDistanceType;
		}

		export const None: None;

		export function GetEnumItems(this: Enum): Array<HumanoidDisplayDistanceType>
	}
	export type HumanoidDisplayDistanceType = HumanoidDisplayDistanceType.Viewer | HumanoidDisplayDistanceType.Subject | HumanoidDisplayDistanceType.None;
	export namespace HumanoidHealthDisplayType {
		export interface DisplayWhenDamaged extends EnumItem {
			Name: "DisplayWhenDamaged";
			Value: 0;
			EnumType: typeof HumanoidHealthDisplayType;
		}

		export const DisplayWhenDamaged: DisplayWhenDamaged;

		export interface AlwaysOn extends EnumItem {
			Name: "AlwaysOn";
			Value: 1;
			EnumType: typeof HumanoidHealthDisplayType;
		}

		export const AlwaysOn: AlwaysOn;

		export interface AlwaysOff extends EnumItem {
			Name: "AlwaysOff";
			Value: 2;
			EnumType: typeof HumanoidHealthDisplayType;
		}

		export const AlwaysOff: AlwaysOff;

		export function GetEnumItems(this: Enum): Array<HumanoidHealthDisplayType>
	}
	export type HumanoidHealthDisplayType = HumanoidHealthDisplayType.DisplayWhenDamaged | HumanoidHealthDisplayType.AlwaysOn | HumanoidHealthDisplayType.AlwaysOff;
	export namespace HumanoidOnlySetCollisionsOnStateChange {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof HumanoidOnlySetCollisionsOnStateChange;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof HumanoidOnlySetCollisionsOnStateChange;
		}

		export const Disabled: Disabled;

		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof HumanoidOnlySetCollisionsOnStateChange;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: Enum): Array<HumanoidOnlySetCollisionsOnStateChange>
	}
	export type HumanoidOnlySetCollisionsOnStateChange = HumanoidOnlySetCollisionsOnStateChange.Default | HumanoidOnlySetCollisionsOnStateChange.Disabled | HumanoidOnlySetCollisionsOnStateChange.Enabled;
	export namespace HumanoidRigType {
		export interface R6 extends EnumItem {
			Name: "R6";
			Value: 0;
			EnumType: typeof HumanoidRigType;
		}

		export const R6: R6;

		export interface R15 extends EnumItem {
			Name: "R15";
			Value: 1;
			EnumType: typeof HumanoidRigType;
		}

		export const R15: R15;

		export function GetEnumItems(this: Enum): Array<HumanoidRigType>
	}
	export type HumanoidRigType = HumanoidRigType.R6 | HumanoidRigType.R15;
	export namespace HumanoidStateType {
		export interface FallingDown extends EnumItem {
			Name: "FallingDown";
			Value: 0;
			EnumType: typeof HumanoidStateType;
		}

		export const FallingDown: FallingDown;

		export interface Running extends EnumItem {
			Name: "Running";
			Value: 8;
			EnumType: typeof HumanoidStateType;
		}

		export const Running: Running;

		export interface RunningNoPhysics extends EnumItem {
			Name: "RunningNoPhysics";
			Value: 10;
			EnumType: typeof HumanoidStateType;
		}

		export const RunningNoPhysics: RunningNoPhysics;

		export interface Climbing extends EnumItem {
			Name: "Climbing";
			Value: 12;
			EnumType: typeof HumanoidStateType;
		}

		export const Climbing: Climbing;

		export interface StrafingNoPhysics extends EnumItem {
			Name: "StrafingNoPhysics";
			Value: 11;
			EnumType: typeof HumanoidStateType;
		}

		export const StrafingNoPhysics: StrafingNoPhysics;

		export interface Ragdoll extends EnumItem {
			Name: "Ragdoll";
			Value: 1;
			EnumType: typeof HumanoidStateType;
		}

		export const Ragdoll: Ragdoll;

		export interface GettingUp extends EnumItem {
			Name: "GettingUp";
			Value: 2;
			EnumType: typeof HumanoidStateType;
		}

		export const GettingUp: GettingUp;

		export interface Jumping extends EnumItem {
			Name: "Jumping";
			Value: 3;
			EnumType: typeof HumanoidStateType;
		}

		export const Jumping: Jumping;

		export interface Landed extends EnumItem {
			Name: "Landed";
			Value: 7;
			EnumType: typeof HumanoidStateType;
		}

		export const Landed: Landed;

		export interface Flying extends EnumItem {
			Name: "Flying";
			Value: 6;
			EnumType: typeof HumanoidStateType;
		}

		export const Flying: Flying;

		export interface Freefall extends EnumItem {
			Name: "Freefall";
			Value: 5;
			EnumType: typeof HumanoidStateType;
		}

		export const Freefall: Freefall;

		export interface Seated extends EnumItem {
			Name: "Seated";
			Value: 13;
			EnumType: typeof HumanoidStateType;
		}

		export const Seated: Seated;

		export interface PlatformStanding extends EnumItem {
			Name: "PlatformStanding";
			Value: 14;
			EnumType: typeof HumanoidStateType;
		}

		export const PlatformStanding: PlatformStanding;

		export interface Dead extends EnumItem {
			Name: "Dead";
			Value: 15;
			EnumType: typeof HumanoidStateType;
		}

		export const Dead: Dead;

		export interface Swimming extends EnumItem {
			Name: "Swimming";
			Value: 4;
			EnumType: typeof HumanoidStateType;
		}

		export const Swimming: Swimming;

		export interface Physics extends EnumItem {
			Name: "Physics";
			Value: 16;
			EnumType: typeof HumanoidStateType;
		}

		export const Physics: Physics;

		export interface None extends EnumItem {
			Name: "None";
			Value: 18;
			EnumType: typeof HumanoidStateType;
		}

		export const None: None;

		export function GetEnumItems(this: Enum): Array<HumanoidStateType>
	}
	export type HumanoidStateType = HumanoidStateType.FallingDown | HumanoidStateType.Running | HumanoidStateType.RunningNoPhysics | HumanoidStateType.Climbing | HumanoidStateType.StrafingNoPhysics | HumanoidStateType.Ragdoll | HumanoidStateType.GettingUp | HumanoidStateType.Jumping | HumanoidStateType.Landed | HumanoidStateType.Flying | HumanoidStateType.Freefall | HumanoidStateType.Seated | HumanoidStateType.PlatformStanding | HumanoidStateType.Dead | HumanoidStateType.Swimming | HumanoidStateType.Physics | HumanoidStateType.None;
	export namespace IKCollisionsMode {
		export interface NoCollisions extends EnumItem {
			Name: "NoCollisions";
			Value: 0;
			EnumType: typeof IKCollisionsMode;
		}

		export const NoCollisions: NoCollisions;

		export interface OtherMechanismsAnchored extends EnumItem {
			Name: "OtherMechanismsAnchored";
			Value: 1;
			EnumType: typeof IKCollisionsMode;
		}

		export const OtherMechanismsAnchored: OtherMechanismsAnchored;

		export interface IncludeContactedMechanisms extends EnumItem {
			Name: "IncludeContactedMechanisms";
			Value: 2;
			EnumType: typeof IKCollisionsMode;
		}

		export const IncludeContactedMechanisms: IncludeContactedMechanisms;

		export function GetEnumItems(this: Enum): Array<IKCollisionsMode>
	}
	export type IKCollisionsMode = IKCollisionsMode.NoCollisions | IKCollisionsMode.OtherMechanismsAnchored | IKCollisionsMode.IncludeContactedMechanisms;
	export namespace IKControlType {
		export interface Null extends EnumItem {
			Name: "Null";
			Value: 0;
			EnumType: typeof IKControlType;
		}

		export const Null: Null;

		export interface Position extends EnumItem {
			Name: "Position";
			Value: 1;
			EnumType: typeof IKControlType;
		}

		export const Position: Position;

		export interface Rotation extends EnumItem {
			Name: "Rotation";
			Value: 2;
			EnumType: typeof IKControlType;
		}

		export const Rotation: Rotation;

		export interface Transform extends EnumItem {
			Name: "Transform";
			Value: 3;
			EnumType: typeof IKControlType;
		}

		export const Transform: Transform;

		export interface LookAt extends EnumItem {
			Name: "LookAt";
			Value: 4;
			EnumType: typeof IKControlType;
		}

		export const LookAt: LookAt;

		export interface Length extends EnumItem {
			Name: "Length";
			Value: 5;
			EnumType: typeof IKControlType;
		}

		export const Length: Length;

		export function GetEnumItems(this: Enum): Array<IKControlType>
	}
	export type IKControlType = IKControlType.Null | IKControlType.Position | IKControlType.Rotation | IKControlType.Transform | IKControlType.LookAt | IKControlType.Length;
	export namespace IXPLoadingStatus {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof IXPLoadingStatus;
		}

		export const None: None;

		export interface Pending extends EnumItem {
			Name: "Pending";
			Value: 1;
			EnumType: typeof IXPLoadingStatus;
		}

		export const Pending: Pending;

		export interface Initialized extends EnumItem {
			Name: "Initialized";
			Value: 2;
			EnumType: typeof IXPLoadingStatus;
		}

		export const Initialized: Initialized;

		export interface ErrorTimedOut extends EnumItem {
			Name: "ErrorTimedOut";
			Value: 6;
			EnumType: typeof IXPLoadingStatus;
		}

		export const ErrorTimedOut: ErrorTimedOut;

		export interface ErrorConnection extends EnumItem {
			Name: "ErrorConnection";
			Value: 4;
			EnumType: typeof IXPLoadingStatus;
		}

		export const ErrorConnection: ErrorConnection;

		export interface ErrorJsonParse extends EnumItem {
			Name: "ErrorJsonParse";
			Value: 5;
			EnumType: typeof IXPLoadingStatus;
		}

		export const ErrorJsonParse: ErrorJsonParse;

		export interface ErrorInvalidUser extends EnumItem {
			Name: "ErrorInvalidUser";
			Value: 3;
			EnumType: typeof IXPLoadingStatus;
		}

		export const ErrorInvalidUser: ErrorInvalidUser;

		export function GetEnumItems(this: Enum): Array<IXPLoadingStatus>
	}
	export type IXPLoadingStatus = IXPLoadingStatus.None | IXPLoadingStatus.Pending | IXPLoadingStatus.Initialized | IXPLoadingStatus.ErrorTimedOut | IXPLoadingStatus.ErrorConnection | IXPLoadingStatus.ErrorJsonParse | IXPLoadingStatus.ErrorInvalidUser;
	export namespace InOut {
		export interface Edge extends EnumItem {
			Name: "Edge";
			Value: 0;
			EnumType: typeof InOut;
		}

		export const Edge: Edge;

		export interface Inset extends EnumItem {
			Name: "Inset";
			Value: 1;
			EnumType: typeof InOut;
		}

		export const Inset: Inset;

		export interface Center extends EnumItem {
			Name: "Center";
			Value: 2;
			EnumType: typeof InOut;
		}

		export const Center: Center;

		export function GetEnumItems(this: Enum): Array<InOut>
	}
	export type InOut = InOut.Edge | InOut.Inset | InOut.Center;
	export namespace InfoType {
		export interface Asset extends EnumItem {
			Name: "Asset";
			Value: 0;
			EnumType: typeof InfoType;
		}

		export const Asset: Asset;

		export interface Product extends EnumItem {
			Name: "Product";
			Value: 1;
			EnumType: typeof InfoType;
		}

		export const Product: Product;

		export interface GamePass extends EnumItem {
			Name: "GamePass";
			Value: 2;
			EnumType: typeof InfoType;
		}

		export const GamePass: GamePass;

		export interface Subscription extends EnumItem {
			Name: "Subscription";
			Value: 3;
			EnumType: typeof InfoType;
		}

		export const Subscription: Subscription;

		export interface Bundle extends EnumItem {
			Name: "Bundle";
			Value: 4;
			EnumType: typeof InfoType;
		}

		export const Bundle: Bundle;

		export function GetEnumItems(this: Enum): Array<InfoType>
	}
	export type InfoType = InfoType.Asset | InfoType.Product | InfoType.GamePass | InfoType.Subscription | InfoType.Bundle;
	export namespace InitialDockState {
		export interface Top extends EnumItem {
			Name: "Top";
			Value: 0;
			EnumType: typeof InitialDockState;
		}

		export const Top: Top;

		export interface Bottom extends EnumItem {
			Name: "Bottom";
			Value: 1;
			EnumType: typeof InitialDockState;
		}

		export const Bottom: Bottom;

		export interface Left extends EnumItem {
			Name: "Left";
			Value: 2;
			EnumType: typeof InitialDockState;
		}

		export const Left: Left;

		export interface Right extends EnumItem {
			Name: "Right";
			Value: 3;
			EnumType: typeof InitialDockState;
		}

		export const Right: Right;

		export interface Float extends EnumItem {
			Name: "Float";
			Value: 4;
			EnumType: typeof InitialDockState;
		}

		export const Float: Float;

		export function GetEnumItems(this: Enum): Array<InitialDockState>
	}
	export type InitialDockState = InitialDockState.Top | InitialDockState.Bottom | InitialDockState.Left | InitialDockState.Right | InitialDockState.Float;
	export namespace InputType {
		export interface NoInput extends EnumItem {
			Name: "NoInput";
			Value: 0;
			EnumType: typeof InputType;
		}

		export const NoInput: NoInput;
		/** @deprecated renamed to NoInput */
		export const Action1: NoInput;
		/** @deprecated renamed to NoInput */
		export const Action2: NoInput;
		/** @deprecated renamed to NoInput */
		export const Action3: NoInput;
		/** @deprecated renamed to NoInput */
		export const Action4: NoInput;
		/** @deprecated renamed to NoInput */
		export const Action5: NoInput;
		/** @deprecated renamed to NoInput */
		export const LeftTread: NoInput;
		/** @deprecated renamed to NoInput */
		export const RightTread: NoInput;
		/** @deprecated renamed to NoInput */
		export const Steer: NoInput;
		/** @deprecated renamed to NoInput */
		export const Throtle: NoInput;
		/** @deprecated renamed to NoInput */
		export const Throttle: NoInput;
		/** @deprecated renamed to NoInput */
		export const UpDown: NoInput;

		export interface Constant extends EnumItem {
			Name: "Constant";
			Value: 12;
			EnumType: typeof InputType;
		}

		export const Constant: Constant;

		export interface Sin extends EnumItem {
			Name: "Sin";
			Value: 13;
			EnumType: typeof InputType;
		}

		export const Sin: Sin;

		export function GetEnumItems(this: Enum): Array<InputType>
	}
	export type InputType = InputType.NoInput | InputType.Constant | InputType.Sin;
	export namespace InterpolationThrottlingMode {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof InterpolationThrottlingMode;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof InterpolationThrottlingMode;
		}

		export const Disabled: Disabled;

		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof InterpolationThrottlingMode;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: Enum): Array<InterpolationThrottlingMode>
	}
	export type InterpolationThrottlingMode = InterpolationThrottlingMode.Default | InterpolationThrottlingMode.Disabled | InterpolationThrottlingMode.Enabled;
	export namespace JointCreationMode {
		export interface All extends EnumItem {
			Name: "All";
			Value: 0;
			EnumType: typeof JointCreationMode;
		}

		export const All: All;

		export interface Surface extends EnumItem {
			Name: "Surface";
			Value: 1;
			EnumType: typeof JointCreationMode;
		}

		export const Surface: Surface;

		export interface None extends EnumItem {
			Name: "None";
			Value: 2;
			EnumType: typeof JointCreationMode;
		}

		export const None: None;

		export function GetEnumItems(this: Enum): Array<JointCreationMode>
	}
	export type JointCreationMode = JointCreationMode.All | JointCreationMode.Surface | JointCreationMode.None;
	export namespace KeyCode {
		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof KeyCode;
		}

		export const Unknown: Unknown;

		export interface Backspace extends EnumItem {
			Name: "Backspace";
			Value: 8;
			EnumType: typeof KeyCode;
		}

		export const Backspace: Backspace;

		export interface Tab extends EnumItem {
			Name: "Tab";
			Value: 9;
			EnumType: typeof KeyCode;
		}

		export const Tab: Tab;

		export interface Clear extends EnumItem {
			Name: "Clear";
			Value: 12;
			EnumType: typeof KeyCode;
		}

		export const Clear: Clear;

		export interface Return extends EnumItem {
			Name: "Return";
			Value: 13;
			EnumType: typeof KeyCode;
		}

		export const Return: Return;

		export interface Pause extends EnumItem {
			Name: "Pause";
			Value: 19;
			EnumType: typeof KeyCode;
		}

		export const Pause: Pause;

		export interface Escape extends EnumItem {
			Name: "Escape";
			Value: 27;
			EnumType: typeof KeyCode;
		}

		export const Escape: Escape;

		export interface Space extends EnumItem {
			Name: "Space";
			Value: 32;
			EnumType: typeof KeyCode;
		}

		export const Space: Space;

		export interface QuotedDouble extends EnumItem {
			Name: "QuotedDouble";
			Value: 34;
			EnumType: typeof KeyCode;
		}

		export const QuotedDouble: QuotedDouble;

		export interface Hash extends EnumItem {
			Name: "Hash";
			Value: 35;
			EnumType: typeof KeyCode;
		}

		export const Hash: Hash;

		export interface Dollar extends EnumItem {
			Name: "Dollar";
			Value: 36;
			EnumType: typeof KeyCode;
		}

		export const Dollar: Dollar;

		export interface Percent extends EnumItem {
			Name: "Percent";
			Value: 37;
			EnumType: typeof KeyCode;
		}

		export const Percent: Percent;

		export interface Ampersand extends EnumItem {
			Name: "Ampersand";
			Value: 38;
			EnumType: typeof KeyCode;
		}

		export const Ampersand: Ampersand;

		export interface Quote extends EnumItem {
			Name: "Quote";
			Value: 39;
			EnumType: typeof KeyCode;
		}

		export const Quote: Quote;

		export interface LeftParenthesis extends EnumItem {
			Name: "LeftParenthesis";
			Value: 40;
			EnumType: typeof KeyCode;
		}

		export const LeftParenthesis: LeftParenthesis;

		export interface RightParenthesis extends EnumItem {
			Name: "RightParenthesis";
			Value: 41;
			EnumType: typeof KeyCode;
		}

		export const RightParenthesis: RightParenthesis;

		export interface Asterisk extends EnumItem {
			Name: "Asterisk";
			Value: 42;
			EnumType: typeof KeyCode;
		}

		export const Asterisk: Asterisk;

		export interface Plus extends EnumItem {
			Name: "Plus";
			Value: 43;
			EnumType: typeof KeyCode;
		}

		export const Plus: Plus;

		export interface Comma extends EnumItem {
			Name: "Comma";
			Value: 44;
			EnumType: typeof KeyCode;
		}

		export const Comma: Comma;

		export interface Minus extends EnumItem {
			Name: "Minus";
			Value: 45;
			EnumType: typeof KeyCode;
		}

		export const Minus: Minus;

		export interface Period extends EnumItem {
			Name: "Period";
			Value: 46;
			EnumType: typeof KeyCode;
		}

		export const Period: Period;

		export interface Slash extends EnumItem {
			Name: "Slash";
			Value: 47;
			EnumType: typeof KeyCode;
		}

		export const Slash: Slash;

		export interface Zero extends EnumItem {
			Name: "Zero";
			Value: 48;
			EnumType: typeof KeyCode;
		}

		export const Zero: Zero;

		export interface One extends EnumItem {
			Name: "One";
			Value: 49;
			EnumType: typeof KeyCode;
		}

		export const One: One;

		export interface Two extends EnumItem {
			Name: "Two";
			Value: 50;
			EnumType: typeof KeyCode;
		}

		export const Two: Two;

		export interface Three extends EnumItem {
			Name: "Three";
			Value: 51;
			EnumType: typeof KeyCode;
		}

		export const Three: Three;

		export interface Four extends EnumItem {
			Name: "Four";
			Value: 52;
			EnumType: typeof KeyCode;
		}

		export const Four: Four;

		export interface Five extends EnumItem {
			Name: "Five";
			Value: 53;
			EnumType: typeof KeyCode;
		}

		export const Five: Five;

		export interface Six extends EnumItem {
			Name: "Six";
			Value: 54;
			EnumType: typeof KeyCode;
		}

		export const Six: Six;

		export interface Seven extends EnumItem {
			Name: "Seven";
			Value: 55;
			EnumType: typeof KeyCode;
		}

		export const Seven: Seven;

		export interface Eight extends EnumItem {
			Name: "Eight";
			Value: 56;
			EnumType: typeof KeyCode;
		}

		export const Eight: Eight;

		export interface Nine extends EnumItem {
			Name: "Nine";
			Value: 57;
			EnumType: typeof KeyCode;
		}

		export const Nine: Nine;

		export interface Colon extends EnumItem {
			Name: "Colon";
			Value: 58;
			EnumType: typeof KeyCode;
		}

		export const Colon: Colon;

		export interface Semicolon extends EnumItem {
			Name: "Semicolon";
			Value: 59;
			EnumType: typeof KeyCode;
		}

		export const Semicolon: Semicolon;

		export interface LessThan extends EnumItem {
			Name: "LessThan";
			Value: 60;
			EnumType: typeof KeyCode;
		}

		export const LessThan: LessThan;

		export interface Equals extends EnumItem {
			Name: "Equals";
			Value: 61;
			EnumType: typeof KeyCode;
		}

		export const Equals: Equals;

		export interface GreaterThan extends EnumItem {
			Name: "GreaterThan";
			Value: 62;
			EnumType: typeof KeyCode;
		}

		export const GreaterThan: GreaterThan;

		export interface Question extends EnumItem {
			Name: "Question";
			Value: 63;
			EnumType: typeof KeyCode;
		}

		export const Question: Question;

		export interface At extends EnumItem {
			Name: "At";
			Value: 64;
			EnumType: typeof KeyCode;
		}

		export const At: At;

		export interface LeftBracket extends EnumItem {
			Name: "LeftBracket";
			Value: 91;
			EnumType: typeof KeyCode;
		}

		export const LeftBracket: LeftBracket;

		export interface BackSlash extends EnumItem {
			Name: "BackSlash";
			Value: 92;
			EnumType: typeof KeyCode;
		}

		export const BackSlash: BackSlash;

		export interface RightBracket extends EnumItem {
			Name: "RightBracket";
			Value: 93;
			EnumType: typeof KeyCode;
		}

		export const RightBracket: RightBracket;

		export interface Caret extends EnumItem {
			Name: "Caret";
			Value: 94;
			EnumType: typeof KeyCode;
		}

		export const Caret: Caret;

		export interface Underscore extends EnumItem {
			Name: "Underscore";
			Value: 95;
			EnumType: typeof KeyCode;
		}

		export const Underscore: Underscore;

		export interface Backquote extends EnumItem {
			Name: "Backquote";
			Value: 96;
			EnumType: typeof KeyCode;
		}

		export const Backquote: Backquote;

		export interface A extends EnumItem {
			Name: "A";
			Value: 97;
			EnumType: typeof KeyCode;
		}

		export const A: A;

		export interface B extends EnumItem {
			Name: "B";
			Value: 98;
			EnumType: typeof KeyCode;
		}

		export const B: B;

		export interface C extends EnumItem {
			Name: "C";
			Value: 99;
			EnumType: typeof KeyCode;
		}

		export const C: C;

		export interface D extends EnumItem {
			Name: "D";
			Value: 100;
			EnumType: typeof KeyCode;
		}

		export const D: D;

		export interface E extends EnumItem {
			Name: "E";
			Value: 101;
			EnumType: typeof KeyCode;
		}

		export const E: E;

		export interface F extends EnumItem {
			Name: "F";
			Value: 102;
			EnumType: typeof KeyCode;
		}

		export const F: F;

		export interface G extends EnumItem {
			Name: "G";
			Value: 103;
			EnumType: typeof KeyCode;
		}

		export const G: G;

		export interface H extends EnumItem {
			Name: "H";
			Value: 104;
			EnumType: typeof KeyCode;
		}

		export const H: H;

		export interface I extends EnumItem {
			Name: "I";
			Value: 105;
			EnumType: typeof KeyCode;
		}

		export const I: I;

		export interface J extends EnumItem {
			Name: "J";
			Value: 106;
			EnumType: typeof KeyCode;
		}

		export const J: J;

		export interface K extends EnumItem {
			Name: "K";
			Value: 107;
			EnumType: typeof KeyCode;
		}

		export const K: K;

		export interface L extends EnumItem {
			Name: "L";
			Value: 108;
			EnumType: typeof KeyCode;
		}

		export const L: L;

		export interface M extends EnumItem {
			Name: "M";
			Value: 109;
			EnumType: typeof KeyCode;
		}

		export const M: M;

		export interface N extends EnumItem {
			Name: "N";
			Value: 110;
			EnumType: typeof KeyCode;
		}

		export const N: N;

		export interface O extends EnumItem {
			Name: "O";
			Value: 111;
			EnumType: typeof KeyCode;
		}

		export const O: O;

		export interface P extends EnumItem {
			Name: "P";
			Value: 112;
			EnumType: typeof KeyCode;
		}

		export const P: P;

		export interface Q extends EnumItem {
			Name: "Q";
			Value: 113;
			EnumType: typeof KeyCode;
		}

		export const Q: Q;

		export interface R extends EnumItem {
			Name: "R";
			Value: 114;
			EnumType: typeof KeyCode;
		}

		export const R: R;

		export interface S extends EnumItem {
			Name: "S";
			Value: 115;
			EnumType: typeof KeyCode;
		}

		export const S: S;

		export interface T extends EnumItem {
			Name: "T";
			Value: 116;
			EnumType: typeof KeyCode;
		}

		export const T: T;

		export interface U extends EnumItem {
			Name: "U";
			Value: 117;
			EnumType: typeof KeyCode;
		}

		export const U: U;

		export interface V extends EnumItem {
			Name: "V";
			Value: 118;
			EnumType: typeof KeyCode;
		}

		export const V: V;

		export interface W extends EnumItem {
			Name: "W";
			Value: 119;
			EnumType: typeof KeyCode;
		}

		export const W: W;

		export interface X extends EnumItem {
			Name: "X";
			Value: 120;
			EnumType: typeof KeyCode;
		}

		export const X: X;

		export interface Y extends EnumItem {
			Name: "Y";
			Value: 121;
			EnumType: typeof KeyCode;
		}

		export const Y: Y;

		export interface Z extends EnumItem {
			Name: "Z";
			Value: 122;
			EnumType: typeof KeyCode;
		}

		export const Z: Z;

		export interface LeftCurly extends EnumItem {
			Name: "LeftCurly";
			Value: 123;
			EnumType: typeof KeyCode;
		}

		export const LeftCurly: LeftCurly;

		export interface Pipe extends EnumItem {
			Name: "Pipe";
			Value: 124;
			EnumType: typeof KeyCode;
		}

		export const Pipe: Pipe;

		export interface RightCurly extends EnumItem {
			Name: "RightCurly";
			Value: 125;
			EnumType: typeof KeyCode;
		}

		export const RightCurly: RightCurly;

		export interface Tilde extends EnumItem {
			Name: "Tilde";
			Value: 126;
			EnumType: typeof KeyCode;
		}

		export const Tilde: Tilde;

		export interface Delete extends EnumItem {
			Name: "Delete";
			Value: 127;
			EnumType: typeof KeyCode;
		}

		export const Delete: Delete;

		export interface KeypadZero extends EnumItem {
			Name: "KeypadZero";
			Value: 256;
			EnumType: typeof KeyCode;
		}

		export const KeypadZero: KeypadZero;

		export interface KeypadOne extends EnumItem {
			Name: "KeypadOne";
			Value: 257;
			EnumType: typeof KeyCode;
		}

		export const KeypadOne: KeypadOne;

		export interface KeypadTwo extends EnumItem {
			Name: "KeypadTwo";
			Value: 258;
			EnumType: typeof KeyCode;
		}

		export const KeypadTwo: KeypadTwo;

		export interface KeypadThree extends EnumItem {
			Name: "KeypadThree";
			Value: 259;
			EnumType: typeof KeyCode;
		}

		export const KeypadThree: KeypadThree;

		export interface KeypadFour extends EnumItem {
			Name: "KeypadFour";
			Value: 260;
			EnumType: typeof KeyCode;
		}

		export const KeypadFour: KeypadFour;

		export interface KeypadFive extends EnumItem {
			Name: "KeypadFive";
			Value: 261;
			EnumType: typeof KeyCode;
		}

		export const KeypadFive: KeypadFive;

		export interface KeypadSix extends EnumItem {
			Name: "KeypadSix";
			Value: 262;
			EnumType: typeof KeyCode;
		}

		export const KeypadSix: KeypadSix;

		export interface KeypadSeven extends EnumItem {
			Name: "KeypadSeven";
			Value: 263;
			EnumType: typeof KeyCode;
		}

		export const KeypadSeven: KeypadSeven;

		export interface KeypadEight extends EnumItem {
			Name: "KeypadEight";
			Value: 264;
			EnumType: typeof KeyCode;
		}

		export const KeypadEight: KeypadEight;

		export interface KeypadNine extends EnumItem {
			Name: "KeypadNine";
			Value: 265;
			EnumType: typeof KeyCode;
		}

		export const KeypadNine: KeypadNine;

		export interface KeypadPeriod extends EnumItem {
			Name: "KeypadPeriod";
			Value: 266;
			EnumType: typeof KeyCode;
		}

		export const KeypadPeriod: KeypadPeriod;

		export interface KeypadDivide extends EnumItem {
			Name: "KeypadDivide";
			Value: 267;
			EnumType: typeof KeyCode;
		}

		export const KeypadDivide: KeypadDivide;

		export interface KeypadMultiply extends EnumItem {
			Name: "KeypadMultiply";
			Value: 268;
			EnumType: typeof KeyCode;
		}

		export const KeypadMultiply: KeypadMultiply;

		export interface KeypadMinus extends EnumItem {
			Name: "KeypadMinus";
			Value: 269;
			EnumType: typeof KeyCode;
		}

		export const KeypadMinus: KeypadMinus;

		export interface KeypadPlus extends EnumItem {
			Name: "KeypadPlus";
			Value: 270;
			EnumType: typeof KeyCode;
		}

		export const KeypadPlus: KeypadPlus;

		export interface KeypadEnter extends EnumItem {
			Name: "KeypadEnter";
			Value: 271;
			EnumType: typeof KeyCode;
		}

		export const KeypadEnter: KeypadEnter;

		export interface KeypadEquals extends EnumItem {
			Name: "KeypadEquals";
			Value: 272;
			EnumType: typeof KeyCode;
		}

		export const KeypadEquals: KeypadEquals;

		export interface Up extends EnumItem {
			Name: "Up";
			Value: 273;
			EnumType: typeof KeyCode;
		}

		export const Up: Up;

		export interface Down extends EnumItem {
			Name: "Down";
			Value: 274;
			EnumType: typeof KeyCode;
		}

		export const Down: Down;

		export interface Right extends EnumItem {
			Name: "Right";
			Value: 275;
			EnumType: typeof KeyCode;
		}

		export const Right: Right;

		export interface Left extends EnumItem {
			Name: "Left";
			Value: 276;
			EnumType: typeof KeyCode;
		}

		export const Left: Left;

		export interface Insert extends EnumItem {
			Name: "Insert";
			Value: 277;
			EnumType: typeof KeyCode;
		}

		export const Insert: Insert;

		export interface Home extends EnumItem {
			Name: "Home";
			Value: 278;
			EnumType: typeof KeyCode;
		}

		export const Home: Home;

		export interface End extends EnumItem {
			Name: "End";
			Value: 279;
			EnumType: typeof KeyCode;
		}

		export const End: End;

		export interface PageUp extends EnumItem {
			Name: "PageUp";
			Value: 280;
			EnumType: typeof KeyCode;
		}

		export const PageUp: PageUp;

		export interface PageDown extends EnumItem {
			Name: "PageDown";
			Value: 281;
			EnumType: typeof KeyCode;
		}

		export const PageDown: PageDown;

		export interface LeftShift extends EnumItem {
			Name: "LeftShift";
			Value: 304;
			EnumType: typeof KeyCode;
		}

		export const LeftShift: LeftShift;

		export interface RightShift extends EnumItem {
			Name: "RightShift";
			Value: 303;
			EnumType: typeof KeyCode;
		}

		export const RightShift: RightShift;

		export interface LeftMeta extends EnumItem {
			Name: "LeftMeta";
			Value: 310;
			EnumType: typeof KeyCode;
		}

		export const LeftMeta: LeftMeta;

		export interface RightMeta extends EnumItem {
			Name: "RightMeta";
			Value: 309;
			EnumType: typeof KeyCode;
		}

		export const RightMeta: RightMeta;

		export interface LeftAlt extends EnumItem {
			Name: "LeftAlt";
			Value: 308;
			EnumType: typeof KeyCode;
		}

		export const LeftAlt: LeftAlt;

		export interface RightAlt extends EnumItem {
			Name: "RightAlt";
			Value: 307;
			EnumType: typeof KeyCode;
		}

		export const RightAlt: RightAlt;

		export interface LeftControl extends EnumItem {
			Name: "LeftControl";
			Value: 306;
			EnumType: typeof KeyCode;
		}

		export const LeftControl: LeftControl;

		export interface RightControl extends EnumItem {
			Name: "RightControl";
			Value: 305;
			EnumType: typeof KeyCode;
		}

		export const RightControl: RightControl;

		export interface CapsLock extends EnumItem {
			Name: "CapsLock";
			Value: 301;
			EnumType: typeof KeyCode;
		}

		export const CapsLock: CapsLock;

		export interface NumLock extends EnumItem {
			Name: "NumLock";
			Value: 300;
			EnumType: typeof KeyCode;
		}

		export const NumLock: NumLock;

		export interface ScrollLock extends EnumItem {
			Name: "ScrollLock";
			Value: 302;
			EnumType: typeof KeyCode;
		}

		export const ScrollLock: ScrollLock;

		export interface LeftSuper extends EnumItem {
			Name: "LeftSuper";
			Value: 311;
			EnumType: typeof KeyCode;
		}

		export const LeftSuper: LeftSuper;

		export interface RightSuper extends EnumItem {
			Name: "RightSuper";
			Value: 312;
			EnumType: typeof KeyCode;
		}

		export const RightSuper: RightSuper;

		export interface Mode extends EnumItem {
			Name: "Mode";
			Value: 313;
			EnumType: typeof KeyCode;
		}

		export const Mode: Mode;

		export interface Compose extends EnumItem {
			Name: "Compose";
			Value: 314;
			EnumType: typeof KeyCode;
		}

		export const Compose: Compose;

		export interface Help extends EnumItem {
			Name: "Help";
			Value: 315;
			EnumType: typeof KeyCode;
		}

		export const Help: Help;

		export interface Print extends EnumItem {
			Name: "Print";
			Value: 316;
			EnumType: typeof KeyCode;
		}

		export const Print: Print;

		export interface SysReq extends EnumItem {
			Name: "SysReq";
			Value: 317;
			EnumType: typeof KeyCode;
		}

		export const SysReq: SysReq;

		export interface Break extends EnumItem {
			Name: "Break";
			Value: 318;
			EnumType: typeof KeyCode;
		}

		export const Break: Break;

		export interface Menu extends EnumItem {
			Name: "Menu";
			Value: 319;
			EnumType: typeof KeyCode;
		}

		export const Menu: Menu;

		export interface Power extends EnumItem {
			Name: "Power";
			Value: 320;
			EnumType: typeof KeyCode;
		}

		export const Power: Power;

		export interface Euro extends EnumItem {
			Name: "Euro";
			Value: 321;
			EnumType: typeof KeyCode;
		}

		export const Euro: Euro;

		export interface Undo extends EnumItem {
			Name: "Undo";
			Value: 322;
			EnumType: typeof KeyCode;
		}

		export const Undo: Undo;

		export interface F1 extends EnumItem {
			Name: "F1";
			Value: 282;
			EnumType: typeof KeyCode;
		}

		export const F1: F1;

		export interface F2 extends EnumItem {
			Name: "F2";
			Value: 283;
			EnumType: typeof KeyCode;
		}

		export const F2: F2;

		export interface F3 extends EnumItem {
			Name: "F3";
			Value: 284;
			EnumType: typeof KeyCode;
		}

		export const F3: F3;

		export interface F4 extends EnumItem {
			Name: "F4";
			Value: 285;
			EnumType: typeof KeyCode;
		}

		export const F4: F4;

		export interface F5 extends EnumItem {
			Name: "F5";
			Value: 286;
			EnumType: typeof KeyCode;
		}

		export const F5: F5;

		export interface F6 extends EnumItem {
			Name: "F6";
			Value: 287;
			EnumType: typeof KeyCode;
		}

		export const F6: F6;

		export interface F7 extends EnumItem {
			Name: "F7";
			Value: 288;
			EnumType: typeof KeyCode;
		}

		export const F7: F7;

		export interface F8 extends EnumItem {
			Name: "F8";
			Value: 289;
			EnumType: typeof KeyCode;
		}

		export const F8: F8;

		export interface F9 extends EnumItem {
			Name: "F9";
			Value: 290;
			EnumType: typeof KeyCode;
		}

		export const F9: F9;

		export interface F10 extends EnumItem {
			Name: "F10";
			Value: 291;
			EnumType: typeof KeyCode;
		}

		export const F10: F10;

		export interface F11 extends EnumItem {
			Name: "F11";
			Value: 292;
			EnumType: typeof KeyCode;
		}

		export const F11: F11;

		export interface F12 extends EnumItem {
			Name: "F12";
			Value: 293;
			EnumType: typeof KeyCode;
		}

		export const F12: F12;

		export interface F13 extends EnumItem {
			Name: "F13";
			Value: 294;
			EnumType: typeof KeyCode;
		}

		export const F13: F13;

		export interface F14 extends EnumItem {
			Name: "F14";
			Value: 295;
			EnumType: typeof KeyCode;
		}

		export const F14: F14;

		export interface F15 extends EnumItem {
			Name: "F15";
			Value: 296;
			EnumType: typeof KeyCode;
		}

		export const F15: F15;

		export interface World0 extends EnumItem {
			Name: "World0";
			Value: 160;
			EnumType: typeof KeyCode;
		}

		export const World0: World0;

		export interface World1 extends EnumItem {
			Name: "World1";
			Value: 161;
			EnumType: typeof KeyCode;
		}

		export const World1: World1;

		export interface World2 extends EnumItem {
			Name: "World2";
			Value: 162;
			EnumType: typeof KeyCode;
		}

		export const World2: World2;

		export interface World3 extends EnumItem {
			Name: "World3";
			Value: 163;
			EnumType: typeof KeyCode;
		}

		export const World3: World3;

		export interface World4 extends EnumItem {
			Name: "World4";
			Value: 164;
			EnumType: typeof KeyCode;
		}

		export const World4: World4;

		export interface World5 extends EnumItem {
			Name: "World5";
			Value: 165;
			EnumType: typeof KeyCode;
		}

		export const World5: World5;

		export interface World6 extends EnumItem {
			Name: "World6";
			Value: 166;
			EnumType: typeof KeyCode;
		}

		export const World6: World6;

		export interface World7 extends EnumItem {
			Name: "World7";
			Value: 167;
			EnumType: typeof KeyCode;
		}

		export const World7: World7;

		export interface World8 extends EnumItem {
			Name: "World8";
			Value: 168;
			EnumType: typeof KeyCode;
		}

		export const World8: World8;

		export interface World9 extends EnumItem {
			Name: "World9";
			Value: 169;
			EnumType: typeof KeyCode;
		}

		export const World9: World9;

		export interface World10 extends EnumItem {
			Name: "World10";
			Value: 170;
			EnumType: typeof KeyCode;
		}

		export const World10: World10;

		export interface World11 extends EnumItem {
			Name: "World11";
			Value: 171;
			EnumType: typeof KeyCode;
		}

		export const World11: World11;

		export interface World12 extends EnumItem {
			Name: "World12";
			Value: 172;
			EnumType: typeof KeyCode;
		}

		export const World12: World12;

		export interface World13 extends EnumItem {
			Name: "World13";
			Value: 173;
			EnumType: typeof KeyCode;
		}

		export const World13: World13;

		export interface World14 extends EnumItem {
			Name: "World14";
			Value: 174;
			EnumType: typeof KeyCode;
		}

		export const World14: World14;

		export interface World15 extends EnumItem {
			Name: "World15";
			Value: 175;
			EnumType: typeof KeyCode;
		}

		export const World15: World15;

		export interface World16 extends EnumItem {
			Name: "World16";
			Value: 176;
			EnumType: typeof KeyCode;
		}

		export const World16: World16;

		export interface World17 extends EnumItem {
			Name: "World17";
			Value: 177;
			EnumType: typeof KeyCode;
		}

		export const World17: World17;

		export interface World18 extends EnumItem {
			Name: "World18";
			Value: 178;
			EnumType: typeof KeyCode;
		}

		export const World18: World18;

		export interface World19 extends EnumItem {
			Name: "World19";
			Value: 179;
			EnumType: typeof KeyCode;
		}

		export const World19: World19;

		export interface World20 extends EnumItem {
			Name: "World20";
			Value: 180;
			EnumType: typeof KeyCode;
		}

		export const World20: World20;

		export interface World21 extends EnumItem {
			Name: "World21";
			Value: 181;
			EnumType: typeof KeyCode;
		}

		export const World21: World21;

		export interface World22 extends EnumItem {
			Name: "World22";
			Value: 182;
			EnumType: typeof KeyCode;
		}

		export const World22: World22;

		export interface World23 extends EnumItem {
			Name: "World23";
			Value: 183;
			EnumType: typeof KeyCode;
		}

		export const World23: World23;

		export interface World24 extends EnumItem {
			Name: "World24";
			Value: 184;
			EnumType: typeof KeyCode;
		}

		export const World24: World24;

		export interface World25 extends EnumItem {
			Name: "World25";
			Value: 185;
			EnumType: typeof KeyCode;
		}

		export const World25: World25;

		export interface World26 extends EnumItem {
			Name: "World26";
			Value: 186;
			EnumType: typeof KeyCode;
		}

		export const World26: World26;

		export interface World27 extends EnumItem {
			Name: "World27";
			Value: 187;
			EnumType: typeof KeyCode;
		}

		export const World27: World27;

		export interface World28 extends EnumItem {
			Name: "World28";
			Value: 188;
			EnumType: typeof KeyCode;
		}

		export const World28: World28;

		export interface World29 extends EnumItem {
			Name: "World29";
			Value: 189;
			EnumType: typeof KeyCode;
		}

		export const World29: World29;

		export interface World30 extends EnumItem {
			Name: "World30";
			Value: 190;
			EnumType: typeof KeyCode;
		}

		export const World30: World30;

		export interface World31 extends EnumItem {
			Name: "World31";
			Value: 191;
			EnumType: typeof KeyCode;
		}

		export const World31: World31;

		export interface World32 extends EnumItem {
			Name: "World32";
			Value: 192;
			EnumType: typeof KeyCode;
		}

		export const World32: World32;

		export interface World33 extends EnumItem {
			Name: "World33";
			Value: 193;
			EnumType: typeof KeyCode;
		}

		export const World33: World33;

		export interface World34 extends EnumItem {
			Name: "World34";
			Value: 194;
			EnumType: typeof KeyCode;
		}

		export const World34: World34;

		export interface World35 extends EnumItem {
			Name: "World35";
			Value: 195;
			EnumType: typeof KeyCode;
		}

		export const World35: World35;

		export interface World36 extends EnumItem {
			Name: "World36";
			Value: 196;
			EnumType: typeof KeyCode;
		}

		export const World36: World36;

		export interface World37 extends EnumItem {
			Name: "World37";
			Value: 197;
			EnumType: typeof KeyCode;
		}

		export const World37: World37;

		export interface World38 extends EnumItem {
			Name: "World38";
			Value: 198;
			EnumType: typeof KeyCode;
		}

		export const World38: World38;

		export interface World39 extends EnumItem {
			Name: "World39";
			Value: 199;
			EnumType: typeof KeyCode;
		}

		export const World39: World39;

		export interface World40 extends EnumItem {
			Name: "World40";
			Value: 200;
			EnumType: typeof KeyCode;
		}

		export const World40: World40;

		export interface World41 extends EnumItem {
			Name: "World41";
			Value: 201;
			EnumType: typeof KeyCode;
		}

		export const World41: World41;

		export interface World42 extends EnumItem {
			Name: "World42";
			Value: 202;
			EnumType: typeof KeyCode;
		}

		export const World42: World42;

		export interface World43 extends EnumItem {
			Name: "World43";
			Value: 203;
			EnumType: typeof KeyCode;
		}

		export const World43: World43;

		export interface World44 extends EnumItem {
			Name: "World44";
			Value: 204;
			EnumType: typeof KeyCode;
		}

		export const World44: World44;

		export interface World45 extends EnumItem {
			Name: "World45";
			Value: 205;
			EnumType: typeof KeyCode;
		}

		export const World45: World45;

		export interface World46 extends EnumItem {
			Name: "World46";
			Value: 206;
			EnumType: typeof KeyCode;
		}

		export const World46: World46;

		export interface World47 extends EnumItem {
			Name: "World47";
			Value: 207;
			EnumType: typeof KeyCode;
		}

		export const World47: World47;

		export interface World48 extends EnumItem {
			Name: "World48";
			Value: 208;
			EnumType: typeof KeyCode;
		}

		export const World48: World48;

		export interface World49 extends EnumItem {
			Name: "World49";
			Value: 209;
			EnumType: typeof KeyCode;
		}

		export const World49: World49;

		export interface World50 extends EnumItem {
			Name: "World50";
			Value: 210;
			EnumType: typeof KeyCode;
		}

		export const World50: World50;

		export interface World51 extends EnumItem {
			Name: "World51";
			Value: 211;
			EnumType: typeof KeyCode;
		}

		export const World51: World51;

		export interface World52 extends EnumItem {
			Name: "World52";
			Value: 212;
			EnumType: typeof KeyCode;
		}

		export const World52: World52;

		export interface World53 extends EnumItem {
			Name: "World53";
			Value: 213;
			EnumType: typeof KeyCode;
		}

		export const World53: World53;

		export interface World54 extends EnumItem {
			Name: "World54";
			Value: 214;
			EnumType: typeof KeyCode;
		}

		export const World54: World54;

		export interface World55 extends EnumItem {
			Name: "World55";
			Value: 215;
			EnumType: typeof KeyCode;
		}

		export const World55: World55;

		export interface World56 extends EnumItem {
			Name: "World56";
			Value: 216;
			EnumType: typeof KeyCode;
		}

		export const World56: World56;

		export interface World57 extends EnumItem {
			Name: "World57";
			Value: 217;
			EnumType: typeof KeyCode;
		}

		export const World57: World57;

		export interface World58 extends EnumItem {
			Name: "World58";
			Value: 218;
			EnumType: typeof KeyCode;
		}

		export const World58: World58;

		export interface World59 extends EnumItem {
			Name: "World59";
			Value: 219;
			EnumType: typeof KeyCode;
		}

		export const World59: World59;

		export interface World60 extends EnumItem {
			Name: "World60";
			Value: 220;
			EnumType: typeof KeyCode;
		}

		export const World60: World60;

		export interface World61 extends EnumItem {
			Name: "World61";
			Value: 221;
			EnumType: typeof KeyCode;
		}

		export const World61: World61;

		export interface World62 extends EnumItem {
			Name: "World62";
			Value: 222;
			EnumType: typeof KeyCode;
		}

		export const World62: World62;

		export interface World63 extends EnumItem {
			Name: "World63";
			Value: 223;
			EnumType: typeof KeyCode;
		}

		export const World63: World63;

		export interface World64 extends EnumItem {
			Name: "World64";
			Value: 224;
			EnumType: typeof KeyCode;
		}

		export const World64: World64;

		export interface World65 extends EnumItem {
			Name: "World65";
			Value: 225;
			EnumType: typeof KeyCode;
		}

		export const World65: World65;

		export interface World66 extends EnumItem {
			Name: "World66";
			Value: 226;
			EnumType: typeof KeyCode;
		}

		export const World66: World66;

		export interface World67 extends EnumItem {
			Name: "World67";
			Value: 227;
			EnumType: typeof KeyCode;
		}

		export const World67: World67;

		export interface World68 extends EnumItem {
			Name: "World68";
			Value: 228;
			EnumType: typeof KeyCode;
		}

		export const World68: World68;

		export interface World69 extends EnumItem {
			Name: "World69";
			Value: 229;
			EnumType: typeof KeyCode;
		}

		export const World69: World69;

		export interface World70 extends EnumItem {
			Name: "World70";
			Value: 230;
			EnumType: typeof KeyCode;
		}

		export const World70: World70;

		export interface World71 extends EnumItem {
			Name: "World71";
			Value: 231;
			EnumType: typeof KeyCode;
		}

		export const World71: World71;

		export interface World72 extends EnumItem {
			Name: "World72";
			Value: 232;
			EnumType: typeof KeyCode;
		}

		export const World72: World72;

		export interface World73 extends EnumItem {
			Name: "World73";
			Value: 233;
			EnumType: typeof KeyCode;
		}

		export const World73: World73;

		export interface World74 extends EnumItem {
			Name: "World74";
			Value: 234;
			EnumType: typeof KeyCode;
		}

		export const World74: World74;

		export interface World75 extends EnumItem {
			Name: "World75";
			Value: 235;
			EnumType: typeof KeyCode;
		}

		export const World75: World75;

		export interface World76 extends EnumItem {
			Name: "World76";
			Value: 236;
			EnumType: typeof KeyCode;
		}

		export const World76: World76;

		export interface World77 extends EnumItem {
			Name: "World77";
			Value: 237;
			EnumType: typeof KeyCode;
		}

		export const World77: World77;

		export interface World78 extends EnumItem {
			Name: "World78";
			Value: 238;
			EnumType: typeof KeyCode;
		}

		export const World78: World78;

		export interface World79 extends EnumItem {
			Name: "World79";
			Value: 239;
			EnumType: typeof KeyCode;
		}

		export const World79: World79;

		export interface World80 extends EnumItem {
			Name: "World80";
			Value: 240;
			EnumType: typeof KeyCode;
		}

		export const World80: World80;

		export interface World81 extends EnumItem {
			Name: "World81";
			Value: 241;
			EnumType: typeof KeyCode;
		}

		export const World81: World81;

		export interface World82 extends EnumItem {
			Name: "World82";
			Value: 242;
			EnumType: typeof KeyCode;
		}

		export const World82: World82;

		export interface World83 extends EnumItem {
			Name: "World83";
			Value: 243;
			EnumType: typeof KeyCode;
		}

		export const World83: World83;

		export interface World84 extends EnumItem {
			Name: "World84";
			Value: 244;
			EnumType: typeof KeyCode;
		}

		export const World84: World84;

		export interface World85 extends EnumItem {
			Name: "World85";
			Value: 245;
			EnumType: typeof KeyCode;
		}

		export const World85: World85;

		export interface World86 extends EnumItem {
			Name: "World86";
			Value: 246;
			EnumType: typeof KeyCode;
		}

		export const World86: World86;

		export interface World87 extends EnumItem {
			Name: "World87";
			Value: 247;
			EnumType: typeof KeyCode;
		}

		export const World87: World87;

		export interface World88 extends EnumItem {
			Name: "World88";
			Value: 248;
			EnumType: typeof KeyCode;
		}

		export const World88: World88;

		export interface World89 extends EnumItem {
			Name: "World89";
			Value: 249;
			EnumType: typeof KeyCode;
		}

		export const World89: World89;

		export interface World90 extends EnumItem {
			Name: "World90";
			Value: 250;
			EnumType: typeof KeyCode;
		}

		export const World90: World90;

		export interface World91 extends EnumItem {
			Name: "World91";
			Value: 251;
			EnumType: typeof KeyCode;
		}

		export const World91: World91;

		export interface World92 extends EnumItem {
			Name: "World92";
			Value: 252;
			EnumType: typeof KeyCode;
		}

		export const World92: World92;

		export interface World93 extends EnumItem {
			Name: "World93";
			Value: 253;
			EnumType: typeof KeyCode;
		}

		export const World93: World93;

		export interface World94 extends EnumItem {
			Name: "World94";
			Value: 254;
			EnumType: typeof KeyCode;
		}

		export const World94: World94;

		export interface World95 extends EnumItem {
			Name: "World95";
			Value: 255;
			EnumType: typeof KeyCode;
		}

		export const World95: World95;

		export interface ButtonX extends EnumItem {
			Name: "ButtonX";
			Value: 1000;
			EnumType: typeof KeyCode;
		}

		export const ButtonX: ButtonX;

		export interface ButtonY extends EnumItem {
			Name: "ButtonY";
			Value: 1001;
			EnumType: typeof KeyCode;
		}

		export const ButtonY: ButtonY;

		export interface ButtonA extends EnumItem {
			Name: "ButtonA";
			Value: 1002;
			EnumType: typeof KeyCode;
		}

		export const ButtonA: ButtonA;

		export interface ButtonB extends EnumItem {
			Name: "ButtonB";
			Value: 1003;
			EnumType: typeof KeyCode;
		}

		export const ButtonB: ButtonB;

		export interface ButtonR1 extends EnumItem {
			Name: "ButtonR1";
			Value: 1004;
			EnumType: typeof KeyCode;
		}

		export const ButtonR1: ButtonR1;

		export interface ButtonL1 extends EnumItem {
			Name: "ButtonL1";
			Value: 1005;
			EnumType: typeof KeyCode;
		}

		export const ButtonL1: ButtonL1;

		export interface ButtonR2 extends EnumItem {
			Name: "ButtonR2";
			Value: 1006;
			EnumType: typeof KeyCode;
		}

		export const ButtonR2: ButtonR2;

		export interface ButtonL2 extends EnumItem {
			Name: "ButtonL2";
			Value: 1007;
			EnumType: typeof KeyCode;
		}

		export const ButtonL2: ButtonL2;

		export interface ButtonR3 extends EnumItem {
			Name: "ButtonR3";
			Value: 1008;
			EnumType: typeof KeyCode;
		}

		export const ButtonR3: ButtonR3;

		export interface ButtonL3 extends EnumItem {
			Name: "ButtonL3";
			Value: 1009;
			EnumType: typeof KeyCode;
		}

		export const ButtonL3: ButtonL3;

		export interface ButtonStart extends EnumItem {
			Name: "ButtonStart";
			Value: 1010;
			EnumType: typeof KeyCode;
		}

		export const ButtonStart: ButtonStart;

		export interface ButtonSelect extends EnumItem {
			Name: "ButtonSelect";
			Value: 1011;
			EnumType: typeof KeyCode;
		}

		export const ButtonSelect: ButtonSelect;

		export interface DPadLeft extends EnumItem {
			Name: "DPadLeft";
			Value: 1012;
			EnumType: typeof KeyCode;
		}

		export const DPadLeft: DPadLeft;

		export interface DPadRight extends EnumItem {
			Name: "DPadRight";
			Value: 1013;
			EnumType: typeof KeyCode;
		}

		export const DPadRight: DPadRight;

		export interface DPadUp extends EnumItem {
			Name: "DPadUp";
			Value: 1014;
			EnumType: typeof KeyCode;
		}

		export const DPadUp: DPadUp;

		export interface DPadDown extends EnumItem {
			Name: "DPadDown";
			Value: 1015;
			EnumType: typeof KeyCode;
		}

		export const DPadDown: DPadDown;

		export interface Thumbstick1 extends EnumItem {
			Name: "Thumbstick1";
			Value: 1016;
			EnumType: typeof KeyCode;
		}

		export const Thumbstick1: Thumbstick1;

		export interface Thumbstick2 extends EnumItem {
			Name: "Thumbstick2";
			Value: 1017;
			EnumType: typeof KeyCode;
		}

		export const Thumbstick2: Thumbstick2;

		export function GetEnumItems(this: Enum): Array<KeyCode>
	}
	export type KeyCode = KeyCode.Unknown | KeyCode.Backspace | KeyCode.Tab | KeyCode.Clear | KeyCode.Return | KeyCode.Pause | KeyCode.Escape | KeyCode.Space | KeyCode.QuotedDouble | KeyCode.Hash | KeyCode.Dollar | KeyCode.Percent | KeyCode.Ampersand | KeyCode.Quote | KeyCode.LeftParenthesis | KeyCode.RightParenthesis | KeyCode.Asterisk | KeyCode.Plus | KeyCode.Comma | KeyCode.Minus | KeyCode.Period | KeyCode.Slash | KeyCode.Zero | KeyCode.One | KeyCode.Two | KeyCode.Three | KeyCode.Four | KeyCode.Five | KeyCode.Six | KeyCode.Seven | KeyCode.Eight | KeyCode.Nine | KeyCode.Colon | KeyCode.Semicolon | KeyCode.LessThan | KeyCode.Equals | KeyCode.GreaterThan | KeyCode.Question | KeyCode.At | KeyCode.LeftBracket | KeyCode.BackSlash | KeyCode.RightBracket | KeyCode.Caret | KeyCode.Underscore | KeyCode.Backquote | KeyCode.A | KeyCode.B | KeyCode.C | KeyCode.D | KeyCode.E | KeyCode.F | KeyCode.G | KeyCode.H | KeyCode.I | KeyCode.J | KeyCode.K | KeyCode.L | KeyCode.M | KeyCode.N | KeyCode.O | KeyCode.P | KeyCode.Q | KeyCode.R | KeyCode.S | KeyCode.T | KeyCode.U | KeyCode.V | KeyCode.W | KeyCode.X | KeyCode.Y | KeyCode.Z | KeyCode.LeftCurly | KeyCode.Pipe | KeyCode.RightCurly | KeyCode.Tilde | KeyCode.Delete | KeyCode.KeypadZero | KeyCode.KeypadOne | KeyCode.KeypadTwo | KeyCode.KeypadThree | KeyCode.KeypadFour | KeyCode.KeypadFive | KeyCode.KeypadSix | KeyCode.KeypadSeven | KeyCode.KeypadEight | KeyCode.KeypadNine | KeyCode.KeypadPeriod | KeyCode.KeypadDivide | KeyCode.KeypadMultiply | KeyCode.KeypadMinus | KeyCode.KeypadPlus | KeyCode.KeypadEnter | KeyCode.KeypadEquals | KeyCode.Up | KeyCode.Down | KeyCode.Right | KeyCode.Left | KeyCode.Insert | KeyCode.Home | KeyCode.End | KeyCode.PageUp | KeyCode.PageDown | KeyCode.LeftShift | KeyCode.RightShift | KeyCode.LeftMeta | KeyCode.RightMeta | KeyCode.LeftAlt | KeyCode.RightAlt | KeyCode.LeftControl | KeyCode.RightControl | KeyCode.CapsLock | KeyCode.NumLock | KeyCode.ScrollLock | KeyCode.LeftSuper | KeyCode.RightSuper | KeyCode.Mode | KeyCode.Compose | KeyCode.Help | KeyCode.Print | KeyCode.SysReq | KeyCode.Break | KeyCode.Menu | KeyCode.Power | KeyCode.Euro | KeyCode.Undo | KeyCode.F1 | KeyCode.F2 | KeyCode.F3 | KeyCode.F4 | KeyCode.F5 | KeyCode.F6 | KeyCode.F7 | KeyCode.F8 | KeyCode.F9 | KeyCode.F10 | KeyCode.F11 | KeyCode.F12 | KeyCode.F13 | KeyCode.F14 | KeyCode.F15 | KeyCode.World0 | KeyCode.World1 | KeyCode.World2 | KeyCode.World3 | KeyCode.World4 | KeyCode.World5 | KeyCode.World6 | KeyCode.World7 | KeyCode.World8 | KeyCode.World9 | KeyCode.World10 | KeyCode.World11 | KeyCode.World12 | KeyCode.World13 | KeyCode.World14 | KeyCode.World15 | KeyCode.World16 | KeyCode.World17 | KeyCode.World18 | KeyCode.World19 | KeyCode.World20 | KeyCode.World21 | KeyCode.World22 | KeyCode.World23 | KeyCode.World24 | KeyCode.World25 | KeyCode.World26 | KeyCode.World27 | KeyCode.World28 | KeyCode.World29 | KeyCode.World30 | KeyCode.World31 | KeyCode.World32 | KeyCode.World33 | KeyCode.World34 | KeyCode.World35 | KeyCode.World36 | KeyCode.World37 | KeyCode.World38 | KeyCode.World39 | KeyCode.World40 | KeyCode.World41 | KeyCode.World42 | KeyCode.World43 | KeyCode.World44 | KeyCode.World45 | KeyCode.World46 | KeyCode.World47 | KeyCode.World48 | KeyCode.World49 | KeyCode.World50 | KeyCode.World51 | KeyCode.World52 | KeyCode.World53 | KeyCode.World54 | KeyCode.World55 | KeyCode.World56 | KeyCode.World57 | KeyCode.World58 | KeyCode.World59 | KeyCode.World60 | KeyCode.World61 | KeyCode.World62 | KeyCode.World63 | KeyCode.World64 | KeyCode.World65 | KeyCode.World66 | KeyCode.World67 | KeyCode.World68 | KeyCode.World69 | KeyCode.World70 | KeyCode.World71 | KeyCode.World72 | KeyCode.World73 | KeyCode.World74 | KeyCode.World75 | KeyCode.World76 | KeyCode.World77 | KeyCode.World78 | KeyCode.World79 | KeyCode.World80 | KeyCode.World81 | KeyCode.World82 | KeyCode.World83 | KeyCode.World84 | KeyCode.World85 | KeyCode.World86 | KeyCode.World87 | KeyCode.World88 | KeyCode.World89 | KeyCode.World90 | KeyCode.World91 | KeyCode.World92 | KeyCode.World93 | KeyCode.World94 | KeyCode.World95 | KeyCode.ButtonX | KeyCode.ButtonY | KeyCode.ButtonA | KeyCode.ButtonB | KeyCode.ButtonR1 | KeyCode.ButtonL1 | KeyCode.ButtonR2 | KeyCode.ButtonL2 | KeyCode.ButtonR3 | KeyCode.ButtonL3 | KeyCode.ButtonStart | KeyCode.ButtonSelect | KeyCode.DPadLeft | KeyCode.DPadRight | KeyCode.DPadUp | KeyCode.DPadDown | KeyCode.Thumbstick1 | KeyCode.Thumbstick2;
	export namespace KeyInterpolationMode {
		export interface Constant extends EnumItem {
			Name: "Constant";
			Value: 0;
			EnumType: typeof KeyInterpolationMode;
		}

		export const Constant: Constant;

		export interface Linear extends EnumItem {
			Name: "Linear";
			Value: 1;
			EnumType: typeof KeyInterpolationMode;
		}

		export const Linear: Linear;

		export interface Cubic extends EnumItem {
			Name: "Cubic";
			Value: 2;
			EnumType: typeof KeyInterpolationMode;
		}

		export const Cubic: Cubic;

		export function GetEnumItems(this: Enum): Array<KeyInterpolationMode>
	}
	export type KeyInterpolationMode = KeyInterpolationMode.Constant | KeyInterpolationMode.Linear | KeyInterpolationMode.Cubic;
	export namespace KeywordFilterType {
		export interface Include extends EnumItem {
			Name: "Include";
			Value: 0;
			EnumType: typeof KeywordFilterType;
		}

		export const Include: Include;

		export interface Exclude extends EnumItem {
			Name: "Exclude";
			Value: 1;
			EnumType: typeof KeywordFilterType;
		}

		export const Exclude: Exclude;

		export function GetEnumItems(this: Enum): Array<KeywordFilterType>
	}
	export type KeywordFilterType = KeywordFilterType.Include | KeywordFilterType.Exclude;
	export namespace LSPMethodType {
		export interface Initialize extends EnumItem {
			Name: "Initialize";
			Value: 1;
			EnumType: typeof LSPMethodType;
		}

		export const Initialize: Initialize;

		export interface Initialized extends EnumItem {
			Name: "Initialized";
			Value: 2;
			EnumType: typeof LSPMethodType;
		}

		export const Initialized: Initialized;

		export interface CancelRequest extends EnumItem {
			Name: "CancelRequest";
			Value: 3;
			EnumType: typeof LSPMethodType;
		}

		export const CancelRequest: CancelRequest;

		export interface TextDocument_didOpen extends EnumItem {
			Name: "TextDocument_didOpen";
			Value: 4;
			EnumType: typeof LSPMethodType;
		}

		export const TextDocument_didOpen: TextDocument_didOpen;

		export interface TextDocument_didChange extends EnumItem {
			Name: "TextDocument_didChange";
			Value: 5;
			EnumType: typeof LSPMethodType;
		}

		export const TextDocument_didChange: TextDocument_didChange;

		export interface TextDocument_didClose extends EnumItem {
			Name: "TextDocument_didClose";
			Value: 6;
			EnumType: typeof LSPMethodType;
		}

		export const TextDocument_didClose: TextDocument_didClose;

		export interface TextDocument_foldingRange extends EnumItem {
			Name: "TextDocument_foldingRange";
			Value: 7;
			EnumType: typeof LSPMethodType;
		}

		export const TextDocument_foldingRange: TextDocument_foldingRange;

		export interface TextDocument_onTypeFormatting extends EnumItem {
			Name: "TextDocument_onTypeFormatting";
			Value: 8;
			EnumType: typeof LSPMethodType;
		}

		export const TextDocument_onTypeFormatting: TextDocument_onTypeFormatting;

		export interface TextDocument_formatting extends EnumItem {
			Name: "TextDocument_formatting";
			Value: 9;
			EnumType: typeof LSPMethodType;
		}

		export const TextDocument_formatting: TextDocument_formatting;

		export interface TextDocument_rangeFormatting extends EnumItem {
			Name: "TextDocument_rangeFormatting";
			Value: 10;
			EnumType: typeof LSPMethodType;
		}

		export const TextDocument_rangeFormatting: TextDocument_rangeFormatting;

		export interface TextDocument_hover extends EnumItem {
			Name: "TextDocument_hover";
			Value: 11;
			EnumType: typeof LSPMethodType;
		}

		export const TextDocument_hover: TextDocument_hover;

		export interface TextDocument_signatureHelp extends EnumItem {
			Name: "TextDocument_signatureHelp";
			Value: 12;
			EnumType: typeof LSPMethodType;
		}

		export const TextDocument_signatureHelp: TextDocument_signatureHelp;

		export interface Workspace_DidChangeConfiguration extends EnumItem {
			Name: "Workspace_DidChangeConfiguration";
			Value: 13;
			EnumType: typeof LSPMethodType;
		}

		export const Workspace_DidChangeConfiguration: Workspace_DidChangeConfiguration;

		export interface ShutdownRequest extends EnumItem {
			Name: "ShutdownRequest";
			Value: 14;
			EnumType: typeof LSPMethodType;
		}

		export const ShutdownRequest: ShutdownRequest;

		export interface Completion extends EnumItem {
			Name: "Completion";
			Value: 15;
			EnumType: typeof LSPMethodType;
		}

		export const Completion: Completion;

		export interface Declaration extends EnumItem {
			Name: "Declaration";
			Value: 16;
			EnumType: typeof LSPMethodType;
		}

		export const Declaration: Declaration;

		export interface DocumentSymbols extends EnumItem {
			Name: "DocumentSymbols";
			Value: 17;
			EnumType: typeof LSPMethodType;
		}

		export const DocumentSymbols: DocumentSymbols;

		export interface TextDocument_publishDiagnostics extends EnumItem {
			Name: "TextDocument_publishDiagnostics";
			Value: 22;
			EnumType: typeof LSPMethodType;
		}

		export const TextDocument_publishDiagnostics: TextDocument_publishDiagnostics;

		export interface Window_showMessage extends EnumItem {
			Name: "Window_showMessage";
			Value: 23;
			EnumType: typeof LSPMethodType;
		}

		export const Window_showMessage: Window_showMessage;

		export interface Window_showMessageRequest extends EnumItem {
			Name: "Window_showMessageRequest";
			Value: 24;
			EnumType: typeof LSPMethodType;
		}

		export const Window_showMessageRequest: Window_showMessageRequest;

		export interface Roblox_registerSyntaxCategories extends EnumItem {
			Name: "Roblox_registerSyntaxCategories";
			Value: 25;
			EnumType: typeof LSPMethodType;
		}

		export const Roblox_registerSyntaxCategories: Roblox_registerSyntaxCategories;

		export interface Roblox_signalQuiescence extends EnumItem {
			Name: "Roblox_signalQuiescence";
			Value: 26;
			EnumType: typeof LSPMethodType;
		}

		export const Roblox_signalQuiescence: Roblox_signalQuiescence;

		export interface Roblox_syntaxHighlight extends EnumItem {
			Name: "Roblox_syntaxHighlight";
			Value: 27;
			EnumType: typeof LSPMethodType;
		}

		export const Roblox_syntaxHighlight: Roblox_syntaxHighlight;

		export interface Roblox_suggestExtraSelections extends EnumItem {
			Name: "Roblox_suggestExtraSelections";
			Value: 28;
			EnumType: typeof LSPMethodType;
		}

		export const Roblox_suggestExtraSelections: Roblox_suggestExtraSelections;

		export interface Roblox_findExecutablePosition extends EnumItem {
			Name: "Roblox_findExecutablePosition";
			Value: 29;
			EnumType: typeof LSPMethodType;
		}

		export const Roblox_findExecutablePosition: Roblox_findExecutablePosition;

		export interface Roblox_findColor3 extends EnumItem {
			Name: "Roblox_findColor3";
			Value: 30;
			EnumType: typeof LSPMethodType;
		}

		export const Roblox_findColor3: Roblox_findColor3;

		export interface Roblox_patchSnippetData extends EnumItem {
			Name: "Roblox_patchSnippetData";
			Value: 31;
			EnumType: typeof LSPMethodType;
		}

		export const Roblox_patchSnippetData: Roblox_patchSnippetData;

		export function GetEnumItems(this: Enum): Array<LSPMethodType>
	}
	export type LSPMethodType = LSPMethodType.Initialize | LSPMethodType.Initialized | LSPMethodType.CancelRequest | LSPMethodType.TextDocument_didOpen | LSPMethodType.TextDocument_didChange | LSPMethodType.TextDocument_didClose | LSPMethodType.TextDocument_foldingRange | LSPMethodType.TextDocument_onTypeFormatting | LSPMethodType.TextDocument_formatting | LSPMethodType.TextDocument_rangeFormatting | LSPMethodType.TextDocument_hover | LSPMethodType.TextDocument_signatureHelp | LSPMethodType.Workspace_DidChangeConfiguration | LSPMethodType.ShutdownRequest | LSPMethodType.Completion | LSPMethodType.Declaration | LSPMethodType.DocumentSymbols | LSPMethodType.TextDocument_publishDiagnostics | LSPMethodType.Window_showMessage | LSPMethodType.Window_showMessageRequest | LSPMethodType.Roblox_registerSyntaxCategories | LSPMethodType.Roblox_signalQuiescence | LSPMethodType.Roblox_syntaxHighlight | LSPMethodType.Roblox_suggestExtraSelections | LSPMethodType.Roblox_findExecutablePosition | LSPMethodType.Roblox_findColor3 | LSPMethodType.Roblox_patchSnippetData;
	export namespace Language {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof Language;
		}

		export const Default: Default;

		export function GetEnumItems(this: Enum): Array<Language>
	}
	export type Language = Language.Default;
	export namespace LeftRight {
		export interface Left extends EnumItem {
			Name: "Left";
			Value: 0;
			EnumType: typeof LeftRight;
		}

		export const Left: Left;

		export interface Center extends EnumItem {
			Name: "Center";
			Value: 1;
			EnumType: typeof LeftRight;
		}

		export const Center: Center;

		export interface Right extends EnumItem {
			Name: "Right";
			Value: 2;
			EnumType: typeof LeftRight;
		}

		export const Right: Right;

		export function GetEnumItems(this: Enum): Array<LeftRight>
	}
	export type LeftRight = LeftRight.Left | LeftRight.Center | LeftRight.Right;
	export namespace LevelOfDetailSetting {
		export interface High extends EnumItem {
			Name: "High";
			Value: 2;
			EnumType: typeof LevelOfDetailSetting;
		}

		export const High: High;

		export interface Medium extends EnumItem {
			Name: "Medium";
			Value: 1;
			EnumType: typeof LevelOfDetailSetting;
		}

		export const Medium: Medium;

		export interface Low extends EnumItem {
			Name: "Low";
			Value: 0;
			EnumType: typeof LevelOfDetailSetting;
		}

		export const Low: Low;

		export function GetEnumItems(this: Enum): Array<LevelOfDetailSetting>
	}
	export type LevelOfDetailSetting = LevelOfDetailSetting.High | LevelOfDetailSetting.Medium | LevelOfDetailSetting.Low;
	export namespace Limb {
		export interface Head extends EnumItem {
			Name: "Head";
			Value: 0;
			EnumType: typeof Limb;
		}

		export const Head: Head;

		export interface Torso extends EnumItem {
			Name: "Torso";
			Value: 1;
			EnumType: typeof Limb;
		}

		export const Torso: Torso;

		export interface LeftArm extends EnumItem {
			Name: "LeftArm";
			Value: 2;
			EnumType: typeof Limb;
		}

		export const LeftArm: LeftArm;

		export interface RightArm extends EnumItem {
			Name: "RightArm";
			Value: 3;
			EnumType: typeof Limb;
		}

		export const RightArm: RightArm;

		export interface LeftLeg extends EnumItem {
			Name: "LeftLeg";
			Value: 4;
			EnumType: typeof Limb;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg extends EnumItem {
			Name: "RightLeg";
			Value: 5;
			EnumType: typeof Limb;
		}

		export const RightLeg: RightLeg;

		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 6;
			EnumType: typeof Limb;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: Enum): Array<Limb>
	}
	export type Limb = Limb.Head | Limb.Torso | Limb.LeftArm | Limb.RightArm | Limb.LeftLeg | Limb.RightLeg | Limb.Unknown;
	export namespace LineJoinMode {
		export interface Round extends EnumItem {
			Name: "Round";
			Value: 0;
			EnumType: typeof LineJoinMode;
		}

		export const Round: Round;

		export interface Bevel extends EnumItem {
			Name: "Bevel";
			Value: 1;
			EnumType: typeof LineJoinMode;
		}

		export const Bevel: Bevel;

		export interface Miter extends EnumItem {
			Name: "Miter";
			Value: 2;
			EnumType: typeof LineJoinMode;
		}

		export const Miter: Miter;

		export function GetEnumItems(this: Enum): Array<LineJoinMode>
	}
	export type LineJoinMode = LineJoinMode.Round | LineJoinMode.Bevel | LineJoinMode.Miter;
	export namespace ListDisplayMode {
		export interface Horizontal extends EnumItem {
			Name: "Horizontal";
			Value: 0;
			EnumType: typeof ListDisplayMode;
		}

		export const Horizontal: Horizontal;

		export interface Vertical extends EnumItem {
			Name: "Vertical";
			Value: 1;
			EnumType: typeof ListDisplayMode;
		}

		export const Vertical: Vertical;

		export function GetEnumItems(this: Enum): Array<ListDisplayMode>
	}
	export type ListDisplayMode = ListDisplayMode.Horizontal | ListDisplayMode.Vertical;
	export namespace ListenerType {
		export interface Camera extends EnumItem {
			Name: "Camera";
			Value: 0;
			EnumType: typeof ListenerType;
		}

		export const Camera: Camera;

		export interface CFrame extends EnumItem {
			Name: "CFrame";
			Value: 1;
			EnumType: typeof ListenerType;
		}

		export const CFrame: CFrame;

		export interface ObjectPosition extends EnumItem {
			Name: "ObjectPosition";
			Value: 2;
			EnumType: typeof ListenerType;
		}

		export const ObjectPosition: ObjectPosition;

		export interface ObjectCFrame extends EnumItem {
			Name: "ObjectCFrame";
			Value: 3;
			EnumType: typeof ListenerType;
		}

		export const ObjectCFrame: ObjectCFrame;

		export function GetEnumItems(this: Enum): Array<ListenerType>
	}
	export type ListenerType = ListenerType.Camera | ListenerType.CFrame | ListenerType.ObjectPosition | ListenerType.ObjectCFrame;
	export namespace LoadCharacterLayeredClothing {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof LoadCharacterLayeredClothing;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof LoadCharacterLayeredClothing;
		}

		export const Disabled: Disabled;

		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof LoadCharacterLayeredClothing;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: Enum): Array<LoadCharacterLayeredClothing>
	}
	export type LoadCharacterLayeredClothing = LoadCharacterLayeredClothing.Default | LoadCharacterLayeredClothing.Disabled | LoadCharacterLayeredClothing.Enabled;
	export namespace LoadDynamicHeads {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof LoadDynamicHeads;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof LoadDynamicHeads;
		}

		export const Disabled: Disabled;

		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof LoadDynamicHeads;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: Enum): Array<LoadDynamicHeads>
	}
	export type LoadDynamicHeads = LoadDynamicHeads.Default | LoadDynamicHeads.Disabled | LoadDynamicHeads.Enabled;
	export namespace Material {
		export interface Plastic extends EnumItem {
			Name: "Plastic";
			Value: 256;
			EnumType: typeof Material;
		}

		export const Plastic: Plastic;

		export interface Wood extends EnumItem {
			Name: "Wood";
			Value: 512;
			EnumType: typeof Material;
		}

		export const Wood: Wood;

		export interface Slate extends EnumItem {
			Name: "Slate";
			Value: 800;
			EnumType: typeof Material;
		}

		export const Slate: Slate;

		export interface Concrete extends EnumItem {
			Name: "Concrete";
			Value: 816;
			EnumType: typeof Material;
		}

		export const Concrete: Concrete;

		export interface CorrodedMetal extends EnumItem {
			Name: "CorrodedMetal";
			Value: 1040;
			EnumType: typeof Material;
		}

		export const CorrodedMetal: CorrodedMetal;

		export interface DiamondPlate extends EnumItem {
			Name: "DiamondPlate";
			Value: 1056;
			EnumType: typeof Material;
		}

		export const DiamondPlate: DiamondPlate;

		export interface Foil extends EnumItem {
			Name: "Foil";
			Value: 1072;
			EnumType: typeof Material;
		}

		export const Foil: Foil;
		/** @deprecated renamed to Foil */
		export const Aluminum: Foil;

		export interface Grass extends EnumItem {
			Name: "Grass";
			Value: 1280;
			EnumType: typeof Material;
		}

		export const Grass: Grass;

		export interface Ice extends EnumItem {
			Name: "Ice";
			Value: 1536;
			EnumType: typeof Material;
		}

		export const Ice: Ice;

		export interface Marble extends EnumItem {
			Name: "Marble";
			Value: 784;
			EnumType: typeof Material;
		}

		export const Marble: Marble;

		export interface Granite extends EnumItem {
			Name: "Granite";
			Value: 832;
			EnumType: typeof Material;
		}

		export const Granite: Granite;

		export interface Brick extends EnumItem {
			Name: "Brick";
			Value: 848;
			EnumType: typeof Material;
		}

		export const Brick: Brick;

		export interface Pebble extends EnumItem {
			Name: "Pebble";
			Value: 864;
			EnumType: typeof Material;
		}

		export const Pebble: Pebble;

		export interface Sand extends EnumItem {
			Name: "Sand";
			Value: 1296;
			EnumType: typeof Material;
		}

		export const Sand: Sand;

		export interface Fabric extends EnumItem {
			Name: "Fabric";
			Value: 1312;
			EnumType: typeof Material;
		}

		export const Fabric: Fabric;

		export interface SmoothPlastic extends EnumItem {
			Name: "SmoothPlastic";
			Value: 272;
			EnumType: typeof Material;
		}

		export const SmoothPlastic: SmoothPlastic;

		export interface Metal extends EnumItem {
			Name: "Metal";
			Value: 1088;
			EnumType: typeof Material;
		}

		export const Metal: Metal;

		export interface WoodPlanks extends EnumItem {
			Name: "WoodPlanks";
			Value: 528;
			EnumType: typeof Material;
		}

		export const WoodPlanks: WoodPlanks;

		export interface Cobblestone extends EnumItem {
			Name: "Cobblestone";
			Value: 880;
			EnumType: typeof Material;
		}

		export const Cobblestone: Cobblestone;

		export interface Air extends EnumItem {
			Name: "Air";
			Value: 1792;
			EnumType: typeof Material;
		}

		export const Air: Air;

		export interface Water extends EnumItem {
			Name: "Water";
			Value: 2048;
			EnumType: typeof Material;
		}

		export const Water: Water;

		export interface Rock extends EnumItem {
			Name: "Rock";
			Value: 896;
			EnumType: typeof Material;
		}

		export const Rock: Rock;

		export interface Glacier extends EnumItem {
			Name: "Glacier";
			Value: 1552;
			EnumType: typeof Material;
		}

		export const Glacier: Glacier;

		export interface Snow extends EnumItem {
			Name: "Snow";
			Value: 1328;
			EnumType: typeof Material;
		}

		export const Snow: Snow;

		export interface Sandstone extends EnumItem {
			Name: "Sandstone";
			Value: 912;
			EnumType: typeof Material;
		}

		export const Sandstone: Sandstone;

		export interface Mud extends EnumItem {
			Name: "Mud";
			Value: 1344;
			EnumType: typeof Material;
		}

		export const Mud: Mud;

		export interface Basalt extends EnumItem {
			Name: "Basalt";
			Value: 788;
			EnumType: typeof Material;
		}

		export const Basalt: Basalt;

		export interface Ground extends EnumItem {
			Name: "Ground";
			Value: 1360;
			EnumType: typeof Material;
		}

		export const Ground: Ground;

		export interface CrackedLava extends EnumItem {
			Name: "CrackedLava";
			Value: 804;
			EnumType: typeof Material;
		}

		export const CrackedLava: CrackedLava;

		export interface Neon extends EnumItem {
			Name: "Neon";
			Value: 288;
			EnumType: typeof Material;
		}

		export const Neon: Neon;

		export interface Glass extends EnumItem {
			Name: "Glass";
			Value: 1568;
			EnumType: typeof Material;
		}

		export const Glass: Glass;

		export interface Asphalt extends EnumItem {
			Name: "Asphalt";
			Value: 1376;
			EnumType: typeof Material;
		}

		export const Asphalt: Asphalt;

		export interface LeafyGrass extends EnumItem {
			Name: "LeafyGrass";
			Value: 1284;
			EnumType: typeof Material;
		}

		export const LeafyGrass: LeafyGrass;

		export interface Salt extends EnumItem {
			Name: "Salt";
			Value: 1392;
			EnumType: typeof Material;
		}

		export const Salt: Salt;

		export interface Limestone extends EnumItem {
			Name: "Limestone";
			Value: 820;
			EnumType: typeof Material;
		}

		export const Limestone: Limestone;

		export interface Pavement extends EnumItem {
			Name: "Pavement";
			Value: 836;
			EnumType: typeof Material;
		}

		export const Pavement: Pavement;

		export interface ForceField extends EnumItem {
			Name: "ForceField";
			Value: 1584;
			EnumType: typeof Material;
		}

		export const ForceField: ForceField;

		export function GetEnumItems(this: Enum): Array<Material>
	}
	export type Material = Material.Plastic | Material.Wood | Material.Slate | Material.Concrete | Material.CorrodedMetal | Material.DiamondPlate | Material.Foil | Material.Grass | Material.Ice | Material.Marble | Material.Granite | Material.Brick | Material.Pebble | Material.Sand | Material.Fabric | Material.SmoothPlastic | Material.Metal | Material.WoodPlanks | Material.Cobblestone | Material.Air | Material.Water | Material.Rock | Material.Glacier | Material.Snow | Material.Sandstone | Material.Mud | Material.Basalt | Material.Ground | Material.CrackedLava | Material.Neon | Material.Glass | Material.Asphalt | Material.LeafyGrass | Material.Salt | Material.Limestone | Material.Pavement | Material.ForceField;
	export namespace MaterialPattern {
		export interface Regular extends EnumItem {
			Name: "Regular";
			Value: 0;
			EnumType: typeof MaterialPattern;
		}

		export const Regular: Regular;

		export interface Organic extends EnumItem {
			Name: "Organic";
			Value: 1;
			EnumType: typeof MaterialPattern;
		}

		export const Organic: Organic;

		export function GetEnumItems(this: Enum): Array<MaterialPattern>
	}
	export type MaterialPattern = MaterialPattern.Regular | MaterialPattern.Organic;
	export namespace MembershipType {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof MembershipType;
		}

		export const None: None;

		export interface BuildersClub extends EnumItem {
			Name: "BuildersClub";
			Value: 1;
			EnumType: typeof MembershipType;
		}

		export const BuildersClub: BuildersClub;

		export interface TurboBuildersClub extends EnumItem {
			Name: "TurboBuildersClub";
			Value: 2;
			EnumType: typeof MembershipType;
		}

		export const TurboBuildersClub: TurboBuildersClub;

		export interface OutrageousBuildersClub extends EnumItem {
			Name: "OutrageousBuildersClub";
			Value: 3;
			EnumType: typeof MembershipType;
		}

		export const OutrageousBuildersClub: OutrageousBuildersClub;

		export interface Premium extends EnumItem {
			Name: "Premium";
			Value: 4;
			EnumType: typeof MembershipType;
		}

		export const Premium: Premium;

		export function GetEnumItems(this: Enum): Array<MembershipType>
	}
	export type MembershipType = MembershipType.None | MembershipType.BuildersClub | MembershipType.TurboBuildersClub | MembershipType.OutrageousBuildersClub | MembershipType.Premium;
	export namespace MeshPartDetailLevel {
		export interface DistanceBased extends EnumItem {
			Name: "DistanceBased";
			Value: 0;
			EnumType: typeof MeshPartDetailLevel;
		}

		export const DistanceBased: DistanceBased;

		export interface Level00 extends EnumItem {
			Name: "Level00";
			Value: 1;
			EnumType: typeof MeshPartDetailLevel;
		}

		export const Level00: Level00;

		export interface Level01 extends EnumItem {
			Name: "Level01";
			Value: 2;
			EnumType: typeof MeshPartDetailLevel;
		}

		export const Level01: Level01;

		export interface Level02 extends EnumItem {
			Name: "Level02";
			Value: 3;
			EnumType: typeof MeshPartDetailLevel;
		}

		export const Level02: Level02;

		export interface Level03 extends EnumItem {
			Name: "Level03";
			Value: 4;
			EnumType: typeof MeshPartDetailLevel;
		}

		export const Level03: Level03;

		export interface Level04 extends EnumItem {
			Name: "Level04";
			Value: 5;
			EnumType: typeof MeshPartDetailLevel;
		}

		export const Level04: Level04;

		export function GetEnumItems(this: Enum): Array<MeshPartDetailLevel>
	}
	export type MeshPartDetailLevel = MeshPartDetailLevel.DistanceBased | MeshPartDetailLevel.Level00 | MeshPartDetailLevel.Level01 | MeshPartDetailLevel.Level02 | MeshPartDetailLevel.Level03 | MeshPartDetailLevel.Level04;
	export namespace MeshPartHeadsAndAccessories {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof MeshPartHeadsAndAccessories;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof MeshPartHeadsAndAccessories;
		}

		export const Disabled: Disabled;

		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof MeshPartHeadsAndAccessories;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: Enum): Array<MeshPartHeadsAndAccessories>
	}
	export type MeshPartHeadsAndAccessories = MeshPartHeadsAndAccessories.Default | MeshPartHeadsAndAccessories.Disabled | MeshPartHeadsAndAccessories.Enabled;
	export namespace MeshScaleUnit {
		export interface Stud extends EnumItem {
			Name: "Stud";
			Value: 0;
			EnumType: typeof MeshScaleUnit;
		}

		export const Stud: Stud;

		export interface Meter extends EnumItem {
			Name: "Meter";
			Value: 1;
			EnumType: typeof MeshScaleUnit;
		}

		export const Meter: Meter;

		export interface CM extends EnumItem {
			Name: "CM";
			Value: 2;
			EnumType: typeof MeshScaleUnit;
		}

		export const CM: CM;

		export interface MM extends EnumItem {
			Name: "MM";
			Value: 3;
			EnumType: typeof MeshScaleUnit;
		}

		export const MM: MM;

		export interface Foot extends EnumItem {
			Name: "Foot";
			Value: 4;
			EnumType: typeof MeshScaleUnit;
		}

		export const Foot: Foot;

		export interface Inch extends EnumItem {
			Name: "Inch";
			Value: 5;
			EnumType: typeof MeshScaleUnit;
		}

		export const Inch: Inch;

		export function GetEnumItems(this: Enum): Array<MeshScaleUnit>
	}
	export type MeshScaleUnit = MeshScaleUnit.Stud | MeshScaleUnit.Meter | MeshScaleUnit.CM | MeshScaleUnit.MM | MeshScaleUnit.Foot | MeshScaleUnit.Inch;
	export namespace MeshType {
		export interface Head extends EnumItem {
			Name: "Head";
			Value: 0;
			EnumType: typeof MeshType;
		}

		export const Head: Head;

		export interface Torso extends EnumItem {
			Name: "Torso";
			Value: 1;
			EnumType: typeof MeshType;
		}

		export const Torso: Torso;

		export interface Wedge extends EnumItem {
			Name: "Wedge";
			Value: 2;
			EnumType: typeof MeshType;
		}

		export const Wedge: Wedge;

		export interface Prism extends EnumItem {
			Name: "Prism";
			Value: 7;
			EnumType: typeof MeshType;
		}

		export const Prism: Prism;

		export interface Pyramid extends EnumItem {
			Name: "Pyramid";
			Value: 8;
			EnumType: typeof MeshType;
		}

		export const Pyramid: Pyramid;

		export interface ParallelRamp extends EnumItem {
			Name: "ParallelRamp";
			Value: 9;
			EnumType: typeof MeshType;
		}

		export const ParallelRamp: ParallelRamp;

		export interface RightAngleRamp extends EnumItem {
			Name: "RightAngleRamp";
			Value: 10;
			EnumType: typeof MeshType;
		}

		export const RightAngleRamp: RightAngleRamp;

		export interface CornerWedge extends EnumItem {
			Name: "CornerWedge";
			Value: 11;
			EnumType: typeof MeshType;
		}

		export const CornerWedge: CornerWedge;

		export interface Brick extends EnumItem {
			Name: "Brick";
			Value: 6;
			EnumType: typeof MeshType;
		}

		export const Brick: Brick;

		export interface Sphere extends EnumItem {
			Name: "Sphere";
			Value: 3;
			EnumType: typeof MeshType;
		}

		export const Sphere: Sphere;

		export interface Cylinder extends EnumItem {
			Name: "Cylinder";
			Value: 4;
			EnumType: typeof MeshType;
		}

		export const Cylinder: Cylinder;

		export interface FileMesh extends EnumItem {
			Name: "FileMesh";
			Value: 5;
			EnumType: typeof MeshType;
		}

		export const FileMesh: FileMesh;

		export function GetEnumItems(this: Enum): Array<MeshType>
	}
	export type MeshType = MeshType.Head | MeshType.Torso | MeshType.Wedge | MeshType.Prism | MeshType.Pyramid | MeshType.ParallelRamp | MeshType.RightAngleRamp | MeshType.CornerWedge | MeshType.Brick | MeshType.Sphere | MeshType.Cylinder | MeshType.FileMesh;
	export namespace MessageType {
		export interface MessageOutput extends EnumItem {
			Name: "MessageOutput";
			Value: 0;
			EnumType: typeof MessageType;
		}

		export const MessageOutput: MessageOutput;

		export interface MessageInfo extends EnumItem {
			Name: "MessageInfo";
			Value: 1;
			EnumType: typeof MessageType;
		}

		export const MessageInfo: MessageInfo;

		export interface MessageWarning extends EnumItem {
			Name: "MessageWarning";
			Value: 2;
			EnumType: typeof MessageType;
		}

		export const MessageWarning: MessageWarning;

		export interface MessageError extends EnumItem {
			Name: "MessageError";
			Value: 3;
			EnumType: typeof MessageType;
		}

		export const MessageError: MessageError;

		export function GetEnumItems(this: Enum): Array<MessageType>
	}
	export type MessageType = MessageType.MessageOutput | MessageType.MessageInfo | MessageType.MessageWarning | MessageType.MessageError;
	export namespace ModelLevelOfDetail {
		export interface Automatic extends EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof ModelLevelOfDetail;
		}

		export const Automatic: Automatic;

		export interface StreamingMesh extends EnumItem {
			Name: "StreamingMesh";
			Value: 1;
			EnumType: typeof ModelLevelOfDetail;
		}

		export const StreamingMesh: StreamingMesh;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 2;
			EnumType: typeof ModelLevelOfDetail;
		}

		export const Disabled: Disabled;

		export function GetEnumItems(this: Enum): Array<ModelLevelOfDetail>
	}
	export type ModelLevelOfDetail = ModelLevelOfDetail.Automatic | ModelLevelOfDetail.StreamingMesh | ModelLevelOfDetail.Disabled;
	export namespace ModifierKey {
		export interface Alt extends EnumItem {
			Name: "Alt";
			Value: 2;
			EnumType: typeof ModifierKey;
		}

		export const Alt: Alt;

		export interface Ctrl extends EnumItem {
			Name: "Ctrl";
			Value: 1;
			EnumType: typeof ModifierKey;
		}

		export const Ctrl: Ctrl;

		export interface Meta extends EnumItem {
			Name: "Meta";
			Value: 3;
			EnumType: typeof ModifierKey;
		}

		export const Meta: Meta;

		export interface Shift extends EnumItem {
			Name: "Shift";
			Value: 0;
			EnumType: typeof ModifierKey;
		}

		export const Shift: Shift;

		export function GetEnumItems(this: Enum): Array<ModifierKey>
	}
	export type ModifierKey = ModifierKey.Alt | ModifierKey.Ctrl | ModifierKey.Meta | ModifierKey.Shift;
	export namespace MouseBehavior {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof MouseBehavior;
		}

		export const Default: Default;

		export interface LockCenter extends EnumItem {
			Name: "LockCenter";
			Value: 1;
			EnumType: typeof MouseBehavior;
		}

		export const LockCenter: LockCenter;

		export interface LockCurrentPosition extends EnumItem {
			Name: "LockCurrentPosition";
			Value: 2;
			EnumType: typeof MouseBehavior;
		}

		export const LockCurrentPosition: LockCurrentPosition;

		export function GetEnumItems(this: Enum): Array<MouseBehavior>
	}
	export type MouseBehavior = MouseBehavior.Default | MouseBehavior.LockCenter | MouseBehavior.LockCurrentPosition;
	export namespace MoveState {
		export interface Stopped extends EnumItem {
			Name: "Stopped";
			Value: 0;
			EnumType: typeof MoveState;
		}

		export const Stopped: Stopped;

		export interface Coasting extends EnumItem {
			Name: "Coasting";
			Value: 1;
			EnumType: typeof MoveState;
		}

		export const Coasting: Coasting;

		export interface Pushing extends EnumItem {
			Name: "Pushing";
			Value: 2;
			EnumType: typeof MoveState;
		}

		export const Pushing: Pushing;

		export interface Stopping extends EnumItem {
			Name: "Stopping";
			Value: 3;
			EnumType: typeof MoveState;
		}

		export const Stopping: Stopping;

		export interface AirFree extends EnumItem {
			Name: "AirFree";
			Value: 4;
			EnumType: typeof MoveState;
		}

		export const AirFree: AirFree;

		export function GetEnumItems(this: Enum): Array<MoveState>
	}
	export type MoveState = MoveState.Stopped | MoveState.Coasting | MoveState.Pushing | MoveState.Stopping | MoveState.AirFree;
	export namespace NameOcclusion {
		export interface OccludeAll extends EnumItem {
			Name: "OccludeAll";
			Value: 2;
			EnumType: typeof NameOcclusion;
		}

		export const OccludeAll: OccludeAll;

		export interface EnemyOcclusion extends EnumItem {
			Name: "EnemyOcclusion";
			Value: 1;
			EnumType: typeof NameOcclusion;
		}

		export const EnemyOcclusion: EnemyOcclusion;

		export interface NoOcclusion extends EnumItem {
			Name: "NoOcclusion";
			Value: 0;
			EnumType: typeof NameOcclusion;
		}

		export const NoOcclusion: NoOcclusion;

		export function GetEnumItems(this: Enum): Array<NameOcclusion>
	}
	export type NameOcclusion = NameOcclusion.OccludeAll | NameOcclusion.EnemyOcclusion | NameOcclusion.NoOcclusion;
	export namespace NetworkOwnership {
		export interface Automatic extends EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof NetworkOwnership;
		}

		export const Automatic: Automatic;

		export interface Manual extends EnumItem {
			Name: "Manual";
			Value: 1;
			EnumType: typeof NetworkOwnership;
		}

		export const Manual: Manual;

		export interface OnContact extends EnumItem {
			Name: "OnContact";
			Value: 2;
			EnumType: typeof NetworkOwnership;
		}

		export const OnContact: OnContact;

		export function GetEnumItems(this: Enum): Array<NetworkOwnership>
	}
	export type NetworkOwnership = NetworkOwnership.Automatic | NetworkOwnership.Manual | NetworkOwnership.OnContact;
	export namespace NewAnimationRuntimeSetting {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof NewAnimationRuntimeSetting;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof NewAnimationRuntimeSetting;
		}

		export const Disabled: Disabled;

		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof NewAnimationRuntimeSetting;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: Enum): Array<NewAnimationRuntimeSetting>
	}
	export type NewAnimationRuntimeSetting = NewAnimationRuntimeSetting.Default | NewAnimationRuntimeSetting.Disabled | NewAnimationRuntimeSetting.Enabled;
	export namespace NormalId {
		export interface Top extends EnumItem {
			Name: "Top";
			Value: 1;
			EnumType: typeof NormalId;
		}

		export const Top: Top;

		export interface Bottom extends EnumItem {
			Name: "Bottom";
			Value: 4;
			EnumType: typeof NormalId;
		}

		export const Bottom: Bottom;

		export interface Back extends EnumItem {
			Name: "Back";
			Value: 2;
			EnumType: typeof NormalId;
		}

		export const Back: Back;

		export interface Front extends EnumItem {
			Name: "Front";
			Value: 5;
			EnumType: typeof NormalId;
		}

		export const Front: Front;

		export interface Right extends EnumItem {
			Name: "Right";
			Value: 0;
			EnumType: typeof NormalId;
		}

		export const Right: Right;

		export interface Left extends EnumItem {
			Name: "Left";
			Value: 3;
			EnumType: typeof NormalId;
		}

		export const Left: Left;

		export function GetEnumItems(this: Enum): Array<NormalId>
	}
	export type NormalId = NormalId.Top | NormalId.Bottom | NormalId.Back | NormalId.Front | NormalId.Right | NormalId.Left;
	export namespace OrientationAlignmentMode {
		export interface OneAttachment extends EnumItem {
			Name: "OneAttachment";
			Value: 0;
			EnumType: typeof OrientationAlignmentMode;
		}

		export const OneAttachment: OneAttachment;

		export interface TwoAttachment extends EnumItem {
			Name: "TwoAttachment";
			Value: 1;
			EnumType: typeof OrientationAlignmentMode;
		}

		export const TwoAttachment: TwoAttachment;

		export function GetEnumItems(this: Enum): Array<OrientationAlignmentMode>
	}
	export type OrientationAlignmentMode = OrientationAlignmentMode.OneAttachment | OrientationAlignmentMode.TwoAttachment;
	export namespace OutfitSource {
		export interface All extends EnumItem {
			Name: "All";
			Value: 1;
			EnumType: typeof OutfitSource;
		}

		export const All: All;

		export interface Created extends EnumItem {
			Name: "Created";
			Value: 2;
			EnumType: typeof OutfitSource;
		}

		export const Created: Created;

		export interface Purchased extends EnumItem {
			Name: "Purchased";
			Value: 3;
			EnumType: typeof OutfitSource;
		}

		export const Purchased: Purchased;

		export function GetEnumItems(this: Enum): Array<OutfitSource>
	}
	export type OutfitSource = OutfitSource.All | OutfitSource.Created | OutfitSource.Purchased;
	export namespace OutfitType {
		export interface All extends EnumItem {
			Name: "All";
			Value: 1;
			EnumType: typeof OutfitType;
		}

		export const All: All;

		export interface Avatar extends EnumItem {
			Name: "Avatar";
			Value: 2;
			EnumType: typeof OutfitType;
		}

		export const Avatar: Avatar;

		export interface DynamicHead extends EnumItem {
			Name: "DynamicHead";
			Value: 3;
			EnumType: typeof OutfitType;
		}

		export const DynamicHead: DynamicHead;

		export function GetEnumItems(this: Enum): Array<OutfitType>
	}
	export type OutfitType = OutfitType.All | OutfitType.Avatar | OutfitType.DynamicHead;
	export namespace OutputLayoutMode {
		export interface Horizontal extends EnumItem {
			Name: "Horizontal";
			Value: 0;
			EnumType: typeof OutputLayoutMode;
		}

		export const Horizontal: Horizontal;

		export interface Vertical extends EnumItem {
			Name: "Vertical";
			Value: 1;
			EnumType: typeof OutputLayoutMode;
		}

		export const Vertical: Vertical;

		export function GetEnumItems(this: Enum): Array<OutputLayoutMode>
	}
	export type OutputLayoutMode = OutputLayoutMode.Horizontal | OutputLayoutMode.Vertical;
	export namespace OverrideMouseIconBehavior {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof OverrideMouseIconBehavior;
		}

		export const None: None;

		export interface ForceShow extends EnumItem {
			Name: "ForceShow";
			Value: 1;
			EnumType: typeof OverrideMouseIconBehavior;
		}

		export const ForceShow: ForceShow;

		export interface ForceHide extends EnumItem {
			Name: "ForceHide";
			Value: 2;
			EnumType: typeof OverrideMouseIconBehavior;
		}

		export const ForceHide: ForceHide;

		export function GetEnumItems(this: Enum): Array<OverrideMouseIconBehavior>
	}
	export type OverrideMouseIconBehavior = OverrideMouseIconBehavior.None | OverrideMouseIconBehavior.ForceShow | OverrideMouseIconBehavior.ForceHide;
	export namespace PackagePermission {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof PackagePermission;
		}

		export const None: None;

		export interface NoAccess extends EnumItem {
			Name: "NoAccess";
			Value: 1;
			EnumType: typeof PackagePermission;
		}

		export const NoAccess: NoAccess;

		export interface Revoked extends EnumItem {
			Name: "Revoked";
			Value: 2;
			EnumType: typeof PackagePermission;
		}

		export const Revoked: Revoked;

		export interface UseView extends EnumItem {
			Name: "UseView";
			Value: 3;
			EnumType: typeof PackagePermission;
		}

		export const UseView: UseView;

		export interface Edit extends EnumItem {
			Name: "Edit";
			Value: 4;
			EnumType: typeof PackagePermission;
		}

		export const Edit: Edit;

		export interface Own extends EnumItem {
			Name: "Own";
			Value: 5;
			EnumType: typeof PackagePermission;
		}

		export const Own: Own;

		export function GetEnumItems(this: Enum): Array<PackagePermission>
	}
	export type PackagePermission = PackagePermission.None | PackagePermission.NoAccess | PackagePermission.Revoked | PackagePermission.UseView | PackagePermission.Edit | PackagePermission.Own;
	export namespace PartType {
		export interface Ball extends EnumItem {
			Name: "Ball";
			Value: 0;
			EnumType: typeof PartType;
		}

		export const Ball: Ball;

		export interface Block extends EnumItem {
			Name: "Block";
			Value: 1;
			EnumType: typeof PartType;
		}

		export const Block: Block;

		export interface Cylinder extends EnumItem {
			Name: "Cylinder";
			Value: 2;
			EnumType: typeof PartType;
		}

		export const Cylinder: Cylinder;

		export function GetEnumItems(this: Enum): Array<PartType>
	}
	export type PartType = PartType.Ball | PartType.Block | PartType.Cylinder;
	export namespace ParticleEmitterShape {
		export interface Box extends EnumItem {
			Name: "Box";
			Value: 0;
			EnumType: typeof ParticleEmitterShape;
		}

		export const Box: Box;

		export interface Sphere extends EnumItem {
			Name: "Sphere";
			Value: 1;
			EnumType: typeof ParticleEmitterShape;
		}

		export const Sphere: Sphere;

		export interface Cylinder extends EnumItem {
			Name: "Cylinder";
			Value: 2;
			EnumType: typeof ParticleEmitterShape;
		}

		export const Cylinder: Cylinder;

		export interface Disc extends EnumItem {
			Name: "Disc";
			Value: 3;
			EnumType: typeof ParticleEmitterShape;
		}

		export const Disc: Disc;

		export function GetEnumItems(this: Enum): Array<ParticleEmitterShape>
	}
	export type ParticleEmitterShape = ParticleEmitterShape.Box | ParticleEmitterShape.Sphere | ParticleEmitterShape.Cylinder | ParticleEmitterShape.Disc;
	export namespace ParticleEmitterShapeInOut {
		export interface Outward extends EnumItem {
			Name: "Outward";
			Value: 0;
			EnumType: typeof ParticleEmitterShapeInOut;
		}

		export const Outward: Outward;

		export interface Inward extends EnumItem {
			Name: "Inward";
			Value: 1;
			EnumType: typeof ParticleEmitterShapeInOut;
		}

		export const Inward: Inward;

		export interface InAndOut extends EnumItem {
			Name: "InAndOut";
			Value: 2;
			EnumType: typeof ParticleEmitterShapeInOut;
		}

		export const InAndOut: InAndOut;

		export function GetEnumItems(this: Enum): Array<ParticleEmitterShapeInOut>
	}
	export type ParticleEmitterShapeInOut = ParticleEmitterShapeInOut.Outward | ParticleEmitterShapeInOut.Inward | ParticleEmitterShapeInOut.InAndOut;
	export namespace ParticleEmitterShapeStyle {
		export interface Volume extends EnumItem {
			Name: "Volume";
			Value: 0;
			EnumType: typeof ParticleEmitterShapeStyle;
		}

		export const Volume: Volume;

		export interface Surface extends EnumItem {
			Name: "Surface";
			Value: 1;
			EnumType: typeof ParticleEmitterShapeStyle;
		}

		export const Surface: Surface;

		export function GetEnumItems(this: Enum): Array<ParticleEmitterShapeStyle>
	}
	export type ParticleEmitterShapeStyle = ParticleEmitterShapeStyle.Volume | ParticleEmitterShapeStyle.Surface;
	export namespace ParticleFlipbookLayout {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof ParticleFlipbookLayout;
		}

		export const None: None;

		export interface TwoByTwo extends EnumItem {
			Name: "TwoByTwo";
			Value: 1;
			EnumType: typeof ParticleFlipbookLayout;
		}

		export const TwoByTwo: TwoByTwo;

		export interface FourByFour extends EnumItem {
			Name: "FourByFour";
			Value: 2;
			EnumType: typeof ParticleFlipbookLayout;
		}

		export const FourByFour: FourByFour;

		export interface EightByEight extends EnumItem {
			Name: "EightByEight";
			Value: 3;
			EnumType: typeof ParticleFlipbookLayout;
		}

		export const EightByEight: EightByEight;

		export function GetEnumItems(this: Enum): Array<ParticleFlipbookLayout>
	}
	export type ParticleFlipbookLayout = ParticleFlipbookLayout.None | ParticleFlipbookLayout.TwoByTwo | ParticleFlipbookLayout.FourByFour | ParticleFlipbookLayout.EightByEight;
	export namespace ParticleFlipbookMode {
		export interface Loop extends EnumItem {
			Name: "Loop";
			Value: 0;
			EnumType: typeof ParticleFlipbookMode;
		}

		export const Loop: Loop;

		export interface OneShot extends EnumItem {
			Name: "OneShot";
			Value: 1;
			EnumType: typeof ParticleFlipbookMode;
		}

		export const OneShot: OneShot;

		export interface PingPong extends EnumItem {
			Name: "PingPong";
			Value: 2;
			EnumType: typeof ParticleFlipbookMode;
		}

		export const PingPong: PingPong;

		export interface Random extends EnumItem {
			Name: "Random";
			Value: 3;
			EnumType: typeof ParticleFlipbookMode;
		}

		export const Random: Random;

		export function GetEnumItems(this: Enum): Array<ParticleFlipbookMode>
	}
	export type ParticleFlipbookMode = ParticleFlipbookMode.Loop | ParticleFlipbookMode.OneShot | ParticleFlipbookMode.PingPong | ParticleFlipbookMode.Random;
	export namespace ParticleOrientation {
		export interface FacingCamera extends EnumItem {
			Name: "FacingCamera";
			Value: 0;
			EnumType: typeof ParticleOrientation;
		}

		export const FacingCamera: FacingCamera;

		export interface FacingCameraWorldUp extends EnumItem {
			Name: "FacingCameraWorldUp";
			Value: 1;
			EnumType: typeof ParticleOrientation;
		}

		export const FacingCameraWorldUp: FacingCameraWorldUp;

		export interface VelocityParallel extends EnumItem {
			Name: "VelocityParallel";
			Value: 2;
			EnumType: typeof ParticleOrientation;
		}

		export const VelocityParallel: VelocityParallel;

		export interface VelocityPerpendicular extends EnumItem {
			Name: "VelocityPerpendicular";
			Value: 3;
			EnumType: typeof ParticleOrientation;
		}

		export const VelocityPerpendicular: VelocityPerpendicular;

		export function GetEnumItems(this: Enum): Array<ParticleOrientation>
	}
	export type ParticleOrientation = ParticleOrientation.FacingCamera | ParticleOrientation.FacingCameraWorldUp | ParticleOrientation.VelocityParallel | ParticleOrientation.VelocityPerpendicular;
	export namespace PathStatus {
		export interface Success extends EnumItem {
			Name: "Success";
			Value: 0;
			EnumType: typeof PathStatus;
		}

		export const Success: Success;

		export interface ClosestNoPath extends EnumItem {
			Name: "ClosestNoPath";
			Value: 1;
			EnumType: typeof PathStatus;
		}

		export const ClosestNoPath: ClosestNoPath;

		export interface ClosestOutOfRange extends EnumItem {
			Name: "ClosestOutOfRange";
			Value: 2;
			EnumType: typeof PathStatus;
		}

		export const ClosestOutOfRange: ClosestOutOfRange;

		export interface FailStartNotEmpty extends EnumItem {
			Name: "FailStartNotEmpty";
			Value: 3;
			EnumType: typeof PathStatus;
		}

		export const FailStartNotEmpty: FailStartNotEmpty;

		export interface FailFinishNotEmpty extends EnumItem {
			Name: "FailFinishNotEmpty";
			Value: 4;
			EnumType: typeof PathStatus;
		}

		export const FailFinishNotEmpty: FailFinishNotEmpty;

		export interface NoPath extends EnumItem {
			Name: "NoPath";
			Value: 5;
			EnumType: typeof PathStatus;
		}

		export const NoPath: NoPath;

		export function GetEnumItems(this: Enum): Array<PathStatus>
	}
	export type PathStatus = PathStatus.Success | PathStatus.ClosestNoPath | PathStatus.ClosestOutOfRange | PathStatus.FailStartNotEmpty | PathStatus.FailFinishNotEmpty | PathStatus.NoPath;
	export namespace PathWaypointAction {
		export interface Walk extends EnumItem {
			Name: "Walk";
			Value: 0;
			EnumType: typeof PathWaypointAction;
		}

		export const Walk: Walk;

		export interface Jump extends EnumItem {
			Name: "Jump";
			Value: 1;
			EnumType: typeof PathWaypointAction;
		}

		export const Jump: Jump;

		export interface Custom extends EnumItem {
			Name: "Custom";
			Value: 2;
			EnumType: typeof PathWaypointAction;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: Enum): Array<PathWaypointAction>
	}
	export type PathWaypointAction = PathWaypointAction.Walk | PathWaypointAction.Jump | PathWaypointAction.Custom;
	export namespace PermissionLevelShown {
		export interface Game extends EnumItem {
			Name: "Game";
			Value: 0;
			EnumType: typeof PermissionLevelShown;
		}

		export const Game: Game;

		export interface RobloxGame extends EnumItem {
			Name: "RobloxGame";
			Value: 1;
			EnumType: typeof PermissionLevelShown;
		}

		export const RobloxGame: RobloxGame;

		export interface RobloxScript extends EnumItem {
			Name: "RobloxScript";
			Value: 2;
			EnumType: typeof PermissionLevelShown;
		}

		export const RobloxScript: RobloxScript;

		export interface Studio extends EnumItem {
			Name: "Studio";
			Value: 3;
			EnumType: typeof PermissionLevelShown;
		}

		export const Studio: Studio;

		export interface Roblox extends EnumItem {
			Name: "Roblox";
			Value: 4;
			EnumType: typeof PermissionLevelShown;
		}

		export const Roblox: Roblox;

		export function GetEnumItems(this: Enum): Array<PermissionLevelShown>
	}
	export type PermissionLevelShown = PermissionLevelShown.Game | PermissionLevelShown.RobloxGame | PermissionLevelShown.RobloxScript | PermissionLevelShown.Studio | PermissionLevelShown.Roblox;
	export namespace PhysicsSimulationRate {
		export interface Fixed240Hz extends EnumItem {
			Name: "Fixed240Hz";
			Value: 0;
			EnumType: typeof PhysicsSimulationRate;
		}

		export const Fixed240Hz: Fixed240Hz;

		export interface Fixed120Hz extends EnumItem {
			Name: "Fixed120Hz";
			Value: 1;
			EnumType: typeof PhysicsSimulationRate;
		}

		export const Fixed120Hz: Fixed120Hz;

		export interface Fixed60Hz extends EnumItem {
			Name: "Fixed60Hz";
			Value: 2;
			EnumType: typeof PhysicsSimulationRate;
		}

		export const Fixed60Hz: Fixed60Hz;

		export function GetEnumItems(this: Enum): Array<PhysicsSimulationRate>
	}
	export type PhysicsSimulationRate = PhysicsSimulationRate.Fixed240Hz | PhysicsSimulationRate.Fixed120Hz | PhysicsSimulationRate.Fixed60Hz;
	export namespace PhysicsSteppingMethod {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof PhysicsSteppingMethod;
		}

		export const Default: Default;

		export interface Fixed extends EnumItem {
			Name: "Fixed";
			Value: 1;
			EnumType: typeof PhysicsSteppingMethod;
		}

		export const Fixed: Fixed;

		export interface Adaptive extends EnumItem {
			Name: "Adaptive";
			Value: 2;
			EnumType: typeof PhysicsSteppingMethod;
		}

		export const Adaptive: Adaptive;

		export function GetEnumItems(this: Enum): Array<PhysicsSteppingMethod>
	}
	export type PhysicsSteppingMethod = PhysicsSteppingMethod.Default | PhysicsSteppingMethod.Fixed | PhysicsSteppingMethod.Adaptive;
	export namespace Platform {
		export interface Windows extends EnumItem {
			Name: "Windows";
			Value: 0;
			EnumType: typeof Platform;
		}

		export const Windows: Windows;

		export interface OSX extends EnumItem {
			Name: "OSX";
			Value: 1;
			EnumType: typeof Platform;
		}

		export const OSX: OSX;

		export interface IOS extends EnumItem {
			Name: "IOS";
			Value: 2;
			EnumType: typeof Platform;
		}

		export const IOS: IOS;

		export interface Android extends EnumItem {
			Name: "Android";
			Value: 3;
			EnumType: typeof Platform;
		}

		export const Android: Android;

		export interface XBoxOne extends EnumItem {
			Name: "XBoxOne";
			Value: 4;
			EnumType: typeof Platform;
		}

		export const XBoxOne: XBoxOne;

		export interface PS4 extends EnumItem {
			Name: "PS4";
			Value: 5;
			EnumType: typeof Platform;
		}

		export const PS4: PS4;

		export interface PS3 extends EnumItem {
			Name: "PS3";
			Value: 6;
			EnumType: typeof Platform;
		}

		export const PS3: PS3;

		export interface XBox360 extends EnumItem {
			Name: "XBox360";
			Value: 7;
			EnumType: typeof Platform;
		}

		export const XBox360: XBox360;

		export interface WiiU extends EnumItem {
			Name: "WiiU";
			Value: 8;
			EnumType: typeof Platform;
		}

		export const WiiU: WiiU;

		export interface NX extends EnumItem {
			Name: "NX";
			Value: 9;
			EnumType: typeof Platform;
		}

		export const NX: NX;

		export interface Ouya extends EnumItem {
			Name: "Ouya";
			Value: 10;
			EnumType: typeof Platform;
		}

		export const Ouya: Ouya;

		export interface AndroidTV extends EnumItem {
			Name: "AndroidTV";
			Value: 11;
			EnumType: typeof Platform;
		}

		export const AndroidTV: AndroidTV;

		export interface Chromecast extends EnumItem {
			Name: "Chromecast";
			Value: 12;
			EnumType: typeof Platform;
		}

		export const Chromecast: Chromecast;

		export interface Linux extends EnumItem {
			Name: "Linux";
			Value: 13;
			EnumType: typeof Platform;
		}

		export const Linux: Linux;

		export interface SteamOS extends EnumItem {
			Name: "SteamOS";
			Value: 14;
			EnumType: typeof Platform;
		}

		export const SteamOS: SteamOS;

		export interface WebOS extends EnumItem {
			Name: "WebOS";
			Value: 15;
			EnumType: typeof Platform;
		}

		export const WebOS: WebOS;

		export interface DOS extends EnumItem {
			Name: "DOS";
			Value: 16;
			EnumType: typeof Platform;
		}

		export const DOS: DOS;

		export interface BeOS extends EnumItem {
			Name: "BeOS";
			Value: 17;
			EnumType: typeof Platform;
		}

		export const BeOS: BeOS;

		export interface UWP extends EnumItem {
			Name: "UWP";
			Value: 18;
			EnumType: typeof Platform;
		}

		export const UWP: UWP;

		export interface None extends EnumItem {
			Name: "None";
			Value: 19;
			EnumType: typeof Platform;
		}

		export const None: None;

		export function GetEnumItems(this: Enum): Array<Platform>
	}
	export type Platform = Platform.Windows | Platform.OSX | Platform.IOS | Platform.Android | Platform.XBoxOne | Platform.PS4 | Platform.PS3 | Platform.XBox360 | Platform.WiiU | Platform.NX | Platform.Ouya | Platform.AndroidTV | Platform.Chromecast | Platform.Linux | Platform.SteamOS | Platform.WebOS | Platform.DOS | Platform.BeOS | Platform.UWP | Platform.None;
	export namespace PlaybackState {
		export interface Begin extends EnumItem {
			Name: "Begin";
			Value: 0;
			EnumType: typeof PlaybackState;
		}

		export const Begin: Begin;

		export interface Delayed extends EnumItem {
			Name: "Delayed";
			Value: 1;
			EnumType: typeof PlaybackState;
		}

		export const Delayed: Delayed;

		export interface Playing extends EnumItem {
			Name: "Playing";
			Value: 2;
			EnumType: typeof PlaybackState;
		}

		export const Playing: Playing;

		export interface Paused extends EnumItem {
			Name: "Paused";
			Value: 3;
			EnumType: typeof PlaybackState;
		}

		export const Paused: Paused;

		export interface Completed extends EnumItem {
			Name: "Completed";
			Value: 4;
			EnumType: typeof PlaybackState;
		}

		export const Completed: Completed;

		export interface Cancelled extends EnumItem {
			Name: "Cancelled";
			Value: 5;
			EnumType: typeof PlaybackState;
		}

		export const Cancelled: Cancelled;

		export function GetEnumItems(this: Enum): Array<PlaybackState>
	}
	export type PlaybackState = PlaybackState.Begin | PlaybackState.Delayed | PlaybackState.Playing | PlaybackState.Paused | PlaybackState.Completed | PlaybackState.Cancelled;
	export namespace PlayerActions {
		export interface CharacterForward extends EnumItem {
			Name: "CharacterForward";
			Value: 0;
			EnumType: typeof PlayerActions;
		}

		export const CharacterForward: CharacterForward;

		export interface CharacterBackward extends EnumItem {
			Name: "CharacterBackward";
			Value: 1;
			EnumType: typeof PlayerActions;
		}

		export const CharacterBackward: CharacterBackward;

		export interface CharacterLeft extends EnumItem {
			Name: "CharacterLeft";
			Value: 2;
			EnumType: typeof PlayerActions;
		}

		export const CharacterLeft: CharacterLeft;

		export interface CharacterRight extends EnumItem {
			Name: "CharacterRight";
			Value: 3;
			EnumType: typeof PlayerActions;
		}

		export const CharacterRight: CharacterRight;

		export interface CharacterJump extends EnumItem {
			Name: "CharacterJump";
			Value: 4;
			EnumType: typeof PlayerActions;
		}

		export const CharacterJump: CharacterJump;

		export function GetEnumItems(this: Enum): Array<PlayerActions>
	}
	export type PlayerActions = PlayerActions.CharacterForward | PlayerActions.CharacterBackward | PlayerActions.CharacterLeft | PlayerActions.CharacterRight | PlayerActions.CharacterJump;
	export namespace PlayerChatType {
		export interface All extends EnumItem {
			Name: "All";
			Value: 0;
			EnumType: typeof PlayerChatType;
		}

		export const All: All;

		export interface Team extends EnumItem {
			Name: "Team";
			Value: 1;
			EnumType: typeof PlayerChatType;
		}

		export const Team: Team;

		export interface Whisper extends EnumItem {
			Name: "Whisper";
			Value: 2;
			EnumType: typeof PlayerChatType;
		}

		export const Whisper: Whisper;

		export function GetEnumItems(this: Enum): Array<PlayerChatType>
	}
	export type PlayerChatType = PlayerChatType.All | PlayerChatType.Team | PlayerChatType.Whisper;
	export namespace PoseEasingDirection {
		export interface Out extends EnumItem {
			Name: "Out";
			Value: 1;
			EnumType: typeof PoseEasingDirection;
		}

		export const Out: Out;

		export interface InOut extends EnumItem {
			Name: "InOut";
			Value: 2;
			EnumType: typeof PoseEasingDirection;
		}

		export const InOut: InOut;

		export interface In extends EnumItem {
			Name: "In";
			Value: 0;
			EnumType: typeof PoseEasingDirection;
		}

		export const In: In;

		export function GetEnumItems(this: Enum): Array<PoseEasingDirection>
	}
	export type PoseEasingDirection = PoseEasingDirection.Out | PoseEasingDirection.InOut | PoseEasingDirection.In;
	export namespace PoseEasingStyle {
		export interface Linear extends EnumItem {
			Name: "Linear";
			Value: 0;
			EnumType: typeof PoseEasingStyle;
		}

		export const Linear: Linear;

		export interface Constant extends EnumItem {
			Name: "Constant";
			Value: 1;
			EnumType: typeof PoseEasingStyle;
		}

		export const Constant: Constant;

		export interface Elastic extends EnumItem {
			Name: "Elastic";
			Value: 2;
			EnumType: typeof PoseEasingStyle;
		}

		export const Elastic: Elastic;

		export interface Cubic extends EnumItem {
			Name: "Cubic";
			Value: 3;
			EnumType: typeof PoseEasingStyle;
		}

		export const Cubic: Cubic;

		export interface Bounce extends EnumItem {
			Name: "Bounce";
			Value: 4;
			EnumType: typeof PoseEasingStyle;
		}

		export const Bounce: Bounce;

		export function GetEnumItems(this: Enum): Array<PoseEasingStyle>
	}
	export type PoseEasingStyle = PoseEasingStyle.Linear | PoseEasingStyle.Constant | PoseEasingStyle.Elastic | PoseEasingStyle.Cubic | PoseEasingStyle.Bounce;
	export namespace PositionAlignmentMode {
		export interface OneAttachment extends EnumItem {
			Name: "OneAttachment";
			Value: 0;
			EnumType: typeof PositionAlignmentMode;
		}

		export const OneAttachment: OneAttachment;

		export interface TwoAttachment extends EnumItem {
			Name: "TwoAttachment";
			Value: 1;
			EnumType: typeof PositionAlignmentMode;
		}

		export const TwoAttachment: TwoAttachment;

		export function GetEnumItems(this: Enum): Array<PositionAlignmentMode>
	}
	export type PositionAlignmentMode = PositionAlignmentMode.OneAttachment | PositionAlignmentMode.TwoAttachment;
	export namespace PrivilegeType {
		export interface Owner extends EnumItem {
			Name: "Owner";
			Value: 255;
			EnumType: typeof PrivilegeType;
		}

		export const Owner: Owner;

		export interface Admin extends EnumItem {
			Name: "Admin";
			Value: 240;
			EnumType: typeof PrivilegeType;
		}

		export const Admin: Admin;

		export interface Member extends EnumItem {
			Name: "Member";
			Value: 128;
			EnumType: typeof PrivilegeType;
		}

		export const Member: Member;

		export interface Visitor extends EnumItem {
			Name: "Visitor";
			Value: 10;
			EnumType: typeof PrivilegeType;
		}

		export const Visitor: Visitor;

		export interface Banned extends EnumItem {
			Name: "Banned";
			Value: 0;
			EnumType: typeof PrivilegeType;
		}

		export const Banned: Banned;

		export function GetEnumItems(this: Enum): Array<PrivilegeType>
	}
	export type PrivilegeType = PrivilegeType.Owner | PrivilegeType.Admin | PrivilegeType.Member | PrivilegeType.Visitor | PrivilegeType.Banned;
	export namespace ProductLocationRestriction {
		export interface AvatarShop extends EnumItem {
			Name: "AvatarShop";
			Value: 0;
			EnumType: typeof ProductLocationRestriction;
		}

		export const AvatarShop: AvatarShop;

		export interface AllowedGames extends EnumItem {
			Name: "AllowedGames";
			Value: 1;
			EnumType: typeof ProductLocationRestriction;
		}

		export const AllowedGames: AllowedGames;

		export interface AllGames extends EnumItem {
			Name: "AllGames";
			Value: 2;
			EnumType: typeof ProductLocationRestriction;
		}

		export const AllGames: AllGames;

		export function GetEnumItems(this: Enum): Array<ProductLocationRestriction>
	}
	export type ProductLocationRestriction = ProductLocationRestriction.AvatarShop | ProductLocationRestriction.AllowedGames | ProductLocationRestriction.AllGames;
	export namespace ProductPurchaseDecision {
		export interface NotProcessedYet extends EnumItem {
			Name: "NotProcessedYet";
			Value: 0;
			EnumType: typeof ProductPurchaseDecision;
		}

		export const NotProcessedYet: NotProcessedYet;

		export interface PurchaseGranted extends EnumItem {
			Name: "PurchaseGranted";
			Value: 1;
			EnumType: typeof ProductPurchaseDecision;
		}

		export const PurchaseGranted: PurchaseGranted;

		export function GetEnumItems(this: Enum): Array<ProductPurchaseDecision>
	}
	export type ProductPurchaseDecision = ProductPurchaseDecision.NotProcessedYet | ProductPurchaseDecision.PurchaseGranted;
	export namespace PropertyStatus {
		export interface Ok extends EnumItem {
			Name: "Ok";
			Value: 0;
			EnumType: typeof PropertyStatus;
		}

		export const Ok: Ok;

		export interface Warning extends EnumItem {
			Name: "Warning";
			Value: 1;
			EnumType: typeof PropertyStatus;
		}

		export const Warning: Warning;

		export interface Error extends EnumItem {
			Name: "Error";
			Value: 2;
			EnumType: typeof PropertyStatus;
		}

		export const Error: Error;

		export function GetEnumItems(this: Enum): Array<PropertyStatus>
	}
	export type PropertyStatus = PropertyStatus.Ok | PropertyStatus.Warning | PropertyStatus.Error;
	export namespace ProximityPromptExclusivity {
		export interface OnePerButton extends EnumItem {
			Name: "OnePerButton";
			Value: 0;
			EnumType: typeof ProximityPromptExclusivity;
		}

		export const OnePerButton: OnePerButton;

		export interface OneGlobally extends EnumItem {
			Name: "OneGlobally";
			Value: 1;
			EnumType: typeof ProximityPromptExclusivity;
		}

		export const OneGlobally: OneGlobally;

		export interface AlwaysShow extends EnumItem {
			Name: "AlwaysShow";
			Value: 2;
			EnumType: typeof ProximityPromptExclusivity;
		}

		export const AlwaysShow: AlwaysShow;

		export function GetEnumItems(this: Enum): Array<ProximityPromptExclusivity>
	}
	export type ProximityPromptExclusivity = ProximityPromptExclusivity.OnePerButton | ProximityPromptExclusivity.OneGlobally | ProximityPromptExclusivity.AlwaysShow;
	export namespace ProximityPromptInputType {
		export interface Keyboard extends EnumItem {
			Name: "Keyboard";
			Value: 0;
			EnumType: typeof ProximityPromptInputType;
		}

		export const Keyboard: Keyboard;

		export interface Gamepad extends EnumItem {
			Name: "Gamepad";
			Value: 1;
			EnumType: typeof ProximityPromptInputType;
		}

		export const Gamepad: Gamepad;

		export interface Touch extends EnumItem {
			Name: "Touch";
			Value: 2;
			EnumType: typeof ProximityPromptInputType;
		}

		export const Touch: Touch;

		export function GetEnumItems(this: Enum): Array<ProximityPromptInputType>
	}
	export type ProximityPromptInputType = ProximityPromptInputType.Keyboard | ProximityPromptInputType.Gamepad | ProximityPromptInputType.Touch;
	export namespace ProximityPromptStyle {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof ProximityPromptStyle;
		}

		export const Default: Default;

		export interface Custom extends EnumItem {
			Name: "Custom";
			Value: 1;
			EnumType: typeof ProximityPromptStyle;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: Enum): Array<ProximityPromptStyle>
	}
	export type ProximityPromptStyle = ProximityPromptStyle.Default | ProximityPromptStyle.Custom;
	export namespace QualityLevel {
		export interface Automatic extends EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof QualityLevel;
		}

		export const Automatic: Automatic;

		export interface Level01 extends EnumItem {
			Name: "Level01";
			Value: 1;
			EnumType: typeof QualityLevel;
		}

		export const Level01: Level01;

		export interface Level02 extends EnumItem {
			Name: "Level02";
			Value: 2;
			EnumType: typeof QualityLevel;
		}

		export const Level02: Level02;

		export interface Level03 extends EnumItem {
			Name: "Level03";
			Value: 3;
			EnumType: typeof QualityLevel;
		}

		export const Level03: Level03;

		export interface Level04 extends EnumItem {
			Name: "Level04";
			Value: 4;
			EnumType: typeof QualityLevel;
		}

		export const Level04: Level04;

		export interface Level05 extends EnumItem {
			Name: "Level05";
			Value: 5;
			EnumType: typeof QualityLevel;
		}

		export const Level05: Level05;

		export interface Level06 extends EnumItem {
			Name: "Level06";
			Value: 6;
			EnumType: typeof QualityLevel;
		}

		export const Level06: Level06;

		export interface Level07 extends EnumItem {
			Name: "Level07";
			Value: 7;
			EnumType: typeof QualityLevel;
		}

		export const Level07: Level07;

		export interface Level08 extends EnumItem {
			Name: "Level08";
			Value: 8;
			EnumType: typeof QualityLevel;
		}

		export const Level08: Level08;

		export interface Level09 extends EnumItem {
			Name: "Level09";
			Value: 9;
			EnumType: typeof QualityLevel;
		}

		export const Level09: Level09;

		export interface Level10 extends EnumItem {
			Name: "Level10";
			Value: 10;
			EnumType: typeof QualityLevel;
		}

		export const Level10: Level10;

		export interface Level11 extends EnumItem {
			Name: "Level11";
			Value: 11;
			EnumType: typeof QualityLevel;
		}

		export const Level11: Level11;

		export interface Level12 extends EnumItem {
			Name: "Level12";
			Value: 12;
			EnumType: typeof QualityLevel;
		}

		export const Level12: Level12;

		export interface Level13 extends EnumItem {
			Name: "Level13";
			Value: 13;
			EnumType: typeof QualityLevel;
		}

		export const Level13: Level13;

		export interface Level14 extends EnumItem {
			Name: "Level14";
			Value: 14;
			EnumType: typeof QualityLevel;
		}

		export const Level14: Level14;

		export interface Level15 extends EnumItem {
			Name: "Level15";
			Value: 15;
			EnumType: typeof QualityLevel;
		}

		export const Level15: Level15;

		export interface Level16 extends EnumItem {
			Name: "Level16";
			Value: 16;
			EnumType: typeof QualityLevel;
		}

		export const Level16: Level16;

		export interface Level17 extends EnumItem {
			Name: "Level17";
			Value: 17;
			EnumType: typeof QualityLevel;
		}

		export const Level17: Level17;

		export interface Level18 extends EnumItem {
			Name: "Level18";
			Value: 18;
			EnumType: typeof QualityLevel;
		}

		export const Level18: Level18;

		export interface Level19 extends EnumItem {
			Name: "Level19";
			Value: 19;
			EnumType: typeof QualityLevel;
		}

		export const Level19: Level19;

		export interface Level20 extends EnumItem {
			Name: "Level20";
			Value: 20;
			EnumType: typeof QualityLevel;
		}

		export const Level20: Level20;

		export interface Level21 extends EnumItem {
			Name: "Level21";
			Value: 21;
			EnumType: typeof QualityLevel;
		}

		export const Level21: Level21;

		export function GetEnumItems(this: Enum): Array<QualityLevel>
	}
	export type QualityLevel = QualityLevel.Automatic | QualityLevel.Level01 | QualityLevel.Level02 | QualityLevel.Level03 | QualityLevel.Level04 | QualityLevel.Level05 | QualityLevel.Level06 | QualityLevel.Level07 | QualityLevel.Level08 | QualityLevel.Level09 | QualityLevel.Level10 | QualityLevel.Level11 | QualityLevel.Level12 | QualityLevel.Level13 | QualityLevel.Level14 | QualityLevel.Level15 | QualityLevel.Level16 | QualityLevel.Level17 | QualityLevel.Level18 | QualityLevel.Level19 | QualityLevel.Level20 | QualityLevel.Level21;
	export namespace R15CollisionType {
		export interface OuterBox extends EnumItem {
			Name: "OuterBox";
			Value: 0;
			EnumType: typeof R15CollisionType;
		}

		export const OuterBox: OuterBox;

		export interface InnerBox extends EnumItem {
			Name: "InnerBox";
			Value: 1;
			EnumType: typeof R15CollisionType;
		}

		export const InnerBox: InnerBox;

		export function GetEnumItems(this: Enum): Array<R15CollisionType>
	}
	export type R15CollisionType = R15CollisionType.OuterBox | R15CollisionType.InnerBox;
	export namespace RaycastFilterType {
		export interface Blacklist extends EnumItem {
			Name: "Blacklist";
			Value: 0;
			EnumType: typeof RaycastFilterType;
		}

		export const Blacklist: Blacklist;
		/** @deprecated renamed to Blacklist */
		export const Exclude: Blacklist;

		export interface Whitelist extends EnumItem {
			Name: "Whitelist";
			Value: 1;
			EnumType: typeof RaycastFilterType;
		}

		export const Whitelist: Whitelist;
		/** @deprecated renamed to Whitelist */
		export const Include: Whitelist;

		export function GetEnumItems(this: Enum): Array<RaycastFilterType>
	}
	export type RaycastFilterType = RaycastFilterType.Blacklist | RaycastFilterType.Whitelist;
	export namespace RenderFidelity {
		export interface Automatic extends EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof RenderFidelity;
		}

		export const Automatic: Automatic;

		export interface Precise extends EnumItem {
			Name: "Precise";
			Value: 1;
			EnumType: typeof RenderFidelity;
		}

		export const Precise: Precise;

		export interface Performance extends EnumItem {
			Name: "Performance";
			Value: 2;
			EnumType: typeof RenderFidelity;
		}

		export const Performance: Performance;

		export function GetEnumItems(this: Enum): Array<RenderFidelity>
	}
	export type RenderFidelity = RenderFidelity.Automatic | RenderFidelity.Precise | RenderFidelity.Performance;
	export namespace RenderPriority {
		export interface First extends EnumItem {
			Name: "First";
			Value: 0;
			EnumType: typeof RenderPriority;
		}

		export const First: First;

		export interface Input extends EnumItem {
			Name: "Input";
			Value: 100;
			EnumType: typeof RenderPriority;
		}

		export const Input: Input;

		export interface Camera extends EnumItem {
			Name: "Camera";
			Value: 200;
			EnumType: typeof RenderPriority;
		}

		export const Camera: Camera;

		export interface Character extends EnumItem {
			Name: "Character";
			Value: 300;
			EnumType: typeof RenderPriority;
		}

		export const Character: Character;

		export interface Last extends EnumItem {
			Name: "Last";
			Value: 2000;
			EnumType: typeof RenderPriority;
		}

		export const Last: Last;

		export function GetEnumItems(this: Enum): Array<RenderPriority>
	}
	export type RenderPriority = RenderPriority.First | RenderPriority.Input | RenderPriority.Camera | RenderPriority.Character | RenderPriority.Last;
	export namespace RenderingTestComparisonMethod {
		export interface psnr extends EnumItem {
			Name: "psnr";
			Value: 0;
			EnumType: typeof RenderingTestComparisonMethod;
		}

		export const psnr: psnr;

		export interface diff extends EnumItem {
			Name: "diff";
			Value: 1;
			EnumType: typeof RenderingTestComparisonMethod;
		}

		export const diff: diff;

		export function GetEnumItems(this: Enum): Array<RenderingTestComparisonMethod>
	}
	export type RenderingTestComparisonMethod = RenderingTestComparisonMethod.psnr | RenderingTestComparisonMethod.diff;
	export namespace ReplicateInstanceDestroySetting {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof ReplicateInstanceDestroySetting;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof ReplicateInstanceDestroySetting;
		}

		export const Disabled: Disabled;

		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof ReplicateInstanceDestroySetting;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: Enum): Array<ReplicateInstanceDestroySetting>
	}
	export type ReplicateInstanceDestroySetting = ReplicateInstanceDestroySetting.Default | ReplicateInstanceDestroySetting.Disabled | ReplicateInstanceDestroySetting.Enabled;
	export namespace ResamplerMode {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof ResamplerMode;
		}

		export const Default: Default;

		export interface Pixelated extends EnumItem {
			Name: "Pixelated";
			Value: 1;
			EnumType: typeof ResamplerMode;
		}

		export const Pixelated: Pixelated;

		export function GetEnumItems(this: Enum): Array<ResamplerMode>
	}
	export type ResamplerMode = ResamplerMode.Default | ResamplerMode.Pixelated;
	export namespace ReturnKeyType {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof ReturnKeyType;
		}

		export const Default: Default;

		export interface Done extends EnumItem {
			Name: "Done";
			Value: 1;
			EnumType: typeof ReturnKeyType;
		}

		export const Done: Done;

		export interface Go extends EnumItem {
			Name: "Go";
			Value: 2;
			EnumType: typeof ReturnKeyType;
		}

		export const Go: Go;

		export interface Next extends EnumItem {
			Name: "Next";
			Value: 3;
			EnumType: typeof ReturnKeyType;
		}

		export const Next: Next;

		export interface Search extends EnumItem {
			Name: "Search";
			Value: 4;
			EnumType: typeof ReturnKeyType;
		}

		export const Search: Search;

		export interface Send extends EnumItem {
			Name: "Send";
			Value: 5;
			EnumType: typeof ReturnKeyType;
		}

		export const Send: Send;

		export function GetEnumItems(this: Enum): Array<ReturnKeyType>
	}
	export type ReturnKeyType = ReturnKeyType.Default | ReturnKeyType.Done | ReturnKeyType.Go | ReturnKeyType.Next | ReturnKeyType.Search | ReturnKeyType.Send;
	export namespace ReverbType {
		export interface NoReverb extends EnumItem {
			Name: "NoReverb";
			Value: 0;
			EnumType: typeof ReverbType;
		}

		export const NoReverb: NoReverb;

		export interface GenericReverb extends EnumItem {
			Name: "GenericReverb";
			Value: 1;
			EnumType: typeof ReverbType;
		}

		export const GenericReverb: GenericReverb;

		export interface PaddedCell extends EnumItem {
			Name: "PaddedCell";
			Value: 2;
			EnumType: typeof ReverbType;
		}

		export const PaddedCell: PaddedCell;

		export interface Room extends EnumItem {
			Name: "Room";
			Value: 3;
			EnumType: typeof ReverbType;
		}

		export const Room: Room;

		export interface Bathroom extends EnumItem {
			Name: "Bathroom";
			Value: 4;
			EnumType: typeof ReverbType;
		}

		export const Bathroom: Bathroom;

		export interface LivingRoom extends EnumItem {
			Name: "LivingRoom";
			Value: 5;
			EnumType: typeof ReverbType;
		}

		export const LivingRoom: LivingRoom;

		export interface StoneRoom extends EnumItem {
			Name: "StoneRoom";
			Value: 6;
			EnumType: typeof ReverbType;
		}

		export const StoneRoom: StoneRoom;

		export interface Auditorium extends EnumItem {
			Name: "Auditorium";
			Value: 7;
			EnumType: typeof ReverbType;
		}

		export const Auditorium: Auditorium;

		export interface ConcertHall extends EnumItem {
			Name: "ConcertHall";
			Value: 8;
			EnumType: typeof ReverbType;
		}

		export const ConcertHall: ConcertHall;

		export interface Cave extends EnumItem {
			Name: "Cave";
			Value: 9;
			EnumType: typeof ReverbType;
		}

		export const Cave: Cave;

		export interface Arena extends EnumItem {
			Name: "Arena";
			Value: 10;
			EnumType: typeof ReverbType;
		}

		export const Arena: Arena;

		export interface Hangar extends EnumItem {
			Name: "Hangar";
			Value: 11;
			EnumType: typeof ReverbType;
		}

		export const Hangar: Hangar;

		export interface CarpettedHallway extends EnumItem {
			Name: "CarpettedHallway";
			Value: 12;
			EnumType: typeof ReverbType;
		}

		export const CarpettedHallway: CarpettedHallway;

		export interface Hallway extends EnumItem {
			Name: "Hallway";
			Value: 13;
			EnumType: typeof ReverbType;
		}

		export const Hallway: Hallway;

		export interface StoneCorridor extends EnumItem {
			Name: "StoneCorridor";
			Value: 14;
			EnumType: typeof ReverbType;
		}

		export const StoneCorridor: StoneCorridor;

		export interface Alley extends EnumItem {
			Name: "Alley";
			Value: 15;
			EnumType: typeof ReverbType;
		}

		export const Alley: Alley;

		export interface Forest extends EnumItem {
			Name: "Forest";
			Value: 16;
			EnumType: typeof ReverbType;
		}

		export const Forest: Forest;

		export interface City extends EnumItem {
			Name: "City";
			Value: 17;
			EnumType: typeof ReverbType;
		}

		export const City: City;

		export interface Mountains extends EnumItem {
			Name: "Mountains";
			Value: 18;
			EnumType: typeof ReverbType;
		}

		export const Mountains: Mountains;

		export interface Quarry extends EnumItem {
			Name: "Quarry";
			Value: 19;
			EnumType: typeof ReverbType;
		}

		export const Quarry: Quarry;

		export interface Plain extends EnumItem {
			Name: "Plain";
			Value: 20;
			EnumType: typeof ReverbType;
		}

		export const Plain: Plain;

		export interface ParkingLot extends EnumItem {
			Name: "ParkingLot";
			Value: 21;
			EnumType: typeof ReverbType;
		}

		export const ParkingLot: ParkingLot;

		export interface SewerPipe extends EnumItem {
			Name: "SewerPipe";
			Value: 22;
			EnumType: typeof ReverbType;
		}

		export const SewerPipe: SewerPipe;

		export interface UnderWater extends EnumItem {
			Name: "UnderWater";
			Value: 23;
			EnumType: typeof ReverbType;
		}

		export const UnderWater: UnderWater;

		export function GetEnumItems(this: Enum): Array<ReverbType>
	}
	export type ReverbType = ReverbType.NoReverb | ReverbType.GenericReverb | ReverbType.PaddedCell | ReverbType.Room | ReverbType.Bathroom | ReverbType.LivingRoom | ReverbType.StoneRoom | ReverbType.Auditorium | ReverbType.ConcertHall | ReverbType.Cave | ReverbType.Arena | ReverbType.Hangar | ReverbType.CarpettedHallway | ReverbType.Hallway | ReverbType.StoneCorridor | ReverbType.Alley | ReverbType.Forest | ReverbType.City | ReverbType.Mountains | ReverbType.Quarry | ReverbType.Plain | ReverbType.ParkingLot | ReverbType.SewerPipe | ReverbType.UnderWater;
	export namespace RibbonTool {
		export interface Select extends EnumItem {
			Name: "Select";
			Value: 0;
			EnumType: typeof RibbonTool;
		}

		export const Select: Select;

		export interface Scale extends EnumItem {
			Name: "Scale";
			Value: 1;
			EnumType: typeof RibbonTool;
		}

		export const Scale: Scale;

		export interface Rotate extends EnumItem {
			Name: "Rotate";
			Value: 2;
			EnumType: typeof RibbonTool;
		}

		export const Rotate: Rotate;

		export interface Move extends EnumItem {
			Name: "Move";
			Value: 3;
			EnumType: typeof RibbonTool;
		}

		export const Move: Move;

		export interface Transform extends EnumItem {
			Name: "Transform";
			Value: 4;
			EnumType: typeof RibbonTool;
		}

		export const Transform: Transform;

		export interface ColorPicker extends EnumItem {
			Name: "ColorPicker";
			Value: 5;
			EnumType: typeof RibbonTool;
		}

		export const ColorPicker: ColorPicker;

		export interface MaterialPicker extends EnumItem {
			Name: "MaterialPicker";
			Value: 6;
			EnumType: typeof RibbonTool;
		}

		export const MaterialPicker: MaterialPicker;

		export interface Group extends EnumItem {
			Name: "Group";
			Value: 7;
			EnumType: typeof RibbonTool;
		}

		export const Group: Group;

		export interface Ungroup extends EnumItem {
			Name: "Ungroup";
			Value: 8;
			EnumType: typeof RibbonTool;
		}

		export const Ungroup: Ungroup;

		export interface None extends EnumItem {
			Name: "None";
			Value: 9;
			EnumType: typeof RibbonTool;
		}

		export const None: None;

		export function GetEnumItems(this: Enum): Array<RibbonTool>
	}
	export type RibbonTool = RibbonTool.Select | RibbonTool.Scale | RibbonTool.Rotate | RibbonTool.Move | RibbonTool.Transform | RibbonTool.ColorPicker | RibbonTool.MaterialPicker | RibbonTool.Group | RibbonTool.Ungroup | RibbonTool.None;
	export namespace RigType {
		export interface R15 extends EnumItem {
			Name: "R15";
			Value: 0;
			EnumType: typeof RigType;
		}

		export const R15: R15;

		export interface Rthro extends EnumItem {
			Name: "Rthro";
			Value: 1;
			EnumType: typeof RigType;
		}

		export const Rthro: Rthro;

		export interface RthroNarrow extends EnumItem {
			Name: "RthroNarrow";
			Value: 2;
			EnumType: typeof RigType;
		}

		export const RthroNarrow: RthroNarrow;

		export interface Custom extends EnumItem {
			Name: "Custom";
			Value: 3;
			EnumType: typeof RigType;
		}

		export const Custom: Custom;

		export interface None extends EnumItem {
			Name: "None";
			Value: 4;
			EnumType: typeof RigType;
		}

		export const None: None;

		export function GetEnumItems(this: Enum): Array<RigType>
	}
	export type RigType = RigType.R15 | RigType.Rthro | RigType.RthroNarrow | RigType.Custom | RigType.None;
	export namespace RollOffMode {
		export interface Inverse extends EnumItem {
			Name: "Inverse";
			Value: 0;
			EnumType: typeof RollOffMode;
		}

		export const Inverse: Inverse;

		export interface Linear extends EnumItem {
			Name: "Linear";
			Value: 1;
			EnumType: typeof RollOffMode;
		}

		export const Linear: Linear;

		export interface InverseTapered extends EnumItem {
			Name: "InverseTapered";
			Value: 3;
			EnumType: typeof RollOffMode;
		}

		export const InverseTapered: InverseTapered;

		export interface LinearSquare extends EnumItem {
			Name: "LinearSquare";
			Value: 2;
			EnumType: typeof RollOffMode;
		}

		export const LinearSquare: LinearSquare;

		export function GetEnumItems(this: Enum): Array<RollOffMode>
	}
	export type RollOffMode = RollOffMode.Inverse | RollOffMode.Linear | RollOffMode.InverseTapered | RollOffMode.LinearSquare;
	export namespace RotationOrder {
		export interface XYZ extends EnumItem {
			Name: "XYZ";
			Value: 0;
			EnumType: typeof RotationOrder;
		}

		export const XYZ: XYZ;

		export interface XZY extends EnumItem {
			Name: "XZY";
			Value: 1;
			EnumType: typeof RotationOrder;
		}

		export const XZY: XZY;

		export interface YZX extends EnumItem {
			Name: "YZX";
			Value: 2;
			EnumType: typeof RotationOrder;
		}

		export const YZX: YZX;

		export interface YXZ extends EnumItem {
			Name: "YXZ";
			Value: 3;
			EnumType: typeof RotationOrder;
		}

		export const YXZ: YXZ;

		export interface ZXY extends EnumItem {
			Name: "ZXY";
			Value: 4;
			EnumType: typeof RotationOrder;
		}

		export const ZXY: ZXY;

		export interface ZYX extends EnumItem {
			Name: "ZYX";
			Value: 5;
			EnumType: typeof RotationOrder;
		}

		export const ZYX: ZYX;

		export function GetEnumItems(this: Enum): Array<RotationOrder>
	}
	export type RotationOrder = RotationOrder.XYZ | RotationOrder.XZY | RotationOrder.YZX | RotationOrder.YXZ | RotationOrder.ZXY | RotationOrder.ZYX;
	export namespace RotationType {
		export interface MovementRelative extends EnumItem {
			Name: "MovementRelative";
			Value: 0;
			EnumType: typeof RotationType;
		}

		export const MovementRelative: MovementRelative;

		export interface CameraRelative extends EnumItem {
			Name: "CameraRelative";
			Value: 1;
			EnumType: typeof RotationType;
		}

		export const CameraRelative: CameraRelative;

		export function GetEnumItems(this: Enum): Array<RotationType>
	}
	export type RotationType = RotationType.MovementRelative | RotationType.CameraRelative;
	export namespace RunContext {
		export interface Legacy extends EnumItem {
			Name: "Legacy";
			Value: 0;
			EnumType: typeof RunContext;
		}

		export const Legacy: Legacy;

		export interface Server extends EnumItem {
			Name: "Server";
			Value: 1;
			EnumType: typeof RunContext;
		}

		export const Server: Server;

		export interface Client extends EnumItem {
			Name: "Client";
			Value: 2;
			EnumType: typeof RunContext;
		}

		export const Client: Client;

		export interface Plugin extends EnumItem {
			Name: "Plugin";
			Value: 3;
			EnumType: typeof RunContext;
		}

		export const Plugin: Plugin;

		export function GetEnumItems(this: Enum): Array<RunContext>
	}
	export type RunContext = RunContext.Legacy | RunContext.Server | RunContext.Client | RunContext.Plugin;
	export namespace RuntimeUndoBehavior {
		export interface Aggregate extends EnumItem {
			Name: "Aggregate";
			Value: 0;
			EnumType: typeof RuntimeUndoBehavior;
		}

		export const Aggregate: Aggregate;

		export interface Snapshot extends EnumItem {
			Name: "Snapshot";
			Value: 1;
			EnumType: typeof RuntimeUndoBehavior;
		}

		export const Snapshot: Snapshot;

		export interface Hybrid extends EnumItem {
			Name: "Hybrid";
			Value: 2;
			EnumType: typeof RuntimeUndoBehavior;
		}

		export const Hybrid: Hybrid;

		export function GetEnumItems(this: Enum): Array<RuntimeUndoBehavior>
	}
	export type RuntimeUndoBehavior = RuntimeUndoBehavior.Aggregate | RuntimeUndoBehavior.Snapshot | RuntimeUndoBehavior.Hybrid;
	export namespace SaveFilter {
		export interface SaveAll extends EnumItem {
			Name: "SaveAll";
			Value: 2;
			EnumType: typeof SaveFilter;
		}

		export const SaveAll: SaveAll;

		export interface SaveWorld extends EnumItem {
			Name: "SaveWorld";
			Value: 0;
			EnumType: typeof SaveFilter;
		}

		export const SaveWorld: SaveWorld;

		export interface SaveGame extends EnumItem {
			Name: "SaveGame";
			Value: 1;
			EnumType: typeof SaveFilter;
		}

		export const SaveGame: SaveGame;

		export function GetEnumItems(this: Enum): Array<SaveFilter>
	}
	export type SaveFilter = SaveFilter.SaveAll | SaveFilter.SaveWorld | SaveFilter.SaveGame;
	export namespace SavedQualitySetting {
		export interface Automatic extends EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof SavedQualitySetting;
		}

		export const Automatic: Automatic;

		export interface QualityLevel1 extends EnumItem {
			Name: "QualityLevel1";
			Value: 1;
			EnumType: typeof SavedQualitySetting;
		}

		export const QualityLevel1: QualityLevel1;

		export interface QualityLevel2 extends EnumItem {
			Name: "QualityLevel2";
			Value: 2;
			EnumType: typeof SavedQualitySetting;
		}

		export const QualityLevel2: QualityLevel2;

		export interface QualityLevel3 extends EnumItem {
			Name: "QualityLevel3";
			Value: 3;
			EnumType: typeof SavedQualitySetting;
		}

		export const QualityLevel3: QualityLevel3;

		export interface QualityLevel4 extends EnumItem {
			Name: "QualityLevel4";
			Value: 4;
			EnumType: typeof SavedQualitySetting;
		}

		export const QualityLevel4: QualityLevel4;

		export interface QualityLevel5 extends EnumItem {
			Name: "QualityLevel5";
			Value: 5;
			EnumType: typeof SavedQualitySetting;
		}

		export const QualityLevel5: QualityLevel5;

		export interface QualityLevel6 extends EnumItem {
			Name: "QualityLevel6";
			Value: 6;
			EnumType: typeof SavedQualitySetting;
		}

		export const QualityLevel6: QualityLevel6;

		export interface QualityLevel7 extends EnumItem {
			Name: "QualityLevel7";
			Value: 7;
			EnumType: typeof SavedQualitySetting;
		}

		export const QualityLevel7: QualityLevel7;

		export interface QualityLevel8 extends EnumItem {
			Name: "QualityLevel8";
			Value: 8;
			EnumType: typeof SavedQualitySetting;
		}

		export const QualityLevel8: QualityLevel8;

		export interface QualityLevel9 extends EnumItem {
			Name: "QualityLevel9";
			Value: 9;
			EnumType: typeof SavedQualitySetting;
		}

		export const QualityLevel9: QualityLevel9;

		export interface QualityLevel10 extends EnumItem {
			Name: "QualityLevel10";
			Value: 10;
			EnumType: typeof SavedQualitySetting;
		}

		export const QualityLevel10: QualityLevel10;

		export function GetEnumItems(this: Enum): Array<SavedQualitySetting>
	}
	export type SavedQualitySetting = SavedQualitySetting.Automatic | SavedQualitySetting.QualityLevel1 | SavedQualitySetting.QualityLevel2 | SavedQualitySetting.QualityLevel3 | SavedQualitySetting.QualityLevel4 | SavedQualitySetting.QualityLevel5 | SavedQualitySetting.QualityLevel6 | SavedQualitySetting.QualityLevel7 | SavedQualitySetting.QualityLevel8 | SavedQualitySetting.QualityLevel9 | SavedQualitySetting.QualityLevel10;
	export namespace ScaleType {
		export interface Stretch extends EnumItem {
			Name: "Stretch";
			Value: 0;
			EnumType: typeof ScaleType;
		}

		export const Stretch: Stretch;

		export interface Slice extends EnumItem {
			Name: "Slice";
			Value: 1;
			EnumType: typeof ScaleType;
		}

		export const Slice: Slice;

		export interface Tile extends EnumItem {
			Name: "Tile";
			Value: 2;
			EnumType: typeof ScaleType;
		}

		export const Tile: Tile;

		export interface Fit extends EnumItem {
			Name: "Fit";
			Value: 3;
			EnumType: typeof ScaleType;
		}

		export const Fit: Fit;

		export interface Crop extends EnumItem {
			Name: "Crop";
			Value: 4;
			EnumType: typeof ScaleType;
		}

		export const Crop: Crop;

		export function GetEnumItems(this: Enum): Array<ScaleType>
	}
	export type ScaleType = ScaleType.Stretch | ScaleType.Slice | ScaleType.Tile | ScaleType.Fit | ScaleType.Crop;
	export namespace ScreenOrientation {
		export interface LandscapeLeft extends EnumItem {
			Name: "LandscapeLeft";
			Value: 0;
			EnumType: typeof ScreenOrientation;
		}

		export const LandscapeLeft: LandscapeLeft;

		export interface LandscapeRight extends EnumItem {
			Name: "LandscapeRight";
			Value: 1;
			EnumType: typeof ScreenOrientation;
		}

		export const LandscapeRight: LandscapeRight;

		export interface LandscapeSensor extends EnumItem {
			Name: "LandscapeSensor";
			Value: 2;
			EnumType: typeof ScreenOrientation;
		}

		export const LandscapeSensor: LandscapeSensor;

		export interface Portrait extends EnumItem {
			Name: "Portrait";
			Value: 3;
			EnumType: typeof ScreenOrientation;
		}

		export const Portrait: Portrait;

		export interface Sensor extends EnumItem {
			Name: "Sensor";
			Value: 4;
			EnumType: typeof ScreenOrientation;
		}

		export const Sensor: Sensor;

		export function GetEnumItems(this: Enum): Array<ScreenOrientation>
	}
	export type ScreenOrientation = ScreenOrientation.LandscapeLeft | ScreenOrientation.LandscapeRight | ScreenOrientation.LandscapeSensor | ScreenOrientation.Portrait | ScreenOrientation.Sensor;
	export namespace ScrollBarInset {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof ScrollBarInset;
		}

		export const None: None;

		export interface ScrollBar extends EnumItem {
			Name: "ScrollBar";
			Value: 1;
			EnumType: typeof ScrollBarInset;
		}

		export const ScrollBar: ScrollBar;

		export interface Always extends EnumItem {
			Name: "Always";
			Value: 2;
			EnumType: typeof ScrollBarInset;
		}

		export const Always: Always;

		export function GetEnumItems(this: Enum): Array<ScrollBarInset>
	}
	export type ScrollBarInset = ScrollBarInset.None | ScrollBarInset.ScrollBar | ScrollBarInset.Always;
	export namespace ScrollingDirection {
		export interface X extends EnumItem {
			Name: "X";
			Value: 1;
			EnumType: typeof ScrollingDirection;
		}

		export const X: X;

		export interface Y extends EnumItem {
			Name: "Y";
			Value: 2;
			EnumType: typeof ScrollingDirection;
		}

		export const Y: Y;

		export interface XY extends EnumItem {
			Name: "XY";
			Value: 4;
			EnumType: typeof ScrollingDirection;
		}

		export const XY: XY;

		export function GetEnumItems(this: Enum): Array<ScrollingDirection>
	}
	export type ScrollingDirection = ScrollingDirection.X | ScrollingDirection.Y | ScrollingDirection.XY;
	export namespace SelectionBehavior {
		export interface Escape extends EnumItem {
			Name: "Escape";
			Value: 0;
			EnumType: typeof SelectionBehavior;
		}

		export const Escape: Escape;

		export interface Stop extends EnumItem {
			Name: "Stop";
			Value: 1;
			EnumType: typeof SelectionBehavior;
		}

		export const Stop: Stop;

		export function GetEnumItems(this: Enum): Array<SelectionBehavior>
	}
	export type SelectionBehavior = SelectionBehavior.Escape | SelectionBehavior.Stop;
	export namespace ServerAudioBehavior {
		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 0;
			EnumType: typeof ServerAudioBehavior;
		}

		export const Enabled: Enabled;

		export interface Muted extends EnumItem {
			Name: "Muted";
			Value: 1;
			EnumType: typeof ServerAudioBehavior;
		}

		export const Muted: Muted;

		export interface OnlineGame extends EnumItem {
			Name: "OnlineGame";
			Value: 2;
			EnumType: typeof ServerAudioBehavior;
		}

		export const OnlineGame: OnlineGame;

		export function GetEnumItems(this: Enum): Array<ServerAudioBehavior>
	}
	export type ServerAudioBehavior = ServerAudioBehavior.Enabled | ServerAudioBehavior.Muted | ServerAudioBehavior.OnlineGame;
	export namespace SignalBehavior {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof SignalBehavior;
		}

		export const Default: Default;

		export interface Immediate extends EnumItem {
			Name: "Immediate";
			Value: 1;
			EnumType: typeof SignalBehavior;
		}

		export const Immediate: Immediate;

		export interface Deferred extends EnumItem {
			Name: "Deferred";
			Value: 2;
			EnumType: typeof SignalBehavior;
		}

		export const Deferred: Deferred;

		export interface AncestryDeferred extends EnumItem {
			Name: "AncestryDeferred";
			Value: 3;
			EnumType: typeof SignalBehavior;
		}

		export const AncestryDeferred: AncestryDeferred;

		export function GetEnumItems(this: Enum): Array<SignalBehavior>
	}
	export type SignalBehavior = SignalBehavior.Default | SignalBehavior.Immediate | SignalBehavior.Deferred | SignalBehavior.AncestryDeferred;
	export namespace SizeConstraint {
		export interface RelativeXY extends EnumItem {
			Name: "RelativeXY";
			Value: 0;
			EnumType: typeof SizeConstraint;
		}

		export const RelativeXY: RelativeXY;

		export interface RelativeXX extends EnumItem {
			Name: "RelativeXX";
			Value: 1;
			EnumType: typeof SizeConstraint;
		}

		export const RelativeXX: RelativeXX;

		export interface RelativeYY extends EnumItem {
			Name: "RelativeYY";
			Value: 2;
			EnumType: typeof SizeConstraint;
		}

		export const RelativeYY: RelativeYY;

		export function GetEnumItems(this: Enum): Array<SizeConstraint>
	}
	export type SizeConstraint = SizeConstraint.RelativeXY | SizeConstraint.RelativeXX | SizeConstraint.RelativeYY;
	export namespace SortDirection {
		export interface Ascending extends EnumItem {
			Name: "Ascending";
			Value: 0;
			EnumType: typeof SortDirection;
		}

		export const Ascending: Ascending;

		export interface Descending extends EnumItem {
			Name: "Descending";
			Value: 1;
			EnumType: typeof SortDirection;
		}

		export const Descending: Descending;

		export function GetEnumItems(this: Enum): Array<SortDirection>
	}
	export type SortDirection = SortDirection.Ascending | SortDirection.Descending;
	export namespace SortOrder {
		export interface LayoutOrder extends EnumItem {
			Name: "LayoutOrder";
			Value: 2;
			EnumType: typeof SortOrder;
		}

		export const LayoutOrder: LayoutOrder;

		export interface Name extends EnumItem {
			Name: "Name";
			Value: 0;
			EnumType: typeof SortOrder;
		}

		export const Name: Name;

		export interface Custom extends EnumItem {
			Name: "Custom";
			Value: 1;
			EnumType: typeof SortOrder;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: Enum): Array<SortOrder>
	}
	export type SortOrder = SortOrder.LayoutOrder | SortOrder.Name | SortOrder.Custom;
	export namespace SpecialKey {
		export interface Insert extends EnumItem {
			Name: "Insert";
			Value: 0;
			EnumType: typeof SpecialKey;
		}

		export const Insert: Insert;

		export interface Home extends EnumItem {
			Name: "Home";
			Value: 1;
			EnumType: typeof SpecialKey;
		}

		export const Home: Home;

		export interface End extends EnumItem {
			Name: "End";
			Value: 2;
			EnumType: typeof SpecialKey;
		}

		export const End: End;

		export interface PageUp extends EnumItem {
			Name: "PageUp";
			Value: 3;
			EnumType: typeof SpecialKey;
		}

		export const PageUp: PageUp;

		export interface PageDown extends EnumItem {
			Name: "PageDown";
			Value: 4;
			EnumType: typeof SpecialKey;
		}

		export const PageDown: PageDown;

		export interface ChatHotkey extends EnumItem {
			Name: "ChatHotkey";
			Value: 5;
			EnumType: typeof SpecialKey;
		}

		export const ChatHotkey: ChatHotkey;

		export function GetEnumItems(this: Enum): Array<SpecialKey>
	}
	export type SpecialKey = SpecialKey.Insert | SpecialKey.Home | SpecialKey.End | SpecialKey.PageUp | SpecialKey.PageDown | SpecialKey.ChatHotkey;
	export namespace StartCorner {
		export interface TopLeft extends EnumItem {
			Name: "TopLeft";
			Value: 0;
			EnumType: typeof StartCorner;
		}

		export const TopLeft: TopLeft;

		export interface TopRight extends EnumItem {
			Name: "TopRight";
			Value: 1;
			EnumType: typeof StartCorner;
		}

		export const TopRight: TopRight;

		export interface BottomLeft extends EnumItem {
			Name: "BottomLeft";
			Value: 2;
			EnumType: typeof StartCorner;
		}

		export const BottomLeft: BottomLeft;

		export interface BottomRight extends EnumItem {
			Name: "BottomRight";
			Value: 3;
			EnumType: typeof StartCorner;
		}

		export const BottomRight: BottomRight;

		export function GetEnumItems(this: Enum): Array<StartCorner>
	}
	export type StartCorner = StartCorner.TopLeft | StartCorner.TopRight | StartCorner.BottomLeft | StartCorner.BottomRight;
	export namespace Status {
		export interface Poison extends EnumItem {
			Name: "Poison";
			Value: 0;
			EnumType: typeof Status;
		}

		export const Poison: Poison;

		export interface Confusion extends EnumItem {
			Name: "Confusion";
			Value: 1;
			EnumType: typeof Status;
		}

		export const Confusion: Confusion;

		export function GetEnumItems(this: Enum): Array<Status>
	}
	export type Status = Status.Poison | Status.Confusion;
	export namespace StreamOutBehavior {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof StreamOutBehavior;
		}

		export const Default: Default;

		export interface LowMemory extends EnumItem {
			Name: "LowMemory";
			Value: 1;
			EnumType: typeof StreamOutBehavior;
		}

		export const LowMemory: LowMemory;

		export interface Opportunistic extends EnumItem {
			Name: "Opportunistic";
			Value: 2;
			EnumType: typeof StreamOutBehavior;
		}

		export const Opportunistic: Opportunistic;

		export function GetEnumItems(this: Enum): Array<StreamOutBehavior>
	}
	export type StreamOutBehavior = StreamOutBehavior.Default | StreamOutBehavior.LowMemory | StreamOutBehavior.Opportunistic;
	export namespace StreamingIntegrityMode {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof StreamingIntegrityMode;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof StreamingIntegrityMode;
		}

		export const Disabled: Disabled;

		export interface MinimumRadiusPause extends EnumItem {
			Name: "MinimumRadiusPause";
			Value: 2;
			EnumType: typeof StreamingIntegrityMode;
		}

		export const MinimumRadiusPause: MinimumRadiusPause;

		export function GetEnumItems(this: Enum): Array<StreamingIntegrityMode>
	}
	export type StreamingIntegrityMode = StreamingIntegrityMode.Default | StreamingIntegrityMode.Disabled | StreamingIntegrityMode.MinimumRadiusPause;
	export namespace StreamingPauseMode {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof StreamingPauseMode;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof StreamingPauseMode;
		}

		export const Disabled: Disabled;

		export interface ClientPhysicsPause extends EnumItem {
			Name: "ClientPhysicsPause";
			Value: 2;
			EnumType: typeof StreamingPauseMode;
		}

		export const ClientPhysicsPause: ClientPhysicsPause;

		export function GetEnumItems(this: Enum): Array<StreamingPauseMode>
	}
	export type StreamingPauseMode = StreamingPauseMode.Default | StreamingPauseMode.Disabled | StreamingPauseMode.ClientPhysicsPause;
	export namespace StudioCloseMode {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof StudioCloseMode;
		}

		export const None: None;

		export interface CloseStudio extends EnumItem {
			Name: "CloseStudio";
			Value: 1;
			EnumType: typeof StudioCloseMode;
		}

		export const CloseStudio: CloseStudio;

		export interface CloseDoc extends EnumItem {
			Name: "CloseDoc";
			Value: 2;
			EnumType: typeof StudioCloseMode;
		}

		export const CloseDoc: CloseDoc;

		export function GetEnumItems(this: Enum): Array<StudioCloseMode>
	}
	export type StudioCloseMode = StudioCloseMode.None | StudioCloseMode.CloseStudio | StudioCloseMode.CloseDoc;
	export namespace StudioDataModelType {
		export interface Edit extends EnumItem {
			Name: "Edit";
			Value: 0;
			EnumType: typeof StudioDataModelType;
		}

		export const Edit: Edit;

		export interface PlayClient extends EnumItem {
			Name: "PlayClient";
			Value: 1;
			EnumType: typeof StudioDataModelType;
		}

		export const PlayClient: PlayClient;

		export interface PlayServer extends EnumItem {
			Name: "PlayServer";
			Value: 2;
			EnumType: typeof StudioDataModelType;
		}

		export const PlayServer: PlayServer;

		export interface Standalone extends EnumItem {
			Name: "Standalone";
			Value: 3;
			EnumType: typeof StudioDataModelType;
		}

		export const Standalone: Standalone;

		export interface None extends EnumItem {
			Name: "None";
			Value: 4;
			EnumType: typeof StudioDataModelType;
		}

		export const None: None;

		export function GetEnumItems(this: Enum): Array<StudioDataModelType>
	}
	export type StudioDataModelType = StudioDataModelType.Edit | StudioDataModelType.PlayClient | StudioDataModelType.PlayServer | StudioDataModelType.Standalone | StudioDataModelType.None;
	export namespace StudioScriptEditorColorCategories {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Default: Default;

		export interface Operator extends EnumItem {
			Name: "Operator";
			Value: 1;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Operator: Operator;

		export interface Number extends EnumItem {
			Name: "Number";
			Value: 2;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Number: Number;

		export interface String extends EnumItem {
			Name: "String";
			Value: 3;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const String: String;

		export interface Comment extends EnumItem {
			Name: "Comment";
			Value: 4;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Comment: Comment;

		export interface Keyword extends EnumItem {
			Name: "Keyword";
			Value: 5;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Keyword: Keyword;

		export interface Builtin extends EnumItem {
			Name: "Builtin";
			Value: 6;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Builtin: Builtin;

		export interface Method extends EnumItem {
			Name: "Method";
			Value: 7;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Method: Method;

		export interface Property extends EnumItem {
			Name: "Property";
			Value: 8;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Property: Property;

		export interface Nil extends EnumItem {
			Name: "Nil";
			Value: 9;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Nil: Nil;

		export interface Bool extends EnumItem {
			Name: "Bool";
			Value: 10;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Bool: Bool;

		export interface Function extends EnumItem {
			Name: "Function";
			Value: 11;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Function: Function;

		export interface Local extends EnumItem {
			Name: "Local";
			Value: 12;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Local: Local;

		export interface Self extends EnumItem {
			Name: "Self";
			Value: 13;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Self: Self;

		export interface LuauKeyword extends EnumItem {
			Name: "LuauKeyword";
			Value: 14;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const LuauKeyword: LuauKeyword;

		export interface FunctionName extends EnumItem {
			Name: "FunctionName";
			Value: 15;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const FunctionName: FunctionName;

		export interface TODO extends EnumItem {
			Name: "TODO";
			Value: 16;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const TODO: TODO;

		export interface Background extends EnumItem {
			Name: "Background";
			Value: 17;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Background: Background;

		export interface SelectionText extends EnumItem {
			Name: "SelectionText";
			Value: 18;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const SelectionText: SelectionText;

		export interface SelectionBackground extends EnumItem {
			Name: "SelectionBackground";
			Value: 19;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const SelectionBackground: SelectionBackground;

		export interface FindSelectionBackground extends EnumItem {
			Name: "FindSelectionBackground";
			Value: 20;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const FindSelectionBackground: FindSelectionBackground;

		export interface MatchingWordBackground extends EnumItem {
			Name: "MatchingWordBackground";
			Value: 21;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const MatchingWordBackground: MatchingWordBackground;

		export interface Warning extends EnumItem {
			Name: "Warning";
			Value: 22;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Warning: Warning;

		export interface Error extends EnumItem {
			Name: "Error";
			Value: 23;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Error: Error;

		export interface Whitespace extends EnumItem {
			Name: "Whitespace";
			Value: 24;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Whitespace: Whitespace;

		export interface ActiveLine extends EnumItem {
			Name: "ActiveLine";
			Value: 25;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const ActiveLine: ActiveLine;

		export interface DebuggerCurrentLine extends EnumItem {
			Name: "DebuggerCurrentLine";
			Value: 26;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const DebuggerCurrentLine: DebuggerCurrentLine;

		export interface DebuggerErrorLine extends EnumItem {
			Name: "DebuggerErrorLine";
			Value: 27;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const DebuggerErrorLine: DebuggerErrorLine;

		export interface Ruler extends EnumItem {
			Name: "Ruler";
			Value: 28;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Ruler: Ruler;

		export interface Bracket extends EnumItem {
			Name: "Bracket";
			Value: 29;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const Bracket: Bracket;

		export interface MenuPrimaryText extends EnumItem {
			Name: "MenuPrimaryText";
			Value: 30;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const MenuPrimaryText: MenuPrimaryText;

		export interface MenuSecondaryText extends EnumItem {
			Name: "MenuSecondaryText";
			Value: 31;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const MenuSecondaryText: MenuSecondaryText;

		export interface MenuSelectedText extends EnumItem {
			Name: "MenuSelectedText";
			Value: 32;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const MenuSelectedText: MenuSelectedText;

		export interface MenuBackground extends EnumItem {
			Name: "MenuBackground";
			Value: 33;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const MenuBackground: MenuBackground;

		export interface MenuSelectedBackground extends EnumItem {
			Name: "MenuSelectedBackground";
			Value: 34;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const MenuSelectedBackground: MenuSelectedBackground;

		export interface MenuScrollbarBackground extends EnumItem {
			Name: "MenuScrollbarBackground";
			Value: 35;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const MenuScrollbarBackground: MenuScrollbarBackground;

		export interface MenuScrollbarHandle extends EnumItem {
			Name: "MenuScrollbarHandle";
			Value: 36;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const MenuScrollbarHandle: MenuScrollbarHandle;

		export interface MenuBorder extends EnumItem {
			Name: "MenuBorder";
			Value: 37;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const MenuBorder: MenuBorder;

		export interface DocViewCodeBackground extends EnumItem {
			Name: "DocViewCodeBackground";
			Value: 38;
			EnumType: typeof StudioScriptEditorColorCategories;
		}

		export const DocViewCodeBackground: DocViewCodeBackground;

		export function GetEnumItems(this: Enum): Array<StudioScriptEditorColorCategories>
	}
	export type StudioScriptEditorColorCategories = StudioScriptEditorColorCategories.Default | StudioScriptEditorColorCategories.Operator | StudioScriptEditorColorCategories.Number | StudioScriptEditorColorCategories.String | StudioScriptEditorColorCategories.Comment | StudioScriptEditorColorCategories.Keyword | StudioScriptEditorColorCategories.Builtin | StudioScriptEditorColorCategories.Method | StudioScriptEditorColorCategories.Property | StudioScriptEditorColorCategories.Nil | StudioScriptEditorColorCategories.Bool | StudioScriptEditorColorCategories.Function | StudioScriptEditorColorCategories.Local | StudioScriptEditorColorCategories.Self | StudioScriptEditorColorCategories.LuauKeyword | StudioScriptEditorColorCategories.FunctionName | StudioScriptEditorColorCategories.TODO | StudioScriptEditorColorCategories.Background | StudioScriptEditorColorCategories.SelectionText | StudioScriptEditorColorCategories.SelectionBackground | StudioScriptEditorColorCategories.FindSelectionBackground | StudioScriptEditorColorCategories.MatchingWordBackground | StudioScriptEditorColorCategories.Warning | StudioScriptEditorColorCategories.Error | StudioScriptEditorColorCategories.Whitespace | StudioScriptEditorColorCategories.ActiveLine | StudioScriptEditorColorCategories.DebuggerCurrentLine | StudioScriptEditorColorCategories.DebuggerErrorLine | StudioScriptEditorColorCategories.Ruler | StudioScriptEditorColorCategories.Bracket | StudioScriptEditorColorCategories.MenuPrimaryText | StudioScriptEditorColorCategories.MenuSecondaryText | StudioScriptEditorColorCategories.MenuSelectedText | StudioScriptEditorColorCategories.MenuBackground | StudioScriptEditorColorCategories.MenuSelectedBackground | StudioScriptEditorColorCategories.MenuScrollbarBackground | StudioScriptEditorColorCategories.MenuScrollbarHandle | StudioScriptEditorColorCategories.MenuBorder | StudioScriptEditorColorCategories.DocViewCodeBackground;
	export namespace StudioScriptEditorColorPresets {
		export interface RobloxDefault extends EnumItem {
			Name: "RobloxDefault";
			Value: 0;
			EnumType: typeof StudioScriptEditorColorPresets;
		}

		export const RobloxDefault: RobloxDefault;

		export interface Extra1 extends EnumItem {
			Name: "Extra1";
			Value: 1;
			EnumType: typeof StudioScriptEditorColorPresets;
		}

		export const Extra1: Extra1;

		export interface Extra2 extends EnumItem {
			Name: "Extra2";
			Value: 2;
			EnumType: typeof StudioScriptEditorColorPresets;
		}

		export const Extra2: Extra2;

		export interface Custom extends EnumItem {
			Name: "Custom";
			Value: 3;
			EnumType: typeof StudioScriptEditorColorPresets;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: Enum): Array<StudioScriptEditorColorPresets>
	}
	export type StudioScriptEditorColorPresets = StudioScriptEditorColorPresets.RobloxDefault | StudioScriptEditorColorPresets.Extra1 | StudioScriptEditorColorPresets.Extra2 | StudioScriptEditorColorPresets.Custom;
	export namespace StudioStyleGuideColor {
		export interface MainBackground extends EnumItem {
			Name: "MainBackground";
			Value: 0;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const MainBackground: MainBackground;

		export interface Titlebar extends EnumItem {
			Name: "Titlebar";
			Value: 1;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Titlebar: Titlebar;

		export interface Dropdown extends EnumItem {
			Name: "Dropdown";
			Value: 2;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Dropdown: Dropdown;

		export interface Tooltip extends EnumItem {
			Name: "Tooltip";
			Value: 3;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Tooltip: Tooltip;

		export interface Notification extends EnumItem {
			Name: "Notification";
			Value: 4;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Notification: Notification;

		export interface ScrollBar extends EnumItem {
			Name: "ScrollBar";
			Value: 5;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScrollBar: ScrollBar;

		export interface ScrollBarBackground extends EnumItem {
			Name: "ScrollBarBackground";
			Value: 6;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScrollBarBackground: ScrollBarBackground;

		export interface TabBar extends EnumItem {
			Name: "TabBar";
			Value: 7;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const TabBar: TabBar;

		export interface Tab extends EnumItem {
			Name: "Tab";
			Value: 8;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Tab: Tab;

		export interface FilterButtonDefault extends EnumItem {
			Name: "FilterButtonDefault";
			Value: 9;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const FilterButtonDefault: FilterButtonDefault;

		export interface FilterButtonHover extends EnumItem {
			Name: "FilterButtonHover";
			Value: 10;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const FilterButtonHover: FilterButtonHover;

		export interface FilterButtonChecked extends EnumItem {
			Name: "FilterButtonChecked";
			Value: 11;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const FilterButtonChecked: FilterButtonChecked;

		export interface FilterButtonAccent extends EnumItem {
			Name: "FilterButtonAccent";
			Value: 12;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const FilterButtonAccent: FilterButtonAccent;

		export interface FilterButtonBorder extends EnumItem {
			Name: "FilterButtonBorder";
			Value: 13;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const FilterButtonBorder: FilterButtonBorder;

		export interface FilterButtonBorderAlt extends EnumItem {
			Name: "FilterButtonBorderAlt";
			Value: 14;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const FilterButtonBorderAlt: FilterButtonBorderAlt;

		export interface RibbonTab extends EnumItem {
			Name: "RibbonTab";
			Value: 15;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const RibbonTab: RibbonTab;

		export interface RibbonTabTopBar extends EnumItem {
			Name: "RibbonTabTopBar";
			Value: 16;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const RibbonTabTopBar: RibbonTabTopBar;

		export interface Button extends EnumItem {
			Name: "Button";
			Value: 17;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Button: Button;

		export interface MainButton extends EnumItem {
			Name: "MainButton";
			Value: 18;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const MainButton: MainButton;

		export interface RibbonButton extends EnumItem {
			Name: "RibbonButton";
			Value: 19;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const RibbonButton: RibbonButton;

		export interface ViewPortBackground extends EnumItem {
			Name: "ViewPortBackground";
			Value: 20;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ViewPortBackground: ViewPortBackground;

		export interface InputFieldBackground extends EnumItem {
			Name: "InputFieldBackground";
			Value: 21;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const InputFieldBackground: InputFieldBackground;

		export interface Item extends EnumItem {
			Name: "Item";
			Value: 22;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Item: Item;

		export interface TableItem extends EnumItem {
			Name: "TableItem";
			Value: 23;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const TableItem: TableItem;

		export interface CategoryItem extends EnumItem {
			Name: "CategoryItem";
			Value: 24;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const CategoryItem: CategoryItem;

		export interface GameSettingsTableItem extends EnumItem {
			Name: "GameSettingsTableItem";
			Value: 25;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const GameSettingsTableItem: GameSettingsTableItem;

		export interface GameSettingsTooltip extends EnumItem {
			Name: "GameSettingsTooltip";
			Value: 26;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const GameSettingsTooltip: GameSettingsTooltip;

		export interface EmulatorBar extends EnumItem {
			Name: "EmulatorBar";
			Value: 27;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const EmulatorBar: EmulatorBar;

		export interface EmulatorDropDown extends EnumItem {
			Name: "EmulatorDropDown";
			Value: 28;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const EmulatorDropDown: EmulatorDropDown;

		export interface ColorPickerFrame extends EnumItem {
			Name: "ColorPickerFrame";
			Value: 29;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ColorPickerFrame: ColorPickerFrame;

		export interface CurrentMarker extends EnumItem {
			Name: "CurrentMarker";
			Value: 30;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const CurrentMarker: CurrentMarker;

		export interface Border extends EnumItem {
			Name: "Border";
			Value: 31;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Border: Border;

		export interface DropShadow extends EnumItem {
			Name: "DropShadow";
			Value: 32;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DropShadow: DropShadow;

		export interface Shadow extends EnumItem {
			Name: "Shadow";
			Value: 33;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Shadow: Shadow;

		export interface Light extends EnumItem {
			Name: "Light";
			Value: 34;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Light: Light;

		export interface Dark extends EnumItem {
			Name: "Dark";
			Value: 35;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Dark: Dark;

		export interface Mid extends EnumItem {
			Name: "Mid";
			Value: 36;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Mid: Mid;

		export interface MainText extends EnumItem {
			Name: "MainText";
			Value: 37;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const MainText: MainText;

		export interface SubText extends EnumItem {
			Name: "SubText";
			Value: 38;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const SubText: SubText;

		export interface TitlebarText extends EnumItem {
			Name: "TitlebarText";
			Value: 39;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const TitlebarText: TitlebarText;

		export interface BrightText extends EnumItem {
			Name: "BrightText";
			Value: 40;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const BrightText: BrightText;

		export interface DimmedText extends EnumItem {
			Name: "DimmedText";
			Value: 41;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DimmedText: DimmedText;

		export interface LinkText extends EnumItem {
			Name: "LinkText";
			Value: 42;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const LinkText: LinkText;

		export interface WarningText extends EnumItem {
			Name: "WarningText";
			Value: 43;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const WarningText: WarningText;

		export interface ErrorText extends EnumItem {
			Name: "ErrorText";
			Value: 44;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ErrorText: ErrorText;

		export interface InfoText extends EnumItem {
			Name: "InfoText";
			Value: 45;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const InfoText: InfoText;

		export interface SensitiveText extends EnumItem {
			Name: "SensitiveText";
			Value: 46;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const SensitiveText: SensitiveText;

		export interface ScriptSideWidget extends EnumItem {
			Name: "ScriptSideWidget";
			Value: 47;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptSideWidget: ScriptSideWidget;

		export interface ScriptBackground extends EnumItem {
			Name: "ScriptBackground";
			Value: 48;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptBackground: ScriptBackground;

		export interface ScriptText extends EnumItem {
			Name: "ScriptText";
			Value: 49;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptText: ScriptText;

		export interface ScriptSelectionText extends EnumItem {
			Name: "ScriptSelectionText";
			Value: 50;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptSelectionText: ScriptSelectionText;

		export interface ScriptSelectionBackground extends EnumItem {
			Name: "ScriptSelectionBackground";
			Value: 51;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptSelectionBackground: ScriptSelectionBackground;

		export interface ScriptFindSelectionBackground extends EnumItem {
			Name: "ScriptFindSelectionBackground";
			Value: 52;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptFindSelectionBackground: ScriptFindSelectionBackground;

		export interface ScriptMatchingWordSelectionBackground extends EnumItem {
			Name: "ScriptMatchingWordSelectionBackground";
			Value: 53;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptMatchingWordSelectionBackground: ScriptMatchingWordSelectionBackground;

		export interface ScriptOperator extends EnumItem {
			Name: "ScriptOperator";
			Value: 54;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptOperator: ScriptOperator;

		export interface ScriptNumber extends EnumItem {
			Name: "ScriptNumber";
			Value: 55;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptNumber: ScriptNumber;

		export interface ScriptString extends EnumItem {
			Name: "ScriptString";
			Value: 56;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptString: ScriptString;

		export interface ScriptComment extends EnumItem {
			Name: "ScriptComment";
			Value: 57;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptComment: ScriptComment;

		export interface ScriptKeyword extends EnumItem {
			Name: "ScriptKeyword";
			Value: 58;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptKeyword: ScriptKeyword;

		export interface ScriptBuiltInFunction extends EnumItem {
			Name: "ScriptBuiltInFunction";
			Value: 59;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptBuiltInFunction: ScriptBuiltInFunction;

		export interface ScriptWarning extends EnumItem {
			Name: "ScriptWarning";
			Value: 60;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptWarning: ScriptWarning;

		export interface ScriptError extends EnumItem {
			Name: "ScriptError";
			Value: 61;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptError: ScriptError;

		export interface ScriptWhitespace extends EnumItem {
			Name: "ScriptWhitespace";
			Value: 62;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptWhitespace: ScriptWhitespace;

		export interface ScriptRuler extends EnumItem {
			Name: "ScriptRuler";
			Value: 63;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptRuler: ScriptRuler;

		export interface DocViewCodeBackground extends EnumItem {
			Name: "DocViewCodeBackground";
			Value: 64;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DocViewCodeBackground: DocViewCodeBackground;

		export interface DebuggerCurrentLine extends EnumItem {
			Name: "DebuggerCurrentLine";
			Value: 65;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DebuggerCurrentLine: DebuggerCurrentLine;

		export interface DebuggerErrorLine extends EnumItem {
			Name: "DebuggerErrorLine";
			Value: 66;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DebuggerErrorLine: DebuggerErrorLine;

		export interface ScriptEditorCurrentLine extends EnumItem {
			Name: "ScriptEditorCurrentLine";
			Value: 105;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptEditorCurrentLine: ScriptEditorCurrentLine;

		export interface DiffFilePathText extends EnumItem {
			Name: "DiffFilePathText";
			Value: 67;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffFilePathText: DiffFilePathText;

		export interface DiffTextHunkInfo extends EnumItem {
			Name: "DiffTextHunkInfo";
			Value: 68;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffTextHunkInfo: DiffTextHunkInfo;

		export interface DiffTextNoChange extends EnumItem {
			Name: "DiffTextNoChange";
			Value: 69;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffTextNoChange: DiffTextNoChange;

		export interface DiffTextAddition extends EnumItem {
			Name: "DiffTextAddition";
			Value: 70;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffTextAddition: DiffTextAddition;

		export interface DiffTextDeletion extends EnumItem {
			Name: "DiffTextDeletion";
			Value: 71;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffTextDeletion: DiffTextDeletion;

		export interface DiffTextSeparatorBackground extends EnumItem {
			Name: "DiffTextSeparatorBackground";
			Value: 72;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffTextSeparatorBackground: DiffTextSeparatorBackground;

		export interface DiffTextNoChangeBackground extends EnumItem {
			Name: "DiffTextNoChangeBackground";
			Value: 73;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffTextNoChangeBackground: DiffTextNoChangeBackground;

		export interface DiffTextAdditionBackground extends EnumItem {
			Name: "DiffTextAdditionBackground";
			Value: 74;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffTextAdditionBackground: DiffTextAdditionBackground;

		export interface DiffTextDeletionBackground extends EnumItem {
			Name: "DiffTextDeletionBackground";
			Value: 75;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffTextDeletionBackground: DiffTextDeletionBackground;

		export interface DiffLineNum extends EnumItem {
			Name: "DiffLineNum";
			Value: 76;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffLineNum: DiffLineNum;

		export interface DiffLineNumSeparatorBackground extends EnumItem {
			Name: "DiffLineNumSeparatorBackground";
			Value: 77;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffLineNumSeparatorBackground: DiffLineNumSeparatorBackground;

		export interface DiffLineNumNoChangeBackground extends EnumItem {
			Name: "DiffLineNumNoChangeBackground";
			Value: 78;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffLineNumNoChangeBackground: DiffLineNumNoChangeBackground;

		export interface DiffLineNumAdditionBackground extends EnumItem {
			Name: "DiffLineNumAdditionBackground";
			Value: 79;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffLineNumAdditionBackground: DiffLineNumAdditionBackground;

		export interface DiffLineNumDeletionBackground extends EnumItem {
			Name: "DiffLineNumDeletionBackground";
			Value: 80;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffLineNumDeletionBackground: DiffLineNumDeletionBackground;

		export interface DiffFilePathBackground extends EnumItem {
			Name: "DiffFilePathBackground";
			Value: 81;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffFilePathBackground: DiffFilePathBackground;

		export interface DiffFilePathBorder extends EnumItem {
			Name: "DiffFilePathBorder";
			Value: 82;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DiffFilePathBorder: DiffFilePathBorder;

		export interface ChatIncomingBgColor extends EnumItem {
			Name: "ChatIncomingBgColor";
			Value: 83;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ChatIncomingBgColor: ChatIncomingBgColor;

		export interface ChatIncomingTextColor extends EnumItem {
			Name: "ChatIncomingTextColor";
			Value: 84;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ChatIncomingTextColor: ChatIncomingTextColor;

		export interface ChatOutgoingBgColor extends EnumItem {
			Name: "ChatOutgoingBgColor";
			Value: 85;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ChatOutgoingBgColor: ChatOutgoingBgColor;

		export interface ChatOutgoingTextColor extends EnumItem {
			Name: "ChatOutgoingTextColor";
			Value: 86;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ChatOutgoingTextColor: ChatOutgoingTextColor;

		export interface ChatModeratedMessageColor extends EnumItem {
			Name: "ChatModeratedMessageColor";
			Value: 87;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ChatModeratedMessageColor: ChatModeratedMessageColor;

		export interface Separator extends EnumItem {
			Name: "Separator";
			Value: 88;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Separator: Separator;

		export interface ButtonBorder extends EnumItem {
			Name: "ButtonBorder";
			Value: 89;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ButtonBorder: ButtonBorder;

		export interface ButtonText extends EnumItem {
			Name: "ButtonText";
			Value: 90;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ButtonText: ButtonText;

		export interface InputFieldBorder extends EnumItem {
			Name: "InputFieldBorder";
			Value: 91;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const InputFieldBorder: InputFieldBorder;

		export interface CheckedFieldBackground extends EnumItem {
			Name: "CheckedFieldBackground";
			Value: 92;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const CheckedFieldBackground: CheckedFieldBackground;

		export interface CheckedFieldBorder extends EnumItem {
			Name: "CheckedFieldBorder";
			Value: 93;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const CheckedFieldBorder: CheckedFieldBorder;

		export interface CheckedFieldIndicator extends EnumItem {
			Name: "CheckedFieldIndicator";
			Value: 94;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const CheckedFieldIndicator: CheckedFieldIndicator;

		export interface HeaderSection extends EnumItem {
			Name: "HeaderSection";
			Value: 95;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const HeaderSection: HeaderSection;

		export interface Midlight extends EnumItem {
			Name: "Midlight";
			Value: 96;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const Midlight: Midlight;

		export interface StatusBar extends EnumItem {
			Name: "StatusBar";
			Value: 97;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const StatusBar: StatusBar;

		export interface DialogButton extends EnumItem {
			Name: "DialogButton";
			Value: 98;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DialogButton: DialogButton;

		export interface DialogButtonText extends EnumItem {
			Name: "DialogButtonText";
			Value: 99;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DialogButtonText: DialogButtonText;

		export interface DialogButtonBorder extends EnumItem {
			Name: "DialogButtonBorder";
			Value: 100;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DialogButtonBorder: DialogButtonBorder;

		export interface DialogMainButton extends EnumItem {
			Name: "DialogMainButton";
			Value: 101;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DialogMainButton: DialogMainButton;

		export interface DialogMainButtonText extends EnumItem {
			Name: "DialogMainButtonText";
			Value: 102;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const DialogMainButtonText: DialogMainButtonText;

		export interface InfoBarWarningBackground extends EnumItem {
			Name: "InfoBarWarningBackground";
			Value: 103;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const InfoBarWarningBackground: InfoBarWarningBackground;

		export interface InfoBarWarningText extends EnumItem {
			Name: "InfoBarWarningText";
			Value: 104;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const InfoBarWarningText: InfoBarWarningText;

		export interface ScriptMethod extends EnumItem {
			Name: "ScriptMethod";
			Value: 106;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptMethod: ScriptMethod;

		export interface ScriptProperty extends EnumItem {
			Name: "ScriptProperty";
			Value: 107;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptProperty: ScriptProperty;

		export interface ScriptNil extends EnumItem {
			Name: "ScriptNil";
			Value: 108;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptNil: ScriptNil;

		export interface ScriptBool extends EnumItem {
			Name: "ScriptBool";
			Value: 109;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptBool: ScriptBool;

		export interface ScriptFunction extends EnumItem {
			Name: "ScriptFunction";
			Value: 110;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptFunction: ScriptFunction;

		export interface ScriptLocal extends EnumItem {
			Name: "ScriptLocal";
			Value: 111;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptLocal: ScriptLocal;

		export interface ScriptSelf extends EnumItem {
			Name: "ScriptSelf";
			Value: 112;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptSelf: ScriptSelf;

		export interface ScriptLuauKeyword extends EnumItem {
			Name: "ScriptLuauKeyword";
			Value: 113;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptLuauKeyword: ScriptLuauKeyword;

		export interface ScriptFunctionName extends EnumItem {
			Name: "ScriptFunctionName";
			Value: 114;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptFunctionName: ScriptFunctionName;

		export interface ScriptTodo extends EnumItem {
			Name: "ScriptTodo";
			Value: 115;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptTodo: ScriptTodo;

		export interface ScriptBracket extends EnumItem {
			Name: "ScriptBracket";
			Value: 116;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const ScriptBracket: ScriptBracket;

		export interface AttributeCog extends EnumItem {
			Name: "AttributeCog";
			Value: 117;
			EnumType: typeof StudioStyleGuideColor;
		}

		export const AttributeCog: AttributeCog;

		export function GetEnumItems(this: Enum): Array<StudioStyleGuideColor>
	}
	export type StudioStyleGuideColor = StudioStyleGuideColor.MainBackground | StudioStyleGuideColor.Titlebar | StudioStyleGuideColor.Dropdown | StudioStyleGuideColor.Tooltip | StudioStyleGuideColor.Notification | StudioStyleGuideColor.ScrollBar | StudioStyleGuideColor.ScrollBarBackground | StudioStyleGuideColor.TabBar | StudioStyleGuideColor.Tab | StudioStyleGuideColor.FilterButtonDefault | StudioStyleGuideColor.FilterButtonHover | StudioStyleGuideColor.FilterButtonChecked | StudioStyleGuideColor.FilterButtonAccent | StudioStyleGuideColor.FilterButtonBorder | StudioStyleGuideColor.FilterButtonBorderAlt | StudioStyleGuideColor.RibbonTab | StudioStyleGuideColor.RibbonTabTopBar | StudioStyleGuideColor.Button | StudioStyleGuideColor.MainButton | StudioStyleGuideColor.RibbonButton | StudioStyleGuideColor.ViewPortBackground | StudioStyleGuideColor.InputFieldBackground | StudioStyleGuideColor.Item | StudioStyleGuideColor.TableItem | StudioStyleGuideColor.CategoryItem | StudioStyleGuideColor.GameSettingsTableItem | StudioStyleGuideColor.GameSettingsTooltip | StudioStyleGuideColor.EmulatorBar | StudioStyleGuideColor.EmulatorDropDown | StudioStyleGuideColor.ColorPickerFrame | StudioStyleGuideColor.CurrentMarker | StudioStyleGuideColor.Border | StudioStyleGuideColor.DropShadow | StudioStyleGuideColor.Shadow | StudioStyleGuideColor.Light | StudioStyleGuideColor.Dark | StudioStyleGuideColor.Mid | StudioStyleGuideColor.MainText | StudioStyleGuideColor.SubText | StudioStyleGuideColor.TitlebarText | StudioStyleGuideColor.BrightText | StudioStyleGuideColor.DimmedText | StudioStyleGuideColor.LinkText | StudioStyleGuideColor.WarningText | StudioStyleGuideColor.ErrorText | StudioStyleGuideColor.InfoText | StudioStyleGuideColor.SensitiveText | StudioStyleGuideColor.ScriptSideWidget | StudioStyleGuideColor.ScriptBackground | StudioStyleGuideColor.ScriptText | StudioStyleGuideColor.ScriptSelectionText | StudioStyleGuideColor.ScriptSelectionBackground | StudioStyleGuideColor.ScriptFindSelectionBackground | StudioStyleGuideColor.ScriptMatchingWordSelectionBackground | StudioStyleGuideColor.ScriptOperator | StudioStyleGuideColor.ScriptNumber | StudioStyleGuideColor.ScriptString | StudioStyleGuideColor.ScriptComment | StudioStyleGuideColor.ScriptKeyword | StudioStyleGuideColor.ScriptBuiltInFunction | StudioStyleGuideColor.ScriptWarning | StudioStyleGuideColor.ScriptError | StudioStyleGuideColor.ScriptWhitespace | StudioStyleGuideColor.ScriptRuler | StudioStyleGuideColor.DocViewCodeBackground | StudioStyleGuideColor.DebuggerCurrentLine | StudioStyleGuideColor.DebuggerErrorLine | StudioStyleGuideColor.ScriptEditorCurrentLine | StudioStyleGuideColor.DiffFilePathText | StudioStyleGuideColor.DiffTextHunkInfo | StudioStyleGuideColor.DiffTextNoChange | StudioStyleGuideColor.DiffTextAddition | StudioStyleGuideColor.DiffTextDeletion | StudioStyleGuideColor.DiffTextSeparatorBackground | StudioStyleGuideColor.DiffTextNoChangeBackground | StudioStyleGuideColor.DiffTextAdditionBackground | StudioStyleGuideColor.DiffTextDeletionBackground | StudioStyleGuideColor.DiffLineNum | StudioStyleGuideColor.DiffLineNumSeparatorBackground | StudioStyleGuideColor.DiffLineNumNoChangeBackground | StudioStyleGuideColor.DiffLineNumAdditionBackground | StudioStyleGuideColor.DiffLineNumDeletionBackground | StudioStyleGuideColor.DiffFilePathBackground | StudioStyleGuideColor.DiffFilePathBorder | StudioStyleGuideColor.ChatIncomingBgColor | StudioStyleGuideColor.ChatIncomingTextColor | StudioStyleGuideColor.ChatOutgoingBgColor | StudioStyleGuideColor.ChatOutgoingTextColor | StudioStyleGuideColor.ChatModeratedMessageColor | StudioStyleGuideColor.Separator | StudioStyleGuideColor.ButtonBorder | StudioStyleGuideColor.ButtonText | StudioStyleGuideColor.InputFieldBorder | StudioStyleGuideColor.CheckedFieldBackground | StudioStyleGuideColor.CheckedFieldBorder | StudioStyleGuideColor.CheckedFieldIndicator | StudioStyleGuideColor.HeaderSection | StudioStyleGuideColor.Midlight | StudioStyleGuideColor.StatusBar | StudioStyleGuideColor.DialogButton | StudioStyleGuideColor.DialogButtonText | StudioStyleGuideColor.DialogButtonBorder | StudioStyleGuideColor.DialogMainButton | StudioStyleGuideColor.DialogMainButtonText | StudioStyleGuideColor.InfoBarWarningBackground | StudioStyleGuideColor.InfoBarWarningText | StudioStyleGuideColor.ScriptMethod | StudioStyleGuideColor.ScriptProperty | StudioStyleGuideColor.ScriptNil | StudioStyleGuideColor.ScriptBool | StudioStyleGuideColor.ScriptFunction | StudioStyleGuideColor.ScriptLocal | StudioStyleGuideColor.ScriptSelf | StudioStyleGuideColor.ScriptLuauKeyword | StudioStyleGuideColor.ScriptFunctionName | StudioStyleGuideColor.ScriptTodo | StudioStyleGuideColor.ScriptBracket | StudioStyleGuideColor.AttributeCog;
	export namespace StudioStyleGuideModifier {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof StudioStyleGuideModifier;
		}

		export const Default: Default;

		export interface Selected extends EnumItem {
			Name: "Selected";
			Value: 1;
			EnumType: typeof StudioStyleGuideModifier;
		}

		export const Selected: Selected;

		export interface Pressed extends EnumItem {
			Name: "Pressed";
			Value: 2;
			EnumType: typeof StudioStyleGuideModifier;
		}

		export const Pressed: Pressed;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 3;
			EnumType: typeof StudioStyleGuideModifier;
		}

		export const Disabled: Disabled;

		export interface Hover extends EnumItem {
			Name: "Hover";
			Value: 4;
			EnumType: typeof StudioStyleGuideModifier;
		}

		export const Hover: Hover;

		export function GetEnumItems(this: Enum): Array<StudioStyleGuideModifier>
	}
	export type StudioStyleGuideModifier = StudioStyleGuideModifier.Default | StudioStyleGuideModifier.Selected | StudioStyleGuideModifier.Pressed | StudioStyleGuideModifier.Disabled | StudioStyleGuideModifier.Hover;
	export namespace Style {
		export interface AlternatingSupports extends EnumItem {
			Name: "AlternatingSupports";
			Value: 0;
			EnumType: typeof Style;
		}

		export const AlternatingSupports: AlternatingSupports;

		export interface BridgeStyleSupports extends EnumItem {
			Name: "BridgeStyleSupports";
			Value: 1;
			EnumType: typeof Style;
		}

		export const BridgeStyleSupports: BridgeStyleSupports;

		export interface NoSupports extends EnumItem {
			Name: "NoSupports";
			Value: 2;
			EnumType: typeof Style;
		}

		export const NoSupports: NoSupports;

		export function GetEnumItems(this: Enum): Array<Style>
	}
	export type Style = Style.AlternatingSupports | Style.BridgeStyleSupports | Style.NoSupports;
	export namespace SurfaceConstraint {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof SurfaceConstraint;
		}

		export const None: None;

		export interface Hinge extends EnumItem {
			Name: "Hinge";
			Value: 1;
			EnumType: typeof SurfaceConstraint;
		}

		export const Hinge: Hinge;

		export interface SteppingMotor extends EnumItem {
			Name: "SteppingMotor";
			Value: 2;
			EnumType: typeof SurfaceConstraint;
		}

		export const SteppingMotor: SteppingMotor;

		export interface Motor extends EnumItem {
			Name: "Motor";
			Value: 3;
			EnumType: typeof SurfaceConstraint;
		}

		export const Motor: Motor;

		export function GetEnumItems(this: Enum): Array<SurfaceConstraint>
	}
	export type SurfaceConstraint = SurfaceConstraint.None | SurfaceConstraint.Hinge | SurfaceConstraint.SteppingMotor | SurfaceConstraint.Motor;
	export namespace SurfaceGuiSizingMode {
		export interface FixedSize extends EnumItem {
			Name: "FixedSize";
			Value: 0;
			EnumType: typeof SurfaceGuiSizingMode;
		}

		export const FixedSize: FixedSize;

		export interface PixelsPerStud extends EnumItem {
			Name: "PixelsPerStud";
			Value: 1;
			EnumType: typeof SurfaceGuiSizingMode;
		}

		export const PixelsPerStud: PixelsPerStud;

		export function GetEnumItems(this: Enum): Array<SurfaceGuiSizingMode>
	}
	export type SurfaceGuiSizingMode = SurfaceGuiSizingMode.FixedSize | SurfaceGuiSizingMode.PixelsPerStud;
	export namespace SurfaceType {
		export interface Smooth extends EnumItem {
			Name: "Smooth";
			Value: 0;
			EnumType: typeof SurfaceType;
		}

		export const Smooth: Smooth;
		/** @deprecated renamed to Smooth */
		export const Spawn: Smooth;
		/** @deprecated renamed to Smooth */
		export const Unjoinable: Smooth;

		export interface Glue extends EnumItem {
			Name: "Glue";
			Value: 1;
			EnumType: typeof SurfaceType;
		}

		export const Glue: Glue;
		/** @deprecated renamed to Glue */
		export const Bumps: Glue;

		export interface Weld extends EnumItem {
			Name: "Weld";
			Value: 2;
			EnumType: typeof SurfaceType;
		}

		export const Weld: Weld;

		export interface Studs extends EnumItem {
			Name: "Studs";
			Value: 3;
			EnumType: typeof SurfaceType;
		}

		export const Studs: Studs;

		export interface Inlet extends EnumItem {
			Name: "Inlet";
			Value: 4;
			EnumType: typeof SurfaceType;
		}

		export const Inlet: Inlet;

		export interface Universal extends EnumItem {
			Name: "Universal";
			Value: 5;
			EnumType: typeof SurfaceType;
		}

		export const Universal: Universal;

		export interface Hinge extends EnumItem {
			Name: "Hinge";
			Value: 6;
			EnumType: typeof SurfaceType;
		}

		export const Hinge: Hinge;

		export interface Motor extends EnumItem {
			Name: "Motor";
			Value: 7;
			EnumType: typeof SurfaceType;
		}

		export const Motor: Motor;

		export interface SteppingMotor extends EnumItem {
			Name: "SteppingMotor";
			Value: 8;
			EnumType: typeof SurfaceType;
		}

		export const SteppingMotor: SteppingMotor;

		export interface SmoothNoOutlines extends EnumItem {
			Name: "SmoothNoOutlines";
			Value: 10;
			EnumType: typeof SurfaceType;
		}

		export const SmoothNoOutlines: SmoothNoOutlines;

		export function GetEnumItems(this: Enum): Array<SurfaceType>
	}
	export type SurfaceType = SurfaceType.Smooth | SurfaceType.Glue | SurfaceType.Weld | SurfaceType.Studs | SurfaceType.Inlet | SurfaceType.Universal | SurfaceType.Hinge | SurfaceType.Motor | SurfaceType.SteppingMotor | SurfaceType.SmoothNoOutlines;
	export namespace SwipeDirection {
		export interface Right extends EnumItem {
			Name: "Right";
			Value: 0;
			EnumType: typeof SwipeDirection;
		}

		export const Right: Right;

		export interface Left extends EnumItem {
			Name: "Left";
			Value: 1;
			EnumType: typeof SwipeDirection;
		}

		export const Left: Left;

		export interface Up extends EnumItem {
			Name: "Up";
			Value: 2;
			EnumType: typeof SwipeDirection;
		}

		export const Up: Up;

		export interface Down extends EnumItem {
			Name: "Down";
			Value: 3;
			EnumType: typeof SwipeDirection;
		}

		export const Down: Down;

		export interface None extends EnumItem {
			Name: "None";
			Value: 4;
			EnumType: typeof SwipeDirection;
		}

		export const None: None;

		export function GetEnumItems(this: Enum): Array<SwipeDirection>
	}
	export type SwipeDirection = SwipeDirection.Right | SwipeDirection.Left | SwipeDirection.Up | SwipeDirection.Down | SwipeDirection.None;
	export namespace TableMajorAxis {
		export interface RowMajor extends EnumItem {
			Name: "RowMajor";
			Value: 0;
			EnumType: typeof TableMajorAxis;
		}

		export const RowMajor: RowMajor;

		export interface ColumnMajor extends EnumItem {
			Name: "ColumnMajor";
			Value: 1;
			EnumType: typeof TableMajorAxis;
		}

		export const ColumnMajor: ColumnMajor;

		export function GetEnumItems(this: Enum): Array<TableMajorAxis>
	}
	export type TableMajorAxis = TableMajorAxis.RowMajor | TableMajorAxis.ColumnMajor;
	export namespace Technology {
		export interface Compatibility extends EnumItem {
			Name: "Compatibility";
			Value: 2;
			EnumType: typeof Technology;
		}

		export const Compatibility: Compatibility;

		export interface Voxel extends EnumItem {
			Name: "Voxel";
			Value: 1;
			EnumType: typeof Technology;
		}

		export const Voxel: Voxel;

		export interface ShadowMap extends EnumItem {
			Name: "ShadowMap";
			Value: 3;
			EnumType: typeof Technology;
		}

		export const ShadowMap: ShadowMap;

		export interface Legacy extends EnumItem {
			Name: "Legacy";
			Value: 0;
			EnumType: typeof Technology;
		}

		export const Legacy: Legacy;

		export interface Future extends EnumItem {
			Name: "Future";
			Value: 4;
			EnumType: typeof Technology;
		}

		export const Future: Future;

		export function GetEnumItems(this: Enum): Array<Technology>
	}
	export type Technology = Technology.Compatibility | Technology.Voxel | Technology.ShadowMap | Technology.Legacy | Technology.Future;
	export namespace TeleportMethod {
		export interface TeleportToSpawnByName extends EnumItem {
			Name: "TeleportToSpawnByName";
			Value: 0;
			EnumType: typeof TeleportMethod;
		}

		export const TeleportToSpawnByName: TeleportToSpawnByName;

		export interface TeleportToPlaceInstance extends EnumItem {
			Name: "TeleportToPlaceInstance";
			Value: 1;
			EnumType: typeof TeleportMethod;
		}

		export const TeleportToPlaceInstance: TeleportToPlaceInstance;

		export interface TeleportToPrivateServer extends EnumItem {
			Name: "TeleportToPrivateServer";
			Value: 2;
			EnumType: typeof TeleportMethod;
		}

		export const TeleportToPrivateServer: TeleportToPrivateServer;

		export interface TeleportPartyAsync extends EnumItem {
			Name: "TeleportPartyAsync";
			Value: 3;
			EnumType: typeof TeleportMethod;
		}

		export const TeleportPartyAsync: TeleportPartyAsync;

		export interface TeleportUnknown extends EnumItem {
			Name: "TeleportUnknown";
			Value: 4;
			EnumType: typeof TeleportMethod;
		}

		export const TeleportUnknown: TeleportUnknown;

		export function GetEnumItems(this: Enum): Array<TeleportMethod>
	}
	export type TeleportMethod = TeleportMethod.TeleportToSpawnByName | TeleportMethod.TeleportToPlaceInstance | TeleportMethod.TeleportToPrivateServer | TeleportMethod.TeleportPartyAsync | TeleportMethod.TeleportUnknown;
	export namespace TeleportResult {
		export interface Success extends EnumItem {
			Name: "Success";
			Value: 0;
			EnumType: typeof TeleportResult;
		}

		export const Success: Success;

		export interface Failure extends EnumItem {
			Name: "Failure";
			Value: 1;
			EnumType: typeof TeleportResult;
		}

		export const Failure: Failure;

		export interface GameNotFound extends EnumItem {
			Name: "GameNotFound";
			Value: 2;
			EnumType: typeof TeleportResult;
		}

		export const GameNotFound: GameNotFound;

		export interface GameEnded extends EnumItem {
			Name: "GameEnded";
			Value: 3;
			EnumType: typeof TeleportResult;
		}

		export const GameEnded: GameEnded;

		export interface GameFull extends EnumItem {
			Name: "GameFull";
			Value: 4;
			EnumType: typeof TeleportResult;
		}

		export const GameFull: GameFull;

		export interface Unauthorized extends EnumItem {
			Name: "Unauthorized";
			Value: 5;
			EnumType: typeof TeleportResult;
		}

		export const Unauthorized: Unauthorized;

		export interface Flooded extends EnumItem {
			Name: "Flooded";
			Value: 6;
			EnumType: typeof TeleportResult;
		}

		export const Flooded: Flooded;

		export interface IsTeleporting extends EnumItem {
			Name: "IsTeleporting";
			Value: 7;
			EnumType: typeof TeleportResult;
		}

		export const IsTeleporting: IsTeleporting;

		export function GetEnumItems(this: Enum): Array<TeleportResult>
	}
	export type TeleportResult = TeleportResult.Success | TeleportResult.Failure | TeleportResult.GameNotFound | TeleportResult.GameEnded | TeleportResult.GameFull | TeleportResult.Unauthorized | TeleportResult.Flooded | TeleportResult.IsTeleporting;
	export namespace TeleportState {
		export interface RequestedFromServer extends EnumItem {
			Name: "RequestedFromServer";
			Value: 0;
			EnumType: typeof TeleportState;
		}

		export const RequestedFromServer: RequestedFromServer;

		export interface Started extends EnumItem {
			Name: "Started";
			Value: 1;
			EnumType: typeof TeleportState;
		}

		export const Started: Started;

		export interface WaitingForServer extends EnumItem {
			Name: "WaitingForServer";
			Value: 2;
			EnumType: typeof TeleportState;
		}

		export const WaitingForServer: WaitingForServer;

		export interface Failed extends EnumItem {
			Name: "Failed";
			Value: 3;
			EnumType: typeof TeleportState;
		}

		export const Failed: Failed;

		export interface InProgress extends EnumItem {
			Name: "InProgress";
			Value: 4;
			EnumType: typeof TeleportState;
		}

		export const InProgress: InProgress;

		export function GetEnumItems(this: Enum): Array<TeleportState>
	}
	export type TeleportState = TeleportState.RequestedFromServer | TeleportState.Started | TeleportState.WaitingForServer | TeleportState.Failed | TeleportState.InProgress;
	export namespace TeleportType {
		export interface ToPlace extends EnumItem {
			Name: "ToPlace";
			Value: 0;
			EnumType: typeof TeleportType;
		}

		export const ToPlace: ToPlace;

		export interface ToInstance extends EnumItem {
			Name: "ToInstance";
			Value: 1;
			EnumType: typeof TeleportType;
		}

		export const ToInstance: ToInstance;

		export interface ToReservedServer extends EnumItem {
			Name: "ToReservedServer";
			Value: 2;
			EnumType: typeof TeleportType;
		}

		export const ToReservedServer: ToReservedServer;

		export function GetEnumItems(this: Enum): Array<TeleportType>
	}
	export type TeleportType = TeleportType.ToPlace | TeleportType.ToInstance | TeleportType.ToReservedServer;
	export namespace TerrainAcquisitionMethod {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof TerrainAcquisitionMethod;
		}

		export const None: None;

		export interface Legacy extends EnumItem {
			Name: "Legacy";
			Value: 1;
			EnumType: typeof TerrainAcquisitionMethod;
		}

		export const Legacy: Legacy;

		export interface Template extends EnumItem {
			Name: "Template";
			Value: 2;
			EnumType: typeof TerrainAcquisitionMethod;
		}

		export const Template: Template;

		export interface Generate extends EnumItem {
			Name: "Generate";
			Value: 3;
			EnumType: typeof TerrainAcquisitionMethod;
		}

		export const Generate: Generate;

		export interface Import extends EnumItem {
			Name: "Import";
			Value: 4;
			EnumType: typeof TerrainAcquisitionMethod;
		}

		export const Import: Import;

		export interface Convert extends EnumItem {
			Name: "Convert";
			Value: 5;
			EnumType: typeof TerrainAcquisitionMethod;
		}

		export const Convert: Convert;

		export interface EditAddTool extends EnumItem {
			Name: "EditAddTool";
			Value: 6;
			EnumType: typeof TerrainAcquisitionMethod;
		}

		export const EditAddTool: EditAddTool;

		export interface EditSeaLevelTool extends EnumItem {
			Name: "EditSeaLevelTool";
			Value: 7;
			EnumType: typeof TerrainAcquisitionMethod;
		}

		export const EditSeaLevelTool: EditSeaLevelTool;

		export interface EditReplaceTool extends EnumItem {
			Name: "EditReplaceTool";
			Value: 8;
			EnumType: typeof TerrainAcquisitionMethod;
		}

		export const EditReplaceTool: EditReplaceTool;

		export interface RegionFillTool extends EnumItem {
			Name: "RegionFillTool";
			Value: 9;
			EnumType: typeof TerrainAcquisitionMethod;
		}

		export const RegionFillTool: RegionFillTool;

		export interface RegionPasteTool extends EnumItem {
			Name: "RegionPasteTool";
			Value: 10;
			EnumType: typeof TerrainAcquisitionMethod;
		}

		export const RegionPasteTool: RegionPasteTool;

		export interface Other extends EnumItem {
			Name: "Other";
			Value: 11;
			EnumType: typeof TerrainAcquisitionMethod;
		}

		export const Other: Other;

		export function GetEnumItems(this: Enum): Array<TerrainAcquisitionMethod>
	}
	export type TerrainAcquisitionMethod = TerrainAcquisitionMethod.None | TerrainAcquisitionMethod.Legacy | TerrainAcquisitionMethod.Template | TerrainAcquisitionMethod.Generate | TerrainAcquisitionMethod.Import | TerrainAcquisitionMethod.Convert | TerrainAcquisitionMethod.EditAddTool | TerrainAcquisitionMethod.EditSeaLevelTool | TerrainAcquisitionMethod.EditReplaceTool | TerrainAcquisitionMethod.RegionFillTool | TerrainAcquisitionMethod.RegionPasteTool | TerrainAcquisitionMethod.Other;
	export namespace TerrainFace {
		export interface Top extends EnumItem {
			Name: "Top";
			Value: 0;
			EnumType: typeof TerrainFace;
		}

		export const Top: Top;

		export interface Side extends EnumItem {
			Name: "Side";
			Value: 1;
			EnumType: typeof TerrainFace;
		}

		export const Side: Side;

		export interface Bottom extends EnumItem {
			Name: "Bottom";
			Value: 2;
			EnumType: typeof TerrainFace;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: Enum): Array<TerrainFace>
	}
	export type TerrainFace = TerrainFace.Top | TerrainFace.Side | TerrainFace.Bottom;
	export namespace TextChatMessageStatus {
		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 1;
			EnumType: typeof TextChatMessageStatus;
		}

		export const Unknown: Unknown;

		export interface Success extends EnumItem {
			Name: "Success";
			Value: 2;
			EnumType: typeof TextChatMessageStatus;
		}

		export const Success: Success;

		export interface Sending extends EnumItem {
			Name: "Sending";
			Value: 3;
			EnumType: typeof TextChatMessageStatus;
		}

		export const Sending: Sending;

		export interface TextFilterFailed extends EnumItem {
			Name: "TextFilterFailed";
			Value: 4;
			EnumType: typeof TextChatMessageStatus;
		}

		export const TextFilterFailed: TextFilterFailed;

		export interface Floodchecked extends EnumItem {
			Name: "Floodchecked";
			Value: 5;
			EnumType: typeof TextChatMessageStatus;
		}

		export const Floodchecked: Floodchecked;

		export interface InvalidPrivacySettings extends EnumItem {
			Name: "InvalidPrivacySettings";
			Value: 6;
			EnumType: typeof TextChatMessageStatus;
		}

		export const InvalidPrivacySettings: InvalidPrivacySettings;

		export interface InvalidTextChannelPermissions extends EnumItem {
			Name: "InvalidTextChannelPermissions";
			Value: 7;
			EnumType: typeof TextChatMessageStatus;
		}

		export const InvalidTextChannelPermissions: InvalidTextChannelPermissions;

		export interface MessageTooLong extends EnumItem {
			Name: "MessageTooLong";
			Value: 8;
			EnumType: typeof TextChatMessageStatus;
		}

		export const MessageTooLong: MessageTooLong;

		export function GetEnumItems(this: Enum): Array<TextChatMessageStatus>
	}
	export type TextChatMessageStatus = TextChatMessageStatus.Unknown | TextChatMessageStatus.Success | TextChatMessageStatus.Sending | TextChatMessageStatus.TextFilterFailed | TextChatMessageStatus.Floodchecked | TextChatMessageStatus.InvalidPrivacySettings | TextChatMessageStatus.InvalidTextChannelPermissions | TextChatMessageStatus.MessageTooLong;
	export namespace TextFilterContext {
		export interface PublicChat extends EnumItem {
			Name: "PublicChat";
			Value: 1;
			EnumType: typeof TextFilterContext;
		}

		export const PublicChat: PublicChat;

		export interface PrivateChat extends EnumItem {
			Name: "PrivateChat";
			Value: 2;
			EnumType: typeof TextFilterContext;
		}

		export const PrivateChat: PrivateChat;

		export function GetEnumItems(this: Enum): Array<TextFilterContext>
	}
	export type TextFilterContext = TextFilterContext.PublicChat | TextFilterContext.PrivateChat;
	export namespace TextInputType {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof TextInputType;
		}

		export const Default: Default;

		export interface NoSuggestions extends EnumItem {
			Name: "NoSuggestions";
			Value: 1;
			EnumType: typeof TextInputType;
		}

		export const NoSuggestions: NoSuggestions;

		export interface Number extends EnumItem {
			Name: "Number";
			Value: 2;
			EnumType: typeof TextInputType;
		}

		export const Number: Number;

		export interface Email extends EnumItem {
			Name: "Email";
			Value: 3;
			EnumType: typeof TextInputType;
		}

		export const Email: Email;

		export interface Phone extends EnumItem {
			Name: "Phone";
			Value: 4;
			EnumType: typeof TextInputType;
		}

		export const Phone: Phone;

		export interface Password extends EnumItem {
			Name: "Password";
			Value: 5;
			EnumType: typeof TextInputType;
		}

		export const Password: Password;

		export interface PasswordShown extends EnumItem {
			Name: "PasswordShown";
			Value: 6;
			EnumType: typeof TextInputType;
		}

		export const PasswordShown: PasswordShown;

		export interface Username extends EnumItem {
			Name: "Username";
			Value: 7;
			EnumType: typeof TextInputType;
		}

		export const Username: Username;

		export interface OneTimePassword extends EnumItem {
			Name: "OneTimePassword";
			Value: 8;
			EnumType: typeof TextInputType;
		}

		export const OneTimePassword: OneTimePassword;

		export function GetEnumItems(this: Enum): Array<TextInputType>
	}
	export type TextInputType = TextInputType.Default | TextInputType.NoSuggestions | TextInputType.Number | TextInputType.Email | TextInputType.Phone | TextInputType.Password | TextInputType.PasswordShown | TextInputType.Username | TextInputType.OneTimePassword;
	export namespace TextTruncate {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof TextTruncate;
		}

		export const None: None;

		export interface AtEnd extends EnumItem {
			Name: "AtEnd";
			Value: 1;
			EnumType: typeof TextTruncate;
		}

		export const AtEnd: AtEnd;

		export function GetEnumItems(this: Enum): Array<TextTruncate>
	}
	export type TextTruncate = TextTruncate.None | TextTruncate.AtEnd;
	export namespace TextXAlignment {
		export interface Left extends EnumItem {
			Name: "Left";
			Value: 0;
			EnumType: typeof TextXAlignment;
		}

		export const Left: Left;

		export interface Center extends EnumItem {
			Name: "Center";
			Value: 2;
			EnumType: typeof TextXAlignment;
		}

		export const Center: Center;

		export interface Right extends EnumItem {
			Name: "Right";
			Value: 1;
			EnumType: typeof TextXAlignment;
		}

		export const Right: Right;

		export function GetEnumItems(this: Enum): Array<TextXAlignment>
	}
	export type TextXAlignment = TextXAlignment.Left | TextXAlignment.Center | TextXAlignment.Right;
	export namespace TextYAlignment {
		export interface Top extends EnumItem {
			Name: "Top";
			Value: 0;
			EnumType: typeof TextYAlignment;
		}

		export const Top: Top;

		export interface Center extends EnumItem {
			Name: "Center";
			Value: 1;
			EnumType: typeof TextYAlignment;
		}

		export const Center: Center;

		export interface Bottom extends EnumItem {
			Name: "Bottom";
			Value: 2;
			EnumType: typeof TextYAlignment;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: Enum): Array<TextYAlignment>
	}
	export type TextYAlignment = TextYAlignment.Top | TextYAlignment.Center | TextYAlignment.Bottom;
	export namespace TextureMode {
		export interface Stretch extends EnumItem {
			Name: "Stretch";
			Value: 0;
			EnumType: typeof TextureMode;
		}

		export const Stretch: Stretch;

		export interface Wrap extends EnumItem {
			Name: "Wrap";
			Value: 1;
			EnumType: typeof TextureMode;
		}

		export const Wrap: Wrap;

		export interface Static extends EnumItem {
			Name: "Static";
			Value: 2;
			EnumType: typeof TextureMode;
		}

		export const Static: Static;

		export function GetEnumItems(this: Enum): Array<TextureMode>
	}
	export type TextureMode = TextureMode.Stretch | TextureMode.Wrap | TextureMode.Static;
	export namespace TextureQueryType {
		export interface NonHumanoid extends EnumItem {
			Name: "NonHumanoid";
			Value: 0;
			EnumType: typeof TextureQueryType;
		}

		export const NonHumanoid: NonHumanoid;

		export interface NonHumanoidOrphaned extends EnumItem {
			Name: "NonHumanoidOrphaned";
			Value: 1;
			EnumType: typeof TextureQueryType;
		}

		export const NonHumanoidOrphaned: NonHumanoidOrphaned;

		export interface Humanoid extends EnumItem {
			Name: "Humanoid";
			Value: 2;
			EnumType: typeof TextureQueryType;
		}

		export const Humanoid: Humanoid;

		export interface HumanoidOrphaned extends EnumItem {
			Name: "HumanoidOrphaned";
			Value: 3;
			EnumType: typeof TextureQueryType;
		}

		export const HumanoidOrphaned: HumanoidOrphaned;

		export function GetEnumItems(this: Enum): Array<TextureQueryType>
	}
	export type TextureQueryType = TextureQueryType.NonHumanoid | TextureQueryType.NonHumanoidOrphaned | TextureQueryType.Humanoid | TextureQueryType.HumanoidOrphaned;
	export namespace ThreadPoolConfig {
		export interface Auto extends EnumItem {
			Name: "Auto";
			Value: 0;
			EnumType: typeof ThreadPoolConfig;
		}

		export const Auto: Auto;
		/** @deprecated renamed to Auto */
		export const PartialThread: Auto;

		export interface PerCore1 extends EnumItem {
			Name: "PerCore1";
			Value: 101;
			EnumType: typeof ThreadPoolConfig;
		}

		export const PerCore1: PerCore1;

		export interface PerCore2 extends EnumItem {
			Name: "PerCore2";
			Value: 102;
			EnumType: typeof ThreadPoolConfig;
		}

		export const PerCore2: PerCore2;

		export interface PerCore3 extends EnumItem {
			Name: "PerCore3";
			Value: 103;
			EnumType: typeof ThreadPoolConfig;
		}

		export const PerCore3: PerCore3;

		export interface PerCore4 extends EnumItem {
			Name: "PerCore4";
			Value: 104;
			EnumType: typeof ThreadPoolConfig;
		}

		export const PerCore4: PerCore4;

		export interface Threads1 extends EnumItem {
			Name: "Threads1";
			Value: 1;
			EnumType: typeof ThreadPoolConfig;
		}

		export const Threads1: Threads1;

		export interface Threads2 extends EnumItem {
			Name: "Threads2";
			Value: 2;
			EnumType: typeof ThreadPoolConfig;
		}

		export const Threads2: Threads2;

		export interface Threads3 extends EnumItem {
			Name: "Threads3";
			Value: 3;
			EnumType: typeof ThreadPoolConfig;
		}

		export const Threads3: Threads3;

		export interface Threads4 extends EnumItem {
			Name: "Threads4";
			Value: 4;
			EnumType: typeof ThreadPoolConfig;
		}

		export const Threads4: Threads4;

		export interface Threads8 extends EnumItem {
			Name: "Threads8";
			Value: 8;
			EnumType: typeof ThreadPoolConfig;
		}

		export const Threads8: Threads8;

		export interface Threads16 extends EnumItem {
			Name: "Threads16";
			Value: 16;
			EnumType: typeof ThreadPoolConfig;
		}

		export const Threads16: Threads16;

		export function GetEnumItems(this: Enum): Array<ThreadPoolConfig>
	}
	export type ThreadPoolConfig = ThreadPoolConfig.Auto | ThreadPoolConfig.PerCore1 | ThreadPoolConfig.PerCore2 | ThreadPoolConfig.PerCore3 | ThreadPoolConfig.PerCore4 | ThreadPoolConfig.Threads1 | ThreadPoolConfig.Threads2 | ThreadPoolConfig.Threads3 | ThreadPoolConfig.Threads4 | ThreadPoolConfig.Threads8 | ThreadPoolConfig.Threads16;
	export namespace ThrottlingPriority {
		export interface Extreme extends EnumItem {
			Name: "Extreme";
			Value: 2;
			EnumType: typeof ThrottlingPriority;
		}

		export const Extreme: Extreme;

		export interface ElevatedOnServer extends EnumItem {
			Name: "ElevatedOnServer";
			Value: 1;
			EnumType: typeof ThrottlingPriority;
		}

		export const ElevatedOnServer: ElevatedOnServer;

		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof ThrottlingPriority;
		}

		export const Default: Default;

		export function GetEnumItems(this: Enum): Array<ThrottlingPriority>
	}
	export type ThrottlingPriority = ThrottlingPriority.Extreme | ThrottlingPriority.ElevatedOnServer | ThrottlingPriority.Default;
	export namespace ThumbnailSize {
		export interface Size48x48 extends EnumItem {
			Name: "Size48x48";
			Value: 0;
			EnumType: typeof ThumbnailSize;
		}

		export const Size48x48: Size48x48;

		export interface Size180x180 extends EnumItem {
			Name: "Size180x180";
			Value: 1;
			EnumType: typeof ThumbnailSize;
		}

		export const Size180x180: Size180x180;

		export interface Size420x420 extends EnumItem {
			Name: "Size420x420";
			Value: 2;
			EnumType: typeof ThumbnailSize;
		}

		export const Size420x420: Size420x420;

		export interface Size60x60 extends EnumItem {
			Name: "Size60x60";
			Value: 3;
			EnumType: typeof ThumbnailSize;
		}

		export const Size60x60: Size60x60;

		export interface Size100x100 extends EnumItem {
			Name: "Size100x100";
			Value: 4;
			EnumType: typeof ThumbnailSize;
		}

		export const Size100x100: Size100x100;

		export interface Size150x150 extends EnumItem {
			Name: "Size150x150";
			Value: 5;
			EnumType: typeof ThumbnailSize;
		}

		export const Size150x150: Size150x150;

		export interface Size352x352 extends EnumItem {
			Name: "Size352x352";
			Value: 6;
			EnumType: typeof ThumbnailSize;
		}

		export const Size352x352: Size352x352;

		export function GetEnumItems(this: Enum): Array<ThumbnailSize>
	}
	export type ThumbnailSize = ThumbnailSize.Size48x48 | ThumbnailSize.Size180x180 | ThumbnailSize.Size420x420 | ThumbnailSize.Size60x60 | ThumbnailSize.Size100x100 | ThumbnailSize.Size150x150 | ThumbnailSize.Size352x352;
	export namespace ThumbnailType {
		export interface HeadShot extends EnumItem {
			Name: "HeadShot";
			Value: 0;
			EnumType: typeof ThumbnailType;
		}

		export const HeadShot: HeadShot;

		export interface AvatarBust extends EnumItem {
			Name: "AvatarBust";
			Value: 1;
			EnumType: typeof ThumbnailType;
		}

		export const AvatarBust: AvatarBust;

		export interface AvatarThumbnail extends EnumItem {
			Name: "AvatarThumbnail";
			Value: 2;
			EnumType: typeof ThumbnailType;
		}

		export const AvatarThumbnail: AvatarThumbnail;

		export function GetEnumItems(this: Enum): Array<ThumbnailType>
	}
	export type ThumbnailType = ThumbnailType.HeadShot | ThumbnailType.AvatarBust | ThumbnailType.AvatarThumbnail;
	export namespace TickCountSampleMethod {
		export interface Fast extends EnumItem {
			Name: "Fast";
			Value: 0;
			EnumType: typeof TickCountSampleMethod;
		}

		export const Fast: Fast;

		export interface Benchmark extends EnumItem {
			Name: "Benchmark";
			Value: 1;
			EnumType: typeof TickCountSampleMethod;
		}

		export const Benchmark: Benchmark;

		export interface Precise extends EnumItem {
			Name: "Precise";
			Value: 2;
			EnumType: typeof TickCountSampleMethod;
		}

		export const Precise: Precise;

		export function GetEnumItems(this: Enum): Array<TickCountSampleMethod>
	}
	export type TickCountSampleMethod = TickCountSampleMethod.Fast | TickCountSampleMethod.Benchmark | TickCountSampleMethod.Precise;
	export namespace TopBottom {
		export interface Top extends EnumItem {
			Name: "Top";
			Value: 0;
			EnumType: typeof TopBottom;
		}

		export const Top: Top;

		export interface Center extends EnumItem {
			Name: "Center";
			Value: 1;
			EnumType: typeof TopBottom;
		}

		export const Center: Center;

		export interface Bottom extends EnumItem {
			Name: "Bottom";
			Value: 2;
			EnumType: typeof TopBottom;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: Enum): Array<TopBottom>
	}
	export type TopBottom = TopBottom.Top | TopBottom.Center | TopBottom.Bottom;
	export namespace TouchCameraMovementMode {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof TouchCameraMovementMode;
		}

		export const Default: Default;

		export interface Follow extends EnumItem {
			Name: "Follow";
			Value: 2;
			EnumType: typeof TouchCameraMovementMode;
		}

		export const Follow: Follow;

		export interface Classic extends EnumItem {
			Name: "Classic";
			Value: 1;
			EnumType: typeof TouchCameraMovementMode;
		}

		export const Classic: Classic;

		export interface Orbital extends EnumItem {
			Name: "Orbital";
			Value: 3;
			EnumType: typeof TouchCameraMovementMode;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: Enum): Array<TouchCameraMovementMode>
	}
	export type TouchCameraMovementMode = TouchCameraMovementMode.Default | TouchCameraMovementMode.Follow | TouchCameraMovementMode.Classic | TouchCameraMovementMode.Orbital;
	export namespace TouchMovementMode {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof TouchMovementMode;
		}

		export const Default: Default;

		export interface Thumbstick extends EnumItem {
			Name: "Thumbstick";
			Value: 1;
			EnumType: typeof TouchMovementMode;
		}

		export const Thumbstick: Thumbstick;

		export interface DPad extends EnumItem {
			Name: "DPad";
			Value: 2;
			EnumType: typeof TouchMovementMode;
		}

		export const DPad: DPad;

		export interface Thumbpad extends EnumItem {
			Name: "Thumbpad";
			Value: 3;
			EnumType: typeof TouchMovementMode;
		}

		export const Thumbpad: Thumbpad;

		export interface ClickToMove extends EnumItem {
			Name: "ClickToMove";
			Value: 4;
			EnumType: typeof TouchMovementMode;
		}

		export const ClickToMove: ClickToMove;

		export interface DynamicThumbstick extends EnumItem {
			Name: "DynamicThumbstick";
			Value: 5;
			EnumType: typeof TouchMovementMode;
		}

		export const DynamicThumbstick: DynamicThumbstick;

		export function GetEnumItems(this: Enum): Array<TouchMovementMode>
	}
	export type TouchMovementMode = TouchMovementMode.Default | TouchMovementMode.Thumbstick | TouchMovementMode.DPad | TouchMovementMode.Thumbpad | TouchMovementMode.ClickToMove | TouchMovementMode.DynamicThumbstick;
	export namespace TrackerError {
		export interface Ok extends EnumItem {
			Name: "Ok";
			Value: 0;
			EnumType: typeof TrackerError;
		}

		export const Ok: Ok;

		export interface NoService extends EnumItem {
			Name: "NoService";
			Value: 1;
			EnumType: typeof TrackerError;
		}

		export const NoService: NoService;

		export interface InitFailed extends EnumItem {
			Name: "InitFailed";
			Value: 2;
			EnumType: typeof TrackerError;
		}

		export const InitFailed: InitFailed;

		export interface NoVideo extends EnumItem {
			Name: "NoVideo";
			Value: 3;
			EnumType: typeof TrackerError;
		}

		export const NoVideo: NoVideo;

		export interface VideoError extends EnumItem {
			Name: "VideoError";
			Value: 4;
			EnumType: typeof TrackerError;
		}

		export const VideoError: VideoError;

		export interface VideoNoPermission extends EnumItem {
			Name: "VideoNoPermission";
			Value: 5;
			EnumType: typeof TrackerError;
		}

		export const VideoNoPermission: VideoNoPermission;

		export interface NoAudio extends EnumItem {
			Name: "NoAudio";
			Value: 6;
			EnumType: typeof TrackerError;
		}

		export const NoAudio: NoAudio;

		export interface AudioError extends EnumItem {
			Name: "AudioError";
			Value: 7;
			EnumType: typeof TrackerError;
		}

		export const AudioError: AudioError;

		export interface AudioNoPermission extends EnumItem {
			Name: "AudioNoPermission";
			Value: 8;
			EnumType: typeof TrackerError;
		}

		export const AudioNoPermission: AudioNoPermission;

		export function GetEnumItems(this: Enum): Array<TrackerError>
	}
	export type TrackerError = TrackerError.Ok | TrackerError.NoService | TrackerError.InitFailed | TrackerError.NoVideo | TrackerError.VideoError | TrackerError.VideoNoPermission | TrackerError.NoAudio | TrackerError.AudioError | TrackerError.AudioNoPermission;
	export namespace TrackerMode {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof TrackerMode;
		}

		export const None: None;

		export interface Audio extends EnumItem {
			Name: "Audio";
			Value: 1;
			EnumType: typeof TrackerMode;
		}

		export const Audio: Audio;

		export interface Video extends EnumItem {
			Name: "Video";
			Value: 2;
			EnumType: typeof TrackerMode;
		}

		export const Video: Video;

		export interface AudioVideo extends EnumItem {
			Name: "AudioVideo";
			Value: 3;
			EnumType: typeof TrackerMode;
		}

		export const AudioVideo: AudioVideo;

		export function GetEnumItems(this: Enum): Array<TrackerMode>
	}
	export type TrackerMode = TrackerMode.None | TrackerMode.Audio | TrackerMode.Video | TrackerMode.AudioVideo;
	export namespace TriStateBoolean {
		export interface Unknown extends EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof TriStateBoolean;
		}

		export const Unknown: Unknown;

		export interface True extends EnumItem {
			Name: "True";
			Value: 1;
			EnumType: typeof TriStateBoolean;
		}

		export const True: True;

		export interface False extends EnumItem {
			Name: "False";
			Value: 2;
			EnumType: typeof TriStateBoolean;
		}

		export const False: False;

		export function GetEnumItems(this: Enum): Array<TriStateBoolean>
	}
	export type TriStateBoolean = TriStateBoolean.Unknown | TriStateBoolean.True | TriStateBoolean.False;
	export namespace TweenStatus {
		export interface Canceled extends EnumItem {
			Name: "Canceled";
			Value: 0;
			EnumType: typeof TweenStatus;
		}

		export const Canceled: Canceled;

		export interface Completed extends EnumItem {
			Name: "Completed";
			Value: 1;
			EnumType: typeof TweenStatus;
		}

		export const Completed: Completed;

		export function GetEnumItems(this: Enum): Array<TweenStatus>
	}
	export type TweenStatus = TweenStatus.Canceled | TweenStatus.Completed;
	export namespace UITheme {
		export interface Light extends EnumItem {
			Name: "Light";
			Value: 0;
			EnumType: typeof UITheme;
		}

		export const Light: Light;

		export interface Dark extends EnumItem {
			Name: "Dark";
			Value: 1;
			EnumType: typeof UITheme;
		}

		export const Dark: Dark;

		export function GetEnumItems(this: Enum): Array<UITheme>
	}
	export type UITheme = UITheme.Light | UITheme.Dark;
	export namespace UiMessageType {
		export interface UiMessageError extends EnumItem {
			Name: "UiMessageError";
			Value: 0;
			EnumType: typeof UiMessageType;
		}

		export const UiMessageError: UiMessageError;

		export interface UiMessageInfo extends EnumItem {
			Name: "UiMessageInfo";
			Value: 1;
			EnumType: typeof UiMessageType;
		}

		export const UiMessageInfo: UiMessageInfo;

		export function GetEnumItems(this: Enum): Array<UiMessageType>
	}
	export type UiMessageType = UiMessageType.UiMessageError | UiMessageType.UiMessageInfo;
	export namespace UnionsScaleNonuniformly {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof UnionsScaleNonuniformly;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof UnionsScaleNonuniformly;
		}

		export const Disabled: Disabled;

		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof UnionsScaleNonuniformly;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: Enum): Array<UnionsScaleNonuniformly>
	}
	export type UnionsScaleNonuniformly = UnionsScaleNonuniformly.Default | UnionsScaleNonuniformly.Disabled | UnionsScaleNonuniformly.Enabled;
	export namespace UsageContext {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof UsageContext;
		}

		export const Default: Default;

		export interface Preview extends EnumItem {
			Name: "Preview";
			Value: 1;
			EnumType: typeof UsageContext;
		}

		export const Preview: Preview;

		export function GetEnumItems(this: Enum): Array<UsageContext>
	}
	export type UsageContext = UsageContext.Default | UsageContext.Preview;
	export namespace UserCFrame {
		export interface Head extends EnumItem {
			Name: "Head";
			Value: 0;
			EnumType: typeof UserCFrame;
		}

		export const Head: Head;

		export interface LeftHand extends EnumItem {
			Name: "LeftHand";
			Value: 1;
			EnumType: typeof UserCFrame;
		}

		export const LeftHand: LeftHand;

		export interface RightHand extends EnumItem {
			Name: "RightHand";
			Value: 2;
			EnumType: typeof UserCFrame;
		}

		export const RightHand: RightHand;

		export function GetEnumItems(this: Enum): Array<UserCFrame>
	}
	export type UserCFrame = UserCFrame.Head | UserCFrame.LeftHand | UserCFrame.RightHand;
	export namespace UserInputState {
		export interface Begin extends EnumItem {
			Name: "Begin";
			Value: 0;
			EnumType: typeof UserInputState;
		}

		export const Begin: Begin;

		export interface Change extends EnumItem {
			Name: "Change";
			Value: 1;
			EnumType: typeof UserInputState;
		}

		export const Change: Change;

		export interface End extends EnumItem {
			Name: "End";
			Value: 2;
			EnumType: typeof UserInputState;
		}

		export const End: End;

		export interface Cancel extends EnumItem {
			Name: "Cancel";
			Value: 3;
			EnumType: typeof UserInputState;
		}

		export const Cancel: Cancel;

		export interface None extends EnumItem {
			Name: "None";
			Value: 4;
			EnumType: typeof UserInputState;
		}

		export const None: None;

		export function GetEnumItems(this: Enum): Array<UserInputState>
	}
	export type UserInputState = UserInputState.Begin | UserInputState.Change | UserInputState.End | UserInputState.Cancel | UserInputState.None;
	export namespace UserInputType {
		export interface MouseButton1 extends EnumItem {
			Name: "MouseButton1";
			Value: 0;
			EnumType: typeof UserInputType;
		}

		export const MouseButton1: MouseButton1;

		export interface MouseButton2 extends EnumItem {
			Name: "MouseButton2";
			Value: 1;
			EnumType: typeof UserInputType;
		}

		export const MouseButton2: MouseButton2;

		export interface MouseButton3 extends EnumItem {
			Name: "MouseButton3";
			Value: 2;
			EnumType: typeof UserInputType;
		}

		export const MouseButton3: MouseButton3;

		export interface MouseWheel extends EnumItem {
			Name: "MouseWheel";
			Value: 3;
			EnumType: typeof UserInputType;
		}

		export const MouseWheel: MouseWheel;

		export interface MouseMovement extends EnumItem {
			Name: "MouseMovement";
			Value: 4;
			EnumType: typeof UserInputType;
		}

		export const MouseMovement: MouseMovement;

		export interface Touch extends EnumItem {
			Name: "Touch";
			Value: 7;
			EnumType: typeof UserInputType;
		}

		export const Touch: Touch;

		export interface Keyboard extends EnumItem {
			Name: "Keyboard";
			Value: 8;
			EnumType: typeof UserInputType;
		}

		export const Keyboard: Keyboard;

		export interface Focus extends EnumItem {
			Name: "Focus";
			Value: 9;
			EnumType: typeof UserInputType;
		}

		export const Focus: Focus;

		export interface Accelerometer extends EnumItem {
			Name: "Accelerometer";
			Value: 10;
			EnumType: typeof UserInputType;
		}

		export const Accelerometer: Accelerometer;

		export interface Gyro extends EnumItem {
			Name: "Gyro";
			Value: 11;
			EnumType: typeof UserInputType;
		}

		export const Gyro: Gyro;

		export interface Gamepad1 extends EnumItem {
			Name: "Gamepad1";
			Value: 12;
			EnumType: typeof UserInputType;
		}

		export const Gamepad1: Gamepad1;

		export interface Gamepad2 extends EnumItem {
			Name: "Gamepad2";
			Value: 13;
			EnumType: typeof UserInputType;
		}

		export const Gamepad2: Gamepad2;

		export interface Gamepad3 extends EnumItem {
			Name: "Gamepad3";
			Value: 14;
			EnumType: typeof UserInputType;
		}

		export const Gamepad3: Gamepad3;

		export interface Gamepad4 extends EnumItem {
			Name: "Gamepad4";
			Value: 15;
			EnumType: typeof UserInputType;
		}

		export const Gamepad4: Gamepad4;

		export interface Gamepad5 extends EnumItem {
			Name: "Gamepad5";
			Value: 16;
			EnumType: typeof UserInputType;
		}

		export const Gamepad5: Gamepad5;

		export interface Gamepad6 extends EnumItem {
			Name: "Gamepad6";
			Value: 17;
			EnumType: typeof UserInputType;
		}

		export const Gamepad6: Gamepad6;

		export interface Gamepad7 extends EnumItem {
			Name: "Gamepad7";
			Value: 18;
			EnumType: typeof UserInputType;
		}

		export const Gamepad7: Gamepad7;

		export interface Gamepad8 extends EnumItem {
			Name: "Gamepad8";
			Value: 19;
			EnumType: typeof UserInputType;
		}

		export const Gamepad8: Gamepad8;

		export interface TextInput extends EnumItem {
			Name: "TextInput";
			Value: 20;
			EnumType: typeof UserInputType;
		}

		export const TextInput: TextInput;

		export interface InputMethod extends EnumItem {
			Name: "InputMethod";
			Value: 21;
			EnumType: typeof UserInputType;
		}

		export const InputMethod: InputMethod;

		export interface None extends EnumItem {
			Name: "None";
			Value: 22;
			EnumType: typeof UserInputType;
		}

		export const None: None;

		export function GetEnumItems(this: Enum): Array<UserInputType>
	}
	export type UserInputType = UserInputType.MouseButton1 | UserInputType.MouseButton2 | UserInputType.MouseButton3 | UserInputType.MouseWheel | UserInputType.MouseMovement | UserInputType.Touch | UserInputType.Keyboard | UserInputType.Focus | UserInputType.Accelerometer | UserInputType.Gyro | UserInputType.Gamepad1 | UserInputType.Gamepad2 | UserInputType.Gamepad3 | UserInputType.Gamepad4 | UserInputType.Gamepad5 | UserInputType.Gamepad6 | UserInputType.Gamepad7 | UserInputType.Gamepad8 | UserInputType.TextInput | UserInputType.InputMethod | UserInputType.None;
	export namespace VRTouchpad {
		export interface Left extends EnumItem {
			Name: "Left";
			Value: 0;
			EnumType: typeof VRTouchpad;
		}

		export const Left: Left;

		export interface Right extends EnumItem {
			Name: "Right";
			Value: 1;
			EnumType: typeof VRTouchpad;
		}

		export const Right: Right;

		export function GetEnumItems(this: Enum): Array<VRTouchpad>
	}
	export type VRTouchpad = VRTouchpad.Left | VRTouchpad.Right;
	export namespace VRTouchpadMode {
		export interface Touch extends EnumItem {
			Name: "Touch";
			Value: 0;
			EnumType: typeof VRTouchpadMode;
		}

		export const Touch: Touch;

		export interface VirtualThumbstick extends EnumItem {
			Name: "VirtualThumbstick";
			Value: 1;
			EnumType: typeof VRTouchpadMode;
		}

		export const VirtualThumbstick: VirtualThumbstick;

		export interface ABXY extends EnumItem {
			Name: "ABXY";
			Value: 2;
			EnumType: typeof VRTouchpadMode;
		}

		export const ABXY: ABXY;

		export function GetEnumItems(this: Enum): Array<VRTouchpadMode>
	}
	export type VRTouchpadMode = VRTouchpadMode.Touch | VRTouchpadMode.VirtualThumbstick | VRTouchpadMode.ABXY;
	export namespace VelocityConstraintMode {
		export interface Line extends EnumItem {
			Name: "Line";
			Value: 0;
			EnumType: typeof VelocityConstraintMode;
		}

		export const Line: Line;

		export interface Plane extends EnumItem {
			Name: "Plane";
			Value: 1;
			EnumType: typeof VelocityConstraintMode;
		}

		export const Plane: Plane;

		export interface Vector extends EnumItem {
			Name: "Vector";
			Value: 2;
			EnumType: typeof VelocityConstraintMode;
		}

		export const Vector: Vector;

		export function GetEnumItems(this: Enum): Array<VelocityConstraintMode>
	}
	export type VelocityConstraintMode = VelocityConstraintMode.Line | VelocityConstraintMode.Plane | VelocityConstraintMode.Vector;
	export namespace VerticalAlignment {
		export interface Center extends EnumItem {
			Name: "Center";
			Value: 0;
			EnumType: typeof VerticalAlignment;
		}

		export const Center: Center;

		export interface Top extends EnumItem {
			Name: "Top";
			Value: 1;
			EnumType: typeof VerticalAlignment;
		}

		export const Top: Top;

		export interface Bottom extends EnumItem {
			Name: "Bottom";
			Value: 2;
			EnumType: typeof VerticalAlignment;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: Enum): Array<VerticalAlignment>
	}
	export type VerticalAlignment = VerticalAlignment.Center | VerticalAlignment.Top | VerticalAlignment.Bottom;
	export namespace VerticalScrollBarPosition {
		export interface Left extends EnumItem {
			Name: "Left";
			Value: 1;
			EnumType: typeof VerticalScrollBarPosition;
		}

		export const Left: Left;

		export interface Right extends EnumItem {
			Name: "Right";
			Value: 0;
			EnumType: typeof VerticalScrollBarPosition;
		}

		export const Right: Right;

		export function GetEnumItems(this: Enum): Array<VerticalScrollBarPosition>
	}
	export type VerticalScrollBarPosition = VerticalScrollBarPosition.Left | VerticalScrollBarPosition.Right;
	export namespace VibrationMotor {
		export interface Large extends EnumItem {
			Name: "Large";
			Value: 0;
			EnumType: typeof VibrationMotor;
		}

		export const Large: Large;

		export interface Small extends EnumItem {
			Name: "Small";
			Value: 1;
			EnumType: typeof VibrationMotor;
		}

		export const Small: Small;

		export interface LeftTrigger extends EnumItem {
			Name: "LeftTrigger";
			Value: 2;
			EnumType: typeof VibrationMotor;
		}

		export const LeftTrigger: LeftTrigger;

		export interface RightTrigger extends EnumItem {
			Name: "RightTrigger";
			Value: 3;
			EnumType: typeof VibrationMotor;
		}

		export const RightTrigger: RightTrigger;

		export interface LeftHand extends EnumItem {
			Name: "LeftHand";
			Value: 4;
			EnumType: typeof VibrationMotor;
		}

		export const LeftHand: LeftHand;

		export interface RightHand extends EnumItem {
			Name: "RightHand";
			Value: 5;
			EnumType: typeof VibrationMotor;
		}

		export const RightHand: RightHand;

		export function GetEnumItems(this: Enum): Array<VibrationMotor>
	}
	export type VibrationMotor = VibrationMotor.Large | VibrationMotor.Small | VibrationMotor.LeftTrigger | VibrationMotor.RightTrigger | VibrationMotor.LeftHand | VibrationMotor.RightHand;
	export namespace VirtualCursorMode {
		export interface Default extends EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof VirtualCursorMode;
		}

		export const Default: Default;

		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof VirtualCursorMode;
		}

		export const Disabled: Disabled;

		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof VirtualCursorMode;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: Enum): Array<VirtualCursorMode>
	}
	export type VirtualCursorMode = VirtualCursorMode.Default | VirtualCursorMode.Disabled | VirtualCursorMode.Enabled;
	export namespace VirtualInputMode {
		export interface Recording extends EnumItem {
			Name: "Recording";
			Value: 1;
			EnumType: typeof VirtualInputMode;
		}

		export const Recording: Recording;

		export interface Playing extends EnumItem {
			Name: "Playing";
			Value: 2;
			EnumType: typeof VirtualInputMode;
		}

		export const Playing: Playing;

		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof VirtualInputMode;
		}

		export const None: None;

		export function GetEnumItems(this: Enum): Array<VirtualInputMode>
	}
	export type VirtualInputMode = VirtualInputMode.Recording | VirtualInputMode.Playing | VirtualInputMode.None;
	export namespace VoiceChatState {
		export interface Idle extends EnumItem {
			Name: "Idle";
			Value: 0;
			EnumType: typeof VoiceChatState;
		}

		export const Idle: Idle;

		export interface Joining extends EnumItem {
			Name: "Joining";
			Value: 1;
			EnumType: typeof VoiceChatState;
		}

		export const Joining: Joining;

		export interface JoiningRetry extends EnumItem {
			Name: "JoiningRetry";
			Value: 2;
			EnumType: typeof VoiceChatState;
		}

		export const JoiningRetry: JoiningRetry;

		export interface Joined extends EnumItem {
			Name: "Joined";
			Value: 3;
			EnumType: typeof VoiceChatState;
		}

		export const Joined: Joined;

		export interface Leaving extends EnumItem {
			Name: "Leaving";
			Value: 4;
			EnumType: typeof VoiceChatState;
		}

		export const Leaving: Leaving;

		export interface Ended extends EnumItem {
			Name: "Ended";
			Value: 5;
			EnumType: typeof VoiceChatState;
		}

		export const Ended: Ended;

		export interface Failed extends EnumItem {
			Name: "Failed";
			Value: 6;
			EnumType: typeof VoiceChatState;
		}

		export const Failed: Failed;

		export function GetEnumItems(this: Enum): Array<VoiceChatState>
	}
	export type VoiceChatState = VoiceChatState.Idle | VoiceChatState.Joining | VoiceChatState.JoiningRetry | VoiceChatState.Joined | VoiceChatState.Leaving | VoiceChatState.Ended | VoiceChatState.Failed;
	export namespace VolumetricAudio {
		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 0;
			EnumType: typeof VolumetricAudio;
		}

		export const Disabled: Disabled;

		export interface Automatic extends EnumItem {
			Name: "Automatic";
			Value: 1;
			EnumType: typeof VolumetricAudio;
		}

		export const Automatic: Automatic;

		export interface Enabled extends EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof VolumetricAudio;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: Enum): Array<VolumetricAudio>
	}
	export type VolumetricAudio = VolumetricAudio.Disabled | VolumetricAudio.Automatic | VolumetricAudio.Enabled;
	export namespace WaterDirection {
		export interface NegX extends EnumItem {
			Name: "NegX";
			Value: 0;
			EnumType: typeof WaterDirection;
		}

		export const NegX: NegX;

		export interface X extends EnumItem {
			Name: "X";
			Value: 1;
			EnumType: typeof WaterDirection;
		}

		export const X: X;

		export interface NegY extends EnumItem {
			Name: "NegY";
			Value: 2;
			EnumType: typeof WaterDirection;
		}

		export const NegY: NegY;

		export interface Y extends EnumItem {
			Name: "Y";
			Value: 3;
			EnumType: typeof WaterDirection;
		}

		export const Y: Y;

		export interface NegZ extends EnumItem {
			Name: "NegZ";
			Value: 4;
			EnumType: typeof WaterDirection;
		}

		export const NegZ: NegZ;

		export interface Z extends EnumItem {
			Name: "Z";
			Value: 5;
			EnumType: typeof WaterDirection;
		}

		export const Z: Z;

		export function GetEnumItems(this: Enum): Array<WaterDirection>
	}
	export type WaterDirection = WaterDirection.NegX | WaterDirection.X | WaterDirection.NegY | WaterDirection.Y | WaterDirection.NegZ | WaterDirection.Z;
	export namespace WaterForce {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof WaterForce;
		}

		export const None: None;

		export interface Small extends EnumItem {
			Name: "Small";
			Value: 1;
			EnumType: typeof WaterForce;
		}

		export const Small: Small;

		export interface Medium extends EnumItem {
			Name: "Medium";
			Value: 2;
			EnumType: typeof WaterForce;
		}

		export const Medium: Medium;

		export interface Strong extends EnumItem {
			Name: "Strong";
			Value: 3;
			EnumType: typeof WaterForce;
		}

		export const Strong: Strong;

		export interface Max extends EnumItem {
			Name: "Max";
			Value: 4;
			EnumType: typeof WaterForce;
		}

		export const Max: Max;

		export function GetEnumItems(this: Enum): Array<WaterForce>
	}
	export type WaterForce = WaterForce.None | WaterForce.Small | WaterForce.Medium | WaterForce.Strong | WaterForce.Max;
	export namespace WrapLayerAutoSkin {
		export interface Disabled extends EnumItem {
			Name: "Disabled";
			Value: 0;
			EnumType: typeof WrapLayerAutoSkin;
		}

		export const Disabled: Disabled;

		export interface EnabledPreserve extends EnumItem {
			Name: "EnabledPreserve";
			Value: 1;
			EnumType: typeof WrapLayerAutoSkin;
		}

		export const EnabledPreserve: EnabledPreserve;

		export interface EnabledOverride extends EnumItem {
			Name: "EnabledOverride";
			Value: 2;
			EnumType: typeof WrapLayerAutoSkin;
		}

		export const EnabledOverride: EnabledOverride;

		export function GetEnumItems(this: Enum): Array<WrapLayerAutoSkin>
	}
	export type WrapLayerAutoSkin = WrapLayerAutoSkin.Disabled | WrapLayerAutoSkin.EnabledPreserve | WrapLayerAutoSkin.EnabledOverride;
	export namespace WrapLayerDebugMode {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const None: None;

		export interface BoundCage extends EnumItem {
			Name: "BoundCage";
			Value: 1;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const BoundCage: BoundCage;

		export interface LayerCage extends EnumItem {
			Name: "LayerCage";
			Value: 2;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const LayerCage: LayerCage;

		export interface BoundCageAndLinks extends EnumItem {
			Name: "BoundCageAndLinks";
			Value: 3;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const BoundCageAndLinks: BoundCageAndLinks;

		export interface Reference extends EnumItem {
			Name: "Reference";
			Value: 4;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const Reference: Reference;

		export interface Rbf extends EnumItem {
			Name: "Rbf";
			Value: 5;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const Rbf: Rbf;

		export interface OuterCage extends EnumItem {
			Name: "OuterCage";
			Value: 6;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const OuterCage: OuterCage;

		export interface ReferenceMeshAfterMorph extends EnumItem {
			Name: "ReferenceMeshAfterMorph";
			Value: 7;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const ReferenceMeshAfterMorph: ReferenceMeshAfterMorph;

		export interface HSROuterDetail extends EnumItem {
			Name: "HSROuterDetail";
			Value: 8;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const HSROuterDetail: HSROuterDetail;

		export interface HSROuter extends EnumItem {
			Name: "HSROuter";
			Value: 9;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const HSROuter: HSROuter;

		export interface HSRInner extends EnumItem {
			Name: "HSRInner";
			Value: 10;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const HSRInner: HSRInner;

		export interface HSRInnerReverse extends EnumItem {
			Name: "HSRInnerReverse";
			Value: 11;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const HSRInnerReverse: HSRInnerReverse;

		export interface LayerCageFittedToBase extends EnumItem {
			Name: "LayerCageFittedToBase";
			Value: 12;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const LayerCageFittedToBase: LayerCageFittedToBase;

		export interface LayerCageFittedToPrev extends EnumItem {
			Name: "LayerCageFittedToPrev";
			Value: 13;
			EnumType: typeof WrapLayerDebugMode;
		}

		export const LayerCageFittedToPrev: LayerCageFittedToPrev;

		export function GetEnumItems(this: Enum): Array<WrapLayerDebugMode>
	}
	export type WrapLayerDebugMode = WrapLayerDebugMode.None | WrapLayerDebugMode.BoundCage | WrapLayerDebugMode.LayerCage | WrapLayerDebugMode.BoundCageAndLinks | WrapLayerDebugMode.Reference | WrapLayerDebugMode.Rbf | WrapLayerDebugMode.OuterCage | WrapLayerDebugMode.ReferenceMeshAfterMorph | WrapLayerDebugMode.HSROuterDetail | WrapLayerDebugMode.HSROuter | WrapLayerDebugMode.HSRInner | WrapLayerDebugMode.HSRInnerReverse | WrapLayerDebugMode.LayerCageFittedToBase | WrapLayerDebugMode.LayerCageFittedToPrev;
	export namespace WrapTargetDebugMode {
		export interface None extends EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof WrapTargetDebugMode;
		}

		export const None: None;

		export interface TargetCageOriginal extends EnumItem {
			Name: "TargetCageOriginal";
			Value: 1;
			EnumType: typeof WrapTargetDebugMode;
		}

		export const TargetCageOriginal: TargetCageOriginal;

		export interface TargetCageCompressed extends EnumItem {
			Name: "TargetCageCompressed";
			Value: 2;
			EnumType: typeof WrapTargetDebugMode;
		}

		export const TargetCageCompressed: TargetCageCompressed;

		export interface TargetCageInterface extends EnumItem {
			Name: "TargetCageInterface";
			Value: 3;
			EnumType: typeof WrapTargetDebugMode;
		}

		export const TargetCageInterface: TargetCageInterface;

		export interface TargetLayerCageOriginal extends EnumItem {
			Name: "TargetLayerCageOriginal";
			Value: 4;
			EnumType: typeof WrapTargetDebugMode;
		}

		export const TargetLayerCageOriginal: TargetLayerCageOriginal;

		export interface TargetLayerCageCompressed extends EnumItem {
			Name: "TargetLayerCageCompressed";
			Value: 5;
			EnumType: typeof WrapTargetDebugMode;
		}

		export const TargetLayerCageCompressed: TargetLayerCageCompressed;

		export interface TargetLayerInterface extends EnumItem {
			Name: "TargetLayerInterface";
			Value: 6;
			EnumType: typeof WrapTargetDebugMode;
		}

		export const TargetLayerInterface: TargetLayerInterface;

		export interface Rbf extends EnumItem {
			Name: "Rbf";
			Value: 7;
			EnumType: typeof WrapTargetDebugMode;
		}

		export const Rbf: Rbf;

		export interface OuterCageDetail extends EnumItem {
			Name: "OuterCageDetail";
			Value: 8;
			EnumType: typeof WrapTargetDebugMode;
		}

		export const OuterCageDetail: OuterCageDetail;

		export function GetEnumItems(this: Enum): Array<WrapTargetDebugMode>
	}
	export type WrapTargetDebugMode = WrapTargetDebugMode.None | WrapTargetDebugMode.TargetCageOriginal | WrapTargetDebugMode.TargetCageCompressed | WrapTargetDebugMode.TargetCageInterface | WrapTargetDebugMode.TargetLayerCageOriginal | WrapTargetDebugMode.TargetLayerCageCompressed | WrapTargetDebugMode.TargetLayerInterface | WrapTargetDebugMode.Rbf | WrapTargetDebugMode.OuterCageDetail;
	export namespace ZIndexBehavior {
		export interface Global extends EnumItem {
			Name: "Global";
			Value: 0;
			EnumType: typeof ZIndexBehavior;
		}

		export const Global: Global;

		export interface Sibling extends EnumItem {
			Name: "Sibling";
			Value: 1;
			EnumType: typeof ZIndexBehavior;
		}

		export const Sibling: Sibling;

		export function GetEnumItems(this: Enum): Array<ZIndexBehavior>
	}
	export type ZIndexBehavior = ZIndexBehavior.Global | ZIndexBehavior.Sibling;
}

declare type CastsToEnum<T extends EnumItem> = T | T["Name" | "Value"];
