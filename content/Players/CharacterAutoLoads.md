The CharacterAutoLoads `Players` property indicates whether `Character`s will respawn automatically. The default value is *true*.

If this property is disabled (*false*), players `Characters` will not spawn until the [Player.LoadCharacter](https://developer.roblox.com/api-reference/function/Player/LoadCharacter) function is called for each `Player` - including when players join the game.

This can be useful in games where players have finite lives, such as competitive games in which players do not respawn until a game round ends.