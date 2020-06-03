This property determines if the `WeldConstraint` is currently active in the world. If true, it is currently active.

If the WeldConstraint or one of its parts is not in `Workspace` the weld will be inactive.

Rigid joints like `Weld`, `Snap`, `WeldConstraint`, `Motor`, or `Motor6D` may also be disabled due to conflicts with other rigid joints, such as joints between the same two parts or indirect cycles in the weld graph. Joints disabled this way may be re-enabled later when another joint or part is added or removed.

Duplicate WeldConstraints do not conflict because WeldConstraints derive their internal [CFrames](https://developer.roblox.com/search#stq=CFrame) from the relative positions of their parts when they are enabled and all update when [Position](https://developer.roblox.com/api-reference/property/BasePart/Position) or [Orientation](https://developer.roblox.com/api-reference/property/BasePart/Orientation) is set on a part. The spanning tree may still disable them if they are redundant or form a cycle.
	
This property determines if the `WeldConstraint` is currently active in the world. If true, it is currently active.

If the WeldConstraint or one of its parts is not in `Workspace` the weld will be inactive.

Rigid joints like `Weld`, `Snap`, `WeldConstraint`, `Motor`, or `Motor6D` may also be disabled due to conflicts with other rigid joints, such as joints between the same two parts or indirect cycles in the weld graph. Joints disabled this way may be re-enabled later when another joint or part is added or removed.

Duplicate WeldConstraints do not conflict because WeldConstraints derive their internal [CFrames](https://developer.roblox.com/search#stq=CFrame) from the relative positions of their parts when they are enabled and all update when [Position](https://developer.roblox.com/api-reference/property/BasePart/Position) or [Orientation](https://developer.roblox.com/api-reference/property/BasePart/Orientation) is set on a part. The spanning tree may still disable them if they are redundant or form a cycle.

Tags: ReadOnly, NotReplicated