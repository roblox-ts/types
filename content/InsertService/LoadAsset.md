The LoadAsset function returns a [model](https://developer.roblox.com/api-reference/class/Model) inserted into `InsertService` containing the asset.

For instance, if you want to load a [Doge][1] `Model`, which has the asset Id ***257489726***, you would use the following statement:

    InsertService:LoadAsset("257489726")

This line would return an `Instance` of the Doge model within your game. Changing the asset Id passed as an argument changes the asset that is loaded into your game.

Interested in finding Free Models or [Decals](https://developer.roblox.com/api-reference/class/Decal) into your game? You can use the [InsertService.GetFreeModels](https://developer.roblox.com/api-reference/function/InsertService/GetFreeModels) and [InsertService.GetFreeDecals](https://developer.roblox.com/api-reference/function/InsertService/GetFreeDecals) functions!

See another example below!

[1]: https://www.roblox.com/library/257489726/Doge
@param assetId The asset Id of the asset being loaded
@returns An instance of the loaded asset