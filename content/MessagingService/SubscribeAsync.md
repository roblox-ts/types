**Beta**

This feature is in beta and may have unexpected or unreliable behavior.

This function registers a callback to begin listening to the given topic. The callback is invoked when a topic receives a message. It can be called multiple times for the same topic.

## Callback

The callback is invoked with two arguments:

| Field | Summary |
| --- | --- |
| Data | Developer supplied payload |
| Sent | Unix time in seconds at which the message was sent |

It yields until the subscription is properly registered and returns a connection object.

To unsubscribe, call [:Disconnect()](https://developer.roblox.com/search#stq=RBXScriptConnection) on the returned object. Once Disconnect() is called, the callback should never be invoked. Killing the script containing the connections also causes the underlying connect to be unsubscribed.

## See also

  - [MessagingService.PublishAsync](https://developer.roblox.com/api-reference/function/MessagingService/PublishAsync), invokes the supplied callback whenever a message is pushed to the topic
@param topic Determines where to listen for messages
@param callback Function to be invoked whenever a message is received
@returns Connection that can be used to unsubscribe from the topic