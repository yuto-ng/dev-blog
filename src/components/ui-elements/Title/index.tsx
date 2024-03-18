import { ReactNode } from 'react';

import * as style from './style.css';

import { zenKakuGothicNew } from '@/theme/fontfamily';

type Props = {
    children: ReactNode;
};

const Title: React.FC<Props> = ({ children }) => {
    const getTextStyles = () => {
        return [style.container, zenKakuGothicNew.className].join(' ');
    };
    return <div className={getTextStyles()}>{children}</div>;
};

export default Title;
