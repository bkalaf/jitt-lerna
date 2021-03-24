import React from 'react';
import { $CN } from '../../cn';
import { withAllHelpers } from '../../enhancements/withAllHelpers';
import { BaseProps } from '../BaseProps';

interface BlockProps extends BaseProps {
}
function _Block(props: BlockProps) {
    return <div {...$CN.appendToProps(props)(['block']) as BaseProps}></div>
}
export const Block = withAllHelpers(_Block);