The SetNavigationGamepad function sets whether the specified [Enum.UserInputType](https://developer.roblox.com/search#stq=UserInputType) gamepad can move the GUI navigator. A gamepad that is allowed to move the GUI navigator is considered a *navigation gamepad*.

If the *enabled* argument is passed as *true*, the Gamepad can move the GUI navigator. If the argument is *false*, the Gamepad can not move the GUI navigator.

If you want to check if a specified Gamepad is a set to be a navigation gamepad, you can use the [UserInputService.IsNavigationGamepad](https://developer.roblox.com/api-reference/function/UserInputService/IsNavigationGamepad) function. You can also use the [UserInputService.GetNavigationGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetNavigationGamepads) to retrieve a list of all navigation gamepads.

Since `UserInputService` is client-side only, this function can only be used in a  `LocalScript`.

See [this][1] page for articles on cross-platform development.

## See also

 - [UserInputService.GamepadConnected](https://developer.roblox.com/api-reference/event/UserInputService/GamepadConnected)

 - [UserInputService.GamepadDisconnected](https://developer.roblox.com/api-reference/event/UserInputService/GamepadDisconnected)

 - [UserInputService.GetConnectedGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetConnectedGamepads)

 - [UserInputService.GetNavigationGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetNavigationGamepads)

 - [UserInputService.IsNavigationGamepad](https://developer.roblox.com/api-reference/function/UserInputService/IsNavigationGamepad)

 - [UserInputService.IsGamepadButtonDown](https://developer.roblox.com/api-reference/function/UserInputService/IsGamepadButtonDown)

 - [UserInputService.GetSupportedGamepadKeyCodes](https://developer.roblox.com/api-reference/function/UserInputService/GetSupportedGamepadKeyCodes)

 - [UserInputService.GetGamepadState](https://developer.roblox.com/api-reference/function/UserInputService/GetGamepadState)

 - [UserInputService.GetGamepadConnected](https://developer.roblox.com/api-reference/function/UserInputService/GetGamepadConnected)

 - [UserInputService.GamepadSupports](https://developer.roblox.com/api-reference/function/UserInputService/GamepadSupports)

 - [UserInputService.GamepadEnabled](https://developer.roblox.com/api-reference/property/UserInputService/GamepadEnabled)

[1]: https://developer.roblox.com/learn-roblox/cross-platform
@param gamepadEnum The `Enum/UserInputType` of the specified gamepad
@param enabled Whether the specified gamepad can move the GUI navigator
@returns void