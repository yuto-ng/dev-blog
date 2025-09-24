import SideContents from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'features/SideContents',
    component: SideContents,
} satisfies Meta<typeof SideContents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        profile: {
            description:
                '自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。',
            profileImageUrl: 'https://picsum.photos/seed/profile/200/200',
            twitterUrl: 'https://twitter.com/',
        },
        categories: [
            { id: 'engineering', title: 'カテゴリータイトル', href: '/category/engineering/1' },
            { id: 'design', title: 'カテゴリータイトル', href: '/category/design/1' },
            { id: 'life', title: 'カテゴリータイトル', href: '/category/life/1' },
        ],
    },
};
