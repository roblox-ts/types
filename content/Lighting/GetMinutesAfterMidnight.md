Returns the number of minutes that have passed after midnight for the purposes of lighting.

This number will be nearly identical to [Lighting.ClockTime](https://developer.roblox.com/api-reference/property/Lighting/ClockTime) multiplied by 60.

This number will not always be equal to the value given in [Lighting.SetMinutesAfterMidnight](https://developer.roblox.com/api-reference/function/Lighting/SetMinutesAfterMidnight) as it returns minutes after midnight in the current day.

For `Lighting`s time formatted as a string, see [Lighting.TimeOfDay](https://developer.roblox.com/api-reference/property/Lighting/TimeOfDay).
@returns The number of minutes after midnight.