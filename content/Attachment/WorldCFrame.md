WorldCFrame describes the exact CFrame of this attachment in the game world, independent of its `BasePart` parent.

The value of this property is equivalent to multiplying the CFrame of the attachment's parent by its own CFrame:

```lua
local worldCFrame = attachment.CFrame
if attachment.Parent then
worldCFrame
end
```
