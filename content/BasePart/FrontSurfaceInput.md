The FrontSurfaceInput property determines the kind of input provided to a part's [BasePart.FrontSurface](https://developer.roblox.com/api-reference/property/BasePart/FrontSurface). This is only relevant for Motor or SteppingMotor SurfaceTypes. This property determines how [BasePart.FrontParamA](https://developer.roblox.com/api-reference/property/BasePart/FrontParamA) and [BasePart.FrontParamB](https://developer.roblox.com/api-reference/property/BasePart/FrontParamB) are used. For brevity, these properties will be referred to as ParamA and ParamB, respectively.

  - By default, this is set to NoInput. This stops the motor altogether,

  - For Constant, the motor rotates at a constant velocity equal to `ParamB`.

  - For Sin, the motor rotates at a velocity equal to `ParamA * math.sin(workspace.DistributedGameTime * ParamB)`. See [Workspace.DistributedGameTime](https://developer.roblox.com/api-reference/property/Workspace/DistributedGameTime).