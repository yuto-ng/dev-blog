'use client';

import React from 'react';

// import { useSelectedLayoutSegments } from 'next/navigation';

import * as style from './style.css';

import Icon from '@/components/ui-elements/Icon';
import LinkText from '@/components/ui-elements/LinkText';

const Breadcrumbs = () => {
    // const segments = useSelectedLayoutSegments();

    return (
        <div className={style.container}>
            <LinkText lineHeight="s" url="/" color="royalBlue">
                ホーム
            </LinkText>
            <Icon iconName="FillCaretRight" size="s" />
            {/* <LinkText
                lineHeight="s"
                url={`/${segments[0]}/${segments[1]}/${segments[3]}`}
                color="royalBlue"
            >
                カテゴリー
            </LinkText> */}
        </div>
    );
};

export default Breadcrumbs;
