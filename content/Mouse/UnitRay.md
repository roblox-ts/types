The UnitRay property is a [DataType.Ray](https://developer.roblox.com/search#stq=Ray) directed toward the `Mouse`'s position in 3D space (described by [Mouse.Hit](https://developer.roblox.com/api-reference/property/Mouse/Hit)). It originates from the [CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) of the [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera). Like all unit rays, it has a distance of 1.

```lua
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local mouse = player:GetMouse()
print(mouse.UnitRay.Direction.magnitude) -- Always 1
```

	
The UnitRay property is a [DataType.Ray](https://developer.roblox.com/search#stq=Ray) directed toward the `Mouse`'s position in 3D space (described by [Mouse.Hit](https://developer.roblox.com/api-reference/property/Mouse/Hit)). It originates from the [CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) of the [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera). Like all unit rays, it has a distance of 1.

```lua
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local mouse = player:GetMouse()
print(mouse.UnitRay.Direction.magnitude) -- Always 1
```


Tags: ReadOnly, NotReplicated