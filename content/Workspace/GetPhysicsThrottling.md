Returns an integer, between 0 and 100, representing the percentage of real-time that physics simulation is currently being throttled to.

This function can be used to determine whether, and to what degree, physics throttling is occurring.

## What is physics throttling?

Physics throttling occurs when the physics engine detects it cannot keep up with the game in realtime. When physics is being throttled, it will update less frequently causing `BasePart`s to appear to move slower.

Without throttling, the physics simulation would fall further behind out of sync with the game. This can lead to lower frame rates and other undesirable behavior.

Objects associated with `Humanoid`s are exempt from physics throttling.

See also [Workspace.SetPhysicsThrottleEnabled](https://developer.roblox.com/api-reference/function/Workspace/SetPhysicsThrottleEnabled).

## Demonstrating physics throttling

Developers should always avoid creating places that overload the physics engine, as it leads to sub-par experience for players. Those wishing to simulate physics throttling for research purposes however, need only create a lot of `Part`s very quickly.

```lua
local i = 0
while true do
	i = i + 1
	if i % 5 == 0 then
		wait()
	end
	local part = Instance.new("Part", workspace)
end
```

@returns The percentage of real-time that physics simulation is currently being throttled to.