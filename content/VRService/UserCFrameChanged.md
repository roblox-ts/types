The UserCFrameChanged even fires when a [Enum.UserCFrame](https://developer.roblox.com/search#stq=UserCFrame) is changed. For instance, this event fires when the user moves a connected VR device.

This can be used alongside `VRService\GetUserCFrame` to track the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) coordinates of a VR devices, and when it changes/moves. It can also be used alongside `/UserInputService` service events and functions.

Since the event fires locally, it can only be used in a `/LocalScript`.