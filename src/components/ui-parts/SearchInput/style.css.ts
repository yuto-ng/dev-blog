import { style } from '@vanilla-extract/css';

import { borderRadius } from '@/theme/borderRadius';
import { colors } from '@/theme/colors';

export const container = style({
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.m,
    width: '257px',
});

export const input = style({
    border: 'none',
    padding: '8px',
    width: '100%',
    borderRadius: borderRadius.m,
    ':focus': {
        outline: 'none',
    },
    color: colors.lightBlack,
});

export const iconButton = style({
    backgroundColor: colors.white,
});
