The [WeldConstraint.Part0](https://developer.roblox.com/api-reference/property/WeldConstraint/Part0) and **Part1** properties of a `WeldConstraint` set which two `BasePart` the weld connects. As soon as both properties are set and the weld is [WeldConstraint.Enabled](https://developer.roblox.com/api-reference/property/WeldConstraint/Enabled), the weld will lock the two parts together.

If Part0 or Part1 are ever set to new parts, then the WeldConstraint will instantly link the new part. The old part will no longer be constrained.The second part connected by the constraint.

## Example

```lua
local partA = Instance.new("Part")
local partB = Instance.new("Part")

partA.Position = Vector3.new(0, 10, 0)
partA.Parent = game.Workspace

partB.Position = Vector3.new(0, 10, 10)
partB.Parent = game.Workspace

local weld = Instance.new("WeldConstraint")
weld.Parent = partA
weld.Part0 = partA
weld.Part1 = partB
```

	
The [WeldConstraint.Part0](https://developer.roblox.com/api-reference/property/WeldConstraint/Part0) and **Part1** properties of a `WeldConstraint` set which two `BasePart` the weld connects. As soon as both properties are set and the weld is [WeldConstraint.Enabled](https://developer.roblox.com/api-reference/property/WeldConstraint/Enabled), the weld will lock the two parts together.

If Part0 or Part1 are ever set to new parts, then the WeldConstraint will instantly link the new part. The old part will no longer be constrained.The second part connected by the constraint.

## Example

```lua
local partA = Instance.new("Part")
local partB = Instance.new("Part")

partA.Position = Vector3.new(0, 10, 0)
partA.Parent = game.Workspace

partB.Position = Vector3.new(0, 10, 10)
partB.Parent = game.Workspace

local weld = Instance.new("WeldConstraint")
weld.Parent = partA
weld.Part0 = partA
weld.Part1 = partB
```


Tags: NotReplicated