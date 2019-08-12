The GamepadDisconnected event fires when a gamepad is disconnected.

Since a Roblox game supports multiple controllers, this event is useful when paired with the [UserInputService.GamepadConnected](https://developer.roblox.com/api-reference/event/UserInputService/GamepadConnected) event to track which controllers/gamepads are active. You can also use [UserInputService.GetNavigationGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetNavigationGamepads) and [UserInputService.GetConnectedGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetConnectedGamepads) to find the correct gamepad to use.

The following example demonstrates a usage example of a tracking when a gamepad is disconnected from the client.

```lua
local userInputService = game:GetService("UserInputService")

local function GamepadDisconnected(gamepad)
	print("Player has unplugged controller: " .. tostring(gamepad))
end)

userInputService.GamepadDisconnected:Connect(GamepadDisconnected)
```

As this event fires locally, it can only be used in a `LocalScript`.

See [this][1] page for articles on cross-platform development.

## See also

 - [UserInputService.GamepadConnected](https://developer.roblox.com/api-reference/event/UserInputService/GamepadConnected)

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