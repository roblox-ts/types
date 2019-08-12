The SpreadAngle property determines the random angles that a particle may be emit. On emission, a random angle is selected uniformly using the range defined by SpreadAngle. For example, if the [ParticleEmitter.EmissionDirection](https://developer.roblox.com/api-reference/property/ParticleEmitter/EmissionDirection) is Top (+Y), then this [DataType.Vector2](https://developer.roblox.com/search#stq=Vector2) describes the size of the random angle spread on the X/Z axes, in degrees. The particle is given a velocity based on the [ParticleEmitter.Speed](https://developer.roblox.com/api-reference/property/ParticleEmitter/Speed) in the chosen direction.

Below is an animation of two default ParticleEmitters. The foreground (closer) emitter has one of its SpreadAngle axes set to 90 degrees, so particles are emit randomly in an arc.

![Two default ParticleEmitters. The foreground (closer) emitter has one axis of SpreadAngle set to 90 degrees][1]

Setting one axis to 360 will cause particles to emit in all direction in a **circle**. Setting both to 360 will cause particles to emit in all directions in a **sphere**.

[1]: https://developer.roblox.com/assets/blt05b793010052f4b7/ParticleEmitter_SpreadAngle.gif