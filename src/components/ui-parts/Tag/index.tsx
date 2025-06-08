import LinkText from '@/components/ui-elements/LinkText';

type Props = {
    tagName: string;
    tagId: number;
};

// TODO: タグ機能が決定したら調整
function Tag({ tagName, tagId }: Props) {
    return (
        <div>
            <LinkText href={`${tagId}`}>{`#${tagName}`}</LinkText>
        </div>
    );
}

export default Tag;
