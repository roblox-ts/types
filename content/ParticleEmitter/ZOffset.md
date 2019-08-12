The ZOffset property determines the forward-backward (Z) render position of particles, in studs. they render at a modified [ParticleEmitter.Size](https://developer.roblox.com/api-reference/property/ParticleEmitter/Size) such that this property will not affect the screen size of particles. When changed, this property will affects all particles, both current and future particles. Note that this property accepts fractional values; it is not like [GuiObject.ZIndex](https://developer.roblox.com/api-reference/property/GuiObject/ZIndex) (an integer)

Pictured below are three default ParticleEmitters with varying ZOffset values. The center is default, the left has +2 and the right has -2. Note how all the particles have the same apparent screen size.

![Three default ParticleEmitters with varying ZOffset values][1]

A practical use of ZOffset is for `ParticleEmitters` placed in players' characters: use it to define if particles should appear in front of or behind the character (use a value of +/- 2).

![Two identical Roblox characters with ParticleEmitters in their head, with varying ZOffset values][2]

Positive values will move particles closer to the camera, and negative values move particles away. Sufficiently negative values can cause particles to render inside or behind the parent part.

[1]: https://developer.roblox.com/assets/blt216bd741511f3108/ParticleEmitter_ZOffset.png

[2]: https://developer.roblox.com/assets/blt8b9262a841414c12/ParticleEmitter_ZOffset2.png