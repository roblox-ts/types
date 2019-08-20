The Content ID of the image to be applied by the `Decal`.

## How can I upload a Decal?

Images can be uploaded to Roblox provided they adhere to the community guidelines. Information on how to upload images can be found [here](https://developer.roblox.com/search#stq=How%20to%20upload%20a%20Decal).

## How to find do I find a Decal's Content ID?

Unlike with `Sound` and `Animation` objects, the Content ID of a Decal is not the same as the number in the URL. There are two main ways of finding the Content ID of a Decal:

 - Paste the URL into the Texture property in Roblox Studio. Roblox will automatically update the property to the correct Content ID. Note this only works in Roblox Studio and cannot be done from Scripts or whilst the game is running.

 - Insert the Decal into the game, this is generally done through the Toolbox under 'My Decals'. The Content ID can be found in the decal that is inserted. Note, [InsertService.LoadAsset](https://developer.roblox.com/api-reference/function/InsertService/LoadAsset) can also be used if developers wish to automate this method.

[1]: https://developer.roblox.com/articles/How-to-upload-a-Decal