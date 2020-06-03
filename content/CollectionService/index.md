The `CollectionService` manages groups (collections) of instances with tags. Tags are sets of strings applied to objects that replicate from the server to the client and in Team Create. They are also serialized when places are saved. At the moment, tags are not visible within Roblox Studio except with the use of a tag-editing plugin.

The primary use of `CollectionService` is to add flags and/or behaviors to Roblox objects. If you find yourself adding the same script to many different objects, perhaps a script that uses CollectionService would be better. Here are a couple examples:

* In an obstacle course with many bricks that kill players, don't paste the same script in all your kill bricks! Instead, tag them with "KIllBrick". Then, have any brick tagged as such kill the player.

* Payers with a VIP game pass could have their `Humanoid` tagged "VIP", and be allowed through doors that only allow VIPs.

* When creating a freeze-tag game, you could tag frozen players' `Humanoid` objects with a "Frozen" tag. Then, use a `LocalScript` to listen for the "Frozen" tag and create client-side visual effects to reduce the number of objects replicated from server to client.

When working with collections and tags, it's a good idea to use an [object-oriented programming style][1]. In almost all situations, tagged objects have their own identity, state and behavior. The pattern goes like this: when a tag is found ([CollectionService.GetTagged](https://developer.roblox.com/api-reference/function/CollectionService/GetTagged) and [CollectionService.GetInstanceAddedSignal](https://developer.roblox.com/api-reference/function/CollectionService/GetInstanceAddedSignal)), create a Lua object with the Roblox instance. When it is removed ([CollectionService.GetInstanceRemovedSignal](https://developer.roblox.com/api-reference/function/CollectionService/GetInstanceRemovedSignal)), call a cleanup/destroy method within the Lua object. See the code samples for a better idea of how this can be done.

When tags replicate, **all tags on an object replicate at the same time**. Therefore, if you set a tag on an object from the client then add/remove a **different** tag on the same object from the server, the client's local tags on the object are overwritten.

[1]: https://www.lua.org/pil/16.html