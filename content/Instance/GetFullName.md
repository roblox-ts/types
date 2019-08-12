Returns a string describing the `Instance`'s ancestry. The string is a concatenation of the [Name](https://developer.roblox.com/api-reference/property/Instance/Name) of the object and its ancestors, separated by periods. The `DataModel` (`game`) is not considered. For example, a `Part` in the `Workspace` may return `Workspace.Part`.

When called on an `Instance` that is not a descendant of the `DataModel`, this function considers all ancestors up to and including the topmost one without a [Parent](https://developer.roblox.com/api-reference/property/Instance/Parent).

This function is useful for logging and debugging. You shouldn't attempt to parse the returned string for any useful operation; this function does not escape periods (or any other symbol) in object names. In other words, although its output often appears to be a valid Lua identifier, it is not guaranteed.
@returns The full name of the `Instance`.