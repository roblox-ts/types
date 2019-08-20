Returns a bool stating if no `BasePart`s are in the given [DataType.Region3](https://developer.roblox.com/search#stq=Region3).

The optional ignoreDescendentsInstance parameter can be used to specify a specific instance for whom itself and all of its descendants should be ignored by this function. This can be useful when, for example, looking to see if any `BasePart`s are inside a `BasePart` other than the `BasePart` itself.

```lua
part.Size)
part.Size)
local region = Region3.new(min, max)
local isPartEmpty = workspace:IsRegion3Empty(region, part) --  ignore part
```

If more than one object and its descendants need to be excluded from the search, developers should use [Workspace.IsRegion3EmptyWithIgnoreList](https://developer.roblox.com/api-reference/function/Workspace/IsRegion3EmptyWithIgnoreList).

This function only returns if a region is empty or not. Developers looking to find `BasePart`s in a region should use [Workspace.FindPartsInRegion3](https://developer.roblox.com/api-reference/function/Workspace/FindPartsInRegion3).

## How do Region3 checks work?

Checking if a part overlaps a [DataType.Region3](https://developer.roblox.com/search#stq=Region3) is not a simple process. It actually is time consuming and complicated. Instead it checks if parts are roughly in the same area. When this function is called, it figures out which voxels contain the [DataType.Region3](https://developer.roblox.com/search#stq=Region3). It then figures out which parts might be in those voxels. It does this by comparing the axis-aligned bounding box (sometimes called the AABB) of the part with the voxels. The axis-aligned bounding box can be seen in Roblox Studio when a part is selected.

This means that the area that is inspected by the function may be larger than the [DataType.Region3](https://developer.roblox.com/search#stq=Region3). For this reason it is recommended to make sure that the [DataType.Region3](https://developer.roblox.com/search#stq=Region3) is on the voxel grid. The best way to do this is by setting the coordinates of the [DataType.Region3](https://developer.roblox.com/search#stq=Region3) to multiples of 4 (since voxels are 4 x 4 x 4 studs).

This method is a fairly quick and easy way to see if any parts are in a general area. If a game needs to know if parts are exactly in an area, then [BasePart.GetTouchingParts](https://developer.roblox.com/api-reference/function/BasePart/GetTouchingParts) should be used. There is a higher cost to using [BasePart.GetTouchingParts](https://developer.roblox.com/api-reference/function/BasePart/GetTouchingParts) since a part is needed in the `Workspace` and the function takes more time to run.
@param region The `DataType/Region3` to be checked.
@param ignoreDescendentsInstance An `Instance` to be ignored.
@returns True if the `DataType/Region3` is empty.