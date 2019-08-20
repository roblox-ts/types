This function sends a request to the Roblox website asking whether a player is a friend of another user, given the [Player.UserId](https://developer.roblox.com/api-reference/property/Player/UserId) of that user.

Using this in a `Script`, as opposed to a `LocalScript`, will not get you the most up-to-date information. If a player leaves a group while they are in the game, it will still think they're in that group until they leave. However, this does not happen when used with a LocalScript.

This is because the method caches results, so multiple calls of the function on the same player with the same userId will yield the same result as when the method was first called with the given userId.

## See also

 - [Creating VIP Doors](https://developer.roblox.com/search#stq=Creating-VIP-Doors)
@param userId The `Player/UserId` of the specified player.
@returns A boolean indicating whether a player is a friend of the specified user.