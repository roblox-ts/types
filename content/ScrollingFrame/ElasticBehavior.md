This property determines when elastic scrolling is allowed. It can be used to dictate if and when the [ScrollingFrame](https://developer.roblox.com/api-reference/class/ScrollingFrame) canvas is elastic. Defaults to WhenScrollable.

## What's the Differences Between Elastic and Non-Elastic

### Elastic

The image below demonstrates Enum.Elasticity.Always an Enum.Elasticity.WhenScrollable when the canvas is scrollable:

![Enum.Elasticity.Always][1]

### Non-Elastic

The image below demonstrates Enum.Elasticity.Never:

![Enum.Elasticity.Never][2]

## Enums

It can be set to several [Enum.ElasticBehavior](https://developer.roblox.com/search#stq=ElasticBehavior) enum values, which determine how elastic scrolling behaves:

| Name | Description |
| --- | --- |
| Always | Regardless of scrolling, you can always move the canvas a bit outside the bounds |
| Never | You can never move the canvas outside the rect bounds |
| WhenScrollable | (default) Elastic scrolling is allowed when canvas size is larger than the rect size |

## See also

  - [ScrollingFrame.ScrollingDirection](https://developer.roblox.com/api-reference/property/ScrollingFrame/ScrollingDirection), the direction scrolling is allowed in this scrolling frame

[1]: https://developer.roblox.com/assets/5c6366ca0a42866d41de58a4/ElasticityAlways.gif

[2]: https://developer.roblox.com/assets/5c6366e26d61b3c84129fe2f/ElasticityNever.gif