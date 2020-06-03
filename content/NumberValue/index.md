A NumberValue is an object whose purpose is to store a single [Lua number][1], defined to be [double-precision floating point number][2], or more commonly known as a **double**. This stores a number in 64 bits (8 bytes) using the IEEE 754 representation (1 sign bit, 11 exponent bits and 52 fractional bits). The maximum numerical value that may be stored is 2^53, or 9,007,199,254,740,992, and the minimum is -9,007,199,254,740,992. It stores up to 15 digits of precision.

Like all "-Value" objects, this single value is stored in the Value property. The Changed event for this (and other objects like it) will fire with the new value being stored in the object, instead of a string representing the property being changed.

[1]: https://www.lua.org/pil/2.3.html

[2]: https://en.wikipedia.org/wiki/Double-precision_floating-point_format