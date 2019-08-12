TintColor determines by what factors the RGB channels of pixel colors are scaled. The effect is multiplicative, so changing this to `(255, 0, 0)` (red) would cause the green and blue channels to be multiplied by 0. This works similarly to how [ImageLabel.ImageColor3](https://developer.roblox.com/api-reference/property/ImageLabel/ImageColor3) works.

## Example

Drag the slider below to see how a red (`Color3.fromRGB(255,0,0)`) TintColor affects this scene. Notice how blue and green colors become very dark.