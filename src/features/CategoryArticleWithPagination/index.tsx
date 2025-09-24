import { Suspense } from 'react';

import Article from '@/components/organisms/Article';
import CategoryTitle from '@/components/ui-parts/CategoryTitle';
import Pagination from '@/components/ui-parts/Pagination';

type ArticleItem = {
    id: string | number;
    title: string;
    postDate: Date;
    href: string;
    imageUrl?: string;
    emoji?: string;
};

type Props = {
    categoryTitle: string;
    articles: ArticleItem[];
    totalPages: number;
    currentPage?: number;
    paginationBasePath?: string;
};

function CategoryArticleWithPagination({
    categoryTitle,
    articles,
    totalPages,
    currentPage,
    paginationBasePath,
}: Props) {
    return (
        <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="text-center">
                <CategoryTitle titleText={categoryTitle} />
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((a) => {
                    const { imageUrl, emoji } = a;
                    return (
                        <Article
                            key={a.id}
                            title={a.title}
                            postDate={a.postDate}
                            href={a.href}
                            {...(imageUrl ? { imageUrl } : { emoji: emoji ?? '📝' })}
                        />
                    );
                })}
            </div>
            <div className="mt-16 flex justify-center">
                <Suspense fallback={null}>
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        paginationBasePath={paginationBasePath}
                    />
                </Suspense>
            </div>
        </div>
    );
}

export default CategoryArticleWithPagination;
