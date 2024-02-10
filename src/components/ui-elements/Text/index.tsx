import { ReactNode } from 'react';

import { TextStyleProps, textVariants, baseStyle } from './style.css';

type Props = {
    children: ReactNode;
} & Partial<TextStyleProps>;

const Text: React.FC<Props> = ({
    children,
    size = 'm',
    lineHeight = 'm',
    weight = 'normal',
    color = 'lightBlack',
}) => {
    const getTextStyles = () => {
        return [
            baseStyle,
            textVariants.size[size],
            textVariants.color[color],
            textVariants.weight[weight],
            textVariants.lineHeight[lineHeight],
        ].join(' ');
    };

    return <div className={getTextStyles()}>{children}</div>;
};

export default Text;
