UserHasBadgeAsync checks whether a player owns a badge given the `Player`'s [UserId](https://developer.roblox.com/api-reference/property/Player/UserId) and the badge's id. Such a query can only be made under the following conditions:

  - This function must be called from the server, i.e. in a `Script` or `ModuleScript` eventually required by a Script.

  - The player in question must be present in the server.

Any badge for any game can be queried, no matter who created the badge or which game it is used for. There are a number of applications of UserHasBadge:

 - A restricted door that can only be opened by players who own a badge (see code sample)

 - A basic way of determining if a player has played another game

 - Very simple progress saving. However, it is recommended developers use `DataStoreService` for saving as it is more scale-able and robust (remember - players can delete their own badges).

## See also

 - [BadgeService.GetBadgeInfoAsync](https://developer.roblox.com/api-reference/function/BadgeService/GetBadgeInfoAsync)

 - [BadgeService.AwardBadge](https://developer.roblox.com/api-reference/function/BadgeService/AwardBadge)
@param userId The UserId of the Player who will be checked for ownership of the specified badge.
@param badgeId The badgeId of the badge whose ownership will be checked.
@returns A bool indicating if the specified user has the specified badge.
@rbxts server