/// <reference no-default-lib="true"/>

// MACRO MATH API

declare interface CFrame {
	/** macro for the `+` operator */
	add(this: CFrame, v3: Vector3): CFrame;
	/** macro for the `-` operator */
	sub(this: CFrame, v3: Vector3): CFrame;
	/** macro for the `*` operator */
	mul(this: CFrame, cf: CFrame | Vector3): CFrame;
}

declare interface UDim {
	/** macro for the `+` operator */
	add(this: UDim, udim: UDim): UDim;
	/** macro for the `-` operator */
	sub(this: UDim, udim: UDim): UDim;
}

declare interface UDim2 {
	/** macro for the `+` operator */
	add(this: UDim2, udim2: UDim2): UDim2;
	/** macro for the `-` operator */
	sub(this: UDim2, udim2: UDim2): UDim2;
}

declare interface Vector2 {
	/** macro for the `+` operator */
	add(this: Vector2, v2: Vector2): Vector2;
	/** macro for the `-` operator */
	sub(this: Vector2, v2: Vector2): Vector2;
	/** macro for the `*` operator */
	mul(this: Vector2, v2: Vector2 | number): Vector2;
	/** macro for the `/` operator */
	div(this: Vector2, v2: Vector2 | number): Vector2;
}

declare interface Vector2int16 {
	/** macro for the `+` operator */
	add(this: Vector2int16, v2: Vector2int16): Vector2int16;
	/** macro for the `-` operator */
	sub(this: Vector2int16, v2: Vector2int16): Vector2int16;
	/** macro for the `*` operator */
	mul(this: Vector2int16, v2: Vector2int16): Vector2int16;
	/** macro for the `/` operator */
	div(this: Vector2int16, v2: Vector2int16): Vector2int16;
}

declare interface Vector3 {
	/** macro for the `+` operator */
	add(this: Vector3, v3: Vector3): Vector3;
	/** macro for the `-` operator */
	sub(this: Vector3, v3: Vector3): Vector3;
	/** macro for the `*` operator */
	mul(this: Vector3, v3: Vector3 | number): Vector3;
	/** macro for the `/` operator */
	div(this: Vector3, v3: Vector3 | number): Vector3;
}

declare interface Vector3int16 {
	/** macro for the `+` operator */
	add(this: Vector3int16, v3: Vector3int16): Vector3int16;
	/** macro for the `-` operator */
	sub(this: Vector3int16, v3: Vector3int16): Vector3int16;
	/** macro for the `*` operator */
	mul(this: Vector3int16, v3: Vector3int16): Vector3int16;
	/** macro for the `/` operator */
	div(this: Vector3int16, v3: Vector3int16): Vector3int16;
}
