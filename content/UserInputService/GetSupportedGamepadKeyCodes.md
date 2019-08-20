This function returns an array of [KeyCodes](https://developer.roblox.com/search#stq=KeyCode) that the gamepad associated with the given [Enum.UserInputType](https://developer.roblox.com/search#stq=UserInputType) supports.

This function can be used to determine which KeyCodes are supported and not supported by a connected gamepad. To determine if a specific KeyCode is supported, use [UserInputService.GamepadSupports](https://developer.roblox.com/api-reference/function/UserInputService/GamepadSupports).

If called on a non existent, or non connected, gamepad, this function will return an empty array.

As `UserInputService` is client-side only, this function can only be used in a `LocalScript`.

Check out this [article][2] to learn more about adding support for gamepad input into your game and [this][1] page for articles on cross-platform development.

## See also

 - [UserInputService.GamepadConnected](https://developer.roblox.com/api-reference/event/UserInputService/GamepadConnected)

 - [UserInputService.GamepadDisconnected](https://developer.roblox.com/api-reference/event/UserInputService/GamepadDisconnected)

 - [UserInputService.GetConnectedGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetConnectedGamepads)

 - [UserInputService.GetNavigationGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetNavigationGamepads)

 - [UserInputService.SetNavigationGamepad](https://developer.roblox.com/api-reference/function/UserInputService/SetNavigationGamepad)

 - [UserInputService.IsNavigationGamepad](https://developer.roblox.com/api-reference/function/UserInputService/IsNavigationGamepad)

 - [UserInputService.IsGamepadButtonDown](https://developer.roblox.com/api-reference/function/UserInputService/IsGamepadButtonDown)

 - [UserInputService.GetGamepadState](https://developer.roblox.com/api-reference/function/UserInputService/GetGamepadState)

 - [UserInputService.GetGamepadConnected](https://developer.roblox.com/api-reference/function/UserInputService/GetGamepadConnected)

 - [UserInputService.GamepadSupports](https://developer.roblox.com/api-reference/function/UserInputService/GamepadSupports)

 - [UserInputService.GamepadEnabled](https://developer.roblox.com/api-reference/property/UserInputService/GamepadEnabled)

[1]: https://developer.roblox.com/learn-roblox/cross-platform

[2]: https://developer.roblox.com/articles/Gamepad-Haptic-Feedback
@param gamepadNum The `Enum/UserInputType` of the gamepad
@returns An array of `Enum/KeyCode|KeyCodes` supported by the given gamepad