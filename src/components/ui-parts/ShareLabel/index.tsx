import * as style from './style.css';

import Text from '@/components/ui-elements/Text';

const ShareLabel: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <Text color="royalBlue" weight="bold">
                    SHARE
                </Text>
            </div>
        </div>
    );
};

export default ShareLabel;
