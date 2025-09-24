import Link from 'next/link';

import { ShadcnButton } from '@/components/ui/button';

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    href?: string;
};

function LabelButton({ children, onClick, className, href }: Props) {
    if (href) {
        return (
            <ShadcnButton className={className} asChild>
                <Link href={href}>{children}</Link>
            </ShadcnButton>
        );
    }

    return (
        <ShadcnButton className={className} onClick={onClick}>
            {children}
        </ShadcnButton>
    );
}

export default LabelButton;
