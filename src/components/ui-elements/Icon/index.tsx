import React from 'react';

import {
    AiOutlineLeft,
    AiOutlineRight,
    AiOutlineSearch,
    AiOutlineDoubleRight,
    AiOutlineDoubleLeft,
    AiOutlineCaretRight,
} from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';

import * as style from './style.css';

import { vars } from '@/theme/theme.css';

const ICONS = {
    leftArrow: AiOutlineLeft,
    rightArrow: AiOutlineRight,
    twitter: BsTwitterX,
    search: AiOutlineSearch,
    doubleRight: AiOutlineDoubleRight,
    doubleLeft: AiOutlineDoubleLeft,
    caretRight: AiOutlineCaretRight,
};

type Props = {
    iconName: keyof typeof ICONS;
    size?: keyof typeof vars.iconSizes;
    color?: keyof typeof vars.colors;
};

const Icon: React.FC<Props> = ({ iconName, size = 'm', color = 'lightBlack' }) => {
    const IconComponent = ICONS[iconName];
    return (
        <div className={style.container[size]}>
            <IconComponent size={size} color={color} />
        </div>
    );
};

export default Icon;
