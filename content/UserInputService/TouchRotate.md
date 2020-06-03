The TouchRotate event fires when a user rotates two fingers on a [TouchEnabled](https://developer.roblox.com/api-reference/property/UserInputService/TouchEnabled) device.

For example, the following code prints  how much the camera has rotated since the beginning of the touch rotation.

```lua
local UserInputService = game:GetService("UserInputService")

UserInputService.TouchRotate:Connect(function(touchPositions, rotation, velocity, state, gameProcessedEvent)
	print("Camera has rotated "..tostring(rotation).." degrees!")
end)
```

To check if a user's device is TouchEnabled, and that touch events will fire, see [UserInputService.TouchEnabled](https://developer.roblox.com/api-reference/property/UserInputService/TouchEnabled).

This event only fires when the Roblox client window is in focus. For example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a `LocalScript`.

The core scripts that control the user's camera on a mobile device use code that functions similarly to this event. For more info on these scripts, see [here][1]. Best practice for this event is to use it when creating a mobile camera system to override the default core scripts.

## See also

 - [UserInputService.TouchTap](https://developer.roblox.com/api-reference/event/UserInputService/TouchTap)

 - [UserInputService.TouchTapInWorld](https://developer.roblox.com/api-reference/event/UserInputService/TouchTapInWorld)

 - [UserInputService.TouchMoved](https://developer.roblox.com/api-reference/event/UserInputService/TouchMoved)

 - [UserInputService.TouchLongPress](https://developer.roblox.com/api-reference/event/UserInputService/TouchLongPress)

 - [UserInputService.TouchPan](https://developer.roblox.com/api-reference/event/UserInputService/TouchPan)

 - [UserInputService.TouchPinch](https://developer.roblox.com/api-reference/event/UserInputService/TouchPinch)

 - [UserInputService.TouchSwipe](https://developer.roblox.com/api-reference/event/UserInputService/TouchSwipe)

 - [UserInputService.TouchStarted](https://developer.roblox.com/api-reference/event/UserInputService/TouchStarted)

 - [UserInputService.TouchEnded](https://developer.roblox.com/api-reference/event/UserInputService/TouchEnded)

[1]:/articles/Movement-and-camera-controls