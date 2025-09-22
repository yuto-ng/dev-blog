import Profile from '@/components/organisms/Profile';
import CategoryMenuItem from '@/components/ui-parts/CategoryMenuItem';
import SearchInput from '@/components/ui-parts/SearchInput';

type CategoryItem = {
    id: number;
    title: string;
};

type Props = {
    onSearch: () => void;
    profile: {
        description: string;
        profileImageUrl: string;
        twitterUrl: string;
    };
    categories: CategoryItem[];
    handleClickMenuItem: (id: number) => void;
};

function SideContents({ onSearch, profile, categories, handleClickMenuItem }: Props) {
    return (
        <aside className="space-y-6">
            <SearchInput handleClickSearchButton={onSearch} />
            <Profile
                description={profile.description}
                profileImageUrl={profile.profileImageUrl}
                twitterUrl={profile.twitterUrl}
            />
            <nav className="divide-y divide-gray-200">
                {categories.map((c) => (
                    <CategoryMenuItem
                        key={c.id}
                        title={c.title}
                        handleClickMenuItem={() => handleClickMenuItem(c.id)}
                    />
                ))}
            </nav>
        </aside>
    );
}

export default SideContents;
