The FocusLost event fires when the client lets their focus off the TextBox - typically when a client clicks/taps on a TextBox to begin text entry. This also fires if a TextBox forces focus on the user.

It can be used alongside `TextBox.Focus` to track when a TextBox gains and loses focus.

See also the [UserInputService.TextBoxFocused](https://developer.roblox.com/api-reference/event/UserInputService/TextBoxFocused) and [UserInputService.TextBoxFocusReleased](https://developer.roblox.com/api-reference/event/UserInputService/TextBoxFocusReleased) for similar functions that rely on the UserInputService service.

This event will only fire when used in a `/LocalScript`.