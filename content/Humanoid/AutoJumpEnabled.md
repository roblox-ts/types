AutoJumpEnabled sets whether or not the `Humanoid` will attempt to automatically jump over an obstacle it is walking towards.

Currently, this property only works when the following conditions are true:

* The Humanoid's character model is the [Player.Character](https://developer.roblox.com/api-reference/property/Player/Character) of a `Player`.

* The Player in question is using touch controls.

When a player's character spawns, the property's value matches the player's [Player.AutoJumpEnabled](https://developer.roblox.com/api-reference/property/Player/AutoJumpEnabled) property - which in turn matches the [StarterPlayer.AutoJumpEnabled](https://developer.roblox.com/api-reference/property/StarterPlayer/AutoJumpEnabled) property.