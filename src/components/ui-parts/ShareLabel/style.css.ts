import { style, CSSProperties } from '@vanilla-extract/css';

import { vars } from '@/theme/theme.css';

const BASE_STYLE: CSSProperties = {
    content: '""',
    position: 'absolute',
    width: '20px',
    height: '2px',
    backgroundColor: vars.colors.royalBlue,
    top: '50%',
};

export const container = style({
    width: '90px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    ':before': {
        ...BASE_STYLE,
        left: 8,
        transform: 'translateX(-50%) rotate(45deg)',
    },
    ':after': {
        ...BASE_STYLE,
        right: 8,
        transform: 'translateX(50%) rotate(-45deg)',
    },
});

export const content = style({
    position: 'relative',
    ':before': {
        ...BASE_STYLE,
        left: -10,
        transform: 'translateX(-50%) rotate(45deg)',
    },
    ':after': {
        ...BASE_STYLE,
        right: -10,
        transform: 'translateX(50%) rotate(-45deg)',
    },
});
