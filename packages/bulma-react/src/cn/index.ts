import { collect } from '@jitt/core';
import { appendToProps } from './appendClassName';
import { concatClasses } from './concatClasses';
import { $ifDefined, ifPrefix } from './ifDefined';
import { iff } from './iff';

export const $CN = {
    iff: iff,
    ifApply: $ifDefined,
    ifPrefix: ifPrefix,
    appendToProps: appendToProps,
    concatCN: concatClasses,
    collect: collect,
    put: function(cn: string) { return [cn]; }
};
