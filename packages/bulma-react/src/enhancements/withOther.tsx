import { isUndefined } from '@jitt/core';
import React from 'react';
import { $CN } from '../cn';
import { BaseProps } from '../components/BaseProps';
import { PullType } from '../enums/PullType';

interface OtherBulmaProps extends BaseProps {
    clearfix?: boolean;
    pull?: PullType;
    overlay?: boolean;
    clipped?: boolean;
    noRadius?: boolean;
    noShadow?: boolean;
    allowInteract?: boolean;
    relative?: boolean;
}

export function withOther<T extends BaseProps>(
    Comp: React.FunctionComponent<T>
) {
    return function (props: OtherBulmaProps & T) {
        const {
            clearfix,
            pull,
            overlay,
            clipped,
            noRadius,
            noShadow,
            allowInteract,
            relative,
            ...rest
        } = props;
        const cn = $CN
            .collect(
                $CN.iff('is-clearfix', clearfix),
                $CN.iff('is-overlay', overlay),
                $CN.iff('is-clipped', clipped),
                $CN.iff('is-radiusless', noRadius),
                $CN.iff('is-shadowless', noShadow),
                $CN.iff('is-clickable', allowInteract),
                $CN.iff(
                    'is-unselectable',
                    isUndefined(allowInteract) ? false : !allowInteract
                ),
                $CN.iff('is-relative', relative),
                $CN.ifPrefix('is-pulled-')(pull)
            )
            .join(' ');
            
        return <Comp {...$CN.appendToProps(rest)([cn]) as T} ></Comp>
    };
}
