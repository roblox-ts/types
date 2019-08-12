This event fires when a purchase dialogue of a game pass is closed. This fires right as the dialogue closes when the player presses "Cancel" at the prompt, or "OK" at the success/error message.

 - For **developer product** purchase prompts, connect to

   [MarketplaceService.PromptProductPurchaseFinished](https://developer.roblox.com/api-reference/event/MarketplaceService/PromptProductPurchaseFinished). In order to

   process such purchases you need to set the

   [ProcessReceipt](https://developer.roblox.com/api-reference/callback/MarketplaceService/ProcessReceipt) callback in a

   single script.

 - For **affiliate gear sales** or other assets, use

   [MarketplaceService.PromptPurchaseFinished](https://developer.roblox.com/api-reference/event/MarketplaceService/PromptPurchaseFinished).