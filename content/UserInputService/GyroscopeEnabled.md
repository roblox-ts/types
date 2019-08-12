This property describes whether the user's device has a gyroscope. I

A gyroscope is an component found in most mobile devices that detects orientation and rotational speed.

If a user's device has a gyroscope, you can use incorporate it into your game using the [UserInputService.GetDeviceRotation](https://developer.roblox.com/api-reference/function/UserInputService/GetDeviceRotation) function and [UserInputService.DeviceRotationChanged](https://developer.roblox.com/api-reference/event/UserInputService/DeviceRotationChanged) event.

```lua
local UserInputService = game:GetService("UserInputService")

local gyroIsEnabled = UserInputService.GyroscopeEnabled
if (gyroIsEnabled) then
	print("Gyroscope is enabled!")
else
	print("Gyroscope is not enabled!")
end
```

As `UserInputService` is client-side only, this property can only be used in a `LocalScript`.

See [this][1] page for articles on cross-platform development.

[1]: https://developer.roblox.com/learn-roblox/cross-platform