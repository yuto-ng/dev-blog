import { style } from '@vanilla-extract/css';

import { colors } from '@/theme/colors';

export const container = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: colors.royalBlue,
    color: 'white',
    border: '4px solid white',
    maxWidth: '190px',
    maxHeight: '50px',
    // NOTE: バランスが悪いので、paddingを追加
    paddingTop: '5px',
});
