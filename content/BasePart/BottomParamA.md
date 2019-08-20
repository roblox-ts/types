The BottomParamA property is relevant when a part's [BasePart.BottomSurface](https://developer.roblox.com/api-reference/property/BasePart/BottomSurface) is set to Motor or SteppingMotor and [BasePart.BottomSurfaceInput](https://developer.roblox.com/api-reference/property/BasePart/BottomSurfaceInput) is set to Sin. It determines the **amplitude** of the motor's rotational velocity, using the following formula:

`MotorVelocity = ParamA * math.sin(workspace.DistributedGameTime * ParamB)`

There are no other usages for this property.