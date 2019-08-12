This function teleports a group of [Players](https://developer.roblox.com/api-reference/class/Player) to the same server instance in the given place. It returns the [DataModel.JobId](https://developer.roblox.com/api-reference/property/DataModel/JobId) of the server instance the players were teleported to.

This function can only be called from the server.

You may only use this function to teleport to a place in the same game. This function can not teleport more than 50 [Players](https://developer.roblox.com/api-reference/class/Player) in a single party.

Currently this function may not work reliably when teleporting [Players](https://developer.roblox.com/api-reference/class/Player) to the same place they are currently in.

## Teleport data

A *teleportData* parameter can be specified. This is data the clients will transmit to the destination place and can be retrieved using [TeleportService.GetLocalPlayerTeleportData](https://developer.roblox.com/api-reference/function/TeleportService/GetLocalPlayerTeleportData).

The *teleportData* can take any of the following forms:

 - A table without mixed keys (all keys are strings or integers)

 - A string

 - A number

 - A bool

As the *teleportData* is transmitted by the client it is not secure. For this reason it should only be used for local settings and not sensitive items (such as the users’ score or in-game currency).

## Loading screen

A *customLoadingScreen* argument can be specified. This is a `ScreenGui` that is copied (without scripts) into the `CoreGui` of the destination place. It can be retrieved at the destination place using [TeleportService.GetArrivingTeleportGui](https://developer.roblox.com/api-reference/function/TeleportService/GetArrivingTeleportGui) and will not be used if the destination place is in a different game.

You are advised to instead set the loading screen on the client using [TeleportService.SetTeleportGui](https://developer.roblox.com/api-reference/function/TeleportService/SetTeleportGui). The loading `ScreenGui` should also be parented to the [Players'](https://developer.roblox.com/api-reference/class/Player) [PlayerGuis](https://developer.roblox.com/api-reference/class/PlayerGui) a few seconds before the teleport to ensure a smooth transition using a `RemoteEvent`. For an example of this see [SetTeleportGui](https://developer.roblox.com/api-reference/function/TeleportService/SetTeleportGui).

## Teleport failure

In some circumstances a teleport may fail. This can be due to the developer configuring the teleport incorrectly or issues with Roblox’s servers.

 - If a teleportation request is rejected the [TeleportService.TeleportInitFailed](https://developer.roblox.com/api-reference/event/TeleportService/TeleportInitFailed) event will fire the error message and a [Enum.TeleportResult](https://developer.roblox.com/search#stq=TeleportResult) enumerator describing the issue

 - Teleports can fail ‘in transit’, after the user has left the server, due to issues with Roblox’s servers. In this case the user will be shown an error message and be required to rejoin the game

## See also

 - [Player.GetJoinData](https://developer.roblox.com/api-reference/function/Player/GetJoinData) to get the [UserIds](https://developer.roblox.com/api-reference/property/Player/UserId) of [Players](https://developer.roblox.com/api-reference/class/Player) teleported together
@param placeId The ID of the place to teleport to
@param players An array containing the `Player|Players` to teleport
@param teleportData Optional data to be passed to the destination place. Can be retrieved using `TeleportService/GetLocalPlayerTeleportData`
@param customLoadingScreen Optional custom loading screen to be placed in the `CoreGui` at the destination place. Can be retrieved using `TeleportService/GetArrivingTeleportGui`
@returns The `DataModel/JobId` of the server instance the `Player|Players` were teleported to