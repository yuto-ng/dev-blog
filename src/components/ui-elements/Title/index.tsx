import React, { ReactNode } from 'react';

import * as style from './style.css';

import { vars } from '@/theme/theme.css';

type Props = {
    children: ReactNode;
    color?: keyof typeof vars.colors;
    size: keyof typeof vars.fontSizes;
    letterSpacing?: keyof typeof vars.letterSpacings;
    fontFamilyType?: keyof typeof vars.fontFamilies;
};

const Title: React.FC<Props> = ({
    children,
    color = 'lightBlack',
    size,
    letterSpacing = undefined,
    fontFamilyType = 'title',
}) => {
    const getTextStyles = () => {
        const styledLetterSpacing = letterSpacing
            ? style.container.letterSpacing[letterSpacing]
            : '';
        return [
            style.container.size[size],
            style.container.color[color],
            styledLetterSpacing,
            style.container.fontFamily[fontFamilyType],
        ].join(' ');
    };
    console.log(getTextStyles());
    return <h1 className={getTextStyles()}>{children}</h1>;
};

export default Title;
