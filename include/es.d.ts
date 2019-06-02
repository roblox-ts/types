/// <reference no-default-lib="true"/>

interface Boolean {}
interface IArguments {}
interface Number {}
interface Object {}
interface RegExp {}
interface Function {}
interface CallableFunction extends Function {}
interface NewableFunction extends Function {}

/** @rbxts array */
interface ArrayLike<T> {
	/**
	 * Gets the length of the array. This is one higher than the highest index defined in an array.
	 */
	length(): number;
	readonly [n: number]: T;
}

interface ObjectConstructor {
	/**
	 * Copy the values of all of the enumerable own properties from one or more source objects to a
	 * target object. Returns the target object.
	 * @param target The target object to copy to.
	 * @param source The source object from which to copy properties.
	 */
	assign<T extends object, U>(target: T, source: U): T & U;

	/**
	 * Copy the values of all of the enumerable own properties from one or more source objects to a
	 * target object. Returns the target object.
	 * @param target The target object to copy to.
	 * @param source1 The first source object from which to copy properties.
	 * @param source2 The second source object from which to copy properties.
	 */
	assign<T extends object, U, V>(target: T, source1: U, source2: V): T & U & V;

	/**
	 * Copy the values of all of the enumerable own properties from one or more source objects to a
	 * target object. Returns the target object.
	 * @param target The target object to copy to.
	 * @param source1 The first source object from which to copy properties.
	 * @param source2 The second source object from which to copy properties.
	 * @param source3 The third source object from which to copy properties.
	 */
	assign<T extends object, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;

	/**
	 * Copy the values of all of the enumerable own properties from one or more source objects to a
	 * target object. Returns the target object.
	 * @param target The target object to copy to.
	 * @param sources One or more source objects from which to copy properties
	 */
	assign(target: object, ...sources: Array<any>): any;

	/**
	 * Returns the names of the enumerable properties and methods of an object.
	 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	 */
	keys<T>(o: Array<T>): Array<number>;
	keys<T>(o: Set<T>): Array<T>;
	keys<K, V>(o: Map<K, V>): Array<K>;
	keys<T>(o: T): Array<keyof T>;
	keys(o: {}): Array<string>;

	/**
	 * Returns an array of values of the enumerable properties of an object
	 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	 */
	values<T>(o: Array<T>): Array<T>;
	values<T>(o: Set<T>): Array<true>;
	values<K, V>(o: Map<K, V>): Array<V>;
	values<T>(o: T): Array<T[keyof T]>;
	values<T>(o: { [s: string]: T } | ArrayLike<T>): Array<T>;
	values(o: {}): Array<any>;

	/**
	 * Returns an array of key/values of the enumerable properties of an object
	 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	 */
	entries<T>(o: Array<T>): Array<[number, T]>;
	entries<T>(o: Set<T>): Array<[T, true]>;
	entries<K, V>(o: Map<K, V>): Array<[K, V]>;
	entries<T>(o: T): Array<[keyof T, T[keyof T]]>;
	entries<T>(o: { [s: string]: T } | ArrayLike<T>): Array<[string, T]>;
	entries<T extends { [key: string]: any }, K extends keyof T>(o: T): Array<[K, T[K]]>;

	/**
	 * Returns true if empty, otherwise false.
	 */
	isEmpty(o: {}): boolean;

	/**
	 * Returns a shallow copy of the object
	 */
	copy<T extends object>(o: T): T;

	/**
	 * Returns a deep copy of the object
	 */
	deepCopy<T extends object>(o: T): T;

	/**
	 * Returns true if
	 * - each member of `a` equals each member of `b`
	 * - `b` has no members that do not exist in `a`.
	 *
	 * Searches recursively.
	 */
	deepEquals(a: object, b: object): boolean;
}

/**
 * Provides functionality common to all JavaScript objects.
 */
declare const Object: ObjectConstructor;

/** @rbxts string */
interface String extends Iterable<string> {
	/** The current number of characters in the string. */
	length(): number;

