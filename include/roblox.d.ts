/// <reference path="manual.d.ts" />
/// <reference path="generated_enums.d.ts" />
/// <reference path="generated_classes.d.ts" />

// ROBLOX API

type AnyIndex = { readonly [index: string]: Instance };
type FunctionArguments<T> = T extends (...args: infer U) => void ? U : never;
type Callback = (...args: any[]) => void;

interface Base<T> {
	readonly __class: T;
}
type BaseType<T> = T extends Base<infer U> ? U : never;

declare class RBXScriptConnection {
	Disconnect(): void;
	Connected: boolean;
}

declare class RBXScriptSignal<T extends (...args: any[]) => void = () => void> {
	Connect(callback: T): RBXScriptConnection;
	Wait(): FunctionArguments<T>;
}

declare class Axes {
	constructor(...axes: Array<Enum.Axis | Enum.NormalId>);
	X: boolean;
	Left: boolean;
	Right: boolean;
	Y: boolean;
	Up: boolean;
	Down: boolean;
	Z: boolean;
	Front: boolean;
	Back: boolean;
}

declare class BrickColor {
	constructor(val: string);
	constructor(val: number);
	constructor(r: number, g: number, b: number);
	constructor(color: Color3);
	static palette: (paletteValue: number) => BrickColor;
	static random: () => BrickColor;
	static White: () => BrickColor;
	static Gray: () => BrickColor;
	static DarkGray: () => BrickColor;
	static Black: () => BrickColor;
	static Red: () => BrickColor;
	static Yellow: () => BrickColor;
	static Green: () => BrickColor;
	static Blue: () => BrickColor;
	Number: number;
	Name: string;
	Color: Color3;
	r: number;
	g: number;
	b: number;
}

declare class CFrame {
	constructor();
	constructor(pos: Vector3);
	constructor(pos: Vector3, lookAt: Vector3);
	constructor(x: number, y: number, z: number);
	constructor(x: number, y: number, z: number, qX: number, qY: number, qZ: number, qW: number);
	constructor(
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
		R22: number
	);
	static Angles: (rX: number, rY: number, rZ: number) => CFrame;
	static fromAxisAngle: (unit: Vector3, rotation: number) => CFrame;
	static fromEulerAnglesXYZ: (rX: number, rY: number, rZ: number) => CFrame;
	static fromEulerAnglesYXZ: (rX: number, rY: number, rZ: number) => CFrame;
	static fromOrientation: (rX: number, rY: number, rZ: number) => CFrame;
	p: Vector3;
	X: number;
	Y: number;
	Z: number;
	lookVector: Vector3;
	rightVector: Vector3;
	upVector: Vector3;
	inverse(): CFrame;
	lerp(goal: CFrame, alpha: number): CFrame;
	toWorldSpace(cf: CFrame): CFrame;
	toObjectSpace(cf: CFrame): CFrame;
	pointToWorldSpace(v3: Vector3): Vector3;
	pointToObjectSpace(v3: Vector3): Vector3;
	vectorToWorldSpace(v3: Vector3): Vector3;
	vectorToObjectSpace(v3: Vector3): Vector3;
	components(): Array<number>;
	toEulerAnglesXYZ(): [number, number, number];
	toAxisAngle(): [Vector3, number];
}

declare class Color3 {
	constructor();
	constructor(r: number, g: number, b: number);
	static fromRGB: (r: number, g: number, b: number) => Color3;
	static fromHSV: (hue: number, sat: number, val: number) => Color3;
	r: number;
	g: number;
	b: number;
	static toHSV: (color: Color3) => [number, number, number];
	lerp(goal: Color3, alpha: number): Color3;
}

declare class ColorSequence {
	constructor(color: Color3);
	constructor(c0: Color3, c1: Color3);
	constructor(colors: Array<ColorSequenceKeypoint>);
	Keypoints: Array<ColorSequenceKeypoint>;
}

declare class ColorSequenceKeypoint {
	constructor(time: number, color: Color3);
	Time: number;
	Value: Color3;
}

declare class DockWidgetPluginGuiInfo {
	constructor(
		initDockState?: Enum.InitialDockState,
		initEnabled?: boolean,
		overrideEnabledRestore?: boolean,
		floatXSize?: number,
		floatYSize?: number,
		minWidth?: number,
		minHeight?: number
	);
	InitialDockState: Enum.InitialDockState;
	InitialEnabled: boolean;
	InitialEnabledShouldOverrideRestore: boolean;
	FloatingXSize: number;
	FloatingYSize: number;
	MinWidth: number;
	MinHeight: number;
}

declare class Faces {
	constructor(...ids: Array<Enum.NormalId>);
	Top: boolean;
	Bottom: boolean;
	Back: boolean;
	Front: boolean;
	Right: boolean;
	Left: boolean;
}

