This property describes the position of the on-screen keyboard in pixels. The keyboard’s position is [Vector2.new(0, 0)](https://developer.roblox.com/search#stq=Vector2) when it is not [visible](https://developer.roblox.com/api-reference/property/UserInputService/OnScreenKeyboardVisible).

The code snippet below prints the position of the keyboard.

```lua
local userInputService = game:GetService("UserInputService")
print(userInputService.OnScreenKeyboardPosition)
```

As `UserInputService` is client-side only, this property can only be used in a `LocalScript`.

![On screen keyboard][1]

## See also

 - [UserInputService.OnScreenKeyboardVisible](https://developer.roblox.com/api-reference/property/UserInputService/OnScreenKeyboardVisible)

 - [UserInputService.OnScreenKeyboardSize](https://developer.roblox.com/api-reference/property/UserInputService/OnScreenKeyboardSize)

[1]: https://developer.roblox.com/assets/5bce5dd5edb71a1476d19609/ClientKeyboard.png