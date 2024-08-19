import { style } from '@vanilla-extract/css';

import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export const container = style({
    backgroundColor: colors.royalBlue,
    display: 'flex',
    alignItems: 'center',
    height: '80px',
    paddingInline: spacing.xxl,
    justifyContent: 'space-between',
});

export const menuContent = style({
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0',
    backgroundColor: colors.royalBlue,
    gap: spacing.xxxl,
});

// TODO: varsを作成して、色やフォントサイズを１箇所にまとめる
