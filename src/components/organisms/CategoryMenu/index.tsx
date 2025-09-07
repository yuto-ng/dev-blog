import CategoryMenuItem from '@/components/ui-parts/CategoryMenuItem';

type CategoryItem = {
    title: string;
    id: number
};

type Props = {
    categories: CategoryItem[];
    onClick: () => void;
};

function CategoryMenu({ categories, onClick }: Props) {
    return (
        <div className="rounded-lg divide-y divide-gray-400">
            {categories.map((category) => (
                <CategoryMenuItem
                    key={category.id}
                    title={category.title}
                    onClick={onClick}
                />
            ))}
        </div>
    );
};

export default CategoryMenu;
