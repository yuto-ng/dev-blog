import * as style from './style.css';

import Text from '@/components/ui-elements/Text';

type Props = {
    text: string;
};

const MoreCategoriesButton: React.FC<Props> = ({ text }) => {
    return (
        <button className={style.container} type="button">
            <Text color="white" size="m">
                {text}
            </Text>
        </button>
    );
};

export default MoreCategoriesButton;
