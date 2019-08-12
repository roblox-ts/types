The Fire class is of several particle-emitting classes. Like other particle emitters of its kind, Fire objects emit particles when parented to a `BasePart` (such as a `Part`) or an `Attachment` within such a `BasePart`. Compared to the `ParticleEmitter` class, Fire lacks many different customization properties and special methods, such as [ParticleEmitter.Lifetime](https://developer.roblox.com/api-reference/property/ParticleEmitter/Lifetime) or [ParticleEmitter.Emit](https://developer.roblox.com/api-reference/function/ParticleEmitter/Emit). It is useful to create a quick special effect in a pinch; for more detailed work it is preferable to use a `ParticleEmitter` instead.

![A Fire object emitting particles at a neon part on top of a wooden part][1]

Fire objects do not emit any light on their own. To help create a cohesive environment around a burning object in your world, try adding a `PointLight` with a [PointLight.Color](https://developer.roblox.com/search#stq=Color) set to orange. This will make your fire look more realistic.

When [Fire.Enabled](https://developer.roblox.com/api-reference/property/Fire/Enabled) is toggled off, particles emit by this object will continue to render until their lifetime expires. When a Fire object's [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) is set to nil (and/or [Instance.Destroy](https://developer.roblox.com/api-reference/function/Instance/Destroy)ed), all particles will instantly disappear. If this effect is not desired, try hiding the parent object at a far away position, then removing the Fire after a few seconds using `Debris` to give the last particles a chance to expire. This object does not have a [ParticleEmitter.Clear](https://developer.roblox.com/api-reference/function/ParticleEmitter/Clear) method, but it is possible to set the [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) to nil and back to the exact same object for the same effect.

Fire particles are only emit from the center of `BasePart` to which they are parented. The particles are emit toward the top (+Y) direction; however, a negative [Fire.Heat](https://developer.roblox.com/api-reference/property/Fire/Heat) may be used to emit in the bottom (-Y) direction. Parenting a Fire object to an `Attachment` instead allows customization of the particles' start position and emission direction.

Fire object consist of two emitters. Each are affected differently by [Fire.Size](https://developer.roblox.com/api-reference/property/Fire/Size), [Fire.Heat](https://developer.roblox.com/api-reference/property/Fire/Heat), [Fire.Color](https://developer.roblox.com/api-reference/property/Fire/Color) and [Fire.SecondaryColor](https://developer.roblox.com/api-reference/property/Fire/SecondaryColor). The particles emit from the smaller, secondary emitter have a significantly longer lifetime (and rise farther) than those emit by the primary emitter.

![A Fire objects' two emitter sources, in blue and white][2]

Unlike actual flames, Fire objects on Roblox do not spread on their own. If you notice this behavior in your game, it is happening because a `Script` is spreading fire.

[1]: https://developer.roblox.com/assets/blt614752ba08bb2e7c/Fire.png

[2]: https://developer.roblox.com/assets/blt925890091ac70b39/Fire_Colors.png