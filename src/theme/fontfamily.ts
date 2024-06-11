import { Noto_Sans_JP, Zen_Kaku_Gothic_New, Farsan } from 'next/font/google';

// TODO: 全体的にページ実装時にバランス見て調整
/**
 * Text
 */
const notoSansJp = Noto_Sans_JP({
    subsets: ['cyrillic'],
    // NOTE: fontWeightsで指定できるので、設定しない
});

/**
 * Title
 */
const zenKakuGothicNew = Zen_Kaku_Gothic_New({
    subsets: ['latin'],
    weight: ['500'],
});

/**
 * Logo
 */
const farsan = Farsan({
    subsets: ['latin'],
    // TODO: ロゴ実装時にweightを調整
    weight: ['400'],
});

export type FontFamilies = keyof typeof fontFamilies;

export const fontFamilies = {
    text: notoSansJp,
    title: zenKakuGothicNew,
    logo: farsan,
} as const;
