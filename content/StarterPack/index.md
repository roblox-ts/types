A service-level container whose contents are copied into each `Player`'s `Backpack` when the player spawns. It is generally used to hold `Tools`, but is sometimes used to hold `LocalScript`s to ensure that each player gets a copy.

When a player's character spawns, the contents of the StarterPack and their `StarterGear` are copied into their `Backpack`. Once a character dies, the `Backpack` is removed and a new one is created -- populating it using the contents of `StarterPack` and `StarterGear`.

The StarterPack is used to determine a set of `Tool`s that *all* players will spawn with. If a developer wants to ensure that certain `Tool`s are available to specific players, then they will need to parent the `Tool`s directly to the player's `Backpack` instead.

Note: while normally the contents of `StarterPack` are predefined, the contents can be changed while the game is running by adding and removing `Tool`s accordingly. These updates will pass onto a player's backpack when they respawn and their backpacks are reloaded. Changes to the StarterPack should be made by the server.

A tool can be added to the StarterPack using the following code.

    Tool.Parent = game:GetService("StarterPack")