'use client';

type Props = {
    titleText: string;
};

function CategoryTitle({ titleText }: Props) {
    return (
        <div className="w-full rounded-lg bg-royalBlue py-4 px-6">
            <h1 className="text-center text-white text-2xl md:text-3xl font-bold tracking-tight">
                {titleText}
            </h1>
        </div>
    );
}

export default CategoryTitle;
