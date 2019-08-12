The DevTouchMovementMode `StarterPlayer` property lets the developer overwrite the player's movement mode if the player is on a touch device.

This is the default property for players joining the game. It can be changed for individual players by settings the [Player.DevTouchMovementMode](https://developer.roblox.com/api-reference/property/Player/DevTouchMovementMode).

If set to **UserChoice** then the player's movement mode will be determined by whatever the player set in the game settings. Otherwise, the mode will be set based on this property.

See [Enum.DevTouchMovementMode](https://developer.roblox.com/search#stq=DevTouchMovementMode) for the different movement modes available. Lets developer overwrite the player's movement mode if the player is on a touch device.

## Note

This property has no affect on players not on a touch enabled device.