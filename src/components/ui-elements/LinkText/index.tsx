import React, { ReactNode } from 'react';

import Link from 'next/link';

import * as style from './style.css';

import { vars } from '@/theme/theme.css';

type Props = {
    children: ReactNode;
    url: string;
    size?: keyof typeof vars.fontSizes;
    lineHeight?: keyof typeof vars.lineHeights;
    weight?: keyof typeof vars.fontWeights;
    color?: keyof typeof vars.colors;
};
const LinkText: React.FC<Props> = ({
    children,
    size = 'm',
    lineHeight = 'm',
    weight = 'normal',
    color = 'lightBlack',
    url,
}) => {
    const getLinkTextStyles = () => {
        return [
            style.container.size[size],
            style.container.lineHeight[lineHeight],
            style.container.weight[weight],
            style.container.color[color],
            style.container.fontFamily['text'],
        ].join(' ');
    };
    console.log(getLinkTextStyles());
    return (
        <Link href={url} className={getLinkTextStyles()}>
            {children}
        </Link>
    );
};

export default LinkText;
