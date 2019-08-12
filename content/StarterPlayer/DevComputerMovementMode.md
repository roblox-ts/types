The DevComputerMovementMove `StarterPlayer` property lets the developer overwrite the player's movement mode if the player is on a computer.

This is the default property for players joining the game. It can be changed for individual players by settings the [Player.DevComputerMovementMode](https://developer.roblox.com/api-reference/property/Player/DevComputerMovementMode).

If set to **UserChoice** then the player's movement mode will be determined by whatever the player set in the game settings. Otherwise, the mode will be set based on this property.

See [Enum.DevComputerMovementMode](https://developer.roblox.com/search#stq=DevComputerMovementMode) for the different movement modes available. Lets developer overwrite the player's movement mode if the player is on a computer.

## Note

This property has no affect on players not on a computer.