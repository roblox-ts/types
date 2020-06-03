The JSONDecode function transforms a [JSON object or array][1] into a Lua [table][2] with the following characteristics:

 - Keys of the table are strings or numbers but not both. If a JSON object contains both, string keys are ignored.

 - An empty JSON object generates an empty Lua table `{}`.

 - If the *input* string is not a valid JSON object, this function will throw an error.

To encode a Lua table into a JSON object, you can use [HttpService's](https://developer.roblox.com/api-reference/class/HttpService) [HttpService.JSONEncode](https://developer.roblox.com/api-reference/function/HttpService/JSONEncode) function.

Many web endpoints use JSON, as it is commonly used on the Internet. Visit [JSON.org][3] to become more familiar with the format.

This method can be used regardless of whether HTTP Requests are [enabled](https://developer.roblox.com/api-reference/property/HttpService/HttpEnabled).

[1]: http://robloxdev.com/articles/JSON-Storage-Format

[2]: http://robloxdev.com/articles/Table

[3]: http://www.json.org/
@param input The JSON object being decoded
@returns The decoded JSON object as a Lua table