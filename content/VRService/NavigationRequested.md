The NavigationRequested event fires when navigation is requested from the VRService for a specified [Enum.UserCFrame](https://developer.roblox.com/search#stq=UserCFrame) VR device.

This is fired with a [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) coordinate and specified UserCFrame indicating the device requesting the navigation.

This `/VRService` event can be used alongside `/UserInputService` service events and functions.

Since the event fires locally, it can only be used in a `/LocalScript`.