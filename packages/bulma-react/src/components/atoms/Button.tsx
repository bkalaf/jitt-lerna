import React from 'react';
import { BaseProps } from '../BaseProps';
import { ColorProps, withColor } from '../../enhancements/withColor';
import { SizeProps, withSize } from '../../enhancements/withSize';
import { $CN } from '../../cn';

interface ButtonProps extends BaseProps {
    light?: boolean;
    fullWidth?: boolean;
    outlined?: boolean;
    inverted?: boolean;
    hovered?: boolean;
    focused?: boolean;
    active?: boolean;
    loading?: boolean;
    disabled?: boolean;
    selected?: boolean;
    noInteract?: boolean;
    rounded?: boolean;
    type: 'button' | 'rest' | 'submit';
}

interface ButtonElementProps {
    tag: 'a' | 'input' | 'button';
}

function _ButtonElement(props: ButtonProps & ButtonElementProps) {
    const {
        light,
        fullWidth,
        outlined,
        inverted,
        active,
        focused,
        hovered,
        loading,
        selected,
        tag,
        children,
        noInteract,
        rounded,
        ...rest
    } = props;

    const classes = $CN.collect(...[
        $CN.iff('is-light', light),
        $CN.iff('is-fullwidth', fullWidth),
        $CN.iff('is-outlined', outlined),
        $CN.iff('is-active', active),
        $CN.iff('is-hovered', hovered),
        $CN.iff('is-focused', focused),
        $CN.iff('is-inverted', inverted),
        $CN.iff('is-loading', loading),
        $CN.iff('is-selected', selected),
        $CN.iff('is-static', noInteract),
        $CN.iff('is-rounded', rounded),
    ]).join(' ');
    return React.createElement(tag, $CN.appendToProps(rest)([classes]), children);
}

const ButtonElement = withSize(withColor(_ButtonElement));
export const Button = function (props: ButtonProps & SizeProps & ColorProps) {
    return ButtonElement({ tag: 'button', ...props });
};
export const LinkButton = function (
    props: ButtonProps & SizeProps & ColorProps
) {
    return ButtonElement({ tag: 'a', ...props, type: 'button' });
};
export const InputButton = function (
    props: ButtonProps & SizeProps & ColorProps
) {
    return ButtonElement({ tag: 'input', ...props });
};
