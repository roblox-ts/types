StarterGear is a container that is automatically inserted into each `Player` when the player joins the game. When a player spawns, the contents of that player's StarterGear is copied into the player's `Backpack`. Additionally,  when a player connects to a game that permits gear, all of the appropriate gear `Tool` objects that the player owns are inserted into that player's StarterGear.

Unlike `StarterPack`, StarterGear is not a service but rather a child of each `Player` object -- this means that its contents are player-specific so that each player can have different `Tool`s within their `StarterGear`. It is not replicated to any client, including the owning player.

## Accessing StarterGear

Listening to the [Players.PlayerAdded](https://developer.roblox.com/api-reference/event/Players/PlayerAdded) event is useful for

```lua
local Players = game:GetService("Players")

local toolExamplePrefab = Instance.new("Tool")
toolExamplePrefab.Name = "Example Tool"

-- Accessing StarterGear from Server Script
local function onPlayerAdded(player)
	-- Wait for the StarterGear to be added
	local starterGear = player:WaitForChild("StarterGear")
	-- Add a Tool to the StarterGear
	local toolExample = toolExamplePrefab:Clone()
	toolExample.Parent = starterGear
end

Players.PlayerAdded:connect(onPlayerAdded)
```

## Allowing Gear

Whether or not gear can be permitted is determined in a place's settings page under 'Permissions'. On the permissions page gear can be disabled and enabled by genre and type. To disable gear, ensure all the gear types are not selected.

Individual gear can also be added to a game using the 'Add to game' feature in the Roblox catalog. This option can be found on the page of any gear that is on sale. When gear is added to a game in this manner it will appear under the 'Store' heading on the game's page. The owner of the game (group or user) receives a commission when gear is sold in this manner.

## Gameplay Considerations

Before adding any gear to a game, consider the implication of doing so. Gear includes `Script`s and allows the player to perform actions that the developer may not have considered. For example, a navigational gear may allow the player to access a part of the map the developer does not want to be accessed. Weapons allow players with gear to damage other players, possibly without the ability to retaliate. Always play-test games after adding gear to them to make sure there are no abuse cases.