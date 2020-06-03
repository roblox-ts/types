GetInstanceRemoved is given a tag (a string) and returns a signal which fires under two conditions:

   - The tag is removed from an object within the `DataModel` (game) using [CollectionService.RemoveTag](https://developer.roblox.com/api-reference/function/CollectionService/RemoveTag)

   - An object with the given tag is removed as a descendant of the `DataModel`, e.g. by un-setting [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) or similar

Subsequent calls to this method with the same tag return the same signal object. The signal is useful for cleaning up resources used by objects that once had tags, such as disconnecting connections.

See also [CollectionService.GetInstanceAddedSignal](https://developer.roblox.com/api-reference/function/CollectionService/GetInstanceAddedSignal), which returns an event that fires under similar conditions.