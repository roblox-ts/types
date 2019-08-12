Determines the transparency of the `Beam` across its segments.

## Beams and Transparency

This property is a [DataType.NumberSequence](https://developer.roblox.com/search#stq=NumberSequence), allowing the transparency to be configured to vary across the length of the `Beam`. Take for example the following [DataType.NumberSequence](https://developer.roblox.com/search#stq=NumberSequence).

```lua
local numberSequence = NumberSequence.new({
	NumberSequenceKeypoint.new(0, 1), -- transparent
	NumberSequenceKeypoint.new(0.5, 0), -- opaque
	NumberSequenceKeypoint.new(1, 1), -- transparent
	}
)
```

Applying this [DataType.NumberSequence](https://developer.roblox.com/search#stq=NumberSequence) to a `Beam` would yield the following result:

![enter image description here][1]

Note the [Beam's](https://developer.roblox.com/api-reference/class/Beam) transparency also depends on the number of [Beam.Segments](https://developer.roblox.com/api-reference/property/Beam/Segments) the `Beam` has. Each segment of the beam can only show a transition between two transparencies. Therefore a `Beam` will need to have at least n-1 segments in order to display correctly, where n is the number of [DataType.NumberSequenceKeypoint](https://developer.roblox.com/search#stq=NumberSequenceKeypoint)s in the [DataType.NumberSequence](https://developer.roblox.com/search#stq=NumberSequence)

[1]: https://developer.roblox.com/assets/bltb919bbb4d83c7ba8/BeamTransparency.png