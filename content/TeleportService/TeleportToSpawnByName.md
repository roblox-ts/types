This function behaves the same as [TeleportService.Teleport](https://developer.roblox.com/api-reference/function/TeleportService/Teleport) with the exception that it includes a *spawnName* parameter, causing the `Player` to spawn at the `SpawnLocation` of that name at the destination place.

The `SpawnLocation` must be valid for the `Player` to spawn on. For example, it must be [neutral](https://developer.roblox.com/api-reference/property/SpawnLocation/Neutral) or set to the same [TeamColor](https://developer.roblox.com/api-reference/property/SpawnLocation/TeamColor) as the `Team` the `Player` will be assigned to upon joining the game.

The `Player` will still spawn at the correct `SpawnLocation` even the teleport is to a place in a different universe. The spawn will also be correct if [Players.CharacterAutoLoads](https://developer.roblox.com/api-reference/property/Players/CharacterAutoLoads) is false in the destination place and the [Character](https://developer.roblox.com/api-reference/property/Player/Character) is loaded manually using [LoadCharacter](https://developer.roblox.com/api-reference/function/Player/LoadCharacter).

The teleportation will only affect the `SpawnLocation` used initially. If the `Player` respawns again subsequently it will not necessarily be at this `SpawnLocation`.

For more information about teleporting please see [TeleportService.Teleport](https://developer.roblox.com/api-reference/function/TeleportService/Teleport) or the [Articles.Teleporting Between Places](https://developer.roblox.com/search#stq=Teleporting%20Between%20Places) tutorial.
@param placeId The ID of the place to teleport to
@param spawnName The name of the `SpawnLocation` to spawn at
@param player The `Player` to teleport, if this function is being called from the client this defaults to the `Players/LocalPlayer`
@param teleportData Optional data to be passed to the destination place. Can be retrieved using `TeleportService/GetLocalPlayerTeleportData`
@param customLoadingScreen Optional custom loading screen to be placed in the `CoreGui` at the destination place. Can be retrieved using `TeleportService/GetArrivingTeleportGui`