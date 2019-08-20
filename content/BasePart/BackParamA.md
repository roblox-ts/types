The BackParamA property is relevant when a part's [BasePart.BackSurface](https://developer.roblox.com/api-reference/property/BasePart/BackSurface) is set to Motor or SteppingMotor and [BasePart.BackSurfaceInput](https://developer.roblox.com/api-reference/property/BasePart/BackSurfaceInput) is set to Sin. It determines the **amplitude** of the motor's rotational velocity, using the following formula:

`MotorVelocity = ParamA * math.sin(workspace.DistributedGameTime * ParamB)`

There are no other usages for this property.