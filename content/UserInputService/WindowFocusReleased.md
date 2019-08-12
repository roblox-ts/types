The `UserInputService` WindowFocusReleased event fires when the window of the Roblox client loses focus - typically when the Roblox client is minimized by the user.

For example, the code below prints *"Window focus released"* whenever the Roblox client loses focus.

```lua
local UserInputService = game:GetService("UserInputService")

UserInputService.WindowFocusReleased:Connect(function()
	print("Window focus released")
end)
```

This event can be used alongside [UserInputService.WindowFocused](https://developer.roblox.com/api-reference/event/UserInputService/WindowFocused) to track whether the Roblox client is actively focused on a user's screen.

Since it only fires locally, it can only be used in a `LocalScript`.