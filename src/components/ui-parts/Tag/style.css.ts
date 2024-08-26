import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/theme.css';

export const container = style({
    color: vars.colors.lightBlack,
    backgroundColor: vars.colors.lightGrey,
    borderRadius: vars.borderRadius.l,
    padding: '4px 8px',
    display: 'inline-flex',
});
