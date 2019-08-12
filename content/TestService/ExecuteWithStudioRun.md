When set to true, the TestService will be executed when using the _Run_ action in Roblox Studio.

## Notes

* If the [TestService.NumberOfPlayers](https://developer.roblox.com/api-reference/property/TestService/NumberOfPlayers) property is set to a value above 0, running the game will open `NumberOfPlayers + 1` studio windows, where one window is a server, and the rest are players connected to that server.

	* Try to keep this value within a rational range (1 to 8 players at most), or else your computer's CPU will get overloaded.