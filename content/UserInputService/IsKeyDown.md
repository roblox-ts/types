This function returns  whether the user is holding down the key associated with the given [Enum.KeyCode](https://developer.roblox.com/search#stq=KeyCode). It returns *true* if the specified key is pressed or *false* if it is not pressed.

This can be used to check if a specific key, such as the space bar, is being pressed. For example:

```lua
local UserInputService = game:GetService("UserInputService")

local spaceHeld = UserInputService:IsKeyDown(Enum.KeyCode.Space)
```

To retrieve a list of all keys pressed by the user, use the [UserInputService.GetKeysPressed](https://developer.roblox.com/api-reference/function/UserInputService/GetKeysPressed) function.

Since `UserInputService` is client-side only, this function can only be used in a `LocalScript`.

## See also

 - [UserInputType.IsGamepadButtonDown](https://developer.roblox.com/search#stq=IsGamepadButtonDown) - A similar event with a different use: To check if a given [button](https://developer.roblox.com/search#stq=KeyCode) on a [gamepad](https://developer.roblox.com/search#stq=UserInputType) is pressed.
@param keyCode The `Enum/KeyCode` of the the key
@returns Whether the specified key is being held down