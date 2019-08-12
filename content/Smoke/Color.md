The Color property determines the color of all the particles emit by a `Smoke` object (both existing and future particles). It behaves similarly to [ParticleEmitter.Color](https://developer.roblox.com/api-reference/property/ParticleEmitter/Color), except that it is only one color and not a [DataType.ColorSequence](https://developer.roblox.com/search#stq=ColorSequence). A color of white with some [Smoke.Opacity](https://developer.roblox.com/api-reference/property/Smoke/Opacity) makes for a nice fog effect, and a very opaque black color can compliment a `Fire` object nicely.

![Two Smoke objects with different colors][1]

In the screenshot below, a `Fire` object within a torch model is complimented by a `Smoke` object above it with [Smoke.RiseVelocity](https://developer.roblox.com/api-reference/property/Smoke/RiseVelocity) set to 5 and Color set to black.

![A Smoke object complimenting a Fire object on a torch][2]

[1]: https://developer.roblox.com/assets/blt6952d1f0943c1f61/Smoke_Color.png

[2]: https://developer.roblox.com/assets/blt02d5fee090b5bc62/Smoke_Fire.png