This function sets the [DataModel.PlaceId](https://developer.roblox.com/api-reference/property/DataModel/PlaceId) of the game instance to the given *placeId*.

Setting the [DataModel.PlaceId](https://developer.roblox.com/api-reference/property/DataModel/PlaceId) is required to access the `DataStoreService` when the place is unpublished (for example a local .rbxl file). See below for an example. Note this will only work when the *‘Enable Studio Access to API Services`* option is enabled under game settings.

```lua
local DataStoreService = game:GetService("DataStoreService")

-- access DataStore 'Data' as place placeId
game:SetPlaceId(placeId)
local dataStore = DataStoreService:GetDataStore("Data")
```

You can use [DataModel.SetUniverseId](https://developer.roblox.com/api-reference/function/DataModel/SetUniverseId) to set the [DataModel.GameId](https://developer.roblox.com/api-reference/property/DataModel/GameId) of the game instance. However, it is the [DataModel.PlaceId](https://developer.roblox.com/api-reference/property/DataModel/PlaceId) that must be set to access the `DataStoreService`.
@param placeId The ID to set the `DataModel/PlaceId` to