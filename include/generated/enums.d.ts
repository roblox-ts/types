// THIS FILE IS GENERATED AUTOMATICALLY AND SHOULD NOT BE EDITED BY HAND!

/// <reference no-default-lib="true"/>
/// <reference path="../roblox.d.ts" />

// GENERATED ROBLOX ENUMS

declare namespace Enum {
	type EnumType<T extends { Name: string }> = { [K in T["Name"]]: Extract<T, { Name: K }> };

	interface EnumItem {
		Name: string;
		Value: number;
		EnumType: EnumItemGroup;
	}
	type EnumItemGroup = { GetEnumItems(this: {}): Array<EnumItem> } & { [index: string]: EnumItem };
	export function GetEnums(this: typeof Enum): Array<EnumItemGroup>;

	export namespace ActionType {
		export interface Nothing {
			Name: "Nothing";
			Value: 0;
			EnumType: EnumType<Enum.ActionType>;
		}

		export const Nothing: Nothing;

		export interface Pause {
			Name: "Pause";
			Value: 1;
			EnumType: EnumType<Enum.ActionType>;
		}

		export const Pause: Pause;

		export interface Lose {
			Name: "Lose";
			Value: 2;
			EnumType: EnumType<Enum.ActionType>;
		}

		export const Lose: Lose;

		export interface Draw {
			Name: "Draw";
			Value: 3;
			EnumType: EnumType<Enum.ActionType>;
		}

		export const Draw: Draw;

		export interface Win {
			Name: "Win";
			Value: 4;
			EnumType: EnumType<Enum.ActionType>;
		}

		export const Win: Win;

		export function GetEnumItems(this: {}): Array<ActionType>
	}
	export type ActionType = ActionType.Nothing | ActionType.Pause | ActionType.Lose | ActionType.Draw | ActionType.Win;
	export namespace ActuatorRelativeTo {
		export interface Attachment0 {
			Name: "Attachment0";
			Value: 0;
			EnumType: EnumType<Enum.ActuatorRelativeTo>;
		}

		export const Attachment0: Attachment0;

		export interface Attachment1 {
			Name: "Attachment1";
			Value: 1;
			EnumType: EnumType<Enum.ActuatorRelativeTo>;
		}

		export const Attachment1: Attachment1;

		export interface World {
			Name: "World";
			Value: 2;
			EnumType: EnumType<Enum.ActuatorRelativeTo>;
		}

		export const World: World;

		export function GetEnumItems(this: {}): Array<ActuatorRelativeTo>
	}
	export type ActuatorRelativeTo = ActuatorRelativeTo.Attachment0 | ActuatorRelativeTo.Attachment1 | ActuatorRelativeTo.World;
	export namespace ActuatorType {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<Enum.ActuatorType>;
		}

		export const None: None;

		export interface Motor {
			Name: "Motor";
			Value: 1;
			EnumType: EnumType<Enum.ActuatorType>;
		}

		export const Motor: Motor;

		export interface Servo {
			Name: "Servo";
			Value: 2;
			EnumType: EnumType<Enum.ActuatorType>;
		}

		export const Servo: Servo;

