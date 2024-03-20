import { style } from '@vanilla-extract/css';

import { borderRadius } from '@/theme/borderRadius';
import { colors } from '@/theme/colors';

export const container = style({
    color: colors.lightBlack,
    backgroundColor: colors.lightGrey,
    borderRadius: borderRadius.l,
    padding: '4px 8px',
    display: 'inline-flex',
});
