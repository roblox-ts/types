PhysicsService is a game service that has functions for working with **collision groups**, which define a set of parts that may or may not collide with parts assigned to other collision groups. Assign a part to a collision group using [SetPartCollisionGroup](https://developer.roblox.com/api-reference/function/PhysicsService/SetPartCollisionGroup). Collision groups and their relationships are saved to and loaded from file.

## Network Replication

Creating, deleting and modifying collision relationships between collision groups is limited to server-side `Script`s. However, client-side `LocalScript`s may only set individual parts' associated collision group.