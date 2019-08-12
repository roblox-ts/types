The Debris service allows the developer to schedule the removal of the object without yielding any code, through the usage of the [Debris.AddItem](https://developer.roblox.com/api-reference/function/Debris/AddItem) method.

After the lifetime argument has elapsed (in seconds) the object is removed in the same manner as [Instance.Destroy](https://developer.roblox.com/api-reference/function/Instance/Destroy).

As Debris is a service it must be created using the [ServiceProvider.GetService](https://developer.roblox.com/api-reference/function/ServiceProvider/GetService) method.

**Why use Debris?**

Beyond creating a bit of a mess, objects that are no longer required can use up system memory and cause the game to run slower over time. For this reason it is always advised to run the [Instance.Destroy](https://developer.roblox.com/api-reference/function/Instance/Destroy) function on objects you no longer need. However in many cases an object may have a specific period of utility after which it needs to be destroyed.

Take the example of projectile that has just been thrown. On first thought, it could be cleaned up using:

```lua
wait(3)
projectile:Destroy()
```

However there are a number of issues with this approach. Firstly, it requires yielding the code with a wait, which is not always desirable. Secondly, before the 3 seconds have elapsed the object may have already been destroyed (for example, if it reached [Workspace.FallenPartsDestroyHeight](https://developer.roblox.com/api-reference/property/Workspace/FallenPartsDestroyHeight)). In this case, the code would error as it tries to destroy an item that has already been destroyed. One answer may be:

```lua
delay(3, function()
	if projectile and projectile.Parent then
		projectile:Destroy()
	end
end)
```

This solves the above issues, as it spawns a new thread to prevent the current one from yielding and checks to see if it can be destroyed. However at this point a simple command has already become quite complicated and an unnecessary thread is being created.

This is where Debris comes in, and the following code addresses all of the above issues.

    Debris:AddItem(projectile, 3)

Debris does not yield the current thread, does not require a new thread and will not error if the object is already destroyed. For this reason it is the recommended method for cleaning up objects with a fixed lifetime.