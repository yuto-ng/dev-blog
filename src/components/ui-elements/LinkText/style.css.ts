import { styleVariants } from '@vanilla-extract/css';

import { vars } from '@/theme/theme.css';

export const container = {
    size: styleVariants(vars.fontSizes, size => ({ fontSize: size })),
    color: styleVariants(vars.colors, color => ({ color: color })),
    weight: styleVariants(vars.fontWeights, fontWeight => ({ fontWeight: fontWeight })),
    lineHeight: styleVariants(vars.lineHeights, lineHeight => ({ lineHeight: lineHeight })),
    fontFamily: styleVariants(vars.fontFamilies, fontFamily => ({ fontFamily: fontFamily })),
};
