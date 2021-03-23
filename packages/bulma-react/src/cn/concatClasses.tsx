export function concatClasses(cn1?: string) {
    return function (cn2?: string[]) {
        return [cn1 ?? '', cn2 ?? [].join('')].join(' ').trim();
    };
}
