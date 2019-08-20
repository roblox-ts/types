Whether or not a spawn is affiliated with a specific team. This means that any `Player`, of any `Team`, can spawn on it if this property is set to true.

If Neutral is set to false, only players whose [Player.TeamColor](https://developer.roblox.com/api-reference/property/Player/TeamColor) is equal to [SpawnLocation.TeamColor](https://developer.roblox.com/api-reference/property/SpawnLocation/TeamColor) can use the `SpawnLocation`.

If [SpawnLocation.AllowTeamChangeOnTouch](https://developer.roblox.com/api-reference/property/SpawnLocation/AllowTeamChangeOnTouch) is true [Player.Neutral](https://developer.roblox.com/api-reference/property/Player/Neutral) will be set to this property upon contact with the spawn.