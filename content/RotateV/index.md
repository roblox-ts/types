A RotateV object joins two parts together and allows rotation about a set axis. This object is most commonly created by the Motor [Enum.SurfaceType](https://developer.roblox.com/search#stq=SurfaceType). If created through a script, a RotateV's behavior is still governed by the SurfaceInput of [JointInstance.Part0](https://developer.roblox.com/api-reference/property/JointInstance/Part0).

The three inputs of note are as follows:

* NoInput: The joint will not rotate under its own power. It can still be rotated by external forces (such as from a character pushing one of the parts).

* Constant: The joint will rotate based on the ParamB property of [JointInstance.Part0](https://developer.roblox.com/api-reference/property/JointInstance/Part0). This rotation is measured in radians per physics frame (which is approximately 1/60th of a second).

* Sin: The joint will rotate based on the ParamA and ParamB properties of [JointInstance.Part0](https://developer.roblox.com/api-reference/property/JointInstance/Part0). The rotation measured in radians per physics frame is calculated by the function: RotationRate = ParamA * sin(distributedGameTime * ParamB). distributedGameTime is the current time of the game measured in seconds.