import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/theme.css';

export const container = style({
    backgroundColor: vars.colors.royalBlue,
    height: '65px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});
