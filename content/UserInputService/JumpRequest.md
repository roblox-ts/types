The `UserInputService` JumpRequest event fires when there is a jump request from the client (i.e. when the client pressed the spacebar or [jump GUI button][2] on mobile).

This event fires whenever the user tries to make their [Player.Character](https://developer.roblox.com/api-reference/property/Player/Character) jump. Default behavior responds to a jump request by setting the player’s [Humanoid.Jump](https://developer.roblox.com/api-reference/property/Humanoid/Jump) property to true, which makes the player’s character jump.

The event can be used to track every time a player wants to jump. Instead of using it to make a player jump, this should be used to change default jump behavior - such as disabling jumping.

For example, the code below prints "Jump" every time the player sends a jump request.

```lua
local userInputService = game:GetService("UserInputService")

function jumpRequest()
	print("Jump!")
end

userInputService.JumpRequest:Connect(JumpRequest)
```

Since this event fires multiple times for a single jump request, using a [debounce][1] is suggested.

If you would like to connect keys or buttons to other actions, consider using events such as [UserInputService.GetKeysPressed](https://developer.roblox.com/api-reference/function/UserInputService/GetKeysPressed) and [UserInputService.InputBegan](https://developer.roblox.com/api-reference/event/UserInputService/InputBegan) or the `ContextActionService`.

As this event only fires locally, it can only be used in a `LocalScript`.

[1]: https://developer.roblox.com/articles/Debounce

[2]: https://developer.roblox.com/articles/Mobile-Controls