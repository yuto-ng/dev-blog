import CategoryMenuItem from '@/components/ui-parts/CategoryMenuItem';

type CategoryItem = {
    title: string;
    id: number;
};

type Props = {
    categories: CategoryItem[];
    handleClickMenuItem: () => void;
};

function CategoryMenu({ categories, handleClickMenuItem }: Props) {
    return (
        <div className="rounded-lg divide-y divide-gray-400">
            {categories.map((category) => (
                <CategoryMenuItem
                    key={category.id}
                    title={category.title}
                    handleClickMenuItem={handleClickMenuItem}
                />
            ))}
        </div>
    );
}

export default CategoryMenu;
