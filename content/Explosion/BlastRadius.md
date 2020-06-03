This property determines the radius of the `Explosion`, in studs. This property accepts any value between 0 and 100.

This radius determines the area of effect of the Explosion, not the size of the Explosion's visuals. The size of the Explosion's visual effect is the same regardless of BlastRadius (even if BlastRadius is 0).

`BasePart`s within the BlastRadius will be affected by the explosion. Meaning, if [Explosion.BlastPressure](https://developer.roblox.com/api-reference/property/Explosion/BlastPressure) is greater than 0, force will be applied to parts. The degree to which joints are broken within the BlastRadius depends on [Explosion.DestroyJointRadiusPercent](https://developer.roblox.com/api-reference/property/Explosion/DestroyJointRadiusPercent). [Explosion.Hit](https://developer.roblox.com/api-reference/event/Explosion/Hit) will fire for any every `BasePart` within the radius.

`BasePart`s are considered within an `Explosion`'s BlastRadius even if they are only partially in range.