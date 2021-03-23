export function iff(cn: string, value: boolean | undefined | null) {
    return value ? [cn] : [];
}
