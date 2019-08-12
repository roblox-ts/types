The FrontParamA property is relevant when a part's [BasePart.FrontSurface](https://developer.roblox.com/api-reference/property/BasePart/FrontSurface) is set to Motor or SteppingMotor and [BasePart.FrontSurfaceInput](https://developer.roblox.com/api-reference/property/BasePart/FrontSurfaceInput) is set to Sin. It determines the **amplitude** of the motor's rotational velocity, using the following formula:

`MotorVelocity = ParamA * math.sin(workspace.DistributedGameTime * ParamB)`

In no other cases is this property used.