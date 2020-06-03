The content ID link pointing to the shirt template hosted on the Roblox website. Determines the texture of the `Shirt`.

## How do I find the ShirtTemplate?

This content ID is different to the website URL of the shirt. The content ID can be found by pasting the website URL of the shirt into the ShirtTemplate property in Roblox Studio, as studio will correct it. Alternatively [InsertService.LoadAsset](https://developer.roblox.com/api-reference/function/InsertService/LoadAsset) can be used to insert the shirt into the workspace, for example:

```lua
local webURL = "https://www.roblox.com/catalog/1804747/White-Shirt"
local assetId = tonumber(string.match(webURL, "%d+") or 0) -- extract the number
local success, model = pcall(function() 
	return game:GetService("InsertService"):LoadAsset(assetId) 
end)
if success then 
	model.Parent = workspace
end
```

See also [ShirtGraphic.Graphic](https://developer.roblox.com/api-reference/property/ShirtGraphic/Graphic) for the image applied to T-shirts.