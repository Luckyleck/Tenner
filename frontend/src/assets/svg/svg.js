import React from 'react';

export function LogoPeriod({ width, height }) {
    const radius = Math.min(width, height) / 2;
    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            <circle r={radius} cx={width / 2} cy={height / 2} fill="#1dbf73" />
        </svg>
    );
}
