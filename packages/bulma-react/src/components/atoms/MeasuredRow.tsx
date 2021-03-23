import React from 'react';

interface MeasuredRowProps {
    setHeight: React.Dispatch<number>;
}

export function MeasuredRow(props: MeasuredRowProps) {
    const {setHeight, ...rest} = props;
    const ref = React.useCallback((node: null | HTMLDivElement) => {
        if (node) {
            const h = node.getBoundingClientRect().height;
            props.setHeight(h);
        }
    }, []);
    return <div ref={ref} {...rest}></div>
}
