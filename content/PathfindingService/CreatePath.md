Creates a `Path` object based on various agent parameters (see&nbsp;below).

## Agent Parameters| Key | Type | Default | Description |
| --- | --- | --- | --- |
| **AgentRadius** | integer | 2 | Humanoid radius. Used to determine the minimum separation from obstacles. |
| **AgentHeight** | integer | 5 | Humanoid height. Empty space smaller than this value will be marked as non-traversable, for instance the space under stairs. |
| **AgentCanJump** | boolean | true | Sets whether off-mesh | links for jumping are allowed.

```lua
```

@param agentParameters Lua table which lets you fine-tune the path for the size of the **agent** (the humanoid that will move along the path). See <a href="#agent-params">Agent&nbsp;Parameters</a>.