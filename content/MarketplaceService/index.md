MarketplaceService is the game service that is responsible for in-game transactions.

The most notable functions are [PromptProductPurchase](https://developer.roblox.com/api-reference/function/MarketplaceService/PromptProductPurchase) and [PromptPurchase](https://developer.roblox.com/api-reference/function/MarketplaceService/PromptPurchase), as well as the callback [ProcessReceipt](https://developer.roblox.com/api-reference/callback/MarketplaceService/ProcessReceipt) which must be well defined so that transactions do not fail.

MarketplaceService also has functions that fetch information about developer products ([GetProductInfo](https://developer.roblox.com/api-reference/function/MarketplaceService/GetProductInfo) and [GetDeveloperProductsAsync](https://developer.roblox.com/api-reference/function/MarketplaceService/GetDeveloperProductsAsync)), game passes ([UserOwnsGamePassAsync](https://developer.roblox.com/api-reference/function/MarketplaceService/UserOwnsGamePassAsync)), and other assets ([PlayerOwnsAsset](https://developer.roblox.com/api-reference/function/MarketplaceService/PlayerOwnsAsset)).

## Monetization

Learning to use MarketplaceService is the first step towards learning to monetize a game on Roblox. Be extra mindful when using these features, as failed sales and sale-related bugs can be incredibly frustrating to deal with. Another important game service regarding monetization is `DataStoreService` which is responsible for saving and loading data like that of purchases. When processing purchases, it is often a good idea to check using data stores that a player hasn't already been granted a product. Remember: all of the current financial rules of Roblox apply to in-game sales. At the moment, members of Builders Club will earn 70% of the total cost of the transaction and 10% for affiliate gear sales. If you are not a Builders Club member, you instead earn 10% of the total cost of the transaction.

## Purchase Prompt

Below is an example of an in-game developer product purchase prompt for a product called "XP Boost", with a price of R$ 25. The player is presented with the choice "Buy Now" or "Cancel". Upon confirming the purchase, the [ProcessReceipt](https://developer.roblox.com/api-reference/callback/MarketplaceService/ProcessReceipt) callback will be invoked with information about the purchase so the game may grant the product (in this case, the XP Boost). In studio, purchases will not charge the developer account and will be marked as such in the prompt.

![A screenshot of the in-game purchase prompt asking "Want to buy the product XP Boost for R$ 25? This is a test purchase. Your account will not be charged "][PromptProductPurchase]

## Sale Processing

Processing the sales of developer products is done by setting the [ProcessReceipt](https://developer.roblox.com/api-reference/callback/MarketplaceService/ProcessReceipt) callback once. This callback should grant the bonus associated with a developer product and return `Enum.ProductPurchaseDecision.PurchaseGranted`.

[PromptProductPurchase]: https://developer.roblox.com/assets/5b61f4394bf5bf624023e72b/PromptProductPurchase.png