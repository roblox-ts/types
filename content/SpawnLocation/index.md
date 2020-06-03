SpawnLocations, or "spawns" determine where a `Player` respawns when they die. They can be configured to allow only certain players to use each spawn, using [Teams](https://developer.roblox.com/api-reference/class/Team). They also control how [ForceFields](https://developer.roblox.com/api-reference/class/ForceField) are set up for newly-spawned players.

SpawnLocations can be used as checkpoints, such as in an obstacle course, using the [SpawnLocation.AllowTeamChangeOnTouch](https://developer.roblox.com/api-reference/property/SpawnLocation/AllowTeamChangeOnTouch) property, so that when a player touches it, they will change teams to the SpawnLocation's team. In this case, only the first `Team` should have [Team.AutoAssignable](https://developer.roblox.com/api-reference/property/Team/AutoAssignable) set to true, else players will not start at the first checkpoint.

Note if a SpawnLocation is added to the `Workspace` in Studio with [SpawnLocation.Neutral](https://developer.roblox.com/api-reference/property/SpawnLocation/Neutral) set to false a Team will be created corresponding to [SpawnLocation.TeamColor](https://developer.roblox.com/api-reference/property/SpawnLocation/TeamColor) if it does not already exist. This behavior does not occur when spawns are created in-game using a `Script` or if the properties of the SpawnLocation are changed after already being added. It is recommended that developers always set up their teams manually and not rely on this behavior.

**Spawning Rules**

 - When [SpawnLocation.Neutral](https://developer.roblox.com/api-reference/property/SpawnLocation/Neutral) is set to false only [Players](https://developer.roblox.com/api-reference/class/Player) with [Player.TeamColor](https://developer.roblox.com/api-reference/property/Player/TeamColor) matching [SpawnLocation.TeamColor](https://developer.roblox.com/api-reference/property/SpawnLocation/TeamColor) will respawn above it

 - When [SpawnLocation.Neutral](https://developer.roblox.com/api-reference/property/SpawnLocation/Neutral) is set to true any Player can spawn above it regardless of [SpawnLocation.TeamColor](https://developer.roblox.com/api-reference/property/SpawnLocation/TeamColor)

 - If multiple eligible spawns are available to a `Player`, a random one will be chosen

 - Players will spawn at different points on top of a SpawnLocation, but currently, they may still spawn on top of each other if they spawn right after one and other