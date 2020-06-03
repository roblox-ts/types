This `SoundService` property determines whether or not `Sound` playback will replicate from the client to the server and onto other clients.

* When **RespectFilteringEnabled** is set to false (default), sounds played by a client will replicate to the server and play for other clients.

* When **RespectFilteringEnabled** is set to true, sound playback will not replicate from client-side scripts ([LocalScripts](https://developer.roblox.com/api-reference/class/LocalScript)).