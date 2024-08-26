import CategoryTitle from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-parts/CategoryTitle',
    component: CategoryTitle,
} satisfies Meta<typeof CategoryTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        titleText: 'カテゴリータイトル',
    },
};
