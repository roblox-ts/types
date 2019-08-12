This property is the content ID of the animation an `Animation` object is referencing. Once an animation has been created and uploaded to Roblox the content ID can be found in the uploaded animation’s URL.

This URL is presented immediately after an animation has been uploaded to Roblox, in the Animation Editor export window. It can also be found in the Develop tab on the Roblox site, under ‘Animations’.

It’s important to remember the URL is not the same as the content ID. It will work when pasted directly into the AnimationId property of an `Animation` in Roblox studio, as Studio will automatically correct it, however if it is being set from a `Script` then the correct content ID will need to be used, using the number from the URL. For example:

```lua
"https://www.roblox.com/catalog/507771019" -- Web URL (will not work)
"http://www.roblox.com/asset/?id=507771019" -- Content ID (will work)
"rbxassetid://507771019" -- Content ID (alternative version, will work)
```

Note, the animation will need to be loaded onto an `AnimationTrack` in order to play it.