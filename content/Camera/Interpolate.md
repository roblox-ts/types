This function tweens the `Camera` in a linear fashion towards a new [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) and [Camera.Focus](https://developer.roblox.com/api-reference/property/Camera/Focus) over a given duration, for example:

```lua
local camera = workspace.CurrentCamera
camera.CameraType = Enum.CameraType.Scriptable

camera:Interpolate(
	CFrame.new(0, 10, 100),
	CFrame.new(0, 0, 100),
	5
)
```

Throughout the tween, the [Camera’s](https://developer.roblox.com/api-reference/class/Camera) [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) will be orientated towards the [Camera’s](https://developer.roblox.com/api-reference/class/Camera) [Camera.Focus](https://developer.roblox.com/api-reference/property/Camera/Focus).

When the tween has completed, the [Camera’s](https://developer.roblox.com/api-reference/class/Camera) [Camera.InterpolationFinished](https://developer.roblox.com/api-reference/event/Camera/InterpolationFinished) event will fire.

If this function is called while the `Camera` is already tweening the older tween will be stopped (without firing [Camera.InterpolationFinished](https://developer.roblox.com/api-reference/event/Camera/InterpolationFinished)) and overridden by the new tween.

Interpolate can only be used if the current [Camera.CameraType](https://developer.roblox.com/api-reference/property/Camera/CameraType) is *’Scriptable’*, regardless of whether the default [camera scripts][1] are being used. If it is used with any other [Camera.CameraType](https://developer.roblox.com/api-reference/property/Camera/CameraType) an error will be thrown.

You are advised to use `TweenService` to tween the `Camera` instead as it is more reliable and offers a variety of easing styles. See below for an example:

```lua
local TweenService = game:GetService("TweenService")

local camera = workspace.CurrentCamera
camera.CameraType = Enum.CameraType.Scriptable

local tween = TweenService:Create(
	camera,
	TweenInfo.new(5, Enum.EasingStyle.Quad, Enum.EasingDirection.Out),
	{
		CFrame = CFrame.new(0, 10, 100),
		Focus = CFrame.new(0, 0, 100)
	}
)

tween:Play()
```

[1]: http://robloxdev.com/articles/Movement-and-camera-controls
@param endPos The `DataType/CFrame` for the `Camera` to tween to
@param endFocus The `DataType/CFrame`  for the `Camera|Camera’s` `Camera/Focus` to tween to
@param duration The duration, in seconds, of the tween
@returns void