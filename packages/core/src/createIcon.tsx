import React, { forwardRef, SVGProps } from 'react';

// Define standard size names
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

const sizeMap: Record<IconSize, number> = {
    xs: 12,
    sm: 16,
    md: 24, // Default size
    lg: 32,
    xl: 48,
    '2xl': 64,
    '3xl': 80,
    '4xl': 96,
};

// Update props interface
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color' | 'width' | 'height'> {
    size?: IconSize | number;
    color?: string;
    style?: React.CSSProperties;
}

export function createIcon(SvgComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>) {
    const Icon = forwardRef<SVGSVGElement, IconProps>(
        ({ size = 'md' /* Default to medium size */, color, style, ...props }, ref) => {
            // Determine final pixel size
            const pixelSize = typeof size === 'string' ? sizeMap[size] : size;

            const mergedStyle: React.CSSProperties = {
                color: color,
                verticalAlign: 'middle',
                ...style,
            };

            return (
                <SvgComponent
                    ref={ref}
                    width={pixelSize}
                    height={pixelSize}
                    style={mergedStyle}
                    {...props}
                />
            );
        }
    );

    Icon.displayName = `VaultIcon(${SvgComponent.displayName || SvgComponent.name || 'Svg'})`;

    return Icon;
} 