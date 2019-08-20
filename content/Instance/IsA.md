IsA returns true if the `Instance`'s class is **equivalent to** or a **subclass** of a given class. This function is similar to the **instanceof** operators in other languages, and is a form of [type introspection](https://en.wikipedia.org/wiki/Type_introspection). To ignore class inheritance, test the [ClassName](https://developer.roblox.com/api-reference/property/Instance/ClassName) property directly instead. For checking native Lua data types (number, string, etc) use the functions `type` and `typeof`.

Most commonly, this function is used to test if an object is some kind of part, such as `Part` or `WedgePart`, which inherits from `BasePart` (an abstract class). For example, if your goal is to change all of a [Character](https://developer.roblox.com/api-reference/property/Player/Character)'s limbs to the same color, you might use [GetChildren](https://developer.roblox.com/api-reference/function/Instance/GetChildren) to iterate over the children, then use IsA to filter non-`BasePart` objects which lack the `BrickColor` property:

```lua
local function paintFigure(character, color)
	-- Iterate over the child objects of the character
	for _, child in pairs(character:GetChildren()) do
		-- Filter out non-part objects, such as Shirt, Pants and Humanoid
		-- R15 use MeshPart and R6 use Part, so we use BasePart here to detect both:
		if child:IsA("BasePart") then
			child.BrickColor = color
		end
	end
end
paintFigure(game.Players.Player.Character, BrickColor.new("Bright blue"))
```

Since all classes inherit from `Instance`, calling `object:IsA("Instance")` will always return true.
@param className The class against which the Instance's class will be checked. Case-sensitive.
@returns Describes whether the Instance's class matched or is a subclass of the given class