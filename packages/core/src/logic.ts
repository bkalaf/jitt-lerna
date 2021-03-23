export type Predicate<T> = (x: T) => boolean;
export function oppositeOf<T>(pred: Predicate<T>) {
    return function(arg: T) {
        return !pred(arg);
    }
}
export function both<T>(p1: Predicate<T>, p2: Predicate<T>) {
    return function (arg: T) {
        return p1(arg) ? p2(arg) : false;
    }
}
export function either<T>(p1: Predicate<T>, p2: Predicate<T>) {
    return function (arg: T) {
        return p1(arg) ? true : p2(arg);
    }
}
export function compl<T>(pred: (x: T) => (y: T) => boolean) {
    return function (arg1: T) {
        return oppositeOf(pred(arg1));
    }
}