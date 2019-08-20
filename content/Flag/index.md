The Flag is a unit spawned with a `FlagStand` object, and will respawn when captured.

When a player touches this object's Handle, which must be a child of the Flag object, which is a Part named "Handle", the flag will be added to the player's backpack and will appear in their hand. A player cannot select other weapons while carrying a flag, and can drop the flag at anytime by pressing "Backspace" on the keyboard.

If the player carrying a flag steps onto another FlagStand of a different team color, the flag will be removed from the player's backpack and a point will be added to the user's [leaderstats](https://developer.roblox.com/articles/Leaderboards), if provided. The flag will then regenerate at the originating flag stand.

This allows for 'Capture the Flag' to be made games very easily, which was the reason for its creation.