Returns an array of `BasePart`s in the given [DataType.Region3](https://developer.roblox.com/search#stq=Region3).

This function takes an optional maxParts parameter (default 20) which limits the number of `BasePart`s that can be returned. Once this number has been reached, the search for `BasePart`s will stop. This means some `BasePart`s may not be returned even if they are within the [DataType.Region3](https://developer.roblox.com/search#stq=Region3)

The optional ignoreDescendentsInstance parameter can be used to specify a specific instance for whom itself and all of its descendants should be ignored by this function. This can be useful when, for example, looking to see if any `BasePart`s are inside a `BasePart` other than the `BasePart` itself.

```lua
part.Size)
part.Size)
local region = Region3.new(min, max)
local parts = workspace:FindPartsInRegion3(region, part) --  ignore part
```

Variants of this function exist with ignore-list and white-list functionality, [Workspace.FindPartsInRegion3WithIgnoreList](https://developer.roblox.com/api-reference/function/Workspace/FindPartsInRegion3WithIgnoreList) and [Workspace.FindPartsInRegion3WithWhiteList](https://developer.roblox.com/api-reference/function/Workspace/FindPartsInRegion3WithWhiteList).

If no `BasePart`s are found, an empty array will be returned.

## How do Region3 checks work?

Checking if a part overlaps a [DataType.Region3](https://developer.roblox.com/search#stq=Region3) is not a simple process. It actually is time consuming and complicated. Instead it checks if parts are roughly in the same area. When this function is called, it figures out which voxels contain the [DataType.Region3](https://developer.roblox.com/search#stq=Region3). It then figures out which parts might be in those voxels. It does this by comparing the axis-aligned bounding box (sometimes called the AABB) of the part with the voxels. The axis-aligned bounding box can be seen in Roblox Studio when a part is selected.

This means that the area that is inspected by the function may be larger than the [DataType.Region3](https://developer.roblox.com/search#stq=Region3). For this reason it is recommended to make sure that the [DataType.Region3](https://developer.roblox.com/search#stq=Region3) is on the voxel grid. The best way to do this is by setting the coordinates of the [DataType.Region3](https://developer.roblox.com/search#stq=Region3) to multiples of 4 (since voxels are 4 x 4 x 4 studs).

This method is a fairly quick and easy way to see if parts are in a general area. If a game needs to know if parts are exactly in an area, then [BasePart.GetTouchingParts](https://developer.roblox.com/api-reference/function/BasePart/GetTouchingParts) should be used. There is a higher cost to using [BasePart.GetTouchingParts](https://developer.roblox.com/api-reference/function/BasePart/GetTouchingParts) since a part is needed in the `Workspace` and the function takes more time to run.
@param region The `DataType/Region3` to be checked.
@param ignoreDescendantsInstance An `Instance` to be ignored.
@param maxParts The maximum amount of `BasePart`s to be returned.
@returns An array of `BasePart`s within the `DataType/Region3`.