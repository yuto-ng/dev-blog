import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type CalloutProps = {
    children: ReactNode;
    className?: string;
};

export function Callout({ children, className }: CalloutProps) {
    return (
        <div
            className={cn(
                'rounded border-l-4 border-royalBlue/80 bg-blue-50 p-4 text-sm leading-relaxed text-slate-700',
                className
            )}
        >
            {children}
        </div>
    );
}
