This function returns a dictionary containing information on how the `Player` joined the game.

The dictionary contains the fields below. Please note, whether these fields exists depends on the circumstances under which the `Player` joined the game.

| Key | Value Type | Description |
| --- | --- | --- |
| SourcePlaceId | int64 | The [DataModel.PlaceId](https://developer.roblox.com/api-reference/property/DataModel/PlaceId) of the place the `Player` was teleported from. Only present if the player was teleported to the current place. |
| Members | array | An array containing the [UserIds](https://developer.roblox.com/api-reference/property/Player/UserId) teleported alongside the `Player`. Only present if the player was teleported in using [TeleportService.TeleportPartyAsync](https://developer.roblox.com/api-reference/function/TeleportService/TeleportPartyAsync). |
| TeleportData | variant | The _teleportData_ parameter specified in the original teleport function. Only present if _teleportData_ was specified and the teleport function was called from the server. |

## GetJoinData and TeleportData

If the teleport the `Player` arrived in the current place due to was initiated on a server (as opposed to a client) the [Player’s](https://developer.roblox.com/api-reference/class/Player) *teleportData* is included in the dictionary returned by this function.

This function can only be used to fetch *teleportData* on the server, to retrieve it on the client use [TeleportService.GetLocalPlayerTeleportData](https://developer.roblox.com/api-reference/function/TeleportService/GetLocalPlayerTeleportData).

In contrast to [TeleportService.GetLocalPlayerTeleportData](https://developer.roblox.com/api-reference/function/TeleportService/GetLocalPlayerTeleportData), this function provides a number of security checks to the *teleportData*:

 - It is guaranteed to have been sent by a Roblox server in the last 48 hours

 - It is guaranteed to have been sent with this `Player`

 - The SourcePlaceId returned is guaranteed to be the place the data was sent from. This means you can verify the TeleportData came from an approved place

However, as this data is transmitted by the client, it not 100% secure. Although the user cannot modify this data it is possible for them to view it or insert data from a previous teleport.

Despite this, it is still appropriate for the secure transmission of [immutable data][1] (data that can not be changed). For example, if the user has completed a level that cannot be uncompleted. Such data can be securely transmitted using this function avoiding the need to use up and wait for [DataStore](https://developer.roblox.com/api-reference/class/GlobalDataStore) requests when teleporting.

You should not use this function for data that can be changed. For example, the amount of in-game currency the user currently has. This is because GetJoinData cannot guarantee a malicious user is not transmitting data from a previous session. For data like this, you should rely on [GlobalDataStores](https://developer.roblox.com/api-reference/class/GlobalDataStore).

As with all cases, you should implement proper server validation to ensure your game is secure. For more information see this article on [Articles.Game Security](https://developer.roblox.com/search#stq=Game%20Security).

[1]: https://en.wikipedia.org/wiki/Immutable_object
@returns A dictionary containing PlaceId and UserId values (see table in description).