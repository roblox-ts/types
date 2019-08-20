This function returns the `TextBox` the client is currently focused on. A TextBox can be manually selected by the user, or selection can be forced using the [TextBox.CaptureFocus](https://developer.roblox.com/api-reference/function/TextBox/CaptureFocus) function. If no TextBox is selected, this function will return *nil*.

As `UserInputService` is client-side only, this function can only be used in a `LocalScript`.

## See also

 - [UserInputService.TextBoxFocused](https://developer.roblox.com/api-reference/event/UserInputService/TextBoxFocused)

 - [UserInputService.TextBoxFocusReleased](https://developer.roblox.com/api-reference/event/UserInputService/TextBoxFocusReleased)

 - [TextBox.CaptureFocus](https://developer.roblox.com/api-reference/function/TextBox/CaptureFocus)

 - [TextBox.IsFocused](https://developer.roblox.com/api-reference/function/TextBox/IsFocused)

 - [TextBox.ReleaseFocus](https://developer.roblox.com/api-reference/function/TextBox/ReleaseFocus)
@returns The `TextBox` currently in focus, or *nil* if none are selected