import React from 'react';
import { Size } from '../enums/Size';
import { BaseProps } from '../components/BaseProps';
import { $CN } from '../cn';

export interface SizeProps {
    size?: Size;
}
export function withSize<T extends BaseProps>(
    Component: React.FunctionComponent<T>,
    isGroup: boolean = false
) {
    return function (props: SizeProps & T) {
        const { size, ...rest } = props;
        const cn = $CN.ifPrefix(isGroup ? 'are-' : 'is-')(size);
        return <Component {...($CN.appendToProps(rest)(cn) as T)}></Component>;
    };
}
