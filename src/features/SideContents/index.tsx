'use client';

import Profile from '@/components/organisms/Profile';
import CategoryMenuItem from '@/components/ui-parts/CategoryMenuItem';
import SearchInput from '@/components/ui-parts/SearchInput';

type CategoryItem = {
    id: number;
    title: string;
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
    const handleClickMenuItem = (id: number) => {
        // TODO: カテゴリクリック時の遷移 or フィルタ処理を実装
        void id; // 一時的に未使用警告抑止
    };
    return (
        <aside className="space-y-6">
            <SearchInput handleClickSearchButton={handleClickSearchButton} />
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
