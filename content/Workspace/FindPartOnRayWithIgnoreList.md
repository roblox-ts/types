This function returns the first `BasePart` intersecting with the given [DataType.Ray](https://developer.roblox.com/search#stq=Ray) that isn't in, or a descendant of an object in, the given ignore list. It also returns the position of intersection, the surface normal of the intersecting part at the point of intersection, and the part's [BasePart.Material](https://developer.roblox.com/api-reference/property/BasePart/Material).

This function is a variant of [Workspace.FindPartOnRay](https://developer.roblox.com/api-reference/function/Workspace/FindPartOnRay) with the addition of an ignore list. This allows the developer to ignore certain parts or `Model`s.

The terrainCellsAreCubes and ignoreWater parameters determine whether terrain cells should be treated as cubes, and whether water should be ignored.

Those looking to utilize a white list instead should use [Workspace.FindPartOnRayWithWhitelist](https://developer.roblox.com/api-reference/function/Workspace/FindPartOnRayWithWhitelist).

For more information on how raycasting works in Roblox, please see the articles on [raycasting basics][1] and [how to make raycasting guns][2].

## Notes

 - Theoretically, a ray extends infinitely in one direction. However, the max length of the direction vector on Roblox is 5000 studs

 - The length of the direction vector is important - parts further away than its length will not be tested

 - If the ray does not intersect a part, the return values will be nil and the point at the end of the ray, respectively

 - If a nil value is given in the ignore list, instances after this value will not be ignored

 - Parts that are in a [collision group](https://developer.roblox.com/api-reference/function/PhysicsService/SetPartCollisionGroup) that does not collide with the "Default" collision group are ignored implicitly

[1]: https://developer.roblox.com/articles/Raycasting

[2]: https://developer.roblox.com/articles/Making-a-ray-casting-laser-gun-in-Roblox
@param ray The `DataType/Ray`.
@param ignoreDescendantsTable An array of objects to be ignored.
@param terrainCellsAreCubes True if terrain cells should be treated as cubes.
@param ignoreWater True if terrain water should be ignored.
@returns The `BasePart` (or `Terrain`) hit, the `DataType/Vector3` point of intersection, the `DataType/Vector3` surface normal at the point of intersection and the `Enum/Material` of the `BasePart` or terrain cell hit.