	/** Returns a new string equivalent to this string but with the whitespace removed from the start and end. */
	trim(): string;

	/** Returns a new string equivalent to this string but with the whitespace removed from the start. */
	trimStart(): string;

	/** Returns a new string equivalent to this string but with the whitespace removed from the end. */
	trimEnd(): string;

	/**
	 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
	 * The padding is applied from the start (left) of the current string.
	 *
	 * @param maxLength The length of the resulting string once the current string has been padded.
	 *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
	 *
	 * @param fillString The string to pad the current string with.
	 *        If this string is too long, it will be truncated and the left-most part will be applied.
	 *        The default value for this parameter is " " (U+0020).
	 */
	padStart(maxLength: number, fillString?: string): string;

	/**
	 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
	 * The padding is applied from the end (right) of the current string.
	 *
	 * @param maxLength The length of the resulting string once the current string has been padded.
	 *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
	 *
	 * @param fillString The string to pad the current string with.
	 *        If this string is too long, it will be truncated and the left-most part will be applied.
	 *        The default value for this parameter is " " (U+0020).
	 */
	padEnd(maxLength: number, fillString?: string): string;

	/**
	 * Returns a section of a string.
	 * @param start The index to the beginning of the specified portion of stringObj.
	 * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
	 * If this value is not specified, the substring continues to the end of stringObj.
	 */
	slice(start: number, end?: number): string;
}

interface Symbol {
	/**
	 * Returns a string representation of this data structure.
	 */
	toString(): string;
}

interface SymbolConstructor {
	/**
	 * A method that returns the default iterator for an object. Called by the semantics of the
	 * for-of statement.
	 */
	readonly iterator: symbol;

	/**
	 * Returns a new unique Symbol value.
	 * @param  description Description of the new Symbol object.
	 */
	(description?: string | number): symbol;

	/**
	 * Returns a Symbol object from the global symbol registry matching the given key if found.
	 * Otherwise, returns a new symbol with this key.
	 * @param key key to search for.
	 */
	for(key: string): symbol;

	/**
	 * Returns a key from the global symbol registry matching the given Symbol if found.
	 * Otherwise, returns a undefined.
	 * @param sym Symbol to find the key for.
	 */
	keyFor(sym: symbol): string | undefined;
}
declare var Symbol: SymbolConstructor;

type IteratorResult<T> =
	| {
			done: false;
			value: T;
	  }
	| {
			done: true;
			value: undefined;
	  };

interface Iterator<T> {
	next: (value?: any) => IteratorResult<T>;
	//	return?: (value?: any) => IteratorResult<T>;
	//	throw?: (e?: any) => IteratorResult<T>;
}

