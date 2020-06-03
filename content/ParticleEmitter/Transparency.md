The Transparency property determines the transparency in studs of all active particles over their individual lifetimes. It works similar to [ParticleEmitter.Size](https://developer.roblox.com/api-reference/property/ParticleEmitter/Size) in how it affects particles over time. In terms of rendering, it works like the [BasePart.Transparency](https://developer.roblox.com/api-reference/property/BasePart/Transparency) of a part.

Pictured below are two default `ParticleEmitter`s. The right emitter has a Transparency set to a [DataType.NumberSequence](https://developer.roblox.com/search#stq=NumberSequence) that interpolates from 0 to 1.

![Two default ParticleEmitters; the right emitter Transparency fades over the lifetime of the particles][1]

A particle’s present transparency is determined by linearly interpolating on this NumberSequence using the particle’s age and the particle’s total lifetime. For example, if a particle spawned 2 seconds ago and has a 4 second lifetime, the transparency will be whatever is 50% of the way through the [DataType.NumberSequence](https://developer.roblox.com/search#stq=NumberSequence). For any [DataType.NumberSequenceKeypoint](https://developer.roblox.com/search#stq=NumberSequenceKeypoint) with a nonzero envelop value, a random value in the envelop range is chosen for each keypoint for each particle when it spawns.

Changing this property applies changes to all particles present in the system. This is because the transparency of a particle is determined using its present lifetime and this `NumberSequence` (the Transparency at the time the particle was emit is not stored on a per-particle basis).

[1]: https://developer.roblox.com/assets/blt7d318803556982ca/ParticleEmitter_Transparency.png