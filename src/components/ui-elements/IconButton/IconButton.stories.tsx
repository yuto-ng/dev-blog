import Icon from '@/components/ui-elements/Icon';
import IconButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-elements/IconButton',
    component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconName: 'leftArrow',
        onClick: () => {},
        disabled: false,
    },
};
