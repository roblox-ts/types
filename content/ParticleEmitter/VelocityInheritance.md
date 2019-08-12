The VelocityInheritance property determines how much of the parent part's [BasePart.Velocity](https://developer.roblox.com/api-reference/property/BasePart/Velocity) is inherited by particles when they are emitted. A value of 0 means that no velocity is inherited, and a value of 1 means the particle will have the exact same speed as the parent `BasePart`.

Below is an animation of a `Part` moving back and forth. As it changes direction, the VelocityInheritance will toggle between 0 and 1. Note that when it is 1, the particles move with the part.

![A part moving back and forth with VelocityInheritance toggling from 0 to 1][1]

When used in conjunction with [ParticleEmitter.Drag](https://developer.roblox.com/api-reference/property/ParticleEmitter/Drag), a particle emitter can make appear to be "shedding" particles from a moving part.

[1]: https://developer.roblox.com/assets/blt6b88061023429950/ParticleEmitter_VelocityInheritance.gif