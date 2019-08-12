A service which allows the defaults of properties in the `Player` object to be set. When a player enters the server, each property of the player object is set to the current value of the corresponding property in StarterPlayer.

Additionally, you may add four objects to this service:

* A `StarterPlayerScripts` instance, with scripts that run once for each player.

* A `StarterCharacterScripts` instance, with scripts to add to each player's character every time they spawn.

* A `Humanoid` instance named **StarterHumanoid**, which will be used as the default humanoid for each player's character.

* A `Model` instance named **StarterCharacter**, which will be used as the character model for all players

A typical structure may look something like this:

![StarterPlayer Tree][1]

[1]: https://developer.roblox.com/assets/5b5b57ba7eac3e673d5e5700/StarterPlayerTree.png