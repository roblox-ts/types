JSONEncode transforms a Lua table into a JSON object or array.

 - Keys of the table must be either strings or numbers. If a table

   contains both, an array takes priority (string keys are ignored).

 - An empty Lua table `{}` generates an empty JSON array.

 - The value `nil` is never generated.

 - Cyclic table references generate the string `*** certain entries

   belong to the same table ***`.

Many web endpoints use JSON, and is commonly used on the Internet. Visit [JSON.org][1] to become more familiar with the format.

This method can be used regardless if HTTP Requests are enabled.

[1]: http://www.json.org/