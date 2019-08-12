This property describes whether the user’s device has a mouse available.  This property is *true* when the user's device has an available mouse, and *false* when it does not.

```lua
local UserInputService = game:GetService("UserInputService")

if (UserInputService.MouseEnabled) then
	print("The user's device has an available mouse!")
else
	print("The user's device does not have an available mouse!")
end
```

It is  important to check this before using `UserInputService` mouse functions such as [UserInputService.GetMouseLocation](https://developer.roblox.com/api-reference/function/UserInputService/GetMouseLocation).

As `UserInputService` is client-side only, this property can only be used in a `LocalScript`.

## See also

 - [UserInputService.MouseBehavior](https://developer.roblox.com/api-reference/property/UserInputService/MouseBehavior)

 - [UserInputService.MouseDeltaSensitivity](https://developer.roblox.com/api-reference/property/UserInputService/MouseDeltaSensitivity)

 - [UserInputService.MouseIconEnabled](https://developer.roblox.com/api-reference/property/UserInputService/MouseIconEnabled)

 - [UserInputService.GetMouseLocation](https://developer.roblox.com/api-reference/function/UserInputService/GetMouseLocation)

 - [UserInputService.GetMouseDelta](https://developer.roblox.com/api-reference/function/UserInputService/GetMouseDelta)

 - [UserInputService.GetMouseButtonsPressed](https://developer.roblox.com/api-reference/function/UserInputService/GetMouseButtonsPressed)