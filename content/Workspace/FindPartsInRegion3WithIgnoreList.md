Returns an array of `BasePart`s in the given [DataType.Region3](https://developer.roblox.com/search#stq=Region3) that aren't in, or a descendant of an entry in, the given IgnoreList.

This function takes an optional maxParts parameter (default 20) which limits the number of `BasePart`s that can be returned. Once this number has been reached, the search for `BasePart`s will stop. This means some `BasePart`s may not be returned even if they are within the [DataType.Region3](https://developer.roblox.com/search#stq=Region3)

If no `BasePart`s are found, an empty array will be returned.

This function is a variant of [Workspace.FindPartsInRegion3](https://developer.roblox.com/api-reference/function/Workspace/FindPartsInRegion3) with the addition of an ignore list. This allows the developer to exclude certain `BasePart`s or `Model`s, for example characters, from the search. Those looking to find `BasePart`s in a Region3 using a white list, should use [Workspace.FindPartsInRegion3WithWhitelist](https://developer.roblox.com/search#stq=FindPartsInRegion3WithWhitelist).

## How do Region3 checks work?

Checking if a part overlaps a [DataType.Region3](https://developer.roblox.com/search#stq=Region3) is not a simple process. It actually is time consuming and complicated. Instead it checks if parts are roughly in the same area. When this function is called, it figures out which voxels contain the [DataType.Region3](https://developer.roblox.com/search#stq=Region3). It then figures out which parts might be in those voxels. It does this by comparing the axis-aligned bounding box (sometimes called the AABB) of the part with the voxels. The axis-aligned bounding box can be seen in Roblox Studio when a part is selected.

This means that the area that is inspected by the function may be larger than the [DataType.Region3](https://developer.roblox.com/search#stq=Region3). For this reason it is recommended to make sure that the [DataType.Region3](https://developer.roblox.com/search#stq=Region3) is on the voxel grid. The best way to do this is by setting the coordinates of the [DataType.Region3](https://developer.roblox.com/search#stq=Region3) to multiples of 4 (since voxels are 4 x 4 x 4 studs).

This method is a fairly quick and easy way to see if parts are in a general area. If a game needs to know if parts are exactly in an area, then [BasePart.GetTouchingParts](https://developer.roblox.com/api-reference/function/BasePart/GetTouchingParts) should be used. There is a higher cost to using [BasePart.GetTouchingParts](https://developer.roblox.com/api-reference/function/BasePart/GetTouchingParts) since a part is needed in the `Workspace` and the function takes more time to run.

## Notes

 - If a nil value is given in the ignore list, instances after this value will not be ignored
@param region The `DataType/Region3` to be checked.
@param ignoreDescendantsTable An array of objects to be ignored.
@param maxParts The maximum number of `BasePart`s to be returned.
@returns An array of `BasePart`s found within the `DataType/Region3`.