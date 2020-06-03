The DevTouchCameraMovementMode `StarterPlayer` property lets the developer overwrite the player's camera mode if the player is on a touch device.

This is the default property for players joining the game. It can be changed for individual players by settings the [Player.DevTouchCameraMode](https://developer.roblox.com/api-reference/property/Player/DevTouchCameraMode).

If set to **UserChoice** then the player's camera movement mode will be determined by whatever the player set in the game settings. Otherwise, the mode will be set based on this property.

See [Enum.DevTouchCameraMovementMode](https://developer.roblox.com/search#stq=DevTouchCameraMovementMode) for the different camera modes available.

## Note

This property has no affect players not on a mobile device.