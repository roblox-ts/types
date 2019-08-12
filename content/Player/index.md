A Player object a client that is currently connected. These objects are added to the `Players` service when a new player connects, then removed when they eventually disconnect from the server.

The [Instance.Name](https://developer.roblox.com/api-reference/property/Instance/Name) property reflects the player's username. When saving information about a player, you should use their [Player.UserId](https://developer.roblox.com/api-reference/property/Player/UserId) since it is possible that a player can change their username.

There are several similar methods in the `Players` for working with Player objects. Use these over their respective `Instance` methods:

  - You can get a table of current Player objects using [Players.GetPlayers](https://developer.roblox.com/api-reference/function/Players/GetPlayers); again, use this instead of [Instance.GetChildren](https://developer.roblox.com/api-reference/function/Instance/GetChildren).

  - To detect the addition of Player objects, it is recommended to use the [Players.PlayerAdded](https://developer.roblox.com/api-reference/event/Players/PlayerAdded) event (instead of [Instance.ChildAdded](https://developer.roblox.com/api-reference/event/Instance/ChildAdded) on the `Players` service).

  - Similarly, you can detect the removal of Player objects using [Players.PlayerRemoving](https://developer.roblox.com/api-reference/event/Players/PlayerRemoving), which fires just **before** the Player is removed (instead of [Instance.ChildRemoved](https://developer.roblox.com/api-reference/event/Instance/ChildRemoved) which fires after). This is important if you are saving information about the player that might be removed or cleaned up on-removal.