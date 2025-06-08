'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import * as style from './style.css';

import Icon from '@/components/ui-elements/Icon';
import Text from '@/components/ui-elements/Text';

type Props = {
    totalPages: number;
};

const Pagination: React.FC<Props> = ({ totalPages }) => {
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
                // 最初の3ページと最後のページを表示
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                // 最後の3ページと最初のページを表示
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                // 現在のページを中心に前後1ページと最初、最後のページを表示
                pages.push(
                    1,
                    '...',
                    currentPage - 1,
                    currentPage,
                    currentPage + 1,
                    '...',
                    totalPages,
                );
            }
        }
        return pages;
    };

    return (
        <div className={style.container}>
            <button
                className={style.button}
                disabled={currentPage === 1}
                onClick={() => handleClickButton(currentPage - 1)}
            >
                <Icon iconName="leftArrow" color="royalBlue" size="l" />
            </button>
            {generatePagination().map((page, index) =>
                page === '...' ? (
                    <span key={index}>{page}</span>
                ) : (
                    <button
                        key={index}
                        className={currentPage === page ? style.currentButton : style.button}
                        onClick={() => handleClickButton(Number(page))}
                    >
                        <Text
                            color={currentPage === page ? 'white' : 'royalBlue'}
                            size="m"
                            weight="bold"
                        >
                            {page}
                        </Text>
                    </button>
                ),
            )}
            <button
                className={style.button}
                disabled={currentPage === totalPages}
                onClick={() => handleClickButton(currentPage + 1)}
            >
                <div className={style.endIcon}>
                    <Icon iconName="rightArrow" color="royalBlue" size="l" />
                </div>
            </button>
        </div>
    );
};

export default Pagination;
