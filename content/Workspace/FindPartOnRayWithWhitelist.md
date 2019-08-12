This function returns the first `BasePart` intersecting with the given [DataType.Ray](https://developer.roblox.com/search#stq=Ray) that is in, or is a descendant of an object in, the given white-list. It also returns the position of intersection, the surface normal of the intersecting part at the point of intersection, and the part's [BasePart.Material](https://developer.roblox.com/api-reference/property/BasePart/Material).

This function is a variant of [Workspace.FindPartOnRay](https://developer.roblox.com/api-reference/function/Workspace/FindPartOnRay) with the addition of a whitelist. This allows the developer to only look at certain parts or [Models](https://developer.roblox.com/api-reference/class/Model). This can be particularly useful when, for example, looking for points of intersection between a ray and a single part.

```lua
local function getIntersection(part, ray)
	local whiteList = {part}
	local _, position, normal = workspace:FindPartOnRayWithWhitelist(ray, whiteList)
	return position, normal
end
```

Those looking to utilize an ignore list instead should use [Workspace.FindPartOnRayWithIgnoreList](https://developer.roblox.com/api-reference/function/Workspace/FindPartOnRayWithIgnoreList).

## Notes

 - Theoretically, a ray extends infinitely in one direction. However, the max length of the direction vector on Roblox is 5000 studs

 - The length of the direction vector is important - parts further away than its length will not be tested

 - If the ray does not intersect a part, the return values will be nil and the point at the end of the ray, respectively

 - If a nil value is given in the white list, instances after this value will be disregarded

 - Parts that are in a [collision group](https://developer.roblox.com/api-reference/function/PhysicsService/SetPartCollisionGroup) that does not collide with the "Default" collision group are ignored implicitly

For more information on how raycasting works in Roblox, please see the articles on [raycasting basics][1] and [how to make raycasting guns][2].

[1]: https://developer.roblox.com/articles/Raycasting

[2]: https://developer.roblox.com/articles/Making-a-ray-casting-laser-gun-in-Roblox
@param ray The specified `DataType/Ray`
@param whitelistDescendantsTable An array of objects to be checked
@param ignoreWater Whether water will be ignored or not. This only applies if the `Workspace|Workspace's` `Terrain` has been included in the white-list. Otherwise, otherwise water is ignored along with terrain by default

@returns A tuple containing:
 - The `BasePart` (or `Terrain`) hit
 - The `DataType/Vector3` point of intersection
 - The `DataType/Vector3` surface normal at the point of intersection and the 
 - `Enum/Material` of the `BasePart` or terrain cell hit