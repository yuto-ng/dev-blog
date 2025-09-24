import CategoryMenuItem from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-parts/CategoryMenuItem',
    component: CategoryMenuItem,
} satisfies Meta<typeof CategoryMenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'カテゴリータイトル',
        href: '/category/demo/1',
    },
};

export const WithClickHandler: Story = {
    args: {
        title: 'テクノロジー',
        handleClickMenuItem: () => console.log('カテゴリーがクリックされました'),
    },
};

export const LongTitle: Story = {
    args: {
        title: '長いカテゴリータイトルの例です',
        href: '/category/long/1',
    },
};
