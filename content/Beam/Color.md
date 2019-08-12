Determines the color of the `Beam`.

If the `Beam`'s [Beam.Texture](https://developer.roblox.com/api-reference/property/Beam/Texture) is set, this color will be applied to the `Beam`'s texture. If no [Beam.Texture](https://developer.roblox.com/api-reference/property/Beam/Texture) has been set then the `Beam` will appear as a solid bar colored in accordance with this property.

## Beams and ColorSequences

This property is a [DataType.ColorSequence](https://developer.roblox.com/search#stq=ColorSequence), allowing the color to be configured to vary across the length of the `Beam`. Take for example the following [DataType.ColorSequence](https://developer.roblox.com/search#stq=ColorSequence).

```lua
local colorSequence = ColorSequence.new({
	ColorSequenceKeypoint.new(0, Color3.fromRGB(255, 0, 0)), -- red
	ColorSequenceKeypoint.new(0.5, Color3.fromRGB(0, 255, 0)), -- green
	ColorSequenceKeypoint.new(1, Color3.fromRGB(0, 0, 255)), -- blue
	}
)
```

Applying this [DataType.ColorSequence](https://developer.roblox.com/search#stq=ColorSequence) to a `Beam` would yield the following result:

![enter image description here][1]

Note the `Beam`'s coloration also depends on the number of [Beam.Segments](https://developer.roblox.com/api-reference/property/Beam/Segments) the `Beam` has. Each segment of the beam can only show a transition between two colors. Therefore a `Beam` will need to have at least n-1 segments in order for the color to display correctly, where n is the number of [DataType.ColorSequenceKeypoint](https://developer.roblox.com/search#stq=ColorSequenceKeypoint)s in the [DataType.ColorSequence](https://developer.roblox.com/search#stq=ColorSequence)

[1]: https://developer.roblox.com/assets/blt44487f7a1e259ab2/BeamColor.png