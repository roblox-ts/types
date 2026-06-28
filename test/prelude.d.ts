// Shared ambient declarations for the type-level test suite.
//
// Test case files under test/cases/ are compiled against the *real* published types
// (include/roblox.d.ts -> @rbxts/compiler-types + the generated Roblox classes +
// the handwritten custom definitions), so anything declared here is available to
// every case file. Keep this limited to test fixtures (e.g. sample instances).

declare const instance: Instance;
