GetCore returns data set or made available by Roblox's [CoreScripts](https://developer.roblox.com/api-reference/class/CoreScript). The first and only parameter is a string that selects the information to be fetched. The following sections describe the strings and the data they return by this function.

Each of these is registered by a CoreScript and calling this function may yield. Many of these also register an equivalent [SetCore](https://developer.roblox.com/api-reference/function/StarterGui/SetCore) function (these are marked with an asterisk).

## PointsNotificationsActive*

Returns true if player point notifications are enabled.

## BadgesNotificationsActive*

Returns true if badge notifications are enabled.

## AvatarContextMenuEnabled*

Returns true if the Avatar Context Menu is enabled.

## ChatActive*

Returns whether the chat is active or not. This is indicated by the selection state of the top bar's chat icon.

## ChatWindowSize*

Returns the size of the chat window as a UDim2.

## ChatWindowPosition*

Returns the size of the chat window as a UDim2.

## ChatBarDisabled*

Returns true if the chat bar is disabled.

## GetBlockedUserIds

Returns a list of [Player.UserId](https://developer.roblox.com/api-reference/property/Player/UserId)s associated with users that have been blocked by the local player.

## PlayerBlockedEvent

Returns a BindableEvent that is fired whenever a player is blocked by the local player.

## PlayerUnblockedEvent

Returns a BindableEvent that is fired whenever a player is unblocked by the local player.

## PlayerMutedEvent

Returns a BindableEvent that is fired whenever a player is muted by the local player.

## PlayerUnmutedEvent

Returns a BindableEvent that is fired whenever a player is unmuted by the local player.

## PlayerFriendedEvent

Returns a BindableEvent that is fired whenever a player is friended by the local player.

## PlayerUnfriendedEvent

Returns a BindableEvent that is fired whenever a player is unfriended by the local player.

## DeveloperConsoleVisible*

Returns true if the developer console is visible.

## VRRotationIntensity

Returns a string describing the camera rotation sensitivity in VR: `Low`, `High` and `Smooth`. *This will not be available unless [VRService.VREnabled](https://developer.roblox.com/api-reference/property/VRService/VREnabled) is true.*