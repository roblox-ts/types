Returns an array of dictionaries, containing information about sets owned by the user.

This includes

* Sets the user is subscribed to.

* Sets that the user created.

* A single set containing the models created by the user.

* A single set containing the decals created by the user.Returns an array of dictionaries, containing information about sets owned by the user.

## Notes

* All values in the dictionaries are [strings](https://developer.roblox.com/articles/String), even if they are a number.

**Dictionary Contents**

| Name | Description |
| --- | --- |
| Name | The name of the set. |
| Description | The description of the set. |
| ImageAssetId | An assetId for the icon of the set. |
| CreatorName | The creator of the set. |
| AssetSetId | The set's unique ID on the website. |
| CategoryId | Identical to AssetSetId |
| SetType | The type of set that this set is. |