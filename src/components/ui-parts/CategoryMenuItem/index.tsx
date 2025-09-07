import { IoChevronForward } from 'react-icons/io5';

type Props = {
    title: string;
    onClick?: () => void;
};

const CategoryMenuItem: React.FC<Props> = ({ title, onClick }) => {
    return (
        <div 
            className="flex items-center justify-between py-3 cursor-pointer hover:opacity-default transition-opacity"
            onClick={onClick}
        >
            <span className="text-lg text-black">{title}</span>
            <IoChevronForward className="w-5 h-5 text-gray-600" />
        </div>
    );
};

export default CategoryMenuItem;
