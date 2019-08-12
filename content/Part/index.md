## What is a Part

The Part object is a physical object. When it is in the `Workspace`, it will move and interact with other Parts. It can have bonds formed with other Parts, so that the two Parts stay in the same relative position.

Parts are the basic building blocks of any Roblox place. Commonly known as **bricks**, you'll see these the most often of any other objects as almost every place is built out of these. It is possible to stretch a Part to very large sizes and use them for baseplates, or make them very small and use them to create cool looking `Tool`.

## How can I edit a Part

The Part object can be edited using the various studio tools. It is available via either the insert menu, or the *Object Insert menu*. It can also be created using the function:

```lua
Instance.new("Part")
```

## How do I create different shaped Parts

Using the Mesh objects, such as `SpecialMesh`, `BlockMesh`, or `CylinderMesh` objects you can change the shape of them. Using the `Decal` or `Texture` objects, you can place pictures on top of the bricks.

## Changing Parts using scripts

There are many scripting opportunities using the Part object. Many of the other scripting objects, such as `BodyForce` objects operate inside of a Part or other physics based objects. Editing the Part's properties through a script can result in a lot of fun opportunities.