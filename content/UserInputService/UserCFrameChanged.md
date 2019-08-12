The UserCFrameChanged event fires when the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) of a VR device changes.

This event can be used to track the movement of a connected VR device.

Using the event, you can implement features such as moving the user's in-game character limbs as the user moves their VR device. This can be done by changing the CFrame of the user's in-game limbs to match the CFrame changes of the VR device using the [Enum.UserCFrame](https://developer.roblox.com/search#stq=UserCFrame) enum and *CFrame* value arguments passed by the event.

To retrieve the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) of a connected VR device, use [UserInputService.GetUserCFrame](https://developer.roblox.com/api-reference/function/UserInputService/GetUserCFrame).

As the event fires locally, it can only be used in a `LocalScript`.

## See also

- `VRService`, used to implement support, including an identical event [VRService.UserHeadCFrameChanged](https://developer.roblox.com/search#stq=UserHeadCFrameChanged)

 - [Camera.HeadLocked](https://developer.roblox.com/api-reference/property/Camera/HeadLocked), when this property is *true* the `Camera` will automatically track the head motion of a player using a VR device

 - [Camera.GetRenderCFrame](https://developer.roblox.com/api-reference/function/Camera/GetRenderCFrame), a function which retrieves the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) the `Camera` is being orientated at, including the impact of VR devices