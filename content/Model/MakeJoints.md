Goes through all `BasePart`s in the `Model`. If any part's side has a SurfaceType that can make a joint it will create a joint with any adjacent parts.

This function will not work if the `Model` is not a descendant of `Workspace`. Therefore developers must first ensure the `Model` is parented to `Workspace` before using MakeJoints.

Joints are broken if enough force is applied to them due to an `Explosion`, unless a `ForceField` object is parented to the model. For this reason, they are often used to make simple destructible buildings and other models.