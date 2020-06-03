Field of view, often shortened to FOV, is the extent of the observable game world that can be seen on screen at a given moment. The FieldOfView property is clamped between 1 and 120 degrees and defaults at 70. Very low or very high fields of view are not recommended as they can be disorientating to players.

The FieldOfView property sets how many degrees in the vertical direction (y-axis) the camera can view. Uniform scaling is enforced meaning the vertical and horizontal field of view are always related by the [aspect ratio][1] of the screen. This means the FieldOfView property also determines the horizontal field of view.

See the images below for an example of how different FieldOfView settings can impact the extent of the perceptive game world. At a FOV of 70, a considerable portion of the game world is visible:

![A demonstration of the default FOV of 70][3]

However when the FOV is reduced to 30, although the [Camera's](https://developer.roblox.com/api-reference/class/Camera) [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) has not changed, a much smaller portion of the game world is rendered:

![A demonstration of a reduced FOV of 30][2]

## Suggested uses for FieldOfView

Changing FOV can produce a variety of effects, such as:

 - Reducing FOV to give the impression of magnification (for example when using binoculars)

 - Increasing FOV when the player is 'sprinting' to give the impression of a lack of control

[1]: https://en.wikipedia.org/wiki/Aspect_ratio_(image)

[2]: https://developer.roblox.com/assets/5b67662a74c0756340c86bfa/Fov30.png

[3]: https://developer.roblox.com/assets/5b676631f9cd894d3d8ace1f/Fov70.png