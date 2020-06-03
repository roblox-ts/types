The content ID of an uploaded script. When set binds the uploaded code to the script's [Script.Source](https://developer.roblox.com/api-reference/property/Script/Source).

By default, this property is set to *'[Embedded]'*. This means the source of the script is not linked to an upload script and is instead written in the script.

```lua
script.LinkedSource = "http://www.roblox.com/asset/?id=1014476" -- link source
```

Developers should remove a linked source via the properties window, rather than setting the property to *'[Embedded]'*.

For the LinkedSource property for `ModuleScript`s, please see [ModuleScript.LinkedSource](https://developer.roblox.com/api-reference/property/ModuleScript/LinkedSource).

Developers can find more information on using the LinkedSource property in [this tutorial](https://developer.roblox.com/search#stq=Linked%20script).