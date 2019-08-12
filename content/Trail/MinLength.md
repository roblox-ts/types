The MinLength of a `Trail` determines the minimum length of each of the segments in the trail.

If neither of the trail's [Trail.Attachment0](https://developer.roblox.com/api-reference/property/Trail/Attachment0) or [Trail.Attachment1](https://developer.roblox.com/api-reference/property/Trail/Attachment1) have moved at least the minimum length in studs, then no new segments will be created and the endpoints of the current segment will be moved to the current position of the attachments.

Note that changing MinLength will only affect new segments that are drawn – any old segments that have already been drawn will maintain their current length.

This value can be any number greater than or equal to 0, and defaults to 0.1.

This property can also be used alongside the [Trail.MaxLength](https://developer.roblox.com/api-reference/property/Trail/MaxLength) property, which determines the maximum length trail may be before its oldest segments are erased.

![Minimum length of a trail's segment in studs.][1]

[1]: https://developer.roblox.com/assets/5b3d57948fbd570b783cc4df/TrailMinLength.gif