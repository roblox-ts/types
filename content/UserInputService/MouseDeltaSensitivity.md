This property determines the sensitivity of the user’s `Mouse`.

The sensitivity determines the extent to which a movement of the physical mouse translates to a movement of the mouse in-game. This can be used to adjusted how sensitive events tracking mouse movement, like [GetMouseDelta](https://developer.roblox.com/api-reference/function/UserInputService/GetMouseDelta), are to mouse movement.

This property does not affect the movement of the mouse icon. Nor does it affect the *Camera Sensitivity* setting found in the *Settings* tab of the client’s *Settings* menu, which also adjusts the sensitivity of events tracking mouse movement.

This property has a maximum value of 10 and a minimum value of 0. A lower value corresponds to lower sensitivity, and a higher value to higher sensitivity.

When sensitivity is 0, events that track the mouse’s movement will still fire but all parameters and properties indicating the change in mouse position will return [Vector2.new()](https://developer.roblox.com/search#stq=Vector2), or [Vector3.new()](https://developer.roblox.com/search#stq=Vector3) in the case of [InputObject.Delta](https://developer.roblox.com/api-reference/property/InputObject/Delta). For example, [GetMouseDelta](https://developer.roblox.com/api-reference/function/UserInputService/GetMouseDelta) will always return (0, 0).