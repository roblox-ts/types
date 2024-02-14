/// <reference no-default-lib="true"/>

// MACRO MATH API

declare interface Number extends IDiv<{ (this: number, other: number): number }> {}

declare interface CFrame
	extends Add<{ (this: CFrame, v3: Vector3): CFrame }>,
		Sub<{ (this: CFrame, v3: Vector3): CFrame }>,
		Mul<{
			(this: CFrame, cf: CFrame): CFrame;
			(this: CFrame, v3: Vector3): Vector3;
			(this: CFrame, other: CFrame | Vector3): CFrame | Vector3;
		}> {}

declare interface UDim extends Add<{ (this: UDim, udim: UDim): UDim }>, Sub<{ (this: UDim, udim: UDim): UDim }> {}

declare interface UDim2
	extends Add<{ (this: UDim2, udim2: UDim2): UDim2 }>,
		Sub<{ (this: UDim2, udim2: UDim2): UDim2 }> {}

declare interface Vector2
	extends Add<{ (this: Vector2, v2: Vector2): Vector2 }>,
		Sub<{ (this: Vector2, v2: Vector2): Vector2 }>,
		Mul<{ (this: Vector2, v2: Vector2): Vector2 }>,
		Div<{ (this: Vector2, other: Vector2 | number): Vector2 }>,
		IDiv<{ (this: Vector2, other: Vector2 | number): Vector2 }> {}

declare interface Vector2int16
	extends Add<{ (this: Vector2int16, v2: Vector2int16): Vector2int16 }>,
		Sub<{ (this: Vector2int16, v2: Vector2int16): Vector2int16 }>,
		Mul<{ (this: Vector2int16, v2: Vector2int16): Vector2int16 }>,
		Div<{ (this: Vector2int16, v2: Vector2int16): Vector2int16 }> {}

declare interface Vector3
	extends Add<{ (this: Vector3, v3: Vector3): Vector3 }>,
		Sub<{ (this: Vector3, v3: Vector3): Vector3 }>,
		Mul<{ (this: Vector3, other: Vector3 | number): Vector3 }>,
		Div<{ (this: Vector3, other: Vector3 | number): Vector3 }> {}

declare interface Vector3int16
	extends Add<{ (this: Vector3int16, v3: Vector3int16): Vector3int16 }>,
		Sub<{ (this: Vector3int16, v3: Vector3int16): Vector3int16 }>,
		Mul<{ (this: Vector3int16, v3: Vector3int16): Vector3int16 }>,
		Div<{ (this: Vector3int16, v3: Vector3int16): Vector3int16 }> {}
