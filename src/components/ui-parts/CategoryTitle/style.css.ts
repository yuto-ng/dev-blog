import { style } from '@vanilla-extract/css';

import { colors } from '@/theme/colors';

export const container = style({
    backgroundColor: colors.royalBlue,
    height: '48px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
});
