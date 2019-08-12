This property determines how the `Explosion` will interact with `Terrain`. It is an Enum.ExplosionType value and can be set to one of three options.

 - **NoCraters** - Explosions will not damage Terrain

 - **Craters** - Explosions will create craters in Terrain

 - **CratersAndDebris** - Redundant, behaves the same as Craters

If ExplosionType is set to create craters in `Terrain`, the radius of the crater will be roughly equal to the [Explosion.BlastRadius](https://developer.roblox.com/api-reference/property/Explosion/BlastRadius). Craters are created in all `Terrain` materials other than water. The size of the crater is not influenced by the material, although some materials create rougher edges than others.