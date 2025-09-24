import Link from 'next/link';

type Props = {
    href?: string;
};

function Logo({ href = '/' }: Props) {
    return (
        <Link href={href} className="inline-block">
            <div className="w-fit border-4 border-white bg-royalBlue px-4 py-2">
                <h3 className="text-2xl font-bold italic text-white">SB-engineer</h3>
            </div>
        </Link>
    );
}

export default Logo;
