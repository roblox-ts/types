The Pause function halts playback of its `Tween`. However the progress variables of the tween will not be reset, meaning that when [TweenBase.Play](https://developer.roblox.com/api-reference/function/TweenBase/Play) is called again the tween will resume playback from the moment it was paused.

If a developer wishes to reset the progress variables of the tween, they should use [TweenBase.Cancel](https://developer.roblox.com/api-reference/function/TweenBase/Cancel).

This means a tween paused half way through its animation will take half of its duration to complete when resumed.