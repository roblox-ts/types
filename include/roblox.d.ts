/// <reference no-default-lib="true"/>
/// <reference path="es.d.ts" />
/// <reference path="lua.d.ts" />
/// <reference path="manual.d.ts" />
/// <reference path="macro_math.d.ts" />
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

declare class RBXScriptSignal<T = Function> {
	Connect(callback: T): RBXScriptConnection;
	Wait(): FunctionArguments<T>;
}

declare class Axes {
	constructor(...axes: Array<Enum.Axis | Enum.NormalId>);
	readonly X: boolean;
	readonly Left: boolean;
	readonly Right: boolean;
	readonly Y: boolean;
	readonly Up: boolean;
	readonly Down: boolean;
	readonly Z: boolean;
	readonly Front: boolean;
	readonly Back: boolean;
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
	readonly Number: number;
	readonly Name: string;
	readonly Color: Color3;
	readonly r: number;
	readonly g: number;
	readonly b: number;
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
	readonly p: Vector3;
	readonly X: number;
	readonly Y: number;
	readonly Z: number;
	readonly lookVector: Vector3;
	readonly rightVector: Vector3;
	readonly upVector: Vector3;
	inverse(): CFrame;
	lerp(goal: CFrame, alpha: number): CFrame;
	toWorldSpace(cf: CFrame): CFrame;
	toObjectSpace(cf: CFrame): CFrame;
	pointToWorldSpace(v3: Vector3): Vector3;
	pointToObjectSpace(v3: Vector3): Vector3;
	vectorToWorldSpace(v3: Vector3): Vector3;
	vectorToObjectSpace(v3: Vector3): Vector3;
	components(): [number, number, number, number, number, number, number, number, number, number, number, number];
	toEulerAnglesXYZ(): [number, number, number];
	toAxisAngle(): [Vector3, number];
}

declare class Color3 {
	constructor();
	constructor(r: number, g: number, b: number);
	static fromRGB: (r: number, g: number, b: number) => Color3;
	static fromHSV: (hue: number, sat: number, val: number) => Color3;
	readonly r: number;
	readonly g: number;
	readonly b: number;
	static toHSV: (color: Color3) => [number, number, number];
	lerp(goal: Color3, alpha: number): Color3;
}

declare class ColorSequence {
	constructor(color: Color3);
	constructor(c0: Color3, c1: Color3);
	constructor(colors: ReadonlyArray<ColorSequenceKeypoint>);
	readonly Keypoints: ReadonlyArray<ColorSequenceKeypoint>;
}

declare class ColorSequenceKeypoint {
	constructor(time: number, color: Color3);
	readonly Time: number;
	readonly Value: Color3;
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
	readonly InitialDockState: Enum.InitialDockState;
	readonly InitialEnabled: boolean;
	readonly InitialEnabledShouldOverrideRestore: boolean;
	readonly FloatingXSize: number;
	readonly FloatingYSize: number;
	readonly MinWidth: number;
	readonly MinHeight: number;
}

declare class Faces {
	constructor(...ids: Array<Enum.NormalId>);
	readonly Top: boolean;
	readonly Bottom: boolean;
	readonly Back: boolean;
	readonly Front: boolean;
	readonly Right: boolean;
	readonly Left: boolean;
}

declare class NumberRange {
	constructor(value: number);
	constructor(minimum: number, maximum: number);
	readonly Min: number;
	readonly Max: number;
}

declare class NumberSequence {
	constructor(val: number);
	constructor(keypoints: ReadonlyArray<NumberSequenceKeypoint>);
	readonly Keypoints: ReadonlyArray<NumberSequenceKeypoint>;
}

declare class NumberSequenceKeypoint {
	constructor();
	constructor(time: number, value: number, envelope: number);
	readonly Envelope: number;
	readonly Time: number;
	readonly Value: number;
}

