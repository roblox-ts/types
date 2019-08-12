Returns true if the game has the PGS Physics solver enabled.

As [Workspace.PGSPhysicsSolverEnabled](https://developer.roblox.com/search#stq=PGSPhysicsSolverEnabled) cannot be accessed by scripts, the PGSIsEnabled function allows developers to tell which physics solver the game is using.

```lua
print(workspace:PGSIsEnabled()) -- true = PGS solver enabled 
print(workspace:PGSIsEnabled()) -- false = Legacy solver enabled
```

## What is the PGS Solver?

The PGS Solver is Roblox's state of the art physics solver which offers a range of simulation capabilities not available in Roblox's legacy solver.

Note, the PGS solver is currently the default physics solver used by Roblox. Developers should expect the legacy physics solver to be deprecated or removed at some point in the future.

For more information on the PGS Solver, please see [this article][1].

[1]: https://developer.roblox.com/articles/Building-with-PGS
@returns True if the PGS solver is enabled.