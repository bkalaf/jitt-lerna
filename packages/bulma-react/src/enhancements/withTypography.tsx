import React from 'react';
import { $CN } from '../cn';
import { BaseProps } from '../components/BaseProps';
import { Typography } from '../enums';

interface TypographyProps extends BaseProps {
    fs?: Typography['FontSize'];
    fw?: Typography['FontWeight'];
    transform?: Typography['TextTransform'];
    textDir?: Typography['TextAlignment'];
    font?: Typography['FontFamily'];
}

export function withTypography<T extends BaseProps>(Component: React.FunctionComponent<T>) {
    return function (props: TypographyProps & T) {
        const { fs, fw, transform, textDir, font, ...rest } = props;
        const cn = $CN.collect($CN.ifPrefix('is-family-')(font),
        $CN.ifPrefix('has-text-weight-')(fw),
        $CN.ifPrefix('is-')(transform),
        $CN.ifPrefix('has-text-')(textDir),
        $CN.ifPrefix('is-size-')(fs)).join(' ');
        return <Component {...$CN.appendToProps(rest)([cn]) as T}></Component>
    }
}