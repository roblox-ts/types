Fired when the TeleportState of a player changes. This event is useful for detecting whether a teleportation was successful.

## What is the TeleportState?

When a teleportation request is made using `TeleportService`, there are a series of stages before the `Player` is teleported. The current stage is represented by the [Enum.TeleportState](https://developer.roblox.com/search#stq=TeleportState) value which is given by OnTeleport. See below for a practical example of this.