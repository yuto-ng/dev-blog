import { style } from '@vanilla-extract/css';

import { vars } from '@/theme/theme.css';

export const container = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: vars.colors.royalBlue,
    color: 'white',
    border: '4px solid white',
    width: '190px',
    height: '37px',
    // NOTE: バランスが悪いので、paddingを追加
    paddingTop: '5px',
});
