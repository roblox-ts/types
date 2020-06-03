Breaks connections between `BaseParts`, including surface connections with any adjacent parts, `WeldConstraint`s, and all `Weld`s and other `JointInstance`s.

When BreakJoints is used on a Player character `Model`, the character's `Humanoid` will die as it relies on the Neck joint.

Note that although joints produced by surface connections with adjacent Parts can technically be recreated using [Model.MakeJoints](https://developer.roblox.com/api-reference/function/Model/MakeJoints), this will only recreate joints produced by surfaces. Developers should not rely on this as following the joints being broken parts may no longer be in contact with each other.