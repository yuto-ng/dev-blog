import CategoryArticleWithPagination from '@/features/CategoryArticleWithPagination';
import SideContents from '@/features/SideContents';
import {
    DEFAULT_PAGE_SIZE,
    getCategories,
    getCategoryById,
    getPaginatedArticlesByCategory,
} from '@/lib/articles';
import { notFound } from 'next/navigation';

const profileSection = {
    description:
        '自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。',
    profileImageUrl: 'https://picsum.photos/seed/profile/200/200',
    twitterUrl: 'https://twitter.com/',
};

export function generateStaticParams() {
    return getCategories().flatMap((category) => {
        const { totalPages } = getPaginatedArticlesByCategory(category.id, 1, DEFAULT_PAGE_SIZE);
        return Array.from({ length: totalPages }).map((_, index) => ({
            categoryId: category.id,
            page: `${index + 1}`,
        }));
    });
}

export default function CategoryPage({
    params,
}: {
    params: {
        categoryId: string;
        page: string;
    };
}) {
    const pageNumber = Number(params.page);
    if (!Number.isInteger(pageNumber) || pageNumber < 1) {
        notFound();
    }

    const { entries, totalPages } = getPaginatedArticlesByCategory(
        params.categoryId,
        pageNumber,
        DEFAULT_PAGE_SIZE
    );

    if (entries.length === 0) {
        notFound();
    }

    const category = getCategoryById(params.categoryId);
    const categories = getCategories();
    const sideCategoryLinks = categories.map((c) => ({
        id: c.id,
        title: c.name,
        href: `/category/${c.id}/1`,
    }));

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 lg:flex-row lg:items-start">
            <div className="flex-1">
                <CategoryArticleWithPagination
                    categoryTitle={category?.name ?? entries[0]?.categoryName ?? 'カテゴリー'}
                    articles={entries.map((article) => ({
                        id: article.slug,
                        title: article.title,
                        postDate: new Date(article.date),
                        href: `/category/${article.categoryId}/article/${article.slug}`,
                        ...(article.heroImage ? { imageUrl: article.heroImage } : { emoji: '📝' }),
                    }))}
                    totalPages={totalPages}
                    currentPage={pageNumber}
                    paginationBasePath={`/category/${params.categoryId}`}
                />
            </div>
            <div className="w-full lg:w-[250px] lg:flex-none lg:sticky lg:top-28">
                <SideContents profile={profileSection} categories={sideCategoryLinks} />
            </div>
        </div>
    );
}
