import * as style from './style.css';

import Title from '@/components/ui-elements/Title';

type Props = {
    text: string;
};

const CategoryTitle: React.FC<Props> = ({ text }) => {
    return (
        <div className={style.container}>
            <Title size="l" color="white">
                {text}
            </Title>
        </div>
    );
};

export default CategoryTitle;
