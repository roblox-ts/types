An object created when an input begins that describes a particular user input, such as mouse movement, touches, keyboard, and more.

The object's properties vary according the the type of input. Properties can be used to determine input [state](https://developer.roblox.com/search#stq=UserInputState), [type](https://developer.roblox.com/search#stq=UserInputType), [position](https://developer.roblox.com/search#stq=Vector3), [delta](https://developer.roblox.com/search#stq=Vector3), and the [Enum.KeyCode](https://developer.roblox.com/search#stq=KeyCode) that triggered the input (if applicable).

Once created at the beginning of an input, the same object persists and is updated until the input ends. As a result, you can track the object's changes using the [Changed](https://developer.roblox.com/api-reference/event/Instance/Changed) event as the user changes the input in question. You can also place these objects into a list of active inputs track and interact with the object after it's creation by an event such as [UserInputService.InputBegan](https://developer.roblox.com/api-reference/event/UserInputService/InputBegan).

#See also

 - Most `UserInputService` events and functions return an InputObject to describe user input events and states

 -  `GuiObject` events related to user input return an InputObject to describe user input