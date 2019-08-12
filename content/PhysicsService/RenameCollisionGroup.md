Renames the specified collision group. The first argument of this function is the name of the group to rename, the second argument is the new name for the group. If the specified group does not exist, then this function will not do anything.

The naming conventions for the new name follow the same rules as if the group was being created with [PhysicsService.CreateCollisionGroup](https://developer.roblox.com/api-reference/function/PhysicsService/CreateCollisionGroup). The new name cannot be "Default", and it cannot contain the special characters "/" or "^".

This function will throw a runtime error in the following circumstances:

* Invalid or empty name provided for either argument.

* The function is called from a client.Renames specified collision group.