GetKeyframeSequenceAsync returns a `KeyframeSequence` based on the specified assetId. The assetId must correspond to an animation. The function will yield until the `KeyframeSequence` is loaded from the website. Because this is a webcall it should wrapped in a pcall.
@param assetId The content ID of the animation.
@returns The `KeyframeSequence` found.