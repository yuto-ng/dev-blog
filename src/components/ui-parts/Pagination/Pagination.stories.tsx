import Pagination from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-parts/Pagination',
    component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                query: {
                    page: '2',
                },
            },
        },
    },
    args: {
        totalPages: 4,
    },
};
