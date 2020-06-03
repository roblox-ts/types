A LocalScript is a Lua source container that runs Lua code on a client connected to a Roblox server. They are used to access client-only objects, such as the player's `Camera`. For code run through LocalScripts, the LocalPlayer property of the `Players` service will return the player whose client is running the script.

A LocalScript will **only** run Lua code if it is a descendant of one of the following objects:

* A Player's `Backpack`, such as a child of a `Tool`

* A Player's [character](https://developer.roblox.com/api-reference/property/Player/Character) model

* A Player's `PlayerGui`

* A Player's `PlayerScripts`.

* The `ReplicatedFirst` service