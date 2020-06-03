Loads an `Animation` onto an `Animator`, returning an `AnimationTrack`. Used to load animations on locally controlled models (such as player characters) from the server.

A `Model` is considered locally controlled if it has network ownership of the model, clients have network ownership of the local character model by default and other models can be assigned to a different client using [BasePart.SetNetworkOwner](https://developer.roblox.com/api-reference/function/BasePart/SetNetworkOwner).

It is best practice to only animate a model from the server if the server has network ownership, and for this reason most developers will not need to use the [Animator.LoadAnimation](https://developer.roblox.com/api-reference/function/Animator/LoadAnimation) function as they can load animations directly from the `Humanoid` or `AnimationController`.

Note if the server has network ownership of the model, and the `AnimationController` or `Humanoid` was created on the server, then [Animator.LoadAnimation](https://developer.roblox.com/api-reference/function/Animator/LoadAnimation) does not need to be used as `LoadAnimation` can be used directly from the `Humanoid` or `AnimationController` on the server.
@param animation The `Animation` to be used.
@returns The `AnimationTrack` created.