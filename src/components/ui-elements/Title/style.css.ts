import { styleVariants } from '@vanilla-extract/css';

import { vars } from '@/theme/theme.css';

export const container = {
    color: styleVariants(vars.colors, color => ({ color: color })),
    size: styleVariants(vars.fontSizes, size => ({ fontSize: size })),
    letterSpacing: styleVariants(vars.letterSpacings, letterSpacing => ({
        letterSpacing: letterSpacing,
    })),
    fontFamily: styleVariants(vars.fontFamilies, fontFamily => ({ fontFamily: fontFamily })),
};
