This AdService class was historically a service used to display mobile video ads as a form of game monetization. It has been decommissioned and is no longer operational.

![iPad displaying an ad](https://developer.roblox.com/assets/5c3e6293ae0aa2bf7f3a52fe/AdserviceIPad.png)

It allowed game creators to utilize a the service and display video ads to mobile players on supported iOS and Android devices. Players were able to view up to 5 ads per hour across the site.

## Best Practices

 - You couldn’t play an ad more than five times in an hour, in any mobile instance.

 - [GUIs](https://developer.roblox.com/api-reference/class/GuiObject) were extremely important in getting your ads out. They made sure players knew they were seeing an ad and that gameplay would begin once it was over. Particularly something that said, “and now a word from our sponsor,” or “gameplay sponsored by…”

 - You had to make sure players inside your game didn’t take damage or get knocked out while they were watching an ad (this could be as simple as giving them a forcefield while the ad plays).

 - It was important to always show ads when it didn’t interfere with gameplay (like between rounds, before the game starts, or after a player gets knocked out).

## Benefits

Implementing video ad impressions in mobile gameplay sessions offers a variety of positive things for Roblox developers.

The more hits your ad got, the more ROBUX you earned (at a rate of one ROBUX per 20 impressions). So if you were trying to utilize the heavy traffic you received in your game, it was recommended to using the API to call the commercial before your game started. For those who already had a hit game, this this could have functioned as supplemental income.

Thinking of the bigger picture. You could tie the API call to, say, a button inside your game, which would only play the ad when pressed. Many Roblox players wanted to earn exclusive items for your game, but maybe couldn't afford them. Perhaps you could tie one of those items into the ad — couldn’t afford the Green Balloon? Here was another option: watch a 30 second ad. The player got the item, you got the impression, and the cycle continued that way. Maybe your game was round-based. Why not play an ad between rounds? That was easily 20 impressions just while waiting for the next level to load. And more ad impressions meant more ROBUX in your pocket.