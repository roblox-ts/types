This function sets the custom [teleport GUI](https://developer.roblox.com/api-reference/class/ScreenGui) that will be shown to the local user during teleportation, prior to the teleport being invoked.

Note, the [teleport GUI](https://developer.roblox.com/api-reference/class/ScreenGui) will not be used if the destination place is in a different game. It will also not persist across multiple teleports and will need to be set prior to each one.

This function should only be used on the client. If the teleportation function is called from the server (as is the case with [TeleportService.TeleportPartyAsync](https://developer.roblox.com/api-reference/function/TeleportService/TeleportPartyAsync)) then this function should be called on the client prior to this. One way of doing this is listening to a `RemoteEvent` that fires several seconds before teleportation.

```lua
-- Client

local TeleportService = game:GetService("TeleportService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")

local localPlayer = Players.LocalPlayer
local teleportGui = Instance.new("ScreenGui") -- for demonstration purposes

-- this RemoteEvent needs to be created on the server and fired before teleporting
local teleportEvent = ReplicatedStorage:WaitForChild("TeleportPrepare")

-- set the teleport gui so we are ready
TeleportService:SetTeleportGui(teleportGui)

teleportEvent.OnClientEvent:Connect(function()
```

lua

-- show the gui prior to the teleport

local playerGui = localPlayer:WaitForChild("PlayerGui")

teleportGui.Parent = playerGui

```lua
end)
```

## Loading screen

During a teleport, whilst the destination place is loading, the *customLoadingScreen* is parented to the `CoreGui`. Once the place has loaded the [loading screen](https://developer.roblox.com/api-reference/class/ScreenGui) is [parented](https://developer.roblox.com/api-reference/property/Instance/Parent) to *nil*.

This `ScreenGui` can be fetched at the destination place using [TeleportService.GetArrivingTeleportGui](https://developer.roblox.com/api-reference/function/TeleportService/GetArrivingTeleportGui), allowing you to parent it to the `PlayerGui` and perform your own transitions.

You are advised to also [parent](https://developer.roblox.com/api-reference/property/Instance/Parent) the `ScreenGui` to the `PlayerGui` in the start place whilst the teleport is initiating.
@param gui The loading `ScreenGui` that is to be displayed during teleportation

@returns This function does not return anything!
@rbxts client