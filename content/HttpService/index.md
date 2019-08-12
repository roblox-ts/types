This service allows HTTP requests to be sent from game servers. This enables users to create integration with a wide range of third party services such as analytics and storage. One exciting prospect for this service is that if you run and manage your own website, and communicate with it from Roblox, it opens the possibility of remote server management and real time communication with the server, through your site.

If the limit of 500 http [GET](https://developer.roblox.com/api-reference/function/HttpService/GetAsync) / [POST](https://developer.roblox.com/api-reference/function/HttpService/PostAsync) requests per minute is exceeded, the Service will stall entirely for approximately 30 seconds.

## Enabling HTTP requests

HttpService starts off as disabled by default.

To [enable](https://developer.roblox.com/api-reference/property/HttpService/HttpEnabled) HTTP requests, the HttpService must be enabled through Studio's Game Settings by opening the game's settings via the `Game Settings` button on the `Home` tab of the game's studio window. Within the Game Settings window, navigate to the `Options` tab and select the *On* option under `Allow HTTP Requests`.

## Usage ideas

  * Cross server marketplace

  * Real time stock market

  * Cross server leaderboard

## Restrictions

  * Limit of 500 requests a minute (Per server)

  * This service is not allowed to send requests to any of the Roblox websites such as www.roblox.com or api.roblox.com

## See also

See [here][3] for a detailed guide on sending HTTP requests.Sending HTTP requests.

[3]: http://robloxdev.com/articles/Sending-HTTP-requests