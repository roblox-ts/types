The Theme property is used to get/set the current `StudioTheme` used by `Studio`.

This is intended for use within [Plugins](https://developer.roblox.com/api-reference/class/Plugin), but will also execute in the Command Line. You can access the function via:

```lua
settings().Studio.Theme
```

For instance, if you would like to print the current Studio theme:

```lua
print("The current Studio theme is:", settings().Studio.Theme)
```
