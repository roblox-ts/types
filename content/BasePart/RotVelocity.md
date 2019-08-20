The RotVelocity of a [part](https://developer.roblox.com/api-reference/class/BasePart) describes how its [BasePart.Orientation](https://developer.roblox.com/api-reference/property/BasePart/Orientation) is presently changing. In other words, this property describes how the fast part is rotating. The part only rotates if it is not anchored.

 The unit of this property is **degrees per second**.

Using this in conjunction with `AlignOrientation` allows for aligned parts to have matching RotVelocity and Orientation values.