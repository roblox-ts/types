A RayValue is an object whose purpose is to store a single Ray. Similar to CFrameValue, a RayValue's stored ray cannot be viewed or edited within the Properties window within studio. Instead, use the Command bar to get and set the value of these objects. For example, you can use a line like the one below to create a new RayValue named "Value" within the `Workspace`. It creates a ray at (0, 50, 0) and it faces in the positive-X direction.

`Instance.new("RayValue").Value = Ray.new(Vector3.new(0, 50, 0), Vector3.new(10, 0, 0))`

Since there is no trivial way to edit rays within Studio, sometimes it is better to use a CFrameValue instead (which can be changed through a part or the camera). You can reconstruct a ray from a CFrame using `Ray.new(cf.p, cf.lookVector * dist)`, where `cf` is a given CFrame and `dist` is the length of the Ray you want to construct.

Like all "-Value" objects, this single value is stored in the Value property. The Changed event for this (and other objects like it) will fire with the new value being stored in the object, instead of a string representing the property being changed.