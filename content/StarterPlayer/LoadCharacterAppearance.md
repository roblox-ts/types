The LoadCharacterAppearance `StarterPlayer` property sets whether or not the appearance of a player's character should be loaded.

This property sets the default value of [Player.CanLoadCharacterAppearance](https://developer.roblox.com/api-reference/property/Player/CanLoadCharacterAppearance) for each player who joins the game.

Setting this to *false* results in the player having no clothes (including hats), body colors, body packages or anything else related to the appearance of the player. By default, this property is set to *true*.

Setting this to *true* results in the player loading the appearance corresponding to the player's [Player.CharacterAppearanceId](https://developer.roblox.com/api-reference/property/Player/CharacterAppearanceId).