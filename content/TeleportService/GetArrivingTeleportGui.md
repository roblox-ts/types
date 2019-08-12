This function returns the *customLoadingScreen* the [LocalPlayer](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) arrived into the place with.

Note, the *customLoadingScreen* will not be used if the destination place is in a different game.

## Loading screen

During a teleport, whilst the destination place is loading, the *customLoadingScreen* is parented to the `CoreGui`. Once the place has loaded the [loading screen](https://developer.roblox.com/api-reference/class/ScreenGui) is [parented](https://developer.roblox.com/api-reference/property/Instance/Parent) to *nil*.

If you wish to preserve the *customLoadingScreen* and perform your own transitions, you will need to parent it to the [LocalPlayer’s](https://developer.roblox.com/api-reference/property/Players/LocalPlayer) `PlayerGui`. For an example of this, see the code sample below.
@returns The *customLoadingScreen* the `Players/LocalPlayer|LocalPlayer` arrived into the place with
@rbxts client