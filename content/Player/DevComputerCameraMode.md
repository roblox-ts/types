The DevComputerCameraMode property determines the manner in which a player moves their camera when using a mouse-and-keyboard device device. See [Enum.DevComputerCameraMovementMode](https://developer.roblox.com/search#stq=DevComputerCameraMovementMode) for a description of each camera control mode available. This property cannot be set using a `LocalScript` (it must be set on the server using a `Script`).

The default value of this property is determined by [StarterPlayer.DevComputerCameraMovementMode](https://developer.roblox.com/api-reference/property/StarterPlayer/DevComputerCameraMovementMode).

## Note

* The word "Computer" in this property name refers to non-[TouchEnabled](https://developer.roblox.com/api-reference/property/UserInputService/TouchEnabled), non-[GamepadEnabled](https://developer.roblox.com/api-reference/property/UserInputService/GamepadEnabled) devices.

* When set to **UserChoice**, a player can choose between any control mode (except **Scriptable**) in the Roblox game settings. In general, it is a good idea to allow players to choose their control mode to maximize accessibility.

* It is possible to create a custom control scheme by setting this property to **Scriptable**.

* This property does not affect players using a touch enabled device. See [Player.DevTouchCameraMode ](https://developer.roblox.com/search#stq=DevTouchCameraMode%20) instead.