/// <reference no-default-lib="true"/>

// MACRO MATH API

declare interface CFrame {
	/** macro for CFrame * CFrame */
	mul(cf: CFrame): CFrame;
	/** macro for CFrame * Vector3 */
	mul(v3: Vector3): Vector3;
	/** macro for CFrame + Vector3 */
	add(v3: Vector3): CFrame;
	/** macro for CFrame - Vector3 */
	sub(v3: Vector3): CFrame;
}

declare interface UDim {
	/** macro for UDim + UDim */
	add(udim: UDim): UDim;
	/** macro for UDim - UDim */
	sub(udim: UDim): UDim;
}

declare interface UDim2 {
	/** macro for UDim2 + UDim2 */
	add(udim2: UDim2): UDim2;
	/** macro for UDim2 - UDim2 */
	sub(udim2: UDim2): UDim2;
}

declare interface Vector2 {
	/** macro for Vector2 + Vector2 */
	add(v2: Vector2): Vector2;
	/** macro for Vector2 - Vector2 */
	sub(v2: Vector2): Vector2;
	/** macro for Vector2 * Vector2 */
	mul(v2: Vector2): Vector2;
	/** macro for Vector2 / Vector2 */
	div(v2: Vector2): Vector2;
	/** macro for Vector2 * number */
	mul(n: number): Vector2;
	/** macro for Vector2 / number */
	div(n: number): Vector2;
}

declare interface Vector2int16 {
	/** macro for Vector2int16 + Vector2int16 */
	add(v2: Vector2int16): Vector2int16;
	/** macro for Vector2int16 - Vector2int16 */
	sub(v2: Vector2int16): Vector2int16;
	/** macro for Vector2int16 * Vector2int16 */
	mul(v2: Vector2int16): Vector2int16;
	/** macro for Vector2int16 / Vector2int16 */
	div(v2: Vector2int16): Vector2int16;
}

declare interface Vector3 {
	/** macro for Vector3 + Vector3 */
	add(v3: Vector3): Vector3;
	/** macro for Vector3 - Vector3 */
	sub(v3: Vector3): Vector3;
	/** macro for Vector3 * Vector3 */
	mul(v3: Vector3): Vector3;
	/** macro for Vector3 / Vector3 */
	div(v3: Vector3): Vector3;
	/** macro for Vector3 * number */
	mul(n: number): Vector3;
	/** macro for Vector3 / number */
	div(n: number): Vector3;
}

declare interface Vector3int16 {
	/** macro for Vector2int16 + Vector2int16 */
	add(v3: Vector3int16): Vector3int16;
	/** macro for Vector2int16 - Vector2int16 */
	sub(v3: Vector3int16): Vector3int16;
	/** macro for Vector2int16 * Vector2int16 */
	mul(v3: Vector3int16): Vector3int16;
	/** macro for Vector2int16 / Vector2int16 */
	div(v3: Vector3int16): Vector3int16;
}
