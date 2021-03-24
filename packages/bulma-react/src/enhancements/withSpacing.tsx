import React from 'react';
import { $CN } from '../cn';
import { BaseProps } from '../components/BaseProps';
import { Spacing } from '../enums';
import { reduceSide } from '../enums/Side';

interface SpacingProps extends BaseProps {
    margin?: Spacing['GutterSideAndMag'];
    padding?: Spacing['GutterSideAndMag'];
}

function toSpacingClassName(p: Spacing['GutterProperty']) {
    const [type, mag, side] = p;
    const t = type === 'margin' ? 'm' : 'p';
    const s = !side ? '' : reduceSide(side);
    return [`${t}${s}-${mag}`];
}

export function withSpacing<T extends BaseProps>(Comp: React.FunctionComponent<T>) {
    return function(props: T & SpacingProps) {
        const {margin, padding, ...rest } = props;
        const cn = $CN.collect(margin ? toSpacingClassName(['margin', ...margin]) : [], 
          padding ? toSpacingClassName(['padding', ...padding]) : [] ).join(' ');
        return <Comp {...$CN.appendToProps(rest)([cn]) as T} ></Comp>;
    }
}