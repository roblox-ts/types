This function returns an array of [BaseParts](https://developer.roblox.com/api-reference/class/BasePart) that are obscuring the lines of sight between [Camera’s](https://developer.roblox.com/api-reference/class/Camera) [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) and the *castPoints*.

GetPartsObscuringTarget is used by the ‘Invisicam’ in in the default [camera scripts][1] to hide parts between the [Camera’s](https://developer.roblox.com/api-reference/class/Camera) [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) and [Camera.Focus](https://developer.roblox.com/api-reference/property/Camera/Focus).

Any [Instances](https://developer.roblox.com/api-reference/class/Instance) included in the *ignoreList* array will, along with their descendants, be ignored.

See below for a visual example of this function. The `Camera` is represented by the grey camera model and the cast points are represented by the colored dots. The [Parts](https://developer.roblox.com/api-reference/class/Part) highlighted in red are the ones that would be returned.

![A visual demonstration of the function][2]

The castPoints parameter is given as an array of [Vector3s](https://developer.roblox.com/search#stq=Vector3), for example:

```lua
local castPoints = {Vector3.new(0, 10, 0), Vector3.new(0, 15, 0)}
local ignoreList = {}
workspace.CurrentCamera:GetPartsObscuringTarget(castPoints, ignoreList)
```

The array of [BaseParts](https://developer.roblox.com/api-reference/class/BasePart) returned is in an arbitrary order, and no additional raycast data is provided (for example hit position, hit material and surface normal). If this information is required, you should a `Workspace` raycast function such as [Workspace.FindPartOnRayWithIgnoreList](https://developer.roblox.com/api-reference/function/Workspace/FindPartOnRayWithIgnoreList).

If `Terrain` obscures a cast point, [BaseParts](https://developer.roblox.com/api-reference/class/BasePart) obscuring the cast point between the obscuring `Terrain` and the cast point will not be returned.

Note, this function benefits from internal optimisations that make it more performant than casting a ray for each cast point individually.

[1]: http://robloxdev.com/articles/Movement-and-camera-controls

[2]: https://developer.roblox.com/assets/5b842528a3326f570bb88a6b/GetPartsObscuringTarget.png
@param castPoints An array of `DataType/Vector3` positions of cast points

@param ignoreList An array of `Instance|Instances` that, along with their descendants, are to be ignored
@returns An array of `BasePart|BaseParts` that obscure the lines of sight between the `Camera|Camera’s` `Camera/CFrame` and the *castPoints*