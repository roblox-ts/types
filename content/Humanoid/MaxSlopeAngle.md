![A visualization of how MaxSlopeAngle impacts characters walking on slanted surfaces.][1]

MaxSlopeAngle is a property of the Humanoid class, that determines the maximum slope angle that a humanoid can climb. If the angle of a slope is greater than a humanoid's MaxSlopeAngle, they will slide down the slope.

In the visualization above, the MaxSlopeAngle is shown above each character's head. As you can see, the character with a MaxSlopeAngle lower than the 45° ramp ends up slipping into the lava.

The value of this property is constrained to values between 0° and 89°. It defaults to 89°, so humanoids can climb pretty much any slope they want by default.

[1]: https://developer.roblox.com/assets/bltd54b9a9a3f7ed230/MaxSlopeAngle.gif