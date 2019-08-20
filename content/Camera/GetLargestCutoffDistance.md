This function is used by *‘PopperCam’* in the default [camera scripts][1] to ensure obstructions do not come between the `Camera` and the [Camera’s](https://developer.roblox.com/api-reference/class/Camera) subject.

This function will check all [BaseParts](https://developer.roblox.com/api-reference/class/BasePart) and `Terrain` in the `Workspace` with the following exceptions:

 - Any `Instance` specified in the *ignoreList* (including its descendants) will be ignored

 - [BaseParts](https://developer.roblox.com/api-reference/class/BasePart) with [BasePart.CanCollide](https://developer.roblox.com/api-reference/property/BasePart/CanCollide) set to false are ignored

 - [BaseParts](https://developer.roblox.com/api-reference/class/BasePart) with a [BasePart.Transparency](https://developer.roblox.com/api-reference/property/BasePart/Transparency) greater than 0.95 will be ignored

Water `Terrain` is ignored

Note, as this function requires an *ignoreList* to run, you should pass an empty table when none is required.

[1]: http://robloxdev.com/articles/Movement-and-camera-controls
@param ignoreList An array of `Instance|Instances` to ignore. Descendants of these instances will also be ignored.
@returns The distance, in studs, that the `Camera` needs to be pushed towards its `Camera/Focus` to ensure there are no obstructions between the `Camera/Focus` and `Camera/CFrame` of the `Camera`