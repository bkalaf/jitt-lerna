import React from 'react';
import { $CN } from '../cn';
import { BaseProps } from '../components/BaseProps';

type FontSize = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type TextAlignment = 'left' | 'right' | 'centered' | 'justified';
type TextTransform = 'capitalized' | 'uppercase' | 'lowercase' | 'italic';
type FontWeight = 'light' | 'normal' | 'bold' | 'semibold' | 'medium';
type FontFamily = 'sans-serif' | 'monospace' | 'primary' | 'secondary' | 'code';

interface TypographyProps extends BaseProps {
    fs?: FontSize;
    fw?: FontWeight;
    transform?: TextTransform;
    textDir?: TextAlignment;
    font?: FontFamily;
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