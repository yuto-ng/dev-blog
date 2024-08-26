import { style } from '@vanilla-extract/css';

// import { vars } from '@/theme/theme.css';
import { vars } from '../../../theme/theme.css';

export const container = {
    l: style({
        ...vars.iconSizes.l,
        position: 'relative',
    }),
    m: style({
        ...vars.iconSizes.m,
        position: 'relative',
    }),
    s: style({
        ...vars.iconSizes.s,
        position: 'relative',
    }),
};
