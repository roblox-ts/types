When set to true, sphere adorns will be drawn at the contact points of each part where physics interactions are occurring.

Each sphere also has an arrow drawn in 3D, facing the surface that the contact point is detecting.

## Solver Variations

The behavior of this property varies depending on whether Roblox's physics engine is using the _PGS Physics Solver_, or the _Spring Physics Solver_.

This is controlled by the `Workspace`'s [Workspace.PGSPhysicsSolverEnabled](https://developer.roblox.com/search#stq=PGSPhysicsSolverEnabled) property.

### Spring Physics Solver

When [Workspace.PGSPhysicsSolverEnabled](https://developer.roblox.com/search#stq=PGSPhysicsSolverEnabled) is set to false, the contact points are color coded as listed below.

The length of the arrow extruding from the sphere depends on how much force the contact point is exerting, and what the contact type is.

| Color | Contact Type | Description |
| --- |
|  | Normal Contact | Contact point with no special conditions. |
|  | Resting Contact | Contact point that has been active for at least 4 frames. |
|  | Second Pass Contact | Contact point that was made by a kernel joint going through a second pass. Rarely seen. |
|  | Real Time Contact | Contact point that was made with a real-time physics body. This applies to tripped `Humanoid`. |
|  | Joint Contact | Contact point that was made under the context of a physically simulated joint. This applies to Motors and Hinges. |

### PGS Physics Solver

When [Workspace.PGSPhysicsSolverEnabled](https://developer.roblox.com/search#stq=PGSPhysicsSolverEnabled) is set to true, the contact points are always colored **RED**, and the length of the arrow will always be 1 stud.

There are no special conditions tracked, because the PGS solver does not keep specific lookup tables for the states listed in the Spring Solver.

| Color | Contact Type | Description |
| --- |
|  | Normal Contact | Contact point with no special conditions. |