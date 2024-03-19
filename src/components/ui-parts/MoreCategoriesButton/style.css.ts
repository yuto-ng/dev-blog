import { style } from '@vanilla-extract/css';

import { borderRadius } from '@/theme/borderRadius';
import { colors } from '@/theme/colors';

export const container = style({
    width: '206px',
    height: '30px',
    backgroundColor: colors.royalBlue,
    color: colors.white,
    borderRadius: borderRadius.default,
});
