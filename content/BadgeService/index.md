This is the BadgeService class that provides information on badges. Badges are used within games and across the platform to track a player's achievements and activity.

You can create and edit badges for your games directly from the website, and award them to players for in-game activities and achievements such as playtime, high scores and kill streaks, as well as more novelty badges such as for *meeting the creator*. Upon earning a badge, it is added to their inventory and displayed on their profile page.

Many of the service's functions, such as [BadgeService.GetBadgeInfoAsync](https://developer.roblox.com/api-reference/function/BadgeService/GetBadgeInfoAsync) and [BadgeService.UserHasBadgeAsync](https://developer.roblox.com/api-reference/function/BadgeService/UserHasBadgeAsync) fire asynchronously - returning once they receive a response as your script continues to execute.

You can also check if a player already earned a badge using [AwardBadge](https://developer.roblox.com/api-reference/function/BadgeService/AwardBadge). Besides determining ownership to check if a badge needs to be awarded, you can also use badge ownership as a requirement for in-game features .