'use client';

import {
    ChevronRight as CaretRight,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Search,
    X,
} from 'lucide-react';

import { cn } from '@/lib/utils';

const ICONS = {
    leftArrow: ChevronLeft,
    rightArrow: ChevronRight,
    x: X,
    search: Search,
    doubleRight: ChevronsRight,
    doubleLeft: ChevronsLeft,
    caretRight: CaretRight,
} as const;

type Props = {
    iconName: keyof typeof ICONS;
    size?: 's' | 'm' | 'l';
    color?: string;
    // TODO: 必要に応じてデザインシステム構築
    className?: string;
};

const SIZE_MAP = {
    s: 'h-4 w-4',
    m: 'h-6 w-6',
    l: 'h-8 w-8',
} as const;

function Icon({ iconName, size = 'm', color = 'currentColor', className }: Props) {
    const IconComponent = ICONS[iconName];

    return <IconComponent className={cn(SIZE_MAP[size], className)} color={color} />;
}

export default Icon;
