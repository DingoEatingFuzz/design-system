import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSwapHorizontal16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M12.26 1.45a.75.75 0 10-1.02 1.1l2.1 1.95H7.75a.75.75 0 100 1.5h5.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25zM2.66 10l2.1-1.95a.75.75 0 00-1.02-1.1L.24 10.2a.75.75 0 000 1.1l3.5 3.25a.75.75 0 001.02-1.1l-2.1-1.95h5.59a.75.75 0 000-1.5H2.66z" />
                </g>
            </svg>
        );
    }
);
