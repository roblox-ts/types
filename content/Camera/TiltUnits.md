This function ‘tilts’ the `Camera` by rotating it around the [Camera.Focus](https://developer.roblox.com/api-reference/property/Camera/Focus) around the [Camera’s](https://developer.roblox.com/api-reference/class/Camera) X axis by a given multiple of 10 degrees.

The rotation is applied to the [Camera’s](https://developer.roblox.com/api-reference/class/Camera) [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) property and is constrained between *-81.05* and *81.05* degrees.

This function tilts the `Camera` in 10 degree increments, for example:

```lua
workspace.CurrentCamera:TiltUnits(2) -- 20 degrees
workspace.CurrentCamera:TiltUnits(-5) -- -50 degrees
```

TiltUnits does not require the [Camera.CameraType](https://developer.roblox.com/api-reference/property/Camera/CameraType) to be *’Scriptable’*.

## See also

 - [Camera.PanUnits](https://developer.roblox.com/api-reference/function/Camera/PanUnits)
@param units The number of 10 degree units by which to to tilt the `Camera`
@returns Whether the `Camera` tilt applied was constrained