RequestQueueSize gives the number of items in `ContentProvider`'s request queue that are waiting to be downloaded.

Items are added to the client's request queue when an asset is used for the first time or [ContentProvider.PreloadAsync](https://developer.roblox.com/api-reference/function/ContentProvider/PreloadAsync) is called.

Developers are advised not to use RequestQueueSize to create loading bars. This is because the queue size can both increase and decrease over time as new assets are added and downloaded. Developers looking to display loading progress should load assets one at a time (see example below).