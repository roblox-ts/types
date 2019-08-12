The GamepadConnected event fires when a gamepad is connected to the client.

Since a Roblox game supports multiple controllers, this event is useful when paired with the [UserInputService.GamepadDisconnected](https://developer.roblox.com/api-reference/event/UserInputService/GamepadDisconnected) event to track which controllers/gamepads are active. You can also use [UserInputService.GetNavigationGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetNavigationGamepads) and [UserInputService.GetConnectedGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetConnectedGamepads) to find the correct gamepad to use.

The following example demonstrates a usage example of a tracking when a gamepad is connected to the client.

```lua
local userInputService = game:GetService("UserInputService")

local function GamepadConnected(gamepad)
	print("Player has plugged controller: " .. tostring(gamepad))
end)

userInputService.GamepadConnected:Connect(GamepadDisconnected)
```

If you want to see which devices are connected, you can use the [UserInputService.GetConnectedGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetConnectedGamepads) function.

As this event fires locally, it can only be used in a `LocalScript`.

See [this][1] page for articles on cross-platform development.

## See also

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