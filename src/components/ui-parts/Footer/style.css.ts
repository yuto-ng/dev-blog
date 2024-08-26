import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/theme.css';

export const container = style({
    backgroundColor: vars.colors.royalBlue,
    display: 'flex',
    alignItems: 'center',
    height: '80px',
    paddingInline: vars.spacing.xxl,
    justifyContent: 'space-between',
});

export const menuContent = style({
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0',
    backgroundColor: vars.colors.royalBlue,
    gap: vars.spacing.xxxl,
});
