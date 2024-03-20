import * as style from './style.css';

import Icon from '@/components/ui-elements/Icon';
import Text from '@/components/ui-elements/Text';

const ReadMoreLabel: React.FC = () => {
    return (
        <div className={style.container}>
            <Text lineHeight="s" color="white" size="xs">
                続きを読む
            </Text>
            <Icon iconName="OutlineWhiteDoubleRight" size="s"></Icon>
        </div>
    );
};

export default ReadMoreLabel;
