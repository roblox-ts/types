Sets the length of the `Beam`s texture if [Beam.TextureMode](https://developer.roblox.com/api-reference/property/Beam/TextureMode) is 'Wrap' or 'Static'. If [Beam.TextureMode](https://developer.roblox.com/api-reference/property/Beam/TextureMode) is 'Stretch' then it determines the size of the texture relative to the `Beam`'s length.

## Beam texture behavior

How a [Beam's](https://developer.roblox.com/api-reference/class/Beam) texture scales or repeats is dependent on the [Beam.TextureMode](https://developer.roblox.com/api-reference/property/Beam/TextureMode) property.

When [Beam.TextureMode](https://developer.roblox.com/api-reference/property/Beam/TextureMode) is 'Wrap' the size of the repeating texture is equal to TextureLength in studs. For an example of this see the image below:

![beamTexture1][1]

Note, the 'Static' [Enum.TextureMode](https://developer.roblox.com/search#stq=TextureMode) type is not used for `Beam`s and therefore behaves identically to 'Wrap'.

When [Beam.TextureMode](https://developer.roblox.com/api-reference/property/Beam/TextureMode) is set to 'Stretch' however the texture will be stretched relative to the beam's length. The size of the texture relative to the `Beam`'s length will be one over the TextureLength. In practice, this means the texture will repeat TextureLength times. For an example of this see the image below:

![beamTexture2][2]

[1]: https://developer.roblox.com/assets/blt92742bad209f4935/beamTexture.gif

[2]: https://developer.roblox.com/assets/blt034506939f5674b3/beamTexture2.gif