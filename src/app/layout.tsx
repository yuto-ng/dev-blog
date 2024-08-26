import React from 'react';

import { Noto_Sans_JP, Zen_Kaku_Gothic_New, Farsan } from 'next/font/google';

// import Breadcrumbs from '@/components/ui-parts/Breadcrumbs';
import './global.css';

// NOTE: themeでimportするとstorybookでエラーになる
export const noto = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
    variable: '--font-noto-sans-jp',
});

export const gothic = Zen_Kaku_Gothic_New({
    subsets: ['latin'],
    weight: ['500'],
    display: 'swap',
    variable: '--font-zen-kaku-gothic-new',
});

export const farsan = Farsan({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
    variable: '--font-farsan',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ja" className={`${noto.variable} ${gothic.variable} ${farsan.variable}`}>
            <body>
                {/* <Breadcrumbs /> */}
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
