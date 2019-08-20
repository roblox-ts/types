GetInstanceAdded is given a tag (a string) and returns a signal which fires under two conditions:

   - The tag is assigned to an object within the `DataModel` (game) using [CollectionService.AddTag](https://developer.roblox.com/api-reference/function/CollectionService/AddTag)

   - An object with the given tag is added as a descendant of the `DataModel`, e.g. by setting [Instance.Parent](https://developer.roblox.com/api-reference/property/Instance/Parent) or similar

Subsequent calls to this method with the same tag return the same signal object. Consider also calling [CollectionService.GetTagged](https://developer.roblox.com/api-reference/function/CollectionService/GetTagged) to get a list of objects that already have a tag (and thus won't fire the event if they already are in the `DataModel`).

See also [CollectionService.GetInstanceRemovedSignal](https://developer.roblox.com/api-reference/function/CollectionService/GetInstanceRemovedSignal), which returns an event that fires under similar conditions.