UserOwnsGamePassAsync returns true if the `Player` with the given [UserId](https://developer.roblox.com/api-reference/property/Player/UserId) owns the game pass with the given **game pass ID** (not to be confused with asset ID).

## Caching Behavior

Results of this function are remembered so that repeated calls will return quicker. This function will always return true if the player owns the game pass upon first entering a server after having purchased the game pass. If the game pass is purchased in-game (through [PromptGamePassPurchase](https://developer.roblox.com/api-reference/function/MarketplaceService/PromptGamePassPurchase)), this function may return false due to the caching behavior. Conversely, should the player delete the game pass from their inventory, this function may return true despite the player not owning the game pass.

## History

Previously, querying player ownership of game passes required the use of the now-deprecated [GamePassService.PlayerHasPass](https://developer.roblox.com/api-reference/function/GamePassService/PlayerHasPass) function. This was changed in April 2018 when [game passes received their own ID system](https://devforum.roblox.com/t/live-changes-to-game-passes/116918).

On [Release 350](https://developer.roblox.com/resources/release-note/Release-Note-for-350) (August 2018), this function was changed so that the result is cached. Previously, it made a request every time it was called.
@param userId The `Player/UserId|UserId` of the `Player` whose inventory shall be queried
@param gamePassId The game pass ID of the game pass to be checked, not to be confused with asset ID