The GetGamepadState function returns an array of [InputObjects](https://developer.roblox.com/api-reference/class/InputObject) for each input on the gamepad with each input's last input state. You can iterate through the returned array to determine the last state of each valid input type for the gamepad.

To determine which [Enum.UserInputType](https://developer.roblox.com/search#stq=UserInputType) Gamepads are connected, you can use the [UserInputService.GetConnectedGamepads](https://developer.roblox.com/api-reference/function/UserInputService/GetConnectedGamepads) function.

Since it only fires locally, it can only be used in a `LocalScript`.
@param gamepadNum A `Enum/UserInputType` value corresponding to the gamepad you want to get the state of.
@returns Array of `InputObject`s.