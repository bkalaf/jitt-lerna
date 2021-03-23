import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { withSize } from '../../enhancements/withSize';
import { withTextColor } from '../../enhancements/withTextColor';
import { Colors } from '../../enums/Colors';
import { BaseProps } from '../BaseProps';
import { $CN } from '../../cn';

interface IconProps extends BaseProps {
    fixedWidth?: boolean;
    bordered?: boolean;
    spinner?: boolean;
    pulse?: boolean;
    inverse?: boolean;
    iconSize?: 'lg' | '1x' | '2x';
    icon: IconDefinition;
    hasText?: boolean;
    iconColor?: Colors;
    inline?: boolean;
}

function _Icon(props: IconProps) {
    const {
        icon,
        iconSize,
        inverse,
        bordered,
        pulse,
        spinner,
        fixedWidth,
        hasText,
        inline,
        iconColor,
        ...rest
    } = props;
    const cn = $CN.ifPrefix('has-text-')(iconColor);
    const render = () => (
        <span className={$CN.concatCN('icon')(cn)}>
            <FontAwesomeIcon
                icon={icon}
                size={iconSize}
                inverse={inverse}
                pulse={pulse}
                spin={spinner}
                border={bordered}
                fixedWidth={fixedWidth}></FontAwesomeIcon>
        </span>
    );
    return hasText ? (
        inline ? (
            <span className="icon-text">
                render()
                <span {...rest}></span>
            </span>
        ) : (
            <div className="icon-text">
                render()
                <span {...rest}></span>
            </div>
        )
    ) : (
        render()
    );
}

export const Icon = withSize(withTextColor(_Icon));