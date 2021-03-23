import { compl, either } from './logic';

export function composeR<T, U, V>(f: (x: T) => U, g: (y: U) => V): (x: T) => V {
    return function(arg: T) {
        return g(f(arg));
    }
}
export type AnyFunction = (...args: any[]) => any;
export type Length<T extends any[]> = T['length'];
export type LastIndex<T extends any[]> = [any, ...T][Length<T>];

export function identity<T>(x: T): T {
    return x;
}
export function composeAll< V extends AnyFunction[]>(...args: V): (...x: Parameters<V[0]>) => ReturnType<LastIndex<V>> {
    return function(...arg: Parameters<V[0]>) {
        return args.reduce(composeR, (x: any) => x)(...arg);
    }
}

export function flip<T, U, V>(f: (x: T) => (y: U) => V) {
    return function (y: U) {
        return function (x: T) {
            return f(x)(y);
        }
    }
}
export function swap<T, U, V>(f: (x: T, y: U) => V) {
    return function (y: U, x: T) {
        return f(x, y);
    }
}
export function curry<T, U extends any[], V>(f: (...args: [T, ...U]) => V) {
    return function (x: T) {
        return f.bind(null, x);
    }
}
export function uncurry<T, U extends any[], V>(f: (x: T) => (...args: U) => V) {
    return function (...args: [T, ...U]) {
        const [head, ...tail] = args;
        return f(head)(...tail);
    }
}
export function always<T>(x: T) {
    return function(toss: unknown) {
        return x;
    }
}
export function eq<T>(op1: T, op2: T) {
    return op1 === op2;
}
export const $eq = curry(eq);
export const $dne = compl($eq);
export const dne = uncurry($dne);

export function lt<T>(op1: T, op2: T) {
    return op1 < op2;
}
export const $lt = curry(lt);


export const $lte = <T>(x: T) => either($lt(x), $eq(x));

export function gt<T>(op1: T, op2: T) {
    return lt(op1, op2) ? eq(op1, op2) ? true : false : false;
}
export const $gt = curry(gt);
export const $gte = <T>(x: T) => either($gt(x), $eq(x));

// const a1 = (x: string | any[]) => x.length;
// const a2 = (n: number) => `${n}:${n}:${n}`;
// const a3 = (s: string) => s.split('');
// const a4 = (a: string[]): string[] => [...a,...a];

// const a = composeAll(a1, a2, a3, a4);

// const b = composeAll(a4, a1);
// const c = composeAll(a4, a1, a2);

// console.log(a('test'));
// console.log(b(['a', 'b', 'c']));
// console.log(b(['a', 'b', 'c', 'd']));
// console.log(c(['a','b']))
// console.log(c(['a']))
