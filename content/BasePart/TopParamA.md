The TopParamA property is relevant when a part's [BasePart.TopSurface](https://developer.roblox.com/api-reference/property/BasePart/TopSurface) is set to Motor or SteppingMotor and [BasePart.TopSurfaceInput](https://developer.roblox.com/api-reference/property/BasePart/TopSurfaceInput) is set to Sin. It determines the **amplitude** of the motor's rotational velocity, using the following formula:

`MotorVelocity = ParamA * math.sin(workspace.DistributedGameTime * ParamB)`

In no other cases is this property used.