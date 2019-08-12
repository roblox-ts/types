This function sets whether the `CoreGui` element associated with the given [Enum.CoreGuiType](https://developer.roblox.com/search#stq=CoreGuiType) is enabled or disabled.

The top bar can not be disabled using this function. To disable the top bar, set *TopbarEnabled* to *false* using [StarterGui.SetCore](https://developer.roblox.com/api-reference/function/StarterGui/SetCore). This will also disable the element associated with all [CoreGuiTypes](https://developer.roblox.com/search#stq=CoreGuiType).

For more information on how to use this function, see the article on [disabling the game interface](https://developer.roblox.com/search#stq=Disabling%20Parts%20of%20Game%20Interface).
@param coreGuiType The given `Enum/CoreGuiType`
@param enabled Whether to enable or disable the given `Enum/CoreGuiType`