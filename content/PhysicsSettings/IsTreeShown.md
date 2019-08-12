When set to true, the joint connections of each part, and the states of their underlying primitive components are visualized as a spanning tree.

## Spanning Tree Table

There are several visualizations made available when this property is set to true:

| Color | Adorn Type | Description |
| --- |
|  | Box | Root Primitive of a Mechanism that is currently anchored, or connected to an anchored primitive. (See: [BasePart.IsGrounded](https://developer.roblox.com/api-reference/function/BasePart/IsGrounded)) |
|  | Box | Root Primitive of a Mechanism that is free to be physically simulated. |
|  | Box | Root Primitive of a Mechanism that has moving components. |
|  | Sphere | Root Primitive of an Assembly. |
|  | Cylinder | Root Primitive of a Clump. |
|  | Line | Connection between two Primitives that share the same Assembly and Clump. |
|  | Line | Connection between two Primitives that share the same Assembly. |
|  | Line | Connection between two Primitives. |