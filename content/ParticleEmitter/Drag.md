The Drag property determines the rate in seconds at which individual particles will lose half their speed via exponential decay. Pictured below are two identical default ParticleEmitters, except that the right has a Drag value of 0.25.

![Animation of drag on a ParticleEmitter][1]

Drag is applied by scaling the expected velocity (from [ParticleEmitter.Speed](https://developer.roblox.com/api-reference/property/ParticleEmitter/Speed) and any velocity inherited from the parent from [ParticleEmitter.VelocityInheritance](https://developer.roblox.com/api-reference/property/ParticleEmitter/VelocityInheritance)) by the following formula: `2 ^ (elapsedTime * -drag)`, where `elapsedTime` is the time since the particle was emit. Consequently, setting Drag to a negative value will cause particles' velocities to grow exponentially.

Warning: if Drag is set to a sufficiently negative value, this can cause all particles emit by the emitter to completely disappear. Be careful when setting this property lower than -100.

[1]: https://developer.roblox.com/assets/blt9a58d2b5746274de/ParticleEmitter_Drag.gif