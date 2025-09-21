import { ShadcnButton } from '@/components/ui/button';

type Props = {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
};

function LabelButton({ children, onClick, className }: Props) {
    return (
        <ShadcnButton className={className} onClick={onClick}>
            {children}
        </ShadcnButton>
    );
}

export default LabelButton;
