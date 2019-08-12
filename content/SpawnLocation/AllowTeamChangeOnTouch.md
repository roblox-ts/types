Allows a `Player` to join the team by touching the `SpawnLocation`. When set to true, if a `Player` character comes into contact with the `SpawnLocation`, the player's [Player.TeamColor](https://developer.roblox.com/api-reference/property/Player/TeamColor) will be set to [SpawnLocation.TeamColor](https://developer.roblox.com/api-reference/property/SpawnLocation/TeamColor). [Player.Neutral](https://developer.roblox.com/api-reference/property/Player/Neutral) will also be set to [SpawnLocation.Neutral](https://developer.roblox.com/api-reference/property/SpawnLocation/Neutral) upon contact, meaning a player can also become neutral by touching a spawn location.

This will not function when [SpawnLocation.Enabled](https://developer.roblox.com/api-reference/property/SpawnLocation/Enabled) is set to false.

## Making Checkpoints

This feature is often used to make checkpoints in obstacle courses or similar games. See [Using Player Spawns](https://developer.roblox.com/search#stq=How%20to%20use%20Spawn%20Objects%20with%20Roblox%20Studio) for details.