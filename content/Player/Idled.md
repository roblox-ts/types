This event is usually fired two minutes after the game engine classifies the [player](https://developer.roblox.com/api-reference/class/Player) as idle. Time is the amount of seconds since this point.

This can be used to track when a player has been idled for approximately two minutes - which can be useful for implementing away from keyboard (AFK) features into a game.

When the game engine classifies a player as idle, this event is called after two minutes. After every check, if the player is still idled, the event will continue to fire until the check reveals the player is no longer idle.

This event is used by Roblox to automatically disconnect players that have been idle for at least 20 minutes. If you would like to track when this disconnect occurs, considering using [Players.PlayerRemoving](https://developer.roblox.com/api-reference/event/Players/PlayerRemoving) alongside this event.