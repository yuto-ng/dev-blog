import IconButton from '@/components/ui-elements/IconButton';

type Props = {
    handleClickSearchButton: () => void;
};

function SearchInput({ handleClickSearchButton }: Props) {
    return (
        <div className="flex items-center gap-2">
            <input className="w-full rounded-md border border-gray-300 p-2" placeholder="検索" />
            <IconButton onClick={handleClickSearchButton} iconName="search" />
        </div>
    );
}

export default SearchInput;
