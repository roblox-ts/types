The Heartbeat event fires every **frame** in the `RunService`. The step argument indicates how much time has passed between frames - usually around 1/60th of a second.

Please note that this will vary depending on the performance of the machine. If the game is only running at 40 FPS, that means that Heartbeat will fire 40 times per second, and the step argument will be roughly 1/40th of a second.