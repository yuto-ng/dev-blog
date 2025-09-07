import CategoryMenu from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'organisms/CategoryMenu',
    component: CategoryMenu,
} satisfies Meta<typeof CategoryMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        categories: [
            { title: 'テクノロジー', id: 1 },
            { title: 'ビジネス', id: 2 },
            { title: 'ライフスタイル', id: 3 },
            { title: 'エンターテイメント', id: 4 },
            { title: '健康・医療', id: 5 },
            { title: '教育', id: 6 },
        ],
        onClick: () => console.log('カテゴリーがクリックされました'),
    },
};

