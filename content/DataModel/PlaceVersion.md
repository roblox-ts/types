This property describes the version of the [place](https://developer.roblox.com/search#stq=Place) the server is running on.

This version number corresponds with the version number shown under the *Version History* section of the [place’s](https://developer.roblox.com/search#stq=Place) settings. It is not the current version of the Roblox client.

In Roblox Studio, this property is set to *0*.

When a server instance is created for a [place](https://developer.roblox.com/search#stq=Place) it is done so at the place’s current version. If the place is later updated whilst this server is running, the server will remain at its current version.

This property can be used to display a `ScreenGui` showing the current version of the game to [Players](https://developer.roblox.com/api-reference/class/Player) to assist with debugging.