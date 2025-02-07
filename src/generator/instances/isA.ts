import { PLUGIN_ONLY_CLASSES } from "../../constants";
import { Context } from "../../types/Context";

export function isA(ctx: Context, className: string, superClassName: string) {
	if (className === superClassName) {
		return true;
	}

	const superClass = ctx.superClassMap.get(className);
	if (!superClass) {
		return false;
	}

	return isA(ctx, superClass, superClassName);
}

export function isAPluginOnlyClass(ctx: Context, className: string) {
	if (PLUGIN_ONLY_CLASSES.has(className)) {
		return true;
	}

	const superClass = ctx.superClassMap.get(className);
	if (!superClass) {
		return false;
	}

	return isAPluginOnlyClass(ctx, superClass);
}
