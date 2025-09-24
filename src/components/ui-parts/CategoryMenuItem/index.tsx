import Link from 'next/link';
import { IoChevronForward } from 'react-icons/io5';

type Props = {
    title: string;
    handleClickMenuItem?: () => void;
    href?: string;
};

const baseClasses =
    'flex w-full items-center justify-between px-2 py-3 transition-opacity hover:opacity-default cursor-pointer';

function CategoryMenuItem({ title, handleClickMenuItem, href }: Props) {
    const content = (
        <>
            <span className="text-lg text-black">{title}</span>
            <IoChevronForward className="h-5 w-5 text-gray-600" />
        </>
    );

    if (href) {
        return (
            <Link href={href} className={baseClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button type="button" className={baseClasses} onClick={handleClickMenuItem}>
            {content}
        </button>
    );
}

export default CategoryMenuItem;
