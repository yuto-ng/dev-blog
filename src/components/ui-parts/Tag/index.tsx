import * as style from './style.css';

import LinkText from '@/components/ui-elements/LinkText';

type Props = {
    tagName: string;
    tagId: number;
};

// TODO: タグ機能が決定したら調整
const Tag: React.FC<Props> = ({ tagName, tagId }) => {
    return (
        <div className={style.container}>
            <LinkText url={`${tagId}`} weight="normal">{`#${tagName}`}</LinkText>
        </div>
    );
};

export default Tag;
