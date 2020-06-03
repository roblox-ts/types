A simple container used to hold and organize Roblox objects. Unlike other container classes like `Model`, it offers no additional functionality.

The Folder object is ideal for organizing and storing objects. It is not recommended to use folders to group `BasePart`s as `Model`s offer a range of useful functions for moving and manipulating the parts.

Folders form part of the game's hierarchy and can be accessed the same way as any object. For example:

```lua
local folder = game:GetService("ReplicatedStorage"):FindFirstChild("Folder")
 local subFolder = folder:FindFirstChild("Folder")
```

Folders behave the same way as folders in a computer file system, meaning they can also be parented to each other. They exist as a means for developers to better organize the multitude of objects required by complex games. See below for a simple example of how folders can be used to organize game objects in `ReplicatedStorage`.

![enter image description here][1]

[1]: https://developer.roblox.com/assets/blta82462d9370edb83/Folders_-_Copy.png