The RotSpeed property determines a random range of angular speeds that newly emit particles will have. A random angular speed is chosen upon emission, so changing this property will not affect already emit particles. This property, along with [ParticleEmitter.Rotation](https://developer.roblox.com/api-reference/property/ParticleEmitter/Rotation) affect the angle of the rendered particle image. This property is a [DataType.NumberRange](https://developer.roblox.com/search#stq=NumberRange) measured in degrees per second.

Below is an animation of two default `ParticleEmitter`s. The right has a nonzero RotSpeed, so its particles rotate as they move through the world.

![Two default ParticleEmitters; the right emitter has a RotSpeed applied][1]

Using a spiral as a [ParticleEmitter.Texture](https://developer.roblox.com/api-reference/property/ParticleEmitter/Texture) like the one below, you can create some quite interesting particle effects:

![A swirl texture][2]![A portal effect using RotSpeed and a Swirl texture][3]

Particles with very high angular speeds can appear to rotate slower or not at all - this is because the angle of rotation is synchronized with the software render speed. In other words, if the particle is rotating at exactly 360 degrees every frame, there will be no apparent change in rotation.

[1]: https://developer.roblox.com/assets/bltfe2427c2a9f0f3ad/ParticleEmitter_RotSpeed.gif

[2]: https://developer.roblox.com/assets/bltc50865c165e13d07/ParticleEmitter_RotSpeed2_swirl.gif

[3]: https://images.contentstack.io/v3/assets/blt309cc8bfb280dcec/blt6c03c8e2536b2634/5b0b84d09a16a6df0e4973b5/ParticleEmitter_RotSpeed2.gif