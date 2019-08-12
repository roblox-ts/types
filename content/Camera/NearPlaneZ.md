The NearPlaneZ property describes how far away the Camera’s near clipping plane is in studs. The near clipping plane is a geometric plane that sits in-front of the [Camera's](https://developer.roblox.com/api-reference/class/Camera) [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame). Anything between this plane and the camera will not render. This creates a cutaway view when viewing objects at very short distances. See the images below for a visual example of this:

![A demonstration of how the near clipping plane resides in front of the camera's view][1]

![A demonstration of how anything falling behind the clipping plane is not rendered][2]

The value of NearPlaneZ varies across different platforms, but is currently always between *-0.1* and *-0.5*.

 - Most windows systems, all Xbox systems and most iOS systems support the more precise value of *-0.1*

 - Currently Mac and Android systems only support a NearPlaneZ of *-0.5*, although this may change in the future

[1]: https://developer.roblox.com/assets/5b65d852858e507e4016d57d/NearPlaneZ1.jpg

[2]: https://developer.roblox.com/assets/5b65d85c858e507e4016d583/NearPlaneZ2.jpg