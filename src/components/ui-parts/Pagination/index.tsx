'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import Icon from '@/components/ui-elements/Icon';
import { ShadcnLabel } from '@/components/ui/label';

type Props = {
    totalPages: number;
};

function Pagination({ totalPages }: Props) {
    const searchParams = useSearchParams();
    const query = searchParams.get('page') || '1';
    const currentPage = Number(query);

    const router = useRouter();

    const handleClickButton = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        router.push(`?${params.toString()}`);
    };

    const generatePagination = () => {
        const pages = [];
        if (totalPages <= 5) {
            // ページ数が5以下の場合はすべて表示
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // ページ数が6以上の場合の処理
            if (currentPage <= 3) {
                // 最初の4ページと最後のページを表示
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                // 最後の4ページと最初のページを表示
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                // 現在のページを中心に前後1ページと最初、最後のページを表示
                pages.push(
                    1,
                    '...',
                    currentPage - 1,
                    currentPage,
                    currentPage + 1,
                    '...',
                    totalPages
                );
            }
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-2">
            {currentPage > 1 && <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => handleClickButton(currentPage - 1)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-royalBlue bg-white hover:opacity-80 "
            >
                <Icon iconName="leftArrow" color="royalBlue" size="l" />
            </button>}
            {generatePagination().map((page) =>
                page === '...' ? (
                    <span key={page} className="px-2 text-gray-500">
                        {page}
                    </span>
                ) : (
                    <button
                        key={page}
                        type="button"
                        className={`w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${
                            currentPage === page
                                ? 'text-white border-royalBlue bg-royalBlue'
                                : 'bg-white border-royalBlue hover:opacity-80 text-royalBlue'
                        }`}
                        onClick={() => handleClickButton(Number(page))}
                    >
                        <ShadcnLabel className="text-sm font-medium hover:cursor-pointer">{page}</ShadcnLabel>
                    </button>
                )
            )}
            {currentPage < totalPages && <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => handleClickButton(currentPage + 1)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-royalBlue bg-white hover:opacity-80 "
            >
                <Icon iconName="rightArrow" color="royalBlue" size="l" />
            </button>}
        </div>
    );
}

export default Pagination;
