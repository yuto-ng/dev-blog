import { Noto_Sans_JP, Noto_Serif_Tamil, Zen_Kaku_Gothic_New, Farsan } from 'next/font/google';

// TODO: 全体的にページ実装時にバランス見て調整
/**
 * Text
 */
export const notoSansJp = Noto_Sans_JP({
    subsets: ['cyrillic'],
    weight: ['400'],
});

/**
 * LinkText
 */
export const notoSerifTamil = Noto_Serif_Tamil({
    subsets: ['latin'],
    weight: ['400'],
});

/**
 * Title
 */
export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
    subsets: ['latin'],
    weight: ['500'],
});

/**
 * Logo
 */
export const farsan = Farsan({
    subsets: ['latin'],
    // TODO: ロゴ実装時にweightを調整
    weight: ['400'],
});
