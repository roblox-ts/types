The Focused event fires when the `/TextBox` gains focus - typically when a client clicks/taps on a TextBox to begin text entry. This also fires if a TextBox forces focus on the user.

It can be used alongside `TextBox.FocusLost` to track when a TextBox gains and loses focus.

See also the [UserInputService.TextBoxFocused](https://developer.roblox.com/api-reference/event/UserInputService/TextBoxFocused) and [UserInputService.TextBoxFocusReleased](https://developer.roblox.com/api-reference/event/UserInputService/TextBoxFocusReleased) for similar functions that rely on the UserInputService service.

This event will only fire when used in a `/LocalScript`.