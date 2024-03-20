import ReadMoreLabel from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-parts/ReadMoreLabel',
    component: ReadMoreLabel,
} satisfies Meta<typeof ReadMoreLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: undefined,
};
