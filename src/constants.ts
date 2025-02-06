import path from "path";

export const INCLUDE_FOLDER_PATH = path.join(__dirname, "..", "include");
export const GENERATED_FOLDER_PATH = path.join(INCLUDE_FOLDER_PATH, "generated");
export const TSCONFIG_PATH = path.join(INCLUDE_FOLDER_PATH, "tsconfig.json");
export const CUSTOM_DEFITIONS_PATH = path.join(INCLUDE_FOLDER_PATH, "customDefinitions.d.ts");
