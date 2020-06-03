The `UserInputService` is a service used to detect and capture the different types of input available on a user’s device.

The primary purpose of this service is to allow for games to cooperate with multiple forms of available input - such as gamepads, touch screens, and keyboards. It allows a `LocalScript` to perform different actions depending on the device, and in turn, helps developers provide the best experience for the end user.

Some usages of this service include detecting user input when they interact with GUIs, tools, and other game instances. In order to detect user input, the service must look for a service event. For example, the service can detect events such as when the user touches the screen of a mobile device using [UserInputService.TouchStarted](https://developer.roblox.com/api-reference/event/UserInputService/TouchStarted), or connects a gamepad such as an Xbox controller to their device using [UserInputService.GamepadConnected](https://developer.roblox.com/api-reference/event/UserInputService/GamepadConnected).

Since this service is client-side only, it will only work when used in a `LocalScript` or a `ModuleScript` required by a `LocalScript`. As UserInputService is client-side only, users in the game can only detect their own input - and not the input of others.

## See also

 - `ContextActionService`, a service which allows you to bind functions to multiple user inputs
@rbxts client