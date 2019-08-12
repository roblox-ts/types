The MinLength of a `Trail` determines the maximum length of each of the segments in the trail.

Note that changing MaxLength will only affect new segments that are drawn – any old segments that have already been drawn will maintain their current length.

This value can be any number greater than or equal to 0, and defaults to 0. If the property is set to 0, the maximum length will be infinity - meaning that the trail will not have a maximum length.

Please note that, even if this property is 0, or another large number, the trail is still constrained by its [Trail.Lifetime](https://developer.roblox.com/api-reference/property/Trail/Lifetime). Old segments will be erased if they reach the end of their lifetime, even if the trail is shorter than the maximum length. Be sure to set both properties fittingly.

This property can also be used alongside the [Trail.MinLength](https://developer.roblox.com/api-reference/property/Trail/MinLength) property, which determines the minimum length trail must before before it is drawn.

![Demonstration of trail length.][1]

[1]: https://developer.roblox.com/assets/5b3d57948fbd570b783cc4df/TrailMinLength.gif