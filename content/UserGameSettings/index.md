The UserGameSettings is a singleton class found inside of the `UserSettings` singleton. It holds various persistent settings relating to how the user wants to control their camera, and their character.

You can access this object from a `LocalScript` via:

```lua
UserSettings():GetService("UserGameSettings")
```

This object is intended to be used on the client only, as it serves no purpose on the server. It will also reflect your own settings when testing in Roblox Studio.