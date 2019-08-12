The amount of time, in seconds, that the game has been running.

Despite the title, this value is currently not 'Distributed' across the client and the server. Instead, on the server it represents how long the server has been running. On the client, it represents how long the client has been connected to the server.

Developers should not rely on the above behavior, and it is possible this property will be synchronized across clients and the server in the future.

Those looking for the time since the program started running should use the 'time' function instead. See below for a comparison between DistributedGameTime and its alternatives.

```lua
print(workspace.DistributedGameTime) --&gt; Time the game started running
print(os.time()) --&gt; Time since epoch (1 January 1970, 00:00:00) UTC
print(tick()) --&gt; Time since epoch (1 January 1970, 00:00:00) system time
print(time()) --&gt; Time the game started running
print(elapsedTime()) --&gt; Time since Roblox started running
```
