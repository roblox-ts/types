The base URL that is used by the `ContentProvider` for downloading assets from the Roblox website. This url will point to a Roblox hosted website where asserts are to be downloaded from.

This URL is pulled from the AppSettings.xml file which is located in the version-hash folder.

It is possible to overwrite this property using the [ContentProvider.SetBaseUrl](https://developer.roblox.com/api-reference/function/ContentProvider/SetBaseUrl) function in the command bar. However this is not recommended and may cause issues with assets loading.