This property describes the size of the on-screen keyboard in pixels. The keyboard’s size is [Vector2.new(0, 0)](https://developer.roblox.com/search#stq=Vector2) when it is not [visible](https://developer.roblox.com/api-reference/property/UserInputService/OnScreenKeyboardVisible).

The code snippet below prints the size of the keyboard.

```lua
local userInputService = game:GetService("UserInputService")
print(userInputService.OnScreenKeyboardSize)
```

As `UserInputService` is client-side only, this property can only be used in a `LocalScript`.

![On screen keyboard][1]

## See also

 - [UserInputService.OnScreenKeyboardVisible](https://developer.roblox.com/api-reference/property/UserInputService/OnScreenKeyboardVisible)

 - [UserInputService.OnScreenKeyboardPosition](https://developer.roblox.com/api-reference/property/UserInputService/OnScreenKeyboardPosition)

[1]: https://images.contentstack.io/v3/assets/bltc2ad39afa86662c8/bltd883fb9830c26628/5bce5c708e52425c44bf870e/Screenshot_(6).png