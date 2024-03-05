import { style } from '@vanilla-extract/css';

import { colors } from '@/theme/colors';
import { fontFamily } from '@/theme/fontFamily';

export const container = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: colors.royalBlue,
    color: 'white',
    width: '9%',
    border: '2px solid white',
    fontFamily: fontFamily.logo,
});
