RegisterChatCallback binds a function to some chat system event in order to affect the behavior of the Lua chat system. The first argument determines the event (using the `ChatCallbackType` enum) to which the second argument, the function, shall be bound. The default Lua chat system uses [InvokeChatCallback](https://developer.roblox.com/api-reference/function/Chat/InvokeChatCallback) to invoke registered functions. Attempting to register a server- or client- only callback on a peer that isn't a server or client respectively will raise an error. The following sections describe in what ways registered functions will be used.

## OnCreatingChatWindow

Client-only. Invoked before the client constructs the chat window. Must return a table of settings to be merged into the information returned by the ChatSettings module.

## OnClientFormattingMessage

Client-only. Invoked before the client displays a message (whether it is a player chat message, system message, or /me command). This function is invoked with the message object and may (or may not) return a table to be merged into `message.ExtraData`.

## OnClientSendingMessage

Not invoked at this time.

## OnServerReceivingMessage

Server-only. Invoked when the server receives a message from a speaker (note that speakers may not necessarily be a `Player` chatting). This callback is called with the Message object. The function can make changes to the Message object to change the manner in which the message is processed. **The Message object must be returned for this callback to do anything.** Setting this callback can allow the server to, for example:

* Set `message.ShouldDeliver` to false in order to cancel delivery of the message to players (useful for implementing a chat blacklist)

* Get/set the speaker's name color (`message.ExtraData.NameColor`, a Color3) on a message-by-message basis
@param callbackType The callback to which the function shall be registered (this determines in what way the function is called)
@param callbackFunction The function to call when the callback is invoked using Chat:InvokeChatCallback