A context menu that can be shown in Studio. It displays a list of PluginActions and supports submenus.

PluginMenus must be created using the [Plugin.CreatePluginMenu](https://developer.roblox.com/api-reference/function/Plugin/CreatePluginMenu) function in order to work as expected.

## See also

  - [articles.Intro to Plugins](https://developer.roblox.com/search#stq=Intro%20to%20Plugins), an introductory article to plugin use and development

  - `PluginAction`, an object that represents a generic performable action in Roblox Studio, with no directly associated `Toolbar` or `Button`.

  - [Plugin.CreatePluginAction](https://developer.roblox.com/api-reference/function/Plugin/CreatePluginAction), creates a PluginAction

  - [PluginMenu.Title](https://developer.roblox.com/api-reference/property/PluginMenu/Title), the text to be displayed when used as a sub menu

  - [PluginMenu.Icon](https://developer.roblox.com/api-reference/property/PluginMenu/Icon), the icon to be displayed when used as a sub menu

  - [PluginMenu.AddAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddAction), adds the given action to the menu

  - [PluginMenu.AddNewAction](https://developer.roblox.com/api-reference/function/PluginMenu/AddNewAction), creates a temporary action that is hidden from Studio's customize shortcuts window

  - [PluginMenu.AddMenu](https://developer.roblox.com/api-reference/function/PluginMenu/AddMenu), adds the given menu as a separator

  - [PluginMenu.AddSeparator](https://developer.roblox.com/api-reference/function/PluginMenu/AddSeparator), adds a separator between items in the menu

  - [PluginMenu.Clear](https://developer.roblox.com/api-reference/function/PluginMenu/Clear), clears the menu

  - [PluginMenu.ShowAsync](https://developer.roblox.com/api-reference/function/PluginMenu/ShowAsync), shows the menu at the mouse cursor. Yields until either an item is selected or the menu is closed. The selected action fires its Triggered event