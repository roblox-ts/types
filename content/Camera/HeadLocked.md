Un-linking the camera from a VR user's head motions can cause motion sickness. This property should only be set to false after extensive testing.

Toggles whether the `Camera` will automatically track the head motion of a player using a VR device.

When HeadLocked is *true*, the engine will combine the `Camera` [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) with the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) of the user's head to render the position and orientation of the `Camera` correctly. The camera will be rendered at the following [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame):

```lua
local UserInputService = game:GetService("UserInputService")
local headCFrame = UserInputService:GetUserCFrame(Enum.UserCFrame.Head)
headCFrame
```

## Disabling HeadLocked

You are recommended not to disable HeadLocked for the following reasons:

 - Players may experience motion sickness if an equivalent head tracking solution is not added

 - The Roblox engine performs latency optimizations when HeadLocked is true

However in some circumstances you may wish to develop your own head tracking systems. For example, you may want custom camera transformations that restrict or augment the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) of the head.

## See also

 - [UserInputService's](https://developer.roblox.com/api-reference/class/UserInputService) [UserInputService.GetUserCFrame](https://developer.roblox.com/api-reference/function/UserInputService/GetUserCFrame) function, which can be used to obtain the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) of the head

 - [UserInputService's](https://developer.roblox.com/api-reference/class/UserInputService) [UserInputService.RecenterUserHeadCFrame](https://developer.roblox.com/api-reference/function/UserInputService/RecenterUserHeadCFrame) which is used to recenter the head to the current position and orientation of the VR device

 - The [Camera.GetRenderCFrame](https://developer.roblox.com/api-reference/function/Camera/GetRenderCFrame) function which returns the `Camera` [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) combined with the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) of the user's head