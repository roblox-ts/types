The TextBoxFocusReleased event fires when a client loses focus on a TextBox - typically when a client stops text entry into a TextBox by pressing return or clicking/touching elsewhere on the screen.

For example, the code below prints the the name of the TextBox losing focus when the event fires.

```lua
local UserInputService = game:GetService("UserInputService")

function TextBoxFocusReleased(textbox)
	print(textbox.Name)
end

UserInputService.TextBoxFocusReleased:Connect(TextBoxFocusReleased)
```

It can be used alongside [UserInputService.TextBoxFocused](https://developer.roblox.com/api-reference/event/UserInputService/TextBoxFocused) to track when a TextBox gains and loses focus.

As this event only fires locally, it can only be used in a `LocalScript`.

## See also

 - [UserInputService.GetFocusedTextBox](https://developer.roblox.com/api-reference/function/UserInputService/GetFocusedTextBox)

 - [TextBox.Focused](https://developer.roblox.com/api-reference/event/TextBox/Focused)

 - [TextBox.FocusLost](https://developer.roblox.com/api-reference/event/TextBox/FocusLost)