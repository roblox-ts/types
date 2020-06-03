This function returns the *teleportData* the [Players.LocalPlayer](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) arrived into the place with. It can only be used on the client and can be called at any time.

For example, the following snippet would send the [DataModel.PlaceId](https://developer.roblox.com/api-reference/property/DataModel/PlaceId) and [DataModel.JobId](https://developer.roblox.com/api-reference/property/DataModel/JobId) in a dictionary:

```lua
local Players = game:GetService("Players")

local player = Players.LocalPlayer
local teleportData = {
```

lua

placeId = game.PlaceId,

jobId = game.JobId

```lua
}
TeleportService:Teleport(placeId, player, teleportData)
```

This data could then be retrieved upon arrival using the GetLocalPlayerTeleportData function as follows:

```lua
local TeleportService = game:GetService("TeleportService")

local teleportData = TeleportService:GetLocalPlayerTeleportData()
if teleportData then
```

lua

local placeId = teleportData.placeId

local jobId = teleportData.JobId

```lua
end)
```

If no *teleportData* was set in the teleportation function this function will return *nil*.

Note this function will not return teleportation settings set using [TeleportService.SetTeleportSetting](https://developer.roblox.com/api-reference/function/TeleportService/SetTeleportSetting), to retrieve these settings use [TeleportService.GetTeleportSetting](https://developer.roblox.com/api-reference/function/TeleportService/GetTeleportSetting).
@returns The *teleportData* the `Players/LocalPlayer` arrived into the place with
@rbxts client