The Enabled property, much like [ParticleEmitter.Enabled](https://developer.roblox.com/api-reference/property/ParticleEmitter/Enabled), determines whether sparkle particles are emit. Any particles already emit will continue to render until their lifetime expires. This property is useful for keeping pre-made sparkle effects off until they are needed later. Since sparkle particles are destroyed when the `Sparkle` object's [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) is set to nil, this property is useful in allowing existing particles the opportunity to expire before destroying the Fire object altogether. See the function below.

```lua
local Debris = game:GetService("Debris")
local part = script.Parent
function stopSparkling(sparkles)
	sparkles.Enabled = false -- No more new particles
	Debris:AddItem(sparkles, 4) -- Remove the object after a delay (after existing particles have expired)
end
stopSparkling(part.Sparkles)
```
