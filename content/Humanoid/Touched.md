This event fires when one of the [Humanoid's](https://developer.roblox.com/api-reference/class/Humanoid) limbs come in contact with another `BasePart`.

The `BasePart` the [Humanoid's](https://developer.roblox.com/api-reference/class/Humanoid) limb is touching along with the limb itself is given.

This event will not fire when limbs belonging to the `Humanoid` come into contact with themselves.

## Alternatives to the Humanoid Touched event

Although the Humanoid.Touched event is useful, developers should consider if there are alternatives that suit their needs better before using it.

 - In most cases it is advised to connect a [BasePart.Touched](https://developer.roblox.com/api-reference/event/BasePart/Touched) event for [BaseParts](https://developer.roblox.com/api-reference/class/BasePart) of interest instead. This is because the Humanoid Touched event will constantly fire when the humanoid is moving. For example, in a dodgeball game it would be more practical to connect a touched event for the balls rather than the humanoid

 - For developers trying to work out when the `Humanoid` has landed on the ground, the [Humanoid.StateChanged](https://developer.roblox.com/api-reference/event/Humanoid/StateChanged) event is more suitable. Alternatively, developers can use [Humanoid.FloorMaterial](https://developer.roblox.com/api-reference/property/Humanoid/FloorMaterial) to see if the `Humanoid` is standing on anything

## Notes

 - Connecting to this event will cause a `TouchTransmitter` to be created in every limb

 - The is currently no equivalent of [BasePart.TouchEnded](https://developer.roblox.com/api-reference/event/BasePart/TouchEnded) for [Humanoids](https://developer.roblox.com/api-reference/class/Humanoid)