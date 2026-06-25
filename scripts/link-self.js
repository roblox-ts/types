"use strict";

import fs from "fs";
import path from "path";

// ensure @rbxts/compiler-types can resolve @rbxts/types when running local checks
const repoRoot = path.resolve(import.meta.dirname, "..");
const scopeDir = path.join(repoRoot, "node_modules", "@rbxts");
const linkPath = path.join(scopeDir, "types");

fs.mkdirSync(scopeDir, { recursive: true });

const existing = fs.existsSync(linkPath) ? fs.realpathSync(linkPath) : undefined;

if (existing !== repoRoot) {
	// replace any stale install with a symlink to the working copy
	fs.rmSync(linkPath, { recursive: true, force: true });
	fs.symlinkSync(repoRoot, linkPath, "junction");
}
