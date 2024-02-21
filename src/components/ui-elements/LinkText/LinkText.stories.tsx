import LinkText from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-elements/LinkText',
    component: LinkText,
} satisfies Meta<typeof LinkText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'サンプル',
        size: 'm',
        lineHeight: 'm',
        weight: 'normal',
        color: 'lightBlack',
        url: '/',
    },
};
