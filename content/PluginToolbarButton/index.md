A PluginToolbarButton is an object created by the [PluginToolbar.CreateButton](https://developer.roblox.com/api-reference/function/PluginToolbar/CreateButton) function. It allows the user to initiate a single, one-off action in Roblox Studio through the [Click](https://developer.roblox.com/api-reference/event/PluginToolbarButton/Click) event. Pictured below are three PluginToolbarButtons. From left to right: the default, hover and pressed states. The hovered button in the center shows tooltip text, which is the 2nd argument passed to [PluginToolbar.CreateButton](https://developer.roblox.com/api-reference/function/PluginToolbar/CreateButton).

![Three PluginToolbarButtons rendered on a PluginToolbar titled "Three Wise Monkeys"][1]

## Behavior

When pressed, the [Click](https://developer.roblox.com/api-reference/event/PluginToolbarButton/Click) event fires. A button will also remain in the pressed state, which may be set manually using [SetActive](https://developer.roblox.com/api-reference/function/PluginToolbarButton/SetActive). Upon plugin activation ([Plugin.Activate](https://developer.roblox.com/api-reference/function/Plugin/Activate)), buttons in all other `PluginToolbar`s will be toggled off. If all buttons in a toolbar are off, the toolbar's plugin is deactivated ([Plugin.Deactivate](https://developer.roblox.com/api-reference/function/Plugin/Deactivate)).

When the game viewport is not visible, buttons will be disabled as if their [Enabled](https://developer.roblox.com/api-reference/property/PluginToolbarButton/Enabled) property were false. Disabled buttons are desaturated and do not respond to user clicks. By setting [ClickableWhenViewportHidden](https://developer.roblox.com/api-reference/property/PluginToolbarButton/ClickableWhenViewportHidden) to true, you can allow plugin buttons to remain clickable (such as during script editing).

## History

* Prior to an update released in January 2019, this class was simply known as "Button". This was changed to reduce confusion with similarly named in-game UI element classes, such as `TextButton`.

[1]: https://developer.roblox.com/assets/5c48e310f8a426690c84250e/PluginToolbarButton-light.png