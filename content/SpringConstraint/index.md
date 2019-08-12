A SpringConstraint applies a force to its `Attachment` based on spring and damper behavior. Assuming the SpringConstraint has [SpringConstraint.Stiffness](https://developer.roblox.com/api-reference/property/SpringConstraint/Stiffness), it will apply forces based on how far apart the Attachments are. If the Attachments are further apart than the SpringConstraint’s [SpringConstraint.FreeLength](https://developer.roblox.com/api-reference/property/SpringConstraint/FreeLength) then the Attachments will be forced together. If they are closer than the FreeLength then the Attachments will be forced apart. In addition, if [SpringConstraint.Damping](https://developer.roblox.com/api-reference/property/SpringConstraint/Damping) is set then there will be a damping component to the applied force that scales with the velocity of the attachments.

The following code shows how the force of a SpringConstraint is calculated:

```lua
length = constraint.CurrentLength
if constraint.LimitsEnabled then
	length = clamp(constraint.CurrentLength, constraint.MinLength, constraint.MaxLength) -- Constrain the length between the Min/Max length.
end
axis = (Attachment0.Position - Attachment1.Position).unit
deltaV = Attachment0.Velocity - Attachment1.Velocity
length - constraint.Damping * deltaV:Dot(axis)
force = clamp(force, -constraint.MaxForce, constraint.MaxForce)
```

`force * axis` will be applied to Attachment0's part at Attachment0's Position. `-force * axis` will be applied to Attachment1’s part at Attachment1’s Position.