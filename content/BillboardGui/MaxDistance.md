The MaxDistance property of a `BillboardGui` sets how far away in studs that billboard can be from the camera and still be drawn. If the camera and billboard are moved further apart than the maximum distance, then the billboard will not be visible regardless of any other properties of the billboard or any GUI objects it contains. The default value of this property is infinity

If this value is set to less than or equal to 0 then the maximum distance will be treated as infinite and the billboard will always be drawable.

## Example

```lua
-- Wait for default camera/control scripts to load
wait(5)

-- Declare and initialize objects
local camera = game.Workspace.CurrentCamera
local part = Instance.new("Part")
local billboard = Instance.new("BillboardGui")
local label = Instance.new("TextLabel")

-- Set up camera type
camera.CameraType = Enum.CameraType.Scriptable

-- Set part's position and lock in place
part.CFrame = CFrame.new(0, 10, 0)
part.Anchored = true

-- Set up billboard
billboard.MaxDistance = 10
billboard.Adornee = part
billboard.AlwaysOnTop = true
billboard.Size = UDim2.new(0, 50, 0, 50)

-- Set up label
label.Size = UDim2.new(1, 0, 1, 0)

-- Set partents of objects
label.Parent = billboard
billboard.Parent = part
part.Parent = game.Workspace

-- Move camera next to part. Wait a bit and then move camera
local cameraPosition0 = part.Position + Vector3.new(0, 0, 10)
local cameraPosition1 = part.Position + Vector3.new(0, 0, 20)
camera.CFrame = CFrame.new(cameraPosition0, part.Position)
-- Contents of billboard will be visible here
wait(2)
camera.CFrame = CFrame.new(cameraPosition1, part.Position)
-- Contents of billboard will no longer be visible (outside MaxDistance)
```
