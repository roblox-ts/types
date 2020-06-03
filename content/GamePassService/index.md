The GamePassService is a service that supports legacy game passes using  *Asset IDs*. `MarketplaceService` should be used for all new game passes.

For more information about game passes, please see [this article][1].

## Legacy Game Passes

Historically, game passes on Roblox had an *Asset ID* associated with them. Although game passes created with an *Asset ID* still have an *Asset ID*, they now also have a *Game Pass ID*. All new game passes created today **only** have a *Game Pass ID*.

You can retrieve the *Game Pass ID* of any pass through its URL, for example the *Game Pass ID* of the below pass is 1:

```lua
https://www.roblox.com/game-pass/1/myGamePass
```

Whether you are using an *Asset ID* or a *Game Pass ID* determines which API members you can use.

|  | Works with _Asset ID_ (Legacy) | Works with _Game Pass ID_ (Current) |
| Verify Ownership | [GamePassService:PlayerHasPass](https://developer.roblox.com/api-reference/function/GamePassService/PlayerHasPass) | [MarketplaceService:UserOwnsGamePassAsync](https://developer.roblox.com/api-reference/function/MarketplaceService/UserOwnsGamePassAsync) |
| --- | --- |
| Prompt a purchase | [MarketplaceService:PromptPurchase](https://developer.roblox.com/api-reference/function/MarketplaceService/PromptPurchase) | [MarketplaceService:PromptGamePassPurchase](https://developer.roblox.com/api-reference/function/MarketplaceService/PromptGamePassPurchase) |
| --- | --- |
| Prompted purchase finished | [MarketplaceService.PromptPurchaseFinished](https://developer.roblox.com/api-reference/event/MarketplaceService/PromptPurchaseFinished) | [MarketplaceService.PromptGamePassPurchaseFinished](https://developer.roblox.com/api-reference/event/MarketplaceService/PromptGamePassPurchaseFinished) |
| --- | --- |

API members that work with *Asset IDs* **will not** work with new game passes as they do not have them.

[1]: https://developer.roblox.com/articles/Game-Passes-One-Time-Purchases