**Beta**

This feature is in beta and may have unexpected or unreliable behavior.

The MessagingService allows game servers in the same game to communicate with each other in real time (< 1 second) using topics. Topics are developer defined strings (1-80 characters) that game servers can send and receive messages.

Delivery is best effort and not guaranteed. Make sure to architect your game so delivery failures are not critical.

## Limitations

Note: these limits are subject to change at any time.

| Limit | Maximum |
| --- | --- |
| Messages per game server per minute | 150 + 60 * number of players |
| Subscriptions per game server | 5 + 2 * number of players |

## Availability

When released as a beta feature, this was available in live servers but not in Studio.
@rbxts server