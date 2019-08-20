A ParticleEmitter allows for the creation of [particle systems][1]. is a special effect object that emits customizable 2D billboard particles into the world. On Roblox, a particle is a 2D image rendered in the world so that it always always face the camera, much like a `BillboardGui` with a single `ImageLabel` in it.

![A ParticleEmitter with default settings in a Part with default settings][2]

ParticleEmitter must be parented to a `BasePart` (such as a `Part`) or an `Attachment` within such a part. Particles spawn randomly in the **bounding box** of its parent part (for attachments, this is a single point). Particles from a single emitter will render so long as this condition is met; setting a ParticleEmitter's [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) to nil will remove all particles instantly, like how [ParticleEmitter.Clear](https://developer.roblox.com/api-reference/function/ParticleEmitter/Clear) works. If an emitter is [ParticleEmitter.Enabled](https://developer.roblox.com/api-reference/property/ParticleEmitter/Enabled) and has a nonzero [ParticleEmitter.Rate](https://developer.roblox.com/api-reference/property/ParticleEmitter/Rate), it will emit particles on its own. Finer control on the number of particles can be accomplished using [ParticleEmitter.Emit](https://developer.roblox.com/api-reference/function/ParticleEmitter/Emit).

Roblox provides several pre-made particle effect objects - `Fire`, `Smoke` and `Sparkles`. They behave similarly to a ParticleEmitter, but they are not as customizable. They also lack certain particle-controlling methods: [ParticleEmitter.Emit](https://developer.roblox.com/api-reference/function/ParticleEmitter/Emit) and [ParticleEmitter.Clear](https://developer.roblox.com/api-reference/function/ParticleEmitter/Clear).  An `Explosion` also uses particles, but provides little-to-no control with regards to how the effect looks.

## How to Insert a ParticleEmitter

 In Studio, a ParticleEmitter can be inserted in several ways:

  - Using the "Effects" drop-down (Model tab)

  - From the Advanced Objects window (In the model tab, or CTRL+I)

  - The add menu within the Explorer window

  - Using the Command bar, run `Instance.new("ParticleEmitter", workspace)`

  - If you find you are inserting ParticleEmitters often, you can add a ParticleEmitter button to the Quick Access toolbar

![Drop-down Efffects menu for inserting a ParticleEmitter][3]![AdvancedObjects window insertion][4]![Explorer window insertion][5]

[1]: https://en.wikipedia.org/wiki/Particle_system

[2]: https://developer.roblox.com/assets/blt7bc5555538e06faa/ParticleEmitter.png

[3]: https://developer.roblox.com/assets/blt14277a5a3c807db6/ParticleEmitter_Insertion.png

[4]: https://images.contentstack.io/v3/assets/blt309cc8bfb280dcec/blt885ce1cfde491cd3/5b0b5148dc1dd5cd0f3c9cb5/ParticleEmitter_Insertion2.png

[5]: https://images.contentstack.io/v3/assets/blt309cc8bfb280dcec/blt0e3ad5ad5826a269/5b0b51557f08d31910651bd7/ParticleEmitter_Insertion3.png