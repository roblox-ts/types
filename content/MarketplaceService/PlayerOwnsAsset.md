Returns whether the inventory of given `Player` contains an asset, given the ID. This method can query for hats, models, sounds, etc. This function takes a small amount of time to send a request the Roblox website.

In the case that a query fails, this function will throw an error. Therefore, it is recommended to wrap calls to this function in `pcall`.

* This method should not be used for **game passes**, since they use a separate ID system. Legacy game passes that still depend on an asset ID should use [GamePassService.PlayerHasPass](https://developer.roblox.com/api-reference/function/GamePassService/PlayerHasPass) instead of this method.

* This method cannot be used to check for **developer products** since they can be purchased multiple times but not owned themselves. Use a `GlobalDataStore` to save when a developer has bought a developer product instead.
@param player A Player object whose inventory shall be tested for the ownership of the given asset
@param assetId The ID of an asset for which the given player's inventory shall be tested
@returns Indicates whether the given Player's inventory contains the given asset