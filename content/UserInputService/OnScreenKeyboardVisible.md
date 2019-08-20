This property describes whether an on-screen keyboard is currently visible on the user's screen.

The code snippet below prints whether the keyboard is visible.

```lua
local userInputService = game:GetService("UserInputService")

local keyboardIsVisible = userInputService.OnScreenKeyboardIsVisible
if (keyboardIsVisible) then
	print("On-screen keyboard is visible!")
else
	print("On-screen keyboard is not visible!")
end
```

As `UserInputService` is client-side only, this property can only be used in a `LocalScript`.

![On screen keyboard][1]

## See also

 - [UserInputService.OnScreenKeyboardSize](https://developer.roblox.com/api-reference/property/UserInputService/OnScreenKeyboardSize)

 - [UserInputService.OnScreenKeyboardPosition](https://developer.roblox.com/api-reference/property/UserInputService/OnScreenKeyboardPosition)

[1]: https://developer.roblox.com/assets/5bce5dd5edb71a1476d19609/ClientKeyboard.png