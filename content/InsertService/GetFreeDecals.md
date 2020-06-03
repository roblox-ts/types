The GetFreeDecals function retrieves a list of Free `Decal`s from the Catalog. The return type for this method is very odd, as it returns a single table wrapped in a table.

The best way to explain it is to show a visual of the array returned:

```lua
[1] = {
	CurrentStartIndex = 1; -- This can vary depending on the page you input.
	TotalCount = 21; -- Always 21.
	Results = {
		-- All parameters here are psuedo. They can vary depending on the asset.
		[1] = {	
			Name = "Asset Name"; 
			AssetId = 0000000;
			AssetVersionId = 0000000;
			CreatorName = "Roblox";
		},
		-- [2], [3], and so on... up to [21]
	},
}
```

Yikes! That quite confusing. Unfortunately this method was added in the earlier days of Roblox, where easy to understand return-types weren't a priority.

Thankfully, an example for iterating over this list has been provided at the bottom of this page.

Additionally, if you want to insert [Models](https://developer.roblox.com/api-reference/class/Model) instead, you can use the [InsertService.GetFreeModels](https://developer.roblox.com/api-reference/function/InsertService/GetFreeModels) function.

*Note:* The page argument starts at 0. So Page 1 = 0, Page 2 = 1, etc.
@param searchText String used to search for free decals in the Catalog
@param pageNum The page number in the Catalog to return
@returns A single table (of returned free decals) wrapped in a table