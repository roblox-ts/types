The RightParamB property is relevant when a part's [BasePart.RightSurface](https://developer.roblox.com/api-reference/property/BasePart/RightSurface) is set to Motor or SteppingMotor and [BasePart.RightSurfaceInput](https://developer.roblox.com/api-reference/property/BasePart/RightSurfaceInput) is set to Constant or Sin. For Constant, it determines the constant rotational velocity of the motor. For Sin, it determines the **frequency** of the motor's rotational velocity, using the following formula:

`MotorVelocity = ParamB * math.sin(workspace.DistributedGameTime * ParamB)`

In no other cases is this property used.