This property determines if the joint is currently active in the world. If true, the joint is active.

If the `JointInstance` is not in `Workspace` or `JointsService`, or one of its parts is not in Workspace the joint will be inactive.

Rigid joints like `Weld`, `Snap`, `WeldConstraint`, `Motor`, or `Motor6D` may also be disabled due to conflicts with other rigid joints, such as joints between the same two parts or indirect cycles in the weld graph. Joints disabled this way may be re-enabled later when another joint or part is added or removed.