The Enabled property, much like [ParticleEmitter.Enabled](https://developer.roblox.com/api-reference/property/ParticleEmitter/Enabled), determines whether smoke particles are emit. Any particles already emit will continue to render until their lifetime expires. This property is useful for keeping pre-made smoke effects off until they are needed later. Since smoke particles are destroyed when the `Smoke` object's [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) is set to nil, this property is useful in allowing existing particles the opportunity to expire before destroying the Fire object altogether. See the function below.

```lua
local Debris = game:GetService("Debris")
local part = script.Parent
function stopSmoke(smoke)
	smoke.Enabled = false -- No more new particles
	Debris:AddItem(smoke, 10) -- Remove the object after a delay (after existing particles have expired)
end
stopSmoke(part.Smoke)
```
