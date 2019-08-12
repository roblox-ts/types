The LightEmission property determines the blending of the [ParticleEmitter.Texture](https://developer.roblox.com/api-reference/property/ParticleEmitter/Texture)'s colors with the colors behind them. It should be set on the range [0, 1]. A value of 0 uses normal blending modes, and a value of 1 will use additive blending. The value of the additive blending is determined by this property. When changed, this property instantly affects all particles owned by the emitter, both current and future particles.

Pictured below are two default ParticleEmitters. The right one has its LightEmission set to 1, so the particles appear brighter due to the additive blending when they overlap.

![Two default ParticleEmitters; the right one has a LightEmission of 1][1]

When set to 1, only additive blending is used. As such, choosing a suitable [ParticleEmitter.Texture](https://developer.roblox.com/api-reference/property/ParticleEmitter/Texture) is necessary. Below is an example texture that is suitable for such a ParticleEmitter.

![A gray-scale image suitable as a particle Texture][2]

This property should not be confused with [ParticleEmitter.LightInfluence](https://developer.roblox.com/api-reference/property/ParticleEmitter/LightInfluence), which determines how particles are affected by environment light. This property does not cause particles to light the environment around them. To do that, consider using a `PointLight`.

[1]: https://developer.roblox.com/assets/bltfaa542eee7781432/ParticleEmitter_LightEmission.png

[2]: https://developer.roblox.com/assets/bltf793b94e42b0b6bf/aura.png