The CanSetNetworkOwnership function checks whether you can set a [part's](https://developer.roblox.com/api-reference/class/BasePart) network ownership.

The function’s return value verifies whether or not you can call [BasePart.SetNetworkOwner](https://developer.roblox.com/api-reference/function/BasePart/SetNetworkOwner) or [BasePart.SetNetworkOwnershipAuto](https://developer.roblox.com/api-reference/function/BasePart/SetNetworkOwnershipAuto) without encountering an error. It returns true if you can modify/read the network ownership, or returns false and the reason you can't, as a string.

##See Also

 * [Network ownership][1]

[1]: https://developer.roblox.com/articles/Network-Ownership
@returns Whether you can modify/read the network ownership, as well as a reason if you cannot
@rbxts server