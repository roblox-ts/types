This property describes whether the user’s current device has a touch screen available.

The property is used to determine if the user's device has a touch screen, and therefore if touch events will fire. If TouchEnabled is true, you can use UserInputService events such as [UserInputService.TouchStarted](https://developer.roblox.com/api-reference/event/UserInputService/TouchStarted) and [UserInputService.TouchEnded](https://developer.roblox.com/api-reference/event/UserInputService/TouchEnded) to track when a user starts and stops touching the screen of their device.

The code snippet below prints whether the user's device has a touch screen.

```lua
local userInputService = game:GetService("UserInputService")

if userInputService.TouchEnabled then
	print("The user's device has a touchscreen!")
else
	print("The user's device does not have a touchscreen!")
end
```

See [this][1] page for articles on cross-platform development.

[1]: https://developer.roblox.com/learn-roblox/cross-platform

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