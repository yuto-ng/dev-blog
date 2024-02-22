import Logo from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-elements/Logo',
    component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'SB-engineer',
    },
};
