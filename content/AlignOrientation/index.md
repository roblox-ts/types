An AlignOrientation is a constraint that applies a torque to make its attachments align. Like other constraints, this has two `Attachment`s. In this case the two attachments are constrained to be oriented in the same direction but not necessarily the same position.

By default, this constraint only applies torque on [Constraint.Attachment0](https://developer.roblox.com/api-reference/property/Constraint/Attachment0)'s parent, although it can be configured to apply torque on both attachments. Note that this torque can also be limited to a max amount via [AlignOrientation.MaxTorque](https://developer.roblox.com/api-reference/property/AlignOrientation/MaxTorque).

Note that any torque created by AlignOrientation will be applied about the center of mass of the parent of the attachments (or the center of mass of rigidly connected parts to the parents).

Take a look at the gif below for a demonstration of AlignmentOrientation on a `BasePart`!

![AlignmentOrientation Demonstration][1]

[1]: https://developer.roblox.com/assets/5b38275a073818f8577295aa/alignorientation.gif