This function returns an array of [InputObjects](https://developer.roblox.com/api-reference/class/InputObject) associated with the keys currently being pressed down.

This array can be iterated through to determine which keys are currently being pressed, using the [InputObject.KeyCode](https://developer.roblox.com/api-reference/property/InputObject/KeyCode) values.

To check if a specific key is being pressed, use [UserInputService.IsKeyDown](https://developer.roblox.com/api-reference/function/UserInputService/IsKeyDown).

As `UserInputService` is client-side only, this function can only be used in a `LocalScript`.
@returns An array of `InputObject|InputObjects` associated with the keys currently being pressed