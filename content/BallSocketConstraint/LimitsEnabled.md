Sets whether the `BallSocketConstraint` has a limit on rotation based on [BallSocketConstraint.UpperAngle](https://developer.roblox.com/api-reference/property/BallSocketConstraint/UpperAngle).

When a BallSocketConstraint has LimitsEnabled set to true, it enforces that its [Constraint.Attachment1](https://developer.roblox.com/api-reference/property/Constraint/Attachment1) isn’t rotated more than a set distance from its [Constraint.Attachment0](https://developer.roblox.com/api-reference/property/Constraint/Attachment0).

The angle that is used is the angle between the x-axes of the attachments:

![BallSocketConstraint Limits][1]

[1]: https://developer.roblox.com/assets/5b60fef9858e507e4016cc1e/BallSocketConstraintLimits.png