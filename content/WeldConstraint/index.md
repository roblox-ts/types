**WeldConstraints** are used to attach two [parts](https://developer.roblox.com/api-reference/class/BasePart) together. The constraint makes sure that the parts stay in the same relative position and orientation to one another. This means that if one part moves, the other will move the same amount. Even if the two parts are not touching one another, they can be welded together with a WeldConstraint.

## Creating WeldConstraints

The most common way to create a WeldConstraint is through the Studio tool. This tool is in the Model tab under the **Create** dropdown.

![Create Weld Constraint][1]

This tool will act differently based on how many parts are selected when the tool is activated.

### No Parts Selected

If no parts are selected when the Weld tool is clicked, the next two parts that are clicked on will be welded together. If the same part is clicked twice no weld will be created.

### One Part Selected

If one part is selected when the Weld tool is clicked, the next part that is clicked on will be welded to the selected part.

### Multiple Parts Selected

If several parts are selected when the Weld tool is clicked, any parts in that selection that are touching or overlapping will be welded together.

## Repositioning Welded Parts

Roblox handles moving a welded part differently depending on whether the part was moved using its Position or with its CFrame. If a welded part’s Position is updated, the part will move but none of the connected parts will move with it. The weld will recalculate the offset from the other part based on the part’s new position.

```lua
-- Create two parts and position them at the same height
local partA = Instance.new("Part")
local partB = Instance.new("Part")
partA.Position = Vector3.new(0, 10, 0)
partB.Position = Vector3.new(0, 10, 10)
partA.Parent = game.Workspace
partB.Parent = game.Workspace

-- Weld the two parts together
local weld = Instance.new("WeldConstraint")
weld.Parent = game.Workspace
weld.Part0 = partA
weld.Part1 = partB

-- Update the position of the first part. The first part
-- will move but the second will stay where it started. The
-- weld maintain the new offset
partA.Position = Vector3.new(0, 20, 0)
```

If instead a part's CFrame is updated, then that part will move and any part welded to that part will also move. These other parts will be moved to make sure they maintain the same offset as when the weld was created.

```lua
-- Create two parts and position them at the same height
local partA = Instance.new("Part")
local partB = Instance.new("Part")
partA.Position = Vector3.new(0, 10, 0)
partB.Position = Vector3.new(0, 10, 10)
partA.Parent = game.Workspace
partB.Parent = game.Workspace

-- Weld the two parts together
local weld = Instance.new("WeldConstraint")
weld.Parent = game.Workspace
weld.Part0 = partA
weld.Part1 = partB

-- Update the cframe of the first part. The second part will
-- also move to maintain the offset of the weld.
partA.CFrame = CFrame.new(0, 20, 0)
```

[1]: https://developer.roblox.com/assets/5b2db5843e0c33235eaa53c0/CreateWeldConstraint.png