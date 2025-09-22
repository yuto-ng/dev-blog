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
        onSearch: () => console.log('search clicked'),
        profile: {
            description:
                '自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。',
            profileImageUrl: 'https://picsum.photos/seed/profile/200/200',
            twitterUrl: 'https://twitter.com/',
        },
        categories: [
            { id: 1, title: 'カテゴリータイトル' },
            { id: 2, title: 'カテゴリータイトル' },
            { id: 3, title: 'カテゴリータイトル' },
        ],
        handleClickMenuItem: (id: number) => console.log('category click', id),
    },
};
