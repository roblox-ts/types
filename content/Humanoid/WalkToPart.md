![A visualization of how WalkToPart changes the behavior of WalkToPoint][1]

WalkToPart is a reference to a part that the Humanoid is trying to reach. This property is normally set when a part is passed as the 2nd argument of the Humanoid's [Humanoid.MoveTo](https://developer.roblox.com/api-reference/function/Humanoid/MoveTo) function.

When WalkToPart is set and a humanoid is actively trying to reach the part, it will keep updating its Vector3 goal to be the position of the part, plus the [Humanoid.WalkToPoint](https://developer.roblox.com/api-reference/property/Humanoid/WalkToPoint) translated in object space relative to the rotation of the part.

This can be described in Lua as:

`goal = humanoid.WalkToPart.CFrame:pointToObjectSpace(humanoid.WalkToPoint)`

Caveats

----

* Setting the value of WalkToPart isn't sufficient enough to make a humanoid start following a part.

 * The Humanoid is prompted to start attempting to reach a goal when the value of WalkToPoint is changed.

 * This may be changed in the future.

* The *reach goal* state of a humanoid will timeout after 8 seconds if it doesn't reach its goal.

 * This is done so that NPCs won't get stuck waiting for [Humanoid.MoveToFinished](https://developer.roblox.com/api-reference/event/Humanoid/MoveToFinished) to fire.

 * If you don't want this to happen, you should repeatedly call MoveTo so that the timeout will keep resetting.

[1]: https://developer.roblox.com/assets/bltc76671f1665d7da0/WalkToPart.gif