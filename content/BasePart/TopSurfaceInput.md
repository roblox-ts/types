The TopSurfaceInput property determines the kind of input provided to a part's [BasePart.TopSurface](https://developer.roblox.com/api-reference/property/BasePart/TopSurface). This is only relevant for Motor or SteppingMotor SurfaceTypes. This property determines how [BasePart.TopParamA](https://developer.roblox.com/api-reference/property/BasePart/TopParamA) and [BasePart.TopParamB](https://developer.roblox.com/api-reference/property/BasePart/TopParamB) are used. For brevity, these properties will be referred to as ParamA and ParamB, respectively.

  - By default, this is set to NoInput. This stops the motor altogether,

  - For Constant, the motor rotates at a constant velocity equal to `ParamB`.

  - For Sin, the motor rotates at a velocity equal to `ParamA * math.sin(workspace.DistributedGameTime * ParamB)`. See [Workspace.DistributedGameTime](https://developer.roblox.com/api-reference/property/Workspace/DistributedGameTime).