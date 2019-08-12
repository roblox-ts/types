After a player makes a purchase through a [PromptProductPurchase()](https://developer.roblox.com/api-reference/function/MarketplaceService/PromptProductPurchase) dialog, this callback is called multiple times until it returns `Enum.ProductPurchaseDecision.PurchaseGranted`. For example, the function is called again for a product when the player joins the game&nbsp;&mdash; or even after they have bought something else&nbsp;&mdash; **unless** you return `Enum.ProductPurchaseDecision.PurchaseGranted`.

It's important to carefully examine the information passed to the callback via the **receipt info table** and properly process the receipt. See the code sample below for a model of how to create a receipt handling callback.

Care and caution are highly recommended in implementing this callback as small mistakes run the risk of failed sales.

As with all callbacks, this function should be set **once and only once** by a single `Script`. If you're selling multiple products in your game, this callback must handle receipts for all of them.

## Receipt Info Table

The receipt info table passed to this callback will contain the following data:

| Key | Type | Description |
| --- | --- | --- |
| `PurchaseId` | string | A unique identifier for the specific purchase. |
| `PlayerId` | number | The ID of the player who made the purchase. |
| `ProductId` | number | The ID of the purchased product. |
| `CurrencySpent` | number | The amount of currency spent in the purchase. |
| `CurrencyType` | [CurrencyType](https://developer.roblox.com/search#stq=CurrencyType) | The type of currency spent in the purchase; always `Enum.CurrencyType.Robux`. |
| `PlaceIdWherePurchased` | number | The ID of the place where the product was purchased (not necessarily the same as the current place's ID). |