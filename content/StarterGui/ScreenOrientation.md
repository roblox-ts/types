This property sets the preferred orientation mode for users with mobile devices. For the different modes available, see [Enum.ScreenOrientation](https://developer.roblox.com/search#stq=ScreenOrientation).

When a `Player` joins the game, if they are using a mobile device, this property will determine the device’s starting orientation. [PlayerGui.ScreenOrientation](https://developer.roblox.com/api-reference/property/PlayerGui/ScreenOrientation) will be set to this value for [Players](https://developer.roblox.com/api-reference/class/Player) joining the game. For example, the following code would set the default to *‘Portrait’*:

```lua
game:GetService("StarterGui").ScreenOrientation = Enum.ScreenOrientation.Portrait
```

By default, this property is set to *‘LandscapeSensor’*, meaning the viewport will rotate so it is always right-side-up in landscape.

Changing this property will not change the [Enum.ScreenOrientation](https://developer.roblox.com/search#stq=ScreenOrientation) for [Players](https://developer.roblox.com/api-reference/class/Player) already in the game. To change the orientation for an existing player use their [PlayerGui.ScreenOrientation](https://developer.roblox.com/api-reference/property/PlayerGui/ScreenOrientation) property.

You can also get the current screen orientation for a user’s device using [PlayerGui.CurrentScreenOrientation](https://developer.roblox.com/api-reference/property/PlayerGui/CurrentScreenOrientation). This is useful when using the ‘sensor’ [Enum.ScreenOrientation](https://developer.roblox.com/search#stq=ScreenOrientation) settings.

For more information, please see this article on [device orientation](https://developer.roblox.com/search#stq=Device%20Orientation%20for%20Mobile%20Roblox%20Games).