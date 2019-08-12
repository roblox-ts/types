This function returns an array of [Enum.UserInputType](https://developer.roblox.com/search#stq=UserInputType) gamepads currently connected. If no gamepads are connected, this array will be empty. Additionally, it only returns UserInputType objects that are gamepads. For instance, this event will return a connected Gamepad1 object but not a Keyboard object.

For example, the following code snippet retrieves the connected gamepads and stores them in a variable named *connectedGamepads*.

```lua
local userInputService = game:GetService("UserInputService")
local connectedGamepads = userInputService:GetConnectedGamepads()
```

To check if a specific gamepad is connected, use  [UserInputService.GetGamepadConnected](https://developer.roblox.com/api-reference/function/UserInputService/GetGamepadConnected).

As `UserInputService` is client-side only, this function can only be used in a `LocalScript`.

See [this][1] page for articles on cross-platform development.

## See also

 - [UserInputService.GamepadConnected](https://developer.roblox.com/api-reference/event/UserInputService/GamepadConnected)

 - [UserInputService.GamepadDisconnected](https://developer.roblox.com/api-reference/event/UserInputService/GamepadDisconnected)

 - [UserInputService.GetConnectedGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetConnectedGamepads)

 - [UserInputService.GetNavigationGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetNavigationGamepads)

 - [UserInputService.SetNavigationGamepad](https://developer.roblox.com/api-reference/function/UserInputService/SetNavigationGamepad)

 - [UserInputService.IsNavigationGamepad](https://developer.roblox.com/api-reference/function/UserInputService/IsNavigationGamepad)

 - [UserInputService.IsGamepadButtonDown](https://developer.roblox.com/api-reference/function/UserInputService/IsGamepadButtonDown)

 - [UserInputService.GetSupportedGamepadKeyCodes](https://developer.roblox.com/api-reference/function/UserInputService/GetSupportedGamepadKeyCodes)

 - [UserInputService.GetGamepadState](https://developer.roblox.com/api-reference/function/UserInputService/GetGamepadState)

 - [UserInputService.GetGamepadConnected](https://developer.roblox.com/api-reference/function/UserInputService/GetGamepadConnected)

 - [UserInputService.GamepadSupports](https://developer.roblox.com/api-reference/function/UserInputService/GamepadSupports)

 - [UserInputService.GamepadEnabled](https://developer.roblox.com/api-reference/property/UserInputService/GamepadEnabled)

[1]: https://developer.roblox.com/learn-roblox/cross-platform
@returns An array of `Enum/UserInputType|UserInputTypes` corresponding with the gamepads connected to the user’s device