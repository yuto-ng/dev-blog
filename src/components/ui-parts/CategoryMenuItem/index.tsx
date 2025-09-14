import { IoChevronForward } from 'react-icons/io5';

type Props = {
    title: string;
    handleClickMenuItem: () => void;
};

const CategoryMenuItem: React.FC<Props> = ({ title, handleClickMenuItem }) => {
    return (
        <button
            type="button"
            className="flex w-full items-center justify-between py-3 cursor-pointer hover:opacity-default transition-opacity"
            onClick={handleClickMenuItem}
        >
            <span className="text-lg text-black">{title}</span>
            <IoChevronForward className="w-5 h-5 text-gray-600" />
        </button>
    );
};

export default CategoryMenuItem;
