The UserCFrameEnabled event fires when a [Enum.UserCFrame](https://developer.roblox.com/search#stq=UserCFrame) gets enabled or disabled.

This can be used alongside `VRService\GetUserCFrameEnabled` to track whether a specified UserCFrame is enabled, and when its state changes. It can also be used alongside `/UserInputService` service events and functions.

Since the event fires locally, it can only be used in a `/LocalScript`.