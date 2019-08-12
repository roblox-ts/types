This function returns *true* if the specified [Enum.UserInputType](https://developer.roblox.com/search#stq=UserInputType) Gamepad is allowed to control Navigation and Selection [GUIs](https://developer.roblox.com/api-reference/class/GuiObject).

If you want to set a navigation gamepad, you can use [UserInputService.SetNavigationGamepad](https://developer.roblox.com/api-reference/function/UserInputService/SetNavigationGamepad). You can also use [UserInputService.GetNavigationGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetNavigationGamepads) to get a list of all navigation gamepads.

For example, the code below checks if the gamepad1 is as a navigation gamepad:

```lua
local userInputService = game:GetService("UserInputService")

if (userInputService:IsNavigationGamepad(UserInputType.Gamepad1) then
	print("Gamepad is a navigation gamepad!")
else
	print("Gamepad is not a navigation gamepad!")
end
```

A list of all connected gamepads, regardless of navigation can be retrieved using[UserInput.GetConnectedGamepads.

Since ](https://developer.roblox.com/search#stq=GetConnectedGamepads.%20%20Since%20)UserInputService` is client-side only, this function can only be used in a `LocalScript`.

See [this][1] page for articles on cross-platform development.

## See also

 - [UserInputService.GamepadConnected](https://developer.roblox.com/api-reference/event/UserInputService/GamepadConnected)

 - [UserInputService.GamepadDisconnected](https://developer.roblox.com/api-reference/event/UserInputService/GamepadDisconnected)

 - [UserInputService.GetConnectedGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetConnectedGamepads)

 - [UserInputService.GetNavigationGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetNavigationGamepads)

 - [UserInputService.SetNavigationGamepad](https://developer.roblox.com/api-reference/function/UserInputService/SetNavigationGamepad)

 - [UserInputService.IsGamepadButtonDown](https://developer.roblox.com/api-reference/function/UserInputService/IsGamepadButtonDown)

 - [UserInputService.GetSupportedGamepadKeyCodes](https://developer.roblox.com/api-reference/function/UserInputService/GetSupportedGamepadKeyCodes)

 - [UserInputService.GetGamepadState](https://developer.roblox.com/api-reference/function/UserInputService/GetGamepadState)

 - [UserInputService.GetGamepadConnected](https://developer.roblox.com/api-reference/function/UserInputService/GetGamepadConnected)

 - [UserInputService.GamepadSupports](https://developer.roblox.com/api-reference/function/UserInputService/GamepadSupports)

 - [UserInputService.GamepadEnabled](https://developer.roblox.com/api-reference/property/UserInputService/GamepadEnabled)

[1]: https://developer.roblox.com/learn-roblox/cross-platform
@param gamepadEnum The `Enum/UserInputType` of the specified gamepad
@returns Whether the specified gamepad is a navigation gamepad