Sets whether the `HingeConstraint` will limit the range of rotation. If enabled, the constraint will only allow the [HingeConstraint.CurrentAngle](https://developer.roblox.com/api-reference/property/HingeConstraint/CurrentAngle) to be between [HingeConstraint.LowerAngle](https://developer.roblox.com/api-reference/property/HingeConstraint/LowerAngle) and [HingeConstraint.UpperAngle](https://developer.roblox.com/api-reference/property/HingeConstraint/UpperAngle). If the `Attachment` reach the end of the limited range of rotation then they will stop rotating. If [HingeConstraint.Restitution](https://developer.roblox.com/api-reference/property/HingeConstraint/Restitution) is greater than 0 then the attachments will bounce when they hit the ends of the limited range.

For example, here is the result if LowerAngle is set to -90 and UpperAngle is set to 45. Note that the x-axis of the Attachment in PartA is pointed away from the camera:

![LimitsEnabled][1]

[1]: https://developer.roblox.com/assets/5b61fc4f4bf5bf624023e747/HingeConstraintLimitsEnabled.gif