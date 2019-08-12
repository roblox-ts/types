A Texture object applies a repeating texture to the face of a `BasePart`.

## How does a Texture work?

A Texture will apply an image to the `BasePart` it is parented to. The surface this image is applied to is dependent on the [FaceInstance.Face](https://developer.roblox.com/api-reference/property/FaceInstance/Face) property. When the `BasePart` is resized, the image will repeat. The size of the repeating textures is determined by the [Texture.StudsPerTileU](https://developer.roblox.com/api-reference/property/Texture/StudsPerTileU) and `StudsPerTileV` properties.

```lua
local texture = Instance.new("Texture")
texture.Texture = "http://www.roblox.com/asset/?id=732339893" -- roblox logo
-- 1x1 studs repeating texture
texture.StudsPerTileU = 1
texture.StudsPerTileV = 1
```

The image a Texture applies is determined by its [Decal.Texture](https://developer.roblox.com/api-reference/property/Decal/Texture) property. Images can be uploaded to Roblox provided they adhere to the community guidelines. Information on how to upload images can be found [here](https://developer.roblox.com/search#stq=How%20to%20upload%20a%20Decal). --&gt;

## What is the difference between Textures and Decals?

The texture object is very similar to the `Decal` object. However, whereas the image applied by a `Decal` scales when the `BasePart` is resized, the image applied by a Texture repeats.

Repeating textures have a wide range of applications such as floor tiles and wall textures.

## Alternatives to Textures

Although Decals have a wide variety of applications, in some cases developers may wish to pick one of the following classes instead.

 - For non repeating images `Decal` object should be used

 - To apply GUI elements, the `SurfaceGui` object should be used

 - If the effect of lighting on the image needs to be altered, the `SurfaceGui` object should be used

[1]: https://developer.roblox.com/articles/How-to-upload-a-Decal