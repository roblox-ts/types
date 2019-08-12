The TouchStarted event fires when a user places their finger on a [TouchEnabled](https://developer.roblox.com/api-reference/property/UserInputService/TouchEnabled) device, beginning touch input with the device.

This event can be used to determine when a user starts touching the screen of their device. It can be paired with [UserInputService.TouchEnded](https://developer.roblox.com/api-reference/event/UserInputService/TouchEnded) to determine when a user starts and stops touching the screen.

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

 - [UserInputService.TouchEnded](https://developer.roblox.com/api-reference/event/UserInputService/TouchEnded)