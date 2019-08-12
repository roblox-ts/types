This is a server-only function that uses [CSG][1] to combine the geometry of the calling `BasePart` with a table of other [BaseParts](https://developer.roblox.com/api-reference/class/BasePart). It returns a parentless `UnionOperation` named **Union** with the following specs:

* The faces of the returned `UnionOperation` inherit the colors of the original parts' faces.

* The [UsePartColor](https://developer.roblox.com/api-reference/property/PartOperation/UsePartColor) property will be false.

* The [CollisionFidelity](https://developer.roblox.com/search#stq=CollisionFidelity) will match the provided enum (or&nbsp;default).

* The returned `UnionOperation` inherits the following properties from the part that this function was called from: [Color](https://developer.roblox.com/api-reference/property/BasePart/Color), [Material](https://developer.roblox.com/api-reference/property/BasePart/Material), [Reflectance](https://developer.roblox.com/api-reference/property/BasePart/Reflectance), [Transparency](https://developer.roblox.com/api-reference/property/BasePart/Transparency), [Anchored](https://developer.roblox.com/api-reference/property/BasePart/Anchored), [CanCollide](https://developer.roblox.com/api-reference/property/BasePart/CanCollide), [Elasticity](https://developer.roblox.com/api-reference/property/BasePart/Elasticity), [Friction](https://developer.roblox.com/api-reference/property/BasePart/Friction), and [CustomPhysicalProperties](https://developer.roblox.com/api-reference/property/BasePart/CustomPhysicalProperties).

See the [In-Game Solid Modeling](https://developer.roblox.com/search#stq=in%20game%20solid%20modeling) article for more information.

Note that if a `NegateOperation` is provided, it will also be unioned additively. For subtraction, use [SubtractAsync()](https://developer.roblox.com/api-reference/function/BasePart/SubtractAsync).

The original parts remain unchanged following a successful union operation. In most cases, you should destroy all of the original parts and parent the returned `UnionOperation` to the same place as the calling `BasePart`.

## Potential Errors

This function raises an error under the following conditions:

* When called by the client (this cannot be called by a `LocalScript`).

* If any of the objects involved are not supported by CSG (only [BaseParts](https://developer.roblox.com/api-reference/class/BasePart) are supported, not `Terrain` or meshes).

* If the result could not be computed with less than 5000 triangles.

* Some other CSG problem occurred while attempting to union.

[1]: https://developer.roblox.com/articles/3D-Modeling-with-Parts
@param parts The parts being unioned
@returns The resulting `UnionOperation`
@rbxts server