import React from 'react';
import { $CN } from '../cn';
import { BaseProps } from '../components/BaseProps';
import { Colors } from '../enums/Colors';

interface BackgroundProps extends BaseProps {
    bg?: Colors;
}

export function withBackground<T extends BaseProps>(Comp: React.FunctionComponent<T>) {
    return function(props: BackgroundProps & T) {
        const { bg, ...rest } = props;
        const cn = $CN.ifPrefix('has-background-')(bg);
        return <Comp {...$CN.appendToProps(rest)(cn) as T}></Comp>
    }
}