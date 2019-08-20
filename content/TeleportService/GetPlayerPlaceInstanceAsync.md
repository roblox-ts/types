This function returns the [DataModel.PlaceId](https://developer.roblox.com/api-reference/property/DataModel/PlaceId) and [DataModel.JobId](https://developer.roblox.com/api-reference/property/DataModel/JobId) of the server the user with the given [Player.UserId](https://developer.roblox.com/api-reference/property/Player/UserId) is in provided it is in the same game as the current place.

[TeleportService.TeleportToPlaceInstance](https://developer.roblox.com/api-reference/function/TeleportService/TeleportToPlaceInstance) can then be called with this information to allow a user to join the target user’s server.

This function returns the following values:

| # | Name | Type | Description |
| --- | --- | --- | --- |
| 1 | success | bool | A bool indicating if the user was found in the same game universe |
| 2 | error | string | An error message in the event of the lookup failing |
| 3 | placeId | int64 | The [DataModel.PlaceId](https://developer.roblox.com/api-reference/property/DataModel/PlaceId) of the server the user is in |
| 4 | instanceId | string | The [DataModel.JobId](https://developer.roblox.com/api-reference/property/DataModel/JobId) of the server the user is in |

## Caveats

You should be aware of the following limitations when using this function:

 - This function can only be called by the server

 - This function may fail to return the correct information if the user is teleporting

 - It is possible for this function to throw an error, hence developers should wrap it in a pcall (see example below)

 - As this function returns the [DataModel.JobId](https://developer.roblox.com/api-reference/property/DataModel/JobId) of the server and not the access code returned by [TeleportService.ReserveServer](https://developer.roblox.com/api-reference/function/TeleportService/ReserveServer) the id returned is not appropriate for use with reserved servers

## See also

 - For the [PlaceIds](https://developer.roblox.com/api-reference/property/DataModel/PlaceId) and [JobIds](https://developer.roblox.com/api-reference/property/DataModel/JobId) of a [Player’s](https://developer.roblox.com/api-reference/class/Player) friends, use [Player.GetFriendsOnline](https://developer.roblox.com/api-reference/function/Player/GetFriendsOnline)
@param userId The `Player/UserId` of the `Player`
@returns See the table above
@rbxts server