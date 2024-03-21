import Breadcrumbs from '@/components/ui-parts/Breadcrumbs';
import './global.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ja">
            <body>
                <Breadcrumbs />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
