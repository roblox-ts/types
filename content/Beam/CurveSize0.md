Determines, along with [Beam.Attachment0](https://developer.roblox.com/api-reference/property/Beam/Attachment0) the position of the first control point in the Beam's Bézier curve.

The position of this point can be determined by the following equation:

```lua
Beam.CurveSize0)
```

## Beam Curvature

Beams are configured to use a cubic [Bézier curve][1]. This means they are not constrained to straight lines, and the curve of the beam can be modified by changing CurveSize0, [Beam.CurveSize1](https://developer.roblox.com/api-reference/property/Beam/CurveSize1) and the orientation of the beam's `Attachment`s.

Cubic Bézier curves are formed of four control points. They are determined as follows:

 - **P0**: The start of the beam, the position of [Beam.Attachment0](https://developer.roblox.com/api-reference/property/Beam/Attachment0)

 - **P1**: CurveSize0 studs away from [Beam.Attachment0](https://developer.roblox.com/api-reference/property/Beam/Attachment0), in [Beam.Attachment0](https://developer.roblox.com/api-reference/property/Beam/Attachment0)'s positive X direction.

 - **P2**: [Beam.CurveSize1](https://developer.roblox.com/api-reference/property/Beam/CurveSize1) studs away from [Beam.Attachment1](https://developer.roblox.com/api-reference/property/Beam/Attachment1), in [Beam.Attachment1](https://developer.roblox.com/api-reference/property/Beam/Attachment1)'s negative X direction.

 - **P3**: The end of the beam, the position of [Beam.Attachment1](https://developer.roblox.com/api-reference/property/Beam/Attachment1)

The beam starts at P0, goes towards P1, and arrives at P3, from the direction of P2. The beam will not necessarily pass through P1 and P2.

 See the images below for a visual demonstration.

![BeamCurve1][2]

![BeamCurve2][3]

[1]: https://en.wikipedia.org/wiki/B%C3%A9zier_curve

[2]: https://developer.roblox.com/assets/5b440a3b46591e820b82a430/BeamCurve1.png

[3]: https://developer.roblox.com/assets/5b4faa21f80cc8770b8530bb/BeamCurve2.png