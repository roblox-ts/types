The lighting hue applied to outdoor areas.

This property defaults to 127, 127, 127.

As long as the red, green and blue channels of [Lighting.Ambient](https://developer.roblox.com/api-reference/property/Lighting/Ambient) do not exceed the corresponding channels in this property, the hue of the lighting in outdoor areas will be determined by this property. The effective OutdoorAmbient value is clamped to be greater than or equal to [Lighting.Ambient](https://developer.roblox.com/api-reference/property/Lighting/Ambient) in all channels. This means, if a channel of [Lighting.Ambient](https://developer.roblox.com/api-reference/property/Lighting/Ambient) exceeds its corresponding OutdoorAmbient channel then the hue of [Lighting.Ambient](https://developer.roblox.com/api-reference/property/Lighting/Ambient) will begin to apply to outdoor areas. For a visual demonstration of this, please see the images below.

![enter image description here][1]

Note, when [Lighting.GlobalShadows](https://developer.roblox.com/api-reference/property/Lighting/GlobalShadows) is disabled there is no distinction between areas occluded from the sky and areas that are not. In this case OutdoorAmbient will be ignored and the hue from the [Lighting.Ambient](https://developer.roblox.com/api-reference/property/Lighting/Ambient) property will be applied everywhere.

For more properties that influence the color of lighting, please see [Lighting.ColorShift_Bottom](https://developer.roblox.com/api-reference/property/Lighting/ColorShift_Bottom) and [Lighting.ColorShift_Top](https://developer.roblox.com/api-reference/property/Lighting/ColorShift_Top).

[1]: https://developer.roblox.com/assets/blt6e6c67086eab8c57/Ambient.png