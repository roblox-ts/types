If set, the player will respawn at the given `SpawnLocation`. This property can only be set through Lua and must contain a reference to a valid `SpawnLocation`, which must meet the following criteria:

 - Descendant of `Workspace`

 - [SpawnLocation.TeamColor](https://developer.roblox.com/api-reference/property/SpawnLocation/TeamColor) is set to the [Player.TeamColor](https://developer.roblox.com/api-reference/property/Player/TeamColor) or [SpawnLocation.Neutral](https://developer.roblox.com/api-reference/property/SpawnLocation/Neutral) is set to true

If RespawnLocation is not set to a valid `SpawnLocation` then the default spawning logic will apply. For more information on this see the page for `SpawnLocation`.

## Alternatives to RespawnLocation

 - A `Player` will spawn from [SpawnLocations](https://developer.roblox.com/api-reference/class/SpawnLocation) belonging to their team. In some cases it may be simpler to change the [Player's](https://developer.roblox.com/api-reference/class/Player) [Player.Team](https://developer.roblox.com/api-reference/property/Player/Team) instead. This method also allows the `Player` to respawn from multiple [SpawnLocations](https://developer.roblox.com/api-reference/class/SpawnLocation).

 - Developers may wish to implement their own custom spawn logic, using [Model.SetPrimaryPartCFrame](https://developer.roblox.com/api-reference/function/Model/SetPrimaryPartCFrame) to move the [Player.Character](https://developer.roblox.com/api-reference/property/Player/Character) manually.