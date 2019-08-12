When set to true, `Part` will be outlined with a specific color, depending on the state of its root simulation body.

## Body Types

| Color | Body Type | Description |
| --- |
|  | Real Time Body | Physics Body that is always simulated in real time, and is never throttled. Used for Humanoids. |
|  | Free Fall Body | Physics Body that is freely moving with no physical contact. |
|  | Joint Body | Physics Body that is being influenced by a physically simulated joint, such as a Motor or a Hinge. |
|  | Contact Body | Physics Body that is in contact with another physics body. |
|  | Symmetric Contact Body | Physics Body that is experiencing a torquing force, while in contact with another body. |
|  | Vertical Contact Body | Physics Body that is moving very little along the Y plane, while in contact with another body. |