'use client';

import Icon, { type ICONS } from '@/components/ui-elements/Icon';
import { ShadcnButton } from '@/components/ui/button';

type Props = {
    disabled?: boolean;
    onClick: () => void;
    iconName: keyof typeof ICONS;
};

function IconButton({ disabled, onClick, iconName }: Props) {
    return (
        <ShadcnButton variant="ghost" className="size-8" disabled={disabled} onClick={onClick}>
            <Icon iconName={iconName} />
        </ShadcnButton>
    );
}

export default IconButton;
