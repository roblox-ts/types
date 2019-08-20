The SetTouchpadMode function sets the mode of the specified [Enum.VRTouchpad](https://developer.roblox.com/search#stq=VRTouchpad) to the specified [Enum.VRTouchpadMode](https://developer.roblox.com/search#stq=VRTouchpadMode).

This can be used to change the user's virtual reality (VR) touchpad mode so that the user interacts with the game different using the touchpad. For more information about the different types of modes, see the [Enum.VRTouchpadMode](https://developer.roblox.com/search#stq=VRTouchpadMode) page.

This can also be used alongside the several `/UserInputService` VR functions and events.

Since `/VRService` only runs client-side, this function will only work when used in a `/LocalScript`.
@param pad The specified VRTouchpad you want to set the mode of.
@param mode The mode you want to set the specified VRTouchpad to.
@returns void