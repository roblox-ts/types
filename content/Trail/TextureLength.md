This property determines how [Trail.Texture](https://developer.roblox.com/api-reference/property/Trail/Texture)s are drawn by `Trail`. The behavior of TextureLength is determined by the [Trail.TextureMode](https://developer.roblox.com/api-reference/property/Trail/TextureMode) of its trail.

If the TextureLength is changed after its trail has drawn some of its segments, the new length will only be applied to new segments being drawn -- old segments will be unaffected.

This value can be any number greater than 0 and defaults to 1.