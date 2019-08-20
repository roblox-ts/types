The NameDisplayDistance property is a number used in conjunction with the `Humanoid`'s [Humanoid.DisplayDistanceType](https://developer.roblox.com/api-reference/property/Humanoid/DisplayDistanceType) property to control how far a humanoid's name can be seen from.

The DisplayDistanceType property is to one of three values using the [Enum.HumanoidDisplayDistanceType](https://developer.roblox.com/search#stq=HumanoidDisplayDistanceType) enum.

----------

## DisplayDistanceType set to "None"##

When a humanoid's DisplayDistanceType is set to **None**, its name will never be visible to anyone under any circumstances.

----------

## DisplayDistanceType set to "Viewer"##

When a humanoid's DisplayDistanceType is set to **Viewer**, the visibility of its name is dependent upon the NameDisplayDistance of the player viewing it.

If the distance between the character models of the viewer and the humanoid is outside the range of the viewer's NameDisplayDistance, then the humanoid's name will not be shown to the viewer.

----------

## DisplayDistanceType set to "Subject"##

When a humanoid's DisplayDistanceType is set to **Subject**, the visibility of its name is dependent upon the value of the humanoid's own NameDisplayDistance.

If the distance between the character models of the viewing player and the humanoid is outside the range of the humanoid's NameDisplayDistance, then the humanoid's name will not be shown to the viewing player.

----------