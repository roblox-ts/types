/// <reference path="../include/roblox.d.ts" />

declare const partCollection: Collection<Part>;

partCollection.OnTouched = (part, otherPart) => {
	const typedPart: Part = part;
	const typedOtherPart: BasePart = otherPart;
};

partCollection.OnAdded = part => {
	const typedPart: Part = part;
};

partCollection.ForEach(part => {
	const typedPart: Part = part;
});

// @ts-expect-error
partCollection.OnTouched?.Connect(() => {});

declare const instanceCollection: Collection;

// @ts-expect-error
instanceCollection.OnTouched = () => {};
