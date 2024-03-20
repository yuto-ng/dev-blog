import { style, CSSProperties } from '@vanilla-extract/css';

import { colors } from '@/theme/colors';

const BASE_STYLE: CSSProperties = {
    content: '""',
    position: 'absolute',
    width: '20px',
    height: '2px',
    backgroundColor: colors.royalBlue,
    top: '50%',
};

export const container = style({
    width: '85px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
