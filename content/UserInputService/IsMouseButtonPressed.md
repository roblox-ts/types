This function takes a mouse button [Enum.UserInputType](https://developer.roblox.com/search#stq=UserInputType) and returns a bool that indicates whether it is currently pressed.

The mouse button checked depends on the [Enum.UserInputType](https://developer.roblox.com/search#stq=UserInputType) value passed to the function as an argument. For example:

```lua
local UserInputService = game:GetService("UserInputService")
	
local pressed = UserInputService:IsMouseButtonPressed(Enum.UserInputType.MouseButton1)
```

Since `UserInputService` is client-side only, this function can only be used in a `LocalScript`.
@param mouseButton The `Enum/UserInputType` of the mouse button
@returns Whether the given mouse button is currently held down