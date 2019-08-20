Forces the client to unfocus the TextBox.

The _submitted_ parameter allows you to over-ride the _enterPressed_ parameter in the [FocusLost](https://developer.roblox.com/api-reference/event/TextBox/FocusLost) event.

## Notes

* This item should be used with a `LocalScript` in order to work as expected in online mode.

## Example

The code shown below will force the client to unfocus the 'TextBox' 5 seconds after it's selected:

```lua
local TextBox = script.Parent
TextBox.Focused:Connect(function()
	wait(5)
	TextBox:ReleaseFocus()
end)
```

Please be aware that the above example assumes that it's in a LocalScript, as a child of a TextBox.