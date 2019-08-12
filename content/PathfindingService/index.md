**PathfindingService** is used to find paths between two points. These paths make sure that characters can move between the points without running into walls or other obstacles. Paths can be used for both player-controlled characters and non-player characters.

This service has one function, [CreatePath()](https://developer.roblox.com/api-reference/function/PathfindingService/CreatePath), which creates a `Path` object based on various parameters.

See the [Pathfinding](https://developer.roblox.com/search#stq=Pathfinding) guide for details and examples on using pathfinding in Roblox.

## Navigation Mesh

**PathfindingService** generates a "navigation mesh" over all parts in a place while the game is running. Any path that is created with the service will stay within the mesh. If the geometry of the place changes — for example, if a part is created or a part moves — the navigation mesh will be recalculated.

To see the navigation mesh for a place:

1. Open the place in Studio.

2. Navigate to **File** → **Settings...** .

3. In the **Studio** tab, under **Visualization**, toggle on the **Show Navigation Mesh** setting. The mesh will then show up in the 3D view.

The purple areas show where a character can walk, while the non-colored areas are considered blocked. Studio also displays arrows on top of the mesh which show where a character would have to **jump** to reach one part of the mesh from another.

![](https://developer.roblox.com/assets/5ba161118c2893307fc122d0/NavigationMesh.jpg)