Returns the number of `BasePart`s that are deemed physically active, due to being recently under the influence of physics.

This function provides a measure of how many `BasePart`s are being influenced by, or recently under the influence of, physical forces.

```lua
print(workspace:GetNumAwakeParts()) -- prints the number of 'awake' parts
```

## Sleeping vs Awake Parts

In order to ensure good performance, Roblox sets `BaseParts` in which physics are not being applied to a 'sleeping' state. `BasePart`s with [BasePart.Anchored](https://developer.roblox.com/api-reference/property/BasePart/Anchored) set to true, for example, will always be sleeping as physics does not apply to them. When a force is applied to an non anchored `BasePart`, an 'awake' state will be applied. Whilst a `BasePart` is awake the Roblox physics engine will perform continuous calculations to ensure physical forces interact correctly with the part. Once the `BasePart` is no longer subject to physical forces, it will revert to a 'sleeping' state.
@returns The number of awake parts.