declare class NumberRange {
	constructor(value: number);
	constructor(minimum: number, maximum: number);
	Min: number;
	Max: number;
}

declare class NumberSequence {
	constructor(val: number);
	constructor(keypoints: Array<NumberSequenceKeypoint>);
	Keypoints: Array<NumberSequenceKeypoint>;
}

declare class NumberSequenceKeypoint {
	constructor();
	constructor(time: number, value: number, envelope: number);
	Envelope: number;
	Time: number;
	Value: number;
}

declare class PathWaypoint {
	constructor(position: Vector3, action: Enum.PathWaypointAction);
	Action: Enum.PathWaypointAction;
	Position: Vector3;
}

declare class PhysicalProperties {
	constructor(material: Enum.Material);
	constructor(density: number, friction: number, elasticity: number);
	constructor(
		density: number,
		friction: number,
		elasticity: number,
		frictionWeight: number,
		elasticityWeight: number
	);
	Density: number;
	Friction: number;
	Elasticity: number;
	FrictionWeight: number;
	ElasticityWeight: number;
}

declare class Random {
	constructor(seed: number);
	NextNumber(min?: number, max?: number): number;
	NextInteger(min?: number, max?: number): number;
	Clone(): Random;
}

declare class Ray {
	constructor(origin: Vector3, direction: Vector3);
	ClosestPoint(point: Vector3): Vector3;
	Distance(point: Vector3): number;
	Origin: Vector3;
	Direction: Vector3;
	Unit: Ray;
}

declare class Rect {
	constructor(min: Vector2, max: Vector2);
	constructor(minX: number, minY: number, maxX: number, maxY: number);
	Min: Vector2;
	Max: Vector2;
	Width: number;
	Height: number;
}

declare class Region3 {
	constructor(min: Vector3, max: Vector3);
	CFrame: CFrame;
	Size: Vector3;
	ExpandToGrid(resolution: number): Region3;
}

declare class Region3int16 {
	constructor(min: Vector3int16, max: Vector3int16);
	Min: Vector3int16;
	Max: Vector3int16;
}

declare class TweenInfo {
	constructor(
		time?: number,
		easingStyle?: Enum.EasingStyle,
		easingDirection?: Enum.EasingDirection,
		repeatCount?: number,
		reverses?: boolean,
		delayTime?: number
	);
	Time: number;
	EasingStyle: Enum.EasingStyle;
	EasingDirection: Enum.EasingDirection;
	RepeatCount: number;
	Reverses: boolean;
	DelayTime: number;
}

declare class UDim {
	constructor(scale: number, offset: number);
	Scale: number;
	Offset: number;
}

declare class UDim2 {
	constructor();
	constructor(xScale: number, xOffset: number, yScale: number, yOffset: number);
	constructor(xDim: UDim, yDim: UDim);
	X: UDim;
	Y: UDim;
	Width: UDim;
	Height: UDim;
	Lerp(goal: UDim2, alpha: number): UDim2;
}

declare class Vector2 {
	constructor(x?: number, y?: number);
	X: number;
	Y: number;
	Unit: Vector2;
	Magnitude: number;
	Dot(other: Vector2): number;
	Lerp(goal: Vector2, alpha: number): Vector2;
	Cross(other: Vector2): Vector2;
}

declare class Vector2int16 {
	constructor(x?: number, y?: number);
	X: number;
	Y: number;
}

declare class Vector3 {
	constructor(x?: number, y?: number, z?: number);
	static FromNormalId: (norm: Enum.NormalId) => Vector3;
	static FromAxis: (axis: Enum.Axis) => Vector3;
	Lerp(goal: Vector3, alpha: number): Vector3;
	Dot(other: Vector3): number;
	Cross(other: Vector3): Vector3;
	isClose(other: Vector3, epsilon: number): boolean;
	X: number;
	Y: number;
	Z: number;
	Unit: Vector3;
	Magnitude: number;
}

declare class Vector3int16 {
	constructor(x?: number, y?: number, z?: number);
	X: number;
	Y: number;
	Z: number;
}

// unusable internal studio classes
declare class QFont {}
declare class QDir {}

// built-in globals
declare const game: DataModel;
declare const script: LuaSourceContainer;
declare const shared: any;

// built-in functions
declare function delay(delayTime: number, callback: Callback): void;
declare function elapsedTime(): number;
declare function require(moduleScript: ModuleScript): any;
declare function settings(): GlobalSettings;
declare function spawn(callback: Callback): void;
declare function tick(): number;
declare function time(): number;
declare function UserSettings(): UserSettings;
declare function version(): string;
declare function wait(seconds?: number): [number, number];
declare function warn(...params: Array<any>): void;

declare namespace math {
	function noise(x?: number, y?: number, z?: number): number;
	function clamp(x: number, min: number, max: number): number;
}
