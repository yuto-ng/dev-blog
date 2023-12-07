import Test from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'hogehoge/Test',
    component: Test,
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'サンプル',
    },
};
