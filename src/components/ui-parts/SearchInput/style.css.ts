import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/theme.css';

export const container = style({
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: vars.colors.white,
    borderRadius: vars.borderRadius.m,
    width: '257px',
});

export const input = style({
    border: 'none',
    padding: '8px',
    width: '100%',
    borderRadius: vars.borderRadius.m,
    ':focus': {
        outline: 'none',
    },
    color: vars.colors.lightBlack,
});

export const iconButton = style({
    backgroundColor: vars.colors.white,
});
