The PreferredPlayers property determines the number of players to which Roblox's matchmaker will fill servers. This is number should be less than the maximum number of players supported by the game in order to leave some spaces for additional players (such as friends or those following another player) to join.

This property can be set from the place settings' *Access* tab on the site. It cannot be set through `Script`s or `LocalScript`s in-game.

When a player press the Play button to join a game server, Roblox attempts to match that player to a server such that the player count will try not to exceed PreferredPlayers. If a friend (or friends) of the player are in a server that is not full, Roblox prioritizes that server instead.

## Example

There are 8 players in a server where the [Player.MaximumPlayers](https://developer.roblox.com/search#stq=MaximumPlayers) is 10 and the PreferredPlayers is 8. A player presses the play button:

* If the player has **at least one friend** in the server, Roblox selects the already-existing server so the player can play with their friend.

* If the player has **no friends** in the server, a new server is started since the existing server has met the number of PreferredPlayers (the player could still join the server by manually selecting it or following another user).