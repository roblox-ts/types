The LeftParamA property is relevant when a part's [BasePart.LeftSurface](https://developer.roblox.com/api-reference/property/BasePart/LeftSurface) is set to Motor or SteppingMotor and [BasePart.LeftSurfaceInput](https://developer.roblox.com/api-reference/property/BasePart/LeftSurfaceInput) is set to Sin. It determines the **amplitude** of the motor's rotational velocity, using the following formula:

`MotorVelocity = ParamA * math.sin(workspace.DistributedGameTime * ParamB)`

In no other cases is this property used.