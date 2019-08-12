HopperBins are an outdated system for creating tools that can be used by a player. In place of HopperBins, please use `Tool` instead.

Historically, only HopperBins worked without a 'Handle' `Part`, but this is no longer the case thanks to the [Tool.RequiresHandle](https://developer.roblox.com/api-reference/property/Tool/RequiresHandle) property of Tools.

For capturing user input (from the Mouse for example), it is no longer necessary to use HopperBins or Tools. Instead, please use these alternatives:

* `ContextActionService`

* `UserInputService`

* [Player.GetMouse](https://developer.roblox.com/api-reference/function/Player/GetMouse)