import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/theme.css';

export const container = style({
    width: '92px',
    padding: '2px',
    backgroundColor: vars.colors.royalBlue,
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: vars.borderRadius.m,
    alignItems: 'center',
});
