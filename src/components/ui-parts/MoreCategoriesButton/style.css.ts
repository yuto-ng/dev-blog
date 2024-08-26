import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/theme.css';

export const container = style({
    width: '206px',
    height: '30px',
    backgroundColor: vars.colors.royalBlue,
    color: vars.colors.white,
    borderRadius: vars.borderRadius.m,
});
