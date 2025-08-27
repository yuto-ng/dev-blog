'use client';

import { BsClock } from 'react-icons/bs';

import { ShadcnLabel } from '@/components/ui/label';

type Props = {
    postDate: Date;
};

function DateLabel({ postDate }: Props) {
    const getFormattedDate = () => {
        const d = new Date(postDate);
        const year = d.getFullYear();
        const month = `0${d.getMonth() + 1}`.slice(-2);
        const day = `0${d.getDate()}`.slice(-2);
        return `${year}.${month}.${day}`;
    };

    return (
        <div className="flex items-center space-x-2">
            <BsClock className="h-4 w-4" />
            <ShadcnLabel>{getFormattedDate()}</ShadcnLabel>
        </div>
    );
}

export default DateLabel;
