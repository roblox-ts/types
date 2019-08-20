PromptPurchaseFinished fires when a purchase dialogue of an affiliate gear sale or other asset is closed. This fires right as the dialogue closes when the player presses "Cancel" at the prompt, or "OK" at the success/error message.

* For **game passes**, use [MarketplaceService.PromptGamePassPurchaseFinished](https://developer.roblox.com/api-reference/event/MarketplaceService/PromptGamePassPurchaseFinished).

* For **developer product** purchase prompts, connect to [MarketplaceService.PromptProductPurchaseFinished](https://developer.roblox.com/api-reference/event/MarketplaceService/PromptProductPurchaseFinished). In order to process such purchases you need to set the [ProcessReceipt](https://developer.roblox.com/api-reference/callback/MarketplaceService/ProcessReceipt) callback in a single script.

## Example

Below is a screenshot of an affiliate gear sale prompt. The function in the code sample runs immediately after the player presses "Cancel" or after the user buys the item then presses "OK". Should there be an issue with the purchase, the event also fires.

![A product purchase prompt for an affiliate gear sale][1]

```lua
local MarketplaceService = game:GetService("MarketplaceService")

MarketplaceService.PromptPurchaseFinished:connect(function (...)
	-- Print all the details of the prompt, for example:
	-- PromptPurchaseFinished PlayerName 11377306 true
	print("PromptPurchaseFinished", ...)
end)
```

[1]: https://developer.roblox.com/assets/5c3f7bb9aae307c07f2f485f/PromptProductPurchase-confirm.png