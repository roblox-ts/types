Sets whether or not the `SpawnLocation` is enabled. When disabled players cannot spawn at the `SpawnLocation` and the [SpawnLocation.AllowTeamChangeOnTouch](https://developer.roblox.com/api-reference/property/SpawnLocation/AllowTeamChangeOnTouch) functionality is disabled.

This property provides the most convenient way of preventing `Player`s from spawning at a spawn.

Note, although team changing on touch using [SpawnLocation.AllowTeamChangeOnTouch](https://developer.roblox.com/api-reference/property/SpawnLocation/AllowTeamChangeOnTouch) is disabled when Enabled is set to false, other touched events using `BasePart.Touched` will still fire.