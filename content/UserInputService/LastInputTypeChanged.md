The LastInputTypeChanged event fires whenever the client changes how they are interacting via a Human-Computer Interface device. (i.e. from MouseMovement to MouseWheel or from Thumbstick1 to Thumbstick2).

To get the value of LastInputType, regardless of whether it has changed, you can use the [UserInputService.GetLastInputType](https://developer.roblox.com/api-reference/function/UserInputService/GetLastInputType) function.

As this event only fires locally, it can only be used in a `LocalScript`.