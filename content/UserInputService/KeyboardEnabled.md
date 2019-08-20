This property describes whether the user’s device has a keyboard available. This property is *true* when the user's device has an available keyboard, and *false* when it does not.

It can be used to determine whether the user has an available keyboard - which can be important if you want to check if you can use [UserInputService.IsKeyDown](https://developer.roblox.com/api-reference/function/UserInputService/IsKeyDown) or [UserInputService.GetKeysPressed](https://developer.roblox.com/api-reference/function/UserInputService/GetKeysPressed) to check for keyboard input.

As `UserInputService` is client-side only, this property can only be used in a `LocalScript`.