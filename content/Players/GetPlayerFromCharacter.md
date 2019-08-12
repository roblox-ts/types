This function returns the `Player` associated with the given [Player.Character](https://developer.roblox.com/api-reference/property/Player/Character), or `nil` if one cannot be found. It is equivalent to the following function:

```lua
local function getPlayerFromCharacter(character)
	for _, player in pairs(game:GetService("Players"):GetPlayers()) do
		if player.Character == character then
			return player
		end
	end
end
```

This method is often used when some event in player's character fires (such as their `Humanoid` [dying](https://developer.roblox.com/api-reference/event/Humanoid/Died)). Such an event might not directly reference the Player object, but this method provides easy access. The inverse of this function can be described as getting the Character of a Player. To do this, simply access the Character property.
@param character A character instance that you want to get the player from.
@returns A player instance corresponding to the character passed as input.