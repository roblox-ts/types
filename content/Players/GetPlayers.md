This method returns a table of all presently connected `Player`. It functions the same way [Instance.GetChildren](https://developer.roblox.com/api-reference/function/Instance/GetChildren) would except that it only returns Player objects. It functions similarly to [Instance.GetChildren](https://developer.roblox.com/api-reference/function/Instance/GetChildren) when called on `Players`. 0 When used in conjunction with a for-loop, it is useful for iterating over all players in a game.

```lua
Players = game:GetService("Players")
for i, player in pairs(Players:GetPlayers()) do
	print(player.Name)
end
```

Scripts that connect to [Players.PlayerAdded](https://developer.roblox.com/api-reference/event/Players/PlayerAdded) are often trying to process every Player that connects to the game. This method is useful for iterating over already-connected players that wouldn't fire [PlayerAdded](https://developer.roblox.com/api-reference/event/Players/PlayerAdded). Using this method ensures that no player is missed!

```lua
local Players = game:GetService("Players")

local onPlayerAdded(player)
	print("Player: " .. player.Name)
end

for _, player in pairs(Players:GetPlayers()) do
	onPlayerAdded(player)
end
Players.PlayerAdded:Connect(onPlayerAdded)
```

@returns A table containing all the players in the server.