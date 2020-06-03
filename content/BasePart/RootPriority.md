This property is the main rule in determining the root part of an assembly. It is an integer between -127 and 127 that takes precedence over all other rules for root part sort (including the weird rules based on part [size](https://developer.roblox.com/api-reference/property/BasePart/Size)). A part with a higher RootPriority will take priority over other [unanchored](https://developer.roblox.com/api-reference/property/BasePart/Anchored) parts with equal [Massless](https://developer.roblox.com/api-reference/property/BasePart/Massless) values and a lower RootPriority.

Use this to control which part of an assembly is the root part and keep the root part stable if size changes.

## See also

- [Understanding Root Parts](https://developer.roblox.com/search#stq=understanding%20root%20parts), an article documenting what root parts are and how to use them