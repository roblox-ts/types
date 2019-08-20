This event fires when points have been successfully awarded to a player, whilst also passing along the updated balance of points the player has in the current game and all games.

When a player is awarded points successfully the below example would print the userId and their new point balance. If, for example, the Roblox account was awarded thirty points (and had none to begin with)

> User: 1 has now earned 30 (+30) points in the current game, now making

> their total balance

would be printed.

```lua
local function pointsAwarded(userId, pointsAwarded, userBalanceInGame, userTotalBalance)
	print("User: " .. userId .. " has now earned " .. userBalanceInGame .. " (+" .. pointsAwarded ..") points in the current game, now making their total balance " .. userTotalBalance)
end

game:GetService("PointsService").PointsAwarded:Connect(pointsAwarded)
```
