The GetTouchpadMode function returns the [Enum.VRTouchpadMode](https://developer.roblox.com/search#stq=VRTouchpadMode) indicating the mode of a specified [Enum.VRTouchpad](https://developer.roblox.com/search#stq=VRTouchpad).

The returned mode indicates how the user interacts with their touchpad to play the game. For more information about the different types of modes, see the [Enum.VRTouchpadMode](https://developer.roblox.com/search#stq=VRTouchpadMode) page.

This can also be used alongside the several `/UserInputService` VR functions and events.

Since `/VRService` only runs client-side, this function will only work when used in a `/LocalScript`.
@param pad The specified VRTouchpad.
@returns The mode of the specified VRTouchpad.