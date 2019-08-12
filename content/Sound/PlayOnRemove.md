When true, the `Sound` will play when it is removed from the game.

Note the sound will play when the [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) property of the `Sound` or one of its ancestors is set to nil. This means all of the following will cause the sound to play when PlayOnRemove is true. Note, this includes [Instance.Destroy](https://developer.roblox.com/api-reference/function/Instance/Destroy) as the destroy function sets the parent to nil.

    sound:Destroy()

    sound.Parent = nil

    sound.Parent.Parent = nil