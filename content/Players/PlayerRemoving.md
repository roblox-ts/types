The PlayerRemoving event fires right before a `Player` is leaves the game. This event fires before [ChildRemoved](https://developer.roblox.com/api-reference/event/Instance/ChildRemoved) does on `Players`, and behaves somewhat similarly to [Instance.DescendantRemoving](https://developer.roblox.com/api-reference/event/Instance/DescendantRemoving). Since event fires before the actual removal of a `Player`, this event is useful to store player data using a `GlobalDataStore`.

This can be used alongside the [Player.PlayerAdded](https://developer.roblox.com/search#stq=PlayerAdded) event, which fires when a player joins the game. For instance, if you would like print a message every time a new player joins or leaves the game:

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