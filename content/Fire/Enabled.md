The Enabled property, much like [ParticleEmitter.Enabled](https://developer.roblox.com/api-reference/property/ParticleEmitter/Enabled), determines whether flame particles are emit. Any particles already emit will continue to render until their lifetime expires. This property is useful for keeping pre-made fire effects off until they are needed later. Since flame particles are destroyed when the `Fire` object's [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) is set to nil, this property is useful in allowing existing particles the opportunity to expire before destroying the Fire object altogether. See the function below.

```lua
local Debris = game:GetService("Debris")
local part = script.Parent
function douseFlames(fire)
	fire.Enabled = false -- No more new particles
	Debris:AddItem(fire, 2) -- Remove the object after a delay (after existing particles have expired)
end
douseFlames(part.Fire)
```
