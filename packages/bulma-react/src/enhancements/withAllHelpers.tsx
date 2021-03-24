import React from 'react';
import { BaseProps } from '../components/BaseProps';
import { withBackground } from './withBackground';
import { withFlexbox } from './withFlexbox';
import { withOther } from './withOther';
import { withSpacing } from './withSpacing';
import { withTypography } from './withTypography';

export function withAllHelpers<T extends BaseProps>(
    Comp: React.FunctionComponent<T>
) {
    return withBackground(
        withFlexbox(withOther(withSpacing(withTypography(Comp))))
    );
}
