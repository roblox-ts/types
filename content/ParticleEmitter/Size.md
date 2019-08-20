The Size property determines the world size in studs of all active particles over their individual lifetimes. This property represents the dimensions of the square [ParticleEmitter.Texture](https://developer.roblox.com/api-reference/property/ParticleEmitter/Texture) for each particle. It is a [DataType.NumberSequence](https://developer.roblox.com/search#stq=NumberSequence) that works similar to [ParticleEmitter.Transparency](https://developer.roblox.com/api-reference/property/ParticleEmitter/Transparency) and [ParticleEmitter.Color](https://developer.roblox.com/api-reference/property/ParticleEmitter/Color).

Below is an animation of two default `ParticleEmitter` where the right one has a Size of 0 to 2. Note how the particles grow over their lifetime.

![Animation of two default ParticleEmitters; the right one has a Size of 0 to 2][1]

A particle's present size is determined by linearly interpolating on this NumberSequence using the particle's age and the particle's total lifetime. For example, if a particle spawned 2 seconds ago and has a 4 second lifetime, the size will be whatever is 50% of the way through the [DataType.NumberSequence](https://developer.roblox.com/search#stq=NumberSequence). For any [DataType.NumberSequenceKeypoint](https://developer.roblox.com/search#stq=NumberSequenceKeypoint) with a nonzero envelop value, a random value in the envelop range is chosen for each keypoint for each particle when it spawns.

Changing this property applies changes to all particles present in the system. This is because the size of a particle is determined using its present lifetime and this NumberSequence (the Size at the time the particle was emit is not stored on a per-particle basis).

## Design Note

When designing particle effects, size is probably the most important of all properties. Too large or too subtle can ruin a particle effect! The first thing you should do is decide how you want particles to enter and exit view - fade in/out, or grow/shrink from size 0? The choice is yours - start with a size NumberSequence from 0 to 3 or the reverse and go from there.

[1]: https://developer.roblox.com/assets/blt908c9ca9b5bddace/ParticleEmitter_Size.gif