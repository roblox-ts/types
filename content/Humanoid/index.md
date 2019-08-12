The Humanoid is a special object that gives models the functionality of a character. It grants the model with the ability to physically walk around and interact with various components of a Roblox level.

Humanoids are always parented inside of a `Model`, and the model is expected to be an assembly of `BasePart` and `Motor6D`; the root part of the assembly is expected to be named _HumanoidRootPart_ . It also expects a part named _Head_ to be connected to the character's torso part, either directly or indirectly.

By default, there are two official types of character rigs supplied by Roblox, each with their own set of rules:

### R6

* A basic character rig that uses 6 parts for limbs.

* The _Head_ part must be attached to a part named _Torso_, or the Humanoid will die immediately.

* BodyPart appearances are applied using `CharacterMesh` objects.

* Certain properties, such as [Humanoid.LeftLeg](https://developer.roblox.com/api-reference/property/Humanoid/LeftLeg) and [Humanoid.RightLeg](https://developer.roblox.com/api-reference/property/Humanoid/RightLeg), only work with R6.

### R15

* More complex than R6, but also far more flexible and robust.

* Uses 15 parts for limbs.

* The _Head_ part must be attached to a part named _UpperTorso_ or the Humanoid will die immediately.

* BodyPart appearances have to be assembled directly.

* Can be dynamically rescaled by using special `NumberValue` objects parented inside of the Humanoid.

* The Humanoid will automatically create `Vector3Value` objects named _OriginalSize_ inside of each limb.

* If a NumberValue is parented inside of the Humanoid and is named one of the following, it will be used to control the scaling functionality:

* BodyDepthScale

* BodyHeightScale

* BodyWidthScale

* HeadScale