		export function GetEnumItems(this: {}): Array<ActuatorType>
	}
	export type ActuatorType = ActuatorType.None | ActuatorType.Motor | ActuatorType.Servo;
	export namespace AlignType {
		export interface Parallel {
			Name: "Parallel";
			Value: 0;
			EnumType: EnumType<Enum.AlignType>;
		}

		export const Parallel: Parallel;

		export interface Perpendicular {
			Name: "Perpendicular";
			Value: 1;
			EnumType: EnumType<Enum.AlignType>;
		}

		export const Perpendicular: Perpendicular;

		export function GetEnumItems(this: {}): Array<AlignType>
	}
	export type AlignType = AlignType.Parallel | AlignType.Perpendicular;
	export namespace AnimationPriority {
		export interface Idle {
			Name: "Idle";
			Value: 0;
			EnumType: EnumType<Enum.AnimationPriority>;
		}

		export const Idle: Idle;

		export interface Movement {
			Name: "Movement";
			Value: 1;
			EnumType: EnumType<Enum.AnimationPriority>;
		}

		export const Movement: Movement;

		export interface Action {
			Name: "Action";
			Value: 2;
			EnumType: EnumType<Enum.AnimationPriority>;
		}

		export const Action: Action;

		export interface Core {
			Name: "Core";
			Value: 1000;
			EnumType: EnumType<Enum.AnimationPriority>;
		}

		export const Core: Core;

		export function GetEnumItems(this: {}): Array<AnimationPriority>
	}
	export type AnimationPriority = AnimationPriority.Idle | AnimationPriority.Movement | AnimationPriority.Action | AnimationPriority.Core;
	export namespace AppShellActionType {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<Enum.AppShellActionType>;
		}

		export const None: None;

		export interface OpenApp {
			Name: "OpenApp";
			Value: 1;
			EnumType: EnumType<Enum.AppShellActionType>;
		}

		export const OpenApp: OpenApp;

		export interface TapChatTab {
			Name: "TapChatTab";
			Value: 2;
			EnumType: EnumType<Enum.AppShellActionType>;
		}

		export const TapChatTab: TapChatTab;

		export interface TapConversationEntry {
			Name: "TapConversationEntry";
			Value: 3;
			EnumType: EnumType<Enum.AppShellActionType>;
		}

		export const TapConversationEntry: TapConversationEntry;

		export interface TapAvatarTab {
			Name: "TapAvatarTab";
			Value: 4;
			EnumType: EnumType<Enum.AppShellActionType>;
		}

		export const TapAvatarTab: TapAvatarTab;

		export interface ReadConversation {
			Name: "ReadConversation";
			Value: 5;
			EnumType: EnumType<Enum.AppShellActionType>;
		}

		export const ReadConversation: ReadConversation;

		export interface TapGamePageTab {
			Name: "TapGamePageTab";
			Value: 6;
			EnumType: EnumType<Enum.AppShellActionType>;
		}

		export const TapGamePageTab: TapGamePageTab;

		export interface TapHomePageTab {
			Name: "TapHomePageTab";
			Value: 7;
			EnumType: EnumType<Enum.AppShellActionType>;
		}

		export const TapHomePageTab: TapHomePageTab;

		export interface GamePageLoaded {
			Name: "GamePageLoaded";
			Value: 8;
			EnumType: EnumType<Enum.AppShellActionType>;
		}

		export const GamePageLoaded: GamePageLoaded;

		export interface HomePageLoaded {
			Name: "HomePageLoaded";
			Value: 9;
			EnumType: EnumType<Enum.AppShellActionType>;
		}

		export const HomePageLoaded: HomePageLoaded;

		export interface AvatarEditorPageLoaded {
			Name: "AvatarEditorPageLoaded";
			Value: 10;
			EnumType: EnumType<Enum.AppShellActionType>;
		}

		export const AvatarEditorPageLoaded: AvatarEditorPageLoaded;

		export function GetEnumItems(this: {}): Array<AppShellActionType>
	}
	export type AppShellActionType = AppShellActionType.None | AppShellActionType.OpenApp | AppShellActionType.TapChatTab | AppShellActionType.TapConversationEntry | AppShellActionType.TapAvatarTab | AppShellActionType.ReadConversation | AppShellActionType.TapGamePageTab | AppShellActionType.TapHomePageTab | AppShellActionType.GamePageLoaded | AppShellActionType.HomePageLoaded | AppShellActionType.AvatarEditorPageLoaded;
	export namespace AspectType {
		export interface FitWithinMaxSize {
			Name: "FitWithinMaxSize";
			Value: 0;
			EnumType: EnumType<Enum.AspectType>;
		}

		export const FitWithinMaxSize: FitWithinMaxSize;

		export interface ScaleWithParentSize {
			Name: "ScaleWithParentSize";
			Value: 1;
			EnumType: EnumType<Enum.AspectType>;
		}

		export const ScaleWithParentSize: ScaleWithParentSize;

		export function GetEnumItems(this: {}): Array<AspectType>
	}
	export type AspectType = AspectType.FitWithinMaxSize | AspectType.ScaleWithParentSize;
	export namespace AssetFetchStatus {
		export interface Success {
			Name: "Success";
			Value: 0;
			EnumType: EnumType<Enum.AssetFetchStatus>;
		}

		export const Success: Success;

		export interface Failure {
			Name: "Failure";
			Value: 1;
			EnumType: EnumType<Enum.AssetFetchStatus>;
		}

		export const Failure: Failure;

		export function GetEnumItems(this: {}): Array<AssetFetchStatus>
	}
	export type AssetFetchStatus = AssetFetchStatus.Success | AssetFetchStatus.Failure;
	export namespace AssetType {
		export interface Image {
			Name: "Image";
			Value: 1;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Image: Image;

		export interface TeeShirt {
			Name: "TeeShirt";
			Value: 2;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const TeeShirt: TeeShirt;

		export interface Audio {
			Name: "Audio";
			Value: 3;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Audio: Audio;

		export interface Mesh {
			Name: "Mesh";
			Value: 4;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Mesh: Mesh;

		export interface Lua {
			Name: "Lua";
			Value: 5;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Lua: Lua;

		export interface Hat {
			Name: "Hat";
			Value: 8;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Hat: Hat;

		export interface Place {
			Name: "Place";
			Value: 9;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Place: Place;

		export interface Model {
			Name: "Model";
			Value: 10;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Model: Model;

		export interface Shirt {
			Name: "Shirt";
			Value: 11;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Shirt: Shirt;

		export interface Pants {
			Name: "Pants";
			Value: 12;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Pants: Pants;

		export interface Decal {
			Name: "Decal";
			Value: 13;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Decal: Decal;

		export interface Head {
			Name: "Head";
			Value: 17;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Head: Head;

		export interface Face {
			Name: "Face";
			Value: 18;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Face: Face;

		export interface Gear {
			Name: "Gear";
			Value: 19;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Gear: Gear;

		export interface Badge {
			Name: "Badge";
			Value: 21;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Badge: Badge;

		export interface Animation {
			Name: "Animation";
			Value: 24;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Animation: Animation;

		export interface Torso {
			Name: "Torso";
			Value: 27;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Torso: Torso;

		export interface RightArm {
			Name: "RightArm";
			Value: 28;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const RightArm: RightArm;

		export interface LeftArm {
			Name: "LeftArm";
			Value: 29;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const LeftArm: LeftArm;

		export interface LeftLeg {
			Name: "LeftLeg";
			Value: 30;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg {
			Name: "RightLeg";
			Value: 31;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const RightLeg: RightLeg;

		export interface Package {
			Name: "Package";
			Value: 32;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Package: Package;

		export interface GamePass {
			Name: "GamePass";
			Value: 34;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const GamePass: GamePass;

		export interface Plugin {
			Name: "Plugin";
			Value: 38;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const Plugin: Plugin;

		export interface MeshPart {
			Name: "MeshPart";
			Value: 40;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const MeshPart: MeshPart;

		export interface HairAccessory {
			Name: "HairAccessory";
			Value: 41;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const HairAccessory: HairAccessory;

		export interface FaceAccessory {
			Name: "FaceAccessory";
			Value: 42;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const FaceAccessory: FaceAccessory;

		export interface NeckAccessory {
			Name: "NeckAccessory";
			Value: 43;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const NeckAccessory: NeckAccessory;

		export interface ShoulderAccessory {
			Name: "ShoulderAccessory";
			Value: 44;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const ShoulderAccessory: ShoulderAccessory;

		export interface FrontAccessory {
			Name: "FrontAccessory";
			Value: 45;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const FrontAccessory: FrontAccessory;

		export interface BackAccessory {
			Name: "BackAccessory";
			Value: 46;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const BackAccessory: BackAccessory;

		export interface WaistAccessory {
			Name: "WaistAccessory";
			Value: 47;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const WaistAccessory: WaistAccessory;

		export interface ClimbAnimation {
			Name: "ClimbAnimation";
			Value: 48;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const ClimbAnimation: ClimbAnimation;

		export interface DeathAnimation {
			Name: "DeathAnimation";
			Value: 49;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const DeathAnimation: DeathAnimation;

		export interface FallAnimation {
			Name: "FallAnimation";
			Value: 50;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const FallAnimation: FallAnimation;

		export interface IdleAnimation {
			Name: "IdleAnimation";
			Value: 51;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const IdleAnimation: IdleAnimation;

		export interface JumpAnimation {
			Name: "JumpAnimation";
			Value: 52;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const JumpAnimation: JumpAnimation;

		export interface RunAnimation {
			Name: "RunAnimation";
			Value: 53;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const RunAnimation: RunAnimation;

		export interface SwimAnimation {
			Name: "SwimAnimation";
			Value: 54;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const SwimAnimation: SwimAnimation;

		export interface WalkAnimation {
			Name: "WalkAnimation";
			Value: 55;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const WalkAnimation: WalkAnimation;

		export interface PoseAnimation {
			Name: "PoseAnimation";
			Value: 56;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const PoseAnimation: PoseAnimation;

		export interface EarAccessory {
			Name: "EarAccessory";
			Value: 57;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const EarAccessory: EarAccessory;

		export interface EyeAccessory {
			Name: "EyeAccessory";
			Value: 58;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const EyeAccessory: EyeAccessory;

		export interface EmoteAnimation {
			Name: "EmoteAnimation";
			Value: 61;
			EnumType: EnumType<Enum.AssetType>;
		}

		export const EmoteAnimation: EmoteAnimation;

		export function GetEnumItems(this: {}): Array<AssetType>
	}
	export type AssetType = AssetType.Image | AssetType.TeeShirt | AssetType.Audio | AssetType.Mesh | AssetType.Lua | AssetType.Hat | AssetType.Place | AssetType.Model | AssetType.Shirt | AssetType.Pants | AssetType.Decal | AssetType.Head | AssetType.Face | AssetType.Gear | AssetType.Badge | AssetType.Animation | AssetType.Torso | AssetType.RightArm | AssetType.LeftArm | AssetType.LeftLeg | AssetType.RightLeg | AssetType.Package | AssetType.GamePass | AssetType.Plugin | AssetType.MeshPart | AssetType.HairAccessory | AssetType.FaceAccessory | AssetType.NeckAccessory | AssetType.ShoulderAccessory | AssetType.FrontAccessory | AssetType.BackAccessory | AssetType.WaistAccessory | AssetType.ClimbAnimation | AssetType.DeathAnimation | AssetType.FallAnimation | AssetType.IdleAnimation | AssetType.JumpAnimation | AssetType.RunAnimation | AssetType.SwimAnimation | AssetType.WalkAnimation | AssetType.PoseAnimation | AssetType.EarAccessory | AssetType.EyeAccessory | AssetType.EmoteAnimation;
	export namespace AutoJointsMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.AutoJointsMode>;
		}

		export const Default: Default;

		export interface Explicit {
			Name: "Explicit";
			Value: 1;
			EnumType: EnumType<Enum.AutoJointsMode>;
		}

		export const Explicit: Explicit;

		export interface LegacyImplicit {
			Name: "LegacyImplicit";
			Value: 2;
			EnumType: EnumType<Enum.AutoJointsMode>;
		}

		export const LegacyImplicit: LegacyImplicit;

		export function GetEnumItems(this: {}): Array<AutoJointsMode>
	}
	export type AutoJointsMode = AutoJointsMode.Default | AutoJointsMode.Explicit | AutoJointsMode.LegacyImplicit;
	export namespace AvatarContextMenuOption {
		export interface Friend {
			Name: "Friend";
			Value: 0;
			EnumType: EnumType<Enum.AvatarContextMenuOption>;
		}

		export const Friend: Friend;

		export interface Chat {
			Name: "Chat";
			Value: 1;
			EnumType: EnumType<Enum.AvatarContextMenuOption>;
		}

		export const Chat: Chat;

		export interface Emote {
			Name: "Emote";
			Value: 2;
			EnumType: EnumType<Enum.AvatarContextMenuOption>;
		}

		export const Emote: Emote;

		export interface InspectMenu {
			Name: "InspectMenu";
			Value: 3;
			EnumType: EnumType<Enum.AvatarContextMenuOption>;
		}

		export const InspectMenu: InspectMenu;

		export function GetEnumItems(this: {}): Array<AvatarContextMenuOption>
	}
	export type AvatarContextMenuOption = AvatarContextMenuOption.Friend | AvatarContextMenuOption.Chat | AvatarContextMenuOption.Emote | AvatarContextMenuOption.InspectMenu;
	export namespace AvatarJointPositionType {
		export interface Fixed {
			Name: "Fixed";
			Value: 0;
			EnumType: EnumType<Enum.AvatarJointPositionType>;
		}

		export const Fixed: Fixed;

		export interface ArtistIntent {
			Name: "ArtistIntent";
			Value: 1;
			EnumType: EnumType<Enum.AvatarJointPositionType>;
		}

		export const ArtistIntent: ArtistIntent;

		export function GetEnumItems(this: {}): Array<AvatarJointPositionType>
	}
	export type AvatarJointPositionType = AvatarJointPositionType.Fixed | AvatarJointPositionType.ArtistIntent;
	export namespace Axis {
		export interface X {
			Name: "X";
			Value: 0;
			EnumType: EnumType<Enum.Axis>;
		}

		export const X: X;

		export interface Y {
			Name: "Y";
			Value: 1;
			EnumType: EnumType<Enum.Axis>;
		}

		export const Y: Y;

		export interface Z {
			Name: "Z";
			Value: 2;
			EnumType: EnumType<Enum.Axis>;
		}

		export const Z: Z;

		export function GetEnumItems(this: {}): Array<Axis>
	}
	export type Axis = Axis.X | Axis.Y | Axis.Z;
	export namespace BinType {
		export interface Script {
			Name: "Script";
			Value: 0;
			EnumType: EnumType<Enum.BinType>;
		}

		export const Script: Script;

		export interface GameTool {
			Name: "GameTool";
			Value: 1;
			EnumType: EnumType<Enum.BinType>;
		}

		export const GameTool: GameTool;

		export interface Grab {
			Name: "Grab";
			Value: 2;
			EnumType: EnumType<Enum.BinType>;
		}

		export const Grab: Grab;

		export interface Clone {
			Name: "Clone";
			Value: 3;
			EnumType: EnumType<Enum.BinType>;
		}

		export const Clone: Clone;

		export interface Hammer {
			Name: "Hammer";
			Value: 4;
			EnumType: EnumType<Enum.BinType>;
		}

		export const Hammer: Hammer;

		export function GetEnumItems(this: {}): Array<BinType>
	}
	export type BinType = BinType.Script | BinType.GameTool | BinType.Grab | BinType.Clone | BinType.Hammer;
	export namespace BodyPart {
		export interface Head {
			Name: "Head";
			Value: 0;
			EnumType: EnumType<Enum.BodyPart>;
		}

		export const Head: Head;

		export interface Torso {
			Name: "Torso";
			Value: 1;
			EnumType: EnumType<Enum.BodyPart>;
		}

		export const Torso: Torso;

		export interface LeftArm {
			Name: "LeftArm";
			Value: 2;
			EnumType: EnumType<Enum.BodyPart>;
		}

		export const LeftArm: LeftArm;

		export interface RightArm {
			Name: "RightArm";
			Value: 3;
			EnumType: EnumType<Enum.BodyPart>;
		}

		export const RightArm: RightArm;

		export interface LeftLeg {
			Name: "LeftLeg";
			Value: 4;
			EnumType: EnumType<Enum.BodyPart>;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg {
			Name: "RightLeg";
			Value: 5;
			EnumType: EnumType<Enum.BodyPart>;
		}

		export const RightLeg: RightLeg;

		export function GetEnumItems(this: {}): Array<BodyPart>
	}
	export type BodyPart = BodyPart.Head | BodyPart.Torso | BodyPart.LeftArm | BodyPart.RightArm | BodyPart.LeftLeg | BodyPart.RightLeg;
	export namespace BodyPartR15 {
		export interface Head {
			Name: "Head";
			Value: 0;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const Head: Head;

		export interface UpperTorso {
			Name: "UpperTorso";
			Value: 1;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const UpperTorso: UpperTorso;

		export interface LowerTorso {
			Name: "LowerTorso";
			Value: 2;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const LowerTorso: LowerTorso;

		export interface LeftFoot {
			Name: "LeftFoot";
			Value: 3;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const LeftFoot: LeftFoot;

		export interface LeftLowerLeg {
			Name: "LeftLowerLeg";
			Value: 4;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const LeftLowerLeg: LeftLowerLeg;

		export interface LeftUpperLeg {
			Name: "LeftUpperLeg";
			Value: 5;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const LeftUpperLeg: LeftUpperLeg;

		export interface RightFoot {
			Name: "RightFoot";
			Value: 6;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const RightFoot: RightFoot;

		export interface RightLowerLeg {
			Name: "RightLowerLeg";
			Value: 7;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const RightLowerLeg: RightLowerLeg;

		export interface RightUpperLeg {
			Name: "RightUpperLeg";
			Value: 8;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const RightUpperLeg: RightUpperLeg;

		export interface LeftHand {
			Name: "LeftHand";
			Value: 9;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const LeftHand: LeftHand;

		export interface LeftLowerArm {
			Name: "LeftLowerArm";
			Value: 10;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const LeftLowerArm: LeftLowerArm;

		export interface LeftUpperArm {
			Name: "LeftUpperArm";
			Value: 11;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const LeftUpperArm: LeftUpperArm;

		export interface RightHand {
			Name: "RightHand";
			Value: 12;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const RightHand: RightHand;

		export interface RightLowerArm {
			Name: "RightLowerArm";
			Value: 13;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const RightLowerArm: RightLowerArm;

		export interface RightUpperArm {
			Name: "RightUpperArm";
			Value: 14;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const RightUpperArm: RightUpperArm;

		export interface RootPart {
			Name: "RootPart";
			Value: 15;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const RootPart: RootPart;

		export interface Unknown {
			Name: "Unknown";
			Value: 17;
			EnumType: EnumType<Enum.BodyPartR15>;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: {}): Array<BodyPartR15>
	}
	export type BodyPartR15 = BodyPartR15.Head | BodyPartR15.UpperTorso | BodyPartR15.LowerTorso | BodyPartR15.LeftFoot | BodyPartR15.LeftLowerLeg | BodyPartR15.LeftUpperLeg | BodyPartR15.RightFoot | BodyPartR15.RightLowerLeg | BodyPartR15.RightUpperLeg | BodyPartR15.LeftHand | BodyPartR15.LeftLowerArm | BodyPartR15.LeftUpperArm | BodyPartR15.RightHand | BodyPartR15.RightLowerArm | BodyPartR15.RightUpperArm | BodyPartR15.RootPart | BodyPartR15.Unknown;
	export namespace Button {
		export interface Jump {
			Name: "Jump";
			Value: 32;
			EnumType: EnumType<Enum.Button>;
		}

		export const Jump: Jump;

		export interface Dismount {
			Name: "Dismount";
			Value: 8;
			EnumType: EnumType<Enum.Button>;
		}

		export const Dismount: Dismount;

		export function GetEnumItems(this: {}): Array<Button>
	}
	export type Button = Button.Jump | Button.Dismount;
	export namespace ButtonStyle {
		export interface Custom {
			Name: "Custom";
			Value: 0;
			EnumType: EnumType<Enum.ButtonStyle>;
		}

		export const Custom: Custom;

		export interface RobloxButtonDefault {
			Name: "RobloxButtonDefault";
			Value: 1;
			EnumType: EnumType<Enum.ButtonStyle>;
		}

		export const RobloxButtonDefault: RobloxButtonDefault;

		export interface RobloxButton {
			Name: "RobloxButton";
			Value: 2;
			EnumType: EnumType<Enum.ButtonStyle>;
		}

		export const RobloxButton: RobloxButton;

		export interface RobloxRoundButton {
			Name: "RobloxRoundButton";
			Value: 3;
			EnumType: EnumType<Enum.ButtonStyle>;
		}

		export const RobloxRoundButton: RobloxRoundButton;

		export interface RobloxRoundDefaultButton {
			Name: "RobloxRoundDefaultButton";
			Value: 4;
			EnumType: EnumType<Enum.ButtonStyle>;
		}

		export const RobloxRoundDefaultButton: RobloxRoundDefaultButton;

		export interface RobloxRoundDropdownButton {
			Name: "RobloxRoundDropdownButton";
			Value: 5;
			EnumType: EnumType<Enum.ButtonStyle>;
		}

		export const RobloxRoundDropdownButton: RobloxRoundDropdownButton;

		export function GetEnumItems(this: {}): Array<ButtonStyle>
	}
	export type ButtonStyle = ButtonStyle.Custom | ButtonStyle.RobloxButtonDefault | ButtonStyle.RobloxButton | ButtonStyle.RobloxRoundButton | ButtonStyle.RobloxRoundDefaultButton | ButtonStyle.RobloxRoundDropdownButton;
	export namespace CameraMode {
		export interface Classic {
			Name: "Classic";
			Value: 0;
			EnumType: EnumType<Enum.CameraMode>;
		}

		export const Classic: Classic;

		export interface LockFirstPerson {
			Name: "LockFirstPerson";
			Value: 1;
			EnumType: EnumType<Enum.CameraMode>;
		}

		export const LockFirstPerson: LockFirstPerson;

		export function GetEnumItems(this: {}): Array<CameraMode>
	}
	export type CameraMode = CameraMode.Classic | CameraMode.LockFirstPerson;
	export namespace CameraPanMode {
		export interface Classic {
			Name: "Classic";
			Value: 0;
			EnumType: EnumType<Enum.CameraPanMode>;
		}

		export const Classic: Classic;

		export interface EdgeBump {
			Name: "EdgeBump";
			Value: 1;
			EnumType: EnumType<Enum.CameraPanMode>;
		}

		export const EdgeBump: EdgeBump;

		export function GetEnumItems(this: {}): Array<CameraPanMode>
	}
	export type CameraPanMode = CameraPanMode.Classic | CameraPanMode.EdgeBump;
	export namespace CameraType {
		export interface Fixed {
			Name: "Fixed";
			Value: 0;
			EnumType: EnumType<Enum.CameraType>;
		}

		export const Fixed: Fixed;

		export interface Watch {
			Name: "Watch";
			Value: 2;
			EnumType: EnumType<Enum.CameraType>;
		}

		export const Watch: Watch;

		export interface Attach {
			Name: "Attach";
			Value: 1;
			EnumType: EnumType<Enum.CameraType>;
		}

		export const Attach: Attach;

		export interface Track {
			Name: "Track";
			Value: 3;
			EnumType: EnumType<Enum.CameraType>;
		}

		export const Track: Track;

		export interface Follow {
			Name: "Follow";
			Value: 4;
			EnumType: EnumType<Enum.CameraType>;
		}

		export const Follow: Follow;

		export interface Custom {
			Name: "Custom";
			Value: 5;
			EnumType: EnumType<Enum.CameraType>;
		}

		export const Custom: Custom;

		export interface Scriptable {
			Name: "Scriptable";
			Value: 6;
			EnumType: EnumType<Enum.CameraType>;
		}

		export const Scriptable: Scriptable;

		export interface Orbital {
			Name: "Orbital";
			Value: 7;
			EnumType: EnumType<Enum.CameraType>;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: {}): Array<CameraType>
	}
	export type CameraType = CameraType.Fixed | CameraType.Watch | CameraType.Attach | CameraType.Track | CameraType.Follow | CameraType.Custom | CameraType.Scriptable | CameraType.Orbital;
	export namespace CellBlock {
		export interface Solid {
			Name: "Solid";
			Value: 0;
			EnumType: EnumType<Enum.CellBlock>;
		}

		export const Solid: Solid;

		export interface VerticalWedge {
			Name: "VerticalWedge";
			Value: 1;
			EnumType: EnumType<Enum.CellBlock>;
		}

		export const VerticalWedge: VerticalWedge;

		export interface CornerWedge {
			Name: "CornerWedge";
			Value: 2;
			EnumType: EnumType<Enum.CellBlock>;
		}

		export const CornerWedge: CornerWedge;

		export interface InverseCornerWedge {
			Name: "InverseCornerWedge";
			Value: 3;
			EnumType: EnumType<Enum.CellBlock>;
		}

		export const InverseCornerWedge: InverseCornerWedge;

		export interface HorizontalWedge {
			Name: "HorizontalWedge";
			Value: 4;
			EnumType: EnumType<Enum.CellBlock>;
		}

		export const HorizontalWedge: HorizontalWedge;

		export function GetEnumItems(this: {}): Array<CellBlock>
	}
	export type CellBlock = CellBlock.Solid | CellBlock.VerticalWedge | CellBlock.CornerWedge | CellBlock.InverseCornerWedge | CellBlock.HorizontalWedge;
	export namespace CellMaterial {
		export interface Empty {
			Name: "Empty";
			Value: 0;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const Empty: Empty;

		export interface Grass {
			Name: "Grass";
			Value: 1;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const Grass: Grass;

		export interface Sand {
			Name: "Sand";
			Value: 2;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const Sand: Sand;

		export interface Brick {
			Name: "Brick";
			Value: 3;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const Brick: Brick;

		export interface Granite {
			Name: "Granite";
			Value: 4;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const Granite: Granite;

		export interface Asphalt {
			Name: "Asphalt";
			Value: 5;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const Asphalt: Asphalt;

		export interface Iron {
			Name: "Iron";
			Value: 6;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const Iron: Iron;

		export interface Aluminum {
			Name: "Aluminum";
			Value: 7;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const Aluminum: Aluminum;

		export interface Gold {
			Name: "Gold";
			Value: 8;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const Gold: Gold;

		export interface WoodPlank {
			Name: "WoodPlank";
			Value: 9;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const WoodPlank: WoodPlank;

		export interface WoodLog {
			Name: "WoodLog";
			Value: 10;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const WoodLog: WoodLog;

		export interface Gravel {
			Name: "Gravel";
			Value: 11;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const Gravel: Gravel;

		export interface CinderBlock {
			Name: "CinderBlock";
			Value: 12;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const CinderBlock: CinderBlock;

		export interface MossyStone {
			Name: "MossyStone";
			Value: 13;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const MossyStone: MossyStone;

		export interface Cement {
			Name: "Cement";
			Value: 14;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const Cement: Cement;

		export interface RedPlastic {
			Name: "RedPlastic";
			Value: 15;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const RedPlastic: RedPlastic;

		export interface BluePlastic {
			Name: "BluePlastic";
			Value: 16;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const BluePlastic: BluePlastic;

		export interface Water {
			Name: "Water";
			Value: 17;
			EnumType: EnumType<Enum.CellMaterial>;
		}

		export const Water: Water;

		export function GetEnumItems(this: {}): Array<CellMaterial>
	}
	export type CellMaterial = CellMaterial.Empty | CellMaterial.Grass | CellMaterial.Sand | CellMaterial.Brick | CellMaterial.Granite | CellMaterial.Asphalt | CellMaterial.Iron | CellMaterial.Aluminum | CellMaterial.Gold | CellMaterial.WoodPlank | CellMaterial.WoodLog | CellMaterial.Gravel | CellMaterial.CinderBlock | CellMaterial.MossyStone | CellMaterial.Cement | CellMaterial.RedPlastic | CellMaterial.BluePlastic | CellMaterial.Water;
	export namespace CellOrientation {
		export interface NegZ {
			Name: "NegZ";
			Value: 0;
			EnumType: EnumType<Enum.CellOrientation>;
		}

		export const NegZ: NegZ;

		export interface X {
			Name: "X";
			Value: 1;
			EnumType: EnumType<Enum.CellOrientation>;
		}

		export const X: X;

		export interface Z {
			Name: "Z";
			Value: 2;
			EnumType: EnumType<Enum.CellOrientation>;
		}

		export const Z: Z;

		export interface NegX {
			Name: "NegX";
			Value: 3;
			EnumType: EnumType<Enum.CellOrientation>;
		}

		export const NegX: NegX;

		export function GetEnumItems(this: {}): Array<CellOrientation>
	}
	export type CellOrientation = CellOrientation.NegZ | CellOrientation.X | CellOrientation.Z | CellOrientation.NegX;
	export namespace CenterDialogType {
		export interface UnsolicitedDialog {
			Name: "UnsolicitedDialog";
			Value: 1;
			EnumType: EnumType<Enum.CenterDialogType>;
		}

		export const UnsolicitedDialog: UnsolicitedDialog;

		export interface PlayerInitiatedDialog {
			Name: "PlayerInitiatedDialog";
			Value: 2;
			EnumType: EnumType<Enum.CenterDialogType>;
		}

		export const PlayerInitiatedDialog: PlayerInitiatedDialog;

		export interface ModalDialog {
			Name: "ModalDialog";
			Value: 3;
			EnumType: EnumType<Enum.CenterDialogType>;
		}

		export const ModalDialog: ModalDialog;

		export interface QuitDialog {
			Name: "QuitDialog";
			Value: 4;
			EnumType: EnumType<Enum.CenterDialogType>;
		}

		export const QuitDialog: QuitDialog;

		export function GetEnumItems(this: {}): Array<CenterDialogType>
	}
	export type CenterDialogType = CenterDialogType.UnsolicitedDialog | CenterDialogType.PlayerInitiatedDialog | CenterDialogType.ModalDialog | CenterDialogType.QuitDialog;
	export namespace ChatCallbackType {
		export interface OnCreatingChatWindow {
			Name: "OnCreatingChatWindow";
			Value: 1;
			EnumType: EnumType<Enum.ChatCallbackType>;
		}

		export const OnCreatingChatWindow: OnCreatingChatWindow;

		export interface OnClientSendingMessage {
			Name: "OnClientSendingMessage";
			Value: 2;
			EnumType: EnumType<Enum.ChatCallbackType>;
		}

		export const OnClientSendingMessage: OnClientSendingMessage;

		export interface OnClientFormattingMessage {
			Name: "OnClientFormattingMessage";
			Value: 3;
			EnumType: EnumType<Enum.ChatCallbackType>;
		}

		export const OnClientFormattingMessage: OnClientFormattingMessage;

		export interface OnServerReceivingMessage {
			Name: "OnServerReceivingMessage";
			Value: 17;
			EnumType: EnumType<Enum.ChatCallbackType>;
		}

		export const OnServerReceivingMessage: OnServerReceivingMessage;

		export function GetEnumItems(this: {}): Array<ChatCallbackType>
	}
	export type ChatCallbackType = ChatCallbackType.OnCreatingChatWindow | ChatCallbackType.OnClientSendingMessage | ChatCallbackType.OnClientFormattingMessage | ChatCallbackType.OnServerReceivingMessage;
	export namespace ChatColor {
		export interface Blue {
			Name: "Blue";
			Value: 0;
			EnumType: EnumType<Enum.ChatColor>;
		}

		export const Blue: Blue;

		export interface Green {
			Name: "Green";
			Value: 1;
			EnumType: EnumType<Enum.ChatColor>;
		}

		export const Green: Green;

		export interface Red {
			Name: "Red";
			Value: 2;
			EnumType: EnumType<Enum.ChatColor>;
		}

		export const Red: Red;

		export interface White {
			Name: "White";
			Value: 3;
			EnumType: EnumType<Enum.ChatColor>;
		}

		export const White: White;

		export function GetEnumItems(this: {}): Array<ChatColor>
	}
	export type ChatColor = ChatColor.Blue | ChatColor.Green | ChatColor.Red | ChatColor.White;
	export namespace ChatMode {
		export interface Menu {
			Name: "Menu";
			Value: 0;
			EnumType: EnumType<Enum.ChatMode>;
		}

		export const Menu: Menu;

		export interface TextAndMenu {
			Name: "TextAndMenu";
			Value: 1;
			EnumType: EnumType<Enum.ChatMode>;
		}

		export const TextAndMenu: TextAndMenu;

		export function GetEnumItems(this: {}): Array<ChatMode>
	}
	export type ChatMode = ChatMode.Menu | ChatMode.TextAndMenu;
	export namespace ChatPrivacyMode {
		export interface AllUsers {
			Name: "AllUsers";
			Value: 0;
			EnumType: EnumType<Enum.ChatPrivacyMode>;
		}

		export const AllUsers: AllUsers;

		export interface NoOne {
			Name: "NoOne";
			Value: 1;
			EnumType: EnumType<Enum.ChatPrivacyMode>;
		}

		export const NoOne: NoOne;

		export interface Friends {
			Name: "Friends";
			Value: 2;
			EnumType: EnumType<Enum.ChatPrivacyMode>;
		}

		export const Friends: Friends;

		export function GetEnumItems(this: {}): Array<ChatPrivacyMode>
	}
	export type ChatPrivacyMode = ChatPrivacyMode.AllUsers | ChatPrivacyMode.NoOne | ChatPrivacyMode.Friends;
	export namespace ChatStyle {
		export interface Classic {
			Name: "Classic";
			Value: 0;
			EnumType: EnumType<Enum.ChatStyle>;
		}

		export const Classic: Classic;

		export interface Bubble {
			Name: "Bubble";
			Value: 1;
			EnumType: EnumType<Enum.ChatStyle>;
		}

		export const Bubble: Bubble;

		export interface ClassicAndBubble {
			Name: "ClassicAndBubble";
			Value: 2;
			EnumType: EnumType<Enum.ChatStyle>;
		}

		export const ClassicAndBubble: ClassicAndBubble;

		export function GetEnumItems(this: {}): Array<ChatStyle>
	}
	export type ChatStyle = ChatStyle.Classic | ChatStyle.Bubble | ChatStyle.ClassicAndBubble;
	export namespace CollisionFidelity {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.CollisionFidelity>;
		}

		export const Default: Default;

		export interface Hull {
			Name: "Hull";
			Value: 1;
			EnumType: EnumType<Enum.CollisionFidelity>;
		}

		export const Hull: Hull;

		export interface Box {
			Name: "Box";
			Value: 2;
			EnumType: EnumType<Enum.CollisionFidelity>;
		}

		export const Box: Box;

		export function GetEnumItems(this: {}): Array<CollisionFidelity>
	}
	export type CollisionFidelity = CollisionFidelity.Default | CollisionFidelity.Hull | CollisionFidelity.Box;
	export namespace ComputerCameraMovementMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.ComputerCameraMovementMode>;
		}

		export const Default: Default;

		export interface Follow {
			Name: "Follow";
			Value: 2;
			EnumType: EnumType<Enum.ComputerCameraMovementMode>;
		}

		export const Follow: Follow;

		export interface Classic {
			Name: "Classic";
			Value: 1;
			EnumType: EnumType<Enum.ComputerCameraMovementMode>;
		}

		export const Classic: Classic;

		export interface Orbital {
			Name: "Orbital";
			Value: 3;
			EnumType: EnumType<Enum.ComputerCameraMovementMode>;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: {}): Array<ComputerCameraMovementMode>
	}
	export type ComputerCameraMovementMode = ComputerCameraMovementMode.Default | ComputerCameraMovementMode.Follow | ComputerCameraMovementMode.Classic | ComputerCameraMovementMode.Orbital;
	export namespace ComputerMovementMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.ComputerMovementMode>;
		}

		export const Default: Default;

		export interface KeyboardMouse {
			Name: "KeyboardMouse";
			Value: 1;
			EnumType: EnumType<Enum.ComputerMovementMode>;
		}

		export const KeyboardMouse: KeyboardMouse;

		export interface ClickToMove {
			Name: "ClickToMove";
			Value: 2;
			EnumType: EnumType<Enum.ComputerMovementMode>;
		}

		export const ClickToMove: ClickToMove;

		export function GetEnumItems(this: {}): Array<ComputerMovementMode>
	}
	export type ComputerMovementMode = ComputerMovementMode.Default | ComputerMovementMode.KeyboardMouse | ComputerMovementMode.ClickToMove;
	export namespace ConnectionError {
		export interface OK {
			Name: "OK";
			Value: 0;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const OK: OK;

		export interface DisconnectErrors {
			Name: "DisconnectErrors";
			Value: 256;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectErrors: DisconnectErrors;

		export interface DisconnectBadhash {
			Name: "DisconnectBadhash";
			Value: 257;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectBadhash: DisconnectBadhash;

		export interface DisconnectSecurityKeyMismatch {
			Name: "DisconnectSecurityKeyMismatch";
			Value: 258;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectSecurityKeyMismatch: DisconnectSecurityKeyMismatch;

		export interface DisconnectNewSecurityKeyMismatch {
			Name: "DisconnectNewSecurityKeyMismatch";
			Value: 272;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectNewSecurityKeyMismatch: DisconnectNewSecurityKeyMismatch;

		export interface DisconnectProtocolMismatch {
			Name: "DisconnectProtocolMismatch";
			Value: 259;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectProtocolMismatch: DisconnectProtocolMismatch;

		export interface DisconnectReceivePacketError {
			Name: "DisconnectReceivePacketError";
			Value: 260;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectReceivePacketError: DisconnectReceivePacketError;

		export interface DisconnectReceivePacketStreamError {
			Name: "DisconnectReceivePacketStreamError";
			Value: 261;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectReceivePacketStreamError: DisconnectReceivePacketStreamError;

		export interface DisconnectSendPacketError {
			Name: "DisconnectSendPacketError";
			Value: 262;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectSendPacketError: DisconnectSendPacketError;

		export interface DisconnectIllegalTeleport {
			Name: "DisconnectIllegalTeleport";
			Value: 263;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectIllegalTeleport: DisconnectIllegalTeleport;

		export interface DisconnectDuplicatePlayer {
			Name: "DisconnectDuplicatePlayer";
			Value: 264;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectDuplicatePlayer: DisconnectDuplicatePlayer;

		export interface DisconnectDuplicateTicket {
			Name: "DisconnectDuplicateTicket";
			Value: 265;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectDuplicateTicket: DisconnectDuplicateTicket;

		export interface DisconnectTimeout {
			Name: "DisconnectTimeout";
			Value: 266;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectTimeout: DisconnectTimeout;

		export interface DisconnectLuaKick {
			Name: "DisconnectLuaKick";
			Value: 267;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectLuaKick: DisconnectLuaKick;

		export interface DisconnectOnRemoteSysStats {
			Name: "DisconnectOnRemoteSysStats";
			Value: 268;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectOnRemoteSysStats: DisconnectOnRemoteSysStats;

		export interface DisconnectHashTimeout {
			Name: "DisconnectHashTimeout";
			Value: 269;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectHashTimeout: DisconnectHashTimeout;

		export interface DisconnectCloudEditKick {
			Name: "DisconnectCloudEditKick";
			Value: 270;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectCloudEditKick: DisconnectCloudEditKick;

		export interface DisconnectPlayerless {
			Name: "DisconnectPlayerless";
			Value: 271;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectPlayerless: DisconnectPlayerless;

		export interface DisconnectEvicted {
			Name: "DisconnectEvicted";
			Value: 273;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectEvicted: DisconnectEvicted;

		export interface DisconnectDevMaintenance {
			Name: "DisconnectDevMaintenance";
			Value: 274;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectDevMaintenance: DisconnectDevMaintenance;

		export interface DisconnectRobloxMaintenance {
			Name: "DisconnectRobloxMaintenance";
			Value: 275;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectRobloxMaintenance: DisconnectRobloxMaintenance;

		export interface DisconnectRejoin {
			Name: "DisconnectRejoin";
			Value: 276;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectRejoin: DisconnectRejoin;

		export interface DisconnectConnectionLost {
			Name: "DisconnectConnectionLost";
			Value: 277;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectConnectionLost: DisconnectConnectionLost;

		export interface DisconnectIdle {
			Name: "DisconnectIdle";
			Value: 278;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectIdle: DisconnectIdle;

		export interface DisconnectRaknetErrors {
			Name: "DisconnectRaknetErrors";
			Value: 279;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectRaknetErrors: DisconnectRaknetErrors;

		export interface DisconnectWrongVersion {
			Name: "DisconnectWrongVersion";
			Value: 280;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const DisconnectWrongVersion: DisconnectWrongVersion;

		export interface PlacelaunchErrors {
			Name: "PlacelaunchErrors";
			Value: 512;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchErrors: PlacelaunchErrors;

		export interface PlacelaunchDisabled {
			Name: "PlacelaunchDisabled";
			Value: 515;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchDisabled: PlacelaunchDisabled;

		export interface PlacelaunchError {
			Name: "PlacelaunchError";
			Value: 516;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchError: PlacelaunchError;

		export interface PlacelaunchGameEnded {
			Name: "PlacelaunchGameEnded";
			Value: 517;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchGameEnded: PlacelaunchGameEnded;

		export interface PlacelaunchGameFull {
			Name: "PlacelaunchGameFull";
			Value: 518;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchGameFull: PlacelaunchGameFull;

		export interface PlacelaunchUserLeft {
			Name: "PlacelaunchUserLeft";
			Value: 522;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchUserLeft: PlacelaunchUserLeft;

		export interface PlacelaunchRestricted {
			Name: "PlacelaunchRestricted";
			Value: 523;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchRestricted: PlacelaunchRestricted;

		export interface PlacelaunchUnauthorized {
			Name: "PlacelaunchUnauthorized";
			Value: 524;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchUnauthorized: PlacelaunchUnauthorized;

		export interface PlacelaunchFlooded {
			Name: "PlacelaunchFlooded";
			Value: 525;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchFlooded: PlacelaunchFlooded;

		export interface PlacelaunchHashExpired {
			Name: "PlacelaunchHashExpired";
			Value: 526;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchHashExpired: PlacelaunchHashExpired;

		export interface PlacelaunchHashException {
			Name: "PlacelaunchHashException";
			Value: 527;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchHashException: PlacelaunchHashException;

		export interface PlacelaunchPartyCannotFit {
			Name: "PlacelaunchPartyCannotFit";
			Value: 528;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchPartyCannotFit: PlacelaunchPartyCannotFit;

		export interface PlacelaunchHttpError {
			Name: "PlacelaunchHttpError";
			Value: 529;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchHttpError: PlacelaunchHttpError;

		export interface PlacelaunchCustomMessage {
			Name: "PlacelaunchCustomMessage";
			Value: 610;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchCustomMessage: PlacelaunchCustomMessage;

		export interface PlacelaunchOtherError {
			Name: "PlacelaunchOtherError";
			Value: 611;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const PlacelaunchOtherError: PlacelaunchOtherError;

		export interface TeleportErrors {
			Name: "TeleportErrors";
			Value: 768;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const TeleportErrors: TeleportErrors;

		export interface TeleportFailure {
			Name: "TeleportFailure";
			Value: 769;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const TeleportFailure: TeleportFailure;

		export interface TeleportGameNotFound {
			Name: "TeleportGameNotFound";
			Value: 770;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const TeleportGameNotFound: TeleportGameNotFound;

		export interface TeleportGameEnded {
			Name: "TeleportGameEnded";
			Value: 771;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const TeleportGameEnded: TeleportGameEnded;

		export interface TeleportGameFull {
			Name: "TeleportGameFull";
			Value: 772;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const TeleportGameFull: TeleportGameFull;

		export interface TeleportUnauthorized {
			Name: "TeleportUnauthorized";
			Value: 773;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const TeleportUnauthorized: TeleportUnauthorized;

		export interface TeleportFlooded {
			Name: "TeleportFlooded";
			Value: 774;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const TeleportFlooded: TeleportFlooded;

		export interface TeleportIsTeleporting {
			Name: "TeleportIsTeleporting";
			Value: 775;
			EnumType: EnumType<Enum.ConnectionError>;
		}

		export const TeleportIsTeleporting: TeleportIsTeleporting;

		export function GetEnumItems(this: {}): Array<ConnectionError>
	}
	export type ConnectionError = ConnectionError.OK | ConnectionError.DisconnectErrors | ConnectionError.DisconnectBadhash | ConnectionError.DisconnectSecurityKeyMismatch | ConnectionError.DisconnectNewSecurityKeyMismatch | ConnectionError.DisconnectProtocolMismatch | ConnectionError.DisconnectReceivePacketError | ConnectionError.DisconnectReceivePacketStreamError | ConnectionError.DisconnectSendPacketError | ConnectionError.DisconnectIllegalTeleport | ConnectionError.DisconnectDuplicatePlayer | ConnectionError.DisconnectDuplicateTicket | ConnectionError.DisconnectTimeout | ConnectionError.DisconnectLuaKick | ConnectionError.DisconnectOnRemoteSysStats | ConnectionError.DisconnectHashTimeout | ConnectionError.DisconnectCloudEditKick | ConnectionError.DisconnectPlayerless | ConnectionError.DisconnectEvicted | ConnectionError.DisconnectDevMaintenance | ConnectionError.DisconnectRobloxMaintenance | ConnectionError.DisconnectRejoin | ConnectionError.DisconnectConnectionLost | ConnectionError.DisconnectIdle | ConnectionError.DisconnectRaknetErrors | ConnectionError.DisconnectWrongVersion | ConnectionError.PlacelaunchErrors | ConnectionError.PlacelaunchDisabled | ConnectionError.PlacelaunchError | ConnectionError.PlacelaunchGameEnded | ConnectionError.PlacelaunchGameFull | ConnectionError.PlacelaunchUserLeft | ConnectionError.PlacelaunchRestricted | ConnectionError.PlacelaunchUnauthorized | ConnectionError.PlacelaunchFlooded | ConnectionError.PlacelaunchHashExpired | ConnectionError.PlacelaunchHashException | ConnectionError.PlacelaunchPartyCannotFit | ConnectionError.PlacelaunchHttpError | ConnectionError.PlacelaunchCustomMessage | ConnectionError.PlacelaunchOtherError | ConnectionError.TeleportErrors | ConnectionError.TeleportFailure | ConnectionError.TeleportGameNotFound | ConnectionError.TeleportGameEnded | ConnectionError.TeleportGameFull | ConnectionError.TeleportUnauthorized | ConnectionError.TeleportFlooded | ConnectionError.TeleportIsTeleporting;
	export namespace ConnectionState {
		export interface Connected {
			Name: "Connected";
			Value: 0;
			EnumType: EnumType<Enum.ConnectionState>;
		}

		export const Connected: Connected;

		export interface Disconnected {
			Name: "Disconnected";
			Value: 1;
			EnumType: EnumType<Enum.ConnectionState>;
		}

		export const Disconnected: Disconnected;

		export function GetEnumItems(this: {}): Array<ConnectionState>
	}
	export type ConnectionState = ConnectionState.Connected | ConnectionState.Disconnected;
	export namespace ContextActionPriority {
		export interface Low {
			Name: "Low";
			Value: 1000;
			EnumType: EnumType<Enum.ContextActionPriority>;
		}

		export const Low: Low;

		export interface Medium {
			Name: "Medium";
			Value: 2000;
			EnumType: EnumType<Enum.ContextActionPriority>;
		}

		export const Medium: Medium;

		export interface Default {
			Name: "Default";
			Value: 2000;
			EnumType: EnumType<Enum.ContextActionPriority>;
		}

		export const Default: Default;

		export interface High {
			Name: "High";
			Value: 3000;
			EnumType: EnumType<Enum.ContextActionPriority>;
		}

		export const High: High;

		export function GetEnumItems(this: {}): Array<ContextActionPriority>
	}
	export type ContextActionPriority = ContextActionPriority.Low | ContextActionPriority.Medium | ContextActionPriority.Default | ContextActionPriority.High;
	export namespace ContextActionResult {
		export interface Pass {
			Name: "Pass";
			Value: 1;
			EnumType: EnumType<Enum.ContextActionResult>;
		}

		export const Pass: Pass;

		export interface Sink {
			Name: "Sink";
			Value: 0;
			EnumType: EnumType<Enum.ContextActionResult>;
		}

		export const Sink: Sink;

		export function GetEnumItems(this: {}): Array<ContextActionResult>
	}
	export type ContextActionResult = ContextActionResult.Pass | ContextActionResult.Sink;
	export namespace ControlMode {
		export interface MouseLockSwitch {
			Name: "MouseLockSwitch";
			Value: 1;
			EnumType: EnumType<Enum.ControlMode>;
		}

		export const MouseLockSwitch: MouseLockSwitch;

		export interface Classic {
			Name: "Classic";
			Value: 0;
			EnumType: EnumType<Enum.ControlMode>;
		}

		export const Classic: Classic;

		export function GetEnumItems(this: {}): Array<ControlMode>
	}
	export type ControlMode = ControlMode.MouseLockSwitch | ControlMode.Classic;
	export namespace CoreGuiType {
		export interface PlayerList {
			Name: "PlayerList";
			Value: 0;
			EnumType: EnumType<Enum.CoreGuiType>;
		}

		export const PlayerList: PlayerList;

		export interface Health {
			Name: "Health";
			Value: 1;
			EnumType: EnumType<Enum.CoreGuiType>;
		}

		export const Health: Health;

		export interface Backpack {
			Name: "Backpack";
			Value: 2;
			EnumType: EnumType<Enum.CoreGuiType>;
		}

		export const Backpack: Backpack;

		export interface Chat {
			Name: "Chat";
			Value: 3;
			EnumType: EnumType<Enum.CoreGuiType>;
		}

		export const Chat: Chat;

		export interface All {
			Name: "All";
			Value: 4;
			EnumType: EnumType<Enum.CoreGuiType>;
		}

		export const All: All;

		export interface EmotesMenu {
			Name: "EmotesMenu";
			Value: 5;
			EnumType: EnumType<Enum.CoreGuiType>;
		}

		export const EmotesMenu: EmotesMenu;

		export function GetEnumItems(this: {}): Array<CoreGuiType>
	}
	export type CoreGuiType = CoreGuiType.PlayerList | CoreGuiType.Health | CoreGuiType.Backpack | CoreGuiType.Chat | CoreGuiType.All | CoreGuiType.EmotesMenu;
	export namespace CreatorType {
		export interface User {
			Name: "User";
			Value: 0;
			EnumType: EnumType<Enum.CreatorType>;
		}

		export const User: User;

		export interface Group {
			Name: "Group";
			Value: 1;
			EnumType: EnumType<Enum.CreatorType>;
		}

		export const Group: Group;

		export function GetEnumItems(this: {}): Array<CreatorType>
	}
	export type CreatorType = CreatorType.User | CreatorType.Group;
	export namespace CurrencyType {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.CurrencyType>;
		}

		export const Default: Default;

		export interface Robux {
			Name: "Robux";
			Value: 1;
			EnumType: EnumType<Enum.CurrencyType>;
		}

		export const Robux: Robux;

		export interface Tix {
			Name: "Tix";
			Value: 2;
			EnumType: EnumType<Enum.CurrencyType>;
		}

		export const Tix: Tix;

		export function GetEnumItems(this: {}): Array<CurrencyType>
	}
	export type CurrencyType = CurrencyType.Default | CurrencyType.Robux | CurrencyType.Tix;
	export namespace CustomCameraMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.CustomCameraMode>;
		}

		export const Default: Default;

		export interface Follow {
			Name: "Follow";
			Value: 2;
			EnumType: EnumType<Enum.CustomCameraMode>;
		}

		export const Follow: Follow;

		export interface Classic {
			Name: "Classic";
			Value: 1;
			EnumType: EnumType<Enum.CustomCameraMode>;
		}

		export const Classic: Classic;

		export function GetEnumItems(this: {}): Array<CustomCameraMode>
	}
	export type CustomCameraMode = CustomCameraMode.Default | CustomCameraMode.Follow | CustomCameraMode.Classic;
	export namespace DataStoreRequestType {
		export interface GetAsync {
			Name: "GetAsync";
			Value: 0;
			EnumType: EnumType<Enum.DataStoreRequestType>;
		}

		export const GetAsync: GetAsync;

		export interface SetIncrementAsync {
			Name: "SetIncrementAsync";
			Value: 1;
			EnumType: EnumType<Enum.DataStoreRequestType>;
		}

		export const SetIncrementAsync: SetIncrementAsync;

		export interface UpdateAsync {
			Name: "UpdateAsync";
			Value: 2;
			EnumType: EnumType<Enum.DataStoreRequestType>;
		}

		export const UpdateAsync: UpdateAsync;

		export interface GetSortedAsync {
			Name: "GetSortedAsync";
			Value: 3;
			EnumType: EnumType<Enum.DataStoreRequestType>;
		}

		export const GetSortedAsync: GetSortedAsync;

		export interface SetIncrementSortedAsync {
			Name: "SetIncrementSortedAsync";
			Value: 4;
			EnumType: EnumType<Enum.DataStoreRequestType>;
		}

		export const SetIncrementSortedAsync: SetIncrementSortedAsync;

		export interface OnUpdate {
			Name: "OnUpdate";
			Value: 5;
			EnumType: EnumType<Enum.DataStoreRequestType>;
		}

		export const OnUpdate: OnUpdate;

		export function GetEnumItems(this: {}): Array<DataStoreRequestType>
	}
	export type DataStoreRequestType = DataStoreRequestType.GetAsync | DataStoreRequestType.SetIncrementAsync | DataStoreRequestType.UpdateAsync | DataStoreRequestType.GetSortedAsync | DataStoreRequestType.SetIncrementSortedAsync | DataStoreRequestType.OnUpdate;
	export namespace DevCameraOcclusionMode {
		export interface Zoom {
			Name: "Zoom";
			Value: 0;
			EnumType: EnumType<Enum.DevCameraOcclusionMode>;
		}

		export const Zoom: Zoom;

		export interface Invisicam {
			Name: "Invisicam";
			Value: 1;
			EnumType: EnumType<Enum.DevCameraOcclusionMode>;
		}

		export const Invisicam: Invisicam;

		export function GetEnumItems(this: {}): Array<DevCameraOcclusionMode>
	}
	export type DevCameraOcclusionMode = DevCameraOcclusionMode.Zoom | DevCameraOcclusionMode.Invisicam;
	export namespace DevComputerCameraMovementMode {
		export interface UserChoice {
			Name: "UserChoice";
			Value: 0;
			EnumType: EnumType<Enum.DevComputerCameraMovementMode>;
		}

		export const UserChoice: UserChoice;

		export interface Classic {
			Name: "Classic";
			Value: 1;
			EnumType: EnumType<Enum.DevComputerCameraMovementMode>;
		}

		export const Classic: Classic;

		export interface Follow {
			Name: "Follow";
			Value: 2;
			EnumType: EnumType<Enum.DevComputerCameraMovementMode>;
		}

		export const Follow: Follow;

		export interface Orbital {
			Name: "Orbital";
			Value: 3;
			EnumType: EnumType<Enum.DevComputerCameraMovementMode>;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: {}): Array<DevComputerCameraMovementMode>
	}
	export type DevComputerCameraMovementMode = DevComputerCameraMovementMode.UserChoice | DevComputerCameraMovementMode.Classic | DevComputerCameraMovementMode.Follow | DevComputerCameraMovementMode.Orbital;
	export namespace DevComputerMovementMode {
		export interface UserChoice {
			Name: "UserChoice";
			Value: 0;
			EnumType: EnumType<Enum.DevComputerMovementMode>;
		}

		export const UserChoice: UserChoice;

		export interface KeyboardMouse {
			Name: "KeyboardMouse";
			Value: 1;
			EnumType: EnumType<Enum.DevComputerMovementMode>;
		}

		export const KeyboardMouse: KeyboardMouse;

		export interface ClickToMove {
			Name: "ClickToMove";
			Value: 2;
			EnumType: EnumType<Enum.DevComputerMovementMode>;
		}

		export const ClickToMove: ClickToMove;

		export interface Scriptable {
			Name: "Scriptable";
			Value: 3;
			EnumType: EnumType<Enum.DevComputerMovementMode>;
		}

		export const Scriptable: Scriptable;

		export function GetEnumItems(this: {}): Array<DevComputerMovementMode>
	}
	export type DevComputerMovementMode = DevComputerMovementMode.UserChoice | DevComputerMovementMode.KeyboardMouse | DevComputerMovementMode.ClickToMove | DevComputerMovementMode.Scriptable;
	export namespace DevTouchCameraMovementMode {
		export interface UserChoice {
			Name: "UserChoice";
			Value: 0;
			EnumType: EnumType<Enum.DevTouchCameraMovementMode>;
		}

		export const UserChoice: UserChoice;

		export interface Classic {
			Name: "Classic";
			Value: 1;
			EnumType: EnumType<Enum.DevTouchCameraMovementMode>;
		}

		export const Classic: Classic;

		export interface Follow {
			Name: "Follow";
			Value: 2;
			EnumType: EnumType<Enum.DevTouchCameraMovementMode>;
		}

		export const Follow: Follow;

		export interface Orbital {
			Name: "Orbital";
			Value: 3;
			EnumType: EnumType<Enum.DevTouchCameraMovementMode>;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: {}): Array<DevTouchCameraMovementMode>
	}
	export type DevTouchCameraMovementMode = DevTouchCameraMovementMode.UserChoice | DevTouchCameraMovementMode.Classic | DevTouchCameraMovementMode.Follow | DevTouchCameraMovementMode.Orbital;
	export namespace DevTouchMovementMode {
		export interface UserChoice {
			Name: "UserChoice";
			Value: 0;
			EnumType: EnumType<Enum.DevTouchMovementMode>;
		}

		export const UserChoice: UserChoice;

		export interface Thumbstick {
			Name: "Thumbstick";
			Value: 1;
			EnumType: EnumType<Enum.DevTouchMovementMode>;
		}

		export const Thumbstick: Thumbstick;

		export interface DPad {
			Name: "DPad";
			Value: 2;
			EnumType: EnumType<Enum.DevTouchMovementMode>;
		}

		export const DPad: DPad;

		export interface Thumbpad {
			Name: "Thumbpad";
			Value: 3;
			EnumType: EnumType<Enum.DevTouchMovementMode>;
		}

		export const Thumbpad: Thumbpad;

		export interface ClickToMove {
			Name: "ClickToMove";
			Value: 4;
			EnumType: EnumType<Enum.DevTouchMovementMode>;
		}

		export const ClickToMove: ClickToMove;

		export interface Scriptable {
			Name: "Scriptable";
			Value: 5;
			EnumType: EnumType<Enum.DevTouchMovementMode>;
		}

		export const Scriptable: Scriptable;

		export interface DynamicThumbstick {
			Name: "DynamicThumbstick";
			Value: 6;
			EnumType: EnumType<Enum.DevTouchMovementMode>;
		}

		export const DynamicThumbstick: DynamicThumbstick;

		export function GetEnumItems(this: {}): Array<DevTouchMovementMode>
	}
	export type DevTouchMovementMode = DevTouchMovementMode.UserChoice | DevTouchMovementMode.Thumbstick | DevTouchMovementMode.DPad | DevTouchMovementMode.Thumbpad | DevTouchMovementMode.ClickToMove | DevTouchMovementMode.Scriptable | DevTouchMovementMode.DynamicThumbstick;
	export namespace DeveloperMemoryTag {
		export interface Internal {
			Name: "Internal";
			Value: 0;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const Internal: Internal;

		export interface HttpCache {
			Name: "HttpCache";
			Value: 1;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const HttpCache: HttpCache;

		export interface Instances {
			Name: "Instances";
			Value: 2;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const Instances: Instances;

		export interface Signals {
			Name: "Signals";
			Value: 3;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const Signals: Signals;

		export interface LuaHeap {
			Name: "LuaHeap";
			Value: 4;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const LuaHeap: LuaHeap;

		export interface Script {
			Name: "Script";
			Value: 5;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const Script: Script;

		export interface PhysicsCollision {
			Name: "PhysicsCollision";
			Value: 6;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const PhysicsCollision: PhysicsCollision;

		export interface PhysicsParts {
			Name: "PhysicsParts";
			Value: 7;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const PhysicsParts: PhysicsParts;

		export interface GraphicsSolidModels {
			Name: "GraphicsSolidModels";
			Value: 8;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const GraphicsSolidModels: GraphicsSolidModels;

		export interface GraphicsMeshParts {
			Name: "GraphicsMeshParts";
			Value: 9;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const GraphicsMeshParts: GraphicsMeshParts;

		export interface GraphicsParticles {
			Name: "GraphicsParticles";
			Value: 10;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const GraphicsParticles: GraphicsParticles;

		export interface GraphicsParts {
			Name: "GraphicsParts";
			Value: 11;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const GraphicsParts: GraphicsParts;

		export interface GraphicsSpatialHash {
			Name: "GraphicsSpatialHash";
			Value: 12;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const GraphicsSpatialHash: GraphicsSpatialHash;

		export interface GraphicsTerrain {
			Name: "GraphicsTerrain";
			Value: 13;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const GraphicsTerrain: GraphicsTerrain;

		export interface GraphicsTexture {
			Name: "GraphicsTexture";
			Value: 14;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const GraphicsTexture: GraphicsTexture;

		export interface GraphicsTextureCharacter {
			Name: "GraphicsTextureCharacter";
			Value: 15;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const GraphicsTextureCharacter: GraphicsTextureCharacter;

		export interface Sounds {
			Name: "Sounds";
			Value: 16;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const Sounds: Sounds;

		export interface StreamingSounds {
			Name: "StreamingSounds";
			Value: 17;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const StreamingSounds: StreamingSounds;

		export interface TerrainVoxels {
			Name: "TerrainVoxels";
			Value: 18;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const TerrainVoxels: TerrainVoxels;

		export interface Gui {
			Name: "Gui";
			Value: 20;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const Gui: Gui;

		export interface Animation {
			Name: "Animation";
			Value: 21;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const Animation: Animation;

		export interface Navigation {
			Name: "Navigation";
			Value: 22;
			EnumType: EnumType<Enum.DeveloperMemoryTag>;
		}

		export const Navigation: Navigation;

		export function GetEnumItems(this: {}): Array<DeveloperMemoryTag>
	}
	export type DeveloperMemoryTag = DeveloperMemoryTag.Internal | DeveloperMemoryTag.HttpCache | DeveloperMemoryTag.Instances | DeveloperMemoryTag.Signals | DeveloperMemoryTag.LuaHeap | DeveloperMemoryTag.Script | DeveloperMemoryTag.PhysicsCollision | DeveloperMemoryTag.PhysicsParts | DeveloperMemoryTag.GraphicsSolidModels | DeveloperMemoryTag.GraphicsMeshParts | DeveloperMemoryTag.GraphicsParticles | DeveloperMemoryTag.GraphicsParts | DeveloperMemoryTag.GraphicsSpatialHash | DeveloperMemoryTag.GraphicsTerrain | DeveloperMemoryTag.GraphicsTexture | DeveloperMemoryTag.GraphicsTextureCharacter | DeveloperMemoryTag.Sounds | DeveloperMemoryTag.StreamingSounds | DeveloperMemoryTag.TerrainVoxels | DeveloperMemoryTag.Gui | DeveloperMemoryTag.Animation | DeveloperMemoryTag.Navigation;
	export namespace DeviceType {
		export interface Unknown {
			Name: "Unknown";
			Value: 0;
			EnumType: EnumType<Enum.DeviceType>;
		}

		export const Unknown: Unknown;

		export interface Desktop {
			Name: "Desktop";
			Value: 1;
			EnumType: EnumType<Enum.DeviceType>;
		}

		export const Desktop: Desktop;

		export interface Tablet {
			Name: "Tablet";
			Value: 2;
			EnumType: EnumType<Enum.DeviceType>;
		}

		export const Tablet: Tablet;

		export interface Phone {
			Name: "Phone";
			Value: 3;
			EnumType: EnumType<Enum.DeviceType>;
		}

		export const Phone: Phone;

		export function GetEnumItems(this: {}): Array<DeviceType>
	}
	export type DeviceType = DeviceType.Unknown | DeviceType.Desktop | DeviceType.Tablet | DeviceType.Phone;
	export namespace DialogBehaviorType {
		export interface SinglePlayer {
			Name: "SinglePlayer";
			Value: 0;
			EnumType: EnumType<Enum.DialogBehaviorType>;
		}

		export const SinglePlayer: SinglePlayer;

		export interface MultiplePlayers {
			Name: "MultiplePlayers";
			Value: 1;
			EnumType: EnumType<Enum.DialogBehaviorType>;
		}

		export const MultiplePlayers: MultiplePlayers;

		export function GetEnumItems(this: {}): Array<DialogBehaviorType>
	}
	export type DialogBehaviorType = DialogBehaviorType.SinglePlayer | DialogBehaviorType.MultiplePlayers;
	export namespace DialogPurpose {
		export interface Quest {
			Name: "Quest";
			Value: 0;
			EnumType: EnumType<Enum.DialogPurpose>;
		}

		export const Quest: Quest;

		export interface Help {
			Name: "Help";
			Value: 1;
			EnumType: EnumType<Enum.DialogPurpose>;
		}

		export const Help: Help;

		export interface Shop {
			Name: "Shop";
			Value: 2;
			EnumType: EnumType<Enum.DialogPurpose>;
		}

		export const Shop: Shop;

		export function GetEnumItems(this: {}): Array<DialogPurpose>
	}
	export type DialogPurpose = DialogPurpose.Quest | DialogPurpose.Help | DialogPurpose.Shop;
	export namespace DialogTone {
		export interface Neutral {
			Name: "Neutral";
			Value: 0;
			EnumType: EnumType<Enum.DialogTone>;
		}

		export const Neutral: Neutral;

		export interface Friendly {
			Name: "Friendly";
			Value: 1;
			EnumType: EnumType<Enum.DialogTone>;
		}

		export const Friendly: Friendly;

		export interface Enemy {
			Name: "Enemy";
			Value: 2;
			EnumType: EnumType<Enum.DialogTone>;
		}

		export const Enemy: Enemy;

		export function GetEnumItems(this: {}): Array<DialogTone>
	}
	export type DialogTone = DialogTone.Neutral | DialogTone.Friendly | DialogTone.Enemy;
	export namespace DominantAxis {
		export interface Width {
			Name: "Width";
			Value: 0;
			EnumType: EnumType<Enum.DominantAxis>;
		}

		export const Width: Width;

		export interface Height {
			Name: "Height";
			Value: 1;
			EnumType: EnumType<Enum.DominantAxis>;
		}

		export const Height: Height;

		export function GetEnumItems(this: {}): Array<DominantAxis>
	}
	export type DominantAxis = DominantAxis.Width | DominantAxis.Height;
	export namespace EasingDirection {
		export interface In {
			Name: "In";
			Value: 0;
			EnumType: EnumType<Enum.EasingDirection>;
		}

		export const In: In;

		export interface Out {
			Name: "Out";
			Value: 1;
			EnumType: EnumType<Enum.EasingDirection>;
		}

		export const Out: Out;

		export interface InOut {
			Name: "InOut";
			Value: 2;
			EnumType: EnumType<Enum.EasingDirection>;
		}

		export const InOut: InOut;

		export function GetEnumItems(this: {}): Array<EasingDirection>
	}
	export type EasingDirection = EasingDirection.In | EasingDirection.Out | EasingDirection.InOut;
	export namespace EasingStyle {
		export interface Linear {
			Name: "Linear";
			Value: 0;
			EnumType: EnumType<Enum.EasingStyle>;
		}

		export const Linear: Linear;

		export interface Sine {
			Name: "Sine";
			Value: 1;
			EnumType: EnumType<Enum.EasingStyle>;
		}

		export const Sine: Sine;

		export interface Back {
			Name: "Back";
			Value: 2;
			EnumType: EnumType<Enum.EasingStyle>;
		}

		export const Back: Back;

		export interface Quad {
			Name: "Quad";
			Value: 3;
			EnumType: EnumType<Enum.EasingStyle>;
		}

		export const Quad: Quad;

		export interface Quart {
			Name: "Quart";
			Value: 4;
			EnumType: EnumType<Enum.EasingStyle>;
		}

		export const Quart: Quart;

		export interface Quint {
			Name: "Quint";
			Value: 5;
			EnumType: EnumType<Enum.EasingStyle>;
		}

		export const Quint: Quint;

		export interface Bounce {
			Name: "Bounce";
			Value: 6;
			EnumType: EnumType<Enum.EasingStyle>;
		}

		export const Bounce: Bounce;

		export interface Elastic {
			Name: "Elastic";
			Value: 7;
			EnumType: EnumType<Enum.EasingStyle>;
		}

		export const Elastic: Elastic;

		export function GetEnumItems(this: {}): Array<EasingStyle>
	}
	export type EasingStyle = EasingStyle.Linear | EasingStyle.Sine | EasingStyle.Back | EasingStyle.Quad | EasingStyle.Quart | EasingStyle.Quint | EasingStyle.Bounce | EasingStyle.Elastic;
	export namespace ElasticBehavior {
		export interface WhenScrollable {
			Name: "WhenScrollable";
			Value: 0;
			EnumType: EnumType<Enum.ElasticBehavior>;
		}

		export const WhenScrollable: WhenScrollable;

		export interface Always {
			Name: "Always";
			Value: 1;
			EnumType: EnumType<Enum.ElasticBehavior>;
		}

		export const Always: Always;

		export interface Never {
			Name: "Never";
			Value: 2;
			EnumType: EnumType<Enum.ElasticBehavior>;
		}

		export const Never: Never;

		export function GetEnumItems(this: {}): Array<ElasticBehavior>
	}
	export type ElasticBehavior = ElasticBehavior.WhenScrollable | ElasticBehavior.Always | ElasticBehavior.Never;
	export namespace EnviromentalPhysicsThrottle {
		export interface DefaultAuto {
			Name: "DefaultAuto";
			Value: 0;
			EnumType: EnumType<Enum.EnviromentalPhysicsThrottle>;
		}

		export const DefaultAuto: DefaultAuto;

		export interface Disabled {
			Name: "Disabled";
			Value: 1;
			EnumType: EnumType<Enum.EnviromentalPhysicsThrottle>;
		}

		export const Disabled: Disabled;

		export interface Always {
			Name: "Always";
			Value: 2;
			EnumType: EnumType<Enum.EnviromentalPhysicsThrottle>;
		}

		export const Always: Always;

		export interface Skip2 {
			Name: "Skip2";
			Value: 3;
			EnumType: EnumType<Enum.EnviromentalPhysicsThrottle>;
		}

		export const Skip2: Skip2;

		export interface Skip4 {
			Name: "Skip4";
			Value: 4;
			EnumType: EnumType<Enum.EnviromentalPhysicsThrottle>;
		}

		export const Skip4: Skip4;

		export interface Skip8 {
			Name: "Skip8";
			Value: 5;
			EnumType: EnumType<Enum.EnviromentalPhysicsThrottle>;
		}

		export const Skip8: Skip8;

		export interface Skip16 {
			Name: "Skip16";
			Value: 6;
			EnumType: EnumType<Enum.EnviromentalPhysicsThrottle>;
		}

		export const Skip16: Skip16;

		export function GetEnumItems(this: {}): Array<EnviromentalPhysicsThrottle>
	}
	export type EnviromentalPhysicsThrottle = EnviromentalPhysicsThrottle.DefaultAuto | EnviromentalPhysicsThrottle.Disabled | EnviromentalPhysicsThrottle.Always | EnviromentalPhysicsThrottle.Skip2 | EnviromentalPhysicsThrottle.Skip4 | EnviromentalPhysicsThrottle.Skip8 | EnviromentalPhysicsThrottle.Skip16;
	export namespace ErrorReporting {
		export interface DontReport {
			Name: "DontReport";
			Value: 0;
			EnumType: EnumType<Enum.ErrorReporting>;
		}

		export const DontReport: DontReport;

		export interface Prompt {
			Name: "Prompt";
			Value: 1;
			EnumType: EnumType<Enum.ErrorReporting>;
		}

		export const Prompt: Prompt;

		export interface Report {
			Name: "Report";
			Value: 2;
			EnumType: EnumType<Enum.ErrorReporting>;
		}

		export const Report: Report;

		export function GetEnumItems(this: {}): Array<ErrorReporting>
	}
	export type ErrorReporting = ErrorReporting.DontReport | ErrorReporting.Prompt | ErrorReporting.Report;
	export namespace ExplosionType {
		export interface NoCraters {
			Name: "NoCraters";
			Value: 0;
			EnumType: EnumType<Enum.ExplosionType>;
		}

		export const NoCraters: NoCraters;

		export interface Craters {
			Name: "Craters";
			Value: 1;
			EnumType: EnumType<Enum.ExplosionType>;
		}

		export const Craters: Craters;

		export interface CratersAndDebris {
			Name: "CratersAndDebris";
			Value: 2;
			EnumType: EnumType<Enum.ExplosionType>;
		}

		export const CratersAndDebris: CratersAndDebris;

		export function GetEnumItems(this: {}): Array<ExplosionType>
	}
	export type ExplosionType = ExplosionType.NoCraters | ExplosionType.Craters | ExplosionType.CratersAndDebris;
	export namespace FillDirection {
		export interface Horizontal {
			Name: "Horizontal";
			Value: 0;
			EnumType: EnumType<Enum.FillDirection>;
		}

		export const Horizontal: Horizontal;

		export interface Vertical {
			Name: "Vertical";
			Value: 1;
			EnumType: EnumType<Enum.FillDirection>;
		}

		export const Vertical: Vertical;

		export function GetEnumItems(this: {}): Array<FillDirection>
	}
	export type FillDirection = FillDirection.Horizontal | FillDirection.Vertical;
	export namespace FilterResult {
		export interface Rejected {
			Name: "Rejected";
			Value: 1;
			EnumType: EnumType<Enum.FilterResult>;
		}

		export const Rejected: Rejected;

		export interface Accepted {
			Name: "Accepted";
			Value: 0;
			EnumType: EnumType<Enum.FilterResult>;
		}

		export const Accepted: Accepted;

		export function GetEnumItems(this: {}): Array<FilterResult>
	}
	export type FilterResult = FilterResult.Rejected | FilterResult.Accepted;
	export namespace Font {
		export interface Legacy {
			Name: "Legacy";
			Value: 0;
			EnumType: EnumType<Enum.Font>;
		}

		export const Legacy: Legacy;

		export interface Arial {
			Name: "Arial";
			Value: 1;
			EnumType: EnumType<Enum.Font>;
		}

		export const Arial: Arial;

		export interface ArialBold {
			Name: "ArialBold";
			Value: 2;
			EnumType: EnumType<Enum.Font>;
		}

		export const ArialBold: ArialBold;

		export interface SourceSans {
			Name: "SourceSans";
			Value: 3;
			EnumType: EnumType<Enum.Font>;
		}

		export const SourceSans: SourceSans;

		export interface SourceSansBold {
			Name: "SourceSansBold";
			Value: 4;
			EnumType: EnumType<Enum.Font>;
		}

		export const SourceSansBold: SourceSansBold;

		export interface SourceSansSemibold {
			Name: "SourceSansSemibold";
			Value: 16;
			EnumType: EnumType<Enum.Font>;
		}

		export const SourceSansSemibold: SourceSansSemibold;

		export interface SourceSansLight {
			Name: "SourceSansLight";
			Value: 5;
			EnumType: EnumType<Enum.Font>;
		}

		export const SourceSansLight: SourceSansLight;

		export interface SourceSansItalic {
			Name: "SourceSansItalic";
			Value: 6;
			EnumType: EnumType<Enum.Font>;
		}

		export const SourceSansItalic: SourceSansItalic;

		export interface Bodoni {
			Name: "Bodoni";
			Value: 7;
			EnumType: EnumType<Enum.Font>;
		}

		export const Bodoni: Bodoni;

		export interface Garamond {
			Name: "Garamond";
			Value: 8;
			EnumType: EnumType<Enum.Font>;
		}

		export const Garamond: Garamond;

		export interface Cartoon {
			Name: "Cartoon";
			Value: 9;
			EnumType: EnumType<Enum.Font>;
		}

		export const Cartoon: Cartoon;

		export interface Code {
			Name: "Code";
			Value: 10;
			EnumType: EnumType<Enum.Font>;
		}

		export const Code: Code;

		export interface Highway {
			Name: "Highway";
			Value: 11;
			EnumType: EnumType<Enum.Font>;
		}

		export const Highway: Highway;

		export interface SciFi {
			Name: "SciFi";
			Value: 12;
			EnumType: EnumType<Enum.Font>;
		}

		export const SciFi: SciFi;

		export interface Arcade {
			Name: "Arcade";
			Value: 13;
			EnumType: EnumType<Enum.Font>;
		}

		export const Arcade: Arcade;

		export interface Fantasy {
			Name: "Fantasy";
			Value: 14;
			EnumType: EnumType<Enum.Font>;
		}

		export const Fantasy: Fantasy;

		export interface Antique {
			Name: "Antique";
			Value: 15;
			EnumType: EnumType<Enum.Font>;
		}

		export const Antique: Antique;

		export interface Gotham {
			Name: "Gotham";
			Value: 17;
			EnumType: EnumType<Enum.Font>;
		}

		export const Gotham: Gotham;

		export interface GothamSemibold {
			Name: "GothamSemibold";
			Value: 18;
			EnumType: EnumType<Enum.Font>;
		}

		export const GothamSemibold: GothamSemibold;

		export interface GothamBold {
			Name: "GothamBold";
			Value: 19;
			EnumType: EnumType<Enum.Font>;
		}

		export const GothamBold: GothamBold;

		export interface GothamBlack {
			Name: "GothamBlack";
			Value: 20;
			EnumType: EnumType<Enum.Font>;
		}

		export const GothamBlack: GothamBlack;

		export function GetEnumItems(this: {}): Array<Font>
	}
	export type Font = Font.Legacy | Font.Arial | Font.ArialBold | Font.SourceSans | Font.SourceSansBold | Font.SourceSansSemibold | Font.SourceSansLight | Font.SourceSansItalic | Font.Bodoni | Font.Garamond | Font.Cartoon | Font.Code | Font.Highway | Font.SciFi | Font.Arcade | Font.Fantasy | Font.Antique | Font.Gotham | Font.GothamSemibold | Font.GothamBold | Font.GothamBlack;
	export namespace FontSize {
		export interface Size8 {
			Name: "Size8";
			Value: 0;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size8: Size8;

		export interface Size9 {
			Name: "Size9";
			Value: 1;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size9: Size9;

		export interface Size10 {
			Name: "Size10";
			Value: 2;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size10: Size10;

		export interface Size11 {
			Name: "Size11";
			Value: 3;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size11: Size11;

		export interface Size12 {
			Name: "Size12";
			Value: 4;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size12: Size12;

		export interface Size14 {
			Name: "Size14";
			Value: 5;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size14: Size14;

		export interface Size18 {
			Name: "Size18";
			Value: 6;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size18: Size18;

		export interface Size24 {
			Name: "Size24";
			Value: 7;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size24: Size24;

		export interface Size36 {
			Name: "Size36";
			Value: 8;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size36: Size36;

		export interface Size48 {
			Name: "Size48";
			Value: 9;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size48: Size48;

		export interface Size28 {
			Name: "Size28";
			Value: 10;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size28: Size28;

		export interface Size32 {
			Name: "Size32";
			Value: 11;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size32: Size32;

		export interface Size42 {
			Name: "Size42";
			Value: 12;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size42: Size42;

		export interface Size60 {
			Name: "Size60";
			Value: 13;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size60: Size60;

		export interface Size96 {
			Name: "Size96";
			Value: 14;
			EnumType: EnumType<Enum.FontSize>;
		}

		export const Size96: Size96;

		export function GetEnumItems(this: {}): Array<FontSize>
	}
	export type FontSize = FontSize.Size8 | FontSize.Size9 | FontSize.Size10 | FontSize.Size11 | FontSize.Size12 | FontSize.Size14 | FontSize.Size18 | FontSize.Size24 | FontSize.Size36 | FontSize.Size48 | FontSize.Size28 | FontSize.Size32 | FontSize.Size42 | FontSize.Size60 | FontSize.Size96;
	export namespace FormFactor {
		export interface Symmetric {
			Name: "Symmetric";
			Value: 0;
			EnumType: EnumType<Enum.FormFactor>;
		}

		export const Symmetric: Symmetric;

		export interface Brick {
			Name: "Brick";
			Value: 1;
			EnumType: EnumType<Enum.FormFactor>;
		}

		export const Brick: Brick;

		export interface Plate {
			Name: "Plate";
			Value: 2;
			EnumType: EnumType<Enum.FormFactor>;
		}

		export const Plate: Plate;

		export interface Custom {
			Name: "Custom";
			Value: 3;
			EnumType: EnumType<Enum.FormFactor>;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: {}): Array<FormFactor>
	}
	export type FormFactor = FormFactor.Symmetric | FormFactor.Brick | FormFactor.Plate | FormFactor.Custom;
	export namespace FrameStyle {
		export interface Custom {
			Name: "Custom";
			Value: 0;
			EnumType: EnumType<Enum.FrameStyle>;
		}

		export const Custom: Custom;

		export interface ChatBlue {
			Name: "ChatBlue";
			Value: 1;
			EnumType: EnumType<Enum.FrameStyle>;
		}

		export const ChatBlue: ChatBlue;

		export interface RobloxSquare {
			Name: "RobloxSquare";
			Value: 2;
			EnumType: EnumType<Enum.FrameStyle>;
		}

		export const RobloxSquare: RobloxSquare;

		export interface RobloxRound {
			Name: "RobloxRound";
			Value: 3;
			EnumType: EnumType<Enum.FrameStyle>;
		}

		export const RobloxRound: RobloxRound;

		export interface ChatGreen {
			Name: "ChatGreen";
			Value: 4;
			EnumType: EnumType<Enum.FrameStyle>;
		}

		export const ChatGreen: ChatGreen;

		export interface ChatRed {
			Name: "ChatRed";
			Value: 5;
			EnumType: EnumType<Enum.FrameStyle>;
		}

		export const ChatRed: ChatRed;

		export interface DropShadow {
			Name: "DropShadow";
			Value: 6;
			EnumType: EnumType<Enum.FrameStyle>;
		}

		export const DropShadow: DropShadow;

		export function GetEnumItems(this: {}): Array<FrameStyle>
	}
	export type FrameStyle = FrameStyle.Custom | FrameStyle.ChatBlue | FrameStyle.RobloxSquare | FrameStyle.RobloxRound | FrameStyle.ChatGreen | FrameStyle.ChatRed | FrameStyle.DropShadow;
	export namespace FramerateManagerMode {
		export interface Automatic {
			Name: "Automatic";
			Value: 0;
			EnumType: EnumType<Enum.FramerateManagerMode>;
		}

		export const Automatic: Automatic;

		export interface On {
			Name: "On";
			Value: 1;
			EnumType: EnumType<Enum.FramerateManagerMode>;
		}

		export const On: On;

		export interface Off {
			Name: "Off";
			Value: 2;
			EnumType: EnumType<Enum.FramerateManagerMode>;
		}

		export const Off: Off;

		export function GetEnumItems(this: {}): Array<FramerateManagerMode>
	}
	export type FramerateManagerMode = FramerateManagerMode.Automatic | FramerateManagerMode.On | FramerateManagerMode.Off;
	export namespace FriendRequestEvent {
		export interface Issue {
			Name: "Issue";
			Value: 0;
			EnumType: EnumType<Enum.FriendRequestEvent>;
		}

		export const Issue: Issue;

		export interface Revoke {
			Name: "Revoke";
			Value: 1;
			EnumType: EnumType<Enum.FriendRequestEvent>;
		}

		export const Revoke: Revoke;

		export interface Accept {
			Name: "Accept";
			Value: 2;
			EnumType: EnumType<Enum.FriendRequestEvent>;
		}

		export const Accept: Accept;

		export interface Deny {
			Name: "Deny";
			Value: 3;
			EnumType: EnumType<Enum.FriendRequestEvent>;
		}

		export const Deny: Deny;

		export function GetEnumItems(this: {}): Array<FriendRequestEvent>
	}
	export type FriendRequestEvent = FriendRequestEvent.Issue | FriendRequestEvent.Revoke | FriendRequestEvent.Accept | FriendRequestEvent.Deny;
	export namespace FriendStatus {
		export interface Unknown {
			Name: "Unknown";
			Value: 0;
			EnumType: EnumType<Enum.FriendStatus>;
		}

		export const Unknown: Unknown;

		export interface NotFriend {
			Name: "NotFriend";
			Value: 1;
			EnumType: EnumType<Enum.FriendStatus>;
		}

		export const NotFriend: NotFriend;

		export interface Friend {
			Name: "Friend";
			Value: 2;
			EnumType: EnumType<Enum.FriendStatus>;
		}

		export const Friend: Friend;

		export interface FriendRequestSent {
			Name: "FriendRequestSent";
			Value: 3;
			EnumType: EnumType<Enum.FriendStatus>;
		}

		export const FriendRequestSent: FriendRequestSent;

		export interface FriendRequestReceived {
			Name: "FriendRequestReceived";
			Value: 4;
			EnumType: EnumType<Enum.FriendStatus>;
		}

		export const FriendRequestReceived: FriendRequestReceived;

		export function GetEnumItems(this: {}): Array<FriendStatus>
	}
	export type FriendStatus = FriendStatus.Unknown | FriendStatus.NotFriend | FriendStatus.Friend | FriendStatus.FriendRequestSent | FriendStatus.FriendRequestReceived;
	export namespace FunctionalTestResult {
		export interface Passed {
			Name: "Passed";
			Value: 0;
			EnumType: EnumType<Enum.FunctionalTestResult>;
		}

		export const Passed: Passed;

		export interface Warning {
			Name: "Warning";
			Value: 1;
			EnumType: EnumType<Enum.FunctionalTestResult>;
		}

		export const Warning: Warning;

		export interface Error {
			Name: "Error";
			Value: 2;
			EnumType: EnumType<Enum.FunctionalTestResult>;
		}

		export const Error: Error;

		export function GetEnumItems(this: {}): Array<FunctionalTestResult>
	}
	export type FunctionalTestResult = FunctionalTestResult.Passed | FunctionalTestResult.Warning | FunctionalTestResult.Error;
	export namespace GameAvatarType {
		export interface R6 {
			Name: "R6";
			Value: 0;
			EnumType: EnumType<Enum.GameAvatarType>;
		}

		export const R6: R6;

		export interface R15 {
			Name: "R15";
			Value: 1;
			EnumType: EnumType<Enum.GameAvatarType>;
		}

		export const R15: R15;

		export interface PlayerChoice {
			Name: "PlayerChoice";
			Value: 2;
			EnumType: EnumType<Enum.GameAvatarType>;
		}

		export const PlayerChoice: PlayerChoice;

		export function GetEnumItems(this: {}): Array<GameAvatarType>
	}
	export type GameAvatarType = GameAvatarType.R6 | GameAvatarType.R15 | GameAvatarType.PlayerChoice;
	export namespace GearGenreSetting {
		export interface AllGenres {
			Name: "AllGenres";
			Value: 0;
			EnumType: EnumType<Enum.GearGenreSetting>;
		}

		export const AllGenres: AllGenres;

		export interface MatchingGenreOnly {
			Name: "MatchingGenreOnly";
			Value: 1;
			EnumType: EnumType<Enum.GearGenreSetting>;
		}

		export const MatchingGenreOnly: MatchingGenreOnly;

		export function GetEnumItems(this: {}): Array<GearGenreSetting>
	}
	export type GearGenreSetting = GearGenreSetting.AllGenres | GearGenreSetting.MatchingGenreOnly;
	export namespace GearType {
		export interface MeleeWeapons {
			Name: "MeleeWeapons";
			Value: 0;
			EnumType: EnumType<Enum.GearType>;
		}

		export const MeleeWeapons: MeleeWeapons;

		export interface RangedWeapons {
			Name: "RangedWeapons";
			Value: 1;
			EnumType: EnumType<Enum.GearType>;
		}

		export const RangedWeapons: RangedWeapons;

		export interface Explosives {
			Name: "Explosives";
			Value: 2;
			EnumType: EnumType<Enum.GearType>;
		}

		export const Explosives: Explosives;

		export interface PowerUps {
			Name: "PowerUps";
			Value: 3;
			EnumType: EnumType<Enum.GearType>;
		}

		export const PowerUps: PowerUps;

		export interface NavigationEnhancers {
			Name: "NavigationEnhancers";
			Value: 4;
			EnumType: EnumType<Enum.GearType>;
		}

		export const NavigationEnhancers: NavigationEnhancers;

		export interface MusicalInstruments {
			Name: "MusicalInstruments";
			Value: 5;
			EnumType: EnumType<Enum.GearType>;
		}

		export const MusicalInstruments: MusicalInstruments;

		export interface SocialItems {
			Name: "SocialItems";
			Value: 6;
			EnumType: EnumType<Enum.GearType>;
		}

		export const SocialItems: SocialItems;

		export interface BuildingTools {
			Name: "BuildingTools";
			Value: 7;
			EnumType: EnumType<Enum.GearType>;
		}

		export const BuildingTools: BuildingTools;

		export interface Transport {
			Name: "Transport";
			Value: 8;
			EnumType: EnumType<Enum.GearType>;
		}

		export const Transport: Transport;

		export function GetEnumItems(this: {}): Array<GearType>
	}
	export type GearType = GearType.MeleeWeapons | GearType.RangedWeapons | GearType.Explosives | GearType.PowerUps | GearType.NavigationEnhancers | GearType.MusicalInstruments | GearType.SocialItems | GearType.BuildingTools | GearType.Transport;
	export namespace Genre {
		export interface All {
			Name: "All";
			Value: 0;
			EnumType: EnumType<Enum.Genre>;
		}

		export const All: All;

		export interface TownAndCity {
			Name: "TownAndCity";
			Value: 1;
			EnumType: EnumType<Enum.Genre>;
		}

		export const TownAndCity: TownAndCity;

		export interface Fantasy {
			Name: "Fantasy";
			Value: 2;
			EnumType: EnumType<Enum.Genre>;
		}

		export const Fantasy: Fantasy;

		export interface SciFi {
			Name: "SciFi";
			Value: 3;
			EnumType: EnumType<Enum.Genre>;
		}

		export const SciFi: SciFi;

		export interface Ninja {
			Name: "Ninja";
			Value: 4;
			EnumType: EnumType<Enum.Genre>;
		}

		export const Ninja: Ninja;

		export interface Scary {
			Name: "Scary";
			Value: 5;
			EnumType: EnumType<Enum.Genre>;
		}

		export const Scary: Scary;

		export interface Pirate {
			Name: "Pirate";
			Value: 6;
			EnumType: EnumType<Enum.Genre>;
		}

		export const Pirate: Pirate;

		export interface Adventure {
			Name: "Adventure";
			Value: 7;
			EnumType: EnumType<Enum.Genre>;
		}

		export const Adventure: Adventure;

		export interface Sports {
			Name: "Sports";
			Value: 8;
			EnumType: EnumType<Enum.Genre>;
		}

		export const Sports: Sports;

		export interface Funny {
			Name: "Funny";
			Value: 9;
			EnumType: EnumType<Enum.Genre>;
		}

		export const Funny: Funny;

		export interface WildWest {
			Name: "WildWest";
			Value: 10;
			EnumType: EnumType<Enum.Genre>;
		}

		export const WildWest: WildWest;

		export interface War {
			Name: "War";
			Value: 11;
			EnumType: EnumType<Enum.Genre>;
		}

		export const War: War;

		export interface SkatePark {
			Name: "SkatePark";
			Value: 12;
			EnumType: EnumType<Enum.Genre>;
		}

		export const SkatePark: SkatePark;

		export interface Tutorial {
			Name: "Tutorial";
			Value: 13;
			EnumType: EnumType<Enum.Genre>;
		}

		export const Tutorial: Tutorial;

		export function GetEnumItems(this: {}): Array<Genre>
	}
	export type Genre = Genre.All | Genre.TownAndCity | Genre.Fantasy | Genre.SciFi | Genre.Ninja | Genre.Scary | Genre.Pirate | Genre.Adventure | Genre.Sports | Genre.Funny | Genre.WildWest | Genre.War | Genre.SkatePark | Genre.Tutorial;
	export namespace GraphicsMode {
		export interface Automatic {
			Name: "Automatic";
			Value: 1;
			EnumType: EnumType<Enum.GraphicsMode>;
		}

		export const Automatic: Automatic;

		export interface Direct3D9 {
			Name: "Direct3D9";
			Value: 3;
			EnumType: EnumType<Enum.GraphicsMode>;
		}

		export const Direct3D9: Direct3D9;

		export interface Direct3D11 {
			Name: "Direct3D11";
			Value: 2;
			EnumType: EnumType<Enum.GraphicsMode>;
		}

		export const Direct3D11: Direct3D11;

		export interface OpenGL {
			Name: "OpenGL";
			Value: 4;
			EnumType: EnumType<Enum.GraphicsMode>;
		}

		export const OpenGL: OpenGL;

		export interface Metal {
			Name: "Metal";
			Value: 5;
			EnumType: EnumType<Enum.GraphicsMode>;
		}

		export const Metal: Metal;

		export interface Vulkan {
			Name: "Vulkan";
			Value: 6;
			EnumType: EnumType<Enum.GraphicsMode>;
		}

		export const Vulkan: Vulkan;

		export interface NoGraphics {
			Name: "NoGraphics";
			Value: 7;
			EnumType: EnumType<Enum.GraphicsMode>;
		}

		export const NoGraphics: NoGraphics;

		export function GetEnumItems(this: {}): Array<GraphicsMode>
	}
	export type GraphicsMode = GraphicsMode.Automatic | GraphicsMode.Direct3D9 | GraphicsMode.Direct3D11 | GraphicsMode.OpenGL | GraphicsMode.Metal | GraphicsMode.Vulkan | GraphicsMode.NoGraphics;
	export namespace HandlesStyle {
		export interface Resize {
			Name: "Resize";
			Value: 0;
			EnumType: EnumType<Enum.HandlesStyle>;
		}

		export const Resize: Resize;

		export interface Movement {
			Name: "Movement";
			Value: 1;
			EnumType: EnumType<Enum.HandlesStyle>;
		}

		export const Movement: Movement;

		export function GetEnumItems(this: {}): Array<HandlesStyle>
	}
	export type HandlesStyle = HandlesStyle.Resize | HandlesStyle.Movement;
	export namespace HorizontalAlignment {
		export interface Center {
			Name: "Center";
			Value: 0;
			EnumType: EnumType<Enum.HorizontalAlignment>;
		}

		export const Center: Center;

		export interface Left {
			Name: "Left";
			Value: 1;
			EnumType: EnumType<Enum.HorizontalAlignment>;
		}

		export const Left: Left;

		export interface Right {
			Name: "Right";
			Value: 2;
			EnumType: EnumType<Enum.HorizontalAlignment>;
		}

		export const Right: Right;

		export function GetEnumItems(this: {}): Array<HorizontalAlignment>
	}
	export type HorizontalAlignment = HorizontalAlignment.Center | HorizontalAlignment.Left | HorizontalAlignment.Right;
	export namespace HoverAnimateSpeed {
		export interface VerySlow {
			Name: "VerySlow";
			Value: 0;
			EnumType: EnumType<Enum.HoverAnimateSpeed>;
		}

		export const VerySlow: VerySlow;

		export interface Slow {
			Name: "Slow";
			Value: 1;
			EnumType: EnumType<Enum.HoverAnimateSpeed>;
		}

		export const Slow: Slow;

		export interface Medium {
			Name: "Medium";
			Value: 2;
			EnumType: EnumType<Enum.HoverAnimateSpeed>;
		}

		export const Medium: Medium;

		export interface Fast {
			Name: "Fast";
			Value: 3;
			EnumType: EnumType<Enum.HoverAnimateSpeed>;
		}

		export const Fast: Fast;

		export interface VeryFast {
			Name: "VeryFast";
			Value: 4;
			EnumType: EnumType<Enum.HoverAnimateSpeed>;
		}

		export const VeryFast: VeryFast;

		export function GetEnumItems(this: {}): Array<HoverAnimateSpeed>
	}
	export type HoverAnimateSpeed = HoverAnimateSpeed.VerySlow | HoverAnimateSpeed.Slow | HoverAnimateSpeed.Medium | HoverAnimateSpeed.Fast | HoverAnimateSpeed.VeryFast;
	export namespace HttpCachePolicy {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<Enum.HttpCachePolicy>;
		}

		export const None: None;

		export interface Full {
			Name: "Full";
			Value: 1;
			EnumType: EnumType<Enum.HttpCachePolicy>;
		}

		export const Full: Full;

		export interface DataOnly {
			Name: "DataOnly";
			Value: 2;
			EnumType: EnumType<Enum.HttpCachePolicy>;
		}

		export const DataOnly: DataOnly;

		export interface Default {
			Name: "Default";
			Value: 3;
			EnumType: EnumType<Enum.HttpCachePolicy>;
		}

		export const Default: Default;

		export interface InternalRedirectRefresh {
			Name: "InternalRedirectRefresh";
			Value: 4;
			EnumType: EnumType<Enum.HttpCachePolicy>;
		}

		export const InternalRedirectRefresh: InternalRedirectRefresh;

		export function GetEnumItems(this: {}): Array<HttpCachePolicy>
	}
	export type HttpCachePolicy = HttpCachePolicy.None | HttpCachePolicy.Full | HttpCachePolicy.DataOnly | HttpCachePolicy.Default | HttpCachePolicy.InternalRedirectRefresh;
	export namespace HttpContentType {
		export interface ApplicationJson {
			Name: "ApplicationJson";
			Value: 0;
			EnumType: EnumType<Enum.HttpContentType>;
		}

		export const ApplicationJson: ApplicationJson;

		export interface ApplicationXml {
			Name: "ApplicationXml";
			Value: 1;
			EnumType: EnumType<Enum.HttpContentType>;
		}

		export const ApplicationXml: ApplicationXml;

		export interface ApplicationUrlEncoded {
			Name: "ApplicationUrlEncoded";
			Value: 2;
			EnumType: EnumType<Enum.HttpContentType>;
		}

		export const ApplicationUrlEncoded: ApplicationUrlEncoded;

		export interface TextPlain {
			Name: "TextPlain";
			Value: 3;
			EnumType: EnumType<Enum.HttpContentType>;
		}

		export const TextPlain: TextPlain;

		export interface TextXml {
			Name: "TextXml";
			Value: 4;
			EnumType: EnumType<Enum.HttpContentType>;
		}

		export const TextXml: TextXml;

		export function GetEnumItems(this: {}): Array<HttpContentType>
	}
	export type HttpContentType = HttpContentType.ApplicationJson | HttpContentType.ApplicationXml | HttpContentType.ApplicationUrlEncoded | HttpContentType.TextPlain | HttpContentType.TextXml;
	export namespace HttpError {
		export interface OK {
			Name: "OK";
			Value: 0;
			EnumType: EnumType<Enum.HttpError>;
		}

		export const OK: OK;

		export interface InvalidUrl {
			Name: "InvalidUrl";
			Value: 1;
			EnumType: EnumType<Enum.HttpError>;
		}

		export const InvalidUrl: InvalidUrl;

		export interface DnsResolve {
			Name: "DnsResolve";
			Value: 2;
			EnumType: EnumType<Enum.HttpError>;
		}

		export const DnsResolve: DnsResolve;

		export interface ConnectFail {
			Name: "ConnectFail";
			Value: 3;
			EnumType: EnumType<Enum.HttpError>;
		}

		export const ConnectFail: ConnectFail;

		export interface OutOfMemory {
			Name: "OutOfMemory";
			Value: 4;
			EnumType: EnumType<Enum.HttpError>;
		}

		export const OutOfMemory: OutOfMemory;

		export interface TimedOut {
			Name: "TimedOut";
			Value: 5;
			EnumType: EnumType<Enum.HttpError>;
		}

		export const TimedOut: TimedOut;

		export interface TooManyRedirects {
			Name: "TooManyRedirects";
			Value: 6;
			EnumType: EnumType<Enum.HttpError>;
		}

		export const TooManyRedirects: TooManyRedirects;

		export interface InvalidRedirect {
			Name: "InvalidRedirect";
			Value: 7;
			EnumType: EnumType<Enum.HttpError>;
		}

		export const InvalidRedirect: InvalidRedirect;

		export interface NetFail {
			Name: "NetFail";
			Value: 8;
			EnumType: EnumType<Enum.HttpError>;
		}

		export const NetFail: NetFail;

		export interface Aborted {
			Name: "Aborted";
			Value: 9;
			EnumType: EnumType<Enum.HttpError>;
		}

		export const Aborted: Aborted;

		export interface SslConnectFail {
			Name: "SslConnectFail";
			Value: 10;
			EnumType: EnumType<Enum.HttpError>;
		}

		export const SslConnectFail: SslConnectFail;

		export interface Unknown {
			Name: "Unknown";
			Value: 11;
			EnumType: EnumType<Enum.HttpError>;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: {}): Array<HttpError>
	}
	export type HttpError = HttpError.OK | HttpError.InvalidUrl | HttpError.DnsResolve | HttpError.ConnectFail | HttpError.OutOfMemory | HttpError.TimedOut | HttpError.TooManyRedirects | HttpError.InvalidRedirect | HttpError.NetFail | HttpError.Aborted | HttpError.SslConnectFail | HttpError.Unknown;
	export namespace HttpRequestType {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.HttpRequestType>;
		}

		export const Default: Default;

		export interface MarketplaceService {
			Name: "MarketplaceService";
			Value: 2;
			EnumType: EnumType<Enum.HttpRequestType>;
		}

		export const MarketplaceService: MarketplaceService;

		export interface Players {
			Name: "Players";
			Value: 7;
			EnumType: EnumType<Enum.HttpRequestType>;
		}

		export const Players: Players;

		export interface Chat {
			Name: "Chat";
			Value: 15;
			EnumType: EnumType<Enum.HttpRequestType>;
		}

		export const Chat: Chat;

		export interface Avatar {
			Name: "Avatar";
			Value: 16;
			EnumType: EnumType<Enum.HttpRequestType>;
		}

		export const Avatar: Avatar;

		export interface Analytics {
			Name: "Analytics";
			Value: 22;
			EnumType: EnumType<Enum.HttpRequestType>;
		}

		export const Analytics: Analytics;

		export interface Localization {
			Name: "Localization";
			Value: 24;
			EnumType: EnumType<Enum.HttpRequestType>;
		}

		export const Localization: Localization;

		export function GetEnumItems(this: {}): Array<HttpRequestType>
	}
	export type HttpRequestType = HttpRequestType.Default | HttpRequestType.MarketplaceService | HttpRequestType.Players | HttpRequestType.Chat | HttpRequestType.Avatar | HttpRequestType.Analytics | HttpRequestType.Localization;
	export namespace HumanoidCollisionType {
		export interface OuterBox {
			Name: "OuterBox";
			Value: 0;
			EnumType: EnumType<Enum.HumanoidCollisionType>;
		}

		export const OuterBox: OuterBox;

		export interface InnerBox {
			Name: "InnerBox";
			Value: 1;
			EnumType: EnumType<Enum.HumanoidCollisionType>;
		}

		export const InnerBox: InnerBox;

		export function GetEnumItems(this: {}): Array<HumanoidCollisionType>
	}
	export type HumanoidCollisionType = HumanoidCollisionType.OuterBox | HumanoidCollisionType.InnerBox;
	export namespace HumanoidDisplayDistanceType {
		export interface Viewer {
			Name: "Viewer";
			Value: 0;
			EnumType: EnumType<Enum.HumanoidDisplayDistanceType>;
		}

		export const Viewer: Viewer;

		export interface Subject {
			Name: "Subject";
			Value: 1;
			EnumType: EnumType<Enum.HumanoidDisplayDistanceType>;
		}

		export const Subject: Subject;

		export interface None {
			Name: "None";
			Value: 2;
			EnumType: EnumType<Enum.HumanoidDisplayDistanceType>;
		}

		export const None: None;

		export function GetEnumItems(this: {}): Array<HumanoidDisplayDistanceType>
	}
	export type HumanoidDisplayDistanceType = HumanoidDisplayDistanceType.Viewer | HumanoidDisplayDistanceType.Subject | HumanoidDisplayDistanceType.None;
	export namespace HumanoidHealthDisplayType {
		export interface DisplayWhenDamaged {
			Name: "DisplayWhenDamaged";
			Value: 0;
			EnumType: EnumType<Enum.HumanoidHealthDisplayType>;
		}

		export const DisplayWhenDamaged: DisplayWhenDamaged;

		export interface AlwaysOn {
			Name: "AlwaysOn";
			Value: 1;
			EnumType: EnumType<Enum.HumanoidHealthDisplayType>;
		}

		export const AlwaysOn: AlwaysOn;

		export interface AlwaysOff {
			Name: "AlwaysOff";
			Value: 2;
			EnumType: EnumType<Enum.HumanoidHealthDisplayType>;
		}

		export const AlwaysOff: AlwaysOff;

		export function GetEnumItems(this: {}): Array<HumanoidHealthDisplayType>
	}
	export type HumanoidHealthDisplayType = HumanoidHealthDisplayType.DisplayWhenDamaged | HumanoidHealthDisplayType.AlwaysOn | HumanoidHealthDisplayType.AlwaysOff;
	export namespace HumanoidRigType {
		export interface R6 {
			Name: "R6";
			Value: 0;
			EnumType: EnumType<Enum.HumanoidRigType>;
		}

		export const R6: R6;

		export interface R15 {
			Name: "R15";
			Value: 1;
			EnumType: EnumType<Enum.HumanoidRigType>;
		}

		export const R15: R15;

		export function GetEnumItems(this: {}): Array<HumanoidRigType>
	}
	export type HumanoidRigType = HumanoidRigType.R6 | HumanoidRigType.R15;
	export namespace HumanoidStateType {
		export interface FallingDown {
			Name: "FallingDown";
			Value: 0;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const FallingDown: FallingDown;

		export interface Running {
			Name: "Running";
			Value: 8;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const Running: Running;

		export interface RunningNoPhysics {
			Name: "RunningNoPhysics";
			Value: 10;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const RunningNoPhysics: RunningNoPhysics;

		export interface Climbing {
			Name: "Climbing";
			Value: 12;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const Climbing: Climbing;

		export interface StrafingNoPhysics {
			Name: "StrafingNoPhysics";
			Value: 11;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const StrafingNoPhysics: StrafingNoPhysics;

		export interface Ragdoll {
			Name: "Ragdoll";
			Value: 1;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const Ragdoll: Ragdoll;

		export interface GettingUp {
			Name: "GettingUp";
			Value: 2;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const GettingUp: GettingUp;

		export interface Jumping {
			Name: "Jumping";
			Value: 3;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const Jumping: Jumping;

		export interface Landed {
			Name: "Landed";
			Value: 7;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const Landed: Landed;

		export interface Flying {
			Name: "Flying";
			Value: 6;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const Flying: Flying;

		export interface Freefall {
			Name: "Freefall";
			Value: 5;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const Freefall: Freefall;

		export interface Seated {
			Name: "Seated";
			Value: 13;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const Seated: Seated;

		export interface PlatformStanding {
			Name: "PlatformStanding";
			Value: 14;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const PlatformStanding: PlatformStanding;

		export interface Dead {
			Name: "Dead";
			Value: 15;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const Dead: Dead;

		export interface Swimming {
			Name: "Swimming";
			Value: 4;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const Swimming: Swimming;

		export interface Physics {
			Name: "Physics";
			Value: 16;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const Physics: Physics;

		export interface None {
			Name: "None";
			Value: 18;
			EnumType: EnumType<Enum.HumanoidStateType>;
		}

		export const None: None;

		export function GetEnumItems(this: {}): Array<HumanoidStateType>
	}
	export type HumanoidStateType = HumanoidStateType.FallingDown | HumanoidStateType.Running | HumanoidStateType.RunningNoPhysics | HumanoidStateType.Climbing | HumanoidStateType.StrafingNoPhysics | HumanoidStateType.Ragdoll | HumanoidStateType.GettingUp | HumanoidStateType.Jumping | HumanoidStateType.Landed | HumanoidStateType.Flying | HumanoidStateType.Freefall | HumanoidStateType.Seated | HumanoidStateType.PlatformStanding | HumanoidStateType.Dead | HumanoidStateType.Swimming | HumanoidStateType.Physics | HumanoidStateType.None;
	export namespace InOut {
		export interface Edge {
			Name: "Edge";
			Value: 0;
			EnumType: EnumType<Enum.InOut>;
		}

		export const Edge: Edge;

		export interface Inset {
			Name: "Inset";
			Value: 1;
			EnumType: EnumType<Enum.InOut>;
		}

		export const Inset: Inset;

		export interface Center {
			Name: "Center";
			Value: 2;
			EnumType: EnumType<Enum.InOut>;
		}

		export const Center: Center;

		export function GetEnumItems(this: {}): Array<InOut>
	}
	export type InOut = InOut.Edge | InOut.Inset | InOut.Center;
	export namespace InfoType {
		export interface Asset {
			Name: "Asset";
			Value: 0;
			EnumType: EnumType<Enum.InfoType>;
		}

		export const Asset: Asset;

		export interface Product {
			Name: "Product";
			Value: 1;
			EnumType: EnumType<Enum.InfoType>;
		}

		export const Product: Product;

		export interface GamePass {
			Name: "GamePass";
			Value: 2;
			EnumType: EnumType<Enum.InfoType>;
		}

		export const GamePass: GamePass;

		export function GetEnumItems(this: {}): Array<InfoType>
	}
	export type InfoType = InfoType.Asset | InfoType.Product | InfoType.GamePass;
	export namespace InitialDockState {
		export interface Top {
			Name: "Top";
			Value: 0;
			EnumType: EnumType<Enum.InitialDockState>;
		}

		export const Top: Top;

		export interface Bottom {
			Name: "Bottom";
			Value: 1;
			EnumType: EnumType<Enum.InitialDockState>;
		}

		export const Bottom: Bottom;

		export interface Left {
			Name: "Left";
			Value: 2;
			EnumType: EnumType<Enum.InitialDockState>;
		}

		export const Left: Left;

		export interface Right {
			Name: "Right";
			Value: 3;
			EnumType: EnumType<Enum.InitialDockState>;
		}

		export const Right: Right;

		export interface Float {
			Name: "Float";
			Value: 4;
			EnumType: EnumType<Enum.InitialDockState>;
		}

		export const Float: Float;

		export function GetEnumItems(this: {}): Array<InitialDockState>
	}
	export type InitialDockState = InitialDockState.Top | InitialDockState.Bottom | InitialDockState.Left | InitialDockState.Right | InitialDockState.Float;
	export namespace InlineAlignment {
		export interface Bottom {
			Name: "Bottom";
			Value: 0;
			EnumType: EnumType<Enum.InlineAlignment>;
		}

		export const Bottom: Bottom;

		export interface Center {
			Name: "Center";
			Value: 1;
			EnumType: EnumType<Enum.InlineAlignment>;
		}

		export const Center: Center;

		export interface Top {
			Name: "Top";
			Value: 2;
			EnumType: EnumType<Enum.InlineAlignment>;
		}

		export const Top: Top;

		export function GetEnumItems(this: {}): Array<InlineAlignment>
	}
	export type InlineAlignment = InlineAlignment.Bottom | InlineAlignment.Center | InlineAlignment.Top;
	export namespace InputType {
		export interface NoInput {
			Name: "NoInput";
			Value: 0;
			EnumType: EnumType<Enum.InputType>;
		}

		export const NoInput: NoInput;

		export interface Constant {
			Name: "Constant";
			Value: 12;
			EnumType: EnumType<Enum.InputType>;
		}

		export const Constant: Constant;

		export interface Sin {
			Name: "Sin";
			Value: 13;
			EnumType: EnumType<Enum.InputType>;
		}

		export const Sin: Sin;

		export function GetEnumItems(this: {}): Array<InputType>
	}
	export type InputType = InputType.NoInput | InputType.Constant | InputType.Sin;
	export namespace JointCreationMode {
		export interface All {
			Name: "All";
			Value: 0;
			EnumType: EnumType<Enum.JointCreationMode>;
		}

		export const All: All;

		export interface Surface {
			Name: "Surface";
			Value: 1;
			EnumType: EnumType<Enum.JointCreationMode>;
		}

		export const Surface: Surface;

		export interface None {
			Name: "None";
			Value: 2;
			EnumType: EnumType<Enum.JointCreationMode>;
		}

		export const None: None;

		export function GetEnumItems(this: {}): Array<JointCreationMode>
	}
	export type JointCreationMode = JointCreationMode.All | JointCreationMode.Surface | JointCreationMode.None;
	export namespace JointType {
		export interface None {
			Name: "None";
			Value: 28;
			EnumType: EnumType<Enum.JointType>;
		}

		export const None: None;

		export interface Rotate {
			Name: "Rotate";
			Value: 7;
			EnumType: EnumType<Enum.JointType>;
		}

		export const Rotate: Rotate;

		export interface RotateP {
			Name: "RotateP";
			Value: 8;
			EnumType: EnumType<Enum.JointType>;
		}

		export const RotateP: RotateP;

		export interface RotateV {
			Name: "RotateV";
			Value: 9;
			EnumType: EnumType<Enum.JointType>;
		}

		export const RotateV: RotateV;

		export interface Glue {
			Name: "Glue";
			Value: 10;
			EnumType: EnumType<Enum.JointType>;
		}

		export const Glue: Glue;

		export interface Weld {
			Name: "Weld";
			Value: 1;
			EnumType: EnumType<Enum.JointType>;
		}

		export const Weld: Weld;

		export interface Snap {
			Name: "Snap";
			Value: 3;
			EnumType: EnumType<Enum.JointType>;
		}

		export const Snap: Snap;

		export function GetEnumItems(this: {}): Array<JointType>
	}
	export type JointType = JointType.None | JointType.Rotate | JointType.RotateP | JointType.RotateV | JointType.Glue | JointType.Weld | JointType.Snap;
	export namespace KeyCode {
		export interface Unknown {
			Name: "Unknown";
			Value: 0;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Unknown: Unknown;

		export interface Backspace {
			Name: "Backspace";
			Value: 8;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Backspace: Backspace;

		export interface Tab {
			Name: "Tab";
			Value: 9;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Tab: Tab;

		export interface Clear {
			Name: "Clear";
			Value: 12;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Clear: Clear;

		export interface Return {
			Name: "Return";
			Value: 13;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Return: Return;

		export interface Pause {
			Name: "Pause";
			Value: 19;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Pause: Pause;

		export interface Escape {
			Name: "Escape";
			Value: 27;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Escape: Escape;

		export interface Space {
			Name: "Space";
			Value: 32;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Space: Space;

		export interface QuotedDouble {
			Name: "QuotedDouble";
			Value: 34;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const QuotedDouble: QuotedDouble;

		export interface Hash {
			Name: "Hash";
			Value: 35;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Hash: Hash;

		export interface Dollar {
			Name: "Dollar";
			Value: 36;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Dollar: Dollar;

		export interface Percent {
			Name: "Percent";
			Value: 37;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Percent: Percent;

		export interface Ampersand {
			Name: "Ampersand";
			Value: 38;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Ampersand: Ampersand;

		export interface Quote {
			Name: "Quote";
			Value: 39;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Quote: Quote;

		export interface LeftParenthesis {
			Name: "LeftParenthesis";
			Value: 40;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const LeftParenthesis: LeftParenthesis;

		export interface RightParenthesis {
			Name: "RightParenthesis";
			Value: 41;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const RightParenthesis: RightParenthesis;

		export interface Asterisk {
			Name: "Asterisk";
			Value: 42;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Asterisk: Asterisk;

		export interface Plus {
			Name: "Plus";
			Value: 43;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Plus: Plus;

		export interface Comma {
			Name: "Comma";
			Value: 44;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Comma: Comma;

		export interface Minus {
			Name: "Minus";
			Value: 45;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Minus: Minus;

		export interface Period {
			Name: "Period";
			Value: 46;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Period: Period;

		export interface Slash {
			Name: "Slash";
			Value: 47;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Slash: Slash;

		export interface Zero {
			Name: "Zero";
			Value: 48;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Zero: Zero;

		export interface One {
			Name: "One";
			Value: 49;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const One: One;

		export interface Two {
			Name: "Two";
			Value: 50;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Two: Two;

		export interface Three {
			Name: "Three";
			Value: 51;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Three: Three;

		export interface Four {
			Name: "Four";
			Value: 52;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Four: Four;

		export interface Five {
			Name: "Five";
			Value: 53;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Five: Five;

		export interface Six {
			Name: "Six";
			Value: 54;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Six: Six;

		export interface Seven {
			Name: "Seven";
			Value: 55;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Seven: Seven;

		export interface Eight {
			Name: "Eight";
			Value: 56;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Eight: Eight;

		export interface Nine {
			Name: "Nine";
			Value: 57;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Nine: Nine;

		export interface Colon {
			Name: "Colon";
			Value: 58;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Colon: Colon;

		export interface Semicolon {
			Name: "Semicolon";
			Value: 59;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Semicolon: Semicolon;

		export interface LessThan {
			Name: "LessThan";
			Value: 60;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const LessThan: LessThan;

		export interface Equals {
			Name: "Equals";
			Value: 61;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Equals: Equals;

		export interface GreaterThan {
			Name: "GreaterThan";
			Value: 62;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const GreaterThan: GreaterThan;

		export interface Question {
			Name: "Question";
			Value: 63;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Question: Question;

		export interface At {
			Name: "At";
			Value: 64;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const At: At;

		export interface LeftBracket {
			Name: "LeftBracket";
			Value: 91;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const LeftBracket: LeftBracket;

		export interface BackSlash {
			Name: "BackSlash";
			Value: 92;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const BackSlash: BackSlash;

		export interface RightBracket {
			Name: "RightBracket";
			Value: 93;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const RightBracket: RightBracket;

		export interface Caret {
			Name: "Caret";
			Value: 94;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Caret: Caret;

		export interface Underscore {
			Name: "Underscore";
			Value: 95;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Underscore: Underscore;

		export interface Backquote {
			Name: "Backquote";
			Value: 96;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Backquote: Backquote;

		export interface A {
			Name: "A";
			Value: 97;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const A: A;

		export interface B {
			Name: "B";
			Value: 98;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const B: B;

		export interface C {
			Name: "C";
			Value: 99;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const C: C;

		export interface D {
			Name: "D";
			Value: 100;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const D: D;

		export interface E {
			Name: "E";
			Value: 101;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const E: E;

		export interface F {
			Name: "F";
			Value: 102;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F: F;

		export interface G {
			Name: "G";
			Value: 103;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const G: G;

		export interface H {
			Name: "H";
			Value: 104;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const H: H;

		export interface I {
			Name: "I";
			Value: 105;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const I: I;

		export interface J {
			Name: "J";
			Value: 106;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const J: J;

		export interface K {
			Name: "K";
			Value: 107;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const K: K;

		export interface L {
			Name: "L";
			Value: 108;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const L: L;

		export interface M {
			Name: "M";
			Value: 109;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const M: M;

		export interface N {
			Name: "N";
			Value: 110;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const N: N;

		export interface O {
			Name: "O";
			Value: 111;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const O: O;

		export interface P {
			Name: "P";
			Value: 112;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const P: P;

		export interface Q {
			Name: "Q";
			Value: 113;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Q: Q;

		export interface R {
			Name: "R";
			Value: 114;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const R: R;

		export interface S {
			Name: "S";
			Value: 115;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const S: S;

		export interface T {
			Name: "T";
			Value: 116;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const T: T;

		export interface U {
			Name: "U";
			Value: 117;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const U: U;

		export interface V {
			Name: "V";
			Value: 118;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const V: V;

		export interface W {
			Name: "W";
			Value: 119;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const W: W;

		export interface X {
			Name: "X";
			Value: 120;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const X: X;

		export interface Y {
			Name: "Y";
			Value: 121;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Y: Y;

		export interface Z {
			Name: "Z";
			Value: 122;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Z: Z;

		export interface LeftCurly {
			Name: "LeftCurly";
			Value: 123;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const LeftCurly: LeftCurly;

		export interface Pipe {
			Name: "Pipe";
			Value: 124;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Pipe: Pipe;

		export interface RightCurly {
			Name: "RightCurly";
			Value: 125;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const RightCurly: RightCurly;

		export interface Tilde {
			Name: "Tilde";
			Value: 126;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Tilde: Tilde;

		export interface Delete {
			Name: "Delete";
			Value: 127;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Delete: Delete;

		export interface KeypadZero {
			Name: "KeypadZero";
			Value: 256;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadZero: KeypadZero;

		export interface KeypadOne {
			Name: "KeypadOne";
			Value: 257;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadOne: KeypadOne;

		export interface KeypadTwo {
			Name: "KeypadTwo";
			Value: 258;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadTwo: KeypadTwo;

		export interface KeypadThree {
			Name: "KeypadThree";
			Value: 259;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadThree: KeypadThree;

		export interface KeypadFour {
			Name: "KeypadFour";
			Value: 260;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadFour: KeypadFour;

		export interface KeypadFive {
			Name: "KeypadFive";
			Value: 261;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadFive: KeypadFive;

		export interface KeypadSix {
			Name: "KeypadSix";
			Value: 262;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadSix: KeypadSix;

		export interface KeypadSeven {
			Name: "KeypadSeven";
			Value: 263;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadSeven: KeypadSeven;

		export interface KeypadEight {
			Name: "KeypadEight";
			Value: 264;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadEight: KeypadEight;

		export interface KeypadNine {
			Name: "KeypadNine";
			Value: 265;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadNine: KeypadNine;

		export interface KeypadPeriod {
			Name: "KeypadPeriod";
			Value: 266;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadPeriod: KeypadPeriod;

		export interface KeypadDivide {
			Name: "KeypadDivide";
			Value: 267;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadDivide: KeypadDivide;

		export interface KeypadMultiply {
			Name: "KeypadMultiply";
			Value: 268;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadMultiply: KeypadMultiply;

		export interface KeypadMinus {
			Name: "KeypadMinus";
			Value: 269;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadMinus: KeypadMinus;

		export interface KeypadPlus {
			Name: "KeypadPlus";
			Value: 270;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadPlus: KeypadPlus;

		export interface KeypadEnter {
			Name: "KeypadEnter";
			Value: 271;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadEnter: KeypadEnter;

		export interface KeypadEquals {
			Name: "KeypadEquals";
			Value: 272;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const KeypadEquals: KeypadEquals;

		export interface Up {
			Name: "Up";
			Value: 273;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Up: Up;

		export interface Down {
			Name: "Down";
			Value: 274;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Down: Down;

		export interface Right {
			Name: "Right";
			Value: 275;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Right: Right;

		export interface Left {
			Name: "Left";
			Value: 276;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Left: Left;

		export interface Insert {
			Name: "Insert";
			Value: 277;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Insert: Insert;

		export interface Home {
			Name: "Home";
			Value: 278;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Home: Home;

		export interface End {
			Name: "End";
			Value: 279;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const End: End;

		export interface PageUp {
			Name: "PageUp";
			Value: 280;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const PageUp: PageUp;

		export interface PageDown {
			Name: "PageDown";
			Value: 281;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const PageDown: PageDown;

		export interface LeftShift {
			Name: "LeftShift";
			Value: 304;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const LeftShift: LeftShift;

		export interface RightShift {
			Name: "RightShift";
			Value: 303;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const RightShift: RightShift;

		export interface LeftMeta {
			Name: "LeftMeta";
			Value: 310;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const LeftMeta: LeftMeta;

		export interface RightMeta {
			Name: "RightMeta";
			Value: 309;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const RightMeta: RightMeta;

		export interface LeftAlt {
			Name: "LeftAlt";
			Value: 308;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const LeftAlt: LeftAlt;

		export interface RightAlt {
			Name: "RightAlt";
			Value: 307;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const RightAlt: RightAlt;

		export interface LeftControl {
			Name: "LeftControl";
			Value: 306;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const LeftControl: LeftControl;

		export interface RightControl {
			Name: "RightControl";
			Value: 305;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const RightControl: RightControl;

		export interface CapsLock {
			Name: "CapsLock";
			Value: 301;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const CapsLock: CapsLock;

		export interface NumLock {
			Name: "NumLock";
			Value: 300;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const NumLock: NumLock;

		export interface ScrollLock {
			Name: "ScrollLock";
			Value: 302;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ScrollLock: ScrollLock;

		export interface LeftSuper {
			Name: "LeftSuper";
			Value: 311;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const LeftSuper: LeftSuper;

		export interface RightSuper {
			Name: "RightSuper";
			Value: 312;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const RightSuper: RightSuper;

		export interface Mode {
			Name: "Mode";
			Value: 313;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Mode: Mode;

		export interface Compose {
			Name: "Compose";
			Value: 314;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Compose: Compose;

		export interface Help {
			Name: "Help";
			Value: 315;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Help: Help;

		export interface Print {
			Name: "Print";
			Value: 316;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Print: Print;

		export interface SysReq {
			Name: "SysReq";
			Value: 317;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const SysReq: SysReq;

		export interface Break {
			Name: "Break";
			Value: 318;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Break: Break;

		export interface Menu {
			Name: "Menu";
			Value: 319;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Menu: Menu;

		export interface Power {
			Name: "Power";
			Value: 320;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Power: Power;

		export interface Euro {
			Name: "Euro";
			Value: 321;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Euro: Euro;

		export interface Undo {
			Name: "Undo";
			Value: 322;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Undo: Undo;

		export interface F1 {
			Name: "F1";
			Value: 282;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F1: F1;

		export interface F2 {
			Name: "F2";
			Value: 283;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F2: F2;

		export interface F3 {
			Name: "F3";
			Value: 284;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F3: F3;

		export interface F4 {
			Name: "F4";
			Value: 285;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F4: F4;

		export interface F5 {
			Name: "F5";
			Value: 286;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F5: F5;

		export interface F6 {
			Name: "F6";
			Value: 287;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F6: F6;

		export interface F7 {
			Name: "F7";
			Value: 288;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F7: F7;

		export interface F8 {
			Name: "F8";
			Value: 289;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F8: F8;

		export interface F9 {
			Name: "F9";
			Value: 290;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F9: F9;

		export interface F10 {
			Name: "F10";
			Value: 291;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F10: F10;

		export interface F11 {
			Name: "F11";
			Value: 292;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F11: F11;

		export interface F12 {
			Name: "F12";
			Value: 293;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F12: F12;

		export interface F13 {
			Name: "F13";
			Value: 294;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F13: F13;

		export interface F14 {
			Name: "F14";
			Value: 295;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F14: F14;

		export interface F15 {
			Name: "F15";
			Value: 296;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const F15: F15;

		export interface World0 {
			Name: "World0";
			Value: 160;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World0: World0;

		export interface World1 {
			Name: "World1";
			Value: 161;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World1: World1;

		export interface World2 {
			Name: "World2";
			Value: 162;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World2: World2;

		export interface World3 {
			Name: "World3";
			Value: 163;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World3: World3;

		export interface World4 {
			Name: "World4";
			Value: 164;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World4: World4;

		export interface World5 {
			Name: "World5";
			Value: 165;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World5: World5;

		export interface World6 {
			Name: "World6";
			Value: 166;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World6: World6;

		export interface World7 {
			Name: "World7";
			Value: 167;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World7: World7;

		export interface World8 {
			Name: "World8";
			Value: 168;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World8: World8;

		export interface World9 {
			Name: "World9";
			Value: 169;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World9: World9;

		export interface World10 {
			Name: "World10";
			Value: 170;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World10: World10;

		export interface World11 {
			Name: "World11";
			Value: 171;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World11: World11;

		export interface World12 {
			Name: "World12";
			Value: 172;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World12: World12;

		export interface World13 {
			Name: "World13";
			Value: 173;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World13: World13;

		export interface World14 {
			Name: "World14";
			Value: 174;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World14: World14;

		export interface World15 {
			Name: "World15";
			Value: 175;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World15: World15;

		export interface World16 {
			Name: "World16";
			Value: 176;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World16: World16;

		export interface World17 {
			Name: "World17";
			Value: 177;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World17: World17;

		export interface World18 {
			Name: "World18";
			Value: 178;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World18: World18;

		export interface World19 {
			Name: "World19";
			Value: 179;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World19: World19;

		export interface World20 {
			Name: "World20";
			Value: 180;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World20: World20;

		export interface World21 {
			Name: "World21";
			Value: 181;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World21: World21;

		export interface World22 {
			Name: "World22";
			Value: 182;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World22: World22;

		export interface World23 {
			Name: "World23";
			Value: 183;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World23: World23;

		export interface World24 {
			Name: "World24";
			Value: 184;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World24: World24;

		export interface World25 {
			Name: "World25";
			Value: 185;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World25: World25;

		export interface World26 {
			Name: "World26";
			Value: 186;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World26: World26;

		export interface World27 {
			Name: "World27";
			Value: 187;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World27: World27;

		export interface World28 {
			Name: "World28";
			Value: 188;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World28: World28;

		export interface World29 {
			Name: "World29";
			Value: 189;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World29: World29;

		export interface World30 {
			Name: "World30";
			Value: 190;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World30: World30;

		export interface World31 {
			Name: "World31";
			Value: 191;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World31: World31;

		export interface World32 {
			Name: "World32";
			Value: 192;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World32: World32;

		export interface World33 {
			Name: "World33";
			Value: 193;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World33: World33;

		export interface World34 {
			Name: "World34";
			Value: 194;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World34: World34;

		export interface World35 {
			Name: "World35";
			Value: 195;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World35: World35;

		export interface World36 {
			Name: "World36";
			Value: 196;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World36: World36;

		export interface World37 {
			Name: "World37";
			Value: 197;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World37: World37;

		export interface World38 {
			Name: "World38";
			Value: 198;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World38: World38;

		export interface World39 {
			Name: "World39";
			Value: 199;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World39: World39;

		export interface World40 {
			Name: "World40";
			Value: 200;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World40: World40;

		export interface World41 {
			Name: "World41";
			Value: 201;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World41: World41;

		export interface World42 {
			Name: "World42";
			Value: 202;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World42: World42;

		export interface World43 {
			Name: "World43";
			Value: 203;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World43: World43;

		export interface World44 {
			Name: "World44";
			Value: 204;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World44: World44;

		export interface World45 {
			Name: "World45";
			Value: 205;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World45: World45;

		export interface World46 {
			Name: "World46";
			Value: 206;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World46: World46;

		export interface World47 {
			Name: "World47";
			Value: 207;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World47: World47;

		export interface World48 {
			Name: "World48";
			Value: 208;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World48: World48;

		export interface World49 {
			Name: "World49";
			Value: 209;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World49: World49;

		export interface World50 {
			Name: "World50";
			Value: 210;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World50: World50;

		export interface World51 {
			Name: "World51";
			Value: 211;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World51: World51;

		export interface World52 {
			Name: "World52";
			Value: 212;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World52: World52;

		export interface World53 {
			Name: "World53";
			Value: 213;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World53: World53;

		export interface World54 {
			Name: "World54";
			Value: 214;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World54: World54;

		export interface World55 {
			Name: "World55";
			Value: 215;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World55: World55;

		export interface World56 {
			Name: "World56";
			Value: 216;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World56: World56;

		export interface World57 {
			Name: "World57";
			Value: 217;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World57: World57;

		export interface World58 {
			Name: "World58";
			Value: 218;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World58: World58;

		export interface World59 {
			Name: "World59";
			Value: 219;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World59: World59;

		export interface World60 {
			Name: "World60";
			Value: 220;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World60: World60;

		export interface World61 {
			Name: "World61";
			Value: 221;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World61: World61;

		export interface World62 {
			Name: "World62";
			Value: 222;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World62: World62;

		export interface World63 {
			Name: "World63";
			Value: 223;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World63: World63;

		export interface World64 {
			Name: "World64";
			Value: 224;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World64: World64;

		export interface World65 {
			Name: "World65";
			Value: 225;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World65: World65;

		export interface World66 {
			Name: "World66";
			Value: 226;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World66: World66;

		export interface World67 {
			Name: "World67";
			Value: 227;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World67: World67;

		export interface World68 {
			Name: "World68";
			Value: 228;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World68: World68;

		export interface World69 {
			Name: "World69";
			Value: 229;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World69: World69;

		export interface World70 {
			Name: "World70";
			Value: 230;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World70: World70;

		export interface World71 {
			Name: "World71";
			Value: 231;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World71: World71;

		export interface World72 {
			Name: "World72";
			Value: 232;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World72: World72;

		export interface World73 {
			Name: "World73";
			Value: 233;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World73: World73;

		export interface World74 {
			Name: "World74";
			Value: 234;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World74: World74;

		export interface World75 {
			Name: "World75";
			Value: 235;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World75: World75;

		export interface World76 {
			Name: "World76";
			Value: 236;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World76: World76;

		export interface World77 {
			Name: "World77";
			Value: 237;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World77: World77;

		export interface World78 {
			Name: "World78";
			Value: 238;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World78: World78;

		export interface World79 {
			Name: "World79";
			Value: 239;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World79: World79;

		export interface World80 {
			Name: "World80";
			Value: 240;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World80: World80;

		export interface World81 {
			Name: "World81";
			Value: 241;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World81: World81;

		export interface World82 {
			Name: "World82";
			Value: 242;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World82: World82;

		export interface World83 {
			Name: "World83";
			Value: 243;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World83: World83;

		export interface World84 {
			Name: "World84";
			Value: 244;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World84: World84;

		export interface World85 {
			Name: "World85";
			Value: 245;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World85: World85;

		export interface World86 {
			Name: "World86";
			Value: 246;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World86: World86;

		export interface World87 {
			Name: "World87";
			Value: 247;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World87: World87;

		export interface World88 {
			Name: "World88";
			Value: 248;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World88: World88;

		export interface World89 {
			Name: "World89";
			Value: 249;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World89: World89;

		export interface World90 {
			Name: "World90";
			Value: 250;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World90: World90;

		export interface World91 {
			Name: "World91";
			Value: 251;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World91: World91;

		export interface World92 {
			Name: "World92";
			Value: 252;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World92: World92;

		export interface World93 {
			Name: "World93";
			Value: 253;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World93: World93;

		export interface World94 {
			Name: "World94";
			Value: 254;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World94: World94;

		export interface World95 {
			Name: "World95";
			Value: 255;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const World95: World95;

		export interface ButtonX {
			Name: "ButtonX";
			Value: 1000;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ButtonX: ButtonX;

		export interface ButtonY {
			Name: "ButtonY";
			Value: 1001;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ButtonY: ButtonY;

		export interface ButtonA {
			Name: "ButtonA";
			Value: 1002;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ButtonA: ButtonA;

		export interface ButtonB {
			Name: "ButtonB";
			Value: 1003;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ButtonB: ButtonB;

		export interface ButtonR1 {
			Name: "ButtonR1";
			Value: 1004;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ButtonR1: ButtonR1;

		export interface ButtonL1 {
			Name: "ButtonL1";
			Value: 1005;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ButtonL1: ButtonL1;

		export interface ButtonR2 {
			Name: "ButtonR2";
			Value: 1006;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ButtonR2: ButtonR2;

		export interface ButtonL2 {
			Name: "ButtonL2";
			Value: 1007;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ButtonL2: ButtonL2;

		export interface ButtonR3 {
			Name: "ButtonR3";
			Value: 1008;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ButtonR3: ButtonR3;

		export interface ButtonL3 {
			Name: "ButtonL3";
			Value: 1009;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ButtonL3: ButtonL3;

		export interface ButtonStart {
			Name: "ButtonStart";
			Value: 1010;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ButtonStart: ButtonStart;

		export interface ButtonSelect {
			Name: "ButtonSelect";
			Value: 1011;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const ButtonSelect: ButtonSelect;

		export interface DPadLeft {
			Name: "DPadLeft";
			Value: 1012;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const DPadLeft: DPadLeft;

		export interface DPadRight {
			Name: "DPadRight";
			Value: 1013;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const DPadRight: DPadRight;

		export interface DPadUp {
			Name: "DPadUp";
			Value: 1014;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const DPadUp: DPadUp;

		export interface DPadDown {
			Name: "DPadDown";
			Value: 1015;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const DPadDown: DPadDown;

		export interface Thumbstick1 {
			Name: "Thumbstick1";
			Value: 1016;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Thumbstick1: Thumbstick1;

		export interface Thumbstick2 {
			Name: "Thumbstick2";
			Value: 1017;
			EnumType: EnumType<Enum.KeyCode>;
		}

		export const Thumbstick2: Thumbstick2;

		export function GetEnumItems(this: {}): Array<KeyCode>
	}
	export type KeyCode = KeyCode.Unknown | KeyCode.Backspace | KeyCode.Tab | KeyCode.Clear | KeyCode.Return | KeyCode.Pause | KeyCode.Escape | KeyCode.Space | KeyCode.QuotedDouble | KeyCode.Hash | KeyCode.Dollar | KeyCode.Percent | KeyCode.Ampersand | KeyCode.Quote | KeyCode.LeftParenthesis | KeyCode.RightParenthesis | KeyCode.Asterisk | KeyCode.Plus | KeyCode.Comma | KeyCode.Minus | KeyCode.Period | KeyCode.Slash | KeyCode.Zero | KeyCode.One | KeyCode.Two | KeyCode.Three | KeyCode.Four | KeyCode.Five | KeyCode.Six | KeyCode.Seven | KeyCode.Eight | KeyCode.Nine | KeyCode.Colon | KeyCode.Semicolon | KeyCode.LessThan | KeyCode.Equals | KeyCode.GreaterThan | KeyCode.Question | KeyCode.At | KeyCode.LeftBracket | KeyCode.BackSlash | KeyCode.RightBracket | KeyCode.Caret | KeyCode.Underscore | KeyCode.Backquote | KeyCode.A | KeyCode.B | KeyCode.C | KeyCode.D | KeyCode.E | KeyCode.F | KeyCode.G | KeyCode.H | KeyCode.I | KeyCode.J | KeyCode.K | KeyCode.L | KeyCode.M | KeyCode.N | KeyCode.O | KeyCode.P | KeyCode.Q | KeyCode.R | KeyCode.S | KeyCode.T | KeyCode.U | KeyCode.V | KeyCode.W | KeyCode.X | KeyCode.Y | KeyCode.Z | KeyCode.LeftCurly | KeyCode.Pipe | KeyCode.RightCurly | KeyCode.Tilde | KeyCode.Delete | KeyCode.KeypadZero | KeyCode.KeypadOne | KeyCode.KeypadTwo | KeyCode.KeypadThree | KeyCode.KeypadFour | KeyCode.KeypadFive | KeyCode.KeypadSix | KeyCode.KeypadSeven | KeyCode.KeypadEight | KeyCode.KeypadNine | KeyCode.KeypadPeriod | KeyCode.KeypadDivide | KeyCode.KeypadMultiply | KeyCode.KeypadMinus | KeyCode.KeypadPlus | KeyCode.KeypadEnter | KeyCode.KeypadEquals | KeyCode.Up | KeyCode.Down | KeyCode.Right | KeyCode.Left | KeyCode.Insert | KeyCode.Home | KeyCode.End | KeyCode.PageUp | KeyCode.PageDown | KeyCode.LeftShift | KeyCode.RightShift | KeyCode.LeftMeta | KeyCode.RightMeta | KeyCode.LeftAlt | KeyCode.RightAlt | KeyCode.LeftControl | KeyCode.RightControl | KeyCode.CapsLock | KeyCode.NumLock | KeyCode.ScrollLock | KeyCode.LeftSuper | KeyCode.RightSuper | KeyCode.Mode | KeyCode.Compose | KeyCode.Help | KeyCode.Print | KeyCode.SysReq | KeyCode.Break | KeyCode.Menu | KeyCode.Power | KeyCode.Euro | KeyCode.Undo | KeyCode.F1 | KeyCode.F2 | KeyCode.F3 | KeyCode.F4 | KeyCode.F5 | KeyCode.F6 | KeyCode.F7 | KeyCode.F8 | KeyCode.F9 | KeyCode.F10 | KeyCode.F11 | KeyCode.F12 | KeyCode.F13 | KeyCode.F14 | KeyCode.F15 | KeyCode.World0 | KeyCode.World1 | KeyCode.World2 | KeyCode.World3 | KeyCode.World4 | KeyCode.World5 | KeyCode.World6 | KeyCode.World7 | KeyCode.World8 | KeyCode.World9 | KeyCode.World10 | KeyCode.World11 | KeyCode.World12 | KeyCode.World13 | KeyCode.World14 | KeyCode.World15 | KeyCode.World16 | KeyCode.World17 | KeyCode.World18 | KeyCode.World19 | KeyCode.World20 | KeyCode.World21 | KeyCode.World22 | KeyCode.World23 | KeyCode.World24 | KeyCode.World25 | KeyCode.World26 | KeyCode.World27 | KeyCode.World28 | KeyCode.World29 | KeyCode.World30 | KeyCode.World31 | KeyCode.World32 | KeyCode.World33 | KeyCode.World34 | KeyCode.World35 | KeyCode.World36 | KeyCode.World37 | KeyCode.World38 | KeyCode.World39 | KeyCode.World40 | KeyCode.World41 | KeyCode.World42 | KeyCode.World43 | KeyCode.World44 | KeyCode.World45 | KeyCode.World46 | KeyCode.World47 | KeyCode.World48 | KeyCode.World49 | KeyCode.World50 | KeyCode.World51 | KeyCode.World52 | KeyCode.World53 | KeyCode.World54 | KeyCode.World55 | KeyCode.World56 | KeyCode.World57 | KeyCode.World58 | KeyCode.World59 | KeyCode.World60 | KeyCode.World61 | KeyCode.World62 | KeyCode.World63 | KeyCode.World64 | KeyCode.World65 | KeyCode.World66 | KeyCode.World67 | KeyCode.World68 | KeyCode.World69 | KeyCode.World70 | KeyCode.World71 | KeyCode.World72 | KeyCode.World73 | KeyCode.World74 | KeyCode.World75 | KeyCode.World76 | KeyCode.World77 | KeyCode.World78 | KeyCode.World79 | KeyCode.World80 | KeyCode.World81 | KeyCode.World82 | KeyCode.World83 | KeyCode.World84 | KeyCode.World85 | KeyCode.World86 | KeyCode.World87 | KeyCode.World88 | KeyCode.World89 | KeyCode.World90 | KeyCode.World91 | KeyCode.World92 | KeyCode.World93 | KeyCode.World94 | KeyCode.World95 | KeyCode.ButtonX | KeyCode.ButtonY | KeyCode.ButtonA | KeyCode.ButtonB | KeyCode.ButtonR1 | KeyCode.ButtonL1 | KeyCode.ButtonR2 | KeyCode.ButtonL2 | KeyCode.ButtonR3 | KeyCode.ButtonL3 | KeyCode.ButtonStart | KeyCode.ButtonSelect | KeyCode.DPadLeft | KeyCode.DPadRight | KeyCode.DPadUp | KeyCode.DPadDown | KeyCode.Thumbstick1 | KeyCode.Thumbstick2;
	export namespace KeywordFilterType {
		export interface Include {
			Name: "Include";
			Value: 0;
			EnumType: EnumType<Enum.KeywordFilterType>;
		}

		export const Include: Include;

		export interface Exclude {
			Name: "Exclude";
			Value: 1;
			EnumType: EnumType<Enum.KeywordFilterType>;
		}

		export const Exclude: Exclude;

		export function GetEnumItems(this: {}): Array<KeywordFilterType>
	}
	export type KeywordFilterType = KeywordFilterType.Include | KeywordFilterType.Exclude;
	export namespace Language {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.Language>;
		}

		export const Default: Default;

		export function GetEnumItems(this: {}): Array<Language>
	}
	export type Language = Language.Default;
	export namespace LanguagePreference {
		export interface SystemDefault {
			Name: "SystemDefault";
			Value: 0;
			EnumType: EnumType<Enum.LanguagePreference>;
		}

		export const SystemDefault: SystemDefault;

		export interface English {
			Name: "English";
			Value: 1;
			EnumType: EnumType<Enum.LanguagePreference>;
		}

		export const English: English;

		export interface SimplifiedChinese {
			Name: "SimplifiedChinese";
			Value: 2;
			EnumType: EnumType<Enum.LanguagePreference>;
		}

		export const SimplifiedChinese: SimplifiedChinese;

		export function GetEnumItems(this: {}): Array<LanguagePreference>
	}
	export type LanguagePreference = LanguagePreference.SystemDefault | LanguagePreference.English | LanguagePreference.SimplifiedChinese;
	export namespace LeftRight {
		export interface Left {
			Name: "Left";
			Value: 0;
			EnumType: EnumType<Enum.LeftRight>;
		}

		export const Left: Left;

		export interface Center {
			Name: "Center";
			Value: 1;
			EnumType: EnumType<Enum.LeftRight>;
		}

		export const Center: Center;

		export interface Right {
			Name: "Right";
			Value: 2;
			EnumType: EnumType<Enum.LeftRight>;
		}

		export const Right: Right;

		export function GetEnumItems(this: {}): Array<LeftRight>
	}
	export type LeftRight = LeftRight.Left | LeftRight.Center | LeftRight.Right;
	export namespace LevelOfDetailSetting {
		export interface High {
			Name: "High";
			Value: 2;
			EnumType: EnumType<Enum.LevelOfDetailSetting>;
		}

		export const High: High;

		export interface Medium {
			Name: "Medium";
			Value: 1;
			EnumType: EnumType<Enum.LevelOfDetailSetting>;
		}

		export const Medium: Medium;

		export interface Low {
			Name: "Low";
			Value: 0;
			EnumType: EnumType<Enum.LevelOfDetailSetting>;
		}

		export const Low: Low;

		export function GetEnumItems(this: {}): Array<LevelOfDetailSetting>
	}
	export type LevelOfDetailSetting = LevelOfDetailSetting.High | LevelOfDetailSetting.Medium | LevelOfDetailSetting.Low;
	export namespace Limb {
		export interface Head {
			Name: "Head";
			Value: 0;
			EnumType: EnumType<Enum.Limb>;
		}

		export const Head: Head;

		export interface Torso {
			Name: "Torso";
			Value: 1;
			EnumType: EnumType<Enum.Limb>;
		}

		export const Torso: Torso;

		export interface LeftArm {
			Name: "LeftArm";
			Value: 2;
			EnumType: EnumType<Enum.Limb>;
		}

		export const LeftArm: LeftArm;

		export interface RightArm {
			Name: "RightArm";
			Value: 3;
			EnumType: EnumType<Enum.Limb>;
		}

		export const RightArm: RightArm;

		export interface LeftLeg {
			Name: "LeftLeg";
			Value: 4;
			EnumType: EnumType<Enum.Limb>;
		}

		export const LeftLeg: LeftLeg;

		export interface RightLeg {
			Name: "RightLeg";
			Value: 5;
			EnumType: EnumType<Enum.Limb>;
		}

		export const RightLeg: RightLeg;

		export interface Unknown {
			Name: "Unknown";
			Value: 6;
			EnumType: EnumType<Enum.Limb>;
		}

		export const Unknown: Unknown;

		export function GetEnumItems(this: {}): Array<Limb>
	}
	export type Limb = Limb.Head | Limb.Torso | Limb.LeftArm | Limb.RightArm | Limb.LeftLeg | Limb.RightLeg | Limb.Unknown;
	export namespace ListDisplayMode {
		export interface Horizontal {
			Name: "Horizontal";
			Value: 0;
			EnumType: EnumType<Enum.ListDisplayMode>;
		}

		export const Horizontal: Horizontal;

		export interface Vertical {
			Name: "Vertical";
			Value: 1;
			EnumType: EnumType<Enum.ListDisplayMode>;
		}

		export const Vertical: Vertical;

		export function GetEnumItems(this: {}): Array<ListDisplayMode>
	}
	export type ListDisplayMode = ListDisplayMode.Horizontal | ListDisplayMode.Vertical;
	export namespace ListenerType {
		export interface Camera {
			Name: "Camera";
			Value: 0;
			EnumType: EnumType<Enum.ListenerType>;
		}

		export const Camera: Camera;

		export interface CFrame {
			Name: "CFrame";
			Value: 1;
			EnumType: EnumType<Enum.ListenerType>;
		}

		export const CFrame: CFrame;

		export interface ObjectPosition {
			Name: "ObjectPosition";
			Value: 2;
			EnumType: EnumType<Enum.ListenerType>;
		}

		export const ObjectPosition: ObjectPosition;

		export interface ObjectCFrame {
			Name: "ObjectCFrame";
			Value: 3;
			EnumType: EnumType<Enum.ListenerType>;
		}

		export const ObjectCFrame: ObjectCFrame;

		export function GetEnumItems(this: {}): Array<ListenerType>
	}
	export type ListenerType = ListenerType.Camera | ListenerType.CFrame | ListenerType.ObjectPosition | ListenerType.ObjectCFrame;
	export namespace Material {
		export interface Plastic {
			Name: "Plastic";
			Value: 256;
			EnumType: EnumType<Enum.Material>;
		}

		export const Plastic: Plastic;

		export interface Wood {
			Name: "Wood";
			Value: 512;
			EnumType: EnumType<Enum.Material>;
		}

		export const Wood: Wood;

		export interface Slate {
			Name: "Slate";
			Value: 800;
			EnumType: EnumType<Enum.Material>;
		}

		export const Slate: Slate;

		export interface Concrete {
			Name: "Concrete";
			Value: 816;
			EnumType: EnumType<Enum.Material>;
		}

		export const Concrete: Concrete;

		export interface CorrodedMetal {
			Name: "CorrodedMetal";
			Value: 1040;
			EnumType: EnumType<Enum.Material>;
		}

		export const CorrodedMetal: CorrodedMetal;

		export interface DiamondPlate {
			Name: "DiamondPlate";
			Value: 1056;
			EnumType: EnumType<Enum.Material>;
		}

		export const DiamondPlate: DiamondPlate;

		export interface Foil {
			Name: "Foil";
			Value: 1072;
			EnumType: EnumType<Enum.Material>;
		}

		export const Foil: Foil;

		export interface Grass {
			Name: "Grass";
			Value: 1280;
			EnumType: EnumType<Enum.Material>;
		}

		export const Grass: Grass;

		export interface Ice {
			Name: "Ice";
			Value: 1536;
			EnumType: EnumType<Enum.Material>;
		}

		export const Ice: Ice;

		export interface Marble {
			Name: "Marble";
			Value: 784;
			EnumType: EnumType<Enum.Material>;
		}

		export const Marble: Marble;

		export interface Granite {
			Name: "Granite";
			Value: 832;
			EnumType: EnumType<Enum.Material>;
		}

		export const Granite: Granite;

		export interface Brick {
			Name: "Brick";
			Value: 848;
			EnumType: EnumType<Enum.Material>;
		}

		export const Brick: Brick;

		export interface Pebble {
			Name: "Pebble";
			Value: 864;
			EnumType: EnumType<Enum.Material>;
		}

		export const Pebble: Pebble;

		export interface Sand {
			Name: "Sand";
			Value: 1296;
			EnumType: EnumType<Enum.Material>;
		}

		export const Sand: Sand;

		export interface Fabric {
			Name: "Fabric";
			Value: 1312;
			EnumType: EnumType<Enum.Material>;
		}

		export const Fabric: Fabric;

		export interface SmoothPlastic {
			Name: "SmoothPlastic";
			Value: 272;
			EnumType: EnumType<Enum.Material>;
		}

		export const SmoothPlastic: SmoothPlastic;

		export interface Metal {
			Name: "Metal";
			Value: 1088;
			EnumType: EnumType<Enum.Material>;
		}

		export const Metal: Metal;

		export interface WoodPlanks {
			Name: "WoodPlanks";
			Value: 528;
			EnumType: EnumType<Enum.Material>;
		}

		export const WoodPlanks: WoodPlanks;

		export interface Cobblestone {
			Name: "Cobblestone";
			Value: 880;
			EnumType: EnumType<Enum.Material>;
		}

		export const Cobblestone: Cobblestone;

		export interface Air {
			Name: "Air";
			Value: 1792;
			EnumType: EnumType<Enum.Material>;
		}

		export const Air: Air;

		export interface Water {
			Name: "Water";
			Value: 2048;
			EnumType: EnumType<Enum.Material>;
		}

		export const Water: Water;

		export interface Rock {
			Name: "Rock";
			Value: 896;
			EnumType: EnumType<Enum.Material>;
		}

		export const Rock: Rock;

		export interface Glacier {
			Name: "Glacier";
			Value: 1552;
			EnumType: EnumType<Enum.Material>;
		}

		export const Glacier: Glacier;

		export interface Snow {
			Name: "Snow";
			Value: 1328;
			EnumType: EnumType<Enum.Material>;
		}

		export const Snow: Snow;

		export interface Sandstone {
			Name: "Sandstone";
			Value: 912;
			EnumType: EnumType<Enum.Material>;
		}

		export const Sandstone: Sandstone;

		export interface Mud {
			Name: "Mud";
			Value: 1344;
			EnumType: EnumType<Enum.Material>;
		}

		export const Mud: Mud;

		export interface Basalt {
			Name: "Basalt";
			Value: 788;
			EnumType: EnumType<Enum.Material>;
		}

		export const Basalt: Basalt;

		export interface Ground {
			Name: "Ground";
			Value: 1360;
			EnumType: EnumType<Enum.Material>;
		}

		export const Ground: Ground;

		export interface CrackedLava {
			Name: "CrackedLava";
			Value: 804;
			EnumType: EnumType<Enum.Material>;
		}

		export const CrackedLava: CrackedLava;

		export interface Neon {
			Name: "Neon";
			Value: 288;
			EnumType: EnumType<Enum.Material>;
		}

		export const Neon: Neon;

		export interface Glass {
			Name: "Glass";
			Value: 1568;
			EnumType: EnumType<Enum.Material>;
		}

		export const Glass: Glass;

		export interface Asphalt {
			Name: "Asphalt";
			Value: 1376;
			EnumType: EnumType<Enum.Material>;
		}

		export const Asphalt: Asphalt;

		export interface LeafyGrass {
			Name: "LeafyGrass";
			Value: 1284;
			EnumType: EnumType<Enum.Material>;
		}

		export const LeafyGrass: LeafyGrass;

		export interface Salt {
			Name: "Salt";
			Value: 1392;
			EnumType: EnumType<Enum.Material>;
		}

		export const Salt: Salt;

		export interface Limestone {
			Name: "Limestone";
			Value: 820;
			EnumType: EnumType<Enum.Material>;
		}

		export const Limestone: Limestone;

		export interface Pavement {
			Name: "Pavement";
			Value: 836;
			EnumType: EnumType<Enum.Material>;
		}

		export const Pavement: Pavement;

		export interface ForceField {
			Name: "ForceField";
			Value: 1584;
			EnumType: EnumType<Enum.Material>;
		}

		export const ForceField: ForceField;

		export function GetEnumItems(this: {}): Array<Material>
	}
	export type Material = Material.Plastic | Material.Wood | Material.Slate | Material.Concrete | Material.CorrodedMetal | Material.DiamondPlate | Material.Foil | Material.Grass | Material.Ice | Material.Marble | Material.Granite | Material.Brick | Material.Pebble | Material.Sand | Material.Fabric | Material.SmoothPlastic | Material.Metal | Material.WoodPlanks | Material.Cobblestone | Material.Air | Material.Water | Material.Rock | Material.Glacier | Material.Snow | Material.Sandstone | Material.Mud | Material.Basalt | Material.Ground | Material.CrackedLava | Material.Neon | Material.Glass | Material.Asphalt | Material.LeafyGrass | Material.Salt | Material.Limestone | Material.Pavement | Material.ForceField;
	export namespace MembershipType {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<Enum.MembershipType>;
		}

		export const None: None;

		export interface BuildersClub {
			Name: "BuildersClub";
			Value: 1;
			EnumType: EnumType<Enum.MembershipType>;
		}

		export const BuildersClub: BuildersClub;

		export interface TurboBuildersClub {
			Name: "TurboBuildersClub";
			Value: 2;
			EnumType: EnumType<Enum.MembershipType>;
		}

		export const TurboBuildersClub: TurboBuildersClub;

		export interface OutrageousBuildersClub {
			Name: "OutrageousBuildersClub";
			Value: 3;
			EnumType: EnumType<Enum.MembershipType>;
		}

		export const OutrageousBuildersClub: OutrageousBuildersClub;

		export interface Premium {
			Name: "Premium";
			Value: 4;
			EnumType: EnumType<Enum.MembershipType>;
		}

		export const Premium: Premium;

		export function GetEnumItems(this: {}): Array<MembershipType>
	}
	export type MembershipType = MembershipType.None | MembershipType.BuildersClub | MembershipType.TurboBuildersClub | MembershipType.OutrageousBuildersClub | MembershipType.Premium;
	export namespace MeshType {
		export interface Head {
			Name: "Head";
			Value: 0;
			EnumType: EnumType<Enum.MeshType>;
		}

		export const Head: Head;

		export interface Torso {
			Name: "Torso";
			Value: 1;
			EnumType: EnumType<Enum.MeshType>;
		}

		export const Torso: Torso;

		export interface Wedge {
			Name: "Wedge";
			Value: 2;
			EnumType: EnumType<Enum.MeshType>;
		}

		export const Wedge: Wedge;

		export interface Prism {
			Name: "Prism";
			Value: 7;
			EnumType: EnumType<Enum.MeshType>;
		}

		export const Prism: Prism;

		export interface Pyramid {
			Name: "Pyramid";
			Value: 8;
			EnumType: EnumType<Enum.MeshType>;
		}

		export const Pyramid: Pyramid;

		export interface ParallelRamp {
			Name: "ParallelRamp";
			Value: 9;
			EnumType: EnumType<Enum.MeshType>;
		}

		export const ParallelRamp: ParallelRamp;

		export interface RightAngleRamp {
			Name: "RightAngleRamp";
			Value: 10;
			EnumType: EnumType<Enum.MeshType>;
		}

		export const RightAngleRamp: RightAngleRamp;

		export interface CornerWedge {
			Name: "CornerWedge";
			Value: 11;
			EnumType: EnumType<Enum.MeshType>;
		}

		export const CornerWedge: CornerWedge;

		export interface Brick {
			Name: "Brick";
			Value: 6;
			EnumType: EnumType<Enum.MeshType>;
		}

		export const Brick: Brick;

		export interface Sphere {
			Name: "Sphere";
			Value: 3;
			EnumType: EnumType<Enum.MeshType>;
		}

		export const Sphere: Sphere;

		export interface Cylinder {
			Name: "Cylinder";
			Value: 4;
			EnumType: EnumType<Enum.MeshType>;
		}

		export const Cylinder: Cylinder;

		export interface FileMesh {
			Name: "FileMesh";
			Value: 5;
			EnumType: EnumType<Enum.MeshType>;
		}

		export const FileMesh: FileMesh;

		export function GetEnumItems(this: {}): Array<MeshType>
	}
	export type MeshType = MeshType.Head | MeshType.Torso | MeshType.Wedge | MeshType.Prism | MeshType.Pyramid | MeshType.ParallelRamp | MeshType.RightAngleRamp | MeshType.CornerWedge | MeshType.Brick | MeshType.Sphere | MeshType.Cylinder | MeshType.FileMesh;
	export namespace MessageType {
		export interface MessageOutput {
			Name: "MessageOutput";
			Value: 0;
			EnumType: EnumType<Enum.MessageType>;
		}

		export const MessageOutput: MessageOutput;

		export interface MessageInfo {
			Name: "MessageInfo";
			Value: 1;
			EnumType: EnumType<Enum.MessageType>;
		}

		export const MessageInfo: MessageInfo;

		export interface MessageWarning {
			Name: "MessageWarning";
			Value: 2;
			EnumType: EnumType<Enum.MessageType>;
		}

		export const MessageWarning: MessageWarning;

		export interface MessageError {
			Name: "MessageError";
			Value: 3;
			EnumType: EnumType<Enum.MessageType>;
		}

		export const MessageError: MessageError;

		export function GetEnumItems(this: {}): Array<MessageType>
	}
	export type MessageType = MessageType.MessageOutput | MessageType.MessageInfo | MessageType.MessageWarning | MessageType.MessageError;
	export namespace MouseBehavior {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.MouseBehavior>;
		}

		export const Default: Default;

		export interface LockCenter {
			Name: "LockCenter";
			Value: 1;
			EnumType: EnumType<Enum.MouseBehavior>;
		}

		export const LockCenter: LockCenter;

		export interface LockCurrentPosition {
			Name: "LockCurrentPosition";
			Value: 2;
			EnumType: EnumType<Enum.MouseBehavior>;
		}

		export const LockCurrentPosition: LockCurrentPosition;

		export function GetEnumItems(this: {}): Array<MouseBehavior>
	}
	export type MouseBehavior = MouseBehavior.Default | MouseBehavior.LockCenter | MouseBehavior.LockCurrentPosition;
	export namespace MoveState {
		export interface Stopped {
			Name: "Stopped";
			Value: 0;
			EnumType: EnumType<Enum.MoveState>;
		}

		export const Stopped: Stopped;

		export interface Coasting {
			Name: "Coasting";
			Value: 1;
			EnumType: EnumType<Enum.MoveState>;
		}

		export const Coasting: Coasting;

		export interface Pushing {
			Name: "Pushing";
			Value: 2;
			EnumType: EnumType<Enum.MoveState>;
		}

		export const Pushing: Pushing;

		export interface Stopping {
			Name: "Stopping";
			Value: 3;
			EnumType: EnumType<Enum.MoveState>;
		}

		export const Stopping: Stopping;

		export interface AirFree {
			Name: "AirFree";
			Value: 4;
			EnumType: EnumType<Enum.MoveState>;
		}

		export const AirFree: AirFree;

		export function GetEnumItems(this: {}): Array<MoveState>
	}
	export type MoveState = MoveState.Stopped | MoveState.Coasting | MoveState.Pushing | MoveState.Stopping | MoveState.AirFree;
	export namespace NameOcclusion {
		export interface OccludeAll {
			Name: "OccludeAll";
			Value: 2;
			EnumType: EnumType<Enum.NameOcclusion>;
		}

		export const OccludeAll: OccludeAll;

		export interface EnemyOcclusion {
			Name: "EnemyOcclusion";
			Value: 1;
			EnumType: EnumType<Enum.NameOcclusion>;
		}

		export const EnemyOcclusion: EnemyOcclusion;

		export interface NoOcclusion {
			Name: "NoOcclusion";
			Value: 0;
			EnumType: EnumType<Enum.NameOcclusion>;
		}

		export const NoOcclusion: NoOcclusion;

		export function GetEnumItems(this: {}): Array<NameOcclusion>
	}
	export type NameOcclusion = NameOcclusion.OccludeAll | NameOcclusion.EnemyOcclusion | NameOcclusion.NoOcclusion;
	export namespace NetworkOwnership {
		export interface Automatic {
			Name: "Automatic";
			Value: 0;
			EnumType: EnumType<Enum.NetworkOwnership>;
		}

		export const Automatic: Automatic;

		export interface Manual {
			Name: "Manual";
			Value: 1;
			EnumType: EnumType<Enum.NetworkOwnership>;
		}

		export const Manual: Manual;

		export interface OnContact {
			Name: "OnContact";
			Value: 2;
			EnumType: EnumType<Enum.NetworkOwnership>;
		}

		export const OnContact: OnContact;

		export function GetEnumItems(this: {}): Array<NetworkOwnership>
	}
	export type NetworkOwnership = NetworkOwnership.Automatic | NetworkOwnership.Manual | NetworkOwnership.OnContact;
	export namespace NormalId {
		export interface Top {
			Name: "Top";
			Value: 1;
			EnumType: EnumType<Enum.NormalId>;
		}

		export const Top: Top;

		export interface Bottom {
			Name: "Bottom";
			Value: 4;
			EnumType: EnumType<Enum.NormalId>;
		}

		export const Bottom: Bottom;

		export interface Back {
			Name: "Back";
			Value: 2;
			EnumType: EnumType<Enum.NormalId>;
		}

		export const Back: Back;

		export interface Front {
			Name: "Front";
			Value: 5;
			EnumType: EnumType<Enum.NormalId>;
		}

		export const Front: Front;

		export interface Right {
			Name: "Right";
			Value: 0;
			EnumType: EnumType<Enum.NormalId>;
		}

		export const Right: Right;

		export interface Left {
			Name: "Left";
			Value: 3;
			EnumType: EnumType<Enum.NormalId>;
		}

		export const Left: Left;

		export function GetEnumItems(this: {}): Array<NormalId>
	}
	export type NormalId = NormalId.Top | NormalId.Bottom | NormalId.Back | NormalId.Front | NormalId.Right | NormalId.Left;
	export namespace OutputLayoutMode {
		export interface Horizontal {
			Name: "Horizontal";
			Value: 0;
			EnumType: EnumType<Enum.OutputLayoutMode>;
		}

		export const Horizontal: Horizontal;

		export interface Vertical {
			Name: "Vertical";
			Value: 1;
			EnumType: EnumType<Enum.OutputLayoutMode>;
		}

		export const Vertical: Vertical;

		export function GetEnumItems(this: {}): Array<OutputLayoutMode>
	}
	export type OutputLayoutMode = OutputLayoutMode.Horizontal | OutputLayoutMode.Vertical;
	export namespace OverrideMouseIconBehavior {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<Enum.OverrideMouseIconBehavior>;
		}

		export const None: None;

		export interface ForceShow {
			Name: "ForceShow";
			Value: 1;
			EnumType: EnumType<Enum.OverrideMouseIconBehavior>;
		}

		export const ForceShow: ForceShow;

		export interface ForceHide {
			Name: "ForceHide";
			Value: 2;
			EnumType: EnumType<Enum.OverrideMouseIconBehavior>;
		}

		export const ForceHide: ForceHide;

		export function GetEnumItems(this: {}): Array<OverrideMouseIconBehavior>
	}
	export type OverrideMouseIconBehavior = OverrideMouseIconBehavior.None | OverrideMouseIconBehavior.ForceShow | OverrideMouseIconBehavior.ForceHide;
	export namespace PacketPriority {
		export interface IMMEDIATE_PRIORITY {
			Name: "IMMEDIATE_PRIORITY";
			Value: 0;
			EnumType: EnumType<Enum.PacketPriority>;
		}

		export const IMMEDIATE_PRIORITY: IMMEDIATE_PRIORITY;

		export interface HIGH_PRIORITY {
			Name: "HIGH_PRIORITY";
			Value: 1;
			EnumType: EnumType<Enum.PacketPriority>;
		}

		export const HIGH_PRIORITY: HIGH_PRIORITY;

		export interface MEDIUM_PRIORITY {
			Name: "MEDIUM_PRIORITY";
			Value: 2;
			EnumType: EnumType<Enum.PacketPriority>;
		}

		export const MEDIUM_PRIORITY: MEDIUM_PRIORITY;

		export interface LOW_PRIORITY {
			Name: "LOW_PRIORITY";
			Value: 3;
			EnumType: EnumType<Enum.PacketPriority>;
		}

		export const LOW_PRIORITY: LOW_PRIORITY;

		export function GetEnumItems(this: {}): Array<PacketPriority>
	}
	export type PacketPriority = PacketPriority.IMMEDIATE_PRIORITY | PacketPriority.HIGH_PRIORITY | PacketPriority.MEDIUM_PRIORITY | PacketPriority.LOW_PRIORITY;
	export namespace PartType {
		export interface Ball {
			Name: "Ball";
			Value: 0;
			EnumType: EnumType<Enum.PartType>;
		}

		export const Ball: Ball;

		export interface Block {
			Name: "Block";
			Value: 1;
			EnumType: EnumType<Enum.PartType>;
		}

		export const Block: Block;

		export interface Cylinder {
			Name: "Cylinder";
			Value: 2;
			EnumType: EnumType<Enum.PartType>;
		}

		export const Cylinder: Cylinder;

		export function GetEnumItems(this: {}): Array<PartType>
	}
	export type PartType = PartType.Ball | PartType.Block | PartType.Cylinder;
	export namespace PathStatus {
		export interface Success {
			Name: "Success";
			Value: 0;
			EnumType: EnumType<Enum.PathStatus>;
		}

		export const Success: Success;

		export interface ClosestNoPath {
			Name: "ClosestNoPath";
			Value: 1;
			EnumType: EnumType<Enum.PathStatus>;
		}

		export const ClosestNoPath: ClosestNoPath;

		export interface ClosestOutOfRange {
			Name: "ClosestOutOfRange";
			Value: 2;
			EnumType: EnumType<Enum.PathStatus>;
		}

		export const ClosestOutOfRange: ClosestOutOfRange;

		export interface FailStartNotEmpty {
			Name: "FailStartNotEmpty";
			Value: 3;
			EnumType: EnumType<Enum.PathStatus>;
		}

		export const FailStartNotEmpty: FailStartNotEmpty;

		export interface FailFinishNotEmpty {
			Name: "FailFinishNotEmpty";
			Value: 4;
			EnumType: EnumType<Enum.PathStatus>;
		}

		export const FailFinishNotEmpty: FailFinishNotEmpty;

		export interface NoPath {
			Name: "NoPath";
			Value: 5;
			EnumType: EnumType<Enum.PathStatus>;
		}

		export const NoPath: NoPath;

		export function GetEnumItems(this: {}): Array<PathStatus>
	}
	export type PathStatus = PathStatus.Success | PathStatus.ClosestNoPath | PathStatus.ClosestOutOfRange | PathStatus.FailStartNotEmpty | PathStatus.FailFinishNotEmpty | PathStatus.NoPath;
	export namespace PathWaypointAction {
		export interface Walk {
			Name: "Walk";
			Value: 0;
			EnumType: EnumType<Enum.PathWaypointAction>;
		}

		export const Walk: Walk;

		export interface Jump {
			Name: "Jump";
			Value: 1;
			EnumType: EnumType<Enum.PathWaypointAction>;
		}

		export const Jump: Jump;

		export function GetEnumItems(this: {}): Array<PathWaypointAction>
	}
	export type PathWaypointAction = PathWaypointAction.Walk | PathWaypointAction.Jump;
	export namespace PermissionLevelShown {
		export interface Game {
			Name: "Game";
			Value: 0;
			EnumType: EnumType<Enum.PermissionLevelShown>;
		}

		export const Game: Game;

		export interface RobloxGame {
			Name: "RobloxGame";
			Value: 1;
			EnumType: EnumType<Enum.PermissionLevelShown>;
		}

		export const RobloxGame: RobloxGame;

		export interface RobloxScript {
			Name: "RobloxScript";
			Value: 2;
			EnumType: EnumType<Enum.PermissionLevelShown>;
		}

		export const RobloxScript: RobloxScript;

		export interface Studio {
			Name: "Studio";
			Value: 3;
			EnumType: EnumType<Enum.PermissionLevelShown>;
		}

		export const Studio: Studio;

		export interface Roblox {
			Name: "Roblox";
			Value: 4;
			EnumType: EnumType<Enum.PermissionLevelShown>;
		}

		export const Roblox: Roblox;

		export function GetEnumItems(this: {}): Array<PermissionLevelShown>
	}
	export type PermissionLevelShown = PermissionLevelShown.Game | PermissionLevelShown.RobloxGame | PermissionLevelShown.RobloxScript | PermissionLevelShown.Studio | PermissionLevelShown.Roblox;
	export namespace Platform {
		export interface Windows {
			Name: "Windows";
			Value: 0;
			EnumType: EnumType<Enum.Platform>;
		}

		export const Windows: Windows;

		export interface OSX {
			Name: "OSX";
			Value: 1;
			EnumType: EnumType<Enum.Platform>;
		}

		export const OSX: OSX;

		export interface IOS {
			Name: "IOS";
			Value: 2;
			EnumType: EnumType<Enum.Platform>;
		}

		export const IOS: IOS;

		export interface Android {
			Name: "Android";
			Value: 3;
			EnumType: EnumType<Enum.Platform>;
		}

		export const Android: Android;

		export interface XBoxOne {
			Name: "XBoxOne";
			Value: 4;
			EnumType: EnumType<Enum.Platform>;
		}

		export const XBoxOne: XBoxOne;

		export interface PS4 {
			Name: "PS4";
			Value: 5;
			EnumType: EnumType<Enum.Platform>;
		}

		export const PS4: PS4;

		export interface PS3 {
			Name: "PS3";
			Value: 6;
			EnumType: EnumType<Enum.Platform>;
		}

		export const PS3: PS3;

		export interface XBox360 {
			Name: "XBox360";
			Value: 7;
			EnumType: EnumType<Enum.Platform>;
		}

		export const XBox360: XBox360;

		export interface WiiU {
			Name: "WiiU";
			Value: 8;
			EnumType: EnumType<Enum.Platform>;
		}

		export const WiiU: WiiU;

		export interface NX {
			Name: "NX";
			Value: 9;
			EnumType: EnumType<Enum.Platform>;
		}

		export const NX: NX;

		export interface Ouya {
			Name: "Ouya";
			Value: 10;
			EnumType: EnumType<Enum.Platform>;
		}

		export const Ouya: Ouya;

		export interface AndroidTV {
			Name: "AndroidTV";
			Value: 11;
			EnumType: EnumType<Enum.Platform>;
		}

		export const AndroidTV: AndroidTV;

		export interface Chromecast {
			Name: "Chromecast";
			Value: 12;
			EnumType: EnumType<Enum.Platform>;
		}

		export const Chromecast: Chromecast;

		export interface Linux {
			Name: "Linux";
			Value: 13;
			EnumType: EnumType<Enum.Platform>;
		}

		export const Linux: Linux;

		export interface SteamOS {
			Name: "SteamOS";
			Value: 14;
			EnumType: EnumType<Enum.Platform>;
		}

		export const SteamOS: SteamOS;

		export interface WebOS {
			Name: "WebOS";
			Value: 15;
			EnumType: EnumType<Enum.Platform>;
		}

		export const WebOS: WebOS;

		export interface DOS {
			Name: "DOS";
			Value: 16;
			EnumType: EnumType<Enum.Platform>;
		}

		export const DOS: DOS;

		export interface BeOS {
			Name: "BeOS";
			Value: 17;
			EnumType: EnumType<Enum.Platform>;
		}

		export const BeOS: BeOS;

		export interface UWP {
			Name: "UWP";
			Value: 18;
			EnumType: EnumType<Enum.Platform>;
		}

		export const UWP: UWP;

		export interface None {
			Name: "None";
			Value: 19;
			EnumType: EnumType<Enum.Platform>;
		}

		export const None: None;

		export function GetEnumItems(this: {}): Array<Platform>
	}
	export type Platform = Platform.Windows | Platform.OSX | Platform.IOS | Platform.Android | Platform.XBoxOne | Platform.PS4 | Platform.PS3 | Platform.XBox360 | Platform.WiiU | Platform.NX | Platform.Ouya | Platform.AndroidTV | Platform.Chromecast | Platform.Linux | Platform.SteamOS | Platform.WebOS | Platform.DOS | Platform.BeOS | Platform.UWP | Platform.None;
	export namespace PlaybackState {
		export interface Begin {
			Name: "Begin";
			Value: 0;
			EnumType: EnumType<Enum.PlaybackState>;
		}

		export const Begin: Begin;

		export interface Delayed {
			Name: "Delayed";
			Value: 1;
			EnumType: EnumType<Enum.PlaybackState>;
		}

		export const Delayed: Delayed;

		export interface Playing {
			Name: "Playing";
			Value: 2;
			EnumType: EnumType<Enum.PlaybackState>;
		}

		export const Playing: Playing;

		export interface Paused {
			Name: "Paused";
			Value: 3;
			EnumType: EnumType<Enum.PlaybackState>;
		}

		export const Paused: Paused;

		export interface Completed {
			Name: "Completed";
			Value: 4;
			EnumType: EnumType<Enum.PlaybackState>;
		}

		export const Completed: Completed;

		export interface Cancelled {
			Name: "Cancelled";
			Value: 5;
			EnumType: EnumType<Enum.PlaybackState>;
		}

		export const Cancelled: Cancelled;

		export function GetEnumItems(this: {}): Array<PlaybackState>
	}
	export type PlaybackState = PlaybackState.Begin | PlaybackState.Delayed | PlaybackState.Playing | PlaybackState.Paused | PlaybackState.Completed | PlaybackState.Cancelled;
	export namespace PlayerActions {
		export interface CharacterForward {
			Name: "CharacterForward";
			Value: 0;
			EnumType: EnumType<Enum.PlayerActions>;
		}

		export const CharacterForward: CharacterForward;

		export interface CharacterBackward {
			Name: "CharacterBackward";
			Value: 1;
			EnumType: EnumType<Enum.PlayerActions>;
		}

		export const CharacterBackward: CharacterBackward;

		export interface CharacterLeft {
			Name: "CharacterLeft";
			Value: 2;
			EnumType: EnumType<Enum.PlayerActions>;
		}

		export const CharacterLeft: CharacterLeft;

		export interface CharacterRight {
			Name: "CharacterRight";
			Value: 3;
			EnumType: EnumType<Enum.PlayerActions>;
		}

		export const CharacterRight: CharacterRight;

		export interface CharacterJump {
			Name: "CharacterJump";
			Value: 4;
			EnumType: EnumType<Enum.PlayerActions>;
		}

		export const CharacterJump: CharacterJump;

		export function GetEnumItems(this: {}): Array<PlayerActions>
	}
	export type PlayerActions = PlayerActions.CharacterForward | PlayerActions.CharacterBackward | PlayerActions.CharacterLeft | PlayerActions.CharacterRight | PlayerActions.CharacterJump;
	export namespace PlayerChatType {
		export interface All {
			Name: "All";
			Value: 0;
			EnumType: EnumType<Enum.PlayerChatType>;
		}

		export const All: All;

		export interface Team {
			Name: "Team";
			Value: 1;
			EnumType: EnumType<Enum.PlayerChatType>;
		}

		export const Team: Team;

		export interface Whisper {
			Name: "Whisper";
			Value: 2;
			EnumType: EnumType<Enum.PlayerChatType>;
		}

		export const Whisper: Whisper;

		export function GetEnumItems(this: {}): Array<PlayerChatType>
	}
	export type PlayerChatType = PlayerChatType.All | PlayerChatType.Team | PlayerChatType.Whisper;
	export namespace PoseEasingDirection {
		export interface Out {
			Name: "Out";
			Value: 1;
			EnumType: EnumType<Enum.PoseEasingDirection>;
		}

		export const Out: Out;

		export interface InOut {
			Name: "InOut";
			Value: 2;
			EnumType: EnumType<Enum.PoseEasingDirection>;
		}

		export const InOut: InOut;

		export interface In {
			Name: "In";
			Value: 0;
			EnumType: EnumType<Enum.PoseEasingDirection>;
		}

		export const In: In;

		export function GetEnumItems(this: {}): Array<PoseEasingDirection>
	}
	export type PoseEasingDirection = PoseEasingDirection.Out | PoseEasingDirection.InOut | PoseEasingDirection.In;
	export namespace PoseEasingStyle {
		export interface Linear {
			Name: "Linear";
			Value: 0;
			EnumType: EnumType<Enum.PoseEasingStyle>;
		}

		export const Linear: Linear;

		export interface Constant {
			Name: "Constant";
			Value: 1;
			EnumType: EnumType<Enum.PoseEasingStyle>;
		}

		export const Constant: Constant;

		export interface Elastic {
			Name: "Elastic";
			Value: 2;
			EnumType: EnumType<Enum.PoseEasingStyle>;
		}

		export const Elastic: Elastic;

		export interface Cubic {
			Name: "Cubic";
			Value: 3;
			EnumType: EnumType<Enum.PoseEasingStyle>;
		}

		export const Cubic: Cubic;

		export interface Bounce {
			Name: "Bounce";
			Value: 4;
			EnumType: EnumType<Enum.PoseEasingStyle>;
		}

		export const Bounce: Bounce;

		export function GetEnumItems(this: {}): Array<PoseEasingStyle>
	}
	export type PoseEasingStyle = PoseEasingStyle.Linear | PoseEasingStyle.Constant | PoseEasingStyle.Elastic | PoseEasingStyle.Cubic | PoseEasingStyle.Bounce;
	export namespace PrivilegeType {
		export interface Owner {
			Name: "Owner";
			Value: 255;
			EnumType: EnumType<Enum.PrivilegeType>;
		}

		export const Owner: Owner;

		export interface Admin {
			Name: "Admin";
			Value: 240;
			EnumType: EnumType<Enum.PrivilegeType>;
		}

		export const Admin: Admin;

		export interface Member {
			Name: "Member";
			Value: 128;
			EnumType: EnumType<Enum.PrivilegeType>;
		}

		export const Member: Member;

		export interface Visitor {
			Name: "Visitor";
			Value: 10;
			EnumType: EnumType<Enum.PrivilegeType>;
		}

		export const Visitor: Visitor;

		export interface Banned {
			Name: "Banned";
			Value: 0;
			EnumType: EnumType<Enum.PrivilegeType>;
		}

		export const Banned: Banned;

		export function GetEnumItems(this: {}): Array<PrivilegeType>
	}
	export type PrivilegeType = PrivilegeType.Owner | PrivilegeType.Admin | PrivilegeType.Member | PrivilegeType.Visitor | PrivilegeType.Banned;
	export namespace ProductPurchaseDecision {
		export interface NotProcessedYet {
			Name: "NotProcessedYet";
			Value: 0;
			EnumType: EnumType<Enum.ProductPurchaseDecision>;
		}

		export const NotProcessedYet: NotProcessedYet;

		export interface PurchaseGranted {
			Name: "PurchaseGranted";
			Value: 1;
			EnumType: EnumType<Enum.ProductPurchaseDecision>;
		}

		export const PurchaseGranted: PurchaseGranted;

		export function GetEnumItems(this: {}): Array<ProductPurchaseDecision>
	}
	export type ProductPurchaseDecision = ProductPurchaseDecision.NotProcessedYet | ProductPurchaseDecision.PurchaseGranted;
	export namespace QualityLevel {
		export interface Automatic {
			Name: "Automatic";
			Value: 0;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Automatic: Automatic;

		export interface Level01 {
			Name: "Level01";
			Value: 1;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level01: Level01;

		export interface Level02 {
			Name: "Level02";
			Value: 2;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level02: Level02;

		export interface Level03 {
			Name: "Level03";
			Value: 3;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level03: Level03;

		export interface Level04 {
			Name: "Level04";
			Value: 4;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level04: Level04;

		export interface Level05 {
			Name: "Level05";
			Value: 5;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level05: Level05;

		export interface Level06 {
			Name: "Level06";
			Value: 6;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level06: Level06;

		export interface Level07 {
			Name: "Level07";
			Value: 7;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level07: Level07;

		export interface Level08 {
			Name: "Level08";
			Value: 8;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level08: Level08;

		export interface Level09 {
			Name: "Level09";
			Value: 9;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level09: Level09;

		export interface Level10 {
			Name: "Level10";
			Value: 10;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level10: Level10;

		export interface Level11 {
			Name: "Level11";
			Value: 11;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level11: Level11;

		export interface Level12 {
			Name: "Level12";
			Value: 12;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level12: Level12;

		export interface Level13 {
			Name: "Level13";
			Value: 13;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level13: Level13;

		export interface Level14 {
			Name: "Level14";
			Value: 14;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level14: Level14;

		export interface Level15 {
			Name: "Level15";
			Value: 15;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level15: Level15;

		export interface Level16 {
			Name: "Level16";
			Value: 16;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level16: Level16;

		export interface Level17 {
			Name: "Level17";
			Value: 17;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level17: Level17;

		export interface Level18 {
			Name: "Level18";
			Value: 18;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level18: Level18;

		export interface Level19 {
			Name: "Level19";
			Value: 19;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level19: Level19;

		export interface Level20 {
			Name: "Level20";
			Value: 20;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level20: Level20;

		export interface Level21 {
			Name: "Level21";
			Value: 21;
			EnumType: EnumType<Enum.QualityLevel>;
		}

		export const Level21: Level21;

		export function GetEnumItems(this: {}): Array<QualityLevel>
	}
	export type QualityLevel = QualityLevel.Automatic | QualityLevel.Level01 | QualityLevel.Level02 | QualityLevel.Level03 | QualityLevel.Level04 | QualityLevel.Level05 | QualityLevel.Level06 | QualityLevel.Level07 | QualityLevel.Level08 | QualityLevel.Level09 | QualityLevel.Level10 | QualityLevel.Level11 | QualityLevel.Level12 | QualityLevel.Level13 | QualityLevel.Level14 | QualityLevel.Level15 | QualityLevel.Level16 | QualityLevel.Level17 | QualityLevel.Level18 | QualityLevel.Level19 | QualityLevel.Level20 | QualityLevel.Level21;
	export namespace R15CollisionType {
		export interface OuterBox {
			Name: "OuterBox";
			Value: 0;
			EnumType: EnumType<Enum.R15CollisionType>;
		}

		export const OuterBox: OuterBox;

		export interface InnerBox {
			Name: "InnerBox";
			Value: 1;
			EnumType: EnumType<Enum.R15CollisionType>;
		}

		export const InnerBox: InnerBox;

		export function GetEnumItems(this: {}): Array<R15CollisionType>
	}
	export type R15CollisionType = R15CollisionType.OuterBox | R15CollisionType.InnerBox;
	export namespace RenderFidelity {
		export interface Automatic {
			Name: "Automatic";
			Value: 0;
			EnumType: EnumType<Enum.RenderFidelity>;
		}

		export const Automatic: Automatic;

		export interface Precise {
			Name: "Precise";
			Value: 1;
			EnumType: EnumType<Enum.RenderFidelity>;
		}

		export const Precise: Precise;

		export function GetEnumItems(this: {}): Array<RenderFidelity>
	}
	export type RenderFidelity = RenderFidelity.Automatic | RenderFidelity.Precise;
	export namespace RenderPriority {
		export interface First {
			Name: "First";
			Value: 0;
			EnumType: EnumType<Enum.RenderPriority>;
		}

		export const First: First;

		export interface Input {
			Name: "Input";
			Value: 100;
			EnumType: EnumType<Enum.RenderPriority>;
		}

		export const Input: Input;

		export interface Camera {
			Name: "Camera";
			Value: 200;
			EnumType: EnumType<Enum.RenderPriority>;
		}

		export const Camera: Camera;

		export interface Character {
			Name: "Character";
			Value: 300;
			EnumType: EnumType<Enum.RenderPriority>;
		}

		export const Character: Character;

		export interface Last {
			Name: "Last";
			Value: 2000;
			EnumType: EnumType<Enum.RenderPriority>;
		}

		export const Last: Last;

		export function GetEnumItems(this: {}): Array<RenderPriority>
	}
	export type RenderPriority = RenderPriority.First | RenderPriority.Input | RenderPriority.Camera | RenderPriority.Character | RenderPriority.Last;
	export namespace RenderingTestComparisonMethod {
		export interface psnr {
			Name: "psnr";
			Value: 0;
			EnumType: EnumType<Enum.RenderingTestComparisonMethod>;
		}

		export const psnr: psnr;

		export interface diff {
			Name: "diff";
			Value: 1;
			EnumType: EnumType<Enum.RenderingTestComparisonMethod>;
		}

		export const diff: diff;

		export function GetEnumItems(this: {}): Array<RenderingTestComparisonMethod>
	}
	export type RenderingTestComparisonMethod = RenderingTestComparisonMethod.psnr | RenderingTestComparisonMethod.diff;
	export namespace ReverbType {
		export interface NoReverb {
			Name: "NoReverb";
			Value: 0;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const NoReverb: NoReverb;

		export interface GenericReverb {
			Name: "GenericReverb";
			Value: 1;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const GenericReverb: GenericReverb;

		export interface PaddedCell {
			Name: "PaddedCell";
			Value: 2;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const PaddedCell: PaddedCell;

		export interface Room {
			Name: "Room";
			Value: 3;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const Room: Room;

		export interface Bathroom {
			Name: "Bathroom";
			Value: 4;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const Bathroom: Bathroom;

		export interface LivingRoom {
			Name: "LivingRoom";
			Value: 5;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const LivingRoom: LivingRoom;

		export interface StoneRoom {
			Name: "StoneRoom";
			Value: 6;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const StoneRoom: StoneRoom;

		export interface Auditorium {
			Name: "Auditorium";
			Value: 7;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const Auditorium: Auditorium;

		export interface ConcertHall {
			Name: "ConcertHall";
			Value: 8;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const ConcertHall: ConcertHall;

		export interface Cave {
			Name: "Cave";
			Value: 9;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const Cave: Cave;

		export interface Arena {
			Name: "Arena";
			Value: 10;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const Arena: Arena;

		export interface Hangar {
			Name: "Hangar";
			Value: 11;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const Hangar: Hangar;

		export interface CarpettedHallway {
			Name: "CarpettedHallway";
			Value: 12;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const CarpettedHallway: CarpettedHallway;

		export interface Hallway {
			Name: "Hallway";
			Value: 13;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const Hallway: Hallway;

		export interface StoneCorridor {
			Name: "StoneCorridor";
			Value: 14;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const StoneCorridor: StoneCorridor;

		export interface Alley {
			Name: "Alley";
			Value: 15;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const Alley: Alley;

		export interface Forest {
			Name: "Forest";
			Value: 16;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const Forest: Forest;

		export interface City {
			Name: "City";
			Value: 17;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const City: City;

		export interface Mountains {
			Name: "Mountains";
			Value: 18;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const Mountains: Mountains;

		export interface Quarry {
			Name: "Quarry";
			Value: 19;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const Quarry: Quarry;

		export interface Plain {
			Name: "Plain";
			Value: 20;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const Plain: Plain;

		export interface ParkingLot {
			Name: "ParkingLot";
			Value: 21;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const ParkingLot: ParkingLot;

		export interface SewerPipe {
			Name: "SewerPipe";
			Value: 22;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const SewerPipe: SewerPipe;

		export interface UnderWater {
			Name: "UnderWater";
			Value: 23;
			EnumType: EnumType<Enum.ReverbType>;
		}

		export const UnderWater: UnderWater;

		export function GetEnumItems(this: {}): Array<ReverbType>
	}
	export type ReverbType = ReverbType.NoReverb | ReverbType.GenericReverb | ReverbType.PaddedCell | ReverbType.Room | ReverbType.Bathroom | ReverbType.LivingRoom | ReverbType.StoneRoom | ReverbType.Auditorium | ReverbType.ConcertHall | ReverbType.Cave | ReverbType.Arena | ReverbType.Hangar | ReverbType.CarpettedHallway | ReverbType.Hallway | ReverbType.StoneCorridor | ReverbType.Alley | ReverbType.Forest | ReverbType.City | ReverbType.Mountains | ReverbType.Quarry | ReverbType.Plain | ReverbType.ParkingLot | ReverbType.SewerPipe | ReverbType.UnderWater;
	export namespace RibbonTool {
		export interface Select {
			Name: "Select";
			Value: 0;
			EnumType: EnumType<Enum.RibbonTool>;
		}

		export const Select: Select;

		export interface Scale {
			Name: "Scale";
			Value: 1;
			EnumType: EnumType<Enum.RibbonTool>;
		}

		export const Scale: Scale;

		export interface Rotate {
			Name: "Rotate";
			Value: 2;
			EnumType: EnumType<Enum.RibbonTool>;
		}

		export const Rotate: Rotate;

		export interface Move {
			Name: "Move";
			Value: 3;
			EnumType: EnumType<Enum.RibbonTool>;
		}

		export const Move: Move;

		export interface Transform {
			Name: "Transform";
			Value: 4;
			EnumType: EnumType<Enum.RibbonTool>;
		}

		export const Transform: Transform;

		export interface ColorPicker {
			Name: "ColorPicker";
			Value: 5;
			EnumType: EnumType<Enum.RibbonTool>;
		}

		export const ColorPicker: ColorPicker;

		export interface MaterialPicker {
			Name: "MaterialPicker";
			Value: 6;
			EnumType: EnumType<Enum.RibbonTool>;
		}

		export const MaterialPicker: MaterialPicker;

		export interface Group {
			Name: "Group";
			Value: 7;
			EnumType: EnumType<Enum.RibbonTool>;
		}

		export const Group: Group;

		export interface Ungroup {
			Name: "Ungroup";
			Value: 8;
			EnumType: EnumType<Enum.RibbonTool>;
		}

		export const Ungroup: Ungroup;

		export interface None {
			Name: "None";
			Value: 9;
			EnumType: EnumType<Enum.RibbonTool>;
		}

		export const None: None;

		export function GetEnumItems(this: {}): Array<RibbonTool>
	}
	export type RibbonTool = RibbonTool.Select | RibbonTool.Scale | RibbonTool.Rotate | RibbonTool.Move | RibbonTool.Transform | RibbonTool.ColorPicker | RibbonTool.MaterialPicker | RibbonTool.Group | RibbonTool.Ungroup | RibbonTool.None;
	export namespace RollOffMode {
		export interface Inverse {
			Name: "Inverse";
			Value: 0;
			EnumType: EnumType<Enum.RollOffMode>;
		}

		export const Inverse: Inverse;

		export interface Linear {
			Name: "Linear";
			Value: 1;
			EnumType: EnumType<Enum.RollOffMode>;
		}

		export const Linear: Linear;

		export interface InverseTapered {
			Name: "InverseTapered";
			Value: 3;
			EnumType: EnumType<Enum.RollOffMode>;
		}

		export const InverseTapered: InverseTapered;

		export interface LinearSquare {
			Name: "LinearSquare";
			Value: 2;
			EnumType: EnumType<Enum.RollOffMode>;
		}

		export const LinearSquare: LinearSquare;

		export function GetEnumItems(this: {}): Array<RollOffMode>
	}
	export type RollOffMode = RollOffMode.Inverse | RollOffMode.Linear | RollOffMode.InverseTapered | RollOffMode.LinearSquare;
	export namespace RotationType {
		export interface MovementRelative {
			Name: "MovementRelative";
			Value: 0;
			EnumType: EnumType<Enum.RotationType>;
		}

		export const MovementRelative: MovementRelative;

		export interface CameraRelative {
			Name: "CameraRelative";
			Value: 1;
			EnumType: EnumType<Enum.RotationType>;
		}

		export const CameraRelative: CameraRelative;

		export function GetEnumItems(this: {}): Array<RotationType>
	}
	export type RotationType = RotationType.MovementRelative | RotationType.CameraRelative;
	export namespace RuntimeUndoBehavior {
		export interface Aggregate {
			Name: "Aggregate";
			Value: 0;
			EnumType: EnumType<Enum.RuntimeUndoBehavior>;
		}

		export const Aggregate: Aggregate;

		export interface Snapshot {
			Name: "Snapshot";
			Value: 1;
			EnumType: EnumType<Enum.RuntimeUndoBehavior>;
		}

		export const Snapshot: Snapshot;

		export interface Hybrid {
			Name: "Hybrid";
			Value: 2;
			EnumType: EnumType<Enum.RuntimeUndoBehavior>;
		}

		export const Hybrid: Hybrid;

		export function GetEnumItems(this: {}): Array<RuntimeUndoBehavior>
	}
	export type RuntimeUndoBehavior = RuntimeUndoBehavior.Aggregate | RuntimeUndoBehavior.Snapshot | RuntimeUndoBehavior.Hybrid;
	export namespace SaveFilter {
		export interface SaveAll {
			Name: "SaveAll";
			Value: 2;
			EnumType: EnumType<Enum.SaveFilter>;
		}

		export const SaveAll: SaveAll;

		export interface SaveWorld {
			Name: "SaveWorld";
			Value: 0;
			EnumType: EnumType<Enum.SaveFilter>;
		}

		export const SaveWorld: SaveWorld;

		export interface SaveGame {
			Name: "SaveGame";
			Value: 1;
			EnumType: EnumType<Enum.SaveFilter>;
		}

		export const SaveGame: SaveGame;

		export function GetEnumItems(this: {}): Array<SaveFilter>
	}
	export type SaveFilter = SaveFilter.SaveAll | SaveFilter.SaveWorld | SaveFilter.SaveGame;
	export namespace SavedQualitySetting {
		export interface Automatic {
			Name: "Automatic";
			Value: 0;
			EnumType: EnumType<Enum.SavedQualitySetting>;
		}

		export const Automatic: Automatic;

		export interface QualityLevel1 {
			Name: "QualityLevel1";
			Value: 1;
			EnumType: EnumType<Enum.SavedQualitySetting>;
		}

		export const QualityLevel1: QualityLevel1;

		export interface QualityLevel2 {
			Name: "QualityLevel2";
			Value: 2;
			EnumType: EnumType<Enum.SavedQualitySetting>;
		}

		export const QualityLevel2: QualityLevel2;

		export interface QualityLevel3 {
			Name: "QualityLevel3";
			Value: 3;
			EnumType: EnumType<Enum.SavedQualitySetting>;
		}

		export const QualityLevel3: QualityLevel3;

		export interface QualityLevel4 {
			Name: "QualityLevel4";
			Value: 4;
			EnumType: EnumType<Enum.SavedQualitySetting>;
		}

		export const QualityLevel4: QualityLevel4;

		export interface QualityLevel5 {
			Name: "QualityLevel5";
			Value: 5;
			EnumType: EnumType<Enum.SavedQualitySetting>;
		}

		export const QualityLevel5: QualityLevel5;

		export interface QualityLevel6 {
			Name: "QualityLevel6";
			Value: 6;
			EnumType: EnumType<Enum.SavedQualitySetting>;
		}

		export const QualityLevel6: QualityLevel6;

		export interface QualityLevel7 {
			Name: "QualityLevel7";
			Value: 7;
			EnumType: EnumType<Enum.SavedQualitySetting>;
		}

		export const QualityLevel7: QualityLevel7;

		export interface QualityLevel8 {
			Name: "QualityLevel8";
			Value: 8;
			EnumType: EnumType<Enum.SavedQualitySetting>;
		}

		export const QualityLevel8: QualityLevel8;

		export interface QualityLevel9 {
			Name: "QualityLevel9";
			Value: 9;
			EnumType: EnumType<Enum.SavedQualitySetting>;
		}

		export const QualityLevel9: QualityLevel9;

		export interface QualityLevel10 {
			Name: "QualityLevel10";
			Value: 10;
			EnumType: EnumType<Enum.SavedQualitySetting>;
		}

		export const QualityLevel10: QualityLevel10;

		export function GetEnumItems(this: {}): Array<SavedQualitySetting>
	}
	export type SavedQualitySetting = SavedQualitySetting.Automatic | SavedQualitySetting.QualityLevel1 | SavedQualitySetting.QualityLevel2 | SavedQualitySetting.QualityLevel3 | SavedQualitySetting.QualityLevel4 | SavedQualitySetting.QualityLevel5 | SavedQualitySetting.QualityLevel6 | SavedQualitySetting.QualityLevel7 | SavedQualitySetting.QualityLevel8 | SavedQualitySetting.QualityLevel9 | SavedQualitySetting.QualityLevel10;
	export namespace ScaleType {
		export interface Stretch {
			Name: "Stretch";
			Value: 0;
			EnumType: EnumType<Enum.ScaleType>;
		}

		export const Stretch: Stretch;

		export interface Slice {
			Name: "Slice";
			Value: 1;
			EnumType: EnumType<Enum.ScaleType>;
		}

		export const Slice: Slice;

		export interface Tile {
			Name: "Tile";
			Value: 2;
			EnumType: EnumType<Enum.ScaleType>;
		}

		export const Tile: Tile;

		export interface Fit {
			Name: "Fit";
			Value: 3;
			EnumType: EnumType<Enum.ScaleType>;
		}

		export const Fit: Fit;

		export interface Crop {
			Name: "Crop";
			Value: 4;
			EnumType: EnumType<Enum.ScaleType>;
		}

		export const Crop: Crop;

		export function GetEnumItems(this: {}): Array<ScaleType>
	}
	export type ScaleType = ScaleType.Stretch | ScaleType.Slice | ScaleType.Tile | ScaleType.Fit | ScaleType.Crop;
	export namespace ScreenOrientation {
		export interface LandscapeLeft {
			Name: "LandscapeLeft";
			Value: 0;
			EnumType: EnumType<Enum.ScreenOrientation>;
		}

		export const LandscapeLeft: LandscapeLeft;

		export interface LandscapeRight {
			Name: "LandscapeRight";
			Value: 1;
			EnumType: EnumType<Enum.ScreenOrientation>;
		}

		export const LandscapeRight: LandscapeRight;

		export interface LandscapeSensor {
			Name: "LandscapeSensor";
			Value: 2;
			EnumType: EnumType<Enum.ScreenOrientation>;
		}

		export const LandscapeSensor: LandscapeSensor;

		export interface Portrait {
			Name: "Portrait";
			Value: 3;
			EnumType: EnumType<Enum.ScreenOrientation>;
		}

		export const Portrait: Portrait;

		export interface Sensor {
			Name: "Sensor";
			Value: 4;
			EnumType: EnumType<Enum.ScreenOrientation>;
		}

		export const Sensor: Sensor;

		export function GetEnumItems(this: {}): Array<ScreenOrientation>
	}
	export type ScreenOrientation = ScreenOrientation.LandscapeLeft | ScreenOrientation.LandscapeRight | ScreenOrientation.LandscapeSensor | ScreenOrientation.Portrait | ScreenOrientation.Sensor;
	export namespace ScrollBarInset {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<Enum.ScrollBarInset>;
		}

		export const None: None;

		export interface ScrollBar {
			Name: "ScrollBar";
			Value: 1;
			EnumType: EnumType<Enum.ScrollBarInset>;
		}

		export const ScrollBar: ScrollBar;

		export interface Always {
			Name: "Always";
			Value: 2;
			EnumType: EnumType<Enum.ScrollBarInset>;
		}

		export const Always: Always;

		export function GetEnumItems(this: {}): Array<ScrollBarInset>
	}
	export type ScrollBarInset = ScrollBarInset.None | ScrollBarInset.ScrollBar | ScrollBarInset.Always;
	export namespace ScrollingDirection {
		export interface X {
			Name: "X";
			Value: 1;
			EnumType: EnumType<Enum.ScrollingDirection>;
		}

		export const X: X;

		export interface Y {
			Name: "Y";
			Value: 2;
			EnumType: EnumType<Enum.ScrollingDirection>;
		}

		export const Y: Y;

		export interface XY {
			Name: "XY";
			Value: 4;
			EnumType: EnumType<Enum.ScrollingDirection>;
		}

		export const XY: XY;

		export function GetEnumItems(this: {}): Array<ScrollingDirection>
	}
	export type ScrollingDirection = ScrollingDirection.X | ScrollingDirection.Y | ScrollingDirection.XY;
	export namespace ServerAudioBehavior {
		export interface Enabled {
			Name: "Enabled";
			Value: 0;
			EnumType: EnumType<Enum.ServerAudioBehavior>;
		}

		export const Enabled: Enabled;

		export interface Muted {
			Name: "Muted";
			Value: 1;
			EnumType: EnumType<Enum.ServerAudioBehavior>;
		}

		export const Muted: Muted;

		export interface OnlineGame {
			Name: "OnlineGame";
			Value: 2;
			EnumType: EnumType<Enum.ServerAudioBehavior>;
		}

		export const OnlineGame: OnlineGame;

		export function GetEnumItems(this: {}): Array<ServerAudioBehavior>
	}
	export type ServerAudioBehavior = ServerAudioBehavior.Enabled | ServerAudioBehavior.Muted | ServerAudioBehavior.OnlineGame;
	export namespace SizeConstraint {
		export interface RelativeXY {
			Name: "RelativeXY";
			Value: 0;
			EnumType: EnumType<Enum.SizeConstraint>;
		}

		export const RelativeXY: RelativeXY;

		export interface RelativeXX {
			Name: "RelativeXX";
			Value: 1;
			EnumType: EnumType<Enum.SizeConstraint>;
		}

		export const RelativeXX: RelativeXX;

		export interface RelativeYY {
			Name: "RelativeYY";
			Value: 2;
			EnumType: EnumType<Enum.SizeConstraint>;
		}

		export const RelativeYY: RelativeYY;

		export function GetEnumItems(this: {}): Array<SizeConstraint>
	}
	export type SizeConstraint = SizeConstraint.RelativeXY | SizeConstraint.RelativeXX | SizeConstraint.RelativeYY;
	export namespace SortOrder {
		export interface LayoutOrder {
			Name: "LayoutOrder";
			Value: 2;
			EnumType: EnumType<Enum.SortOrder>;
		}

		export const LayoutOrder: LayoutOrder;

		export interface Name {
			Name: "Name";
			Value: 0;
			EnumType: EnumType<Enum.SortOrder>;
		}

		export const Name: Name;

		export interface Custom {
			Name: "Custom";
			Value: 1;
			EnumType: EnumType<Enum.SortOrder>;
		}

		export const Custom: Custom;

		export function GetEnumItems(this: {}): Array<SortOrder>
	}
	export type SortOrder = SortOrder.LayoutOrder | SortOrder.Name | SortOrder.Custom;
	export namespace SoundType {
		export interface NoSound {
			Name: "NoSound";
			Value: 0;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const NoSound: NoSound;

		export interface Boing {
			Name: "Boing";
			Value: 1;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Boing: Boing;

		export interface Bomb {
			Name: "Bomb";
			Value: 2;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Bomb: Bomb;

		export interface Break {
			Name: "Break";
			Value: 3;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Break: Break;

		export interface Click {
			Name: "Click";
			Value: 4;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Click: Click;

		export interface Clock {
			Name: "Clock";
			Value: 5;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Clock: Clock;

		export interface Slingshot {
			Name: "Slingshot";
			Value: 6;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Slingshot: Slingshot;

		export interface Page {
			Name: "Page";
			Value: 7;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Page: Page;

		export interface Ping {
			Name: "Ping";
			Value: 8;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Ping: Ping;

		export interface Snap {
			Name: "Snap";
			Value: 9;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Snap: Snap;

		export interface Splat {
			Name: "Splat";
			Value: 10;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Splat: Splat;

		export interface Step {
			Name: "Step";
			Value: 11;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Step: Step;

		export interface StepOn {
			Name: "StepOn";
			Value: 12;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const StepOn: StepOn;

		export interface Swoosh {
			Name: "Swoosh";
			Value: 13;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Swoosh: Swoosh;

		export interface Victory {
			Name: "Victory";
			Value: 14;
			EnumType: EnumType<Enum.SoundType>;
		}

		export const Victory: Victory;

		export function GetEnumItems(this: {}): Array<SoundType>
	}
	export type SoundType = SoundType.NoSound | SoundType.Boing | SoundType.Bomb | SoundType.Break | SoundType.Click | SoundType.Clock | SoundType.Slingshot | SoundType.Page | SoundType.Ping | SoundType.Snap | SoundType.Splat | SoundType.Step | SoundType.StepOn | SoundType.Swoosh | SoundType.Victory;
	export namespace SpecialKey {
		export interface Insert {
			Name: "Insert";
			Value: 0;
			EnumType: EnumType<Enum.SpecialKey>;
		}

		export const Insert: Insert;

		export interface Home {
			Name: "Home";
			Value: 1;
			EnumType: EnumType<Enum.SpecialKey>;
		}

		export const Home: Home;

		export interface End {
			Name: "End";
			Value: 2;
			EnumType: EnumType<Enum.SpecialKey>;
		}

		export const End: End;

		export interface PageUp {
			Name: "PageUp";
			Value: 3;
			EnumType: EnumType<Enum.SpecialKey>;
		}

		export const PageUp: PageUp;

		export interface PageDown {
			Name: "PageDown";
			Value: 4;
			EnumType: EnumType<Enum.SpecialKey>;
		}

		export const PageDown: PageDown;

		export interface ChatHotkey {
			Name: "ChatHotkey";
			Value: 5;
			EnumType: EnumType<Enum.SpecialKey>;
		}

		export const ChatHotkey: ChatHotkey;

		export function GetEnumItems(this: {}): Array<SpecialKey>
	}
	export type SpecialKey = SpecialKey.Insert | SpecialKey.Home | SpecialKey.End | SpecialKey.PageUp | SpecialKey.PageDown | SpecialKey.ChatHotkey;
	export namespace StartCorner {
		export interface TopLeft {
			Name: "TopLeft";
			Value: 0;
			EnumType: EnumType<Enum.StartCorner>;
		}

		export const TopLeft: TopLeft;

		export interface TopRight {
			Name: "TopRight";
			Value: 1;
			EnumType: EnumType<Enum.StartCorner>;
		}

		export const TopRight: TopRight;

		export interface BottomLeft {
			Name: "BottomLeft";
			Value: 2;
			EnumType: EnumType<Enum.StartCorner>;
		}

		export const BottomLeft: BottomLeft;

		export interface BottomRight {
			Name: "BottomRight";
			Value: 3;
			EnumType: EnumType<Enum.StartCorner>;
		}

		export const BottomRight: BottomRight;

		export function GetEnumItems(this: {}): Array<StartCorner>
	}
	export type StartCorner = StartCorner.TopLeft | StartCorner.TopRight | StartCorner.BottomLeft | StartCorner.BottomRight;
	export namespace Status {
		export interface Poison {
			Name: "Poison";
			Value: 0;
			EnumType: EnumType<Enum.Status>;
		}

		export const Poison: Poison;

		export interface Confusion {
			Name: "Confusion";
			Value: 1;
			EnumType: EnumType<Enum.Status>;
		}

		export const Confusion: Confusion;

		export function GetEnumItems(this: {}): Array<Status>
	}
	export type Status = Status.Poison | Status.Confusion;
	export namespace StreamingPauseMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.StreamingPauseMode>;
		}

		export const Default: Default;

		export interface Disabled {
			Name: "Disabled";
			Value: 1;
			EnumType: EnumType<Enum.StreamingPauseMode>;
		}

		export const Disabled: Disabled;

		export interface ClientPhysicsPause {
			Name: "ClientPhysicsPause";
			Value: 2;
			EnumType: EnumType<Enum.StreamingPauseMode>;
		}

		export const ClientPhysicsPause: ClientPhysicsPause;

		export function GetEnumItems(this: {}): Array<StreamingPauseMode>
	}
	export type StreamingPauseMode = StreamingPauseMode.Default | StreamingPauseMode.Disabled | StreamingPauseMode.ClientPhysicsPause;
	export namespace StudioStyleGuideColor {
		export interface MainBackground {
			Name: "MainBackground";
			Value: 0;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const MainBackground: MainBackground;

		export interface Titlebar {
			Name: "Titlebar";
			Value: 1;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Titlebar: Titlebar;

		export interface Dropdown {
			Name: "Dropdown";
			Value: 2;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Dropdown: Dropdown;

		export interface Tooltip {
			Name: "Tooltip";
			Value: 3;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Tooltip: Tooltip;

		export interface Notification {
			Name: "Notification";
			Value: 4;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Notification: Notification;

		export interface ScrollBar {
			Name: "ScrollBar";
			Value: 5;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScrollBar: ScrollBar;

		export interface ScrollBarBackground {
			Name: "ScrollBarBackground";
			Value: 6;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScrollBarBackground: ScrollBarBackground;

		export interface TabBar {
			Name: "TabBar";
			Value: 7;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const TabBar: TabBar;

		export interface Tab {
			Name: "Tab";
			Value: 8;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Tab: Tab;

		export interface RibbonTab {
			Name: "RibbonTab";
			Value: 9;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const RibbonTab: RibbonTab;

		export interface RibbonTabTopBar {
			Name: "RibbonTabTopBar";
			Value: 10;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const RibbonTabTopBar: RibbonTabTopBar;

		export interface Button {
			Name: "Button";
			Value: 11;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Button: Button;

		export interface MainButton {
			Name: "MainButton";
			Value: 12;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const MainButton: MainButton;

		export interface RibbonButton {
			Name: "RibbonButton";
			Value: 13;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const RibbonButton: RibbonButton;

		export interface ViewPortBackground {
			Name: "ViewPortBackground";
			Value: 14;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ViewPortBackground: ViewPortBackground;

		export interface InputFieldBackground {
			Name: "InputFieldBackground";
			Value: 15;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const InputFieldBackground: InputFieldBackground;

		export interface Item {
			Name: "Item";
			Value: 16;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Item: Item;

		export interface TableItem {
			Name: "TableItem";
			Value: 17;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const TableItem: TableItem;

		export interface CategoryItem {
			Name: "CategoryItem";
			Value: 18;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const CategoryItem: CategoryItem;

		export interface GameSettingsTableItem {
			Name: "GameSettingsTableItem";
			Value: 19;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const GameSettingsTableItem: GameSettingsTableItem;

		export interface GameSettingsTooltip {
			Name: "GameSettingsTooltip";
			Value: 20;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const GameSettingsTooltip: GameSettingsTooltip;

		export interface EmulatorBar {
			Name: "EmulatorBar";
			Value: 21;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const EmulatorBar: EmulatorBar;

		export interface EmulatorDropDown {
			Name: "EmulatorDropDown";
			Value: 22;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const EmulatorDropDown: EmulatorDropDown;

		export interface ColorPickerFrame {
			Name: "ColorPickerFrame";
			Value: 23;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ColorPickerFrame: ColorPickerFrame;

		export interface CurrentMarker {
			Name: "CurrentMarker";
			Value: 24;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const CurrentMarker: CurrentMarker;

		export interface Border {
			Name: "Border";
			Value: 25;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Border: Border;

		export interface Shadow {
			Name: "Shadow";
			Value: 26;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Shadow: Shadow;

		export interface Light {
			Name: "Light";
			Value: 27;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Light: Light;

		export interface Dark {
			Name: "Dark";
			Value: 28;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Dark: Dark;

		export interface Mid {
			Name: "Mid";
			Value: 29;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Mid: Mid;

		export interface MainText {
			Name: "MainText";
			Value: 30;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const MainText: MainText;

		export interface SubText {
			Name: "SubText";
			Value: 31;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const SubText: SubText;

		export interface TitlebarText {
			Name: "TitlebarText";
			Value: 32;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const TitlebarText: TitlebarText;

		export interface BrightText {
			Name: "BrightText";
			Value: 33;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const BrightText: BrightText;

		export interface DimmedText {
			Name: "DimmedText";
			Value: 34;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DimmedText: DimmedText;

		export interface LinkText {
			Name: "LinkText";
			Value: 35;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const LinkText: LinkText;

		export interface WarningText {
			Name: "WarningText";
			Value: 36;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const WarningText: WarningText;

		export interface ErrorText {
			Name: "ErrorText";
			Value: 37;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ErrorText: ErrorText;

		export interface InfoText {
			Name: "InfoText";
			Value: 38;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const InfoText: InfoText;

		export interface SensitiveText {
			Name: "SensitiveText";
			Value: 39;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const SensitiveText: SensitiveText;

		export interface ScriptSideWidget {
			Name: "ScriptSideWidget";
			Value: 40;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptSideWidget: ScriptSideWidget;

		export interface ScriptBackground {
			Name: "ScriptBackground";
			Value: 41;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptBackground: ScriptBackground;

		export interface ScriptText {
			Name: "ScriptText";
			Value: 42;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptText: ScriptText;

		export interface ScriptSelectionText {
			Name: "ScriptSelectionText";
			Value: 43;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptSelectionText: ScriptSelectionText;

		export interface ScriptSelectionBackground {
			Name: "ScriptSelectionBackground";
			Value: 44;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptSelectionBackground: ScriptSelectionBackground;

		export interface ScriptFindSelectionBackground {
			Name: "ScriptFindSelectionBackground";
			Value: 45;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptFindSelectionBackground: ScriptFindSelectionBackground;

		export interface ScriptMatchingWordSelectionBackground {
			Name: "ScriptMatchingWordSelectionBackground";
			Value: 46;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptMatchingWordSelectionBackground: ScriptMatchingWordSelectionBackground;

		export interface ScriptOperator {
			Name: "ScriptOperator";
			Value: 47;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptOperator: ScriptOperator;

		export interface ScriptNumber {
			Name: "ScriptNumber";
			Value: 48;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptNumber: ScriptNumber;

		export interface ScriptString {
			Name: "ScriptString";
			Value: 49;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptString: ScriptString;

		export interface ScriptComment {
			Name: "ScriptComment";
			Value: 50;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptComment: ScriptComment;

		export interface ScriptPreprocessor {
			Name: "ScriptPreprocessor";
			Value: 51;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptPreprocessor: ScriptPreprocessor;

		export interface ScriptKeyword {
			Name: "ScriptKeyword";
			Value: 52;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptKeyword: ScriptKeyword;

		export interface ScriptBuiltInFunction {
			Name: "ScriptBuiltInFunction";
			Value: 53;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptBuiltInFunction: ScriptBuiltInFunction;

		export interface ScriptWarning {
			Name: "ScriptWarning";
			Value: 54;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptWarning: ScriptWarning;

		export interface ScriptError {
			Name: "ScriptError";
			Value: 55;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ScriptError: ScriptError;

		export interface DebuggerCurrentLine {
			Name: "DebuggerCurrentLine";
			Value: 56;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DebuggerCurrentLine: DebuggerCurrentLine;

		export interface DebuggerErrorLine {
			Name: "DebuggerErrorLine";
			Value: 57;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DebuggerErrorLine: DebuggerErrorLine;

		export interface DiffFilePathText {
			Name: "DiffFilePathText";
			Value: 58;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffFilePathText: DiffFilePathText;

		export interface DiffTextHunkInfo {
			Name: "DiffTextHunkInfo";
			Value: 59;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffTextHunkInfo: DiffTextHunkInfo;

		export interface DiffTextNoChange {
			Name: "DiffTextNoChange";
			Value: 60;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffTextNoChange: DiffTextNoChange;

		export interface DiffTextAddition {
			Name: "DiffTextAddition";
			Value: 61;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffTextAddition: DiffTextAddition;

		export interface DiffTextDeletion {
			Name: "DiffTextDeletion";
			Value: 62;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffTextDeletion: DiffTextDeletion;

		export interface DiffTextSeparatorBackground {
			Name: "DiffTextSeparatorBackground";
			Value: 63;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffTextSeparatorBackground: DiffTextSeparatorBackground;

		export interface DiffTextNoChangeBackground {
			Name: "DiffTextNoChangeBackground";
			Value: 64;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffTextNoChangeBackground: DiffTextNoChangeBackground;

		export interface DiffTextAdditionBackground {
			Name: "DiffTextAdditionBackground";
			Value: 65;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffTextAdditionBackground: DiffTextAdditionBackground;

		export interface DiffTextDeletionBackground {
			Name: "DiffTextDeletionBackground";
			Value: 66;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffTextDeletionBackground: DiffTextDeletionBackground;

		export interface DiffLineNum {
			Name: "DiffLineNum";
			Value: 67;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffLineNum: DiffLineNum;

		export interface DiffLineNumSeparatorBackground {
			Name: "DiffLineNumSeparatorBackground";
			Value: 68;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffLineNumSeparatorBackground: DiffLineNumSeparatorBackground;

		export interface DiffLineNumNoChangeBackground {
			Name: "DiffLineNumNoChangeBackground";
			Value: 69;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffLineNumNoChangeBackground: DiffLineNumNoChangeBackground;

		export interface DiffLineNumAdditionBackground {
			Name: "DiffLineNumAdditionBackground";
			Value: 70;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffLineNumAdditionBackground: DiffLineNumAdditionBackground;

		export interface DiffLineNumDeletionBackground {
			Name: "DiffLineNumDeletionBackground";
			Value: 71;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffLineNumDeletionBackground: DiffLineNumDeletionBackground;

		export interface DiffFilePathBackground {
			Name: "DiffFilePathBackground";
			Value: 72;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffFilePathBackground: DiffFilePathBackground;

		export interface DiffFilePathBorder {
			Name: "DiffFilePathBorder";
			Value: 73;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DiffFilePathBorder: DiffFilePathBorder;

		export interface Separator {
			Name: "Separator";
			Value: 74;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Separator: Separator;

		export interface ButtonBorder {
			Name: "ButtonBorder";
			Value: 75;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ButtonBorder: ButtonBorder;

		export interface ButtonText {
			Name: "ButtonText";
			Value: 76;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const ButtonText: ButtonText;

		export interface InputFieldBorder {
			Name: "InputFieldBorder";
			Value: 77;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const InputFieldBorder: InputFieldBorder;

		export interface CheckedFieldBackground {
			Name: "CheckedFieldBackground";
			Value: 78;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const CheckedFieldBackground: CheckedFieldBackground;

		export interface CheckedFieldBorder {
			Name: "CheckedFieldBorder";
			Value: 79;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const CheckedFieldBorder: CheckedFieldBorder;

		export interface CheckedFieldIndicator {
			Name: "CheckedFieldIndicator";
			Value: 80;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const CheckedFieldIndicator: CheckedFieldIndicator;

		export interface HeaderSection {
			Name: "HeaderSection";
			Value: 81;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const HeaderSection: HeaderSection;

		export interface Midlight {
			Name: "Midlight";
			Value: 82;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const Midlight: Midlight;

		export interface StatusBar {
			Name: "StatusBar";
			Value: 83;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const StatusBar: StatusBar;

		export interface DialogButton {
			Name: "DialogButton";
			Value: 84;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DialogButton: DialogButton;

		export interface DialogButtonText {
			Name: "DialogButtonText";
			Value: 85;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DialogButtonText: DialogButtonText;

		export interface DialogButtonBorder {
			Name: "DialogButtonBorder";
			Value: 86;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DialogButtonBorder: DialogButtonBorder;

		export interface DialogMainButton {
			Name: "DialogMainButton";
			Value: 87;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DialogMainButton: DialogMainButton;

		export interface DialogMainButtonText {
			Name: "DialogMainButtonText";
			Value: 88;
			EnumType: EnumType<Enum.StudioStyleGuideColor>;
		}

		export const DialogMainButtonText: DialogMainButtonText;

		export function GetEnumItems(this: {}): Array<StudioStyleGuideColor>
	}
	export type StudioStyleGuideColor = StudioStyleGuideColor.MainBackground | StudioStyleGuideColor.Titlebar | StudioStyleGuideColor.Dropdown | StudioStyleGuideColor.Tooltip | StudioStyleGuideColor.Notification | StudioStyleGuideColor.ScrollBar | StudioStyleGuideColor.ScrollBarBackground | StudioStyleGuideColor.TabBar | StudioStyleGuideColor.Tab | StudioStyleGuideColor.RibbonTab | StudioStyleGuideColor.RibbonTabTopBar | StudioStyleGuideColor.Button | StudioStyleGuideColor.MainButton | StudioStyleGuideColor.RibbonButton | StudioStyleGuideColor.ViewPortBackground | StudioStyleGuideColor.InputFieldBackground | StudioStyleGuideColor.Item | StudioStyleGuideColor.TableItem | StudioStyleGuideColor.CategoryItem | StudioStyleGuideColor.GameSettingsTableItem | StudioStyleGuideColor.GameSettingsTooltip | StudioStyleGuideColor.EmulatorBar | StudioStyleGuideColor.EmulatorDropDown | StudioStyleGuideColor.ColorPickerFrame | StudioStyleGuideColor.CurrentMarker | StudioStyleGuideColor.Border | StudioStyleGuideColor.Shadow | StudioStyleGuideColor.Light | StudioStyleGuideColor.Dark | StudioStyleGuideColor.Mid | StudioStyleGuideColor.MainText | StudioStyleGuideColor.SubText | StudioStyleGuideColor.TitlebarText | StudioStyleGuideColor.BrightText | StudioStyleGuideColor.DimmedText | StudioStyleGuideColor.LinkText | StudioStyleGuideColor.WarningText | StudioStyleGuideColor.ErrorText | StudioStyleGuideColor.InfoText | StudioStyleGuideColor.SensitiveText | StudioStyleGuideColor.ScriptSideWidget | StudioStyleGuideColor.ScriptBackground | StudioStyleGuideColor.ScriptText | StudioStyleGuideColor.ScriptSelectionText | StudioStyleGuideColor.ScriptSelectionBackground | StudioStyleGuideColor.ScriptFindSelectionBackground | StudioStyleGuideColor.ScriptMatchingWordSelectionBackground | StudioStyleGuideColor.ScriptOperator | StudioStyleGuideColor.ScriptNumber | StudioStyleGuideColor.ScriptString | StudioStyleGuideColor.ScriptComment | StudioStyleGuideColor.ScriptPreprocessor | StudioStyleGuideColor.ScriptKeyword | StudioStyleGuideColor.ScriptBuiltInFunction | StudioStyleGuideColor.ScriptWarning | StudioStyleGuideColor.ScriptError | StudioStyleGuideColor.DebuggerCurrentLine | StudioStyleGuideColor.DebuggerErrorLine | StudioStyleGuideColor.DiffFilePathText | StudioStyleGuideColor.DiffTextHunkInfo | StudioStyleGuideColor.DiffTextNoChange | StudioStyleGuideColor.DiffTextAddition | StudioStyleGuideColor.DiffTextDeletion | StudioStyleGuideColor.DiffTextSeparatorBackground | StudioStyleGuideColor.DiffTextNoChangeBackground | StudioStyleGuideColor.DiffTextAdditionBackground | StudioStyleGuideColor.DiffTextDeletionBackground | StudioStyleGuideColor.DiffLineNum | StudioStyleGuideColor.DiffLineNumSeparatorBackground | StudioStyleGuideColor.DiffLineNumNoChangeBackground | StudioStyleGuideColor.DiffLineNumAdditionBackground | StudioStyleGuideColor.DiffLineNumDeletionBackground | StudioStyleGuideColor.DiffFilePathBackground | StudioStyleGuideColor.DiffFilePathBorder | StudioStyleGuideColor.Separator | StudioStyleGuideColor.ButtonBorder | StudioStyleGuideColor.ButtonText | StudioStyleGuideColor.InputFieldBorder | StudioStyleGuideColor.CheckedFieldBackground | StudioStyleGuideColor.CheckedFieldBorder | StudioStyleGuideColor.CheckedFieldIndicator | StudioStyleGuideColor.HeaderSection | StudioStyleGuideColor.Midlight | StudioStyleGuideColor.StatusBar | StudioStyleGuideColor.DialogButton | StudioStyleGuideColor.DialogButtonText | StudioStyleGuideColor.DialogButtonBorder | StudioStyleGuideColor.DialogMainButton | StudioStyleGuideColor.DialogMainButtonText;
	export namespace StudioStyleGuideModifier {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.StudioStyleGuideModifier>;
		}

		export const Default: Default;

		export interface Selected {
			Name: "Selected";
			Value: 1;
			EnumType: EnumType<Enum.StudioStyleGuideModifier>;
		}

		export const Selected: Selected;

		export interface Pressed {
			Name: "Pressed";
			Value: 2;
			EnumType: EnumType<Enum.StudioStyleGuideModifier>;
		}

		export const Pressed: Pressed;

		export interface Disabled {
			Name: "Disabled";
			Value: 3;
			EnumType: EnumType<Enum.StudioStyleGuideModifier>;
		}

		export const Disabled: Disabled;

		export interface Hover {
			Name: "Hover";
			Value: 4;
			EnumType: EnumType<Enum.StudioStyleGuideModifier>;
		}

		export const Hover: Hover;

		export function GetEnumItems(this: {}): Array<StudioStyleGuideModifier>
	}
	export type StudioStyleGuideModifier = StudioStyleGuideModifier.Default | StudioStyleGuideModifier.Selected | StudioStyleGuideModifier.Pressed | StudioStyleGuideModifier.Disabled | StudioStyleGuideModifier.Hover;
	export namespace Style {
		export interface AlternatingSupports {
			Name: "AlternatingSupports";
			Value: 0;
			EnumType: EnumType<Enum.Style>;
		}

		export const AlternatingSupports: AlternatingSupports;

		export interface BridgeStyleSupports {
			Name: "BridgeStyleSupports";
			Value: 1;
			EnumType: EnumType<Enum.Style>;
		}

		export const BridgeStyleSupports: BridgeStyleSupports;

		export interface NoSupports {
			Name: "NoSupports";
			Value: 2;
			EnumType: EnumType<Enum.Style>;
		}

		export const NoSupports: NoSupports;

		export function GetEnumItems(this: {}): Array<Style>
	}
	export type Style = Style.AlternatingSupports | Style.BridgeStyleSupports | Style.NoSupports;
	export namespace SurfaceConstraint {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<Enum.SurfaceConstraint>;
		}

		export const None: None;

		export interface Hinge {
			Name: "Hinge";
			Value: 1;
			EnumType: EnumType<Enum.SurfaceConstraint>;
		}

		export const Hinge: Hinge;

		export interface SteppingMotor {
			Name: "SteppingMotor";
			Value: 2;
			EnumType: EnumType<Enum.SurfaceConstraint>;
		}

		export const SteppingMotor: SteppingMotor;

		export interface Motor {
			Name: "Motor";
			Value: 3;
			EnumType: EnumType<Enum.SurfaceConstraint>;
		}

		export const Motor: Motor;

		export function GetEnumItems(this: {}): Array<SurfaceConstraint>
	}
	export type SurfaceConstraint = SurfaceConstraint.None | SurfaceConstraint.Hinge | SurfaceConstraint.SteppingMotor | SurfaceConstraint.Motor;
	export namespace SurfaceGuiSizingMode {
		export interface FixedSize {
			Name: "FixedSize";
			Value: 0;
			EnumType: EnumType<Enum.SurfaceGuiSizingMode>;
		}

		export const FixedSize: FixedSize;

		export interface PixelsPerStud {
			Name: "PixelsPerStud";
			Value: 1;
			EnumType: EnumType<Enum.SurfaceGuiSizingMode>;
		}

		export const PixelsPerStud: PixelsPerStud;

		export function GetEnumItems(this: {}): Array<SurfaceGuiSizingMode>
	}
	export type SurfaceGuiSizingMode = SurfaceGuiSizingMode.FixedSize | SurfaceGuiSizingMode.PixelsPerStud;
	export namespace SurfaceType {
		export interface Smooth {
			Name: "Smooth";
			Value: 0;
			EnumType: EnumType<Enum.SurfaceType>;
		}

		export const Smooth: Smooth;

		export interface Glue {
			Name: "Glue";
			Value: 1;
			EnumType: EnumType<Enum.SurfaceType>;
		}

		export const Glue: Glue;

		export interface Weld {
			Name: "Weld";
			Value: 2;
			EnumType: EnumType<Enum.SurfaceType>;
		}

		export const Weld: Weld;

		export interface Studs {
			Name: "Studs";
			Value: 3;
			EnumType: EnumType<Enum.SurfaceType>;
		}

		export const Studs: Studs;

		export interface Inlet {
			Name: "Inlet";
			Value: 4;
			EnumType: EnumType<Enum.SurfaceType>;
		}

		export const Inlet: Inlet;

		export interface Universal {
			Name: "Universal";
			Value: 5;
			EnumType: EnumType<Enum.SurfaceType>;
		}

		export const Universal: Universal;

		export interface Hinge {
			Name: "Hinge";
			Value: 6;
			EnumType: EnumType<Enum.SurfaceType>;
		}

		export const Hinge: Hinge;

		export interface Motor {
			Name: "Motor";
			Value: 7;
			EnumType: EnumType<Enum.SurfaceType>;
		}

		export const Motor: Motor;

		export interface SteppingMotor {
			Name: "SteppingMotor";
			Value: 8;
			EnumType: EnumType<Enum.SurfaceType>;
		}

		export const SteppingMotor: SteppingMotor;

		export interface SmoothNoOutlines {
			Name: "SmoothNoOutlines";
			Value: 10;
			EnumType: EnumType<Enum.SurfaceType>;
		}

		export const SmoothNoOutlines: SmoothNoOutlines;

		export function GetEnumItems(this: {}): Array<SurfaceType>
	}
	export type SurfaceType = SurfaceType.Smooth | SurfaceType.Glue | SurfaceType.Weld | SurfaceType.Studs | SurfaceType.Inlet | SurfaceType.Universal | SurfaceType.Hinge | SurfaceType.Motor | SurfaceType.SteppingMotor | SurfaceType.SmoothNoOutlines;
	export namespace SwipeDirection {
		export interface Right {
			Name: "Right";
			Value: 0;
			EnumType: EnumType<Enum.SwipeDirection>;
		}

		export const Right: Right;

		export interface Left {
			Name: "Left";
			Value: 1;
			EnumType: EnumType<Enum.SwipeDirection>;
		}

		export const Left: Left;

		export interface Up {
			Name: "Up";
			Value: 2;
			EnumType: EnumType<Enum.SwipeDirection>;
		}

		export const Up: Up;

		export interface Down {
			Name: "Down";
			Value: 3;
			EnumType: EnumType<Enum.SwipeDirection>;
		}

		export const Down: Down;

		export interface None {
			Name: "None";
			Value: 4;
			EnumType: EnumType<Enum.SwipeDirection>;
		}

		export const None: None;

		export function GetEnumItems(this: {}): Array<SwipeDirection>
	}
	export type SwipeDirection = SwipeDirection.Right | SwipeDirection.Left | SwipeDirection.Up | SwipeDirection.Down | SwipeDirection.None;
	export namespace TableMajorAxis {
		export interface RowMajor {
			Name: "RowMajor";
			Value: 0;
			EnumType: EnumType<Enum.TableMajorAxis>;
		}

		export const RowMajor: RowMajor;

		export interface ColumnMajor {
			Name: "ColumnMajor";
			Value: 1;
			EnumType: EnumType<Enum.TableMajorAxis>;
		}

		export const ColumnMajor: ColumnMajor;

		export function GetEnumItems(this: {}): Array<TableMajorAxis>
	}
	export type TableMajorAxis = TableMajorAxis.RowMajor | TableMajorAxis.ColumnMajor;
	export namespace Technology {
		export interface Legacy {
			Name: "Legacy";
			Value: 0;
			EnumType: EnumType<Enum.Technology>;
		}

		export const Legacy: Legacy;

		export interface Voxel {
			Name: "Voxel";
			Value: 1;
			EnumType: EnumType<Enum.Technology>;
		}

		export const Voxel: Voxel;

		export interface Compatibility {
			Name: "Compatibility";
			Value: 2;
			EnumType: EnumType<Enum.Technology>;
		}

		export const Compatibility: Compatibility;

		export interface ShadowMap {
			Name: "ShadowMap";
			Value: 3;
			EnumType: EnumType<Enum.Technology>;
		}

		export const ShadowMap: ShadowMap;

		export function GetEnumItems(this: {}): Array<Technology>
	}
	export type Technology = Technology.Legacy | Technology.Voxel | Technology.Compatibility | Technology.ShadowMap;
	export namespace TeleportResult {
		export interface Success {
			Name: "Success";
			Value: 0;
			EnumType: EnumType<Enum.TeleportResult>;
		}

		export const Success: Success;

		export interface Failure {
			Name: "Failure";
			Value: 1;
			EnumType: EnumType<Enum.TeleportResult>;
		}

		export const Failure: Failure;

		export interface GameNotFound {
			Name: "GameNotFound";
			Value: 2;
			EnumType: EnumType<Enum.TeleportResult>;
		}

		export const GameNotFound: GameNotFound;

		export interface GameEnded {
			Name: "GameEnded";
			Value: 3;
			EnumType: EnumType<Enum.TeleportResult>;
		}

		export const GameEnded: GameEnded;

		export interface GameFull {
			Name: "GameFull";
			Value: 4;
			EnumType: EnumType<Enum.TeleportResult>;
		}

		export const GameFull: GameFull;

		export interface Unauthorized {
			Name: "Unauthorized";
			Value: 5;
			EnumType: EnumType<Enum.TeleportResult>;
		}

		export const Unauthorized: Unauthorized;

		export interface Flooded {
			Name: "Flooded";
			Value: 6;
			EnumType: EnumType<Enum.TeleportResult>;
		}

		export const Flooded: Flooded;

		export interface IsTeleporting {
			Name: "IsTeleporting";
			Value: 7;
			EnumType: EnumType<Enum.TeleportResult>;
		}

		export const IsTeleporting: IsTeleporting;

		export function GetEnumItems(this: {}): Array<TeleportResult>
	}
	export type TeleportResult = TeleportResult.Success | TeleportResult.Failure | TeleportResult.GameNotFound | TeleportResult.GameEnded | TeleportResult.GameFull | TeleportResult.Unauthorized | TeleportResult.Flooded | TeleportResult.IsTeleporting;
	export namespace TeleportState {
		export interface RequestedFromServer {
			Name: "RequestedFromServer";
			Value: 0;
			EnumType: EnumType<Enum.TeleportState>;
		}

		export const RequestedFromServer: RequestedFromServer;

		export interface Started {
			Name: "Started";
			Value: 1;
			EnumType: EnumType<Enum.TeleportState>;
		}

		export const Started: Started;

		export interface WaitingForServer {
			Name: "WaitingForServer";
			Value: 2;
			EnumType: EnumType<Enum.TeleportState>;
		}

		export const WaitingForServer: WaitingForServer;

		export interface Failed {
			Name: "Failed";
			Value: 3;
			EnumType: EnumType<Enum.TeleportState>;
		}

		export const Failed: Failed;

		export interface InProgress {
			Name: "InProgress";
			Value: 4;
			EnumType: EnumType<Enum.TeleportState>;
		}

		export const InProgress: InProgress;

		export function GetEnumItems(this: {}): Array<TeleportState>
	}
	export type TeleportState = TeleportState.RequestedFromServer | TeleportState.Started | TeleportState.WaitingForServer | TeleportState.Failed | TeleportState.InProgress;
	export namespace TeleportType {
		export interface ToPlace {
			Name: "ToPlace";
			Value: 0;
			EnumType: EnumType<Enum.TeleportType>;
		}

		export const ToPlace: ToPlace;

		export interface ToInstance {
			Name: "ToInstance";
			Value: 1;
			EnumType: EnumType<Enum.TeleportType>;
		}

		export const ToInstance: ToInstance;

		export interface ToReservedServer {
			Name: "ToReservedServer";
			Value: 2;
			EnumType: EnumType<Enum.TeleportType>;
		}

		export const ToReservedServer: ToReservedServer;

		export function GetEnumItems(this: {}): Array<TeleportType>
	}
	export type TeleportType = TeleportType.ToPlace | TeleportType.ToInstance | TeleportType.ToReservedServer;
	export namespace TextFilterContext {
		export interface PublicChat {
			Name: "PublicChat";
			Value: 1;
			EnumType: EnumType<Enum.TextFilterContext>;
		}

		export const PublicChat: PublicChat;

		export interface PrivateChat {
			Name: "PrivateChat";
			Value: 2;
			EnumType: EnumType<Enum.TextFilterContext>;
		}

		export const PrivateChat: PrivateChat;

		export function GetEnumItems(this: {}): Array<TextFilterContext>
	}
	export type TextFilterContext = TextFilterContext.PublicChat | TextFilterContext.PrivateChat;
	export namespace TextTruncate {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<Enum.TextTruncate>;
		}

		export const None: None;

		export interface AtEnd {
			Name: "AtEnd";
			Value: 1;
			EnumType: EnumType<Enum.TextTruncate>;
		}

		export const AtEnd: AtEnd;

		export function GetEnumItems(this: {}): Array<TextTruncate>
	}
	export type TextTruncate = TextTruncate.None | TextTruncate.AtEnd;
	export namespace TextXAlignment {
		export interface Left {
			Name: "Left";
			Value: 0;
			EnumType: EnumType<Enum.TextXAlignment>;
		}

		export const Left: Left;

		export interface Center {
			Name: "Center";
			Value: 2;
			EnumType: EnumType<Enum.TextXAlignment>;
		}

		export const Center: Center;

		export interface Right {
			Name: "Right";
			Value: 1;
			EnumType: EnumType<Enum.TextXAlignment>;
		}

		export const Right: Right;

		export function GetEnumItems(this: {}): Array<TextXAlignment>
	}
	export type TextXAlignment = TextXAlignment.Left | TextXAlignment.Center | TextXAlignment.Right;
	export namespace TextYAlignment {
		export interface Top {
			Name: "Top";
			Value: 0;
			EnumType: EnumType<Enum.TextYAlignment>;
		}

		export const Top: Top;

		export interface Center {
			Name: "Center";
			Value: 1;
			EnumType: EnumType<Enum.TextYAlignment>;
		}

		export const Center: Center;

		export interface Bottom {
			Name: "Bottom";
			Value: 2;
			EnumType: EnumType<Enum.TextYAlignment>;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: {}): Array<TextYAlignment>
	}
	export type TextYAlignment = TextYAlignment.Top | TextYAlignment.Center | TextYAlignment.Bottom;
	export namespace TextureMode {
		export interface Stretch {
			Name: "Stretch";
			Value: 0;
			EnumType: EnumType<Enum.TextureMode>;
		}

		export const Stretch: Stretch;

		export interface Wrap {
			Name: "Wrap";
			Value: 1;
			EnumType: EnumType<Enum.TextureMode>;
		}

		export const Wrap: Wrap;

		export interface Static {
			Name: "Static";
			Value: 2;
			EnumType: EnumType<Enum.TextureMode>;
		}

		export const Static: Static;

		export function GetEnumItems(this: {}): Array<TextureMode>
	}
	export type TextureMode = TextureMode.Stretch | TextureMode.Wrap | TextureMode.Static;
	export namespace TextureQueryType {
		export interface NonHumanoid {
			Name: "NonHumanoid";
			Value: 0;
			EnumType: EnumType<Enum.TextureQueryType>;
		}

		export const NonHumanoid: NonHumanoid;

		export interface NonHumanoidOrphaned {
			Name: "NonHumanoidOrphaned";
			Value: 1;
			EnumType: EnumType<Enum.TextureQueryType>;
		}

		export const NonHumanoidOrphaned: NonHumanoidOrphaned;

		export interface Humanoid {
			Name: "Humanoid";
			Value: 2;
			EnumType: EnumType<Enum.TextureQueryType>;
		}

		export const Humanoid: Humanoid;

		export interface HumanoidOrphaned {
			Name: "HumanoidOrphaned";
			Value: 3;
			EnumType: EnumType<Enum.TextureQueryType>;
		}

		export const HumanoidOrphaned: HumanoidOrphaned;

		export function GetEnumItems(this: {}): Array<TextureQueryType>
	}
	export type TextureQueryType = TextureQueryType.NonHumanoid | TextureQueryType.NonHumanoidOrphaned | TextureQueryType.Humanoid | TextureQueryType.HumanoidOrphaned;
	export namespace ThreadPoolConfig {
		export interface Auto {
			Name: "Auto";
			Value: 0;
			EnumType: EnumType<Enum.ThreadPoolConfig>;
		}

		export const Auto: Auto;

		export interface PerCore1 {
			Name: "PerCore1";
			Value: 101;
			EnumType: EnumType<Enum.ThreadPoolConfig>;
		}

		export const PerCore1: PerCore1;

		export interface PerCore2 {
			Name: "PerCore2";
			Value: 102;
			EnumType: EnumType<Enum.ThreadPoolConfig>;
		}

		export const PerCore2: PerCore2;

		export interface PerCore3 {
			Name: "PerCore3";
			Value: 103;
			EnumType: EnumType<Enum.ThreadPoolConfig>;
		}

		export const PerCore3: PerCore3;

		export interface PerCore4 {
			Name: "PerCore4";
			Value: 104;
			EnumType: EnumType<Enum.ThreadPoolConfig>;
		}

		export const PerCore4: PerCore4;

		export interface Threads1 {
			Name: "Threads1";
			Value: 1;
			EnumType: EnumType<Enum.ThreadPoolConfig>;
		}

		export const Threads1: Threads1;

		export interface Threads2 {
			Name: "Threads2";
			Value: 2;
			EnumType: EnumType<Enum.ThreadPoolConfig>;
		}

		export const Threads2: Threads2;

		export interface Threads3 {
			Name: "Threads3";
			Value: 3;
			EnumType: EnumType<Enum.ThreadPoolConfig>;
		}

		export const Threads3: Threads3;

		export interface Threads4 {
			Name: "Threads4";
			Value: 4;
			EnumType: EnumType<Enum.ThreadPoolConfig>;
		}

		export const Threads4: Threads4;

		export interface Threads8 {
			Name: "Threads8";
			Value: 8;
			EnumType: EnumType<Enum.ThreadPoolConfig>;
		}

		export const Threads8: Threads8;

		export interface Threads16 {
			Name: "Threads16";
			Value: 16;
			EnumType: EnumType<Enum.ThreadPoolConfig>;
		}

		export const Threads16: Threads16;

		export function GetEnumItems(this: {}): Array<ThreadPoolConfig>
	}
	export type ThreadPoolConfig = ThreadPoolConfig.Auto | ThreadPoolConfig.PerCore1 | ThreadPoolConfig.PerCore2 | ThreadPoolConfig.PerCore3 | ThreadPoolConfig.PerCore4 | ThreadPoolConfig.Threads1 | ThreadPoolConfig.Threads2 | ThreadPoolConfig.Threads3 | ThreadPoolConfig.Threads4 | ThreadPoolConfig.Threads8 | ThreadPoolConfig.Threads16;
	export namespace ThrottlingPriority {
		export interface Extreme {
			Name: "Extreme";
			Value: 2;
			EnumType: EnumType<Enum.ThrottlingPriority>;
		}

		export const Extreme: Extreme;

		export interface ElevatedOnServer {
			Name: "ElevatedOnServer";
			Value: 1;
			EnumType: EnumType<Enum.ThrottlingPriority>;
		}

		export const ElevatedOnServer: ElevatedOnServer;

		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.ThrottlingPriority>;
		}

		export const Default: Default;

		export function GetEnumItems(this: {}): Array<ThrottlingPriority>
	}
	export type ThrottlingPriority = ThrottlingPriority.Extreme | ThrottlingPriority.ElevatedOnServer | ThrottlingPriority.Default;
	export namespace ThumbnailSize {
		export interface Size48x48 {
			Name: "Size48x48";
			Value: 0;
			EnumType: EnumType<Enum.ThumbnailSize>;
		}

		export const Size48x48: Size48x48;

		export interface Size180x180 {
			Name: "Size180x180";
			Value: 1;
			EnumType: EnumType<Enum.ThumbnailSize>;
		}

		export const Size180x180: Size180x180;

		export interface Size420x420 {
			Name: "Size420x420";
			Value: 2;
			EnumType: EnumType<Enum.ThumbnailSize>;
		}

		export const Size420x420: Size420x420;

		export interface Size60x60 {
			Name: "Size60x60";
			Value: 3;
			EnumType: EnumType<Enum.ThumbnailSize>;
		}

		export const Size60x60: Size60x60;

		export interface Size100x100 {
			Name: "Size100x100";
			Value: 4;
			EnumType: EnumType<Enum.ThumbnailSize>;
		}

		export const Size100x100: Size100x100;

		export interface Size150x150 {
			Name: "Size150x150";
			Value: 5;
			EnumType: EnumType<Enum.ThumbnailSize>;
		}

		export const Size150x150: Size150x150;

		export interface Size352x352 {
			Name: "Size352x352";
			Value: 6;
			EnumType: EnumType<Enum.ThumbnailSize>;
		}

		export const Size352x352: Size352x352;

		export function GetEnumItems(this: {}): Array<ThumbnailSize>
	}
	export type ThumbnailSize = ThumbnailSize.Size48x48 | ThumbnailSize.Size180x180 | ThumbnailSize.Size420x420 | ThumbnailSize.Size60x60 | ThumbnailSize.Size100x100 | ThumbnailSize.Size150x150 | ThumbnailSize.Size352x352;
	export namespace ThumbnailType {
		export interface HeadShot {
			Name: "HeadShot";
			Value: 0;
			EnumType: EnumType<Enum.ThumbnailType>;
		}

		export const HeadShot: HeadShot;

		export interface AvatarBust {
			Name: "AvatarBust";
			Value: 1;
			EnumType: EnumType<Enum.ThumbnailType>;
		}

		export const AvatarBust: AvatarBust;

		export interface AvatarThumbnail {
			Name: "AvatarThumbnail";
			Value: 2;
			EnumType: EnumType<Enum.ThumbnailType>;
		}

		export const AvatarThumbnail: AvatarThumbnail;

		export function GetEnumItems(this: {}): Array<ThumbnailType>
	}
	export type ThumbnailType = ThumbnailType.HeadShot | ThumbnailType.AvatarBust | ThumbnailType.AvatarThumbnail;
	export namespace TickCountSampleMethod {
		export interface Fast {
			Name: "Fast";
			Value: 0;
			EnumType: EnumType<Enum.TickCountSampleMethod>;
		}

		export const Fast: Fast;

		export interface Benchmark {
			Name: "Benchmark";
			Value: 1;
			EnumType: EnumType<Enum.TickCountSampleMethod>;
		}

		export const Benchmark: Benchmark;

		export interface Precise {
			Name: "Precise";
			Value: 2;
			EnumType: EnumType<Enum.TickCountSampleMethod>;
		}

		export const Precise: Precise;

		export function GetEnumItems(this: {}): Array<TickCountSampleMethod>
	}
	export type TickCountSampleMethod = TickCountSampleMethod.Fast | TickCountSampleMethod.Benchmark | TickCountSampleMethod.Precise;
	export namespace TopBottom {
		export interface Top {
			Name: "Top";
			Value: 0;
			EnumType: EnumType<Enum.TopBottom>;
		}

		export const Top: Top;

		export interface Center {
			Name: "Center";
			Value: 1;
			EnumType: EnumType<Enum.TopBottom>;
		}

		export const Center: Center;

		export interface Bottom {
			Name: "Bottom";
			Value: 2;
			EnumType: EnumType<Enum.TopBottom>;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: {}): Array<TopBottom>
	}
	export type TopBottom = TopBottom.Top | TopBottom.Center | TopBottom.Bottom;
	export namespace TouchCameraMovementMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.TouchCameraMovementMode>;
		}

		export const Default: Default;

		export interface Follow {
			Name: "Follow";
			Value: 2;
			EnumType: EnumType<Enum.TouchCameraMovementMode>;
		}

		export const Follow: Follow;

		export interface Classic {
			Name: "Classic";
			Value: 1;
			EnumType: EnumType<Enum.TouchCameraMovementMode>;
		}

		export const Classic: Classic;

		export interface Orbital {
			Name: "Orbital";
			Value: 3;
			EnumType: EnumType<Enum.TouchCameraMovementMode>;
		}

		export const Orbital: Orbital;

		export function GetEnumItems(this: {}): Array<TouchCameraMovementMode>
	}
	export type TouchCameraMovementMode = TouchCameraMovementMode.Default | TouchCameraMovementMode.Follow | TouchCameraMovementMode.Classic | TouchCameraMovementMode.Orbital;
	export namespace TouchMovementMode {
		export interface Default {
			Name: "Default";
			Value: 0;
			EnumType: EnumType<Enum.TouchMovementMode>;
		}

		export const Default: Default;

		export interface Thumbstick {
			Name: "Thumbstick";
			Value: 1;
			EnumType: EnumType<Enum.TouchMovementMode>;
		}

		export const Thumbstick: Thumbstick;

		export interface DPad {
			Name: "DPad";
			Value: 2;
			EnumType: EnumType<Enum.TouchMovementMode>;
		}

		export const DPad: DPad;

		export interface Thumbpad {
			Name: "Thumbpad";
			Value: 3;
			EnumType: EnumType<Enum.TouchMovementMode>;
		}

		export const Thumbpad: Thumbpad;

		export interface ClickToMove {
			Name: "ClickToMove";
			Value: 4;
			EnumType: EnumType<Enum.TouchMovementMode>;
		}

		export const ClickToMove: ClickToMove;

		export interface DynamicThumbstick {
			Name: "DynamicThumbstick";
			Value: 5;
			EnumType: EnumType<Enum.TouchMovementMode>;
		}

		export const DynamicThumbstick: DynamicThumbstick;

		export function GetEnumItems(this: {}): Array<TouchMovementMode>
	}
	export type TouchMovementMode = TouchMovementMode.Default | TouchMovementMode.Thumbstick | TouchMovementMode.DPad | TouchMovementMode.Thumbpad | TouchMovementMode.ClickToMove | TouchMovementMode.DynamicThumbstick;
	export namespace TweenStatus {
		export interface Canceled {
			Name: "Canceled";
			Value: 0;
			EnumType: EnumType<Enum.TweenStatus>;
		}

		export const Canceled: Canceled;

		export interface Completed {
			Name: "Completed";
			Value: 1;
			EnumType: EnumType<Enum.TweenStatus>;
		}

		export const Completed: Completed;

		export function GetEnumItems(this: {}): Array<TweenStatus>
	}
	export type TweenStatus = TweenStatus.Canceled | TweenStatus.Completed;
	export namespace UITheme {
		export interface Light {
			Name: "Light";
			Value: 0;
			EnumType: EnumType<Enum.UITheme>;
		}

		export const Light: Light;

		export interface Dark {
			Name: "Dark";
			Value: 1;
			EnumType: EnumType<Enum.UITheme>;
		}

		export const Dark: Dark;

		export function GetEnumItems(this: {}): Array<UITheme>
	}
	export type UITheme = UITheme.Light | UITheme.Dark;
	export namespace UiMessageType {
		export interface UiMessageError {
			Name: "UiMessageError";
			Value: 0;
			EnumType: EnumType<Enum.UiMessageType>;
		}

		export const UiMessageError: UiMessageError;

		export interface UiMessageInfo {
			Name: "UiMessageInfo";
			Value: 1;
			EnumType: EnumType<Enum.UiMessageType>;
		}

		export const UiMessageInfo: UiMessageInfo;

		export function GetEnumItems(this: {}): Array<UiMessageType>
	}
	export type UiMessageType = UiMessageType.UiMessageError | UiMessageType.UiMessageInfo;
	export namespace UploadSetting {
		export interface Never {
			Name: "Never";
			Value: 0;
			EnumType: EnumType<Enum.UploadSetting>;
		}

		export const Never: Never;

		export interface Ask {
			Name: "Ask";
			Value: 1;
			EnumType: EnumType<Enum.UploadSetting>;
		}

		export const Ask: Ask;

		export interface Always {
			Name: "Always";
			Value: 2;
			EnumType: EnumType<Enum.UploadSetting>;
		}

		export const Always: Always;

		export function GetEnumItems(this: {}): Array<UploadSetting>
	}
	export type UploadSetting = UploadSetting.Never | UploadSetting.Ask | UploadSetting.Always;
	export namespace UserCFrame {
		export interface Head {
			Name: "Head";
			Value: 0;
			EnumType: EnumType<Enum.UserCFrame>;
		}

		export const Head: Head;

		export interface LeftHand {
			Name: "LeftHand";
			Value: 1;
			EnumType: EnumType<Enum.UserCFrame>;
		}

		export const LeftHand: LeftHand;

		export interface RightHand {
			Name: "RightHand";
			Value: 2;
			EnumType: EnumType<Enum.UserCFrame>;
		}

		export const RightHand: RightHand;

		export function GetEnumItems(this: {}): Array<UserCFrame>
	}
	export type UserCFrame = UserCFrame.Head | UserCFrame.LeftHand | UserCFrame.RightHand;
	export namespace UserInputState {
		export interface Begin {
			Name: "Begin";
			Value: 0;
			EnumType: EnumType<Enum.UserInputState>;
		}

		export const Begin: Begin;

		export interface Change {
			Name: "Change";
			Value: 1;
			EnumType: EnumType<Enum.UserInputState>;
		}

		export const Change: Change;

		export interface End {
			Name: "End";
			Value: 2;
			EnumType: EnumType<Enum.UserInputState>;
		}

		export const End: End;

		export interface Cancel {
			Name: "Cancel";
			Value: 3;
			EnumType: EnumType<Enum.UserInputState>;
		}

		export const Cancel: Cancel;

		export interface None {
			Name: "None";
			Value: 4;
			EnumType: EnumType<Enum.UserInputState>;
		}

		export const None: None;

		export function GetEnumItems(this: {}): Array<UserInputState>
	}
	export type UserInputState = UserInputState.Begin | UserInputState.Change | UserInputState.End | UserInputState.Cancel | UserInputState.None;
	export namespace UserInputType {
		export interface MouseButton1 {
			Name: "MouseButton1";
			Value: 0;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const MouseButton1: MouseButton1;

		export interface MouseButton2 {
			Name: "MouseButton2";
			Value: 1;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const MouseButton2: MouseButton2;

		export interface MouseButton3 {
			Name: "MouseButton3";
			Value: 2;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const MouseButton3: MouseButton3;

		export interface MouseWheel {
			Name: "MouseWheel";
			Value: 3;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const MouseWheel: MouseWheel;

		export interface MouseMovement {
			Name: "MouseMovement";
			Value: 4;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const MouseMovement: MouseMovement;

		export interface Touch {
			Name: "Touch";
			Value: 7;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Touch: Touch;

		export interface Keyboard {
			Name: "Keyboard";
			Value: 8;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Keyboard: Keyboard;

		export interface Focus {
			Name: "Focus";
			Value: 9;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Focus: Focus;

		export interface Accelerometer {
			Name: "Accelerometer";
			Value: 10;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Accelerometer: Accelerometer;

		export interface Gyro {
			Name: "Gyro";
			Value: 11;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Gyro: Gyro;

		export interface Gamepad1 {
			Name: "Gamepad1";
			Value: 12;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Gamepad1: Gamepad1;

		export interface Gamepad2 {
			Name: "Gamepad2";
			Value: 13;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Gamepad2: Gamepad2;

		export interface Gamepad3 {
			Name: "Gamepad3";
			Value: 14;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Gamepad3: Gamepad3;

		export interface Gamepad4 {
			Name: "Gamepad4";
			Value: 15;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Gamepad4: Gamepad4;

		export interface Gamepad5 {
			Name: "Gamepad5";
			Value: 16;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Gamepad5: Gamepad5;

		export interface Gamepad6 {
			Name: "Gamepad6";
			Value: 17;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Gamepad6: Gamepad6;

		export interface Gamepad7 {
			Name: "Gamepad7";
			Value: 18;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Gamepad7: Gamepad7;

		export interface Gamepad8 {
			Name: "Gamepad8";
			Value: 19;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const Gamepad8: Gamepad8;

		export interface TextInput {
			Name: "TextInput";
			Value: 20;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const TextInput: TextInput;

		export interface InputMethod {
			Name: "InputMethod";
			Value: 21;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const InputMethod: InputMethod;

		export interface None {
			Name: "None";
			Value: 22;
			EnumType: EnumType<Enum.UserInputType>;
		}

		export const None: None;

		export function GetEnumItems(this: {}): Array<UserInputType>
	}
	export type UserInputType = UserInputType.MouseButton1 | UserInputType.MouseButton2 | UserInputType.MouseButton3 | UserInputType.MouseWheel | UserInputType.MouseMovement | UserInputType.Touch | UserInputType.Keyboard | UserInputType.Focus | UserInputType.Accelerometer | UserInputType.Gyro | UserInputType.Gamepad1 | UserInputType.Gamepad2 | UserInputType.Gamepad3 | UserInputType.Gamepad4 | UserInputType.Gamepad5 | UserInputType.Gamepad6 | UserInputType.Gamepad7 | UserInputType.Gamepad8 | UserInputType.TextInput | UserInputType.InputMethod | UserInputType.None;
	export namespace VRTouchpad {
		export interface Left {
			Name: "Left";
			Value: 0;
			EnumType: EnumType<Enum.VRTouchpad>;
		}

		export const Left: Left;

		export interface Right {
			Name: "Right";
			Value: 1;
			EnumType: EnumType<Enum.VRTouchpad>;
		}

		export const Right: Right;

		export function GetEnumItems(this: {}): Array<VRTouchpad>
	}
	export type VRTouchpad = VRTouchpad.Left | VRTouchpad.Right;
	export namespace VRTouchpadMode {
		export interface Touch {
			Name: "Touch";
			Value: 0;
			EnumType: EnumType<Enum.VRTouchpadMode>;
		}

		export const Touch: Touch;

		export interface VirtualThumbstick {
			Name: "VirtualThumbstick";
			Value: 1;
			EnumType: EnumType<Enum.VRTouchpadMode>;
		}

		export const VirtualThumbstick: VirtualThumbstick;

		export interface ABXY {
			Name: "ABXY";
			Value: 2;
			EnumType: EnumType<Enum.VRTouchpadMode>;
		}

		export const ABXY: ABXY;

		export function GetEnumItems(this: {}): Array<VRTouchpadMode>
	}
	export type VRTouchpadMode = VRTouchpadMode.Touch | VRTouchpadMode.VirtualThumbstick | VRTouchpadMode.ABXY;
	export namespace VerticalAlignment {
		export interface Center {
			Name: "Center";
			Value: 0;
			EnumType: EnumType<Enum.VerticalAlignment>;
		}

		export const Center: Center;

		export interface Top {
			Name: "Top";
			Value: 1;
			EnumType: EnumType<Enum.VerticalAlignment>;
		}

		export const Top: Top;

		export interface Bottom {
			Name: "Bottom";
			Value: 2;
			EnumType: EnumType<Enum.VerticalAlignment>;
		}

		export const Bottom: Bottom;

		export function GetEnumItems(this: {}): Array<VerticalAlignment>
	}
	export type VerticalAlignment = VerticalAlignment.Center | VerticalAlignment.Top | VerticalAlignment.Bottom;
	export namespace VerticalScrollBarPosition {
		export interface Left {
			Name: "Left";
			Value: 1;
			EnumType: EnumType<Enum.VerticalScrollBarPosition>;
		}

		export const Left: Left;

		export interface Right {
			Name: "Right";
			Value: 0;
			EnumType: EnumType<Enum.VerticalScrollBarPosition>;
		}

		export const Right: Right;

		export function GetEnumItems(this: {}): Array<VerticalScrollBarPosition>
	}
	export type VerticalScrollBarPosition = VerticalScrollBarPosition.Left | VerticalScrollBarPosition.Right;
	export namespace VibrationMotor {
		export interface Large {
			Name: "Large";
			Value: 0;
			EnumType: EnumType<Enum.VibrationMotor>;
		}

		export const Large: Large;

		export interface Small {
			Name: "Small";
			Value: 1;
			EnumType: EnumType<Enum.VibrationMotor>;
		}

		export const Small: Small;

		export interface LeftTrigger {
			Name: "LeftTrigger";
			Value: 2;
			EnumType: EnumType<Enum.VibrationMotor>;
		}

		export const LeftTrigger: LeftTrigger;

		export interface RightTrigger {
			Name: "RightTrigger";
			Value: 3;
			EnumType: EnumType<Enum.VibrationMotor>;
		}

		export const RightTrigger: RightTrigger;

		export interface LeftHand {
			Name: "LeftHand";
			Value: 4;
			EnumType: EnumType<Enum.VibrationMotor>;
		}

		export const LeftHand: LeftHand;

		export interface RightHand {
			Name: "RightHand";
			Value: 5;
			EnumType: EnumType<Enum.VibrationMotor>;
		}

		export const RightHand: RightHand;

		export function GetEnumItems(this: {}): Array<VibrationMotor>
	}
	export type VibrationMotor = VibrationMotor.Large | VibrationMotor.Small | VibrationMotor.LeftTrigger | VibrationMotor.RightTrigger | VibrationMotor.LeftHand | VibrationMotor.RightHand;
	export namespace VideoQualitySettings {
		export interface LowResolution {
			Name: "LowResolution";
			Value: 0;
			EnumType: EnumType<Enum.VideoQualitySettings>;
		}

		export const LowResolution: LowResolution;

		export interface MediumResolution {
			Name: "MediumResolution";
			Value: 1;
			EnumType: EnumType<Enum.VideoQualitySettings>;
		}

		export const MediumResolution: MediumResolution;

		export interface HighResolution {
			Name: "HighResolution";
			Value: 2;
			EnumType: EnumType<Enum.VideoQualitySettings>;
		}

		export const HighResolution: HighResolution;

		export function GetEnumItems(this: {}): Array<VideoQualitySettings>
	}
	export type VideoQualitySettings = VideoQualitySettings.LowResolution | VideoQualitySettings.MediumResolution | VideoQualitySettings.HighResolution;
	export namespace VirtualInputMode {
		export interface Recording {
			Name: "Recording";
			Value: 1;
			EnumType: EnumType<Enum.VirtualInputMode>;
		}

		export const Recording: Recording;

		export interface Playing {
			Name: "Playing";
			Value: 2;
			EnumType: EnumType<Enum.VirtualInputMode>;
		}

		export const Playing: Playing;

		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<Enum.VirtualInputMode>;
		}

		export const None: None;

		export function GetEnumItems(this: {}): Array<VirtualInputMode>
	}
	export type VirtualInputMode = VirtualInputMode.Recording | VirtualInputMode.Playing | VirtualInputMode.None;
	export namespace WaterDirection {
		export interface NegX {
			Name: "NegX";
			Value: 0;
			EnumType: EnumType<Enum.WaterDirection>;
		}

		export const NegX: NegX;

		export interface X {
			Name: "X";
			Value: 1;
			EnumType: EnumType<Enum.WaterDirection>;
		}

		export const X: X;

		export interface NegY {
			Name: "NegY";
			Value: 2;
			EnumType: EnumType<Enum.WaterDirection>;
		}

		export const NegY: NegY;

		export interface Y {
			Name: "Y";
			Value: 3;
			EnumType: EnumType<Enum.WaterDirection>;
		}

		export const Y: Y;

		export interface NegZ {
			Name: "NegZ";
			Value: 4;
			EnumType: EnumType<Enum.WaterDirection>;
		}

		export const NegZ: NegZ;

		export interface Z {
			Name: "Z";
			Value: 5;
			EnumType: EnumType<Enum.WaterDirection>;
		}

		export const Z: Z;

		export function GetEnumItems(this: {}): Array<WaterDirection>
	}
	export type WaterDirection = WaterDirection.NegX | WaterDirection.X | WaterDirection.NegY | WaterDirection.Y | WaterDirection.NegZ | WaterDirection.Z;
	export namespace WaterForce {
		export interface None {
			Name: "None";
			Value: 0;
			EnumType: EnumType<Enum.WaterForce>;
		}

		export const None: None;

		export interface Small {
			Name: "Small";
			Value: 1;
			EnumType: EnumType<Enum.WaterForce>;
		}

		export const Small: Small;

		export interface Medium {
			Name: "Medium";
			Value: 2;
			EnumType: EnumType<Enum.WaterForce>;
		}

		export const Medium: Medium;

		export interface Strong {
			Name: "Strong";
			Value: 3;
			EnumType: EnumType<Enum.WaterForce>;
		}

		export const Strong: Strong;

		export interface Max {
			Name: "Max";
			Value: 4;
			EnumType: EnumType<Enum.WaterForce>;
		}

		export const Max: Max;

		export function GetEnumItems(this: {}): Array<WaterForce>
	}
	export type WaterForce = WaterForce.None | WaterForce.Small | WaterForce.Medium | WaterForce.Strong | WaterForce.Max;
	export namespace ZIndexBehavior {
		export interface Global {
			Name: "Global";
			Value: 0;
			EnumType: EnumType<Enum.ZIndexBehavior>;
		}

		export const Global: Global;

		export interface Sibling {
			Name: "Sibling";
			Value: 1;
			EnumType: EnumType<Enum.ZIndexBehavior>;
		}

		export const Sibling: Sibling;

		export function GetEnumItems(this: {}): Array<ZIndexBehavior>
	}
	export type ZIndexBehavior = ZIndexBehavior.Global | ZIndexBehavior.Sibling;
}

declare type CastsToEnum<T extends 
	| Enum.ActionType
	| Enum.ActuatorRelativeTo
	| Enum.ActuatorType
	| Enum.AlignType
	| Enum.AnimationPriority
	| Enum.AppShellActionType
	| Enum.AspectType
	| Enum.AssetFetchStatus
	| Enum.AssetType
	| Enum.AutoJointsMode
	| Enum.AvatarContextMenuOption
	| Enum.AvatarJointPositionType
	| Enum.Axis
	| Enum.BinType
	| Enum.BodyPart
	| Enum.BodyPartR15
	| Enum.Button
	| Enum.ButtonStyle
	| Enum.CameraMode
	| Enum.CameraPanMode
	| Enum.CameraType
	| Enum.CellBlock
	| Enum.CellMaterial
	| Enum.CellOrientation
	| Enum.CenterDialogType
	| Enum.ChatCallbackType
	| Enum.ChatColor
	| Enum.ChatMode
	| Enum.ChatPrivacyMode
	| Enum.ChatStyle
	| Enum.CollisionFidelity
	| Enum.ComputerCameraMovementMode
	| Enum.ComputerMovementMode
	| Enum.ConnectionError
	| Enum.ConnectionState
	| Enum.ContextActionPriority
	| Enum.ContextActionResult
	| Enum.ControlMode
	| Enum.CoreGuiType
	| Enum.CreatorType
	| Enum.CurrencyType
	| Enum.CustomCameraMode
	| Enum.DataStoreRequestType
	| Enum.DevCameraOcclusionMode
	| Enum.DevComputerCameraMovementMode
	| Enum.DevComputerMovementMode
	| Enum.DevTouchCameraMovementMode
	| Enum.DevTouchMovementMode
	| Enum.DeveloperMemoryTag
	| Enum.DeviceType
	| Enum.DialogBehaviorType
	| Enum.DialogPurpose
	| Enum.DialogTone
	| Enum.DominantAxis
	| Enum.EasingDirection
	| Enum.EasingStyle
	| Enum.ElasticBehavior
	| Enum.EnviromentalPhysicsThrottle
	| Enum.ErrorReporting
	| Enum.ExplosionType
	| Enum.FillDirection
	| Enum.FilterResult
	| Enum.Font
	| Enum.FontSize
	| Enum.FormFactor
	| Enum.FrameStyle
	| Enum.FramerateManagerMode
	| Enum.FriendRequestEvent
	| Enum.FriendStatus
	| Enum.FunctionalTestResult
	| Enum.GameAvatarType
	| Enum.GearGenreSetting
	| Enum.GearType
	| Enum.Genre
	| Enum.GraphicsMode
	| Enum.HandlesStyle
	| Enum.HorizontalAlignment
	| Enum.HoverAnimateSpeed
	| Enum.HttpCachePolicy
	| Enum.HttpContentType
	| Enum.HttpError
	| Enum.HttpRequestType
	| Enum.HumanoidCollisionType
	| Enum.HumanoidDisplayDistanceType
	| Enum.HumanoidHealthDisplayType
	| Enum.HumanoidRigType
	| Enum.HumanoidStateType
	| Enum.InOut
	| Enum.InfoType
	| Enum.InitialDockState
	| Enum.InlineAlignment
	| Enum.InputType
	| Enum.JointCreationMode
	| Enum.JointType
	| Enum.KeyCode
	| Enum.KeywordFilterType
	| Enum.Language
	| Enum.LanguagePreference
	| Enum.LeftRight
	| Enum.LevelOfDetailSetting
	| Enum.Limb
	| Enum.ListDisplayMode
	| Enum.ListenerType
	| Enum.Material
	| Enum.MembershipType
	| Enum.MeshType
	| Enum.MessageType
	| Enum.MouseBehavior
	| Enum.MoveState
	| Enum.NameOcclusion
	| Enum.NetworkOwnership
	| Enum.NormalId
	| Enum.OutputLayoutMode
	| Enum.OverrideMouseIconBehavior
	| Enum.PacketPriority
	| Enum.PartType
	| Enum.PathStatus
	| Enum.PathWaypointAction
	| Enum.PermissionLevelShown
	| Enum.Platform
	| Enum.PlaybackState
	| Enum.PlayerActions
	| Enum.PlayerChatType
	| Enum.PoseEasingDirection
	| Enum.PoseEasingStyle
	| Enum.PrivilegeType
	| Enum.ProductPurchaseDecision
	| Enum.QualityLevel
	| Enum.R15CollisionType
	| Enum.RenderFidelity
	| Enum.RenderPriority
	| Enum.RenderingTestComparisonMethod
	| Enum.ReverbType
	| Enum.RibbonTool
	| Enum.RollOffMode
	| Enum.RotationType
	| Enum.RuntimeUndoBehavior
	| Enum.SaveFilter
	| Enum.SavedQualitySetting
	| Enum.ScaleType
	| Enum.ScreenOrientation
	| Enum.ScrollBarInset
	| Enum.ScrollingDirection
	| Enum.ServerAudioBehavior
	| Enum.SizeConstraint
	| Enum.SortOrder
	| Enum.SoundType
	| Enum.SpecialKey
	| Enum.StartCorner
	| Enum.Status
	| Enum.StreamingPauseMode
	| Enum.StudioStyleGuideColor
	| Enum.StudioStyleGuideModifier
	| Enum.Style
	| Enum.SurfaceConstraint
	| Enum.SurfaceGuiSizingMode
	| Enum.SurfaceType
	| Enum.SwipeDirection
	| Enum.TableMajorAxis
	| Enum.Technology
	| Enum.TeleportResult
	| Enum.TeleportState
	| Enum.TeleportType
	| Enum.TextFilterContext
	| Enum.TextTruncate
	| Enum.TextXAlignment
	| Enum.TextYAlignment
	| Enum.TextureMode
	| Enum.TextureQueryType
	| Enum.ThreadPoolConfig
	| Enum.ThrottlingPriority
	| Enum.ThumbnailSize
	| Enum.ThumbnailType
	| Enum.TickCountSampleMethod
	| Enum.TopBottom
	| Enum.TouchCameraMovementMode
	| Enum.TouchMovementMode
	| Enum.TweenStatus
	| Enum.UITheme
	| Enum.UiMessageType
	| Enum.UploadSetting
	| Enum.UserCFrame
	| Enum.UserInputState
	| Enum.UserInputType
	| Enum.VRTouchpad
	| Enum.VRTouchpadMode
	| Enum.VerticalAlignment
	| Enum.VerticalScrollBarPosition
	| Enum.VibrationMotor
	| Enum.VideoQualitySettings
	| Enum.VirtualInputMode
	| Enum.WaterDirection
	| Enum.WaterForce
	| Enum.ZIndexBehavior
> = T | T["Name" | "Value"];
