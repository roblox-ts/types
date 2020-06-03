BasePart is an abstract base class for in-world objects that render and are physically simulated while in the `Workspace`. There are several implementations of BasePart, the most common is `Part`, a simple 6-face rectangular prism. Others include `SpawnLocation`, `WedgePart` and the singleton `Terrain` object within the `Workspace`. Most of the time, when documentation refers to a part, most BasePart implementations will work and not just `Part`.

There are **many** different objects that interact with BasePart:

  - They may be grouped within a `Model`, which allows several BasePart to be moved at the same time using [SetPrimaryPartCFrame](https://developer.roblox.com/api-reference/function/Model/SetPrimaryPartCFrame).

  - A `Decal` applies a stretched image texture to the faces of a part, though the exact mapping depends on the type of part.

  - A `Texture` applies a tiled image texture to the faces of a part much like a `Decal`.

  - A `SurfaceGui` renders [GuiObjects](https://developer.roblox.com/api-reference/class/GuiObject) on the face of a part.

  - An `Attachment` can be added to specify a CFrames relative to a parent BasePart. These are often used by physics `Constraint` objects, such as `RopeConstraint` and `HingeConstraint`.

  - `ParticleEmitter` emit particles uniformly in the volume of the BasePart to which they are parented.

  - Light objects like `PointLight` emit light from the center of a BasePart.

  - When [played](https://developer.roblox.com/api-reference/function/Sound/Play), a `Sound` parented to a BasePart will be physically located at the part's position.

  - `BodyMover` objects like `BodyVelocity` exert forces on the BasePart to which they are parented.

  - As a sibling of a `Humanoid`, they can be used as limbs of a character and also animated when joined using `Motor6D`. If not a sibling of a `Humanoid`, BasePart can still be animated using an `AnimationController`.

  - In Studio, you can use most implementations of BaseParts with solid modelling.

  - If parented to a `Tool` and given the name "Handle", a BasePart can be held by characters.

  - You can make BasePart interactive by adding a `ClickDetector`

  - You can a mesh like a `BlockMesh` or `SpecialMesh` to change how a BasePart looks without change how it physically behaves.