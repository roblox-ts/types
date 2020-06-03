The TouchMoved event fires when a user moves their finger on a TouchEnabled device.

This event can be used to determine when a user moves their finger while touching the screen of a TouchEnabled device. It can be useful to track whether a user is moving their finger on the screen, as well as where the user is moving their finger.

The code below prints "Touch moved from" the previous Vector2 position "to " the new Vector2 position of the user's touch on a TouchEnabled device.

```lua
local userInputService = game:GetService("UserInputService")

function(touch, gameProcessedEvent)
	local oldPosition = touch.Position - touch.Delta
	print("Touch moved from "..tostring(oldPosition).."to "..tostring(touch.Position))
end

userInputService.TouchMoved:Connect(TouchMoved)
```

It can be paired with  [UserInputService.TouchStarted](https://developer.roblox.com/api-reference/event/UserInputService/TouchStarted) and  [UserInputService.TouchEnded](https://developer.roblox.com/api-reference/event/UserInputService/TouchEnded) to determine when a user starts touching the screen, how their finger moves while touching it, and when the they stop touching the screen.

To check if a user's device is TouchEnabled, and that touch events will fire, see [UserInputService.TouchEnabled](https://developer.roblox.com/api-reference/property/UserInputService/TouchEnabled).

This event only fires when the Roblox client window is in focus. For example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a `LocalScript`.

## See also

 - [UserInputService.TouchTap](https://developer.roblox.com/api-reference/event/UserInputService/TouchTap)

 - [UserInputService.TouchTapInWorld](https://developer.roblox.com/api-reference/event/UserInputService/TouchTapInWorld)

 - [UserInputService.TouchLongPress](https://developer.roblox.com/api-reference/event/UserInputService/TouchLongPress)

 - [UserInputService.TouchPan](https://developer.roblox.com/api-reference/event/UserInputService/TouchPan)

 - [UserInputService.TouchPinch](https://developer.roblox.com/api-reference/event/UserInputService/TouchPinch)

 - [UserInputService.TouchRotate](https://developer.roblox.com/api-reference/event/UserInputService/TouchRotate)

 - [UserInputService.TouchSwipe](https://developer.roblox.com/api-reference/event/UserInputService/TouchSwipe)

 - [UserInputService.TouchStarted](https://developer.roblox.com/api-reference/event/UserInputService/TouchStarted)

 - [UserInputService.TouchEnded](https://developer.roblox.com/api-reference/event/UserInputService/TouchEnded)