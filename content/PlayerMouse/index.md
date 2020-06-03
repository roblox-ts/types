The PlayerMouse behaves identically to the `Mouse` object that is obtained using [Tool.Equipped](https://developer.roblox.com/api-reference/event/Tool/Equipped). It can be accessed from `LocalScript`s using the local player's [Player.GetMouse](https://developer.roblox.com/api-reference/function/Player/GetMouse) method.

The only difference between the PlayerMouse and the `Mouse` object is the PlayerMouse can be obtained using the [Player.GetMouse](https://developer.roblox.com/api-reference/function/Player/GetMouse) method.

In most cases developers are advised to use the new `UserInputService`. However the PlayerMouse and Mouse objects remain supported for a number of reasons.

For more information on how to use the mouse object, see the `Mouse` page.