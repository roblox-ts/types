This function teleports one of more [Players](https://developer.roblox.com/api-reference/class/Player) to a reserved server created using [TeleportService.ReserveServer](https://developer.roblox.com/api-reference/function/TeleportService/ReserveServer).

The *reservedServerAccessCode* parameter is the access code returned by [ReserveServer](https://developer.roblox.com/api-reference/function/TeleportService/ReserveServer).

TeleportToPrivateServer can only be called on the server.

## Spawn name

An optional *spawnName* parameter can be provided, which will cause the [Players](https://developer.roblox.com/api-reference/class/Player) to initially spawn at the `SpawnLocation` of that name in the destination place. The `SpawnLocation` must be valid for the [Players](https://developer.roblox.com/api-reference/class/Player) to spawn on. For example, it must be [neutral](https://developer.roblox.com/api-reference/property/SpawnLocation/Neutral) or set to the same [TeamColor](https://developer.roblox.com/api-reference/property/SpawnLocation/TeamColor) as the `Team` the [Players](https://developer.roblox.com/api-reference/class/Player) will be assigned to upon joining the game.

## Teleport data

A *teleportData* parameter can be specified. This is data the clients will transmit to the destination place and can be retrieved using [TeleportService.GetLocalPlayerTeleportData](https://developer.roblox.com/api-reference/function/TeleportService/GetLocalPlayerTeleportData).

The *teleportData* can take any of the following forms:

 - A table without mixed keys (all keys are strings or integers)

 - A string

 - A number

 - A bool

As the *teleportData* is transmitted by the client it is not secure. For this reason it should only be used for local settings and not sensitive items (such as the users’ score or in-game currency).

If you need teleport data to persist across multiple teleports, you can use [TeleportService.SetTeleportSetting](https://developer.roblox.com/api-reference/function/TeleportService/SetTeleportSetting) and [TeleportService.GetTeleportSetting](https://developer.roblox.com/api-reference/function/TeleportService/GetTeleportSetting).

## Loading screen

A *customLoadingScreen* argument can be specified. This is a `ScreenGui` that is copied (without scripts) into the `CoreGui` of the destination place.

You are advised to instead set the loading screen on the client using [TeleportService.SetTeleportGui](https://developer.roblox.com/api-reference/function/TeleportService/SetTeleportGui). The loading `ScreenGui` should also be parented to the [Player’s](https://developer.roblox.com/api-reference/class/Player) `PlayerGui` a few seconds before the teleport to ensure a smooth transition using a `RemoteEvent`. For an example of this see [SetTeleportGui](https://developer.roblox.com/api-reference/function/TeleportService/SetTeleportGui)

The loading `ScreenGui` can be obtained in the destination place using [TeleportService.GetArrivingTeleportGui](https://developer.roblox.com/api-reference/function/TeleportService/GetArrivingTeleportGui), where developers can parent it to the `PlayerGui`.

## Teleport failure

In some circumstances a teleport may fail. This can be due to the developer configuring the teleport incorrectly or issues with Roblox’s servers.

 - If a teleportation request is rejected the [TeleportService.TeleportInitFailed](https://developer.roblox.com/api-reference/event/TeleportService/TeleportInitFailed) event will fire the error message and a [Enum.TeleportResult](https://developer.roblox.com/search#stq=TeleportResult) enumerator describing the issue

 - Teleports can fail ‘in transit’, after the user has left the server, due to issues with Roblox’s servers. In this case the user will be shown an error message and be required to rejoin the game

For more information on how to teleport players, see the [Articles.Teleporting Between Places](https://developer.roblox.com/search#stq=Teleporting%20Between%20Places) tutorial.
@param placeId The ID of the place to teleport to
@param reservedServerAccessCode The reserved server access code returned by `TeleportService/ReserveServer`
@param players An array of `Player|Players` to teleport
@param spawnName Optional name of the `SpawnLocation` to spawn at
@param teleportData Optional data to be passed to the destination place. Can be retrieved using `TeleportService/GetLocalPlayerTeleportData`
@param customLoadingScreen Optional custom loading screen to be placed in the `CoreGui` at the destination place. Can be retrieved using `TeleportService/GetArrivingTeleportGui`