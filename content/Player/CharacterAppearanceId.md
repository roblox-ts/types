This property determines the user ID of the account whose character appearance is used for a player's `character. By default, this property is the `Player`'s [Player.UserId](https://developer.roblox.com/api-reference/property/Player/UserId), which uses the player's avatar as they have created it on the Roblox website.

Changing this property to the user ID of another account will cause the player to spawn with that account's appearance (hats, shirt, pants, etc).

Games can also toggle whether or not a player's character appearance is loaded in game by changing the [StarterPlayer.LoadCharacterAppearance](https://developer.roblox.com/api-reference/property/StarterPlayer/LoadCharacterAppearance) property.