import Article from '@/components/organisms/Article';
import CategoryTitle from '@/components/ui-parts/CategoryTitle';
import Pagination from '@/components/ui-parts/Pagination';

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
    totalPages: number;
};

function CategoryArticleWithPagination({ categoryTitle, articles, totalPages }: Props) {
    return (
        <div className="rounded-lg bg-white p-8">
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
                            onClick={a.onClick}
                            {...(imageUrl ? { imageUrl } : { emoji: emoji ?? '📝' })}
                        />
                    );
                })}
            </div>
            <div className="mt-16 flex justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}

export default CategoryArticleWithPagination;
