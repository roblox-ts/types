This function returns, in radians, the current roll applied to the `Camera` using [Camera.SetRoll](https://developer.roblox.com/api-reference/function/Camera/SetRoll). Roll is defined as rotation around the [Camera’s](https://developer.roblox.com/api-reference/class/Camera) Z-axis.

This function only returns roll applied using the [Camera.SetRoll](https://developer.roblox.com/api-reference/function/Camera/SetRoll) function. Roll manually applied to the [Camera’s](https://developer.roblox.com/api-reference/class/Camera) [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) is not accounted for. To obtain the actual roll of the `Camera`, including roll manually applied, you can use the following snippet:

```lua
local function getActualRoll()
	local camera = workspace.CurrentCamera

	local trueUp = Vector3.new(0, 1, 0)
	local cameraUp = camera:GetRenderCFrame().upVector

	return math.acos(trueUp:Dot(cameraUp))
end
```

@returns The current roll applied by `Camera/SetRoll`, in radians