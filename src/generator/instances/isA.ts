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
