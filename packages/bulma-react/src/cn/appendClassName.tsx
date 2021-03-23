import { BaseProps } from '../components/BaseProps';
import { concatClasses } from './concatClasses';

export function appendToProps<T extends BaseProps>(p: T) {
    const { className, ...rest } = p;
    return function (cn: string[]) {
        return { ...rest, className: concatClasses(className)(cn) } as T;
    };
}