interface Iterable<T> {
	[Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T> {
	[Symbol.iterator](): IterableIterator<T>;
}

type IterableFunction<T> = Iterable<T> & (() => T | undefined);

/** @rbxts array */
interface ReadonlyArray<T> extends ArrayLike<T>, Iterable<T> {
	/**
	 * Returns true if empty, otherwise false.
	 */
	isEmpty(): boolean;

	/**
	 * Returns a string representation of this data structure.
	 */
	toString(): string;

	/**
	 * Creates a new array and shallow copies `this` and the items into the new array, in that order.
	 * @param items Additional items to add to the end of array1.
	 */
	concat(...items: Array<ReadonlyArray<T>>): Array<T>;

	/**
	 * Adds all the elements of an array separated by the specified separator string.
	 * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
	 */
	join(separator?: string): string;

	/**
	 * Returns a section of an array.
	 * @param start The beginning of the specified portion of the array.
	 * @param end The end of the specified portion of the array.
	 */
	slice(start?: number, end?: number): Array<T>;

	/**
	 * Returns the index of the first occurrence of a value in an array.
	 * @param searchElement The value to locate in the array.
	 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
	 */
	indexOf(searchElement: T, fromIndex?: number): number;

	/**
	 * Returns the index of the last occurrence of a specified value in an array.
	 * @param searchElement The value to locate in the array.
	 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
	 */
	lastIndexOf(searchElement: T, fromIndex?: number): number;

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
	 */
	every(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => boolean): boolean;

	/**
	 * Determines whether the specified callback function returns true for any element of an array.
	 * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
	 */
	some(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => boolean): boolean;

	/**
	 * Performs the specified action for each element in an array.
	 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
	 */
	forEach(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => void): void;

	/**
	 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
	 * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
	 */
	map<U>(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => U): Array<U>;

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
	 */
	filter<S extends T>(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => value is S): Array<S>;

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
	 */
	filter(callbackfn: (value: T, index: number, array: ReadonlyArray<T>) => boolean): Array<T>;

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
	 */
	reduce(
		callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => T,
		initialValue?: T,
	): T;

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
	 */
	reduce<U>(
		callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => U,
		initialValue: U,
	): U;

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
	 */
	reduceRight(
		callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => T,
		initialValue?: T,
	): T;

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
	 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
	 */
	reduceRight<U>(
		callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => U,
		initialValue: U,
	): U;

	/**
	 * Returns a copy of the array with elements in reverse order. The compiler will automatically optimize this away when used in-line in a for..of loop.
	 */
	reverse(): Array<T>;

	/**
	 * Returns an array of every index-value pair in this array. The compiler will automatically optimize this away when used in-line in a for..of loop.
	 */
	entries(): Array<[number, T]>;

	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 * @param predicate find calls predicate once for each element of the array, in ascending
	 * order, until it finds one where predicate returns true. If such an element is found, find
	 * immediately returns that element value. Otherwise, find returns undefined.
	 */
	find<S extends T>(predicate: (value: T, index: number, obj: ReadonlyArray<T>) => value is S): S | undefined;
	find(predicate: (value: T, index: number, obj: ReadonlyArray<T>) => boolean): T | undefined;

	/**
	 * Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.
	 * @param predicate findIndex calls predicate once for each element of the array, in ascending
	 * order, until it finds one where predicate returns true. If such an element is found, find
	 * immediately returns the index at which it was found. Otherwise, find returns -1.
	 */
	findIndex(predicate: (value: T, index: number, obj: ReadonlyArray<T>) => boolean): number;

	/**
	 * Returns a shallow copy of the array
	 */
	copy(): this;

	/**
	 * Returns a deep copy of the array
	 */
	deepCopy(): this;

	/**
	 * Returns true if
	 * - each member of `a` equals each member of `b`
	 * - `b` has no members that do not exist in `a`.
	 *
	 * Searches recursively.
	 */
	deepEquals<U>(other: Array<U>): boolean;

	/**
	 * The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. Also removes empty slots in arrays.
	 * @param depth The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
	 * @returns A new array with the sub-array elements concatenated into it.
	 */
	flat(depth?: number): Array<T>;

	/**
	 * The sort() method copies the elements of an array and returns a sorted array. The default sort order is built upon converting the elements into strings, then comparing via the < operator.
	 * @param compareFunction Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element. (a, b) => a - b is a good starting point for numbers. If compareFunction(a, b) is less than 0, sort a to an index lower than b (i.e. a comes first), and vice versa.
	 */
	sort(compareFunction?: (a: T, b: T) => number): Array<T>;
}

/** @rbxts array */
interface Array<T> extends ReadonlyArray<T> {
	/**
	 * Appends new elements to an array and returns the new length of the array.
	 * @param items New elements of the Array.
	 */
	push(...items: Array<T>): number;

	/**
	 * Removes the last element from an array and returns it.
	 */
	pop(): T | undefined;

	/**
	 * Removes the first element from an array and returns it.
	 */
	shift(): T | undefined;

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 * @param start The zero-based location in the array from which to start removing elements.
	 * @param deleteCount The number of elements to remove.
	 */
	splice(start: number, deleteCount?: number): Array<T>;

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 * @param start The zero-based location in the array from which to start removing elements.
	 * @param deleteCount The number of elements to remove.
	 * @param items Elements to insert into the array in place of the deleted elements.
	 */
	splice(start: number, deleteCount: number, ...items: Array<T>): Array<T>;

	/**
	 * Inserts new elements at the start of an array and returns the new length of the array.
	 * @param items  Elements to insert at the start of the Array.
	 */
	unshift(...items: Array<T>): number;

	/**
	 * Shallow copies part of an array to another location in the same array and returns it, without modifying its size.
	 * @param target Zero based index at which to copy the sequence to. If negative, target will be counted from the end. If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, the copied sequence will be trimmed to fit arr.length.
	 * @param start Zero based index at which to start copying elements from. If negative, start will be counted from the end. If start is omitted, copyWithin will copy from the start (defaults to 0).
	 * @param end Zero based index at which to end copying elements from. copyWithin copies up to but not including end. If negative, end will be counted from the end. If end is omitted, copyWithin will copy until the end (default to arr.length).
	 */
	copyWithin(target: number, start?: number, end?: number): this;

	/**
	 * Inserts `value` into the array at `index` and shifts array members forwards if needed.
	 */
	insert(index: number, value: T): void;

	/**
	 * Removes the array member at `index` and returns it and shifts array members backwards if needed.
	 */
	remove(index: number): T | undefined;

	/**
	 * Removes a value at `index` from this array, replacing it with the last value in this array and popping the last value.
	 * Returns the value removed from `index` in this way if it exists, otherwise `undefined`.
	 * @param index The index to remove from this array and return
	 */
	unorderedRemove(index: number): T | undefined;

	[n: number]: T;
}

interface ArrayConstructor {
	/** Instantiates a new array.
	 * If length is provided, roblox-TS will load `length` amount of nil's into the new array.
	 * Note that this does not affect the `length` property of the array,
	 * it only keeps it from needing to resize to this `length` later.
	 *
	 * @param length A literal integer between 0 and 200 inclusive, which is the number of nil's to push onto the array
	 */
	new <T>(length?: number): Array<T>;
}

declare const Array: ArrayConstructor;

/** @rbxts array */
interface TemplateStringsArray extends Array<string> {}

/** @rbxts map */
interface ReadonlyMap<K, V> extends Iterable<[K, V]> {
	/**
	 * Returns true if empty, otherwise false.
	 */
	isEmpty(): boolean;

	/**
	 * Returns a string representation of this data structure.
	 */
	toString(): string;

	/**
	 * Performs the specified action for each (element / pair of elements) in the Map
	 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each (element / pair of elements) in the array.
	 */
	forEach(callbackfn: (value: V, key: K, self: this) => void): void;

	/**
	 * Returns the number of elements in the Map
	 */
	size(): number;

	/**
	 * Returns an array with all values of this Map
	 */
	values(): Array<V>;

	/**
	 * Returns a boolean for whether the given key exists in the Map
	 */
	has(key: K): boolean;

	/**
	 * Returns the value associated with the given key
	 */
	get(key: K): V | undefined;

	/**
	 * Returns an array of tuples for all members of this Map
	 */
	entries(): Array<[K, V]>;

	/**
	 * Returns an array with all of this map's keys
	 */
	keys(): Array<K>;
}

interface ReadonlyMapConstructor {
	new <K = any, V = any>(entries?: ReadonlyArray<[K, V]> | null): ReadonlyMap<K, V>;
}
declare var ReadonlyMap: ReadonlyMapConstructor;

/** @rbxts map */
interface Map<K, V> extends ReadonlyMap<K, V> {
	/**
	 * Associates a key with a value which can be accessed later by `Map.get`
	 */
	set(key: K, value: V): this;

	/**
	 * Deletes the given key from the Map.
	 *
	 * Returns a boolean indicating whether or not a value was removed.
	 */
	delete(key: K): boolean;

	/**
	 * Deletes all members of the Map
	 */
	clear(): void;
}

interface MapConstructor {
	new <K = any, V = any>(entries?: ReadonlyArray<[K, V]> | null): Map<K, V>;
}
declare var Map: MapConstructor;

interface WeakMap<K, V> extends Map<K, V> {}

interface WeakMapConstructor {
	new <K extends object = object, V = any>(entries?: ReadonlyArray<[K, V]> | null): WeakMap<K, V>;
}
declare var WeakMap: WeakMapConstructor;

/** @rbxts set */
interface ReadonlySet<T> extends Iterable<T> {
	/**
	 * Returns true if empty, otherwise false.
	 */
	isEmpty(): boolean;

	/**
	 * Returns a string representation of this data structure.
	 */
	toString(): string;

	/**
	 * Performs the specified action for each (element / pair of elements) in the set
	 * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each (element / pair of elements) in the array.
	 */
	forEach(callbackfn: (value: T, value2: T, self: this) => void): void;

	/**
	 * Returns the number of elements in the set
	 */
	size(): number;

	/**
	 * Returns an array with all values of this set
	 */
	values(): Array<T>;

	/**
	 * Returns a boolean for whether the given key exists in the set
	 */
	has(value: T): boolean;

	/**
	 * Returns a new set with every element that occurs at least once in either `this` or a given set
	 */
	union<U>(set: Set<U>): Set<T | U>;

	/**
	 * Returns a new set with every element that occurs in both `this` and a given set
	 */
	intersect<U>(set: Set<U>): Set<T | U>;

	/**
	 * Returns a new set which is the result of subtracting a given set from `this`
	 */
	difference<U>(set: Set<U>): Set<T | U>;

	/**
	 * Returns true if `this` and a given set have no elements in common, else false.
	 */
	isDisjointWith<U>(set: Set<U>): boolean;

	/**
	 * Returns a boolean for whether `this` is a subset of a given set.
	 *
	 * Note: Every set is a subset of itself, so this will return true for identical sets.
	 * A "proper subset" relationship can be checked via:
	 * ```ts
set1.isSubsetOf(set2) && !set2.isSubsetOf(set1)
```
	 */
	isSubsetOf<U>(set: Set<U>): boolean;
}

interface ReadonlySetConstructor {
	new <T = any>(values?: ReadonlyArray<T> | null): ReadonlySet<T>;
}
declare const ReadonlySet: ReadonlySetConstructor;

/** @rbxts set */
interface Set<T> extends ReadonlySet<T> {
	/**
	 * Adds a value to the set
	 */
	add(value: T): this;

	/**
	 * Deletes the given key from the set.
	 *
	 * Returns a boolean indicating whether or not a value was removed.
	 */
	delete(value: T): boolean;

	/**
	 * Deletes all members of the set.
	 */
	clear(): void;
}

interface SetConstructor {
	new <T = any>(values?: ReadonlyArray<T> | null): Set<T>;
}
declare const Set: SetConstructor;

interface WeakSet<T> extends Set<T> {}

interface WeakSetConstructor {
	new <T extends object = object>(values?: ReadonlyArray<T> | null): WeakSet<T>;
}
declare const WeakSet: WeakSetConstructor;

interface PromiseLike<T> {
	/**
	 * Attaches callbacks for the resolution and/or rejection of the Promise.
	 * @param onfulfilled The callback to execute when the Promise is resolved.
	 * @param onrejected The callback to execute when the Promise is rejected.
	 * @returns A Promise for the completion of which ever callback is executed.
	 */
	then<TResult1 = T, TResult2 = never>(
		onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
		onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
	): PromiseLike<TResult1 | TResult2>;
}

/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {
	/**
	 * Attaches callbacks for the resolution and/or rejection of the Promise.
	 * @param onResolved The callback to execute when the Promise is resolved.
	 * @param onRejected The callback to execute when the Promise is rejected.
	 * @returns A Promise for the completion of which ever callback is executed.
	 */
	then<TResult1 = T, TResult2 = never>(
		onResolved?: ((value: T) => TResult1 | PromiseLike<TResult1>) | void,
		onRejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | void,
	): Promise<TResult1 | TResult2>;

	/**
	 * Attaches a callback for only the rejection of the Promise.
	 * @param onRejected The callback to execute when the Promise is rejected.
	 * @returns A Promise for the completion of the callback.
	 */
	catch<TResult = never>(onRejected?: ((reason: any) => TResult | PromiseLike<TResult>) | void): Promise<T | TResult>;

	/**
	 * Attaches a callback to always run when this Promise settles, regardless of its fate.
	 * The callback runs when the Promise is resolved, rejected, or cancelled.
	 * @param onSettled The callback to execute when the Promise settles or is cancelled.
	 * @returns A Promise for the completion of the callback.
	 */
	finally<TResult = never>(onSettled?: (() => TResult | PromiseLike<TResult>) | void): Promise<T | TResult>;

	/**
	 * Cancels this promise, preventing this Promise from ever resolving or rejecting.
	 * Does not do anything if the promise is already settled.
	 * Calls the Promise's cancellation hook if it is set.
	 */
	cancel(): void;

	/**
	 * Returns true if this Promise has been rejected.
	 */
	isRejected(): boolean;

	/**
	 * Returns true if this Promise has been resolved.
	 */
	isResolved(): boolean;

	/**
	 * Returns true if this Promise is still pending.
	 */
	isPending(): boolean;

	/**
	 * Returns true if this Promise has been cancelled.
	 */
	isCancelled(): boolean;
}

interface PromiseConstructor {
	/**
	 * Creates an immediately rejected Promise with the given value.
	 * @param value The value to reject with.
	 */
	reject: <T>(value: T) => Promise<T>;

	/**
	 * Creates an immediately resolved Promise with the given value.
	 * @param value The value to resolve with.
	 */
	resolve: <T>(value: T) => Promise<T>;

	/**
	 * Accepts an array of Promises and returns a new Promise that is resolved when all input Promises resolve,
	 * or rejects if any of the input Promises reject.
	 * @param promises An array of Promises.
	 */
	all: <T>(promises: Array<Promise<T>>) => Promise<Array<T>>;

	/**
	 * Spawns a function on a new thread, but begins running it immediately
	 * instead of being deferred. This is sometimes known as a "fast spawn".
	 * Should be preferred over `spawn` in Promises for more predictable timing.
	 * @param callback The function to call. Any further arguments are passed as parameters.
	 */
	spawn: <T extends Array<any>>(callback: (...args: T) => void, ...args: T) => void;

	/**
	 * Creates a new Promise.
	 * @param executor A callback used to initialize the promise. This callback is passed a resolve
	 * callback used resolve the promise with a value or the result of another promise,
	 * a reject callback used to reject the promise with a provided reason or error,
	 * and an onCancel function which may be used to register a cancellation hook by calling it with
	 * a function which will be called if the Promise is cancelled, allowing you to implement abort semantics.
	 */
	new <T>(
		executor: (
			resolve: (value?: T | PromiseLike<T>) => void,
			reject: (reason?: any) => void,
			onCancel: (cancellationHook: () => void) => void,
		) => void,
	): Promise<T>;
}

declare var Promise: PromiseConstructor;

/**
 * Make all properties in T optional
 */
type Partial<T> = { [P in keyof T]?: T[P] };

/**
 * Make all properties in T required
 */
type Required<T> = { [P in keyof T]-?: T[P] };

/**
 * Make all properties in T readonly
 */
type Readonly<T> = { readonly [P in keyof T]: T[P] };

/**
 * Make all properties in T non-readonly.
 */
type Writable<T> = { -readonly [P in keyof T]: T[P] };

/**
 * From T pick a set of properties K
 */
type Pick<T, K extends keyof T> = { [P in K]: T[P] };

/** Returns a subset of type T which excludes properties K */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = { [P in K]: T };

/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;

/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: Array<any>) => any> = T extends (...args: Array<any>) => infer R ? R : any;

/**
 * Obtain the return type of a constructor function type
 */
type InstanceType<T extends new (...args: Array<any>) => any> = T extends new (...args: Array<any>) => infer R
	? R
	: any;
