import Icon from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-elements/Icon',
    component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconName: 'FillCaretRight',
        size: 'm',
    },
};
