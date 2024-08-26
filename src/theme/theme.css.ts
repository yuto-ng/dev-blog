import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
    iconSizes: {
        l: { height: '24px', width: '24px' },
        m: { height: '20px', width: '20px' },
        s: { height: '16px', width: '16px' },
    },
    // NOTE: fontFamilyを変更する場合はRootLayoutも変更する
    fontFamilies: {
        text: 'var(--font-noto-sans-jp)',
        title: 'var(--font-zen-kaku-gothic-new)',
        logo: 'var(--font-farsan)',
    },
    spacing: {
        xxs: '2px',
        xs: '4px',
        s: '8px',
        m: '12px',
        l: '16px',
        xl: '20px',
        xxl: '24px',
        xxxl: '28px',
    },
    lineHeights: {
        s: '1.2',
        m: '1.4',
        l: '1.6',
        xl: '2.0',
    },
    letterSpacings: {
        s: '0.1em',
        m: '0.2em',
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    fontSizes: {
        xxs: '10px',
        xs: '12px',
        s: '14px',
        m: '16px',
        ml: '20px',
        l: '24px',
        xl: '32px',
        xxl: '42px',
    },
    colors: {
        lightBlack: '#333333',
        lightGrey: '#D9D9D9',
        white: '#FFFFFF',
        royalBlue: '#3567B1',
        lightSeaGreen: '#00B5B5',
    },
    borderRadius: {
        m: '4px',
        l: '16px',
        circle: '50%',
    },
});
