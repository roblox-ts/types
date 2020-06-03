The InputChanged event fires when a user changes how they're interacting via a Human-Computer Interface device (Mouse button down, touch begin, keyboard button down, etc).

To ignore events that are automatically handled by Roblox, like scrolling in a `ScrollingFrame`, check the *gameProcessedEvent* argument is false.

This event can be used along with [UserInputService.InputBegan](https://developer.roblox.com/api-reference/event/UserInputService/InputBegan) and [UserInputService.InputEnded](https://developer.roblox.com/api-reference/event/UserInputService/InputEnded) to track when user input begins, changes, and ends.

This event only fires when the Roblox client window is in focus. For example, inputs will not be captured when the window is minimized.

As this event only fires locally, it can only be used in a `LocalScript`.