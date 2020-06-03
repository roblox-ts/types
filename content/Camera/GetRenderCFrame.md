This function returns the actual [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) of the `Camera` as it is rendered. This includes any roll applied using [Camera.SetRoll](https://developer.roblox.com/api-reference/function/Camera/SetRoll) and the impact of VR.

VR head transformations, along with roll applied using [Camera.SetRoll](https://developer.roblox.com/api-reference/function/Camera/SetRoll) is not applied to the [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) property. For this reason, it is best practice to use [Camera.GetRenderCFrame](https://developer.roblox.com/api-reference/function/Camera/GetRenderCFrame) to obtain the ‘true’ [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) of the `Camera`.

For example, when using VR the `Camera` is actually rendered at the following [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame):

```lua
local UserInputService = game:GetService("UserInputService")

local headCFrame = UserInputService:GetUserCFrame(Enum.UserCFrame.Head)
headCFrame
```

The [Camera’s](https://developer.roblox.com/api-reference/class/Camera) render [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) will only be changed to account for the head when the [Camera.HeadLocked](https://developer.roblox.com/api-reference/property/Camera/HeadLocked) property is true.
@returns The `DataType/CFrame` the `Camera` is being rendered at