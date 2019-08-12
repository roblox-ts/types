The ModalEnabled property toggles whether Roblox's mobile controls are hidden on a player's mobile device. The default value of this property is *false*. The controls are hidden when set to *true*, and not hidden when set to *false*. See the images below for examples.

![ModalEnabled = false][1]

![ModalEnabled = true][2]

This property can be used when you want to hide or display Roblox's mobile controls for a player.

Even if mobile controls are hidden for a player on a mobile device, other UserInputService events such as [UserInputService.InputBegan](https://developer.roblox.com/api-reference/event/UserInputService/InputBegan) and [UserInputService.TouchSwipe](https://developer.roblox.com/api-reference/event/UserInputService/TouchSwipe) can still be used to process other forms of user input on mobile devices with an enabled touch screen (see the main UserInputService class page for a full list).

Since `UserInputService` only runs client-side, this property will only work when used in a `LocalScript`.

##See Also

The tutorial on disabling parts of the game interface, found [here][3], provides excellent documentation on using this property.

[1]: https://developer.roblox.com/assets/5c2d53a7be5779ad1a894d50/UISModalEnabledFalse.png

[2]: https://developer.roblox.com/assets/5c2d54601e85fe011cdd73c8/UISModalEnabledTrue.png

[3]: https://www.robloxdev.com/articles/Disabling-Parts-of-Game-Interface