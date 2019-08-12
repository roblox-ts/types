The TouchPan event fires when a user drags at least one finger on a [TouchEnabled](https://developer.roblox.com/api-reference/property/UserInputService/TouchEnabled) device.

This event can be used to determine when a user pans their finger along screen of a TouchEnabled device - such as to rotate the `Camera` in a custom camera script.

The snippet below prints "Speed of touch drag" followed by the velocity of the user's touch when the user drags their finger on the screen.

```lua
local userInputService = game:GetService("UserInputService")

userInputService.TouchPan:Connect(function(touchPositions, totalTranslation, velocity, state, gameProcessedEvent)
	print("Speed of touch drag: "..tostring(velocity))
end)
```

Take a look at another useful `UserInputService` function here [UserInputService.TouchRotate](https://developer.roblox.com/api-reference/event/UserInputService/TouchRotate).

This event only fires when the Roblox client window is in focus. For example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a `LocalScript`.

## See also

 - [UserInputService.TouchTap](https://developer.roblox.com/api-reference/event/UserInputService/TouchTap)

 - [UserInputService.TouchTapInWorld](https://developer.roblox.com/api-reference/event/UserInputService/TouchTapInWorld)

 - [UserInputService.TouchLongPress](https://developer.roblox.com/api-reference/event/UserInputService/TouchLongPress)

 - [UserInputService.TouchMoved](https://developer.roblox.com/api-reference/event/UserInputService/TouchMoved)

 - [UserInputService.TouchPinch](https://developer.roblox.com/api-reference/event/UserInputService/TouchPinch)

 - [UserInputService.TouchRotate](https://developer.roblox.com/api-reference/event/UserInputService/TouchRotate)

 - [UserInputService.TouchSwipe](https://developer.roblox.com/api-reference/event/UserInputService/TouchSwipe)

 - [UserInputService.TouchStarted](https://developer.roblox.com/api-reference/event/UserInputService/TouchStarted)

 - [UserInputService.TouchEnded](https://developer.roblox.com/api-reference/event/UserInputService/TouchEnded)