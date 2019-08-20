The Speed property determines the random range of velocities that newly emit particles may have. It is measured in studs per second using a [DataType.NumberRange](https://developer.roblox.com/search#stq=NumberRange). The velocity is chosen upon emission, and is applied in the [ParticleEmitter.EmissionDirection](https://developer.roblox.com/api-reference/property/ParticleEmitter/EmissionDirection). Negative speed values will cause particles to travel in reverse.

Below is an animation of two default `ParticleEmitter`s; the left has the default Speed of 5. The right one has the Speed range set to [20, 20], so its particles emit at a constant speed of 20.

![Two default ParticleEmitters, the right has a speed of 20.][1]

[ParticleEmitter.VelocityInheritance](https://developer.roblox.com/api-reference/property/ParticleEmitter/VelocityInheritance), [ParticleEmitter.Acceleration](https://developer.roblox.com/api-reference/property/ParticleEmitter/Acceleration) and [ParticleEmitter.Drag](https://developer.roblox.com/api-reference/property/ParticleEmitter/Drag) will affect a particle's speed over its lifetime. Changing Speed will not affect already existing particles - they will retain whatever speed they have already.

[1]: https://developer.roblox.com/assets/blte13fc189c250bd2b/ParticleEmitter_Speed.gif