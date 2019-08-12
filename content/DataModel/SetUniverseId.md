This function sets the [DataModel.GameId](https://developer.roblox.com/api-reference/property/DataModel/GameId) of the current game instance to the given *universeId*. This is useful when testing local .rbxl files that have not been published to Roblox.

If you want to access the `DataStoreService` in an unpublished place, you should use [DataModel.SetPlaceId](https://developer.roblox.com/api-reference/function/DataModel/SetPlaceId) instead.
@param universeId The ID to set the `DataModel/GameId` to