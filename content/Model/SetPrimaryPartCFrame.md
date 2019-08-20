Sets the [BasePart.CFrame](https://developer.roblox.com/api-reference/property/BasePart/CFrame) of the `Model`'s [Model.PrimaryPart](https://developer.roblox.com/api-reference/property/Model/PrimaryPart). All other parts in the model will also be moved and will maintain their orientation and offset respective to the [Model.PrimaryPart](https://developer.roblox.com/api-reference/property/Model/PrimaryPart).

Note, this function will throw an error if no [Model.PrimaryPart](https://developer.roblox.com/api-reference/property/Model/PrimaryPart) exists for the model. This can cause issues if, for example, the primary part was never set or has been destroyed. Therefore, it is recommended the developer check the [Model.PrimaryPart](https://developer.roblox.com/api-reference/property/Model/PrimaryPart) exists before using this function. For example:

```lua
if model.PrimaryPart then
	model:SetPrimaryPartCFrame(cf)
end
```

A common use for this is for the 'teleportation' of player characters to different positions.
@param cframe The `DataType/CFrame` to be set.