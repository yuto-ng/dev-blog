import CategoryArticles from '@/features/CategoryArticles';
import SideContents from '@/features/SideContents';
import { getArticlesByCategory, getCategories } from '@/lib/articles';

const profileSection = {
    description:
        '自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。',
    profileImageUrl: 'https://picsum.photos/seed/profile/200/200',
    twitterUrl: 'https://twitter.com/',
};

export default function HomePage() {
    const categories = getCategories();
    const sections = categories
        .map((category) => ({
            category,
            articles: getArticlesByCategory(category.id).slice(0, 4),
        }))
        .filter((section) => section.articles.length > 0);

    const sideCategoryLinks = categories.map((category) => ({
        id: category.id,
        title: category.name,
        href: `/category/${category.id}/1`,
    }));

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 lg:flex-row lg:items-start">
            <div className="flex-1 space-y-12">
                {sections.length > 0 ? (
                    sections.map((section) => (
                        <CategoryArticles
                            key={section.category.id}
                            categoryTitle={section.category.name}
                            articles={section.articles.map((article) => ({
                                id: article.slug,
                                title: article.title,
                                postDate: new Date(article.date),
                                href: `/category/${article.categoryId}/article/${article.slug}`,
                                ...(article.heroImage
                                    ? { imageUrl: article.heroImage }
                                    : { emoji: '📝' }),
                            }))}
                            moreHref={`/category/${section.category.id}/1`}
                        />
                    ))
                ) : (
                    <div className="rounded-lg bg-white p-12 text-center text-slate-600 shadow-sm">
                        現在公開中の記事がありません。
                    </div>
                )}
            </div>
            <div className="w-full lg:w-[250px] lg:flex-none lg:sticky lg:top-28">
                <SideContents profile={profileSection} categories={sideCategoryLinks} />
            </div>
        </div>
    );
}
