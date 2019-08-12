AwardBadge will grant a player a badge given a `Player`'s [UserId](https://developer.roblox.com/api-reference/property/Player/UserId) and a badge ID. In order to successfully award a badge, the following criteria must be met:

 - The player must be presently connected to the game.

 - The player must not already have the badge.*

 - Badges must be awarded on the server, i.e. from a `Script` or `ModuleScript` eventually required by a `Script`, instead of a `LocalScript`

 - Only Roblox game servers may award badges, i.e. badges cannot be awarded in Studio.

 - The badge must be awarded in a place that is part of the game associated with the badge (checked using [IsLegal](https://developer.roblox.com/api-reference/function/BadgeService/IsLegal))

 - The owner of the place must also own the badge, i.e. the owner must not have deleted the badge.

 - The owner of the badge must be subscribed to Builders Club

 - The badge must not have been disabled (checked using [IsDisabled](https://developer.roblox.com/api-reference/function/BadgeService/IsDisabled)).

A player may delete an awarded badge from their inventory and be awarded the badge again.

## See also

 - [BadgeService.GetBadgeInfoAsync](https://developer.roblox.com/api-reference/function/BadgeService/GetBadgeInfoAsync)

 - [BadgeService.AwardBadge](https://developer.roblox.com/api-reference/function/BadgeService/AwardBadge)

 - [BadgeService.UserHasBadgeAsync](https://developer.roblox.com/api-reference/function/BadgeService/UserHasBadgeAsync)
@param userId The `Player/UserId` of the user the badge is to be awarded to
@param badgeId The ID of the badge to be awarded
@returns True if the badge was rewarded successfully. 
@rbxts server