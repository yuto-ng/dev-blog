import { styleVariants } from '@vanilla-extract/css';

import { colors } from '@/theme/colors';
import { fontSizes } from '@/theme/fontSizes';
import { fontWeights } from '@/theme/fontWeights';
import { lineHeights } from '@/theme/lineHeights';

export const container = {
    size: styleVariants(fontSizes, size => ({ fontSize: size })),
    color: styleVariants(colors, color => ({ color: color })),
    weight: styleVariants(fontWeights, fontWeight => ({ fontWeight: fontWeight })),
    lineHeight: styleVariants(lineHeights, lineHeight => ({ lineHeight: lineHeight })),
};
