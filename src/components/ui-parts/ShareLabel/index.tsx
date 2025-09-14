import { ShadcnLabel } from '@/components/ui/label';

function ShareLabel() {
    return (
        <div className="flex items-center justify-center gap-2">
            <span className="text-royalBlue font-bold text-lg transform -rotate-45 inline-block">
                |
            </span>
            <ShadcnLabel className="text-royalBlue font-bold text-lg">SHARE</ShadcnLabel>
            <span className="text-royalBlue font-bold text-lg transform rotate-45 inline-block">
                |
            </span>
        </div>
    );
}

export default ShareLabel;
