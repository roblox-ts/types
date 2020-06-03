Determines whether or not the `ForceField`'s particle effect is visible.

When is set to true, a particle effect is created, a number of rules determine where this effect will be emitted from.

When parented to a `Model`, if the model includes a `Humanoid` named “Humanoiod” with [Humanoid.RigType](https://developer.roblox.com/api-reference/property/Humanoid/RigType) set to R15, the effect will be emitted from the part named “UpperTorso”. Otherwise, the effect will be emitted from the part named “Torso”. The part must have the same parent as the ForceField, if it does not exist then the effect is emitted at 0, 0, 0.

When parented to a `BasePart` the effect will be emitted from the part's [BasePart.Position](https://developer.roblox.com/api-reference/property/BasePart/Position).

One use for this property is replacing the default particle effect with a custom effect using `ParticleEmitter`s.