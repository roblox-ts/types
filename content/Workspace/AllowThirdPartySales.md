This `Workspace` property determines whether assets created by other uses can be sold in the game.

## What are third party sales?

When this value is false, as it is by default, only assets created by the place creator (be it a player or a group) and Roblox can be sold using `MarketplaceService`.

In most cases, games do not need to sell third party assets. However, some games such as trade hangouts require this feature and therefore it exists as an opt-in option.

## What third party products can I sell?

Note, [developer products](https://developer.roblox.com/search#stq=Developer%20Products%20–%20In-Game%20Purchases) can only be sold in the game they are associated with, regardless of what AllowThirdPartySales is set to. This property will function for [game passes](https://developer.roblox.com/search#stq=Game%20Passes%20–%20Abilities%20and%20Bonuses) and [clothing](https://developer.roblox.com/search#stq=How%20to%20Make%20Shirts%20and%20Pants%20for%20Roblox%20Characters) however.

[1]: https://developer.roblox.com/articles/Developer-Products-In-Game-Purchases

[2]: https://developer.roblox.com/articles/Game-Passes-One-Time-Purchases

[3]: https://developer.roblox.com/articles/How-to-Make-Shirts-and-Pants-for-Roblox-Characters