import Icon from '@/components/ui-elements/Icon';
import LabelButton from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-elements/LabelButton',
    component: LabelButton,
} satisfies Meta<typeof LabelButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'LabelButton',
        onClick: () => {},
    },
};
