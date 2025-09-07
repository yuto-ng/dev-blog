import Pagination from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ui-parts/Pagination',
    component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page1Of5: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                query: {
                    page: '1',
                },
            },
        },
    },
    args: {
        totalPages: 5,
    },
};

export const Page3Of10: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                query: {
                    page: '3',
                },
            },
        },
    },
    args: {
        totalPages: 10,
    },
};

export const Page5Of10: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                query: {
                    page: '5',
                },
            },
        },
    },
    args: {
        totalPages: 10,
    },
};

export const Page7Of10: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                query: {
                    page: '7',
                },
            },
        },
    },
    args: {
        totalPages: 10,
    },
};

export const Page8Of10: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                query: {
                    page: '8',
                },
            },
        },
    },
    args: {
        totalPages: 10,
    },
};


export const Page10Of10: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                query: {
                    page: '10',
                },
            },
        },
    },
    args: {
        totalPages: 10,
    },
};