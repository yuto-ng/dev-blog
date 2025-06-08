import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/theme.css';

export const container = style({
    display: 'flex',
    alignItems: 'center',
    gap: vars.spacing.s,
});

export const button = style({
    borderRadius: vars.borderRadius.circle,
    backgroundColor: vars.colors.white,
    border: `1px solid ${vars.colors.royalBlue}`,
    height: '40px',
    width: '40px',
});

export const currentButton = style({
    borderRadius: vars.borderRadius.circle,
    backgroundColor: vars.colors.royalBlue,
    border: `1px solid ${vars.colors.royalBlue}`,
    height: '40px',
    width: '40px',
});

export const endIcon = style({
    marginLeft: vars.spacing.xxs,
});
