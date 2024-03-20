import { ReactNode } from 'react';

import * as style from './style.css';

import { Colors } from '@/theme/colors';
import { FontSizes } from '@/theme/fontSizes';
import { FontWeights } from '@/theme/fontWeights';
import { notoSansJp } from '@/theme/fontfamily';
import { LineHeights } from '@/theme/lineHeights';

type Props = {
    children: ReactNode;
    size?: FontSizes;
    lineHeight?: LineHeights;
    weight?: FontWeights;
    color?: Colors;
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
            notoSansJp.className,
        ].join(' ');
    };

    return <span className={getTextStyles()}>{children}</span>;
};

export default Text;
