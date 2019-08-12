This property describes the ID of the [place](https://developer.roblox.com/search#stq=Place) running on the server.

This ID corresponds with the number in the [place’s](https://developer.roblox.com/search#stq=Place) URL. For example, the ID of the place at the following URL is *1818*:

```lua
https://www.roblox.com/games/1818/Classic-Crossroads
```

The place ID can also be found in the [game explorer][1] in Roblox Studio by right clicking on the place and selecting ‘Copy ID to clipboard’.

When using Roblox Studio, if the place has not been published to Roblox then the PlaceId will correspond with the template being used.

## See also

 - [DataModel.GameId](https://developer.roblox.com/api-reference/property/DataModel/GameId), which describes the ID of the [game](https://developer.roblox.com/search#stq=Multi%20Place%20Games) the current [place](https://developer.roblox.com/search#stq=Place) belongs to

 - [DataModel.JobId](https://developer.roblox.com/api-reference/property/DataModel/JobId), which is a unique identifier for the server game instance running

 - `TeleportService`, which is a service that can be used to transport [Players](https://developer.roblox.com/api-reference/class/Player) between places

[1]: https://www.robloxdev.com/resources/studio/Game-Explorer