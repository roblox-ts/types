The Decal object is an object which applies an image to a face of a `BasePart`.

## How does a Decal work?

A Decal will apply an image to the `BasePart` it is parented to. The surface this image is applied to is dependent on the [FaceInstance.Face](https://developer.roblox.com/api-reference/property/FaceInstance/Face) property. The size of the decal is dependent on the size of the face, meaning the size and aspect ratio of a decal can be changed by changing its parent's [BasePart.Size](https://developer.roblox.com/api-reference/property/BasePart/Size).

The image a Decal applies is determined by its [Decal.Texture](https://developer.roblox.com/api-reference/property/Decal/Texture) property. Images can be uploaded to Roblox provided they adhere to the community guidelines. Information on how to upload images can be found [here](https://developer.roblox.com/search#stq=How%20to%20upload%20a%20Decal).

## Alternatives to Decals

Although Decals have a wide variety of applications, in some cases developers may wish to pick one of the following classes instead.

 - For repeated tiled textures, the `Texture` object should be used

 - To apply GUI elements, the `SurfaceGui` object should be used

 - If the effect of lighting on the image needs to be altered, the `SurfaceGui` object should be used

[1]: https://developer.roblox.com/articles/How-to-upload-a-Decal