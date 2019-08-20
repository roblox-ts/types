If true, the `Instance` and its descendants cannot be indexed or edited by a `Script` or `LocalScript` and will throw an error if it is attempted.

This property currently cannot be changed by developers.

This property is primarily intended to protect objects in the `CoreGui` service from being altered by users in an unauthorized manner. Developers looking to alter the `CoreGui` should use [StarterGui.SetCore](https://developer.roblox.com/api-reference/function/StarterGui/SetCore) and [StarterGui.GetCore](https://developer.roblox.com/api-reference/function/StarterGui/GetCore).