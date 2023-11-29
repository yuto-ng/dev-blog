import { style } from '@vanilla-extract/css';

const ICON_SIZE = {
    m: { height: '24px', width: '24px' },
    s: { height: '16px', width: '16px' },
};

export type IconSize = keyof typeof ICON_SIZE;

export const iconStyles = {
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
