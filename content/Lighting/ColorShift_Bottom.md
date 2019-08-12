The hue represented in light reflected in the opposite surfaces to those facing the sun or moon.

The surfaces of a `BasePart` influenced by ColorShift_Bottom depends on the position and orientation of the `BasePart` relative to the sun or moon's position. Where the sun is directly overhead a `BasePart`, the shift in color will only apply to the bottom surface.

This effect can be increased or reduced by altering [Lighting.Brightness](https://developer.roblox.com/api-reference/property/Lighting/Brightness).

ColorShift_Bottom influences the opposite surfaces to [Lighting.ColorShift_Top](https://developer.roblox.com/api-reference/property/Lighting/ColorShift_Top). For a visual demonstration of this, please see the image below.

![enter image description here][1]

Note, [Lighting.ColorShift_Top](https://developer.roblox.com/api-reference/property/Lighting/ColorShift_Top) and ColorShift_Bottom will interact with the [Lighting.Ambient](https://developer.roblox.com/api-reference/property/Lighting/Ambient) and [Lighting.OutdoorAmbient](https://developer.roblox.com/api-reference/property/Lighting/OutdoorAmbient) properties if they are greater than 0, 0, 0. Also, the influence of ColorShift_Bottom can be very hard to identify when [Lighting.GlobalShadows](https://developer.roblox.com/api-reference/property/Lighting/GlobalShadows) is enabled (as it is by default).

[1]: https://developer.roblox.com/assets/blt6316b01e497fa7aa/ColorShift.png