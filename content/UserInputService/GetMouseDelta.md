This function returns the change, in pixels, of the position of the player’s `Mouse` in the last rendered frame as a [DataType.Vector2](https://developer.roblox.com/search#stq=Vector2). This function only works if the mouse has been locked using the `UserInputService.MouseBehavior` property. If the mouse has not been locked, the returned [DataType.Vector2](https://developer.roblox.com/search#stq=Vector2) values will be zero.

The sensitivity of the mouse, determined in the client’s settings and [UserInputService.MouseDeltaSensitivity](https://developer.roblox.com/api-reference/property/UserInputService/MouseDeltaSensitivity), will influence the result.

As `UserInputService` is client-side only, this function can only be used in a `LocalScript`.
@returns Change in movement of the mouse