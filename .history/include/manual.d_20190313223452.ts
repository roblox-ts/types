/// <reference no-default-lib="true"/>
/// <reference path="roblox.d.ts" />
/// <reference path="generated_enums.d.ts" />
/// <reference path="generated_classes.d.ts" />

// GENERATED API OVERRIDES

interface AnimationController extends RbxInstance {
	/** This event fires whenever the AnimationController begins playing an animation. It returns the AnimationTrack playing.
	 *
	 * The AnimationTrack can be used to access the animation’s playback functions and events. It will only fire for animations playing on the specific AnimationController.
	 *
	 * See Humanoid.AnimationPlayed for the Humanoid variant of this function.
	 */
	readonly AnimationPlayed: RBXScriptSignal<(animationTrack: AnimationTrack) => void>;
	/** Returns a table of all AnimationTracks that are currently being played by an AnimationController.
	 * A typical use for this function is stopping currently playing tracks using AnimationTrack:Stop.
	 * Note this function will not return AnimationTracks that have loaded but are not playing. If the developer wishes to track these they will need to index them manually. See below for one example of how this could be achieved:
	 * ```ts
const animationTracks = new Array<AnimationTrack>();
const track = animationController.LoadTrack(animation);
animationTracks.push(track);
```
	 * ### Stop All Tracks
	 * This sample contains a quick function to stop all playing AnimationTracks on an AnimationController or Humanoid.
	 * ```ts
function stopAllTracks(animationController) {
		for (const track of animationController.GetPlayingAnimationTracks()) {
			track.Stop();
		}
}
```
	 */
	GetPlayingAnimationTracks(): Array<AnimationTrack>;
	/** This function loads an Animation onto an AnimationController, returning an AnimationTrack that can be used for playback.

How to load an Animation
The following code can be used to load an Animation onto an AnimationController.
```ts
const animationTrack = animationController.LoadAnimation(animation)
animationTrack.Play()
```
Should I load an Animation on the client or server?
In order for AnimationTracks to replicate correctly, it’s important to know when they should be loaded on the client (via a LocalScript) or on the server (via a Script). If an AnimationController is created on the server, its animations should be loaded and played on the server unless a player has been assigned network ownership of the Model's root part using BasePart:SetNetworkOwner. If an AnimationController is created on the client it should be animated by the client.

Although it is not recommended, if a developer wishes to play animations on a locally controlled Model from the server they can use the Animator object.

Note this differs slightly for animations playing on Player characters, for more information on this please see Humanoid:LoadAnimation.
*/
	LoadAnimation(animation: Animation): AnimationTrack;
}

interface Animator extends RbxInstance {
	/** Loads an Animation onto an Animator, returning an AnimationTrack. Used to load animations on locally controlled models (such as player characters) from the server.
	 * A Model is considered locally controlled if it has network ownership of the model, clients have network ownership of the local character model by default and other models can be assigned to a different client using BasePart:SetNetworkOwner.
	 * It is best practice to only animate a model from the server if the server has network ownership, and for this reason most developers will not need to use the Animator:LoadAnimation function as they can load animations directly from the Humanoid or AnimationController.
	 * Note if the server has network ownership of the model,
	 * and the AnimationController or Humanoid was created on the server,
	 * then Animator:LoadAnimation does not need to be used as LoadAnimation can be used directly
	 * from the Humanoid or AnimationController on the server.
	 */
	LoadAnimation(animation: Animation): AnimationTrack;
}

interface AssetService extends RbxInstance {
	/** [yielding function] Clones a place which has a placeId equal to the given templatePlaceID, placing it into the inventory of the given player with the given name and description, if they accept when prompted. This method cannot be used to clone places that you do not own, or those which have disabled the use of the CreatePlace API in their place’s configuration. */
	CreatePlaceInPlayerInventoryAsync(
		player: Player,
		placeName: string,
		templatePlaceID: number,
		description?: string,
	): number;
	/** Returns a StandardPages object which contains the name and placeId of places within the current ‘Game’ (otherwise known as a ‘Universe’).
	 * The following code goes through each page of games in the universe and prints the Name and PlaceId.
	 * ```lua
local pages = game:GetService("AssetService"):GetGamePlacesAsync()
while true do
     for _,place in pairs(pages:GetCurrentPage()) do
          print("Name: " .. place.Name)
          print("PlaceId: " .. tostring(place.PlaceId))
     end
     if pages.IsFinished then
          -- we reached the last page of results
          break
     end
     pages:AdvanceToNextPageAsync()
end
```
	*/
	GetGamePlacesAsync(): StandardPages;
	/** [yielding function] Returns an array of assetIds that are contained in a specified package. */
	GetAssetIdsForPackage(packageAssetId: number): Array<number>;
}
