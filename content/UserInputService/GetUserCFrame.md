The GetUserCFrame function returns a [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) describing the position and orientation of a specified [Enum.UserCFrame](https://developer.roblox.com/search#stq=UserCFrame) virtual reality (VR) device. If the specified device is not connected, the function returns [CFrame.new()](https://developer.roblox.com/search#stq=CFrame).

For example, the code snippet below prints the CFrame of the user’s VR headset.

```lua
local userInputService = game:GetService("UserInputService")
local cframe = userInputService:GetUserCFrame(Enum.UserCFrame.Head)

print(cframe)
```

By using the function, players can implement features such as re-positioning the user's in-game character corresponding to the location of a connected VR device. This can be done by changing the *CFrame* of the user's in-game body parts to match the *CFrame* of the specified VR device using [Enum.UserCFrame](https://developer.roblox.com/search#stq=UserCFrame) and [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) value arguments passed by the event.

## See also

 - [UserInputService.UserCFrameChanged](https://developer.roblox.com/api-reference/event/UserInputService/UserCFrameChanged), an event which fires when the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) of a VR device changes

 - `VRService`, a service used to implement VR support

As this event only fires locally, it can only be used in a `LocalScript`.
@param type The `Enum/UserCFrame` corresponding to the VR device
@returns A `DataType/CFrame` describing the position and orientation of the specified VR device