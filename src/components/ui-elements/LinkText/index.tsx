'use client';

import { ShadcnButton } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
    href: string;
    children: React.ReactNode;
};

function ButtonLink({ href, children }: Props) {
    return (
        <ShadcnButton variant="link" asChild>
            <Link href={href}>{children}</Link>
        </ShadcnButton>
    );
}

export default ButtonLink;
