'use client';

import Link from 'next/link';

import { ShadcnButton } from '@/components/ui/button';

type Props = {
    href: string;
    children: React.ReactNode;
};

function LinkText({ href, children }: Props) {
    return (
        <ShadcnButton asChild>
            <Link href={href}>{children}</Link>
        </ShadcnButton>
    );
}

export default LinkText;
