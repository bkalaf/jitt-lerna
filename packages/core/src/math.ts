import { curry } from './fp';

export function add(op1: number, op2: number) {
    return op1 + op2;
}
export function floor(n: number) {
    return Math.floor(n);
}
export function prod(op1: number, op2: number) {
    return op1 * op2;
}
export const $prod = curry(prod);
