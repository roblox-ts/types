Fired when a user places and moves two fingers on the screen of a [TouchEnabled](https://developer.roblox.com/api-reference/property/UserInputService/TouchEnabled) device.

For instance, the snippet below prints how much the camera zoom scale has changed since the beginning of the touch pinch,

```lua
local UserInputService = game:GetService("UserInputService")

UserInputService.TouchPinch:Connect(function(touchPositions, scale, velocity, state, gameProcessedEvent)
	print("Scale difference since beginning of pinch: "..tostring(scale))
end)
```

To check if a user's device is TouchEnabled, and that touch events will fire, see [UserInputService.TouchEnabled](https://developer.roblox.com/api-reference/property/UserInputService/TouchEnabled).

This event only fires when the Roblox client window is in focus. For example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a `LocalScript`.

[Core scripts](https://developer.roblox.com/api-reference/class/CoreScript) use similar logic to zoom the user’s camera when a user pinches their fingers on a mobile device. For more info on these scripts, see [here][1]. Best practice for this event is to use it when creating a mobile camera system to override the default core script.

## See also

 - [UserInputService.TouchTap](https://developer.roblox.com/api-reference/event/UserInputService/TouchTap)

 - [UserInputService.TouchTapInWorld](https://developer.roblox.com/api-reference/event/UserInputService/TouchTapInWorld)

 - [UserInputService.TouchMoved](https://developer.roblox.com/api-reference/event/UserInputService/TouchMoved)

 - [UserInputService.TouchLongPress](https://developer.roblox.com/api-reference/event/UserInputService/TouchLongPress)

 - [UserInputService.TouchPan](https://developer.roblox.com/api-reference/event/UserInputService/TouchPan)

 - [UserInputService.TouchRotate](https://developer.roblox.com/api-reference/event/UserInputService/TouchRotate)

 - [UserInputService.TouchSwipe](https://developer.roblox.com/api-reference/event/UserInputService/TouchSwipe)

 - [UserInputService.TouchStarted](https://developer.roblox.com/api-reference/event/UserInputService/TouchStarted)

 - [UserInputService.TouchEnded](https://developer.roblox.com/api-reference/event/UserInputService/TouchEnded)

[1]: https://www.robloxdev.com/articles/Movement-and-camera-controls