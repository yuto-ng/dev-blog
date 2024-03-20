import ShareLabel from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-parts/ShareLabel',
    component: ShareLabel,
} satisfies Meta<typeof ShareLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: undefined,
};
