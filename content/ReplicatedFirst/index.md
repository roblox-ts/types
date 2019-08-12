A container whose contents are replicated to all clients (but not back to the server) first before anything else.

## What is ReplicatedFirst for?

ReplicatedFirst is most commonly used to store `LocalScript`s and other objects that are essential for the game's start. As the contents of ReplicatedFirst replicate to the client before anything else in the game, it is ideal for creating loading GUIs or tutorials.

For objects that do not need to be replicated first, developers should use the `ReplicatedStorage` container instead.

## How can I use ReplicatedFirst?

`LocalScript`s placed within ReplicatedFirst will run. This means code for custom loading screens or other ReplicatedFirst uses can be ran at the earliest possible point.

There a number of key considerations developers need to remember when running `LocalScript`s in ReplicatedFirst.

 - Its contents replicate before anything else in the game, meaning `LocalScript`s running in ReplicatedFirst will need to wait for any objects they require to replicate using [Instance.WaitForChild](https://developer.roblox.com/api-reference/function/Instance/WaitForChild)

 - Any objects that are to be used by a `LocalScript` in ReplicatedFirst should also be parented to ReplicatedFirst. Otherwise, they may replicate to the client late, yielding the script and negating the benefit of ReplicatedFirst.

ReplicatedFirst also includes the function [ReplicatedFirst.RemoveDefaultLoadingScreen](https://developer.roblox.com/api-reference/function/ReplicatedFirst/RemoveDefaultLoadingScreen), which can be used to immediately remove the default Roblox loading screen. Note if any object has been placed in ReplicatedFirst, the default loading screen will remove after 5 seconds regardless if this function has been called or not.