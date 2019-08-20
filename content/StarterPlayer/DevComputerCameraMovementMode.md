The DevComputerCameraMovementMode `StarterPlayer` property lets the developer overwrite the player's camera mode if the player is on a computer.

This is the default property for players joining the game. It can be changed for individual players by settings the [Player.DevComputerCameraMode](https://developer.roblox.com/api-reference/property/Player/DevComputerCameraMode).

If set to **UserChoice** then the player's camera movement mode will be determined by whatever the player set in the game settings. Otherwise, the mode will be set based on this property.

See [Enum.DevComputerCameraMovementMode](https://developer.roblox.com/search#stq=DevComputerCameraMovementMode) for the different camera modes available.

## Note

This property has no affect on players not on a computer.