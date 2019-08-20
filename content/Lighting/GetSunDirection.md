Returns a [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3) representing the direction of the sun from the position 0, 0, 0.

Note, when the sun has set and is no longer visible, the [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3) returned by this function will continue to point towards the sun below the map.

Developers looking to change the positioning of the sun should use the [Lighting.ClockTime](https://developer.roblox.com/api-reference/property/Lighting/ClockTime) or [Lighting.GeographicLatitude](https://developer.roblox.com/api-reference/property/Lighting/GeographicLatitude) properties.

A variant of this function exists for obtaining the direction of the moon, [Lighting.GetMoonDirection](https://developer.roblox.com/api-reference/function/Lighting/GetMoonDirection).
@returns `DataType/Vector3` representing the direction of the sun from the position 0, 0, 0.