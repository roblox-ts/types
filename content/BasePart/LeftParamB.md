The LeftParamB property is relevant when a part's [BasePart.LeftSurface](https://developer.roblox.com/api-reference/property/BasePart/LeftSurface) is set to Motor or SteppingMotor and [BasePart.LeftSurfaceInput](https://developer.roblox.com/api-reference/property/BasePart/LeftSurfaceInput) is set to Constant or Sin. For Constant, it determines the constant rotational velocity of the motor. For Sin, it determines the **frequency** of the motor's rotational velocity, using the following formula:

`MotorVelocity = ParamB * math.sin(workspace.DistributedGameTime * ParamB)`

In no other cases is this property used.