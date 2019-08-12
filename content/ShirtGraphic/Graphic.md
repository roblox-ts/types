The content ID link pointing to the T-shirt texture hosted on the Roblox website. This property sets the texture associated with a `ShirtGraphic`, or T-shirt, object.

## How do I find the T-Shirt Graphic?

This content ID is different to the website URL of the T-shirt. The content ID can be found by pasting the website URL of the T-shirt into the Graphic property in Roblox Studio, as studio will correct it. Alternatively [InsertService.LoadAsset](https://developer.roblox.com/api-reference/function/InsertService/LoadAsset) can be used to insert the T-shirt into the workspace, for example:

    local webURL = "https://www.roblox.com/catalog/2591161/Sword-Fight-on-the-Heights-Ring-of-Fire-T-Shirt"

    local assetId = tonumber(string.match(webURL, "%d+") or 0) -- extract the number

    local success, model = pcall(function()

    	return game:GetService("InsertService"):LoadAsset(assetId)

    end)

    if success then

    	model.Parent = workspace

    end