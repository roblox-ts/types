The **RequestAsync()** function sends an HTTP request using a dictionary to specify the request data, such as the target URL, method, headers and request body data. It returns a dictionary that describes the response data received.

## Request Dictionary Fields

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| **Url** | string | yes | The target URL for this request. Must use `http` or `https` protocols. |
| **Method** | string | no | The HTTP method being used by this request, most often GET or POST. |
| **Headers** | dictionary | no | A dictionary of headers to be used with this request. Most HTTP headers are accepted here, but not all. |
| **Body** | string | no | The request body. Can be any string, including binary data. Must be excluded when using the GET or HEAD HTTP methods. It might be necessary to specify the `Content-Type` header when sending JSON or other formats. |

### HTTP Headers

In the request dictionary, you can specify custom HTTP headers to use in the request. However, some headers cannot be specified. For example, `Content-Length` is determined from the request body. `User-Agent` and `Roblox-Id` are locked by Roblox. Other headers like `Accept` or `Cache-Control` use default values but can be overridden. More commonly, some REST APIs may require API keys or other service authentication to be specified in request headers.

This method does not detect the format of body content. Many web servers require the `Content-Type` header be set appropriately when sending certain formats. Other methods of `HttpService` use the [HttpContentType](https://developer.roblox.com/search#stq=HttpContentType) enum; for this method set the `Content-Type` header appropriately: [text.plain](https://developer.roblox.com/search#stq=plain), [text.xml](https://developer.roblox.com/search#stq=xml), [application.xml](https://developer.roblox.com/search#stq=xml), [application.json](https://developer.roblox.com/search#stq=json) or [application.x-www-form-urlencoded](https://developer.roblox.com/search#stq=x-www-form-urlencoded) are replacement `Content-Type` header values for the respective enum values.

## Response Dictionary Fields

The function returns a dictionary containing the following fields:

| Name | Type | Description |
| --- | --- | --- |
| **Success** | boolean | The success status of the request. This is true if and only if the **StatusCode** lies within the range [200, 299]. |
| **StatusCode** | integer | The HTTP response code identifying the status of the response. |
| **StatusMessage** | string | The status message that was sent back. |
| **Headers** | dictionary | A dictionary of headers that were set in this response. |
| **Body** |  | The request body (content) received in the response. |

## Error Cases

This method raises an error if the response times out or if the target server rejects the request. If a web service goes down for some reason, it can cause scripts that use this method to stop functioning altogether. It is often a good idea to wrap calls to this method in `pcall` and gracefully handle failure cases if the required information isn't available.

## Limitations

The current limitation for sending and receiving HTTP requests is 500 requests per minute. Requests over this threshold will fail. Additionally, Roblox domains are blacklisted. This means that HTTP requests cannot be sent to any Roblox owned site, such as [www.roblox.com][3].

[3]: https://www.roblox.com
@param requestOptions A dictionary containing information to be requested from the server specified.
@returns A dictionary containing response information from the server specified.
@rbxts server