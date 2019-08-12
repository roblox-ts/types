The Texture property is the texture to draw on a `Trail`'s segments. This property sets which image asset to use for the texture. This is set the same way as textures in other objects, such as `ImageLabel` or `ParticleEmitter`. The simplest way to set this property is to use an image uploaded to the Game Explorer (this requires the current place to be Published to Roblox).

If a texture is not provided, then just the [Trail.Color](https://developer.roblox.com/api-reference/property/Trail/Color) of the Trail will be used. With a texture, the trail will draw the texture as its attachments move.

![A trail with a pawprint texture.][1]

Textures can be displayed in a variety of different ways based on the trail's [Trail.TextureMode](https://developer.roblox.com/api-reference/property/Trail/TextureMode) and [Trail.TextureLength](https://developer.roblox.com/api-reference/property/Trail/TextureLength) properties.

[1]: https://developer.roblox.com/assets/5b3d51c779099e4b58a78818/TrailTexture.gif