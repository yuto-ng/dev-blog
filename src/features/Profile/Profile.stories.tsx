import Profile from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'features/Profile',
    component: Profile,
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        description:
            '自己紹介文が入ります。 自己紹介文が入ります。 自己紹介文が入ります。 自己紹介文が入ります。',
        twitterUrl: 'https://twitter.com/',
        profileImageUrl: 'https://picsum.photos/200/300',
    },
};
