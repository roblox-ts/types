This event is fired when the user prompts an increase or decrease in graphics quality using the hotkeys.

This event fires under the following conditions:

 - If the user presses F10, this event fires with a *betterQuality* argument of *true*

 - If the user presses Shift + F10, this event fires with a *betterQuality* argument of *false*

GraphicsQualityChangeRequest does not provide the current graphics quality level or cover all updates to the graphics quality. For example, changes made in the core GUI escape menu are not registered. This event is intended to be used by Roblox core scripts to update the graphics quality and display notifications.

You can retrieve a user's [Enum.SavedQualitySetting](https://developer.roblox.com/search#stq=SavedQualitySetting) using `UserGameSettings` with the following snippet:

```lua
UserSettings():GetService("UserGameSettings").SavedQualityLevel
```

Note, if the user’s graphics settings are set to automatic then the [Enum.SavedQualitySetting](https://developer.roblox.com/search#stq=SavedQualitySetting) will be *‘Automatic’*. There is currently no way for developers to reliably get the current graphics quality level of a user’s machine.