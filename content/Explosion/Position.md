This property is the position of the center of the `Explosion`. It is defined in world-space and not influenced by the `Explosion`'s parent.

`BasePart`s will be influenced by the `Explosion` if they are within [Explosion.BlastRadius](https://developer.roblox.com/api-reference/property/Explosion/BlastRadius) studs of the explosion's position.

The effect of an explosion is instantaneous. This means that although the position of an explosion can be changed after it has been set it cannot affect two different areas. Once an explosion has been 'detonated', shortly after parenting it to a descendant of the `Workspace`, it will not do so again. In some cases the visual effect of the explosion will move but it will have no effect.

For this reason a new Explosion should be created if the developer wants an explosion to appear at a different position.