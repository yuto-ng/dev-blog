import { styleVariants } from '@vanilla-extract/css';

import { colors } from '@/theme/colors';
import { fontSizes } from '@/theme/fontSizes';

export const container = {
    color: styleVariants(colors, color => ({ color: color })),
    size: styleVariants(fontSizes, size => ({ fontSize: size })),
};
