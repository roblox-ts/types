The TouchTapInWorld event fires when the user touches/taps their finger on the screen on a [TouchEnabled](https://developer.roblox.com/api-reference/property/UserInputService/TouchEnabled) device. It is fired when the user taps in the game world.

This event can be used to determine when a user taps the screen and does not tap a [GUI](https://developer.roblox.com/api-reference/class/GuiObject) element. If the user taps a GUI element, [UserInputService.TouchTap](https://developer.roblox.com/api-reference/event/UserInputService/TouchTap) will fire instead of TouchTapInWorld.

To check if a user's device is TouchEnabled, and that touch events will fire, see  [UserInputService.TouchEnabled](https://developer.roblox.com/api-reference/property/UserInputService/TouchEnabled).

This event only fires when the Roblox client window is in focus. For example, inputs will not be captured when the window is minimized.

As it only fires locally, it can only be used in a `LocalScript`.

## See also

 - [UserInputService.TouchTap](https://developer.roblox.com/api-reference/event/UserInputService/TouchTap)

 - [UserInputService.TouchLongPress](https://developer.roblox.com/api-reference/event/UserInputService/TouchLongPress)

 - [UserInputService.TouchMoved](https://developer.roblox.com/api-reference/event/UserInputService/TouchMoved)

 - [UserInputService.TouchPan](https://developer.roblox.com/api-reference/event/UserInputService/TouchPan)

 - [UserInputService.TouchPinch](https://developer.roblox.com/api-reference/event/UserInputService/TouchPinch)

 - [UserInputService.TouchRotate](https://developer.roblox.com/api-reference/event/UserInputService/TouchRotate)

 - [UserInputService.TouchSwipe](https://developer.roblox.com/api-reference/event/UserInputService/TouchSwipe)

 - [UserInputService.TouchStarted](https://developer.roblox.com/api-reference/event/UserInputService/TouchStarted)

 - [UserInputService.TouchEnded](https://developer.roblox.com/api-reference/event/UserInputService/TouchEnded)