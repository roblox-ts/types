Returns a coded string of the `Instance`s DebugId used internally by Roblox.

## Notes

 - This item is protected. Attempting to use it in a `Script` or `LocalScript` will cause an error

 - A debug ID is an ID used in debugging processes. It allows a debugger to read each instruction before an application processes it. All objects in Roblox act like processes and each run instructions (or 'code') that can be debugged if needed

 - This can be helpful for plugins which need to distinguish similar objects from one-another (such as objects that share the same name)
@param scopeLength The scope length.
@returns The Debug ID string.