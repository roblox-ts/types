Contains a [Enum.UserInputState](https://developer.roblox.com/search#stq=UserInputState) enum that describes the state of the user's input and indicates how a user’s input is currently interacting with your game.

## Enums

| Name | Value | Description |
| --- | --- | --- |
| Begin | 0 |
| --- | --- |

When an `InputObject`starts to interact with the game. For example, a mouse button down, or a key down, or when a touch begins touching the screen.  |

| Change | 1 |
| --- | --- |

When an `InputObject`has already begun interacting with the game, and part of it's state is changing. For example, a mouse position move, or a thumbstick moving, or when a touch begins to move across the screen.  |

| End | 2 |
| --- | --- |

When an `InputObject`finishes interacting with the game. For example, a mouse button up, or a key up, or when a touch stops touching the screen.  |

| Cancel | 3 |
| --- | --- |

A special circumstance state that indicates this input is now being used for some other function. For example, binding two actions to the same input will cause a function to fire with Cancel.  |

| None | 4 |
| --- | --- |

A state that should never be seen in a game, essentially just marks the end of the enum.  |

## See also

 - [InputObject.Delta](https://developer.roblox.com/api-reference/property/InputObject/Delta)

 - [InputObject.KeyCode](https://developer.roblox.com/api-reference/property/InputObject/KeyCode)

 - [InputObject.Position](https://developer.roblox.com/api-reference/property/InputObject/Position)

 - [InputObject.UserInputType](https://developer.roblox.com/api-reference/property/InputObject/UserInputType)