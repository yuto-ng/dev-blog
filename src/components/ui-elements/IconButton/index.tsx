'use client';

import { ShadcnButton } from '@/components/ui/button';
type Props = {
    children: React.ReactNode;
    disabled?: boolean;
    onClick: () => void;
};

function IconButton({ children, disabled, onClick }: Props) {
    return (
        <ShadcnButton
            variant="secondary"
            size="icon"
            className="size-8"
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </ShadcnButton>
    );
}

export default IconButton;
