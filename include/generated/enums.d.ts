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

	export namespace AccessModifierType {
		export interface Allow extends globalThis.EnumItem {
			Name: "Allow";
			Value: 0;
			EnumType: typeof globalThis.Enum.AccessModifierType;
		}

		export const Allow: Allow;

		export interface Deny extends globalThis.EnumItem {
			Name: "Deny";
			Value: 1;
			EnumType: typeof globalThis.Enum.AccessModifierType;
		}

		export const Deny: Deny;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AccessModifierType>;
	}
	export type AccessModifierType = AccessModifierType.Allow | AccessModifierType.Deny;

	export namespace AccessoryType {
		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Unknown: Unknown;

		export interface Hat extends globalThis.EnumItem {
			Name: "Hat";
			Value: 1;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Hat: Hat;

		export interface Hair extends globalThis.EnumItem {
			Name: "Hair";
			Value: 2;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Hair: Hair;

		export interface Face extends globalThis.EnumItem {
			Name: "Face";
			Value: 3;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Face: Face;

		export interface Neck extends globalThis.EnumItem {
			Name: "Neck";
			Value: 4;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Neck: Neck;

		export interface Shoulder extends globalThis.EnumItem {
			Name: "Shoulder";
			Value: 5;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Shoulder: Shoulder;

		export interface Front extends globalThis.EnumItem {
			Name: "Front";
			Value: 6;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Front: Front;

		export interface Back extends globalThis.EnumItem {
			Name: "Back";
			Value: 7;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Back: Back;

		export interface Waist extends globalThis.EnumItem {
			Name: "Waist";
			Value: 8;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Waist: Waist;

		export interface TShirt extends globalThis.EnumItem {
			Name: "TShirt";
			Value: 9;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const TShirt: TShirt;
		/** @deprecated renamed to TShirt */
		export const TeeShirt: TShirt;

		export interface Shirt extends globalThis.EnumItem {
			Name: "Shirt";
			Value: 10;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Shirt: Shirt;

		export interface Pants extends globalThis.EnumItem {
			Name: "Pants";
			Value: 11;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Pants: Pants;

		export interface Jacket extends globalThis.EnumItem {
			Name: "Jacket";
			Value: 12;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Jacket: Jacket;

		export interface Sweater extends globalThis.EnumItem {
			Name: "Sweater";
			Value: 13;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Sweater: Sweater;

		export interface Shorts extends globalThis.EnumItem {
			Name: "Shorts";
			Value: 14;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Shorts: Shorts;

		export interface LeftShoe extends globalThis.EnumItem {
			Name: "LeftShoe";
			Value: 15;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const LeftShoe: LeftShoe;

		export interface RightShoe extends globalThis.EnumItem {
			Name: "RightShoe";
			Value: 16;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const RightShoe: RightShoe;

		export interface DressSkirt extends globalThis.EnumItem {
			Name: "DressSkirt";
			Value: 17;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const DressSkirt: DressSkirt;

		export interface Eyebrow extends globalThis.EnumItem {
			Name: "Eyebrow";
			Value: 18;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Eyebrow: Eyebrow;

		export interface Eyelash extends globalThis.EnumItem {
			Name: "Eyelash";
			Value: 19;
			EnumType: typeof globalThis.Enum.AccessoryType;
		}

		export const Eyelash: Eyelash;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AccessoryType>;
	}
	export type AccessoryType = AccessoryType.Unknown | AccessoryType.Hat | AccessoryType.Hair | AccessoryType.Face | AccessoryType.Neck | AccessoryType.Shoulder | AccessoryType.Front | AccessoryType.Back | AccessoryType.Waist | AccessoryType.TShirt | AccessoryType.Shirt | AccessoryType.Pants | AccessoryType.Jacket | AccessoryType.Sweater | AccessoryType.Shorts | AccessoryType.LeftShoe | AccessoryType.RightShoe | AccessoryType.DressSkirt | AccessoryType.Eyebrow | AccessoryType.Eyelash;

	export namespace ActionType {
		export interface Nothing extends globalThis.EnumItem {
			Name: "Nothing";
			Value: 0;
			EnumType: typeof globalThis.Enum.ActionType;
		}

		export const Nothing: Nothing;

		export interface Pause extends globalThis.EnumItem {
			Name: "Pause";
			Value: 1;
			EnumType: typeof globalThis.Enum.ActionType;
		}

		export const Pause: Pause;

		export interface Lose extends globalThis.EnumItem {
			Name: "Lose";
			Value: 2;
			EnumType: typeof globalThis.Enum.ActionType;
		}

		export const Lose: Lose;

		export interface Draw extends globalThis.EnumItem {
			Name: "Draw";
			Value: 3;
			EnumType: typeof globalThis.Enum.ActionType;
		}

		export const Draw: Draw;

		export interface Win extends globalThis.EnumItem {
			Name: "Win";
			Value: 4;
			EnumType: typeof globalThis.Enum.ActionType;
		}

		export const Win: Win;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ActionType>;
	}
	export type ActionType = ActionType.Nothing | ActionType.Pause | ActionType.Lose | ActionType.Draw | ActionType.Win;

	export namespace ActuatorRelativeTo {
		export interface Attachment0 extends globalThis.EnumItem {
			Name: "Attachment0";
			Value: 0;
			EnumType: typeof globalThis.Enum.ActuatorRelativeTo;
		}

		export const Attachment0: Attachment0;

		export interface Attachment1 extends globalThis.EnumItem {
			Name: "Attachment1";
			Value: 1;
			EnumType: typeof globalThis.Enum.ActuatorRelativeTo;
		}

		export const Attachment1: Attachment1;

		export interface World extends globalThis.EnumItem {
			Name: "World";
			Value: 2;
			EnumType: typeof globalThis.Enum.ActuatorRelativeTo;
		}

		export const World: World;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ActuatorRelativeTo>;
	}
	export type ActuatorRelativeTo = ActuatorRelativeTo.Attachment0 | ActuatorRelativeTo.Attachment1 | ActuatorRelativeTo.World;

	export namespace ActuatorType {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.ActuatorType;
		}

		export const None: None;

		export interface Motor extends globalThis.EnumItem {
			Name: "Motor";
			Value: 1;
			EnumType: typeof globalThis.Enum.ActuatorType;
		}

		export const Motor: Motor;

		export interface Servo extends globalThis.EnumItem {
			Name: "Servo";
			Value: 2;
			EnumType: typeof globalThis.Enum.ActuatorType;
		}

		export const Servo: Servo;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ActuatorType>;
	}
	export type ActuatorType = ActuatorType.None | ActuatorType.Motor | ActuatorType.Servo;

	export namespace AdShape {
		export interface HorizontalRectangle extends globalThis.EnumItem {
			Name: "HorizontalRectangle";
			Value: 1;
			EnumType: typeof globalThis.Enum.AdShape;
		}

		export const HorizontalRectangle: HorizontalRectangle;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AdShape>;
	}
	export type AdShape = AdShape.HorizontalRectangle;

	export namespace AdTeleportMethod {
		export interface Undefined extends globalThis.EnumItem {
			Name: "Undefined";
			Value: 0;
			EnumType: typeof globalThis.Enum.AdTeleportMethod;
		}

		export const Undefined: Undefined;

		export interface PortalForward extends globalThis.EnumItem {
			Name: "PortalForward";
			Value: 1;
			EnumType: typeof globalThis.Enum.AdTeleportMethod;
		}

		export const PortalForward: PortalForward;

		export interface InGameMenuBackButton extends globalThis.EnumItem {
			Name: "InGameMenuBackButton";
			Value: 2;
			EnumType: typeof globalThis.Enum.AdTeleportMethod;
		}

		export const InGameMenuBackButton: InGameMenuBackButton;

		export interface UIBackButton extends globalThis.EnumItem {
			Name: "UIBackButton";
			Value: 3;
			EnumType: typeof globalThis.Enum.AdTeleportMethod;
		}

		export const UIBackButton: UIBackButton;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AdTeleportMethod>;
	}
	export type AdTeleportMethod = AdTeleportMethod.Undefined | AdTeleportMethod.PortalForward | AdTeleportMethod.InGameMenuBackButton | AdTeleportMethod.UIBackButton;

	export namespace AdUnitStatus {
		export interface Inactive extends globalThis.EnumItem {
			Name: "Inactive";
			Value: 0;
			EnumType: typeof globalThis.Enum.AdUnitStatus;
		}

		export const Inactive: Inactive;

		export interface Active extends globalThis.EnumItem {
			Name: "Active";
			Value: 1;
			EnumType: typeof globalThis.Enum.AdUnitStatus;
		}

		export const Active: Active;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AdUnitStatus>;
	}
	export type AdUnitStatus = AdUnitStatus.Inactive | AdUnitStatus.Active;

	export namespace AdornCullingMode {
		export interface Automatic extends globalThis.EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof globalThis.Enum.AdornCullingMode;
		}

		export const Automatic: Automatic;

		export interface Never extends globalThis.EnumItem {
			Name: "Never";
			Value: 1;
			EnumType: typeof globalThis.Enum.AdornCullingMode;
		}

		export const Never: Never;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AdornCullingMode>;
	}
	export type AdornCullingMode = AdornCullingMode.Automatic | AdornCullingMode.Never;

	export namespace AlignType {
		export interface Parallel extends globalThis.EnumItem {
			Name: "Parallel";
			Value: 0;
			EnumType: typeof globalThis.Enum.AlignType;
		}

		export const Parallel: Parallel;

		export interface Perpendicular extends globalThis.EnumItem {
			Name: "Perpendicular";
			Value: 1;
			EnumType: typeof globalThis.Enum.AlignType;
		}

		export const Perpendicular: Perpendicular;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AlignType>;
	}
	export type AlignType = AlignType.Parallel | AlignType.Perpendicular;

	export namespace AlphaMode {
		export interface Overlay extends globalThis.EnumItem {
			Name: "Overlay";
			Value: 0;
			EnumType: typeof globalThis.Enum.AlphaMode;
		}

		export const Overlay: Overlay;

		export interface Transparency extends globalThis.EnumItem {
			Name: "Transparency";
			Value: 1;
			EnumType: typeof globalThis.Enum.AlphaMode;
		}

		export const Transparency: Transparency;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AlphaMode>;
	}
	export type AlphaMode = AlphaMode.Overlay | AlphaMode.Transparency;

	export namespace AnalyticsEconomyAction {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.AnalyticsEconomyAction;
		}

		export const Default: Default;

		export interface Acquire extends globalThis.EnumItem {
			Name: "Acquire";
			Value: 1;
			EnumType: typeof globalThis.Enum.AnalyticsEconomyAction;
		}

		export const Acquire: Acquire;

		export interface Spend extends globalThis.EnumItem {
			Name: "Spend";
			Value: 2;
			EnumType: typeof globalThis.Enum.AnalyticsEconomyAction;
		}

		export const Spend: Spend;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AnalyticsEconomyAction>;
	}
	export type AnalyticsEconomyAction = AnalyticsEconomyAction.Default | AnalyticsEconomyAction.Acquire | AnalyticsEconomyAction.Spend;

	export namespace AnalyticsLogLevel {
		export interface Trace extends globalThis.EnumItem {
			Name: "Trace";
			Value: 0;
			EnumType: typeof globalThis.Enum.AnalyticsLogLevel;
		}

		export const Trace: Trace;

		export interface Debug extends globalThis.EnumItem {
			Name: "Debug";
			Value: 1;
			EnumType: typeof globalThis.Enum.AnalyticsLogLevel;
		}

		export const Debug: Debug;

		export interface Information extends globalThis.EnumItem {
			Name: "Information";
			Value: 2;
			EnumType: typeof globalThis.Enum.AnalyticsLogLevel;
		}

		export const Information: Information;

		export interface Warning extends globalThis.EnumItem {
			Name: "Warning";
			Value: 3;
			EnumType: typeof globalThis.Enum.AnalyticsLogLevel;
		}

		export const Warning: Warning;

		export interface Error extends globalThis.EnumItem {
			Name: "Error";
			Value: 4;
			EnumType: typeof globalThis.Enum.AnalyticsLogLevel;
		}

		export const Error: Error;

		export interface Fatal extends globalThis.EnumItem {
			Name: "Fatal";
			Value: 5;
			EnumType: typeof globalThis.Enum.AnalyticsLogLevel;
		}

		export const Fatal: Fatal;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AnalyticsLogLevel>;
	}
	export type AnalyticsLogLevel = AnalyticsLogLevel.Trace | AnalyticsLogLevel.Debug | AnalyticsLogLevel.Information | AnalyticsLogLevel.Warning | AnalyticsLogLevel.Error | AnalyticsLogLevel.Fatal;

	export namespace AnalyticsProgressionStatus {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.AnalyticsProgressionStatus;
		}

		export const Default: Default;

		export interface Begin extends globalThis.EnumItem {
			Name: "Begin";
			Value: 1;
			EnumType: typeof globalThis.Enum.AnalyticsProgressionStatus;
		}

		export const Begin: Begin;

		export interface Complete extends globalThis.EnumItem {
			Name: "Complete";
			Value: 2;
			EnumType: typeof globalThis.Enum.AnalyticsProgressionStatus;
		}

		export const Complete: Complete;

		export interface Abandon extends globalThis.EnumItem {
			Name: "Abandon";
			Value: 3;
			EnumType: typeof globalThis.Enum.AnalyticsProgressionStatus;
		}

		export const Abandon: Abandon;

		export interface Fail extends globalThis.EnumItem {
			Name: "Fail";
			Value: 4;
			EnumType: typeof globalThis.Enum.AnalyticsProgressionStatus;
		}

		export const Fail: Fail;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AnalyticsProgressionStatus>;
	}
	export type AnalyticsProgressionStatus = AnalyticsProgressionStatus.Default | AnalyticsProgressionStatus.Begin | AnalyticsProgressionStatus.Complete | AnalyticsProgressionStatus.Abandon | AnalyticsProgressionStatus.Fail;

	export namespace AnimationPriority {
		export interface Idle extends globalThis.EnumItem {
			Name: "Idle";
			Value: 0;
			EnumType: typeof globalThis.Enum.AnimationPriority;
		}

		export const Idle: Idle;

		export interface Movement extends globalThis.EnumItem {
			Name: "Movement";
			Value: 1;
			EnumType: typeof globalThis.Enum.AnimationPriority;
		}

		export const Movement: Movement;

		export interface Action extends globalThis.EnumItem {
			Name: "Action";
			Value: 2;
			EnumType: typeof globalThis.Enum.AnimationPriority;
		}

		export const Action: Action;

		export interface Action2 extends globalThis.EnumItem {
			Name: "Action2";
			Value: 3;
			EnumType: typeof globalThis.Enum.AnimationPriority;
		}

		export const Action2: Action2;

		export interface Action3 extends globalThis.EnumItem {
			Name: "Action3";
			Value: 4;
			EnumType: typeof globalThis.Enum.AnimationPriority;
		}

		export const Action3: Action3;

		export interface Action4 extends globalThis.EnumItem {
			Name: "Action4";
			Value: 5;
			EnumType: typeof globalThis.Enum.AnimationPriority;
		}

		export const Action4: Action4;

		export interface Core extends globalThis.EnumItem {
			Name: "Core";
			Value: 1000;
			EnumType: typeof globalThis.Enum.AnimationPriority;
		}

		export const Core: Core;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AnimationPriority>;
	}
	export type AnimationPriority = AnimationPriority.Idle | AnimationPriority.Movement | AnimationPriority.Action | AnimationPriority.Action2 | AnimationPriority.Action3 | AnimationPriority.Action4 | AnimationPriority.Core;

	export namespace AnimatorRetargetingMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.AnimatorRetargetingMode;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.AnimatorRetargetingMode;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.AnimatorRetargetingMode;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AnimatorRetargetingMode>;
	}
	export type AnimatorRetargetingMode = AnimatorRetargetingMode.Default | AnimatorRetargetingMode.Disabled | AnimatorRetargetingMode.Enabled;

	export namespace AppShellActionType {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.AppShellActionType;
		}

		export const None: None;

		export interface OpenApp extends globalThis.EnumItem {
			Name: "OpenApp";
			Value: 1;
			EnumType: typeof globalThis.Enum.AppShellActionType;
		}

		export const OpenApp: OpenApp;

		export interface TapChatTab extends globalThis.EnumItem {
			Name: "TapChatTab";
			Value: 2;
			EnumType: typeof globalThis.Enum.AppShellActionType;
		}

		export const TapChatTab: TapChatTab;

		export interface TapConversationEntry extends globalThis.EnumItem {
			Name: "TapConversationEntry";
			Value: 3;
			EnumType: typeof globalThis.Enum.AppShellActionType;
		}

		export const TapConversationEntry: TapConversationEntry;

		export interface TapAvatarTab extends globalThis.EnumItem {
			Name: "TapAvatarTab";
			Value: 4;
			EnumType: typeof globalThis.Enum.AppShellActionType;
		}

		export const TapAvatarTab: TapAvatarTab;

		export interface ReadConversation extends globalThis.EnumItem {
			Name: "ReadConversation";
			Value: 5;
			EnumType: typeof globalThis.Enum.AppShellActionType;
		}

		export const ReadConversation: ReadConversation;

		export interface TapGamePageTab extends globalThis.EnumItem {
			Name: "TapGamePageTab";
			Value: 6;
			EnumType: typeof globalThis.Enum.AppShellActionType;
		}

		export const TapGamePageTab: TapGamePageTab;

		export interface TapHomePageTab extends globalThis.EnumItem {
			Name: "TapHomePageTab";
			Value: 7;
			EnumType: typeof globalThis.Enum.AppShellActionType;
		}

		export const TapHomePageTab: TapHomePageTab;

		export interface GamePageLoaded extends globalThis.EnumItem {
			Name: "GamePageLoaded";
			Value: 8;
			EnumType: typeof globalThis.Enum.AppShellActionType;
		}

		export const GamePageLoaded: GamePageLoaded;

		export interface HomePageLoaded extends globalThis.EnumItem {
			Name: "HomePageLoaded";
			Value: 9;
			EnumType: typeof globalThis.Enum.AppShellActionType;
		}

		export const HomePageLoaded: HomePageLoaded;

		export interface AvatarEditorPageLoaded extends globalThis.EnumItem {
			Name: "AvatarEditorPageLoaded";
			Value: 10;
			EnumType: typeof globalThis.Enum.AppShellActionType;
		}

		export const AvatarEditorPageLoaded: AvatarEditorPageLoaded;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AppShellActionType>;
	}
	export type AppShellActionType = AppShellActionType.None | AppShellActionType.OpenApp | AppShellActionType.TapChatTab | AppShellActionType.TapConversationEntry | AppShellActionType.TapAvatarTab | AppShellActionType.ReadConversation | AppShellActionType.TapGamePageTab | AppShellActionType.TapHomePageTab | AppShellActionType.GamePageLoaded | AppShellActionType.HomePageLoaded | AppShellActionType.AvatarEditorPageLoaded;

	export namespace AppShellFeature {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.AppShellFeature;
		}

		export const None: None;

		export interface Chat extends globalThis.EnumItem {
			Name: "Chat";
			Value: 1;
			EnumType: typeof globalThis.Enum.AppShellFeature;
		}

		export const Chat: Chat;

		export interface AvatarEditor extends globalThis.EnumItem {
			Name: "AvatarEditor";
			Value: 2;
			EnumType: typeof globalThis.Enum.AppShellFeature;
		}

		export const AvatarEditor: AvatarEditor;

		export interface GamePage extends globalThis.EnumItem {
			Name: "GamePage";
			Value: 3;
			EnumType: typeof globalThis.Enum.AppShellFeature;
		}

		export const GamePage: GamePage;

		export interface HomePage extends globalThis.EnumItem {
			Name: "HomePage";
			Value: 4;
			EnumType: typeof globalThis.Enum.AppShellFeature;
		}

		export const HomePage: HomePage;

		export interface More extends globalThis.EnumItem {
			Name: "More";
			Value: 5;
			EnumType: typeof globalThis.Enum.AppShellFeature;
		}

		export const More: More;

		export interface Landing extends globalThis.EnumItem {
			Name: "Landing";
			Value: 6;
			EnumType: typeof globalThis.Enum.AppShellFeature;
		}

		export const Landing: Landing;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AppShellFeature>;
	}
	export type AppShellFeature = AppShellFeature.None | AppShellFeature.Chat | AppShellFeature.AvatarEditor | AppShellFeature.GamePage | AppShellFeature.HomePage | AppShellFeature.More | AppShellFeature.Landing;

	export namespace AppUpdateStatus {
		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof globalThis.Enum.AppUpdateStatus;
		}

		export const Unknown: Unknown;

		export interface NotSupported extends globalThis.EnumItem {
			Name: "NotSupported";
			Value: 1;
			EnumType: typeof globalThis.Enum.AppUpdateStatus;
		}

		export const NotSupported: NotSupported;

		export interface Failed extends globalThis.EnumItem {
			Name: "Failed";
			Value: 2;
			EnumType: typeof globalThis.Enum.AppUpdateStatus;
		}

		export const Failed: Failed;

		export interface NotAvailable extends globalThis.EnumItem {
			Name: "NotAvailable";
			Value: 3;
			EnumType: typeof globalThis.Enum.AppUpdateStatus;
		}

		export const NotAvailable: NotAvailable;

		export interface Available extends globalThis.EnumItem {
			Name: "Available";
			Value: 4;
			EnumType: typeof globalThis.Enum.AppUpdateStatus;
		}

		export const Available: Available;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AppUpdateStatus>;
	}
	export type AppUpdateStatus = AppUpdateStatus.Unknown | AppUpdateStatus.NotSupported | AppUpdateStatus.Failed | AppUpdateStatus.NotAvailable | AppUpdateStatus.Available;

	export namespace ApplyStrokeMode {
		export interface Contextual extends globalThis.EnumItem {
			Name: "Contextual";
			Value: 0;
			EnumType: typeof globalThis.Enum.ApplyStrokeMode;
		}

		export const Contextual: Contextual;

		export interface Border extends globalThis.EnumItem {
			Name: "Border";
			Value: 1;
			EnumType: typeof globalThis.Enum.ApplyStrokeMode;
		}

		export const Border: Border;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ApplyStrokeMode>;
	}
	export type ApplyStrokeMode = ApplyStrokeMode.Contextual | ApplyStrokeMode.Border;

	export namespace AspectType {
		export interface FitWithinMaxSize extends globalThis.EnumItem {
			Name: "FitWithinMaxSize";
			Value: 0;
			EnumType: typeof globalThis.Enum.AspectType;
		}

		export const FitWithinMaxSize: FitWithinMaxSize;

		export interface ScaleWithParentSize extends globalThis.EnumItem {
			Name: "ScaleWithParentSize";
			Value: 1;
			EnumType: typeof globalThis.Enum.AspectType;
		}

		export const ScaleWithParentSize: ScaleWithParentSize;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AspectType>;
	}
	export type AspectType = AspectType.FitWithinMaxSize | AspectType.ScaleWithParentSize;

	export namespace AssetFetchStatus {
		export interface Success extends globalThis.EnumItem {
			Name: "Success";
			Value: 0;
			EnumType: typeof globalThis.Enum.AssetFetchStatus;
		}

		export const Success: Success;

		export interface Failure extends globalThis.EnumItem {
			Name: "Failure";
			Value: 1;
			EnumType: typeof globalThis.Enum.AssetFetchStatus;
		}

		export const Failure: Failure;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 2;
			EnumType: typeof globalThis.Enum.AssetFetchStatus;
		}

		export const None: None;

		export interface Loading extends globalThis.EnumItem {
			Name: "Loading";
			Value: 3;
			EnumType: typeof globalThis.Enum.AssetFetchStatus;
		}

		export const Loading: Loading;

		export interface TimedOut extends globalThis.EnumItem {
			Name: "TimedOut";
			Value: 4;
			EnumType: typeof globalThis.Enum.AssetFetchStatus;
		}

		export const TimedOut: TimedOut;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AssetFetchStatus>;
	}
	export type AssetFetchStatus = AssetFetchStatus.Success | AssetFetchStatus.Failure | AssetFetchStatus.None | AssetFetchStatus.Loading | AssetFetchStatus.TimedOut;

	export namespace AssetType {
		export interface Image extends globalThis.EnumItem {
			Name: "Image";
			Value: 1;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Image: Image;

		export interface TShirt extends globalThis.EnumItem {
			Name: "TShirt";
			Value: 2;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const TShirt: TShirt;
		/** @deprecated renamed to TShirt */
		export const TeeShirt: TShirt;

		export interface Audio extends globalThis.EnumItem {
			Name: "Audio";
			Value: 3;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Audio: Audio;

		export interface Mesh extends globalThis.EnumItem {
			Name: "Mesh";
			Value: 4;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Mesh: Mesh;

		export interface Lua extends globalThis.EnumItem {
			Name: "Lua";
			Value: 5;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Lua: Lua;

		export interface Hat extends globalThis.EnumItem {
			Name: "Hat";
			Value: 8;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Hat: Hat;

		export interface Place extends globalThis.EnumItem {
			Name: "Place";
			Value: 9;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Place: Place;

		export interface Model extends globalThis.EnumItem {
			Name: "Model";
			Value: 10;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Model: Model;

		export interface Shirt extends globalThis.EnumItem {
			Name: "Shirt";
			Value: 11;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Shirt: Shirt;

		export interface Pants extends globalThis.EnumItem {
			Name: "Pants";
			Value: 12;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Pants: Pants;

		export interface Decal extends globalThis.EnumItem {
			Name: "Decal";
			Value: 13;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Decal: Decal;

		export interface Head extends globalThis.EnumItem {
			Name: "Head";
			Value: 17;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Head: Head;

		export interface Face extends globalThis.EnumItem {
			Name: "Face";
			Value: 18;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Face: Face;

		export interface Gear extends globalThis.EnumItem {
			Name: "Gear";
			Value: 19;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Gear: Gear;

		export interface Badge extends globalThis.EnumItem {
			Name: "Badge";
			Value: 21;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Badge: Badge;

		export interface Animation extends globalThis.EnumItem {
			Name: "Animation";
			Value: 24;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Animation: Animation;

		export interface Torso extends globalThis.EnumItem {
			Name: "Torso";
			Value: 27;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Torso: Torso;

		export interface RightArm extends globalThis.EnumItem {
			Name: "RightArm";
			Value: 28;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const RightArm: RightArm;

		export interface LeftArm extends globalThis.EnumItem {
			Name: "LeftArm";
			Value: 29;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const LeftArm: LeftArm;

		export interface LeftLeg extends globalThis.EnumItem {
			Name: "LeftLeg";
			Value: 30;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg extends globalThis.EnumItem {
			Name: "RightLeg";
			Value: 31;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const RightLeg: RightLeg;

		export interface Package extends globalThis.EnumItem {
			Name: "Package";
			Value: 32;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Package: Package;

		export interface GamePass extends globalThis.EnumItem {
			Name: "GamePass";
			Value: 34;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const GamePass: GamePass;

		export interface Plugin extends globalThis.EnumItem {
			Name: "Plugin";
			Value: 38;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Plugin: Plugin;

		export interface MeshPart extends globalThis.EnumItem {
			Name: "MeshPart";
			Value: 40;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const MeshPart: MeshPart;

		export interface HairAccessory extends globalThis.EnumItem {
			Name: "HairAccessory";
			Value: 41;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const HairAccessory: HairAccessory;

		export interface FaceAccessory extends globalThis.EnumItem {
			Name: "FaceAccessory";
			Value: 42;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const FaceAccessory: FaceAccessory;

		export interface NeckAccessory extends globalThis.EnumItem {
			Name: "NeckAccessory";
			Value: 43;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const NeckAccessory: NeckAccessory;

		export interface ShoulderAccessory extends globalThis.EnumItem {
			Name: "ShoulderAccessory";
			Value: 44;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const ShoulderAccessory: ShoulderAccessory;

		export interface FrontAccessory extends globalThis.EnumItem {
			Name: "FrontAccessory";
			Value: 45;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const FrontAccessory: FrontAccessory;

		export interface BackAccessory extends globalThis.EnumItem {
			Name: "BackAccessory";
			Value: 46;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const BackAccessory: BackAccessory;

		export interface WaistAccessory extends globalThis.EnumItem {
			Name: "WaistAccessory";
			Value: 47;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const WaistAccessory: WaistAccessory;

		export interface ClimbAnimation extends globalThis.EnumItem {
			Name: "ClimbAnimation";
			Value: 48;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const ClimbAnimation: ClimbAnimation;

		export interface DeathAnimation extends globalThis.EnumItem {
			Name: "DeathAnimation";
			Value: 49;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const DeathAnimation: DeathAnimation;

		export interface FallAnimation extends globalThis.EnumItem {
			Name: "FallAnimation";
			Value: 50;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const FallAnimation: FallAnimation;

		export interface IdleAnimation extends globalThis.EnumItem {
			Name: "IdleAnimation";
			Value: 51;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const IdleAnimation: IdleAnimation;

		export interface JumpAnimation extends globalThis.EnumItem {
			Name: "JumpAnimation";
			Value: 52;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const JumpAnimation: JumpAnimation;

		export interface RunAnimation extends globalThis.EnumItem {
			Name: "RunAnimation";
			Value: 53;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const RunAnimation: RunAnimation;

		export interface SwimAnimation extends globalThis.EnumItem {
			Name: "SwimAnimation";
			Value: 54;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const SwimAnimation: SwimAnimation;

		export interface WalkAnimation extends globalThis.EnumItem {
			Name: "WalkAnimation";
			Value: 55;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const WalkAnimation: WalkAnimation;

		export interface PoseAnimation extends globalThis.EnumItem {
			Name: "PoseAnimation";
			Value: 56;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const PoseAnimation: PoseAnimation;

		export interface MoodAnimation extends globalThis.EnumItem {
			Name: "MoodAnimation";
			Value: 78;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const MoodAnimation: MoodAnimation;

		export interface EarAccessory extends globalThis.EnumItem {
			Name: "EarAccessory";
			Value: 57;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const EarAccessory: EarAccessory;

		export interface EyeAccessory extends globalThis.EnumItem {
			Name: "EyeAccessory";
			Value: 58;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const EyeAccessory: EyeAccessory;

		export interface EmoteAnimation extends globalThis.EnumItem {
			Name: "EmoteAnimation";
			Value: 61;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const EmoteAnimation: EmoteAnimation;

		export interface Video extends globalThis.EnumItem {
			Name: "Video";
			Value: 62;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const Video: Video;

		export interface TShirtAccessory extends globalThis.EnumItem {
			Name: "TShirtAccessory";
			Value: 64;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const TShirtAccessory: TShirtAccessory;
		/** @deprecated renamed to TShirtAccessory */
		export const TeeShirtAccessory: TShirtAccessory;

		export interface ShirtAccessory extends globalThis.EnumItem {
			Name: "ShirtAccessory";
			Value: 65;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const ShirtAccessory: ShirtAccessory;

		export interface PantsAccessory extends globalThis.EnumItem {
			Name: "PantsAccessory";
			Value: 66;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const PantsAccessory: PantsAccessory;

		export interface JacketAccessory extends globalThis.EnumItem {
			Name: "JacketAccessory";
			Value: 67;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const JacketAccessory: JacketAccessory;

		export interface SweaterAccessory extends globalThis.EnumItem {
			Name: "SweaterAccessory";
			Value: 68;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const SweaterAccessory: SweaterAccessory;

		export interface ShortsAccessory extends globalThis.EnumItem {
			Name: "ShortsAccessory";
			Value: 69;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const ShortsAccessory: ShortsAccessory;

		export interface LeftShoeAccessory extends globalThis.EnumItem {
			Name: "LeftShoeAccessory";
			Value: 70;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const LeftShoeAccessory: LeftShoeAccessory;

		export interface RightShoeAccessory extends globalThis.EnumItem {
			Name: "RightShoeAccessory";
			Value: 71;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const RightShoeAccessory: RightShoeAccessory;

		export interface DressSkirtAccessory extends globalThis.EnumItem {
			Name: "DressSkirtAccessory";
			Value: 72;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const DressSkirtAccessory: DressSkirtAccessory;

		export interface EyebrowAccessory extends globalThis.EnumItem {
			Name: "EyebrowAccessory";
			Value: 76;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const EyebrowAccessory: EyebrowAccessory;

		export interface EyelashAccessory extends globalThis.EnumItem {
			Name: "EyelashAccessory";
			Value: 77;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const EyelashAccessory: EyelashAccessory;

		export interface DynamicHead extends globalThis.EnumItem {
			Name: "DynamicHead";
			Value: 79;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const DynamicHead: DynamicHead;

		export interface FontFamily extends globalThis.EnumItem {
			Name: "FontFamily";
			Value: 73;
			EnumType: typeof globalThis.Enum.AssetType;
		}

		export const FontFamily: FontFamily;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AssetType>;
	}
	export type AssetType = AssetType.Image | AssetType.TShirt | AssetType.Audio | AssetType.Mesh | AssetType.Lua | AssetType.Hat | AssetType.Place | AssetType.Model | AssetType.Shirt | AssetType.Pants | AssetType.Decal | AssetType.Head | AssetType.Face | AssetType.Gear | AssetType.Badge | AssetType.Animation | AssetType.Torso | AssetType.RightArm | AssetType.LeftArm | AssetType.LeftLeg | AssetType.RightLeg | AssetType.Package | AssetType.GamePass | AssetType.Plugin | AssetType.MeshPart | AssetType.HairAccessory | AssetType.FaceAccessory | AssetType.NeckAccessory | AssetType.ShoulderAccessory | AssetType.FrontAccessory | AssetType.BackAccessory | AssetType.WaistAccessory | AssetType.ClimbAnimation | AssetType.DeathAnimation | AssetType.FallAnimation | AssetType.IdleAnimation | AssetType.JumpAnimation | AssetType.RunAnimation | AssetType.SwimAnimation | AssetType.WalkAnimation | AssetType.PoseAnimation | AssetType.MoodAnimation | AssetType.EarAccessory | AssetType.EyeAccessory | AssetType.EmoteAnimation | AssetType.Video | AssetType.TShirtAccessory | AssetType.ShirtAccessory | AssetType.PantsAccessory | AssetType.JacketAccessory | AssetType.SweaterAccessory | AssetType.ShortsAccessory | AssetType.LeftShoeAccessory | AssetType.RightShoeAccessory | AssetType.DressSkirtAccessory | AssetType.EyebrowAccessory | AssetType.EyelashAccessory | AssetType.DynamicHead | AssetType.FontFamily;

	export namespace AssetTypeVerification {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 1;
			EnumType: typeof globalThis.Enum.AssetTypeVerification;
		}

		export const Default: Default;

		export interface ClientOnly extends globalThis.EnumItem {
			Name: "ClientOnly";
			Value: 2;
			EnumType: typeof globalThis.Enum.AssetTypeVerification;
		}

		export const ClientOnly: ClientOnly;

		export interface Always extends globalThis.EnumItem {
			Name: "Always";
			Value: 3;
			EnumType: typeof globalThis.Enum.AssetTypeVerification;
		}

		export const Always: Always;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AssetTypeVerification>;
	}
	export type AssetTypeVerification = AssetTypeVerification.Default | AssetTypeVerification.ClientOnly | AssetTypeVerification.Always;

	export namespace AudioSubType {
		export interface Music extends globalThis.EnumItem {
			Name: "Music";
			Value: 1;
			EnumType: typeof globalThis.Enum.AudioSubType;
		}

		export const Music: Music;

		export interface SoundEffect extends globalThis.EnumItem {
			Name: "SoundEffect";
			Value: 2;
			EnumType: typeof globalThis.Enum.AudioSubType;
		}

		export const SoundEffect: SoundEffect;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AudioSubType>;
	}
	export type AudioSubType = AudioSubType.Music | AudioSubType.SoundEffect;

	export namespace AudioWindowSize {
		export interface Small extends globalThis.EnumItem {
			Name: "Small";
			Value: 0;
			EnumType: typeof globalThis.Enum.AudioWindowSize;
		}

		export const Small: Small;

		export interface Medium extends globalThis.EnumItem {
			Name: "Medium";
			Value: 1;
			EnumType: typeof globalThis.Enum.AudioWindowSize;
		}

		export const Medium: Medium;

		export interface Large extends globalThis.EnumItem {
			Name: "Large";
			Value: 2;
			EnumType: typeof globalThis.Enum.AudioWindowSize;
		}

		export const Large: Large;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AudioWindowSize>;
	}
	export type AudioWindowSize = AudioWindowSize.Small | AudioWindowSize.Medium | AudioWindowSize.Large;

	export namespace AutoIndentRule {
		export interface Off extends globalThis.EnumItem {
			Name: "Off";
			Value: 0;
			EnumType: typeof globalThis.Enum.AutoIndentRule;
		}

		export const Off: Off;

		export interface Absolute extends globalThis.EnumItem {
			Name: "Absolute";
			Value: 1;
			EnumType: typeof globalThis.Enum.AutoIndentRule;
		}

		export const Absolute: Absolute;

		export interface Relative extends globalThis.EnumItem {
			Name: "Relative";
			Value: 2;
			EnumType: typeof globalThis.Enum.AutoIndentRule;
		}

		export const Relative: Relative;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AutoIndentRule>;
	}
	export type AutoIndentRule = AutoIndentRule.Off | AutoIndentRule.Absolute | AutoIndentRule.Relative;

	export namespace AutomaticSize {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.AutomaticSize;
		}

		export const None: None;

		export interface X extends globalThis.EnumItem {
			Name: "X";
			Value: 1;
			EnumType: typeof globalThis.Enum.AutomaticSize;
		}

		export const X: X;

		export interface Y extends globalThis.EnumItem {
			Name: "Y";
			Value: 2;
			EnumType: typeof globalThis.Enum.AutomaticSize;
		}

		export const Y: Y;

		export interface XY extends globalThis.EnumItem {
			Name: "XY";
			Value: 3;
			EnumType: typeof globalThis.Enum.AutomaticSize;
		}

		export const XY: XY;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AutomaticSize>;
	}
	export type AutomaticSize = AutomaticSize.None | AutomaticSize.X | AutomaticSize.Y | AutomaticSize.XY;

	export namespace AvatarAssetType {
		export interface TShirt extends globalThis.EnumItem {
			Name: "TShirt";
			Value: 2;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const TShirt: TShirt;

		export interface Hat extends globalThis.EnumItem {
			Name: "Hat";
			Value: 8;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const Hat: Hat;

		export interface HairAccessory extends globalThis.EnumItem {
			Name: "HairAccessory";
			Value: 41;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const HairAccessory: HairAccessory;

		export interface FaceAccessory extends globalThis.EnumItem {
			Name: "FaceAccessory";
			Value: 42;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const FaceAccessory: FaceAccessory;

		export interface NeckAccessory extends globalThis.EnumItem {
			Name: "NeckAccessory";
			Value: 43;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const NeckAccessory: NeckAccessory;

		export interface ShoulderAccessory extends globalThis.EnumItem {
			Name: "ShoulderAccessory";
			Value: 44;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const ShoulderAccessory: ShoulderAccessory;

		export interface FrontAccessory extends globalThis.EnumItem {
			Name: "FrontAccessory";
			Value: 45;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const FrontAccessory: FrontAccessory;

		export interface BackAccessory extends globalThis.EnumItem {
			Name: "BackAccessory";
			Value: 46;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const BackAccessory: BackAccessory;

		export interface WaistAccessory extends globalThis.EnumItem {
			Name: "WaistAccessory";
			Value: 47;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const WaistAccessory: WaistAccessory;

		export interface Shirt extends globalThis.EnumItem {
			Name: "Shirt";
			Value: 11;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const Shirt: Shirt;

		export interface Pants extends globalThis.EnumItem {
			Name: "Pants";
			Value: 12;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const Pants: Pants;

		export interface Gear extends globalThis.EnumItem {
			Name: "Gear";
			Value: 19;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const Gear: Gear;

		export interface Head extends globalThis.EnumItem {
			Name: "Head";
			Value: 17;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const Head: Head;

		export interface Face extends globalThis.EnumItem {
			Name: "Face";
			Value: 18;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const Face: Face;

		export interface Torso extends globalThis.EnumItem {
			Name: "Torso";
			Value: 27;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const Torso: Torso;

		export interface RightArm extends globalThis.EnumItem {
			Name: "RightArm";
			Value: 28;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const RightArm: RightArm;

		export interface LeftArm extends globalThis.EnumItem {
			Name: "LeftArm";
			Value: 29;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const LeftArm: LeftArm;

		export interface LeftLeg extends globalThis.EnumItem {
			Name: "LeftLeg";
			Value: 30;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg extends globalThis.EnumItem {
			Name: "RightLeg";
			Value: 31;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const RightLeg: RightLeg;

		export interface ClimbAnimation extends globalThis.EnumItem {
			Name: "ClimbAnimation";
			Value: 48;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const ClimbAnimation: ClimbAnimation;

		export interface FallAnimation extends globalThis.EnumItem {
			Name: "FallAnimation";
			Value: 50;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const FallAnimation: FallAnimation;

		export interface IdleAnimation extends globalThis.EnumItem {
			Name: "IdleAnimation";
			Value: 51;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const IdleAnimation: IdleAnimation;

		export interface JumpAnimation extends globalThis.EnumItem {
			Name: "JumpAnimation";
			Value: 52;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const JumpAnimation: JumpAnimation;

		export interface RunAnimation extends globalThis.EnumItem {
			Name: "RunAnimation";
			Value: 53;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const RunAnimation: RunAnimation;

		export interface SwimAnimation extends globalThis.EnumItem {
			Name: "SwimAnimation";
			Value: 54;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const SwimAnimation: SwimAnimation;

		export interface WalkAnimation extends globalThis.EnumItem {
			Name: "WalkAnimation";
			Value: 55;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const WalkAnimation: WalkAnimation;

		export interface MoodAnimation extends globalThis.EnumItem {
			Name: "MoodAnimation";
			Value: 78;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const MoodAnimation: MoodAnimation;

		export interface EmoteAnimation extends globalThis.EnumItem {
			Name: "EmoteAnimation";
			Value: 61;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const EmoteAnimation: EmoteAnimation;

		export interface TShirtAccessory extends globalThis.EnumItem {
			Name: "TShirtAccessory";
			Value: 64;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const TShirtAccessory: TShirtAccessory;
		/** @deprecated renamed to TShirtAccessory */
		export const TeeShirtAccessory: TShirtAccessory;

		export interface ShirtAccessory extends globalThis.EnumItem {
			Name: "ShirtAccessory";
			Value: 65;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const ShirtAccessory: ShirtAccessory;

		export interface PantsAccessory extends globalThis.EnumItem {
			Name: "PantsAccessory";
			Value: 66;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const PantsAccessory: PantsAccessory;

		export interface JacketAccessory extends globalThis.EnumItem {
			Name: "JacketAccessory";
			Value: 67;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const JacketAccessory: JacketAccessory;

		export interface SweaterAccessory extends globalThis.EnumItem {
			Name: "SweaterAccessory";
			Value: 68;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const SweaterAccessory: SweaterAccessory;

		export interface ShortsAccessory extends globalThis.EnumItem {
			Name: "ShortsAccessory";
			Value: 69;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const ShortsAccessory: ShortsAccessory;

		export interface LeftShoeAccessory extends globalThis.EnumItem {
			Name: "LeftShoeAccessory";
			Value: 70;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const LeftShoeAccessory: LeftShoeAccessory;

		export interface RightShoeAccessory extends globalThis.EnumItem {
			Name: "RightShoeAccessory";
			Value: 71;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const RightShoeAccessory: RightShoeAccessory;

		export interface DressSkirtAccessory extends globalThis.EnumItem {
			Name: "DressSkirtAccessory";
			Value: 72;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const DressSkirtAccessory: DressSkirtAccessory;

		export interface EyebrowAccessory extends globalThis.EnumItem {
			Name: "EyebrowAccessory";
			Value: 76;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const EyebrowAccessory: EyebrowAccessory;

		export interface EyelashAccessory extends globalThis.EnumItem {
			Name: "EyelashAccessory";
			Value: 77;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const EyelashAccessory: EyelashAccessory;

		export interface DynamicHead extends globalThis.EnumItem {
			Name: "DynamicHead";
			Value: 79;
			EnumType: typeof globalThis.Enum.AvatarAssetType;
		}

		export const DynamicHead: DynamicHead;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AvatarAssetType>;
	}
	export type AvatarAssetType = AvatarAssetType.TShirt | AvatarAssetType.Hat | AvatarAssetType.HairAccessory | AvatarAssetType.FaceAccessory | AvatarAssetType.NeckAccessory | AvatarAssetType.ShoulderAccessory | AvatarAssetType.FrontAccessory | AvatarAssetType.BackAccessory | AvatarAssetType.WaistAccessory | AvatarAssetType.Shirt | AvatarAssetType.Pants | AvatarAssetType.Gear | AvatarAssetType.Head | AvatarAssetType.Face | AvatarAssetType.Torso | AvatarAssetType.RightArm | AvatarAssetType.LeftArm | AvatarAssetType.LeftLeg | AvatarAssetType.RightLeg | AvatarAssetType.ClimbAnimation | AvatarAssetType.FallAnimation | AvatarAssetType.IdleAnimation | AvatarAssetType.JumpAnimation | AvatarAssetType.RunAnimation | AvatarAssetType.SwimAnimation | AvatarAssetType.WalkAnimation | AvatarAssetType.MoodAnimation | AvatarAssetType.EmoteAnimation | AvatarAssetType.TShirtAccessory | AvatarAssetType.ShirtAccessory | AvatarAssetType.PantsAccessory | AvatarAssetType.JacketAccessory | AvatarAssetType.SweaterAccessory | AvatarAssetType.ShortsAccessory | AvatarAssetType.LeftShoeAccessory | AvatarAssetType.RightShoeAccessory | AvatarAssetType.DressSkirtAccessory | AvatarAssetType.EyebrowAccessory | AvatarAssetType.EyelashAccessory | AvatarAssetType.DynamicHead;

	export namespace AvatarChatServiceFeature {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.AvatarChatServiceFeature;
		}

		export const None: None;

		export interface UniverseAudio extends globalThis.EnumItem {
			Name: "UniverseAudio";
			Value: 1;
			EnumType: typeof globalThis.Enum.AvatarChatServiceFeature;
		}

		export const UniverseAudio: UniverseAudio;

		export interface UniverseVideo extends globalThis.EnumItem {
			Name: "UniverseVideo";
			Value: 2;
			EnumType: typeof globalThis.Enum.AvatarChatServiceFeature;
		}

		export const UniverseVideo: UniverseVideo;

		export interface PlaceAudio extends globalThis.EnumItem {
			Name: "PlaceAudio";
			Value: 4;
			EnumType: typeof globalThis.Enum.AvatarChatServiceFeature;
		}

		export const PlaceAudio: PlaceAudio;

		export interface PlaceVideo extends globalThis.EnumItem {
			Name: "PlaceVideo";
			Value: 8;
			EnumType: typeof globalThis.Enum.AvatarChatServiceFeature;
		}

		export const PlaceVideo: PlaceVideo;

		export interface UserAudioEligible extends globalThis.EnumItem {
			Name: "UserAudioEligible";
			Value: 16;
			EnumType: typeof globalThis.Enum.AvatarChatServiceFeature;
		}

		export const UserAudioEligible: UserAudioEligible;

		export interface UserAudio extends globalThis.EnumItem {
			Name: "UserAudio";
			Value: 32;
			EnumType: typeof globalThis.Enum.AvatarChatServiceFeature;
		}

		export const UserAudio: UserAudio;

		export interface UserVideoEligible extends globalThis.EnumItem {
			Name: "UserVideoEligible";
			Value: 64;
			EnumType: typeof globalThis.Enum.AvatarChatServiceFeature;
		}

		export const UserVideoEligible: UserVideoEligible;

		export interface UserVideo extends globalThis.EnumItem {
			Name: "UserVideo";
			Value: 128;
			EnumType: typeof globalThis.Enum.AvatarChatServiceFeature;
		}

		export const UserVideo: UserVideo;

		export interface UserBanned extends globalThis.EnumItem {
			Name: "UserBanned";
			Value: 256;
			EnumType: typeof globalThis.Enum.AvatarChatServiceFeature;
		}

		export const UserBanned: UserBanned;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AvatarChatServiceFeature>;
	}
	export type AvatarChatServiceFeature = AvatarChatServiceFeature.None | AvatarChatServiceFeature.UniverseAudio | AvatarChatServiceFeature.UniverseVideo | AvatarChatServiceFeature.PlaceAudio | AvatarChatServiceFeature.PlaceVideo | AvatarChatServiceFeature.UserAudioEligible | AvatarChatServiceFeature.UserAudio | AvatarChatServiceFeature.UserVideoEligible | AvatarChatServiceFeature.UserVideo | AvatarChatServiceFeature.UserBanned;

	export namespace AvatarContextMenuOption {
		export interface Friend extends globalThis.EnumItem {
			Name: "Friend";
			Value: 0;
			EnumType: typeof globalThis.Enum.AvatarContextMenuOption;
		}

		export const Friend: Friend;

		export interface Chat extends globalThis.EnumItem {
			Name: "Chat";
			Value: 1;
			EnumType: typeof globalThis.Enum.AvatarContextMenuOption;
		}

		export const Chat: Chat;

		export interface Emote extends globalThis.EnumItem {
			Name: "Emote";
			Value: 2;
			EnumType: typeof globalThis.Enum.AvatarContextMenuOption;
		}

		export const Emote: Emote;

		export interface InspectMenu extends globalThis.EnumItem {
			Name: "InspectMenu";
			Value: 3;
			EnumType: typeof globalThis.Enum.AvatarContextMenuOption;
		}

		export const InspectMenu: InspectMenu;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AvatarContextMenuOption>;
	}
	export type AvatarContextMenuOption = AvatarContextMenuOption.Friend | AvatarContextMenuOption.Chat | AvatarContextMenuOption.Emote | AvatarContextMenuOption.InspectMenu;

	export namespace AvatarItemType {
		export interface Asset extends globalThis.EnumItem {
			Name: "Asset";
			Value: 1;
			EnumType: typeof globalThis.Enum.AvatarItemType;
		}

		export const Asset: Asset;

		export interface Bundle extends globalThis.EnumItem {
			Name: "Bundle";
			Value: 2;
			EnumType: typeof globalThis.Enum.AvatarItemType;
		}

		export const Bundle: Bundle;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AvatarItemType>;
	}
	export type AvatarItemType = AvatarItemType.Asset | AvatarItemType.Bundle;

	export namespace AvatarJointUpgrade {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.AvatarJointUpgrade;
		}

		export const Default: Default;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.AvatarJointUpgrade;
		}

		export const Enabled: Enabled;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.AvatarJointUpgrade;
		}

		export const Disabled: Disabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AvatarJointUpgrade>;
	}
	export type AvatarJointUpgrade = AvatarJointUpgrade.Default | AvatarJointUpgrade.Enabled | AvatarJointUpgrade.Disabled;

	export namespace AvatarPromptResult {
		export interface Success extends globalThis.EnumItem {
			Name: "Success";
			Value: 1;
			EnumType: typeof globalThis.Enum.AvatarPromptResult;
		}

		export const Success: Success;

		export interface PermissionDenied extends globalThis.EnumItem {
			Name: "PermissionDenied";
			Value: 2;
			EnumType: typeof globalThis.Enum.AvatarPromptResult;
		}

		export const PermissionDenied: PermissionDenied;

		export interface Failed extends globalThis.EnumItem {
			Name: "Failed";
			Value: 3;
			EnumType: typeof globalThis.Enum.AvatarPromptResult;
		}

		export const Failed: Failed;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AvatarPromptResult>;
	}
	export type AvatarPromptResult = AvatarPromptResult.Success | AvatarPromptResult.PermissionDenied | AvatarPromptResult.Failed;

	export namespace AvatarThumbnailCustomizationType {
		export interface Closeup extends globalThis.EnumItem {
			Name: "Closeup";
			Value: 1;
			EnumType: typeof globalThis.Enum.AvatarThumbnailCustomizationType;
		}

		export const Closeup: Closeup;

		export interface FullBody extends globalThis.EnumItem {
			Name: "FullBody";
			Value: 2;
			EnumType: typeof globalThis.Enum.AvatarThumbnailCustomizationType;
		}

		export const FullBody: FullBody;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AvatarThumbnailCustomizationType>;
	}
	export type AvatarThumbnailCustomizationType = AvatarThumbnailCustomizationType.Closeup | AvatarThumbnailCustomizationType.FullBody;

	export namespace AvatarUnificationMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.AvatarUnificationMode;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.AvatarUnificationMode;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.AvatarUnificationMode;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.AvatarUnificationMode>;
	}
	export type AvatarUnificationMode = AvatarUnificationMode.Default | AvatarUnificationMode.Disabled | AvatarUnificationMode.Enabled;

	export namespace Axis {
		export interface X extends globalThis.EnumItem {
			Name: "X";
			Value: 0;
			EnumType: typeof globalThis.Enum.Axis;
		}

		export const X: X;
		/** @deprecated renamed to X */
		export const Left: X;
		/** @deprecated renamed to X */
		export const Right: X;

		export interface Y extends globalThis.EnumItem {
			Name: "Y";
			Value: 1;
			EnumType: typeof globalThis.Enum.Axis;
		}

		export const Y: Y;
		/** @deprecated renamed to Y */
		export const Bottom: Y;
		/** @deprecated renamed to Y */
		export const Top: Y;

		export interface Z extends globalThis.EnumItem {
			Name: "Z";
			Value: 2;
			EnumType: typeof globalThis.Enum.Axis;
		}

		export const Z: Z;
		/** @deprecated renamed to Z */
		export const Back: Z;
		/** @deprecated renamed to Z */
		export const Front: Z;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.Axis>;
	}
	export type Axis = Axis.X | Axis.Y | Axis.Z;

	export namespace BinType {
		export interface Script extends globalThis.EnumItem {
			Name: "Script";
			Value: 0;
			EnumType: typeof globalThis.Enum.BinType;
		}

		export const Script: Script;
		/** @deprecated renamed to Script */
		export const Laser: Script;
		/** @deprecated renamed to Script */
		export const Rocket: Script;
		/** @deprecated renamed to Script */
		export const Slingshot: Script;

		export interface GameTool extends globalThis.EnumItem {
			Name: "GameTool";
			Value: 1;
			EnumType: typeof globalThis.Enum.BinType;
		}

		export const GameTool: GameTool;

		export interface Grab extends globalThis.EnumItem {
			Name: "Grab";
			Value: 2;
			EnumType: typeof globalThis.Enum.BinType;
		}

		export const Grab: Grab;

		export interface Clone extends globalThis.EnumItem {
			Name: "Clone";
			Value: 3;
			EnumType: typeof globalThis.Enum.BinType;
		}

		export const Clone: Clone;

		export interface Hammer extends globalThis.EnumItem {
			Name: "Hammer";
			Value: 4;
			EnumType: typeof globalThis.Enum.BinType;
		}

		export const Hammer: Hammer;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.BinType>;
	}
	export type BinType = BinType.Script | BinType.GameTool | BinType.Grab | BinType.Clone | BinType.Hammer;

	export namespace BodyPart {
		export interface Head extends globalThis.EnumItem {
			Name: "Head";
			Value: 0;
			EnumType: typeof globalThis.Enum.BodyPart;
		}

		export const Head: Head;

		export interface Torso extends globalThis.EnumItem {
			Name: "Torso";
			Value: 1;
			EnumType: typeof globalThis.Enum.BodyPart;
		}

		export const Torso: Torso;

		export interface LeftArm extends globalThis.EnumItem {
			Name: "LeftArm";
			Value: 2;
			EnumType: typeof globalThis.Enum.BodyPart;
		}

		export const LeftArm: LeftArm;

		export interface RightArm extends globalThis.EnumItem {
			Name: "RightArm";
			Value: 3;
			EnumType: typeof globalThis.Enum.BodyPart;
		}

		export const RightArm: RightArm;

		export interface LeftLeg extends globalThis.EnumItem {
			Name: "LeftLeg";
			Value: 4;
			EnumType: typeof globalThis.Enum.BodyPart;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg extends globalThis.EnumItem {
			Name: "RightLeg";
			Value: 5;
			EnumType: typeof globalThis.Enum.BodyPart;
		}

		export const RightLeg: RightLeg;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.BodyPart>;
	}
	export type BodyPart = BodyPart.Head | BodyPart.Torso | BodyPart.LeftArm | BodyPart.RightArm | BodyPart.LeftLeg | BodyPart.RightLeg;

	export namespace BodyPartR15 {
		export interface Head extends globalThis.EnumItem {
			Name: "Head";
			Value: 0;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const Head: Head;

		export interface UpperTorso extends globalThis.EnumItem {
			Name: "UpperTorso";
			Value: 1;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const UpperTorso: UpperTorso;

		export interface LowerTorso extends globalThis.EnumItem {
			Name: "LowerTorso";
			Value: 2;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const LowerTorso: LowerTorso;

		export interface LeftFoot extends globalThis.EnumItem {
			Name: "LeftFoot";
			Value: 3;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const LeftFoot: LeftFoot;

		export interface LeftLowerLeg extends globalThis.EnumItem {
			Name: "LeftLowerLeg";
			Value: 4;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const LeftLowerLeg: LeftLowerLeg;

		export interface LeftUpperLeg extends globalThis.EnumItem {
			Name: "LeftUpperLeg";
			Value: 5;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const LeftUpperLeg: LeftUpperLeg;

		export interface RightFoot extends globalThis.EnumItem {
			Name: "RightFoot";
			Value: 6;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const RightFoot: RightFoot;

		export interface RightLowerLeg extends globalThis.EnumItem {
			Name: "RightLowerLeg";
			Value: 7;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const RightLowerLeg: RightLowerLeg;

		export interface RightUpperLeg extends globalThis.EnumItem {
			Name: "RightUpperLeg";
			Value: 8;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const RightUpperLeg: RightUpperLeg;

		export interface LeftHand extends globalThis.EnumItem {
			Name: "LeftHand";
			Value: 9;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const LeftHand: LeftHand;

		export interface LeftLowerArm extends globalThis.EnumItem {
			Name: "LeftLowerArm";
			Value: 10;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const LeftLowerArm: LeftLowerArm;

		export interface LeftUpperArm extends globalThis.EnumItem {
			Name: "LeftUpperArm";
			Value: 11;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const LeftUpperArm: LeftUpperArm;

		export interface RightHand extends globalThis.EnumItem {
			Name: "RightHand";
			Value: 12;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const RightHand: RightHand;

		export interface RightLowerArm extends globalThis.EnumItem {
			Name: "RightLowerArm";
			Value: 13;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const RightLowerArm: RightLowerArm;

		export interface RightUpperArm extends globalThis.EnumItem {
			Name: "RightUpperArm";
			Value: 14;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const RightUpperArm: RightUpperArm;

		export interface RootPart extends globalThis.EnumItem {
			Name: "RootPart";
			Value: 15;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const RootPart: RootPart;

		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 17;
			EnumType: typeof globalThis.Enum.BodyPartR15;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.BodyPartR15>;
	}
	export type BodyPartR15 = BodyPartR15.Head | BodyPartR15.UpperTorso | BodyPartR15.LowerTorso | BodyPartR15.LeftFoot | BodyPartR15.LeftLowerLeg | BodyPartR15.LeftUpperLeg | BodyPartR15.RightFoot | BodyPartR15.RightLowerLeg | BodyPartR15.RightUpperLeg | BodyPartR15.LeftHand | BodyPartR15.LeftLowerArm | BodyPartR15.LeftUpperArm | BodyPartR15.RightHand | BodyPartR15.RightLowerArm | BodyPartR15.RightUpperArm | BodyPartR15.RootPart | BodyPartR15.Unknown;

	export namespace BorderMode {
		export interface Outline extends globalThis.EnumItem {
			Name: "Outline";
			Value: 0;
			EnumType: typeof globalThis.Enum.BorderMode;
		}

		export const Outline: Outline;

		export interface Middle extends globalThis.EnumItem {
			Name: "Middle";
			Value: 1;
			EnumType: typeof globalThis.Enum.BorderMode;
		}

		export const Middle: Middle;

		export interface Inset extends globalThis.EnumItem {
			Name: "Inset";
			Value: 2;
			EnumType: typeof globalThis.Enum.BorderMode;
		}

		export const Inset: Inset;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.BorderMode>;
	}
	export type BorderMode = BorderMode.Outline | BorderMode.Middle | BorderMode.Inset;

	export namespace BreakReason {
		export interface Other extends globalThis.EnumItem {
			Name: "Other";
			Value: 0;
			EnumType: typeof globalThis.Enum.BreakReason;
		}

		export const Other: Other;

		export interface Error extends globalThis.EnumItem {
			Name: "Error";
			Value: 1;
			EnumType: typeof globalThis.Enum.BreakReason;
		}

		export const Error: Error;

		export interface UserBreakpoint extends globalThis.EnumItem {
			Name: "UserBreakpoint";
			Value: 3;
			EnumType: typeof globalThis.Enum.BreakReason;
		}

		export const UserBreakpoint: UserBreakpoint;

		export interface SpecialBreakpoint extends globalThis.EnumItem {
			Name: "SpecialBreakpoint";
			Value: 2;
			EnumType: typeof globalThis.Enum.BreakReason;
		}

		export const SpecialBreakpoint: SpecialBreakpoint;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.BreakReason>;
	}
	export type BreakReason = BreakReason.Other | BreakReason.Error | BreakReason.UserBreakpoint | BreakReason.SpecialBreakpoint;

	export namespace BreakpointRemoveReason {
		export interface Requested extends globalThis.EnumItem {
			Name: "Requested";
			Value: 0;
			EnumType: typeof globalThis.Enum.BreakpointRemoveReason;
		}

		export const Requested: Requested;

		export interface ScriptChanged extends globalThis.EnumItem {
			Name: "ScriptChanged";
			Value: 1;
			EnumType: typeof globalThis.Enum.BreakpointRemoveReason;
		}

		export const ScriptChanged: ScriptChanged;

		export interface ScriptRemoved extends globalThis.EnumItem {
			Name: "ScriptRemoved";
			Value: 2;
			EnumType: typeof globalThis.Enum.BreakpointRemoveReason;
		}

		export const ScriptRemoved: ScriptRemoved;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.BreakpointRemoveReason>;
	}
	export type BreakpointRemoveReason = BreakpointRemoveReason.Requested | BreakpointRemoveReason.ScriptChanged | BreakpointRemoveReason.ScriptRemoved;

	export namespace BulkMoveMode {
		export interface FireAllEvents extends globalThis.EnumItem {
			Name: "FireAllEvents";
			Value: 0;
			EnumType: typeof globalThis.Enum.BulkMoveMode;
		}

		export const FireAllEvents: FireAllEvents;

		export interface FireCFrameChanged extends globalThis.EnumItem {
			Name: "FireCFrameChanged";
			Value: 1;
			EnumType: typeof globalThis.Enum.BulkMoveMode;
		}

		export const FireCFrameChanged: FireCFrameChanged;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.BulkMoveMode>;
	}
	export type BulkMoveMode = BulkMoveMode.FireAllEvents | BulkMoveMode.FireCFrameChanged;

	export namespace BundleType {
		export interface BodyParts extends globalThis.EnumItem {
			Name: "BodyParts";
			Value: 1;
			EnumType: typeof globalThis.Enum.BundleType;
		}

		export const BodyParts: BodyParts;

		export interface Animations extends globalThis.EnumItem {
			Name: "Animations";
			Value: 2;
			EnumType: typeof globalThis.Enum.BundleType;
		}

		export const Animations: Animations;

		export interface Shoes extends globalThis.EnumItem {
			Name: "Shoes";
			Value: 3;
			EnumType: typeof globalThis.Enum.BundleType;
		}

		export const Shoes: Shoes;

		export interface DynamicHead extends globalThis.EnumItem {
			Name: "DynamicHead";
			Value: 4;
			EnumType: typeof globalThis.Enum.BundleType;
		}

		export const DynamicHead: DynamicHead;

		export interface DynamicHeadAvatar extends globalThis.EnumItem {
			Name: "DynamicHeadAvatar";
			Value: 5;
			EnumType: typeof globalThis.Enum.BundleType;
		}

		export const DynamicHeadAvatar: DynamicHeadAvatar;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.BundleType>;
	}
	export type BundleType = BundleType.BodyParts | BundleType.Animations | BundleType.Shoes | BundleType.DynamicHead | BundleType.DynamicHeadAvatar;

	export namespace Button {
		export interface Jump extends globalThis.EnumItem {
			Name: "Jump";
			Value: 32;
			EnumType: typeof globalThis.Enum.Button;
		}

		export const Jump: Jump;

		export interface Dismount extends globalThis.EnumItem {
			Name: "Dismount";
			Value: 8;
			EnumType: typeof globalThis.Enum.Button;
		}

		export const Dismount: Dismount;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.Button>;
	}
	export type Button = Button.Jump | Button.Dismount;

	export namespace ButtonStyle {
		export interface Custom extends globalThis.EnumItem {
			Name: "Custom";
			Value: 0;
			EnumType: typeof globalThis.Enum.ButtonStyle;
		}

		export const Custom: Custom;

		export interface RobloxButtonDefault extends globalThis.EnumItem {
			Name: "RobloxButtonDefault";
			Value: 1;
			EnumType: typeof globalThis.Enum.ButtonStyle;
		}

		export const RobloxButtonDefault: RobloxButtonDefault;

		export interface RobloxButton extends globalThis.EnumItem {
			Name: "RobloxButton";
			Value: 2;
			EnumType: typeof globalThis.Enum.ButtonStyle;
		}

		export const RobloxButton: RobloxButton;

		export interface RobloxRoundButton extends globalThis.EnumItem {
			Name: "RobloxRoundButton";
			Value: 3;
			EnumType: typeof globalThis.Enum.ButtonStyle;
		}

		export const RobloxRoundButton: RobloxRoundButton;

		export interface RobloxRoundDefaultButton extends globalThis.EnumItem {
			Name: "RobloxRoundDefaultButton";
			Value: 4;
			EnumType: typeof globalThis.Enum.ButtonStyle;
		}

		export const RobloxRoundDefaultButton: RobloxRoundDefaultButton;

		export interface RobloxRoundDropdownButton extends globalThis.EnumItem {
			Name: "RobloxRoundDropdownButton";
			Value: 5;
			EnumType: typeof globalThis.Enum.ButtonStyle;
		}

		export const RobloxRoundDropdownButton: RobloxRoundDropdownButton;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ButtonStyle>;
	}
	export type ButtonStyle = ButtonStyle.Custom | ButtonStyle.RobloxButtonDefault | ButtonStyle.RobloxButton | ButtonStyle.RobloxRoundButton | ButtonStyle.RobloxRoundDefaultButton | ButtonStyle.RobloxRoundDropdownButton;

	export namespace CageType {
		export interface Inner extends globalThis.EnumItem {
			Name: "Inner";
			Value: 0;
			EnumType: typeof globalThis.Enum.CageType;
		}

		export const Inner: Inner;

		export interface Outer extends globalThis.EnumItem {
			Name: "Outer";
			Value: 1;
			EnumType: typeof globalThis.Enum.CageType;
		}

		export const Outer: Outer;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CageType>;
	}
	export type CageType = CageType.Inner | CageType.Outer;

	export namespace CameraMode {
		export interface Classic extends globalThis.EnumItem {
			Name: "Classic";
			Value: 0;
			EnumType: typeof globalThis.Enum.CameraMode;
		}

		export const Classic: Classic;

		export interface LockFirstPerson extends globalThis.EnumItem {
			Name: "LockFirstPerson";
			Value: 1;
			EnumType: typeof globalThis.Enum.CameraMode;
		}

		export const LockFirstPerson: LockFirstPerson;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CameraMode>;
	}
	export type CameraMode = CameraMode.Classic | CameraMode.LockFirstPerson;

	export namespace CameraPanMode {
		export interface Classic extends globalThis.EnumItem {
			Name: "Classic";
			Value: 0;
			EnumType: typeof globalThis.Enum.CameraPanMode;
		}

		export const Classic: Classic;

		export interface EdgeBump extends globalThis.EnumItem {
			Name: "EdgeBump";
			Value: 1;
			EnumType: typeof globalThis.Enum.CameraPanMode;
		}

		export const EdgeBump: EdgeBump;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CameraPanMode>;
	}
	export type CameraPanMode = CameraPanMode.Classic | CameraPanMode.EdgeBump;

	export namespace CameraType {
		export interface Fixed extends globalThis.EnumItem {
			Name: "Fixed";
			Value: 0;
			EnumType: typeof globalThis.Enum.CameraType;
		}

		export const Fixed: Fixed;

		export interface Watch extends globalThis.EnumItem {
			Name: "Watch";
			Value: 2;
			EnumType: typeof globalThis.Enum.CameraType;
		}

		export const Watch: Watch;

		export interface Attach extends globalThis.EnumItem {
			Name: "Attach";
			Value: 1;
			EnumType: typeof globalThis.Enum.CameraType;
		}

		export const Attach: Attach;

		export interface Track extends globalThis.EnumItem {
			Name: "Track";
			Value: 3;
			EnumType: typeof globalThis.Enum.CameraType;
		}

		export const Track: Track;

		export interface Follow extends globalThis.EnumItem {
			Name: "Follow";
			Value: 4;
			EnumType: typeof globalThis.Enum.CameraType;
		}

		export const Follow: Follow;

		export interface Custom extends globalThis.EnumItem {
			Name: "Custom";
			Value: 5;
			EnumType: typeof globalThis.Enum.CameraType;
		}

		export const Custom: Custom;

		export interface Scriptable extends globalThis.EnumItem {
			Name: "Scriptable";
			Value: 6;
			EnumType: typeof globalThis.Enum.CameraType;
		}

		export const Scriptable: Scriptable;

		export interface Orbital extends globalThis.EnumItem {
			Name: "Orbital";
			Value: 7;
			EnumType: typeof globalThis.Enum.CameraType;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CameraType>;
	}
	export type CameraType = CameraType.Fixed | CameraType.Watch | CameraType.Attach | CameraType.Track | CameraType.Follow | CameraType.Custom | CameraType.Scriptable | CameraType.Orbital;

	export namespace CatalogCategoryFilter {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 1;
			EnumType: typeof globalThis.Enum.CatalogCategoryFilter;
		}

		export const None: None;

		export interface Featured extends globalThis.EnumItem {
			Name: "Featured";
			Value: 2;
			EnumType: typeof globalThis.Enum.CatalogCategoryFilter;
		}

		export const Featured: Featured;

		export interface Collectibles extends globalThis.EnumItem {
			Name: "Collectibles";
			Value: 3;
			EnumType: typeof globalThis.Enum.CatalogCategoryFilter;
		}

		export const Collectibles: Collectibles;

		export interface CommunityCreations extends globalThis.EnumItem {
			Name: "CommunityCreations";
			Value: 4;
			EnumType: typeof globalThis.Enum.CatalogCategoryFilter;
		}

		export const CommunityCreations: CommunityCreations;

		export interface Premium extends globalThis.EnumItem {
			Name: "Premium";
			Value: 5;
			EnumType: typeof globalThis.Enum.CatalogCategoryFilter;
		}

		export const Premium: Premium;

		export interface Recommended extends globalThis.EnumItem {
			Name: "Recommended";
			Value: 6;
			EnumType: typeof globalThis.Enum.CatalogCategoryFilter;
		}

		export const Recommended: Recommended;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CatalogCategoryFilter>;
	}
	export type CatalogCategoryFilter = CatalogCategoryFilter.None | CatalogCategoryFilter.Featured | CatalogCategoryFilter.Collectibles | CatalogCategoryFilter.CommunityCreations | CatalogCategoryFilter.Premium | CatalogCategoryFilter.Recommended;

	export namespace CatalogSortAggregation {
		export interface Past12Hours extends globalThis.EnumItem {
			Name: "Past12Hours";
			Value: 1;
			EnumType: typeof globalThis.Enum.CatalogSortAggregation;
		}

		export const Past12Hours: Past12Hours;

		export interface PastDay extends globalThis.EnumItem {
			Name: "PastDay";
			Value: 2;
			EnumType: typeof globalThis.Enum.CatalogSortAggregation;
		}

		export const PastDay: PastDay;

		export interface Past3Days extends globalThis.EnumItem {
			Name: "Past3Days";
			Value: 3;
			EnumType: typeof globalThis.Enum.CatalogSortAggregation;
		}

		export const Past3Days: Past3Days;

		export interface PastWeek extends globalThis.EnumItem {
			Name: "PastWeek";
			Value: 4;
			EnumType: typeof globalThis.Enum.CatalogSortAggregation;
		}

		export const PastWeek: PastWeek;

		export interface PastMonth extends globalThis.EnumItem {
			Name: "PastMonth";
			Value: 5;
			EnumType: typeof globalThis.Enum.CatalogSortAggregation;
		}

		export const PastMonth: PastMonth;

		export interface AllTime extends globalThis.EnumItem {
			Name: "AllTime";
			Value: 6;
			EnumType: typeof globalThis.Enum.CatalogSortAggregation;
		}

		export const AllTime: AllTime;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CatalogSortAggregation>;
	}
	export type CatalogSortAggregation = CatalogSortAggregation.Past12Hours | CatalogSortAggregation.PastDay | CatalogSortAggregation.Past3Days | CatalogSortAggregation.PastWeek | CatalogSortAggregation.PastMonth | CatalogSortAggregation.AllTime;

	export namespace CatalogSortType {
		export interface Relevance extends globalThis.EnumItem {
			Name: "Relevance";
			Value: 1;
			EnumType: typeof globalThis.Enum.CatalogSortType;
		}

		export const Relevance: Relevance;

		export interface PriceHighToLow extends globalThis.EnumItem {
			Name: "PriceHighToLow";
			Value: 2;
			EnumType: typeof globalThis.Enum.CatalogSortType;
		}

		export const PriceHighToLow: PriceHighToLow;

		export interface PriceLowToHigh extends globalThis.EnumItem {
			Name: "PriceLowToHigh";
			Value: 3;
			EnumType: typeof globalThis.Enum.CatalogSortType;
		}

		export const PriceLowToHigh: PriceLowToHigh;

		export interface MostFavorited extends globalThis.EnumItem {
			Name: "MostFavorited";
			Value: 5;
			EnumType: typeof globalThis.Enum.CatalogSortType;
		}

		export const MostFavorited: MostFavorited;

		export interface RecentlyCreated extends globalThis.EnumItem {
			Name: "RecentlyCreated";
			Value: 6;
			EnumType: typeof globalThis.Enum.CatalogSortType;
		}

		export const RecentlyCreated: RecentlyCreated;
		/** @deprecated renamed to RecentlyCreated */
		export const RecentlyUpdated: RecentlyCreated;

		export interface Bestselling extends globalThis.EnumItem {
			Name: "Bestselling";
			Value: 7;
			EnumType: typeof globalThis.Enum.CatalogSortType;
		}

		export const Bestselling: Bestselling;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CatalogSortType>;
	}
	export type CatalogSortType = CatalogSortType.Relevance | CatalogSortType.PriceHighToLow | CatalogSortType.PriceLowToHigh | CatalogSortType.MostFavorited | CatalogSortType.RecentlyCreated | CatalogSortType.Bestselling;

	export namespace CellBlock {
		export interface Solid extends globalThis.EnumItem {
			Name: "Solid";
			Value: 0;
			EnumType: typeof globalThis.Enum.CellBlock;
		}

		export const Solid: Solid;

		export interface VerticalWedge extends globalThis.EnumItem {
			Name: "VerticalWedge";
			Value: 1;
			EnumType: typeof globalThis.Enum.CellBlock;
		}

		export const VerticalWedge: VerticalWedge;

		export interface CornerWedge extends globalThis.EnumItem {
			Name: "CornerWedge";
			Value: 2;
			EnumType: typeof globalThis.Enum.CellBlock;
		}

		export const CornerWedge: CornerWedge;

		export interface InverseCornerWedge extends globalThis.EnumItem {
			Name: "InverseCornerWedge";
			Value: 3;
			EnumType: typeof globalThis.Enum.CellBlock;
		}

		export const InverseCornerWedge: InverseCornerWedge;

		export interface HorizontalWedge extends globalThis.EnumItem {
			Name: "HorizontalWedge";
			Value: 4;
			EnumType: typeof globalThis.Enum.CellBlock;
		}

		export const HorizontalWedge: HorizontalWedge;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CellBlock>;
	}
	export type CellBlock = CellBlock.Solid | CellBlock.VerticalWedge | CellBlock.CornerWedge | CellBlock.InverseCornerWedge | CellBlock.HorizontalWedge;

	export namespace CellMaterial {
		export interface Empty extends globalThis.EnumItem {
			Name: "Empty";
			Value: 0;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const Empty: Empty;

		export interface Grass extends globalThis.EnumItem {
			Name: "Grass";
			Value: 1;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const Grass: Grass;

		export interface Sand extends globalThis.EnumItem {
			Name: "Sand";
			Value: 2;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const Sand: Sand;

		export interface Brick extends globalThis.EnumItem {
			Name: "Brick";
			Value: 3;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const Brick: Brick;

		export interface Granite extends globalThis.EnumItem {
			Name: "Granite";
			Value: 4;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const Granite: Granite;

		export interface Asphalt extends globalThis.EnumItem {
			Name: "Asphalt";
			Value: 5;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const Asphalt: Asphalt;

		export interface Iron extends globalThis.EnumItem {
			Name: "Iron";
			Value: 6;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const Iron: Iron;

		export interface Aluminum extends globalThis.EnumItem {
			Name: "Aluminum";
			Value: 7;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const Aluminum: Aluminum;

		export interface Gold extends globalThis.EnumItem {
			Name: "Gold";
			Value: 8;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const Gold: Gold;

		export interface WoodPlank extends globalThis.EnumItem {
			Name: "WoodPlank";
			Value: 9;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const WoodPlank: WoodPlank;

		export interface WoodLog extends globalThis.EnumItem {
			Name: "WoodLog";
			Value: 10;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const WoodLog: WoodLog;

		export interface Gravel extends globalThis.EnumItem {
			Name: "Gravel";
			Value: 11;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const Gravel: Gravel;

		export interface CinderBlock extends globalThis.EnumItem {
			Name: "CinderBlock";
			Value: 12;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const CinderBlock: CinderBlock;

		export interface MossyStone extends globalThis.EnumItem {
			Name: "MossyStone";
			Value: 13;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const MossyStone: MossyStone;

		export interface Cement extends globalThis.EnumItem {
			Name: "Cement";
			Value: 14;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const Cement: Cement;

		export interface RedPlastic extends globalThis.EnumItem {
			Name: "RedPlastic";
			Value: 15;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const RedPlastic: RedPlastic;

		export interface BluePlastic extends globalThis.EnumItem {
			Name: "BluePlastic";
			Value: 16;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const BluePlastic: BluePlastic;

		export interface Water extends globalThis.EnumItem {
			Name: "Water";
			Value: 17;
			EnumType: typeof globalThis.Enum.CellMaterial;
		}

		export const Water: Water;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CellMaterial>;
	}
	export type CellMaterial = CellMaterial.Empty | CellMaterial.Grass | CellMaterial.Sand | CellMaterial.Brick | CellMaterial.Granite | CellMaterial.Asphalt | CellMaterial.Iron | CellMaterial.Aluminum | CellMaterial.Gold | CellMaterial.WoodPlank | CellMaterial.WoodLog | CellMaterial.Gravel | CellMaterial.CinderBlock | CellMaterial.MossyStone | CellMaterial.Cement | CellMaterial.RedPlastic | CellMaterial.BluePlastic | CellMaterial.Water;

	export namespace CellOrientation {
		export interface NegZ extends globalThis.EnumItem {
			Name: "NegZ";
			Value: 0;
			EnumType: typeof globalThis.Enum.CellOrientation;
		}

		export const NegZ: NegZ;

		export interface X extends globalThis.EnumItem {
			Name: "X";
			Value: 1;
			EnumType: typeof globalThis.Enum.CellOrientation;
		}

		export const X: X;

		export interface Z extends globalThis.EnumItem {
			Name: "Z";
			Value: 2;
			EnumType: typeof globalThis.Enum.CellOrientation;
		}

		export const Z: Z;

		export interface NegX extends globalThis.EnumItem {
			Name: "NegX";
			Value: 3;
			EnumType: typeof globalThis.Enum.CellOrientation;
		}

		export const NegX: NegX;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CellOrientation>;
	}
	export type CellOrientation = CellOrientation.NegZ | CellOrientation.X | CellOrientation.Z | CellOrientation.NegX;

	export namespace CenterDialogType {
		export interface UnsolicitedDialog extends globalThis.EnumItem {
			Name: "UnsolicitedDialog";
			Value: 1;
			EnumType: typeof globalThis.Enum.CenterDialogType;
		}

		export const UnsolicitedDialog: UnsolicitedDialog;

		export interface PlayerInitiatedDialog extends globalThis.EnumItem {
			Name: "PlayerInitiatedDialog";
			Value: 2;
			EnumType: typeof globalThis.Enum.CenterDialogType;
		}

		export const PlayerInitiatedDialog: PlayerInitiatedDialog;

		export interface ModalDialog extends globalThis.EnumItem {
			Name: "ModalDialog";
			Value: 3;
			EnumType: typeof globalThis.Enum.CenterDialogType;
		}

		export const ModalDialog: ModalDialog;

		export interface QuitDialog extends globalThis.EnumItem {
			Name: "QuitDialog";
			Value: 4;
			EnumType: typeof globalThis.Enum.CenterDialogType;
		}

		export const QuitDialog: QuitDialog;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CenterDialogType>;
	}
	export type CenterDialogType = CenterDialogType.UnsolicitedDialog | CenterDialogType.PlayerInitiatedDialog | CenterDialogType.ModalDialog | CenterDialogType.QuitDialog;

	export namespace ChatCallbackType {
		export interface OnCreatingChatWindow extends globalThis.EnumItem {
			Name: "OnCreatingChatWindow";
			Value: 1;
			EnumType: typeof globalThis.Enum.ChatCallbackType;
		}

		export const OnCreatingChatWindow: OnCreatingChatWindow;

		export interface OnClientSendingMessage extends globalThis.EnumItem {
			Name: "OnClientSendingMessage";
			Value: 2;
			EnumType: typeof globalThis.Enum.ChatCallbackType;
		}

		export const OnClientSendingMessage: OnClientSendingMessage;

		export interface OnClientFormattingMessage extends globalThis.EnumItem {
			Name: "OnClientFormattingMessage";
			Value: 3;
			EnumType: typeof globalThis.Enum.ChatCallbackType;
		}

		export const OnClientFormattingMessage: OnClientFormattingMessage;

		export interface OnServerReceivingMessage extends globalThis.EnumItem {
			Name: "OnServerReceivingMessage";
			Value: 17;
			EnumType: typeof globalThis.Enum.ChatCallbackType;
		}

		export const OnServerReceivingMessage: OnServerReceivingMessage;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ChatCallbackType>;
	}
	export type ChatCallbackType = ChatCallbackType.OnCreatingChatWindow | ChatCallbackType.OnClientSendingMessage | ChatCallbackType.OnClientFormattingMessage | ChatCallbackType.OnServerReceivingMessage;

	export namespace ChatColor {
		export interface Blue extends globalThis.EnumItem {
			Name: "Blue";
			Value: 0;
			EnumType: typeof globalThis.Enum.ChatColor;
		}

		export const Blue: Blue;

		export interface Green extends globalThis.EnumItem {
			Name: "Green";
			Value: 1;
			EnumType: typeof globalThis.Enum.ChatColor;
		}

		export const Green: Green;

		export interface Red extends globalThis.EnumItem {
			Name: "Red";
			Value: 2;
			EnumType: typeof globalThis.Enum.ChatColor;
		}

		export const Red: Red;

		export interface White extends globalThis.EnumItem {
			Name: "White";
			Value: 3;
			EnumType: typeof globalThis.Enum.ChatColor;
		}

		export const White: White;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ChatColor>;
	}
	export type ChatColor = ChatColor.Blue | ChatColor.Green | ChatColor.Red | ChatColor.White;

	export namespace ChatMode {
		export interface Menu extends globalThis.EnumItem {
			Name: "Menu";
			Value: 0;
			EnumType: typeof globalThis.Enum.ChatMode;
		}

		export const Menu: Menu;

		export interface TextAndMenu extends globalThis.EnumItem {
			Name: "TextAndMenu";
			Value: 1;
			EnumType: typeof globalThis.Enum.ChatMode;
		}

		export const TextAndMenu: TextAndMenu;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ChatMode>;
	}
	export type ChatMode = ChatMode.Menu | ChatMode.TextAndMenu;

	export namespace ChatPrivacyMode {
		export interface AllUsers extends globalThis.EnumItem {
			Name: "AllUsers";
			Value: 0;
			EnumType: typeof globalThis.Enum.ChatPrivacyMode;
		}

		export const AllUsers: AllUsers;

		export interface NoOne extends globalThis.EnumItem {
			Name: "NoOne";
			Value: 1;
			EnumType: typeof globalThis.Enum.ChatPrivacyMode;
		}

		export const NoOne: NoOne;

		export interface Friends extends globalThis.EnumItem {
			Name: "Friends";
			Value: 2;
			EnumType: typeof globalThis.Enum.ChatPrivacyMode;
		}

		export const Friends: Friends;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ChatPrivacyMode>;
	}
	export type ChatPrivacyMode = ChatPrivacyMode.AllUsers | ChatPrivacyMode.NoOne | ChatPrivacyMode.Friends;

	export namespace ChatStyle {
		export interface Classic extends globalThis.EnumItem {
			Name: "Classic";
			Value: 0;
			EnumType: typeof globalThis.Enum.ChatStyle;
		}

		export const Classic: Classic;

		export interface Bubble extends globalThis.EnumItem {
			Name: "Bubble";
			Value: 1;
			EnumType: typeof globalThis.Enum.ChatStyle;
		}

		export const Bubble: Bubble;

		export interface ClassicAndBubble extends globalThis.EnumItem {
			Name: "ClassicAndBubble";
			Value: 2;
			EnumType: typeof globalThis.Enum.ChatStyle;
		}

		export const ClassicAndBubble: ClassicAndBubble;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ChatStyle>;
	}
	export type ChatStyle = ChatStyle.Classic | ChatStyle.Bubble | ChatStyle.ClassicAndBubble;

	export namespace ChatVersion {
		export interface LegacyChatService extends globalThis.EnumItem {
			Name: "LegacyChatService";
			Value: 0;
			EnumType: typeof globalThis.Enum.ChatVersion;
		}

		export const LegacyChatService: LegacyChatService;

		export interface TextChatService extends globalThis.EnumItem {
			Name: "TextChatService";
			Value: 1;
			EnumType: typeof globalThis.Enum.ChatVersion;
		}

		export const TextChatService: TextChatService;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ChatVersion>;
	}
	export type ChatVersion = ChatVersion.LegacyChatService | ChatVersion.TextChatService;

	export namespace ClientAnimatorThrottlingMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.ClientAnimatorThrottlingMode;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.ClientAnimatorThrottlingMode;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.ClientAnimatorThrottlingMode;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ClientAnimatorThrottlingMode>;
	}
	export type ClientAnimatorThrottlingMode = ClientAnimatorThrottlingMode.Default | ClientAnimatorThrottlingMode.Disabled | ClientAnimatorThrottlingMode.Enabled;

	export namespace CollisionFidelity {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.CollisionFidelity;
		}

		export const Default: Default;

		export interface Hull extends globalThis.EnumItem {
			Name: "Hull";
			Value: 1;
			EnumType: typeof globalThis.Enum.CollisionFidelity;
		}

		export const Hull: Hull;

		export interface Box extends globalThis.EnumItem {
			Name: "Box";
			Value: 2;
			EnumType: typeof globalThis.Enum.CollisionFidelity;
		}

		export const Box: Box;

		export interface PreciseConvexDecomposition extends globalThis.EnumItem {
			Name: "PreciseConvexDecomposition";
			Value: 3;
			EnumType: typeof globalThis.Enum.CollisionFidelity;
		}

		export const PreciseConvexDecomposition: PreciseConvexDecomposition;

		export interface DynamicPreciseConvexDecomposition extends globalThis.EnumItem {
			Name: "DynamicPreciseConvexDecomposition";
			Value: 4;
			EnumType: typeof globalThis.Enum.CollisionFidelity;
		}

		export const DynamicPreciseConvexDecomposition: DynamicPreciseConvexDecomposition;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CollisionFidelity>;
	}
	export type CollisionFidelity = CollisionFidelity.Default | CollisionFidelity.Hull | CollisionFidelity.Box | CollisionFidelity.PreciseConvexDecomposition | CollisionFidelity.DynamicPreciseConvexDecomposition;

	export namespace CommandPermission {
		export interface Plugin extends globalThis.EnumItem {
			Name: "Plugin";
			Value: 0;
			EnumType: typeof globalThis.Enum.CommandPermission;
		}

		export const Plugin: Plugin;

		export interface LocalUser extends globalThis.EnumItem {
			Name: "LocalUser";
			Value: 1;
			EnumType: typeof globalThis.Enum.CommandPermission;
		}

		export const LocalUser: LocalUser;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CommandPermission>;
	}
	export type CommandPermission = CommandPermission.Plugin | CommandPermission.LocalUser;

	export namespace CompileTarget {
		export interface Client extends globalThis.EnumItem {
			Name: "Client";
			Value: 0;
			EnumType: typeof globalThis.Enum.CompileTarget;
		}

		export const Client: Client;

		export interface CoreScript extends globalThis.EnumItem {
			Name: "CoreScript";
			Value: 1;
			EnumType: typeof globalThis.Enum.CompileTarget;
		}

		export const CoreScript: CoreScript;

		export interface Studio extends globalThis.EnumItem {
			Name: "Studio";
			Value: 2;
			EnumType: typeof globalThis.Enum.CompileTarget;
		}

		export const Studio: Studio;

		export interface CoreScriptRaw extends globalThis.EnumItem {
			Name: "CoreScriptRaw";
			Value: 3;
			EnumType: typeof globalThis.Enum.CompileTarget;
		}

		export const CoreScriptRaw: CoreScriptRaw;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CompileTarget>;
	}
	export type CompileTarget = CompileTarget.Client | CompileTarget.CoreScript | CompileTarget.Studio | CompileTarget.CoreScriptRaw;

	export namespace CompletionItemKind {
		export interface Text extends globalThis.EnumItem {
			Name: "Text";
			Value: 1;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Text: Text;

		export interface Method extends globalThis.EnumItem {
			Name: "Method";
			Value: 2;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Method: Method;

		export interface Function extends globalThis.EnumItem {
			Name: "Function";
			Value: 3;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Function: Function;

		export interface Constructor extends globalThis.EnumItem {
			Name: "Constructor";
			Value: 4;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Constructor: Constructor;

		export interface Field extends globalThis.EnumItem {
			Name: "Field";
			Value: 5;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Field: Field;

		export interface Variable extends globalThis.EnumItem {
			Name: "Variable";
			Value: 6;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Variable: Variable;

		export interface Class extends globalThis.EnumItem {
			Name: "Class";
			Value: 7;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Class: Class;

		export interface Interface extends globalThis.EnumItem {
			Name: "Interface";
			Value: 8;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Interface: Interface;

		export interface Module extends globalThis.EnumItem {
			Name: "Module";
			Value: 9;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Module: Module;

		export interface Property extends globalThis.EnumItem {
			Name: "Property";
			Value: 10;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Property: Property;

		export interface Unit extends globalThis.EnumItem {
			Name: "Unit";
			Value: 11;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Unit: Unit;

		export interface Value extends globalThis.EnumItem {
			Name: "Value";
			Value: 12;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Value: Value;

		export interface Enum extends globalThis.EnumItem {
			Name: "Enum";
			Value: 13;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Enum: Enum;

		export interface Keyword extends globalThis.EnumItem {
			Name: "Keyword";
			Value: 14;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Keyword: Keyword;

		export interface Snippet extends globalThis.EnumItem {
			Name: "Snippet";
			Value: 15;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Snippet: Snippet;

		export interface Color extends globalThis.EnumItem {
			Name: "Color";
			Value: 16;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Color: Color;

		export interface File extends globalThis.EnumItem {
			Name: "File";
			Value: 17;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const File: File;

		export interface Reference extends globalThis.EnumItem {
			Name: "Reference";
			Value: 18;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Reference: Reference;

		export interface Folder extends globalThis.EnumItem {
			Name: "Folder";
			Value: 19;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Folder: Folder;

		export interface EnumMember extends globalThis.EnumItem {
			Name: "EnumMember";
			Value: 20;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const EnumMember: EnumMember;

		export interface Constant extends globalThis.EnumItem {
			Name: "Constant";
			Value: 21;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Constant: Constant;

		export interface Struct extends globalThis.EnumItem {
			Name: "Struct";
			Value: 22;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Struct: Struct;

		export interface Event extends globalThis.EnumItem {
			Name: "Event";
			Value: 23;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Event: Event;

		export interface Operator extends globalThis.EnumItem {
			Name: "Operator";
			Value: 24;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const Operator: Operator;

		export interface TypeParameter extends globalThis.EnumItem {
			Name: "TypeParameter";
			Value: 25;
			EnumType: typeof globalThis.Enum.CompletionItemKind;
		}

		export const TypeParameter: TypeParameter;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CompletionItemKind>;
	}
	export type CompletionItemKind = CompletionItemKind.Text | CompletionItemKind.Method | CompletionItemKind.Function | CompletionItemKind.Constructor | CompletionItemKind.Field | CompletionItemKind.Variable | CompletionItemKind.Class | CompletionItemKind.Interface | CompletionItemKind.Module | CompletionItemKind.Property | CompletionItemKind.Unit | CompletionItemKind.Value | CompletionItemKind.Enum | CompletionItemKind.Keyword | CompletionItemKind.Snippet | CompletionItemKind.Color | CompletionItemKind.File | CompletionItemKind.Reference | CompletionItemKind.Folder | CompletionItemKind.EnumMember | CompletionItemKind.Constant | CompletionItemKind.Struct | CompletionItemKind.Event | CompletionItemKind.Operator | CompletionItemKind.TypeParameter;

	export namespace CompletionItemTag {
		export interface Deprecated extends globalThis.EnumItem {
			Name: "Deprecated";
			Value: 1;
			EnumType: typeof globalThis.Enum.CompletionItemTag;
		}

		export const Deprecated: Deprecated;

		export interface IncorrectIndexType extends globalThis.EnumItem {
			Name: "IncorrectIndexType";
			Value: 2;
			EnumType: typeof globalThis.Enum.CompletionItemTag;
		}

		export const IncorrectIndexType: IncorrectIndexType;

		export interface PluginPermissions extends globalThis.EnumItem {
			Name: "PluginPermissions";
			Value: 3;
			EnumType: typeof globalThis.Enum.CompletionItemTag;
		}

		export const PluginPermissions: PluginPermissions;

		export interface CommandLinePermissions extends globalThis.EnumItem {
			Name: "CommandLinePermissions";
			Value: 4;
			EnumType: typeof globalThis.Enum.CompletionItemTag;
		}

		export const CommandLinePermissions: CommandLinePermissions;

		export interface RobloxPermissions extends globalThis.EnumItem {
			Name: "RobloxPermissions";
			Value: 5;
			EnumType: typeof globalThis.Enum.CompletionItemTag;
		}

		export const RobloxPermissions: RobloxPermissions;

		export interface AddParens extends globalThis.EnumItem {
			Name: "AddParens";
			Value: 6;
			EnumType: typeof globalThis.Enum.CompletionItemTag;
		}

		export const AddParens: AddParens;

		export interface PutCursorInParens extends globalThis.EnumItem {
			Name: "PutCursorInParens";
			Value: 7;
			EnumType: typeof globalThis.Enum.CompletionItemTag;
		}

		export const PutCursorInParens: PutCursorInParens;

		export interface TypeCorrect extends globalThis.EnumItem {
			Name: "TypeCorrect";
			Value: 8;
			EnumType: typeof globalThis.Enum.CompletionItemTag;
		}

		export const TypeCorrect: TypeCorrect;

		export interface ClientServerBoundaryViolation extends globalThis.EnumItem {
			Name: "ClientServerBoundaryViolation";
			Value: 9;
			EnumType: typeof globalThis.Enum.CompletionItemTag;
		}

		export const ClientServerBoundaryViolation: ClientServerBoundaryViolation;

		export interface Invalidated extends globalThis.EnumItem {
			Name: "Invalidated";
			Value: 10;
			EnumType: typeof globalThis.Enum.CompletionItemTag;
		}

		export const Invalidated: Invalidated;

		export interface PutCursorBeforeEnd extends globalThis.EnumItem {
			Name: "PutCursorBeforeEnd";
			Value: 11;
			EnumType: typeof globalThis.Enum.CompletionItemTag;
		}

		export const PutCursorBeforeEnd: PutCursorBeforeEnd;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CompletionItemTag>;
	}
	export type CompletionItemTag = CompletionItemTag.Deprecated | CompletionItemTag.IncorrectIndexType | CompletionItemTag.PluginPermissions | CompletionItemTag.CommandLinePermissions | CompletionItemTag.RobloxPermissions | CompletionItemTag.AddParens | CompletionItemTag.PutCursorInParens | CompletionItemTag.TypeCorrect | CompletionItemTag.ClientServerBoundaryViolation | CompletionItemTag.Invalidated | CompletionItemTag.PutCursorBeforeEnd;

	export namespace CompletionTriggerKind {
		export interface Invoked extends globalThis.EnumItem {
			Name: "Invoked";
			Value: 1;
			EnumType: typeof globalThis.Enum.CompletionTriggerKind;
		}

		export const Invoked: Invoked;

		export interface TriggerCharacter extends globalThis.EnumItem {
			Name: "TriggerCharacter";
			Value: 2;
			EnumType: typeof globalThis.Enum.CompletionTriggerKind;
		}

		export const TriggerCharacter: TriggerCharacter;

		export interface TriggerForIncompleteCompletions extends globalThis.EnumItem {
			Name: "TriggerForIncompleteCompletions";
			Value: 3;
			EnumType: typeof globalThis.Enum.CompletionTriggerKind;
		}

		export const TriggerForIncompleteCompletions: TriggerForIncompleteCompletions;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CompletionTriggerKind>;
	}
	export type CompletionTriggerKind = CompletionTriggerKind.Invoked | CompletionTriggerKind.TriggerCharacter | CompletionTriggerKind.TriggerForIncompleteCompletions;

	export namespace ComputerCameraMovementMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.ComputerCameraMovementMode;
		}

		export const Default: Default;

		export interface Follow extends globalThis.EnumItem {
			Name: "Follow";
			Value: 2;
			EnumType: typeof globalThis.Enum.ComputerCameraMovementMode;
		}

		export const Follow: Follow;

		export interface Classic extends globalThis.EnumItem {
			Name: "Classic";
			Value: 1;
			EnumType: typeof globalThis.Enum.ComputerCameraMovementMode;
		}

		export const Classic: Classic;

		export interface Orbital extends globalThis.EnumItem {
			Name: "Orbital";
			Value: 3;
			EnumType: typeof globalThis.Enum.ComputerCameraMovementMode;
		}

		export const Orbital: Orbital;

		export interface CameraToggle extends globalThis.EnumItem {
			Name: "CameraToggle";
			Value: 4;
			EnumType: typeof globalThis.Enum.ComputerCameraMovementMode;
		}

		export const CameraToggle: CameraToggle;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ComputerCameraMovementMode>;
	}
	export type ComputerCameraMovementMode = ComputerCameraMovementMode.Default | ComputerCameraMovementMode.Follow | ComputerCameraMovementMode.Classic | ComputerCameraMovementMode.Orbital | ComputerCameraMovementMode.CameraToggle;

	export namespace ComputerMovementMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.ComputerMovementMode;
		}

		export const Default: Default;

		export interface KeyboardMouse extends globalThis.EnumItem {
			Name: "KeyboardMouse";
			Value: 1;
			EnumType: typeof globalThis.Enum.ComputerMovementMode;
		}

		export const KeyboardMouse: KeyboardMouse;

		export interface ClickToMove extends globalThis.EnumItem {
			Name: "ClickToMove";
			Value: 2;
			EnumType: typeof globalThis.Enum.ComputerMovementMode;
		}

		export const ClickToMove: ClickToMove;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ComputerMovementMode>;
	}
	export type ComputerMovementMode = ComputerMovementMode.Default | ComputerMovementMode.KeyboardMouse | ComputerMovementMode.ClickToMove;

	export namespace ConnectionError {
		export interface OK extends globalThis.EnumItem {
			Name: "OK";
			Value: 0;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const OK: OK;

		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 1;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const Unknown: Unknown;

		export interface DisconnectErrors extends globalThis.EnumItem {
			Name: "DisconnectErrors";
			Value: 256;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectErrors: DisconnectErrors;

		export interface DisconnectBadhash extends globalThis.EnumItem {
			Name: "DisconnectBadhash";
			Value: 257;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectBadhash: DisconnectBadhash;

		export interface DisconnectSecurityKeyMismatch extends globalThis.EnumItem {
			Name: "DisconnectSecurityKeyMismatch";
			Value: 258;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectSecurityKeyMismatch: DisconnectSecurityKeyMismatch;

		export interface DisconnectNewSecurityKeyMismatch extends globalThis.EnumItem {
			Name: "DisconnectNewSecurityKeyMismatch";
			Value: 272;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectNewSecurityKeyMismatch: DisconnectNewSecurityKeyMismatch;

		export interface DisconnectProtocolMismatch extends globalThis.EnumItem {
			Name: "DisconnectProtocolMismatch";
			Value: 259;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectProtocolMismatch: DisconnectProtocolMismatch;

		export interface DisconnectReceivePacketError extends globalThis.EnumItem {
			Name: "DisconnectReceivePacketError";
			Value: 260;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectReceivePacketError: DisconnectReceivePacketError;

		export interface DisconnectReceivePacketStreamError extends globalThis.EnumItem {
			Name: "DisconnectReceivePacketStreamError";
			Value: 261;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectReceivePacketStreamError: DisconnectReceivePacketStreamError;

		export interface DisconnectSendPacketError extends globalThis.EnumItem {
			Name: "DisconnectSendPacketError";
			Value: 262;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectSendPacketError: DisconnectSendPacketError;

		export interface DisconnectIllegalTeleport extends globalThis.EnumItem {
			Name: "DisconnectIllegalTeleport";
			Value: 263;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectIllegalTeleport: DisconnectIllegalTeleport;

		export interface DisconnectDuplicatePlayer extends globalThis.EnumItem {
			Name: "DisconnectDuplicatePlayer";
			Value: 264;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectDuplicatePlayer: DisconnectDuplicatePlayer;

		export interface DisconnectDuplicateTicket extends globalThis.EnumItem {
			Name: "DisconnectDuplicateTicket";
			Value: 265;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectDuplicateTicket: DisconnectDuplicateTicket;

		export interface DisconnectTimeout extends globalThis.EnumItem {
			Name: "DisconnectTimeout";
			Value: 266;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectTimeout: DisconnectTimeout;

		export interface DisconnectLuaKick extends globalThis.EnumItem {
			Name: "DisconnectLuaKick";
			Value: 267;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectLuaKick: DisconnectLuaKick;

		export interface DisconnectOnRemoteSysStats extends globalThis.EnumItem {
			Name: "DisconnectOnRemoteSysStats";
			Value: 268;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectOnRemoteSysStats: DisconnectOnRemoteSysStats;

		export interface DisconnectHashTimeout extends globalThis.EnumItem {
			Name: "DisconnectHashTimeout";
			Value: 269;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectHashTimeout: DisconnectHashTimeout;

		export interface DisconnectCloudEditKick extends globalThis.EnumItem {
			Name: "DisconnectCloudEditKick";
			Value: 270;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectCloudEditKick: DisconnectCloudEditKick;

		export interface DisconnectPlayerless extends globalThis.EnumItem {
			Name: "DisconnectPlayerless";
			Value: 271;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectPlayerless: DisconnectPlayerless;

		export interface DisconnectEvicted extends globalThis.EnumItem {
			Name: "DisconnectEvicted";
			Value: 273;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectEvicted: DisconnectEvicted;

		export interface DisconnectDevMaintenance extends globalThis.EnumItem {
			Name: "DisconnectDevMaintenance";
			Value: 274;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectDevMaintenance: DisconnectDevMaintenance;

		export interface DisconnectRobloxMaintenance extends globalThis.EnumItem {
			Name: "DisconnectRobloxMaintenance";
			Value: 275;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectRobloxMaintenance: DisconnectRobloxMaintenance;

		export interface DisconnectRejoin extends globalThis.EnumItem {
			Name: "DisconnectRejoin";
			Value: 276;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectRejoin: DisconnectRejoin;

		export interface DisconnectConnectionLost extends globalThis.EnumItem {
			Name: "DisconnectConnectionLost";
			Value: 277;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectConnectionLost: DisconnectConnectionLost;

		export interface DisconnectIdle extends globalThis.EnumItem {
			Name: "DisconnectIdle";
			Value: 278;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectIdle: DisconnectIdle;

		export interface DisconnectRaknetErrors extends globalThis.EnumItem {
			Name: "DisconnectRaknetErrors";
			Value: 279;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectRaknetErrors: DisconnectRaknetErrors;

		export interface DisconnectWrongVersion extends globalThis.EnumItem {
			Name: "DisconnectWrongVersion";
			Value: 280;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectWrongVersion: DisconnectWrongVersion;

		export interface DisconnectBySecurityPolicy extends globalThis.EnumItem {
			Name: "DisconnectBySecurityPolicy";
			Value: 281;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectBySecurityPolicy: DisconnectBySecurityPolicy;

		export interface DisconnectBlockedIP extends globalThis.EnumItem {
			Name: "DisconnectBlockedIP";
			Value: 282;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectBlockedIP: DisconnectBlockedIP;

		export interface DisconnectClientFailure extends globalThis.EnumItem {
			Name: "DisconnectClientFailure";
			Value: 284;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectClientFailure: DisconnectClientFailure;

		export interface DisconnectClientRequest extends globalThis.EnumItem {
			Name: "DisconnectClientRequest";
			Value: 285;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectClientRequest: DisconnectClientRequest;

		export interface DisconnectPrivateServerKickout extends globalThis.EnumItem {
			Name: "DisconnectPrivateServerKickout";
			Value: 286;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectPrivateServerKickout: DisconnectPrivateServerKickout;

		export interface DisconnectModeratedGame extends globalThis.EnumItem {
			Name: "DisconnectModeratedGame";
			Value: 287;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectModeratedGame: DisconnectModeratedGame;

		export interface DisconnectRomarkEndOfTest extends globalThis.EnumItem {
			Name: "DisconnectRomarkEndOfTest";
			Value: 293;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectRomarkEndOfTest: DisconnectRomarkEndOfTest;

		export interface ReplicatorTimeout extends globalThis.EnumItem {
			Name: "ReplicatorTimeout";
			Value: 290;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const ReplicatorTimeout: ReplicatorTimeout;

		export interface PlayerRemoved extends globalThis.EnumItem {
			Name: "PlayerRemoved";
			Value: 291;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlayerRemoved: PlayerRemoved;

		export interface DisconnectOutOfMemoryKeepPlayingLeave extends globalThis.EnumItem {
			Name: "DisconnectOutOfMemoryKeepPlayingLeave";
			Value: 292;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectOutOfMemoryKeepPlayingLeave: DisconnectOutOfMemoryKeepPlayingLeave;

		export interface DisconnectCollaboratorPermissionRevoked extends globalThis.EnumItem {
			Name: "DisconnectCollaboratorPermissionRevoked";
			Value: 294;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectCollaboratorPermissionRevoked: DisconnectCollaboratorPermissionRevoked;

		export interface DisconnectCollaboratorUnderage extends globalThis.EnumItem {
			Name: "DisconnectCollaboratorUnderage";
			Value: 295;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const DisconnectCollaboratorUnderage: DisconnectCollaboratorUnderage;

		export interface PlacelaunchErrors extends globalThis.EnumItem {
			Name: "PlacelaunchErrors";
			Value: 512;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchErrors: PlacelaunchErrors;

		export interface PlacelaunchDisabled extends globalThis.EnumItem {
			Name: "PlacelaunchDisabled";
			Value: 515;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchDisabled: PlacelaunchDisabled;

		export interface PlacelaunchError extends globalThis.EnumItem {
			Name: "PlacelaunchError";
			Value: 516;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchError: PlacelaunchError;

		export interface PlacelaunchGameEnded extends globalThis.EnumItem {
			Name: "PlacelaunchGameEnded";
			Value: 517;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchGameEnded: PlacelaunchGameEnded;

		export interface PlacelaunchGameFull extends globalThis.EnumItem {
			Name: "PlacelaunchGameFull";
			Value: 518;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchGameFull: PlacelaunchGameFull;

		export interface PlacelaunchUserLeft extends globalThis.EnumItem {
			Name: "PlacelaunchUserLeft";
			Value: 522;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchUserLeft: PlacelaunchUserLeft;

		export interface PlacelaunchRestricted extends globalThis.EnumItem {
			Name: "PlacelaunchRestricted";
			Value: 523;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchRestricted: PlacelaunchRestricted;

		export interface PlacelaunchUnauthorized extends globalThis.EnumItem {
			Name: "PlacelaunchUnauthorized";
			Value: 524;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchUnauthorized: PlacelaunchUnauthorized;

		export interface PlacelaunchFlooded extends globalThis.EnumItem {
			Name: "PlacelaunchFlooded";
			Value: 525;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchFlooded: PlacelaunchFlooded;

		export interface PlacelaunchHashExpired extends globalThis.EnumItem {
			Name: "PlacelaunchHashExpired";
			Value: 526;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchHashExpired: PlacelaunchHashExpired;

		export interface PlacelaunchHashException extends globalThis.EnumItem {
			Name: "PlacelaunchHashException";
			Value: 527;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchHashException: PlacelaunchHashException;

		export interface PlacelaunchPartyCannotFit extends globalThis.EnumItem {
			Name: "PlacelaunchPartyCannotFit";
			Value: 528;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchPartyCannotFit: PlacelaunchPartyCannotFit;

		export interface PlacelaunchHttpError extends globalThis.EnumItem {
			Name: "PlacelaunchHttpError";
			Value: 529;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchHttpError: PlacelaunchHttpError;

		export interface PlacelaunchUserPrivacyUnauthorized extends globalThis.EnumItem {
			Name: "PlacelaunchUserPrivacyUnauthorized";
			Value: 533;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchUserPrivacyUnauthorized: PlacelaunchUserPrivacyUnauthorized;

		export interface PlacelaunchCustomMessage extends globalThis.EnumItem {
			Name: "PlacelaunchCustomMessage";
			Value: 610;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchCustomMessage: PlacelaunchCustomMessage;

		export interface PlacelaunchOtherError extends globalThis.EnumItem {
			Name: "PlacelaunchOtherError";
			Value: 611;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const PlacelaunchOtherError: PlacelaunchOtherError;

		export interface TeleportErrors extends globalThis.EnumItem {
			Name: "TeleportErrors";
			Value: 768;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const TeleportErrors: TeleportErrors;

		export interface TeleportFailure extends globalThis.EnumItem {
			Name: "TeleportFailure";
			Value: 769;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const TeleportFailure: TeleportFailure;

		export interface TeleportGameNotFound extends globalThis.EnumItem {
			Name: "TeleportGameNotFound";
			Value: 770;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const TeleportGameNotFound: TeleportGameNotFound;

		export interface TeleportGameEnded extends globalThis.EnumItem {
			Name: "TeleportGameEnded";
			Value: 771;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const TeleportGameEnded: TeleportGameEnded;

		export interface TeleportGameFull extends globalThis.EnumItem {
			Name: "TeleportGameFull";
			Value: 772;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const TeleportGameFull: TeleportGameFull;

		export interface TeleportUnauthorized extends globalThis.EnumItem {
			Name: "TeleportUnauthorized";
			Value: 773;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const TeleportUnauthorized: TeleportUnauthorized;

		export interface TeleportFlooded extends globalThis.EnumItem {
			Name: "TeleportFlooded";
			Value: 774;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const TeleportFlooded: TeleportFlooded;

		export interface TeleportIsTeleporting extends globalThis.EnumItem {
			Name: "TeleportIsTeleporting";
			Value: 775;
			EnumType: typeof globalThis.Enum.ConnectionError;
		}

		export const TeleportIsTeleporting: TeleportIsTeleporting;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ConnectionError>;
	}
	export type ConnectionError = ConnectionError.OK | ConnectionError.Unknown | ConnectionError.DisconnectErrors | ConnectionError.DisconnectBadhash | ConnectionError.DisconnectSecurityKeyMismatch | ConnectionError.DisconnectNewSecurityKeyMismatch | ConnectionError.DisconnectProtocolMismatch | ConnectionError.DisconnectReceivePacketError | ConnectionError.DisconnectReceivePacketStreamError | ConnectionError.DisconnectSendPacketError | ConnectionError.DisconnectIllegalTeleport | ConnectionError.DisconnectDuplicatePlayer | ConnectionError.DisconnectDuplicateTicket | ConnectionError.DisconnectTimeout | ConnectionError.DisconnectLuaKick | ConnectionError.DisconnectOnRemoteSysStats | ConnectionError.DisconnectHashTimeout | ConnectionError.DisconnectCloudEditKick | ConnectionError.DisconnectPlayerless | ConnectionError.DisconnectEvicted | ConnectionError.DisconnectDevMaintenance | ConnectionError.DisconnectRobloxMaintenance | ConnectionError.DisconnectRejoin | ConnectionError.DisconnectConnectionLost | ConnectionError.DisconnectIdle | ConnectionError.DisconnectRaknetErrors | ConnectionError.DisconnectWrongVersion | ConnectionError.DisconnectBySecurityPolicy | ConnectionError.DisconnectBlockedIP | ConnectionError.DisconnectClientFailure | ConnectionError.DisconnectClientRequest | ConnectionError.DisconnectPrivateServerKickout | ConnectionError.DisconnectModeratedGame | ConnectionError.DisconnectRomarkEndOfTest | ConnectionError.ReplicatorTimeout | ConnectionError.PlayerRemoved | ConnectionError.DisconnectOutOfMemoryKeepPlayingLeave | ConnectionError.DisconnectCollaboratorPermissionRevoked | ConnectionError.DisconnectCollaboratorUnderage | ConnectionError.PlacelaunchErrors | ConnectionError.PlacelaunchDisabled | ConnectionError.PlacelaunchError | ConnectionError.PlacelaunchGameEnded | ConnectionError.PlacelaunchGameFull | ConnectionError.PlacelaunchUserLeft | ConnectionError.PlacelaunchRestricted | ConnectionError.PlacelaunchUnauthorized | ConnectionError.PlacelaunchFlooded | ConnectionError.PlacelaunchHashExpired | ConnectionError.PlacelaunchHashException | ConnectionError.PlacelaunchPartyCannotFit | ConnectionError.PlacelaunchHttpError | ConnectionError.PlacelaunchUserPrivacyUnauthorized | ConnectionError.PlacelaunchCustomMessage | ConnectionError.PlacelaunchOtherError | ConnectionError.TeleportErrors | ConnectionError.TeleportFailure | ConnectionError.TeleportGameNotFound | ConnectionError.TeleportGameEnded | ConnectionError.TeleportGameFull | ConnectionError.TeleportUnauthorized | ConnectionError.TeleportFlooded | ConnectionError.TeleportIsTeleporting;

	export namespace ConnectionState {
		export interface Connected extends globalThis.EnumItem {
			Name: "Connected";
			Value: 0;
			EnumType: typeof globalThis.Enum.ConnectionState;
		}

		export const Connected: Connected;

		export interface Disconnected extends globalThis.EnumItem {
			Name: "Disconnected";
			Value: 1;
			EnumType: typeof globalThis.Enum.ConnectionState;
		}

		export const Disconnected: Disconnected;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ConnectionState>;
	}
	export type ConnectionState = ConnectionState.Connected | ConnectionState.Disconnected;

	export namespace ContextActionPriority {
		export interface Low extends globalThis.EnumItem {
			Name: "Low";
			Value: 1000;
			EnumType: typeof globalThis.Enum.ContextActionPriority;
		}

		export const Low: Low;

		export interface Medium extends globalThis.EnumItem {
			Name: "Medium";
			Value: 2000;
			EnumType: typeof globalThis.Enum.ContextActionPriority;
		}

		export const Medium: Medium;
		/** @deprecated renamed to Medium */
		export const Default: Medium;

		export interface High extends globalThis.EnumItem {
			Name: "High";
			Value: 3000;
			EnumType: typeof globalThis.Enum.ContextActionPriority;
		}

		export const High: High;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ContextActionPriority>;
	}
	export type ContextActionPriority = ContextActionPriority.Low | ContextActionPriority.Medium | ContextActionPriority.High;

	export namespace ContextActionResult {
		export interface Pass extends globalThis.EnumItem {
			Name: "Pass";
			Value: 1;
			EnumType: typeof globalThis.Enum.ContextActionResult;
		}

		export const Pass: Pass;

		export interface Sink extends globalThis.EnumItem {
			Name: "Sink";
			Value: 0;
			EnumType: typeof globalThis.Enum.ContextActionResult;
		}

		export const Sink: Sink;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ContextActionResult>;
	}
	export type ContextActionResult = ContextActionResult.Pass | ContextActionResult.Sink;

	export namespace ControlMode {
		export interface MouseLockSwitch extends globalThis.EnumItem {
			Name: "MouseLockSwitch";
			Value: 1;
			EnumType: typeof globalThis.Enum.ControlMode;
		}

		export const MouseLockSwitch: MouseLockSwitch;

		export interface Classic extends globalThis.EnumItem {
			Name: "Classic";
			Value: 0;
			EnumType: typeof globalThis.Enum.ControlMode;
		}

		export const Classic: Classic;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ControlMode>;
	}
	export type ControlMode = ControlMode.MouseLockSwitch | ControlMode.Classic;

	export namespace CoreGuiType {
		export interface PlayerList extends globalThis.EnumItem {
			Name: "PlayerList";
			Value: 0;
			EnumType: typeof globalThis.Enum.CoreGuiType;
		}

		export const PlayerList: PlayerList;

		export interface Health extends globalThis.EnumItem {
			Name: "Health";
			Value: 1;
			EnumType: typeof globalThis.Enum.CoreGuiType;
		}

		export const Health: Health;

		export interface Backpack extends globalThis.EnumItem {
			Name: "Backpack";
			Value: 2;
			EnumType: typeof globalThis.Enum.CoreGuiType;
		}

		export const Backpack: Backpack;

		export interface Chat extends globalThis.EnumItem {
			Name: "Chat";
			Value: 3;
			EnumType: typeof globalThis.Enum.CoreGuiType;
		}

		export const Chat: Chat;

		export interface All extends globalThis.EnumItem {
			Name: "All";
			Value: 4;
			EnumType: typeof globalThis.Enum.CoreGuiType;
		}

		export const All: All;

		export interface EmotesMenu extends globalThis.EnumItem {
			Name: "EmotesMenu";
			Value: 5;
			EnumType: typeof globalThis.Enum.CoreGuiType;
		}

		export const EmotesMenu: EmotesMenu;

		export interface SelfView extends globalThis.EnumItem {
			Name: "SelfView";
			Value: 6;
			EnumType: typeof globalThis.Enum.CoreGuiType;
		}

		export const SelfView: SelfView;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CoreGuiType>;
	}
	export type CoreGuiType = CoreGuiType.PlayerList | CoreGuiType.Health | CoreGuiType.Backpack | CoreGuiType.Chat | CoreGuiType.All | CoreGuiType.EmotesMenu | CoreGuiType.SelfView;

	export namespace CreateOutfitFailure {
		export interface InvalidName extends globalThis.EnumItem {
			Name: "InvalidName";
			Value: 1;
			EnumType: typeof globalThis.Enum.CreateOutfitFailure;
		}

		export const InvalidName: InvalidName;

		export interface OutfitLimitReached extends globalThis.EnumItem {
			Name: "OutfitLimitReached";
			Value: 2;
			EnumType: typeof globalThis.Enum.CreateOutfitFailure;
		}

		export const OutfitLimitReached: OutfitLimitReached;

		export interface Other extends globalThis.EnumItem {
			Name: "Other";
			Value: 3;
			EnumType: typeof globalThis.Enum.CreateOutfitFailure;
		}

		export const Other: Other;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CreateOutfitFailure>;
	}
	export type CreateOutfitFailure = CreateOutfitFailure.InvalidName | CreateOutfitFailure.OutfitLimitReached | CreateOutfitFailure.Other;

	export namespace CreatorType {
		export interface User extends globalThis.EnumItem {
			Name: "User";
			Value: 0;
			EnumType: typeof globalThis.Enum.CreatorType;
		}

		export const User: User;

		export interface Group extends globalThis.EnumItem {
			Name: "Group";
			Value: 1;
			EnumType: typeof globalThis.Enum.CreatorType;
		}

		export const Group: Group;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CreatorType>;
	}
	export type CreatorType = CreatorType.User | CreatorType.Group;

	export namespace CreatorTypeFilter {
		export interface User extends globalThis.EnumItem {
			Name: "User";
			Value: 0;
			EnumType: typeof globalThis.Enum.CreatorTypeFilter;
		}

		export const User: User;

		export interface Group extends globalThis.EnumItem {
			Name: "Group";
			Value: 1;
			EnumType: typeof globalThis.Enum.CreatorTypeFilter;
		}

		export const Group: Group;

		export interface All extends globalThis.EnumItem {
			Name: "All";
			Value: 2;
			EnumType: typeof globalThis.Enum.CreatorTypeFilter;
		}

		export const All: All;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CreatorTypeFilter>;
	}
	export type CreatorTypeFilter = CreatorTypeFilter.User | CreatorTypeFilter.Group | CreatorTypeFilter.All;

	export namespace CurrencyType {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.CurrencyType;
		}

		export const Default: Default;

		export interface Robux extends globalThis.EnumItem {
			Name: "Robux";
			Value: 1;
			EnumType: typeof globalThis.Enum.CurrencyType;
		}

		export const Robux: Robux;

		export interface Tix extends globalThis.EnumItem {
			Name: "Tix";
			Value: 2;
			EnumType: typeof globalThis.Enum.CurrencyType;
		}

		export const Tix: Tix;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CurrencyType>;
	}
	export type CurrencyType = CurrencyType.Default | CurrencyType.Robux | CurrencyType.Tix;

	export namespace CustomCameraMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.CustomCameraMode;
		}

		export const Default: Default;

		export interface Follow extends globalThis.EnumItem {
			Name: "Follow";
			Value: 2;
			EnumType: typeof globalThis.Enum.CustomCameraMode;
		}

		export const Follow: Follow;

		export interface Classic extends globalThis.EnumItem {
			Name: "Classic";
			Value: 1;
			EnumType: typeof globalThis.Enum.CustomCameraMode;
		}

		export const Classic: Classic;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.CustomCameraMode>;
	}
	export type CustomCameraMode = CustomCameraMode.Default | CustomCameraMode.Follow | CustomCameraMode.Classic;

	export namespace DataStoreRequestType {
		export interface GetAsync extends globalThis.EnumItem {
			Name: "GetAsync";
			Value: 0;
			EnumType: typeof globalThis.Enum.DataStoreRequestType;
		}

		export const GetAsync: GetAsync;

		export interface SetIncrementAsync extends globalThis.EnumItem {
			Name: "SetIncrementAsync";
			Value: 1;
			EnumType: typeof globalThis.Enum.DataStoreRequestType;
		}

		export const SetIncrementAsync: SetIncrementAsync;

		export interface UpdateAsync extends globalThis.EnumItem {
			Name: "UpdateAsync";
			Value: 2;
			EnumType: typeof globalThis.Enum.DataStoreRequestType;
		}

		export const UpdateAsync: UpdateAsync;

		export interface GetSortedAsync extends globalThis.EnumItem {
			Name: "GetSortedAsync";
			Value: 3;
			EnumType: typeof globalThis.Enum.DataStoreRequestType;
		}

		export const GetSortedAsync: GetSortedAsync;

		export interface SetIncrementSortedAsync extends globalThis.EnumItem {
			Name: "SetIncrementSortedAsync";
			Value: 4;
			EnumType: typeof globalThis.Enum.DataStoreRequestType;
		}

		export const SetIncrementSortedAsync: SetIncrementSortedAsync;

		export interface OnUpdate extends globalThis.EnumItem {
			Name: "OnUpdate";
			Value: 5;
			EnumType: typeof globalThis.Enum.DataStoreRequestType;
		}

		export const OnUpdate: OnUpdate;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DataStoreRequestType>;
	}
	export type DataStoreRequestType = DataStoreRequestType.GetAsync | DataStoreRequestType.SetIncrementAsync | DataStoreRequestType.UpdateAsync | DataStoreRequestType.GetSortedAsync | DataStoreRequestType.SetIncrementSortedAsync | DataStoreRequestType.OnUpdate;

	export namespace DeathStyle {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.DeathStyle;
		}

		export const Default: Default;

		export interface ClassicBreakApart extends globalThis.EnumItem {
			Name: "ClassicBreakApart";
			Value: 1;
			EnumType: typeof globalThis.Enum.DeathStyle;
		}

		export const ClassicBreakApart: ClassicBreakApart;

		export interface NonGraphic extends globalThis.EnumItem {
			Name: "NonGraphic";
			Value: 2;
			EnumType: typeof globalThis.Enum.DeathStyle;
		}

		export const NonGraphic: NonGraphic;

		export interface Scriptable extends globalThis.EnumItem {
			Name: "Scriptable";
			Value: 3;
			EnumType: typeof globalThis.Enum.DeathStyle;
		}

		export const Scriptable: Scriptable;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DeathStyle>;
	}
	export type DeathStyle = DeathStyle.Default | DeathStyle.ClassicBreakApart | DeathStyle.NonGraphic | DeathStyle.Scriptable;

	export namespace DebuggerEndReason {
		export interface ClientRequest extends globalThis.EnumItem {
			Name: "ClientRequest";
			Value: 0;
			EnumType: typeof globalThis.Enum.DebuggerEndReason;
		}

		export const ClientRequest: ClientRequest;

		export interface Timeout extends globalThis.EnumItem {
			Name: "Timeout";
			Value: 1;
			EnumType: typeof globalThis.Enum.DebuggerEndReason;
		}

		export const Timeout: Timeout;

		export interface InvalidHost extends globalThis.EnumItem {
			Name: "InvalidHost";
			Value: 2;
			EnumType: typeof globalThis.Enum.DebuggerEndReason;
		}

		export const InvalidHost: InvalidHost;

		export interface Disconnected extends globalThis.EnumItem {
			Name: "Disconnected";
			Value: 3;
			EnumType: typeof globalThis.Enum.DebuggerEndReason;
		}

		export const Disconnected: Disconnected;

		export interface ServerShutdown extends globalThis.EnumItem {
			Name: "ServerShutdown";
			Value: 4;
			EnumType: typeof globalThis.Enum.DebuggerEndReason;
		}

		export const ServerShutdown: ServerShutdown;

		export interface ServerProtocolMismatch extends globalThis.EnumItem {
			Name: "ServerProtocolMismatch";
			Value: 5;
			EnumType: typeof globalThis.Enum.DebuggerEndReason;
		}

		export const ServerProtocolMismatch: ServerProtocolMismatch;

		export interface ConfigurationFailed extends globalThis.EnumItem {
			Name: "ConfigurationFailed";
			Value: 6;
			EnumType: typeof globalThis.Enum.DebuggerEndReason;
		}

		export const ConfigurationFailed: ConfigurationFailed;

		export interface RpcError extends globalThis.EnumItem {
			Name: "RpcError";
			Value: 7;
			EnumType: typeof globalThis.Enum.DebuggerEndReason;
		}

		export const RpcError: RpcError;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DebuggerEndReason>;
	}
	export type DebuggerEndReason = DebuggerEndReason.ClientRequest | DebuggerEndReason.Timeout | DebuggerEndReason.InvalidHost | DebuggerEndReason.Disconnected | DebuggerEndReason.ServerShutdown | DebuggerEndReason.ServerProtocolMismatch | DebuggerEndReason.ConfigurationFailed | DebuggerEndReason.RpcError;

	export namespace DebuggerExceptionBreakMode {
		export interface Never extends globalThis.EnumItem {
			Name: "Never";
			Value: 0;
			EnumType: typeof globalThis.Enum.DebuggerExceptionBreakMode;
		}

		export const Never: Never;

		export interface Unhandled extends globalThis.EnumItem {
			Name: "Unhandled";
			Value: 2;
			EnumType: typeof globalThis.Enum.DebuggerExceptionBreakMode;
		}

		export const Unhandled: Unhandled;

		export interface Always extends globalThis.EnumItem {
			Name: "Always";
			Value: 1;
			EnumType: typeof globalThis.Enum.DebuggerExceptionBreakMode;
		}

		export const Always: Always;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DebuggerExceptionBreakMode>;
	}
	export type DebuggerExceptionBreakMode = DebuggerExceptionBreakMode.Never | DebuggerExceptionBreakMode.Unhandled | DebuggerExceptionBreakMode.Always;

	export namespace DebuggerFrameType {
		export interface C extends globalThis.EnumItem {
			Name: "C";
			Value: 0;
			EnumType: typeof globalThis.Enum.DebuggerFrameType;
		}

		export const C: C;

		export interface Lua extends globalThis.EnumItem {
			Name: "Lua";
			Value: 1;
			EnumType: typeof globalThis.Enum.DebuggerFrameType;
		}

		export const Lua: Lua;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DebuggerFrameType>;
	}
	export type DebuggerFrameType = DebuggerFrameType.C | DebuggerFrameType.Lua;

	export namespace DebuggerPauseReason {
		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof globalThis.Enum.DebuggerPauseReason;
		}

		export const Unknown: Unknown;

		export interface Requested extends globalThis.EnumItem {
			Name: "Requested";
			Value: 1;
			EnumType: typeof globalThis.Enum.DebuggerPauseReason;
		}

		export const Requested: Requested;

		export interface Breakpoint extends globalThis.EnumItem {
			Name: "Breakpoint";
			Value: 2;
			EnumType: typeof globalThis.Enum.DebuggerPauseReason;
		}

		export const Breakpoint: Breakpoint;

		export interface Exception extends globalThis.EnumItem {
			Name: "Exception";
			Value: 3;
			EnumType: typeof globalThis.Enum.DebuggerPauseReason;
		}

		export const Exception: Exception;

		export interface SingleStep extends globalThis.EnumItem {
			Name: "SingleStep";
			Value: 4;
			EnumType: typeof globalThis.Enum.DebuggerPauseReason;
		}

		export const SingleStep: SingleStep;

		export interface Entrypoint extends globalThis.EnumItem {
			Name: "Entrypoint";
			Value: 5;
			EnumType: typeof globalThis.Enum.DebuggerPauseReason;
		}

		export const Entrypoint: Entrypoint;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DebuggerPauseReason>;
	}
	export type DebuggerPauseReason = DebuggerPauseReason.Unknown | DebuggerPauseReason.Requested | DebuggerPauseReason.Breakpoint | DebuggerPauseReason.Exception | DebuggerPauseReason.SingleStep | DebuggerPauseReason.Entrypoint;

	export namespace DebuggerStatus {
		export interface Success extends globalThis.EnumItem {
			Name: "Success";
			Value: 0;
			EnumType: typeof globalThis.Enum.DebuggerStatus;
		}

		export const Success: Success;

		export interface Timeout extends globalThis.EnumItem {
			Name: "Timeout";
			Value: 1;
			EnumType: typeof globalThis.Enum.DebuggerStatus;
		}

		export const Timeout: Timeout;

		export interface ConnectionLost extends globalThis.EnumItem {
			Name: "ConnectionLost";
			Value: 2;
			EnumType: typeof globalThis.Enum.DebuggerStatus;
		}

		export const ConnectionLost: ConnectionLost;

		export interface InvalidResponse extends globalThis.EnumItem {
			Name: "InvalidResponse";
			Value: 3;
			EnumType: typeof globalThis.Enum.DebuggerStatus;
		}

		export const InvalidResponse: InvalidResponse;

		export interface InternalError extends globalThis.EnumItem {
			Name: "InternalError";
			Value: 4;
			EnumType: typeof globalThis.Enum.DebuggerStatus;
		}

		export const InternalError: InternalError;

		export interface InvalidState extends globalThis.EnumItem {
			Name: "InvalidState";
			Value: 5;
			EnumType: typeof globalThis.Enum.DebuggerStatus;
		}

		export const InvalidState: InvalidState;

		export interface RpcError extends globalThis.EnumItem {
			Name: "RpcError";
			Value: 6;
			EnumType: typeof globalThis.Enum.DebuggerStatus;
		}

		export const RpcError: RpcError;

		export interface InvalidArgument extends globalThis.EnumItem {
			Name: "InvalidArgument";
			Value: 7;
			EnumType: typeof globalThis.Enum.DebuggerStatus;
		}

		export const InvalidArgument: InvalidArgument;

		export interface ConnectionClosed extends globalThis.EnumItem {
			Name: "ConnectionClosed";
			Value: 8;
			EnumType: typeof globalThis.Enum.DebuggerStatus;
		}

		export const ConnectionClosed: ConnectionClosed;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DebuggerStatus>;
	}
	export type DebuggerStatus = DebuggerStatus.Success | DebuggerStatus.Timeout | DebuggerStatus.ConnectionLost | DebuggerStatus.InvalidResponse | DebuggerStatus.InternalError | DebuggerStatus.InvalidState | DebuggerStatus.RpcError | DebuggerStatus.InvalidArgument | DebuggerStatus.ConnectionClosed;

	export namespace DevCameraOcclusionMode {
		export interface Zoom extends globalThis.EnumItem {
			Name: "Zoom";
			Value: 0;
			EnumType: typeof globalThis.Enum.DevCameraOcclusionMode;
		}

		export const Zoom: Zoom;

		export interface Invisicam extends globalThis.EnumItem {
			Name: "Invisicam";
			Value: 1;
			EnumType: typeof globalThis.Enum.DevCameraOcclusionMode;
		}

		export const Invisicam: Invisicam;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DevCameraOcclusionMode>;
	}
	export type DevCameraOcclusionMode = DevCameraOcclusionMode.Zoom | DevCameraOcclusionMode.Invisicam;

	export namespace DevComputerCameraMovementMode {
		export interface UserChoice extends globalThis.EnumItem {
			Name: "UserChoice";
			Value: 0;
			EnumType: typeof globalThis.Enum.DevComputerCameraMovementMode;
		}

		export const UserChoice: UserChoice;

		export interface Classic extends globalThis.EnumItem {
			Name: "Classic";
			Value: 1;
			EnumType: typeof globalThis.Enum.DevComputerCameraMovementMode;
		}

		export const Classic: Classic;

		export interface Follow extends globalThis.EnumItem {
			Name: "Follow";
			Value: 2;
			EnumType: typeof globalThis.Enum.DevComputerCameraMovementMode;
		}

		export const Follow: Follow;

		export interface Orbital extends globalThis.EnumItem {
			Name: "Orbital";
			Value: 3;
			EnumType: typeof globalThis.Enum.DevComputerCameraMovementMode;
		}

		export const Orbital: Orbital;

		export interface CameraToggle extends globalThis.EnumItem {
			Name: "CameraToggle";
			Value: 4;
			EnumType: typeof globalThis.Enum.DevComputerCameraMovementMode;
		}

		export const CameraToggle: CameraToggle;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DevComputerCameraMovementMode>;
	}
	export type DevComputerCameraMovementMode = DevComputerCameraMovementMode.UserChoice | DevComputerCameraMovementMode.Classic | DevComputerCameraMovementMode.Follow | DevComputerCameraMovementMode.Orbital | DevComputerCameraMovementMode.CameraToggle;

	export namespace DevComputerMovementMode {
		export interface UserChoice extends globalThis.EnumItem {
			Name: "UserChoice";
			Value: 0;
			EnumType: typeof globalThis.Enum.DevComputerMovementMode;
		}

		export const UserChoice: UserChoice;

		export interface KeyboardMouse extends globalThis.EnumItem {
			Name: "KeyboardMouse";
			Value: 1;
			EnumType: typeof globalThis.Enum.DevComputerMovementMode;
		}

		export const KeyboardMouse: KeyboardMouse;

		export interface ClickToMove extends globalThis.EnumItem {
			Name: "ClickToMove";
			Value: 2;
			EnumType: typeof globalThis.Enum.DevComputerMovementMode;
		}

		export const ClickToMove: ClickToMove;

		export interface Scriptable extends globalThis.EnumItem {
			Name: "Scriptable";
			Value: 3;
			EnumType: typeof globalThis.Enum.DevComputerMovementMode;
		}

		export const Scriptable: Scriptable;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DevComputerMovementMode>;
	}
	export type DevComputerMovementMode = DevComputerMovementMode.UserChoice | DevComputerMovementMode.KeyboardMouse | DevComputerMovementMode.ClickToMove | DevComputerMovementMode.Scriptable;

	export namespace DevTouchCameraMovementMode {
		export interface UserChoice extends globalThis.EnumItem {
			Name: "UserChoice";
			Value: 0;
			EnumType: typeof globalThis.Enum.DevTouchCameraMovementMode;
		}

		export const UserChoice: UserChoice;

		export interface Classic extends globalThis.EnumItem {
			Name: "Classic";
			Value: 1;
			EnumType: typeof globalThis.Enum.DevTouchCameraMovementMode;
		}

		export const Classic: Classic;

		export interface Follow extends globalThis.EnumItem {
			Name: "Follow";
			Value: 2;
			EnumType: typeof globalThis.Enum.DevTouchCameraMovementMode;
		}

		export const Follow: Follow;

		export interface Orbital extends globalThis.EnumItem {
			Name: "Orbital";
			Value: 3;
			EnumType: typeof globalThis.Enum.DevTouchCameraMovementMode;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DevTouchCameraMovementMode>;
	}
	export type DevTouchCameraMovementMode = DevTouchCameraMovementMode.UserChoice | DevTouchCameraMovementMode.Classic | DevTouchCameraMovementMode.Follow | DevTouchCameraMovementMode.Orbital;

	export namespace DevTouchMovementMode {
		export interface UserChoice extends globalThis.EnumItem {
			Name: "UserChoice";
			Value: 0;
			EnumType: typeof globalThis.Enum.DevTouchMovementMode;
		}

		export const UserChoice: UserChoice;

		export interface Thumbstick extends globalThis.EnumItem {
			Name: "Thumbstick";
			Value: 1;
			EnumType: typeof globalThis.Enum.DevTouchMovementMode;
		}

		export const Thumbstick: Thumbstick;

		export interface DPad extends globalThis.EnumItem {
			Name: "DPad";
			Value: 2;
			EnumType: typeof globalThis.Enum.DevTouchMovementMode;
		}

		export const DPad: DPad;

		export interface Thumbpad extends globalThis.EnumItem {
			Name: "Thumbpad";
			Value: 3;
			EnumType: typeof globalThis.Enum.DevTouchMovementMode;
		}

		export const Thumbpad: Thumbpad;

		export interface ClickToMove extends globalThis.EnumItem {
			Name: "ClickToMove";
			Value: 4;
			EnumType: typeof globalThis.Enum.DevTouchMovementMode;
		}

		export const ClickToMove: ClickToMove;

		export interface Scriptable extends globalThis.EnumItem {
			Name: "Scriptable";
			Value: 5;
			EnumType: typeof globalThis.Enum.DevTouchMovementMode;
		}

		export const Scriptable: Scriptable;

		export interface DynamicThumbstick extends globalThis.EnumItem {
			Name: "DynamicThumbstick";
			Value: 6;
			EnumType: typeof globalThis.Enum.DevTouchMovementMode;
		}

		export const DynamicThumbstick: DynamicThumbstick;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DevTouchMovementMode>;
	}
	export type DevTouchMovementMode = DevTouchMovementMode.UserChoice | DevTouchMovementMode.Thumbstick | DevTouchMovementMode.DPad | DevTouchMovementMode.Thumbpad | DevTouchMovementMode.ClickToMove | DevTouchMovementMode.Scriptable | DevTouchMovementMode.DynamicThumbstick;

	export namespace DeveloperMemoryTag {
		export interface Internal extends globalThis.EnumItem {
			Name: "Internal";
			Value: 0;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const Internal: Internal;

		export interface HttpCache extends globalThis.EnumItem {
			Name: "HttpCache";
			Value: 1;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const HttpCache: HttpCache;

		export interface Instances extends globalThis.EnumItem {
			Name: "Instances";
			Value: 2;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const Instances: Instances;

		export interface Signals extends globalThis.EnumItem {
			Name: "Signals";
			Value: 3;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const Signals: Signals;

		export interface LuaHeap extends globalThis.EnumItem {
			Name: "LuaHeap";
			Value: 4;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const LuaHeap: LuaHeap;

		export interface Script extends globalThis.EnumItem {
			Name: "Script";
			Value: 5;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const Script: Script;

		export interface PhysicsCollision extends globalThis.EnumItem {
			Name: "PhysicsCollision";
			Value: 6;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const PhysicsCollision: PhysicsCollision;

		export interface PhysicsParts extends globalThis.EnumItem {
			Name: "PhysicsParts";
			Value: 7;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const PhysicsParts: PhysicsParts;

		export interface GraphicsSolidModels extends globalThis.EnumItem {
			Name: "GraphicsSolidModels";
			Value: 8;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const GraphicsSolidModels: GraphicsSolidModels;

		export interface GraphicsMeshParts extends globalThis.EnumItem {
			Name: "GraphicsMeshParts";
			Value: 10;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const GraphicsMeshParts: GraphicsMeshParts;

		export interface GraphicsParticles extends globalThis.EnumItem {
			Name: "GraphicsParticles";
			Value: 11;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const GraphicsParticles: GraphicsParticles;

		export interface GraphicsParts extends globalThis.EnumItem {
			Name: "GraphicsParts";
			Value: 12;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const GraphicsParts: GraphicsParts;

		export interface GraphicsSpatialHash extends globalThis.EnumItem {
			Name: "GraphicsSpatialHash";
			Value: 13;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const GraphicsSpatialHash: GraphicsSpatialHash;

		export interface GraphicsTerrain extends globalThis.EnumItem {
			Name: "GraphicsTerrain";
			Value: 14;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const GraphicsTerrain: GraphicsTerrain;

		export interface GraphicsTexture extends globalThis.EnumItem {
			Name: "GraphicsTexture";
			Value: 15;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const GraphicsTexture: GraphicsTexture;

		export interface GraphicsTextureCharacter extends globalThis.EnumItem {
			Name: "GraphicsTextureCharacter";
			Value: 16;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const GraphicsTextureCharacter: GraphicsTextureCharacter;

		export interface Sounds extends globalThis.EnumItem {
			Name: "Sounds";
			Value: 17;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const Sounds: Sounds;

		export interface StreamingSounds extends globalThis.EnumItem {
			Name: "StreamingSounds";
			Value: 18;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const StreamingSounds: StreamingSounds;

		export interface TerrainVoxels extends globalThis.EnumItem {
			Name: "TerrainVoxels";
			Value: 19;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const TerrainVoxels: TerrainVoxels;

		export interface Gui extends globalThis.EnumItem {
			Name: "Gui";
			Value: 21;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const Gui: Gui;

		export interface Animation extends globalThis.EnumItem {
			Name: "Animation";
			Value: 22;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const Animation: Animation;

		export interface Navigation extends globalThis.EnumItem {
			Name: "Navigation";
			Value: 23;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const Navigation: Navigation;

		export interface GeometryCSG extends globalThis.EnumItem {
			Name: "GeometryCSG";
			Value: 24;
			EnumType: typeof globalThis.Enum.DeveloperMemoryTag;
		}

		export const GeometryCSG: GeometryCSG;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DeveloperMemoryTag>;
	}
	export type DeveloperMemoryTag = DeveloperMemoryTag.Internal | DeveloperMemoryTag.HttpCache | DeveloperMemoryTag.Instances | DeveloperMemoryTag.Signals | DeveloperMemoryTag.LuaHeap | DeveloperMemoryTag.Script | DeveloperMemoryTag.PhysicsCollision | DeveloperMemoryTag.PhysicsParts | DeveloperMemoryTag.GraphicsSolidModels | DeveloperMemoryTag.GraphicsMeshParts | DeveloperMemoryTag.GraphicsParticles | DeveloperMemoryTag.GraphicsParts | DeveloperMemoryTag.GraphicsSpatialHash | DeveloperMemoryTag.GraphicsTerrain | DeveloperMemoryTag.GraphicsTexture | DeveloperMemoryTag.GraphicsTextureCharacter | DeveloperMemoryTag.Sounds | DeveloperMemoryTag.StreamingSounds | DeveloperMemoryTag.TerrainVoxels | DeveloperMemoryTag.Gui | DeveloperMemoryTag.Animation | DeveloperMemoryTag.Navigation | DeveloperMemoryTag.GeometryCSG;

	export namespace DeviceType {
		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof globalThis.Enum.DeviceType;
		}

		export const Unknown: Unknown;

		export interface Desktop extends globalThis.EnumItem {
			Name: "Desktop";
			Value: 1;
			EnumType: typeof globalThis.Enum.DeviceType;
		}

		export const Desktop: Desktop;

		export interface Tablet extends globalThis.EnumItem {
			Name: "Tablet";
			Value: 2;
			EnumType: typeof globalThis.Enum.DeviceType;
		}

		export const Tablet: Tablet;

		export interface Phone extends globalThis.EnumItem {
			Name: "Phone";
			Value: 3;
			EnumType: typeof globalThis.Enum.DeviceType;
		}

		export const Phone: Phone;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DeviceType>;
	}
	export type DeviceType = DeviceType.Unknown | DeviceType.Desktop | DeviceType.Tablet | DeviceType.Phone;

	export namespace DialogBehaviorType {
		export interface SinglePlayer extends globalThis.EnumItem {
			Name: "SinglePlayer";
			Value: 0;
			EnumType: typeof globalThis.Enum.DialogBehaviorType;
		}

		export const SinglePlayer: SinglePlayer;

		export interface MultiplePlayers extends globalThis.EnumItem {
			Name: "MultiplePlayers";
			Value: 1;
			EnumType: typeof globalThis.Enum.DialogBehaviorType;
		}

		export const MultiplePlayers: MultiplePlayers;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DialogBehaviorType>;
	}
	export type DialogBehaviorType = DialogBehaviorType.SinglePlayer | DialogBehaviorType.MultiplePlayers;

	export namespace DialogPurpose {
		export interface Quest extends globalThis.EnumItem {
			Name: "Quest";
			Value: 0;
			EnumType: typeof globalThis.Enum.DialogPurpose;
		}

		export const Quest: Quest;

		export interface Help extends globalThis.EnumItem {
			Name: "Help";
			Value: 1;
			EnumType: typeof globalThis.Enum.DialogPurpose;
		}

		export const Help: Help;

		export interface Shop extends globalThis.EnumItem {
			Name: "Shop";
			Value: 2;
			EnumType: typeof globalThis.Enum.DialogPurpose;
		}

		export const Shop: Shop;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DialogPurpose>;
	}
	export type DialogPurpose = DialogPurpose.Quest | DialogPurpose.Help | DialogPurpose.Shop;

	export namespace DialogTone {
		export interface Neutral extends globalThis.EnumItem {
			Name: "Neutral";
			Value: 0;
			EnumType: typeof globalThis.Enum.DialogTone;
		}

		export const Neutral: Neutral;

		export interface Friendly extends globalThis.EnumItem {
			Name: "Friendly";
			Value: 1;
			EnumType: typeof globalThis.Enum.DialogTone;
		}

		export const Friendly: Friendly;

		export interface Enemy extends globalThis.EnumItem {
			Name: "Enemy";
			Value: 2;
			EnumType: typeof globalThis.Enum.DialogTone;
		}

		export const Enemy: Enemy;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DialogTone>;
	}
	export type DialogTone = DialogTone.Neutral | DialogTone.Friendly | DialogTone.Enemy;

	export namespace DominantAxis {
		export interface Width extends globalThis.EnumItem {
			Name: "Width";
			Value: 0;
			EnumType: typeof globalThis.Enum.DominantAxis;
		}

		export const Width: Width;

		export interface Height extends globalThis.EnumItem {
			Name: "Height";
			Value: 1;
			EnumType: typeof globalThis.Enum.DominantAxis;
		}

		export const Height: Height;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DominantAxis>;
	}
	export type DominantAxis = DominantAxis.Width | DominantAxis.Height;

	export namespace DraftStatusCode {
		export interface OK extends globalThis.EnumItem {
			Name: "OK";
			Value: 0;
			EnumType: typeof globalThis.Enum.DraftStatusCode;
		}

		export const OK: OK;

		export interface DraftOutdated extends globalThis.EnumItem {
			Name: "DraftOutdated";
			Value: 1;
			EnumType: typeof globalThis.Enum.DraftStatusCode;
		}

		export const DraftOutdated: DraftOutdated;

		export interface ScriptRemoved extends globalThis.EnumItem {
			Name: "ScriptRemoved";
			Value: 2;
			EnumType: typeof globalThis.Enum.DraftStatusCode;
		}

		export const ScriptRemoved: ScriptRemoved;

		export interface DraftCommitted extends globalThis.EnumItem {
			Name: "DraftCommitted";
			Value: 3;
			EnumType: typeof globalThis.Enum.DraftStatusCode;
		}

		export const DraftCommitted: DraftCommitted;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DraftStatusCode>;
	}
	export type DraftStatusCode = DraftStatusCode.OK | DraftStatusCode.DraftOutdated | DraftStatusCode.ScriptRemoved | DraftStatusCode.DraftCommitted;

	export namespace DragDetectorDragStyle {
		export interface TranslateLine extends globalThis.EnumItem {
			Name: "TranslateLine";
			Value: 0;
			EnumType: typeof globalThis.Enum.DragDetectorDragStyle;
		}

		export const TranslateLine: TranslateLine;

		export interface TranslatePlane extends globalThis.EnumItem {
			Name: "TranslatePlane";
			Value: 1;
			EnumType: typeof globalThis.Enum.DragDetectorDragStyle;
		}

		export const TranslatePlane: TranslatePlane;

		export interface TranslatePlaneOrLine extends globalThis.EnumItem {
			Name: "TranslatePlaneOrLine";
			Value: 2;
			EnumType: typeof globalThis.Enum.DragDetectorDragStyle;
		}

		export const TranslatePlaneOrLine: TranslatePlaneOrLine;

		export interface TranslateLineOrPlane extends globalThis.EnumItem {
			Name: "TranslateLineOrPlane";
			Value: 3;
			EnumType: typeof globalThis.Enum.DragDetectorDragStyle;
		}

		export const TranslateLineOrPlane: TranslateLineOrPlane;

		export interface TranslateViewPlane extends globalThis.EnumItem {
			Name: "TranslateViewPlane";
			Value: 4;
			EnumType: typeof globalThis.Enum.DragDetectorDragStyle;
		}

		export const TranslateViewPlane: TranslateViewPlane;

		export interface RotateAxis extends globalThis.EnumItem {
			Name: "RotateAxis";
			Value: 5;
			EnumType: typeof globalThis.Enum.DragDetectorDragStyle;
		}

		export const RotateAxis: RotateAxis;

		export interface RotateTrackball extends globalThis.EnumItem {
			Name: "RotateTrackball";
			Value: 6;
			EnumType: typeof globalThis.Enum.DragDetectorDragStyle;
		}

		export const RotateTrackball: RotateTrackball;

		export interface Scriptable extends globalThis.EnumItem {
			Name: "Scriptable";
			Value: 7;
			EnumType: typeof globalThis.Enum.DragDetectorDragStyle;
		}

		export const Scriptable: Scriptable;

		export interface BestForDevice extends globalThis.EnumItem {
			Name: "BestForDevice";
			Value: 8;
			EnumType: typeof globalThis.Enum.DragDetectorDragStyle;
		}

		export const BestForDevice: BestForDevice;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DragDetectorDragStyle>;
	}
	export type DragDetectorDragStyle = DragDetectorDragStyle.TranslateLine | DragDetectorDragStyle.TranslatePlane | DragDetectorDragStyle.TranslatePlaneOrLine | DragDetectorDragStyle.TranslateLineOrPlane | DragDetectorDragStyle.TranslateViewPlane | DragDetectorDragStyle.RotateAxis | DragDetectorDragStyle.RotateTrackball | DragDetectorDragStyle.Scriptable | DragDetectorDragStyle.BestForDevice;

	export namespace DragDetectorResponseStyle {
		export interface Geometric extends globalThis.EnumItem {
			Name: "Geometric";
			Value: 0;
			EnumType: typeof globalThis.Enum.DragDetectorResponseStyle;
		}

		export const Geometric: Geometric;

		export interface Physical extends globalThis.EnumItem {
			Name: "Physical";
			Value: 1;
			EnumType: typeof globalThis.Enum.DragDetectorResponseStyle;
		}

		export const Physical: Physical;

		export interface Custom extends globalThis.EnumItem {
			Name: "Custom";
			Value: 2;
			EnumType: typeof globalThis.Enum.DragDetectorResponseStyle;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DragDetectorResponseStyle>;
	}
	export type DragDetectorResponseStyle = DragDetectorResponseStyle.Geometric | DragDetectorResponseStyle.Physical | DragDetectorResponseStyle.Custom;

	export namespace DraggerCoordinateSpace {
		export interface Object extends globalThis.EnumItem {
			Name: "Object";
			Value: 0;
			EnumType: typeof globalThis.Enum.DraggerCoordinateSpace;
		}

		export const Object: Object;

		export interface World extends globalThis.EnumItem {
			Name: "World";
			Value: 1;
			EnumType: typeof globalThis.Enum.DraggerCoordinateSpace;
		}

		export const World: World;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DraggerCoordinateSpace>;
	}
	export type DraggerCoordinateSpace = DraggerCoordinateSpace.Object | DraggerCoordinateSpace.World;

	export namespace DraggerMovementMode {
		export interface Geometric extends globalThis.EnumItem {
			Name: "Geometric";
			Value: 0;
			EnumType: typeof globalThis.Enum.DraggerMovementMode;
		}

		export const Geometric: Geometric;

		export interface Physical extends globalThis.EnumItem {
			Name: "Physical";
			Value: 1;
			EnumType: typeof globalThis.Enum.DraggerMovementMode;
		}

		export const Physical: Physical;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.DraggerMovementMode>;
	}
	export type DraggerMovementMode = DraggerMovementMode.Geometric | DraggerMovementMode.Physical;

	export namespace EasingDirection {
		export interface In extends globalThis.EnumItem {
			Name: "In";
			Value: 0;
			EnumType: typeof globalThis.Enum.EasingDirection;
		}

		export const In: In;

		export interface Out extends globalThis.EnumItem {
			Name: "Out";
			Value: 1;
			EnumType: typeof globalThis.Enum.EasingDirection;
		}

		export const Out: Out;

		export interface InOut extends globalThis.EnumItem {
			Name: "InOut";
			Value: 2;
			EnumType: typeof globalThis.Enum.EasingDirection;
		}

		export const InOut: InOut;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.EasingDirection>;
	}
	export type EasingDirection = EasingDirection.In | EasingDirection.Out | EasingDirection.InOut;

	export namespace EasingStyle {
		export interface Linear extends globalThis.EnumItem {
			Name: "Linear";
			Value: 0;
			EnumType: typeof globalThis.Enum.EasingStyle;
		}

		export const Linear: Linear;

		export interface Sine extends globalThis.EnumItem {
			Name: "Sine";
			Value: 1;
			EnumType: typeof globalThis.Enum.EasingStyle;
		}

		export const Sine: Sine;

		export interface Back extends globalThis.EnumItem {
			Name: "Back";
			Value: 2;
			EnumType: typeof globalThis.Enum.EasingStyle;
		}

		export const Back: Back;

		export interface Quad extends globalThis.EnumItem {
			Name: "Quad";
			Value: 3;
			EnumType: typeof globalThis.Enum.EasingStyle;
		}

		export const Quad: Quad;

		export interface Quart extends globalThis.EnumItem {
			Name: "Quart";
			Value: 4;
			EnumType: typeof globalThis.Enum.EasingStyle;
		}

		export const Quart: Quart;

		export interface Quint extends globalThis.EnumItem {
			Name: "Quint";
			Value: 5;
			EnumType: typeof globalThis.Enum.EasingStyle;
		}

		export const Quint: Quint;

		export interface Bounce extends globalThis.EnumItem {
			Name: "Bounce";
			Value: 6;
			EnumType: typeof globalThis.Enum.EasingStyle;
		}

		export const Bounce: Bounce;

		export interface Elastic extends globalThis.EnumItem {
			Name: "Elastic";
			Value: 7;
			EnumType: typeof globalThis.Enum.EasingStyle;
		}

		export const Elastic: Elastic;

		export interface Exponential extends globalThis.EnumItem {
			Name: "Exponential";
			Value: 8;
			EnumType: typeof globalThis.Enum.EasingStyle;
		}

		export const Exponential: Exponential;

		export interface Circular extends globalThis.EnumItem {
			Name: "Circular";
			Value: 9;
			EnumType: typeof globalThis.Enum.EasingStyle;
		}

		export const Circular: Circular;

		export interface Cubic extends globalThis.EnumItem {
			Name: "Cubic";
			Value: 10;
			EnumType: typeof globalThis.Enum.EasingStyle;
		}

		export const Cubic: Cubic;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.EasingStyle>;
	}
	export type EasingStyle = EasingStyle.Linear | EasingStyle.Sine | EasingStyle.Back | EasingStyle.Quad | EasingStyle.Quart | EasingStyle.Quint | EasingStyle.Bounce | EasingStyle.Elastic | EasingStyle.Exponential | EasingStyle.Circular | EasingStyle.Cubic;

	export namespace ElasticBehavior {
		export interface WhenScrollable extends globalThis.EnumItem {
			Name: "WhenScrollable";
			Value: 0;
			EnumType: typeof globalThis.Enum.ElasticBehavior;
		}

		export const WhenScrollable: WhenScrollable;

		export interface Always extends globalThis.EnumItem {
			Name: "Always";
			Value: 1;
			EnumType: typeof globalThis.Enum.ElasticBehavior;
		}

		export const Always: Always;

		export interface Never extends globalThis.EnumItem {
			Name: "Never";
			Value: 2;
			EnumType: typeof globalThis.Enum.ElasticBehavior;
		}

		export const Never: Never;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ElasticBehavior>;
	}
	export type ElasticBehavior = ElasticBehavior.WhenScrollable | ElasticBehavior.Always | ElasticBehavior.Never;

	export namespace EnviromentalPhysicsThrottle {
		export interface DefaultAuto extends globalThis.EnumItem {
			Name: "DefaultAuto";
			Value: 0;
			EnumType: typeof globalThis.Enum.EnviromentalPhysicsThrottle;
		}

		export const DefaultAuto: DefaultAuto;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.EnviromentalPhysicsThrottle;
		}

		export const Disabled: Disabled;

		export interface Always extends globalThis.EnumItem {
			Name: "Always";
			Value: 2;
			EnumType: typeof globalThis.Enum.EnviromentalPhysicsThrottle;
		}

		export const Always: Always;

		export interface Skip2 extends globalThis.EnumItem {
			Name: "Skip2";
			Value: 3;
			EnumType: typeof globalThis.Enum.EnviromentalPhysicsThrottle;
		}

		export const Skip2: Skip2;

		export interface Skip4 extends globalThis.EnumItem {
			Name: "Skip4";
			Value: 4;
			EnumType: typeof globalThis.Enum.EnviromentalPhysicsThrottle;
		}

		export const Skip4: Skip4;

		export interface Skip8 extends globalThis.EnumItem {
			Name: "Skip8";
			Value: 5;
			EnumType: typeof globalThis.Enum.EnviromentalPhysicsThrottle;
		}

		export const Skip8: Skip8;

		export interface Skip16 extends globalThis.EnumItem {
			Name: "Skip16";
			Value: 6;
			EnumType: typeof globalThis.Enum.EnviromentalPhysicsThrottle;
		}

		export const Skip16: Skip16;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.EnviromentalPhysicsThrottle>;
	}
	export type EnviromentalPhysicsThrottle = EnviromentalPhysicsThrottle.DefaultAuto | EnviromentalPhysicsThrottle.Disabled | EnviromentalPhysicsThrottle.Always | EnviromentalPhysicsThrottle.Skip2 | EnviromentalPhysicsThrottle.Skip4 | EnviromentalPhysicsThrottle.Skip8 | EnviromentalPhysicsThrottle.Skip16;

	export namespace ExperienceAuthScope {
		export interface DefaultScope extends globalThis.EnumItem {
			Name: "DefaultScope";
			Value: 0;
			EnumType: typeof globalThis.Enum.ExperienceAuthScope;
		}

		export const DefaultScope: DefaultScope;

		export interface CreatorAssetsCreate extends globalThis.EnumItem {
			Name: "CreatorAssetsCreate";
			Value: 1;
			EnumType: typeof globalThis.Enum.ExperienceAuthScope;
		}

		export const CreatorAssetsCreate: CreatorAssetsCreate;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ExperienceAuthScope>;
	}
	export type ExperienceAuthScope = ExperienceAuthScope.DefaultScope | ExperienceAuthScope.CreatorAssetsCreate;

	export namespace ExplosionType {
		export interface NoCraters extends globalThis.EnumItem {
			Name: "NoCraters";
			Value: 0;
			EnumType: typeof globalThis.Enum.ExplosionType;
		}

		export const NoCraters: NoCraters;

		export interface Craters extends globalThis.EnumItem {
			Name: "Craters";
			Value: 1;
			EnumType: typeof globalThis.Enum.ExplosionType;
		}

		export const Craters: Craters;
		/** @deprecated renamed to Craters */
		export const CratersAndDebris: Craters;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ExplosionType>;
	}
	export type ExplosionType = ExplosionType.NoCraters | ExplosionType.Craters;

	export namespace FacialAnimationStreamingState {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.FacialAnimationStreamingState;
		}

		export const None: None;

		export interface Audio extends globalThis.EnumItem {
			Name: "Audio";
			Value: 1;
			EnumType: typeof globalThis.Enum.FacialAnimationStreamingState;
		}

		export const Audio: Audio;

		export interface Video extends globalThis.EnumItem {
			Name: "Video";
			Value: 2;
			EnumType: typeof globalThis.Enum.FacialAnimationStreamingState;
		}

		export const Video: Video;

		export interface Place extends globalThis.EnumItem {
			Name: "Place";
			Value: 4;
			EnumType: typeof globalThis.Enum.FacialAnimationStreamingState;
		}

		export const Place: Place;

		export interface Server extends globalThis.EnumItem {
			Name: "Server";
			Value: 8;
			EnumType: typeof globalThis.Enum.FacialAnimationStreamingState;
		}

		export const Server: Server;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FacialAnimationStreamingState>;
	}
	export type FacialAnimationStreamingState = FacialAnimationStreamingState.None | FacialAnimationStreamingState.Audio | FacialAnimationStreamingState.Video | FacialAnimationStreamingState.Place | FacialAnimationStreamingState.Server;

	export namespace FieldOfViewMode {
		export interface Vertical extends globalThis.EnumItem {
			Name: "Vertical";
			Value: 0;
			EnumType: typeof globalThis.Enum.FieldOfViewMode;
		}

		export const Vertical: Vertical;

		export interface Diagonal extends globalThis.EnumItem {
			Name: "Diagonal";
			Value: 1;
			EnumType: typeof globalThis.Enum.FieldOfViewMode;
		}

		export const Diagonal: Diagonal;

		export interface MaxAxis extends globalThis.EnumItem {
			Name: "MaxAxis";
			Value: 2;
			EnumType: typeof globalThis.Enum.FieldOfViewMode;
		}

		export const MaxAxis: MaxAxis;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FieldOfViewMode>;
	}
	export type FieldOfViewMode = FieldOfViewMode.Vertical | FieldOfViewMode.Diagonal | FieldOfViewMode.MaxAxis;

	export namespace FillDirection {
		export interface Horizontal extends globalThis.EnumItem {
			Name: "Horizontal";
			Value: 0;
			EnumType: typeof globalThis.Enum.FillDirection;
		}

		export const Horizontal: Horizontal;

		export interface Vertical extends globalThis.EnumItem {
			Name: "Vertical";
			Value: 1;
			EnumType: typeof globalThis.Enum.FillDirection;
		}

		export const Vertical: Vertical;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FillDirection>;
	}
	export type FillDirection = FillDirection.Horizontal | FillDirection.Vertical;

	export namespace FilterResult {
		export interface Rejected extends globalThis.EnumItem {
			Name: "Rejected";
			Value: 1;
			EnumType: typeof globalThis.Enum.FilterResult;
		}

		export const Rejected: Rejected;

		export interface Accepted extends globalThis.EnumItem {
			Name: "Accepted";
			Value: 0;
			EnumType: typeof globalThis.Enum.FilterResult;
		}

		export const Accepted: Accepted;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FilterResult>;
	}
	export type FilterResult = FilterResult.Rejected | FilterResult.Accepted;

	export namespace FinishRecordingOperation {
		export interface Cancel extends globalThis.EnumItem {
			Name: "Cancel";
			Value: 0;
			EnumType: typeof globalThis.Enum.FinishRecordingOperation;
		}

		export const Cancel: Cancel;

		export interface Commit extends globalThis.EnumItem {
			Name: "Commit";
			Value: 1;
			EnumType: typeof globalThis.Enum.FinishRecordingOperation;
		}

		export const Commit: Commit;

		export interface Append extends globalThis.EnumItem {
			Name: "Append";
			Value: 2;
			EnumType: typeof globalThis.Enum.FinishRecordingOperation;
		}

		export const Append: Append;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FinishRecordingOperation>;
	}
	export type FinishRecordingOperation = FinishRecordingOperation.Cancel | FinishRecordingOperation.Commit | FinishRecordingOperation.Append;

	export namespace FluidForces {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.FluidForces;
		}

		export const Default: Default;

		export interface Experimental extends globalThis.EnumItem {
			Name: "Experimental";
			Value: 1;
			EnumType: typeof globalThis.Enum.FluidForces;
		}

		export const Experimental: Experimental;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FluidForces>;
	}
	export type FluidForces = FluidForces.Default | FluidForces.Experimental;

	export namespace Font {
		export interface Legacy extends globalThis.EnumItem {
			Name: "Legacy";
			Value: 0;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Legacy: Legacy;

		export interface Arial extends globalThis.EnumItem {
			Name: "Arial";
			Value: 1;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Arial: Arial;

		export interface ArialBold extends globalThis.EnumItem {
			Name: "ArialBold";
			Value: 2;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const ArialBold: ArialBold;

		export interface SourceSans extends globalThis.EnumItem {
			Name: "SourceSans";
			Value: 3;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const SourceSans: SourceSans;

		export interface SourceSansBold extends globalThis.EnumItem {
			Name: "SourceSansBold";
			Value: 4;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const SourceSansBold: SourceSansBold;

		export interface SourceSansSemibold extends globalThis.EnumItem {
			Name: "SourceSansSemibold";
			Value: 16;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const SourceSansSemibold: SourceSansSemibold;

		export interface SourceSansLight extends globalThis.EnumItem {
			Name: "SourceSansLight";
			Value: 5;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const SourceSansLight: SourceSansLight;

		export interface SourceSansItalic extends globalThis.EnumItem {
			Name: "SourceSansItalic";
			Value: 6;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const SourceSansItalic: SourceSansItalic;

		export interface Bodoni extends globalThis.EnumItem {
			Name: "Bodoni";
			Value: 7;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Bodoni: Bodoni;

		export interface Garamond extends globalThis.EnumItem {
			Name: "Garamond";
			Value: 8;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Garamond: Garamond;

		export interface Cartoon extends globalThis.EnumItem {
			Name: "Cartoon";
			Value: 9;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Cartoon: Cartoon;

		export interface Code extends globalThis.EnumItem {
			Name: "Code";
			Value: 10;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Code: Code;

		export interface Highway extends globalThis.EnumItem {
			Name: "Highway";
			Value: 11;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Highway: Highway;

		export interface SciFi extends globalThis.EnumItem {
			Name: "SciFi";
			Value: 12;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const SciFi: SciFi;

		export interface Arcade extends globalThis.EnumItem {
			Name: "Arcade";
			Value: 13;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Arcade: Arcade;

		export interface Fantasy extends globalThis.EnumItem {
			Name: "Fantasy";
			Value: 14;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Fantasy: Fantasy;

		export interface Antique extends globalThis.EnumItem {
			Name: "Antique";
			Value: 15;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Antique: Antique;

		export interface Gotham extends globalThis.EnumItem {
			Name: "Gotham";
			Value: 17;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Gotham: Gotham;
		/** @deprecated renamed to Gotham */
		export const Montserrat: Gotham;

		export interface GothamMedium extends globalThis.EnumItem {
			Name: "GothamMedium";
			Value: 18;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const GothamMedium: GothamMedium;
		/** @deprecated renamed to GothamMedium */
		export const GothamSemibold: GothamMedium;
		/** @deprecated renamed to GothamMedium */
		export const MontserratMedium: GothamMedium;

		export interface GothamBold extends globalThis.EnumItem {
			Name: "GothamBold";
			Value: 19;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const GothamBold: GothamBold;
		/** @deprecated renamed to GothamBold */
		export const MontserratBold: GothamBold;

		export interface GothamBlack extends globalThis.EnumItem {
			Name: "GothamBlack";
			Value: 20;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const GothamBlack: GothamBlack;
		/** @deprecated renamed to GothamBlack */
		export const MontserratBlack: GothamBlack;

		export interface AmaticSC extends globalThis.EnumItem {
			Name: "AmaticSC";
			Value: 21;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const AmaticSC: AmaticSC;

		export interface Bangers extends globalThis.EnumItem {
			Name: "Bangers";
			Value: 22;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Bangers: Bangers;

		export interface Creepster extends globalThis.EnumItem {
			Name: "Creepster";
			Value: 23;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Creepster: Creepster;

		export interface DenkOne extends globalThis.EnumItem {
			Name: "DenkOne";
			Value: 24;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const DenkOne: DenkOne;

		export interface Fondamento extends globalThis.EnumItem {
			Name: "Fondamento";
			Value: 25;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Fondamento: Fondamento;

		export interface FredokaOne extends globalThis.EnumItem {
			Name: "FredokaOne";
			Value: 26;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const FredokaOne: FredokaOne;

		export interface GrenzeGotisch extends globalThis.EnumItem {
			Name: "GrenzeGotisch";
			Value: 27;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const GrenzeGotisch: GrenzeGotisch;

		export interface IndieFlower extends globalThis.EnumItem {
			Name: "IndieFlower";
			Value: 28;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const IndieFlower: IndieFlower;

		export interface JosefinSans extends globalThis.EnumItem {
			Name: "JosefinSans";
			Value: 29;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const JosefinSans: JosefinSans;

		export interface Jura extends globalThis.EnumItem {
			Name: "Jura";
			Value: 30;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Jura: Jura;

		export interface Kalam extends globalThis.EnumItem {
			Name: "Kalam";
			Value: 31;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Kalam: Kalam;

		export interface LuckiestGuy extends globalThis.EnumItem {
			Name: "LuckiestGuy";
			Value: 32;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const LuckiestGuy: LuckiestGuy;

		export interface Merriweather extends globalThis.EnumItem {
			Name: "Merriweather";
			Value: 33;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Merriweather: Merriweather;

		export interface Michroma extends globalThis.EnumItem {
			Name: "Michroma";
			Value: 34;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Michroma: Michroma;

		export interface Nunito extends globalThis.EnumItem {
			Name: "Nunito";
			Value: 35;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Nunito: Nunito;

		export interface Oswald extends globalThis.EnumItem {
			Name: "Oswald";
			Value: 36;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Oswald: Oswald;

		export interface PatrickHand extends globalThis.EnumItem {
			Name: "PatrickHand";
			Value: 37;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const PatrickHand: PatrickHand;

		export interface PermanentMarker extends globalThis.EnumItem {
			Name: "PermanentMarker";
			Value: 38;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const PermanentMarker: PermanentMarker;

		export interface Roboto extends globalThis.EnumItem {
			Name: "Roboto";
			Value: 39;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Roboto: Roboto;

		export interface RobotoCondensed extends globalThis.EnumItem {
			Name: "RobotoCondensed";
			Value: 40;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const RobotoCondensed: RobotoCondensed;

		export interface RobotoMono extends globalThis.EnumItem {
			Name: "RobotoMono";
			Value: 41;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const RobotoMono: RobotoMono;

		export interface Sarpanch extends globalThis.EnumItem {
			Name: "Sarpanch";
			Value: 42;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Sarpanch: Sarpanch;

		export interface SpecialElite extends globalThis.EnumItem {
			Name: "SpecialElite";
			Value: 43;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const SpecialElite: SpecialElite;

		export interface TitilliumWeb extends globalThis.EnumItem {
			Name: "TitilliumWeb";
			Value: 44;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const TitilliumWeb: TitilliumWeb;

		export interface Ubuntu extends globalThis.EnumItem {
			Name: "Ubuntu";
			Value: 45;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Ubuntu: Ubuntu;

		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 100;
			EnumType: typeof globalThis.Enum.Font;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.Font>;
	}
	export type Font = Font.Legacy | Font.Arial | Font.ArialBold | Font.SourceSans | Font.SourceSansBold | Font.SourceSansSemibold | Font.SourceSansLight | Font.SourceSansItalic | Font.Bodoni | Font.Garamond | Font.Cartoon | Font.Code | Font.Highway | Font.SciFi | Font.Arcade | Font.Fantasy | Font.Antique | Font.Gotham | Font.GothamMedium | Font.GothamBold | Font.GothamBlack | Font.AmaticSC | Font.Bangers | Font.Creepster | Font.DenkOne | Font.Fondamento | Font.FredokaOne | Font.GrenzeGotisch | Font.IndieFlower | Font.JosefinSans | Font.Jura | Font.Kalam | Font.LuckiestGuy | Font.Merriweather | Font.Michroma | Font.Nunito | Font.Oswald | Font.PatrickHand | Font.PermanentMarker | Font.Roboto | Font.RobotoCondensed | Font.RobotoMono | Font.Sarpanch | Font.SpecialElite | Font.TitilliumWeb | Font.Ubuntu | Font.Unknown;

	export namespace FontSize {
		export interface Size8 extends globalThis.EnumItem {
			Name: "Size8";
			Value: 0;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size8: Size8;

		export interface Size9 extends globalThis.EnumItem {
			Name: "Size9";
			Value: 1;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size9: Size9;

		export interface Size10 extends globalThis.EnumItem {
			Name: "Size10";
			Value: 2;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size10: Size10;

		export interface Size11 extends globalThis.EnumItem {
			Name: "Size11";
			Value: 3;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size11: Size11;

		export interface Size12 extends globalThis.EnumItem {
			Name: "Size12";
			Value: 4;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size12: Size12;

		export interface Size14 extends globalThis.EnumItem {
			Name: "Size14";
			Value: 5;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size14: Size14;

		export interface Size18 extends globalThis.EnumItem {
			Name: "Size18";
			Value: 6;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size18: Size18;

		export interface Size24 extends globalThis.EnumItem {
			Name: "Size24";
			Value: 7;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size24: Size24;

		export interface Size36 extends globalThis.EnumItem {
			Name: "Size36";
			Value: 8;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size36: Size36;

		export interface Size48 extends globalThis.EnumItem {
			Name: "Size48";
			Value: 9;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size48: Size48;

		export interface Size28 extends globalThis.EnumItem {
			Name: "Size28";
			Value: 10;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size28: Size28;

		export interface Size32 extends globalThis.EnumItem {
			Name: "Size32";
			Value: 11;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size32: Size32;

		export interface Size42 extends globalThis.EnumItem {
			Name: "Size42";
			Value: 12;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size42: Size42;

		export interface Size60 extends globalThis.EnumItem {
			Name: "Size60";
			Value: 13;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size60: Size60;

		export interface Size96 extends globalThis.EnumItem {
			Name: "Size96";
			Value: 14;
			EnumType: typeof globalThis.Enum.FontSize;
		}

		export const Size96: Size96;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FontSize>;
	}
	export type FontSize = FontSize.Size8 | FontSize.Size9 | FontSize.Size10 | FontSize.Size11 | FontSize.Size12 | FontSize.Size14 | FontSize.Size18 | FontSize.Size24 | FontSize.Size36 | FontSize.Size48 | FontSize.Size28 | FontSize.Size32 | FontSize.Size42 | FontSize.Size60 | FontSize.Size96;

	export namespace FontStyle {
		export interface Normal extends globalThis.EnumItem {
			Name: "Normal";
			Value: 0;
			EnumType: typeof globalThis.Enum.FontStyle;
		}

		export const Normal: Normal;

		export interface Italic extends globalThis.EnumItem {
			Name: "Italic";
			Value: 1;
			EnumType: typeof globalThis.Enum.FontStyle;
		}

		export const Italic: Italic;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FontStyle>;
	}
	export type FontStyle = FontStyle.Normal | FontStyle.Italic;

	export namespace FontWeight {
		export interface Thin extends globalThis.EnumItem {
			Name: "Thin";
			Value: 100;
			EnumType: typeof globalThis.Enum.FontWeight;
		}

		export const Thin: Thin;

		export interface ExtraLight extends globalThis.EnumItem {
			Name: "ExtraLight";
			Value: 200;
			EnumType: typeof globalThis.Enum.FontWeight;
		}

		export const ExtraLight: ExtraLight;

		export interface Light extends globalThis.EnumItem {
			Name: "Light";
			Value: 300;
			EnumType: typeof globalThis.Enum.FontWeight;
		}

		export const Light: Light;

		export interface Regular extends globalThis.EnumItem {
			Name: "Regular";
			Value: 400;
			EnumType: typeof globalThis.Enum.FontWeight;
		}

		export const Regular: Regular;

		export interface Medium extends globalThis.EnumItem {
			Name: "Medium";
			Value: 500;
			EnumType: typeof globalThis.Enum.FontWeight;
		}

		export const Medium: Medium;

		export interface SemiBold extends globalThis.EnumItem {
			Name: "SemiBold";
			Value: 600;
			EnumType: typeof globalThis.Enum.FontWeight;
		}

		export const SemiBold: SemiBold;

		export interface Bold extends globalThis.EnumItem {
			Name: "Bold";
			Value: 700;
			EnumType: typeof globalThis.Enum.FontWeight;
		}

		export const Bold: Bold;

		export interface ExtraBold extends globalThis.EnumItem {
			Name: "ExtraBold";
			Value: 800;
			EnumType: typeof globalThis.Enum.FontWeight;
		}

		export const ExtraBold: ExtraBold;

		export interface Heavy extends globalThis.EnumItem {
			Name: "Heavy";
			Value: 900;
			EnumType: typeof globalThis.Enum.FontWeight;
		}

		export const Heavy: Heavy;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FontWeight>;
	}
	export type FontWeight = FontWeight.Thin | FontWeight.ExtraLight | FontWeight.Light | FontWeight.Regular | FontWeight.Medium | FontWeight.SemiBold | FontWeight.Bold | FontWeight.ExtraBold | FontWeight.Heavy;

	export namespace ForceLimitMode {
		export interface Magnitude extends globalThis.EnumItem {
			Name: "Magnitude";
			Value: 0;
			EnumType: typeof globalThis.Enum.ForceLimitMode;
		}

		export const Magnitude: Magnitude;

		export interface PerAxis extends globalThis.EnumItem {
			Name: "PerAxis";
			Value: 1;
			EnumType: typeof globalThis.Enum.ForceLimitMode;
		}

		export const PerAxis: PerAxis;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ForceLimitMode>;
	}
	export type ForceLimitMode = ForceLimitMode.Magnitude | ForceLimitMode.PerAxis;

	export namespace FormFactor {
		export interface Symmetric extends globalThis.EnumItem {
			Name: "Symmetric";
			Value: 0;
			EnumType: typeof globalThis.Enum.FormFactor;
		}

		export const Symmetric: Symmetric;

		export interface Brick extends globalThis.EnumItem {
			Name: "Brick";
			Value: 1;
			EnumType: typeof globalThis.Enum.FormFactor;
		}

		export const Brick: Brick;
		/** @deprecated renamed to Brick */
		export const Block: Brick;

		export interface Plate extends globalThis.EnumItem {
			Name: "Plate";
			Value: 2;
			EnumType: typeof globalThis.Enum.FormFactor;
		}

		export const Plate: Plate;

		export interface Custom extends globalThis.EnumItem {
			Name: "Custom";
			Value: 3;
			EnumType: typeof globalThis.Enum.FormFactor;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FormFactor>;
	}
	export type FormFactor = FormFactor.Symmetric | FormFactor.Brick | FormFactor.Plate | FormFactor.Custom;

	export namespace FrameStyle {
		export interface Custom extends globalThis.EnumItem {
			Name: "Custom";
			Value: 0;
			EnumType: typeof globalThis.Enum.FrameStyle;
		}

		export const Custom: Custom;

		export interface ChatBlue extends globalThis.EnumItem {
			Name: "ChatBlue";
			Value: 1;
			EnumType: typeof globalThis.Enum.FrameStyle;
		}

		export const ChatBlue: ChatBlue;

		export interface RobloxSquare extends globalThis.EnumItem {
			Name: "RobloxSquare";
			Value: 2;
			EnumType: typeof globalThis.Enum.FrameStyle;
		}

		export const RobloxSquare: RobloxSquare;

		export interface RobloxRound extends globalThis.EnumItem {
			Name: "RobloxRound";
			Value: 3;
			EnumType: typeof globalThis.Enum.FrameStyle;
		}

		export const RobloxRound: RobloxRound;

		export interface ChatGreen extends globalThis.EnumItem {
			Name: "ChatGreen";
			Value: 4;
			EnumType: typeof globalThis.Enum.FrameStyle;
		}

		export const ChatGreen: ChatGreen;

		export interface ChatRed extends globalThis.EnumItem {
			Name: "ChatRed";
			Value: 5;
			EnumType: typeof globalThis.Enum.FrameStyle;
		}

		export const ChatRed: ChatRed;

		export interface DropShadow extends globalThis.EnumItem {
			Name: "DropShadow";
			Value: 6;
			EnumType: typeof globalThis.Enum.FrameStyle;
		}

		export const DropShadow: DropShadow;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FrameStyle>;
	}
	export type FrameStyle = FrameStyle.Custom | FrameStyle.ChatBlue | FrameStyle.RobloxSquare | FrameStyle.RobloxRound | FrameStyle.ChatGreen | FrameStyle.ChatRed | FrameStyle.DropShadow;

	export namespace FramerateManagerMode {
		export interface Automatic extends globalThis.EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof globalThis.Enum.FramerateManagerMode;
		}

		export const Automatic: Automatic;

		export interface On extends globalThis.EnumItem {
			Name: "On";
			Value: 1;
			EnumType: typeof globalThis.Enum.FramerateManagerMode;
		}

		export const On: On;

		export interface Off extends globalThis.EnumItem {
			Name: "Off";
			Value: 2;
			EnumType: typeof globalThis.Enum.FramerateManagerMode;
		}

		export const Off: Off;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FramerateManagerMode>;
	}
	export type FramerateManagerMode = FramerateManagerMode.Automatic | FramerateManagerMode.On | FramerateManagerMode.Off;

	export namespace FriendRequestEvent {
		export interface Issue extends globalThis.EnumItem {
			Name: "Issue";
			Value: 0;
			EnumType: typeof globalThis.Enum.FriendRequestEvent;
		}

		export const Issue: Issue;

		export interface Revoke extends globalThis.EnumItem {
			Name: "Revoke";
			Value: 1;
			EnumType: typeof globalThis.Enum.FriendRequestEvent;
		}

		export const Revoke: Revoke;

		export interface Accept extends globalThis.EnumItem {
			Name: "Accept";
			Value: 2;
			EnumType: typeof globalThis.Enum.FriendRequestEvent;
		}

		export const Accept: Accept;

		export interface Deny extends globalThis.EnumItem {
			Name: "Deny";
			Value: 3;
			EnumType: typeof globalThis.Enum.FriendRequestEvent;
		}

		export const Deny: Deny;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FriendRequestEvent>;
	}
	export type FriendRequestEvent = FriendRequestEvent.Issue | FriendRequestEvent.Revoke | FriendRequestEvent.Accept | FriendRequestEvent.Deny;

	export namespace FriendStatus {
		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof globalThis.Enum.FriendStatus;
		}

		export const Unknown: Unknown;

		export interface NotFriend extends globalThis.EnumItem {
			Name: "NotFriend";
			Value: 1;
			EnumType: typeof globalThis.Enum.FriendStatus;
		}

		export const NotFriend: NotFriend;

		export interface Friend extends globalThis.EnumItem {
			Name: "Friend";
			Value: 2;
			EnumType: typeof globalThis.Enum.FriendStatus;
		}

		export const Friend: Friend;

		export interface FriendRequestSent extends globalThis.EnumItem {
			Name: "FriendRequestSent";
			Value: 3;
			EnumType: typeof globalThis.Enum.FriendStatus;
		}

		export const FriendRequestSent: FriendRequestSent;

		export interface FriendRequestReceived extends globalThis.EnumItem {
			Name: "FriendRequestReceived";
			Value: 4;
			EnumType: typeof globalThis.Enum.FriendStatus;
		}

		export const FriendRequestReceived: FriendRequestReceived;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FriendStatus>;
	}
	export type FriendStatus = FriendStatus.Unknown | FriendStatus.NotFriend | FriendStatus.Friend | FriendStatus.FriendRequestSent | FriendStatus.FriendRequestReceived;

	export namespace FunctionalTestResult {
		export interface Passed extends globalThis.EnumItem {
			Name: "Passed";
			Value: 0;
			EnumType: typeof globalThis.Enum.FunctionalTestResult;
		}

		export const Passed: Passed;

		export interface Warning extends globalThis.EnumItem {
			Name: "Warning";
			Value: 1;
			EnumType: typeof globalThis.Enum.FunctionalTestResult;
		}

		export const Warning: Warning;

		export interface Error extends globalThis.EnumItem {
			Name: "Error";
			Value: 2;
			EnumType: typeof globalThis.Enum.FunctionalTestResult;
		}

		export const Error: Error;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.FunctionalTestResult>;
	}
	export type FunctionalTestResult = FunctionalTestResult.Passed | FunctionalTestResult.Warning | FunctionalTestResult.Error;

	export namespace GameAvatarType {
		export interface R6 extends globalThis.EnumItem {
			Name: "R6";
			Value: 0;
			EnumType: typeof globalThis.Enum.GameAvatarType;
		}

		export const R6: R6;

		export interface R15 extends globalThis.EnumItem {
			Name: "R15";
			Value: 1;
			EnumType: typeof globalThis.Enum.GameAvatarType;
		}

		export const R15: R15;

		export interface PlayerChoice extends globalThis.EnumItem {
			Name: "PlayerChoice";
			Value: 2;
			EnumType: typeof globalThis.Enum.GameAvatarType;
		}

		export const PlayerChoice: PlayerChoice;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.GameAvatarType>;
	}
	export type GameAvatarType = GameAvatarType.R6 | GameAvatarType.R15 | GameAvatarType.PlayerChoice;

	export namespace GearGenreSetting {
		export interface AllGenres extends globalThis.EnumItem {
			Name: "AllGenres";
			Value: 0;
			EnumType: typeof globalThis.Enum.GearGenreSetting;
		}

		export const AllGenres: AllGenres;

		export interface MatchingGenreOnly extends globalThis.EnumItem {
			Name: "MatchingGenreOnly";
			Value: 1;
			EnumType: typeof globalThis.Enum.GearGenreSetting;
		}

		export const MatchingGenreOnly: MatchingGenreOnly;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.GearGenreSetting>;
	}
	export type GearGenreSetting = GearGenreSetting.AllGenres | GearGenreSetting.MatchingGenreOnly;

	export namespace GearType {
		export interface MeleeWeapons extends globalThis.EnumItem {
			Name: "MeleeWeapons";
			Value: 0;
			EnumType: typeof globalThis.Enum.GearType;
		}

		export const MeleeWeapons: MeleeWeapons;

		export interface RangedWeapons extends globalThis.EnumItem {
			Name: "RangedWeapons";
			Value: 1;
			EnumType: typeof globalThis.Enum.GearType;
		}

		export const RangedWeapons: RangedWeapons;

		export interface Explosives extends globalThis.EnumItem {
			Name: "Explosives";
			Value: 2;
			EnumType: typeof globalThis.Enum.GearType;
		}

		export const Explosives: Explosives;

		export interface PowerUps extends globalThis.EnumItem {
			Name: "PowerUps";
			Value: 3;
			EnumType: typeof globalThis.Enum.GearType;
		}

		export const PowerUps: PowerUps;

		export interface NavigationEnhancers extends globalThis.EnumItem {
			Name: "NavigationEnhancers";
			Value: 4;
			EnumType: typeof globalThis.Enum.GearType;
		}

		export const NavigationEnhancers: NavigationEnhancers;

		export interface MusicalInstruments extends globalThis.EnumItem {
			Name: "MusicalInstruments";
			Value: 5;
			EnumType: typeof globalThis.Enum.GearType;
		}

		export const MusicalInstruments: MusicalInstruments;

		export interface SocialItems extends globalThis.EnumItem {
			Name: "SocialItems";
			Value: 6;
			EnumType: typeof globalThis.Enum.GearType;
		}

		export const SocialItems: SocialItems;

		export interface BuildingTools extends globalThis.EnumItem {
			Name: "BuildingTools";
			Value: 7;
			EnumType: typeof globalThis.Enum.GearType;
		}

		export const BuildingTools: BuildingTools;

		export interface Transport extends globalThis.EnumItem {
			Name: "Transport";
			Value: 8;
			EnumType: typeof globalThis.Enum.GearType;
		}

		export const Transport: Transport;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.GearType>;
	}
	export type GearType = GearType.MeleeWeapons | GearType.RangedWeapons | GearType.Explosives | GearType.PowerUps | GearType.NavigationEnhancers | GearType.MusicalInstruments | GearType.SocialItems | GearType.BuildingTools | GearType.Transport;

	export namespace Genre {
		export interface All extends globalThis.EnumItem {
			Name: "All";
			Value: 0;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const All: All;

		export interface TownAndCity extends globalThis.EnumItem {
			Name: "TownAndCity";
			Value: 1;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const TownAndCity: TownAndCity;

		export interface Fantasy extends globalThis.EnumItem {
			Name: "Fantasy";
			Value: 2;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const Fantasy: Fantasy;

		export interface SciFi extends globalThis.EnumItem {
			Name: "SciFi";
			Value: 3;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const SciFi: SciFi;

		export interface Ninja extends globalThis.EnumItem {
			Name: "Ninja";
			Value: 4;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const Ninja: Ninja;

		export interface Scary extends globalThis.EnumItem {
			Name: "Scary";
			Value: 5;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const Scary: Scary;

		export interface Pirate extends globalThis.EnumItem {
			Name: "Pirate";
			Value: 6;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const Pirate: Pirate;

		export interface Adventure extends globalThis.EnumItem {
			Name: "Adventure";
			Value: 7;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const Adventure: Adventure;

		export interface Sports extends globalThis.EnumItem {
			Name: "Sports";
			Value: 8;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const Sports: Sports;

		export interface Funny extends globalThis.EnumItem {
			Name: "Funny";
			Value: 9;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const Funny: Funny;

		export interface WildWest extends globalThis.EnumItem {
			Name: "WildWest";
			Value: 10;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const WildWest: WildWest;

		export interface War extends globalThis.EnumItem {
			Name: "War";
			Value: 11;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const War: War;

		export interface SkatePark extends globalThis.EnumItem {
			Name: "SkatePark";
			Value: 12;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const SkatePark: SkatePark;

		export interface Tutorial extends globalThis.EnumItem {
			Name: "Tutorial";
			Value: 13;
			EnumType: typeof globalThis.Enum.Genre;
		}

		export const Tutorial: Tutorial;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.Genre>;
	}
	export type Genre = Genre.All | Genre.TownAndCity | Genre.Fantasy | Genre.SciFi | Genre.Ninja | Genre.Scary | Genre.Pirate | Genre.Adventure | Genre.Sports | Genre.Funny | Genre.WildWest | Genre.War | Genre.SkatePark | Genre.Tutorial;

	export namespace GraphicsMode {
		export interface Automatic extends globalThis.EnumItem {
			Name: "Automatic";
			Value: 1;
			EnumType: typeof globalThis.Enum.GraphicsMode;
		}

		export const Automatic: Automatic;

		export interface Direct3D11 extends globalThis.EnumItem {
			Name: "Direct3D11";
			Value: 2;
			EnumType: typeof globalThis.Enum.GraphicsMode;
		}

		export const Direct3D11: Direct3D11;

		export interface OpenGL extends globalThis.EnumItem {
			Name: "OpenGL";
			Value: 4;
			EnumType: typeof globalThis.Enum.GraphicsMode;
		}

		export const OpenGL: OpenGL;

		export interface Metal extends globalThis.EnumItem {
			Name: "Metal";
			Value: 5;
			EnumType: typeof globalThis.Enum.GraphicsMode;
		}

		export const Metal: Metal;

		export interface Vulkan extends globalThis.EnumItem {
			Name: "Vulkan";
			Value: 6;
			EnumType: typeof globalThis.Enum.GraphicsMode;
		}

		export const Vulkan: Vulkan;

		export interface NoGraphics extends globalThis.EnumItem {
			Name: "NoGraphics";
			Value: 9;
			EnumType: typeof globalThis.Enum.GraphicsMode;
		}

		export const NoGraphics: NoGraphics;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.GraphicsMode>;
	}
	export type GraphicsMode = GraphicsMode.Automatic | GraphicsMode.Direct3D11 | GraphicsMode.OpenGL | GraphicsMode.Metal | GraphicsMode.Vulkan | GraphicsMode.NoGraphics;

	export namespace GuiState {
		export interface Idle extends globalThis.EnumItem {
			Name: "Idle";
			Value: 0;
			EnumType: typeof globalThis.Enum.GuiState;
		}

		export const Idle: Idle;

		export interface Hover extends globalThis.EnumItem {
			Name: "Hover";
			Value: 1;
			EnumType: typeof globalThis.Enum.GuiState;
		}

		export const Hover: Hover;

		export interface Press extends globalThis.EnumItem {
			Name: "Press";
			Value: 2;
			EnumType: typeof globalThis.Enum.GuiState;
		}

		export const Press: Press;

		export interface NonInteractable extends globalThis.EnumItem {
			Name: "NonInteractable";
			Value: 3;
			EnumType: typeof globalThis.Enum.GuiState;
		}

		export const NonInteractable: NonInteractable;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.GuiState>;
	}
	export type GuiState = GuiState.Idle | GuiState.Hover | GuiState.Press | GuiState.NonInteractable;

	export namespace GuiType {
		export interface Core extends globalThis.EnumItem {
			Name: "Core";
			Value: 0;
			EnumType: typeof globalThis.Enum.GuiType;
		}

		export const Core: Core;

		export interface Custom extends globalThis.EnumItem {
			Name: "Custom";
			Value: 1;
			EnumType: typeof globalThis.Enum.GuiType;
		}

		export const Custom: Custom;

		export interface CustomBillboards extends globalThis.EnumItem {
			Name: "CustomBillboards";
			Value: 3;
			EnumType: typeof globalThis.Enum.GuiType;
		}

		export const CustomBillboards: CustomBillboards;

		export interface PlayerNameplates extends globalThis.EnumItem {
			Name: "PlayerNameplates";
			Value: 2;
			EnumType: typeof globalThis.Enum.GuiType;
		}

		export const PlayerNameplates: PlayerNameplates;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.GuiType>;
	}
	export type GuiType = GuiType.Core | GuiType.Custom | GuiType.CustomBillboards | GuiType.PlayerNameplates;

	export namespace HandlesStyle {
		export interface Resize extends globalThis.EnumItem {
			Name: "Resize";
			Value: 0;
			EnumType: typeof globalThis.Enum.HandlesStyle;
		}

		export const Resize: Resize;

		export interface Movement extends globalThis.EnumItem {
			Name: "Movement";
			Value: 1;
			EnumType: typeof globalThis.Enum.HandlesStyle;
		}

		export const Movement: Movement;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HandlesStyle>;
	}
	export type HandlesStyle = HandlesStyle.Resize | HandlesStyle.Movement;

	export namespace HighlightDepthMode {
		export interface AlwaysOnTop extends globalThis.EnumItem {
			Name: "AlwaysOnTop";
			Value: 0;
			EnumType: typeof globalThis.Enum.HighlightDepthMode;
		}

		export const AlwaysOnTop: AlwaysOnTop;

		export interface Occluded extends globalThis.EnumItem {
			Name: "Occluded";
			Value: 1;
			EnumType: typeof globalThis.Enum.HighlightDepthMode;
		}

		export const Occluded: Occluded;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HighlightDepthMode>;
	}
	export type HighlightDepthMode = HighlightDepthMode.AlwaysOnTop | HighlightDepthMode.Occluded;

	export namespace HorizontalAlignment {
		export interface Center extends globalThis.EnumItem {
			Name: "Center";
			Value: 0;
			EnumType: typeof globalThis.Enum.HorizontalAlignment;
		}

		export const Center: Center;

		export interface Left extends globalThis.EnumItem {
			Name: "Left";
			Value: 1;
			EnumType: typeof globalThis.Enum.HorizontalAlignment;
		}

		export const Left: Left;

		export interface Right extends globalThis.EnumItem {
			Name: "Right";
			Value: 2;
			EnumType: typeof globalThis.Enum.HorizontalAlignment;
		}

		export const Right: Right;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HorizontalAlignment>;
	}
	export type HorizontalAlignment = HorizontalAlignment.Center | HorizontalAlignment.Left | HorizontalAlignment.Right;

	export namespace HoverAnimateSpeed {
		export interface VerySlow extends globalThis.EnumItem {
			Name: "VerySlow";
			Value: 0;
			EnumType: typeof globalThis.Enum.HoverAnimateSpeed;
		}

		export const VerySlow: VerySlow;

		export interface Slow extends globalThis.EnumItem {
			Name: "Slow";
			Value: 1;
			EnumType: typeof globalThis.Enum.HoverAnimateSpeed;
		}

		export const Slow: Slow;

		export interface Medium extends globalThis.EnumItem {
			Name: "Medium";
			Value: 2;
			EnumType: typeof globalThis.Enum.HoverAnimateSpeed;
		}

		export const Medium: Medium;

		export interface Fast extends globalThis.EnumItem {
			Name: "Fast";
			Value: 3;
			EnumType: typeof globalThis.Enum.HoverAnimateSpeed;
		}

		export const Fast: Fast;

		export interface VeryFast extends globalThis.EnumItem {
			Name: "VeryFast";
			Value: 4;
			EnumType: typeof globalThis.Enum.HoverAnimateSpeed;
		}

		export const VeryFast: VeryFast;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HoverAnimateSpeed>;
	}
	export type HoverAnimateSpeed = HoverAnimateSpeed.VerySlow | HoverAnimateSpeed.Slow | HoverAnimateSpeed.Medium | HoverAnimateSpeed.Fast | HoverAnimateSpeed.VeryFast;

	export namespace HttpCachePolicy {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.HttpCachePolicy;
		}

		export const None: None;

		export interface Full extends globalThis.EnumItem {
			Name: "Full";
			Value: 1;
			EnumType: typeof globalThis.Enum.HttpCachePolicy;
		}

		export const Full: Full;

		export interface DataOnly extends globalThis.EnumItem {
			Name: "DataOnly";
			Value: 2;
			EnumType: typeof globalThis.Enum.HttpCachePolicy;
		}

		export const DataOnly: DataOnly;

		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 3;
			EnumType: typeof globalThis.Enum.HttpCachePolicy;
		}

		export const Default: Default;

		export interface InternalRedirectRefresh extends globalThis.EnumItem {
			Name: "InternalRedirectRefresh";
			Value: 4;
			EnumType: typeof globalThis.Enum.HttpCachePolicy;
		}

		export const InternalRedirectRefresh: InternalRedirectRefresh;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HttpCachePolicy>;
	}
	export type HttpCachePolicy = HttpCachePolicy.None | HttpCachePolicy.Full | HttpCachePolicy.DataOnly | HttpCachePolicy.Default | HttpCachePolicy.InternalRedirectRefresh;

	export namespace HttpContentType {
		export interface ApplicationJson extends globalThis.EnumItem {
			Name: "ApplicationJson";
			Value: 0;
			EnumType: typeof globalThis.Enum.HttpContentType;
		}

		export const ApplicationJson: ApplicationJson;

		export interface ApplicationXml extends globalThis.EnumItem {
			Name: "ApplicationXml";
			Value: 1;
			EnumType: typeof globalThis.Enum.HttpContentType;
		}

		export const ApplicationXml: ApplicationXml;

		export interface ApplicationUrlEncoded extends globalThis.EnumItem {
			Name: "ApplicationUrlEncoded";
			Value: 2;
			EnumType: typeof globalThis.Enum.HttpContentType;
		}

		export const ApplicationUrlEncoded: ApplicationUrlEncoded;

		export interface TextPlain extends globalThis.EnumItem {
			Name: "TextPlain";
			Value: 3;
			EnumType: typeof globalThis.Enum.HttpContentType;
		}

		export const TextPlain: TextPlain;

		export interface TextXml extends globalThis.EnumItem {
			Name: "TextXml";
			Value: 4;
			EnumType: typeof globalThis.Enum.HttpContentType;
		}

		export const TextXml: TextXml;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HttpContentType>;
	}
	export type HttpContentType = HttpContentType.ApplicationJson | HttpContentType.ApplicationXml | HttpContentType.ApplicationUrlEncoded | HttpContentType.TextPlain | HttpContentType.TextXml;

	export namespace HttpError {
		export interface OK extends globalThis.EnumItem {
			Name: "OK";
			Value: 0;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const OK: OK;

		export interface InvalidUrl extends globalThis.EnumItem {
			Name: "InvalidUrl";
			Value: 1;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const InvalidUrl: InvalidUrl;

		export interface DnsResolve extends globalThis.EnumItem {
			Name: "DnsResolve";
			Value: 2;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const DnsResolve: DnsResolve;

		export interface ConnectFail extends globalThis.EnumItem {
			Name: "ConnectFail";
			Value: 3;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const ConnectFail: ConnectFail;

		export interface OutOfMemory extends globalThis.EnumItem {
			Name: "OutOfMemory";
			Value: 4;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const OutOfMemory: OutOfMemory;

		export interface TimedOut extends globalThis.EnumItem {
			Name: "TimedOut";
			Value: 5;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const TimedOut: TimedOut;

		export interface TooManyRedirects extends globalThis.EnumItem {
			Name: "TooManyRedirects";
			Value: 6;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const TooManyRedirects: TooManyRedirects;

		export interface InvalidRedirect extends globalThis.EnumItem {
			Name: "InvalidRedirect";
			Value: 7;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const InvalidRedirect: InvalidRedirect;

		export interface NetFail extends globalThis.EnumItem {
			Name: "NetFail";
			Value: 8;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const NetFail: NetFail;

		export interface Aborted extends globalThis.EnumItem {
			Name: "Aborted";
			Value: 9;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const Aborted: Aborted;

		export interface SslConnectFail extends globalThis.EnumItem {
			Name: "SslConnectFail";
			Value: 10;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const SslConnectFail: SslConnectFail;

		export interface SslVerificationFail extends globalThis.EnumItem {
			Name: "SslVerificationFail";
			Value: 11;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const SslVerificationFail: SslVerificationFail;

		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 12;
			EnumType: typeof globalThis.Enum.HttpError;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HttpError>;
	}
	export type HttpError = HttpError.OK | HttpError.InvalidUrl | HttpError.DnsResolve | HttpError.ConnectFail | HttpError.OutOfMemory | HttpError.TimedOut | HttpError.TooManyRedirects | HttpError.InvalidRedirect | HttpError.NetFail | HttpError.Aborted | HttpError.SslConnectFail | HttpError.SslVerificationFail | HttpError.Unknown;

	export namespace HttpRequestType {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.HttpRequestType;
		}

		export const Default: Default;

		export interface MarketplaceService extends globalThis.EnumItem {
			Name: "MarketplaceService";
			Value: 2;
			EnumType: typeof globalThis.Enum.HttpRequestType;
		}

		export const MarketplaceService: MarketplaceService;

		export interface Players extends globalThis.EnumItem {
			Name: "Players";
			Value: 7;
			EnumType: typeof globalThis.Enum.HttpRequestType;
		}

		export const Players: Players;

		export interface Chat extends globalThis.EnumItem {
			Name: "Chat";
			Value: 15;
			EnumType: typeof globalThis.Enum.HttpRequestType;
		}

		export const Chat: Chat;

		export interface Avatar extends globalThis.EnumItem {
			Name: "Avatar";
			Value: 16;
			EnumType: typeof globalThis.Enum.HttpRequestType;
		}

		export const Avatar: Avatar;

		export interface Analytics extends globalThis.EnumItem {
			Name: "Analytics";
			Value: 23;
			EnumType: typeof globalThis.Enum.HttpRequestType;
		}

		export const Analytics: Analytics;

		export interface Localization extends globalThis.EnumItem {
			Name: "Localization";
			Value: 25;
			EnumType: typeof globalThis.Enum.HttpRequestType;
		}

		export const Localization: Localization;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HttpRequestType>;
	}
	export type HttpRequestType = HttpRequestType.Default | HttpRequestType.MarketplaceService | HttpRequestType.Players | HttpRequestType.Chat | HttpRequestType.Avatar | HttpRequestType.Analytics | HttpRequestType.Localization;

	export namespace HumanoidCollisionType {
		export interface OuterBox extends globalThis.EnumItem {
			Name: "OuterBox";
			Value: 0;
			EnumType: typeof globalThis.Enum.HumanoidCollisionType;
		}

		export const OuterBox: OuterBox;

		export interface InnerBox extends globalThis.EnumItem {
			Name: "InnerBox";
			Value: 1;
			EnumType: typeof globalThis.Enum.HumanoidCollisionType;
		}

		export const InnerBox: InnerBox;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HumanoidCollisionType>;
	}
	export type HumanoidCollisionType = HumanoidCollisionType.OuterBox | HumanoidCollisionType.InnerBox;

	export namespace HumanoidDisplayDistanceType {
		export interface Viewer extends globalThis.EnumItem {
			Name: "Viewer";
			Value: 0;
			EnumType: typeof globalThis.Enum.HumanoidDisplayDistanceType;
		}

		export const Viewer: Viewer;

		export interface Subject extends globalThis.EnumItem {
			Name: "Subject";
			Value: 1;
			EnumType: typeof globalThis.Enum.HumanoidDisplayDistanceType;
		}

		export const Subject: Subject;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 2;
			EnumType: typeof globalThis.Enum.HumanoidDisplayDistanceType;
		}

		export const None: None;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HumanoidDisplayDistanceType>;
	}
	export type HumanoidDisplayDistanceType = HumanoidDisplayDistanceType.Viewer | HumanoidDisplayDistanceType.Subject | HumanoidDisplayDistanceType.None;

	export namespace HumanoidHealthDisplayType {
		export interface DisplayWhenDamaged extends globalThis.EnumItem {
			Name: "DisplayWhenDamaged";
			Value: 0;
			EnumType: typeof globalThis.Enum.HumanoidHealthDisplayType;
		}

		export const DisplayWhenDamaged: DisplayWhenDamaged;

		export interface AlwaysOn extends globalThis.EnumItem {
			Name: "AlwaysOn";
			Value: 1;
			EnumType: typeof globalThis.Enum.HumanoidHealthDisplayType;
		}

		export const AlwaysOn: AlwaysOn;

		export interface AlwaysOff extends globalThis.EnumItem {
			Name: "AlwaysOff";
			Value: 2;
			EnumType: typeof globalThis.Enum.HumanoidHealthDisplayType;
		}

		export const AlwaysOff: AlwaysOff;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HumanoidHealthDisplayType>;
	}
	export type HumanoidHealthDisplayType = HumanoidHealthDisplayType.DisplayWhenDamaged | HumanoidHealthDisplayType.AlwaysOn | HumanoidHealthDisplayType.AlwaysOff;

	export namespace HumanoidOnlySetCollisionsOnStateChange {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.HumanoidOnlySetCollisionsOnStateChange;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.HumanoidOnlySetCollisionsOnStateChange;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.HumanoidOnlySetCollisionsOnStateChange;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HumanoidOnlySetCollisionsOnStateChange>;
	}
	export type HumanoidOnlySetCollisionsOnStateChange = HumanoidOnlySetCollisionsOnStateChange.Default | HumanoidOnlySetCollisionsOnStateChange.Disabled | HumanoidOnlySetCollisionsOnStateChange.Enabled;

	export namespace HumanoidRigType {
		export interface R6 extends globalThis.EnumItem {
			Name: "R6";
			Value: 0;
			EnumType: typeof globalThis.Enum.HumanoidRigType;
		}

		export const R6: R6;

		export interface R15 extends globalThis.EnumItem {
			Name: "R15";
			Value: 1;
			EnumType: typeof globalThis.Enum.HumanoidRigType;
		}

		export const R15: R15;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HumanoidRigType>;
	}
	export type HumanoidRigType = HumanoidRigType.R6 | HumanoidRigType.R15;

	export namespace HumanoidStateMachineMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.HumanoidStateMachineMode;
		}

		export const Default: Default;

		export interface Legacy extends globalThis.EnumItem {
			Name: "Legacy";
			Value: 1;
			EnumType: typeof globalThis.Enum.HumanoidStateMachineMode;
		}

		export const Legacy: Legacy;

		export interface NoStateMachine extends globalThis.EnumItem {
			Name: "NoStateMachine";
			Value: 2;
			EnumType: typeof globalThis.Enum.HumanoidStateMachineMode;
		}

		export const NoStateMachine: NoStateMachine;

		export interface LuaStateMachine extends globalThis.EnumItem {
			Name: "LuaStateMachine";
			Value: 3;
			EnumType: typeof globalThis.Enum.HumanoidStateMachineMode;
		}

		export const LuaStateMachine: LuaStateMachine;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HumanoidStateMachineMode>;
	}
	export type HumanoidStateMachineMode = HumanoidStateMachineMode.Default | HumanoidStateMachineMode.Legacy | HumanoidStateMachineMode.NoStateMachine | HumanoidStateMachineMode.LuaStateMachine;

	export namespace HumanoidStateType {
		export interface FallingDown extends globalThis.EnumItem {
			Name: "FallingDown";
			Value: 0;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const FallingDown: FallingDown;

		export interface Running extends globalThis.EnumItem {
			Name: "Running";
			Value: 8;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const Running: Running;

		export interface RunningNoPhysics extends globalThis.EnumItem {
			Name: "RunningNoPhysics";
			Value: 10;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const RunningNoPhysics: RunningNoPhysics;

		export interface Climbing extends globalThis.EnumItem {
			Name: "Climbing";
			Value: 12;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const Climbing: Climbing;

		export interface StrafingNoPhysics extends globalThis.EnumItem {
			Name: "StrafingNoPhysics";
			Value: 11;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const StrafingNoPhysics: StrafingNoPhysics;

		export interface Ragdoll extends globalThis.EnumItem {
			Name: "Ragdoll";
			Value: 1;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const Ragdoll: Ragdoll;

		export interface GettingUp extends globalThis.EnumItem {
			Name: "GettingUp";
			Value: 2;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const GettingUp: GettingUp;

		export interface Jumping extends globalThis.EnumItem {
			Name: "Jumping";
			Value: 3;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const Jumping: Jumping;

		export interface Landed extends globalThis.EnumItem {
			Name: "Landed";
			Value: 7;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const Landed: Landed;

		export interface Flying extends globalThis.EnumItem {
			Name: "Flying";
			Value: 6;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const Flying: Flying;

		export interface Freefall extends globalThis.EnumItem {
			Name: "Freefall";
			Value: 5;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const Freefall: Freefall;

		export interface Seated extends globalThis.EnumItem {
			Name: "Seated";
			Value: 13;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const Seated: Seated;

		export interface PlatformStanding extends globalThis.EnumItem {
			Name: "PlatformStanding";
			Value: 14;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const PlatformStanding: PlatformStanding;

		export interface Dead extends globalThis.EnumItem {
			Name: "Dead";
			Value: 15;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const Dead: Dead;

		export interface Swimming extends globalThis.EnumItem {
			Name: "Swimming";
			Value: 4;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const Swimming: Swimming;

		export interface Physics extends globalThis.EnumItem {
			Name: "Physics";
			Value: 16;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const Physics: Physics;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 18;
			EnumType: typeof globalThis.Enum.HumanoidStateType;
		}

		export const None: None;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.HumanoidStateType>;
	}
	export type HumanoidStateType = HumanoidStateType.FallingDown | HumanoidStateType.Running | HumanoidStateType.RunningNoPhysics | HumanoidStateType.Climbing | HumanoidStateType.StrafingNoPhysics | HumanoidStateType.Ragdoll | HumanoidStateType.GettingUp | HumanoidStateType.Jumping | HumanoidStateType.Landed | HumanoidStateType.Flying | HumanoidStateType.Freefall | HumanoidStateType.Seated | HumanoidStateType.PlatformStanding | HumanoidStateType.Dead | HumanoidStateType.Swimming | HumanoidStateType.Physics | HumanoidStateType.None;

	export namespace IKCollisionsMode {
		export interface NoCollisions extends globalThis.EnumItem {
			Name: "NoCollisions";
			Value: 0;
			EnumType: typeof globalThis.Enum.IKCollisionsMode;
		}

		export const NoCollisions: NoCollisions;

		export interface OtherMechanismsAnchored extends globalThis.EnumItem {
			Name: "OtherMechanismsAnchored";
			Value: 1;
			EnumType: typeof globalThis.Enum.IKCollisionsMode;
		}

		export const OtherMechanismsAnchored: OtherMechanismsAnchored;

		export interface IncludeContactedMechanisms extends globalThis.EnumItem {
			Name: "IncludeContactedMechanisms";
			Value: 2;
			EnumType: typeof globalThis.Enum.IKCollisionsMode;
		}

		export const IncludeContactedMechanisms: IncludeContactedMechanisms;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.IKCollisionsMode>;
	}
	export type IKCollisionsMode = IKCollisionsMode.NoCollisions | IKCollisionsMode.OtherMechanismsAnchored | IKCollisionsMode.IncludeContactedMechanisms;

	export namespace IKControlConstraintSupport {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.IKControlConstraintSupport;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.IKControlConstraintSupport;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.IKControlConstraintSupport;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.IKControlConstraintSupport>;
	}
	export type IKControlConstraintSupport = IKControlConstraintSupport.Default | IKControlConstraintSupport.Disabled | IKControlConstraintSupport.Enabled;

	export namespace IKControlType {
		export interface Transform extends globalThis.EnumItem {
			Name: "Transform";
			Value: 0;
			EnumType: typeof globalThis.Enum.IKControlType;
		}

		export const Transform: Transform;

		export interface Position extends globalThis.EnumItem {
			Name: "Position";
			Value: 1;
			EnumType: typeof globalThis.Enum.IKControlType;
		}

		export const Position: Position;

		export interface Rotation extends globalThis.EnumItem {
			Name: "Rotation";
			Value: 2;
			EnumType: typeof globalThis.Enum.IKControlType;
		}

		export const Rotation: Rotation;

		export interface LookAt extends globalThis.EnumItem {
			Name: "LookAt";
			Value: 3;
			EnumType: typeof globalThis.Enum.IKControlType;
		}

		export const LookAt: LookAt;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.IKControlType>;
	}
	export type IKControlType = IKControlType.Transform | IKControlType.Position | IKControlType.Rotation | IKControlType.LookAt;

	export namespace IXPLoadingStatus {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.IXPLoadingStatus;
		}

		export const None: None;

		export interface Pending extends globalThis.EnumItem {
			Name: "Pending";
			Value: 1;
			EnumType: typeof globalThis.Enum.IXPLoadingStatus;
		}

		export const Pending: Pending;

		export interface Initialized extends globalThis.EnumItem {
			Name: "Initialized";
			Value: 2;
			EnumType: typeof globalThis.Enum.IXPLoadingStatus;
		}

		export const Initialized: Initialized;

		export interface ErrorTimedOut extends globalThis.EnumItem {
			Name: "ErrorTimedOut";
			Value: 6;
			EnumType: typeof globalThis.Enum.IXPLoadingStatus;
		}

		export const ErrorTimedOut: ErrorTimedOut;

		export interface ErrorConnection extends globalThis.EnumItem {
			Name: "ErrorConnection";
			Value: 4;
			EnumType: typeof globalThis.Enum.IXPLoadingStatus;
		}

		export const ErrorConnection: ErrorConnection;

		export interface ErrorJsonParse extends globalThis.EnumItem {
			Name: "ErrorJsonParse";
			Value: 5;
			EnumType: typeof globalThis.Enum.IXPLoadingStatus;
		}

		export const ErrorJsonParse: ErrorJsonParse;

		export interface ErrorInvalidUser extends globalThis.EnumItem {
			Name: "ErrorInvalidUser";
			Value: 3;
			EnumType: typeof globalThis.Enum.IXPLoadingStatus;
		}

		export const ErrorInvalidUser: ErrorInvalidUser;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.IXPLoadingStatus>;
	}
	export type IXPLoadingStatus = IXPLoadingStatus.None | IXPLoadingStatus.Pending | IXPLoadingStatus.Initialized | IXPLoadingStatus.ErrorTimedOut | IXPLoadingStatus.ErrorConnection | IXPLoadingStatus.ErrorJsonParse | IXPLoadingStatus.ErrorInvalidUser;

	export namespace InOut {
		export interface Edge extends globalThis.EnumItem {
			Name: "Edge";
			Value: 0;
			EnumType: typeof globalThis.Enum.InOut;
		}

		export const Edge: Edge;

		export interface Inset extends globalThis.EnumItem {
			Name: "Inset";
			Value: 1;
			EnumType: typeof globalThis.Enum.InOut;
		}

		export const Inset: Inset;

		export interface Center extends globalThis.EnumItem {
			Name: "Center";
			Value: 2;
			EnumType: typeof globalThis.Enum.InOut;
		}

		export const Center: Center;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.InOut>;
	}
	export type InOut = InOut.Edge | InOut.Inset | InOut.Center;

	export namespace InfoType {
		export interface Asset extends globalThis.EnumItem {
			Name: "Asset";
			Value: 0;
			EnumType: typeof globalThis.Enum.InfoType;
		}

		export const Asset: Asset;

		export interface Product extends globalThis.EnumItem {
			Name: "Product";
			Value: 1;
			EnumType: typeof globalThis.Enum.InfoType;
		}

		export const Product: Product;

		export interface GamePass extends globalThis.EnumItem {
			Name: "GamePass";
			Value: 2;
			EnumType: typeof globalThis.Enum.InfoType;
		}

		export const GamePass: GamePass;

		export interface Subscription extends globalThis.EnumItem {
			Name: "Subscription";
			Value: 3;
			EnumType: typeof globalThis.Enum.InfoType;
		}

		export const Subscription: Subscription;

		export interface Bundle extends globalThis.EnumItem {
			Name: "Bundle";
			Value: 4;
			EnumType: typeof globalThis.Enum.InfoType;
		}

		export const Bundle: Bundle;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.InfoType>;
	}
	export type InfoType = InfoType.Asset | InfoType.Product | InfoType.GamePass | InfoType.Subscription | InfoType.Bundle;

	export namespace InitialDockState {
		export interface Top extends globalThis.EnumItem {
			Name: "Top";
			Value: 0;
			EnumType: typeof globalThis.Enum.InitialDockState;
		}

		export const Top: Top;

		export interface Bottom extends globalThis.EnumItem {
			Name: "Bottom";
			Value: 1;
			EnumType: typeof globalThis.Enum.InitialDockState;
		}

		export const Bottom: Bottom;

		export interface Left extends globalThis.EnumItem {
			Name: "Left";
			Value: 2;
			EnumType: typeof globalThis.Enum.InitialDockState;
		}

		export const Left: Left;

		export interface Right extends globalThis.EnumItem {
			Name: "Right";
			Value: 3;
			EnumType: typeof globalThis.Enum.InitialDockState;
		}

		export const Right: Right;

		export interface Float extends globalThis.EnumItem {
			Name: "Float";
			Value: 4;
			EnumType: typeof globalThis.Enum.InitialDockState;
		}

		export const Float: Float;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.InitialDockState>;
	}
	export type InitialDockState = InitialDockState.Top | InitialDockState.Bottom | InitialDockState.Left | InitialDockState.Right | InitialDockState.Float;

	export namespace InputType {
		export interface NoInput extends globalThis.EnumItem {
			Name: "NoInput";
			Value: 0;
			EnumType: typeof globalThis.Enum.InputType;
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

		export interface Constant extends globalThis.EnumItem {
			Name: "Constant";
			Value: 12;
			EnumType: typeof globalThis.Enum.InputType;
		}

		export const Constant: Constant;

		export interface Sin extends globalThis.EnumItem {
			Name: "Sin";
			Value: 13;
			EnumType: typeof globalThis.Enum.InputType;
		}

		export const Sin: Sin;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.InputType>;
	}
	export type InputType = InputType.NoInput | InputType.Constant | InputType.Sin;

	export namespace InterpolationThrottlingMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.InterpolationThrottlingMode;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.InterpolationThrottlingMode;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.InterpolationThrottlingMode;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.InterpolationThrottlingMode>;
	}
	export type InterpolationThrottlingMode = InterpolationThrottlingMode.Default | InterpolationThrottlingMode.Disabled | InterpolationThrottlingMode.Enabled;

	export namespace JointCreationMode {
		export interface All extends globalThis.EnumItem {
			Name: "All";
			Value: 0;
			EnumType: typeof globalThis.Enum.JointCreationMode;
		}

		export const All: All;

		export interface Surface extends globalThis.EnumItem {
			Name: "Surface";
			Value: 1;
			EnumType: typeof globalThis.Enum.JointCreationMode;
		}

		export const Surface: Surface;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 2;
			EnumType: typeof globalThis.Enum.JointCreationMode;
		}

		export const None: None;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.JointCreationMode>;
	}
	export type JointCreationMode = JointCreationMode.All | JointCreationMode.Surface | JointCreationMode.None;

	export namespace KeyCode {
		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Unknown: Unknown;

		export interface Backspace extends globalThis.EnumItem {
			Name: "Backspace";
			Value: 8;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Backspace: Backspace;

		export interface Tab extends globalThis.EnumItem {
			Name: "Tab";
			Value: 9;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Tab: Tab;

		export interface Clear extends globalThis.EnumItem {
			Name: "Clear";
			Value: 12;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Clear: Clear;

		export interface Return extends globalThis.EnumItem {
			Name: "Return";
			Value: 13;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Return: Return;

		export interface Pause extends globalThis.EnumItem {
			Name: "Pause";
			Value: 19;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Pause: Pause;

		export interface Escape extends globalThis.EnumItem {
			Name: "Escape";
			Value: 27;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Escape: Escape;

		export interface Space extends globalThis.EnumItem {
			Name: "Space";
			Value: 32;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Space: Space;

		export interface QuotedDouble extends globalThis.EnumItem {
			Name: "QuotedDouble";
			Value: 34;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const QuotedDouble: QuotedDouble;

		export interface Hash extends globalThis.EnumItem {
			Name: "Hash";
			Value: 35;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Hash: Hash;

		export interface Dollar extends globalThis.EnumItem {
			Name: "Dollar";
			Value: 36;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Dollar: Dollar;

		export interface Percent extends globalThis.EnumItem {
			Name: "Percent";
			Value: 37;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Percent: Percent;

		export interface Ampersand extends globalThis.EnumItem {
			Name: "Ampersand";
			Value: 38;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Ampersand: Ampersand;

		export interface Quote extends globalThis.EnumItem {
			Name: "Quote";
			Value: 39;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Quote: Quote;

		export interface LeftParenthesis extends globalThis.EnumItem {
			Name: "LeftParenthesis";
			Value: 40;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const LeftParenthesis: LeftParenthesis;

		export interface RightParenthesis extends globalThis.EnumItem {
			Name: "RightParenthesis";
			Value: 41;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const RightParenthesis: RightParenthesis;

		export interface Asterisk extends globalThis.EnumItem {
			Name: "Asterisk";
			Value: 42;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Asterisk: Asterisk;

		export interface Plus extends globalThis.EnumItem {
			Name: "Plus";
			Value: 43;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Plus: Plus;

		export interface Comma extends globalThis.EnumItem {
			Name: "Comma";
			Value: 44;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Comma: Comma;

		export interface Minus extends globalThis.EnumItem {
			Name: "Minus";
			Value: 45;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Minus: Minus;

		export interface Period extends globalThis.EnumItem {
			Name: "Period";
			Value: 46;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Period: Period;

		export interface Slash extends globalThis.EnumItem {
			Name: "Slash";
			Value: 47;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Slash: Slash;

		export interface Zero extends globalThis.EnumItem {
			Name: "Zero";
			Value: 48;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Zero: Zero;

		export interface One extends globalThis.EnumItem {
			Name: "One";
			Value: 49;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const One: One;

		export interface Two extends globalThis.EnumItem {
			Name: "Two";
			Value: 50;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Two: Two;

		export interface Three extends globalThis.EnumItem {
			Name: "Three";
			Value: 51;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Three: Three;

		export interface Four extends globalThis.EnumItem {
			Name: "Four";
			Value: 52;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Four: Four;

		export interface Five extends globalThis.EnumItem {
			Name: "Five";
			Value: 53;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Five: Five;

		export interface Six extends globalThis.EnumItem {
			Name: "Six";
			Value: 54;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Six: Six;

		export interface Seven extends globalThis.EnumItem {
			Name: "Seven";
			Value: 55;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Seven: Seven;

		export interface Eight extends globalThis.EnumItem {
			Name: "Eight";
			Value: 56;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Eight: Eight;

		export interface Nine extends globalThis.EnumItem {
			Name: "Nine";
			Value: 57;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Nine: Nine;

		export interface Colon extends globalThis.EnumItem {
			Name: "Colon";
			Value: 58;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Colon: Colon;

		export interface Semicolon extends globalThis.EnumItem {
			Name: "Semicolon";
			Value: 59;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Semicolon: Semicolon;

		export interface LessThan extends globalThis.EnumItem {
			Name: "LessThan";
			Value: 60;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const LessThan: LessThan;

		export interface Equals extends globalThis.EnumItem {
			Name: "Equals";
			Value: 61;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Equals: Equals;

		export interface GreaterThan extends globalThis.EnumItem {
			Name: "GreaterThan";
			Value: 62;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const GreaterThan: GreaterThan;

		export interface Question extends globalThis.EnumItem {
			Name: "Question";
			Value: 63;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Question: Question;

		export interface At extends globalThis.EnumItem {
			Name: "At";
			Value: 64;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const At: At;

		export interface LeftBracket extends globalThis.EnumItem {
			Name: "LeftBracket";
			Value: 91;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const LeftBracket: LeftBracket;

		export interface BackSlash extends globalThis.EnumItem {
			Name: "BackSlash";
			Value: 92;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const BackSlash: BackSlash;

		export interface RightBracket extends globalThis.EnumItem {
			Name: "RightBracket";
			Value: 93;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const RightBracket: RightBracket;

		export interface Caret extends globalThis.EnumItem {
			Name: "Caret";
			Value: 94;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Caret: Caret;

		export interface Underscore extends globalThis.EnumItem {
			Name: "Underscore";
			Value: 95;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Underscore: Underscore;

		export interface Backquote extends globalThis.EnumItem {
			Name: "Backquote";
			Value: 96;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Backquote: Backquote;

		export interface A extends globalThis.EnumItem {
			Name: "A";
			Value: 97;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const A: A;

		export interface B extends globalThis.EnumItem {
			Name: "B";
			Value: 98;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const B: B;

		export interface C extends globalThis.EnumItem {
			Name: "C";
			Value: 99;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const C: C;

		export interface D extends globalThis.EnumItem {
			Name: "D";
			Value: 100;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const D: D;

		export interface E extends globalThis.EnumItem {
			Name: "E";
			Value: 101;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const E: E;

		export interface F extends globalThis.EnumItem {
			Name: "F";
			Value: 102;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F: F;

		export interface G extends globalThis.EnumItem {
			Name: "G";
			Value: 103;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const G: G;

		export interface H extends globalThis.EnumItem {
			Name: "H";
			Value: 104;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const H: H;

		export interface I extends globalThis.EnumItem {
			Name: "I";
			Value: 105;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const I: I;

		export interface J extends globalThis.EnumItem {
			Name: "J";
			Value: 106;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const J: J;

		export interface K extends globalThis.EnumItem {
			Name: "K";
			Value: 107;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const K: K;

		export interface L extends globalThis.EnumItem {
			Name: "L";
			Value: 108;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const L: L;

		export interface M extends globalThis.EnumItem {
			Name: "M";
			Value: 109;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const M: M;

		export interface N extends globalThis.EnumItem {
			Name: "N";
			Value: 110;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const N: N;

		export interface O extends globalThis.EnumItem {
			Name: "O";
			Value: 111;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const O: O;

		export interface P extends globalThis.EnumItem {
			Name: "P";
			Value: 112;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const P: P;

		export interface Q extends globalThis.EnumItem {
			Name: "Q";
			Value: 113;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Q: Q;

		export interface R extends globalThis.EnumItem {
			Name: "R";
			Value: 114;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const R: R;

		export interface S extends globalThis.EnumItem {
			Name: "S";
			Value: 115;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const S: S;

		export interface T extends globalThis.EnumItem {
			Name: "T";
			Value: 116;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const T: T;

		export interface U extends globalThis.EnumItem {
			Name: "U";
			Value: 117;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const U: U;

		export interface V extends globalThis.EnumItem {
			Name: "V";
			Value: 118;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const V: V;

		export interface W extends globalThis.EnumItem {
			Name: "W";
			Value: 119;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const W: W;

		export interface X extends globalThis.EnumItem {
			Name: "X";
			Value: 120;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const X: X;

		export interface Y extends globalThis.EnumItem {
			Name: "Y";
			Value: 121;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Y: Y;

		export interface Z extends globalThis.EnumItem {
			Name: "Z";
			Value: 122;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Z: Z;

		export interface LeftCurly extends globalThis.EnumItem {
			Name: "LeftCurly";
			Value: 123;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const LeftCurly: LeftCurly;

		export interface Pipe extends globalThis.EnumItem {
			Name: "Pipe";
			Value: 124;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Pipe: Pipe;

		export interface RightCurly extends globalThis.EnumItem {
			Name: "RightCurly";
			Value: 125;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const RightCurly: RightCurly;

		export interface Tilde extends globalThis.EnumItem {
			Name: "Tilde";
			Value: 126;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Tilde: Tilde;

		export interface Delete extends globalThis.EnumItem {
			Name: "Delete";
			Value: 127;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Delete: Delete;

		export interface KeypadZero extends globalThis.EnumItem {
			Name: "KeypadZero";
			Value: 256;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadZero: KeypadZero;

		export interface KeypadOne extends globalThis.EnumItem {
			Name: "KeypadOne";
			Value: 257;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadOne: KeypadOne;

		export interface KeypadTwo extends globalThis.EnumItem {
			Name: "KeypadTwo";
			Value: 258;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadTwo: KeypadTwo;

		export interface KeypadThree extends globalThis.EnumItem {
			Name: "KeypadThree";
			Value: 259;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadThree: KeypadThree;

		export interface KeypadFour extends globalThis.EnumItem {
			Name: "KeypadFour";
			Value: 260;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadFour: KeypadFour;

		export interface KeypadFive extends globalThis.EnumItem {
			Name: "KeypadFive";
			Value: 261;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadFive: KeypadFive;

		export interface KeypadSix extends globalThis.EnumItem {
			Name: "KeypadSix";
			Value: 262;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadSix: KeypadSix;

		export interface KeypadSeven extends globalThis.EnumItem {
			Name: "KeypadSeven";
			Value: 263;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadSeven: KeypadSeven;

		export interface KeypadEight extends globalThis.EnumItem {
			Name: "KeypadEight";
			Value: 264;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadEight: KeypadEight;

		export interface KeypadNine extends globalThis.EnumItem {
			Name: "KeypadNine";
			Value: 265;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadNine: KeypadNine;

		export interface KeypadPeriod extends globalThis.EnumItem {
			Name: "KeypadPeriod";
			Value: 266;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadPeriod: KeypadPeriod;

		export interface KeypadDivide extends globalThis.EnumItem {
			Name: "KeypadDivide";
			Value: 267;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadDivide: KeypadDivide;

		export interface KeypadMultiply extends globalThis.EnumItem {
			Name: "KeypadMultiply";
			Value: 268;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadMultiply: KeypadMultiply;

		export interface KeypadMinus extends globalThis.EnumItem {
			Name: "KeypadMinus";
			Value: 269;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadMinus: KeypadMinus;

		export interface KeypadPlus extends globalThis.EnumItem {
			Name: "KeypadPlus";
			Value: 270;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadPlus: KeypadPlus;

		export interface KeypadEnter extends globalThis.EnumItem {
			Name: "KeypadEnter";
			Value: 271;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadEnter: KeypadEnter;

		export interface KeypadEquals extends globalThis.EnumItem {
			Name: "KeypadEquals";
			Value: 272;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const KeypadEquals: KeypadEquals;

		export interface Up extends globalThis.EnumItem {
			Name: "Up";
			Value: 273;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Up: Up;

		export interface Down extends globalThis.EnumItem {
			Name: "Down";
			Value: 274;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Down: Down;

		export interface Right extends globalThis.EnumItem {
			Name: "Right";
			Value: 275;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Right: Right;

		export interface Left extends globalThis.EnumItem {
			Name: "Left";
			Value: 276;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Left: Left;

		export interface Insert extends globalThis.EnumItem {
			Name: "Insert";
			Value: 277;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Insert: Insert;

		export interface Home extends globalThis.EnumItem {
			Name: "Home";
			Value: 278;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Home: Home;

		export interface End extends globalThis.EnumItem {
			Name: "End";
			Value: 279;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const End: End;

		export interface PageUp extends globalThis.EnumItem {
			Name: "PageUp";
			Value: 280;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const PageUp: PageUp;

		export interface PageDown extends globalThis.EnumItem {
			Name: "PageDown";
			Value: 281;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const PageDown: PageDown;

		export interface LeftShift extends globalThis.EnumItem {
			Name: "LeftShift";
			Value: 304;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const LeftShift: LeftShift;

		export interface RightShift extends globalThis.EnumItem {
			Name: "RightShift";
			Value: 303;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const RightShift: RightShift;

		export interface LeftMeta extends globalThis.EnumItem {
			Name: "LeftMeta";
			Value: 310;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const LeftMeta: LeftMeta;

		export interface RightMeta extends globalThis.EnumItem {
			Name: "RightMeta";
			Value: 309;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const RightMeta: RightMeta;

		export interface LeftAlt extends globalThis.EnumItem {
			Name: "LeftAlt";
			Value: 308;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const LeftAlt: LeftAlt;

		export interface RightAlt extends globalThis.EnumItem {
			Name: "RightAlt";
			Value: 307;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const RightAlt: RightAlt;

		export interface LeftControl extends globalThis.EnumItem {
			Name: "LeftControl";
			Value: 306;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const LeftControl: LeftControl;

		export interface RightControl extends globalThis.EnumItem {
			Name: "RightControl";
			Value: 305;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const RightControl: RightControl;

		export interface CapsLock extends globalThis.EnumItem {
			Name: "CapsLock";
			Value: 301;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const CapsLock: CapsLock;

		export interface NumLock extends globalThis.EnumItem {
			Name: "NumLock";
			Value: 300;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const NumLock: NumLock;

		export interface ScrollLock extends globalThis.EnumItem {
			Name: "ScrollLock";
			Value: 302;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ScrollLock: ScrollLock;

		export interface LeftSuper extends globalThis.EnumItem {
			Name: "LeftSuper";
			Value: 311;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const LeftSuper: LeftSuper;

		export interface RightSuper extends globalThis.EnumItem {
			Name: "RightSuper";
			Value: 312;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const RightSuper: RightSuper;

		export interface Mode extends globalThis.EnumItem {
			Name: "Mode";
			Value: 313;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Mode: Mode;

		export interface Compose extends globalThis.EnumItem {
			Name: "Compose";
			Value: 314;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Compose: Compose;

		export interface Help extends globalThis.EnumItem {
			Name: "Help";
			Value: 315;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Help: Help;

		export interface Print extends globalThis.EnumItem {
			Name: "Print";
			Value: 316;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Print: Print;

		export interface SysReq extends globalThis.EnumItem {
			Name: "SysReq";
			Value: 317;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const SysReq: SysReq;

		export interface Break extends globalThis.EnumItem {
			Name: "Break";
			Value: 318;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Break: Break;

		export interface Menu extends globalThis.EnumItem {
			Name: "Menu";
			Value: 319;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Menu: Menu;

		export interface Power extends globalThis.EnumItem {
			Name: "Power";
			Value: 320;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Power: Power;

		export interface Euro extends globalThis.EnumItem {
			Name: "Euro";
			Value: 321;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Euro: Euro;

		export interface Undo extends globalThis.EnumItem {
			Name: "Undo";
			Value: 322;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Undo: Undo;

		export interface F1 extends globalThis.EnumItem {
			Name: "F1";
			Value: 282;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F1: F1;

		export interface F2 extends globalThis.EnumItem {
			Name: "F2";
			Value: 283;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F2: F2;

		export interface F3 extends globalThis.EnumItem {
			Name: "F3";
			Value: 284;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F3: F3;

		export interface F4 extends globalThis.EnumItem {
			Name: "F4";
			Value: 285;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F4: F4;

		export interface F5 extends globalThis.EnumItem {
			Name: "F5";
			Value: 286;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F5: F5;

		export interface F6 extends globalThis.EnumItem {
			Name: "F6";
			Value: 287;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F6: F6;

		export interface F7 extends globalThis.EnumItem {
			Name: "F7";
			Value: 288;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F7: F7;

		export interface F8 extends globalThis.EnumItem {
			Name: "F8";
			Value: 289;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F8: F8;

		export interface F9 extends globalThis.EnumItem {
			Name: "F9";
			Value: 290;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F9: F9;

		export interface F10 extends globalThis.EnumItem {
			Name: "F10";
			Value: 291;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F10: F10;

		export interface F11 extends globalThis.EnumItem {
			Name: "F11";
			Value: 292;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F11: F11;

		export interface F12 extends globalThis.EnumItem {
			Name: "F12";
			Value: 293;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F12: F12;

		export interface F13 extends globalThis.EnumItem {
			Name: "F13";
			Value: 294;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F13: F13;

		export interface F14 extends globalThis.EnumItem {
			Name: "F14";
			Value: 295;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F14: F14;

		export interface F15 extends globalThis.EnumItem {
			Name: "F15";
			Value: 296;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const F15: F15;

		export interface World0 extends globalThis.EnumItem {
			Name: "World0";
			Value: 160;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World0: World0;

		export interface World1 extends globalThis.EnumItem {
			Name: "World1";
			Value: 161;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World1: World1;

		export interface World2 extends globalThis.EnumItem {
			Name: "World2";
			Value: 162;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World2: World2;

		export interface World3 extends globalThis.EnumItem {
			Name: "World3";
			Value: 163;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World3: World3;

		export interface World4 extends globalThis.EnumItem {
			Name: "World4";
			Value: 164;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World4: World4;

		export interface World5 extends globalThis.EnumItem {
			Name: "World5";
			Value: 165;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World5: World5;

		export interface World6 extends globalThis.EnumItem {
			Name: "World6";
			Value: 166;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World6: World6;

		export interface World7 extends globalThis.EnumItem {
			Name: "World7";
			Value: 167;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World7: World7;

		export interface World8 extends globalThis.EnumItem {
			Name: "World8";
			Value: 168;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World8: World8;

		export interface World9 extends globalThis.EnumItem {
			Name: "World9";
			Value: 169;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World9: World9;

		export interface World10 extends globalThis.EnumItem {
			Name: "World10";
			Value: 170;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World10: World10;

		export interface World11 extends globalThis.EnumItem {
			Name: "World11";
			Value: 171;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World11: World11;

		export interface World12 extends globalThis.EnumItem {
			Name: "World12";
			Value: 172;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World12: World12;

		export interface World13 extends globalThis.EnumItem {
			Name: "World13";
			Value: 173;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World13: World13;

		export interface World14 extends globalThis.EnumItem {
			Name: "World14";
			Value: 174;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World14: World14;

		export interface World15 extends globalThis.EnumItem {
			Name: "World15";
			Value: 175;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World15: World15;

		export interface World16 extends globalThis.EnumItem {
			Name: "World16";
			Value: 176;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World16: World16;

		export interface World17 extends globalThis.EnumItem {
			Name: "World17";
			Value: 177;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World17: World17;

		export interface World18 extends globalThis.EnumItem {
			Name: "World18";
			Value: 178;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World18: World18;

		export interface World19 extends globalThis.EnumItem {
			Name: "World19";
			Value: 179;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World19: World19;

		export interface World20 extends globalThis.EnumItem {
			Name: "World20";
			Value: 180;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World20: World20;

		export interface World21 extends globalThis.EnumItem {
			Name: "World21";
			Value: 181;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World21: World21;

		export interface World22 extends globalThis.EnumItem {
			Name: "World22";
			Value: 182;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World22: World22;

		export interface World23 extends globalThis.EnumItem {
			Name: "World23";
			Value: 183;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World23: World23;

		export interface World24 extends globalThis.EnumItem {
			Name: "World24";
			Value: 184;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World24: World24;

		export interface World25 extends globalThis.EnumItem {
			Name: "World25";
			Value: 185;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World25: World25;

		export interface World26 extends globalThis.EnumItem {
			Name: "World26";
			Value: 186;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World26: World26;

		export interface World27 extends globalThis.EnumItem {
			Name: "World27";
			Value: 187;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World27: World27;

		export interface World28 extends globalThis.EnumItem {
			Name: "World28";
			Value: 188;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World28: World28;

		export interface World29 extends globalThis.EnumItem {
			Name: "World29";
			Value: 189;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World29: World29;

		export interface World30 extends globalThis.EnumItem {
			Name: "World30";
			Value: 190;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World30: World30;

		export interface World31 extends globalThis.EnumItem {
			Name: "World31";
			Value: 191;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World31: World31;

		export interface World32 extends globalThis.EnumItem {
			Name: "World32";
			Value: 192;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World32: World32;

		export interface World33 extends globalThis.EnumItem {
			Name: "World33";
			Value: 193;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World33: World33;

		export interface World34 extends globalThis.EnumItem {
			Name: "World34";
			Value: 194;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World34: World34;

		export interface World35 extends globalThis.EnumItem {
			Name: "World35";
			Value: 195;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World35: World35;

		export interface World36 extends globalThis.EnumItem {
			Name: "World36";
			Value: 196;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World36: World36;

		export interface World37 extends globalThis.EnumItem {
			Name: "World37";
			Value: 197;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World37: World37;

		export interface World38 extends globalThis.EnumItem {
			Name: "World38";
			Value: 198;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World38: World38;

		export interface World39 extends globalThis.EnumItem {
			Name: "World39";
			Value: 199;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World39: World39;

		export interface World40 extends globalThis.EnumItem {
			Name: "World40";
			Value: 200;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World40: World40;

		export interface World41 extends globalThis.EnumItem {
			Name: "World41";
			Value: 201;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World41: World41;

		export interface World42 extends globalThis.EnumItem {
			Name: "World42";
			Value: 202;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World42: World42;

		export interface World43 extends globalThis.EnumItem {
			Name: "World43";
			Value: 203;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World43: World43;

		export interface World44 extends globalThis.EnumItem {
			Name: "World44";
			Value: 204;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World44: World44;

		export interface World45 extends globalThis.EnumItem {
			Name: "World45";
			Value: 205;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World45: World45;

		export interface World46 extends globalThis.EnumItem {
			Name: "World46";
			Value: 206;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World46: World46;

		export interface World47 extends globalThis.EnumItem {
			Name: "World47";
			Value: 207;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World47: World47;

		export interface World48 extends globalThis.EnumItem {
			Name: "World48";
			Value: 208;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World48: World48;

		export interface World49 extends globalThis.EnumItem {
			Name: "World49";
			Value: 209;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World49: World49;

		export interface World50 extends globalThis.EnumItem {
			Name: "World50";
			Value: 210;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World50: World50;

		export interface World51 extends globalThis.EnumItem {
			Name: "World51";
			Value: 211;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World51: World51;

		export interface World52 extends globalThis.EnumItem {
			Name: "World52";
			Value: 212;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World52: World52;

		export interface World53 extends globalThis.EnumItem {
			Name: "World53";
			Value: 213;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World53: World53;

		export interface World54 extends globalThis.EnumItem {
			Name: "World54";
			Value: 214;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World54: World54;

		export interface World55 extends globalThis.EnumItem {
			Name: "World55";
			Value: 215;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World55: World55;

		export interface World56 extends globalThis.EnumItem {
			Name: "World56";
			Value: 216;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World56: World56;

		export interface World57 extends globalThis.EnumItem {
			Name: "World57";
			Value: 217;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World57: World57;

		export interface World58 extends globalThis.EnumItem {
			Name: "World58";
			Value: 218;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World58: World58;

		export interface World59 extends globalThis.EnumItem {
			Name: "World59";
			Value: 219;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World59: World59;

		export interface World60 extends globalThis.EnumItem {
			Name: "World60";
			Value: 220;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World60: World60;

		export interface World61 extends globalThis.EnumItem {
			Name: "World61";
			Value: 221;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World61: World61;

		export interface World62 extends globalThis.EnumItem {
			Name: "World62";
			Value: 222;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World62: World62;

		export interface World63 extends globalThis.EnumItem {
			Name: "World63";
			Value: 223;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World63: World63;

		export interface World64 extends globalThis.EnumItem {
			Name: "World64";
			Value: 224;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World64: World64;

		export interface World65 extends globalThis.EnumItem {
			Name: "World65";
			Value: 225;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World65: World65;

		export interface World66 extends globalThis.EnumItem {
			Name: "World66";
			Value: 226;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World66: World66;

		export interface World67 extends globalThis.EnumItem {
			Name: "World67";
			Value: 227;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World67: World67;

		export interface World68 extends globalThis.EnumItem {
			Name: "World68";
			Value: 228;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World68: World68;

		export interface World69 extends globalThis.EnumItem {
			Name: "World69";
			Value: 229;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World69: World69;

		export interface World70 extends globalThis.EnumItem {
			Name: "World70";
			Value: 230;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World70: World70;

		export interface World71 extends globalThis.EnumItem {
			Name: "World71";
			Value: 231;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World71: World71;

		export interface World72 extends globalThis.EnumItem {
			Name: "World72";
			Value: 232;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World72: World72;

		export interface World73 extends globalThis.EnumItem {
			Name: "World73";
			Value: 233;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World73: World73;

		export interface World74 extends globalThis.EnumItem {
			Name: "World74";
			Value: 234;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World74: World74;

		export interface World75 extends globalThis.EnumItem {
			Name: "World75";
			Value: 235;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World75: World75;

		export interface World76 extends globalThis.EnumItem {
			Name: "World76";
			Value: 236;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World76: World76;

		export interface World77 extends globalThis.EnumItem {
			Name: "World77";
			Value: 237;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World77: World77;

		export interface World78 extends globalThis.EnumItem {
			Name: "World78";
			Value: 238;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World78: World78;

		export interface World79 extends globalThis.EnumItem {
			Name: "World79";
			Value: 239;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World79: World79;

		export interface World80 extends globalThis.EnumItem {
			Name: "World80";
			Value: 240;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World80: World80;

		export interface World81 extends globalThis.EnumItem {
			Name: "World81";
			Value: 241;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World81: World81;

		export interface World82 extends globalThis.EnumItem {
			Name: "World82";
			Value: 242;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World82: World82;

		export interface World83 extends globalThis.EnumItem {
			Name: "World83";
			Value: 243;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World83: World83;

		export interface World84 extends globalThis.EnumItem {
			Name: "World84";
			Value: 244;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World84: World84;

		export interface World85 extends globalThis.EnumItem {
			Name: "World85";
			Value: 245;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World85: World85;

		export interface World86 extends globalThis.EnumItem {
			Name: "World86";
			Value: 246;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World86: World86;

		export interface World87 extends globalThis.EnumItem {
			Name: "World87";
			Value: 247;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World87: World87;

		export interface World88 extends globalThis.EnumItem {
			Name: "World88";
			Value: 248;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World88: World88;

		export interface World89 extends globalThis.EnumItem {
			Name: "World89";
			Value: 249;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World89: World89;

		export interface World90 extends globalThis.EnumItem {
			Name: "World90";
			Value: 250;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World90: World90;

		export interface World91 extends globalThis.EnumItem {
			Name: "World91";
			Value: 251;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World91: World91;

		export interface World92 extends globalThis.EnumItem {
			Name: "World92";
			Value: 252;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World92: World92;

		export interface World93 extends globalThis.EnumItem {
			Name: "World93";
			Value: 253;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World93: World93;

		export interface World94 extends globalThis.EnumItem {
			Name: "World94";
			Value: 254;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World94: World94;

		export interface World95 extends globalThis.EnumItem {
			Name: "World95";
			Value: 255;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const World95: World95;

		export interface ButtonX extends globalThis.EnumItem {
			Name: "ButtonX";
			Value: 1000;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ButtonX: ButtonX;

		export interface ButtonY extends globalThis.EnumItem {
			Name: "ButtonY";
			Value: 1001;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ButtonY: ButtonY;

		export interface ButtonA extends globalThis.EnumItem {
			Name: "ButtonA";
			Value: 1002;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ButtonA: ButtonA;

		export interface ButtonB extends globalThis.EnumItem {
			Name: "ButtonB";
			Value: 1003;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ButtonB: ButtonB;

		export interface ButtonR1 extends globalThis.EnumItem {
			Name: "ButtonR1";
			Value: 1004;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ButtonR1: ButtonR1;

		export interface ButtonL1 extends globalThis.EnumItem {
			Name: "ButtonL1";
			Value: 1005;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ButtonL1: ButtonL1;

		export interface ButtonR2 extends globalThis.EnumItem {
			Name: "ButtonR2";
			Value: 1006;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ButtonR2: ButtonR2;

		export interface ButtonL2 extends globalThis.EnumItem {
			Name: "ButtonL2";
			Value: 1007;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ButtonL2: ButtonL2;

		export interface ButtonR3 extends globalThis.EnumItem {
			Name: "ButtonR3";
			Value: 1008;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ButtonR3: ButtonR3;

		export interface ButtonL3 extends globalThis.EnumItem {
			Name: "ButtonL3";
			Value: 1009;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ButtonL3: ButtonL3;

		export interface ButtonStart extends globalThis.EnumItem {
			Name: "ButtonStart";
			Value: 1010;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ButtonStart: ButtonStart;

		export interface ButtonSelect extends globalThis.EnumItem {
			Name: "ButtonSelect";
			Value: 1011;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const ButtonSelect: ButtonSelect;

		export interface DPadLeft extends globalThis.EnumItem {
			Name: "DPadLeft";
			Value: 1012;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const DPadLeft: DPadLeft;

		export interface DPadRight extends globalThis.EnumItem {
			Name: "DPadRight";
			Value: 1013;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const DPadRight: DPadRight;

		export interface DPadUp extends globalThis.EnumItem {
			Name: "DPadUp";
			Value: 1014;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const DPadUp: DPadUp;

		export interface DPadDown extends globalThis.EnumItem {
			Name: "DPadDown";
			Value: 1015;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const DPadDown: DPadDown;

		export interface Thumbstick1 extends globalThis.EnumItem {
			Name: "Thumbstick1";
			Value: 1016;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Thumbstick1: Thumbstick1;

		export interface Thumbstick2 extends globalThis.EnumItem {
			Name: "Thumbstick2";
			Value: 1017;
			EnumType: typeof globalThis.Enum.KeyCode;
		}

		export const Thumbstick2: Thumbstick2;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.KeyCode>;
	}
	export type KeyCode = KeyCode.Unknown | KeyCode.Backspace | KeyCode.Tab | KeyCode.Clear | KeyCode.Return | KeyCode.Pause | KeyCode.Escape | KeyCode.Space | KeyCode.QuotedDouble | KeyCode.Hash | KeyCode.Dollar | KeyCode.Percent | KeyCode.Ampersand | KeyCode.Quote | KeyCode.LeftParenthesis | KeyCode.RightParenthesis | KeyCode.Asterisk | KeyCode.Plus | KeyCode.Comma | KeyCode.Minus | KeyCode.Period | KeyCode.Slash | KeyCode.Zero | KeyCode.One | KeyCode.Two | KeyCode.Three | KeyCode.Four | KeyCode.Five | KeyCode.Six | KeyCode.Seven | KeyCode.Eight | KeyCode.Nine | KeyCode.Colon | KeyCode.Semicolon | KeyCode.LessThan | KeyCode.Equals | KeyCode.GreaterThan | KeyCode.Question | KeyCode.At | KeyCode.LeftBracket | KeyCode.BackSlash | KeyCode.RightBracket | KeyCode.Caret | KeyCode.Underscore | KeyCode.Backquote | KeyCode.A | KeyCode.B | KeyCode.C | KeyCode.D | KeyCode.E | KeyCode.F | KeyCode.G | KeyCode.H | KeyCode.I | KeyCode.J | KeyCode.K | KeyCode.L | KeyCode.M | KeyCode.N | KeyCode.O | KeyCode.P | KeyCode.Q | KeyCode.R | KeyCode.S | KeyCode.T | KeyCode.U | KeyCode.V | KeyCode.W | KeyCode.X | KeyCode.Y | KeyCode.Z | KeyCode.LeftCurly | KeyCode.Pipe | KeyCode.RightCurly | KeyCode.Tilde | KeyCode.Delete | KeyCode.KeypadZero | KeyCode.KeypadOne | KeyCode.KeypadTwo | KeyCode.KeypadThree | KeyCode.KeypadFour | KeyCode.KeypadFive | KeyCode.KeypadSix | KeyCode.KeypadSeven | KeyCode.KeypadEight | KeyCode.KeypadNine | KeyCode.KeypadPeriod | KeyCode.KeypadDivide | KeyCode.KeypadMultiply | KeyCode.KeypadMinus | KeyCode.KeypadPlus | KeyCode.KeypadEnter | KeyCode.KeypadEquals | KeyCode.Up | KeyCode.Down | KeyCode.Right | KeyCode.Left | KeyCode.Insert | KeyCode.Home | KeyCode.End | KeyCode.PageUp | KeyCode.PageDown | KeyCode.LeftShift | KeyCode.RightShift | KeyCode.LeftMeta | KeyCode.RightMeta | KeyCode.LeftAlt | KeyCode.RightAlt | KeyCode.LeftControl | KeyCode.RightControl | KeyCode.CapsLock | KeyCode.NumLock | KeyCode.ScrollLock | KeyCode.LeftSuper | KeyCode.RightSuper | KeyCode.Mode | KeyCode.Compose | KeyCode.Help | KeyCode.Print | KeyCode.SysReq | KeyCode.Break | KeyCode.Menu | KeyCode.Power | KeyCode.Euro | KeyCode.Undo | KeyCode.F1 | KeyCode.F2 | KeyCode.F3 | KeyCode.F4 | KeyCode.F5 | KeyCode.F6 | KeyCode.F7 | KeyCode.F8 | KeyCode.F9 | KeyCode.F10 | KeyCode.F11 | KeyCode.F12 | KeyCode.F13 | KeyCode.F14 | KeyCode.F15 | KeyCode.World0 | KeyCode.World1 | KeyCode.World2 | KeyCode.World3 | KeyCode.World4 | KeyCode.World5 | KeyCode.World6 | KeyCode.World7 | KeyCode.World8 | KeyCode.World9 | KeyCode.World10 | KeyCode.World11 | KeyCode.World12 | KeyCode.World13 | KeyCode.World14 | KeyCode.World15 | KeyCode.World16 | KeyCode.World17 | KeyCode.World18 | KeyCode.World19 | KeyCode.World20 | KeyCode.World21 | KeyCode.World22 | KeyCode.World23 | KeyCode.World24 | KeyCode.World25 | KeyCode.World26 | KeyCode.World27 | KeyCode.World28 | KeyCode.World29 | KeyCode.World30 | KeyCode.World31 | KeyCode.World32 | KeyCode.World33 | KeyCode.World34 | KeyCode.World35 | KeyCode.World36 | KeyCode.World37 | KeyCode.World38 | KeyCode.World39 | KeyCode.World40 | KeyCode.World41 | KeyCode.World42 | KeyCode.World43 | KeyCode.World44 | KeyCode.World45 | KeyCode.World46 | KeyCode.World47 | KeyCode.World48 | KeyCode.World49 | KeyCode.World50 | KeyCode.World51 | KeyCode.World52 | KeyCode.World53 | KeyCode.World54 | KeyCode.World55 | KeyCode.World56 | KeyCode.World57 | KeyCode.World58 | KeyCode.World59 | KeyCode.World60 | KeyCode.World61 | KeyCode.World62 | KeyCode.World63 | KeyCode.World64 | KeyCode.World65 | KeyCode.World66 | KeyCode.World67 | KeyCode.World68 | KeyCode.World69 | KeyCode.World70 | KeyCode.World71 | KeyCode.World72 | KeyCode.World73 | KeyCode.World74 | KeyCode.World75 | KeyCode.World76 | KeyCode.World77 | KeyCode.World78 | KeyCode.World79 | KeyCode.World80 | KeyCode.World81 | KeyCode.World82 | KeyCode.World83 | KeyCode.World84 | KeyCode.World85 | KeyCode.World86 | KeyCode.World87 | KeyCode.World88 | KeyCode.World89 | KeyCode.World90 | KeyCode.World91 | KeyCode.World92 | KeyCode.World93 | KeyCode.World94 | KeyCode.World95 | KeyCode.ButtonX | KeyCode.ButtonY | KeyCode.ButtonA | KeyCode.ButtonB | KeyCode.ButtonR1 | KeyCode.ButtonL1 | KeyCode.ButtonR2 | KeyCode.ButtonL2 | KeyCode.ButtonR3 | KeyCode.ButtonL3 | KeyCode.ButtonStart | KeyCode.ButtonSelect | KeyCode.DPadLeft | KeyCode.DPadRight | KeyCode.DPadUp | KeyCode.DPadDown | KeyCode.Thumbstick1 | KeyCode.Thumbstick2;

	export namespace KeyInterpolationMode {
		export interface Constant extends globalThis.EnumItem {
			Name: "Constant";
			Value: 0;
			EnumType: typeof globalThis.Enum.KeyInterpolationMode;
		}

		export const Constant: Constant;

		export interface Linear extends globalThis.EnumItem {
			Name: "Linear";
			Value: 1;
			EnumType: typeof globalThis.Enum.KeyInterpolationMode;
		}

		export const Linear: Linear;

		export interface Cubic extends globalThis.EnumItem {
			Name: "Cubic";
			Value: 2;
			EnumType: typeof globalThis.Enum.KeyInterpolationMode;
		}

		export const Cubic: Cubic;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.KeyInterpolationMode>;
	}
	export type KeyInterpolationMode = KeyInterpolationMode.Constant | KeyInterpolationMode.Linear | KeyInterpolationMode.Cubic;

	export namespace KeywordFilterType {
		export interface Include extends globalThis.EnumItem {
			Name: "Include";
			Value: 0;
			EnumType: typeof globalThis.Enum.KeywordFilterType;
		}

		export const Include: Include;

		export interface Exclude extends globalThis.EnumItem {
			Name: "Exclude";
			Value: 1;
			EnumType: typeof globalThis.Enum.KeywordFilterType;
		}

		export const Exclude: Exclude;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.KeywordFilterType>;
	}
	export type KeywordFilterType = KeywordFilterType.Include | KeywordFilterType.Exclude;

	export namespace Language {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.Language;
		}

		export const Default: Default;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.Language>;
	}
	export type Language = Language.Default;

	export namespace LeftRight {
		export interface Left extends globalThis.EnumItem {
			Name: "Left";
			Value: 0;
			EnumType: typeof globalThis.Enum.LeftRight;
		}

		export const Left: Left;

		export interface Center extends globalThis.EnumItem {
			Name: "Center";
			Value: 1;
			EnumType: typeof globalThis.Enum.LeftRight;
		}

		export const Center: Center;

		export interface Right extends globalThis.EnumItem {
			Name: "Right";
			Value: 2;
			EnumType: typeof globalThis.Enum.LeftRight;
		}

		export const Right: Right;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.LeftRight>;
	}
	export type LeftRight = LeftRight.Left | LeftRight.Center | LeftRight.Right;

	export namespace Limb {
		export interface Head extends globalThis.EnumItem {
			Name: "Head";
			Value: 0;
			EnumType: typeof globalThis.Enum.Limb;
		}

		export const Head: Head;

		export interface Torso extends globalThis.EnumItem {
			Name: "Torso";
			Value: 1;
			EnumType: typeof globalThis.Enum.Limb;
		}

		export const Torso: Torso;

		export interface LeftArm extends globalThis.EnumItem {
			Name: "LeftArm";
			Value: 2;
			EnumType: typeof globalThis.Enum.Limb;
		}

		export const LeftArm: LeftArm;

		export interface RightArm extends globalThis.EnumItem {
			Name: "RightArm";
			Value: 3;
			EnumType: typeof globalThis.Enum.Limb;
		}

		export const RightArm: RightArm;

		export interface LeftLeg extends globalThis.EnumItem {
			Name: "LeftLeg";
			Value: 4;
			EnumType: typeof globalThis.Enum.Limb;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg extends globalThis.EnumItem {
			Name: "RightLeg";
			Value: 5;
			EnumType: typeof globalThis.Enum.Limb;
		}

		export const RightLeg: RightLeg;

		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 6;
			EnumType: typeof globalThis.Enum.Limb;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.Limb>;
	}
	export type Limb = Limb.Head | Limb.Torso | Limb.LeftArm | Limb.RightArm | Limb.LeftLeg | Limb.RightLeg | Limb.Unknown;

	export namespace LineJoinMode {
		export interface Round extends globalThis.EnumItem {
			Name: "Round";
			Value: 0;
			EnumType: typeof globalThis.Enum.LineJoinMode;
		}

		export const Round: Round;

		export interface Bevel extends globalThis.EnumItem {
			Name: "Bevel";
			Value: 1;
			EnumType: typeof globalThis.Enum.LineJoinMode;
		}

		export const Bevel: Bevel;

		export interface Miter extends globalThis.EnumItem {
			Name: "Miter";
			Value: 2;
			EnumType: typeof globalThis.Enum.LineJoinMode;
		}

		export const Miter: Miter;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.LineJoinMode>;
	}
	export type LineJoinMode = LineJoinMode.Round | LineJoinMode.Bevel | LineJoinMode.Miter;

	export namespace ListDisplayMode {
		export interface Horizontal extends globalThis.EnumItem {
			Name: "Horizontal";
			Value: 0;
			EnumType: typeof globalThis.Enum.ListDisplayMode;
		}

		export const Horizontal: Horizontal;

		export interface Vertical extends globalThis.EnumItem {
			Name: "Vertical";
			Value: 1;
			EnumType: typeof globalThis.Enum.ListDisplayMode;
		}

		export const Vertical: Vertical;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ListDisplayMode>;
	}
	export type ListDisplayMode = ListDisplayMode.Horizontal | ListDisplayMode.Vertical;

	export namespace ListenerType {
		export interface Camera extends globalThis.EnumItem {
			Name: "Camera";
			Value: 0;
			EnumType: typeof globalThis.Enum.ListenerType;
		}

		export const Camera: Camera;

		export interface CFrame extends globalThis.EnumItem {
			Name: "CFrame";
			Value: 1;
			EnumType: typeof globalThis.Enum.ListenerType;
		}

		export const CFrame: CFrame;

		export interface ObjectPosition extends globalThis.EnumItem {
			Name: "ObjectPosition";
			Value: 2;
			EnumType: typeof globalThis.Enum.ListenerType;
		}

		export const ObjectPosition: ObjectPosition;

		export interface ObjectCFrame extends globalThis.EnumItem {
			Name: "ObjectCFrame";
			Value: 3;
			EnumType: typeof globalThis.Enum.ListenerType;
		}

		export const ObjectCFrame: ObjectCFrame;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ListenerType>;
	}
	export type ListenerType = ListenerType.Camera | ListenerType.CFrame | ListenerType.ObjectPosition | ListenerType.ObjectCFrame;

	export namespace LoadCharacterLayeredClothing {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.LoadCharacterLayeredClothing;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.LoadCharacterLayeredClothing;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.LoadCharacterLayeredClothing;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.LoadCharacterLayeredClothing>;
	}
	export type LoadCharacterLayeredClothing = LoadCharacterLayeredClothing.Default | LoadCharacterLayeredClothing.Disabled | LoadCharacterLayeredClothing.Enabled;

	export namespace LoadDynamicHeads {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.LoadDynamicHeads;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.LoadDynamicHeads;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.LoadDynamicHeads;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.LoadDynamicHeads>;
	}
	export type LoadDynamicHeads = LoadDynamicHeads.Default | LoadDynamicHeads.Disabled | LoadDynamicHeads.Enabled;

	export namespace MarkupKind {
		export interface PlainText extends globalThis.EnumItem {
			Name: "PlainText";
			Value: 0;
			EnumType: typeof globalThis.Enum.MarkupKind;
		}

		export const PlainText: PlainText;

		export interface Markdown extends globalThis.EnumItem {
			Name: "Markdown";
			Value: 1;
			EnumType: typeof globalThis.Enum.MarkupKind;
		}

		export const Markdown: Markdown;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.MarkupKind>;
	}
	export type MarkupKind = MarkupKind.PlainText | MarkupKind.Markdown;

	export namespace Material {
		export interface Plastic extends globalThis.EnumItem {
			Name: "Plastic";
			Value: 256;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Plastic: Plastic;

		export interface Wood extends globalThis.EnumItem {
			Name: "Wood";
			Value: 512;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Wood: Wood;

		export interface Slate extends globalThis.EnumItem {
			Name: "Slate";
			Value: 800;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Slate: Slate;

		export interface Concrete extends globalThis.EnumItem {
			Name: "Concrete";
			Value: 816;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Concrete: Concrete;

		export interface CorrodedMetal extends globalThis.EnumItem {
			Name: "CorrodedMetal";
			Value: 1040;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const CorrodedMetal: CorrodedMetal;

		export interface DiamondPlate extends globalThis.EnumItem {
			Name: "DiamondPlate";
			Value: 1056;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const DiamondPlate: DiamondPlate;

		export interface Foil extends globalThis.EnumItem {
			Name: "Foil";
			Value: 1072;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Foil: Foil;
		/** @deprecated renamed to Foil */
		export const Aluminum: Foil;

		export interface Grass extends globalThis.EnumItem {
			Name: "Grass";
			Value: 1280;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Grass: Grass;

		export interface Ice extends globalThis.EnumItem {
			Name: "Ice";
			Value: 1536;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Ice: Ice;

		export interface Marble extends globalThis.EnumItem {
			Name: "Marble";
			Value: 784;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Marble: Marble;

		export interface Granite extends globalThis.EnumItem {
			Name: "Granite";
			Value: 832;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Granite: Granite;

		export interface Brick extends globalThis.EnumItem {
			Name: "Brick";
			Value: 848;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Brick: Brick;

		export interface Pebble extends globalThis.EnumItem {
			Name: "Pebble";
			Value: 864;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Pebble: Pebble;

		export interface Sand extends globalThis.EnumItem {
			Name: "Sand";
			Value: 1296;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Sand: Sand;

		export interface Fabric extends globalThis.EnumItem {
			Name: "Fabric";
			Value: 1312;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Fabric: Fabric;

		export interface SmoothPlastic extends globalThis.EnumItem {
			Name: "SmoothPlastic";
			Value: 272;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const SmoothPlastic: SmoothPlastic;

		export interface Metal extends globalThis.EnumItem {
			Name: "Metal";
			Value: 1088;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Metal: Metal;

		export interface WoodPlanks extends globalThis.EnumItem {
			Name: "WoodPlanks";
			Value: 528;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const WoodPlanks: WoodPlanks;

		export interface Cobblestone extends globalThis.EnumItem {
			Name: "Cobblestone";
			Value: 880;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Cobblestone: Cobblestone;

		export interface Air extends globalThis.EnumItem {
			Name: "Air";
			Value: 1792;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Air: Air;

		export interface Water extends globalThis.EnumItem {
			Name: "Water";
			Value: 2048;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Water: Water;

		export interface Rock extends globalThis.EnumItem {
			Name: "Rock";
			Value: 896;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Rock: Rock;

		export interface Glacier extends globalThis.EnumItem {
			Name: "Glacier";
			Value: 1552;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Glacier: Glacier;

		export interface Snow extends globalThis.EnumItem {
			Name: "Snow";
			Value: 1328;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Snow: Snow;

		export interface Sandstone extends globalThis.EnumItem {
			Name: "Sandstone";
			Value: 912;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Sandstone: Sandstone;

		export interface Mud extends globalThis.EnumItem {
			Name: "Mud";
			Value: 1344;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Mud: Mud;

		export interface Basalt extends globalThis.EnumItem {
			Name: "Basalt";
			Value: 788;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Basalt: Basalt;

		export interface Ground extends globalThis.EnumItem {
			Name: "Ground";
			Value: 1360;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Ground: Ground;

		export interface CrackedLava extends globalThis.EnumItem {
			Name: "CrackedLava";
			Value: 804;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const CrackedLava: CrackedLava;

		export interface Neon extends globalThis.EnumItem {
			Name: "Neon";
			Value: 288;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Neon: Neon;

		export interface Glass extends globalThis.EnumItem {
			Name: "Glass";
			Value: 1568;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Glass: Glass;

		export interface Asphalt extends globalThis.EnumItem {
			Name: "Asphalt";
			Value: 1376;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Asphalt: Asphalt;

		export interface LeafyGrass extends globalThis.EnumItem {
			Name: "LeafyGrass";
			Value: 1284;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const LeafyGrass: LeafyGrass;

		export interface Salt extends globalThis.EnumItem {
			Name: "Salt";
			Value: 1392;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Salt: Salt;

		export interface Limestone extends globalThis.EnumItem {
			Name: "Limestone";
			Value: 820;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Limestone: Limestone;

		export interface Pavement extends globalThis.EnumItem {
			Name: "Pavement";
			Value: 836;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Pavement: Pavement;

		export interface ForceField extends globalThis.EnumItem {
			Name: "ForceField";
			Value: 1584;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const ForceField: ForceField;

		export interface Cardboard extends globalThis.EnumItem {
			Name: "Cardboard";
			Value: 2304;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Cardboard: Cardboard;

		export interface Carpet extends globalThis.EnumItem {
			Name: "Carpet";
			Value: 2305;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Carpet: Carpet;

		export interface CeramicTiles extends globalThis.EnumItem {
			Name: "CeramicTiles";
			Value: 2306;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const CeramicTiles: CeramicTiles;

		export interface ClayRoofTiles extends globalThis.EnumItem {
			Name: "ClayRoofTiles";
			Value: 2307;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const ClayRoofTiles: ClayRoofTiles;

		export interface RoofShingles extends globalThis.EnumItem {
			Name: "RoofShingles";
			Value: 2308;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const RoofShingles: RoofShingles;

		export interface Leather extends globalThis.EnumItem {
			Name: "Leather";
			Value: 2309;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Leather: Leather;

		export interface Plaster extends globalThis.EnumItem {
			Name: "Plaster";
			Value: 2310;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Plaster: Plaster;

		export interface Rubber extends globalThis.EnumItem {
			Name: "Rubber";
			Value: 2311;
			EnumType: typeof globalThis.Enum.Material;
		}

		export const Rubber: Rubber;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.Material>;
	}
	export type Material = Material.Plastic | Material.Wood | Material.Slate | Material.Concrete | Material.CorrodedMetal | Material.DiamondPlate | Material.Foil | Material.Grass | Material.Ice | Material.Marble | Material.Granite | Material.Brick | Material.Pebble | Material.Sand | Material.Fabric | Material.SmoothPlastic | Material.Metal | Material.WoodPlanks | Material.Cobblestone | Material.Air | Material.Water | Material.Rock | Material.Glacier | Material.Snow | Material.Sandstone | Material.Mud | Material.Basalt | Material.Ground | Material.CrackedLava | Material.Neon | Material.Glass | Material.Asphalt | Material.LeafyGrass | Material.Salt | Material.Limestone | Material.Pavement | Material.ForceField | Material.Cardboard | Material.Carpet | Material.CeramicTiles | Material.ClayRoofTiles | Material.RoofShingles | Material.Leather | Material.Plaster | Material.Rubber;

	export namespace MaterialPattern {
		export interface Regular extends globalThis.EnumItem {
			Name: "Regular";
			Value: 0;
			EnumType: typeof globalThis.Enum.MaterialPattern;
		}

		export const Regular: Regular;

		export interface Organic extends globalThis.EnumItem {
			Name: "Organic";
			Value: 1;
			EnumType: typeof globalThis.Enum.MaterialPattern;
		}

		export const Organic: Organic;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.MaterialPattern>;
	}
	export type MaterialPattern = MaterialPattern.Regular | MaterialPattern.Organic;

	export namespace MembershipType {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.MembershipType;
		}

		export const None: None;

		export interface BuildersClub extends globalThis.EnumItem {
			Name: "BuildersClub";
			Value: 1;
			EnumType: typeof globalThis.Enum.MembershipType;
		}

		export const BuildersClub: BuildersClub;

		export interface TurboBuildersClub extends globalThis.EnumItem {
			Name: "TurboBuildersClub";
			Value: 2;
			EnumType: typeof globalThis.Enum.MembershipType;
		}

		export const TurboBuildersClub: TurboBuildersClub;

		export interface OutrageousBuildersClub extends globalThis.EnumItem {
			Name: "OutrageousBuildersClub";
			Value: 3;
			EnumType: typeof globalThis.Enum.MembershipType;
		}

		export const OutrageousBuildersClub: OutrageousBuildersClub;

		export interface Premium extends globalThis.EnumItem {
			Name: "Premium";
			Value: 4;
			EnumType: typeof globalThis.Enum.MembershipType;
		}

		export const Premium: Premium;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.MembershipType>;
	}
	export type MembershipType = MembershipType.None | MembershipType.BuildersClub | MembershipType.TurboBuildersClub | MembershipType.OutrageousBuildersClub | MembershipType.Premium;

	export namespace MeshPartDetailLevel {
		export interface DistanceBased extends globalThis.EnumItem {
			Name: "DistanceBased";
			Value: 0;
			EnumType: typeof globalThis.Enum.MeshPartDetailLevel;
		}

		export const DistanceBased: DistanceBased;

		export interface Level00 extends globalThis.EnumItem {
			Name: "Level00";
			Value: 1;
			EnumType: typeof globalThis.Enum.MeshPartDetailLevel;
		}

		export const Level00: Level00;

		export interface Level01 extends globalThis.EnumItem {
			Name: "Level01";
			Value: 2;
			EnumType: typeof globalThis.Enum.MeshPartDetailLevel;
		}

		export const Level01: Level01;

		export interface Level02 extends globalThis.EnumItem {
			Name: "Level02";
			Value: 3;
			EnumType: typeof globalThis.Enum.MeshPartDetailLevel;
		}

		export const Level02: Level02;

		export interface Level03 extends globalThis.EnumItem {
			Name: "Level03";
			Value: 4;
			EnumType: typeof globalThis.Enum.MeshPartDetailLevel;
		}

		export const Level03: Level03;

		export interface Level04 extends globalThis.EnumItem {
			Name: "Level04";
			Value: 5;
			EnumType: typeof globalThis.Enum.MeshPartDetailLevel;
		}

		export const Level04: Level04;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.MeshPartDetailLevel>;
	}
	export type MeshPartDetailLevel = MeshPartDetailLevel.DistanceBased | MeshPartDetailLevel.Level00 | MeshPartDetailLevel.Level01 | MeshPartDetailLevel.Level02 | MeshPartDetailLevel.Level03 | MeshPartDetailLevel.Level04;

	export namespace MeshPartHeadsAndAccessories {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.MeshPartHeadsAndAccessories;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.MeshPartHeadsAndAccessories;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.MeshPartHeadsAndAccessories;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.MeshPartHeadsAndAccessories>;
	}
	export type MeshPartHeadsAndAccessories = MeshPartHeadsAndAccessories.Default | MeshPartHeadsAndAccessories.Disabled | MeshPartHeadsAndAccessories.Enabled;

	export namespace MeshScaleUnit {
		export interface Stud extends globalThis.EnumItem {
			Name: "Stud";
			Value: 0;
			EnumType: typeof globalThis.Enum.MeshScaleUnit;
		}

		export const Stud: Stud;

		export interface Meter extends globalThis.EnumItem {
			Name: "Meter";
			Value: 1;
			EnumType: typeof globalThis.Enum.MeshScaleUnit;
		}

		export const Meter: Meter;

		export interface CM extends globalThis.EnumItem {
			Name: "CM";
			Value: 2;
			EnumType: typeof globalThis.Enum.MeshScaleUnit;
		}

		export const CM: CM;

		export interface MM extends globalThis.EnumItem {
			Name: "MM";
			Value: 3;
			EnumType: typeof globalThis.Enum.MeshScaleUnit;
		}

		export const MM: MM;

		export interface Foot extends globalThis.EnumItem {
			Name: "Foot";
			Value: 4;
			EnumType: typeof globalThis.Enum.MeshScaleUnit;
		}

		export const Foot: Foot;

		export interface Inch extends globalThis.EnumItem {
			Name: "Inch";
			Value: 5;
			EnumType: typeof globalThis.Enum.MeshScaleUnit;
		}

		export const Inch: Inch;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.MeshScaleUnit>;
	}
	export type MeshScaleUnit = MeshScaleUnit.Stud | MeshScaleUnit.Meter | MeshScaleUnit.CM | MeshScaleUnit.MM | MeshScaleUnit.Foot | MeshScaleUnit.Inch;

	export namespace MeshType {
		export interface Head extends globalThis.EnumItem {
			Name: "Head";
			Value: 0;
			EnumType: typeof globalThis.Enum.MeshType;
		}

		export const Head: Head;

		export interface Torso extends globalThis.EnumItem {
			Name: "Torso";
			Value: 1;
			EnumType: typeof globalThis.Enum.MeshType;
		}

		export const Torso: Torso;

		export interface Wedge extends globalThis.EnumItem {
			Name: "Wedge";
			Value: 2;
			EnumType: typeof globalThis.Enum.MeshType;
		}

		export const Wedge: Wedge;

		export interface Prism extends globalThis.EnumItem {
			Name: "Prism";
			Value: 7;
			EnumType: typeof globalThis.Enum.MeshType;
		}

		export const Prism: Prism;

		export interface Pyramid extends globalThis.EnumItem {
			Name: "Pyramid";
			Value: 8;
			EnumType: typeof globalThis.Enum.MeshType;
		}

		export const Pyramid: Pyramid;

		export interface ParallelRamp extends globalThis.EnumItem {
			Name: "ParallelRamp";
			Value: 9;
			EnumType: typeof globalThis.Enum.MeshType;
		}

		export const ParallelRamp: ParallelRamp;

		export interface RightAngleRamp extends globalThis.EnumItem {
			Name: "RightAngleRamp";
			Value: 10;
			EnumType: typeof globalThis.Enum.MeshType;
		}

		export const RightAngleRamp: RightAngleRamp;

		export interface CornerWedge extends globalThis.EnumItem {
			Name: "CornerWedge";
			Value: 11;
			EnumType: typeof globalThis.Enum.MeshType;
		}

		export const CornerWedge: CornerWedge;

		export interface Brick extends globalThis.EnumItem {
			Name: "Brick";
			Value: 6;
			EnumType: typeof globalThis.Enum.MeshType;
		}

		export const Brick: Brick;

		export interface Sphere extends globalThis.EnumItem {
			Name: "Sphere";
			Value: 3;
			EnumType: typeof globalThis.Enum.MeshType;
		}

		export const Sphere: Sphere;

		export interface Cylinder extends globalThis.EnumItem {
			Name: "Cylinder";
			Value: 4;
			EnumType: typeof globalThis.Enum.MeshType;
		}

		export const Cylinder: Cylinder;

		export interface FileMesh extends globalThis.EnumItem {
			Name: "FileMesh";
			Value: 5;
			EnumType: typeof globalThis.Enum.MeshType;
		}

		export const FileMesh: FileMesh;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.MeshType>;
	}
	export type MeshType = MeshType.Head | MeshType.Torso | MeshType.Wedge | MeshType.Prism | MeshType.Pyramid | MeshType.ParallelRamp | MeshType.RightAngleRamp | MeshType.CornerWedge | MeshType.Brick | MeshType.Sphere | MeshType.Cylinder | MeshType.FileMesh;

	export namespace MessageType {
		export interface MessageOutput extends globalThis.EnumItem {
			Name: "MessageOutput";
			Value: 0;
			EnumType: typeof globalThis.Enum.MessageType;
		}

		export const MessageOutput: MessageOutput;

		export interface MessageInfo extends globalThis.EnumItem {
			Name: "MessageInfo";
			Value: 1;
			EnumType: typeof globalThis.Enum.MessageType;
		}

		export const MessageInfo: MessageInfo;

		export interface MessageWarning extends globalThis.EnumItem {
			Name: "MessageWarning";
			Value: 2;
			EnumType: typeof globalThis.Enum.MessageType;
		}

		export const MessageWarning: MessageWarning;

		export interface MessageError extends globalThis.EnumItem {
			Name: "MessageError";
			Value: 3;
			EnumType: typeof globalThis.Enum.MessageType;
		}

		export const MessageError: MessageError;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.MessageType>;
	}
	export type MessageType = MessageType.MessageOutput | MessageType.MessageInfo | MessageType.MessageWarning | MessageType.MessageError;

	export namespace ModelLevelOfDetail {
		export interface Automatic extends globalThis.EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof globalThis.Enum.ModelLevelOfDetail;
		}

		export const Automatic: Automatic;

		export interface StreamingMesh extends globalThis.EnumItem {
			Name: "StreamingMesh";
			Value: 1;
			EnumType: typeof globalThis.Enum.ModelLevelOfDetail;
		}

		export const StreamingMesh: StreamingMesh;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.ModelLevelOfDetail;
		}

		export const Disabled: Disabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ModelLevelOfDetail>;
	}
	export type ModelLevelOfDetail = ModelLevelOfDetail.Automatic | ModelLevelOfDetail.StreamingMesh | ModelLevelOfDetail.Disabled;

	export namespace ModelStreamingBehavior {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.ModelStreamingBehavior;
		}

		export const Default: Default;

		export interface Legacy extends globalThis.EnumItem {
			Name: "Legacy";
			Value: 1;
			EnumType: typeof globalThis.Enum.ModelStreamingBehavior;
		}

		export const Legacy: Legacy;

		export interface Improved extends globalThis.EnumItem {
			Name: "Improved";
			Value: 2;
			EnumType: typeof globalThis.Enum.ModelStreamingBehavior;
		}

		export const Improved: Improved;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ModelStreamingBehavior>;
	}
	export type ModelStreamingBehavior = ModelStreamingBehavior.Default | ModelStreamingBehavior.Legacy | ModelStreamingBehavior.Improved;

	export namespace ModelStreamingMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.ModelStreamingMode;
		}

		export const Default: Default;

		export interface Atomic extends globalThis.EnumItem {
			Name: "Atomic";
			Value: 1;
			EnumType: typeof globalThis.Enum.ModelStreamingMode;
		}

		export const Atomic: Atomic;

		export interface Persistent extends globalThis.EnumItem {
			Name: "Persistent";
			Value: 2;
			EnumType: typeof globalThis.Enum.ModelStreamingMode;
		}

		export const Persistent: Persistent;

		export interface PersistentPerPlayer extends globalThis.EnumItem {
			Name: "PersistentPerPlayer";
			Value: 3;
			EnumType: typeof globalThis.Enum.ModelStreamingMode;
		}

		export const PersistentPerPlayer: PersistentPerPlayer;

		export interface Nonatomic extends globalThis.EnumItem {
			Name: "Nonatomic";
			Value: 4;
			EnumType: typeof globalThis.Enum.ModelStreamingMode;
		}

		export const Nonatomic: Nonatomic;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ModelStreamingMode>;
	}
	export type ModelStreamingMode = ModelStreamingMode.Default | ModelStreamingMode.Atomic | ModelStreamingMode.Persistent | ModelStreamingMode.PersistentPerPlayer | ModelStreamingMode.Nonatomic;

	export namespace ModifierKey {
		export interface Alt extends globalThis.EnumItem {
			Name: "Alt";
			Value: 2;
			EnumType: typeof globalThis.Enum.ModifierKey;
		}

		export const Alt: Alt;

		export interface Ctrl extends globalThis.EnumItem {
			Name: "Ctrl";
			Value: 1;
			EnumType: typeof globalThis.Enum.ModifierKey;
		}

		export const Ctrl: Ctrl;

		export interface Meta extends globalThis.EnumItem {
			Name: "Meta";
			Value: 3;
			EnumType: typeof globalThis.Enum.ModifierKey;
		}

		export const Meta: Meta;

		export interface Shift extends globalThis.EnumItem {
			Name: "Shift";
			Value: 0;
			EnumType: typeof globalThis.Enum.ModifierKey;
		}

		export const Shift: Shift;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ModifierKey>;
	}
	export type ModifierKey = ModifierKey.Alt | ModifierKey.Ctrl | ModifierKey.Meta | ModifierKey.Shift;

	export namespace MouseBehavior {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.MouseBehavior;
		}

		export const Default: Default;

		export interface LockCenter extends globalThis.EnumItem {
			Name: "LockCenter";
			Value: 1;
			EnumType: typeof globalThis.Enum.MouseBehavior;
		}

		export const LockCenter: LockCenter;

		export interface LockCurrentPosition extends globalThis.EnumItem {
			Name: "LockCurrentPosition";
			Value: 2;
			EnumType: typeof globalThis.Enum.MouseBehavior;
		}

		export const LockCurrentPosition: LockCurrentPosition;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.MouseBehavior>;
	}
	export type MouseBehavior = MouseBehavior.Default | MouseBehavior.LockCenter | MouseBehavior.LockCurrentPosition;

	export namespace MoveState {
		export interface Stopped extends globalThis.EnumItem {
			Name: "Stopped";
			Value: 0;
			EnumType: typeof globalThis.Enum.MoveState;
		}

		export const Stopped: Stopped;

		export interface Coasting extends globalThis.EnumItem {
			Name: "Coasting";
			Value: 1;
			EnumType: typeof globalThis.Enum.MoveState;
		}

		export const Coasting: Coasting;

		export interface Pushing extends globalThis.EnumItem {
			Name: "Pushing";
			Value: 2;
			EnumType: typeof globalThis.Enum.MoveState;
		}

		export const Pushing: Pushing;

		export interface Stopping extends globalThis.EnumItem {
			Name: "Stopping";
			Value: 3;
			EnumType: typeof globalThis.Enum.MoveState;
		}

		export const Stopping: Stopping;

		export interface AirFree extends globalThis.EnumItem {
			Name: "AirFree";
			Value: 4;
			EnumType: typeof globalThis.Enum.MoveState;
		}

		export const AirFree: AirFree;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.MoveState>;
	}
	export type MoveState = MoveState.Stopped | MoveState.Coasting | MoveState.Pushing | MoveState.Stopping | MoveState.AirFree;

	export namespace MuteState {
		export interface Unmuted extends globalThis.EnumItem {
			Name: "Unmuted";
			Value: 0;
			EnumType: typeof globalThis.Enum.MuteState;
		}

		export const Unmuted: Unmuted;

		export interface Muted extends globalThis.EnumItem {
			Name: "Muted";
			Value: 1;
			EnumType: typeof globalThis.Enum.MuteState;
		}

		export const Muted: Muted;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.MuteState>;
	}
	export type MuteState = MuteState.Unmuted | MuteState.Muted;

	export namespace NameOcclusion {
		export interface OccludeAll extends globalThis.EnumItem {
			Name: "OccludeAll";
			Value: 2;
			EnumType: typeof globalThis.Enum.NameOcclusion;
		}

		export const OccludeAll: OccludeAll;

		export interface EnemyOcclusion extends globalThis.EnumItem {
			Name: "EnemyOcclusion";
			Value: 1;
			EnumType: typeof globalThis.Enum.NameOcclusion;
		}

		export const EnemyOcclusion: EnemyOcclusion;

		export interface NoOcclusion extends globalThis.EnumItem {
			Name: "NoOcclusion";
			Value: 0;
			EnumType: typeof globalThis.Enum.NameOcclusion;
		}

		export const NoOcclusion: NoOcclusion;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.NameOcclusion>;
	}
	export type NameOcclusion = NameOcclusion.OccludeAll | NameOcclusion.EnemyOcclusion | NameOcclusion.NoOcclusion;

	export namespace NetworkOwnership {
		export interface Automatic extends globalThis.EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof globalThis.Enum.NetworkOwnership;
		}

		export const Automatic: Automatic;

		export interface Manual extends globalThis.EnumItem {
			Name: "Manual";
			Value: 1;
			EnumType: typeof globalThis.Enum.NetworkOwnership;
		}

		export const Manual: Manual;

		export interface OnContact extends globalThis.EnumItem {
			Name: "OnContact";
			Value: 2;
			EnumType: typeof globalThis.Enum.NetworkOwnership;
		}

		export const OnContact: OnContact;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.NetworkOwnership>;
	}
	export type NetworkOwnership = NetworkOwnership.Automatic | NetworkOwnership.Manual | NetworkOwnership.OnContact;

	export namespace NormalId {
		export interface Top extends globalThis.EnumItem {
			Name: "Top";
			Value: 1;
			EnumType: typeof globalThis.Enum.NormalId;
		}

		export const Top: Top;

		export interface Bottom extends globalThis.EnumItem {
			Name: "Bottom";
			Value: 4;
			EnumType: typeof globalThis.Enum.NormalId;
		}

		export const Bottom: Bottom;

		export interface Back extends globalThis.EnumItem {
			Name: "Back";
			Value: 2;
			EnumType: typeof globalThis.Enum.NormalId;
		}

		export const Back: Back;

		export interface Front extends globalThis.EnumItem {
			Name: "Front";
			Value: 5;
			EnumType: typeof globalThis.Enum.NormalId;
		}

		export const Front: Front;

		export interface Right extends globalThis.EnumItem {
			Name: "Right";
			Value: 0;
			EnumType: typeof globalThis.Enum.NormalId;
		}

		export const Right: Right;

		export interface Left extends globalThis.EnumItem {
			Name: "Left";
			Value: 3;
			EnumType: typeof globalThis.Enum.NormalId;
		}

		export const Left: Left;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.NormalId>;
	}
	export type NormalId = NormalId.Top | NormalId.Bottom | NormalId.Back | NormalId.Front | NormalId.Right | NormalId.Left;

	export namespace OrientationAlignmentMode {
		export interface OneAttachment extends globalThis.EnumItem {
			Name: "OneAttachment";
			Value: 0;
			EnumType: typeof globalThis.Enum.OrientationAlignmentMode;
		}

		export const OneAttachment: OneAttachment;

		export interface TwoAttachment extends globalThis.EnumItem {
			Name: "TwoAttachment";
			Value: 1;
			EnumType: typeof globalThis.Enum.OrientationAlignmentMode;
		}

		export const TwoAttachment: TwoAttachment;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.OrientationAlignmentMode>;
	}
	export type OrientationAlignmentMode = OrientationAlignmentMode.OneAttachment | OrientationAlignmentMode.TwoAttachment;

	export namespace OutfitSource {
		export interface All extends globalThis.EnumItem {
			Name: "All";
			Value: 1;
			EnumType: typeof globalThis.Enum.OutfitSource;
		}

		export const All: All;

		export interface Created extends globalThis.EnumItem {
			Name: "Created";
			Value: 2;
			EnumType: typeof globalThis.Enum.OutfitSource;
		}

		export const Created: Created;

		export interface Purchased extends globalThis.EnumItem {
			Name: "Purchased";
			Value: 3;
			EnumType: typeof globalThis.Enum.OutfitSource;
		}

		export const Purchased: Purchased;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.OutfitSource>;
	}
	export type OutfitSource = OutfitSource.All | OutfitSource.Created | OutfitSource.Purchased;

	export namespace OutfitType {
		export interface All extends globalThis.EnumItem {
			Name: "All";
			Value: 1;
			EnumType: typeof globalThis.Enum.OutfitType;
		}

		export const All: All;

		export interface Avatar extends globalThis.EnumItem {
			Name: "Avatar";
			Value: 2;
			EnumType: typeof globalThis.Enum.OutfitType;
		}

		export const Avatar: Avatar;

		export interface DynamicHead extends globalThis.EnumItem {
			Name: "DynamicHead";
			Value: 3;
			EnumType: typeof globalThis.Enum.OutfitType;
		}

		export const DynamicHead: DynamicHead;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.OutfitType>;
	}
	export type OutfitType = OutfitType.All | OutfitType.Avatar | OutfitType.DynamicHead;

	export namespace OutputLayoutMode {
		export interface Horizontal extends globalThis.EnumItem {
			Name: "Horizontal";
			Value: 0;
			EnumType: typeof globalThis.Enum.OutputLayoutMode;
		}

		export const Horizontal: Horizontal;

		export interface Vertical extends globalThis.EnumItem {
			Name: "Vertical";
			Value: 1;
			EnumType: typeof globalThis.Enum.OutputLayoutMode;
		}

		export const Vertical: Vertical;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.OutputLayoutMode>;
	}
	export type OutputLayoutMode = OutputLayoutMode.Horizontal | OutputLayoutMode.Vertical;

	export namespace OverrideMouseIconBehavior {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.OverrideMouseIconBehavior;
		}

		export const None: None;

		export interface ForceShow extends globalThis.EnumItem {
			Name: "ForceShow";
			Value: 1;
			EnumType: typeof globalThis.Enum.OverrideMouseIconBehavior;
		}

		export const ForceShow: ForceShow;

		export interface ForceHide extends globalThis.EnumItem {
			Name: "ForceHide";
			Value: 2;
			EnumType: typeof globalThis.Enum.OverrideMouseIconBehavior;
		}

		export const ForceHide: ForceHide;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.OverrideMouseIconBehavior>;
	}
	export type OverrideMouseIconBehavior = OverrideMouseIconBehavior.None | OverrideMouseIconBehavior.ForceShow | OverrideMouseIconBehavior.ForceHide;

	export namespace PackagePermission {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.PackagePermission;
		}

		export const None: None;

		export interface NoAccess extends globalThis.EnumItem {
			Name: "NoAccess";
			Value: 1;
			EnumType: typeof globalThis.Enum.PackagePermission;
		}

		export const NoAccess: NoAccess;

		export interface Revoked extends globalThis.EnumItem {
			Name: "Revoked";
			Value: 2;
			EnumType: typeof globalThis.Enum.PackagePermission;
		}

		export const Revoked: Revoked;

		export interface UseView extends globalThis.EnumItem {
			Name: "UseView";
			Value: 3;
			EnumType: typeof globalThis.Enum.PackagePermission;
		}

		export const UseView: UseView;

		export interface Edit extends globalThis.EnumItem {
			Name: "Edit";
			Value: 4;
			EnumType: typeof globalThis.Enum.PackagePermission;
		}

		export const Edit: Edit;

		export interface Own extends globalThis.EnumItem {
			Name: "Own";
			Value: 5;
			EnumType: typeof globalThis.Enum.PackagePermission;
		}

		export const Own: Own;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PackagePermission>;
	}
	export type PackagePermission = PackagePermission.None | PackagePermission.NoAccess | PackagePermission.Revoked | PackagePermission.UseView | PackagePermission.Edit | PackagePermission.Own;

	export namespace PartType {
		export interface Ball extends globalThis.EnumItem {
			Name: "Ball";
			Value: 0;
			EnumType: typeof globalThis.Enum.PartType;
		}

		export const Ball: Ball;

		export interface Block extends globalThis.EnumItem {
			Name: "Block";
			Value: 1;
			EnumType: typeof globalThis.Enum.PartType;
		}

		export const Block: Block;

		export interface Cylinder extends globalThis.EnumItem {
			Name: "Cylinder";
			Value: 2;
			EnumType: typeof globalThis.Enum.PartType;
		}

		export const Cylinder: Cylinder;

		export interface Wedge extends globalThis.EnumItem {
			Name: "Wedge";
			Value: 3;
			EnumType: typeof globalThis.Enum.PartType;
		}

		export const Wedge: Wedge;

		export interface CornerWedge extends globalThis.EnumItem {
			Name: "CornerWedge";
			Value: 4;
			EnumType: typeof globalThis.Enum.PartType;
		}

		export const CornerWedge: CornerWedge;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PartType>;
	}
	export type PartType = PartType.Ball | PartType.Block | PartType.Cylinder | PartType.Wedge | PartType.CornerWedge;

	export namespace ParticleEmitterShape {
		export interface Box extends globalThis.EnumItem {
			Name: "Box";
			Value: 0;
			EnumType: typeof globalThis.Enum.ParticleEmitterShape;
		}

		export const Box: Box;

		export interface Sphere extends globalThis.EnumItem {
			Name: "Sphere";
			Value: 1;
			EnumType: typeof globalThis.Enum.ParticleEmitterShape;
		}

		export const Sphere: Sphere;

		export interface Cylinder extends globalThis.EnumItem {
			Name: "Cylinder";
			Value: 2;
			EnumType: typeof globalThis.Enum.ParticleEmitterShape;
		}

		export const Cylinder: Cylinder;

		export interface Disc extends globalThis.EnumItem {
			Name: "Disc";
			Value: 3;
			EnumType: typeof globalThis.Enum.ParticleEmitterShape;
		}

		export const Disc: Disc;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ParticleEmitterShape>;
	}
	export type ParticleEmitterShape = ParticleEmitterShape.Box | ParticleEmitterShape.Sphere | ParticleEmitterShape.Cylinder | ParticleEmitterShape.Disc;

	export namespace ParticleEmitterShapeInOut {
		export interface Outward extends globalThis.EnumItem {
			Name: "Outward";
			Value: 0;
			EnumType: typeof globalThis.Enum.ParticleEmitterShapeInOut;
		}

		export const Outward: Outward;

		export interface Inward extends globalThis.EnumItem {
			Name: "Inward";
			Value: 1;
			EnumType: typeof globalThis.Enum.ParticleEmitterShapeInOut;
		}

		export const Inward: Inward;

		export interface InAndOut extends globalThis.EnumItem {
			Name: "InAndOut";
			Value: 2;
			EnumType: typeof globalThis.Enum.ParticleEmitterShapeInOut;
		}

		export const InAndOut: InAndOut;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ParticleEmitterShapeInOut>;
	}
	export type ParticleEmitterShapeInOut = ParticleEmitterShapeInOut.Outward | ParticleEmitterShapeInOut.Inward | ParticleEmitterShapeInOut.InAndOut;

	export namespace ParticleEmitterShapeStyle {
		export interface Volume extends globalThis.EnumItem {
			Name: "Volume";
			Value: 0;
			EnumType: typeof globalThis.Enum.ParticleEmitterShapeStyle;
		}

		export const Volume: Volume;

		export interface Surface extends globalThis.EnumItem {
			Name: "Surface";
			Value: 1;
			EnumType: typeof globalThis.Enum.ParticleEmitterShapeStyle;
		}

		export const Surface: Surface;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ParticleEmitterShapeStyle>;
	}
	export type ParticleEmitterShapeStyle = ParticleEmitterShapeStyle.Volume | ParticleEmitterShapeStyle.Surface;

	export namespace ParticleFlipbookLayout {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.ParticleFlipbookLayout;
		}

		export const None: None;

		export interface Grid2x2 extends globalThis.EnumItem {
			Name: "Grid2x2";
			Value: 1;
			EnumType: typeof globalThis.Enum.ParticleFlipbookLayout;
		}

		export const Grid2x2: Grid2x2;

		export interface Grid4x4 extends globalThis.EnumItem {
			Name: "Grid4x4";
			Value: 2;
			EnumType: typeof globalThis.Enum.ParticleFlipbookLayout;
		}

		export const Grid4x4: Grid4x4;

		export interface Grid8x8 extends globalThis.EnumItem {
			Name: "Grid8x8";
			Value: 3;
			EnumType: typeof globalThis.Enum.ParticleFlipbookLayout;
		}

		export const Grid8x8: Grid8x8;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ParticleFlipbookLayout>;
	}
	export type ParticleFlipbookLayout = ParticleFlipbookLayout.None | ParticleFlipbookLayout.Grid2x2 | ParticleFlipbookLayout.Grid4x4 | ParticleFlipbookLayout.Grid8x8;

	export namespace ParticleFlipbookMode {
		export interface Loop extends globalThis.EnumItem {
			Name: "Loop";
			Value: 0;
			EnumType: typeof globalThis.Enum.ParticleFlipbookMode;
		}

		export const Loop: Loop;

		export interface OneShot extends globalThis.EnumItem {
			Name: "OneShot";
			Value: 1;
			EnumType: typeof globalThis.Enum.ParticleFlipbookMode;
		}

		export const OneShot: OneShot;

		export interface PingPong extends globalThis.EnumItem {
			Name: "PingPong";
			Value: 2;
			EnumType: typeof globalThis.Enum.ParticleFlipbookMode;
		}

		export const PingPong: PingPong;

		export interface Random extends globalThis.EnumItem {
			Name: "Random";
			Value: 3;
			EnumType: typeof globalThis.Enum.ParticleFlipbookMode;
		}

		export const Random: Random;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ParticleFlipbookMode>;
	}
	export type ParticleFlipbookMode = ParticleFlipbookMode.Loop | ParticleFlipbookMode.OneShot | ParticleFlipbookMode.PingPong | ParticleFlipbookMode.Random;

	export namespace ParticleFlipbookTextureCompatible {
		export interface NotCompatible extends globalThis.EnumItem {
			Name: "NotCompatible";
			Value: 0;
			EnumType: typeof globalThis.Enum.ParticleFlipbookTextureCompatible;
		}

		export const NotCompatible: NotCompatible;

		export interface Compatible extends globalThis.EnumItem {
			Name: "Compatible";
			Value: 1;
			EnumType: typeof globalThis.Enum.ParticleFlipbookTextureCompatible;
		}

		export const Compatible: Compatible;

		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 2;
			EnumType: typeof globalThis.Enum.ParticleFlipbookTextureCompatible;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ParticleFlipbookTextureCompatible>;
	}
	export type ParticleFlipbookTextureCompatible = ParticleFlipbookTextureCompatible.NotCompatible | ParticleFlipbookTextureCompatible.Compatible | ParticleFlipbookTextureCompatible.Unknown;

	export namespace ParticleOrientation {
		export interface FacingCamera extends globalThis.EnumItem {
			Name: "FacingCamera";
			Value: 0;
			EnumType: typeof globalThis.Enum.ParticleOrientation;
		}

		export const FacingCamera: FacingCamera;

		export interface FacingCameraWorldUp extends globalThis.EnumItem {
			Name: "FacingCameraWorldUp";
			Value: 1;
			EnumType: typeof globalThis.Enum.ParticleOrientation;
		}

		export const FacingCameraWorldUp: FacingCameraWorldUp;

		export interface VelocityParallel extends globalThis.EnumItem {
			Name: "VelocityParallel";
			Value: 2;
			EnumType: typeof globalThis.Enum.ParticleOrientation;
		}

		export const VelocityParallel: VelocityParallel;

		export interface VelocityPerpendicular extends globalThis.EnumItem {
			Name: "VelocityPerpendicular";
			Value: 3;
			EnumType: typeof globalThis.Enum.ParticleOrientation;
		}

		export const VelocityPerpendicular: VelocityPerpendicular;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ParticleOrientation>;
	}
	export type ParticleOrientation = ParticleOrientation.FacingCamera | ParticleOrientation.FacingCameraWorldUp | ParticleOrientation.VelocityParallel | ParticleOrientation.VelocityPerpendicular;

	export namespace PathStatus {
		export interface Success extends globalThis.EnumItem {
			Name: "Success";
			Value: 0;
			EnumType: typeof globalThis.Enum.PathStatus;
		}

		export const Success: Success;

		export interface ClosestNoPath extends globalThis.EnumItem {
			Name: "ClosestNoPath";
			Value: 1;
			EnumType: typeof globalThis.Enum.PathStatus;
		}

		export const ClosestNoPath: ClosestNoPath;

		export interface ClosestOutOfRange extends globalThis.EnumItem {
			Name: "ClosestOutOfRange";
			Value: 2;
			EnumType: typeof globalThis.Enum.PathStatus;
		}

		export const ClosestOutOfRange: ClosestOutOfRange;

		export interface FailStartNotEmpty extends globalThis.EnumItem {
			Name: "FailStartNotEmpty";
			Value: 3;
			EnumType: typeof globalThis.Enum.PathStatus;
		}

		export const FailStartNotEmpty: FailStartNotEmpty;

		export interface FailFinishNotEmpty extends globalThis.EnumItem {
			Name: "FailFinishNotEmpty";
			Value: 4;
			EnumType: typeof globalThis.Enum.PathStatus;
		}

		export const FailFinishNotEmpty: FailFinishNotEmpty;

		export interface NoPath extends globalThis.EnumItem {
			Name: "NoPath";
			Value: 5;
			EnumType: typeof globalThis.Enum.PathStatus;
		}

		export const NoPath: NoPath;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PathStatus>;
	}
	export type PathStatus = PathStatus.Success | PathStatus.ClosestNoPath | PathStatus.ClosestOutOfRange | PathStatus.FailStartNotEmpty | PathStatus.FailFinishNotEmpty | PathStatus.NoPath;

	export namespace PathWaypointAction {
		export interface Walk extends globalThis.EnumItem {
			Name: "Walk";
			Value: 0;
			EnumType: typeof globalThis.Enum.PathWaypointAction;
		}

		export const Walk: Walk;

		export interface Jump extends globalThis.EnumItem {
			Name: "Jump";
			Value: 1;
			EnumType: typeof globalThis.Enum.PathWaypointAction;
		}

		export const Jump: Jump;

		export interface Custom extends globalThis.EnumItem {
			Name: "Custom";
			Value: 2;
			EnumType: typeof globalThis.Enum.PathWaypointAction;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PathWaypointAction>;
	}
	export type PathWaypointAction = PathWaypointAction.Walk | PathWaypointAction.Jump | PathWaypointAction.Custom;

	export namespace PermissionLevelShown {
		export interface Game extends globalThis.EnumItem {
			Name: "Game";
			Value: 0;
			EnumType: typeof globalThis.Enum.PermissionLevelShown;
		}

		export const Game: Game;

		export interface RobloxGame extends globalThis.EnumItem {
			Name: "RobloxGame";
			Value: 1;
			EnumType: typeof globalThis.Enum.PermissionLevelShown;
		}

		export const RobloxGame: RobloxGame;

		export interface RobloxScript extends globalThis.EnumItem {
			Name: "RobloxScript";
			Value: 2;
			EnumType: typeof globalThis.Enum.PermissionLevelShown;
		}

		export const RobloxScript: RobloxScript;

		export interface Studio extends globalThis.EnumItem {
			Name: "Studio";
			Value: 3;
			EnumType: typeof globalThis.Enum.PermissionLevelShown;
		}

		export const Studio: Studio;

		export interface Roblox extends globalThis.EnumItem {
			Name: "Roblox";
			Value: 4;
			EnumType: typeof globalThis.Enum.PermissionLevelShown;
		}

		export const Roblox: Roblox;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PermissionLevelShown>;
	}
	export type PermissionLevelShown = PermissionLevelShown.Game | PermissionLevelShown.RobloxGame | PermissionLevelShown.RobloxScript | PermissionLevelShown.Studio | PermissionLevelShown.Roblox;

	export namespace PhysicsSimulationRate {
		export interface Fixed240Hz extends globalThis.EnumItem {
			Name: "Fixed240Hz";
			Value: 0;
			EnumType: typeof globalThis.Enum.PhysicsSimulationRate;
		}

		export const Fixed240Hz: Fixed240Hz;

		export interface Fixed120Hz extends globalThis.EnumItem {
			Name: "Fixed120Hz";
			Value: 1;
			EnumType: typeof globalThis.Enum.PhysicsSimulationRate;
		}

		export const Fixed120Hz: Fixed120Hz;

		export interface Fixed60Hz extends globalThis.EnumItem {
			Name: "Fixed60Hz";
			Value: 2;
			EnumType: typeof globalThis.Enum.PhysicsSimulationRate;
		}

		export const Fixed60Hz: Fixed60Hz;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PhysicsSimulationRate>;
	}
	export type PhysicsSimulationRate = PhysicsSimulationRate.Fixed240Hz | PhysicsSimulationRate.Fixed120Hz | PhysicsSimulationRate.Fixed60Hz;

	export namespace PhysicsSteppingMethod {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.PhysicsSteppingMethod;
		}

		export const Default: Default;

		export interface Fixed extends globalThis.EnumItem {
			Name: "Fixed";
			Value: 1;
			EnumType: typeof globalThis.Enum.PhysicsSteppingMethod;
		}

		export const Fixed: Fixed;

		export interface Adaptive extends globalThis.EnumItem {
			Name: "Adaptive";
			Value: 2;
			EnumType: typeof globalThis.Enum.PhysicsSteppingMethod;
		}

		export const Adaptive: Adaptive;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PhysicsSteppingMethod>;
	}
	export type PhysicsSteppingMethod = PhysicsSteppingMethod.Default | PhysicsSteppingMethod.Fixed | PhysicsSteppingMethod.Adaptive;

	export namespace Platform {
		export interface Windows extends globalThis.EnumItem {
			Name: "Windows";
			Value: 0;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const Windows: Windows;

		export interface OSX extends globalThis.EnumItem {
			Name: "OSX";
			Value: 1;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const OSX: OSX;

		export interface IOS extends globalThis.EnumItem {
			Name: "IOS";
			Value: 2;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const IOS: IOS;

		export interface Android extends globalThis.EnumItem {
			Name: "Android";
			Value: 3;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const Android: Android;

		export interface XBoxOne extends globalThis.EnumItem {
			Name: "XBoxOne";
			Value: 4;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const XBoxOne: XBoxOne;

		export interface PS4 extends globalThis.EnumItem {
			Name: "PS4";
			Value: 5;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const PS4: PS4;

		export interface PS3 extends globalThis.EnumItem {
			Name: "PS3";
			Value: 6;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const PS3: PS3;

		export interface XBox360 extends globalThis.EnumItem {
			Name: "XBox360";
			Value: 7;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const XBox360: XBox360;

		export interface WiiU extends globalThis.EnumItem {
			Name: "WiiU";
			Value: 8;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const WiiU: WiiU;

		export interface NX extends globalThis.EnumItem {
			Name: "NX";
			Value: 9;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const NX: NX;

		export interface Ouya extends globalThis.EnumItem {
			Name: "Ouya";
			Value: 10;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const Ouya: Ouya;

		export interface AndroidTV extends globalThis.EnumItem {
			Name: "AndroidTV";
			Value: 11;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const AndroidTV: AndroidTV;

		export interface Chromecast extends globalThis.EnumItem {
			Name: "Chromecast";
			Value: 12;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const Chromecast: Chromecast;

		export interface Linux extends globalThis.EnumItem {
			Name: "Linux";
			Value: 13;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const Linux: Linux;

		export interface SteamOS extends globalThis.EnumItem {
			Name: "SteamOS";
			Value: 14;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const SteamOS: SteamOS;

		export interface WebOS extends globalThis.EnumItem {
			Name: "WebOS";
			Value: 15;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const WebOS: WebOS;

		export interface DOS extends globalThis.EnumItem {
			Name: "DOS";
			Value: 16;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const DOS: DOS;

		export interface BeOS extends globalThis.EnumItem {
			Name: "BeOS";
			Value: 17;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const BeOS: BeOS;

		export interface UWP extends globalThis.EnumItem {
			Name: "UWP";
			Value: 18;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const UWP: UWP;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 20;
			EnumType: typeof globalThis.Enum.Platform;
		}

		export const None: None;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.Platform>;
	}
	export type Platform = Platform.Windows | Platform.OSX | Platform.IOS | Platform.Android | Platform.XBoxOne | Platform.PS4 | Platform.PS3 | Platform.XBox360 | Platform.WiiU | Platform.NX | Platform.Ouya | Platform.AndroidTV | Platform.Chromecast | Platform.Linux | Platform.SteamOS | Platform.WebOS | Platform.DOS | Platform.BeOS | Platform.UWP | Platform.None;

	export namespace PlaybackState {
		export interface Begin extends globalThis.EnumItem {
			Name: "Begin";
			Value: 0;
			EnumType: typeof globalThis.Enum.PlaybackState;
		}

		export const Begin: Begin;

		export interface Delayed extends globalThis.EnumItem {
			Name: "Delayed";
			Value: 1;
			EnumType: typeof globalThis.Enum.PlaybackState;
		}

		export const Delayed: Delayed;

		export interface Playing extends globalThis.EnumItem {
			Name: "Playing";
			Value: 2;
			EnumType: typeof globalThis.Enum.PlaybackState;
		}

		export const Playing: Playing;

		export interface Paused extends globalThis.EnumItem {
			Name: "Paused";
			Value: 3;
			EnumType: typeof globalThis.Enum.PlaybackState;
		}

		export const Paused: Paused;

		export interface Completed extends globalThis.EnumItem {
			Name: "Completed";
			Value: 4;
			EnumType: typeof globalThis.Enum.PlaybackState;
		}

		export const Completed: Completed;

		export interface Cancelled extends globalThis.EnumItem {
			Name: "Cancelled";
			Value: 5;
			EnumType: typeof globalThis.Enum.PlaybackState;
		}

		export const Cancelled: Cancelled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PlaybackState>;
	}
	export type PlaybackState = PlaybackState.Begin | PlaybackState.Delayed | PlaybackState.Playing | PlaybackState.Paused | PlaybackState.Completed | PlaybackState.Cancelled;

	export namespace PlayerActions {
		export interface CharacterForward extends globalThis.EnumItem {
			Name: "CharacterForward";
			Value: 0;
			EnumType: typeof globalThis.Enum.PlayerActions;
		}

		export const CharacterForward: CharacterForward;

		export interface CharacterBackward extends globalThis.EnumItem {
			Name: "CharacterBackward";
			Value: 1;
			EnumType: typeof globalThis.Enum.PlayerActions;
		}

		export const CharacterBackward: CharacterBackward;

		export interface CharacterLeft extends globalThis.EnumItem {
			Name: "CharacterLeft";
			Value: 2;
			EnumType: typeof globalThis.Enum.PlayerActions;
		}

		export const CharacterLeft: CharacterLeft;

		export interface CharacterRight extends globalThis.EnumItem {
			Name: "CharacterRight";
			Value: 3;
			EnumType: typeof globalThis.Enum.PlayerActions;
		}

		export const CharacterRight: CharacterRight;

		export interface CharacterJump extends globalThis.EnumItem {
			Name: "CharacterJump";
			Value: 4;
			EnumType: typeof globalThis.Enum.PlayerActions;
		}

		export const CharacterJump: CharacterJump;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PlayerActions>;
	}
	export type PlayerActions = PlayerActions.CharacterForward | PlayerActions.CharacterBackward | PlayerActions.CharacterLeft | PlayerActions.CharacterRight | PlayerActions.CharacterJump;

	export namespace PlayerChatType {
		export interface All extends globalThis.EnumItem {
			Name: "All";
			Value: 0;
			EnumType: typeof globalThis.Enum.PlayerChatType;
		}

		export const All: All;

		export interface Team extends globalThis.EnumItem {
			Name: "Team";
			Value: 1;
			EnumType: typeof globalThis.Enum.PlayerChatType;
		}

		export const Team: Team;

		export interface Whisper extends globalThis.EnumItem {
			Name: "Whisper";
			Value: 2;
			EnumType: typeof globalThis.Enum.PlayerChatType;
		}

		export const Whisper: Whisper;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PlayerChatType>;
	}
	export type PlayerChatType = PlayerChatType.All | PlayerChatType.Team | PlayerChatType.Whisper;

	export namespace PoseEasingDirection {
		export interface Out extends globalThis.EnumItem {
			Name: "Out";
			Value: 1;
			EnumType: typeof globalThis.Enum.PoseEasingDirection;
		}

		export const Out: Out;

		export interface InOut extends globalThis.EnumItem {
			Name: "InOut";
			Value: 2;
			EnumType: typeof globalThis.Enum.PoseEasingDirection;
		}

		export const InOut: InOut;

		export interface In extends globalThis.EnumItem {
			Name: "In";
			Value: 0;
			EnumType: typeof globalThis.Enum.PoseEasingDirection;
		}

		export const In: In;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PoseEasingDirection>;
	}
	export type PoseEasingDirection = PoseEasingDirection.Out | PoseEasingDirection.InOut | PoseEasingDirection.In;

	export namespace PoseEasingStyle {
		export interface Linear extends globalThis.EnumItem {
			Name: "Linear";
			Value: 0;
			EnumType: typeof globalThis.Enum.PoseEasingStyle;
		}

		export const Linear: Linear;

		export interface Constant extends globalThis.EnumItem {
			Name: "Constant";
			Value: 1;
			EnumType: typeof globalThis.Enum.PoseEasingStyle;
		}

		export const Constant: Constant;

		export interface Elastic extends globalThis.EnumItem {
			Name: "Elastic";
			Value: 2;
			EnumType: typeof globalThis.Enum.PoseEasingStyle;
		}

		export const Elastic: Elastic;

		export interface Cubic extends globalThis.EnumItem {
			Name: "Cubic";
			Value: 3;
			EnumType: typeof globalThis.Enum.PoseEasingStyle;
		}

		export const Cubic: Cubic;

		export interface Bounce extends globalThis.EnumItem {
			Name: "Bounce";
			Value: 4;
			EnumType: typeof globalThis.Enum.PoseEasingStyle;
		}

		export const Bounce: Bounce;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PoseEasingStyle>;
	}
	export type PoseEasingStyle = PoseEasingStyle.Linear | PoseEasingStyle.Constant | PoseEasingStyle.Elastic | PoseEasingStyle.Cubic | PoseEasingStyle.Bounce;

	export namespace PositionAlignmentMode {
		export interface OneAttachment extends globalThis.EnumItem {
			Name: "OneAttachment";
			Value: 0;
			EnumType: typeof globalThis.Enum.PositionAlignmentMode;
		}

		export const OneAttachment: OneAttachment;

		export interface TwoAttachment extends globalThis.EnumItem {
			Name: "TwoAttachment";
			Value: 1;
			EnumType: typeof globalThis.Enum.PositionAlignmentMode;
		}

		export const TwoAttachment: TwoAttachment;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PositionAlignmentMode>;
	}
	export type PositionAlignmentMode = PositionAlignmentMode.OneAttachment | PositionAlignmentMode.TwoAttachment;

	export namespace PrivilegeType {
		export interface Owner extends globalThis.EnumItem {
			Name: "Owner";
			Value: 255;
			EnumType: typeof globalThis.Enum.PrivilegeType;
		}

		export const Owner: Owner;

		export interface Admin extends globalThis.EnumItem {
			Name: "Admin";
			Value: 240;
			EnumType: typeof globalThis.Enum.PrivilegeType;
		}

		export const Admin: Admin;

		export interface Member extends globalThis.EnumItem {
			Name: "Member";
			Value: 128;
			EnumType: typeof globalThis.Enum.PrivilegeType;
		}

		export const Member: Member;

		export interface Visitor extends globalThis.EnumItem {
			Name: "Visitor";
			Value: 10;
			EnumType: typeof globalThis.Enum.PrivilegeType;
		}

		export const Visitor: Visitor;

		export interface Banned extends globalThis.EnumItem {
			Name: "Banned";
			Value: 0;
			EnumType: typeof globalThis.Enum.PrivilegeType;
		}

		export const Banned: Banned;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PrivilegeType>;
	}
	export type PrivilegeType = PrivilegeType.Owner | PrivilegeType.Admin | PrivilegeType.Member | PrivilegeType.Visitor | PrivilegeType.Banned;

	export namespace ProductLocationRestriction {
		export interface AvatarShop extends globalThis.EnumItem {
			Name: "AvatarShop";
			Value: 0;
			EnumType: typeof globalThis.Enum.ProductLocationRestriction;
		}

		export const AvatarShop: AvatarShop;

		export interface AllowedGames extends globalThis.EnumItem {
			Name: "AllowedGames";
			Value: 1;
			EnumType: typeof globalThis.Enum.ProductLocationRestriction;
		}

		export const AllowedGames: AllowedGames;

		export interface AllGames extends globalThis.EnumItem {
			Name: "AllGames";
			Value: 2;
			EnumType: typeof globalThis.Enum.ProductLocationRestriction;
		}

		export const AllGames: AllGames;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ProductLocationRestriction>;
	}
	export type ProductLocationRestriction = ProductLocationRestriction.AvatarShop | ProductLocationRestriction.AllowedGames | ProductLocationRestriction.AllGames;

	export namespace ProductPurchaseDecision {
		export interface NotProcessedYet extends globalThis.EnumItem {
			Name: "NotProcessedYet";
			Value: 0;
			EnumType: typeof globalThis.Enum.ProductPurchaseDecision;
		}

		export const NotProcessedYet: NotProcessedYet;

		export interface PurchaseGranted extends globalThis.EnumItem {
			Name: "PurchaseGranted";
			Value: 1;
			EnumType: typeof globalThis.Enum.ProductPurchaseDecision;
		}

		export const PurchaseGranted: PurchaseGranted;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ProductPurchaseDecision>;
	}
	export type ProductPurchaseDecision = ProductPurchaseDecision.NotProcessedYet | ProductPurchaseDecision.PurchaseGranted;

	export namespace PromptCreateAssetResult {
		export interface Success extends globalThis.EnumItem {
			Name: "Success";
			Value: 1;
			EnumType: typeof globalThis.Enum.PromptCreateAssetResult;
		}

		export const Success: Success;

		export interface PermissionDenied extends globalThis.EnumItem {
			Name: "PermissionDenied";
			Value: 2;
			EnumType: typeof globalThis.Enum.PromptCreateAssetResult;
		}

		export const PermissionDenied: PermissionDenied;

		export interface Timeout extends globalThis.EnumItem {
			Name: "Timeout";
			Value: 3;
			EnumType: typeof globalThis.Enum.PromptCreateAssetResult;
		}

		export const Timeout: Timeout;

		export interface UploadFailed extends globalThis.EnumItem {
			Name: "UploadFailed";
			Value: 4;
			EnumType: typeof globalThis.Enum.PromptCreateAssetResult;
		}

		export const UploadFailed: UploadFailed;

		export interface NoUserInput extends globalThis.EnumItem {
			Name: "NoUserInput";
			Value: 5;
			EnumType: typeof globalThis.Enum.PromptCreateAssetResult;
		}

		export const NoUserInput: NoUserInput;

		export interface UnknownFailure extends globalThis.EnumItem {
			Name: "UnknownFailure";
			Value: 6;
			EnumType: typeof globalThis.Enum.PromptCreateAssetResult;
		}

		export const UnknownFailure: UnknownFailure;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PromptCreateAssetResult>;
	}
	export type PromptCreateAssetResult = PromptCreateAssetResult.Success | PromptCreateAssetResult.PermissionDenied | PromptCreateAssetResult.Timeout | PromptCreateAssetResult.UploadFailed | PromptCreateAssetResult.NoUserInput | PromptCreateAssetResult.UnknownFailure;

	export namespace PromptPublishAssetResult {
		export interface Success extends globalThis.EnumItem {
			Name: "Success";
			Value: 1;
			EnumType: typeof globalThis.Enum.PromptPublishAssetResult;
		}

		export const Success: Success;

		export interface PermissionDenied extends globalThis.EnumItem {
			Name: "PermissionDenied";
			Value: 2;
			EnumType: typeof globalThis.Enum.PromptPublishAssetResult;
		}

		export const PermissionDenied: PermissionDenied;

		export interface Timeout extends globalThis.EnumItem {
			Name: "Timeout";
			Value: 3;
			EnumType: typeof globalThis.Enum.PromptPublishAssetResult;
		}

		export const Timeout: Timeout;

		export interface UploadFailed extends globalThis.EnumItem {
			Name: "UploadFailed";
			Value: 4;
			EnumType: typeof globalThis.Enum.PromptPublishAssetResult;
		}

		export const UploadFailed: UploadFailed;

		export interface NoUserInput extends globalThis.EnumItem {
			Name: "NoUserInput";
			Value: 5;
			EnumType: typeof globalThis.Enum.PromptPublishAssetResult;
		}

		export const NoUserInput: NoUserInput;

		export interface UnknownFailure extends globalThis.EnumItem {
			Name: "UnknownFailure";
			Value: 6;
			EnumType: typeof globalThis.Enum.PromptPublishAssetResult;
		}

		export const UnknownFailure: UnknownFailure;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PromptPublishAssetResult>;
	}
	export type PromptPublishAssetResult = PromptPublishAssetResult.Success | PromptPublishAssetResult.PermissionDenied | PromptPublishAssetResult.Timeout | PromptPublishAssetResult.UploadFailed | PromptPublishAssetResult.NoUserInput | PromptPublishAssetResult.UnknownFailure;

	export namespace PropertyStatus {
		export interface Ok extends globalThis.EnumItem {
			Name: "Ok";
			Value: 0;
			EnumType: typeof globalThis.Enum.PropertyStatus;
		}

		export const Ok: Ok;

		export interface Warning extends globalThis.EnumItem {
			Name: "Warning";
			Value: 1;
			EnumType: typeof globalThis.Enum.PropertyStatus;
		}

		export const Warning: Warning;

		export interface Error extends globalThis.EnumItem {
			Name: "Error";
			Value: 2;
			EnumType: typeof globalThis.Enum.PropertyStatus;
		}

		export const Error: Error;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.PropertyStatus>;
	}
	export type PropertyStatus = PropertyStatus.Ok | PropertyStatus.Warning | PropertyStatus.Error;

	export namespace ProximityPromptExclusivity {
		export interface OnePerButton extends globalThis.EnumItem {
			Name: "OnePerButton";
			Value: 0;
			EnumType: typeof globalThis.Enum.ProximityPromptExclusivity;
		}

		export const OnePerButton: OnePerButton;

		export interface OneGlobally extends globalThis.EnumItem {
			Name: "OneGlobally";
			Value: 1;
			EnumType: typeof globalThis.Enum.ProximityPromptExclusivity;
		}

		export const OneGlobally: OneGlobally;

		export interface AlwaysShow extends globalThis.EnumItem {
			Name: "AlwaysShow";
			Value: 2;
			EnumType: typeof globalThis.Enum.ProximityPromptExclusivity;
		}

		export const AlwaysShow: AlwaysShow;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ProximityPromptExclusivity>;
	}
	export type ProximityPromptExclusivity = ProximityPromptExclusivity.OnePerButton | ProximityPromptExclusivity.OneGlobally | ProximityPromptExclusivity.AlwaysShow;

	export namespace ProximityPromptInputType {
		export interface Keyboard extends globalThis.EnumItem {
			Name: "Keyboard";
			Value: 0;
			EnumType: typeof globalThis.Enum.ProximityPromptInputType;
		}

		export const Keyboard: Keyboard;

		export interface Gamepad extends globalThis.EnumItem {
			Name: "Gamepad";
			Value: 1;
			EnumType: typeof globalThis.Enum.ProximityPromptInputType;
		}

		export const Gamepad: Gamepad;

		export interface Touch extends globalThis.EnumItem {
			Name: "Touch";
			Value: 2;
			EnumType: typeof globalThis.Enum.ProximityPromptInputType;
		}

		export const Touch: Touch;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ProximityPromptInputType>;
	}
	export type ProximityPromptInputType = ProximityPromptInputType.Keyboard | ProximityPromptInputType.Gamepad | ProximityPromptInputType.Touch;

	export namespace ProximityPromptStyle {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.ProximityPromptStyle;
		}

		export const Default: Default;

		export interface Custom extends globalThis.EnumItem {
			Name: "Custom";
			Value: 1;
			EnumType: typeof globalThis.Enum.ProximityPromptStyle;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ProximityPromptStyle>;
	}
	export type ProximityPromptStyle = ProximityPromptStyle.Default | ProximityPromptStyle.Custom;

	export namespace QualityLevel {
		export interface Automatic extends globalThis.EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Automatic: Automatic;

		export interface Level01 extends globalThis.EnumItem {
			Name: "Level01";
			Value: 1;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level01: Level01;

		export interface Level02 extends globalThis.EnumItem {
			Name: "Level02";
			Value: 2;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level02: Level02;

		export interface Level03 extends globalThis.EnumItem {
			Name: "Level03";
			Value: 3;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level03: Level03;

		export interface Level04 extends globalThis.EnumItem {
			Name: "Level04";
			Value: 4;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level04: Level04;

		export interface Level05 extends globalThis.EnumItem {
			Name: "Level05";
			Value: 5;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level05: Level05;

		export interface Level06 extends globalThis.EnumItem {
			Name: "Level06";
			Value: 6;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level06: Level06;

		export interface Level07 extends globalThis.EnumItem {
			Name: "Level07";
			Value: 7;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level07: Level07;

		export interface Level08 extends globalThis.EnumItem {
			Name: "Level08";
			Value: 8;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level08: Level08;

		export interface Level09 extends globalThis.EnumItem {
			Name: "Level09";
			Value: 9;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level09: Level09;

		export interface Level10 extends globalThis.EnumItem {
			Name: "Level10";
			Value: 10;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level10: Level10;

		export interface Level11 extends globalThis.EnumItem {
			Name: "Level11";
			Value: 11;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level11: Level11;

		export interface Level12 extends globalThis.EnumItem {
			Name: "Level12";
			Value: 12;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level12: Level12;

		export interface Level13 extends globalThis.EnumItem {
			Name: "Level13";
			Value: 13;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level13: Level13;

		export interface Level14 extends globalThis.EnumItem {
			Name: "Level14";
			Value: 14;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level14: Level14;

		export interface Level15 extends globalThis.EnumItem {
			Name: "Level15";
			Value: 15;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level15: Level15;

		export interface Level16 extends globalThis.EnumItem {
			Name: "Level16";
			Value: 16;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level16: Level16;

		export interface Level17 extends globalThis.EnumItem {
			Name: "Level17";
			Value: 17;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level17: Level17;

		export interface Level18 extends globalThis.EnumItem {
			Name: "Level18";
			Value: 18;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level18: Level18;

		export interface Level19 extends globalThis.EnumItem {
			Name: "Level19";
			Value: 19;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level19: Level19;

		export interface Level20 extends globalThis.EnumItem {
			Name: "Level20";
			Value: 20;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level20: Level20;

		export interface Level21 extends globalThis.EnumItem {
			Name: "Level21";
			Value: 21;
			EnumType: typeof globalThis.Enum.QualityLevel;
		}

		export const Level21: Level21;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.QualityLevel>;
	}
	export type QualityLevel = QualityLevel.Automatic | QualityLevel.Level01 | QualityLevel.Level02 | QualityLevel.Level03 | QualityLevel.Level04 | QualityLevel.Level05 | QualityLevel.Level06 | QualityLevel.Level07 | QualityLevel.Level08 | QualityLevel.Level09 | QualityLevel.Level10 | QualityLevel.Level11 | QualityLevel.Level12 | QualityLevel.Level13 | QualityLevel.Level14 | QualityLevel.Level15 | QualityLevel.Level16 | QualityLevel.Level17 | QualityLevel.Level18 | QualityLevel.Level19 | QualityLevel.Level20 | QualityLevel.Level21;

	export namespace R15CollisionType {
		export interface OuterBox extends globalThis.EnumItem {
			Name: "OuterBox";
			Value: 0;
			EnumType: typeof globalThis.Enum.R15CollisionType;
		}

		export const OuterBox: OuterBox;

		export interface InnerBox extends globalThis.EnumItem {
			Name: "InnerBox";
			Value: 1;
			EnumType: typeof globalThis.Enum.R15CollisionType;
		}

		export const InnerBox: InnerBox;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.R15CollisionType>;
	}
	export type R15CollisionType = R15CollisionType.OuterBox | R15CollisionType.InnerBox;

	export namespace RaycastFilterType {
		export interface Exclude extends globalThis.EnumItem {
			Name: "Exclude";
			Value: 0;
			EnumType: typeof globalThis.Enum.RaycastFilterType;
		}

		export const Exclude: Exclude;
		/** @deprecated renamed to Exclude */
		export const Blacklist: Exclude;

		export interface Include extends globalThis.EnumItem {
			Name: "Include";
			Value: 1;
			EnumType: typeof globalThis.Enum.RaycastFilterType;
		}

		export const Include: Include;
		/** @deprecated renamed to Include */
		export const Whitelist: Include;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RaycastFilterType>;
	}
	export type RaycastFilterType = RaycastFilterType.Exclude | RaycastFilterType.Include;

	export namespace RejectCharacterDeletions {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.RejectCharacterDeletions;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.RejectCharacterDeletions;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.RejectCharacterDeletions;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RejectCharacterDeletions>;
	}
	export type RejectCharacterDeletions = RejectCharacterDeletions.Default | RejectCharacterDeletions.Disabled | RejectCharacterDeletions.Enabled;

	export namespace RenderFidelity {
		export interface Automatic extends globalThis.EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof globalThis.Enum.RenderFidelity;
		}

		export const Automatic: Automatic;

		export interface Precise extends globalThis.EnumItem {
			Name: "Precise";
			Value: 1;
			EnumType: typeof globalThis.Enum.RenderFidelity;
		}

		export const Precise: Precise;

		export interface Performance extends globalThis.EnumItem {
			Name: "Performance";
			Value: 2;
			EnumType: typeof globalThis.Enum.RenderFidelity;
		}

		export const Performance: Performance;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RenderFidelity>;
	}
	export type RenderFidelity = RenderFidelity.Automatic | RenderFidelity.Precise | RenderFidelity.Performance;

	export namespace RenderPriority {
		export interface First extends globalThis.EnumItem {
			Name: "First";
			Value: 0;
			EnumType: typeof globalThis.Enum.RenderPriority;
		}

		export const First: First;

		export interface Input extends globalThis.EnumItem {
			Name: "Input";
			Value: 100;
			EnumType: typeof globalThis.Enum.RenderPriority;
		}

		export const Input: Input;

		export interface Camera extends globalThis.EnumItem {
			Name: "Camera";
			Value: 200;
			EnumType: typeof globalThis.Enum.RenderPriority;
		}

		export const Camera: Camera;

		export interface Character extends globalThis.EnumItem {
			Name: "Character";
			Value: 300;
			EnumType: typeof globalThis.Enum.RenderPriority;
		}

		export const Character: Character;

		export interface Last extends globalThis.EnumItem {
			Name: "Last";
			Value: 2000;
			EnumType: typeof globalThis.Enum.RenderPriority;
		}

		export const Last: Last;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RenderPriority>;
	}
	export type RenderPriority = RenderPriority.First | RenderPriority.Input | RenderPriority.Camera | RenderPriority.Character | RenderPriority.Last;

	export namespace RenderingTestComparisonMethod {
		export interface psnr extends globalThis.EnumItem {
			Name: "psnr";
			Value: 0;
			EnumType: typeof globalThis.Enum.RenderingTestComparisonMethod;
		}

		export const psnr: psnr;

		export interface diff extends globalThis.EnumItem {
			Name: "diff";
			Value: 1;
			EnumType: typeof globalThis.Enum.RenderingTestComparisonMethod;
		}

		export const diff: diff;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RenderingTestComparisonMethod>;
	}
	export type RenderingTestComparisonMethod = RenderingTestComparisonMethod.psnr | RenderingTestComparisonMethod.diff;

	export namespace ReplicateInstanceDestroySetting {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.ReplicateInstanceDestroySetting;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.ReplicateInstanceDestroySetting;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.ReplicateInstanceDestroySetting;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ReplicateInstanceDestroySetting>;
	}
	export type ReplicateInstanceDestroySetting = ReplicateInstanceDestroySetting.Default | ReplicateInstanceDestroySetting.Disabled | ReplicateInstanceDestroySetting.Enabled;

	export namespace ResamplerMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.ResamplerMode;
		}

		export const Default: Default;

		export interface Pixelated extends globalThis.EnumItem {
			Name: "Pixelated";
			Value: 1;
			EnumType: typeof globalThis.Enum.ResamplerMode;
		}

		export const Pixelated: Pixelated;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ResamplerMode>;
	}
	export type ResamplerMode = ResamplerMode.Default | ResamplerMode.Pixelated;

	export namespace ReservedHighlightId {
		export interface Standard extends globalThis.EnumItem {
			Name: "Standard";
			Value: 0;
			EnumType: typeof globalThis.Enum.ReservedHighlightId;
		}

		export const Standard: Standard;

		export interface Selection extends globalThis.EnumItem {
			Name: "Selection";
			Value: 524288;
			EnumType: typeof globalThis.Enum.ReservedHighlightId;
		}

		export const Selection: Selection;

		export interface Hover extends globalThis.EnumItem {
			Name: "Hover";
			Value: 262144;
			EnumType: typeof globalThis.Enum.ReservedHighlightId;
		}

		export const Hover: Hover;

		export interface Active extends globalThis.EnumItem {
			Name: "Active";
			Value: 131072;
			EnumType: typeof globalThis.Enum.ReservedHighlightId;
		}

		export const Active: Active;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ReservedHighlightId>;
	}
	export type ReservedHighlightId = ReservedHighlightId.Standard | ReservedHighlightId.Selection | ReservedHighlightId.Hover | ReservedHighlightId.Active;

	export namespace RestPose {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.RestPose;
		}

		export const Default: Default;

		export interface RotationsReset extends globalThis.EnumItem {
			Name: "RotationsReset";
			Value: 1;
			EnumType: typeof globalThis.Enum.RestPose;
		}

		export const RotationsReset: RotationsReset;

		export interface Custom extends globalThis.EnumItem {
			Name: "Custom";
			Value: 2;
			EnumType: typeof globalThis.Enum.RestPose;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RestPose>;
	}
	export type RestPose = RestPose.Default | RestPose.RotationsReset | RestPose.Custom;

	export namespace ReturnKeyType {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.ReturnKeyType;
		}

		export const Default: Default;

		export interface Done extends globalThis.EnumItem {
			Name: "Done";
			Value: 1;
			EnumType: typeof globalThis.Enum.ReturnKeyType;
		}

		export const Done: Done;

		export interface Go extends globalThis.EnumItem {
			Name: "Go";
			Value: 2;
			EnumType: typeof globalThis.Enum.ReturnKeyType;
		}

		export const Go: Go;

		export interface Next extends globalThis.EnumItem {
			Name: "Next";
			Value: 3;
			EnumType: typeof globalThis.Enum.ReturnKeyType;
		}

		export const Next: Next;

		export interface Search extends globalThis.EnumItem {
			Name: "Search";
			Value: 4;
			EnumType: typeof globalThis.Enum.ReturnKeyType;
		}

		export const Search: Search;

		export interface Send extends globalThis.EnumItem {
			Name: "Send";
			Value: 5;
			EnumType: typeof globalThis.Enum.ReturnKeyType;
		}

		export const Send: Send;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ReturnKeyType>;
	}
	export type ReturnKeyType = ReturnKeyType.Default | ReturnKeyType.Done | ReturnKeyType.Go | ReturnKeyType.Next | ReturnKeyType.Search | ReturnKeyType.Send;

	export namespace ReverbType {
		export interface NoReverb extends globalThis.EnumItem {
			Name: "NoReverb";
			Value: 0;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const NoReverb: NoReverb;

		export interface GenericReverb extends globalThis.EnumItem {
			Name: "GenericReverb";
			Value: 1;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const GenericReverb: GenericReverb;

		export interface PaddedCell extends globalThis.EnumItem {
			Name: "PaddedCell";
			Value: 2;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const PaddedCell: PaddedCell;

		export interface Room extends globalThis.EnumItem {
			Name: "Room";
			Value: 3;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const Room: Room;

		export interface Bathroom extends globalThis.EnumItem {
			Name: "Bathroom";
			Value: 4;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const Bathroom: Bathroom;

		export interface LivingRoom extends globalThis.EnumItem {
			Name: "LivingRoom";
			Value: 5;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const LivingRoom: LivingRoom;

		export interface StoneRoom extends globalThis.EnumItem {
			Name: "StoneRoom";
			Value: 6;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const StoneRoom: StoneRoom;

		export interface Auditorium extends globalThis.EnumItem {
			Name: "Auditorium";
			Value: 7;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const Auditorium: Auditorium;

		export interface ConcertHall extends globalThis.EnumItem {
			Name: "ConcertHall";
			Value: 8;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const ConcertHall: ConcertHall;

		export interface Cave extends globalThis.EnumItem {
			Name: "Cave";
			Value: 9;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const Cave: Cave;

		export interface Arena extends globalThis.EnumItem {
			Name: "Arena";
			Value: 10;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const Arena: Arena;

		export interface Hangar extends globalThis.EnumItem {
			Name: "Hangar";
			Value: 11;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const Hangar: Hangar;

		export interface CarpettedHallway extends globalThis.EnumItem {
			Name: "CarpettedHallway";
			Value: 12;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const CarpettedHallway: CarpettedHallway;

		export interface Hallway extends globalThis.EnumItem {
			Name: "Hallway";
			Value: 13;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const Hallway: Hallway;

		export interface StoneCorridor extends globalThis.EnumItem {
			Name: "StoneCorridor";
			Value: 14;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const StoneCorridor: StoneCorridor;

		export interface Alley extends globalThis.EnumItem {
			Name: "Alley";
			Value: 15;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const Alley: Alley;

		export interface Forest extends globalThis.EnumItem {
			Name: "Forest";
			Value: 16;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const Forest: Forest;

		export interface City extends globalThis.EnumItem {
			Name: "City";
			Value: 17;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const City: City;

		export interface Mountains extends globalThis.EnumItem {
			Name: "Mountains";
			Value: 18;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const Mountains: Mountains;

		export interface Quarry extends globalThis.EnumItem {
			Name: "Quarry";
			Value: 19;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const Quarry: Quarry;

		export interface Plain extends globalThis.EnumItem {
			Name: "Plain";
			Value: 20;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const Plain: Plain;

		export interface ParkingLot extends globalThis.EnumItem {
			Name: "ParkingLot";
			Value: 21;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const ParkingLot: ParkingLot;

		export interface SewerPipe extends globalThis.EnumItem {
			Name: "SewerPipe";
			Value: 22;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const SewerPipe: SewerPipe;

		export interface UnderWater extends globalThis.EnumItem {
			Name: "UnderWater";
			Value: 23;
			EnumType: typeof globalThis.Enum.ReverbType;
		}

		export const UnderWater: UnderWater;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ReverbType>;
	}
	export type ReverbType = ReverbType.NoReverb | ReverbType.GenericReverb | ReverbType.PaddedCell | ReverbType.Room | ReverbType.Bathroom | ReverbType.LivingRoom | ReverbType.StoneRoom | ReverbType.Auditorium | ReverbType.ConcertHall | ReverbType.Cave | ReverbType.Arena | ReverbType.Hangar | ReverbType.CarpettedHallway | ReverbType.Hallway | ReverbType.StoneCorridor | ReverbType.Alley | ReverbType.Forest | ReverbType.City | ReverbType.Mountains | ReverbType.Quarry | ReverbType.Plain | ReverbType.ParkingLot | ReverbType.SewerPipe | ReverbType.UnderWater;

	export namespace RibbonTool {
		export interface Select extends globalThis.EnumItem {
			Name: "Select";
			Value: 0;
			EnumType: typeof globalThis.Enum.RibbonTool;
		}

		export const Select: Select;

		export interface Scale extends globalThis.EnumItem {
			Name: "Scale";
			Value: 1;
			EnumType: typeof globalThis.Enum.RibbonTool;
		}

		export const Scale: Scale;

		export interface Rotate extends globalThis.EnumItem {
			Name: "Rotate";
			Value: 2;
			EnumType: typeof globalThis.Enum.RibbonTool;
		}

		export const Rotate: Rotate;

		export interface Move extends globalThis.EnumItem {
			Name: "Move";
			Value: 3;
			EnumType: typeof globalThis.Enum.RibbonTool;
		}

		export const Move: Move;

		export interface Transform extends globalThis.EnumItem {
			Name: "Transform";
			Value: 4;
			EnumType: typeof globalThis.Enum.RibbonTool;
		}

		export const Transform: Transform;

		export interface ColorPicker extends globalThis.EnumItem {
			Name: "ColorPicker";
			Value: 5;
			EnumType: typeof globalThis.Enum.RibbonTool;
		}

		export const ColorPicker: ColorPicker;

		export interface MaterialPicker extends globalThis.EnumItem {
			Name: "MaterialPicker";
			Value: 6;
			EnumType: typeof globalThis.Enum.RibbonTool;
		}

		export const MaterialPicker: MaterialPicker;

		export interface Group extends globalThis.EnumItem {
			Name: "Group";
			Value: 7;
			EnumType: typeof globalThis.Enum.RibbonTool;
		}

		export const Group: Group;

		export interface Ungroup extends globalThis.EnumItem {
			Name: "Ungroup";
			Value: 8;
			EnumType: typeof globalThis.Enum.RibbonTool;
		}

		export const Ungroup: Ungroup;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 9;
			EnumType: typeof globalThis.Enum.RibbonTool;
		}

		export const None: None;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RibbonTool>;
	}
	export type RibbonTool = RibbonTool.Select | RibbonTool.Scale | RibbonTool.Rotate | RibbonTool.Move | RibbonTool.Transform | RibbonTool.ColorPicker | RibbonTool.MaterialPicker | RibbonTool.Group | RibbonTool.Ungroup | RibbonTool.None;

	export namespace RigScale {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.RigScale;
		}

		export const Default: Default;

		export interface Rthro extends globalThis.EnumItem {
			Name: "Rthro";
			Value: 1;
			EnumType: typeof globalThis.Enum.RigScale;
		}

		export const Rthro: Rthro;

		export interface RthroNarrow extends globalThis.EnumItem {
			Name: "RthroNarrow";
			Value: 2;
			EnumType: typeof globalThis.Enum.RigScale;
		}

		export const RthroNarrow: RthroNarrow;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RigScale>;
	}
	export type RigScale = RigScale.Default | RigScale.Rthro | RigScale.RthroNarrow;

	export namespace RigType {
		export interface R15 extends globalThis.EnumItem {
			Name: "R15";
			Value: 0;
			EnumType: typeof globalThis.Enum.RigType;
		}

		export const R15: R15;

		export interface Custom extends globalThis.EnumItem {
			Name: "Custom";
			Value: 1;
			EnumType: typeof globalThis.Enum.RigType;
		}

		export const Custom: Custom;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 2;
			EnumType: typeof globalThis.Enum.RigType;
		}

		export const None: None;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RigType>;
	}
	export type RigType = RigType.R15 | RigType.Custom | RigType.None;

	export namespace RollOffMode {
		export interface Inverse extends globalThis.EnumItem {
			Name: "Inverse";
			Value: 0;
			EnumType: typeof globalThis.Enum.RollOffMode;
		}

		export const Inverse: Inverse;

		export interface Linear extends globalThis.EnumItem {
			Name: "Linear";
			Value: 1;
			EnumType: typeof globalThis.Enum.RollOffMode;
		}

		export const Linear: Linear;

		export interface InverseTapered extends globalThis.EnumItem {
			Name: "InverseTapered";
			Value: 3;
			EnumType: typeof globalThis.Enum.RollOffMode;
		}

		export const InverseTapered: InverseTapered;

		export interface LinearSquare extends globalThis.EnumItem {
			Name: "LinearSquare";
			Value: 2;
			EnumType: typeof globalThis.Enum.RollOffMode;
		}

		export const LinearSquare: LinearSquare;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RollOffMode>;
	}
	export type RollOffMode = RollOffMode.Inverse | RollOffMode.Linear | RollOffMode.InverseTapered | RollOffMode.LinearSquare;

	export namespace RotationOrder {
		export interface XYZ extends globalThis.EnumItem {
			Name: "XYZ";
			Value: 0;
			EnumType: typeof globalThis.Enum.RotationOrder;
		}

		export const XYZ: XYZ;

		export interface XZY extends globalThis.EnumItem {
			Name: "XZY";
			Value: 1;
			EnumType: typeof globalThis.Enum.RotationOrder;
		}

		export const XZY: XZY;

		export interface YZX extends globalThis.EnumItem {
			Name: "YZX";
			Value: 2;
			EnumType: typeof globalThis.Enum.RotationOrder;
		}

		export const YZX: YZX;

		export interface YXZ extends globalThis.EnumItem {
			Name: "YXZ";
			Value: 3;
			EnumType: typeof globalThis.Enum.RotationOrder;
		}

		export const YXZ: YXZ;

		export interface ZXY extends globalThis.EnumItem {
			Name: "ZXY";
			Value: 4;
			EnumType: typeof globalThis.Enum.RotationOrder;
		}

		export const ZXY: ZXY;

		export interface ZYX extends globalThis.EnumItem {
			Name: "ZYX";
			Value: 5;
			EnumType: typeof globalThis.Enum.RotationOrder;
		}

		export const ZYX: ZYX;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RotationOrder>;
	}
	export type RotationOrder = RotationOrder.XYZ | RotationOrder.XZY | RotationOrder.YZX | RotationOrder.YXZ | RotationOrder.ZXY | RotationOrder.ZYX;

	export namespace RotationType {
		export interface MovementRelative extends globalThis.EnumItem {
			Name: "MovementRelative";
			Value: 0;
			EnumType: typeof globalThis.Enum.RotationType;
		}

		export const MovementRelative: MovementRelative;

		export interface CameraRelative extends globalThis.EnumItem {
			Name: "CameraRelative";
			Value: 1;
			EnumType: typeof globalThis.Enum.RotationType;
		}

		export const CameraRelative: CameraRelative;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RotationType>;
	}
	export type RotationType = RotationType.MovementRelative | RotationType.CameraRelative;

	export namespace RtlTextSupport {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.RtlTextSupport;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.RtlTextSupport;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.RtlTextSupport;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RtlTextSupport>;
	}
	export type RtlTextSupport = RtlTextSupport.Default | RtlTextSupport.Disabled | RtlTextSupport.Enabled;

	export namespace RunContext {
		export interface Legacy extends globalThis.EnumItem {
			Name: "Legacy";
			Value: 0;
			EnumType: typeof globalThis.Enum.RunContext;
		}

		export const Legacy: Legacy;

		export interface Server extends globalThis.EnumItem {
			Name: "Server";
			Value: 1;
			EnumType: typeof globalThis.Enum.RunContext;
		}

		export const Server: Server;

		export interface Client extends globalThis.EnumItem {
			Name: "Client";
			Value: 2;
			EnumType: typeof globalThis.Enum.RunContext;
		}

		export const Client: Client;

		export interface Plugin extends globalThis.EnumItem {
			Name: "Plugin";
			Value: 3;
			EnumType: typeof globalThis.Enum.RunContext;
		}

		export const Plugin: Plugin;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RunContext>;
	}
	export type RunContext = RunContext.Legacy | RunContext.Server | RunContext.Client | RunContext.Plugin;

	export namespace RuntimeUndoBehavior {
		export interface Aggregate extends globalThis.EnumItem {
			Name: "Aggregate";
			Value: 0;
			EnumType: typeof globalThis.Enum.RuntimeUndoBehavior;
		}

		export const Aggregate: Aggregate;

		export interface Snapshot extends globalThis.EnumItem {
			Name: "Snapshot";
			Value: 1;
			EnumType: typeof globalThis.Enum.RuntimeUndoBehavior;
		}

		export const Snapshot: Snapshot;

		export interface Hybrid extends globalThis.EnumItem {
			Name: "Hybrid";
			Value: 2;
			EnumType: typeof globalThis.Enum.RuntimeUndoBehavior;
		}

		export const Hybrid: Hybrid;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.RuntimeUndoBehavior>;
	}
	export type RuntimeUndoBehavior = RuntimeUndoBehavior.Aggregate | RuntimeUndoBehavior.Snapshot | RuntimeUndoBehavior.Hybrid;

	export namespace SafeAreaCompatibility {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.SafeAreaCompatibility;
		}

		export const None: None;

		export interface FullscreenExtension extends globalThis.EnumItem {
			Name: "FullscreenExtension";
			Value: 1;
			EnumType: typeof globalThis.Enum.SafeAreaCompatibility;
		}

		export const FullscreenExtension: FullscreenExtension;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SafeAreaCompatibility>;
	}
	export type SafeAreaCompatibility = SafeAreaCompatibility.None | SafeAreaCompatibility.FullscreenExtension;

	export namespace SalesTypeFilter {
		export interface All extends globalThis.EnumItem {
			Name: "All";
			Value: 1;
			EnumType: typeof globalThis.Enum.SalesTypeFilter;
		}

		export const All: All;

		export interface Collectibles extends globalThis.EnumItem {
			Name: "Collectibles";
			Value: 2;
			EnumType: typeof globalThis.Enum.SalesTypeFilter;
		}

		export const Collectibles: Collectibles;

		export interface Premium extends globalThis.EnumItem {
			Name: "Premium";
			Value: 3;
			EnumType: typeof globalThis.Enum.SalesTypeFilter;
		}

		export const Premium: Premium;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SalesTypeFilter>;
	}
	export type SalesTypeFilter = SalesTypeFilter.All | SalesTypeFilter.Collectibles | SalesTypeFilter.Premium;

	export namespace SaveAvatarThumbnailCustomizationFailure {
		export interface BadThumbnailType extends globalThis.EnumItem {
			Name: "BadThumbnailType";
			Value: 1;
			EnumType: typeof globalThis.Enum.SaveAvatarThumbnailCustomizationFailure;
		}

		export const BadThumbnailType: BadThumbnailType;

		export interface BadYRotDeg extends globalThis.EnumItem {
			Name: "BadYRotDeg";
			Value: 2;
			EnumType: typeof globalThis.Enum.SaveAvatarThumbnailCustomizationFailure;
		}

		export const BadYRotDeg: BadYRotDeg;

		export interface BadFieldOfViewDeg extends globalThis.EnumItem {
			Name: "BadFieldOfViewDeg";
			Value: 3;
			EnumType: typeof globalThis.Enum.SaveAvatarThumbnailCustomizationFailure;
		}

		export const BadFieldOfViewDeg: BadFieldOfViewDeg;

		export interface BadDistanceScale extends globalThis.EnumItem {
			Name: "BadDistanceScale";
			Value: 4;
			EnumType: typeof globalThis.Enum.SaveAvatarThumbnailCustomizationFailure;
		}

		export const BadDistanceScale: BadDistanceScale;

		export interface Other extends globalThis.EnumItem {
			Name: "Other";
			Value: 5;
			EnumType: typeof globalThis.Enum.SaveAvatarThumbnailCustomizationFailure;
		}

		export const Other: Other;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SaveAvatarThumbnailCustomizationFailure>;
	}
	export type SaveAvatarThumbnailCustomizationFailure = SaveAvatarThumbnailCustomizationFailure.BadThumbnailType | SaveAvatarThumbnailCustomizationFailure.BadYRotDeg | SaveAvatarThumbnailCustomizationFailure.BadFieldOfViewDeg | SaveAvatarThumbnailCustomizationFailure.BadDistanceScale | SaveAvatarThumbnailCustomizationFailure.Other;

	export namespace SaveFilter {
		export interface SaveAll extends globalThis.EnumItem {
			Name: "SaveAll";
			Value: 2;
			EnumType: typeof globalThis.Enum.SaveFilter;
		}

		export const SaveAll: SaveAll;

		export interface SaveWorld extends globalThis.EnumItem {
			Name: "SaveWorld";
			Value: 0;
			EnumType: typeof globalThis.Enum.SaveFilter;
		}

		export const SaveWorld: SaveWorld;

		export interface SaveGame extends globalThis.EnumItem {
			Name: "SaveGame";
			Value: 1;
			EnumType: typeof globalThis.Enum.SaveFilter;
		}

		export const SaveGame: SaveGame;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SaveFilter>;
	}
	export type SaveFilter = SaveFilter.SaveAll | SaveFilter.SaveWorld | SaveFilter.SaveGame;

	export namespace SavedQualitySetting {
		export interface Automatic extends globalThis.EnumItem {
			Name: "Automatic";
			Value: 0;
			EnumType: typeof globalThis.Enum.SavedQualitySetting;
		}

		export const Automatic: Automatic;

		export interface QualityLevel1 extends globalThis.EnumItem {
			Name: "QualityLevel1";
			Value: 1;
			EnumType: typeof globalThis.Enum.SavedQualitySetting;
		}

		export const QualityLevel1: QualityLevel1;

		export interface QualityLevel2 extends globalThis.EnumItem {
			Name: "QualityLevel2";
			Value: 2;
			EnumType: typeof globalThis.Enum.SavedQualitySetting;
		}

		export const QualityLevel2: QualityLevel2;

		export interface QualityLevel3 extends globalThis.EnumItem {
			Name: "QualityLevel3";
			Value: 3;
			EnumType: typeof globalThis.Enum.SavedQualitySetting;
		}

		export const QualityLevel3: QualityLevel3;

		export interface QualityLevel4 extends globalThis.EnumItem {
			Name: "QualityLevel4";
			Value: 4;
			EnumType: typeof globalThis.Enum.SavedQualitySetting;
		}

		export const QualityLevel4: QualityLevel4;

		export interface QualityLevel5 extends globalThis.EnumItem {
			Name: "QualityLevel5";
			Value: 5;
			EnumType: typeof globalThis.Enum.SavedQualitySetting;
		}

		export const QualityLevel5: QualityLevel5;

		export interface QualityLevel6 extends globalThis.EnumItem {
			Name: "QualityLevel6";
			Value: 6;
			EnumType: typeof globalThis.Enum.SavedQualitySetting;
		}

		export const QualityLevel6: QualityLevel6;

		export interface QualityLevel7 extends globalThis.EnumItem {
			Name: "QualityLevel7";
			Value: 7;
			EnumType: typeof globalThis.Enum.SavedQualitySetting;
		}

		export const QualityLevel7: QualityLevel7;

		export interface QualityLevel8 extends globalThis.EnumItem {
			Name: "QualityLevel8";
			Value: 8;
			EnumType: typeof globalThis.Enum.SavedQualitySetting;
		}

		export const QualityLevel8: QualityLevel8;

		export interface QualityLevel9 extends globalThis.EnumItem {
			Name: "QualityLevel9";
			Value: 9;
			EnumType: typeof globalThis.Enum.SavedQualitySetting;
		}

		export const QualityLevel9: QualityLevel9;

		export interface QualityLevel10 extends globalThis.EnumItem {
			Name: "QualityLevel10";
			Value: 10;
			EnumType: typeof globalThis.Enum.SavedQualitySetting;
		}

		export const QualityLevel10: QualityLevel10;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SavedQualitySetting>;
	}
	export type SavedQualitySetting = SavedQualitySetting.Automatic | SavedQualitySetting.QualityLevel1 | SavedQualitySetting.QualityLevel2 | SavedQualitySetting.QualityLevel3 | SavedQualitySetting.QualityLevel4 | SavedQualitySetting.QualityLevel5 | SavedQualitySetting.QualityLevel6 | SavedQualitySetting.QualityLevel7 | SavedQualitySetting.QualityLevel8 | SavedQualitySetting.QualityLevel9 | SavedQualitySetting.QualityLevel10;

	export namespace ScaleType {
		export interface Stretch extends globalThis.EnumItem {
			Name: "Stretch";
			Value: 0;
			EnumType: typeof globalThis.Enum.ScaleType;
		}

		export const Stretch: Stretch;

		export interface Slice extends globalThis.EnumItem {
			Name: "Slice";
			Value: 1;
			EnumType: typeof globalThis.Enum.ScaleType;
		}

		export const Slice: Slice;

		export interface Tile extends globalThis.EnumItem {
			Name: "Tile";
			Value: 2;
			EnumType: typeof globalThis.Enum.ScaleType;
		}

		export const Tile: Tile;

		export interface Fit extends globalThis.EnumItem {
			Name: "Fit";
			Value: 3;
			EnumType: typeof globalThis.Enum.ScaleType;
		}

		export const Fit: Fit;

		export interface Crop extends globalThis.EnumItem {
			Name: "Crop";
			Value: 4;
			EnumType: typeof globalThis.Enum.ScaleType;
		}

		export const Crop: Crop;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ScaleType>;
	}
	export type ScaleType = ScaleType.Stretch | ScaleType.Slice | ScaleType.Tile | ScaleType.Fit | ScaleType.Crop;

	export namespace ScopeCheckResult {
		export interface ConsentAccepted extends globalThis.EnumItem {
			Name: "ConsentAccepted";
			Value: 0;
			EnumType: typeof globalThis.Enum.ScopeCheckResult;
		}

		export const ConsentAccepted: ConsentAccepted;

		export interface InvalidScopes extends globalThis.EnumItem {
			Name: "InvalidScopes";
			Value: 1;
			EnumType: typeof globalThis.Enum.ScopeCheckResult;
		}

		export const InvalidScopes: InvalidScopes;

		export interface Timeout extends globalThis.EnumItem {
			Name: "Timeout";
			Value: 2;
			EnumType: typeof globalThis.Enum.ScopeCheckResult;
		}

		export const Timeout: Timeout;

		export interface NoUserInput extends globalThis.EnumItem {
			Name: "NoUserInput";
			Value: 3;
			EnumType: typeof globalThis.Enum.ScopeCheckResult;
		}

		export const NoUserInput: NoUserInput;

		export interface BackendError extends globalThis.EnumItem {
			Name: "BackendError";
			Value: 4;
			EnumType: typeof globalThis.Enum.ScopeCheckResult;
		}

		export const BackendError: BackendError;

		export interface UnexpectedError extends globalThis.EnumItem {
			Name: "UnexpectedError";
			Value: 5;
			EnumType: typeof globalThis.Enum.ScopeCheckResult;
		}

		export const UnexpectedError: UnexpectedError;

		export interface InvalidArgument extends globalThis.EnumItem {
			Name: "InvalidArgument";
			Value: 6;
			EnumType: typeof globalThis.Enum.ScopeCheckResult;
		}

		export const InvalidArgument: InvalidArgument;

		export interface ConsentDenied extends globalThis.EnumItem {
			Name: "ConsentDenied";
			Value: 7;
			EnumType: typeof globalThis.Enum.ScopeCheckResult;
		}

		export const ConsentDenied: ConsentDenied;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ScopeCheckResult>;
	}
	export type ScopeCheckResult = ScopeCheckResult.ConsentAccepted | ScopeCheckResult.InvalidScopes | ScopeCheckResult.Timeout | ScopeCheckResult.NoUserInput | ScopeCheckResult.BackendError | ScopeCheckResult.UnexpectedError | ScopeCheckResult.InvalidArgument | ScopeCheckResult.ConsentDenied;

	export namespace ScreenInsets {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.ScreenInsets;
		}

		export const None: None;

		export interface DeviceSafeInsets extends globalThis.EnumItem {
			Name: "DeviceSafeInsets";
			Value: 1;
			EnumType: typeof globalThis.Enum.ScreenInsets;
		}

		export const DeviceSafeInsets: DeviceSafeInsets;

		export interface CoreUISafeInsets extends globalThis.EnumItem {
			Name: "CoreUISafeInsets";
			Value: 2;
			EnumType: typeof globalThis.Enum.ScreenInsets;
		}

		export const CoreUISafeInsets: CoreUISafeInsets;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ScreenInsets>;
	}
	export type ScreenInsets = ScreenInsets.None | ScreenInsets.DeviceSafeInsets | ScreenInsets.CoreUISafeInsets;

	export namespace ScreenOrientation {
		export interface LandscapeLeft extends globalThis.EnumItem {
			Name: "LandscapeLeft";
			Value: 0;
			EnumType: typeof globalThis.Enum.ScreenOrientation;
		}

		export const LandscapeLeft: LandscapeLeft;

		export interface LandscapeRight extends globalThis.EnumItem {
			Name: "LandscapeRight";
			Value: 1;
			EnumType: typeof globalThis.Enum.ScreenOrientation;
		}

		export const LandscapeRight: LandscapeRight;

		export interface LandscapeSensor extends globalThis.EnumItem {
			Name: "LandscapeSensor";
			Value: 2;
			EnumType: typeof globalThis.Enum.ScreenOrientation;
		}

		export const LandscapeSensor: LandscapeSensor;

		export interface Portrait extends globalThis.EnumItem {
			Name: "Portrait";
			Value: 3;
			EnumType: typeof globalThis.Enum.ScreenOrientation;
		}

		export const Portrait: Portrait;

		export interface Sensor extends globalThis.EnumItem {
			Name: "Sensor";
			Value: 4;
			EnumType: typeof globalThis.Enum.ScreenOrientation;
		}

		export const Sensor: Sensor;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ScreenOrientation>;
	}
	export type ScreenOrientation = ScreenOrientation.LandscapeLeft | ScreenOrientation.LandscapeRight | ScreenOrientation.LandscapeSensor | ScreenOrientation.Portrait | ScreenOrientation.Sensor;

	export namespace ScrollBarInset {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.ScrollBarInset;
		}

		export const None: None;

		export interface ScrollBar extends globalThis.EnumItem {
			Name: "ScrollBar";
			Value: 1;
			EnumType: typeof globalThis.Enum.ScrollBarInset;
		}

		export const ScrollBar: ScrollBar;

		export interface Always extends globalThis.EnumItem {
			Name: "Always";
			Value: 2;
			EnumType: typeof globalThis.Enum.ScrollBarInset;
		}

		export const Always: Always;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ScrollBarInset>;
	}
	export type ScrollBarInset = ScrollBarInset.None | ScrollBarInset.ScrollBar | ScrollBarInset.Always;

	export namespace ScrollingDirection {
		export interface X extends globalThis.EnumItem {
			Name: "X";
			Value: 1;
			EnumType: typeof globalThis.Enum.ScrollingDirection;
		}

		export const X: X;

		export interface Y extends globalThis.EnumItem {
			Name: "Y";
			Value: 2;
			EnumType: typeof globalThis.Enum.ScrollingDirection;
		}

		export const Y: Y;

		export interface XY extends globalThis.EnumItem {
			Name: "XY";
			Value: 4;
			EnumType: typeof globalThis.Enum.ScrollingDirection;
		}

		export const XY: XY;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ScrollingDirection>;
	}
	export type ScrollingDirection = ScrollingDirection.X | ScrollingDirection.Y | ScrollingDirection.XY;

	export namespace SelectionBehavior {
		export interface Escape extends globalThis.EnumItem {
			Name: "Escape";
			Value: 0;
			EnumType: typeof globalThis.Enum.SelectionBehavior;
		}

		export const Escape: Escape;

		export interface Stop extends globalThis.EnumItem {
			Name: "Stop";
			Value: 1;
			EnumType: typeof globalThis.Enum.SelectionBehavior;
		}

		export const Stop: Stop;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SelectionBehavior>;
	}
	export type SelectionBehavior = SelectionBehavior.Escape | SelectionBehavior.Stop;

	export namespace SelectionRenderMode {
		export interface Outlines extends globalThis.EnumItem {
			Name: "Outlines";
			Value: 0;
			EnumType: typeof globalThis.Enum.SelectionRenderMode;
		}

		export const Outlines: Outlines;

		export interface BoundingBoxes extends globalThis.EnumItem {
			Name: "BoundingBoxes";
			Value: 1;
			EnumType: typeof globalThis.Enum.SelectionRenderMode;
		}

		export const BoundingBoxes: BoundingBoxes;

		export interface Both extends globalThis.EnumItem {
			Name: "Both";
			Value: 2;
			EnumType: typeof globalThis.Enum.SelectionRenderMode;
		}

		export const Both: Both;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SelectionRenderMode>;
	}
	export type SelectionRenderMode = SelectionRenderMode.Outlines | SelectionRenderMode.BoundingBoxes | SelectionRenderMode.Both;

	export namespace SelfViewPosition {
		export interface LastPosition extends globalThis.EnumItem {
			Name: "LastPosition";
			Value: 0;
			EnumType: typeof globalThis.Enum.SelfViewPosition;
		}

		export const LastPosition: LastPosition;

		export interface TopLeft extends globalThis.EnumItem {
			Name: "TopLeft";
			Value: 1;
			EnumType: typeof globalThis.Enum.SelfViewPosition;
		}

		export const TopLeft: TopLeft;

		export interface TopRight extends globalThis.EnumItem {
			Name: "TopRight";
			Value: 2;
			EnumType: typeof globalThis.Enum.SelfViewPosition;
		}

		export const TopRight: TopRight;

		export interface BottomLeft extends globalThis.EnumItem {
			Name: "BottomLeft";
			Value: 3;
			EnumType: typeof globalThis.Enum.SelfViewPosition;
		}

		export const BottomLeft: BottomLeft;

		export interface BottomRight extends globalThis.EnumItem {
			Name: "BottomRight";
			Value: 4;
			EnumType: typeof globalThis.Enum.SelfViewPosition;
		}

		export const BottomRight: BottomRight;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SelfViewPosition>;
	}
	export type SelfViewPosition = SelfViewPosition.LastPosition | SelfViewPosition.TopLeft | SelfViewPosition.TopRight | SelfViewPosition.BottomLeft | SelfViewPosition.BottomRight;

	export namespace SensorMode {
		export interface Floor extends globalThis.EnumItem {
			Name: "Floor";
			Value: 0;
			EnumType: typeof globalThis.Enum.SensorMode;
		}

		export const Floor: Floor;

		export interface Ladder extends globalThis.EnumItem {
			Name: "Ladder";
			Value: 1;
			EnumType: typeof globalThis.Enum.SensorMode;
		}

		export const Ladder: Ladder;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SensorMode>;
	}
	export type SensorMode = SensorMode.Floor | SensorMode.Ladder;

	export namespace SensorUpdateType {
		export interface OnRead extends globalThis.EnumItem {
			Name: "OnRead";
			Value: 0;
			EnumType: typeof globalThis.Enum.SensorUpdateType;
		}

		export const OnRead: OnRead;

		export interface Manual extends globalThis.EnumItem {
			Name: "Manual";
			Value: 1;
			EnumType: typeof globalThis.Enum.SensorUpdateType;
		}

		export const Manual: Manual;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SensorUpdateType>;
	}
	export type SensorUpdateType = SensorUpdateType.OnRead | SensorUpdateType.Manual;

	export namespace ServerAudioBehavior {
		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 0;
			EnumType: typeof globalThis.Enum.ServerAudioBehavior;
		}

		export const Enabled: Enabled;

		export interface Muted extends globalThis.EnumItem {
			Name: "Muted";
			Value: 1;
			EnumType: typeof globalThis.Enum.ServerAudioBehavior;
		}

		export const Muted: Muted;

		export interface OnlineGame extends globalThis.EnumItem {
			Name: "OnlineGame";
			Value: 2;
			EnumType: typeof globalThis.Enum.ServerAudioBehavior;
		}

		export const OnlineGame: OnlineGame;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ServerAudioBehavior>;
	}
	export type ServerAudioBehavior = ServerAudioBehavior.Enabled | ServerAudioBehavior.Muted | ServerAudioBehavior.OnlineGame;

	export namespace ServiceVisibility {
		export interface Always extends globalThis.EnumItem {
			Name: "Always";
			Value: 0;
			EnumType: typeof globalThis.Enum.ServiceVisibility;
		}

		export const Always: Always;

		export interface Off extends globalThis.EnumItem {
			Name: "Off";
			Value: 1;
			EnumType: typeof globalThis.Enum.ServiceVisibility;
		}

		export const Off: Off;

		export interface WithChildren extends globalThis.EnumItem {
			Name: "WithChildren";
			Value: 2;
			EnumType: typeof globalThis.Enum.ServiceVisibility;
		}

		export const WithChildren: WithChildren;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ServiceVisibility>;
	}
	export type ServiceVisibility = ServiceVisibility.Always | ServiceVisibility.Off | ServiceVisibility.WithChildren;

	export namespace Severity {
		export interface Error extends globalThis.EnumItem {
			Name: "Error";
			Value: 1;
			EnumType: typeof globalThis.Enum.Severity;
		}

		export const Error: Error;

		export interface Warning extends globalThis.EnumItem {
			Name: "Warning";
			Value: 2;
			EnumType: typeof globalThis.Enum.Severity;
		}

		export const Warning: Warning;

		export interface Information extends globalThis.EnumItem {
			Name: "Information";
			Value: 3;
			EnumType: typeof globalThis.Enum.Severity;
		}

		export const Information: Information;

		export interface Hint extends globalThis.EnumItem {
			Name: "Hint";
			Value: 4;
			EnumType: typeof globalThis.Enum.Severity;
		}

		export const Hint: Hint;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.Severity>;
	}
	export type Severity = Severity.Error | Severity.Warning | Severity.Information | Severity.Hint;

	export namespace SignalBehavior {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.SignalBehavior;
		}

		export const Default: Default;

		export interface Immediate extends globalThis.EnumItem {
			Name: "Immediate";
			Value: 1;
			EnumType: typeof globalThis.Enum.SignalBehavior;
		}

		export const Immediate: Immediate;

		export interface Deferred extends globalThis.EnumItem {
			Name: "Deferred";
			Value: 2;
			EnumType: typeof globalThis.Enum.SignalBehavior;
		}

		export const Deferred: Deferred;

		export interface AncestryDeferred extends globalThis.EnumItem {
			Name: "AncestryDeferred";
			Value: 3;
			EnumType: typeof globalThis.Enum.SignalBehavior;
		}

		export const AncestryDeferred: AncestryDeferred;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SignalBehavior>;
	}
	export type SignalBehavior = SignalBehavior.Default | SignalBehavior.Immediate | SignalBehavior.Deferred | SignalBehavior.AncestryDeferred;

	export namespace SizeConstraint {
		export interface RelativeXY extends globalThis.EnumItem {
			Name: "RelativeXY";
			Value: 0;
			EnumType: typeof globalThis.Enum.SizeConstraint;
		}

		export const RelativeXY: RelativeXY;

		export interface RelativeXX extends globalThis.EnumItem {
			Name: "RelativeXX";
			Value: 1;
			EnumType: typeof globalThis.Enum.SizeConstraint;
		}

		export const RelativeXX: RelativeXX;

		export interface RelativeYY extends globalThis.EnumItem {
			Name: "RelativeYY";
			Value: 2;
			EnumType: typeof globalThis.Enum.SizeConstraint;
		}

		export const RelativeYY: RelativeYY;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SizeConstraint>;
	}
	export type SizeConstraint = SizeConstraint.RelativeXY | SizeConstraint.RelativeXX | SizeConstraint.RelativeYY;

	export namespace SolverConvergenceVisualizationMode {
		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 0;
			EnumType: typeof globalThis.Enum.SolverConvergenceVisualizationMode;
		}

		export const Disabled: Disabled;

		export interface PerIsland extends globalThis.EnumItem {
			Name: "PerIsland";
			Value: 1;
			EnumType: typeof globalThis.Enum.SolverConvergenceVisualizationMode;
		}

		export const PerIsland: PerIsland;

		export interface PerEdge extends globalThis.EnumItem {
			Name: "PerEdge";
			Value: 2;
			EnumType: typeof globalThis.Enum.SolverConvergenceVisualizationMode;
		}

		export const PerEdge: PerEdge;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SolverConvergenceVisualizationMode>;
	}
	export type SolverConvergenceVisualizationMode = SolverConvergenceVisualizationMode.Disabled | SolverConvergenceVisualizationMode.PerIsland | SolverConvergenceVisualizationMode.PerEdge;

	export namespace SortDirection {
		export interface Ascending extends globalThis.EnumItem {
			Name: "Ascending";
			Value: 0;
			EnumType: typeof globalThis.Enum.SortDirection;
		}

		export const Ascending: Ascending;

		export interface Descending extends globalThis.EnumItem {
			Name: "Descending";
			Value: 1;
			EnumType: typeof globalThis.Enum.SortDirection;
		}

		export const Descending: Descending;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SortDirection>;
	}
	export type SortDirection = SortDirection.Ascending | SortDirection.Descending;

	export namespace SortOrder {
		export interface LayoutOrder extends globalThis.EnumItem {
			Name: "LayoutOrder";
			Value: 2;
			EnumType: typeof globalThis.Enum.SortOrder;
		}

		export const LayoutOrder: LayoutOrder;

		export interface Name extends globalThis.EnumItem {
			Name: "Name";
			Value: 0;
			EnumType: typeof globalThis.Enum.SortOrder;
		}

		export const Name: Name;

		export interface Custom extends globalThis.EnumItem {
			Name: "Custom";
			Value: 1;
			EnumType: typeof globalThis.Enum.SortOrder;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SortOrder>;
	}
	export type SortOrder = SortOrder.LayoutOrder | SortOrder.Name | SortOrder.Custom;

	export namespace SpecialKey {
		export interface Insert extends globalThis.EnumItem {
			Name: "Insert";
			Value: 0;
			EnumType: typeof globalThis.Enum.SpecialKey;
		}

		export const Insert: Insert;

		export interface Home extends globalThis.EnumItem {
			Name: "Home";
			Value: 1;
			EnumType: typeof globalThis.Enum.SpecialKey;
		}

		export const Home: Home;

		export interface End extends globalThis.EnumItem {
			Name: "End";
			Value: 2;
			EnumType: typeof globalThis.Enum.SpecialKey;
		}

		export const End: End;

		export interface PageUp extends globalThis.EnumItem {
			Name: "PageUp";
			Value: 3;
			EnumType: typeof globalThis.Enum.SpecialKey;
		}

		export const PageUp: PageUp;

		export interface PageDown extends globalThis.EnumItem {
			Name: "PageDown";
			Value: 4;
			EnumType: typeof globalThis.Enum.SpecialKey;
		}

		export const PageDown: PageDown;

		export interface ChatHotkey extends globalThis.EnumItem {
			Name: "ChatHotkey";
			Value: 5;
			EnumType: typeof globalThis.Enum.SpecialKey;
		}

		export const ChatHotkey: ChatHotkey;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SpecialKey>;
	}
	export type SpecialKey = SpecialKey.Insert | SpecialKey.Home | SpecialKey.End | SpecialKey.PageUp | SpecialKey.PageDown | SpecialKey.ChatHotkey;

	export namespace StartCorner {
		export interface TopLeft extends globalThis.EnumItem {
			Name: "TopLeft";
			Value: 0;
			EnumType: typeof globalThis.Enum.StartCorner;
		}

		export const TopLeft: TopLeft;

		export interface TopRight extends globalThis.EnumItem {
			Name: "TopRight";
			Value: 1;
			EnumType: typeof globalThis.Enum.StartCorner;
		}

		export const TopRight: TopRight;

		export interface BottomLeft extends globalThis.EnumItem {
			Name: "BottomLeft";
			Value: 2;
			EnumType: typeof globalThis.Enum.StartCorner;
		}

		export const BottomLeft: BottomLeft;

		export interface BottomRight extends globalThis.EnumItem {
			Name: "BottomRight";
			Value: 3;
			EnumType: typeof globalThis.Enum.StartCorner;
		}

		export const BottomRight: BottomRight;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.StartCorner>;
	}
	export type StartCorner = StartCorner.TopLeft | StartCorner.TopRight | StartCorner.BottomLeft | StartCorner.BottomRight;

	export namespace Status {
		export interface Poison extends globalThis.EnumItem {
			Name: "Poison";
			Value: 0;
			EnumType: typeof globalThis.Enum.Status;
		}

		export const Poison: Poison;

		export interface Confusion extends globalThis.EnumItem {
			Name: "Confusion";
			Value: 1;
			EnumType: typeof globalThis.Enum.Status;
		}

		export const Confusion: Confusion;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.Status>;
	}
	export type Status = Status.Poison | Status.Confusion;

	export namespace StreamOutBehavior {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.StreamOutBehavior;
		}

		export const Default: Default;

		export interface LowMemory extends globalThis.EnumItem {
			Name: "LowMemory";
			Value: 1;
			EnumType: typeof globalThis.Enum.StreamOutBehavior;
		}

		export const LowMemory: LowMemory;

		export interface Opportunistic extends globalThis.EnumItem {
			Name: "Opportunistic";
			Value: 2;
			EnumType: typeof globalThis.Enum.StreamOutBehavior;
		}

		export const Opportunistic: Opportunistic;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.StreamOutBehavior>;
	}
	export type StreamOutBehavior = StreamOutBehavior.Default | StreamOutBehavior.LowMemory | StreamOutBehavior.Opportunistic;

	export namespace StreamingIntegrityMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.StreamingIntegrityMode;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.StreamingIntegrityMode;
		}

		export const Disabled: Disabled;

		export interface MinimumRadiusPause extends globalThis.EnumItem {
			Name: "MinimumRadiusPause";
			Value: 2;
			EnumType: typeof globalThis.Enum.StreamingIntegrityMode;
		}

		export const MinimumRadiusPause: MinimumRadiusPause;

		export interface PauseOutsideLoadedArea extends globalThis.EnumItem {
			Name: "PauseOutsideLoadedArea";
			Value: 3;
			EnumType: typeof globalThis.Enum.StreamingIntegrityMode;
		}

		export const PauseOutsideLoadedArea: PauseOutsideLoadedArea;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.StreamingIntegrityMode>;
	}
	export type StreamingIntegrityMode = StreamingIntegrityMode.Default | StreamingIntegrityMode.Disabled | StreamingIntegrityMode.MinimumRadiusPause | StreamingIntegrityMode.PauseOutsideLoadedArea;

	export namespace StreamingPauseMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.StreamingPauseMode;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.StreamingPauseMode;
		}

		export const Disabled: Disabled;

		export interface ClientPhysicsPause extends globalThis.EnumItem {
			Name: "ClientPhysicsPause";
			Value: 2;
			EnumType: typeof globalThis.Enum.StreamingPauseMode;
		}

		export const ClientPhysicsPause: ClientPhysicsPause;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.StreamingPauseMode>;
	}
	export type StreamingPauseMode = StreamingPauseMode.Default | StreamingPauseMode.Disabled | StreamingPauseMode.ClientPhysicsPause;

	export namespace StudioCloseMode {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.StudioCloseMode;
		}

		export const None: None;

		export interface CloseStudio extends globalThis.EnumItem {
			Name: "CloseStudio";
			Value: 1;
			EnumType: typeof globalThis.Enum.StudioCloseMode;
		}

		export const CloseStudio: CloseStudio;

		export interface CloseDoc extends globalThis.EnumItem {
			Name: "CloseDoc";
			Value: 2;
			EnumType: typeof globalThis.Enum.StudioCloseMode;
		}

		export const CloseDoc: CloseDoc;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.StudioCloseMode>;
	}
	export type StudioCloseMode = StudioCloseMode.None | StudioCloseMode.CloseStudio | StudioCloseMode.CloseDoc;

	export namespace StudioDataModelType {
		export interface Edit extends globalThis.EnumItem {
			Name: "Edit";
			Value: 0;
			EnumType: typeof globalThis.Enum.StudioDataModelType;
		}

		export const Edit: Edit;

		export interface PlayClient extends globalThis.EnumItem {
			Name: "PlayClient";
			Value: 1;
			EnumType: typeof globalThis.Enum.StudioDataModelType;
		}

		export const PlayClient: PlayClient;

		export interface PlayServer extends globalThis.EnumItem {
			Name: "PlayServer";
			Value: 2;
			EnumType: typeof globalThis.Enum.StudioDataModelType;
		}

		export const PlayServer: PlayServer;

		export interface Standalone extends globalThis.EnumItem {
			Name: "Standalone";
			Value: 3;
			EnumType: typeof globalThis.Enum.StudioDataModelType;
		}

		export const Standalone: Standalone;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 4;
			EnumType: typeof globalThis.Enum.StudioDataModelType;
		}

		export const None: None;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.StudioDataModelType>;
	}
	export type StudioDataModelType = StudioDataModelType.Edit | StudioDataModelType.PlayClient | StudioDataModelType.PlayServer | StudioDataModelType.Standalone | StudioDataModelType.None;

	export namespace StudioScriptEditorColorCategories {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Default: Default;

		export interface Operator extends globalThis.EnumItem {
			Name: "Operator";
			Value: 1;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Operator: Operator;

		export interface Number extends globalThis.EnumItem {
			Name: "Number";
			Value: 2;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Number: Number;

		export interface String extends globalThis.EnumItem {
			Name: "String";
			Value: 3;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const String: String;

		export interface Comment extends globalThis.EnumItem {
			Name: "Comment";
			Value: 4;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Comment: Comment;

		export interface Keyword extends globalThis.EnumItem {
			Name: "Keyword";
			Value: 5;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Keyword: Keyword;

		export interface Builtin extends globalThis.EnumItem {
			Name: "Builtin";
			Value: 6;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Builtin: Builtin;

		export interface Method extends globalThis.EnumItem {
			Name: "Method";
			Value: 7;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Method: Method;

		export interface Property extends globalThis.EnumItem {
			Name: "Property";
			Value: 8;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Property: Property;

		export interface Nil extends globalThis.EnumItem {
			Name: "Nil";
			Value: 9;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Nil: Nil;

		export interface Bool extends globalThis.EnumItem {
			Name: "Bool";
			Value: 10;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Bool: Bool;

		export interface Function extends globalThis.EnumItem {
			Name: "Function";
			Value: 11;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Function: Function;

		export interface Local extends globalThis.EnumItem {
			Name: "Local";
			Value: 12;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Local: Local;

		export interface Self extends globalThis.EnumItem {
			Name: "Self";
			Value: 13;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Self: Self;

		export interface LuauKeyword extends globalThis.EnumItem {
			Name: "LuauKeyword";
			Value: 14;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const LuauKeyword: LuauKeyword;

		export interface FunctionName extends globalThis.EnumItem {
			Name: "FunctionName";
			Value: 15;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const FunctionName: FunctionName;

		export interface TODO extends globalThis.EnumItem {
			Name: "TODO";
			Value: 16;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const TODO: TODO;

		export interface Background extends globalThis.EnumItem {
			Name: "Background";
			Value: 17;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Background: Background;

		export interface SelectionText extends globalThis.EnumItem {
			Name: "SelectionText";
			Value: 18;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const SelectionText: SelectionText;

		export interface SelectionBackground extends globalThis.EnumItem {
			Name: "SelectionBackground";
			Value: 19;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const SelectionBackground: SelectionBackground;

		export interface FindSelectionBackground extends globalThis.EnumItem {
			Name: "FindSelectionBackground";
			Value: 20;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const FindSelectionBackground: FindSelectionBackground;

		export interface MatchingWordBackground extends globalThis.EnumItem {
			Name: "MatchingWordBackground";
			Value: 21;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const MatchingWordBackground: MatchingWordBackground;

		export interface Warning extends globalThis.EnumItem {
			Name: "Warning";
			Value: 22;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Warning: Warning;

		export interface Error extends globalThis.EnumItem {
			Name: "Error";
			Value: 23;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Error: Error;

		export interface Info extends globalThis.EnumItem {
			Name: "Info";
			Value: 24;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Info: Info;

		export interface Hint extends globalThis.EnumItem {
			Name: "Hint";
			Value: 25;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Hint: Hint;

		export interface Whitespace extends globalThis.EnumItem {
			Name: "Whitespace";
			Value: 26;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Whitespace: Whitespace;

		export interface ActiveLine extends globalThis.EnumItem {
			Name: "ActiveLine";
			Value: 27;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const ActiveLine: ActiveLine;

		export interface DebuggerCurrentLine extends globalThis.EnumItem {
			Name: "DebuggerCurrentLine";
			Value: 28;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const DebuggerCurrentLine: DebuggerCurrentLine;

		export interface DebuggerErrorLine extends globalThis.EnumItem {
			Name: "DebuggerErrorLine";
			Value: 29;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const DebuggerErrorLine: DebuggerErrorLine;

		export interface Ruler extends globalThis.EnumItem {
			Name: "Ruler";
			Value: 30;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Ruler: Ruler;

		export interface Bracket extends globalThis.EnumItem {
			Name: "Bracket";
			Value: 31;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const Bracket: Bracket;

		export interface MenuPrimaryText extends globalThis.EnumItem {
			Name: "MenuPrimaryText";
			Value: 32;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const MenuPrimaryText: MenuPrimaryText;

		export interface MenuSecondaryText extends globalThis.EnumItem {
			Name: "MenuSecondaryText";
			Value: 33;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const MenuSecondaryText: MenuSecondaryText;

		export interface MenuSelectedText extends globalThis.EnumItem {
			Name: "MenuSelectedText";
			Value: 34;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const MenuSelectedText: MenuSelectedText;

		export interface MenuBackground extends globalThis.EnumItem {
			Name: "MenuBackground";
			Value: 35;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const MenuBackground: MenuBackground;

		export interface MenuSelectedBackground extends globalThis.EnumItem {
			Name: "MenuSelectedBackground";
			Value: 36;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const MenuSelectedBackground: MenuSelectedBackground;

		export interface MenuScrollbarBackground extends globalThis.EnumItem {
			Name: "MenuScrollbarBackground";
			Value: 37;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const MenuScrollbarBackground: MenuScrollbarBackground;

		export interface MenuScrollbarHandle extends globalThis.EnumItem {
			Name: "MenuScrollbarHandle";
			Value: 38;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const MenuScrollbarHandle: MenuScrollbarHandle;

		export interface MenuBorder extends globalThis.EnumItem {
			Name: "MenuBorder";
			Value: 39;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const MenuBorder: MenuBorder;

		export interface DocViewCodeBackground extends globalThis.EnumItem {
			Name: "DocViewCodeBackground";
			Value: 40;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const DocViewCodeBackground: DocViewCodeBackground;

		export interface AICOOverlayText extends globalThis.EnumItem {
			Name: "AICOOverlayText";
			Value: 41;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const AICOOverlayText: AICOOverlayText;

		export interface AICOOverlayButtonBackground extends globalThis.EnumItem {
			Name: "AICOOverlayButtonBackground";
			Value: 42;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const AICOOverlayButtonBackground: AICOOverlayButtonBackground;

		export interface AICOOverlayButtonBackgroundHover extends globalThis.EnumItem {
			Name: "AICOOverlayButtonBackgroundHover";
			Value: 43;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const AICOOverlayButtonBackgroundHover: AICOOverlayButtonBackgroundHover;

		export interface AICOOverlayButtonBackgroundPressed extends globalThis.EnumItem {
			Name: "AICOOverlayButtonBackgroundPressed";
			Value: 44;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const AICOOverlayButtonBackgroundPressed: AICOOverlayButtonBackgroundPressed;

		export interface IndentationRuler extends globalThis.EnumItem {
			Name: "IndentationRuler";
			Value: 45;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorCategories;
		}

		export const IndentationRuler: IndentationRuler;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.StudioScriptEditorColorCategories>;
	}
	export type StudioScriptEditorColorCategories = StudioScriptEditorColorCategories.Default | StudioScriptEditorColorCategories.Operator | StudioScriptEditorColorCategories.Number | StudioScriptEditorColorCategories.String | StudioScriptEditorColorCategories.Comment | StudioScriptEditorColorCategories.Keyword | StudioScriptEditorColorCategories.Builtin | StudioScriptEditorColorCategories.Method | StudioScriptEditorColorCategories.Property | StudioScriptEditorColorCategories.Nil | StudioScriptEditorColorCategories.Bool | StudioScriptEditorColorCategories.Function | StudioScriptEditorColorCategories.Local | StudioScriptEditorColorCategories.Self | StudioScriptEditorColorCategories.LuauKeyword | StudioScriptEditorColorCategories.FunctionName | StudioScriptEditorColorCategories.TODO | StudioScriptEditorColorCategories.Background | StudioScriptEditorColorCategories.SelectionText | StudioScriptEditorColorCategories.SelectionBackground | StudioScriptEditorColorCategories.FindSelectionBackground | StudioScriptEditorColorCategories.MatchingWordBackground | StudioScriptEditorColorCategories.Warning | StudioScriptEditorColorCategories.Error | StudioScriptEditorColorCategories.Info | StudioScriptEditorColorCategories.Hint | StudioScriptEditorColorCategories.Whitespace | StudioScriptEditorColorCategories.ActiveLine | StudioScriptEditorColorCategories.DebuggerCurrentLine | StudioScriptEditorColorCategories.DebuggerErrorLine | StudioScriptEditorColorCategories.Ruler | StudioScriptEditorColorCategories.Bracket | StudioScriptEditorColorCategories.MenuPrimaryText | StudioScriptEditorColorCategories.MenuSecondaryText | StudioScriptEditorColorCategories.MenuSelectedText | StudioScriptEditorColorCategories.MenuBackground | StudioScriptEditorColorCategories.MenuSelectedBackground | StudioScriptEditorColorCategories.MenuScrollbarBackground | StudioScriptEditorColorCategories.MenuScrollbarHandle | StudioScriptEditorColorCategories.MenuBorder | StudioScriptEditorColorCategories.DocViewCodeBackground | StudioScriptEditorColorCategories.AICOOverlayText | StudioScriptEditorColorCategories.AICOOverlayButtonBackground | StudioScriptEditorColorCategories.AICOOverlayButtonBackgroundHover | StudioScriptEditorColorCategories.AICOOverlayButtonBackgroundPressed | StudioScriptEditorColorCategories.IndentationRuler;

	export namespace StudioScriptEditorColorPresets {
		export interface RobloxDefault extends globalThis.EnumItem {
			Name: "RobloxDefault";
			Value: 0;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorPresets;
		}

		export const RobloxDefault: RobloxDefault;

		export interface Extra1 extends globalThis.EnumItem {
			Name: "Extra1";
			Value: 1;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorPresets;
		}

		export const Extra1: Extra1;

		export interface Extra2 extends globalThis.EnumItem {
			Name: "Extra2";
			Value: 2;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorPresets;
		}

		export const Extra2: Extra2;

		export interface Custom extends globalThis.EnumItem {
			Name: "Custom";
			Value: 3;
			EnumType: typeof globalThis.Enum.StudioScriptEditorColorPresets;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.StudioScriptEditorColorPresets>;
	}
	export type StudioScriptEditorColorPresets = StudioScriptEditorColorPresets.RobloxDefault | StudioScriptEditorColorPresets.Extra1 | StudioScriptEditorColorPresets.Extra2 | StudioScriptEditorColorPresets.Custom;

	export namespace StudioStyleGuideColor {
		export interface MainBackground extends globalThis.EnumItem {
			Name: "MainBackground";
			Value: 0;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const MainBackground: MainBackground;

		export interface Titlebar extends globalThis.EnumItem {
			Name: "Titlebar";
			Value: 1;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Titlebar: Titlebar;

		export interface Dropdown extends globalThis.EnumItem {
			Name: "Dropdown";
			Value: 2;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Dropdown: Dropdown;

		export interface Tooltip extends globalThis.EnumItem {
			Name: "Tooltip";
			Value: 3;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Tooltip: Tooltip;

		export interface Notification extends globalThis.EnumItem {
			Name: "Notification";
			Value: 4;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Notification: Notification;

		export interface ScrollBar extends globalThis.EnumItem {
			Name: "ScrollBar";
			Value: 5;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScrollBar: ScrollBar;

		export interface ScrollBarBackground extends globalThis.EnumItem {
			Name: "ScrollBarBackground";
			Value: 6;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScrollBarBackground: ScrollBarBackground;

		export interface TabBar extends globalThis.EnumItem {
			Name: "TabBar";
			Value: 7;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const TabBar: TabBar;

		export interface Tab extends globalThis.EnumItem {
			Name: "Tab";
			Value: 8;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Tab: Tab;

		export interface FilterButtonDefault extends globalThis.EnumItem {
			Name: "FilterButtonDefault";
			Value: 9;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const FilterButtonDefault: FilterButtonDefault;

		export interface FilterButtonHover extends globalThis.EnumItem {
			Name: "FilterButtonHover";
			Value: 10;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const FilterButtonHover: FilterButtonHover;

		export interface FilterButtonChecked extends globalThis.EnumItem {
			Name: "FilterButtonChecked";
			Value: 11;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const FilterButtonChecked: FilterButtonChecked;

		export interface FilterButtonAccent extends globalThis.EnumItem {
			Name: "FilterButtonAccent";
			Value: 12;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const FilterButtonAccent: FilterButtonAccent;

		export interface FilterButtonBorder extends globalThis.EnumItem {
			Name: "FilterButtonBorder";
			Value: 13;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const FilterButtonBorder: FilterButtonBorder;

		export interface FilterButtonBorderAlt extends globalThis.EnumItem {
			Name: "FilterButtonBorderAlt";
			Value: 14;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const FilterButtonBorderAlt: FilterButtonBorderAlt;

		export interface RibbonTab extends globalThis.EnumItem {
			Name: "RibbonTab";
			Value: 15;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const RibbonTab: RibbonTab;

		export interface RibbonTabTopBar extends globalThis.EnumItem {
			Name: "RibbonTabTopBar";
			Value: 16;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const RibbonTabTopBar: RibbonTabTopBar;

		export interface Button extends globalThis.EnumItem {
			Name: "Button";
			Value: 17;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Button: Button;

		export interface MainButton extends globalThis.EnumItem {
			Name: "MainButton";
			Value: 18;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const MainButton: MainButton;

		export interface RibbonButton extends globalThis.EnumItem {
			Name: "RibbonButton";
			Value: 19;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const RibbonButton: RibbonButton;

		export interface ViewPortBackground extends globalThis.EnumItem {
			Name: "ViewPortBackground";
			Value: 20;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ViewPortBackground: ViewPortBackground;

		export interface InputFieldBackground extends globalThis.EnumItem {
			Name: "InputFieldBackground";
			Value: 21;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const InputFieldBackground: InputFieldBackground;

		export interface Item extends globalThis.EnumItem {
			Name: "Item";
			Value: 22;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Item: Item;

		export interface TableItem extends globalThis.EnumItem {
			Name: "TableItem";
			Value: 23;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const TableItem: TableItem;

		export interface CategoryItem extends globalThis.EnumItem {
			Name: "CategoryItem";
			Value: 24;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const CategoryItem: CategoryItem;

		export interface GameSettingsTableItem extends globalThis.EnumItem {
			Name: "GameSettingsTableItem";
			Value: 25;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const GameSettingsTableItem: GameSettingsTableItem;

		export interface GameSettingsTooltip extends globalThis.EnumItem {
			Name: "GameSettingsTooltip";
			Value: 26;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const GameSettingsTooltip: GameSettingsTooltip;

		export interface EmulatorBar extends globalThis.EnumItem {
			Name: "EmulatorBar";
			Value: 27;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const EmulatorBar: EmulatorBar;

		export interface EmulatorDropDown extends globalThis.EnumItem {
			Name: "EmulatorDropDown";
			Value: 28;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const EmulatorDropDown: EmulatorDropDown;

		export interface ColorPickerFrame extends globalThis.EnumItem {
			Name: "ColorPickerFrame";
			Value: 29;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ColorPickerFrame: ColorPickerFrame;

		export interface CurrentMarker extends globalThis.EnumItem {
			Name: "CurrentMarker";
			Value: 30;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const CurrentMarker: CurrentMarker;

		export interface Border extends globalThis.EnumItem {
			Name: "Border";
			Value: 31;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Border: Border;

		export interface DropShadow extends globalThis.EnumItem {
			Name: "DropShadow";
			Value: 32;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DropShadow: DropShadow;

		export interface Shadow extends globalThis.EnumItem {
			Name: "Shadow";
			Value: 33;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Shadow: Shadow;

		export interface Light extends globalThis.EnumItem {
			Name: "Light";
			Value: 34;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Light: Light;

		export interface Dark extends globalThis.EnumItem {
			Name: "Dark";
			Value: 35;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Dark: Dark;

		export interface Mid extends globalThis.EnumItem {
			Name: "Mid";
			Value: 36;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Mid: Mid;

		export interface MainText extends globalThis.EnumItem {
			Name: "MainText";
			Value: 37;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const MainText: MainText;

		export interface SubText extends globalThis.EnumItem {
			Name: "SubText";
			Value: 38;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const SubText: SubText;

		export interface TitlebarText extends globalThis.EnumItem {
			Name: "TitlebarText";
			Value: 39;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const TitlebarText: TitlebarText;

		export interface BrightText extends globalThis.EnumItem {
			Name: "BrightText";
			Value: 40;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const BrightText: BrightText;

		export interface DimmedText extends globalThis.EnumItem {
			Name: "DimmedText";
			Value: 41;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DimmedText: DimmedText;

		export interface LinkText extends globalThis.EnumItem {
			Name: "LinkText";
			Value: 42;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const LinkText: LinkText;

		export interface WarningText extends globalThis.EnumItem {
			Name: "WarningText";
			Value: 43;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const WarningText: WarningText;

		export interface ErrorText extends globalThis.EnumItem {
			Name: "ErrorText";
			Value: 44;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ErrorText: ErrorText;

		export interface InfoText extends globalThis.EnumItem {
			Name: "InfoText";
			Value: 45;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const InfoText: InfoText;

		export interface SensitiveText extends globalThis.EnumItem {
			Name: "SensitiveText";
			Value: 46;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const SensitiveText: SensitiveText;

		export interface ScriptSideWidget extends globalThis.EnumItem {
			Name: "ScriptSideWidget";
			Value: 47;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptSideWidget: ScriptSideWidget;

		export interface ScriptBackground extends globalThis.EnumItem {
			Name: "ScriptBackground";
			Value: 48;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptBackground: ScriptBackground;

		export interface ScriptText extends globalThis.EnumItem {
			Name: "ScriptText";
			Value: 49;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptText: ScriptText;

		export interface ScriptSelectionText extends globalThis.EnumItem {
			Name: "ScriptSelectionText";
			Value: 50;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptSelectionText: ScriptSelectionText;

		export interface ScriptSelectionBackground extends globalThis.EnumItem {
			Name: "ScriptSelectionBackground";
			Value: 51;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptSelectionBackground: ScriptSelectionBackground;

		export interface ScriptFindSelectionBackground extends globalThis.EnumItem {
			Name: "ScriptFindSelectionBackground";
			Value: 52;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptFindSelectionBackground: ScriptFindSelectionBackground;

		export interface ScriptMatchingWordSelectionBackground extends globalThis.EnumItem {
			Name: "ScriptMatchingWordSelectionBackground";
			Value: 53;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptMatchingWordSelectionBackground: ScriptMatchingWordSelectionBackground;

		export interface ScriptOperator extends globalThis.EnumItem {
			Name: "ScriptOperator";
			Value: 54;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptOperator: ScriptOperator;

		export interface ScriptNumber extends globalThis.EnumItem {
			Name: "ScriptNumber";
			Value: 55;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptNumber: ScriptNumber;

		export interface ScriptString extends globalThis.EnumItem {
			Name: "ScriptString";
			Value: 56;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptString: ScriptString;

		export interface ScriptComment extends globalThis.EnumItem {
			Name: "ScriptComment";
			Value: 57;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptComment: ScriptComment;

		export interface ScriptKeyword extends globalThis.EnumItem {
			Name: "ScriptKeyword";
			Value: 58;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptKeyword: ScriptKeyword;

		export interface ScriptBuiltInFunction extends globalThis.EnumItem {
			Name: "ScriptBuiltInFunction";
			Value: 59;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptBuiltInFunction: ScriptBuiltInFunction;

		export interface ScriptWarning extends globalThis.EnumItem {
			Name: "ScriptWarning";
			Value: 60;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptWarning: ScriptWarning;

		export interface ScriptError extends globalThis.EnumItem {
			Name: "ScriptError";
			Value: 61;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptError: ScriptError;

		export interface ScriptInformation extends globalThis.EnumItem {
			Name: "ScriptInformation";
			Value: 62;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptInformation: ScriptInformation;

		export interface ScriptHint extends globalThis.EnumItem {
			Name: "ScriptHint";
			Value: 63;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptHint: ScriptHint;

		export interface ScriptWhitespace extends globalThis.EnumItem {
			Name: "ScriptWhitespace";
			Value: 64;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptWhitespace: ScriptWhitespace;

		export interface ScriptRuler extends globalThis.EnumItem {
			Name: "ScriptRuler";
			Value: 65;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptRuler: ScriptRuler;

		export interface DocViewCodeBackground extends globalThis.EnumItem {
			Name: "DocViewCodeBackground";
			Value: 66;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DocViewCodeBackground: DocViewCodeBackground;

		export interface DebuggerCurrentLine extends globalThis.EnumItem {
			Name: "DebuggerCurrentLine";
			Value: 67;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DebuggerCurrentLine: DebuggerCurrentLine;

		export interface DebuggerErrorLine extends globalThis.EnumItem {
			Name: "DebuggerErrorLine";
			Value: 68;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DebuggerErrorLine: DebuggerErrorLine;

		export interface ScriptEditorCurrentLine extends globalThis.EnumItem {
			Name: "ScriptEditorCurrentLine";
			Value: 107;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptEditorCurrentLine: ScriptEditorCurrentLine;

		export interface DiffFilePathText extends globalThis.EnumItem {
			Name: "DiffFilePathText";
			Value: 69;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffFilePathText: DiffFilePathText;

		export interface DiffTextHunkInfo extends globalThis.EnumItem {
			Name: "DiffTextHunkInfo";
			Value: 70;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffTextHunkInfo: DiffTextHunkInfo;

		export interface DiffTextNoChange extends globalThis.EnumItem {
			Name: "DiffTextNoChange";
			Value: 71;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffTextNoChange: DiffTextNoChange;

		export interface DiffTextAddition extends globalThis.EnumItem {
			Name: "DiffTextAddition";
			Value: 72;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffTextAddition: DiffTextAddition;

		export interface DiffTextDeletion extends globalThis.EnumItem {
			Name: "DiffTextDeletion";
			Value: 73;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffTextDeletion: DiffTextDeletion;

		export interface DiffTextSeparatorBackground extends globalThis.EnumItem {
			Name: "DiffTextSeparatorBackground";
			Value: 74;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffTextSeparatorBackground: DiffTextSeparatorBackground;

		export interface DiffTextNoChangeBackground extends globalThis.EnumItem {
			Name: "DiffTextNoChangeBackground";
			Value: 75;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffTextNoChangeBackground: DiffTextNoChangeBackground;

		export interface DiffTextAdditionBackground extends globalThis.EnumItem {
			Name: "DiffTextAdditionBackground";
			Value: 76;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffTextAdditionBackground: DiffTextAdditionBackground;

		export interface DiffTextDeletionBackground extends globalThis.EnumItem {
			Name: "DiffTextDeletionBackground";
			Value: 77;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffTextDeletionBackground: DiffTextDeletionBackground;

		export interface DiffLineNum extends globalThis.EnumItem {
			Name: "DiffLineNum";
			Value: 78;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffLineNum: DiffLineNum;

		export interface DiffLineNumSeparatorBackground extends globalThis.EnumItem {
			Name: "DiffLineNumSeparatorBackground";
			Value: 79;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffLineNumSeparatorBackground: DiffLineNumSeparatorBackground;

		export interface DiffLineNumNoChangeBackground extends globalThis.EnumItem {
			Name: "DiffLineNumNoChangeBackground";
			Value: 80;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffLineNumNoChangeBackground: DiffLineNumNoChangeBackground;

		export interface DiffLineNumAdditionBackground extends globalThis.EnumItem {
			Name: "DiffLineNumAdditionBackground";
			Value: 81;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffLineNumAdditionBackground: DiffLineNumAdditionBackground;

		export interface DiffLineNumDeletionBackground extends globalThis.EnumItem {
			Name: "DiffLineNumDeletionBackground";
			Value: 82;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffLineNumDeletionBackground: DiffLineNumDeletionBackground;

		export interface DiffFilePathBackground extends globalThis.EnumItem {
			Name: "DiffFilePathBackground";
			Value: 83;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffFilePathBackground: DiffFilePathBackground;

		export interface DiffFilePathBorder extends globalThis.EnumItem {
			Name: "DiffFilePathBorder";
			Value: 84;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DiffFilePathBorder: DiffFilePathBorder;

		export interface ChatIncomingBgColor extends globalThis.EnumItem {
			Name: "ChatIncomingBgColor";
			Value: 85;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ChatIncomingBgColor: ChatIncomingBgColor;

		export interface ChatIncomingTextColor extends globalThis.EnumItem {
			Name: "ChatIncomingTextColor";
			Value: 86;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ChatIncomingTextColor: ChatIncomingTextColor;

		export interface ChatOutgoingBgColor extends globalThis.EnumItem {
			Name: "ChatOutgoingBgColor";
			Value: 87;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ChatOutgoingBgColor: ChatOutgoingBgColor;

		export interface ChatOutgoingTextColor extends globalThis.EnumItem {
			Name: "ChatOutgoingTextColor";
			Value: 88;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ChatOutgoingTextColor: ChatOutgoingTextColor;

		export interface ChatModeratedMessageColor extends globalThis.EnumItem {
			Name: "ChatModeratedMessageColor";
			Value: 89;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ChatModeratedMessageColor: ChatModeratedMessageColor;

		export interface Separator extends globalThis.EnumItem {
			Name: "Separator";
			Value: 90;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Separator: Separator;

		export interface ButtonBorder extends globalThis.EnumItem {
			Name: "ButtonBorder";
			Value: 91;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ButtonBorder: ButtonBorder;

		export interface ButtonText extends globalThis.EnumItem {
			Name: "ButtonText";
			Value: 92;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ButtonText: ButtonText;

		export interface InputFieldBorder extends globalThis.EnumItem {
			Name: "InputFieldBorder";
			Value: 93;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const InputFieldBorder: InputFieldBorder;

		export interface CheckedFieldBackground extends globalThis.EnumItem {
			Name: "CheckedFieldBackground";
			Value: 94;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const CheckedFieldBackground: CheckedFieldBackground;

		export interface CheckedFieldBorder extends globalThis.EnumItem {
			Name: "CheckedFieldBorder";
			Value: 95;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const CheckedFieldBorder: CheckedFieldBorder;

		export interface CheckedFieldIndicator extends globalThis.EnumItem {
			Name: "CheckedFieldIndicator";
			Value: 96;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const CheckedFieldIndicator: CheckedFieldIndicator;

		export interface HeaderSection extends globalThis.EnumItem {
			Name: "HeaderSection";
			Value: 97;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const HeaderSection: HeaderSection;

		export interface Midlight extends globalThis.EnumItem {
			Name: "Midlight";
			Value: 98;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const Midlight: Midlight;

		export interface StatusBar extends globalThis.EnumItem {
			Name: "StatusBar";
			Value: 99;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const StatusBar: StatusBar;

		export interface DialogButton extends globalThis.EnumItem {
			Name: "DialogButton";
			Value: 100;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DialogButton: DialogButton;

		export interface DialogButtonText extends globalThis.EnumItem {
			Name: "DialogButtonText";
			Value: 101;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DialogButtonText: DialogButtonText;

		export interface DialogButtonBorder extends globalThis.EnumItem {
			Name: "DialogButtonBorder";
			Value: 102;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DialogButtonBorder: DialogButtonBorder;

		export interface DialogMainButton extends globalThis.EnumItem {
			Name: "DialogMainButton";
			Value: 103;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DialogMainButton: DialogMainButton;

		export interface DialogMainButtonText extends globalThis.EnumItem {
			Name: "DialogMainButtonText";
			Value: 104;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const DialogMainButtonText: DialogMainButtonText;

		export interface InfoBarWarningBackground extends globalThis.EnumItem {
			Name: "InfoBarWarningBackground";
			Value: 105;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const InfoBarWarningBackground: InfoBarWarningBackground;

		export interface InfoBarWarningText extends globalThis.EnumItem {
			Name: "InfoBarWarningText";
			Value: 106;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const InfoBarWarningText: InfoBarWarningText;

		export interface ScriptMethod extends globalThis.EnumItem {
			Name: "ScriptMethod";
			Value: 108;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptMethod: ScriptMethod;

		export interface ScriptProperty extends globalThis.EnumItem {
			Name: "ScriptProperty";
			Value: 109;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptProperty: ScriptProperty;

		export interface ScriptNil extends globalThis.EnumItem {
			Name: "ScriptNil";
			Value: 110;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptNil: ScriptNil;

		export interface ScriptBool extends globalThis.EnumItem {
			Name: "ScriptBool";
			Value: 111;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptBool: ScriptBool;

		export interface ScriptFunction extends globalThis.EnumItem {
			Name: "ScriptFunction";
			Value: 112;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptFunction: ScriptFunction;

		export interface ScriptLocal extends globalThis.EnumItem {
			Name: "ScriptLocal";
			Value: 113;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptLocal: ScriptLocal;

		export interface ScriptSelf extends globalThis.EnumItem {
			Name: "ScriptSelf";
			Value: 114;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptSelf: ScriptSelf;

		export interface ScriptLuauKeyword extends globalThis.EnumItem {
			Name: "ScriptLuauKeyword";
			Value: 115;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptLuauKeyword: ScriptLuauKeyword;

		export interface ScriptFunctionName extends globalThis.EnumItem {
			Name: "ScriptFunctionName";
			Value: 116;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptFunctionName: ScriptFunctionName;

		export interface ScriptTodo extends globalThis.EnumItem {
			Name: "ScriptTodo";
			Value: 117;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptTodo: ScriptTodo;

		export interface ScriptBracket extends globalThis.EnumItem {
			Name: "ScriptBracket";
			Value: 118;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const ScriptBracket: ScriptBracket;

		export interface AICOOverlayText extends globalThis.EnumItem {
			Name: "AICOOverlayText";
			Value: 128;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const AICOOverlayText: AICOOverlayText;

		export interface AICOOverlayButtonBackground extends globalThis.EnumItem {
			Name: "AICOOverlayButtonBackground";
			Value: 129;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const AICOOverlayButtonBackground: AICOOverlayButtonBackground;

		export interface AICOOverlayButtonBackgroundHover extends globalThis.EnumItem {
			Name: "AICOOverlayButtonBackgroundHover";
			Value: 130;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const AICOOverlayButtonBackgroundHover: AICOOverlayButtonBackgroundHover;

		export interface AICOOverlayButtonBackgroundPressed extends globalThis.EnumItem {
			Name: "AICOOverlayButtonBackgroundPressed";
			Value: 131;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const AICOOverlayButtonBackgroundPressed: AICOOverlayButtonBackgroundPressed;

		export interface AttributeCog extends globalThis.EnumItem {
			Name: "AttributeCog";
			Value: 119;
			EnumType: typeof globalThis.Enum.StudioStyleGuideColor;
		}

		export const AttributeCog: AttributeCog;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.StudioStyleGuideColor>;
	}
	export type StudioStyleGuideColor = StudioStyleGuideColor.MainBackground | StudioStyleGuideColor.Titlebar | StudioStyleGuideColor.Dropdown | StudioStyleGuideColor.Tooltip | StudioStyleGuideColor.Notification | StudioStyleGuideColor.ScrollBar | StudioStyleGuideColor.ScrollBarBackground | StudioStyleGuideColor.TabBar | StudioStyleGuideColor.Tab | StudioStyleGuideColor.FilterButtonDefault | StudioStyleGuideColor.FilterButtonHover | StudioStyleGuideColor.FilterButtonChecked | StudioStyleGuideColor.FilterButtonAccent | StudioStyleGuideColor.FilterButtonBorder | StudioStyleGuideColor.FilterButtonBorderAlt | StudioStyleGuideColor.RibbonTab | StudioStyleGuideColor.RibbonTabTopBar | StudioStyleGuideColor.Button | StudioStyleGuideColor.MainButton | StudioStyleGuideColor.RibbonButton | StudioStyleGuideColor.ViewPortBackground | StudioStyleGuideColor.InputFieldBackground | StudioStyleGuideColor.Item | StudioStyleGuideColor.TableItem | StudioStyleGuideColor.CategoryItem | StudioStyleGuideColor.GameSettingsTableItem | StudioStyleGuideColor.GameSettingsTooltip | StudioStyleGuideColor.EmulatorBar | StudioStyleGuideColor.EmulatorDropDown | StudioStyleGuideColor.ColorPickerFrame | StudioStyleGuideColor.CurrentMarker | StudioStyleGuideColor.Border | StudioStyleGuideColor.DropShadow | StudioStyleGuideColor.Shadow | StudioStyleGuideColor.Light | StudioStyleGuideColor.Dark | StudioStyleGuideColor.Mid | StudioStyleGuideColor.MainText | StudioStyleGuideColor.SubText | StudioStyleGuideColor.TitlebarText | StudioStyleGuideColor.BrightText | StudioStyleGuideColor.DimmedText | StudioStyleGuideColor.LinkText | StudioStyleGuideColor.WarningText | StudioStyleGuideColor.ErrorText | StudioStyleGuideColor.InfoText | StudioStyleGuideColor.SensitiveText | StudioStyleGuideColor.ScriptSideWidget | StudioStyleGuideColor.ScriptBackground | StudioStyleGuideColor.ScriptText | StudioStyleGuideColor.ScriptSelectionText | StudioStyleGuideColor.ScriptSelectionBackground | StudioStyleGuideColor.ScriptFindSelectionBackground | StudioStyleGuideColor.ScriptMatchingWordSelectionBackground | StudioStyleGuideColor.ScriptOperator | StudioStyleGuideColor.ScriptNumber | StudioStyleGuideColor.ScriptString | StudioStyleGuideColor.ScriptComment | StudioStyleGuideColor.ScriptKeyword | StudioStyleGuideColor.ScriptBuiltInFunction | StudioStyleGuideColor.ScriptWarning | StudioStyleGuideColor.ScriptError | StudioStyleGuideColor.ScriptInformation | StudioStyleGuideColor.ScriptHint | StudioStyleGuideColor.ScriptWhitespace | StudioStyleGuideColor.ScriptRuler | StudioStyleGuideColor.DocViewCodeBackground | StudioStyleGuideColor.DebuggerCurrentLine | StudioStyleGuideColor.DebuggerErrorLine | StudioStyleGuideColor.ScriptEditorCurrentLine | StudioStyleGuideColor.DiffFilePathText | StudioStyleGuideColor.DiffTextHunkInfo | StudioStyleGuideColor.DiffTextNoChange | StudioStyleGuideColor.DiffTextAddition | StudioStyleGuideColor.DiffTextDeletion | StudioStyleGuideColor.DiffTextSeparatorBackground | StudioStyleGuideColor.DiffTextNoChangeBackground | StudioStyleGuideColor.DiffTextAdditionBackground | StudioStyleGuideColor.DiffTextDeletionBackground | StudioStyleGuideColor.DiffLineNum | StudioStyleGuideColor.DiffLineNumSeparatorBackground | StudioStyleGuideColor.DiffLineNumNoChangeBackground | StudioStyleGuideColor.DiffLineNumAdditionBackground | StudioStyleGuideColor.DiffLineNumDeletionBackground | StudioStyleGuideColor.DiffFilePathBackground | StudioStyleGuideColor.DiffFilePathBorder | StudioStyleGuideColor.ChatIncomingBgColor | StudioStyleGuideColor.ChatIncomingTextColor | StudioStyleGuideColor.ChatOutgoingBgColor | StudioStyleGuideColor.ChatOutgoingTextColor | StudioStyleGuideColor.ChatModeratedMessageColor | StudioStyleGuideColor.Separator | StudioStyleGuideColor.ButtonBorder | StudioStyleGuideColor.ButtonText | StudioStyleGuideColor.InputFieldBorder | StudioStyleGuideColor.CheckedFieldBackground | StudioStyleGuideColor.CheckedFieldBorder | StudioStyleGuideColor.CheckedFieldIndicator | StudioStyleGuideColor.HeaderSection | StudioStyleGuideColor.Midlight | StudioStyleGuideColor.StatusBar | StudioStyleGuideColor.DialogButton | StudioStyleGuideColor.DialogButtonText | StudioStyleGuideColor.DialogButtonBorder | StudioStyleGuideColor.DialogMainButton | StudioStyleGuideColor.DialogMainButtonText | StudioStyleGuideColor.InfoBarWarningBackground | StudioStyleGuideColor.InfoBarWarningText | StudioStyleGuideColor.ScriptMethod | StudioStyleGuideColor.ScriptProperty | StudioStyleGuideColor.ScriptNil | StudioStyleGuideColor.ScriptBool | StudioStyleGuideColor.ScriptFunction | StudioStyleGuideColor.ScriptLocal | StudioStyleGuideColor.ScriptSelf | StudioStyleGuideColor.ScriptLuauKeyword | StudioStyleGuideColor.ScriptFunctionName | StudioStyleGuideColor.ScriptTodo | StudioStyleGuideColor.ScriptBracket | StudioStyleGuideColor.AICOOverlayText | StudioStyleGuideColor.AICOOverlayButtonBackground | StudioStyleGuideColor.AICOOverlayButtonBackgroundHover | StudioStyleGuideColor.AICOOverlayButtonBackgroundPressed | StudioStyleGuideColor.AttributeCog;

	export namespace StudioStyleGuideModifier {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.StudioStyleGuideModifier;
		}

		export const Default: Default;

		export interface Selected extends globalThis.EnumItem {
			Name: "Selected";
			Value: 1;
			EnumType: typeof globalThis.Enum.StudioStyleGuideModifier;
		}

		export const Selected: Selected;

		export interface Pressed extends globalThis.EnumItem {
			Name: "Pressed";
			Value: 2;
			EnumType: typeof globalThis.Enum.StudioStyleGuideModifier;
		}

		export const Pressed: Pressed;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 3;
			EnumType: typeof globalThis.Enum.StudioStyleGuideModifier;
		}

		export const Disabled: Disabled;

		export interface Hover extends globalThis.EnumItem {
			Name: "Hover";
			Value: 4;
			EnumType: typeof globalThis.Enum.StudioStyleGuideModifier;
		}

		export const Hover: Hover;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.StudioStyleGuideModifier>;
	}
	export type StudioStyleGuideModifier = StudioStyleGuideModifier.Default | StudioStyleGuideModifier.Selected | StudioStyleGuideModifier.Pressed | StudioStyleGuideModifier.Disabled | StudioStyleGuideModifier.Hover;

	export namespace Style {
		export interface AlternatingSupports extends globalThis.EnumItem {
			Name: "AlternatingSupports";
			Value: 0;
			EnumType: typeof globalThis.Enum.Style;
		}

		export const AlternatingSupports: AlternatingSupports;

		export interface BridgeStyleSupports extends globalThis.EnumItem {
			Name: "BridgeStyleSupports";
			Value: 1;
			EnumType: typeof globalThis.Enum.Style;
		}

		export const BridgeStyleSupports: BridgeStyleSupports;

		export interface NoSupports extends globalThis.EnumItem {
			Name: "NoSupports";
			Value: 2;
			EnumType: typeof globalThis.Enum.Style;
		}

		export const NoSupports: NoSupports;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.Style>;
	}
	export type Style = Style.AlternatingSupports | Style.BridgeStyleSupports | Style.NoSupports;

	export namespace SurfaceConstraint {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.SurfaceConstraint;
		}

		export const None: None;

		export interface Hinge extends globalThis.EnumItem {
			Name: "Hinge";
			Value: 1;
			EnumType: typeof globalThis.Enum.SurfaceConstraint;
		}

		export const Hinge: Hinge;

		export interface SteppingMotor extends globalThis.EnumItem {
			Name: "SteppingMotor";
			Value: 2;
			EnumType: typeof globalThis.Enum.SurfaceConstraint;
		}

		export const SteppingMotor: SteppingMotor;

		export interface Motor extends globalThis.EnumItem {
			Name: "Motor";
			Value: 3;
			EnumType: typeof globalThis.Enum.SurfaceConstraint;
		}

		export const Motor: Motor;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SurfaceConstraint>;
	}
	export type SurfaceConstraint = SurfaceConstraint.None | SurfaceConstraint.Hinge | SurfaceConstraint.SteppingMotor | SurfaceConstraint.Motor;

	export namespace SurfaceGuiShape {
		export interface Flat extends globalThis.EnumItem {
			Name: "Flat";
			Value: 0;
			EnumType: typeof globalThis.Enum.SurfaceGuiShape;
		}

		export const Flat: Flat;

		export interface CurvedHorizontally extends globalThis.EnumItem {
			Name: "CurvedHorizontally";
			Value: 1;
			EnumType: typeof globalThis.Enum.SurfaceGuiShape;
		}

		export const CurvedHorizontally: CurvedHorizontally;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SurfaceGuiShape>;
	}
	export type SurfaceGuiShape = SurfaceGuiShape.Flat | SurfaceGuiShape.CurvedHorizontally;

	export namespace SurfaceGuiSizingMode {
		export interface FixedSize extends globalThis.EnumItem {
			Name: "FixedSize";
			Value: 0;
			EnumType: typeof globalThis.Enum.SurfaceGuiSizingMode;
		}

		export const FixedSize: FixedSize;

		export interface PixelsPerStud extends globalThis.EnumItem {
			Name: "PixelsPerStud";
			Value: 1;
			EnumType: typeof globalThis.Enum.SurfaceGuiSizingMode;
		}

		export const PixelsPerStud: PixelsPerStud;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SurfaceGuiSizingMode>;
	}
	export type SurfaceGuiSizingMode = SurfaceGuiSizingMode.FixedSize | SurfaceGuiSizingMode.PixelsPerStud;

	export namespace SurfaceType {
		export interface Smooth extends globalThis.EnumItem {
			Name: "Smooth";
			Value: 0;
			EnumType: typeof globalThis.Enum.SurfaceType;
		}

		export const Smooth: Smooth;
		/** @deprecated renamed to Smooth */
		export const Spawn: Smooth;
		/** @deprecated renamed to Smooth */
		export const Unjoinable: Smooth;

		export interface Glue extends globalThis.EnumItem {
			Name: "Glue";
			Value: 1;
			EnumType: typeof globalThis.Enum.SurfaceType;
		}

		export const Glue: Glue;
		/** @deprecated renamed to Glue */
		export const Bumps: Glue;

		export interface Weld extends globalThis.EnumItem {
			Name: "Weld";
			Value: 2;
			EnumType: typeof globalThis.Enum.SurfaceType;
		}

		export const Weld: Weld;

		export interface Studs extends globalThis.EnumItem {
			Name: "Studs";
			Value: 3;
			EnumType: typeof globalThis.Enum.SurfaceType;
		}

		export const Studs: Studs;

		export interface Inlet extends globalThis.EnumItem {
			Name: "Inlet";
			Value: 4;
			EnumType: typeof globalThis.Enum.SurfaceType;
		}

		export const Inlet: Inlet;

		export interface Universal extends globalThis.EnumItem {
			Name: "Universal";
			Value: 5;
			EnumType: typeof globalThis.Enum.SurfaceType;
		}

		export const Universal: Universal;

		export interface Hinge extends globalThis.EnumItem {
			Name: "Hinge";
			Value: 6;
			EnumType: typeof globalThis.Enum.SurfaceType;
		}

		export const Hinge: Hinge;

		export interface Motor extends globalThis.EnumItem {
			Name: "Motor";
			Value: 7;
			EnumType: typeof globalThis.Enum.SurfaceType;
		}

		export const Motor: Motor;

		export interface SteppingMotor extends globalThis.EnumItem {
			Name: "SteppingMotor";
			Value: 8;
			EnumType: typeof globalThis.Enum.SurfaceType;
		}

		export const SteppingMotor: SteppingMotor;

		export interface SmoothNoOutlines extends globalThis.EnumItem {
			Name: "SmoothNoOutlines";
			Value: 10;
			EnumType: typeof globalThis.Enum.SurfaceType;
		}

		export const SmoothNoOutlines: SmoothNoOutlines;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SurfaceType>;
	}
	export type SurfaceType = SurfaceType.Smooth | SurfaceType.Glue | SurfaceType.Weld | SurfaceType.Studs | SurfaceType.Inlet | SurfaceType.Universal | SurfaceType.Hinge | SurfaceType.Motor | SurfaceType.SteppingMotor | SurfaceType.SmoothNoOutlines;

	export namespace SwipeDirection {
		export interface Right extends globalThis.EnumItem {
			Name: "Right";
			Value: 0;
			EnumType: typeof globalThis.Enum.SwipeDirection;
		}

		export const Right: Right;

		export interface Left extends globalThis.EnumItem {
			Name: "Left";
			Value: 1;
			EnumType: typeof globalThis.Enum.SwipeDirection;
		}

		export const Left: Left;

		export interface Up extends globalThis.EnumItem {
			Name: "Up";
			Value: 2;
			EnumType: typeof globalThis.Enum.SwipeDirection;
		}

		export const Up: Up;

		export interface Down extends globalThis.EnumItem {
			Name: "Down";
			Value: 3;
			EnumType: typeof globalThis.Enum.SwipeDirection;
		}

		export const Down: Down;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 4;
			EnumType: typeof globalThis.Enum.SwipeDirection;
		}

		export const None: None;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.SwipeDirection>;
	}
	export type SwipeDirection = SwipeDirection.Right | SwipeDirection.Left | SwipeDirection.Up | SwipeDirection.Down | SwipeDirection.None;

	export namespace TableMajorAxis {
		export interface RowMajor extends globalThis.EnumItem {
			Name: "RowMajor";
			Value: 0;
			EnumType: typeof globalThis.Enum.TableMajorAxis;
		}

		export const RowMajor: RowMajor;

		export interface ColumnMajor extends globalThis.EnumItem {
			Name: "ColumnMajor";
			Value: 1;
			EnumType: typeof globalThis.Enum.TableMajorAxis;
		}

		export const ColumnMajor: ColumnMajor;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TableMajorAxis>;
	}
	export type TableMajorAxis = TableMajorAxis.RowMajor | TableMajorAxis.ColumnMajor;

	export namespace Technology {
		export interface Compatibility extends globalThis.EnumItem {
			Name: "Compatibility";
			Value: 2;
			EnumType: typeof globalThis.Enum.Technology;
		}

		export const Compatibility: Compatibility;

		export interface Voxel extends globalThis.EnumItem {
			Name: "Voxel";
			Value: 1;
			EnumType: typeof globalThis.Enum.Technology;
		}

		export const Voxel: Voxel;

		export interface ShadowMap extends globalThis.EnumItem {
			Name: "ShadowMap";
			Value: 3;
			EnumType: typeof globalThis.Enum.Technology;
		}

		export const ShadowMap: ShadowMap;

		export interface Legacy extends globalThis.EnumItem {
			Name: "Legacy";
			Value: 0;
			EnumType: typeof globalThis.Enum.Technology;
		}

		export const Legacy: Legacy;

		export interface Future extends globalThis.EnumItem {
			Name: "Future";
			Value: 4;
			EnumType: typeof globalThis.Enum.Technology;
		}

		export const Future: Future;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.Technology>;
	}
	export type Technology = Technology.Compatibility | Technology.Voxel | Technology.ShadowMap | Technology.Legacy | Technology.Future;

	export namespace TeleportMethod {
		export interface TeleportToSpawnByName extends globalThis.EnumItem {
			Name: "TeleportToSpawnByName";
			Value: 0;
			EnumType: typeof globalThis.Enum.TeleportMethod;
		}

		export const TeleportToSpawnByName: TeleportToSpawnByName;

		export interface TeleportToPlaceInstance extends globalThis.EnumItem {
			Name: "TeleportToPlaceInstance";
			Value: 1;
			EnumType: typeof globalThis.Enum.TeleportMethod;
		}

		export const TeleportToPlaceInstance: TeleportToPlaceInstance;

		export interface TeleportToPrivateServer extends globalThis.EnumItem {
			Name: "TeleportToPrivateServer";
			Value: 2;
			EnumType: typeof globalThis.Enum.TeleportMethod;
		}

		export const TeleportToPrivateServer: TeleportToPrivateServer;

		export interface TeleportPartyAsync extends globalThis.EnumItem {
			Name: "TeleportPartyAsync";
			Value: 3;
			EnumType: typeof globalThis.Enum.TeleportMethod;
		}

		export const TeleportPartyAsync: TeleportPartyAsync;

		export interface TeleportUnknown extends globalThis.EnumItem {
			Name: "TeleportUnknown";
			Value: 4;
			EnumType: typeof globalThis.Enum.TeleportMethod;
		}

		export const TeleportUnknown: TeleportUnknown;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TeleportMethod>;
	}
	export type TeleportMethod = TeleportMethod.TeleportToSpawnByName | TeleportMethod.TeleportToPlaceInstance | TeleportMethod.TeleportToPrivateServer | TeleportMethod.TeleportPartyAsync | TeleportMethod.TeleportUnknown;

	export namespace TeleportResult {
		export interface Success extends globalThis.EnumItem {
			Name: "Success";
			Value: 0;
			EnumType: typeof globalThis.Enum.TeleportResult;
		}

		export const Success: Success;

		export interface Failure extends globalThis.EnumItem {
			Name: "Failure";
			Value: 1;
			EnumType: typeof globalThis.Enum.TeleportResult;
		}

		export const Failure: Failure;

		export interface GameNotFound extends globalThis.EnumItem {
			Name: "GameNotFound";
			Value: 2;
			EnumType: typeof globalThis.Enum.TeleportResult;
		}

		export const GameNotFound: GameNotFound;

		export interface GameEnded extends globalThis.EnumItem {
			Name: "GameEnded";
			Value: 3;
			EnumType: typeof globalThis.Enum.TeleportResult;
		}

		export const GameEnded: GameEnded;

		export interface GameFull extends globalThis.EnumItem {
			Name: "GameFull";
			Value: 4;
			EnumType: typeof globalThis.Enum.TeleportResult;
		}

		export const GameFull: GameFull;

		export interface Unauthorized extends globalThis.EnumItem {
			Name: "Unauthorized";
			Value: 5;
			EnumType: typeof globalThis.Enum.TeleportResult;
		}

		export const Unauthorized: Unauthorized;

		export interface Flooded extends globalThis.EnumItem {
			Name: "Flooded";
			Value: 6;
			EnumType: typeof globalThis.Enum.TeleportResult;
		}

		export const Flooded: Flooded;

		export interface IsTeleporting extends globalThis.EnumItem {
			Name: "IsTeleporting";
			Value: 7;
			EnumType: typeof globalThis.Enum.TeleportResult;
		}

		export const IsTeleporting: IsTeleporting;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TeleportResult>;
	}
	export type TeleportResult = TeleportResult.Success | TeleportResult.Failure | TeleportResult.GameNotFound | TeleportResult.GameEnded | TeleportResult.GameFull | TeleportResult.Unauthorized | TeleportResult.Flooded | TeleportResult.IsTeleporting;

	export namespace TeleportState {
		export interface RequestedFromServer extends globalThis.EnumItem {
			Name: "RequestedFromServer";
			Value: 0;
			EnumType: typeof globalThis.Enum.TeleportState;
		}

		export const RequestedFromServer: RequestedFromServer;

		export interface Started extends globalThis.EnumItem {
			Name: "Started";
			Value: 1;
			EnumType: typeof globalThis.Enum.TeleportState;
		}

		export const Started: Started;

		export interface WaitingForServer extends globalThis.EnumItem {
			Name: "WaitingForServer";
			Value: 2;
			EnumType: typeof globalThis.Enum.TeleportState;
		}

		export const WaitingForServer: WaitingForServer;

		export interface Failed extends globalThis.EnumItem {
			Name: "Failed";
			Value: 3;
			EnumType: typeof globalThis.Enum.TeleportState;
		}

		export const Failed: Failed;

		export interface InProgress extends globalThis.EnumItem {
			Name: "InProgress";
			Value: 4;
			EnumType: typeof globalThis.Enum.TeleportState;
		}

		export const InProgress: InProgress;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TeleportState>;
	}
	export type TeleportState = TeleportState.RequestedFromServer | TeleportState.Started | TeleportState.WaitingForServer | TeleportState.Failed | TeleportState.InProgress;

	export namespace TeleportType {
		export interface ToPlace extends globalThis.EnumItem {
			Name: "ToPlace";
			Value: 0;
			EnumType: typeof globalThis.Enum.TeleportType;
		}

		export const ToPlace: ToPlace;

		export interface ToInstance extends globalThis.EnumItem {
			Name: "ToInstance";
			Value: 1;
			EnumType: typeof globalThis.Enum.TeleportType;
		}

		export const ToInstance: ToInstance;

		export interface ToReservedServer extends globalThis.EnumItem {
			Name: "ToReservedServer";
			Value: 2;
			EnumType: typeof globalThis.Enum.TeleportType;
		}

		export const ToReservedServer: ToReservedServer;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TeleportType>;
	}
	export type TeleportType = TeleportType.ToPlace | TeleportType.ToInstance | TeleportType.ToReservedServer;

	export namespace TerrainAcquisitionMethod {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.TerrainAcquisitionMethod;
		}

		export const None: None;

		export interface Legacy extends globalThis.EnumItem {
			Name: "Legacy";
			Value: 1;
			EnumType: typeof globalThis.Enum.TerrainAcquisitionMethod;
		}

		export const Legacy: Legacy;

		export interface Template extends globalThis.EnumItem {
			Name: "Template";
			Value: 2;
			EnumType: typeof globalThis.Enum.TerrainAcquisitionMethod;
		}

		export const Template: Template;

		export interface Generate extends globalThis.EnumItem {
			Name: "Generate";
			Value: 3;
			EnumType: typeof globalThis.Enum.TerrainAcquisitionMethod;
		}

		export const Generate: Generate;

		export interface Import extends globalThis.EnumItem {
			Name: "Import";
			Value: 4;
			EnumType: typeof globalThis.Enum.TerrainAcquisitionMethod;
		}

		export const Import: Import;

		export interface Convert extends globalThis.EnumItem {
			Name: "Convert";
			Value: 5;
			EnumType: typeof globalThis.Enum.TerrainAcquisitionMethod;
		}

		export const Convert: Convert;

		export interface EditAddTool extends globalThis.EnumItem {
			Name: "EditAddTool";
			Value: 6;
			EnumType: typeof globalThis.Enum.TerrainAcquisitionMethod;
		}

		export const EditAddTool: EditAddTool;

		export interface EditSeaLevelTool extends globalThis.EnumItem {
			Name: "EditSeaLevelTool";
			Value: 7;
			EnumType: typeof globalThis.Enum.TerrainAcquisitionMethod;
		}

		export const EditSeaLevelTool: EditSeaLevelTool;

		export interface EditReplaceTool extends globalThis.EnumItem {
			Name: "EditReplaceTool";
			Value: 8;
			EnumType: typeof globalThis.Enum.TerrainAcquisitionMethod;
		}

		export const EditReplaceTool: EditReplaceTool;

		export interface RegionFillTool extends globalThis.EnumItem {
			Name: "RegionFillTool";
			Value: 9;
			EnumType: typeof globalThis.Enum.TerrainAcquisitionMethod;
		}

		export const RegionFillTool: RegionFillTool;

		export interface RegionPasteTool extends globalThis.EnumItem {
			Name: "RegionPasteTool";
			Value: 10;
			EnumType: typeof globalThis.Enum.TerrainAcquisitionMethod;
		}

		export const RegionPasteTool: RegionPasteTool;

		export interface Other extends globalThis.EnumItem {
			Name: "Other";
			Value: 11;
			EnumType: typeof globalThis.Enum.TerrainAcquisitionMethod;
		}

		export const Other: Other;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TerrainAcquisitionMethod>;
	}
	export type TerrainAcquisitionMethod = TerrainAcquisitionMethod.None | TerrainAcquisitionMethod.Legacy | TerrainAcquisitionMethod.Template | TerrainAcquisitionMethod.Generate | TerrainAcquisitionMethod.Import | TerrainAcquisitionMethod.Convert | TerrainAcquisitionMethod.EditAddTool | TerrainAcquisitionMethod.EditSeaLevelTool | TerrainAcquisitionMethod.EditReplaceTool | TerrainAcquisitionMethod.RegionFillTool | TerrainAcquisitionMethod.RegionPasteTool | TerrainAcquisitionMethod.Other;

	export namespace TerrainFace {
		export interface Top extends globalThis.EnumItem {
			Name: "Top";
			Value: 0;
			EnumType: typeof globalThis.Enum.TerrainFace;
		}

		export const Top: Top;

		export interface Side extends globalThis.EnumItem {
			Name: "Side";
			Value: 1;
			EnumType: typeof globalThis.Enum.TerrainFace;
		}

		export const Side: Side;

		export interface Bottom extends globalThis.EnumItem {
			Name: "Bottom";
			Value: 2;
			EnumType: typeof globalThis.Enum.TerrainFace;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TerrainFace>;
	}
	export type TerrainFace = TerrainFace.Top | TerrainFace.Side | TerrainFace.Bottom;

	export namespace TextChatMessageStatus {
		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 1;
			EnumType: typeof globalThis.Enum.TextChatMessageStatus;
		}

		export const Unknown: Unknown;

		export interface Success extends globalThis.EnumItem {
			Name: "Success";
			Value: 2;
			EnumType: typeof globalThis.Enum.TextChatMessageStatus;
		}

		export const Success: Success;

		export interface Sending extends globalThis.EnumItem {
			Name: "Sending";
			Value: 3;
			EnumType: typeof globalThis.Enum.TextChatMessageStatus;
		}

		export const Sending: Sending;

		export interface TextFilterFailed extends globalThis.EnumItem {
			Name: "TextFilterFailed";
			Value: 4;
			EnumType: typeof globalThis.Enum.TextChatMessageStatus;
		}

		export const TextFilterFailed: TextFilterFailed;

		export interface Floodchecked extends globalThis.EnumItem {
			Name: "Floodchecked";
			Value: 5;
			EnumType: typeof globalThis.Enum.TextChatMessageStatus;
		}

		export const Floodchecked: Floodchecked;

		export interface InvalidPrivacySettings extends globalThis.EnumItem {
			Name: "InvalidPrivacySettings";
			Value: 6;
			EnumType: typeof globalThis.Enum.TextChatMessageStatus;
		}

		export const InvalidPrivacySettings: InvalidPrivacySettings;

		export interface InvalidTextChannelPermissions extends globalThis.EnumItem {
			Name: "InvalidTextChannelPermissions";
			Value: 7;
			EnumType: typeof globalThis.Enum.TextChatMessageStatus;
		}

		export const InvalidTextChannelPermissions: InvalidTextChannelPermissions;

		export interface MessageTooLong extends globalThis.EnumItem {
			Name: "MessageTooLong";
			Value: 8;
			EnumType: typeof globalThis.Enum.TextChatMessageStatus;
		}

		export const MessageTooLong: MessageTooLong;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TextChatMessageStatus>;
	}
	export type TextChatMessageStatus = TextChatMessageStatus.Unknown | TextChatMessageStatus.Success | TextChatMessageStatus.Sending | TextChatMessageStatus.TextFilterFailed | TextChatMessageStatus.Floodchecked | TextChatMessageStatus.InvalidPrivacySettings | TextChatMessageStatus.InvalidTextChannelPermissions | TextChatMessageStatus.MessageTooLong;

	export namespace TextDirection {
		export interface Auto extends globalThis.EnumItem {
			Name: "Auto";
			Value: 0;
			EnumType: typeof globalThis.Enum.TextDirection;
		}

		export const Auto: Auto;

		export interface LeftToRight extends globalThis.EnumItem {
			Name: "LeftToRight";
			Value: 1;
			EnumType: typeof globalThis.Enum.TextDirection;
		}

		export const LeftToRight: LeftToRight;

		export interface RightToLeft extends globalThis.EnumItem {
			Name: "RightToLeft";
			Value: 2;
			EnumType: typeof globalThis.Enum.TextDirection;
		}

		export const RightToLeft: RightToLeft;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TextDirection>;
	}
	export type TextDirection = TextDirection.Auto | TextDirection.LeftToRight | TextDirection.RightToLeft;

	export namespace TextFilterContext {
		export interface PublicChat extends globalThis.EnumItem {
			Name: "PublicChat";
			Value: 1;
			EnumType: typeof globalThis.Enum.TextFilterContext;
		}

		export const PublicChat: PublicChat;

		export interface PrivateChat extends globalThis.EnumItem {
			Name: "PrivateChat";
			Value: 2;
			EnumType: typeof globalThis.Enum.TextFilterContext;
		}

		export const PrivateChat: PrivateChat;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TextFilterContext>;
	}
	export type TextFilterContext = TextFilterContext.PublicChat | TextFilterContext.PrivateChat;

	export namespace TextInputType {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.TextInputType;
		}

		export const Default: Default;

		export interface NoSuggestions extends globalThis.EnumItem {
			Name: "NoSuggestions";
			Value: 1;
			EnumType: typeof globalThis.Enum.TextInputType;
		}

		export const NoSuggestions: NoSuggestions;

		export interface Number extends globalThis.EnumItem {
			Name: "Number";
			Value: 2;
			EnumType: typeof globalThis.Enum.TextInputType;
		}

		export const Number: Number;

		export interface Email extends globalThis.EnumItem {
			Name: "Email";
			Value: 3;
			EnumType: typeof globalThis.Enum.TextInputType;
		}

		export const Email: Email;

		export interface Phone extends globalThis.EnumItem {
			Name: "Phone";
			Value: 4;
			EnumType: typeof globalThis.Enum.TextInputType;
		}

		export const Phone: Phone;

		export interface Password extends globalThis.EnumItem {
			Name: "Password";
			Value: 5;
			EnumType: typeof globalThis.Enum.TextInputType;
		}

		export const Password: Password;

		export interface PasswordShown extends globalThis.EnumItem {
			Name: "PasswordShown";
			Value: 6;
			EnumType: typeof globalThis.Enum.TextInputType;
		}

		export const PasswordShown: PasswordShown;

		export interface Username extends globalThis.EnumItem {
			Name: "Username";
			Value: 7;
			EnumType: typeof globalThis.Enum.TextInputType;
		}

		export const Username: Username;

		export interface OneTimePassword extends globalThis.EnumItem {
			Name: "OneTimePassword";
			Value: 8;
			EnumType: typeof globalThis.Enum.TextInputType;
		}

		export const OneTimePassword: OneTimePassword;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TextInputType>;
	}
	export type TextInputType = TextInputType.Default | TextInputType.NoSuggestions | TextInputType.Number | TextInputType.Email | TextInputType.Phone | TextInputType.Password | TextInputType.PasswordShown | TextInputType.Username | TextInputType.OneTimePassword;

	export namespace TextTruncate {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.TextTruncate;
		}

		export const None: None;

		export interface AtEnd extends globalThis.EnumItem {
			Name: "AtEnd";
			Value: 1;
			EnumType: typeof globalThis.Enum.TextTruncate;
		}

		export const AtEnd: AtEnd;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TextTruncate>;
	}
	export type TextTruncate = TextTruncate.None | TextTruncate.AtEnd;

	export namespace TextXAlignment {
		export interface Left extends globalThis.EnumItem {
			Name: "Left";
			Value: 0;
			EnumType: typeof globalThis.Enum.TextXAlignment;
		}

		export const Left: Left;

		export interface Center extends globalThis.EnumItem {
			Name: "Center";
			Value: 2;
			EnumType: typeof globalThis.Enum.TextXAlignment;
		}

		export const Center: Center;

		export interface Right extends globalThis.EnumItem {
			Name: "Right";
			Value: 1;
			EnumType: typeof globalThis.Enum.TextXAlignment;
		}

		export const Right: Right;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TextXAlignment>;
	}
	export type TextXAlignment = TextXAlignment.Left | TextXAlignment.Center | TextXAlignment.Right;

	export namespace TextYAlignment {
		export interface Top extends globalThis.EnumItem {
			Name: "Top";
			Value: 0;
			EnumType: typeof globalThis.Enum.TextYAlignment;
		}

		export const Top: Top;

		export interface Center extends globalThis.EnumItem {
			Name: "Center";
			Value: 1;
			EnumType: typeof globalThis.Enum.TextYAlignment;
		}

		export const Center: Center;

		export interface Bottom extends globalThis.EnumItem {
			Name: "Bottom";
			Value: 2;
			EnumType: typeof globalThis.Enum.TextYAlignment;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TextYAlignment>;
	}
	export type TextYAlignment = TextYAlignment.Top | TextYAlignment.Center | TextYAlignment.Bottom;

	export namespace TextureMode {
		export interface Stretch extends globalThis.EnumItem {
			Name: "Stretch";
			Value: 0;
			EnumType: typeof globalThis.Enum.TextureMode;
		}

		export const Stretch: Stretch;

		export interface Wrap extends globalThis.EnumItem {
			Name: "Wrap";
			Value: 1;
			EnumType: typeof globalThis.Enum.TextureMode;
		}

		export const Wrap: Wrap;

		export interface Static extends globalThis.EnumItem {
			Name: "Static";
			Value: 2;
			EnumType: typeof globalThis.Enum.TextureMode;
		}

		export const Static: Static;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TextureMode>;
	}
	export type TextureMode = TextureMode.Stretch | TextureMode.Wrap | TextureMode.Static;

	export namespace TextureQueryType {
		export interface NonHumanoid extends globalThis.EnumItem {
			Name: "NonHumanoid";
			Value: 0;
			EnumType: typeof globalThis.Enum.TextureQueryType;
		}

		export const NonHumanoid: NonHumanoid;

		export interface NonHumanoidOrphaned extends globalThis.EnumItem {
			Name: "NonHumanoidOrphaned";
			Value: 1;
			EnumType: typeof globalThis.Enum.TextureQueryType;
		}

		export const NonHumanoidOrphaned: NonHumanoidOrphaned;

		export interface Humanoid extends globalThis.EnumItem {
			Name: "Humanoid";
			Value: 2;
			EnumType: typeof globalThis.Enum.TextureQueryType;
		}

		export const Humanoid: Humanoid;

		export interface HumanoidOrphaned extends globalThis.EnumItem {
			Name: "HumanoidOrphaned";
			Value: 3;
			EnumType: typeof globalThis.Enum.TextureQueryType;
		}

		export const HumanoidOrphaned: HumanoidOrphaned;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TextureQueryType>;
	}
	export type TextureQueryType = TextureQueryType.NonHumanoid | TextureQueryType.NonHumanoidOrphaned | TextureQueryType.Humanoid | TextureQueryType.HumanoidOrphaned;

	export namespace ThreadPoolConfig {
		export interface Auto extends globalThis.EnumItem {
			Name: "Auto";
			Value: 0;
			EnumType: typeof globalThis.Enum.ThreadPoolConfig;
		}

		export const Auto: Auto;
		/** @deprecated renamed to Auto */
		export const PartialThread: Auto;

		export interface PerCore1 extends globalThis.EnumItem {
			Name: "PerCore1";
			Value: 101;
			EnumType: typeof globalThis.Enum.ThreadPoolConfig;
		}

		export const PerCore1: PerCore1;

		export interface PerCore2 extends globalThis.EnumItem {
			Name: "PerCore2";
			Value: 102;
			EnumType: typeof globalThis.Enum.ThreadPoolConfig;
		}

		export const PerCore2: PerCore2;

		export interface PerCore3 extends globalThis.EnumItem {
			Name: "PerCore3";
			Value: 103;
			EnumType: typeof globalThis.Enum.ThreadPoolConfig;
		}

		export const PerCore3: PerCore3;

		export interface PerCore4 extends globalThis.EnumItem {
			Name: "PerCore4";
			Value: 104;
			EnumType: typeof globalThis.Enum.ThreadPoolConfig;
		}

		export const PerCore4: PerCore4;

		export interface Threads1 extends globalThis.EnumItem {
			Name: "Threads1";
			Value: 1;
			EnumType: typeof globalThis.Enum.ThreadPoolConfig;
		}

		export const Threads1: Threads1;

		export interface Threads2 extends globalThis.EnumItem {
			Name: "Threads2";
			Value: 2;
			EnumType: typeof globalThis.Enum.ThreadPoolConfig;
		}

		export const Threads2: Threads2;

		export interface Threads3 extends globalThis.EnumItem {
			Name: "Threads3";
			Value: 3;
			EnumType: typeof globalThis.Enum.ThreadPoolConfig;
		}

		export const Threads3: Threads3;

		export interface Threads4 extends globalThis.EnumItem {
			Name: "Threads4";
			Value: 4;
			EnumType: typeof globalThis.Enum.ThreadPoolConfig;
		}

		export const Threads4: Threads4;

		export interface Threads8 extends globalThis.EnumItem {
			Name: "Threads8";
			Value: 8;
			EnumType: typeof globalThis.Enum.ThreadPoolConfig;
		}

		export const Threads8: Threads8;

		export interface Threads16 extends globalThis.EnumItem {
			Name: "Threads16";
			Value: 16;
			EnumType: typeof globalThis.Enum.ThreadPoolConfig;
		}

		export const Threads16: Threads16;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ThreadPoolConfig>;
	}
	export type ThreadPoolConfig = ThreadPoolConfig.Auto | ThreadPoolConfig.PerCore1 | ThreadPoolConfig.PerCore2 | ThreadPoolConfig.PerCore3 | ThreadPoolConfig.PerCore4 | ThreadPoolConfig.Threads1 | ThreadPoolConfig.Threads2 | ThreadPoolConfig.Threads3 | ThreadPoolConfig.Threads4 | ThreadPoolConfig.Threads8 | ThreadPoolConfig.Threads16;

	export namespace ThrottlingPriority {
		export interface Extreme extends globalThis.EnumItem {
			Name: "Extreme";
			Value: 2;
			EnumType: typeof globalThis.Enum.ThrottlingPriority;
		}

		export const Extreme: Extreme;

		export interface ElevatedOnServer extends globalThis.EnumItem {
			Name: "ElevatedOnServer";
			Value: 1;
			EnumType: typeof globalThis.Enum.ThrottlingPriority;
		}

		export const ElevatedOnServer: ElevatedOnServer;

		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.ThrottlingPriority;
		}

		export const Default: Default;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ThrottlingPriority>;
	}
	export type ThrottlingPriority = ThrottlingPriority.Extreme | ThrottlingPriority.ElevatedOnServer | ThrottlingPriority.Default;

	export namespace ThumbnailSize {
		export interface Size48x48 extends globalThis.EnumItem {
			Name: "Size48x48";
			Value: 0;
			EnumType: typeof globalThis.Enum.ThumbnailSize;
		}

		export const Size48x48: Size48x48;

		export interface Size180x180 extends globalThis.EnumItem {
			Name: "Size180x180";
			Value: 1;
			EnumType: typeof globalThis.Enum.ThumbnailSize;
		}

		export const Size180x180: Size180x180;

		export interface Size420x420 extends globalThis.EnumItem {
			Name: "Size420x420";
			Value: 2;
			EnumType: typeof globalThis.Enum.ThumbnailSize;
		}

		export const Size420x420: Size420x420;

		export interface Size60x60 extends globalThis.EnumItem {
			Name: "Size60x60";
			Value: 3;
			EnumType: typeof globalThis.Enum.ThumbnailSize;
		}

		export const Size60x60: Size60x60;

		export interface Size100x100 extends globalThis.EnumItem {
			Name: "Size100x100";
			Value: 4;
			EnumType: typeof globalThis.Enum.ThumbnailSize;
		}

		export const Size100x100: Size100x100;

		export interface Size150x150 extends globalThis.EnumItem {
			Name: "Size150x150";
			Value: 5;
			EnumType: typeof globalThis.Enum.ThumbnailSize;
		}

		export const Size150x150: Size150x150;

		export interface Size352x352 extends globalThis.EnumItem {
			Name: "Size352x352";
			Value: 6;
			EnumType: typeof globalThis.Enum.ThumbnailSize;
		}

		export const Size352x352: Size352x352;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ThumbnailSize>;
	}
	export type ThumbnailSize = ThumbnailSize.Size48x48 | ThumbnailSize.Size180x180 | ThumbnailSize.Size420x420 | ThumbnailSize.Size60x60 | ThumbnailSize.Size100x100 | ThumbnailSize.Size150x150 | ThumbnailSize.Size352x352;

	export namespace ThumbnailType {
		export interface HeadShot extends globalThis.EnumItem {
			Name: "HeadShot";
			Value: 0;
			EnumType: typeof globalThis.Enum.ThumbnailType;
		}

		export const HeadShot: HeadShot;

		export interface AvatarBust extends globalThis.EnumItem {
			Name: "AvatarBust";
			Value: 1;
			EnumType: typeof globalThis.Enum.ThumbnailType;
		}

		export const AvatarBust: AvatarBust;

		export interface AvatarThumbnail extends globalThis.EnumItem {
			Name: "AvatarThumbnail";
			Value: 2;
			EnumType: typeof globalThis.Enum.ThumbnailType;
		}

		export const AvatarThumbnail: AvatarThumbnail;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ThumbnailType>;
	}
	export type ThumbnailType = ThumbnailType.HeadShot | ThumbnailType.AvatarBust | ThumbnailType.AvatarThumbnail;

	export namespace TickCountSampleMethod {
		export interface Fast extends globalThis.EnumItem {
			Name: "Fast";
			Value: 0;
			EnumType: typeof globalThis.Enum.TickCountSampleMethod;
		}

		export const Fast: Fast;

		export interface Benchmark extends globalThis.EnumItem {
			Name: "Benchmark";
			Value: 1;
			EnumType: typeof globalThis.Enum.TickCountSampleMethod;
		}

		export const Benchmark: Benchmark;

		export interface Precise extends globalThis.EnumItem {
			Name: "Precise";
			Value: 2;
			EnumType: typeof globalThis.Enum.TickCountSampleMethod;
		}

		export const Precise: Precise;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TickCountSampleMethod>;
	}
	export type TickCountSampleMethod = TickCountSampleMethod.Fast | TickCountSampleMethod.Benchmark | TickCountSampleMethod.Precise;

	export namespace TopBottom {
		export interface Top extends globalThis.EnumItem {
			Name: "Top";
			Value: 0;
			EnumType: typeof globalThis.Enum.TopBottom;
		}

		export const Top: Top;

		export interface Center extends globalThis.EnumItem {
			Name: "Center";
			Value: 1;
			EnumType: typeof globalThis.Enum.TopBottom;
		}

		export const Center: Center;

		export interface Bottom extends globalThis.EnumItem {
			Name: "Bottom";
			Value: 2;
			EnumType: typeof globalThis.Enum.TopBottom;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TopBottom>;
	}
	export type TopBottom = TopBottom.Top | TopBottom.Center | TopBottom.Bottom;

	export namespace TouchCameraMovementMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.TouchCameraMovementMode;
		}

		export const Default: Default;

		export interface Follow extends globalThis.EnumItem {
			Name: "Follow";
			Value: 2;
			EnumType: typeof globalThis.Enum.TouchCameraMovementMode;
		}

		export const Follow: Follow;

		export interface Classic extends globalThis.EnumItem {
			Name: "Classic";
			Value: 1;
			EnumType: typeof globalThis.Enum.TouchCameraMovementMode;
		}

		export const Classic: Classic;

		export interface Orbital extends globalThis.EnumItem {
			Name: "Orbital";
			Value: 3;
			EnumType: typeof globalThis.Enum.TouchCameraMovementMode;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TouchCameraMovementMode>;
	}
	export type TouchCameraMovementMode = TouchCameraMovementMode.Default | TouchCameraMovementMode.Follow | TouchCameraMovementMode.Classic | TouchCameraMovementMode.Orbital;

	export namespace TouchMovementMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.TouchMovementMode;
		}

		export const Default: Default;

		export interface Thumbstick extends globalThis.EnumItem {
			Name: "Thumbstick";
			Value: 1;
			EnumType: typeof globalThis.Enum.TouchMovementMode;
		}

		export const Thumbstick: Thumbstick;

		export interface DPad extends globalThis.EnumItem {
			Name: "DPad";
			Value: 2;
			EnumType: typeof globalThis.Enum.TouchMovementMode;
		}

		export const DPad: DPad;

		export interface Thumbpad extends globalThis.EnumItem {
			Name: "Thumbpad";
			Value: 3;
			EnumType: typeof globalThis.Enum.TouchMovementMode;
		}

		export const Thumbpad: Thumbpad;

		export interface ClickToMove extends globalThis.EnumItem {
			Name: "ClickToMove";
			Value: 4;
			EnumType: typeof globalThis.Enum.TouchMovementMode;
		}

		export const ClickToMove: ClickToMove;

		export interface DynamicThumbstick extends globalThis.EnumItem {
			Name: "DynamicThumbstick";
			Value: 5;
			EnumType: typeof globalThis.Enum.TouchMovementMode;
		}

		export const DynamicThumbstick: DynamicThumbstick;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TouchMovementMode>;
	}
	export type TouchMovementMode = TouchMovementMode.Default | TouchMovementMode.Thumbstick | TouchMovementMode.DPad | TouchMovementMode.Thumbpad | TouchMovementMode.ClickToMove | TouchMovementMode.DynamicThumbstick;

	export namespace TrackerError {
		export interface Ok extends globalThis.EnumItem {
			Name: "Ok";
			Value: 0;
			EnumType: typeof globalThis.Enum.TrackerError;
		}

		export const Ok: Ok;

		export interface NoService extends globalThis.EnumItem {
			Name: "NoService";
			Value: 1;
			EnumType: typeof globalThis.Enum.TrackerError;
		}

		export const NoService: NoService;

		export interface InitFailed extends globalThis.EnumItem {
			Name: "InitFailed";
			Value: 2;
			EnumType: typeof globalThis.Enum.TrackerError;
		}

		export const InitFailed: InitFailed;

		export interface NoVideo extends globalThis.EnumItem {
			Name: "NoVideo";
			Value: 3;
			EnumType: typeof globalThis.Enum.TrackerError;
		}

		export const NoVideo: NoVideo;

		export interface VideoError extends globalThis.EnumItem {
			Name: "VideoError";
			Value: 4;
			EnumType: typeof globalThis.Enum.TrackerError;
		}

		export const VideoError: VideoError;

		export interface VideoNoPermission extends globalThis.EnumItem {
			Name: "VideoNoPermission";
			Value: 5;
			EnumType: typeof globalThis.Enum.TrackerError;
		}

		export const VideoNoPermission: VideoNoPermission;

		export interface VideoUnsupported extends globalThis.EnumItem {
			Name: "VideoUnsupported";
			Value: 6;
			EnumType: typeof globalThis.Enum.TrackerError;
		}

		export const VideoUnsupported: VideoUnsupported;

		export interface NoAudio extends globalThis.EnumItem {
			Name: "NoAudio";
			Value: 7;
			EnumType: typeof globalThis.Enum.TrackerError;
		}

		export const NoAudio: NoAudio;

		export interface AudioError extends globalThis.EnumItem {
			Name: "AudioError";
			Value: 8;
			EnumType: typeof globalThis.Enum.TrackerError;
		}

		export const AudioError: AudioError;

		export interface AudioNoPermission extends globalThis.EnumItem {
			Name: "AudioNoPermission";
			Value: 9;
			EnumType: typeof globalThis.Enum.TrackerError;
		}

		export const AudioNoPermission: AudioNoPermission;

		export interface UnsupportedDevice extends globalThis.EnumItem {
			Name: "UnsupportedDevice";
			Value: 10;
			EnumType: typeof globalThis.Enum.TrackerError;
		}

		export const UnsupportedDevice: UnsupportedDevice;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TrackerError>;
	}
	export type TrackerError = TrackerError.Ok | TrackerError.NoService | TrackerError.InitFailed | TrackerError.NoVideo | TrackerError.VideoError | TrackerError.VideoNoPermission | TrackerError.VideoUnsupported | TrackerError.NoAudio | TrackerError.AudioError | TrackerError.AudioNoPermission | TrackerError.UnsupportedDevice;

	export namespace TrackerExtrapolationFlagMode {
		export interface Auto extends globalThis.EnumItem {
			Name: "Auto";
			Value: 3;
			EnumType: typeof globalThis.Enum.TrackerExtrapolationFlagMode;
		}

		export const Auto: Auto;

		export interface ForceDisabled extends globalThis.EnumItem {
			Name: "ForceDisabled";
			Value: 0;
			EnumType: typeof globalThis.Enum.TrackerExtrapolationFlagMode;
		}

		export const ForceDisabled: ForceDisabled;

		export interface ExtrapolateFacsAndPose extends globalThis.EnumItem {
			Name: "ExtrapolateFacsAndPose";
			Value: 1;
			EnumType: typeof globalThis.Enum.TrackerExtrapolationFlagMode;
		}

		export const ExtrapolateFacsAndPose: ExtrapolateFacsAndPose;

		export interface ExtrapolateFacsOnly extends globalThis.EnumItem {
			Name: "ExtrapolateFacsOnly";
			Value: 2;
			EnumType: typeof globalThis.Enum.TrackerExtrapolationFlagMode;
		}

		export const ExtrapolateFacsOnly: ExtrapolateFacsOnly;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TrackerExtrapolationFlagMode>;
	}
	export type TrackerExtrapolationFlagMode = TrackerExtrapolationFlagMode.Auto | TrackerExtrapolationFlagMode.ForceDisabled | TrackerExtrapolationFlagMode.ExtrapolateFacsAndPose | TrackerExtrapolationFlagMode.ExtrapolateFacsOnly;

	export namespace TrackerLodFlagMode {
		export interface Auto extends globalThis.EnumItem {
			Name: "Auto";
			Value: 2;
			EnumType: typeof globalThis.Enum.TrackerLodFlagMode;
		}

		export const Auto: Auto;

		export interface ForceFalse extends globalThis.EnumItem {
			Name: "ForceFalse";
			Value: 0;
			EnumType: typeof globalThis.Enum.TrackerLodFlagMode;
		}

		export const ForceFalse: ForceFalse;

		export interface ForceTrue extends globalThis.EnumItem {
			Name: "ForceTrue";
			Value: 1;
			EnumType: typeof globalThis.Enum.TrackerLodFlagMode;
		}

		export const ForceTrue: ForceTrue;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TrackerLodFlagMode>;
	}
	export type TrackerLodFlagMode = TrackerLodFlagMode.Auto | TrackerLodFlagMode.ForceFalse | TrackerLodFlagMode.ForceTrue;

	export namespace TrackerLodValueMode {
		export interface Auto extends globalThis.EnumItem {
			Name: "Auto";
			Value: 2;
			EnumType: typeof globalThis.Enum.TrackerLodValueMode;
		}

		export const Auto: Auto;

		export interface Force0 extends globalThis.EnumItem {
			Name: "Force0";
			Value: 0;
			EnumType: typeof globalThis.Enum.TrackerLodValueMode;
		}

		export const Force0: Force0;

		export interface Force1 extends globalThis.EnumItem {
			Name: "Force1";
			Value: 1;
			EnumType: typeof globalThis.Enum.TrackerLodValueMode;
		}

		export const Force1: Force1;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TrackerLodValueMode>;
	}
	export type TrackerLodValueMode = TrackerLodValueMode.Auto | TrackerLodValueMode.Force0 | TrackerLodValueMode.Force1;

	export namespace TrackerMode {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.TrackerMode;
		}

		export const None: None;

		export interface Audio extends globalThis.EnumItem {
			Name: "Audio";
			Value: 1;
			EnumType: typeof globalThis.Enum.TrackerMode;
		}

		export const Audio: Audio;

		export interface Video extends globalThis.EnumItem {
			Name: "Video";
			Value: 2;
			EnumType: typeof globalThis.Enum.TrackerMode;
		}

		export const Video: Video;

		export interface AudioVideo extends globalThis.EnumItem {
			Name: "AudioVideo";
			Value: 3;
			EnumType: typeof globalThis.Enum.TrackerMode;
		}

		export const AudioVideo: AudioVideo;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TrackerMode>;
	}
	export type TrackerMode = TrackerMode.None | TrackerMode.Audio | TrackerMode.Video | TrackerMode.AudioVideo;

	export namespace TrackerPromptEvent {
		export interface LODCameraRecommendDisable extends globalThis.EnumItem {
			Name: "LODCameraRecommendDisable";
			Value: 0;
			EnumType: typeof globalThis.Enum.TrackerPromptEvent;
		}

		export const LODCameraRecommendDisable: LODCameraRecommendDisable;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TrackerPromptEvent>;
	}
	export type TrackerPromptEvent = TrackerPromptEvent.LODCameraRecommendDisable;

	export namespace TriStateBoolean {
		export interface Unknown extends globalThis.EnumItem {
			Name: "Unknown";
			Value: 0;
			EnumType: typeof globalThis.Enum.TriStateBoolean;
		}

		export const Unknown: Unknown;

		export interface True extends globalThis.EnumItem {
			Name: "True";
			Value: 1;
			EnumType: typeof globalThis.Enum.TriStateBoolean;
		}

		export const True: True;

		export interface False extends globalThis.EnumItem {
			Name: "False";
			Value: 2;
			EnumType: typeof globalThis.Enum.TriStateBoolean;
		}

		export const False: False;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TriStateBoolean>;
	}
	export type TriStateBoolean = TriStateBoolean.Unknown | TriStateBoolean.True | TriStateBoolean.False;

	export namespace TweenStatus {
		export interface Canceled extends globalThis.EnumItem {
			Name: "Canceled";
			Value: 0;
			EnumType: typeof globalThis.Enum.TweenStatus;
		}

		export const Canceled: Canceled;

		export interface Completed extends globalThis.EnumItem {
			Name: "Completed";
			Value: 1;
			EnumType: typeof globalThis.Enum.TweenStatus;
		}

		export const Completed: Completed;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.TweenStatus>;
	}
	export type TweenStatus = TweenStatus.Canceled | TweenStatus.Completed;

	export namespace UITheme {
		export interface Light extends globalThis.EnumItem {
			Name: "Light";
			Value: 0;
			EnumType: typeof globalThis.Enum.UITheme;
		}

		export const Light: Light;

		export interface Dark extends globalThis.EnumItem {
			Name: "Dark";
			Value: 1;
			EnumType: typeof globalThis.Enum.UITheme;
		}

		export const Dark: Dark;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.UITheme>;
	}
	export type UITheme = UITheme.Light | UITheme.Dark;

	export namespace UiMessageType {
		export interface UiMessageError extends globalThis.EnumItem {
			Name: "UiMessageError";
			Value: 0;
			EnumType: typeof globalThis.Enum.UiMessageType;
		}

		export const UiMessageError: UiMessageError;

		export interface UiMessageInfo extends globalThis.EnumItem {
			Name: "UiMessageInfo";
			Value: 1;
			EnumType: typeof globalThis.Enum.UiMessageType;
		}

		export const UiMessageInfo: UiMessageInfo;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.UiMessageType>;
	}
	export type UiMessageType = UiMessageType.UiMessageError | UiMessageType.UiMessageInfo;

	export namespace UsageContext {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.UsageContext;
		}

		export const Default: Default;

		export interface Preview extends globalThis.EnumItem {
			Name: "Preview";
			Value: 1;
			EnumType: typeof globalThis.Enum.UsageContext;
		}

		export const Preview: Preview;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.UsageContext>;
	}
	export type UsageContext = UsageContext.Default | UsageContext.Preview;

	export namespace UserCFrame {
		export interface Head extends globalThis.EnumItem {
			Name: "Head";
			Value: 0;
			EnumType: typeof globalThis.Enum.UserCFrame;
		}

		export const Head: Head;

		export interface LeftHand extends globalThis.EnumItem {
			Name: "LeftHand";
			Value: 1;
			EnumType: typeof globalThis.Enum.UserCFrame;
		}

		export const LeftHand: LeftHand;

		export interface RightHand extends globalThis.EnumItem {
			Name: "RightHand";
			Value: 2;
			EnumType: typeof globalThis.Enum.UserCFrame;
		}

		export const RightHand: RightHand;

		export interface Floor extends globalThis.EnumItem {
			Name: "Floor";
			Value: 3;
			EnumType: typeof globalThis.Enum.UserCFrame;
		}

		export const Floor: Floor;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.UserCFrame>;
	}
	export type UserCFrame = UserCFrame.Head | UserCFrame.LeftHand | UserCFrame.RightHand | UserCFrame.Floor;

	export namespace UserInputState {
		export interface Begin extends globalThis.EnumItem {
			Name: "Begin";
			Value: 0;
			EnumType: typeof globalThis.Enum.UserInputState;
		}

		export const Begin: Begin;

		export interface Change extends globalThis.EnumItem {
			Name: "Change";
			Value: 1;
			EnumType: typeof globalThis.Enum.UserInputState;
		}

		export const Change: Change;

		export interface End extends globalThis.EnumItem {
			Name: "End";
			Value: 2;
			EnumType: typeof globalThis.Enum.UserInputState;
		}

		export const End: End;

		export interface Cancel extends globalThis.EnumItem {
			Name: "Cancel";
			Value: 3;
			EnumType: typeof globalThis.Enum.UserInputState;
		}

		export const Cancel: Cancel;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 4;
			EnumType: typeof globalThis.Enum.UserInputState;
		}

		export const None: None;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.UserInputState>;
	}
	export type UserInputState = UserInputState.Begin | UserInputState.Change | UserInputState.End | UserInputState.Cancel | UserInputState.None;

	export namespace UserInputType {
		export interface MouseButton1 extends globalThis.EnumItem {
			Name: "MouseButton1";
			Value: 0;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const MouseButton1: MouseButton1;

		export interface MouseButton2 extends globalThis.EnumItem {
			Name: "MouseButton2";
			Value: 1;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const MouseButton2: MouseButton2;

		export interface MouseButton3 extends globalThis.EnumItem {
			Name: "MouseButton3";
			Value: 2;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const MouseButton3: MouseButton3;

		export interface MouseWheel extends globalThis.EnumItem {
			Name: "MouseWheel";
			Value: 3;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const MouseWheel: MouseWheel;

		export interface MouseMovement extends globalThis.EnumItem {
			Name: "MouseMovement";
			Value: 4;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const MouseMovement: MouseMovement;

		export interface Touch extends globalThis.EnumItem {
			Name: "Touch";
			Value: 7;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Touch: Touch;

		export interface Keyboard extends globalThis.EnumItem {
			Name: "Keyboard";
			Value: 8;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Keyboard: Keyboard;

		export interface Focus extends globalThis.EnumItem {
			Name: "Focus";
			Value: 9;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Focus: Focus;

		export interface Accelerometer extends globalThis.EnumItem {
			Name: "Accelerometer";
			Value: 10;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Accelerometer: Accelerometer;

		export interface Gyro extends globalThis.EnumItem {
			Name: "Gyro";
			Value: 11;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Gyro: Gyro;

		export interface Gamepad1 extends globalThis.EnumItem {
			Name: "Gamepad1";
			Value: 12;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Gamepad1: Gamepad1;

		export interface Gamepad2 extends globalThis.EnumItem {
			Name: "Gamepad2";
			Value: 13;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Gamepad2: Gamepad2;

		export interface Gamepad3 extends globalThis.EnumItem {
			Name: "Gamepad3";
			Value: 14;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Gamepad3: Gamepad3;

		export interface Gamepad4 extends globalThis.EnumItem {
			Name: "Gamepad4";
			Value: 15;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Gamepad4: Gamepad4;

		export interface Gamepad5 extends globalThis.EnumItem {
			Name: "Gamepad5";
			Value: 16;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Gamepad5: Gamepad5;

		export interface Gamepad6 extends globalThis.EnumItem {
			Name: "Gamepad6";
			Value: 17;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Gamepad6: Gamepad6;

		export interface Gamepad7 extends globalThis.EnumItem {
			Name: "Gamepad7";
			Value: 18;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Gamepad7: Gamepad7;

		export interface Gamepad8 extends globalThis.EnumItem {
			Name: "Gamepad8";
			Value: 19;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const Gamepad8: Gamepad8;

		export interface TextInput extends globalThis.EnumItem {
			Name: "TextInput";
			Value: 20;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const TextInput: TextInput;

		export interface InputMethod extends globalThis.EnumItem {
			Name: "InputMethod";
			Value: 21;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const InputMethod: InputMethod;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 22;
			EnumType: typeof globalThis.Enum.UserInputType;
		}

		export const None: None;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.UserInputType>;
	}
	export type UserInputType = UserInputType.MouseButton1 | UserInputType.MouseButton2 | UserInputType.MouseButton3 | UserInputType.MouseWheel | UserInputType.MouseMovement | UserInputType.Touch | UserInputType.Keyboard | UserInputType.Focus | UserInputType.Accelerometer | UserInputType.Gyro | UserInputType.Gamepad1 | UserInputType.Gamepad2 | UserInputType.Gamepad3 | UserInputType.Gamepad4 | UserInputType.Gamepad5 | UserInputType.Gamepad6 | UserInputType.Gamepad7 | UserInputType.Gamepad8 | UserInputType.TextInput | UserInputType.InputMethod | UserInputType.None;

	export namespace VRSafetyBubbleMode {
		export interface NoOne extends globalThis.EnumItem {
			Name: "NoOne";
			Value: 0;
			EnumType: typeof globalThis.Enum.VRSafetyBubbleMode;
		}

		export const NoOne: NoOne;

		export interface OnlyFriends extends globalThis.EnumItem {
			Name: "OnlyFriends";
			Value: 1;
			EnumType: typeof globalThis.Enum.VRSafetyBubbleMode;
		}

		export const OnlyFriends: OnlyFriends;

		export interface Anyone extends globalThis.EnumItem {
			Name: "Anyone";
			Value: 2;
			EnumType: typeof globalThis.Enum.VRSafetyBubbleMode;
		}

		export const Anyone: Anyone;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VRSafetyBubbleMode>;
	}
	export type VRSafetyBubbleMode = VRSafetyBubbleMode.NoOne | VRSafetyBubbleMode.OnlyFriends | VRSafetyBubbleMode.Anyone;

	export namespace VRScaling {
		export interface World extends globalThis.EnumItem {
			Name: "World";
			Value: 0;
			EnumType: typeof globalThis.Enum.VRScaling;
		}

		export const World: World;

		export interface Off extends globalThis.EnumItem {
			Name: "Off";
			Value: 1;
			EnumType: typeof globalThis.Enum.VRScaling;
		}

		export const Off: Off;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VRScaling>;
	}
	export type VRScaling = VRScaling.World | VRScaling.Off;

	export namespace VRSessionState {
		export interface Idle extends globalThis.EnumItem {
			Name: "Idle";
			Value: 1;
			EnumType: typeof globalThis.Enum.VRSessionState;
		}

		export const Idle: Idle;

		export interface Visible extends globalThis.EnumItem {
			Name: "Visible";
			Value: 2;
			EnumType: typeof globalThis.Enum.VRSessionState;
		}

		export const Visible: Visible;

		export interface Focused extends globalThis.EnumItem {
			Name: "Focused";
			Value: 3;
			EnumType: typeof globalThis.Enum.VRSessionState;
		}

		export const Focused: Focused;

		export interface Stopping extends globalThis.EnumItem {
			Name: "Stopping";
			Value: 4;
			EnumType: typeof globalThis.Enum.VRSessionState;
		}

		export const Stopping: Stopping;

		export interface Undefined extends globalThis.EnumItem {
			Name: "Undefined";
			Value: 0;
			EnumType: typeof globalThis.Enum.VRSessionState;
		}

		export const Undefined: Undefined;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VRSessionState>;
	}
	export type VRSessionState = VRSessionState.Idle | VRSessionState.Visible | VRSessionState.Focused | VRSessionState.Stopping | VRSessionState.Undefined;

	export namespace VRTouchpad {
		export interface Left extends globalThis.EnumItem {
			Name: "Left";
			Value: 0;
			EnumType: typeof globalThis.Enum.VRTouchpad;
		}

		export const Left: Left;

		export interface Right extends globalThis.EnumItem {
			Name: "Right";
			Value: 1;
			EnumType: typeof globalThis.Enum.VRTouchpad;
		}

		export const Right: Right;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VRTouchpad>;
	}
	export type VRTouchpad = VRTouchpad.Left | VRTouchpad.Right;

	export namespace VRTouchpadMode {
		export interface Touch extends globalThis.EnumItem {
			Name: "Touch";
			Value: 0;
			EnumType: typeof globalThis.Enum.VRTouchpadMode;
		}

		export const Touch: Touch;

		export interface VirtualThumbstick extends globalThis.EnumItem {
			Name: "VirtualThumbstick";
			Value: 1;
			EnumType: typeof globalThis.Enum.VRTouchpadMode;
		}

		export const VirtualThumbstick: VirtualThumbstick;

		export interface ABXY extends globalThis.EnumItem {
			Name: "ABXY";
			Value: 2;
			EnumType: typeof globalThis.Enum.VRTouchpadMode;
		}

		export const ABXY: ABXY;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VRTouchpadMode>;
	}
	export type VRTouchpadMode = VRTouchpadMode.Touch | VRTouchpadMode.VirtualThumbstick | VRTouchpadMode.ABXY;

	export namespace VelocityConstraintMode {
		export interface Line extends globalThis.EnumItem {
			Name: "Line";
			Value: 0;
			EnumType: typeof globalThis.Enum.VelocityConstraintMode;
		}

		export const Line: Line;

		export interface Plane extends globalThis.EnumItem {
			Name: "Plane";
			Value: 1;
			EnumType: typeof globalThis.Enum.VelocityConstraintMode;
		}

		export const Plane: Plane;

		export interface Vector extends globalThis.EnumItem {
			Name: "Vector";
			Value: 2;
			EnumType: typeof globalThis.Enum.VelocityConstraintMode;
		}

		export const Vector: Vector;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VelocityConstraintMode>;
	}
	export type VelocityConstraintMode = VelocityConstraintMode.Line | VelocityConstraintMode.Plane | VelocityConstraintMode.Vector;

	export namespace VerticalAlignment {
		export interface Center extends globalThis.EnumItem {
			Name: "Center";
			Value: 0;
			EnumType: typeof globalThis.Enum.VerticalAlignment;
		}

		export const Center: Center;

		export interface Top extends globalThis.EnumItem {
			Name: "Top";
			Value: 1;
			EnumType: typeof globalThis.Enum.VerticalAlignment;
		}

		export const Top: Top;

		export interface Bottom extends globalThis.EnumItem {
			Name: "Bottom";
			Value: 2;
			EnumType: typeof globalThis.Enum.VerticalAlignment;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VerticalAlignment>;
	}
	export type VerticalAlignment = VerticalAlignment.Center | VerticalAlignment.Top | VerticalAlignment.Bottom;

	export namespace VerticalScrollBarPosition {
		export interface Left extends globalThis.EnumItem {
			Name: "Left";
			Value: 1;
			EnumType: typeof globalThis.Enum.VerticalScrollBarPosition;
		}

		export const Left: Left;

		export interface Right extends globalThis.EnumItem {
			Name: "Right";
			Value: 0;
			EnumType: typeof globalThis.Enum.VerticalScrollBarPosition;
		}

		export const Right: Right;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VerticalScrollBarPosition>;
	}
	export type VerticalScrollBarPosition = VerticalScrollBarPosition.Left | VerticalScrollBarPosition.Right;

	export namespace VibrationMotor {
		export interface Large extends globalThis.EnumItem {
			Name: "Large";
			Value: 0;
			EnumType: typeof globalThis.Enum.VibrationMotor;
		}

		export const Large: Large;

		export interface Small extends globalThis.EnumItem {
			Name: "Small";
			Value: 1;
			EnumType: typeof globalThis.Enum.VibrationMotor;
		}

		export const Small: Small;

		export interface LeftTrigger extends globalThis.EnumItem {
			Name: "LeftTrigger";
			Value: 2;
			EnumType: typeof globalThis.Enum.VibrationMotor;
		}

		export const LeftTrigger: LeftTrigger;

		export interface RightTrigger extends globalThis.EnumItem {
			Name: "RightTrigger";
			Value: 3;
			EnumType: typeof globalThis.Enum.VibrationMotor;
		}

		export const RightTrigger: RightTrigger;

		export interface LeftHand extends globalThis.EnumItem {
			Name: "LeftHand";
			Value: 4;
			EnumType: typeof globalThis.Enum.VibrationMotor;
		}

		export const LeftHand: LeftHand;

		export interface RightHand extends globalThis.EnumItem {
			Name: "RightHand";
			Value: 5;
			EnumType: typeof globalThis.Enum.VibrationMotor;
		}

		export const RightHand: RightHand;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VibrationMotor>;
	}
	export type VibrationMotor = VibrationMotor.Large | VibrationMotor.Small | VibrationMotor.LeftTrigger | VibrationMotor.RightTrigger | VibrationMotor.LeftHand | VibrationMotor.RightHand;

	export namespace ViewMode {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.ViewMode;
		}

		export const None: None;

		export interface GeometryComplexity extends globalThis.EnumItem {
			Name: "GeometryComplexity";
			Value: 1;
			EnumType: typeof globalThis.Enum.ViewMode;
		}

		export const GeometryComplexity: GeometryComplexity;

		export interface Transparent extends globalThis.EnumItem {
			Name: "Transparent";
			Value: 2;
			EnumType: typeof globalThis.Enum.ViewMode;
		}

		export const Transparent: Transparent;

		export interface Decal extends globalThis.EnumItem {
			Name: "Decal";
			Value: 3;
			EnumType: typeof globalThis.Enum.ViewMode;
		}

		export const Decal: Decal;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ViewMode>;
	}
	export type ViewMode = ViewMode.None | ViewMode.GeometryComplexity | ViewMode.Transparent | ViewMode.Decal;

	export namespace VirtualCursorMode {
		export interface Default extends globalThis.EnumItem {
			Name: "Default";
			Value: 0;
			EnumType: typeof globalThis.Enum.VirtualCursorMode;
		}

		export const Default: Default;

		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 1;
			EnumType: typeof globalThis.Enum.VirtualCursorMode;
		}

		export const Disabled: Disabled;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.VirtualCursorMode;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VirtualCursorMode>;
	}
	export type VirtualCursorMode = VirtualCursorMode.Default | VirtualCursorMode.Disabled | VirtualCursorMode.Enabled;

	export namespace VirtualInputMode {
		export interface Recording extends globalThis.EnumItem {
			Name: "Recording";
			Value: 1;
			EnumType: typeof globalThis.Enum.VirtualInputMode;
		}

		export const Recording: Recording;

		export interface Playing extends globalThis.EnumItem {
			Name: "Playing";
			Value: 2;
			EnumType: typeof globalThis.Enum.VirtualInputMode;
		}

		export const Playing: Playing;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.VirtualInputMode;
		}

		export const None: None;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VirtualInputMode>;
	}
	export type VirtualInputMode = VirtualInputMode.Recording | VirtualInputMode.Playing | VirtualInputMode.None;

	export namespace VoiceChatState {
		export interface Idle extends globalThis.EnumItem {
			Name: "Idle";
			Value: 0;
			EnumType: typeof globalThis.Enum.VoiceChatState;
		}

		export const Idle: Idle;

		export interface Joining extends globalThis.EnumItem {
			Name: "Joining";
			Value: 1;
			EnumType: typeof globalThis.Enum.VoiceChatState;
		}

		export const Joining: Joining;

		export interface JoiningRetry extends globalThis.EnumItem {
			Name: "JoiningRetry";
			Value: 2;
			EnumType: typeof globalThis.Enum.VoiceChatState;
		}

		export const JoiningRetry: JoiningRetry;

		export interface Joined extends globalThis.EnumItem {
			Name: "Joined";
			Value: 3;
			EnumType: typeof globalThis.Enum.VoiceChatState;
		}

		export const Joined: Joined;

		export interface Leaving extends globalThis.EnumItem {
			Name: "Leaving";
			Value: 4;
			EnumType: typeof globalThis.Enum.VoiceChatState;
		}

		export const Leaving: Leaving;

		export interface Ended extends globalThis.EnumItem {
			Name: "Ended";
			Value: 5;
			EnumType: typeof globalThis.Enum.VoiceChatState;
		}

		export const Ended: Ended;

		export interface Failed extends globalThis.EnumItem {
			Name: "Failed";
			Value: 6;
			EnumType: typeof globalThis.Enum.VoiceChatState;
		}

		export const Failed: Failed;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VoiceChatState>;
	}
	export type VoiceChatState = VoiceChatState.Idle | VoiceChatState.Joining | VoiceChatState.JoiningRetry | VoiceChatState.Joined | VoiceChatState.Leaving | VoiceChatState.Ended | VoiceChatState.Failed;

	export namespace VolumetricAudio {
		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 0;
			EnumType: typeof globalThis.Enum.VolumetricAudio;
		}

		export const Disabled: Disabled;

		export interface Automatic extends globalThis.EnumItem {
			Name: "Automatic";
			Value: 1;
			EnumType: typeof globalThis.Enum.VolumetricAudio;
		}

		export const Automatic: Automatic;

		export interface Enabled extends globalThis.EnumItem {
			Name: "Enabled";
			Value: 2;
			EnumType: typeof globalThis.Enum.VolumetricAudio;
		}

		export const Enabled: Enabled;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.VolumetricAudio>;
	}
	export type VolumetricAudio = VolumetricAudio.Disabled | VolumetricAudio.Automatic | VolumetricAudio.Enabled;

	export namespace WaterDirection {
		export interface NegX extends globalThis.EnumItem {
			Name: "NegX";
			Value: 0;
			EnumType: typeof globalThis.Enum.WaterDirection;
		}

		export const NegX: NegX;

		export interface X extends globalThis.EnumItem {
			Name: "X";
			Value: 1;
			EnumType: typeof globalThis.Enum.WaterDirection;
		}

		export const X: X;

		export interface NegY extends globalThis.EnumItem {
			Name: "NegY";
			Value: 2;
			EnumType: typeof globalThis.Enum.WaterDirection;
		}

		export const NegY: NegY;

		export interface Y extends globalThis.EnumItem {
			Name: "Y";
			Value: 3;
			EnumType: typeof globalThis.Enum.WaterDirection;
		}

		export const Y: Y;

		export interface NegZ extends globalThis.EnumItem {
			Name: "NegZ";
			Value: 4;
			EnumType: typeof globalThis.Enum.WaterDirection;
		}

		export const NegZ: NegZ;

		export interface Z extends globalThis.EnumItem {
			Name: "Z";
			Value: 5;
			EnumType: typeof globalThis.Enum.WaterDirection;
		}

		export const Z: Z;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.WaterDirection>;
	}
	export type WaterDirection = WaterDirection.NegX | WaterDirection.X | WaterDirection.NegY | WaterDirection.Y | WaterDirection.NegZ | WaterDirection.Z;

	export namespace WaterForce {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.WaterForce;
		}

		export const None: None;

		export interface Small extends globalThis.EnumItem {
			Name: "Small";
			Value: 1;
			EnumType: typeof globalThis.Enum.WaterForce;
		}

		export const Small: Small;

		export interface Medium extends globalThis.EnumItem {
			Name: "Medium";
			Value: 2;
			EnumType: typeof globalThis.Enum.WaterForce;
		}

		export const Medium: Medium;

		export interface Strong extends globalThis.EnumItem {
			Name: "Strong";
			Value: 3;
			EnumType: typeof globalThis.Enum.WaterForce;
		}

		export const Strong: Strong;

		export interface Max extends globalThis.EnumItem {
			Name: "Max";
			Value: 4;
			EnumType: typeof globalThis.Enum.WaterForce;
		}

		export const Max: Max;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.WaterForce>;
	}
	export type WaterForce = WaterForce.None | WaterForce.Small | WaterForce.Medium | WaterForce.Strong | WaterForce.Max;

	export namespace WeldConstraintPreserve {
		export interface All extends globalThis.EnumItem {
			Name: "All";
			Value: 0;
			EnumType: typeof globalThis.Enum.WeldConstraintPreserve;
		}

		export const All: All;

		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 1;
			EnumType: typeof globalThis.Enum.WeldConstraintPreserve;
		}

		export const None: None;

		export interface Touching extends globalThis.EnumItem {
			Name: "Touching";
			Value: 2;
			EnumType: typeof globalThis.Enum.WeldConstraintPreserve;
		}

		export const Touching: Touching;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.WeldConstraintPreserve>;
	}
	export type WeldConstraintPreserve = WeldConstraintPreserve.All | WeldConstraintPreserve.None | WeldConstraintPreserve.Touching;

	export namespace WrapLayerAutoSkin {
		export interface Disabled extends globalThis.EnumItem {
			Name: "Disabled";
			Value: 0;
			EnumType: typeof globalThis.Enum.WrapLayerAutoSkin;
		}

		export const Disabled: Disabled;

		export interface EnabledPreserve extends globalThis.EnumItem {
			Name: "EnabledPreserve";
			Value: 1;
			EnumType: typeof globalThis.Enum.WrapLayerAutoSkin;
		}

		export const EnabledPreserve: EnabledPreserve;

		export interface EnabledOverride extends globalThis.EnumItem {
			Name: "EnabledOverride";
			Value: 2;
			EnumType: typeof globalThis.Enum.WrapLayerAutoSkin;
		}

		export const EnabledOverride: EnabledOverride;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.WrapLayerAutoSkin>;
	}
	export type WrapLayerAutoSkin = WrapLayerAutoSkin.Disabled | WrapLayerAutoSkin.EnabledPreserve | WrapLayerAutoSkin.EnabledOverride;

	export namespace WrapLayerDebugMode {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const None: None;

		export interface BoundCage extends globalThis.EnumItem {
			Name: "BoundCage";
			Value: 1;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const BoundCage: BoundCage;

		export interface LayerCage extends globalThis.EnumItem {
			Name: "LayerCage";
			Value: 2;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const LayerCage: LayerCage;

		export interface BoundCageAndLinks extends globalThis.EnumItem {
			Name: "BoundCageAndLinks";
			Value: 3;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const BoundCageAndLinks: BoundCageAndLinks;

		export interface Reference extends globalThis.EnumItem {
			Name: "Reference";
			Value: 4;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const Reference: Reference;

		export interface Rbf extends globalThis.EnumItem {
			Name: "Rbf";
			Value: 5;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const Rbf: Rbf;

		export interface OuterCage extends globalThis.EnumItem {
			Name: "OuterCage";
			Value: 6;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const OuterCage: OuterCage;

		export interface ReferenceMeshAfterMorph extends globalThis.EnumItem {
			Name: "ReferenceMeshAfterMorph";
			Value: 7;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const ReferenceMeshAfterMorph: ReferenceMeshAfterMorph;

		export interface HSROuterDetail extends globalThis.EnumItem {
			Name: "HSROuterDetail";
			Value: 8;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const HSROuterDetail: HSROuterDetail;

		export interface HSROuter extends globalThis.EnumItem {
			Name: "HSROuter";
			Value: 9;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const HSROuter: HSROuter;

		export interface HSRInner extends globalThis.EnumItem {
			Name: "HSRInner";
			Value: 10;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const HSRInner: HSRInner;

		export interface HSRInnerReverse extends globalThis.EnumItem {
			Name: "HSRInnerReverse";
			Value: 11;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const HSRInnerReverse: HSRInnerReverse;

		export interface LayerCageFittedToBase extends globalThis.EnumItem {
			Name: "LayerCageFittedToBase";
			Value: 12;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const LayerCageFittedToBase: LayerCageFittedToBase;

		export interface LayerCageFittedToPrev extends globalThis.EnumItem {
			Name: "LayerCageFittedToPrev";
			Value: 13;
			EnumType: typeof globalThis.Enum.WrapLayerDebugMode;
		}

		export const LayerCageFittedToPrev: LayerCageFittedToPrev;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.WrapLayerDebugMode>;
	}
	export type WrapLayerDebugMode = WrapLayerDebugMode.None | WrapLayerDebugMode.BoundCage | WrapLayerDebugMode.LayerCage | WrapLayerDebugMode.BoundCageAndLinks | WrapLayerDebugMode.Reference | WrapLayerDebugMode.Rbf | WrapLayerDebugMode.OuterCage | WrapLayerDebugMode.ReferenceMeshAfterMorph | WrapLayerDebugMode.HSROuterDetail | WrapLayerDebugMode.HSROuter | WrapLayerDebugMode.HSRInner | WrapLayerDebugMode.HSRInnerReverse | WrapLayerDebugMode.LayerCageFittedToBase | WrapLayerDebugMode.LayerCageFittedToPrev;

	export namespace WrapTargetDebugMode {
		export interface None extends globalThis.EnumItem {
			Name: "None";
			Value: 0;
			EnumType: typeof globalThis.Enum.WrapTargetDebugMode;
		}

		export const None: None;

		export interface TargetCageOriginal extends globalThis.EnumItem {
			Name: "TargetCageOriginal";
			Value: 1;
			EnumType: typeof globalThis.Enum.WrapTargetDebugMode;
		}

		export const TargetCageOriginal: TargetCageOriginal;

		export interface TargetCageCompressed extends globalThis.EnumItem {
			Name: "TargetCageCompressed";
			Value: 2;
			EnumType: typeof globalThis.Enum.WrapTargetDebugMode;
		}

		export const TargetCageCompressed: TargetCageCompressed;

		export interface TargetCageInterface extends globalThis.EnumItem {
			Name: "TargetCageInterface";
			Value: 3;
			EnumType: typeof globalThis.Enum.WrapTargetDebugMode;
		}

		export const TargetCageInterface: TargetCageInterface;

		export interface TargetLayerCageOriginal extends globalThis.EnumItem {
			Name: "TargetLayerCageOriginal";
			Value: 4;
			EnumType: typeof globalThis.Enum.WrapTargetDebugMode;
		}

		export const TargetLayerCageOriginal: TargetLayerCageOriginal;

		export interface TargetLayerCageCompressed extends globalThis.EnumItem {
			Name: "TargetLayerCageCompressed";
			Value: 5;
			EnumType: typeof globalThis.Enum.WrapTargetDebugMode;
		}

		export const TargetLayerCageCompressed: TargetLayerCageCompressed;

		export interface TargetLayerInterface extends globalThis.EnumItem {
			Name: "TargetLayerInterface";
			Value: 6;
			EnumType: typeof globalThis.Enum.WrapTargetDebugMode;
		}

		export const TargetLayerInterface: TargetLayerInterface;

		export interface Rbf extends globalThis.EnumItem {
			Name: "Rbf";
			Value: 7;
			EnumType: typeof globalThis.Enum.WrapTargetDebugMode;
		}

		export const Rbf: Rbf;

		export interface OuterCageDetail extends globalThis.EnumItem {
			Name: "OuterCageDetail";
			Value: 8;
			EnumType: typeof globalThis.Enum.WrapTargetDebugMode;
		}

		export const OuterCageDetail: OuterCageDetail;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.WrapTargetDebugMode>;
	}
	export type WrapTargetDebugMode = WrapTargetDebugMode.None | WrapTargetDebugMode.TargetCageOriginal | WrapTargetDebugMode.TargetCageCompressed | WrapTargetDebugMode.TargetCageInterface | WrapTargetDebugMode.TargetLayerCageOriginal | WrapTargetDebugMode.TargetLayerCageCompressed | WrapTargetDebugMode.TargetLayerInterface | WrapTargetDebugMode.Rbf | WrapTargetDebugMode.OuterCageDetail;

	export namespace ZIndexBehavior {
		export interface Global extends globalThis.EnumItem {
			Name: "Global";
			Value: 0;
			EnumType: typeof globalThis.Enum.ZIndexBehavior;
		}

		export const Global: Global;

		export interface Sibling extends globalThis.EnumItem {
			Name: "Sibling";
			Value: 1;
			EnumType: typeof globalThis.Enum.ZIndexBehavior;
		}

		export const Sibling: Sibling;

		export function GetEnumItems(this: globalThis.Enum): Array<globalThis.Enum.ZIndexBehavior>;
	}
	export type ZIndexBehavior = ZIndexBehavior.Global | ZIndexBehavior.Sibling;

}

declare type CastsToEnum<T extends EnumItem> = T | T["Name" | "Value"];
