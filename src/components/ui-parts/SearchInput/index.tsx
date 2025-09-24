'use client';

import Icon from '@/components/ui-elements/Icon';

type Props = {
    handleClickSearchButton: () => void;
};

function SearchInput({ handleClickSearchButton }: Props) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleClickSearchButton();
        }
    };

    return (
        <div className="relative w-full">
            <input
                className="w-full rounded-lg border border-gray-300 p-2 pr-10"
                placeholder="検索"
                onKeyDown={handleKeyDown}
            />
            <button
                type="button"
                onClick={handleClickSearchButton}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:opacity-default"
            >
                <Icon iconName="search" color="gray" size="m" />
            </button>
        </div>
    );
}

export default SearchInput;
