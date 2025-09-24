import CategoryArticleWithPaginetion from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'features/CategoryArticleWithPaginetion',
    component: CategoryArticleWithPaginetion,
} satisfies Meta<typeof CategoryArticleWithPaginetion>;

export default meta;
type Story = StoryObj<typeof meta>;

const now = new Date();

const articles = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: '記事のタイトルが入ります。 記事のタイトルが入ります。 記事のタイトルが入ります。',
    postDate: now,
    imageUrl: `https://picsum.photos/seed/p${i + 1}/600/400`,
    href: `/category/demo/article/${i + 1}`,
}));

export const Default: Story = {
    args: {
        categoryTitle: 'カテゴリ―タイトル',
        articles,
        totalPages: 7,
        currentPage: 1,
    },
};
