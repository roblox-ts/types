The Acceleration property determines how particles [ParticleEmitter.Speed](https://developer.roblox.com/api-reference/property/ParticleEmitter/Speed) changes over the particle's lifetime. It is defined using a [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3) to determine the acceleration on the global X/Y/Z axes. It is measured in studs per second squared. When changed, this property affects all particles emit by the emitter, both current and future particles.

Pictured below are two default ParticleEmitters. The foreground (right) emitter has an Acceleration on the positive-X axis, causing the path of the particles to bend in that direction.

![An image of two default ParticleEmitters, wherein the foreground emitter has a +X Acceleration][1]

Acceleration will slow particles down if the vector points in the opposite [ParticleEmitter.EmissionDirection](https://developer.roblox.com/api-reference/property/ParticleEmitter/EmissionDirection) in which particles are emitted. Otherwise, it will speed them up. You can use [ParticleEmitter.Drag](https://developer.roblox.com/api-reference/property/ParticleEmitter/Drag) to slow particles down no matter what direction they travel.

Acceleration is most often used to apply a gravity effect to particles (try a value of (0, -3, 0) for this). You can also use small values on the X/Z axes to make it look like particles are being blown away by wind. If you emit a bubble particle downwards, you could use an acceleration of (0, 5, 0) to cause the bubbles to decelerate and then float back upwards.

[1]: https://developer.roblox.com/assets/bltaeb3393ea3390868/ParticleEmitter_Acceleration.png