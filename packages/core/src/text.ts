import { createFrom, rangeBetween } from './array';
import { isNullOrUndefined } from './check';
import { composeR, curry, flip, identity, uncurry } from './fp';
import { either, oppositeOf } from './logic';
import { $prod, floor } from './math';

export function joinText(mid: string, left: string, right: string) {
    return [left, mid, right].join('');
}
export const concatText = curry(joinText)('');
export const prependText = curry(concatText);
export const appendText = flip(prependText);
export function toCharArray(s: string) {
    return s.split('');
}
export function isEmpty(s: string) {
    return s.length === 0;
}
export const isNotEmpty = oppositeOf(isEmpty);
export const isNullUndefinedOrEmpty = either(isNullOrUndefined, isEmpty);
export const isNotNullUndefinedOrEmpty = oppositeOf(isNullUndefinedOrEmpty);
export const isNonEmptyStr = isNotNullUndefinedOrEmpty;

export function containsText(tar: string, src: string) {
    return isNonEmptyStr(tar) ? src.includes(tar) : false;
}
export function replaceText(tar: string, repl: string, src: string): string {
    return isNonEmptyStr(tar)
        ? containsText(tar, src)
            ? replaceText(tar, repl, src.replace(tar, repl))
            : src
        : src;
}

export const $removeText = (tar: string) => curry(curry(replaceText)(tar))('');
export const removeText = uncurry($removeText);

export function isLower(s: string) {
    return s.toLowerCase() === s && s.toUpperCase() !== s;
}

export function isUpper(s: string) {
    return s.toLowerCase() !== s && s.toUpperCase() === s;
}

export function allToLower(s: string) {
    return s.toLowerCase();
}
export function allToUpper(s: string) {
    return s.toUpperCase();
}

export function runOnString(
    onHead: (s: string) => string,
    onTail: (s: string) => string
) {
    return function (s: string) {
        if (isNonEmptyStr(s)) {
            const [h, ...t] = toCharArray(s);
            return [onHead(h), ...t.map(onTail)].join('');
        }
        return '';
    };
}
export const capitalize = runOnString(allToUpper, identity);
export const toProper = runOnString(allToUpper, allToLower);
export const decapitalize = runOnString(allToLower, identity);

export function words(s: string) {
    return s.split(' ');
}
export function toPascalCase(s: string) {
    return words(s).map(toProper).join('');
}
export const camelcase = composeR(toPascalCase, decapitalize);

export function toUnicode(s: string) {
    return s.charCodeAt(0);
}
export function fromUnicode(n: number) {
    return String.fromCharCode(n);
}
export function generateRandomString(len: number) {
    const vals = createFrom(() => Math.random(), len);
    const pool = [
        ...rangeBetween(toUnicode('a'), toUnicode('z')),
        ...rangeBetween(toUnicode('A'), toUnicode('Z')),
        ...rangeBetween(toUnicode('0'), toUnicode('9')),
        toUnicode('_'),
        toUnicode('!'),
    ];
    const max = pool.length;
    return vals.map($prod(max)).map(floor).map(ix => fromUnicode(pool[ix])).join('');
}
