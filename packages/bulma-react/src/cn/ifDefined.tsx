import { composeR, curry, isNullOrUndefined, prependText } from '@jitt/core';

export function ifDefined<T>(
    func: (x: T) => string,
    value: T | null | undefined
) {
    return isNullOrUndefined(value) ? [] : [func(value)];
}

export const $ifDefined = curry(ifDefined);
export function toStr(obj: { toString(): string }) {
    return obj.toString();
}
export function ifPrefix<T>(prefix: string) {
    return composeR((x?: T) => x ? toStr(x) : undefined, $ifDefined(prependText(prefix)));
}
