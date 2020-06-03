This function causes the `Humanoid` to attempt to walk to the given location by setting the [Humanoid.WalkToPoint](https://developer.roblox.com/api-reference/property/Humanoid/WalkToPoint) and [Humanoid.WalkToPart](https://developer.roblox.com/api-reference/property/Humanoid/WalkToPart) properties.

The *location* and *part* parameters correspond with what [Humanoid.WalkToPoint](https://developer.roblox.com/api-reference/property/Humanoid/WalkToPoint) and [Humanoid.WalkToPart](https://developer.roblox.com/api-reference/property/Humanoid/WalkToPart) will be set to.

If the *part* parameter is specified, the `Humanoid` will still attempt to walk to the point. However, if the part moves then the point the `Humanoid` is walking to will move to be at the same position relative to the part. For a visual demonstration of this, see below.

![A visualization of how WalkToPart changes the behavior of WalkToPoint][1]

The *reach goal* state of a humanoid will timeout after 8 seconds if it doesn't reach its goal. This is done so that NPCs won't get stuck waiting for [Humanoid.MoveToFinished](https://developer.roblox.com/api-reference/event/Humanoid/MoveToFinished) to fire. If you don't want this to happen, you should repeatedly call MoveTo so that the timeout will keep resetting.

[1]: https://developer.roblox.com/assets/bltc76671f1665d7da0/WalkToPart.gif
@param location The position to set `Humanoid/WalkToPoint` to
@param part The `BasePart` to set `Humanoid/WalkToPart` to