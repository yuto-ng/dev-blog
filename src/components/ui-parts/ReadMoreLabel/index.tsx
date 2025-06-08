import Icon from '@/components/ui-elements/Icon';

function ReadMoreLabel() {
    return (
        <div className="flex items-center gap-2">
            <p className="leading-7">続きを読む</p>
            <Icon iconName="doubleRight" color="white" size="s" />
        </div>
    );
}

export default ReadMoreLabel;
