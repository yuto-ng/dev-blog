import Logo from '../Logo';

import * as style from './style.css';

import LinkText from '@/components/ui-elements/LinkText';
import Text from '@/components/ui-elements/Text';

const Footer: React.FC = () => {
    return (
        <div className={style.container}>
            <Logo />
            <div className={style.menuContent}>
                <LinkText color="white" url="/">
                    問い合わせ
                </LinkText>
                <LinkText color="white" url="/">
                    プライバシーポリシー
                </LinkText>
                <LinkText color="white" url="/">
                    免責事項
                </LinkText>
                <Text color="white">©︎ SB-Engineer All rights reserved.</Text>
            </div>
        </div>
    );
};

export default Footer;
