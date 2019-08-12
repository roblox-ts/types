HasTag returns whether a given object has a tag

   - Using [CollectionService.AddTag](https://developer.roblox.com/api-reference/function/CollectionService/AddTag) to add the tag will cause this method to return true.

   - Using [CollectionService.RemoveTag](https://developer.roblox.com/api-reference/function/CollectionService/RemoveTag) to remove the tag will cause this method to return false.

By extension, any tags returned by a call to [CollectionServiec.GetTags](https://developer.roblox.com/search#stq=GetTags) on an object will return true when used with this method.