The Texture property determines the image rendered on particle billboards. The rendered image is influenced by [ParticleEmitter.Color](https://developer.roblox.com/api-reference/property/ParticleEmitter/Color), [ParticleEmitter.Transparency](https://developer.roblox.com/api-reference/property/ParticleEmitter/Transparency), [ParticleEmitter.LightInfluence](https://developer.roblox.com/api-reference/property/ParticleEmitter/LightInfluence), and [ParticleEmitter.LightEmission](https://developer.roblox.com/api-reference/property/ParticleEmitter/LightEmission). Transparent textures work best for particles

Pictured below are two default ParticleEmitters, but the right one uses the Robux icon as a texture.

![Two default ParticleEmitters, except the right one uses the Robux icon][1]

## Example Textures

The following texture is a transparent PNG image that works well as a Texture for a `ParticleEmitter`. Try uploading it as a decal to your account and using it in a ParticleEmitter's texture.

![Pixel art of a gold coin][2]

Below is an opaque gray-scale Texture that works nicely for particles with [ParticleEmitter.LightEmission](https://developer.roblox.com/api-reference/property/ParticleEmitter/LightEmission) set to 1.

![An example particle texture][3]

[1]: https://developer.roblox.com/assets/blt15e439cb32a655c1/ParticleEmitter_Texture.png

[2]: https://developer.roblox.com/assets/bltfe72f664112679bb/coin_01.png

[3]: https://developer.roblox.com/assets/bltf793b94e42b0b6bf/aura.png