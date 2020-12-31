/// <reference no-default-lib="true"/>

// MACRO MATH API

declare interface CFrame {
	/** macro for the `+` operator */
	add(this: CFrame, op: Vector3): CFrame;
	/** macro for the `-` operator */
	sub(this: CFrame, op: Vector3): CFrame;
	/** macro for the `*` operator */
	mul<T extends CFrame | Vector3>(this: CFrame, op: T): T;
}

declare interface UDim {
	/** macro for the `+` operator */
	add(this: UDim, op: UDim): UDim;
	/** macro for the `-` operator */
	sub(this: UDim, op: UDim): UDim;
}

declare interface UDim2 {
	/** macro for the `+` operator */
	add(this: UDim2, op: UDim2): UDim2;
	/** macro for the `-` operator */
	sub(this: UDim2, op: UDim2): UDim2;
}

declare interface Vector2 {
	/** macro for the `+` operator */
	add(this: Vector2, op: Vector2): Vector2;
	/** macro for the `-` operator */
	sub(this: Vector2, op: Vector2): Vector2;
	/** macro for the `*` operator */
	mul(this: Vector2, op: Vector2 | number): Vector2;
	/** macro for the `/` operator */
	div(this: Vector2, op: Vector2 | number): Vector2;
}

declare interface Vector2int16 {
	/** macro for the `+` operator */
	add(this: Vector2int16, op: Vector2int16): Vector2int16;
	/** macro for the `-` operator */
	sub(this: Vector2int16, op: Vector2int16): Vector2int16;
	/** macro for the `*` operator */
	mul(this: Vector2int16, op: Vector2int16): Vector2int16;
	/** macro for the `/` operator */
	div(this: Vector2int16, op: Vector2int16): Vector2int16;
}

declare interface Vector3 {
	/** macro for the `+` operator */
	add(this: Vector3, op: Vector3): Vector3;
	/** macro for the `-` operator */
	sub(this: Vector3, op: Vector3): Vector3;
	/** macro for the `*` operator */
	mul(this: Vector3, op: Vector3 | number): Vector3;
	/** macro for the `/` operator */
	div(this: Vector3, op: Vector3 | number): Vector3;
}

declare interface Vector3int16 {
	/** macro for the `+` operator */
	add(this: Vector3int16, op: Vector3int16): Vector3int16;
	/** macro for the `-` operator */
	sub(this: Vector3int16, op: Vector3int16): Vector3int16;
	/** macro for the `*` operator */
	mul(this: Vector3int16, op: Vector3int16): Vector3int16;
	/** macro for the `/` operator */
	div(this: Vector3int16, op: Vector3int16): Vector3int16;
}
