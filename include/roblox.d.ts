/// <reference no-default-lib="true"/>
/// <reference path="es.d.ts" />
/// <reference path="lua.d.ts" />
/// <reference path="manual.d.ts" />
/// <reference path="macro_math.d.ts" />
/// <reference path="generated_enums.d.ts" />
/// <reference path="generated_classes.d.ts" />

// ROBLOX API

interface Indexable<T extends RbxInstance> { [i: string]: Instance }

type FunctionArguments<T> = T extends (...args: infer U) => void ? U : never;

type Callback = (...args: Array<any>) => void;

interface Base<T extends string> {
	readonly ClassName: T;
}
type BaseType<T> = T extends Base<infer U> ? U : never;

interface RBXScriptConnection {
	Disconnect(): void;
	Connected: boolean;
}

interface RBXScriptSignal<T = Function, P = false> {
	Connect<O extends Array<unknown> = FunctionArguments<T>>(
		callback: P extends true ? (FunctionArguments<T> extends Array<unknown> ? (...args: O) => void : T) : T,
	): RBXScriptConnection;
	Wait(): FunctionArguments<T>;
}

// generated in generated_classes.d.ts
interface Instances {}
interface CreatableInstances {}

// InstanceConstructor
interface InstanceConstructor {
	new <T extends keyof CreatableInstances>(className: T, parent?: Instance): CreatableInstances[T];
	new (className: string, parent?: Instance): Instance;
}

declare const Instance: InstanceConstructor;

// Axes
interface Axes {
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
interface AxesConstructor {
	new (...axes: Array<Enum.Axis | Enum.NormalId>): Axes;
}
declare const Axes: AxesConstructor;

// BrickColor
interface BrickColor {
	readonly Number: number;
	readonly Name: string;
	readonly Color: Color3;
	readonly r: number;
	readonly g: number;
	readonly b: number;
}
interface BrickColorConstructor {
	new (val: string): BrickColor;
	new (val: number): BrickColor;
	new (r: number, g: number, b: number): BrickColor;
	new (color: Color3): BrickColor;
	palette: (paletteValue: number) => BrickColor;
	random: () => BrickColor;
	White: () => BrickColor;
	Gray: () => BrickColor;
	DarkGray: () => BrickColor;
	Black: () => BrickColor;
	Red: () => BrickColor;
	Yellow: () => BrickColor;
	Green: () => BrickColor;
	Blue: () => BrickColor;
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
	inverse(): CFrame;
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
	components(): [number, number, number, number, number, number, number, number, number, number, number, number];
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, Y, X order */
	toEulerAnglesXYZ(): [number, number, number];
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, X, Y order */
	toEulerAnglesYXZ(): [number, number, number];
	/** Returns approximate angles that could be used to generate CFrame, if angles were applied in Z, X, Y order (Equivalent to toEulerAnglesYXZ) */
	toOrientation(): [number, number, number];
	/** Returns a tuple of a Vector3 and a number which represent the rotation of the CFrame in the axis-angle representation */
	toAxisAngle(): [Vector3, number];
}
interface CFrameConstructor {
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
}
declare const CFrame: CFrameConstructor;

// Color3
interface Color3 {
	readonly r: number;
	readonly g: number;
	readonly b: number;
	Lerp(goal: Color3, alpha: number): Color3;
}
interface Color3Constructor {
	new (): Color3;
	new (r: number, g: number, b: number): Color3;
	fromRGB: (r: number, g: number, b: number) => Color3;
	fromHSV: (hue: number, sat: number, val: number) => Color3;
	toHSV: (color: Color3) => [number, number, number];
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
interface ColorSequenceKeypointConstructor {
	new (time: number, color: Color3): ColorSequenceKeypoint;
}
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
interface DockWidgetPluginGuiInfoConstructor {
	new (
		initDockState?: Enum.InitialDockState,
		initEnabled?: boolean,
		overrideEnabledRestore?: boolean,
		floatXSize?: number,
		floatYSize?: number,
		minWidth?: number,
		minHeight?: number,
	): DockWidgetPluginGuiInfo;
}
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
interface FacesConstructor {
	new (...ids: Array<Enum.NormalId>): Faces;
}
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
interface PathWaypointConstructor {
	new (position: Vector3, action: Enum.PathWaypointAction): PathWaypoint;
}
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
	ClosestPoint(point: Vector3): Vector3;
	Distance(point: Vector3): number;
	readonly Origin: Vector3;
	readonly Direction: Vector3;
	readonly Unit: Ray;
}
interface RayConstructor {
	new (origin: Vector3, direction: Vector3): Ray;
}
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
interface Region3Constructor {
	new (min: Vector3, max: Vector3): Region3;
}
declare const Region3: Region3Constructor;

// Region3int16
interface Region3int16 {
	readonly Min: Vector3int16;
	readonly Max: Vector3int16;
}
interface Region3int16Constructor {
	new (min: Vector3int16, max: Vector3int16): Region3int16;
}
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
interface TweenInfoConstructor {
	new (
		time?: number,
		easingStyle?: Enum.EasingStyle,
		easingDirection?: Enum.EasingDirection,
		repeatCount?: number,
		reverses?: boolean,
		delayTime?: number,
	): TweenInfo;
}
declare const TweenInfo: TweenInfoConstructor;

// UDim
interface UDim {
	readonly Scale: number;
	readonly Offset: number;
}
interface UDimConstructor {
	new (scale: number, offset: number): UDim;
}
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
interface Vector2Constructor {
	new (x?: number, y?: number): Vector2;
}
declare const Vector2: Vector2Constructor;

// Vector2int16
interface Vector2int16 {
	readonly X: number;
	readonly Y: number;
}
interface Vector2int16Constructor {
	new (x?: number, y?: number): Vector2int16;
}
declare const Vector2int16: Vector2int16Constructor;

// Vector3
interface Vector3 {
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
interface Vector3Constructor {
	new (x?: number, y?: number, z?: number): Vector3;
	FromNormalId: (norm: Enum.NormalId) => Vector3;
	FromAxis: (axis: Enum.Axis) => Vector3;
}
declare const Vector3: Vector3Constructor;

// Vector3int16
interface Vector3int16 {
	readonly X: number;
	readonly Y: number;
	readonly Z: number;
}
interface Vector3int16Constructor {
	new (x?: number, y?: number, z?: number): Vector3;
}
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
