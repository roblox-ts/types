This property determines if a player is able to toggle **[mouse](https://developer.roblox.com/api-reference/class/Mouse) lock** by pressing **Shift**. A player can disable the mouse lock switch in Roblox's game settings. By default, this property is set to the value of [StarterPlayer.EnableMouseLockOption](https://developer.roblox.com/api-reference/property/StarterPlayer/EnableMouseLockOption). This can be set during run-time by using a `LocalScript`,

## What is Mouse Lock?

When mouse lock is enabled, the player's cursor is locked to the center of the screen. Moving the mouse will orbit the camera around the player's [character](https://developer.roblox.com/api-reference/property/Player/Character), and character will face the same direction as the [camera](https://developer.roblox.com/api-reference/class/Camera). It also offsets the camera view just over the right shoulder of the player's character.

Below, the camera is moved left and right first by holding right-click. Then, mouse lock is enabled which changes the mouse to a target reticule, and offsets the camera. The camera is again moved left and right (without holding right click).