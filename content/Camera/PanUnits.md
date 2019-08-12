This function pans the `Camera` around the [Camera.Focus](https://developer.roblox.com/api-reference/property/Camera/Focus) in 45 degree increments around the Y axis.

The rotation is applied to the [Camera’s](https://developer.roblox.com/api-reference/class/Camera) [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) property.

This function pans the `Camera` in 45 degree increments, for example:

```lua
workspace.CurrentCamera:PanUnits(1) -- 45 degrees
workspace.CurrentCamera:PanUnits(-2) -- -90 degrees
```

PanUnits does not require the [Camera.CameraType](https://developer.roblox.com/api-reference/property/Camera/CameraType) to be *’Scriptable’*.
@param units The number of 45 degree increments by which to pan the `Camera`
@returns void