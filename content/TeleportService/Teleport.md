This function teleports a `Player` to the place associated with the given *placeId*.

Teleport can be called both from the client and the server (see examples below).

When teleporting from the client, as only the [Players.LocalPlayer](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) can be teleported, no *player* argument is required.

You may only teleport players to places within the same game or active start places for other games.

## Teleport data

A *teleportData* parameter can be specified. This is data the client will transmit to the destination place and can be retrieved using [TeleportService.GetLocalPlayerTeleportData](https://developer.roblox.com/api-reference/function/TeleportService/GetLocalPlayerTeleportData).

The *teleportData* can take any of the following forms:

 - A table without mixed keys (all keys are strings or integers)

 - A string

 - A number

 - A bool

As the *teleportData* is transmitted by the client it is not secure. For this reason it should only be used for local settings and not sensitive items (such as the users’ score or in-game currency).

If you need teleport data to persist across multiple teleports, you can use [TeleportService.SetTeleportSetting](https://developer.roblox.com/api-reference/function/TeleportService/SetTeleportSetting) and [TeleportService.GetTeleportSetting](https://developer.roblox.com/api-reference/function/TeleportService/GetTeleportSetting).

## Loading screen

A *customLoadingScreen* argument can be specified. This is a `ScreenGui` that is copied (without scripts) into the `CoreGui` of the destination place.

Note, [TeleportService.SetTeleportGui](https://developer.roblox.com/api-reference/function/TeleportService/SetTeleportGui) is the preferred alternative to the *customLoadingScreen* argument as it can be called prior to the teleport.

The loading `ScreenGui` can be obtained in the destination place using [TeleportService.GetArrivingTeleportGui](https://developer.roblox.com/api-reference/function/TeleportService/GetArrivingTeleportGui), where developers can parent it to the `PlayerGui`. It will not be used if the destination place is in a different game.

## Teleport failure

In some circumstances a teleport may fail. This can be due to the developer configuring the teleport incorrectly or issues with Roblox’s servers.

 - If a teleportation request is rejected the [TeleportService.TeleportInitFailed](https://developer.roblox.com/api-reference/event/TeleportService/TeleportInitFailed) event will fire the error message and a [Enum.TeleportResult](https://developer.roblox.com/search#stq=TeleportResult) enumerator describing the issue

 - Teleports can fail ‘in transit’, after the user has left the server, due to issues with Roblox’s servers. In this case the user will be shown an error message and be required to rejoin the game

## Alternative teleport functions

Before using Teleport, you should check to see if an alternative teleport function is more suitable:

 - [TeleportService.TeleportToSpawnByName](https://developer.roblox.com/api-reference/function/TeleportService/TeleportToSpawnByName) is used to teleport a player to a place and spawn them at a specific `SpawnLocation`

 - [TeleportService.TeleportPartyAsync](https://developer.roblox.com/api-reference/function/TeleportService/TeleportPartyAsync) is used to teleport a group of players together to the same server

 - [TeleportService.TeleportToPlaceInstance](https://developer.roblox.com/api-reference/function/TeleportService/TeleportToPlaceInstance) is used to teleport a player to a specific server in a place

 - [TeleportService.TeleportToPrivateServer](https://developer.roblox.com/api-reference/function/TeleportService/TeleportToPrivateServer) is used to teleport a player to a reserved server created using [TeleportService.ReserveServer](https://developer.roblox.com/api-reference/function/TeleportService/ReserveServer)

For more information on how to teleport players, see the [Articles.Teleporting Between Places](https://developer.roblox.com/search#stq=Teleporting%20Between%20Places) tutorial.
@param placeId The ID of the place to teleport to
@param player The `Player` to teleport, if this function is being called from the client this defaults to the `Players/LocalPlayer`
@param teleportData Optional data to be passed to the destination place. Can be retrieved using `TeleportService/GetLocalPlayerTeleportData`
@param customLoadingScreen Optional custom loading screen to be placed in the `CoreGui` at the destination place. Can be retrieved using `TeleportService/GetArrivingTeleportGui`