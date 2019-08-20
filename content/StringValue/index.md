A StringValue is an object whose purpose is to store a single [Lua string][1]. The length of the string can't be more than 200,000 characters (this will cause a  "String too long" error). Like all "-Value" objects, this single value is stored in the Value property. The Changed event for this (and other objects like it) will fire with the new value being stored in the object, instead of a string representing the property being changed.

If the string is too long to be displayed in the Value field within Properties window, it will partially show the string contents followed by an ellipsis (...).

[1]: https://www.lua.org/pil/2.4.html