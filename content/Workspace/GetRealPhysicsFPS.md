Returns the number of frames per second that physics is currently being simulated at.

## Using GetRealPhysicsFPS to combat exploiters

A common use of this function is to detect if exploiters are increasing their local physics frame rate to move faster. This is generally done by comparing the result returned by a client's GetRealPhysicsFPS to a maximum that will not be breached in normal circumstances (usually 65 or 70). If this limit is breached, developers can use the [Player.Kick](https://developer.roblox.com/api-reference/function/Player/Kick) function to remove that `Player` from the game. It is important to remember that, although this practice may be effective sometimes, client-side anti-exploiter measures are never 100% reliable.
@returns Returns the number of frames per second that physics is currently being simulated at.