This function recenters the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) of the VR headset to the current orientation of the headset worn by the user. This means that the headset’s current orientation is set to `CFrame.new()`.

Use this function to to move the headset CFrame to the center of the play area if it seems to be at a weird offset.

This behaves identically to the `VRService` function, [VRService.RecenterUserHeadCFrame](https://developer.roblox.com/api-reference/function/VRService/RecenterUserHeadCFrame).

Since `UserInputService` is client-side only, this function can only be used in a `LocalScript`.