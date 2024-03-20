import Tag from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-parts/Tag',
    component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tagName: 'サンプル',
        tagId: 1,
    },
};
