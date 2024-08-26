import React from 'react';

import Image from 'next/image';

import * as style from './style.css';

import { vars } from '@/theme/theme.css';

type IconName =
    | 'FillCaretRight'
    | 'OutlineClockCircle'
    | 'OutlineDoubleRight'
    | 'OutlineSearch'
    | 'OutlineTwitter'
    | 'OutlineWhiteDoubleRight';

type Props = {
    iconName: IconName;
    size: keyof typeof vars.iconSizes;
};

const Icon: React.FC<Props> = ({ iconName, size }) => {
    const ICON_URL = `/reactIcons/${iconName}.svg`;

    return (
        <div className={style.container[size]}>
            <Image src={ICON_URL} alt="icon" fill />
        </div>
    );
};

export default Icon;
