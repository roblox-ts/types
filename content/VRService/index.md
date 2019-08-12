The VRService is a service that is responsible for handling interactions between Roblox and Virtual Reality (VR). If you're interested in incorporating VR compatibility into your game, this is the service for you!

The primary purpose of this service is to allow for games to communication and cooperate with virtual reality decisions - such as VR headsets and controllers. It allows a LocalScript to perform different actions depending on the device, and in turn, helps developers provide the best experience for the end user seeking to experience Roblox using VR devices.

Some usages of this service include detecting whether a user has any connected VR devices, tracking when those devices move, and determining how those devices interact with the user's in-game controls. In order to detect user input, the service must look for a service event. For example, the service can detect  VR device movement via events such as [VRService.UserCFrameChanged](https://developer.roblox.com/api-reference/event/VRService/UserCFrameChanged).

Notes

----------

 1. The `UserInputService` also contains several events and functions useful for enhancing a player's VR experience in your game.

 2. Since this service is client-side only, it will only work when used in a `LocalScript`. It will not work when used within a `Script`. Client-side only means that users in the game can only detect their own input - and not the input of other users.