The AutoRotate property is a boolean that describes whether or not the Humanoid will automatically rotate to face in the direction they are moving. When set to true, the character model will gradually turn to face their movement direction as the Humanoid walks around. When set to false, the character model will remain fixated in its current rotation, unless a rotating force is applied to the *HumanoidRootPart*.

If the character model happens to be the character of a player, then the behavior of the Humanoid's rotation is influenced by the UserGameSetting's RotateType property.

When the AutoRotate property is set to true, the RotateType property has the following effects on the Humanoid's rotation:

| RotationType | Behavior | Context |
| --- | --- | --- |
| CameraRelative | Character will rotate to face in the direction of the camera. | Player has their camera zoomed into first-person, or they are in shift-lock mode. |
| CameraRelative | Character will rotate to face in the direction of the camera. | Player has their camera zoomed into first-person, or they are in shift-lock mode. |