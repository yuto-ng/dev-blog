import CategoryArticles from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'features/CategoryArticles',
    component: CategoryArticles,
} satisfies Meta<typeof CategoryArticles>;

export default meta;
type Story = StoryObj<typeof meta>;

const now = new Date();

export const Default: Story = {
    args: {
        categoryTitle: 'カテゴリ―タイトル',
        onClickMore: () => console.log('more categories'),
        articles: [
            {
                id: 1,
                title: '記事のタイトルが入ります。 記事のタイトルが入ります。 記事のタイトルが入ります。',
                postDate: now,
                imageUrl: 'https://picsum.photos/seed/1/600/400',
                onClick: () => console.log('read more 1'),
            },
            {
                id: 2,
                title: '記事のタイトルが入ります。 記事のタイトルが入ります。 記事のタイトルが入ります。',
                postDate: now,
                imageUrl: 'https://picsum.photos/seed/2/600/400',
                onClick: () => console.log('read more 2'),
            },
            {
                id: 3,
                title: '記事のタイトルが入ります。 記事のタイトルが入ります。 記事のタイトルが入ります。',
                postDate: now,
                imageUrl: 'https://picsum.photos/seed/3/600/400',
                onClick: () => console.log('read more 3'),
            },
            {
                id: 4,
                title: '記事のタイトルが入ります。 記事のタイトルが入ります。 記事のタイトルが入ります。',
                postDate: now,
                imageUrl: 'https://picsum.photos/seed/4/600/400',
                onClick: () => console.log('read more 4'),
            },
        ],
    },
};
