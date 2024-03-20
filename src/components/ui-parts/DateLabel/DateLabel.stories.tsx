import DateLabel from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-parts/DateLabel',
    component: DateLabel,
} satisfies Meta<typeof DateLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        postDate: new Date(),
    },
};
