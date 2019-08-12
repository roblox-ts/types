The TeleportService is responsible for transporting [Players](https://developer.roblox.com/api-reference/class/Player) between [places](https://developer.roblox.com/search#stq=Place) and servers.

‘Teleporting’ in Roblox, describes the transportation of [Players](https://developer.roblox.com/api-reference/class/Player) between different places and servers. TeleportService provides a range of functions allowing single or groups of users to be teleported. As Roblox [games](https://developer.roblox.com/search#stq=Multi%20Place%20Games) can contain multiple places, you can use the TeleportService to teleport players between different levels.

## Which teleport function should I use?

A variety of teleportation functions are available and are all suitable for different circumstances:

 - [Teleport](https://developer.roblox.com/api-reference/function/TeleportService/Teleport) for teleporting a single `Player` to a place

 - [TeleportToSpawnByName](https://developer.roblox.com/api-reference/function/TeleportService/TeleportToSpawnByName) for teleporting a single `Player` to a place, spawning at a particular `SpawnLocation`

 - [TeleportToPlaceInstance](https://developer.roblox.com/api-reference/function/TeleportService/TeleportToPlaceInstance) for teleporting a single `Player` to a specific server instance in a place that is part of the same game

 - [TeleportService.TeleportPartyAsync](https://developer.roblox.com/api-reference/function/TeleportService/TeleportPartyAsync) for teleporting a group of [Players](https://developer.roblox.com/api-reference/class/Player) to one server in a place that is part of the same game

 - [TeleportService.TeleportToPrivateServer](https://developer.roblox.com/api-reference/function/TeleportService/TeleportToPrivateServer) for teleporting a group of [Players](https://developer.roblox.com/api-reference/class/Player) to a reserved server created using [TeleportService.ReserveServer](https://developer.roblox.com/api-reference/function/TeleportService/ReserveServer)