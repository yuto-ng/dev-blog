import { ReactNode } from 'react';

import * as style from './style.css';

import { Colors } from '@/theme/colors';
import { FontFamilies, fontFamilies } from '@/theme/fontFamily';
import { FontSizes } from '@/theme/fontSizes';
import { LetterSpacings } from '@/theme/letterSpacing';

type Props = {
    children: ReactNode;
    color?: Colors;
    size: FontSizes;
    fontFamilyType?: FontFamilies;
    letterSpacing?: LetterSpacings;
};

const Title: React.FC<Props> = ({
    children,
    color = 'lightBlack',
    size,
    fontFamilyType = 'title',
    letterSpacing = undefined,
}) => {
    const getTextStyles = () => {
        const styledLetterSpacing = letterSpacing
            ? style.container.letterSpacing[letterSpacing]
            : '';
        return [
            style.container.size[size],
            style.container.color[color],
            styledLetterSpacing,
            fontFamilies[fontFamilyType].className,
        ].join(' ');
    };
    return <h1 className={getTextStyles()}>{children}</h1>;
};

export default Title;
