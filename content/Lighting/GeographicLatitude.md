The geographic latitude, in degrees, of the scene, influencing the result of `Lighting`s time on the position of the sun and moon.

When calculating the position of the sun, the earth's tilt is also taken into account.

Changing GeographicLatitude will alter the position of the sun at every [Lighting.TimeOfDay](https://developer.roblox.com/api-reference/property/Lighting/TimeOfDay). Developers looking to obtain the sun or moon's position should use [Lighting.GetSunDirection](https://developer.roblox.com/api-reference/function/Lighting/GetSunDirection) or [Lighting.GetMoonDirection](https://developer.roblox.com/api-reference/function/Lighting/GetMoonDirection).