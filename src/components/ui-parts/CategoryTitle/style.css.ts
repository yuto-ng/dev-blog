import { style } from '@vanilla-extract/css';

import { borderRadius } from '@/theme/borderRadius';
import { colors } from '@/theme/colors';

export const container = style({
    backgroundColor: colors.royalBlue,
    height: '48px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.default,
});
