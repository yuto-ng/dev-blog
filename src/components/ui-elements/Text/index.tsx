import { ReactNode } from 'react';

import * as style from './style.css';

type Props = {
    children: ReactNode;
} & Partial<style.TextStyleProps>;

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
            style.container.fontFamily,
        ].join(' ');
    };

    return <div className={getTextStyles()}>{children}</div>;
};

export default Text;
