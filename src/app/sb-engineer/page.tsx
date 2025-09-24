import CategoryArticleWithPagination from '@/features/CategoryArticleWithPagination';
import SideContents from '@/features/SideContents';

export default function SbEngineerPage() {
    const now = new Date();
    const articles = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        title: '記事のタイトルが入ります。 記事のタイトルが入ります。 記事のタイトルが入ります。',
        postDate: now,
        imageUrl: `https://picsum.photos/seed/sb${i + 1}/600/400`,
        href: `/articles/${i + 1}`,
    }));

    const categories = [
        { id: '1', title: 'カテゴリータイトル', href: '/category/1/1' },
        { id: '2', title: 'カテゴリータイトル', href: '/category/2/1' },
        { id: '3', title: 'カテゴリータイトル', href: '/category/3/1' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_250px]">
                <div>
                    <CategoryArticleWithPagination
                        categoryTitle="カテゴリ―タイトル"
                        articles={articles}
                        totalPages={7}
                    />
                </div>
                <div className="md:sticky md:top-28">
                    <SideContents
                        profile={{
                            description:
                                '自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。自己紹介文が入ります。',
                            profileImageUrl: 'https://picsum.photos/seed/profile/200/200',
                            twitterUrl: 'https://twitter.com/',
                        }}
                        categories={categories}
                    />
                </div>
            </div>
        </div>
    );
}
