**Note**: This property is ignored if PGS is enabled via Workspace.PGSPhysicsSolverEnabled, which is enabled by default.

The P property determines how much [power](https://en.wikipedia.org/wiki/Power_(physics)) is used while applying force in order to reach the goal [Velocity](https://developer.roblox.com/api-reference/property/BodyVelocity/Velocity). The higher this value, the more power will be used and the faster it will be used.

The force the `BodyVelocity` exerts increases as the difference between the part's current velocity and the goal velocity increases. This property is multiplied to this force to either amplify or diminish it.