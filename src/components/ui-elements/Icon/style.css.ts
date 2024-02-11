import { style } from '@vanilla-extract/css';

import { ICON_SIZE } from '@/constants';

export const container = {
    m: style({
        height: ICON_SIZE.m.height,
        width: ICON_SIZE.m.width,
        position: 'relative',
    }),
    s: style({
        height: ICON_SIZE.s.height,
        width: ICON_SIZE.s.width,
        position: 'relative',
    }),
};
