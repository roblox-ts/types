/** This function makes the `Humanoid` equip the given `Tool`.

The below example would cause *Player1* to equip a tool in `Workspace` named *'Tool'*.
```lua
Workspace.Player1.Humanoid:EquipTool(Workspace.Tool)
```
When this function is called, the humanoid will automatically unequip any `Tools` that it currently has equipped

Although they will be equipped, `Tools` for which `RequiresHandle` is *true* will not function if they have no handle, regardless if this function is used to equip them or not

## See also
 - To unequip tools, use `UnequipTools`

### Code Samples

#### Creating a Colorful Brick Tool
The code below creates a new tool and places into the `LocalPlayer`'s `Backpack`. Then, the code equips the tool for the player user `EquipTool`.

When the tool is equipped and the player uses it (e.g. pressed their mouse button in-game), the code spawns a new `part` at the position of the click using the `TargetPoint` position. The code also sets several of the part's properties, such as giving it a random `BrickColor`.
```lua
local player = game.Players.LocalPlayer
local character = player.CharacterAdded:wait()
local humanoid = character.Humanoid

-- Make a new tool and handle and put it in the player's Backpack
local function makeTool()
	-- Create tool
	local tool = Instance.new("Tool")
	tool.Parent = player:WaitForChild("Backpack")

	-- Create tool handle
	local handle = Instance.new("Part")
	handle.Name = "Handle"
	handle.Parent = tool
	handle.BrickColor = BrickColor.Random()

	-- Enable and equip tool
	tool.Enabled = true
	humanoid:EquipTool(tool)

	-- Handle tool use
	tool.Activated:Connect(onActivated)
end

-- Create a new randomly colored part at *pos* world position
local function spawnPart(pos)
	local part = Instance.new("Part")
	part.Anchored = true
	part.Size = Vector3.new(1,1,1)
	part.Position = pos
	part.Parent = game.Workspace
	part.BrickColor = BrickColor.Random()
end

-- Spawn a new part at TargetPoint when the tool is activated
function onActivated()
	spawnPart(humanoid.TargetPoint)
end

-- Make a new tool when the LocalScript first runs
makeTool()
```
*/
function zoom() {}
