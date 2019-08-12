ViewportSize describes the dimensions, in pixels, of the client's viewport.

![A visual demonstration of the ViewportSize][1]

 - This property ignores the GUI inset applied by the top bar, meaning the center of the screen can be found at precisely at 50% of the ViewportSize in both directions

 - You can find the position of a [DataType.Vector3](https://developer.roblox.com/search#stq=Vector3) in the world on the viewport using [Camera.WorldToViewportPoint](https://developer.roblox.com/api-reference/function/Camera/WorldToViewportPoint)

[1]: https://developer.roblox.com/assets/5b65d49954f6677d407bbad6/ViewportSize.png