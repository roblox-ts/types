This function provides information about an asset, developer product or game pass given its **assetId** and the [Enum.InfoType](https://developer.roblox.com/search#stq=InfoType) (Asset, Product or GamePass respectively).

Information about the queried item is provided in a dictionary with the following keys. Note that not all information is provided or necessarily relevant for the kind of object you are querying.

| Name | Type | Description |
| --- | --- | --- |
| `Name` | string | The name shown on the asset's page |
| `Description` | string | The description as shown on the asset's page; can be nil if blank |
| `PriceInRobux` | number | The cost of purchasing the asset using Robux |
| `Created` | timestamp | Timestamp of when the asset was created, e.g. `2018-08-01T17:55:11.98Z` |
| `Updated` | timestamp | Timestamp of when the asset was last updated by its creator, e.g. `2018-08-01T17:55:11.98Z` |
| `ContentRatingTypeId` | number | Indicates whether the item is marked as 13+ in catalog |
| `MinimumMembershipLevel` | number | The minimum Builder's Club subscription necessary to purchase the item |
| `IsPublicDomain` | boolean | Describes whether the asset can be taken for free |
|  **Creator Information** |
| `Creator` | Dictionary | A table of information describing the creator of the asset (see following lines) |
| `Creator.CreatorType` | string | Either `User` or `Group` |
| `Creator.CreatorTargetId` | number | The ID of the creator user or group |
| `Creator.Name` | string | The name/username of the creator |
| `Creator.Id` | number | (Use CreatorTargetId instead) |
|  **Assets** |
| `AssetId` | number | If InfoType was Asset, this is the ID of the given asset. |
| `AssetTypeId` | number | The type of asset (e.g. place, model, shirt) [*](#assettypes) |
| `IsForSale` | boolean | Describes whether the asset is purchasable |
| `IsLimited` | boolean | Describes whether the asset is a "limited item" that is no longer (if ever) sold |
| `IsLimitedUnique` | boolean | Describes whether the asset is a "limited unique" ("Limited U") item that only has a fixed number sold |
| `IsNew` | boolean | Describes whether the asset is marked as "new" in the catalog |
| `Remaining` | number | The remaining number of items a limited unique item may be sold |
| `Sales` | number | The number of items the asset has been sold |
|  **Developer Products** |
| `ProductId` | number | If the InfoType was Product, this is the product ID |
| `IconImageAssetId` | number | For developer products, this is the asset ID of the product's icon (or 0 if the product does not have one) |

\* See [Asset Types](https://developer.roblox.com/search#stq=Asset-types) for the asset type ID numbers. †Timestamps are formatted using [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

## Developer Product Example

The following example loads information about a developer product.

```lua
local PRODUCT_ID = 336755544

local MarketplaceService = game:GetService("MarketplaceService")

local productInfo = MarketplaceService:GetProductInfo(PRODUCT_ID, Enum.InfoType.Product)

print("Product ID " .. PRODUCT_ID .. " name: " .. productInfo.Name) 

if productInfo.Description then
	print("Description: " .. productInfo.Description)
else
	print("No description!")
end

if productInfo.IsForSale then
	print("It is on sale for " .. productInfo.PriceInRobux .. " Robux.")
end

print("The image icon is: rbxassetid://" .. productInfo.IconImageAssetId)
```

## Use in Studio Plugins

This method is often used by plugins to detect old versions and notify the user to manually update a plugin. The plugin author uploads a dummy asset, such as a decal or model, then puts the present version of the plugin in that asset's description. The plugin then calls this method and checks an internal version number for a newer version.

## Possible Errors

If no such item exists with the given ID, this function will throw an error:

 - For developer products, the error is:

> *MarketplaceService:getProductInfo() failed because rawProductInfo was empty*

 - For game passes and assets, the error is:

> *MarketplaceService:getProductInfo() failed because HTTP 0 (HTTP 400 (HTTP/1.1 400 BadRequest))*
@param assetId The assetId of the specified product
@param infoType An `Enum/InfoType` enum value specifying the type of information being retrieved
@returns A dictionary containing information about the queried item (described in the table above). Note that not all information is provided or necessarily relevant for the kind of object you are querying