Returns a table of parts connected to the the object by any kind of rigid joint.

If _recursive_ is true this function will return all of the parts in the assembly rigidly connected to the BasePart.

## Rigid Joints

When a joint connects two parts together `(Part0 &#x2192; Part1)`, a joint is **rigid** if the physics of `Part1` are completely locked down by `Part0`.This only applies to the following joint types: * `Weld`

* `Snap`

* `ManualWeld`

* `Motor`

* `Motor6D`

* `WeldConstraint`
@param recursive A table of parts connected to the the object by any kind of `JointInstance|joint`