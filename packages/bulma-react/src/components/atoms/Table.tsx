import React from 'react';
import { $CN } from '../../cn';
import { withAllHelpers } from '../../enhancements/withAllHelpers';
import { BaseProps } from '../BaseProps';

interface TableProps extends BaseProps {
    striped?: boolean;
    border?: boolean;
    narrow?: boolean;
    hoverable?: boolean;
    fullWidth?: boolean;
    scrollable?: boolean;
}

function _Table(props: TableProps) {
    const { striped, border, narrow, hoverable, fullWidth, scrollable, ...rest } = props;
    const cn = $CN.collect(
        $CN.iff('is-striped', striped),
        $CN.iff('is-bordered', border),
        $CN.iff('is-hoverable', hoverable),
        $CN.iff('is-narrow', narrow),
        $CN.iff('is-fullwidth', fullWidth)
    ).join(' ');
    const render = () => <table {...$CN.appendToProps(rest)([cn])}></table>;
    return scrollable ? <div className="table-container">render()</div> : render();
}

// TODO is-selected for tr

export const Table = withAllHelpers(_Table);