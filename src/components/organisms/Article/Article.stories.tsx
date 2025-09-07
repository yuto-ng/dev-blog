import Article from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'organisms/Article',
    component: Article,
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
    args: {
        title: '画像付きの記事のタイトルです。素晴らしい内容をお届けします。',
        postDate: new Date('2024-03-20'),
        imageUrl: 'https://picsum.photos/200/300',
        onClick: () => console.log('画像付き記事がクリックされました'),
    },
};

export const WithEmoji: Story = {
    args: {
        title: '絵文字付きの記事タイトルです。視覚的なアクセントとして絵文字を使用しています。',
        postDate: new Date('2024-03-25'),
        emoji: '😇',
        onClick: () => console.log('絵文字付き記事がクリックされました'),
    },
};
