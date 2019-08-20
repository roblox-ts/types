This function returns whether the given [Enum.CoreGuiType](https://developer.roblox.com/search#stq=CoreGuiType) is enabled or if it has been disabled using [StarterGui.SetCoreGuiEnabled](https://developer.roblox.com/api-reference/function/StarterGui/SetCoreGuiEnabled).

This function should be called on the client and is used by the core scripts to help determine which core GUI elements to show.

GetCoreGuiEnabled only returns *false* if the given [Enum.CoreGuiType](https://developer.roblox.com/search#stq=CoreGuiType) has been disabled using [StarterGui.SetCoreGuiEnabled](https://developer.roblox.com/api-reference/function/StarterGui/SetCoreGuiEnabled). Setting *TopbarEnabled* to *false* using [StarterGui.SetCore](https://developer.roblox.com/api-reference/function/StarterGui/SetCore) hides all [CoreGuiTypes](https://developer.roblox.com/search#stq=CoreGuiType) and does not affect the result of function.
@param coreGuiType The given `Enum/CoreGuiType`
@returns Whether the given `Enum/CoreGuiType` is enabled