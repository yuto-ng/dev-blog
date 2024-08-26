import Title from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-elements/Title',
    component: Title,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'サンプル',
        size: 'l',
        color: 'lightBlack',
        letterSpacing: 'm',
        fontFamilyType: 'title',
    },
};
