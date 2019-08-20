This function creates a `PluginAction` which is an object that represents a generic performable action in Roblox Studio, with no directly associated `Toolbar` or `Button`. In Roblox Studio, they can be assigned a keyboard shortcut under `File → Advanced → Customize Shortcuts…`, and they can also be added to the Quick Access Toolbar.

When an action is triggered, the [PluginAction.Triggered](https://developer.roblox.com/api-reference/event/PluginAction/Triggered) event is signaled.

In order for PluginActions work as expected, they must be created using this function.

## See also

  - [articles.Intro to Plugins](https://developer.roblox.com/search#stq=Intro%20to%20Plugins), an introductory article to plugin use and development

  - `PluginMenu`, a context menu that can be shown in Studio which displays a list of PluginActions and supports submenus

  - [Plugin.CreatePluginMenu](https://developer.roblox.com/api-reference/function/Plugin/CreatePluginMenu), creates a PluginMenu
@param actionId Must be a unique string that identifies this PluginAction from others
@param text The displayed name of the action
@param statusTip The displayed description of the action
@param iconName The name of the icon used to display the plugin
@param allowBinding Whether the `PluginAction` will be hidden from Studio's shortcuts view. Useful for contextual actions. Defaults to true
@returns The newly created PluginAction object