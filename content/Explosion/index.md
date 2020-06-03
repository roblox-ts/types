An Explosion applies force to `BaseParts` within the explosion's [Explosion.BlastRadius](https://developer.roblox.com/api-reference/property/Explosion/BlastRadius). This force breaks joints between parts and kills `Humanoid` characters not protected by a `ForceField`.

If an explosion is instanced whilst the game is running, it will destroy itself shortly afterwards meaning they do not need to be cleaned up using the `Debris` service.

**Explosion effects**

`Humanoids` are killed by explosions as they break the character `Model`'s neck joint. Parenting a `ForceField` to a model will protect all of its children from Explosions. This means that their joints will not be broken and thus `Humanoid`s will not be killed.

If a developer doesn't want joints between `BaseParts` to be broken or wants to implement their own formula for damaging `Humanoid`s it is recommended they set [Explosion.DestroyJointRadiusPercent](https://developer.roblox.com/api-reference/property/Explosion/DestroyJointRadiusPercent) to 0 and use the [Explosion.Hit](https://developer.roblox.com/api-reference/event/Explosion/Hit) event to handle the result of the explosion.

Explosions can also be configured to damage `Terrain`, creating craters, this behavior is controlled by the [Explosion.ExplosionType ](https://developer.roblox.com/search#stq=ExplosionType%20) property.

The effect of an Explosion is not disrupted by obstacles, this means parts shielded behind other parts will still be effected, even if the `BasePart` they are shielded behind is not anchored.