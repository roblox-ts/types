This yield function makes the [character's](https://developer.roblox.com/api-reference/class/Character) look match that of the passed in `HumanoidDescription`. A copy of the passed look will then be cached in the `Humanoid` as the current HumanoidDescription for the Humanoid.

It allows you to quickly set and store a character's appearance using a stored look without having to set each property every time.

## See also

 - [Humanoid.GetAppliedDescription](https://developer.roblox.com/api-reference/function/Humanoid/GetAppliedDescription), returns the HumanoidDescription currently applied to the Humanoid

 - [Players.GetHumanoidDescriptionFromUserId](https://developer.roblox.com/api-reference/function/Players/GetHumanoidDescriptionFromUserId), gives back a HumanoidDescription which describes the Avatar for the passed in user

 - [Players.GetHumanoidDescriptionFromOutfitId](https://developer.roblox.com/api-reference/function/Players/GetHumanoidDescriptionFromOutfitId), gives back a HumanoidDescription whose parameters are initialized to match that of the passed in server-side outfit asset

 - [Player.LoadCharacterWithHumanoidDescription](https://developer.roblox.com/api-reference/function/Player/LoadCharacterWithHumanoidDescription), spawns a player with the look from the HumanoidDescription Instance passed in
@param humanoidDescription The `HumanoidDescription` Instance which you want to set the character to match
@returns void