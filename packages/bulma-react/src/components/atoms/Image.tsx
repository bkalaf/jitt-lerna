import React from 'react';
import { $CN } from '../../cn';
import { withAllHelpers } from '../../enhancements/withAllHelpers';
import { BaseProps } from '../BaseProps';

type ImageDimension = 16 | 24 | 32 | 48 | 64 | 96 | 128;

interface ImageProps extends BaseProps {
    rounded?: boolean;
    fullWidth?: boolean;
    dimension: ImageDimension;
    src: string;
}

function _Image(props: ImageProps) {
    const { rounded, fullWidth, dimension, src, children, ...rest } = props;
    const cn = $CN
        .collect(
            $CN.iff('is-rounded', rounded),
            $CN.iff('is-fullwidth', fullWidth),
            [`is-${dimension}x${dimension}`],
            ['image']
        )
        .join(' ');
    return (
        <figure {...$CN.appendToProps(rest)([cn])}>
            <img src={src}></img>
            {children}
        </figure>
    );
}

export const Image = withAllHelpers(_Image);