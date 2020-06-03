This function returns an `InputObject` and a [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) describing the device's current rotation vector.

This is fired with an InputObject. The *Position* property of the input object is a [Enum.InputType.Gyroscope](https://developer.roblox.com/search#stq=InputType) that tracks the total rotation in each local device axis.

Device rotation can only be tracked on devices with a [UserInputService.GyroscopeEnabled|gyroscope.

As this function fires locally, it can only be used in a ](https://developer.roblox.com/search#stq=GyroscopeEnabled|gyroscope.%20%20As%20this%20function%20fires%20locally,%20it%20can%20only%20be%20used%20in%20a%20)LocalScript`.
@returns A tuple containing two properties:

 1. The delta property describes the amount of rotation that last happened
 2. The CFrame is the device's current rotation relative to its default reference frame