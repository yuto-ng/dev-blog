import { ReactNode } from 'react';

import Link from 'next/link';

import * as style from './style.css';

import { fontFamilies } from '@/theme/fontFamily';

type Props = {
    children: ReactNode;
    url: string;
} & Partial<style.LinkTextStyleProps>;

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
            fontFamilies['text'].className,
        ].join(' ');
    };
    return (
        <Link href={url} className={getLinkTextStyles()}>
            {children}
        </Link>
    );
};

export default LinkText;
