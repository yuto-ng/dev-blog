import { style } from '@vanilla-extract/css';

import { borderRadius } from '@/theme/borderRadius';
import { colors } from '@/theme/colors';

export const container = style({
    width: '92px',
    padding: '2px',
    backgroundColor: colors.royalBlue,
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: borderRadius.m,
    alignItems: 'center',
});
