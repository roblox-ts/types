The TextColor3 property determines the transparency of all the text rendered by a UI element. This property along with [TextLabel.Font](https://developer.roblox.com/api-reference/property/TextLabel/Font), [TextLabel.TextSize](https://developer.roblox.com/api-reference/property/TextLabel/TextSize) and [TextLabel.TextColor3](https://developer.roblox.com/api-reference/property/TextLabel/TextColor3) will determine the visual properties of text. Text is rendered after the text stroke ([TextLabel.TextStrokeTransparency](https://developer.roblox.com/api-reference/property/TextLabel/TextStrokeTransparency)).

Fading text in using a numeric for-loop is a fantastic way to draw a player's attention to text appearing on screen.

```lua
-- Count backwards from 1 to 0, decrementing by 0.1
for i = 1, 0, -.1 do
   textLabel.TextTransparency = i
   wait(.1)
end
```
