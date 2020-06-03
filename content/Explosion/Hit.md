Fires when the `Explosion` hits a `BasePart` within its [Explosion.BlastRadius](https://developer.roblox.com/api-reference/property/Explosion/BlastRadius). Returns the part hit along with the distance of the part from [Explosion.Position](https://developer.roblox.com/api-reference/property/Explosion/Position).

Note that the effect of an `Explosion` is not disrupted by obstacles, this means parts shielded behind other parts will still be hit, even if the `BasePart` they are shielded behind is anchored.

This event will also fire when [Explosion.BlastPressure](https://developer.roblox.com/api-reference/property/Explosion/BlastPressure) is equal to zero. This means developers can program their own custom behavior for explosions by eliminating the explosion's influence on `BasePart`s and `Terrain`.

Note that this event will fire for every `BasePart` hit. This means it can fire multiple times for the same player character (as the character `Model` is made up of multiple parts). For this reason when dealing custom damage using the `Explosion.Hit` event it's recommended to implement a check to see if the character has already been hit by the `Explosion`.