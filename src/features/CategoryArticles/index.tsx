import Article from '@/components/organisms/Article';
import LabelButton from '@/components/ui-elements/LabelButton';
import CategoryTitle from '@/components/ui-parts/CategoryTitle';

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
    moreHref: string;
    moreButtonText?: string;
};

function CategoryArticles({
    categoryTitle,
    articles,
    moreHref,
    moreButtonText = 'カテゴリーをもっと見る',
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
                <LabelButton
                    href={moreHref}
                    className="bg-royalBlue text-white hover:bg-royalBlue/90"
                >
                    {moreButtonText}
                </LabelButton>
            </div>
        </div>
    );
}

export default CategoryArticles;
