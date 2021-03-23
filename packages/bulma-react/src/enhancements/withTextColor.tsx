import React from 'react';
import { BaseProps } from '../components/BaseProps';
import { Colors } from '../enums/Colors';
import { $CN } from '../cn';

export interface TextColorProps {
    textColor?: Colors;
}

export function withTextColor<T extends BaseProps>(
    Component: React.FunctionComponent<T>
) {
    return function (props: TextColorProps & T) {
        const { textColor, ...rest } = props;
        const cn = $CN.ifPrefix('has-text-')(textColor);
        return <Component {...($CN.appendToProps(rest)(cn) as T)}></Component>;
    };
}