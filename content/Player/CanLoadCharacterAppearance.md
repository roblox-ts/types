The CanLoadCharacterAppearance `Player` property determines whether the character's appearance will be loaded when the player spawns. The default value of this property is set by [StarterPlayer.LoadPlayerAppearance](https://developer.roblox.com/search#stq=LoadPlayerAppearance).

If *true*, the character will load the appearance of the player corresponding to the player's [Player.CharacterAppearanceId](https://developer.roblox.com/api-reference/property/Player/CharacterAppearanceId).

If *false*, the player will spawn with a default appearance - a grey character model without any hats, shirts, pants, etc.

Attempting to set the property after the character has spawned will not change the character, you must call [Player.LoadCharacter](https://developer.roblox.com/api-reference/function/Player/LoadCharacter) to load the new appearance.