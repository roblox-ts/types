This function returns 'Enum/UserInputType` associated with the user’s most recent input.

For example, if the user’s previous input had been pressing the spacebar, the [Enum.UserInputType](https://developer.roblox.com/search#stq=UserInputType) returned would be *‘Keyboard’*.

The [UserInputService.LastInputTypeChanged](https://developer.roblox.com/api-reference/event/UserInputService/LastInputTypeChanged) event can be used to track when the last [Enum.UserInputType](https://developer.roblox.com/search#stq=UserInputType) used by the user changes.

As `UserInputService` is client-side only, this function can only be used in a `LocalScript`.
@returns The `Enum/UserInputType` associated with the user’s most recent input