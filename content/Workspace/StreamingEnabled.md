Whether network streaming is enabled for the place or not.

This property is not replicated, and therefore cannot be changed once the game has started. For this reason, it is advised it is set in Roblox Studio.

## What is network streaming?

Streaming is an opt-in feature builders can enable for their places. It'll allow places to have more `BasePart`s, faster join times, and allow more games to run on less powerful hardware. It does this by allowing games to be played whilst objects are still being downloaded, and removing objects that are no longer needed.

The downside of network streaming is it means the client can no longer rely on specific objects being available. Developers should not enable StreamingEnabled unless they understand its implications and have put processes in place to manage them. For example, `LocalScript`s may have to use [Instance.WaitForChild](https://developer.roblox.com/api-reference/function/Instance/WaitForChild) in order to access parts of the game.