Fired when a user holds at least one finger for a short amount of time on the same screen position of a TouchEnabled device.

This event can be used to determine when a user holds their finger down on an an-game [GUI](https://developer.roblox.com/api-reference/class/GuiObject) or element.

The example below prints the [state](https://developer.roblox.com/search#stq=UserInputState) of the long press when the user user holds at least one finger for a short amount of time on the same screen position. Possible states include: *Begin*, *Change*, *End*, *Cancel*, and *None*.

```lua
local userInputService = game:GetService("UserInputService")

function TouchLongPress(TouchPositions, state, gameProcessedEvent)
	print("Long press event fired. State of press: "..tostring(state))
end

userInputService.TouchLongPress:Connect(TouchLongPress)
```

To check if a user's device is TouchEnabled, and that touch events will fire, see[UserInputService.TouchEnabled](https://developer.roblox.com/api-reference/property/UserInputService/TouchEnabled).

It can be paired with [UserInputService.TouchStarted](https://developer.roblox.com/api-reference/event/UserInputService/TouchStarted) and [UserInputService.TouchEnded](https://developer.roblox.com/api-reference/event/UserInputService/TouchEnded) to determine when a user starts and stops touching the screen.

This event only fires when the Roblox client window is in focus. For example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a `LocalScript`.

## See also

 - [UserInputService.TouchTap](https://developer.roblox.com/api-reference/event/UserInputService/TouchTap)

 - [UserInputService.TouchTapInWorld](https://developer.roblox.com/api-reference/event/UserInputService/TouchTapInWorld)

 - [UserInputService.TouchMoved](https://developer.roblox.com/api-reference/event/UserInputService/TouchMoved)

 - [UserInputService.TouchPan](https://developer.roblox.com/api-reference/event/UserInputService/TouchPan)

 - [UserInputService.TouchPinch](https://developer.roblox.com/api-reference/event/UserInputService/TouchPinch)

 - [UserInputService.TouchRotate](https://developer.roblox.com/api-reference/event/UserInputService/TouchRotate)

 - [UserInputService.TouchSwipe](https://developer.roblox.com/api-reference/event/UserInputService/TouchSwipe)

 - [UserInputService.TouchStarted](https://developer.roblox.com/api-reference/event/UserInputService/TouchStarted)

 - [UserInputService.TouchEnded](https://developer.roblox.com/api-reference/event/UserInputService/TouchEnded)