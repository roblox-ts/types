This function returns an array of [Instances](https://developer.roblox.com/api-reference/class/Instance) associated with the given [content](https://developer.roblox.com/search#stq=Content) URL.

This function can be used to insert content from the Roblox [library][1], such as:

 - Models

 - Decals

 - Meshes

 - Plugins

 - Animations

It is not possible to insert [Sounds](https://developer.roblox.com/api-reference/class/Sound) using this method as they do not have an `Instance` associated with them (rather just a [content](https://developer.roblox.com/search#stq=Content) URL).

Unlike [InsertService.LoadAsset](https://developer.roblox.com/api-reference/function/InsertService/LoadAsset), GetObjects does not require an asset to be ‘trusted’. This means that an asset does not need to be owned by the logged in user, or created by Roblox, to be inserted. However, if the asset is not owned by the logged in user it must be freely available.

Due to this function’s security context it can only be used by plugins or the command bar. For an alternative that can be used in [Scripts](https://developer.roblox.com/api-reference/class/Script) and [LocalScripts](https://developer.roblox.com/api-reference/class/LocalScript), see [InsertService.LoadAsset](https://developer.roblox.com/api-reference/function/InsertService/LoadAsset).

[1]: https://www.roblox.com/develop/library
@param url The given `Articles/Content|content` URL
@returns An array of `Instance|Instances` associated with the `Articles/Content|content` URL