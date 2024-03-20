import { ReactNode } from 'react';

import * as style from './style.css';

import { Colors } from '@/theme/colors';
import { FontSizes } from '@/theme/fontSizes';
import { zenKakuGothicNew } from '@/theme/fontfamily';

type Props = {
    children: ReactNode;
    color?: Colors;
    size: FontSizes;
};

const Title: React.FC<Props> = ({ children, color = 'lightBlack', size }) => {
    const getTextStyles = () => {
        return [
            style.container.size[size],
            style.container.color[color],
            zenKakuGothicNew.className,
        ].join(' ');
    };
    return <h1 className={getTextStyles()}>{children}</h1>;
};

export default Title;
