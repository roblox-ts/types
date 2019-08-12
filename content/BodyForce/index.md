The BodyForce object applies (or exerts) a force on the part to which it is parented. If the magnitude of such a force is great enough, parts can begin to accelerate. See [Newton's First Law of Motion](https://www.grc.nasa.gov/www/K-12/airplane/newton.html). The force is determined by the [BodyForce.Force](https://developer.roblox.com/api-reference/property/BodyForce/Force) property, and is defined on the three world axes.

A BodyForce alone cannot apply a torque (it cannot cause the parent to rotate on its own). To apply a force at a specific point (e.g. to apply torque for angular acceleration) or apply forces relative to the orientation of the part, use a `BodyThrust` instead.

## Forces Relative to Parent

Using the `CFrame:vectorToWorldSpace(Vector3)` method, it is possible to translate a force vector that is relative to the part into the world vector necessary for [Force](https://developer.roblox.com/api-reference/property/BodyForce/Force). For example, to apply a force to the left an object (no matter which way it's facing), try:

```lua
magnitude = 100
magnitude -- You could also use Vector3.FromNormalId(Enum.NormalId.Left)
bodyForce.Force = bodyForce.Parent.CFrame:vectorToWorldSpace(left)
```

You can also use a `BodyThrust` with a [Location](https://developer.roblox.com/api-reference/property/BodyThrust/Location) of `(0, 0, 0)`, then set the [Force](https://developer.roblox.com/api-reference/property/BodyThrust/Force) for the same effect.

## Anti-gravity

BodyForce is commonly used to counteract the effects of [Gravity](https://developer.roblox.com/api-reference/property/Workspace/Gravity) on a per-part basis by simply applying a force in the +Y direction. See the code samples for more information.