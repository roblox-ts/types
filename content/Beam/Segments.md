Sets how many straight segments the `Beam` is made up of.

This value can be any integer greater than 0. The default value is 10.

## Beam Segments and curvature

Rather than being a perfect curve, a beam is made up of straight segments. The more segments, the higher the resoloution of the curve. See the image below for a demonstration of this:

![enter image description here][1]

For more information on how a `Beam` is configured to curve, see the page for [Beam.CurveSize0](https://developer.roblox.com/api-reference/property/Beam/CurveSize0).

## Beam Segments with Color and Transparency

The [Beam.Color](https://developer.roblox.com/api-reference/property/Beam/Color) and [Beam.Transparency](https://developer.roblox.com/api-reference/property/Beam/Transparency) properties require a certain number of segments to display correctly. This is because each segment can only show a transition between two colors or transparencies. Therefore a `Beam` requires at least n-1 segments to display correctly, where n is the number of keypoint associated with the `Beam`'s [Beam.Color](https://developer.roblox.com/api-reference/property/Beam/Color) and [Beam.Transparency](https://developer.roblox.com/api-reference/property/Beam/Transparency).

[1]: https://developer.roblox.com/assets/5b4e0a69d0af7f6e0ba4ae67/BeamSegments.gif