declare class PathWaypoint {
	constructor(position: Vector3, action: Enum.PathWaypointAction);
	readonly Action: Enum.PathWaypointAction;
	readonly Position: Vector3;
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
	readonly Density: number;
	readonly Friction: number;
	readonly Elasticity: number;
	readonly FrictionWeight: number;
	readonly ElasticityWeight: number;
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
	readonly Origin: Vector3;
	readonly Direction: Vector3;
	readonly Unit: Ray;
}

declare class Rect {
	constructor(min: Vector2, max: Vector2);
	constructor(minX: number, minY: number, maxX: number, maxY: number);
	readonly Min: Vector2;
	readonly Max: Vector2;
	readonly Width: number;
	readonly Height: number;
}

declare class Region3 {
	constructor(min: Vector3, max: Vector3);
	readonly CFrame: CFrame;
	readonly Size: Vector3;
	ExpandToGrid(resolution: number): Region3;
}

declare class Region3int16 {
	constructor(min: Vector3int16, max: Vector3int16);
	readonly Min: Vector3int16;
	readonly Max: Vector3int16;
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
	readonly Time: number;
	readonly EasingStyle: Enum.EasingStyle;
	readonly EasingDirection: Enum.EasingDirection;
	readonly RepeatCount: number;
	readonly Reverses: boolean;
	readonly DelayTime: number;
}

declare class UDim {
	constructor(scale: number, offset: number);
	readonly Scale: number;
	readonly Offset: number;
}

declare class UDim2 {
	constructor();
	constructor(xScale: number, xOffset: number, yScale: number, yOffset: number);
	constructor(xDim: UDim, yDim: UDim);
	readonly X: UDim;
	readonly Y: UDim;
	readonly Width: UDim;
	readonly Height: UDim;
	Lerp(goal: UDim2, alpha: number): UDim2;
}

declare class Vector2 {
	constructor(x?: number, y?: number);
	readonly X: number;
	readonly Y: number;
	readonly Unit: Vector2;
	readonly Magnitude: number;
	Dot(other: Vector2): number;
	Lerp(goal: Vector2, alpha: number): Vector2;
	Cross(other: Vector2): Vector2;
}

declare class Vector2int16 {
	constructor(x?: number, y?: number);
	readonly X: number;
	readonly Y: number;
}

declare class Vector3 {
	constructor(x?: number, y?: number, z?: number);
	static FromNormalId: (norm: Enum.NormalId) => Vector3;
	static FromAxis: (axis: Enum.Axis) => Vector3;
	Lerp(goal: Vector3, alpha: number): Vector3;
	Dot(other: Vector3): number;
	Cross(other: Vector3): Vector3;
	isClose(other: Vector3, epsilon: number): boolean;
	readonly X: number;
	readonly Y: number;
	readonly Z: number;
	readonly Unit: Vector3;
	readonly Magnitude: number;
}

declare class Vector3int16 {
	constructor(x?: number, y?: number, z?: number);
	readonly X: number;
	readonly Y: number;
	readonly Z: number;
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
declare function require(moduleScript: ModuleScript | number): unknown;
declare function settings(): GlobalSettings;
declare function spawn(callback: Callback): void;
declare function tick(): number;
declare function time(): number;
declare function UserSettings(): UserSettings;
declare function version(): string;
declare function wait(seconds?: number): [number, number];
declare function warn(...params: Array<any>): void;

declare namespace math {
	/** Returns a perlin noise value between -0.5 and 0.5. If you leave arguments out, they will be interpreted as zero, so math.noise(1.158) is equivalent to math.noise(1.158, 0, 0) and math.noise(1.158, 5.723) is equivalent to math.noise(1.158, 5.723, 0).
	 * The function uses a perlin noise algorithm to assign fixed values to coordinates. For example, math.noise(1.158, 5.723) will always return 0.48397532105446 and math.noise(1.158, 6) will always return 0.15315161645412.
	 * If x, y and z are all integers, the return value will be 0. For fractional values of x, y and z, the return value will gradually fluctuate between -0.5 and 0.5. For coordinates that are close to each other, the return values will also be close to each other. */
	function noise(x?: number, y?: number, z?: number): number;

	/** Returns a number between min and max, inclusive. */
	function clamp(n: number, min: number, max: number): number;
}
