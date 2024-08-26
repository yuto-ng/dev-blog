import React, { ReactNode } from 'react';

import * as style from './style.css';

import { vars } from '@/theme/theme.css';

type Props = {
    children: ReactNode;
    size?: keyof typeof vars.fontSizes;
    lineHeight?: keyof typeof vars.lineHeights;
    weight?: keyof typeof vars.fontWeights;
    color?: keyof typeof vars.colors;
};

const Text: React.FC<Props> = ({
    children,
    size = 'm',
    lineHeight = 'm',
    weight = 'normal',
    color = 'lightBlack',
}) => {
    const getTextStyles = () => {
        return [
            style.container.size[size],
            style.container.lineHeight[lineHeight],
            style.container.weight[weight],
            style.container.color[color],
            style.container.fontFamily['text'],
        ].join(' ');
    };

    return <span className={getTextStyles()}>{children}</span>;
};

export default Text;
