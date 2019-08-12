The TouchEnded event fires when a user released their finger from the screen of a TouchEnabled device, ending touch input with the device.

This event can be used to determine when a user stops touching the screen of their device. It can be paired with [UserInputService.TouchStarted](https://developer.roblox.com/api-reference/event/UserInputService/TouchStarted) to determine when a user starts and stops touching the screen.

For example, the code below prints the screen position where the user stops touching the screen.

```lua
local UserInputService = game:GetService("UserInputService")

function TouchEnded(touch, gameProcessedEvent)
	print("Touch ended at "..tostring(touch.Position))
end

UserInputService.TouchEnded:Connect(TouchEnded)
```

The touch input object is the same input object throughout the lifetime of the touch. So comparing [InputObjects](https://developer.roblox.com/api-reference/class/InputObject) when they are touch objects is valid to determine if it is the same finger.

To check if a user's device is TouchEnabled, and that touch events will fire, see [UserInputService.TouchEnabled](https://developer.roblox.com/api-reference/property/UserInputService/TouchEnabled).

This event only fires when the Roblox client window is in focus. For example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a `LocalScript`.

## See also

 - [UserInputService.TouchTap](https://developer.roblox.com/api-reference/event/UserInputService/TouchTap)

 - [UserInputService.TouchTapInWorld](https://developer.roblox.com/api-reference/event/UserInputService/TouchTapInWorld)

 - [UserInputService.TouchLongPress](https://developer.roblox.com/api-reference/event/UserInputService/TouchLongPress)

 - [UserInputService.TouchMoved](https://developer.roblox.com/api-reference/event/UserInputService/TouchMoved)

 - [UserInputService.TouchPan](https://developer.roblox.com/api-reference/event/UserInputService/TouchPan)

 - [UserInputService.TouchPinch](https://developer.roblox.com/api-reference/event/UserInputService/TouchPinch)

 - [UserInputService.TouchRotate](https://developer.roblox.com/api-reference/event/UserInputService/TouchRotate)

 - [UserInputService.TouchSwipe](https://developer.roblox.com/api-reference/event/UserInputService/TouchSwipe)

 - [UserInputService.TouchStarted](https://developer.roblox.com/api-reference/event/UserInputService/TouchStarted)