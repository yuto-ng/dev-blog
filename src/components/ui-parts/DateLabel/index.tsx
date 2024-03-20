import * as style from './style.css';

import Icon from '@/components/ui-elements/Icon';
import Text from '@/components/ui-elements/Text';

type Props = {
    postDate: Date;
};

const DateLabel: React.FC<Props> = ({ postDate }) => {
    const getFormattedDate = () => {
        const d = new Date(postDate);
        const year = d.getFullYear();
        const month = ('0' + (d.getMonth() + 1)).slice(-2);
        const day = ('0' + d.getDate()).slice(-2);
        return `${year}.${month}.${day}`;
    };

    return (
        <div className={style.container}>
            <Icon iconName="OutlineClockCircle" size="s"></Icon>
            <Text lineHeight="s">{getFormattedDate()}</Text>
        </div>
    );
};

export default DateLabel;
