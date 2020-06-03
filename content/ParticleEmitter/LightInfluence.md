The LightInfluence property determines how much environment light affects the color of individual particles when they are rendered. It must be in the range [0, 1]; behavior of values outside of this range are not defined. At 0, particles are not influenced by light at all (they retain full brightness), and at 1 particles are fully influenced by light (in complete darkness, particles will be black).

Pictured below are three default ParticleEmitters [at night][1] with varing LightInfluence. There is a `PointLight` with sufficient [PointLight.Brightness](https://developer.roblox.com/search#stq=Brightness) and [PointLight.Range](https://developer.roblox.com/api-reference/property/PointLight/Range) to light the particles near to their parent parts. Take note of how each particle is affected by the lack of light close to the end of their lifetime.

![Three default ParticleEmitters with varying LightInfluence values][2]

By default, this value is 1 if inserted with Studio tools. If inserted using `Instance.new`, it is 0.

[1]: https://www.youtube.com/watch?v=bLIVeQgS_pI

[2]: https://developer.roblox.com/assets/blt0978dec6faf6d7ae/ParticleEmitter_LightInfluence.png