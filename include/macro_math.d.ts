// MACRO MATH API

declare interface CFrame {
	mul(cf: CFrame): CFrame;
	mul(v3: Vector3): Vector3;
	add(v3: Vector3): CFrame;
	sub(v3: Vector3): CFrame;
}

declare interface UDim {
	add(udim: UDim): UDim;
}

declare interface UDim2 {
	add(udim2: UDim2): UDim2;
}

declare interface Vector2 {
	add(v2: Vector2): Vector2;
	sub(v2: Vector2): Vector2;
	mul(v2: Vector2): Vector2;
	div(v2: Vector2): Vector2;
	mul(n: number): Vector2;
	div(n: number): Vector2;
}

declare interface Vector2int16 {
	add(v2: Vector2int16): Vector2int16;
	sub(v2: Vector2int16): Vector2int16;
	mul(v2: Vector2int16): Vector2int16;
	div(v2: Vector2int16): Vector2int16;
}

declare interface Vector3 {
	add(v3: Vector3): Vector3;
	sub(v3: Vector3): Vector3;
	mul(v3: Vector3): Vector3;
	div(v3: Vector3): Vector3;
	mul(n: number): Vector3;
	div(n: number): Vector3;
}

declare interface Vector3int16 {
	add(v3: Vector3int16): Vector3int16;
	sub(v3: Vector3int16): Vector3int16;
	mul(v3: Vector3int16): Vector3int16;
	div(v3: Vector3int16): Vector3int16;
}
