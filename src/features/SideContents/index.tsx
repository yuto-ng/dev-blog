'use client';

import Profile from '@/components/organisms/Profile';
import CategoryMenuItem from '@/components/ui-parts/CategoryMenuItem';
import SearchInput from '@/components/ui-parts/SearchInput';

type CategoryItem = {
    id: string;
    title: string;
    href: string;
};

type Props = {
    profile: {
        description: string;
        profileImageUrl: string;
        twitterUrl: string;
    };
    categories: CategoryItem[];
};

function SideContents({ profile, categories }: Props) {
    const handleClickSearchButton = () => {
        // TODO: 実際の検索ロジックを実装
        // console.log('search triggered');
    };
    return (
        <aside className="w-full space-y-6 lg:w-[250px]">
            <SearchInput handleClickSearchButton={handleClickSearchButton} />
            <Profile
                description={profile.description}
                profileImageUrl={profile.profileImageUrl}
                twitterUrl={profile.twitterUrl}
            />
            <div className="rounded-lg bg-white p-4 shadow-sm">
                <nav className="divide-y divide-gray-200">
                    {categories.map((c) => (
                        <CategoryMenuItem key={c.id} title={c.title} href={c.href} />
                    ))}
                </nav>
            </div>
        </aside>
    );
}

export default SideContents;
