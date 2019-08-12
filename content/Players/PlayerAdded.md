The PlayerAdded event fires when a player enters the game. This is used to fire an event when a player joins a game, such as loading the player's saved `GlobalDataStore` data.

This can be used alongside the [Player.PlayerRemoving](https://developer.roblox.com/search#stq=PlayerRemoving) event, which fires when a player is about to leave the game. For instance, if you would like print a message every time a new player joins or leaves the game:

```lua
local Players = game:GetService("Players")

Players.PlayerAdded:Connect(function(player)
	print(player.Name + " joined the game!")
end)

Players.PlayerRemoving:Connect(function(player)
	print(player.Name + " left the game!")
end)
```

If you want to track when a player's character is added or removed from the game, such as when a player respawns or dies, you can use the [Player.CharacterAdded](https://developer.roblox.com/api-reference/event/Player/CharacterAdded) and [Player.CharacterRemoving](https://developer.roblox.com/api-reference/event/Player/CharacterRemoving) functions.

Notes

----------

 - Up until recently, this event didn't work on the client (in `Localscript`s), but this has been changed

 - This event does not work as expected in *solo mode*, because the player is created before scripts that connect to PlayerAdded run. To handle this case, as well as cases in which the script is added into the game after a player enters, create an OnPlayerAdded function that you can call to handle a player's entrance.