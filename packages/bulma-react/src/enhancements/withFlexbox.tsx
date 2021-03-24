import { isUndefined } from '@jitt/core';
import React from 'react';
import { $CN } from '../cn';
import { BaseProps } from '../components/BaseProps';
import { Flexbox } from './../enums';

interface FlexboxProps extends BaseProps {
    flexDirection?: Flexbox['FlexDirection'];
    reverse?: boolean;
    wrap?: boolean;
    justifyContent?: Flexbox['JustifyContentDirection'];
    alignContent?: Flexbox['AlignContentType'];
    alignItems?: Flexbox['AlignItemType'];
    alignSelf?: Flexbox['AlignSelfType'];
    grow?: Flexbox['GrowSize'];
    shrink?: Flexbox['ShrinkSize'];
}

export function withFlexbox<T extends BaseProps>(
    Comp: React.FunctionComponent<T>
) {
    return function (props: FlexboxProps & T) {
        const {
            flexDirection,
            reverse,
            wrap,
            justifyContent,
            alignContent,
            alignItems,
            alignSelf,
            grow,
            shrink,
            ...rest
        } = props;
        const cn = $CN
            .collect(
                flexDirection
                    ? reverse
                        ? [`is-flex-direction-${flexDirection}-reverse`]
                        : [`is-fl{ex-direction-${flexDirection}`]
                    : [],
                wrap
                    ? reverse
                        ? [`is-flex-wrap-wrap-reverse`]
                        : [`is-flex-wrap-wrap`]
                    : isUndefined(wrap)
                    ? []
                    : [`is-flex-nowrap`],
                $CN.ifPrefix('is-justify-content-')(justifyContent),
                $CN.ifPrefix('is-align-content-')(alignContent),
                $CN.ifPrefix('is-align-items-')(alignItems),
                $CN.ifPrefix('is-align-self-')(alignSelf),
                $CN.ifPrefix('is-flex-grow-')(grow),
                $CN.ifPrefix('is-flex-shring-')(shrink)
            )
            .join(' ');
        return <Comp {...($CN.appendToProps(rest)([cn]) as T)}></Comp>;
    };
}
