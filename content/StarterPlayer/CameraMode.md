The CameraMode `StarterPlayer` property sets whether cameras will be locked to first person or not when a player joins the game.

Sets the default value for [Player.CameraMode](https://developer.roblox.com/api-reference/property/Player/CameraMode) for each player in the game.

The camera has two modes:

 1. First person

 2. Third person

The [Enum.CameraMode](https://developer.roblox.com/search#stq=CameraMode) Enum is used to set CameraMode, and determines when first and third person cameras should be used.

First-person

------------

In first-person mode, the player's camera is zoomed all the way in. Unless there is a visible GUI present with the [GuiButton.Modal](https://developer.roblox.com/api-reference/property/GuiButton/Modal) property set to *true*, the mouse will be locked and the user's camera will turn as the mouse moves.

![First Person CameraMode][1]

Third-person

------------

In third-person mode, the character can be seen in the camera. While in third-person mode on Roblox:

* You may right-click and drag to rotate your camera, or use the arrow keys at the bottom right-hand corner of the screen.

* When you move your mouse, your camera does not change (unless you move the mouse to the end of the screen).

* When you press any of the arrow keys, the user's character will face in the corresponding arrow key's direction.

* You can zoom in and out freely.

Third-person is the default camera setting.

![Third Person CameraMode][2]

[1]: https://developer.roblox.com/assets/5ade20a13a314ce34a0f6878/CameraMode_FirstPerson.jpg

[2]: https://developer.roblox.com/assets/5ade20afbaed3a514c3722c4/CameraMode_ThirdPerson.jpg