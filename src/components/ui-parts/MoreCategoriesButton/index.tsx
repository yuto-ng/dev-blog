import LabelButton from '@/components/ui-elements/LabelButton';

type Props = {
    label: string;
};

// TODO: いらんかも
function MoreCategoriesButton({ label }: Props) {
    return <LabelButton onClick={() => {}}>{label}</LabelButton>;
}

export default MoreCategoriesButton;
