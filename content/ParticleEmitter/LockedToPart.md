The LocekdToPart property determines if particles will "stick" to the emission source (the `Attachment` or `BasePart` to which the `ParticleEmitter` is parented).

Below is an animation of two `Part`s being moved simultaneously in Studio. Inside each is a default `ParticleEmitter`; the background/left emitter has LockedToPart enabled so the column of particles moves as the part is moved. Contrast with the foreground/right emitter particles which stay in their world position.

![Moving two parts with default ParticleEmitters, the background emitter has LockedToPart enabled][1]

Also consider using the [ParticleEmitter.VelocityInheritance](https://developer.roblox.com/api-reference/property/ParticleEmitter/VelocityInheritance) property set to 1, which may be more appropriate for some effects.

[1]: https://developer.roblox.com/assets/bltdf5045209fff8b32/ParticleEmitter_LockedToPart.gif