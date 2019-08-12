GetListener returns `SoundService`s current listener type and what is set as listener.

The first result returned is the [Enum.ListenerType](https://developer.roblox.com/search#stq=ListenerType) of the listener, the second result is dependent on the listener type.

 - Camera ListenerType - Does not return a listener object as [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera) is always used

 - CFrame ListenerType - Returns the [DataType.CFrame](https://developer.roblox.com/search#stq=CFrame) used in [SoundService.SetListener](https://developer.roblox.com/api-reference/function/SoundService/SetListener)

 - ObjectPosition ListenerType - Returns the `BasePart` used in [SoundService.SetListener](https://developer.roblox.com/api-reference/function/SoundService/SetListener)

 - ObjectCFrame ListenerType - Returns the `BasePart` used in [SoundService.SetListener](https://developer.roblox.com/api-reference/function/SoundService/SetListener)

The listener can be changed using [SoundService.SetListener](https://developer.roblox.com/api-reference/function/SoundService/SetListener).

```lua
local SoundService = game:GetService("SoundService")
SoundService:SetListener(Enum.ListenerType.CFrame, CFrame.new(0, 0, 0))
local listenerType, listener = SoundService:GetListener()
print(listenerType, listener)
```

## What is a listener?

The `SoundService`'s listener determines the point from which audio in the game is being 'heard' by the player. For 3D `Sound`s (`Sound`s parented to a `BasePart` or `Attachment`) the listener influences the volume and left/right balance of a playing sound. Listeners have no influence on the playback of 2D `Sound`s as they have no position of emission.

By default, the listener is set to the [Workspace.CurrentCamera](https://developer.roblox.com/api-reference/property/Workspace/CurrentCamera). However, a range of different types of listeners can be used.
@returns The current `Enum/ListenerType` and what the listener has been set to. Dependent on `Enum/ListenerType` the listener could be a `BasePart`, a `DataType/CFrame` or nil.