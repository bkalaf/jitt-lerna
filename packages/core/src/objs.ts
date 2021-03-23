import { isNotNullOrUndefined } from './check';
const { getOwnPropertyNames } = Object;
export function propsOf<T>(o: T): (keyof T)[] {
    return getOwnPropertyNames(o) as (keyof T)[];
}
export function isEmptyRecord<T>(o: T) {
    return propsOf(o).length === 0;
}
export function isDefined<T>(propName: keyof T, obj: T) {
    return propsOf(obj).includes(propName);
}
export function hasProp<T>(propName: keyof T, obj: T) {
    return isDefined(propName, obj) && isNotNullOrUndefined(obj[propName]);
}
export function pick<T, K extends keyof T>(propName: K, obj: T): { [P in K]: T[K] } {
    return { [propName]: obj[propName] } as { [P in K]: T[K] }
}