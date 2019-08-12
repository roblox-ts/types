Create a deep copy of a Roblox Instance and all of its descendants, with all the same property values. Returns a new, separate object whose Parent property is `nil`. The next step after cloning an object is setting the Parent, and optionally re-positioning the new object if it has 3d geometry.

Any references to objects not in the cloned hierarchy are maintained (i.e. if an ObjectValue refers to an external object it will refer to the same external object). Any internal references are relative (ie if an ObjectValue refers to an internal object it will refer to a similar internal object in the copy).

Any objects in the cloned object's hierarchy (including the object itself) that does not have the `Archivable` property enabled are ignored. If the root object is not Archivable, the function returns `nil`.

Clone is useful for regenerating models by saving the original and spawning copies. It's also useful for taking a snapshot of the current state of a model if it is changing over time.