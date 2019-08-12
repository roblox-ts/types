A `ForceField` protects a `Humanoid` from taking damage using the [Humanoid.TakeDamage](https://developer.roblox.com/api-reference/function/Humanoid/TakeDamage) function, and protects `BasePart`s from having their joints broken due to an `Explosion`.

## ForceField Creation

ForceFields are created when a character spawns on a `SpawnLocation` and the [SpawnLocation.Duration](https://developer.roblox.com/api-reference/property/SpawnLocation/Duration) property is greater than zero.

ForeFields influence the instance they are parented to. When parented to a `Model` they will protect all of the `BasePart`s descending from that model. They may be parented to a `BasePart`, but the part's joints will only be protected if both the part and the part it is connected to also contain ForceField.

## Forcefields and Joints

When a ForceField is parented to a character `Model` the neck joint will be protected and thus the character can not be killed by `Explosions`. Developers can protect joints from Explosions without the need for a `ForceField` object by setting [Explosion.DestroyJointRadiusPercent](https://developer.roblox.com/api-reference/property/Explosion/DestroyJointRadiusPercent) to 0.

**ForceFields and Damage**

ForceFields only protect `Humanoid`s from damage using the [Humanoid.TakeDamage](https://developer.roblox.com/api-reference/function/Humanoid/TakeDamage) function. Humanoids can still be damaged by setting [Humanoid.Health](https://developer.roblox.com/api-reference/property/Humanoid/Health) directly. For this reason, it is advised that developers use [Humanoid.TakeDamage](https://developer.roblox.com/api-reference/function/Humanoid/TakeDamage). Bearing in mind of course, that it is still possible to check if a `ForceField` exists before manually setting the humanoid's health as shown below:

```lua
if not characterModel:FindFirstChildOfClass("ForceField") then
	humanoid.Health = humanoid.Health - 10
end
```

## ForceField Visuals

When [ForceField.Visible](https://developer.roblox.com/api-reference/property/ForceField/Visible) is set to true, a particle effect is created. A number of rules determine where this effect will be emitted from.

When parented to a `Model`, if the model includes a `Humanoid` named “Humanoid” with [Humanoid.RigType](https://developer.roblox.com/api-reference/property/Humanoid/RigType) set to R15, the effect will be emitted from the part named “UpperTorso”. Otherwise, the effect will be emitted from the part named “Torso”. The part must have the same parent as the ForceField, if it does not exist then the effect is emitted at 0, 0, 0.

When parented to a `BasePart` the effect will be emitted from the part's [BasePart.Position](https://developer.roblox.com/api-reference/property/BasePart/Position).