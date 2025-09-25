import Logo from '../Logo';

import LinkText from '@/components/ui-elements/LinkText';

function Footer() {
    return (
        <footer className="bg-royalBlue py-6">
            <div className="px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                    <Logo />
                </div>
                <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-white">
                        <LinkText href="mailto:y.t.n1110.77@gmail.com">問い合わせ</LinkText>
                        <LinkText href="/privacy">プライバシーポリシー</LinkText>
                        <LinkText href="/disclaimer">免責事項</LinkText>
                    </div>
                    <p className="text-white text-sm">©︎ SB-Engineer All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
