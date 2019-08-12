The Kick method allows a game to gracefully disconnect a client from the game and optionally provide a message to the disconnected player. This is useful for moderating abusive players. When used in conjunction with a `DataStore`, it is possible to create ban lists with expiration dates. Only allow specific whitelisted users whom you trust to trigger this method on other players.

When used from a LocalScript, only the local player's client can be kicked.
@param message The message to show the player upon kicking.