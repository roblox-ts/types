The Camera object defines a view of the 3D game world. In an instance of the game, each client has its own Camera object associated with it. Camera objects exist only upon the viewer's client, residing in that user's local Workspace, and therefore cannot be edited directly from the server. As of the most recent versions of the game, the only way to access a client's Camera object is through a LocalScript running on that client. Each client's particular Camera object can be accessed through the [CurrentCamera](https://wiki.roblox.com/index.php?title=CurrentCamera) property of its local Workspace, assuming your code is running on that specific client.

A camera's state is defined in the following way:

* The [Camera.CFrame](https://developer.roblox.com/api-reference/property/Camera/CFrame) property, represents the the position and orientation of the camera.

* The [Focus](https://wiki.roblox.com/index.php?title=Focus) property represents the point the camera is looking at. It's important to set this property, as it also represents where the game thinks you are in the world. Certain visuals will be more detailed and will update more frequently, depending on how close they are to the Focus. Roblox's default [CameraScript](https://wiki.roblox.com/index.php?title=CameraScript) will take care of this for you.

* The [CameraType](https://wiki.roblox.com/index.php?title=CameraType) property represents what action the game engine should perform on the Camera every frame.

* The [FieldOfView](https://wiki.roblox.com/index.php?title=FieldOfView) property, a number, represents the angle the user can see out the sides of the Camera.

* An internal roll amount, which can be set by using the [SetRoll](https://wiki.roblox.com/index.php?title=SetRoll) method. This number (in radians) represents the angle in which the camera is rotated.