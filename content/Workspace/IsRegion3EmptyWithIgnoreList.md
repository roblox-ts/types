Returns a bool stating if no `BasePart`s are in the given [DataType.Region3](https://developer.roblox.com/search#stq=Region3), ignoring any `BasePart`s that are in, or descend from objects in, the ignore list given.

For example, the following code snippet will check to see if the Region is empty, ignoring the descendants of a `Model` named 'Scenery'.

```lua
local region3 = Region3.new(Vector3.new(0, 0, 0), Vector3.new(10, 10, 10))
local scenery = workspace:FindFirstChild("Scenery")
local ignoreList = {scenery}
local isEmpty = workspace:IsRegion3EmptyWithIgnoreList(region3, ignoreList)
```

This function only returns if a region is empty or not. Developers looking to find `BasePart`s in a region should use [Workspace.FindPartsInRegion3WithIgnoreList](https://developer.roblox.com/api-reference/function/Workspace/FindPartsInRegion3WithIgnoreList).

This function is a variant of [Workspace.IsRegion3Empty](https://developer.roblox.com/api-reference/function/Workspace/IsRegion3Empty) with the addition of an ignore list. In cases where a white list is required instead, developers should check to see if any parts are returned by [Workspace.FindPartsinRegion3WithWhitelist](https://developer.roblox.com/search#stq=FindPartsinRegion3WithWhitelist).

## How do Region3 checks work?

Checking if a part overlaps a [DataType.Region3](https://developer.roblox.com/search#stq=Region3) is not a simple process. It actually is time consuming and complicated. Instead it checks if parts are roughly in the same area. When this function is called, it figures out which voxels contain the [DataType.Region3](https://developer.roblox.com/search#stq=Region3). It then figures out which parts might be in those voxels. It does this by comparing the axis-aligned bounding box (sometimes called the AABB) of the part with the voxels. The axis-aligned bounding box can be seen in Roblox Studio when a part is selected.

This means that the area that is inspected by the function may be larger than the [DataType.Region3](https://developer.roblox.com/search#stq=Region3). For this reason it is recommended to make sure that the [DataType.Region3](https://developer.roblox.com/search#stq=Region3) is on the voxel grid. The best way to do this is by setting the coordinates of the [DataType.Region3](https://developer.roblox.com/search#stq=Region3) to multiples of 4 (since voxels are 4 x 4 x 4 studs).

This method is a fairly quick and easy way to see if any parts are in a general area. If a game needs to know if parts are exactly in an area, then [BasePart.GetTouchingParts](https://developer.roblox.com/api-reference/function/BasePart/GetTouchingParts) should be used. There is a higher cost to using [BasePart.GetTouchingParts](https://developer.roblox.com/api-reference/function/BasePart/GetTouchingParts) since a part is needed in the `Workspace` and the function takes more time to run.

## Notes

 - If a nil value is given in the ignore list, instances after this value will not be ignored
@param region The `DataType/Region3` to be checked.
@param ignoreDescendentsTable An array of objects to be ignored.
@returns True if the `DataType/Region3` is empty.