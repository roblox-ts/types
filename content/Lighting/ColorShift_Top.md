The hue represented in light reflected from surfaces facing the sun or moon.

The surfaces of a `BasePart` influenced by ColorShift_Top depends on the position and orientation of the `BasePart` relative to the sun or moon's position. Where the sun is directly overhead a `BasePart`, the shift in color will only apply to the top surface.

This effect can be increased or reduced by altering [Lighting.Brightness](https://developer.roblox.com/api-reference/property/Lighting/Brightness).

Whilst ColorShift_Top influences surfaces exposed to light, [Lighting.ColorShift_Bottom](https://developer.roblox.com/api-reference/property/Lighting/ColorShift_Bottom) influences surfaces sheltered from light. For a visual demonstration of this, please see the image below.

![enter image description here][1]

Note, ColorShift_Top and [Lighting.ColorShift_Bottom](https://developer.roblox.com/api-reference/property/Lighting/ColorShift_Bottom) will interact with the [Lighting.Ambient](https://developer.roblox.com/api-reference/property/Lighting/Ambient) and [Lighting.OutdoorAmbient](https://developer.roblox.com/api-reference/property/Lighting/OutdoorAmbient) properties if they are greater than 0, 0, 0.

[1]: https://developer.roblox.com/assets/blt6316b01e497fa7aa/ColorShift.png