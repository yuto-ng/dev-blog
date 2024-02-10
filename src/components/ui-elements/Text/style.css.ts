import { style, styleVariants } from '@vanilla-extract/css';

import { Colors, colors } from '@/theme/colors';
import { FontSizes, fontSizes } from '@/theme/fontSizes';
import { FontWeights, fontWeights } from '@/theme/fontWeights';
import { fontFamily } from '@/theme/fontfamily';
import { LineHeights, lineHeights } from '@/theme/lineHeights';

export type TextStyleProps = {
    size: FontSizes;
    lineHeight: LineHeights;
    weight: FontWeights;
    color: Colors;
};

export const baseStyle = style({
    fontFamily: fontFamily.text,
});

export const textVariants = {
    size: styleVariants(fontSizes, size => ({ fontSize: size })),
    color: styleVariants(colors, color => ({ color: color })),
    weight: styleVariants(fontWeights, fontWeight => ({ fontWeight: fontWeight })),
    lineHeight: styleVariants(lineHeights, lineHeight => ({ lineHeight: lineHeight })),
};
