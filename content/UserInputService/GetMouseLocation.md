The GetMouseLocation function returns a [DataType.Vector2](https://developer.roblox.com/search#stq=Vector2) of the current screen location of the player's `Mouse` in pixels.

**Note:** If the location of the mouse pointer is offscreen or the players device does not have a mouse, such as a gamepad or touchscreen, the value returned will be undetermined.

Since `UserInputService` only runs client-side, this function will only work when used in a `LocalScript`.
@returns The current screen location of the mouse.