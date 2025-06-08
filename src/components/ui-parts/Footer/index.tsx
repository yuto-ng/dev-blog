import React from 'react';

import Logo from '../Logo';

import LinkText from '@/components/ui-elements/LinkText';

function Footer() {
    return (
        <div>
            <Logo />
            <div>
                <LinkText href="/">問い合わせ</LinkText>
                <LinkText href="/">プライバシーポリシー</LinkText>
                <LinkText href="/">免責事項</LinkText>
                <p className="text-white">©︎ SB-Engineer All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
