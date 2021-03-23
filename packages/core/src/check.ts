import { AnyFunction } from './fp';
import { both, oppositeOf } from './logic';

function isTypeOf<T>(name: string) {
    return function(item: unknown): item is T {
        return typeof item === name;
    }
}
export const isUndefined = isTypeOf<undefined>('undefined');
export const isString = isTypeOf<string>('string');
export const isNumber = isTypeOf<number>('number');
export const isBoolean = isTypeOf<boolean>('boolean');
export const isFunction = isTypeOf<AnyFunction>('function');
export const isObject = isTypeOf<object>('object');
export const isArray = (item: unknown): item is any[] => Array.isArray(item);
export const isSymbol = isTypeOf<symbol>('symbol');
export const isBigInt = isTypeOf<bigint>('bigint');
export const isNullOrUndefined = (item: unknown): item is (null | undefined) => item == null;
export const isNotUndefined = <T>(arg: T): arg is Exclude<T, undefined> => oppositeOf<T>(isUndefined)(arg);
export const isNull = (arg: unknown): arg is null => both(isNullOrUndefined, isNotUndefined)(arg);
export const isNotNullOrUndefined = <T>(arg: T): arg is Exclude<T, null | undefined> => oppositeOf<T>(isNullOrUndefined)(arg);

