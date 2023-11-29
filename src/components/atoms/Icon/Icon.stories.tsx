import Icon from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/atoms/Icon',
    component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconType: 'FillCaretRight',
        size: 'm',
    },
};
