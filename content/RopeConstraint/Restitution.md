Restitution controls how *elastic* an `Attachment` connected by a `RopeConstraint` will be when reaching the end of the rope [RopeConstraint.Length](https://developer.roblox.com/api-reference/property/RopeConstraint/Length). The value of this property is constrained between 0 and 1.

A RopeConstraint with a Restitution of 0 will not bounce when its Attachments reach their maximum separation.

![Restitution of 0][1]

A RopeConstraint with a Restitution of 1 will be almost completely elastic when its Attachments reach their maximum separation.

![Restitution of 1][2]

[1]: https://developer.roblox.com/assets/5b61fd89858e507e4016cec1/RopeConstraintRestitution0.gif

[2]: https://developer.roblox.com/assets/5b61fda6858e507e4016cec7/RopeConstraintRestitution1.gif