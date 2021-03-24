import React from 'react';
import { Colors } from '../enums/Colors';
import { BaseProps } from '../components/BaseProps';
import { $CN } from '../cn';

export interface ColorProps {
    color?: Colors;
}

export function withColor<T extends BaseProps>(
    Component: React.FunctionComponent<T>
) {
    return function (props: ColorProps & T) {
        const { color, ...rest } = props;
        const cn = $CN.ifPrefix('is-')(color);
        return <Component {...($CN.appendToProps(rest)(cn) as T)}></Component>;
    };
}
