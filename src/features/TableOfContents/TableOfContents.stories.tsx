import TableOfContents from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'features/TableOfContents',
    component: TableOfContents,
} satisfies Meta<typeof TableOfContents>;

export default meta;
type Story = StoryObj<typeof meta>;

const headings = [
    { id: 'introduction', text: '序文', level: 1 },
    { id: 'setup', text: 'セットアップ', level: 2 },
    { id: 'usage', text: '使い方', level: 2 },
    { id: 'usage-advanced', text: '応用編', level: 3 },
];

export const Default: Story = {
    args: {
        headings,
    },
};

export const Empty: Story = {
    args: {
        headings: [],
    },
};
