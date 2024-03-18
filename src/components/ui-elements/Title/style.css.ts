import { style } from '@vanilla-extract/css';

import { colors } from '@/theme/colors';
import { fontSizes } from '@/theme/fontSizes';

export const container = style({
    color: colors.lightBlack,
    fontSize: fontSizes.xl,
});
