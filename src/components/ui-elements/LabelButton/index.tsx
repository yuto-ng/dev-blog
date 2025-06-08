import { ShadcnButton } from '@/components/ui/button';

type Props = {
    children: React.ReactNode;
    onClick: () => void;
};

function LabelButton({ children, onClick }: Props) {
    return (
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <ShadcnButton onClick={onClick}>{children}</ShadcnButton>
        </div>
    );
}

export default LabelButton;
