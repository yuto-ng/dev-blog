import { style } from '@vanilla-extract/css';

import { colors } from '@/theme/colors';

export const container = style({
    backgroundColor: colors.royalBlue,
    height: '65px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});
