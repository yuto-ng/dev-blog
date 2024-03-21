import Article from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'organisms/Article',
    component: Article,
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'サンプル',
    },
};
