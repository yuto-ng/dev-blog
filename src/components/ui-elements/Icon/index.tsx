'use client';

import {
    ChevronRight as CaretRight,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Search,
} from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

import { cn } from '@/lib/utils';

export const ICONS = {
    leftArrow: ChevronLeft,
    rightArrow: ChevronRight,
    search: Search,
    doubleRight: ChevronsRight,
    doubleLeft: ChevronsLeft,
    caretRight: CaretRight,
    xLogo: FaXTwitter,
} as const;

const SIZE_MAP = {
    s: 'h-4 w-4',
    m: 'h-6 w-6',
    l: 'h-8 w-8',
} as const;

type Props = {
    iconName: keyof typeof ICONS;
    size?: 's' | 'm' | 'l';
    color?: string;
};

function Icon({ iconName, size = 'm', color = 'currentColor' }: Props) {
    const IconComponent = ICONS[iconName];

    return <IconComponent className={cn(SIZE_MAP[size])} color={color} />;
}

export default Icon;
