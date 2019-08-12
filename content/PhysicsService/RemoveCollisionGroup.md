Removes the collision group with the given name. If an invalid name is provided the function will not do anything, although if the reserved name “Default” is provided then the function will throw an error.

If there are any parts in the collision group when it is removed, these parts will still maintain the same collision group id. The physical behavior of parts in a removed group is undefined, so it is recommended to move any parts in a removed group to another group (such as the Default group).

This function will throw a runtime error in the following circumstances:

* The name "Default" is provided.

* The function is called from a client.Removes the collision group with the given name.