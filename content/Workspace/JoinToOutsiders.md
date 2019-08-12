This function creates joints between the specified [Parts](https://developer.roblox.com/api-reference/class/BasePart) and any touching parts depending on the parts' surfaces and the specified joint creation mode.

The first parameter is an array of [BaseParts](https://developer.roblox.com/api-reference/class/BasePart). Joints will only be create between the parts in the array and not in the array. Joints will not be created between the parts in the array.

The second parameter is a [Enum.JointCreationMode](https://developer.roblox.com/search#stq=JointCreationMode) that determines how joints will be created. The following options are available:

| Name | Description |
| --- | --- |
| All | Joints created between any touching parts |
| Surface | Joints created between parts with compatible surfaces |
| None | No joints created. Causes this function to do nothing |

This function is used by the Roblox Studio Move tool when the user finishes moving a selection. In conjunction with [Plugin.GetJoinMode](https://developer.roblox.com/api-reference/function/Plugin/GetJoinMode) and [Workspace.UnjoinFromOutsiders](https://developer.roblox.com/api-reference/function/Workspace/UnjoinFromOutsiders) it can be used to retain join functionality when developing custom studio build tools. See the snippets below for an example.

```lua
-- finished moving a selection, make joints
local function finishedMovingParts(parts)
	local joinMode = Plugin:GetJoinMode()
	workspace:JoinToOutsiders(parts, joinMode)
end
```
	 *
```lua
-- started moving a selection, break joints
local function startMovingParts(parts)
	workspace:UnjoinFromOutsiders(parts)
end
```

Developers interested in seeing how this function is used in the Roblox Studio should see the [Studio Tools GitHub repository][1].

[1]: https://github.com/Roblox/Studio-Tools
@param objects An array of `BasePart`s for whom joints are to be made.
@param jointType The `Enum/JointCreationMode` to be used.