import { style } from '@vanilla-extract/css';

import { colors } from '@/theme/colors';

export const container = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: colors.royalBlue,
    color: 'white',
    border: '4px solid white',
    width: '190px',
    height: '37px',
    // NOTE: バランスが悪いので、paddingを追加
    paddingTop: '5px',
});
