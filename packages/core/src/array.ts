export function createFrom<T>(func: () => T, len: number): T[] {
    return len === 0 ? [] : [func(), ...createFrom(func, len - 1)];
}
export function rangeBetween(start: number, end: number): number[] {
    return start === end ? [start] : [start, ...rangeBetween(start + 1, end)];
}
export function concatArray<T>(a1: T[], a2: T[]): T[] {
    return [...a1, ...a2]
}
export function collect<T>(...arrays: T[][]) {
    return arrays.reduce(concatArray, []);
}