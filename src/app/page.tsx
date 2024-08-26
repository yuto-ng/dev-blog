import React from 'react';

import LinkText from '@/components/ui-elements/LinkText';

export default function HomePage() {
    return (
        <>
            <LinkText url="/category/1/1">カテゴリーページ</LinkText>
            <LinkText url="/category/1/article/1">記事詳細ページ</LinkText>
        </>
    );
}
