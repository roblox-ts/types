The GetUserCFrameEnabled function returns true if the specified [Enum.UserCFrame](https://developer.roblox.com/search#stq=UserCFrame) virtual reality device (VR) is available to be listened to.

This can be used to determine whether a specified VR device, *(e.g. UserCFrame.Head)*, is connected to the user's game. If the specified VR device is connected, is it enabled (*true*). Otherwise, it is disabled (*false*).

This can also be used alongside the several `/UserInputService` VR functions and events.

Since `/VRService` only runs client-side, this function will only work when used in a `/LocalScript`.
@param type The specified type of VR device.
@returns A boolean indicating whether the specified VR device is enabled (*true*) or disabled (*false*).