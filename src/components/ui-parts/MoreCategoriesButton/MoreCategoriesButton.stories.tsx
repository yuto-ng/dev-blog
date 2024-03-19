import MoreCategoriesButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-parts/MoreCategoriesButton',
    component: MoreCategoriesButton,
} satisfies Meta<typeof MoreCategoriesButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'サンプル',
    },
};
