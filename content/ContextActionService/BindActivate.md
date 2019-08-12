Specifies the [Enum.KeyCode](https://developer.roblox.com/search#stq=KeyCode) that can be used with a [Enum.UserInputType](https://developer.roblox.com/search#stq=UserInputType) to activate a [Tool](https://wiki.roblox.com/index.php?title=Tool), or a [HopperBin](https://wiki.roblox.com/index.php?title=HopperBin) .

When the KeyCode is used, it will fire the [Button1Down](https://wiki.roblox.com/index.php?title=Button1Down) event under the [Mouse](https://wiki.roblox.com/index.php?title=Mouse) returned by [Tool.Equipped](https://developer.roblox.com/api-reference/event/Tool/Equipped) or [HopperBin.Selected](https://developer.roblox.com/api-reference/event/HopperBin/Selected), and it will fire the [Tool](https://wiki.roblox.com/index.php?title=Tool)'s [Tool.Activated](https://developer.roblox.com/api-reference/event/Tool/Activated) event.Specifies the [Enum.KeyCode](https://developer.roblox.com/search#stq=KeyCode) that can be used with a [Enum.UserInputType](https://developer.roblox.com/search#stq=UserInputType) to activate a [Tool](https://wiki.roblox.com/index.php?title=Tool), or a [HopperBin](https://wiki.roblox.com/index.php?title=HopperBin).

## Notes

* You should only use the following [Enum.UserInputType](https://developer.roblox.com/search#stq=UserInputType) with the _userInputTypeForActivation_ parameter, as the others will not do anything:

  - _Keyboard_

  - _Gamepad1_ through _Gamepad8_

* If a [Tool](https://wiki.roblox.com/index.php?title=Tool)'s [Tool.ManualActivationOnly](https://developer.roblox.com/api-reference/property/Tool/ManualActivationOnly) property is set to true, you will be unable to activate the tool using this.