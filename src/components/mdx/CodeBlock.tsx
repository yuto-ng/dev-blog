import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

type PreProps = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
type CodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function Pre({ className, ...props }: PreProps) {
    return (
        <pre
            className={cn(
                'overflow-x-auto rounded-lg bg-slate-900 p-4 font-mono text-sm leading-relaxed text-slate-100 shadow-inner',
                className
            )}
            {...props}
        />
    );
}

export function Code({ className, ...props }: CodeProps) {
    const isInline =
        (typeof className !== 'string' || !className.includes('language-')) &&
        !('data-theme' in props) &&
        !('data-language' in props);

    return (
        <code
            className={cn(
                isInline
                    ? 'rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-800'
                    : 'font-mono text-sm',
                className
            )}
            {...props}
        />
    );
}
