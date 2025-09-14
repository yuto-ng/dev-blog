import { ShadcnButton } from '@/components/ui/button';

type Props = {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
};

function LabelButton({ children, onClick }: Props) {
    return (
        <ShadcnButton className="" onClick={onClick}>
            {children}
        </ShadcnButton>
    );
}

export default LabelButton;
