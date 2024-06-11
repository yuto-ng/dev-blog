import { styleVariants } from '@vanilla-extract/css';

import { colors } from '@/theme/colors';
import { fontSizes } from '@/theme/fontSizes';
import { letterSpacings } from '@/theme/letterSpacing';

export const container = {
    color: styleVariants(colors, color => ({ color: color })),
    size: styleVariants(fontSizes, size => ({ fontSize: size })),
    letterSpacing: styleVariants(letterSpacings, letterSpacing => ({
        letterSpacing: letterSpacing,
    })),
};
