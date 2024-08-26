import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/theme.css';

export const container = style({
    backgroundColor: vars.colors.royalBlue,
    height: '48px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vars.borderRadius.m,
});
