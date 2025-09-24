import { Farsan, Noto_Sans_JP, Zen_Kaku_Gothic_New } from 'next/font/google';

import Footer from '@/components/ui-parts/Footer';
import Header from '@/components/ui-parts/Header';

// import Breadcrumbs from '@/components/ui-parts/Breadcrumbs';
import './globals.css';

// NOTE: themeでimportするとstorybookでエラーになる
const noto = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
    variable: '--font-noto-sans-jp',
});

const gothic = Zen_Kaku_Gothic_New({
    subsets: ['latin'],
    weight: ['500'],
    display: 'swap',
    variable: '--font-zen-kaku-gothic-new',
});

const farsan = Farsan({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
    variable: '--font-farsan',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ja" className={`${noto.variable} ${gothic.variable} ${farsan.variable}`}>
            <body className="bg-sky-100 text-slate-900">
                <div className="flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
