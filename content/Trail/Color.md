The color of a `Trail` can be set with the effect's Color property. This property determines what color the segments of the trail will have through their [Trail.Lifetime](https://developer.roblox.com/api-reference/property/Trail/Lifetime).

Color is a [DataType.ColorSequence](https://developer.roblox.com/search#stq=ColorSequence), which means that the segments in a trail can shift between several colors. Note that if the color for a trail changes after some of the trail segments have been drawn, all of the old segments will be updated to match the new colors.

If a trail has a [Trail.Texture](https://developer.roblox.com/api-reference/property/Trail/Texture) then the Color property will tint that texture.

![Trails with tinted textures][1]

Any transparent components of a texture will not be tinted.

[1]: https://developer.roblox.com/assets/5b3d38bb79099e4b58a7880a/TrailTextureColor.png