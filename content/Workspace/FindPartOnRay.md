FindPartOnRay uses [raycasting][1] to find the first `BasePart` intersecting with a given [DataType.Ray](https://developer.roblox.com/search#stq=Ray). This function returns the position of intersection, the surface normal of the intersecting `BasePart` at the point of intersection, and the `BasePart`'s [BasePart.Material](https://developer.roblox.com/api-reference/property/BasePart/Material).

```lua
local character = game.Players.LocalPlayer.Character
-- Get the head
local head = character:FindFirstChild("Head")
-- Build a ray in the direction the head is facing
local origin = head.Position
local lookDirection = head.CFrame.lookVector
500)
-- Raycast, ignoring the player's character
local part, hitPosition = workspace:FindPartOnRay(ray, character)
if part then
	print("Hit part: " .. part:GetFullName())
else
	print("Did not hit part")
end
```

The `terrainCellsAreCubes` and `ignoreWater` parameters determine whether `Terrain` cells should be treated as cubes or not, and whether water should be ignored or not.

If the `ignoreDescendantsInstance` parameter is provided, the raycasting calculation will ignore the given object and all of its descendants. It behaves similar to the [Mouse.TargetFilter](https://developer.roblox.com/api-reference/property/Mouse/TargetFilter) property.

In order to white-list or ignore multiple objects and their descendants, use these variants: [FindPartOnRayWithWhitelist](https://developer.roblox.com/api-reference/function/Workspace/FindPartOnRayWithWhitelist) and [FindPartOnRayWithIgnoreList](https://developer.roblox.com/api-reference/function/Workspace/FindPartOnRayWithIgnoreList).

## Notes

 - Theoretically, a ray extends infinitely in one direction. However, the max length of the direction vector on Roblox is 5000 studs

 - The length of the direction vector is important - parts further away than its length will not be tested

 - If the ray does not intersect a part, the return values will be nil and the point at the end of the ray, respectively

 - Parts that are in a [collision group](https://developer.roblox.com/api-reference/function/PhysicsService/SetPartCollisionGroup) that does not collide with the "Default" collision group are ignored implicitly

For more information on how raycasting works in Roblox, please see the articles on [raycasting basics][1] and [how to make raycasting guns][2].

[1]: https://developer.roblox.com/articles/Raycasting

[2]: https://developer.roblox.com/articles/Making-a-ray-casting-laser-gun-in-Roblox
@param ray The `DataType/Ray`.
@param ignoreDescendantsInstance An `Instance` to be ignored.
@param terrainCellsAreCubes True if terrain cells should be treated as cubes.
@param ignoreWater True if terrain water should be ignored.
@returns The `BasePart` (or `Terrain`) hit, the `DataType/Vector3` point of intersection, the `DataType/Vector3` surface normal at the point of intersection and the `Enum/Material` of the `BasePart` or terrain cell hit.