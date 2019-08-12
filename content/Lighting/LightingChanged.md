This event fires when a `Lighting` property is changed or a `Sky` is added or removed from `Lighting`.

Although this event fires when most properties of `Lighting` are changed, developers should be aware of the few exceptions:

 - Changing [Lighting.GlobalShadows](https://developer.roblox.com/api-reference/property/Lighting/GlobalShadows) will not fire this event

 - The fog properties, [Lighting.FogColor](https://developer.roblox.com/api-reference/property/Lighting/FogColor), [Lighting.FogStart](https://developer.roblox.com/api-reference/property/Lighting/FogStart) and [Lighting.FogEnd](https://developer.roblox.com/api-reference/property/Lighting/FogEnd) will not fire this event

In cases where this behavior is not desired, the [Instance.Changed](https://developer.roblox.com/api-reference/event/Instance/Changed) event or [Instance.GetPropertyChangedSignal](https://developer.roblox.com/api-reference/function/Instance/GetPropertyChangedSignal) function can be used.