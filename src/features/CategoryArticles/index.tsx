import LabelButton from '@/components/ui-elements/LabelButton';
import CategoryTitle from '@/components/ui-parts/CategoryTitle';
import CategoryArticleSummary from '@/features/CategoryArticleSummary';

type ArticleItem = {
    id: string | number;
    title: string;
    postDate: Date;
    onClick: () => void;
    imageUrl?: string;
    emoji?: string;
};

type Props = {
    categoryTitle: string;
    articles: ArticleItem[];
    onClickMore: () => void;
    moreButtonText?: string;
};

function CategoryArticles({
    categoryTitle,
    articles,
    onClickMore,
    moreButtonText = 'カテゴリーをもっと見る',
}: Props) {
    return (
        <div className="rounded-lg bg-white p-8">
            <div className="text-center">
                <CategoryTitle titleText={categoryTitle} />
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((a) => {
                    const { imageUrl, emoji } = a;
                    return (
                        <CategoryArticleSummary
                            key={a.id}
                            title={a.title}
                            postDate={a.postDate}
                            onClick={a.onClick}
                            {...(imageUrl ? { imageUrl } : { emoji: emoji ?? '📝' })}
                        />
                    );
                })}
            </div>
            <div className="mt-16 flex justify-center">
                <LabelButton
                    onClick={onClickMore}
                    className="bg-royalBlue text-white hover:bg-royalBlue/90"
                >
                    {moreButtonText}
                </LabelButton>
            </div>
        </div>
    );
}

export default CategoryArticles;
