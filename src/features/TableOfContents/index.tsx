import { cn } from '@/lib/utils';

export type TableOfContentsHeading = {
    id: string;
    text: string;
    level: number;
};

type Props = {
    headings: TableOfContentsHeading[];
};

function TableOfContents({ headings }: Props) {
    if (!headings.length) {
        return null;
    }

    return (
        <nav className="rounded-lg bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-royalBlue">目次</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {headings.map((heading) => (
                    <li key={heading.id}>
                        <a
                            href={`#${heading.id}`}
                            className={cn(
                                'block leading-relaxed text-slate-600 transition-colors hover:text-royalBlue',
                                {
                                    'pl-4 text-slate-600': heading.level === 2,
                                    'pl-8 text-slate-500 text-xs': heading.level === 3,
                                },
                            )}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default TableOfContents;
